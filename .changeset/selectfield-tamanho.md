---
'@mariliz/ui-kit': minor
---

feat(SelectField): `fullWidth` e `size="small"` passam a valer

- `fullWidth` (padrão `true`, como antes): com `false`, o campo fica com a largura do conteúdo ou a que `sx` definir, e vários campos cabem lado a lado, como numa linha de filtros. Antes o campo ocupava sempre toda a largura.
- `size="small"`: o campo passa a ter 40px de altura. Antes a altura fixa de 56px ignorava o tamanho pedido.
- Nova story `FilterRow`.
