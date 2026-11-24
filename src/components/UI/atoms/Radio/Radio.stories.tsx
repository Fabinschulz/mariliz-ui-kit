import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps, useState } from 'react';
import Radio from './Radio.component';

type StoryProps = ComponentProps<typeof Radio>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Rótulo da opção, que também é o nome acessível dela'
    },
    name: {
      control: { type: 'text' },
      description: 'Nome do grupo de opções'
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Se true, a opção será renderizada como selecionada'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Determina se a opção está desabilitada'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    name: 'plano',
    value: 'mensal',
    label: 'Mensal'
  }
};

const options = [
  { value: 'mensal', label: 'Mensal' },
  { value: 'anual', label: 'Anual' },
  { value: 'vitalicio', label: 'Vitalício' }
];

const GroupExample = () => {
  const [value, setValue] = useState('mensal');

  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: 4 }}>
      <legend>Plano</legend>
      {options.map((option) => (
        <Radio
          key={option.value}
          name="plano"
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => setValue(option.value)}
        />
      ))}
    </fieldset>
  );
};

export const Group: Story = {
  args: { ...Template.args },
  render: () => <GroupExample />
};
