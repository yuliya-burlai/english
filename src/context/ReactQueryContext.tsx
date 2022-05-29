import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';

export const newQueryClient = new QueryClient();

interface ReactQueryContextProps {
    children: any;
    queryClient?: QueryClient;
}

export const ReactQueryContext: React.FC<ReactQueryContextProps> = ({children, queryClient = newQueryClient}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    );
};
