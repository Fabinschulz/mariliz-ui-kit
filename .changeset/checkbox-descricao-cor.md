---
'@mariliz/ui-kit': patch
---

fix(Checkbox): a `description` sai como nota secundária em qualquer tema

A cor vinha de `palette.neutral`, que nem todo tema define, e o peso vinha do `caption` do tema; num tema escuro sem `neutral`, a descrição saía clara e pesada como um rótulo. Agora usa a cor de texto secundário (a mesma do `Radio`), o tamanho do `caption` e peso regular.
