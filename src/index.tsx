import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { HashRouter, Link, Route, Routes } from "react-router";

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
            <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <div>
                                <TestHeadline>Feels good man</TestHeadline>
                                <img src="assets/feelsgoodman.png" alt="Feels good man" style={{ width: 300 }} />
                                <ul>
                                    <li>
                                        <Link to="/test">Test page</Link>
                                    </li>
                                    <li>
                                        <Link to="/test2">Test page 2</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                    <Route
                        path="/test"
                        element={(
                            <div>
                                <TestHeadline>Test</TestHeadline>
                                <img src="assets/feelsgoodman.png" alt="Feels good man" style={{ width: 300 }} />
                                <ul>
                                    <li>
                                        <Link to="/">Home page</Link>
                                    </li>
                                    <li>
                                        <Link to="/test2">Test page 2</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                    <Route
                        path="/test2"
                        element={(
                            <div>
                                <TestHeadline>Test 2</TestHeadline>
                                <img src="assets/feelsgoodman.png" alt="Feels good man" style={{ width: 300 }} />
                                <ul>
                                    <li>
                                        <Link to="/">Home page</Link>
                                    </li>
                                    <li>
                                        <Link to="/test">Test page</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    </StrictMode>
);
