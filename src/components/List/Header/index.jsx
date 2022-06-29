import React from 'react'
import * as S from './styles'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable react/prop-types */
export default function HeaderList(props) {
	const { formFilter, setFormFilter } = props

	function handleChange(e) {
		let { name, value } = e.target
		setFormFilter({ ...formFilter, [name]: value })
	}

	return (
		<S.HeaderList>
			<S.ContainerSearch>
				<S.InputSearch
					placeholder="Pesquise por nome ou número"
					type="text"
					name="search"
					onChange={(e) => handleChange(e)}
				/>
				<S.IconSearch icon={faMagnifyingGlass} />
			</S.ContainerSearch>

			<S.ContainerOrder>
				<S.Label>Ordernar por</S.Label>
				<S.InputSelect name="order" onChange={(e) => handleChange(e)}>
					<option value={1}>Menor número primeiro</option>
					<option value={2}>Maior Número Primeiro</option>
					<option value={3}>Ordem alfabético A-Z</option>
					<option value={4}>Ordem alfabético Z-A</option>
				</S.InputSelect>
			</S.ContainerOrder>
		</S.HeaderList>
	)
}
