(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{12:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(15),l=a.n(o),n=a(8),r=a(2),i=(a(12),a.p+"static/media/Vtex-logo.8af269a9.png"),d=a(0);function u(){var e=Object(r.f)();return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("img",{className:"logo",src:i,alt:"logo-vtex"}),Object(d.jsx)("h2",{children:"Gest\xe3o de Cadastros"}),Object(d.jsx)("p",{children:"Sistema exclusivo para o cadastramento de novos clientes ou produtos."}),Object(d.jsx)("h5",{children:"O que voc\xea deseja cadastrar?"}),Object(d.jsx)("button",{className:"card-button-client",onClick:function(){e.push("/clients")},children:"Clientes"}),Object(d.jsx)("button",{className:"card-button-product",onClick:function(){e.push("/products")},children:"Produtos"})]})})}var j=a(6),b=a(10),p=a.n(b);function m(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),r=l[0],u=l[1],b=Object(c.useState)(""),m=Object(j.a)(b,2),O=m[0],h=m[1],x=Object(c.useState)(""),g=Object(j.a)(x,2),v=g[0],N=g[1];return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsxs)("form",{className:"card-content",children:[Object(d.jsx)("img",{src:i,alt:"Vtex-logo",className:"logo-cadastro"}),Object(d.jsx)("h2",{children:"Cadastro de clientes"}),Object(d.jsx)("p",{children:"Preencha os dados corretamente."}),Object(d.jsx)("span",{className:"msgSuccess"}),Object(d.jsx)("label",{className:"label-client",htmlFor:"nome",children:"Nome"}),Object(d.jsx)(p.a,{value:a,onChange:function(e){return s(e.target.value)},className:"input-client",id:"nome",type:"text",placeholder:"Digite seu nome completo"}),Object(d.jsx)("label",{className:"label-client",htmlFor:"cpf",children:"CPF"}),Object(d.jsx)(p.a,{value:r,onChange:function(e){return u(e.target.value)},className:"input-client",mask:"999.999.999-99",id:"cpf",type:"text",placeholder:"Digite seu cpf"}),Object(d.jsx)("label",{className:"label-client",htmlFor:"email",children:"Email"}),Object(d.jsx)(p.a,{value:O,onChange:function(e){return h(e.target.value)},className:"input-client",id:"email",type:"email",placeholder:"Digite seu email"}),Object(d.jsx)("label",{className:"label-client",htmlFor:"telefone",children:"Telefone"}),Object(d.jsx)(p.a,{value:v,onChange:function(e){return N(e.target.value)},mask:"(99) 9 9999-9999",className:"input-client",id:"telefone",type:"tel",placeholder:"Digite seu telefone com o DDD"}),Object(d.jsx)("button",{type:"submit",className:"card-button-cadastrar-client",onClick:function(e){if(e.preventDefault(),a&&r&&O&&""!==v){var t=JSON.parse(localStorage.getItem("Cliente")||"[]");t.push({Nome:a,CPF:r,Email:O,Telefone:v}),localStorage.setItem("Cliente",JSON.stringify(t)),alert("Cliente cadastrado com sucesso")}else alert("Os dados n\xe3o foram preenchidos corretamente");s(""),u(""),h(""),N("")},children:"Cadastrar cliente"}),Object(d.jsx)(n.b,{className:"card-button-voltar",to:"/",children:" < Voltar"})]})})}function O(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),r=l[0],u=l[1],b=Object(c.useState)(""),m=Object(j.a)(b,2),O=m[0],h=m[1],x=Object(c.useState)(""),g=Object(j.a)(x,2),v=g[0],N=g[1],f=Object(c.useState)(""),C=Object(j.a)(f,2),S=C[0],D=C[1],y=Object(c.useState)(""),P=Object(j.a)(y,2);P[0],P[1];return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsxs)("form",{className:"card-content",children:[Object(d.jsx)("img",{src:i,alt:"Vtex-logo",className:"logo-cadastro"}),Object(d.jsx)("h2",{children:"Cadastro de produtos"}),Object(d.jsx)("p",{children:"Preencha os dados corretamente."}),Object(d.jsx)("label",{className:"label-product",htmlFor:"produto",children:"Produto"}),Object(d.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},className:"input-product",id:"produto",type:"text",placeholder:"Digite qual o \xe9 o produto"}),Object(d.jsx)("label",{className:"label-product",children:"Categoria"}),Object(d.jsxs)("select",{value:r,onChange:function(e){return u(e.target.value)},className:"input-product",children:[Object(d.jsx)("option",{value:"selecione",children:"Selecione"}),Object(d.jsx)("option",{value:"notebooks",children:"Notebooks"}),Object(d.jsx)("option",{value:"smartphones",children:"Smartphones"}),Object(d.jsx)("option",{value:"acessorios",children:"Acess\xf3rios"}),Object(d.jsx)("option",{value:"outros",children:"Outros"})]}),Object(d.jsx)("label",{className:"label-product",htmlFor:"descricao",children:"Descri\xe7\xe3o"}),Object(d.jsx)("textarea",{value:O,onChange:function(e){return h(e.target.value)},className:"input-product",id:"descricao",type:"text",placeholder:"Especifica\xe7\xf5es b\xe1sicas do produto"}),Object(d.jsx)("label",{className:"label-product",htmlFor:"preco",children:"Pre\xe7o"}),Object(d.jsx)(p.a,{value:v,onChange:function(e){return N(e.target.value)},className:"input-product",id:"preco",type:"text",placeholder:"Digite o valor do produto"}),Object(d.jsx)("label",{className:"label-product",htmlFor:"quantidade",children:"Quantidade em estoque"}),Object(d.jsx)("input",{value:S,onChange:function(e){return D(e.target.value)},className:"input-product",id:"quantidade",type:"text",placeholder:"Digite a quantidade disponivel"}),Object(d.jsx)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),a&&r&&O&&v&&S){var t=JSON.parse(localStorage.getItem("Produto")||"[]");t.push({Nome:a,Categoria:r,"Descri\xe7\xe3o":O,"Pre\xe7o":v,Quantidade:S}),localStorage.setItem("Produto",JSON.stringify(t)),s(""),u(""),h(""),N(""),D(""),alert("Produto cadastrado com sucesso")}else alert("Os dados n\xe3o foram preenchidos corretamente")},className:"card-button-cadastrar-product",children:"Cadastrar produto"}),Object(d.jsx)(n.b,{className:"card-button-voltar",to:"/",children:" < Voltar"})]})})}function h(){return Object(d.jsx)(n.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,component:u}),Object(d.jsx)(r.a,{path:"/clients",exact:!0,component:m}),Object(d.jsx)(r.a,{path:"/products",exact:!0,component:O})]})})}var x=function(){return Object(d.jsx)(h,{})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c85a2673.chunk.js.map