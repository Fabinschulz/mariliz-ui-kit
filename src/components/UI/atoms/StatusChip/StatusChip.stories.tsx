import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import StatusChip from './StatusChip.component';

type StoryProps = ComponentProps<typeof StatusChip>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      options: ['neutral', 'success', 'warning', 'danger', 'info'],
      control: { type: 'select' },
      description: 'Tom do selo'
    },
    children: {
      control: { type: 'text' },
      description: 'Texto do selo'
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: {
    tone: 'success',
    children: 'Concluído'
  }
};

export const Tones: Story = {
  args: { ...Template.args },
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusChip>Rascunho</StatusChip>
      <StatusChip tone="info">Em andamento</StatusChip>
      <StatusChip tone="success">Concluído</StatusChip>
      <StatusChip tone="warning">Com ressalvas</StatusChip>
      <StatusChip tone="danger">Falhou</StatusChip>
    </div>
  )
};
