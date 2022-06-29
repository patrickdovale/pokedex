import React, { useEffect } from 'react'
import * as S from './styles'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable react/prop-types */
export default function Cards(props) {
	const { data, itemsFavorited, setItemsFavorited, loading } = props

	function favorited(id) {
		let favorit = JSON.parse(localStorage.getItem('FAVORITED')) || []

		if (favorit.some((item) => item === id)) {
			let index = favorit.findIndex((item) => item === id)
			favorit.splice(index, 1)
			localStorage.setItem('FAVORITED', JSON.stringify(favorit))
			return setItemsFavorited(
				JSON.parse(localStorage.getItem('FAVORITED')) || []
			)
		} else {
			localStorage.setItem(
				'FAVORITED',
				JSON.stringify([...itemsFavorited, id])
			)
			return setItemsFavorited(
				JSON.parse(localStorage.getItem('FAVORITED')) || []
			)
		}
	}

	useEffect(() => {
		setItemsFavorited(JSON.parse(localStorage.getItem('FAVORITED')) || [])
	}, [])

	return (
		<S.CotainerCards>
			{!loading ? (
				<S.Cards>
					{data?.map((item) => {
						return (
							<S.Card key={item?.national_number}>
								<S.IconFavorited
									icon={faHeart}
									visible={itemsFavorited.some(
										(id) => id === item?.national_number
									)}
									onClick={() =>
										favorited(item?.national_number)
									}
								/>
								<S.ImageContainer>
									<S.ImagePoke
										src={item?.sprites.large}
										alt="pokemon"
									/>
								</S.ImageContainer>
								<S.BodyCard>
									<S.LabelNumber>
										#{item?.national_number}
									</S.LabelNumber>
									<S.LabelName>{item?.name}</S.LabelName>
									<S.Types>
										{item?.type.map((item) => (
											<S.Type
												key={item}
												theme={item.toLowerCase()}
											>
												{item}
											</S.Type>
										))}
									</S.Types>
								</S.BodyCard>
							</S.Card>
						)
					})}
				</S.Cards>
			) : (
				<>Carregando</>
			)}
		</S.CotainerCards>
	)
}
