import styled from 'styled-components';
import { Header } from './header';

interface LayoutProps {
    children: React.ReactNode
}

// ====================
// Page layout
// ====================

export const Layout = ( { children }: LayoutProps ) => {
    return (
        <MainContainer>
            <Header />
            { children }
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vw;
    overflow: hidden;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
`