'use client';
import { styled } from '@mui/material/styles';
import type { Tone } from '../../../../utils';
import { getToneColors } from '../../../../utils';

export const Chip = styled('span', {
  shouldForwardProp: (prop) => prop !== 'tone'
})<{ tone: Tone }>(({ theme, tone }) => ({
  ...getToneColors(theme, tone),
  display: 'inline-block',
  padding: `1px ${theme.spacing(1)}`,
  borderRadius: 999,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: 600,
  lineHeight: 1.5,
  whiteSpace: 'nowrap'
}));
