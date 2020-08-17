(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),u=(t(20),t(4)),l=t(2),i=function(e){var n=e.searchField,t=e.handleSearch;return r.a.createElement("div",{style:{marginBottom:20}},"Search: ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.handleClick,t=e.handleNameChange,a=e.handleNumberChange,c=e.newName,o=e.newNumber;return r.a.createElement("form",{className:"add-container",onSubmit:n},r.a.createElement("div",null,r.a.createElement("div",null,"Name: "),r.a.createElement("input",{value:c,onChange:t}),r.a.createElement("div",null,"Number: "),r.a.createElement("input",{value:o,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{style:{marginTop:20},type:"submit"},"ADD CONTACT")))},s=function(e){var n=e.searchField,t=e.persons,a=e.filteredPersons,c=e.removePerson;return r.a.createElement("div",{className:"contacts-container"},""===n?t.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("span",null,e.name," ",e.number," "),r.a.createElement("button",{className:"delete-btn",onClick:function(){return c(e.id)}},"delete"))})):a.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return c(e.id)}},"delete"))})))},d=t(3),f=t.n(d),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e))},E=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.errorStyle;return null===n?null:r.a.createElement("span",{style:t?{fontSize:35,color:"red",fontStyle:"italics",backgroundColor:"lightgrey"}:{fontSize:35,color:"green",fontStyle:"italics",backgroundColor:"lightgrey"}},n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),f=d[0],h=d[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),O=C[0],S=C[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),y=k[0],N=k[1],T=Object(a.useState)([]),P=Object(l.a)(T,2),x=P[0],D=P[1],F=Object(a.useState)(null),A=Object(l.a)(F,2),I=A[0],z=A[1],B=Object(a.useState)(!1),J=Object(l.a)(B,2),L=J[0],M=J[1];Object(a.useEffect)((function(){b().then((function(e){c(e),D(e)}))}),[]);return r.a.createElement("div",{className:"flexbox-container"},r.a.createElement("div",{className:"phonebook-container"},r.a.createElement("h1",null,"Phonebook"),r.a.createElement("h2",null,"Add new contact"),r.a.createElement(m,{handleClick:function(e){e.preventDefault();var n=t.findIndex((function(e){return e.name===f}));if(n>=0){var a=t[n].id;if(window.confirm("".concat(f," is already in the phone book, replace old number with new one?"))){var r=Object(u.a)(Object(u.a)({},t[n]),{},{number:O});E(a,r).then((function(e){c(t.map((function(n){return n.id===a?e:n}))),z("".concat(t[n].name,"' number was changed!")),h(""),S(""),setTimeout((function(){z(null)}),3e3)})).catch((function(e){M(!0),z(e.response.data.error),setTimeout((function(){z(null),M(!1)}),3e3)}))}}else{var o={name:f,number:O};v(o).then((function(e){c(t.concat(e)),h(""),S(""),z("".concat(o.name," was added to the Phonebook!")),setTimeout((function(){z(null)}),3e3)})).catch((function(e){M(!0),z(e.response.data.error),setTimeout((function(){M(!1),z(null)}),3e3)}))}},handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return S(e.target.value)},newName:f,newNumber:O}),r.a.createElement(g,{message:I,errorStyle:L}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(i,{searchField:y,handleSearch:function(e){N(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));return D(n)}}),r.a.createElement(s,{searchField:y,persons:t,filteredPersons:x,removePerson:function(e){var n=t.findIndex((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(t[n].name,"?"))&&p(e).then((function(){c(t.filter((function(n){return n.id!==e})))}))}})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.49e19a79.chunk.js.map