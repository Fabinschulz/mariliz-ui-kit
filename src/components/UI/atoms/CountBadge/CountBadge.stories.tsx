import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import CountBadge from './CountBadge.component';

type StoryProps = ComponentProps<typeof CountBadge>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/CountBadge',
  component: CountBadge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number' },
      description: 'Número mostrado no selo'
    },
    label: {
      control: { type: 'text' },
      description: 'O que o número conta, para o leitor de tela'
    },
    tone: {
      options: ['neutral', 'success', 'warning', 'danger', 'info'],
      control: { type: 'select' },
      description: 'Tom do selo'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    count: 3,
    label: '3 aguardando aprovação',
    tone: 'warning'
  }
};
