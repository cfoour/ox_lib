import { MantineThemeOverride } from '@mantine/core';
//#181b1ed1 Main Background Color
// #20C997 Main Color (teal, shade 5 in Mantine default colors)
export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  colors: {
    // override dark colors to change them for all components
    dark: [
      '#d5d7e0', // 0 Main Text Color
      '#acaebf', // 1
      '#8c8fa3', // 2
      '#CED4DA', // 3
      '#3e3e3e73', // 4 Color for Border | Disabled elements
      '#181b1ed1', // 5 Background for Progress | Skillcheck
      '#181b1ed1', // 6 Buttons color for Context | List | Radial | TextUI
      '#181b1ed1', // 7 Background color for Dialog
      '#181b1ed1', // 8
      '#181B1E00', // 9 Radial Tile Background Color (Custom change)
    ],
  },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};
