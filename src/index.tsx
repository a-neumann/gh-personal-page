import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

const theme: Theme = {
    color: {
        primary: "#000fff"
    }
};

const TestHeadline = styled.h1(({ theme }) => ({
    color: theme.color.primary
}));

createRoot(document.querySelector("#root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <TestHeadline>Test</TestHeadline>
        </ThemeProvider>
    </StrictMode>
);
