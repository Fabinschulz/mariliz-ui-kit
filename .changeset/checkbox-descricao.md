---
'@mariliz/ui-kit': minor
---

feat(Checkbox): `description`, uma explicação abaixo do rótulo

- Nova prop `description` (`ReactNode`): aparece abaixo do rótulo, alinhada ao texto dele, e fica ligada ao campo por `aria-describedby`. O leitor de tela a lê junto com o nome da opção, sem ela virar parte do nome.
- Um `aria-describedby` passado em `slotProps.input` continua valendo: a descrição soma a ele.
- Nova story `WithDescription`.
