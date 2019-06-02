(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t){},201:function(e,t,a){e.exports=a(499)},224:function(e,t,a){},490:function(e,t,a){},491:function(e,t,a){e.exports=a.p+"static/media/aapte.9fcb606f.png"},492:function(e,t,a){e.exports=a.p+"static/media/jsolis.d23c9804.png"},493:function(e,t,a){e.exports=a.p+"static/media/ttia.f98eba7d.png"},499:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),r=a.n(o),i=a(18),c=a(19),s=a(21),u=a(20),m=a(22),d=a(50),p=a(40),h=a(70),E=(a(208),a(180)),v=a.n(E),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.children({containerWidth:this.props.containerWidth,containerHeight:this.props.containerHeight}))}}]),t}(l.a.Component),g=v()()(f),y=a(106),b=a(181),S=a.n(b),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).loadInstrument=function(e){a.setState({instrument:null}),S.a.instrument(a.props.audioContext,e,{format:a.props.format,soundfont:a.props.soundfont,nameToUrl:function(e,t,n){return"".concat(a.props.hostname,"/").concat(t,"/").concat(e,"-").concat(n,".js")}}).then(function(e){a.setState({instrument:e})})},a.playNote=function(e){a.props.audioContext.resume().then(function(){var t=a.state.instrument.play(e);a.setState({activeAudioNodes:Object.assign({},a.state.activeAudioNodes,Object(y.a)({},e,t))})})},a.stopNote=function(e){a.props.audioContext.resume().then(function(){a.state.activeAudioNodes[e]&&(a.state.activeAudioNodes[e].stop(),a.setState({activeAudioNodes:Object.assign({},a.state.activeAudioNodes,Object(y.a)({},e,null))}))})},a.stopAllNotes=function(){a.props.audioContext.resume().then(function(){Object.values(a.state.activeAudioNodes).forEach(function(e){e&&e.stop()}),a.setState({activeAudioNodes:{}})})},a.state={activeAudioNodes:{},instrument:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadInstrument(this.props.instrumentName)}},{key:"componentDidUpdate",value:function(e,t){e.instrumentName!==this.props.instrumentName&&this.loadInstrument(this.props.instrumentName)}},{key:"render",value:function(){return this.props.render({isLoading:!this.state.instrument,playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes})}}]),t}(l.a.Component);w.defaultProps={format:"mp3",soundfont:"MusyngKite",instrumentName:"acoustic_grand_piano"};var C=w,x=(a(224),new(window.AudioContext||window.webkitAudioContext)),k="https://d1pzp51pvbm36p.cloudfront.net",N={first:h.a.fromNote("c3"),last:h.a.fromNote("f5")};function j(e){return l.a.createElement(g,null,function(t){var a=t.containerWidth;t.containerHeight;return l.a.createElement(C,{instrumentName:"acoustic_grand_piano",audioContext:x,hostname:k,render:function(t){var n=t.isLoading,o=t.playNote,r=t.stopNote;return l.a.createElement(h.b,Object.assign({noteRange:N,width:a,playNote:o,stopNote:r,disabled:n,activeNotes:[44,45,51]},e))}})})}var O=function(){return l.a.createElement("div",{className:"mt-5"},l.a.createElement("p",null,"Piano with custom styling - see styles.css"),l.a.createElement(j,{className:"PianoDarkTheme"}))},D=a(182),A=a.n(D),T=a(30),F=a.n(T),M=a(32),P=a.n(M),z=a(33),B=a.n(z),_=a(3),I=a.n(_),L=function(e){return e.artist?"Bach"===e.artist?l.a.createElement("div",{className:"container"},l.a.createElement(F.a,{className:"Bach",style:{minWidth:"160px"}},l.a.createElement(P.a,{htmlFor:"style-simple"},"Style"),l.a.createElement(B.a,{className:"second-level-select",id:"style",name:"style",value:e.style,onChange:e.handleStyleDropdown,inputProps:{name:"style",id:"style-simple"}},l.a.createElement(I.a,{value:"alla_breve"},"Alla Breve"),l.a.createElement(I.a,{value:"canzona"},"Canzona"),l.a.createElement(I.a,{value:"concerto"},"Concerto"),l.a.createElement(I.a,{value:"fantasy_and_fuga"},"Fantasy and Fuga"),l.a.createElement(I.a,{value:"fugue"},"Fugue"),l.a.createElement(I.a,{value:"kleines"},"Kleines"),l.a.createElement(I.a,{value:"passacaglia"},"Passacaglia"),l.a.createElement(I.a,{value:"pastorale"},"Pastorale"),l.a.createElement(I.a,{value:"pedale"},"Pedale"),l.a.createElement(I.a,{value:"sonata"},"Sonata"),l.a.createElement(I.a,{value:"toccata_and_fuga"},"Toccata and Fuga")))):"Beethoven"===e.artist?l.a.createElement("div",{className:"container"},l.a.createElement(F.a,{className:"Beethoven",style:{minWidth:"160px"}},l.a.createElement(P.a,{htmlFor:"style-simple"},"Style"),l.a.createElement(B.a,{className:"second-level-select",id:"style",name:"style",value:e.style,onChange:e.handleStyleDropdown,inputProps:{name:"style",id:"style-simple"}},l.a.createElement(I.a,{value:"allegretto"},"Allegretto"),l.a.createElement(I.a,{value:"andante"},"Andante"),l.a.createElement(I.a,{value:"bagatelles"},"Bagatelles"),l.a.createElement(I.a,{value:"canon"},"Canon"),l.a.createElement(I.a,{value:"fantast"},"Fantasy"),l.a.createElement(I.a,{value:"polonaise"},"Polonaise"),l.a.createElement(I.a,{value:"rondo"},"Rondo")))):"Chopin"===e.artist?l.a.createElement("div",{className:"container"},l.a.createElement(F.a,{className:"Chopin",style:{minWidth:"160px"}},l.a.createElement(P.a,{htmlFor:"style-simple"},"Style"),l.a.createElement(B.a,{className:"second-level-select",id:"style",name:"style",value:e.style,onChange:e.handleStyleDropdown,inputProps:{name:"style",id:"style-simple"}},l.a.createElement(I.a,{value:"and"},"and"),l.a.createElement(I.a,{value:"ballade"},"Ballade"),l.a.createElement(I.a,{value:"bar"},"bar"),l.a.createElement(I.a,{value:"ber"},"ber"),l.a.createElement(I.a,{value:"bol"},"bol"),l.a.createElement(I.a,{value:"conc"},"conc"),l.a.createElement(I.a,{value:"eco"},"eco"),l.a.createElement(I.a,{value:"etu"},"etu"),l.a.createElement(I.a,{value:"fan"},"fan"),l.a.createElement(I.a,{value:"fun"},"fun"),l.a.createElement(I.a,{value:"imp"},"imp"),l.a.createElement(I.a,{value:"maz"},"maz"),l.a.createElement(I.a,{value:"nocturne"},"Nocturne"),l.a.createElement(I.a,{value:"nou"},"nou"),l.a.createElement(I.a,{value:"polonaise"},"Polonaise"),l.a.createElement(I.a,{value:"pre"},"pre"),l.a.createElement(I.a,{value:"ron"},"ron"),l.a.createElement(I.a,{value:"scherzo"},"Scherzo"),l.a.createElement(I.a,{value:"sonata"},"Sonata"),l.a.createElement(I.a,{value:"tar"},"tar"),l.a.createElement(I.a,{value:"val"},"val"),l.a.createElement(I.a,{value:"waltz"},"Waltz")))):"Mozart"===e.artist?l.a.createElement("div",{className:"container"},l.a.createElement(F.a,{className:"Mozart",style:{minWidth:"160px"}},l.a.createElement(P.a,{htmlFor:"style-simple"},"Style"),l.a.createElement(B.a,{className:"second-level-select",id:"style",name:"style",value:e.style,onChange:e.handleStyleDropdown,inputProps:{name:"style",id:"style-simple"}},l.a.createElement(I.a,{value:"alla_turca"},"Alla Turca"),l.a.createElement(I.a,{value:"diea_irae"},"Diea Irae"),l.a.createElement(I.a,{value:"eine_kleine"},"Eine Kleine"),l.a.createElement(I.a,{value:"menuett"},"Menuett"),l.a.createElement(I.a,{value:"piccola"},"Piccola"),l.a.createElement(I.a,{value:"rondo"},"Rondo"),l.a.createElement(I.a,{value:"sinfonia"},"Sinfonia"),l.a.createElement(I.a,{value:"sonata"},"Sonata"),l.a.createElement(I.a,{value:"symphonia"},"Symphonia")))):void 0:l.a.createElement("h5",null,"Populated upon artist selction")},W=a(38),H=a.n(W),R=a(47),q=a(184),G=a.n(q),J=(a(151),a(48)),U=a.n(J);function K(){window.File&&window.FileReader&&window.FileList&&window.Blob?document.querySelector("#FileDrop input").addEventListener("change",function(e){var t=e.target.files;if(t.length>0){var a=t[0],n="Hit  Play  below to play := "+a.name;document.querySelector("#FileDrop #Text").textContent=n,function(e){var t=new FileReader;t.onload=function(e){var t=new G.a(e.target.result);Y=t},t.readAsArrayBuffer(e)}(a)}}):document.querySelector("#FileDrop #Text").textContent="Reading files not supported by this browser"}var Y=null;var V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fileDropper=function(){K(),a.setState(function(e){return{isDisabled:!e.isDisabled}})},a.state={isToggle:!0,isDisabled:!0},a.handleClick=a.handleClick.bind(Object(R.a)(a)),a.synth=null,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState(function(e){return{isToggle:!e.isToggle}});var t=this.state.isToggle;console.log("here",Y,t),Y&&(t?Y.tracks.forEach(function(t){e.synth=new U.a.PolySynth(10,U.a.Synth,{envelope:{attack:.02,decay:.1,sustain:.3,release:1}}).toMaster(),t.notes.forEach(function(t){e.synth.triggerAttackRelease(t.name,t.duration,t.time,t.velocity)})}):this.synth.disconnect())}},{key:"render",value:function(){var e=this,t=!!this.state.isDisabled;return l.a.createElement("div",null,l.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n\t\t#FileDrop{\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 100px;\n\t\t\tborder: 2px dashed black;\n\t\t\tcolor: black;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t\t#FileDrop.Hover{\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t}\n\t\t#FileDrop input {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\topacity: 0;\n\t\t\tleft: 0px;\n\t\t\ttop: 0px;\n\t\t}\n\t\t#FileDrop #Text {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 20px;\n\t\t\tline-height: 20px;\n\t\t\tleft: 0px;\n\t\t\ttop: 50%;\n\t\t\ttransform: translate(0, -50%);\n\t\t\ttext-align: center;\n\t\t}\n\t\ttextarea {\n\t\t\tfont-family: monospace;\n\t\t\theight: 300px;\n\t\t\twidth: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\tposition: relative;\n\t\t\tfloat: left;\n\t\t}\n\t\t#Results {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin: 10px auto;\n\t\t}\n\t\t#Description {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\theight: 40px;\n\t\t\tfont-size: 16px;\n\t\t\tmargin: 10px auto;\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttone-play-toggle {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t"}}),l.a.createElement("tone-content",null,l.a.createElement("div",{id:"FileDrop"},l.a.createElement("div",{id:"Text"},"Click here to load a midi file"),l.a.createElement("input",{type:"file",accept:"audio/midi",onClick:this.fileDropper})),l.a.createElement(H.a,{id:"playStop",disabled:t,variant:"contained",color:"primary",onClick:function(){return e.handleClick()}},this.state.isToggle?"Play":"Stop")))}}]),t}(n.Component),Q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({note:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=a(379);A.a.post("https://d2e5qclo8zym4m.cloudfront.net/generator/",e.state,{responseType:"blob"}).then(function(t){console.log(t.data,"res.data"),n(t.data,e.state.artist+"_"+e.state.style+"_"+e.state.note+"_"+e.state.model+".mid")}).catch(function(e){})},e.handleArtistDropdown=function(t){t.preventDefault(),e.setState({artist:t.target.value})},e.handleModelDropdown=function(t){t.preventDefault(),e.setState({model:t.target.value})},e.handleStyleDropdown=function(t){t.preventDefault(),e.setState({style:t.target.value})},e.state={artist:"",note:"",style:"",model:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{align:"center"},l.a.createElement("h2",null,"Create an AI generated song from scratch"),l.a.createElement("h4",null,"Step 1: Pick an artist and style"),l.a.createElement("form",{action:"/generator/",method:"POST"},l.a.createElement(F.a,{style:{minWidth:"160px"}},l.a.createElement(P.a,null,"Artist"),l.a.createElement(B.a,{id:"artist",name:"artist",required:!0,label:"Artist",value:this.state.artist,onChange:this.handleArtistDropdown},l.a.createElement(I.a,{value:"Bach"},"Bach"),l.a.createElement(I.a,{value:"Beethoven"},"Beethoven"),l.a.createElement(I.a,{value:"Chopin"},"Chopin"),l.a.createElement(I.a,{value:"Mozart"},"Mozart")),l.a.createElement(L,{artist:this.state.artist,style:this.state.style,handleStyleDropdown:this.handleStyleDropdown})),l.a.createElement("h4",null,"Step 2: Pick a model to generate notes then hit Submit"),l.a.createElement("div",{className:"flex-align"},l.a.createElement(F.a,{style:{minWidth:"80px"}},l.a.createElement(P.a,null,"LSTM"),l.a.createElement(B.a,{id:"model",name:"model",value:this.state.model,onChange:this.handleModelDropdown},l.a.createElement(I.a,{value:"128"},"128 LSTM"),l.a.createElement(I.a,{value:"256"},"256 LSTM"),l.a.createElement(I.a,{value:"512"},"512 LSTM"))),l.a.createElement(F.a,{style:{margin:"15px 0 0 15px"}},l.a.createElement(H.a,{variant:"contained",color:"primary",id:"note-button",onClick:this.handleSubmit},"Submit")))),l.a.createElement("h4",null,"Step 3: Wait 30-60 seconds for the AI to generate a music file and download"),l.a.createElement("h4",null,"Step 4: Click and load the music file below and hit play!"),l.a.createElement(V,null))}}]),t}(n.Component),X=a(108),Z=a.n(X),$=a(194),ee=a.n($),te=a(200),ae=a(189),ne=a.n(ae),le=a(192),oe=a.n(le),re=a(191),ie=a.n(re),ce=a(190),se=a.n(ce),ue=a(39),me=a.n(ue),de=a(193),pe=a.n(de),he=a(67),Ee=a.n(he),ve={},fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isToggle:!0,song:""},a.handleClick=a.handleClick.bind(Object(R.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){console.log("handleclick"+e),this.setState(function(e){return{isToggle:!e.isToggle}}),this.state.isToggle?(ve=new U.a.Player(e).toMaster(),U.a.Buffer.on("load",function(){ve.start()})):ve.stop()}},{key:"render",value:function(){var e=this,t=this.props,a=t.music.fields.musicSong.fields.file.url;return l.a.createElement("div",null,t.music?l.a.createElement(ne.a,null,l.a.createElement(se.a,{style:{height:0,paddingTop:"56.25%"},image:t.music.fields.musicImage.fields.file.url,title:t.music.fields.title}),l.a.createElement(ie.a,null,l.a.createElement(me.a,{gutterBottom:!0,variant:"headline",component:"h2"},t.music.fields.title),l.a.createElement(me.a,{component:"p"},t.music.fields.description,l.a.createElement("br",null),t.music.fields.musicSong.fields.file.url.split("/").pop())),l.a.createElement(oe.a,null,l.a.createElement(H.a,{size:"small",color:"primary",onClick:function(){return e.handleClick(a)}},this.state.isToggle?"Play":"Stop"),l.a.createElement(Ee.a,{"aria-label":"Play/pause",onClick:function(){return e.handleClick(a)}},l.a.createElement(pe.a,null)))):null)}}]),t}(n.Component),ge=a(68),ye=a.n(ge),be=a(69),Se=a.n(be),we=function(){return l.a.createElement("div",null,l.a.createElement(ye.a,{position:"static"},l.a.createElement(Se.a,null,l.a.createElement(me.a,{variant:"title",color:"inherit"},"Melody Interpretter - AI Generated Music"))))},Ce=te.a({space:"viwz6ijsgmv0",accessToken:"w3GgVeFeFLYkCfJCIsHfo0SG44cH4ToUuDpRYM2lMJk"}),xe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={contentFields:[],searchString:""},e.getMusics=function(){Ce.getEntries({content_type:"chopin",query:e.state.searchString}).then(function(t){e.setState({contentFields:t.items}),console.log(e.state.contentFields)}).catch(function(e){console.log("Error occurred while fetching Entries"),console.error(e)})},e.onSearchInputChange=function(t){console.log("Search changed ..."+t.target.value),t.target.value?e.setState({searchString:t.target.value}):e.setState({searchString:""}),e.getMusics()},e.getMusics(),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(we,null),this.state.contentFields?l.a.createElement("div",null,l.a.createElement(ee.a,{style:{padding:24},id:"searchInput",placeholder:"Search for Musics",margin:"normal",onChange:this.onSearchInputChange}),l.a.createElement(Z.a,{container:!0,spacing:24,style:{padding:24}},this.state.contentFields.map(function(e){return l.a.createElement(Z.a,{item:!0,xs:12,sm:6,lg:4,xl:3},l.a.createElement(fe,{music:e}))}))):"No musics found")}}]),t}(n.Component),ke=a(197),Ne=a.n(ke),je=a(195),Oe=a.n(je),De=a(196),Ae=a.n(De),Te=a(198),Fe=a.n(Te),Me=(a(490),function(){return l.a.createElement("div",{className:"about-container"},l.a.createElement("p",null,"Melody Interpolater uses the power of recurrent neural networks to generate music in the styles of classical composers. Our team trains neural network models to learn the styles of composers from their music samples. We then utilize a prediction algorithm to allow users to generate music based on what the model has learned."),l.a.createElement("p",null,'Currently, we have trained models for Bach, Beethoven, Chopin and Mozart with plans to expand into styles of other classical composers. Users can generate music themselves by heading to "Generator" and following the instructions. Users can also listen to music samples generated by the team by heading to "Library".'),l.a.createElement("h4",null,"Our Team:"),l.a.createElement("div",{className:"about-images"},l.a.createElement("div",null,l.a.createElement("p",null,"A Apte"),l.a.createElement("img",{src:a(491),alt:"pic of a",width:"170px"})),l.a.createElement("div",null,l.a.createElement("p",null,"Joshua Solis"),l.a.createElement("img",{src:a(492),alt:"pic of josh",width:"170px"})),l.a.createElement("div",null,l.a.createElement("p",null,"Tony Tia"),l.a.createElement("img",{src:a(493),alt:"pic of tony",width:"170px"}))))}),Pe=Ae()(Oe()("anchorEl","updateAnchorEl",null)),ze=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",null,l.a.createElement(ye.a,{position:"static"},l.a.createElement(Se.a,{variant:"dense"},l.a.createElement(Pe,null,function(e){var t=e.anchorEl,a=e.updateAnchorEl,n=Boolean(t),o=function(){a(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ee.a,{"aria-owns":n?"render-props-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},l.a.createElement(Ne.a,null)),l.a.createElement(Fe.a,{id:"render-props-menu",anchorEl:t,open:n,onClose:o},l.a.createElement(I.a,{onClick:o},l.a.createElement(d.b,{style:{margin:"10px",textDecoration:"none",color:"unset"},to:"/"},"Home")),l.a.createElement(I.a,{onClick:o},l.a.createElement(d.b,{style:{margin:"10px",textDecoration:"none",color:"unset"},to:"/generator/"},"Generator")),l.a.createElement(I.a,{onClick:o},l.a.createElement(d.b,{style:{margin:"10px",textDecoration:"none",color:"unset"},to:"/library"},"Library"))),l.a.createElement(me.a,{variant:"h6",color:"inherit"},"Melody Interpolator"))}))),l.a.createElement(p.a,{path:"/piano",component:O}),l.a.createElement(p.a,{path:"/library",component:xe}),l.a.createElement(p.a,{path:"/generator/",component:Q}),l.a.createElement(p.a,{exact:!0,path:"/",component:Me}))}}]),t}(n.Component);r.a.render(l.a.createElement(d.a,null,l.a.createElement(ze,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.d9a23a96.chunk.js.map