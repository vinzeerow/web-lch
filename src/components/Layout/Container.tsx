import styled from 'styled-components'

const Container: React.FC<React.PropsWithChildren> = ({ children, ...props }) => (
    <CsBox {...props}>
        {children}
    </CsBox>
)

export default Container

const CsBox = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    max-width: 1320px;
    @media screen and (min-width: 821px) and (max-width: 1024px) {
        padding: 0px 20px 0px 20px !important;
    }
    @media screen and (max-width:600px) {
        padding:0px 12px;
    }
`
