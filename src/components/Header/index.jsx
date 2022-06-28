import React from 'react'
import * as S from './styles'
import Logo from 'assents/imagens/logo.svg'
import {
	faArrowRightFromBracket,
	faUser,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	return (
		<S.Header>
			<S.ContainerHeader>
				<S.LogoContainer>
					<S.LogoLink to="/">
						<S.Logo src={Logo} alt="Logo pokedex" />
					</S.LogoLink>
				</S.LogoContainer>
				<S.UserContainer>
					<S.User>
						<S.IconUser icon={faUser} />
					</S.User>
					<S.Logout icon={faArrowRightFromBracket} />
				</S.UserContainer>
			</S.ContainerHeader>
		</S.Header>
	)
}
