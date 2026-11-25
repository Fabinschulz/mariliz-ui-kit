'use client';
import { useId, type FunctionComponent } from 'react';
import type { CheckboxProps } from './Checkbox.interface';
import { FormGroup } from '@mui/material';
import { StyledCheckbox, StyledDescription, StyledFormControlLabel } from './Checkbox.styled';
import CheckboxSkeleton from './Checkbox.skeleton';

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const {
    label,
    description,
    name,
    formControlSX,
    labelProps,
    skeleton = false,
    slotProps,
    ...rest
  } = props;
  const descriptionId = useId();
  const input = (slotProps?.input ?? {}) as Record<string, unknown>;
  // A descrição soma ao que quem usa já ligou ao campo, em vez de substituir.
  const describedBy = [input['aria-describedby'], description ? descriptionId : null]
    .filter(Boolean)
    .join(' ');

  return (
    <CheckboxSkeleton skeleton={skeleton}>
      <FormGroup>
        <StyledFormControlLabel
          {...labelProps}
          sx={{ ...formControlSX }}
          control={
            <StyledCheckbox
              {...rest}
              slotProps={{
                ...slotProps,
                input: { ...input, 'aria-describedby': describedBy || undefined }
              }}
            />
          }
          label={label}
          data-testid={name}
          name={name}
        />
        {description ? (
          <StyledDescription id={descriptionId} size={rest.size}>
            {description}
          </StyledDescription>
        ) : null}
      </FormGroup>
    </CheckboxSkeleton>
  );
};
export default Checkbox;
