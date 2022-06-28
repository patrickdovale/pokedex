import React, { useEffect } from 'react'
import * as S from './styles'

/* eslint-disable react/prop-types */
export default function SideBar(props) {
	const types = ['Bug', 'Dark', 'Dragon', 'Eletric', 'Fairy']
	const typesSelected = ['Dark', 'Bug']

	const checkSelected = (type) =>
		typesSelected.find((selects) => selects === type)

	useEffect(() => {}, [props.data])

	return (
		<S.ContainerSidebar>
			<S.Title>Filtrar por Tipo</S.Title>
			<S.Types>
				{types.map((type) => (
					<S.Type
						key={type}
						value={type}
						className={checkSelected(type) ? 'type-select' : null}
					>
						{type}
						{checkSelected(type) ? ' ok' : null}
					</S.Type>
				))}
			</S.Types>
			<S.Title>Filtrar Favoritos</S.Title>
			<S.Switch
				type="switch"
				checked={true}
				// onChange={handleChange}
				uncheckedIcon={false}
				checkedIcon={false}
				onColor="#e90200"
				onHandleColor="#e0e0e0"
				boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
				activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
				// id={name}
			/>
		</S.ContainerSidebar>
	)
}
