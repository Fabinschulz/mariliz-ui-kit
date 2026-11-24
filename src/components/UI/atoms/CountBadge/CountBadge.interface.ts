import type { HTMLAttributes } from 'react';
import type { Tone } from '../../../../utils';

export interface CountBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /**
   * Número (ou texto curto) mostrado no selo
   * @example <CountBadge count={3} />
   */
  count: number | string;
  /**
   * O que o número conta. É lido pelo leitor de tela no lugar do número solto,
   * junto do nome do elemento em que o selo está.
   * @example <CountBadge count={3} label="3 aguardando aprovação" />
   */
  label?: string;
  /**
   * Tom do selo
   * @default 'neutral'
   */
  tone?: Tone;
}
