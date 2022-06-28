import React from 'react'
import * as S from './styles'
import HeaderList from './Header'
import SideBar from './SideBar'
import Cards from './Cards'

export default function List() {
	return (
		<S.SectionList>
			<S.ContainerList>
				<HeaderList />
				<S.ContainerBodyList>
					<SideBar />
					<Cards />
				</S.ContainerBodyList>
			</S.ContainerList>
		</S.SectionList>
	)
}
