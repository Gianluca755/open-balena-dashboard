(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{eeac:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Open Balena\n      ")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[e.$store.state.main.loggedIn?n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        "+e._s(e.$t("links"))+"\n      ")]),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2):e._e()],1),n("q-page-container",[n("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:""},on:{click:e.openRoute}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.$t(e.caption))+"\n    ")])],1)],1)},r=[],o=(n("cbc2"),{name:"EssentialLink",methods:{openRoute:function(){this.$router.push({name:this.link})}},props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}}),s=o,c=n("a6c2"),u=n("e0e9"),p=n("6c44"),f=n("19dc"),m=n("dc7c"),d=n("63c1"),b=n.n(d),k=Object(c["a"])(s,l,r,!1,null,null,null),w=k.exports;b()(k,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:f["a"],QItemLabel:m["a"]});var q=[{title:"Home",caption:"home",icon:"home",link:"home"}],_={name:"MainLayout",components:{EssentialLink:w},data:function(){return{leftDrawerOpen:!1,essentialLinks:q}}},h=_,v=n("f624"),Q=n("8738"),L=n("66cf"),g=n("ef9c"),y=n("309f"),O=n("5cc9"),D=n("692f"),E=n("ddc7"),I=Object(c["a"])(h,a,i,!1,null,null,null);t["default"]=I.exports;b()(I,"components",{QLayout:v["a"],QHeader:Q["a"],QToolbar:L["a"],QBtn:g["a"],QToolbarTitle:y["a"],QDrawer:O["a"],QList:D["a"],QItemLabel:m["a"],QPageContainer:E["a"]})}}]);