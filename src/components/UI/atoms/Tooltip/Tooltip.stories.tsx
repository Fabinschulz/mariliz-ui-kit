import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { Button } from '../Button';
import Tooltip from './Tooltip.component';

type StoryProps = ComponentProps<typeof Tooltip>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Texto da dica, lido como descrição do elemento'
    },
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      description: 'Lado em que a dica aparece'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Devolve o elemento sem a dica'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    title: 'Abre o relatório em outra janela',
    children: <Button variant="outlined">Abrir relatório</Button>
  }
};

export const Disabled: Story = {
  args: {
    ...Template.args,
    disabled: true
  }
};
