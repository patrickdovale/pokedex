import React, { useState, useEffect } from 'react'
import * as S from './styles'
import HeaderList from './Header'
import SideBar from './SideBar'
import Cards from './Cards'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import getPokemons from 'services/list'
import Loading from 'assents/imagens/loading.gif'

const queryClient = new QueryClient()

const Provider = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<List />
		</QueryClientProvider>
	)
}

function List() {
	const [loading, setLoading] = useState(false)
	const [pokemons, setPokemons] = useState([])
	const [itemsFavorited, setItemsFavorited] = useState([])
	const [formFilter, setFormFilter] = useState({
		order: '1',
		search: '',
		types: [],
		favorited: false,
	})

	const { isLoading, data } = useQuery('getPokemons', () => getPokemons(), {
		refetchInterval: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	})

	const filterPokemons = (
		order = formFilter.order,
		search = formFilter.search,
		types = formFilter.types,
		favorited = formFilter.favorited
	) => {
		setLoading(true)
		let resultFilter = [
			...new Map(
				data.data.results.map((obj) => [`${obj.national_number}`, obj])
			).values(),
		]

		if (search) {
			resultFilter = resultFilter.filter(
				(item) =>
					item.name.includes(search) ||
					item.national_number === search
			)
		}

		if (favorited) {
			let favorit = JSON.parse(localStorage.getItem('FAVORITED')) || []

			resultFilter = resultFilter.filter((item) =>
				favorit.some((id) => id === item.national_number)
			)
		}

		if (types.length > 0) {
			resultFilter = resultFilter.filter((item) =>
				types.some((type) => item.type.includes(type))
			)
		}

		switch (order) {
			case '1':
				setPokemons(
					resultFilter.sort(
						(a, b) => a.national_number - b.national_number
					)
				)
				return setLoading(false)
			case '2':
				setPokemons(
					resultFilter.sort(
						(a, b) => b.national_number - a.national_number
					)
				)
				return setLoading(false)
			case '3':
				setPokemons(
					resultFilter.sort((a, b) => a.name.localeCompare(b.name))
				)
				return setLoading(false)
			case '4':
				setPokemons(
					resultFilter.sort((a, b) => b.name.localeCompare(a.name))
				)
				return setLoading(false)
			default:
				setPokemons(resultFilter)
				return setLoading(false)
		}
	}

	useEffect(() => {
		if (!isLoading) {
			filterPokemons(
				formFilter.order,
				formFilter.search,
				formFilter.types,
				formFilter.favorited
			)
		}
	}, [isLoading])

	useEffect(() => {
		if (!isLoading) {
			filterPokemons(
				formFilter.order,
				formFilter.search,
				formFilter.types,
				formFilter.favorited
			)
		}
	}, [formFilter])

	return (
		<S.SectionList>
			{!pokemons || isLoading ? (
				<img src={Loading} />
			) : (
				<S.ContainerList>
					<HeaderList
						formFilter={formFilter}
						setFormFilter={setFormFilter}
					/>
					<S.ContainerBodyList>
						<SideBar
							formFilter={formFilter}
							setFormFilter={setFormFilter}
						/>
						<Cards
							data={pokemons}
							itemsFavorited={itemsFavorited}
							setItemsFavorited={setItemsFavorited}
							loading={loading}
						/>
					</S.ContainerBodyList>
				</S.ContainerList>
			)}
		</S.SectionList>
	)
}

export default Provider
