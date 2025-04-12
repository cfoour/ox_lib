import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  colors: {
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
    cyan: [
      '#E0F7FA', // 0
      '#B2EBF2', // 1
      '#80DEEA', // 2
      '#4DD0E1', // 3
      '#26C6DA', // 4
      '#00BCD4', // 5
      '#00ACC1', // 6
      '#0097A7', // 7
      '#00838F', // 8
      '#006064', // 9
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
