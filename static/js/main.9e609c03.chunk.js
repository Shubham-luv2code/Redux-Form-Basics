(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"applicationRoute":[{"path":"/dashboard","component":"","name":"Employee Basic Details"},{"path":"/primary_details","component":"","name":"Employee Primary Details"},{"path":"/contact_details","component":"","name":"Contact Details"},{"path":"/details_preview","component":"","name":"Details Preview"},{"redirect":true,"path":"/","to":"","name":"","component":""}]}')},102:function(e,t,a){e.exports=a(211)},107:function(e,t,a){},108:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),o=a.n(r),c=(a(107),a(35)),m=a(7),i=(a(108),a(67)),s=a.n(i),u=a(95),d=a(26),p=a(27),E=a(16),b=a(31),h=a(30),v=a(214),f=a(213),g=function(e){var t={};return e.firstName||(t.firstName="Required"),e.lastName||(t.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.mobileNum?/^([6-9]\d{9})$/.test(e.mobileNum)||(t.mobileNum="Invalid mobile number, must be 10 digits[Starts with 6-9]"):t.mobileNum="Required",e.sex||(t.sex="Required"),e.age?(Number(e.age)<18||Number(e.age)>60)&&(t.age="Valid Age criteria is 18-60 years"):t.age="Required",e.acknowledgement||(t.acknowledgement="Please accept the declaration"),t},N=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,o=r.touched,c=r.error;return l.a.createElement("div",{className:"col-md-12 row text-center"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},a,":"),l.a.createElement("input",Object.assign({className:"col-md-6 mb-3"},t,{placeholder:a,type:n})),o&&c&&l.a.createElement("span",{className:"danger"},"*".concat(c)))},y=function(e){var t=e.meta,a=t.touched,n=t.error;return!(!a||!n)&&l.a.createElement("span",{className:"danger"},"*".concat(n))},w=Object(f.a)({form:"EmployeeBasicDetails",forceUnregisterOnUnmount:!0,destroyOnUnmount:!1,validate:g})((function(e){var t=e.handleSubmit;return l.a.createElement("div",{className:"container-fluid container-margin"},l.a.createElement("h4",null,"Employee Primary Details"),l.a.createElement("form",{onSubmit:t},l.a.createElement(v.a,{name:"firstName",type:"text",component:N,label:"First Name"}),l.a.createElement(v.a,{name:"lastName",type:"text",component:N,label:"Last Name"}),l.a.createElement(v.a,{name:"age",type:"number",component:N,label:"Age",placeHolder:"Enter Age"}),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3"},l.a.createElement("strong",null,"Gender:")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement(v.a,{name:"sex",component:"input",type:"radio",value:"male"})," ","Male"),l.a.createElement("label",null,l.a.createElement(v.a,{name:"sex",component:"input",type:"radio",value:"female"})," ","Female"),l.a.createElement(v.a,{name:"sex",component:y}))),l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("ul",{className:"form-group row float-sm-right"},l.a.createElement("li",{className:"next"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Next")))))))})),O=Object(f.a)({form:"EmployeeBasicDetails",forceUnregisterOnUnmount:!0,destroyOnUnmount:!1,validate:g})((function(e){var t=e.handleSubmit,a=e.previousPage;return l.a.createElement("div",{className:"container container-margin"},l.a.createElement("h4",null,"Contact Details"),l.a.createElement("form",{onSubmit:t},l.a.createElement(v.a,{name:"email",type:"email",component:N,label:"Email"}),l.a.createElement(v.a,{name:"mobileNum",type:"text",component:N,label:"Mobile No",placeHolder:"Enter Mobile Number"}),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("ul",{className:"form-group row float-sm-right"},l.a.createElement("li",{className:"previous"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"Previous")),l.a.createElement("li",{className:"next"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Next/Preview"))))))})),D=a(216),j=(Object(D.a)("EmployeeBasicDetails"),function(e){var t=e.meta,a=t.touched,n=t.error;return!(!a||!n)&&l.a.createElement("span",{className:"danger"},"*".concat(n))}),k=Object(f.a)({form:"EmployeeBasicDetails",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:g})((function(e){e.onSubmit;var t=e.handleSubmit,a=e.previousPage;return l.a.createElement("div",{className:"container container-margin"},l.a.createElement("h4",null,"Preview Details"),l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"First Name:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"firstName",component:"input"})),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"Last Name:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"lastName",component:"input"})),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"Age:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"age",component:"input"})),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"Gender:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"sex",component:"input"})),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"Email:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"email",component:"input"})),l.a.createElement("div",{className:"col-md-12 row"},l.a.createElement("label",{className:"col-md-3 font-weight-bold"},"Mobile No:"),l.a.createElement(v.a,{className:"col-md-9",disabled:!0,name:"mobileNum",component:"input"})),l.a.createElement("div",{className:"col-md-12 container-margin"},l.a.createElement("label",{htmlFor:"employed"},l.a.createElement(v.a,{name:"acknowledgement",id:"acknowledgement",component:"input",type:"checkbox"}),"\xa0",l.a.createElement("strong",null,"Acknowledgement:"),"\xa0\xa0Please confirm above entered details are correct."),l.a.createElement(v.a,{name:"acknowledgement",component:j})),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("ul",{className:"form-group row float-sm-right"},l.a.createElement("li",{className:"previous"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"Previous")),l.a.createElement("li",{className:"next"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit Details"))))))})),P=function(e){return{type:"LOADER_ACTION_TYPE",isLoading:e}},x=function(e){return function(t,a){return t(P(!0)),(n=e,fetch("https://jsonplaceholder.typicode.com/users/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(t){return{status:e.status,data:t}}))})).catch((function(e){throw e}))).then((function(e){return 200===e.status?(t(P(!1)),t({type:"GET_EMP_DETAILS",empData:e.data,validEmp:!0}),Promise.resolve()):e.status>=400?(t(P(!1)),t({type:"ERROR_FETCH",empData:{},validEmp:!1}),Promise.reject()):void 0}),(function(e){return console.log(e,"error"),t({type:"ERROR_FETCH",empData:{},validEmp:!1}),Promise.reject()})).catch((function(e){throw e}));var n}},R=a(19),S=a(98),I=a(217),C=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={show:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.show&&this.setState({show:this.props.show})}},{key:"render",value:function(){return l.a.createElement("div",{hidden:!this.props.show},l.a.createElement(I.a,{style:{width:"3rem",height:"3rem",zIndex:"1000",position:"absolute",left:"47%",top:"35%"},color:"primary"}),l.a.createElement("div",{className:"custom-backdrop"}))}}]),a}(l.a.Component),A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).enterEmpId=function(e){e.persist(),n.debouncedFn||(n.debouncedFn=Object(S.debounce)((function(){n.setState({empId:e.target.value});var t=e.target.value;n.validateEmpId(t)}),500)),n.debouncedFn()},n.nextPage=n.nextPage.bind(Object(E.a)(n)),n.previousPage=n.previousPage.bind(Object(E.a)(n)),n.showSubmittedDetails=n.showSubmittedDetails.bind(Object(E.a)(n)),n.validateEmpId=n.validateEmpId.bind(Object(E.a)(n)),n.state={pageNo:1,empId:"",isValidated:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){}},{key:"nextPage",value:function(){this.setState({pageNo:this.state.pageNo+1})}},{key:"previousPage",value:function(){this.setState({pageNo:this.state.pageNo-1})}},{key:"showSubmittedDetails",value:function(){console.log(this.props,"props")}},{key:"validateEmpId",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=5;break}return e.next=3,Promise.allSettled([this.props.getEmpActionCreator(t)]).then((function(e){a.setState({isValidated:!0})}));case 3:e.next=6;break;case 5:this.setState({isValidated:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.pageNo,n=t.empId,r=t.isValidated;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{show:this.props.isLoading}),l.a.createElement("div",{className:"container-fluid container-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("label",{htmlFor:"empId",className:"col-md-3 font-weight-bold"},"Employee ID:"),l.a.createElement("input",{name:"empId",className:"col-md-3",disabled:1!==a,placeholder:"Enter User ID",onChange:function(t){e.enterEmpId(t)}}),r&&l.a.createElement("span",null," ",this.props.validEmp?l.a.createElement("i",{className:"fa fa-check-circle col-md-3"},"\xa0Valid Enployee"):l.a.createElement("i",{className:"fa fa-times-circle col-md-3"},"\xa0Sorry, Inalid Enployee ID entered!")),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Tip:")," Valid Employee ID is in range of 1-10")),l.a.createElement("div",null,1===a&&""!==n&&this.props.validEmp&&l.a.createElement(w,{onSubmit:this.nextPage}),2===a&&l.a.createElement(O,{previousPage:this.previousPage,onSubmit:this.nextPage}),3===a&&l.a.createElement(k,{previousPage:this.previousPage,onSubmit:this.showSubmittedDetails}))))))}}]),a}(l.a.Component),_=Object(R.b)((function(e){return console.log(e.reducerReturn.empData,"state.reducerReturn.empData"),{empData:e.reducerReturn.empData,validEmp:e.reducerReturn.validEmp,isLoading:e.reducerReturn.isLoading}}),(function(e){return{getEmpActionCreator:function(t){return e(x(t))}}}))(A),F=a(100),T=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={applicationRoute:F.applicationRoute},n.getComponents=n.getComponents.bind(Object(E.a)(n)),n}return Object(p.a)(a,[{key:"getComponents",value:function(){var e=this.state.applicationRoute;e.forEach((function(e){"Employee Basic Details"===e.name?e.component=_:"Employee Primary Details"===e.name?e.component=w:"Details Preview"===e.name?e.component=k:"Contact Details"===e.name?e.component=O:e.redirect&&(e.to="/dashboard")})),this.setState({applicationRoute:e})}},{key:"componentDidMount",value:function(){this.getComponents()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.d,null,this.state.applicationRoute.map((function(e,t){return e.redirect?l.a.createElement(m.a,{from:e.path,to:e.to,key:t}):l.a.createElement(m.b,{path:e.path,component:e.component,key:t})}))))}}]),a}(l.a.Component);var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("h4",null,"Employee Registration Form"))),l.a.createElement(c.a,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",name:"Home",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(6),M=a(23),B={empData:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMP_DETAILS":case"ERROR_FETCH":return Object(M.a)(Object(M.a)({},e),{},{empData:t.empData,validEmp:t.validEmp});case"LOADER_ACTION_TYPE":return Object(M.a)(Object(M.a)({},e),{},{isLoading:t.isLoading});default:return e}},q=a(215),H=Object(U.c)({form:q.a,reducerReturn:V}),G=a(101),J=Object(U.d)(H,Object(U.a)(G.a,(function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}})));o.a.render(l.a.createElement(c.a,null,l.a.createElement(R.a,{store:J},l.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.9e609c03.chunk.js.map