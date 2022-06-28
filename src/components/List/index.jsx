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
	const [pokemons, setPokemons] = useState([])

	const { isLoading, data } = useQuery('getPokemons', () => getPokemons(), {
		refetchInterval: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	})

	const filterPokemons = (
		order = 1,
		search = '',
		types = [],
		favorited = false
	) => {
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
			resultFilter = resultFilter.filter(
				(item) =>
					item.name.includes(search) ||
					item.national_number.includes(search)
			)
		}

		if (types.length > 0) {
			resultFilter = resultFilter.filter((item) =>
				types.some((type) => item.type.includes(type))
			)
		}

		switch (order) {
			case 1:
				return setPokemons(
					resultFilter.sort(
						(a, b) => a.national_number - b.national_number
					)
				)
			case 2:
				return setPokemons(
					resultFilter.sort(
						(a, b) => b.national_number - a.national_number
					)
				)
			case 3:
				return setPokemons(
					resultFilter.sort((a, b) => a.name.localeCompare(b.name))
				)
			case 4:
				return setPokemons(
					resultFilter.sort((a, b) => b.name.localeCompare(a.name))
				)
			default:
				return setPokemons(resultFilter)
		}
	}

	useEffect(() => {
		if (!isLoading) {
			filterPokemons(1, '', ['Flying', 'Poison'], false)
		}
	}, [isLoading])

	return (
		<S.SectionList>
			{!pokemons || isLoading ? (
				<img src={Loading} />
			) : (
				<S.ContainerList>
					<HeaderList />
					<S.ContainerBodyList>
						<SideBar data={data.data.results} />
						<Cards data={pokemons || []} />
					</S.ContainerBodyList>
				</S.ContainerList>
			)}
		</S.SectionList>
	)
}

export default Provider
