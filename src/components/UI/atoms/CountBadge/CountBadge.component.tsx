'use client';
import type { FunctionComponent } from 'react';
import type { CountBadgeProps } from './CountBadge.interface';

import { Badge, HiddenLabel } from './CountBadge.styled';

/**
 * Com `label`, o número fica só para quem vê e o leitor de tela recebe a frase:
 * dentro de um link "Execuções", o nome acessível vira "Execuções, 3 aguardando aprovação".
 */
const CountBadge: FunctionComponent<CountBadgeProps> = ({
  count,
  label,
  tone = 'neutral',
  ...props
}) => {
  return (
    <Badge tone={tone} {...props}>
      <span aria-hidden={label ? true : undefined}>{count}</span>
      {label ? <HiddenLabel>, {label}</HiddenLabel> : null}
    </Badge>
  );
};

export default CountBadge;
