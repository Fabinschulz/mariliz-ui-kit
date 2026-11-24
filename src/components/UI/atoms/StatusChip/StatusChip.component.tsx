'use client';
import type { FunctionComponent } from 'react';
import type { StatusChipProps } from './StatusChip.interface';

import { Chip } from './StatusChip.styled';

const StatusChip: FunctionComponent<StatusChipProps> = ({
  tone = 'neutral',
  children,
  ...props
}) => {
  return (
    <Chip tone={tone} {...props}>
      {children}
    </Chip>
  );
};

export default StatusChip;
