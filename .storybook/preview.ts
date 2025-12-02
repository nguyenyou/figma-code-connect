import { definePreview } from '@storybook/react-vite'
import addonA11y from '@storybook/addon-a11y';

import '../src/index.css'

export default definePreview({
  // 👇 Add your addons here
  addons: [addonA11y()],
  parameters: {
    // type-safe!
    a11y: {
      options: { xpath: true },
    },
  },
});