(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{191:function(e,t,a){e.exports=a(340)},196:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n,r,l,c,o,i,u,s,m,d,p,g,b=a(0),f=a.n(b),E=a(31),h=a.n(E),y=(a(196),function(){return f.a.createElement("div",{style:v},f.a.createElement("h1",null,"Ticket Tracker App"),f.a.createElement("p",{style:O},"Welcome to the ticket tracker app,"," ",f.a.createElement("span",{style:k},'please click on "Tickets" in the navigation menu')," ","to view a demo of the ticket tracking functionality with ability to create, read, update, and delete tickets"),f.a.createElement("hr",null),f.a.createElement("p",null,"Features in development:"),f.a.createElement("ul",null,f.a.createElement("li",null,"Login and subscribe functionality"),f.a.createElement("li",null,"Autherization based features based on different levels of user (admins/developers)"),f.a.createElement("li",null,"Refined styling for mobile devices")))}),v={backgroundColor:"#f9f8f0",padding:"35px",margin:"300px auto",maxWidth:"600px"},O={fontWeight:900,fontSize:"18px"},k={color:"rgb(25, 170, 120)",textDecoration:"underline"},w=a(9),j=a(357),C=a(349),x=a(356),A=a(55),B=a(16),S=function(){return f.a.createElement(j.a,{fixed:"top",inverted:!0},f.a.createElement(C.a,null,f.a.createElement(j.a.Item,{as:B.c,exact:!0,to:"/"},"Home"),f.a.createElement(j.a.Item,{as:B.c,exact:!0,to:"/bugs"},"Tickets"),f.a.createElement(j.a.Menu,{position:"right"},f.a.createElement(x.a,{as:B.c,exact:!0,to:"/createBug",style:{height:"auto",margin:"auto",marginRight:"1rem"},color:"teal",inverted:!0},"Create New Ticket"),f.a.createElement(j.a.Item,{name:"username"}," ",f.a.createElement(A.a,{name:"user"})," Test User"),f.a.createElement(j.a.Item,{name:"logout"},"Logout"))))},D=a(63),T=a(354),I=a(359),z=a(89),R=function(e){var t=e.bug,a=new Date,n=Date.parse(a.toJSON().split("Z")[0])-Date.parse(t.createdOn),r=Math.round(n/36e5),l=Math.floor(r/24),c=Math.floor(r%24);return f.a.createElement(T.a,{color:"olive",raised:!0,fluid:!0,style:{backgroundColor:"#f9f8f0"}},f.a.createElement(T.a.Content,{header:t.title,style:{height:"60px",whiteSpace:"pre-line",overflow:"hidden"}}),f.a.createElement(T.a.Content,{extra:!0},f.a.createElement(I.a,null,f.a.createElement(I.a.Column,{width:7,style:{fontSize:"10px",color:"black"}},f.a.createElement(A.a,{style:{fontSize:"18px",verticalAlign:"middle",marginRight:"0px"},name:"clock",color:"blue"})," ",l,"D | ",c,"H"),f.a.createElement(I.a.Column,{width:2},f.a.createElement(A.a,{name:"flag",color:"High"===t.priority?"red":"Medium"===t.priority?"yellow":"green"})),f.a.createElement(z.a,{style:{height:"2.4em",position:"absolute",marginTop:"0.7em",marginLeft:"-1.1em"},color:"teal",ribbon:"right"},t.category))),f.a.createElement("p",{style:{height:"10.7rem",whiteSpace:"pre-line",overflow:"hidden",padding:"1rem 2rem",color:"#555"}},t.description),f.a.createElement(T.a.Content,{extra:!0},f.a.createElement(I.a,{columns:3},f.a.createElement(I.a.Column,null,f.a.createElement(A.a,{name:"user",color:"red",style:{padding:"0px"}})," ",t.admin),f.a.createElement(I.a.Column,null,f.a.createElement(A.a,{name:"user",color:"green"})," ",t.developer),f.a.createElement(I.a.Column,null,f.a.createElement(z.a,{style:{width:"4rem"},color:"open"===t.status.toLowerCase()?"blue":"red",key:"orange"},t.status)))))},M=a(33),F=a(24),L=a.n(F),H=a(56),J=a(23),W=a(172),P=a(173),U=a(14),N=(a(307),a(8)),G=a(40),Z=a.n(G);Z.a.defaults.baseURL="/api",Object(N.configure)({enforceActions:"always"});var $=(n=function(){function e(){Object(W.a)(this,e),Object(J.a)(this,"bugRegistry",r,this),Object(J.a)(this,"bug",l,this),Object(J.a)(this,"loading",c,this),Object(J.a)(this,"target",o,this),Object(J.a)(this,"loadBugs",i,this),Object(J.a)(this,"loadBug",u,this),Object(J.a)(this,"selectBug",s,this),Object(J.a)(this,"clearBug",m,this),Object(J.a)(this,"createBug",d,this),Object(J.a)(this,"editBug",p,this),Object(J.a)(this,"deleteBug",g,this)}return Object(P.a)(e,[{key:"bugsByDate",get:function(){return Array.from(this.bugRegistry.values()).sort((function(e,t){return Date.parse(e.createdOn)-Date.parse(t.createdOn)}))}},{key:"openBugs",get:function(){return Array.from(this.bugRegistry.values()).filter((function(e){return"Open"===e.status})).sort((function(e,t){return Date.parse(e.createdOn)-Date.parse(t.createdOn)}))}},{key:"closedBugs",get:function(){return Array.from(this.bugRegistry.values()).filter((function(e){return"Closed"===e.status})).sort((function(e,t){return Date.parse(e.creatdOn)-Date.parse(t.createdOn)}))}}]),e}(),r=Object(U.a)(n.prototype,"bugRegistry",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),l=Object(U.a)(n.prototype,"bug",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=Object(U.a)(n.prototype,"loading",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=Object(U.a)(n.prototype,"target",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(U.a)(n.prototype,"bugsByDate",[N.computed],Object.getOwnPropertyDescriptor(n.prototype,"bugsByDate"),n.prototype),Object(U.a)(n.prototype,"openBugs",[N.computed],Object.getOwnPropertyDescriptor(n.prototype,"openBugs"),n.prototype),Object(U.a)(n.prototype,"closedBugs",[N.computed],Object.getOwnPropertyDescriptor(n.prototype,"closedBugs"),n.prototype),i=Object(U.a)(n.prototype,"loadBugs",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(H.a)(L.a.mark((function t(){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Z.a.get("/bugs");case 4:a=t.sent,Object(N.runInAction)("loading bugs",(function(){a.data.forEach((function(t){e.bugRegistry.set(t.id,t)})),e.loading=!1})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Object(N.runInAction)((function(){e.loading=!1})),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))}}),u=Object(U.a)(n.prototype,"loadBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(H.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Z.a.get("/bugs/".concat(a));case 4:n=t.sent,Object(N.runInAction)("get specific bug",(function(){e.bug=n.data,e.loading=!1})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),Object(N.runInAction)("loading specific bug error",(function(){e.loading=!1}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}),s=Object(U.a)(n.prototype,"selectBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.bug=e.bugRegistry.get(t)}}}),m=Object(U.a)(n.prototype,"clearBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.bug=null}}}),d=Object(U.a)(n.prototype,"createBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(H.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Z.a.post("/bugs/",a);case 4:Object(N.runInAction)("creating new bug",(function(){e.bugRegistry.set(a.id,a),e.loading=!1})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),Object(N.runInAction)("create new bug failed",(function(){e.loading=!1})),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}}),p=Object(U.a)(n.prototype,"editBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(H.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Z.a.put("/bugs/".concat(a.id),a);case 4:Object(N.runInAction)("edit bug",(function(){e.bugRegistry.set(a.id,a),e.bug=a,e.loading=!1})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),Object(N.runInAction)("edit bug error",(function(){e.loading=!1})),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}}),g=Object(U.a)(n.prototype,"deleteBug",[N.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(H.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Z.a.delete("/bugs/".concat(a));case 4:Object(N.runInAction)("delete bug",(function(){e.bugRegistry.delete(a),e.bug=null,e.loading=!1,e.target=""})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),Object(N.runInAction)("delete failed",(function(){e.loading=!1,e.target=""})),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}}),n),q=Object(b.createContext)(new $),K=a(358),Q=a(350),V=function(e){var t=e.inverted,a=void 0===t||t,n=e.content;return f.a.createElement(K.a,{active:!0,inverted:a},f.a.createElement(Q.a,{content:n}))},X={color:"#568CA9",backgroundColor:"#f9f8f0",border:"1px solid #568CA9",width:"140px"},Y={color:"#f9f8f0",backgroundColor:"#568CA9",border:"1px solid #568CA9",width:"140px"},_={padding:"1rem",textAlign:"center",margin:"0 auto 2rem"},ee=Object(M.a)((function(){var e=Object(b.useContext)(q);Object(b.useEffect)((function(){e.loadBugs()}),[e]);var t=e.bugsByDate,a=e.openBugs,n=e.closedBugs,r=e.loading,l=Object(b.useState)(t),c=Object(D.a)(l,2),o=c[0],i=c[1];return Object(b.useEffect)((function(){i(a)}),[a]),r?f.a.createElement(V,{content:"loading content..."}):f.a.createElement(b.Fragment,null,f.a.createElement("div",{style:_},f.a.createElement(I.a,{columns:3,stackable:!0,container:!0},f.a.createElement(I.a.Column,null,f.a.createElement(x.a,{style:o===a?Y:X,onClick:function(){return i(a)}},"Open Tickets")),f.a.createElement(I.a.Column,null,f.a.createElement(x.a,{style:o===n?Y:X,onClick:function(){return i(n)}},"Closed Tickets")),f.a.createElement(I.a.Column,null,f.a.createElement(x.a,{style:o===t?Y:X,onClick:function(){return i(t)}},"All Tickets")))),f.a.createElement(I.a,{stackable:!0,columns:3},o.map((function(e){return f.a.createElement(I.a.Column,{key:e.id},f.a.createElement(B.b,{to:"/bugs/".concat(e.id)},f.a.createElement(R,{bug:e})))}))))})),te=a(360),ae=a(361),ne={},re=Object(M.a)((function(e){var t=e.match,a=e.history,n=Object(b.useContext)(q),r=n.loading,l=n.loadBug,c=n.bug,o=n.deleteBug;Object(b.useEffect)((function(){l(t.params.id)}),[l,t.params.id]);if(r||!c)return f.a.createElement(V,{content:"loading content..."});var i=c.createdOn.split("T")[0],u=c.createdOn.split("T")[1].slice(0,8);return f.a.createElement(te.a,{raised:!0},f.a.createElement(I.a,{style:{marginBottom:"1em"},stackable:!0},f.a.createElement(I.a.Column,{width:8,floated:"left"},f.a.createElement(z.a,{style:{color:"white",backgroundColor:"#bd4509"}},"Ticket Opened On ",i," at ",u)),f.a.createElement(I.a.Column,{width:8,floated:"right",verticalAlign:"bottom",style:{textAlign:"right"}},f.a.createElement(A.a,{name:"user",color:"red"})," ",c.admin,f.a.createElement(A.a,{style:{marginLeft:"2em"},name:"user",color:"green"})," ",c.developer)),f.a.createElement(te.a,null,f.a.createElement(I.a,{columns:3,divided:!0,stackable:!0},f.a.createElement(I.a.Row,{style:{textAlign:"center"}},f.a.createElement(I.a.Column,{style:ne},f.a.createElement(z.a,{color:"blue"},c.category)),f.a.createElement(I.a.Column,{style:ne},f.a.createElement(z.a,{color:"OPEN"===c.status.toUpperCase()?"green":"red"},c.status)),f.a.createElement(I.a.Column,{style:ne},f.a.createElement(A.a,{name:"flag",size:"big",color:"HIGH"===c.priority.toUpperCase()?"red":"MEDIUM"===c.priority.toUpperCase()?"yellow":"green"}))))),f.a.createElement(ae.a,null,"Title"),f.a.createElement("p",{style:{marginLeft:"20px"}},c.title),f.a.createElement(ae.a,null,"Description"),f.a.createElement("p",{style:{marginLeft:"20px",whiteSpace:"pre-line"}},c.description),f.a.createElement("br",null),f.a.createElement(C.a,{style:{textAlign:"center",marginTop:"4em"}},f.a.createElement(x.a,{as:B.b,to:"/edit/".concat(c.id),style:{width:"9em",margin:"1rem"},color:"blue"},"Edit"),f.a.createElement(x.a,{onClick:function(){window.confirm("Are you sure you want to delete this ticket?")&&o(t.params.id).then((function(){return a.push("/bugs")}))},style:{width:"9em",margin:"1rem"},color:"red"},"Delete")))})),le=a(86),ce=a(64),oe=a(352),ie=a(351),ue=a(353),se=a(355),me={color:"red",fontWeight:900,fontSize:"1rem",textAlign:"center"},de=Object(M.a)((function(e){var t=e.match,a=e.history,n=Object(b.useContext)(q),r=n.bug,l=n.loading,c=n.createBug,o=n.loadBug,i=n.clearBug,u=n.editBug,s=Object(b.useState)({id:"",title:"",description:"",createdOn:"",admin:"",developer:"",category:"",priority:"",status:"",resolvedOn:""}),m=Object(D.a)(s,2),d=m[0],p=m[1],g=Object(b.useState)(!1),E=Object(D.a)(g,2),h=E[0],y=E[1],v=function(e){var t=e.currentTarget,a=t.name,n=t.value;p(Object(ce.a)(Object(ce.a)({},d),{},Object(le.a)({},a,n)))};Object(b.useEffect)((function(){return t.params.id&&0===d.id.length&&o(t.params.id).then((function(){return r&&p(r)})),i()}),[o,i,r,t.params.id,d.id.length,d]);return l?f.a.createElement(V,{content:"loading content..."}):f.a.createElement(te.a,{style:{padding:"4rem"}},f.a.createElement(oe.a,{onSubmit:function(){if(""===d.admin||""===d.developer||""===d.category||""===d.priority||""===d.status||""===d.title||""===d.description)y(!0);else if(0===d.id.length){var e=new Date,t=Object(ce.a)(Object(ce.a)({},d),{},{id:Object(se.a)(),createdOn:e.toJSON(),resolvedOn:e.toJSON()});c(t).then((function(){return a.push("/bugs/".concat(t.id))}))}else u(d).then((function(){return a.push("/bugs/".concat(d.id))}))}},f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Title"),f.a.createElement("input",{autoFocus:!0,onChange:v,name:"title",placeholder:"Ticket Title",value:d.title})),f.a.createElement(oe.a.Field,{style:{marginTop:"2rem"}},f.a.createElement("label",null,"Description"),f.a.createElement(ie.a,{name:"description",onChange:v,placeholder:"Ticket Description",rows:10,value:d.description})),f.a.createElement(oe.a.Group,{style:{marginTop:"2rem",marginBottom:"2rem"}},f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Assign Admin"),f.a.createElement("select",{name:"admin",id:"adminSelect",value:d.admin,onChange:v},f.a.createElement("option",{key:"0",value:""},"Select..."),f.a.createElement("option",{key:"1",value:"Manar"},"Manar"),f.a.createElement("option",{key:"2",value:"David"},"David"))),f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Assign Developer"),f.a.createElement("select",{name:"developer",id:"developerSelect",value:d.developer,onChange:v},f.a.createElement("option",{key:"0",value:""},"Select..."),f.a.createElement("option",{key:"1",value:"Ayman"},"Ayman"),f.a.createElement("option",{key:"2",value:"Joan"},"Joan"),f.a.createElement("option",{key:"3",value:"Adam"},"Adam"),f.a.createElement("option",{key:"4",value:"Ali"},"Ali"))),f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Category"),f.a.createElement("select",{name:"category",id:"categorySelect",value:d.category,onChange:v},f.a.createElement("option",{key:"0",value:""},"Select..."),f.a.createElement("option",{key:"1",value:"Hardware"},"Hardware"),f.a.createElement("option",{key:"2",value:"Software"},"Software"))),f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Priority"),f.a.createElement("select",{name:"priority",id:"prioritySelect",value:d.priority,onChange:v},f.a.createElement("option",{key:"0",value:""},"Select..."),f.a.createElement("option",{key:"1",value:"High"},"High"),f.a.createElement("option",{key:"2",value:"Medium"},"Medium"),f.a.createElement("option",{key:"3",value:"Low"},"Low"))),f.a.createElement(oe.a.Field,null,f.a.createElement("label",null,"Status"),f.a.createElement("select",{name:"status",id:"statusSelect",value:d.status,onChange:v},f.a.createElement("option",{key:"0",value:""},"Select..."),f.a.createElement("option",{key:"1",value:"Open"},"Open"),f.a.createElement("option",{key:"2",value:"Closed"},"Closed")))),f.a.createElement(I.a,{centered:!0,stackable:!0,padded:!0},f.a.createElement(x.a,{floated:"right",color:"green",type:"submit",style:{width:"8rem"}},"Submit"),f.a.createElement(x.a,{as:B.b,to:"/bugs/".concat(d.id),floated:"right",color:"red",type:"button",style:{width:"8rem"}},"Cancel"))),f.a.createElement(ue.a,{closeIcon:!0,open:h,onClose:function(){return y(!1)},onOpen:function(){return y(!0)}},f.a.createElement(ae.a,{icon:"warning",content:"Warning: missing data"}),f.a.createElement(ue.a.Content,null,f.a.createElement("p",{style:me},"Please select a value for each field")),f.a.createElement(ue.a.Actions,null,f.a.createElement(x.a,{color:"green",onClick:function(){return y(!1)}},f.a.createElement(A.a,{name:"checkmark"})," Ok"))))})),pe=Object(w.e)(Object(M.a)((function(e){var t=e.location;return f.a.createElement(b.Fragment,null,f.a.createElement(S,null),f.a.createElement(C.a,{style:{marginTop:"7em"}},f.a.createElement(w.a,{exact:!0,path:"/",component:y}),f.a.createElement(w.a,{exact:!0,path:"/bugs",component:ee}),f.a.createElement(w.a,{path:"/bugs/:id",component:re}),f.a.createElement(w.a,{key:t.key,path:["/createBug","/edit/:id"],component:de})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(337);var ge=Object(w.e)((function(e){var t=e.children,a=e.location.pathname;return Object(b.useEffect)((function(){window.scrollTo(0,0)}),[a]),t}));h.a.render(f.a.createElement(B.a,null,f.a.createElement(ge,null,f.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.519d8db9.chunk.js.map