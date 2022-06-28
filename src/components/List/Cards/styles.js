import styled from 'styled-components'

export const CotainerCards = styled.div`
	display: flex;
    width: 80%;
`

export const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
    flex-wrap: wrap;
`

export const Card = styled.div`
	display: flex;
	flex-direction: column;
`

export const ImageContainer = styled.div`
	width: 168px;
	height: 168px;
	background-color: #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`

export const ImagePoke = styled.img`
	width: 100%;
	height: 100%;
`

export const BodyCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
`

export const LabelNumber = styled.label`
	font-weight: lighter;
    color: #bdbdbd;
    margin-top: 4px;
`

export const LabelName = styled.h3`
	font-weight: bold;
    color: #919191;
    margin-top: 8px;
`

export const Types = styled.div`
	display: flex;
    gap: 8px;
    margin-top: 16px;
`

export const Type = styled.label`
	background: #FFA500;
    color: #000;
    padding: 8px 12px;
    border-radius:5px ;
`
