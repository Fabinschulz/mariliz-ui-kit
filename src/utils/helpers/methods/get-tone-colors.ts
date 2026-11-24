import type { Theme } from '@mui/material/styles';
import { alpha, getContrastRatio } from '@mui/material/styles';

export type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

const paletteKey = {
  success: 'success',
  warning: 'warning',
  danger: 'error',
  info: 'info'
} as const;

// Contraste mínimo de texto normal no WCAG 2.2 AA.
const MIN_CONTRAST = 4.5;

/**
 * Par de cores (texto e fundo) de um tom, a partir da paleta do tema. Usa a cor
 * principal (`main`) quando ela já é legível sobre a superfície; senão, a
 * variação (`light` ou `dark`) de maior contraste, para o texto continuar
 * legível no tema claro e no escuro.
 */
export const getToneColors = (theme: Theme, tone: Tone = 'neutral') => {
  if (tone === 'neutral') {
    return { color: theme.palette.text.secondary, backgroundColor: theme.palette.action.selected };
  }

  const { light, main, dark } = theme.palette[paletteKey[tone]];
  const surface = theme.palette.background.paper;
  const contrast = (candidate: string) => getContrastRatio(candidate, surface);
  const color =
    contrast(main) >= MIN_CONTRAST
      ? main
      : [light, dark].reduce(
          (best, candidate) => (contrast(candidate) > contrast(best) ? candidate : best),
          main
        );

  return { color, backgroundColor: alpha(color, 0.14) };
};
