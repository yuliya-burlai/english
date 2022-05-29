import {defineConfig} from 'vitest/config';

const IS_CI = Boolean(process.env.CI);

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['./test/unit/**/*.test.{ts,tsx}', './test/integration/*.test.{ts,tsx}'],
        setupFiles: ['./test/setupTests.ts'],
        mockReset: true,
        reporters: ['default', 'junit'],
        outputFile: './reports/junit.xml',
        coverage: {
            enabled: IS_CI,
            reporter: 'lcov',
            reportsDirectory: 'coverage',
            cleanOnRerun: true,
            extension: ['ts', 'tsx'],
        },
    },
});