'use client';
import { alpha, styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    ...theme.typography.body2,
    // Flexível para o rótulo caber ícone, nome e etiquetas; com só texto, nada muda.
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    flex: 1,
    minWidth: 0,
    lineHeight: 1.2,
    color: theme.palette?.neutral?.darkest,
    '&.Mui-disabled': {
      color: theme.palette?.neutral?.light
    }
  }
}));

export const StyledCheckbox = styled(Checkbox)(({ theme, size }) => ({
  padding: size === 'small' ? '6.675px' : '8px',
  margin: size === 'small' ? '3px' : undefined,
  color: theme.palette?.neutral?.dark,
  '& .MuiSvgIcon-root': {
    borderRadius: '6px',
    fontSize: '24px',
    '&.MuiSvgIcon-fontSizeSmall': {
      fontSize: '18.67px'
    }
  },
  '&.Mui-disabled': {
    color: theme.palette?.neutral?.light
  },
  '&:not(.Mui-disabled)': {
    '&.Mui-checked, &.MuiCheckbox-indeterminate': {
      '&.MuiCheckbox-colorPrimary': {
        color: theme.palette?.primary?.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette?.secondary?.dark, 0.08)
        }
      },
      '&.MuiCheckbox-colorSecondary': {
        color: theme.palette?.error?.light,
        '&:hover': {
          backgroundColor: alpha(theme.palette?.error?.light, 0.08)
        }
      }
    }
  }
}));

// Alinhada ao texto do rótulo, não à caixa: a largura da caixa mais o recuo negativo do FormControlLabel.
export const StyledDescription = styled('span', { shouldForwardProp: (prop) => prop !== 'size' })<{
  size?: 'small' | 'medium' | string;
}>(({ theme, size }) => ({
  // Como nota secundária: tamanho do caption, sem o peso dele, e a cor de texto secundário que o Radio já usa (nem todo
  // tema define a paleta `neutral`).
  ...theme.typography.body2,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  lineHeight: 1.4,
  display: 'block',
  paddingLeft: size === 'small' ? '27px' : '29px',
  color: theme.palette.text.secondary
}));
