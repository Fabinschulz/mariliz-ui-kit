import { SelectProps as MuiSelectProps } from '@mui/material';

export interface SelectFieldOption {
  /** Texto exibido. */
  label: string;

  /** Valor enviado no `onChange`. */
  value: string | number;
}

export type SelectFieldProps = MuiSelectProps & {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   * @example <Select label="Nome" />
   */
  label?: string;

  /**
   * Ocupa toda a largura do contêiner. Com `false`, o campo fica com a largura do
   * conteúdo (ou a que `sx` definir), e vários campos cabem lado a lado, como
   * numa linha de filtros.
   * @default true
   * @example <SelectField fullWidth={false} sx={{ minWidth: '12rem' }} />
   */
  fullWidth?: boolean;

  /**
   * Tamanho do campo: `small` tem 40px de altura, `medium` 56px.
   * @default 'medium'
   * @example <SelectField size="small" />
   */
  size?: 'small' | 'medium';

  /**
   * Determina se o campo é obrigatorio
   * @default false
   * @type {boolean}
   * @example <Select required />
   */
  required?: boolean;

  /**
   * Itens em que o texto exibido também é o valor.
   * Para separar texto e valor, use `options`.
   * @default []
   * @example <Select items={['Opção 1', 'Opção 2', 'Opção 3']} />
   */
  items?: string[];

  /**
   * Opções com texto e valor separados. Tem prioridade sobre `items`.
   * @example <Select options={[{ label: 'Ativo', value: 1 }, { label: 'Inativo', value: 0 }]} />
   */
  options?: SelectFieldOption[];

  /**
   * Texto exibido (desabilitado) quando não há opções.
   * @default 'Nenhuma opção encontrada'
   */
  noOptionsText?: string;
};
