import React from 'react';
import { render } from '@testing-library/react';
import { theme, Box } from '..';
import { ThemeProvider, Base } from '.';
describe('ThemeProvider', () => {
    describe('ThemeProvider: ThemeProvider', () => {
        it('should render correctly without throwing', () => {
            expect(() => {
                const { asFragment } = render(React.createElement(ThemeProvider, null));
                expect(asFragment()).toMatchSnapshot();
            }).not.toThrow();
        });
        it('should handle the "customBreakpoints" prop', () => {
            expect(() => {
                const { asFragment, getByTestId } = render(React.createElement(ThemeProvider, { customBreakpoints: ['20em', '32em', '48em', '64em'] },
                    React.createElement(Box, { width: [1, 1 / 2, 1 / 4], "data-testid": 'ResponsiveBox' })));
                expect(asFragment()).toMatchSnapshot();
                const ResponsiveBox = getByTestId('ResponsiveBox');
                expect(ResponsiveBox).toHaveStyleRule('width', '100%');
                expect(ResponsiveBox).toHaveStyleRule('width', '50%', {
                    media: 'screen and (min-width:20em)',
                });
                expect(ResponsiveBox).toHaveStyleRule('width', '25%', {
                    media: 'screen and (min-width:32em)',
                });
            }).not.toThrow();
        });
    });
    describe('ThemeProvider: Base', () => {
        it('should render correctly with a "font-family" rule', () => {
            expect(() => {
                const { asFragment, container } = render(React.createElement(ThemeProvider, null,
                    React.createElement(Base, null)));
                expect(asFragment()).toMatchSnapshot();
                expect(container.firstChild).toHaveStyleRule('font-family', theme.font);
            }).not.toThrow();
        });
    });
});
//# sourceMappingURL=ThemeProvider.spec.js.map