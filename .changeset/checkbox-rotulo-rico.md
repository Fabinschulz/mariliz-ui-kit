---
'@mariliz/ui-kit': minor
---

feat(Checkbox): rótulo com mais que texto e `labelProps`

- `label` aceita `ReactNode`: a opção pode trazer ícone, nome e etiquetas, e o rótulo continua sendo o nome acessível. Com só texto, nada muda.
- `labelProps` repassa props ao `FormControlLabel` (como `className` e `aria-disabled`), para a linha inteira ser a área clicável, como no `Radio`.
