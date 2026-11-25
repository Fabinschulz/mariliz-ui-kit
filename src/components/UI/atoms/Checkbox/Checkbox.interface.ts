import { CheckboxProps as MuiCheckbox, FormControlLabelProps, SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';

export interface CheckboxProps extends MuiCheckbox {
  /**
   * Determina a Label do campo. Também é o nome acessível da opção, e pode ter
   * mais que texto (ícone, nome, etiquetas).
   * @default ''
   * @example <Checkbox label={<><Icon /> GitHub <span>conectado</span></>} />
   */
  label?: ReactNode;

  /**
   * Edita o style do FormControlLabel
   * @default {}
   * @type {SxProps<Theme> | undefined}
   */
  formControlSX?: SxProps<Theme> | undefined;

  /**
   * Props repassadas ao `FormControlLabel`, para a linha inteira ser a área
   * clicável (ex.: `className`, `aria-disabled`).
   * @example <Checkbox label="GitHub" labelProps={{ className: 'linha' }} />
   */
  labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;

  /**
   * Determina se o skeleton do checkbox deve ser exibido.
   * @default false
   * @example <Checkbox skeleton />
   */
  skeleton?: boolean;
}
