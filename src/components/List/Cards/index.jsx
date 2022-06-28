import React from 'react'
import * as S from './styles'

/* eslint-disable react/prop-types */
export default function Cards(props) {
	const { data } = props

	return (
		<S.CotainerCards>
			<S.Cards>
				{data?.map((item) => {
					return (
						<S.Card key={item?.national_number}>
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
										<S.Type key={item}>{item}</S.Type>
									))}
								</S.Types>
							</S.BodyCard>
						</S.Card>
					)
				})}
			</S.Cards>
		</S.CotainerCards>
	)
}
