(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3c61":function(e,t,r){},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n\t\t"),r("router-link",{attrs:{to:"/toy-app"}},[e._v("Toys")]),e._v(" |\n\t\t"),r("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e.loggedinUser?r("div",{staticClass:"logout-container"},[r("span",[e._v("Hello, "+e._s(e.loggedinUser.username))]),r("button",{on:{click:e.logout}},[e._v("Log out")])]):e._e()],1),r("router-view")],1)},s=[],a={methods:{logout:function(){this.$store.dispatch({type:"logout"}),this.$router.push("/login")}},computed:{loggedinUser:function(){return this.$store.getters.loggedinUser}}},i=a,c=r("2877"),u=Object(c["a"])(i,o,s,!1,null,null,null),l=u.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Welcome to the best store in the world*")]),n("small",[e._v("*according to one poll, from 2013.")]),n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("router-link",{attrs:{to:"/toy-app"}},[n("el-button",{attrs:{type:"primary"}},[e._v("Start Browsing")])],1)],1)},d=[],m={created:function(){this.$store.getters.loggedinUser||this.$router.push("/login")}},h=m,y=Object(c["a"])(h,f,d,!1,null,null,null),v=y.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("GmapMap",{ref:"mapRef",staticClass:"map",staticStyle:{width:"750px",height:"450px"},attrs:{center:{lat:32,lng:35},zoom:7,"map-type-id":"terrain"}},e._l(e.markers,(function(t,n){return r("GmapMarker",{key:n,attrs:{position:t.position,clickable:!0,draggable:!0},on:{click:function(r){e.center=t.position}}})})),1),r("section",{staticClass:"btn-container"},e._l(e.markers,(function(t,n){return r("el-button",{key:n,attrs:{type:"primary"},on:{click:function(r){return e.moveTo(t.position.lat,t.position.lng)}}},[e._v("\n\t\t\t"+e._s(t.name)+"\n\t\t")])})),1)],1)},b=[],w={data:function(){return{markers:[{position:{lat:32.419407,lng:34.918009},name:"Hadera"},{position:{lat:32.109333,lng:34.855499},name:"Tel Aviv"},{position:{lat:32.3075945,lng:34.8755032},name:"Natenya"}]}},methods:{moveTo:function(e,t){this.$refs.mapRef.$mapPromise.then((function(r){r.panTo({lat:e,lng:t})}))}}},j=w,k=Object(c["a"])(j,g,b,!1,null,null,null),_=k.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"toy-app"},[r("toy-filter",{attrs:{filterBy:e.filterBy,toyTypes:e.toyTypes},on:{"set-filter":e.setFilter}}),r("toy-list",{attrs:{toys:e.toys},on:{"remove-toy":e.onRemoveToy}}),e.isAdmin?r("router-link",{attrs:{to:"/toy-edit"}},[e._v("+")]):e._e()],1)},R=[],O=r("2909"),S=r("5530"),$=(r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[e.toys?r("ul",{staticClass:"toy-list"},e._l(e.toys,(function(t){return r("li",{key:t._id},[r("toy-preview",{attrs:{toy:t},on:{"remove-toy":e.onRemoveToy}})],1)})),0):e._e()])}),T=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"toy-item"},[e.toy.imgUrl?r("img",{attrs:{src:e.toy.imgUrl,alt:"toy"}}):e._e(),r("p",[e._v(e._s(e.toy.name))]),r("p",[e._v("$"+e._s(e.toy.price))]),e.isAdmin?r("button",{on:{click:function(t){return e.onRemoveToy(e.toy._id)}}},[e._v("✖️")]):e._e(),e.isAdmin?r("router-link",{attrs:{to:"/toy-edit/"+e.toy._id}},[e._v("✏️")]):e._e(),r("router-link",{attrs:{to:"/toy-app/"+e.toy._id}},[e._v("ℹ️")])],1)},U=[],E={props:{toy:Object},methods:{onRemoveToy:function(e){this.$emit("remove-toy",e)}},computed:{isAdmin:function(){return this.$store.getters.loggedinUser.isAdmin}}},B=E,I=Object(c["a"])(B,C,U,!1,null,null,null),A=I.exports,z={components:{toyPreview:A},props:{toys:Array},methods:{onRemoveToy:function(e){this.$emit("remove-toy",e)}}},L=z,P=Object(c["a"])(L,$,T,!1,null,null,null),D=P.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.filterBy?r("section",{staticClass:"toy-filter"},[r("el-input",{staticClass:"input",attrs:{type:"text",name:"filter",placeholder:"filter"},on:{input:e.setFilter},model:{value:e.filterBy.name,callback:function(t){e.$set(e.filterBy,"name",t)},expression:"filterBy.name"}}),r("el-select",{attrs:{name:"inStock"},on:{change:e.setFilter},model:{value:e.filterBy.inStock,callback:function(t){e.$set(e.filterBy,"inStock",t)},expression:"filterBy.inStock"}},[r("el-option",{attrs:{value:"",label:"All"}},[e._v("Any")]),r("el-option",{attrs:{value:"TRUE",label:"In stock"}},[e._v("In stock")]),r("el-option",{attrs:{value:"FALSE",label:"Not in stock"}},[e._v("Not in stock")])],1),r("el-select",{attrs:{name:"type"},on:{change:e.setFilter},model:{value:e.filterBy.type,callback:function(t){e.$set(e.filterBy,"type",t)},expression:"filterBy.type"}},[r("el-option",{attrs:{value:"",label:"All"}},[e._v("All")]),e._l(e.toyTypes,(function(t,n){return r("el-option",{key:n,attrs:{label:t,value:t}},[e._v(e._s(t))])}))],2),r("el-select",{attrs:{name:"sort"},on:{change:e.setFilter},model:{value:e.filterBy.sortBy,callback:function(t){e.$set(e.filterBy,"sortBy",t)},expression:"filterBy.sortBy"}},[r("el-option",{attrs:{value:"",label:"All"}},[e._v("Any")]),r("el-option",{attrs:{value:"NAME",label:"Name"}},[e._v("Name")]),r("el-option",{attrs:{value:"PRICE",label:"Price"}},[e._v("Price")])],1)],1):e._e()},M=[],N={props:{filterBy:Object,toyTypes:Array},methods:{setFilter:function(){this.$emit("set-filter",this.filterBy)}}},q=N,G=Object(c["a"])(q,F,M,!1,null,null,null),J=G.exports,H={components:{toyList:D,toyFilter:J},computed:{toys:function(){return this.$store.getters.toys},filterBy:function(){return Object(S["a"])({},this.$store.getters.filterBy)},toyTypes:function(){var e=this.$store.getters.toys.map((function(e){return e.type}));return Object(O["a"])(new Set(e))},isAdmin:function(){return this.$store.getters.loggedinUser.isAdmin},loggedinUser:function(){return this.$store.getters.loggedinUser}},methods:{onRemoveToy:function(e){this.$store.dispatch({type:"removeToy",toyId:e})},setFilter:function(e){this.$store.commit({type:"setFilter",filterBy:e}),this.$store.dispatch({type:"loadToys"})}},created:function(){this.loggedinUser?this.$store.dispatch({type:"loadToys"}):this.$router.push("/login")}},W=H,V=Object(c["a"])(W,x,R,!1,null,null,null),Y=V.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"toy-edit"},[e.toy?r("form",[r("validation-provider",{attrs:{rules:"alpha"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("el-input",{attrs:{type:"text",name:"name",placeholder:"name"},on:{input:function(t){return e.sendErrors(n)}},model:{value:e.toy.name,callback:function(t){e.$set(e.toy,"name",t)},expression:"toy.name"}}),r("span",[e._v(e._s(n[0]))])]}}],null,!1,2470883782)}),r("validation-provider",{attrs:{rules:"between:1,999"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("el-input",{attrs:{type:"text",name:"price",placeholder:"price"},on:{input:function(t){return e.sendErrors(n)}},model:{value:e.toy.price,callback:function(t){e.$set(e.toy,"price",e._n(t))},expression:"toy.price"}}),r("span",[e._v(e._s(n[0]))])]}}],null,!1,2829726172)}),r("validation-provider",{attrs:{rules:"alpha"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("el-input",{attrs:{type:"text",name:"type",placeholder:"type"},on:{input:function(t){return e.sendErrors(n)}},model:{value:e.toy.type,callback:function(t){e.$set(e.toy,"type",t)},expression:"toy.type"}}),r("span",[e._v(e._s(n[0]))])]}}],null,!1,3265369369)}),e.isLoading?r("img",{attrs:{src:"https://gifimage.net/wp-content/uploads/2018/06/transparent-loader-gif-13.gif",alt:""}}):r("label",[e._v("\n\t\t\tUpload Image:\n\t\t\t"),r("img",{staticClass:"upload",attrs:{src:"https://cdn3.iconfinder.com/data/icons/web-icons-2/64/Cloud_Upload-256.png",alt:""}}),r("input",{attrs:{type:"file",name:"toy-image"},on:{change:e.onUploadImg}})]),r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Submit")])],1):e._e(),e.isErrorShown?r("section",{staticClass:"error"},[r("p",[e._v("Failed to submit because fields are not filled correctly!")])]):e._e()])},Q=[],X=r("1da1"),Z=(r("96cf"),r("99af"),r("bc3a")),ee=r.n(Z),te="/api/",re=ee.a.create({withCredentials:!0}),ne={get:function(e,t){return oe(e,"GET",t)},post:function(e,t){return oe(e,"POST",t)},put:function(e,t){return oe(e,"PUT",t)},delete:function(e,t){return oe(e,"DELETE",t)}};function oe(e){return se.apply(this,arguments)}function se(){return se=Object(X["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,e.prev=2,e.next=5,re({url:"".concat(te).concat(t),method:r,data:n,params:"GET"===r?n:null});case 5:return o=e.sent,e.abrupt("return",o.data);case 9:throw e.prev=9,e.t0=e["catch"](2),console.log("Had Issues ".concat(r,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(n)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&(void 0).push("/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),se.apply(this,arguments)}var ae={query:ce,getById:le,remove:fe,save:me,addReview:ye,createEmptyToy:ge,createEmptyReview:be},ie="/api/toy/";function ce(e){return ue.apply(this,arguments)}function ue(){return ue=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get(ie,{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function le(e){return pe.apply(this,arguments)}function pe(){return pe=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("".concat(ie).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),pe.apply(this,arguments)}function fe(e){return de.apply(this,arguments)}function de(){return de=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.delete("".concat(ie).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}function me(e){return he.apply(this,arguments)}function he(){return he=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t._id){e.next=6;break}return e.next=3,ne.put("".concat(ie).concat(t._id),t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,ne.post(ie,t);case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)}))),he.apply(this,arguments)}function ye(e,t){return ve.apply(this,arguments)}function ve(){return ve=Object(X["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("".concat(ie).concat(t._id,"/review"),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ve.apply(this,arguments)}function ge(){return{_id:"",price:0,name:"",type:"",createdAt:Date.now(),inStock:!0,reviews:[]}}function be(e){return{txt:e,at:Date.now()}}var we=r("7bb1"),je=function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="mister-toy-dandan",n="mister_toy_dandan",o="https://api.cloudinary.com/v1_1/".concat(r,"/image/upload"),s=new FormData,s.append("file",t.target.files[0]),s.append("upload_preset",n),e.prev=6,e.next=9,ee.a.post(o,s);case 9:return a=e.sent,e.abrupt("return",a.data);case 13:e.prev=13,e.t0=e["catch"](6),console.error("ERROR!",e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),ke={components:{ValidationProvider:we["a"]},data:function(){return{toy:null,errors:[],isErrorShown:!1,isLoading:!1}},methods:{onSubmit:function(e){var t=this;if(e.preventDefault(),this.errors.length)return this.isErrorShown=!0,void setTimeout((function(){t.isErrorShown=!1}),2500);this.$store.dispatch({type:"saveToy",toy:this.toy}).then((function(){t.$router.push("/toy-app")}))},sendErrors:function(e){this.errors=e},onUploadImg:function(e){var t=this;return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.isLoading=!0,r.next=3,je(e);case 3:n=r.sent,o=n.url,t.toy.imgUrl=o,t.isLoading=!1;case 7:case"end":return r.stop()}}),r)})))()}},created:function(){var e=this,t=this.$route.params.toyId;t?ae.getById(t).then((function(t){e.toy=t})):this.toy=ae.createEmptyToy()}},_e=ke,xe=Object(c["a"])(_e,K,Q,!1,null,null,null),Re=xe.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.toy?r("section",{staticClass:"toy-details"},[r("p",[e._v("Name: "+e._s(e.toy.name))]),r("p",[e._v("Price: $"+e._s(e.toy.price))]),r("p",[e._v("Type: "+e._s(e.toy.type))]),r("p",[e._v("Created: "+e._s(e._f("moment")(e.toy.createdAt,"from")))]),r("p",{style:e.inStock.color},[e._v(e._s(e.inStock.txt))]),r("ul",[r("h2",[e._v("Reviews:")]),e._l(e.reviews,(function(t){return r("li",{key:t.id},[r("p",[e._v(e._s(t.txt))]),r("p",[e._v(e._s(e._f("moment")(t.at,"from")))])])}))],2),r("el-button",{attrs:{type:"success"},on:{click:e.toggleReview}},[e._v("Add a review")]),e.isReviewOpen?r("section",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.reviewTxt,expression:"reviewTxt"}],attrs:{type:"text",placeholder:"Review text"},domProps:{value:e.reviewTxt},on:{input:function(t){t.target.composing||(e.reviewTxt=t.target.value)}}}),r("el-button",{on:{click:e.addReview}},[e._v("Add")]),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error.msg))]):e._e()],1):e._e()],1):e._e()},Se=[],$e={query:Ce,getById:Ee,remove:Ie,save:ze,createEmptyReview:Pe},Te="/api/review/";function Ce(e){return Ue.apply(this,arguments)}function Ue(){return Ue=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get(Te,{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Ue.apply(this,arguments)}function Ee(e){return Be.apply(this,arguments)}function Be(){return Be=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("".concat(Te).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Be.apply(this,arguments)}function Ie(e){return Ae.apply(this,arguments)}function Ae(){return Ae=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.delete("".concat(Te).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Ae.apply(this,arguments)}function ze(e){return Le.apply(this,arguments)}function Le(){return Le=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t._id){e.next=6;break}return e.next=3,ne.put("".concat(Te).concat(t._id),t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,ne.post(Te,t);case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)}))),Le.apply(this,arguments)}function Pe(e,t){return{txt:e,at:Date.now(),byUserId:"",aboutToyId:t}}var De,Fe,Me={data:function(){return{toy:null,reviewTxt:"",isReviewOpen:!1,error:null}},methods:{formattedDate:function(e){return new Date(e).toLocaleString()},toggleReview:function(){this.isReviewOpen=!this.isReviewOpen},addReview:function(){var e=$e.createEmptyReview(this.reviewTxt,this.toy._id);this.$store.dispatch({type:"addReview",review:e}),e.txt||(this.error={msg:"Review field cannot be blank!"}),this.reviewTxt="",this.error=null}},computed:{inStock:function(){return this.toy.inStock?{txt:"In stock",color:{color:"#338800"}}:{txt:"Not in stock",color:{color:"#ff0000"}}},loggedinUser:function(){return this.$store.getters.loggedinUser},reviews:function(){var e=this.$store.getters.reviews;return console.log(e),e}},created:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$route.params.toyId,!r){t.next=13;break}return t.prev=2,t.next=5,ae.getById(r);case 5:n=t.sent,e.toy=n,e.$store.dispatch({type:"loadReviews",filterBy:{aboutToyId:r}}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},Ne=Me,qe=Object(c["a"])(Ne,Oe,Se,!1,null,null,null),Ge=qe.exports,Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"dashboard"},[e.toys.length?r("pie-chart",{staticClass:"pie-chart",attrs:{data:e.chartData,options:e.chartOptions}}):e._e(),e.toys.length?r("pie-chart",{staticClass:"pie-chart",attrs:{data:e.stockChartData,options:e.chartOptions}}):e._e()],1)},He=[],We=(r("b680"),r("1fca")),Ve={extends:We["a"],props:{data:Object,options:Object},mounted:function(){this.renderChart(this.data,this.options)}},Ye=Ve,Ke=Object(c["a"])(Ye,De,Fe,!1,null,null,null),Qe=Ke.exports;r("25f0");function Xe(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=r.charAt(Math.floor(Math.random()*r.length));return t}function Ze(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function et(){for(var e="#",t=0;t<6;t++){var r=Math.random(),n=16*r|0;e+=n.toString(16)}return e}var tt={makeId:Xe,getRandomInt:Ze,getRandomColor:et},rt={components:{pieChart:Qe},data:function(){return{chartOptions:{borderWidth:"10px",hoverBackgroundColor:"red",hoverBorderWidth:"10px"}}},computed:{toys:function(){return this.$store.getters.toys},chartData:function(){return{labels:this.$store.getters.toys.map((function(e){return e.type})),datasets:[{label:"Toys",backgroundColor:this.$store.getters.toys.map((function(){return tt.getRandomColor()})),data:this.$store.getters.toys.map((function(e){return e.price}))}]}},stockChartData:function(){var e=this;return{labels:Object(O["a"])(new Set(this.$store.getters.toysInStock.map((function(e){return e.type})))),datasets:[{label:"Toys In Stock",backgroundColor:this.$store.getters.toysInStock.map((function(){return tt.getRandomColor()})),data:Object(O["a"])(new Set(this.$store.getters.toysInStock.map((function(t){var r=e.$store.getters.toysInStock.reduce((function(e,r){return r.type===t.type?e+1:e}),0);return(r/e.$store.getters.toysInStock.length*100).toFixed(2)}))))}]}}},created:function(){this.$store.dispatch({type:"loadToys"})}},nt=rt,ot=Object(c["a"])(nt,Je,He,!1,null,null,null),st=ot.exports,at=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"login-page"},[r("el-form",{staticClass:"login-form"},[r("el-input",{attrs:{type:"text",name:"username",placeholder:"Username"},model:{value:e.userCred.username,callback:function(t){e.$set(e.userCred,"username",t)},expression:"userCred.username"}}),r("el-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.userCred.password,callback:function(t){e.$set(e.userCred,"password",t)},expression:"userCred.password"}}),e.isSignup?r("el-input",{attrs:{type:"text",name:"fullname",placeholder:"full name"}}):e._e(),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.send(t)}}},[e._v("Login")])],1),e.error?r("section",{staticClass:"error"},[r("p",[e._v(e._s(e.error.msg))])]):e._e()],1)},it=[],ct={data:function(){return{userCred:{username:"",password:""},isSignup:!1,error:null}},methods:{send:function(e){var t=this;return Object(X["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,t.$store.dispatch({type:"login",userCred:t.userCred});case 4:r.next=10;break;case 6:return r.prev=6,r.t0=r["catch"](1),t.error={msg:"Authentication failed, please double check your credentials"},r.abrupt("return");case 10:t.$router.push("/toy-app");case 11:case"end":return r.stop()}}),r,null,[[1,6]])})))()}}},ut=ct,lt=Object(c["a"])(ut,at,it,!1,null,null,null),pt=lt.exports;n["default"].use(p["a"]);var ft,dt=[{path:"/",component:v},{path:"/about",component:_},{path:"/toy-app",component:Y},{path:"/toy-app/:toyId?",component:Ge},{path:"/toy-edit/:toyId?",component:Re},{path:"/dashboard",component:st},{path:"/login",component:pt}],mt=new p["a"]({routes:dt}),ht=mt,yt=r("2f62"),vt=(r("4de4"),r("c740"),r("a434"),{state:{toys:[],filterBy:{name:"",inStock:"",type:"",sortBy:""}},getters:{toys:function(e){return e.toys},filterBy:function(e){return e.filterBy},toysInStock:function(e){return e.toys.filter((function(e){return e.inStock}))}},mutations:{setToys:function(e,t){var r=t.toys;e.toys=r},removeToy:function(e,t){var r=t.toyId,n=e.toys.findIndex((function(e){return e._id===r}));e.toys.splice(n,1)},addToy:function(e,t){var r=t.toy;e.toys.push(r)},updateToy:function(e,t){var r=t.toy,n=e.toys.findIndex((function(e){return e._id===r._id}));e.toys.splice(n,1,r)},setFilter:function(e,t){var r=t.filterBy;e.filterBy=Object(S["a"])({},r)}},actions:{loadToys:function(e){return ae.query(e.getters.filterBy).then((function(t){return e.commit({type:"setToys",toys:t}),t})).catch((function(e){throw console.log("Error: Cannot load toys",e),e}))},removeToy:function(e,t){var r=e.commit;return ae.remove(t.toyId).then((function(){r(t)})).catch((function(e){throw console.log("Error: Cannot remove toy",e),e}))},saveToy:function(e,t){var r=e.commit,n=t.toy._id?"updateToy":"addToy";return ae.save(t.toy).then((function(e){return r({type:n,toy:e}),e})).catch((function(e){throw console.log("Error: Cannot save toy",t.toy,e),e}))}}}),gt=r("ade3"),bt=10,wt={login:Ut,logout:At,signup:Bt,getUsers:jt,getById:_t,remove:Rt,update:St,getLoggedinUser:Pt,increaseScore:Tt};function jt(){return kt.apply(this,arguments)}function kt(){return kt=Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),kt.apply(this,arguments)}function _t(e){return xt.apply(this,arguments)}function xt(){return xt=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("user/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),xt.apply(this,arguments)}function Rt(e){return Ot.apply(this,arguments)}function Ot(){return Ot=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.delete("user/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Ot.apply(this,arguments)}function St(e){return $t.apply(this,arguments)}function $t(){return $t=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.put("user/".concat(t._id),t);case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)}))),$t.apply(this,arguments)}function Tt(){return Ct.apply(this,arguments)}function Ct(){return Ct=Object(X["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:bt,r=Pt(),r.score=r.score+t||t,e.next=5,St(r);case 5:return e.abrupt("return",r.score);case 6:case"end":return e.stop()}}),e)}))),Ct.apply(this,arguments)}function Ut(e){return Et.apply(this,arguments)}function Et(){return Et=Object(X["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("auth/login",t);case 2:if(r=e.sent,!r){e.next=5;break}return e.abrupt("return",Lt(r));case 5:case"end":return e.stop()}}),e)}))),Et.apply(this,arguments)}function Bt(e){return It.apply(this,arguments)}function It(){return It=Object(X["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("auth/signup",t);case 2:return r=e.sent,e.abrupt("return",Lt(r));case 4:case"end":return e.stop()}}),e)}))),It.apply(this,arguments)}function At(){return zt.apply(this,arguments)}function zt(){return zt=Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return sessionStorage.clear(),e.next=3,ne.post("auth/logout");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),zt.apply(this,arguments)}function Lt(e){return sessionStorage.setItem("loggedinUser",JSON.stringify(e)),e}function Pt(){return JSON.parse(sessionStorage.getItem("loggedinUser")||"null")}window.userService=wt;var Dt={state:{loggedinUser:wt.getLoggedinUser(),users:[]},getters:{users:function(e){var t=e.users;return t},loggedinUser:function(e){var t=e.loggedinUser;return t}},mutations:(ft={setLoggedinUser:function(e,t){var r=t.user;e.loggedinUser=r}},Object(gt["a"])(ft,"setLoggedinUser",(function(e,t){var r=t.user;e.loggedinUser=r})),Object(gt["a"])(ft,"setUsers",(function(e,t){var r=t.users;e.users=r})),Object(gt["a"])(ft,"removeUser",(function(e,t){var r=t.userId;e.users=e.users.filter((function(e){return e._id!==r}))})),ft),actions:{login:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.userCred,r.prev=2,r.next=5,wt.login(o);case 5:return s=r.sent,n({type:"setLoggedinUser",user:s}),r.abrupt("return",s);case 10:throw r.prev=10,r.t0=r["catch"](2),console.log("userStore: Error in login",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},signup:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.userCred,r.prev=2,r.next=5,wt.signup(o);case 5:return s=r.sent,n({type:"setLoggedinUser",user:s}),r.abrupt("return",s);case 10:throw r.prev=10,r.t0=r["catch"](2),console.log("userStore: Error in signup",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},logout:function(e){return Object(X["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,wt.logout();case 4:r({type:"setLoggedinUser",user:null}),t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](1),console.log("userStore: Error in logout",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()},loadUsers:function(e){return Object(X["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,wt.getUsers();case 4:n=t.sent,r({type:"setUsers",users:n}),t.next=12;break;case 8:throw t.prev=8,t.t0=t["catch"](1),console.log("userStore: Error in loadUsers",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},removeUser:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.userId,r.prev=2,r.next=5,wt.remove(o);case 5:n({type:"removeUser",userId:o}),r.next=12;break;case 8:throw r.prev=8,r.t0=r["catch"](2),console.log("userStore: Error in removeUser",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},updateUser:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.user,r.prev=2,r.next=5,wt.update(o);case 5:o=r.sent,n({type:"setUser",user:o}),r.next=13;break;case 9:throw r.prev=9,r.t0=r["catch"](2),console.log("userStore: Error in updateUser",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()}}},Ft={state:{reviews:[]},getters:{reviews:function(e){return e.reviews}},mutations:{setReviews:function(e,t){var r=t.reviews;e.reviews=r},addReview:function(e,t){var r=t.review;e.reviews.push(r)}},actions:{loadReviews:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.filterBy,r.prev=2,r.next=5,$e.query(o);case 5:s=r.sent,n({type:"setReviews",reviews:s}),r.next=13;break;case 9:throw r.prev=9,r.t0=r["catch"](2),console.log("Error: Cannot set reviews:",reviews),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()},addReview:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,o=t.review,r.prev=2,o.txt){r.next=5;break}return r.abrupt("return",Promise.reject("review field cannot be empty"));case 5:return r.next=7,$e.save(o);case 7:return s=r.sent,n({type:"addReview",review:s}),console.log("reviewToAdd",s),r.abrupt("return",s);case 13:throw r.prev=13,r.t0=r["catch"](2),console.log("Error: Cannot add review:",o),r.t0;case 17:case"end":return r.stop()}}),r,null,[[2,13]])})))()}}};n["default"].use(yt["a"]);var Mt=new yt["a"].Store({strict:!0,modules:{toyStore:vt,userStore:Dt,reviewStore:Ft}}),Nt=r("5c96"),qt=r.n(Nt),Gt=r("b2d6"),Jt=r.n(Gt),Ht=r("755e"),Wt=r("4c93");Object(we["b"])("alpha",Wt["a"]),Object(we["b"])("between",Wt["b"]);r("0fae"),r("3c61");n["default"].config.productionTip=!1,n["default"].use(qt.a,{locale:Jt.a}),n["default"].use(r("2ead")),n["default"].use(Ht,{load:{key:"AIzaSyCfm1LKS_iiah-t54R0JBYlfmPkEk5AYBA",libraries:"places"}}),new n["default"]({router:ht,store:Mt,render:function(e){return e(l)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.624ecba4.js.map