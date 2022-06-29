import React from 'react'
import * as S from './styles'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable react/prop-types */
export default function SideBar(props) {
	const { formFilter, setFormFilter } = props
	const types = [
		'Normal',
		'Fire',
		'Water',
		'Electric',
		'Grass',
		'Ice',
		'Fighting',
		'Poison',
		'Ground',
		'Flying',
		'Psychic',
		'Bug',
		'Rock',
		'Ghost',
		'Dragon',
		'Dark',
		'Steel',
		'Fairy',
	]

	const checkSelected = (type) => {
		return formFilter.types.some((selects) => selects === type)
	}

	function handleChangeFilter(type) {
		let types = formFilter.types
		if (formFilter.types.some((item) => item === type)) {
			let index = types.findIndex((item) => item === type)
			types.splice(index, 1)
			return setFormFilter({ ...formFilter, types: types })
		}
		types.push(...types, type)
		return setFormFilter({ ...formFilter, types: types })
	}

	return (
		<S.ContainerSidebar>
			<S.Title>Filtrar por Tipo</S.Title>
			<S.Types>
				{types.map((type) => (
					<S.Type
						key={type}
						value={type}
						select={checkSelected(type) ? 'type-select' : null}
						onClick={() => handleChangeFilter(type)}
					>
						{type}
						{checkSelected(type) ? (
							<S.IconCheck icon={faCheck} />
						) : (
							<></>
						)}
					</S.Type>
				))}
			</S.Types>
			<S.Title>Filtrar Favoritos</S.Title>
			<S.Switch
				type="switch"
				checked={Boolean(formFilter.favorited)}
				onChange={() =>
					setFormFilter({
						...formFilter,
						favorited: !formFilter.favorited,
					})
				}
				uncheckedIcon={false}
				checkedIcon={false}
				onColor="#e90200"
				onHandleColor="#e0e0e0"
				boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
				activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
			/>
		</S.ContainerSidebar>
	)
}
