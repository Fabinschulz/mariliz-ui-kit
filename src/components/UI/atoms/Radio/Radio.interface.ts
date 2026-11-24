import type {
  FormControlLabelProps,
  RadioProps as MuiRadioProps,
  SxProps,
  Theme
} from '@mui/material';
import type { ReactNode } from 'react';

export interface RadioProps extends Omit<MuiRadioProps, 'name'> {
  /**
   * Rótulo da opção. Também é o nome acessível dela.
   * @example <Radio name="plano" value="anual" label="Anual" />
   */
  label: ReactNode;
  /**
   * Nome do grupo. Opções com o mesmo `name` são exclusivas entre si e as setas
   * do teclado andam entre elas.
   */
  name: string;
  /**
   * Estilos do rótulo (`FormControlLabel`).
   */
  formControlSX?: SxProps<Theme>;
  /**
   * Props repassadas ao `FormControlLabel`, para a linha inteira ser a área clicável.
   */
  labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
}
