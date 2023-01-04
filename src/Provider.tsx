import { ThemeProvider } from "styled-components";

import { GLOBAL_CSS_VARIABLES } from "./config/config";

interface ProviderProps {
    children: React.ReactNode
}

const theme = {
    ...GLOBAL_CSS_VARIABLES
}


export const Provider = ( { children } : ProviderProps ) => {
    return (
        <ThemeProvider theme={ theme }>
            { children }
        </ThemeProvider>
    )
}