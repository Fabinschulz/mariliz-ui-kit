import type { HTMLAttributes, ReactNode } from 'react';
import type { Tone } from '../../../../utils';

export interface StatusChipProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Tom do selo. O texto é quem diz o estado; a cor só reforça.
   * @default 'neutral'
   * @example <StatusChip tone="success">Concluído</StatusChip>
   */
  tone?: Tone;
  /**
   * Texto do selo
   */
  children: ReactNode;
}
