(this["webpackJsonpweb-client"]=this["webpackJsonpweb-client"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=(t(97),t(21)),i=t(31),s=(t(98),t(49)),m=t(13),u=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),c=Object(m.a)(l,2),o=c[0],i=c[1],u=Object(n.useCallback)((function(e,a){r(e),i(a),localStorage.setItem("userData",JSON.stringify({token:e,user:a}))}),[]),p=Object(n.useCallback)((function(){r(null),i(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&u(e.token,e.user)}),[u]),{token:t,user:o,login:u,logout:p,addNoteId:function(e){o&&(o.notes.push(e),i(Object(s.a)({},o)))},getNoteIds:function(){return o?o.notes:[]}}},p=Object(n.createContext)({token:null,user:null,login:function(){},logout:function(){},addNoteId:function(){},getNoteIds:function(){},isAuth:!1}),d=t(14),g=t.n(d),f=t(20),E=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),c=Object(m.a)(l,2),o=c[0],i=c[1];return{request:Object(n.useCallback)(function(){var e=Object(f.a)(g.a.mark((function e(a){var t,n,l,c,o,s=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,l=s.length>3&&void 0!==s[3]?s[3]:{"Content-type":"application/json"},r(!0),e.prev=4,n&&(n=JSON.stringify(n)),e.next=8,fetch(a,{method:t,body:n,headers:l});case 8:return c=e.sent,e.next=11,c.json();case 11:if(o=e.sent,c.ok){e.next=14;break}throw new Error(o.message||"Something went wrong");case 14:return r(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(a){return e.apply(this,arguments)}}(),[]),isFetching:t,error:o,clearError:Object(n.useCallback)((function(){i(null)}),[])}},b=t(50),h=function(e){var a=Object(n.useState)(e),t=Object(m.a)(a,2),r=t[0],l=t[1];return{form:r,changeFormHandler:function(e){l(Object(s.a)({},r,Object(b.a)({},e.target.name,e.target.value)))},resetForm:function(){return l(e)}}},v=t(154),j=t(180),O=t(157),w=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function N(e){var a=e.severity,t=e.message,n=e.clearAlert,l=w();return r.a.createElement(O.a,{onClickAway:n},r.a.createElement("div",{className:l.root},r.a.createElement(j.a,{severity:a},t)))}var x=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],s=o[1],u=function(){l(""),s("")};return{AlertComponent:function(){return i&&r.a.createElement(N,{message:t,severity:i,clearAlert:u})},setAlert:{success:function(e){l(e),s("success")},error:function(e){l(e),s("error")},info:function(e){l(e),s("info")},warning:function(e){l(e),s("warning")}}}},C=t(182),k=t(108),y=t(161),S=t(177),T=t(163),I=t(162),A=t(55),F=t.n(A),W=t(65),P=t(160),q=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function D(){var e=q(),a=Object(i.g)(),t=(Object(i.h)().state||{from:{pathname:"/"}}).from,l=E(),c=l.isFetching,s=l.request,m=Object(n.useContext)(p).login,u=x(),d=u.AlertComponent,b=u.setAlert,v=h({email:"",password:""}),j=v.form,O=v.changeFormHandler,w=v.resetForm,N=function(){var e=Object(f.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/login","POST",j);case 3:n=e.sent,m(n.data.token,n.data.user),b.info(n.message),w(),a.replace(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),b.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{className:e.avatar},r.a.createElement(F.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(d,null),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:j.email,onChange:O}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j.password,onChange:O}),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:N,disabled:c},"Sign In"),r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0},r.a.createElement(o.b,{to:"/register"},r.a.createElement(T.a,{variant:"body2"},"Don't have an account? Sign Up")))))))}var L=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function _(){var e=L(),a=E(),t=a.isFetching,l=a.request,c=Object(n.useContext)(p).login,i=h({email:"",username:"",password:"",confirmpassword:""}),s=i.form,m=i.changeFormHandler,u=i.resetForm,d=x(),b=d.AlertComponent,v=d.setAlert,j=function(){var e=Object(f.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/register","POST",s);case 3:a=e.sent,c(a.data.token,a.data.user),v.success(a.message),u(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),v.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{className:e.avatar},r.a.createElement(F.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement(b,null),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(I.a,{container:!0,spacing:2},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(S.a,{autoComplete:"fname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",autoFocus:!0,value:s.username,onChange:m})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:s.email,onChange:m})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s.password,onChange:m})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmpassword",label:"Confirm Password",type:"password",id:"confirmpassword",autoComplete:"current-password",value:s.confirmpassword,onChange:m}))),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:j,disabled:t},"Sign Up"),r.a.createElement(I.a,{container:!0,justify:"flex-end"},r.a.createElement(I.a,{item:!0},r.a.createElement(o.b,{to:"/authorization"},r.a.createElement(T.a,{variant:"body2"},"Already have an account? Sign in")))))))}var U=t(58),G=t(174),H=t(169),J=t(173),V=t(172),B=t(168),z=t(170),M=t(171),R=t(107),K=t(159),Q=t(81),X=t.n(Q),Y=t(181),Z=t(167),$=t(165),ee=t(166),ae=t(164),te=t(80),ne=t.n(te);function re(e){var a=e.note,t=e.update,l=Object(n.useState)(!1),c=Object(m.a)(l,2),o=c[0],i=c[1],s=h(a),u=s.form,p=s.changeFormHandler,d=s.resetForm,g=function(){i(!1)};return r.a.createElement("div",null,r.a.createElement(K.a,{onClick:function(){i(!0)}},r.a.createElement(ne.a,null)),r.a.createElement(Y.a,{open:o,onClose:g,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"Update table note"),r.a.createElement($.a,null,r.a.createElement(ee.a,null,"To update table note enter First name, Last name and Comment (optional)"),r.a.createElement(S.a,{autoFocus:!0,margin:"dense",id:"firstName",label:"First name",name:"firstName",type:"text",fullWidth:!0,onChange:p,value:u.firstName}),r.a.createElement(S.a,{margin:"dense",id:"lastName",label:"Last name",type:"text",name:"lastName",fullWidth:!0,onChange:p,value:u.lastName}),r.a.createElement(S.a,{margin:"dense",id:"comment",label:"Comment",type:"text",name:"comment",fullWidth:!0,onChange:p,value:u.comment})),r.a.createElement(Z.a,null,r.a.createElement(k.a,{onClick:function(){d(),g()},color:"default"},"Cancel"),r.a.createElement(k.a,{color:"primary",onClick:function(){t(u),g()}},"Update"))))}var le=t(178),ce=Object(v.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function oe(e){var a=e.getNotes,t=e.count,l=e.notesOnPage,c=ce(),o=Object(n.useState)(1),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Math.ceil(t/l);return r.a.createElement("div",{className:c.root},r.a.createElement(W.a,null,"Page: ",s),p>1&&r.a.createElement(le.a,{count:p,page:s,onChange:function(e,t){u(t),a(t)}}))}var ie=Object(v.a)({table:{minWidth:650}});function se(){var e=ie(),a=Object(n.useState)(0),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(0),i=Object(m.a)(o,2),s=i[0],u=i[1],d=E().request,b=x(),h=b.AlertComponent,v=b.setAlert,j=Object(n.useContext)(p),O=j.isAuth,w=j.getNoteIds,N=j.token,C=w(),k=Object(n.useState)([]),y=Object(m.a)(k,2),S=y[0],T=y[1];function I(){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(g.a.mark((function e(){var a,t,n,r,l,o,i=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:1,e.prev=1,e.next=4,d("/api/table/".concat(a),"GET");case 4:t=e.sent,n=t.data,r=n.notes,l=n.count,o=n.notesOnList,T(r),c(l),u(o),v.info(t.message),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0.message),v.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var F=function(){var e=Object(f.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/api/table","DELETE",{token:N,noteId:a});case 3:t=e.sent,v.success(t.message),T(Object(U.a)(S.filter((function(e){return e._id!==a})))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),v.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(g.a.mark((function e(a){var t,n,r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/api/table","PUT",{token:N,note:a});case 3:t=e.sent,n=t.data,r=S.findIndex((function(e){return e._id===n._id})),(l=Object(U.a)(S))[r]=n,T(Object(U.a)(l)),v.success(t.message),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),v.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){I()}),[]),r.a.createElement(P.a,{component:"main"},r.a.createElement(h,null),r.a.createElement(B.a,{component:R.a},r.a.createElement(H.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(z.a,null,r.a.createElement(M.a,null,r.a.createElement(V.a,{align:"left"},"ID"),r.a.createElement(V.a,{align:"left"},"First name"),r.a.createElement(V.a,{align:"left"},"Last name"),r.a.createElement(V.a,null,"Comment"),r.a.createElement(V.a,null,"Author"),r.a.createElement(V.a,null,"Controls"))),r.a.createElement(J.a,null,S&&S.length&&S.map((function(e){return r.a.createElement(M.a,{key:e._id},r.a.createElement(V.a,{component:"th",scope:"row"},e._id),r.a.createElement(V.a,{align:"left"},e.firstName),r.a.createElement(V.a,{align:"left"},e.lastName),r.a.createElement(V.a,null,e.comment),r.a.createElement(V.a,null,e.author),r.a.createElement(V.a,null,O&&C.includes(e._id)&&r.a.createElement(G.a,null,r.a.createElement(re,{note:e,update:W}),r.a.createElement(K.a,{color:"secondary",onClick:function(){return F(e._id)}},r.a.createElement(X.a,null)))))}))))),r.a.createElement(oe,{getNotes:I,count:l,notesOnPage:s}))}var me=t(82),ue=t.n(me),pe=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function de(){var e=pe(),a=Object(n.useContext)(p),t=a.logout,l=a.user;return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{className:e.avatar},r.a.createElement(ue.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},l&&l.name),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:t},"Log out"))))}var ge=t(83),fe=t.n(ge),Ee=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function be(){var e=Ee(),a=E(),t=a.isFetching,l=a.request,c=Object(n.useContext)(p),o=c.token,i=c.addNoteId,s=x(),m=s.AlertComponent,u=s.setAlert,d=h({firstName:"",lastName:"",comment:""}),b=d.form,v=d.changeFormHandler,j=d.resetForm,O=function(){var e=Object(f.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/table","POST",{token:o,note:b});case 3:a=e.sent,u.success(a.message),console.log(a.data),i(a.data._id),j(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),u.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{className:e.avatar},r.a.createElement(fe.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Create Note"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(I.a,{container:!0,spacing:2},r.a.createElement(I.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:b.firstName,onChange:v})),r.a.createElement(I.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:b.lastName,onChange:v}))),r.a.createElement(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"comment",label:"Comment",type:"text",id:"comment",value:b.comment,onChange:v}),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:O,disabled:t},"Create")),r.a.createElement(m,null)))}var he=function(){return r.a.createElement(R.a,null,r.a.createElement(W.a,{component:"h3",variant:"h3",align:"center"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f API"),'\u0423\u0434\u0430\u043b\u044f\u0442\u044c \u0438 \u0430\u043f\u0434\u0435\u0439\u0442\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e "\u0421\u0432\u043e\u0438" \u0437\u0430\u043f\u0438\u0441\u0438 (\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c)',r.a.createElement("ul",null,r.a.createElement("li",null,"\u041b\u043e\u0433\u0438\u043d: POST: api/auth/login - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 json \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"," ","{email: String, password: String}","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"," ","{token: jsonwebtoken, user: {name: String, notes: [\u0430\u0439\u0434\u0438\u0448\u043d\u0438\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f]}}"),r.a.createElement("li",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f: POST: api/auth/register - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 json \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"," ","{email: String, username: String, password: String, confirmpassword: String}","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442: ","{message: String}"),r.a.createElement("li",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438: GET: api/table/:num - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u0446\u043d\u0438\u0446\u0443 \u0441 5\u044e \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u0438 \u043e\u0431\u0449\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0431\u0430\u0437\u0435"," ","{message: String, data: {notes: [\u0437\u0430\u043f\u0438\u0441\u0438], count: Number}}"),r.a.createElement("li",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c: POST: api/table - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 json \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"," ","{token: jsonwebtoken, note: {firstName: String, lastName: String, comment: String *optional}}","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442: ","{message: String, data: \u043d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c}"),r.a.createElement("li",null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c: PUT: api/table - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 json \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"," ","{token: jsonwebtoken, note: { _id: \u0430\u0439\u0434\u0438\u0448\u043d\u0438\u043a \u0437\u0430\u043f\u0438\u0441\u0438, firstName: String, lastName: String, comment: String *optional}}","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442: ","{message: String, data: \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c}"),r.a.createElement("li",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c: DELETE: api/table - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 json \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"," ","{token: jsonwebtoken, noteId: \u0430\u0439\u0434\u0438\u0448\u043d\u0438\u043a \u0437\u0430\u043f\u0438\u0441\u0438 }","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"," ","{message: String, data: {count: Number} \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439}")))},ve=t(85),je=function(e){var a=e.children,t=Object(ve.a)(e,["children"]),l=Object(n.useContext)(p).isAuth;return r.a.createElement(i.b,Object.assign({},t,{render:function(e){var t=e.location;return l?a:r.a.createElement(i.a,{to:{pathname:"/login",state:{from:t}}})}}))},Oe=t(84),we=t.n(Oe),Ne=t(175),xe=t(176),Ce=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ke={color:"white",textDecoration:"none"};function ye(){var e=Ce();return r.a.createElement("div",{className:e.root},r.a.createElement(Ne.a,{position:"static"},r.a.createElement(xe.a,null,r.a.createElement(W.a,{variant:"h6",className:e.title},"Personal table"),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(o.c,{style:ke,to:"/"},"Docs")),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(o.c,{style:ke,to:"/new"},"New")),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(o.c,{style:ke,to:"/table"},"Table")),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(o.c,{style:ke,to:"/login"},"Login")),r.a.createElement(T.a,{style:ke,href:"https://github.com/pat-all/personal-table"},r.a.createElement(we.a,null)))))}var Se=function(){var e=u(),a=e.token,t=e.user,n=e.login,l=e.logout,c=e.addNoteId,s=e.getNoteIds,m=!!a;return r.a.createElement("div",{className:"App"},r.a.createElement(p.Provider,{value:{token:a,user:t,login:n,logout:l,isAuth:m,addNoteId:c,getNoteIds:s}},r.a.createElement(o.a,null,r.a.createElement(ye,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(he,null)),r.a.createElement(i.b,{path:"/table"},r.a.createElement(se,null)),r.a.createElement(i.b,{path:"/login"},m?r.a.createElement(de,null):r.a.createElement(D,null)),r.a.createElement(i.b,{path:"/register"},m?r.a.createElement(de,null):r.a.createElement(_,null)),r.a.createElement(je,{path:"/new"},r.a.createElement(be,null))))))};c.a.render(r.a.createElement(Se,null),document.getElementById("root"))},92:function(e,a,t){e.exports=t(106)},97:function(e,a,t){},98:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.f4c05bee.chunk.js.map