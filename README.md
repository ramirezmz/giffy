## Ingredientes

- React
- Wouter


## Hooks

<img src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/09/05155108/React-Hooks.png"/>

Para quem não sabe e é curioso como eu, a tradução de hook é *"gancho"*.

Hooks são funções que permitem "engatar" aos recursos dos **estados** e outros caraterísticas de React sem escrever uma classe, como anteriormente.

Vamos aprender então, a controlar um estado usando *useState*.

> useState é um hook para controlar valores

Primeiramente, precisamos importar useState de react.

```js
import React, { useState } from 'react';
```

#### O que o `useState` faz?

Ele declara um variável state. Nossa variável é chamada de count mas poderíamos chamar de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções (...).Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.

#### O que passamos para o `useState` como argumento?

O único argumento para o Hook `useState` é o estado inicial.


#### O que `useState` retorna?

Ele retorna dois valore: o estado atual (ou  também chamado de inicial) e uma função que atualiza o estado.

```js
function Example() {
  const [ count, setCount ] = useState(0)
}
```


# ATENÇÃO!!

Como descrito na documetação do [React]('https://pt-br.reactjs.org/docs/hooks-rules.html'), existem duas regras fundamentais para os hooks.

- Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.
Apenas chame Hooks de componentes funcionais.
- Não chame Hooks de funções JavaScript comuns. (Há apenas um outro lugar válido para se chamar Hooks — dentro dos seus próprios Hooks customizados. Iremos aprender sobre eles em breve.)


### Porque não usar forEach ao invez de map?

Simplesmente porque o `forEach` não devolve nada e o metodo `map`, sim.

Com o forEach conseguimos percorrer também o array, ao igual que o map, porém precisamos devolver uma imagem com a url distinta `<img src={image} />`.

## Referencias

- Sobre forEach e map:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map