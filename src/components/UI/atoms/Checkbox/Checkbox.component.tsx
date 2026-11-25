'use client';
import type { FunctionComponent } from 'react';
import type { CheckboxProps } from './Checkbox.interface';
import { FormGroup } from '@mui/material';
import { StyledCheckbox, StyledFormControlLabel } from './Checkbox.styled';
import CheckboxSkeleton from './Checkbox.skeleton';

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { label, name, formControlSX, labelProps, skeleton = false, ...rest } = props;

  return (
    <CheckboxSkeleton skeleton={skeleton}>
      <FormGroup>
        <StyledFormControlLabel
          {...labelProps}
          sx={{ ...formControlSX }}
          control={<StyledCheckbox {...rest} />}
          label={label}
          data-testid={name}
          name={name}
        />
      </FormGroup>
    </CheckboxSkeleton>
  );
};
export default Checkbox;
