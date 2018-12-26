(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,r){e.exports=r(39)},31:function(e,t,r){},33:function(e,t,r){},35:function(e,t,r){},37:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(18),c=r.n(a),i=r(2),s=r(3),d=r(6),u=r(4),l=r(7),p=r(5),m=r(8),f=r(20),O=r(1);function h(e){return{type:"RECORDER_START",data:e}}var b=r(21),w=function(){return{type:"FETCH_WORDS",data:[{word:"circuit",tries:0,successes:0},{word:"ephemeral",tries:0,successes:0}]}},g=function(e){return function(t){fetch("https://mydictionaryapi.appspot.com/?define=".concat(e)).then(function(r){200===r.status&&t({type:"ADD_WORD",data:{word:e,tries:0,successes:0}})})}},E=function(e){return{type:"RECORD_WORD_TRY",word:e}},v=function(e){return{type:"RECORD_WORD_SUCCESS",word:e}},R={data:[]};var j=Object(m.c)({recorder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECORDER_START":return Object(O.a)({},e,{recordingState:"recording",word:t.data});case"RECORDER_STOP":return Object(O.a)({},e,{recordingState:"idle",word:null});case"SET_HEARD_WORD":return Object(O.a)({},e,{heardWord:t.data});default:return e}},words:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"FETCH_WORDS":return Object(O.a)({},t,{data:r.data});case"ADD_WORD":return Object(O.a)({},t,{data:[].concat(Object(b.a)(t.data),[r.data])});case"RECORD_WORD_TRY":return(e=t.data.slice()).find(function(e){return e.word===r.word}).tries+=1,Object(O.a)({},t,{data:e});case"RECORD_WORD_SUCCESS":return(e=t.data.slice()).find(function(e){return e.word===r.word}).successes+=1,Object(O.a)({},t,{data:e});default:return t}}}),W=Object(m.e)(j,{},Object(m.d)(Object(m.a)(f.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=r(11),y=(r(31),function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={wordInput:""},r.onClick=function(){r.props.addWord(r.state.wordInput)},r.onChange=function(e){r.setState(Object(S.a)({},e.target.name,e.target.value))},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"formWrapper"},o.a.createElement("div",{className:"level-item field has-addons"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input is-large",type:"text",name:"wordInput",onChange:this.onChange,value:this.state.wordInput})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button is-large",onClick:this.onClick},"add"))))}}]),t}(o.a.Component));y=Object(p.b)(null,function(e){return{addWord:function(t){return e(g(t))}}})(y);var _=r(14),C=r.n(_),D=(r(33),function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onClick=function(){var e=new SpeechSynthesisUtterance(r.props.word),t=window.speechSynthesis;e.voice=t.getVoices()[0],t.speak(e)},r.onRecord=function(){var e=r.props.recorder,t=e.recordingState,n=e.word;"recording"===t&&n===r.props.word?r.props.stopRecorder():r.props.startRecorder(r.props.word)},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.recorder.word===this.props.word,t=C()({animated:!0,pulse:!0,link:!0,"has-text-link":!0,"level-item":!0}),r=C()({animated:!0,infinite:!0,slow:!0,"level-item":!0,button:!0,"is-primary":e,"is-link":!e,heartBeat:e});return o.a.createElement("div",{className:"wordWrapper is-mobile"},o.a.createElement("div",{className:"level-left"},o.a.createElement("div",{className:t,onClick:this.onClick},"".concat(this.props.word," (").concat(this.props.successes,"/").concat(this.props.tries,")"))),o.a.createElement("div",{className:"level-right"},o.a.createElement("button",{className:r,onClick:this.onRecord},e?"stop":"test me")))}}]),t}(o.a.Component));D=Object(p.b)(function(e){return{words:e.words,recorder:e.recorder}},function(e){return{startRecorder:function(t){return e(h(t))},stopRecorder:function(){return e({type:"RECORDER_STOP"})}}})(D);var k=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchWords()}},{key:"render",value:function(){return o.a.createElement("ul",null,this.props.words.data.map(function(e){return o.a.createElement(D,Object.assign({key:e.word},e))}))}}]),t}(o.a.Component);k=Object(p.b)(function(e){return{words:e.words,recorder:e.recorder}},function(e){return{fetchWords:function(){return e(w())}}})(k);r(35);var T=function(e){function t(e){var r;Object(i.a)(this,t),r=Object(d.a)(this,Object(u.a)(t).call(this,e));var n=new window.webkitSpeechRecognition;return n.lang="en-US",n.interimResults=!1,n.maxAlternatives=1,n.onerror=e.stopRecorder,r.state={recordingWord:null,recognitionEngine:n},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.recorder.heardWord;return e?e===this.state.recordingWord?o.a.createElement("div",{className:"has-background-success messageWrapper"},"Good job!"):o.a.createElement("div",{className:"has-background-warning messageWrapper"},'heard "'.concat(e,'"')):o.a.createElement("div",{className:"messageWrapper"},this.state.recordingWord?"Listening for ".concat(this.state.recordingWord):"Click on the test me button on a word in the list")}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.recorder,n=r.recordingState,o=r.word,a=r.heardWord;if(t.recordingWord!==o&&"recording"===n){var c=e.words.data.map(function(e){return e.word}),i="#JSGF V1.0; grammar words; public <word> = ".concat(c.join(" | "),";"),s=new window.webkitSpeechGrammarList;return s.addFromString(i,1),t.recognitionEngine.grammars=s,t.recognitionEngine.onresult=function(t){var r=t.results[0][0].transcript.toLowerCase();r===o&&e.recordWordSuccess(o),e.recordWordTry(o),e.setHeardWord(r),e.stopRecorder()},t.recognitionEngine.onnomatch=function(){e.recordWordTry(o),e.stopRecorder()},t.recognitionEngine.start(),Object(O.a)({},t,{recordingWord:o})}return t.recordingWord&&!a&&"idle"===n?(t.recognitionEngine.abort(),Object(O.a)({},t,{recordingWord:null})):("idle"===n&&t.recognitionEngine.onresult&&(t.recognitionEngine.onresult=null,t.recognitionEngine.onnomatch=null,t.recognitionEngine.abort(),setTimeout(function(){e.setHeardWord(null)},2e3)),null)}}]),t}(o.a.Component);T=Object(p.b)(function(e){return{recorder:e.recorder,words:e.words}},function(e){return{recordWordTry:function(t){return e(E(t))},recordWordSuccess:function(t){return e(v(t))},startRecorder:function(t){return e(h(t))},stopRecorder:function(){return e({type:"RECORDER_STOP"})},setHeardWord:function(t){return e(function(e){return{type:"SET_HEARD_WORD",data:e}}(t))}}})(T);r(37);var N=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:W},o.a.createElement("div",{className:"App columns is-mobile is-centered"},o.a.createElement("div",{className:"column is-half-tablet is-one-third-desktop"},o.a.createElement(T,null),o.a.createElement(k,null),o.a.createElement(y,null))))}}]),t}(o.a.Component);c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.fe598e43.chunk.js.map