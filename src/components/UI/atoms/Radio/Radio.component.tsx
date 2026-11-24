'use client';
import type { FunctionComponent } from 'react';
import type { RadioProps } from './Radio.interface';

import { StyledFormControlLabel, StyledRadio } from './Radio.styled';

/**
 * O `input` continua nativo por baixo, com nome, estado e teclado do navegador.
 * Agrupe as opções em um `fieldset` com `legend` para o grupo ter nome acessível.
 */
const Radio: FunctionComponent<RadioProps> = ({
  label,
  name,
  formControlSX,
  labelProps,
  ...props
}) => {
  return (
    <StyledFormControlLabel
      {...labelProps}
      sx={formControlSX}
      label={label}
      control={<StyledRadio name={name} {...props} />}
    />
  );
};

export default Radio;
