import React from 'react'
import * as S from './styles'
import HeaderList from './Header'

export default function List() {
	return (
		<S.SectionList>
			<S.ContainerList>
				<HeaderList />
			</S.ContainerList>
		</S.SectionList>
	)
}
