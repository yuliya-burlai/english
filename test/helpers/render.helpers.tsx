import React, {ReactElement} from 'react';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router';
import {ReactQueryContext} from '../../src/context/ReactQueryContext';
import {QueryClient} from 'react-query/core';

interface RenderWithContextsRouterConfig {
    entries?: string[];
    path?: string;
}

interface RenderWithContextsConf {
    router?: RenderWithContextsRouterConfig;
    reactQuery?: boolean;
}

export const renderWithContexts = (ui: ReactElement, config: RenderWithContextsConf) => {
    let history;
    let component = ui;

    if (config?.reactQuery) {
        component = wrapWithReactQuery(component);
    }

    if (config?.router) {
        const uiWithHistory = wrapWithRouter(component, config.router);
        component = uiWithHistory.component;
        history = uiWithHistory.history;
    }

    const renderResult = render(component);
    return {...renderResult, history};
};

const wrapWithRouter = (ui: ReactElement, config: RenderWithContextsRouterConfig) => {
    let component = ui;

    const {entries = [], path} = config;

    if (path) {
        component = <Route path={path}>{component}</Route>;
    }

    const history = createMemoryHistory({initialEntries: entries});
    component = <Router history={history}>{component}</Router>;

    return {component, history};
};

const wrapWithReactQuery = (ui: ReactElement) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    queryClient.clear();
    return <ReactQueryContext queryClient={queryClient}>{ui}</ReactQueryContext>;
};
