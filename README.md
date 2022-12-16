# pedidos-delivery
Real job application Back End Test for Fullstack JavaScript Course.


## Sobre o problema
O Sistema deverá contemplar os módulos: __Cliente__, __Produto__ e __Pedido__. Um __Pedido__ pertence a um __Cliente__ e um __Pedido__ contém vários __Produtos__.

A API será utilizada para o _client_ que irá realizar os pedidos. Nesse sentido, ela deverá conter _endpoints_ para que um __Cliente__ possa se cadastrar. Além de `criar`, `listar`, `ver` e `excluir` __Pedidos__ de um __Cliente__ específico. Obs.: Para evitar autenticação, o id do __Cliente__ pode ser usado como parâmetro para realizar essas ações.

O painel administrativo deve conter uma autenticação básica. E através dele deverá ser possível `listar` __Clientes__ e `listar` __Pedidos__, além de poder gerenciar os __Produtos__ da lanchonete..

Os campos para cada entidade serão:
- Cliente: `nome`, `email`, `telefone` e `endereço`;
- Produto: `nome` e `preço`;
- Pedido: `código do cliente`, `código do produto`, `data de criação` e `status do pedido`.

O __Pedido__ poderá conter os `status`: `Pendente`, `Em preparo`, `Em entrega`, `Entregue` e `Cancelado`.
