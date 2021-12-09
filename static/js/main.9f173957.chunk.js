(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{121:function(e,t){},123:function(e,t,n){"use strict";n.r(t);var i=n(7),o=n.n(i),a=n(32),s=n.n(a),c=(n(83),n(26)),r=n(14),l=(n(84),n(25)),d=n(45),u=n(55),b=n(147),h=n(6);var j=function(e){return Object(h.jsxs)("div",{className:"task-list-item","aria-label":"Enter Task List Title",children:[Object(h.jsx)(b.a,{id:"task-list-text-entry",variant:"standard",placeholder:"Click to Enter List Name",value:e.name,onChange:function(t){return e.handleTaskListNameChange(t,e.id)},disabled:e.checked,"aria-label":"Enter Task List Title",InputProps:{disableUnderline:!0,style:{fontSize:40,background:"transparent",width:"100%",marginTop:"25px",paddingBottom:"10px",fontFamily:"Futura"}}}),Object(h.jsxs)("span",{id:"homepage-action-buttons",children:[Object(h.jsx)("button",{type:"button","aria-label":"Delete task list "+e.name,className:"task-list-options",onClick:function(){return e.toggleListModal(),e.updateDeleteListId(e.id),e.updateCurrTaskList("")},children:"\ud83d\uddd1"}),Object(h.jsx)("button",{type:"button","aria-label":"Enter task list "+e.name,className:"task-list-options",onClick:function(){return e.togglePageView(),e.updateCurrTaskList(e.id)},children:"\u2b91"})]})]})};var m=function(e){return Object(h.jsx)("div",{id:"task-list-container",children:e.taskListData.map((function(t){return"sharedLists"===t?Object(h.jsx)("h2",{children:"Shared with Me"}):Object(h.jsx)(j,Object(c.a)(Object(c.a)({toggleListModal:e.toggleListModal,updateDeleteListId:e.updateDeleteListId,handleTaskListNameChange:e.handleTaskListNameChange},t),{},{togglePageView:e.togglePageView,updateCurrTaskList:e.updateCurrTaskList}),t.id)}))})};var p=function(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current.focus(),t.current.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),n.current.focus())})),n.current.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),t.current.focus())}));window.addEventListener("keydown",(function(t){"Escape"===t.key&&e.onClose()}))})),Object(h.jsx)("div",{className:"alert-buttons",children:Object(h.jsx)("div",{className:"backdrop",children:Object(h.jsxs)("div",{className:"modal",children:[e.children,Object(h.jsx)("button",{ref:t,className:"alert-button alert-cancel",type:"button","aria-label":"Cancel Delete",onClick:e.onClose,children:"Cancel"}),Object(h.jsx)("button",{ref:n,className:"alert-button alert-ok",type:"button","aria-label":"Confirm Delete",onClick:function(){e.onOK(),e.onClose()},children:"OK"})]})})})};var g=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),o=n[0],a=n[1];return Object(h.jsxs)("div",{className:"dropdown",id:e.id+"-button","aria-label":e.id+" Selection Dropdown",children:[Object(h.jsxs)("button",{className:"menu-buttons",onClick:function(){a(!o)},children:[e.name,Object(h.jsx)("span",{className:"small-triangle",children:" \u25bc "})]}),Object(h.jsxs)("div",{className:"dropdown-content",style:{display:o?"block":"none"},children:[Object(h.jsx)("button",{className:e.id+"-dropdown-item selected-dropdown-item",id:"view-all-dropdown-item",onClick:function(){if("Delete"===e.id)e.toggleModal(),e.updateCurrentDeleteOption(e.options.option1);else{var t=document.getElementById("view-all-dropdown-item"),n=document.getElementById("view-complete-dropdown-item"),i=(document.getElementById("view-all-dropdown-item"),document.getElementById("view-incomplete-dropdown-item"));n.classList.remove("selected-dropdown-item"),i.classList.remove("selected-dropdown-item"),t.classList.add("selected-dropdown-item"),e.deleteOrView(e.id,e.options.option1)}a(!o)},"aria-label":e.id+" "+e.options.option1,children:e.options.option1}),Object(h.jsx)("button",{className:e.id+"-dropdown-item",id:"view-complete-dropdown-item",onClick:function(){if("Delete"===e.id)e.toggleModal(),e.updateCurrentDeleteOption(e.options.option2);else{var t=document.getElementById("view-complete-dropdown-item"),n=document.getElementById("view-all-dropdown-item"),i=document.getElementById("view-incomplete-dropdown-item");n.classList.remove("selected-dropdown-item"),i.classList.remove("selected-dropdown-item"),t.classList.add("selected-dropdown-item"),e.deleteOrView(e.id,e.options.option2)}a(!o)},"aria-label":e.id+" "+e.options.option2,children:e.options.option2}),Object(h.jsx)("button",{className:e.id+"-dropdown-item",id:"view-incomplete-dropdown-item",onClick:function(){if("Delete"===e.id)e.toggleModal(),e.updateCurrentDeleteOption(e.options.option3);else{var t=document.getElementById("view-incomplete-dropdown-item"),n=document.getElementById("view-complete-dropdown-item"),i=document.getElementById("view-all-dropdown-item");t.classList.add("selected-dropdown-item"),i.classList.remove("selected-dropdown-item"),n.classList.remove("selected-dropdown-item"),e.deleteOrView(e.id,e.options.option3)}a(!o)},onKeyDown:function(e){"Tab"===e.key&&o&&a(!o)},"aria-label":e.id+" "+e.options.option3,children:e.options.option3})]})]})},O=n(67);var f=function(e){return Object(O.useMediaQuery)({minWidth:400}),Object(h.jsx)("label",{className:"task-item",children:Object(h.jsxs)("div",{className:"task-color",id:"task-color-"+e.priority+"-"+e.checked,children:[Object(h.jsx)("input",{type:"checkbox",className:"check",defaultChecked:e.checked,onClick:function(){return e.toggleCheckbox(e.id)}}),Object(h.jsx)("span",{className:"checkmark"}),Object(h.jsx)(b.a,{id:"task-text-entry",variant:"standard",placeholder:"Click to Enter Task",value:e.name,onChange:function(t){return e.handleTaskNameChange(t,e.id)},disabled:e.checked,InputProps:{disableUnderline:!0,style:{background:"transparent",marginTop:"2%",paddingBottom:"10px",fontSize:"18vw",fontFamily:"Futura",width:"80%"}}}),Object(h.jsxs)("select",{name:"Priority",id:"priority",onChange:function(t){return e.updatePriority(e.id,t.target.value)},children:[Object(h.jsx)("option",{"aria-label":"high priority",value:"a",selected:"a"===e.priority,children:"High"}),Object(h.jsx)("option",{"aria-label":"medium priority",value:"b",selected:"b"===e.priority,children:"Med"}),Object(h.jsx)("option",{"aria-label":"low priority",value:"c",selected:"c"===e.priority,children:"Low"})]})]})})};var v=function(e){return Object(h.jsx)("div",{id:"task-container",children:e.tasksData.map((function(t){return Object(h.jsx)(f,Object(c.a)(Object(c.a)({handleTaskNameChange:e.handleTaskNameChange},t),{},{toggleCheckbox:e.toggleCheckbox,updatePriority:e.updatePriority}),t.id)}))})};var k=function(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(null),o=Object(i.useState)(!1),a=Object(r.a)(o,2),s=a[0],c=a[1],l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Object(i.useEffect)((function(){document.getElementById("share-email-entry").focus(),document.getElementById("share-email-entry").addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),t.current.focus())})),n.current.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),document.getElementById("share-email-entry").focus())}));window.addEventListener("keydown",(function(t){"Escape"===t.key&&e.setShareEmail(!1)}))})),Object(h.jsx)("div",{className:"alert-buttons",children:Object(h.jsx)("div",{className:"backdrop",children:Object(h.jsxs)("div",{className:"modal-share",children:[Object(h.jsx)("div",{id:"share-area",children:Object(h.jsxs)("form",{id:"share-form",children:["Sharing the list ",Object(h.jsxs)("span",{id:"task-title-in-share",children:[" ",e.listName," "]}),s&&Object(h.jsx)("p",{id:"share-self-error",children:"Cannot Share Task List with Yourself"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"share-email",htmlFor:"email",tabIndex:"0",children:" email: "}),Object(h.jsx)("input",{type:"text",id:"share-email-entry",name:"email",tabIndex:"0",onChange:function(e){document.getElementById("share-button").disabled=!l.test(e.target.value)}}),Object(h.jsx)("br",{})]})]})}),Object(h.jsx)("button",{ref:t,className:"alert-button alert-cancel",type:"button","aria-label":"Cancel Share",onClick:function(){e.setShareEmail(!1)},children:"Cancel"}),Object(h.jsx)("button",{ref:n,id:"share-button",className:"alert-button alert-ok",type:"button","aria-label":"Confirm Share",onClick:function(){var t=document.getElementById("share-email-entry").value;t===e.email?c(!0):(e.shareTaskList(t),e.setShareEmail(!1))},children:"Share"})]})})})};var x=function(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.current.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),document.getElementById("share-email-entry").focus())}));window.addEventListener("keydown",(function(t){"Escape"===t.key&&e.setShareSMS(!1)}))})),Object(h.jsx)("div",{className:"alert-buttons",children:Object(h.jsx)("div",{className:"backdrop",children:Object(h.jsxs)("div",{className:"modal-share",children:[Object(h.jsx)("div",{id:"sms-area",children:Object(h.jsxs)("form",{id:"sms-form",children:["Sharing the list ",Object(h.jsxs)("span",{id:"task-title-in-share",children:[" ",e.listName," "]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"share-sms",htmlFor:"number",tabIndex:"0",children:" Phone Number: "}),Object(h.jsx)("input",{type:"text",id:"share-sms-entry",name:"number",tabIndex:"0"}),Object(h.jsx)("br",{})]})]})}),Object(h.jsx)("button",{ref:t,className:"alert-button alert-cancel",type:"button","aria-label":"Cancel Share",onClick:function(){e.setShareSMS(!1)},children:"Cancel"}),Object(h.jsx)("button",{ref:n,id:"share-button",className:"alert-button alert-ok",type:"button","aria-label":"Confirm Share",onClick:function(){var t=document.getElementById("share-sms-entry").value;e.sendSMS(t),e.setShareSMS(!1)},children:"Share"})]})})})},y={TWILIO_TOKEN:"AC4a2992d15191155479b44dc01864f95c",TWILIO_API_KEY:"6b301166b446ed005a9c70388892c6a5"};var w=function(e){var t=l.a.firestore(),o={option1:"All Tasks",option2:"Completed Tasks",option3:"Uncompleted Tasks"},a=Object(i.useState)("Date Created"),s=Object(r.a)(a,2),b=s[0],j=s[1],O=Object(i.useState)(!1),f=Object(r.a)(O,2),w=f[0],C=f[1],N=Object(i.useState)(!1),T=Object(r.a)(N,2),I=T[0],S=T[1],L=Object(i.useState)("All Tasks"),E=Object(r.a)(L,2),P=E[0],D=E[1],A=Object(i.useState)("home"),B=Object(r.a)(A,2),M=B[0],W=B[1],F=Object(i.useState)(""),K=Object(r.a)(F,2),U=K[0],G=K[1],V=Object(i.useState)(""),R=Object(r.a)(V,2),_=R[0],H=R[1],Z=Object(i.useState)(""),z=Object(r.a)(Z,2),J=z[0],Y=z[1],Q=Object(i.useState)(!1),$=Object(r.a)(Q,2),q=$[0],X=$[1],ee=Object(i.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],ie=te[1],oe="hilnels-hmc-taskListsAuth",ae=t.collection(oe).where("owner","==",e.user.uid),se=(t.collection(oe).where("owner","==",e.user.uid),t.collection(oe).where("owner","==",e.user.uid)),ce=t.collection(oe).where("sharedWith","array-contains",e.user.email);t.collection(oe).where("sharedWith","array-contains",e.user.email),""!==J&&(se=t.collection(oe).doc(J).collection("Tasks"));var re=Object(d.a)(ae),le=Object(r.a)(re,3),de=le[0],ue=le[1],be=(le[2],[]),he=[],je=[],me=Object(d.a)(ce),pe=Object(r.a)(me,3),ge=pe[0];pe[1],pe[2],de&&(be=de.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})})),ge&&(he=ge.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))),be.push("sharedLists"),be=be.concat(he));var Oe=Object(d.a)(se),fe=Object(r.a)(Oe,3),ve=fe[0];function ke(){C(!w)}function xe(){S(!I)}function ye(){W("home"===M?"list":"home"),console.log("TASK DATA",je)}function we(e){G(e)}function Ce(e,n){for(var i=[],o=0;o<e.length;o++)"All Tasks"===n?i.push(e[o]):i.push(e[o].id),i.forEach((function(e){return t.collection(oe).doc(J).collection("Tasks").doc(e).delete()}))}function Ne(e){t.collection(oe).doc(e).delete()}function Te(e,t){if("Delete"===e)if("All Tasks"===t)Ce(je.map((function(e){return e.id})),t);else if("Completed Tasks"===t){Ce(je.filter((function(e){if(e.checked)return e.id})),t)}else if("Uncompleted Tasks"===t){Ce(je.filter((function(e){if(!e.checked)return e.id})),t)}"view"===e&&("All Tasks"===t?D("All Tasks"):"Completed Tasks"===t?D("Completed Tasks"):"Uncompleted Tasks"===t&&D("Uncompleted Tasks"))}return fe[1],fe[2],ve&&(je=ve.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))),"Completed Tasks"===P?je=je.filter((function(e){return e.checked})):"Uncompleted Tasks"===P&&(je=je.filter((function(e){return!e.checked}))),"Name: A to Z"===b?je=je.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:-1})):"Name: Z to A"===b?je=je.sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?1:-1})):"Date Created"===b?je=je.sort((function(e,t){return e.created>t.created?1:-1})):"Priority: High to Low"===b?je=je.sort((function(e,t){return e.priority>t.priority?1:-1})):"Priority: Low to High"===b&&(je=je.sort((function(e,t){return e.priority<t.priority?1:-1}))),Object(h.jsx)("div",{children:ue?Object(h.jsx)("div",{children:"Loading ... "}):"home"===M?Object(h.jsxs)("div",{className:"homepage",children:[Object(h.jsx)("h2",{className:"start",tabIndex:"0","aria-label":"My Task Lists",children:"My Task Lists"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"new-list-button",onClick:function(){var n=Object(u.a)();t.collection(oe).doc(n).set({id:n,name:"",taskCount:0,createdList:l.a.database.ServerValue.TIMESTAMP,owner:e.user.uid,sharedWith:[]})},"aria-label":"Create a new task list",children:"New Task List"})}),Object(h.jsx)(m,{toggleListModal:xe,updateDeleteListId:function(e){H(e)},deleteCurrPageView:Ne,handleTaskListNameChange:function(e,n){t.collection(oe).doc(n).update({name:e.target.value})},taskListData:be,togglePageView:ye,updateCurrTaskList:function(e){Y(e)}}),I&&Object(h.jsx)(p,{onClose:xe,onOK:function(){return Ne(_)},children:Object(h.jsxs)("div",{tabIndex:"1",children:[" Are you sure you want to delete the task list:",Object(h.jsx)("div",{tabIndex:"1",children:""===be.find((function(e){return e.id===_})).name?" New Task List":be.find((function(e){return e.id===_})).name})]})})]}):Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"buttons-and-tasks",children:[Object(h.jsxs)("div",{id:"fixed-buttons",className:"sticky",children:[Object(h.jsx)("h2",{className:"start",tabIndex:"0","aria-label":""===be.find((function(e){return e.id===J})).name?" New Task List":be.find((function(e){return e.id===J})).name,children:""===be.find((function(e){return e.id===J})).name?" New Task List":be.find((function(e){return e.id===J})).name}),Object(h.jsxs)("div",{className:"menu-buttons-container",children:[Object(h.jsx)("button",{type:"button",id:"back-button",className:"menu-buttons",onClick:function(){ye(),X(!1)},"aria-label":"Return to Task Lists Homepage",children:"\u2b90"}),Object(h.jsx)("div",{className:"dropdown",id:"new-item-button","aria-label":"create a new task",children:Object(h.jsx)("button",{type:"button",className:"menu-buttons",onClick:function(){console.log("making new item");var n=Object(u.a)();t.collection(oe).doc(J).collection("Tasks").doc(n).set({id:n,name:"",checked:!1,priority:"c",created:l.a.database.ServerValue.TIMESTAMP,owner:e.user.uid,sharedWith:[]})},children:"New Item"})}),[{id:"view",name:"View",arialabel:"view tasks"},{id:"Delete",name:"\ud83d\uddd1",arialabel:"delete tasks"}].map((function(e){return Object(h.jsx)(g,Object(c.a)(Object(c.a)({updateCurrentDeleteOption:we,toggleModal:ke,tasksData:je},e),{},{options:o,deleteOrView:Te}),e.id)})),Object(h.jsx)("button",{id:"share-menu-button",type:"button",className:"menu-buttons",onClick:function(){return X(!0)},children:"Share"}),q&&Object(h.jsx)(k,{email:e.user.email,shareTaskList:function(e){var n=l.a.firestore.FieldValue.arrayUnion;t.collection(oe).doc(J).update({sharedWith:n(e)}),console.log(be.find((function(e){return e.id===J})))},setShareEmail:X,listName:be.find((function(e){return e.id===J})).name}),ne&&Object(h.jsx)(x,{setShareSMS:ie,sendSMS:function(e){var t=n(93),i=n(111),o=function(){console.log(J);for(var e="\n"+be.find((function(e){return e.id===J})).name+" Tasks:\n",t=0;t<je.length;t++)e+="Task "+(t+1)+": "+je[t].name+"\n",je[t].checked&&(e+="Task "+(t+1)+" Completed\n"),"c"===je[t].priority?e+="Task "+(t+1)+" Priority: Low\n":"b"===je[t].priority?e+="Task "+(t+1)+" Priority: Medium\n":"a"===je[t].priority&&(e+="Task "+(t+1)+" Priority: High\n");return e}();console.log(o),t.post("https://api.twilio.com/2010-04-01/Accounts/"+y.TWILIO_TOKEN+"/Messages.json",i.stringify({Body:o,From:"+16055705875",To:"+1"+e}),{auth:{username:y.TWILIO_TOKEN,password:y.TWILIO_API_KEY}})}}),Object(h.jsx)("button",{id:"sms-sharing",onClick:function(){ie(!0)},children:" Share Via SMS"}),Object(h.jsx)("div",{id:"sorting-area",children:Object(h.jsx)("span",{children:Object(h.jsxs)("div",{id:"sort",children:[Object(h.jsx)("div",{id:"sort-label",children:"Sort By:"}),Object(h.jsxs)("select",{name:"sorting",id:"task-sorting","aria-label":"Sort tasks by",onChange:function(e){return j(e.target.value)},children:[Object(h.jsx)("option",{selected:!0,hidden:!0,children:"Sort By:"}),Object(h.jsx)("option",{value:"Date Created",selected:"Date Created"===b,children:"Date Created"}),Object(h.jsx)("option",{value:"Name: A to Z",selected:"Name: A to Z"===b,children:"Name: A to Z"}),Object(h.jsx)("option",{value:"Name: Z to A",selected:"Name: Z to A"===b,children:"Name: Z to A"}),Object(h.jsx)("option",{value:"Priority: High to Low",selected:"Priority: High to Low"===b,children:"Priority: High to Low"}),Object(h.jsx)("option",{value:"Priority: Low to High",selected:"Priority: Low to High"===b,children:"Priority: Low to High"})]})]})})})]})]}),Object(h.jsx)(v,{handleTaskNameChange:function(e,n){je.find((function(e){return e.id===n})).name=e.target.value,t.collection(oe).doc(J).collection("Tasks").doc(n).update({name:e.target.value})},tasksData:je,toggleCheckbox:function(e){var n=je.find((function(t){return t.id===e})).checked;t.collection(oe).doc(J).collection("Tasks").doc(e).update({checked:!n})},updatePriority:function(e,n){t.collection(oe).doc(J).collection("Tasks").doc(e).update({priority:n})}}),w&&Object(h.jsx)(p,{onClose:ke,onOK:function(){return Te("Delete",U)},dropdownOptions:o,children:"All Tasks"===U?Object(h.jsxs)("div",{tabIndex:"1",children:["Are you sure you want to delete all ",je.length," task(s)?"]}):"Uncompleted Tasks"===U?Object(h.jsxs)("div",{tabIndex:"1",children:["Are you sure you want to delete ",je.filter((function(e){return!e.checked})).length," uncompleted task(s)?"]}):Object(h.jsxs)("div",{tabIndex:"1",children:["Are you sure you want to delete ",je.filter((function(e){return e.checked})).length," completed task(s)?"]})})]})})})},C=n(36),N=n(68),T=n.n(N);var I=function(e){var t=["When selecting with the mouse, double-click to select a word!","When selecting with the mouse, triple-click to select a line!","Learn to touch type by mounting a touch typing chart near your computer!",'"Learning is an investment: pay some immediate productivity for increased future productivity" -Neil Rhodes',"Share a task list with friend so you can both edit tasks!","Delete a task list by clicking the trash can icon.","Sort tasks lists by priority by changing the Sort By menu.","Skip the hassle of signing up with email by logging in with your existing Google or Facebook account."],n=new l.a.auth.GoogleAuthProvider,o=new l.a.auth.FacebookAuthProvider,a=Object(C.b)(e.auth),s=Object(r.a)(a,4),c=s[0],d=s[1],u=s[2],b=s[3],j=Object(i.useState)(""),m=Object(r.a)(j,2),p=m[0],g=m[1];return d?Object(h.jsx)("div",{children:"Unexpectedly signed in already"}):u?Object(h.jsx)("p",{children:"Signing up\u2026"}):Object(h.jsxs)("div",{children:[b&&e.parseError(b.message),Object(h.jsx)("div",{id:"signup-area",children:Object(h.jsxs)("form",{id:"signup-form",onSubmit:function(){var e=document.getElementById("email").value;c(e,p)},children:[Object(h.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"Email"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{id:"password-area",children:[Object(h.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}}),Object(h.jsx)(T.a,{password:p,barColors:["#B83E26","#FFB829","#009200","#009200","#009200","#009200"],style:{width:"100%",zoom:"400%"}})]}),Object(h.jsx)("input",{type:"password",id:"confirm-password",name:"password",placeholder:"Password",onChange:function(e){e.target.value===p?document.getElementById("signup-submit").disabled=!1:document.getElementById("signup-submit").disabled=!0},onKeyDown:function(e){if("Enter"===e.key){var t=document.getElementById("email").value;c(t,p)}}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"signup-submit",disabled:!0,children:"Sign Up"})]})}),Object(h.jsx)("div",{id:"or-text",children:"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 or \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{id:"social-media-signin",children:[Object(h.jsxs)("div",{tabIndex:"1",className:"google-button",onKeyDown:function(t){"Enter"===t.key&&e.auth.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){e.auth.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"google-icon-wrapper",children:Object(h.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Google"})]}),Object(h.jsxs)("div",{tabIndex:"1",className:"facebook-button",onKeyDown:function(t){"Enter"===t.key&&e.auth.signInWithPopup(o).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){e.auth.signInWithPopup(o).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"facebook-icon-wrapper",children:Object(h.jsx)("img",{className:"facebook-icon",src:"https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Facebook"})]})]}),Object(h.jsxs)("div",{id:"tips-wrapper",children:[Object(h.jsx)("div",{id:"time-saving-tips-title",children:"Time Saving Tip!"}),Object(h.jsx)("div",{id:"time-saving-tips-body",children:t[Math.floor(Math.random()*t.length)]})]})]})]})};var S=function(e){var t=["When selecting with the mouse, double-click to select a word!","When selecting with the mouse, triple-click to select a line!","Learn to touch type by mounting a touch typing chart near your computer!",'"Learning is an investment: pay some immediate productivity for increased future productivity" -Neil Rhodes',"Share a task list with friend so you can both edit tasks!","Delete a task list by clicking the trash can icon.","Sort tasks lists by priority by changing the Sort By menu.","Skip the hassle of signing up with email by logging in with your existing Google or Facebook account."],n=new l.a.auth.GoogleAuthProvider,i=new l.a.auth.FacebookAuthProvider,o=l.a.auth();return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{id:"login-button",onClick:function(){e.setCurrentScreen("login")},children:"Log In"}),Object(h.jsx)("button",{id:"signup-button",onClick:function(){e.setCurrentScreen("signup")},children:"Sign Up"}),Object(h.jsx)("div",{id:"or-text",children:"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 or \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{id:"social-media-signin",children:[Object(h.jsxs)("div",{tabIndex:"1",className:"google-button",onKeyDown:function(e){"Enter"===e.key&&o.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){o.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"google-icon-wrapper",children:Object(h.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Google"})]}),Object(h.jsxs)("div",{tabIndex:"1",className:"facebook-button",onKeyDown:function(e){"Enter"===e.key&&o.signInWithPopup(i).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){o.signInWithPopup(i).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"facebook-icon-wrapper",children:Object(h.jsx)("img",{className:"facebook-icon",src:"https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Facebook"})]})]}),Object(h.jsxs)("div",{id:"tips-wrapper",children:[Object(h.jsx)("div",{id:"time-saving-tips-title",children:"Time Saving Tip!"}),Object(h.jsx)("div",{id:"time-saving-tips-body",children:t[Math.floor(Math.random()*t.length)]})]})]})]})};var L=function(e){var t=["When selecting with the mouse, double-click to select a word!","When selecting with the mouse, triple-click to select a line!","Learn to touch type by mounting a touch typing chart near your computer!",'"Learning is an investment: pay some immediate productivity for increased future productivity" -Neil Rhodes',"Share a task list with friend so you can both edit tasks!","Delete a task list by clicking the trash can icon.","Sort tasks lists by priority by changing the Sort By menu.","Skip the hassle of signing up with email by logging in with your existing Google or Facebook account."],n=new l.a.auth.GoogleAuthProvider,i=new l.a.auth.FacebookAuthProvider,o=Object(C.c)(e.auth),a=Object(r.a)(o,4),s=a[0],c=a[1],d=a[2],u=a[3];return c?Object(h.jsx)("div",{children:"Unexpectedly signed in already"}):d?Object(h.jsx)("p",{children:"Logging in\u2026"}):(console.log(u),Object(h.jsxs)("div",{children:[u&&e.parseError(u.message),Object(h.jsxs)("div",{id:"login-area",children:[Object(h.jsxs)("form",{id:"login-form",children:[Object(h.jsx)("input",{type:"text",id:"login-email",name:"email",placeholder:"Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"login-password",name:"password",placeholder:"Password",onKeyDown:function(e){if("Enter"===e.key){var t=document.getElementById("login-email").value,n=document.getElementById("login-password").value;s(t,n)}}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"submit",onClick:function(){var t=document.getElementById("login-email").value;e.auth.sendPasswordResetEmail(t)},children:"Forgot Password?"})]}),Object(h.jsxs)("label",{id:"toggle-password-vis",children:[Object(h.jsx)("input",{type:"checkbox",onClick:function(){var e=document.getElementById("login-password");"password"===e.type?e.type="text":e.type="password"}})," Show Password"]})]}),Object(h.jsx)("button",{id:"login-button",onClick:function(){var e=document.getElementById("login-email").value,t=document.getElementById("login-password").value;s(e,t)},children:"Log In"}),Object(h.jsx)("div",{id:"or-text",children:"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 or \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{id:"social-media-signin",children:[Object(h.jsxs)("div",{tabIndex:"1",className:"google-button",onKeyDown:function(t){"Enter"===t.key&&e.auth.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){e.auth.signInWithPopup(n).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"google-icon-wrapper",children:Object(h.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Google"})]}),Object(h.jsxs)("div",{tabIndex:"1",className:"facebook-button",onKeyDown:function(t){"Enter"===t.key&&e.auth.signInWithPopup(i).then((function(e){var t=e.credential.accessToken;console.log(t);var n=e.user;console.log(n)})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},onClick:function(){e.auth.signInWithPopup(i).then((function(e){})).catch((function(e){var t=e.code;console.log(t);var n=e.message;console.log(n)}))},children:[Object(h.jsx)("div",{className:"facebook-icon-wrapper",children:Object(h.jsx)("img",{className:"facebook-icon",src:"https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"})}),Object(h.jsx)("div",{className:"btn-text",children:"Continue with Facebook"})]})]}),Object(h.jsxs)("div",{id:"tips-wrapper",children:[Object(h.jsx)("div",{id:"time-saving-tips-title",children:"Time Saving Tip!"}),Object(h.jsx)("div",{id:"time-saving-tips-body",children:t[Math.floor(Math.random()*t.length)]})]})]})]}))};l.a.initializeApp({apiKey:"AIzaSyDoJ20jLJgywuuBGKRGlcUQNH0abdUQ_Pw",authDomain:"task-list-91e71.firebaseapp.com",projectId:"task-list-91e71",storageBucket:"task-list-91e71.appspot.com",messagingSenderId:"786170287003",appId:"1:786170287003:web:00ac302dcd21562873073e",measurementId:"G-SS8R968F1Z"});var E=l.a.auth();var P=function(e){var t=Object(C.a)(E),n=Object(r.a)(t,3),o=n[0],a=n[1],s=n[2],l=Object(i.useState)("initial"),d=Object(r.a)(l,2),u=d[0],b=d[1];return a?Object(h.jsx)("p",{children:"Checking..."}):o?Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{tabIndex:"1",type:"button",onClick:function(){E.signOut(),b("initial")},children:["Logout: ",o.displayName||o.email]}),!o.emailVerified&&Object(h.jsx)("button",{type:"button",onClick:function(){E.currentUser.sendEmailVerification()},children:"Verify email"}),Object(h.jsx)(w,Object(c.a)(Object(c.a)({},e),{},{user:o}))]}):(console.log(u),Object(h.jsxs)("div",{children:[s&&Object(h.jsxs)("p",{children:["Error App: ",s.message]}),Object(h.jsxs)("div",{id:"header-wrapper",children:[Object(h.jsx)("button",{id:"header-login-button",onClick:function(){return b("login")},children:"Log In"}),Object(h.jsx)("button",{id:"header-signup-button",onClick:function(){return b("signup")},children:"Sign Up"})]}),Object(h.jsx)("h2",{children:"Task List"}),Object(h.jsxs)("div",{id:"welcome-text",children:["Welcome to Task List!",Object(h.jsx)("br",{}),"Login or sign up to began making task lists ."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{id:"sign-in-buttons",children:["initial"===u&&Object(h.jsx)(S,{setCurrentScreen:b}),"login"===u&&Object(h.jsx)(L,{auth:E,parseError:j}),"signup"===u&&Object(h.jsx)(I,{auth:E,parseError:j})]})]}));function j(e){return e.includes("auth/invalid-email")?Object(h.jsx)("p",{id:"signin-error-message",children:"Please Enter a Valid Email"}):e.includes("auth/user-not-found")?Object(h.jsxs)("p",{id:"signin-error-message",children:["Hmm... we don't have you in our system. ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"#",onClick:function(){return b("signup")},children:" Sign up "})," to create a new account.",Object(h.jsx)("br",{})]}):e.includes("auth/wrong-password")?Object(h.jsxs)("p",{children:["Incorrect Password, Try Again ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"#",onClick:function(){var e=document.getElementById("login-email").value;E.sendPasswordResetEmail(e)},children:" Forgot Your Password? "})]}):void 0}},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),D()},83:function(e,t,n){},84:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.9f173957.chunk.js.map