'use client';
import type { FunctionComponent } from 'react';
import type { TooltipProps } from './Tooltip.interface';

import { Tooltip as MuiTooltip } from '@mui/material';

/**
 * A dica descreve sem renomear: o elemento mantém o próprio nome acessível e a
 * dica entra apenas como descrição (`describeChild`).
 */
const Tooltip: FunctionComponent<TooltipProps> = ({
  title,
  placement = 'top',
  disabled = false,
  children,
  ...props
}) => {
  if (disabled) return children;

  return (
    <MuiTooltip title={title} placement={placement} describeChild disableInteractive {...props}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
