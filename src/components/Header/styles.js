import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = styled.header`
	display: flex;
	width: 100%;
	height: 100px;
	text-align: center;
	justify-content: center;
	background-color: #e90200;
	margin-bottom: 50px;
`

export const ContainerHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 1210px;
`

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: static;
	transform: none;
`

export const LogoLink = styled(Link)`
	width: 100%;
`

export const Logo = styled.img`
	width: 250px;
	transition: all 0.3s ease-in-out;
	filter: grayscale(1) invert(1);

	&:hover {
		filter: grayscale(0) invert(0);
	}
`

export const UserContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const IconUser = styled(FontAwesomeIcon)`
	font-size: 24px;
    color: #595959;
`

export const User = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	border-radius: 25px;
	background-color: #fff;
	margin-right: 16px;
	transition: all 0.3s ease-in-out;
    cursor: pointer;

	&:hover {
		background-color: #d3d3d3;
	}
`

export const Logout = styled(FontAwesomeIcon)`
	font-size: 20px;
	cursor: pointer;
	color: #fff;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #d3d3d3;
	}
`
