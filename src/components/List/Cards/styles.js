import styled from 'styled-components'

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

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
	background: ${props => colours[props.theme]};
    color: #000;
    padding: 8px 12px;
    border-radius:5px ;
`