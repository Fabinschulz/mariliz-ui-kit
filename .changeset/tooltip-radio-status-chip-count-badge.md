---
'@mariliz/ui-kit': minor
---

feat: novos átomos `Tooltip`, `Radio`, `StatusChip` e `CountBadge`; `TabBar` legível no tema escuro

- `Tooltip`: dica que descreve o elemento sem trocar o nome acessível dele (`describeChild`), com `disabled` para devolver o elemento sem a dica.
- `Radio`: opção com rótulo, que também é o nome acessível; a linha inteira pode ser a área clicável (`labelProps`).
- `StatusChip`: selo de estado com `tone` (`neutral`, `success`, `warning`, `danger`, `info`), com as cores da paleta do tema.
- `CountBadge`: selo de contagem com `label` para o leitor de tela ler a frase ("3 aguardando aprovação") no lugar do número solto.
- `getToneColors`: função que devolve o par texto/fundo de um tom a partir do tema, usada pelos dois selos.
- `TabBar`: aceita `aria-label` para nomear o conjunto de abas.
- fix(`TabItem`): no tema escuro a aba não selecionada usava um cinza claro fixo e ficava branca, com o texto ilegível; agora usa as cores de ação do tema.
- fix(ícones): `UserConnectionsIcon` e `BluetoothOffIcon` usavam `fill-rule`/`clip-rule` e o React avisava no console a cada renderização; agora usam `fillRule`/`clipRule`.
