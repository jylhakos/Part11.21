(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),a=t(14),l=t.n(a),s=(t(19),t(3)),r=t(0),i=function(e){var n=e.addPerson,t=e.newName,o=e.handleNameChange,c=e.newPhone,a=e.handlePhoneChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Name: "}),Object(r.jsx)("input",{value:t,onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Phone: "}),Object(r.jsx)("input",{value:c,onChange:a})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Add"})})]})},d=function(e){var n=e.id,t=e.person,o=e.phone,c=e.handleDeletePerson;return console.log("id",n,"person",t,"phone",o),null!=t?Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t})," ",Object(r.jsx)("td",{children:o})," ",Object(r.jsx)("td",{children:Object(r.jsx)("button",{type:"submit",value:n,onClick:function(e){return c(e,t)},children:"Delete"})})]}):null},u=function(e){e.persons;var n=e.filtered,t=e.handleDeletePerson;return Object(r.jsx)("div",{style:{padding:5},children:Object(r.jsx)("table",{children:n.map((function(e){return Object(r.jsx)(d,{id:e.id,person:e.name,phone:e.phone,handleDeletePerson:t},e.id)}))})})},h=function(e){var n=e.persons,t=e.handleFilter;return console.log("person",n.name),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Filter: "}),Object(r.jsx)("input",{value:n.name,onChange:t})]})},j=t(4),b=t.n(j),O="/api/persons",p=function(){return b.a.get(O)},g=function(e){return b.a.post(O,e)},f=function(e){return b.a.delete("".concat(O,"/").concat(e))},v=function(e){var n=e.successMessage;return null===n?null:Object(r.jsx)("div",{className:"success",children:n})},x=function(){var e=Object(o.useState)([{person:null,phone:null}]),n=Object(s.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),l=Object(s.a)(a,2),d=l[0],j=l[1],b=Object(o.useState)(""),O=Object(s.a)(b,2),x=O[0],m=O[1],P=Object(o.useState)(0),C=Object(s.a)(P,2),w=C[0],D=C[1],S=Object(o.useState)(null),N=Object(s.a)(S,2),k=N[0],y=N[1],E=Object(o.useState)([]),F=Object(s.a)(E,2),M=F[0],A=F[1];Object(o.useEffect)((function(){p().then((function(e){console.log(e.data),c(e.data),A(e.data);var n=0;e.data.forEach((function(e){console.log(e.id),e.id>n&&(n=e.id)})),D(n)}))}),[]),console.log("counter",w);var I=function(e){e.preventDefault();var n,o=e.target.value.toLowerCase();console.log("value",o),n=t.filter((function(e){return console.log("person.name",e.name),-1!==e.name.toLowerCase().indexOf(o)})),A(n)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(v,{successMessage:k}),Object(r.jsx)(h,{persons:t,handleFilter:I}),Object(r.jsx)("h3",{children:"Add New"}),Object(r.jsx)(i,{addPerson:function(e){e.preventDefault(),console.log("Clicked",e.target);var n={name:d,phone:x,date:(new Date).toISOString(),important:Math.random()<.5,id:w+1};console.log("personObject",n.name,n.phone),console.log("persons",t);var o=t.filter((function(e){return e.name===n.name}));console.log("personExists ",o),0===o.length?(console.log("personExists.length ",o.length),g(n).then((function(e){console.log("response",e),c(t.concat(e.data)),A(t.concat(e.data)),D(n.id),y("Added ".concat(n.name)),setTimeout((function(){y(null)}),5e3)}))):alert("".concat(d," is already added to phonebook")),j(""),m("")},newName:d,handleNameChange:function(e){console.log("handleNameChange",e.target.value),j(e.target.value)},newPhone:x,handlePhoneChange:function(e){console.log("handlePhoneChange",e.target.value),m(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(u,{persons:t,filtered:M,handleFilter:I,handleDeletePerson:function(e,n){e.preventDefault();var t=e.target.value;console.log("handleDeletePerson",t,n),window.confirm("Delete "+n+"?")&&f(t).then((function(e){p().then((function(e){c(e.data),A(e.data)}))}))}})]})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2220a7bb.chunk.js.map