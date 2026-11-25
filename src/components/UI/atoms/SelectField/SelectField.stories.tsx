import type { Meta } from '@storybook/nextjs';
import { ComponentProps, useState } from 'react';
import SelectField from './SelectField.component';
import { SelectChangeEvent } from '@mui/material';
import { selectMock } from './SelectField.mock';

type StoryProps = ComponentProps<typeof SelectField>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    items: { control: 'multi-select' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant: { control: 'radio', options: ['standard', 'filled', 'outlined'] },
    size: { control: 'radio', options: ['medium', 'small'] },
    fullWidth: { control: 'boolean' },
    multiple: { control: 'boolean' },
    value: { control: 'text' }
  },
  args: selectMock
};

export default meta;

export const Template = ({ onChange, ...props }: StoryProps) => {
  const [value, setValue] = useState<string | string[] | null>(null);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string | string[]);
  };

  return <SelectField value={value} onChange={handleChange} {...props} />;
};

export const FilterRow = () => {
  const [kind, setKind] = useState('all');
  const [state, setState] = useState('all');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <SelectField
        label="Tipo"
        size="small"
        fullWidth={false}
        sx={{ minWidth: '12rem' }}
        value={kind}
        onChange={(event) => setKind(String(event.target.value))}
        options={[
          { label: 'Todos os tipos', value: 'all' },
          { label: 'Validação', value: 'validate' }
        ]}
      />
      <SelectField
        label="Estado"
        size="small"
        fullWidth={false}
        sx={{ minWidth: '12rem' }}
        value={state}
        onChange={(event) => setState(String(event.target.value))}
        options={[
          { label: 'Todos os estados', value: 'all' },
          { label: 'Falhou', value: 'failed' }
        ]}
      />
    </div>
  );
};
