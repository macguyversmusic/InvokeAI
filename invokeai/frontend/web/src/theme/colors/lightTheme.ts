import { generateColorPalette } from '../util/generateColorPalette';

export const lightThemeColors = {
  base: generateColorPalette(223, 10, true),
  accent: generateColorPalette(40, 80, true),
  working: generateColorPalette(47, 68, true),
  warning: generateColorPalette(28, 75, true),
  ok: generateColorPalette(122, 49, true),
  error: generateColorPalette(0, 50, true),
};
