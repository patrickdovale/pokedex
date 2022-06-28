import React from 'react'
import * as S from './styles'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function HeaderList() {
	return (
		<S.HeaderList>
			<S.ContainerSearch>
				<S.InputSearch
					placeholder="Pesquise por nome ou número"
					type="text"
				/>
				<S.IconSearch icon={faMagnifyingGlass} />
			</S.ContainerSearch>

			<S.ContainerOrder>
				<S.Label>Ordernar por</S.Label>
				<S.InputSelect>
					<option>Menor número primeiro</option>
					<option>Maior Número Primeiro</option>
					<option>Ordem alfabético A-Z</option>
					<option>Ordem alfabético Z-A</option>
				</S.InputSelect>
			</S.ContainerOrder>
		</S.HeaderList>
	)
}
