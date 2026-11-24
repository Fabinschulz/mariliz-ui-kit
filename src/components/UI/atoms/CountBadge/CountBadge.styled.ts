'use client';
import { styled } from '@mui/material/styles';
import type { Tone } from '../../../../utils';
import { getToneColors } from '../../../../utils';

export const Badge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'tone'
})<{ tone: Tone }>(({ theme, tone }) => ({
  ...getToneColors(theme, tone),
  display: 'inline-flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '1.25rem',
  padding: `0 ${theme.spacing(0.75)}`,
  borderRadius: 6,
  fontSize: '0.6875rem',
  fontWeight: 500,
  lineHeight: '1.25rem'
}));

export const HiddenLabel = styled('span')({
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0
});
