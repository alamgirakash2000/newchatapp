(this.webpackJsonpnewchatapp=this.webpackJsonpnewchatapp||[]).push([[0],{47:function(e,a,t){e.exports=t(74)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),s=(t(52),t(12)),o=t(5),i=t(24);t(53),t(54);var m=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"r"},r.a.createElement("div",{className:"name"},r.a.createElement("h3",null,r.a.createElement("a",{href:"/",className:"appName"},"WebChat App")),r.a.createElement("h5",{className:"myName"},"Alamgir Akash")),r.a.createElement("nav",{className:"navber"},r.a.createElement(s.b,{to:"/",className:"ml-md-3"},"Home"),r.a.createElement("a",{class:"selected"},r.a.createElement(s.b,{tp:"/"},"About App")),r.a.createElement("a",null,r.a.createElement(s.b,{to:"/"},"Contact Me"))))),r.a.createElement("div",{className:"login-signup"},r.a.createElement("div",{className:"button login"},r.a.createElement(s.b,{to:"/login"},r.a.createElement("h5",null,"Login"))),r.a.createElement("div",{className:"button signup"},r.a.createElement(s.b,{to:"/signup"},r.a.createElement("h5",null,"Sign Up")))))};t(59);var u=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"footer py-3 text-center"},r.a.createElement("h4",null,"Copyright \xa9 Alamgir Akash, ",e))};t(60);var d=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",null,r.a.createElement("div",{className:"container py-4"},r.a.createElement("div",{className:"col-md-7 bg-light"},r.a.createElement("h3",null,"About this App"),r.a.createElement("p",null,"This is an web based chatting where you can create an account and chatting with people using this app all over the world. You also can update your profile details here and your profile picture."),r.a.createElement("h4",null,"Features"),r.a.createElement("p",null,"After create your profile, you need to update your bio and profile picture by visiting the profile page. Now you only just be able to send message and images. I am working on it to add more features. You will get the update when it will be done. Happy visiting...")))),r.a.createElement("div",{className:"about-me"},r.a.createElement("div",{className:"container about-me"},r.a.createElement("h3",{className:"text-center"},"About Me"),r.a.createElement("div",{className:"col-md-7 d-flex"},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/chatapp-by-akash.appspot.com/o/obnB3iqHV7hETOUOC4YArbHyb222?alt=media&token=8b3f34f3-eda2-41f7-9538-2918ab003a57",className:"w-25 mr-2",alt:""}),"I am Md. Alamgir Hossain (Akash).Currently I am a student of Bangladesh University of Engineering and Technology (BUET) in the department of Electrical and Electronic Engineering. I am so interested in Web development and so passionate about this. My hometown is Bogura, Bangladesh. Currently living in Dhaka, Bangladesh."),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("form",null)),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"Get in touch"),r.a.createElement("ul",{className:"contactMe"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"mailto:alamgirakash2000@gmail.com",className:"text-primary"},r.a.createElement("i",{class:"fas fa-at fa-2x"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/alamgir.akash.522",className:"text-primary"},r.a.createElement("i",{class:"fab fa-facebook fa-2x"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/md-alamgir-hossain-3765a71b1/",className:"text-info"},r.a.createElement("i",{class:"fab fa-linkedin fa-2x"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/alamgirakash2000",className:"text-white"},r.a.createElement("i",{class:"fab fa-github fa-2x"}))))))),r.a.createElement(u,null))},p=t(16),h=t.n(p),b=t(21),g=t(11),E=t(101),f={ID:"id",PhotoURL:"photoUrl",Name:"nickname",Email:"email",Password:"image/",DOC:"added",Description:"mydescription",FirebaseDocumentId:"docid",UPLOAD_CHANGED:"image/",PREFIX_IMAGE:"image/",CurrentUserKey:""},v=(t(62),t(40)),w=t.n(v).a.initializeApp({apiKey:"AIzaSyDGvgSoFWuo4iA3D-oEb4wOzjS7sZA9PGM",authDomain:"chatapp-by-akash.firebaseapp.com",databaseURL:"https://chatapp-by-akash.firebaseio.com",projectId:"chatapp-by-akash",storageBucket:"chatapp-by-akash.appspot.com",messagingSenderId:"1023525867508",appId:"1:1023525867508:web:3276cb36b36b7f472af3a1",measurementId:"G-75HTRMT5LR"});function N(e){var a=Object(n.useState)(!0),t=Object(g.a)(a,2),l=(t[0],t[1]),c=Object(n.useState)(""),o=Object(g.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),p=d[0],v=d[1],N=function(){var a=Object(b.a)(h.a.mark((function a(t){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,w.auth().signInWithEmailAndPassword(i,p).then(function(){var a=Object(b.a)(h.a.mark((function a(t){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(n=t.user)){a.next=5;break}return a.next=4,w.firestore().collection("users").where("id","==",n.uid).get().then((function(e){e.forEach((function(e){var a=e.data();localStorage.setItem(f.FirebaseDocumentId,e.id),localStorage.setItem(f.ID,a.id),localStorage.setItem(f.Name,a.name),localStorage.setItem(f.Email,a.email),localStorage.setItem(f.Password,a.password),localStorage.setItem(f.PhotoURL,a.URL),localStorage.setItem(f.Description,a.description)}))}));case 4:e.history.push("./chat");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){document.getElementById("1").innerHTML="Incorrect email or password"}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem(f.ID)?(l(!1),e.history.push("./chat")):l(!1)}),[]),r.a.createElement("div",{className:"text-center mx-auto login-form"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"signup-header py-4 text-white"},r.a.createElement("h4",null,"Welcome to Akash's live WebChat App"),r.a.createElement("span",null,"Please log in with your email and password "),r.a.createElement("div",{className:"my-4"},r.a.createElement(s.b,{to:"/",className:" home-button btn-lg btn-success"},"Go back to Home"))),r.a.createElement("form",{onSubmit:function(e){return N(e)},className:"py-3 mx-auto col-md-6 col-11 signin-from"},r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"email",type:"email",required:!0,label:"Email",onChange:function(e){return m(e.target.value)}}),r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"password",type:"password",required:!0,label:"Password",onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{className:"my-3 p-2",name:"remember",type:"checkbox"}),r.a.createElement("label",{htmlFor:"remember",className:"mr-auto"},"Remember me"),r.a.createElement("p",{className:"text-danger",id:"1"}),r.a.createElement("button",{type:"submit",className:"signup-button"},"LOG IN"),r.a.createElement("p",{className:"text-danger",id:"1"}),r.a.createElement("div",null,r.a.createElement("p",null,"Didn't have a accout?"," ",r.a.createElement(s.b,{to:"/signup",className:"text-info"},"Sign Up")," ","here")))))}t(73);function y(e){var a=Object(n.useState)(null),t=Object(g.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),i=Object(g.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(""),p=Object(g.a)(d,2),v=p[0],N=p[1],y=Object(n.useState)(null),I=Object(g.a)(y,2),k=(I[0],I[1]),x=function(){var a=Object(b.a)(h.a.mark((function a(t){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),t.target.elements.password.value===t.target.elements.confirmPassword.value){a.next=4;break}return alert("Confirm Password and Password must be the same"),a.abrupt("return");case 4:try{w.auth().createUserWithEmailAndPassword(l,v).then(function(){var a=Object(b.a)(h.a.mark((function a(t){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:w.firestore().collection("users").add({name:m,id:t.user.uid,email:l,password:v,URL:"",description:"",messages:[{notificationid:"",number:0}]}).then((function(a){localStorage.setItem(f.ID,t.user.uid),localStorage.setItem(f.Name,m),localStorage.setItem(f.Email,l),localStorage.setItem(f.Password,v),localStorage.setItem(f.PhotoURL,""),localStorage.setItem(f.UPLOAD_CHANGED,"state_changed"),localStorage.setItem(f.Description,""),localStorage.setItem(f.FirebaseDocumentId,a.id),c(null),u(""),N(""),k(null),e.history.push("/chat")})).catch((function(e){console.log("Error while signing up",e)}));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}catch(n){document.getElementById("1").innerHTML="Error while signing up. Please try again"}case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"text-center mx-auto"},r.a.createElement("div",{className:"signup-header py-4"},r.a.createElement("h3",null,"Welcome to Sign Up page"),r.a.createElement("h5",{className:"mb-4"},"You can use all the features of this app by signing up"),r.a.createElement(s.b,{to:"/",className:"my-4 home-button btn-lg btn-success"},"Go back to Home")),r.a.createElement("form",{onSubmit:function(e){return x(e)},className:"py-3 mx-auto col-md-7 col-11 signin-from"},r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"displayName",type:"text",onChange:function(e){return u(e.target.value)},required:!0,label:"Name"}),r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"email",type:"email",required:!0,label:"Email",onChange:function(e){return c(e.target.value)}}),r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"password",type:"password",required:!0,onChange:function(e){return N(e.target.value)},label:"Password (At least 6 digits or characters)"}),r.a.createElement(E.a,{id:"standard-basic",className:"form-control mb-3",name:"confirmPassword",type:"password",required:!0,label:"Confirm Password"}),r.a.createElement("p",{className:"text-danger",id:"1"}),r.a.createElement("button",{type:"submit",className:"signup-button sign px-4"},r.a.createElement("h5",{className:"text-center"},"SIGN UP")),r.a.createElement("div",null,r.a.createElement("p",null,"Already have a account?"," ",r.a.createElement(s.b,{to:"/login",className:"text-primary mx-2"},"Sign In"),"here."))))))}var I=function(){function e(e,a){switch(e){case 0:i.b.warning(a);break;case 1:i.b.success(a)}}return r.a.createElement(s.a,null,r.a.createElement(i.a,{autoClose:2e3,hideProgressBar:!0,position:i.b.POSITION.TOP_CENTER}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(o.a,{path:"/login",render:function(a){return r.a.createElement(N,Object.assign({showToast:e},a))}}),r.a.createElement(o.a,{path:"/signup",render:function(a){return r.a.createElement(y,Object.assign({showToast:e},a))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6f033127.chunk.js.map