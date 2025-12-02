import preview from '#.storybook/preview';

import { Button } from "./Button";

const meta = preview.meta({ component: Button });

export const Primary = meta.story({
  args: { label: "Button", primary: true },
});

export const Secondary = meta.story({
  args: { label: "Second", primary: true },
});

