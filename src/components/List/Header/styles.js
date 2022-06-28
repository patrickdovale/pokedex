import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderList = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ContainerSearch = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	width: 585px;
`
export const InputSearch = styled.input`
	padding: 15px;
	outline: none;
	border-radius: 16px;
	border: none;
	background-color: #f2f2f2;
	width: 100%;
	transition: all 0.1s ease-out;

	&:focus {
		border: 1px solid #e90200;
	}
`
export const IconSearch = styled(FontAwesomeIcon)`
	right: 0;
	position: absolute;
	font-size: 18px;
	color: #e90200;
	padding: 16px;
`

export const ContainerOrder = styled.div`
	display: flex;
	align-items: center;
`
export const Label = styled.label`
	margin-right: 16px;
`

export const InputSelect = styled.select`
	outline: none;
	padding: 15px;
	color: #e90200;
	border: #e90200 1px solid;
	border-radius: 25px;
	cursor: pointer;

	&:focus {
		border: #ff4f4d 1px solid;
	}
`
