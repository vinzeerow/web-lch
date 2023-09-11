import styled from 'styled-components'
import Container from '../Layout/Container'

const StyledPage = styled(Container)`
    min-height: calc(100vh - 64px);
    padding-bottom: 16px;
    padding-left: 0px;
    padding-right: 0px;
    @media screen and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        overflow-x: hidden;
    }
`

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    symbol?: string
}

const Page: React.FC<React.PropsWithChildren<PageProps>> = ({ children, symbol, ...props }) => {
    return (
        <>
            {/* <PageMeta symbol={symbol} /> */}
            <StyledPage {...props}>{children}</StyledPage>
        </>
    )
}

export default Page
