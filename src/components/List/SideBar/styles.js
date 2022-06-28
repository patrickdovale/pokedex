import styled from 'styled-components'
import SwitchInput from 'react-switch'

export const ContainerSidebar = styled.aside`
	display: flex;
	flex-direction: column;
    width: 160px;
`

export const Title = styled.h3`
	color: #808080;
    
`

export const Types = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 40px;
    padding-top: 25px;
    
`
export const Type = styled.div`
	padding: 8px;
	color: #e90200;
	border: 1px solid #e90200;
	border-radius: 25px;

    .type-select{
        color: #fff !important;
        background-color: #e90200 !important;
    }
`

export const Switch = styled(SwitchInput)`
    margin-top: 25px;
`
