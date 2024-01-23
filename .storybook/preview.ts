import type { Preview } from "@storybook/react";
import '../app/globals.css';

export const globalTypes = {
  // DaisyUI Themes
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'light', dataTheme: 'light', color: '#ffffff' },
        { name: 'dark', dataTheme: 'dark', color: '#1f2937' },
        { name: 'corporate', dataTheme: 'corporate', color: '#6b7280' },
        { name: 'halloween', dataTheme: 'halloween', color: '#ff7c39' },
        { name: 'wireframe', dataTheme: 'wireframe', color: '#ffffff' },
        { name: 'business', dataTheme: 'business', color: '#000000' }
      ]
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
