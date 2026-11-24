import type { TooltipProps as MuiTooltipProps } from '@mui/material';
import type { ReactElement } from 'react';

export interface TooltipProps extends Omit<MuiTooltipProps, 'title' | 'children'> {
  /**
   * Texto da dica. Entra como descrição do elemento (`aria-describedby`), sem
   * substituir o nome acessível dele.
   * @example <Tooltip title="Abre em outra janela"><Button>Abrir</Button></Tooltip>
   */
  title: string;
  /**
   * Devolve o elemento sem a dica. Útil quando o texto já está visível na tela
   * (ex.: menu expandido) e a dica só repetiria o rótulo.
   * @default false
   */
  disabled?: boolean;
  /**
   * Elemento que recebe a dica. Precisa aceitar `ref` e repassar as props.
   */
  children: ReactElement;
}
