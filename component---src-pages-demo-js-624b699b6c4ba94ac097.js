(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"Demo",function(){return b});n(175),n(83),n(81),n(165),n(82),n(60);var r=n(8),o=n.n(r),a=n(154),c=n(7),l=n(0),i=n.n(l),d=(n(168),n(169),n(162),n(157)),s=n(170),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).setValues=function(e){return n.setState({selectValues:e})},n.contentRenderer=function(e){var t=e.props,n=e.state;return Object(c.b)("div",null,n.values.length," of ",t.options.length," Selected")},n.noDataRenderer=function(){return Object(c.b)("p",{style:{textAlign:"center"}},Object(c.b)("strong",null,"Ooops!")," No data found")},n.itemRenderer=function(e){var t=e.item,n=(e.itemIndex,e.props),r=(e.state,e.methods);return Object(c.b)("div",{key:t[n.valueField],onClick:function(){return r.addItem(t)}},Object(c.b)("div",{style:{margin:"10px"}},Object(c.b)("input",{type:"checkbox",checked:r.isSelected(t)}),"   ",t[n.labelField]))},n.dropdownRenderer=function(e){var t=e.props,r=e.state,o=e.methods,a=new RegExp(r.search,"i");return Object(c.b)("div",null,Object(c.b)(p,{color:n.state.color},Object(c.b)(j,null,Object(c.b)("div",null,"Search and select:"),o.areAllSelected()?Object(c.b)(g,{className:"clear",onClick:o.clearAll},"Clear all"):Object(c.b)(g,{onClick:o.selectAll},"Select all")),Object(c.b)("input",{type:"text",value:r.search,onChange:o.setSearch,placeholder:"Type anything"})),Object(c.b)(h,null,t.options.filter(function(e){return a.test(e[t.searchBy]||e[t.labelField])}).map(function(e){return!n.state.keepSelectedInList&&o.isSelected(e)?null:Object(c.b)(O,{disabled:e.disabled,key:e[t.valueField],onClick:e.disabled?null:function(){return o.addItem(e)}},Object(c.b)("input",{type:"checkbox",onChange:function(){return o.addItem(e)},checked:-1!==r.values.indexOf(e)}),Object(c.b)(f,null,e[t.labelField]))})))},n.optionRenderer=function(e){var t=e.option,n=(e.props,e.state,e.methods);return Object(c.b)(i.a.Fragment,null,Object(c.b)("div",{onClick:function(e){return n.removeItem(e,t,!0)}},t.label))},n.inputRenderer=function(e){e.props;var t=e.state,n=e.methods;return Object(c.b)("input",{tabIndex:"1",className:"react-dropdown-select-input",size:n.getInputSize(),value:t.search,onClick:function(){return n.dropDown("open")},onChange:n.setSearch,placeholder:"Type in"})},n.state={multi:!0,disabled:!1,loading:!1,contentRenderer:!1,dropdownRenderer:!1,inputRenderer:!1,itemRenderer:!1,optionRenderer:!1,noDataRenderer:!1,selectValues:[],searchBy:"username",clearable:!1,searchable:!0,create:!1,separator:!1,forceOpen:!1,handle:!0,addPlaceholder:"+ click to add",labelField:"username",valueField:"email",color:"#0074D9",keepSelectedInList:!0,closeOnSelect:!1,dropdownPosition:"bottom",direction:"ltr",dropdownHeight:"300px"},n}return o()(t,e),t.prototype.render=function(){var e=this;return Object(c.b)("div",{className:this.props.className},Object(c.b)("div",null,Object(c.b)("div",{style:{maxWidth:"350px",margin:"0 auto"}},Object(c.b)(u,{placeholder:"Select peoples",addPlaceholder:this.state.addPlaceholder,color:this.state.color,disabled:this.state.disabled,loading:this.state.loading,searchBy:this.state.searchBy,separator:this.state.separator,clearable:this.state.clearable,searchable:this.state.searchable,create:this.state.create,keepOpen:this.state.forceOpen,dropdownHandle:this.state.handle,dropdownHeight:this.state.dropdownHeight,direction:this.state.direction,multi:this.state.multi,values:[s.a.find(function(e){return"Bret"===e.username})],labelField:this.state.labelField,valueField:this.state.valueField,options:s.a,dropdownGap:5,keepSelectedInList:this.state.keepSelectedInList,onDropdownOpen:function(){},onDropdownClose:function(){},onClearAll:function(){},onSelectAll:function(){},onChange:function(t){return e.setValues(t)},noDataLabel:"No matches found",closeOnSelect:this.state.closeOnSelect,noDataRenderer:this.state.noDataRenderer?function(){return e.noDataRenderer()}:void 0,dropdownPosition:this.state.dropdownPosition,itemRenderer:this.state.itemRenderer?function(t,n,r,o,a){return e.itemRenderer(t,n,r,o,a)}:void 0,inputRenderer:this.state.inputRenderer?function(t,n,r){return e.inputRenderer(t,n,r)}:void 0,optionRenderer:this.state.optionRenderer?function(t,n,r,o){return e.optionRenderer(t,n,r,o)}:void 0,contentRenderer:this.state.contentRenderer?function(t,n){return e.contentRenderer(t,n)}:void 0,dropdownRenderer:this.state.dropdownRenderer?function(t,n,r){return e.dropdownRenderer(t,n,r)}:void 0}))),Object(c.b)("p",null," "),Object(c.b)("p",null,Object(c.b)("input",{type:"checkbox",checked:this.state.multi,onChange:function(){return e.setState({multi:!e.state.multi})}})," ","Multi",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.disabled,onChange:function(){return e.setState({disabled:!e.state.disabled})}})," ","Disabled",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.loading,onChange:function(){return e.setState({loading:!e.state.loading})}})," ","Loading",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.clearable,onChange:function(){return e.setState({clearable:!e.state.clearable})}})," ","Clearable",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.searchable,onChange:function(){return e.setState({searchable:!e.state.searchable})}})," ","Searchable",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.create,onChange:function(){return e.setState({create:!e.state.create})}})," ","Create new entries",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.separator,onChange:function(){return e.setState({separator:!e.state.separator})}})," ","Separator",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.handle,onChange:function(){return e.setState({handle:!e.state.handle})}})," ","Dropdown handle",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.forceOpen,onChange:function(){return e.setState({forceOpen:!e.state.forceOpen})}})," ","Stay open",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.contentRenderer,onChange:function(){return e.setState({contentRenderer:!e.state.contentRenderer})}})," ","Custom content renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.dropdownRenderer,onChange:function(){return e.setState({dropdownRenderer:!e.state.dropdownRenderer})}})," ","Custom dropdown renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.itemRenderer,onChange:function(){return e.setState({itemRenderer:!e.state.itemRenderer})}})," ","Custom dropdown item renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.keepSelectedInList,onChange:function(){return e.setState({keepSelectedInList:!e.state.keepSelectedInList})}})," ","Keep selected item in a list",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.closeOnSelect,onChange:function(){return e.setState({closeOnSelect:!e.state.closeOnSelect})}})," ","Close dropdown on select/deselect",Object(c.b)("br",null),"Custom color"," ",Object(c.b)("input",{type:"color",defaultValue:this.state.color,onChange:function(t){return e.setState({color:t.target.value})}}),Object(c.b)("br",null),"Dropdown position",Object(c.b)(m,{defaultValue:this.state.dropdownPosition,onChange:function(t){return e.setState({dropdownPosition:t.target.value})}},Object(c.b)("option",{value:"auto"},"auto"),Object(c.b)("option",{value:"top"},"top"),Object(c.b)("option",{value:"bottom"},"bottom")),Object(c.b)("br",null),"Dropdown Height:"," ",Object(c.b)(v,{type:"text",checked:this.state.dropdownHeight,value:this.state.dropdownHeight,onChange:function(t){return e.setState({dropdownHeight:t.target.value})}}),Object(c.b)("br",null),"Dropdown direction",Object(c.b)(m,{defaultValue:this.state.direction,onChange:function(t){return e.setState({direction:t.target.value})}},Object(c.b)("option",{value:"auto"},"auto"),Object(c.b)("option",{value:"rtl"},"right-to-left"),Object(c.b)("option",{value:"ltr"},"left-to-right")),Object(c.b)("br",null),"Add placeholder:"," ",Object(c.b)(v,{type:"text",checked:this.state.addPlaceholder,value:this.state.addPlaceholder,onChange:function(t){return e.setState({addPlaceholder:t.target.value})}}),Object(c.b)("br",null),"Search by field:"," ",Object(c.b)(m,{defaultValue:this.state.searchBy,onChange:function(t){return e.setState({searchBy:t.target.value})}},Object.keys(s.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)})),Object(c.b)("br",null),"Label field:"," ",Object(c.b)(m,{defaultValue:this.state.labelField,onChange:function(t){return e.setState({labelField:t.target.value,searchBy:t.target.value})}},Object.keys(s.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)})),Object(c.b)("br",null),"Value field:"," ",Object(c.b)(m,{defaultValue:this.state.valueField,onChange:function(t){return e.setState({valueField:t.target.value})}},Object.keys(s.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)}))),Object(c.b)("details",null,Object(c.b)("summary",null,"Options:"),Object(c.b)("pre",null,JSON.stringify(s.a,!1,2))),Object(c.b)("details",null,Object(c.b)("summary",null,"Selected values:"),Object(c.b)("pre",null,JSON.stringify(this.state.selectValues,!1,2))))},t}(i.a.Component),u=Object(a.a)(d.a,{target:"e82ion00"})(function(e){return e.dropdownRenderer&&"\n\t\t.react-dropdown-select-dropdown {\n\t\t\toverflow: initial;\n\t\t}\n\t"},""),p=Object(a.a)("div",{target:"e82ion01"})("display:flex;flex-direction:column;input{margin:10px 10px 0;line-height:30px;padding:0 20px;border:1px solid #ccc;border-radius:3px;:focus{outline:none;border:1px solid ",function(e){return e.color},";}}"),h=Object(a.a)("div",{target:"e82ion02"})({name:"1nyg2bj",styles:"overflow:auto;min-height:10px;max-height:200px;"}),O=Object(a.a)("div",{target:"e82ion03"})("display:flex;margin:10px;align-items:baseline;cursor:pointer;border-bottom:1px dotted transparent;:hover{border-bottom:1px dotted #ccc;}",function(e){return e.disabled?"\n  \topacity: 0.5;\n  \tpointer-events: none;\n  \tcursor: not-allowed;\n  ":""},""),f=Object(a.a)("div",{target:"e82ion04"})({name:"1kvddv4",styles:"margin:5px 10px;"}),j=Object(a.a)("div",{target:"e82ion05"})({name:"mn36he",styles:"display:flex;justify-content:space-between;& div{margin:10px 0 0 10px;font-weight:600;}"}),g=Object(a.a)("button",{target:"e82ion06"})({name:"16ox0su",styles:"background:none;border:1px solid #555;color:#555;border-radius:3px;margin:10px 10px 0;padding:3px 5px;font-size:10px;text-transform:uppercase;cursor:pointer;outline:none;&.clear{color:tomato;border:1px solid tomato;}:hover{border:1px solid deepskyblue;color:deepskyblue;}"}),m=Object(a.a)("select",{target:"e82ion07"})({name:"10s36ya",styles:"padding:0;margin:0 0 0 10px;height:23px !important;color:#0071dc;background:#fff;border:1px solid #0071dc;"}),v=Object(a.a)("input",{target:"e82ion08"})({name:"ambt3d",styles:"margin:0 0 0 10px;height:23px !important;color:#0071dc;background:#fff;border:1px solid #0071dc;border-radius:3px;padding:13px 10px;width:70px;"});t.default=b},175:function(e,t,n){var r=n(31),o=n(41);n(176)("keys",function(){return function(e){return o(r(e))}})},176:function(e,t,n){var r=n(13),o=n(22),a=n(29);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],c={};c[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",c)}}}]);
//# sourceMappingURL=component---src-pages-demo-js-624b699b6c4ba94ac097.js.map