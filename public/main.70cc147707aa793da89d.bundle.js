webpackJsonp([0,4],{215:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0,url:"http://projectjess-enzotiezzi.rhcloud.com"}},330:function(t,e,n){"use strict";var r=n(0),i=n(150),o=n(522);n.n(o);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t=a([n.i(r.H)({selector:"app-root",template:n(689),styles:[n(676)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},331:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.onEditorKeyup=new r._20}return t.prototype.ngAfterViewInit=function(){var t=this;tinymce.init({selector:"#"+this.elementId,plugins:["textcolor","link","paste","table","colorpicker"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",skin_url:"../../assets/skins/lightgray",setup:function(e){t.editor=e}})},t.prototype.ngOnDestroy=function(){tinymce.remove(this.editor)},t.prototype.getContent=function(){return this.editor.getContent()},i([n.i(r.C)(),o("design:type",Object)],t.prototype,"elementId",void 0),i([n.i(r.D)(),o("design:type",Object)],t.prototype,"onEditorKeyup",void 0),t=i([n.i(r.H)({selector:"simple-tiny",template:'<textarea id="{{elementId}}"></textarea>'}),o("design:paramtypes",[])],t)}()},332:function(t,e,n){"use strict";var r=n(0),i=n(150);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t=o([n.i(r.H)({selector:"app-home",template:n(692),styles:[n(679)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},333:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([n.i(r.H)({selector:"app-pagenotfound",template:n(693),styles:[n(680)]}),o("design:paramtypes",[])],t)}()},334:function(t,e,n){"use strict";var r=n(0),i=n(150),o=n(518),a=n(336),s=n(521);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.activatedRoute=t,this.quizService=e,this.quiz=new o.a,this.respostas=[],this.identificacao=""}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){var n=e.id;t.quizService.buscarQuiz(n).subscribe(function(e){t.quiz=e;for(var n=0;n<t.quiz.itensQuiz.length;n++){var r=t.quiz.itensQuiz[n],i=new s.a;i.idQuiz=r.idQuiz,i.idItemQuiz=r._id,t.respostas.push(i)}})})},t.prototype.responderQuiz=function(){var t=this;0==this.identificacao.length?alert("Digite seu insta ou E-mail"):confirm("Tem certeza?")&&(this.respostas.forEach(function(e){e.identificacao=t.identificacao}),this.quizService.responderQuiz(this.respostas).subscribe(function(t){t&&alert("Quiz respondido")}))},t=c([n.i(r.H)({selector:"quiz-responder",template:n(694),providers:[a.a]}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.b&&i.b)&&e||Object,"function"==typeof(u="undefined"!=typeof a.a&&a.a)&&u||Object])],t);var e,u}()},335:function(t,e,n){"use strict";var r=n(0),i=n(520),o=n(519),a=n(336);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.quizService=t,this.quiz=new i.a}return t.prototype.ngOnInit=function(){this.adicionarPergunta()},t.prototype.adicionarPergunta=function(){this.quiz.itensQuiz.push(new o.a)},t.prototype.deletarPerguntar=function(t){this.quiz.itensQuiz.splice(t,1)},t.prototype.criarQuiz=function(){this.quizService.criarQuiz(this.quiz).subscribe(function(t){t&&alert("quiz criado")})},t=s([n.i(r.H)({selector:"app-quiz",template:n(695),styles:[n(681)],providers:[a.a]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},336:function(t,e,n){"use strict";var r=n(0),i=n(144),o=n(6),a=(n.n(o),n(215));n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.URL=a.a.url+"/apis/quiz",this.headers=new i.c({"Content-Type":"application/json"})}return t.prototype.criarQuiz=function(t){var e=this.URL+"/criar";return this.http.post(e,t).map(function(t){return t.status>=200&&t.status<300}).catch(this.handleError)},t.prototype.buscarQuiz=function(t){var e=this.URL+"/quiz/"+t;return this.http.get(e).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.responderQuiz=function(t){var e=this.URL+"/responder";return this.http.post(e,{respostas:t},{headers:this.headers}).map(function(t){return t.status>=200&&t.status<300}).catch(this.handleError)},t.prototype.handleError=function(t){var e;if(t instanceof i.a){var n=t.json()||"",r=n.error||JSON.stringify(n);e=t.status+" - "+(t.statusText||"")+" "+r}else e=t.message?t.message:t.toString();return console.error(e),o.Observable.throw(e)},t=s([n.i(r.f)(),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.b&&i.b)&&e||Object])],t);var e}()},337:function(t,e,n){"use strict";var r=n(0),i=n(331),o=n(523),a=n(340),s=n(339);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.uploadService=t,this.resenhaService=e,this.resenha=new a.a}return t.prototype.ngOnInit=function(){},t.prototype.criarResenha=function(){var t=this;this.uploadService.makeFileRequest(this.fotoElement.nativeElement.files[0],function(e){var n=JSON.parse(e);t.resenha.linkImagem=n.data.link,t.resenha.resenha=t.tinyComponent.getContent(),t.resenhaService.criarResenha(t.resenha).subscribe(function(t){t&&alert("Resenha Criada")})})},c([n.i(r._1)("tiny"),l("design:type","function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object)],t.prototype,"tinyComponent",void 0),c([n.i(r._1)("foto"),l("design:type","function"==typeof(u="undefined"!=typeof r.h&&r.h)&&u||Object)],t.prototype,"fotoElement",void 0),t=c([n.i(r.H)({selector:"criar-resenha",template:n(696),styles:[n(378)],providers:[o.a,s.a]}),l("design:paramtypes",["function"==typeof(f="undefined"!=typeof o.a&&o.a)&&f||Object,"function"==typeof(d="undefined"!=typeof s.a&&s.a)&&d||Object])],t);var e,u,f,d}()},338:function(t,e,n){"use strict";var r=n(0),i=n(339);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.resenhaService=t,this.resenhas=[]}return t.prototype.ngOnInit=function(){var t=this;this.resenhaService.listarResenhas().subscribe(function(e){t.resenhas=e})},t=o([n.i(r.H)({selector:"app-resenhas",template:n(697),styles:[n(378)],providers:[i.a]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},339:function(t,e,n){"use strict";var r=n(0),i=n(6),o=(n.n(i),n(144)),a=n(215);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.URL=a.a.url+"/apis/resenha"}return t.prototype.criarResenha=function(t){var e=this.URL+"/criar";return this.http.post(e,t).map(function(t){return t.status>=200&&t.status<300}).catch(this.handleError)},t.prototype.listarResenhas=function(){var t=this.URL+"/listar";return this.http.get(t).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){var e;if(t instanceof o.a){var n=t.json()||"",r=n.error||JSON.stringify(n);e=t.status+" - "+(t.statusText||"")+" "+r}else e=t.message?t.message:t.toString();return console.error(e),i.Observable.throw(e)},t=s([n.i(r.f)(),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.b&&o.b)&&e||Object])],t);var e}()},340:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.titulo="",this.autor="",this.editora="",this.quantidadePaginas="",this.resenha="",this.linkImagem="",this.nota=0}return t}()},378:function(t,e){t.exports=""},392:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=392},393:function(t,e,n){"use strict";var r=n(524),i=(n.n(r),n(485)),o=n(0),a=n(215),s=n(517);a.a.production&&n.i(o._40)(),n.i(i.a)().bootstrapModule(s.a)},513:function(t,e,n){"use strict";var r=n(148),i=n(0),o=n(476),a=n(144),s=n(514),c=n(150),l=n(330),u=n(516),f=n(332),d=n(338),p=n(331),h=n(337),v=n(335),y=n(333),m=n(334),g=n(515);n.d(e,"a",function(){return j});var b=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(){function t(){}return t=b([n.i(i.J)({declarations:[l.a,u.a,f.a,d.a,p.a,h.a,v.a,y.a,m.a,g.a],imports:[r.b,o.a,a.d,c.c.forRoot(s.a)],providers:[],bootstrap:[l.a]}),R("design:paramtypes",[])],t)}()},514:function(t,e,n){"use strict";var r=n(332),i=n(338),o=n(337),a=n(335),s=n(334),c=n(333);n.d(e,"a",function(){return l});var l=[{path:"",component:r.a},{path:"resenhas",component:i.a},{path:"resenhas/criar",component:o.a},{path:"quiz/criar",component:a.a},{path:"quiz/responder/:id",component:s.a},{path:"**",component:c.a}]},515:function(t,e,n){"use strict";var r=n(0),i=n(340);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.notas=[]}return t.prototype.ngAfterViewInit=function(){},t.prototype.ngOnInit=function(){this.resenha.nota>5?this.resenha.nota=5:this.resenha.nota<0&&(this.resenha.nota=0),this.notas=Array(this.resenha.nota).fill(0)},o([n.i(r.C)(),a("design:type","function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object)],t.prototype,"resenha",void 0),t=o([n.i(r.H)({selector:"resenha-item",template:n(690),styles:[n(677)]}),a("design:paramtypes",[])],t);var e}()},516:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([n.i(r.H)({selector:"app-header",template:n(691),styles:[n(678)]}),o("design:paramtypes",[])],t)}()},517:function(t,e,n){"use strict";var r=(n(330),n(513));n.d(e,"a",function(){return r.a})},518:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this._id="",this.nomeQuiz="",this.itensQuiz=[],this.dataQuiz=""}return t}()},519:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.idQuiz="",this._id="",this.pergunta=""}return t}()},520:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this._id="",this.nomeQuiz="",this.itensQuiz=[],this.dataQuiz=""}return t}()},521:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this._id="",this.idQuiz="",this.idItemQuiz="",this.resposta=""}return t}()},522:function(t,e,n){"use strict";var r=n(703),i=(n.n(r),n(704)),o=(n.n(i),n(705)),a=(n.n(o),n(706)),s=(n.n(a),n(707)),c=(n.n(s),n(708)),l=(n.n(c),n(709));n.n(l)},523:function(t,e,n){"use strict";var r=n(144);n.d(e,"a",function(){return i});var i=function(){function t(){this.clientId="ed8edf6f082b9fd",this.URL="https://api.imgur.com/3/image",this.headers=new r.c({Authorization:"Client-ID "+this.clientId})}return t.prototype.makeFileRequest=function(t,e){var n=this;return new Promise(function(r,i){var o=new FormData,a=new XMLHttpRequest;o.append("image",t,t.name),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?e(a.response):i(a.response))},a.open("POST",n.URL,!0),a.setRequestHeader("Authorization","Client-ID "+n.clientId),a.send(o)})},t}()},524:function(t,e,n){"use strict";var r=n(538),i=(n.n(r),n(531)),o=(n.n(i),n(527)),a=(n.n(o),n(533)),s=(n.n(a),n(532)),c=(n.n(s),n(530)),l=(n.n(c),n(529)),u=(n.n(l),n(537)),f=(n.n(u),n(526)),d=(n.n(f),n(525)),p=(n.n(d),n(535)),h=(n.n(p),n(528)),v=(n.n(h),n(536)),y=(n.n(v),n(534)),m=(n.n(y),n(539)),g=(n.n(m),n(730));n.n(g)},676:function(t,e){t.exports=""},677:function(t,e){t.exports=".book-title{\r\n    color:red;\r\n    font-size:9pt;\r\n    padding:5px;\r\n    font-weight:bold;\r\n}\r\n\r\n.book-description{\r\n    color:red;\r\n    font-size:8pt;\r\n    padding:5px;\r\n    font-weight:600;\r\n}\r\n\r\n.resenha-item{\r\n    margin:5px; \r\n    padding:5px;\r\n    background-color:white;\r\n    border-radius:16px;\r\n}"},678:function(t,e){t.exports=""},679:function(t,e){t.exports=""},680:function(t,e){t.exports=""},681:function(t,e){t.exports=".material-icons{\r\n    color:#616161;\r\n}"},689:function(t,e){t.exports="<router-outlet></router-outlet>"},690:function(t,e){t.exports='<div class="col-xs-12 col-md-4 resenha-item">\r\n    <img [src]="resenha.linkImagem" style="width: 100px; height: 75px; float: left">\r\n    \r\n    <div class="book-title">{{ resenha.titulo }}</div>\r\n    <div class="book-description">Autor: {{ resenha.autor }}</div>\r\n    <div *ngIf="notas.length > 0">\r\n        <img *ngFor="let item of notas" src="../../../assets/kindle.png" style="width: 20px; height: 20px" />\r\n    </div>\r\n</div>\r\n'},691:function(t,e){t.exports='<div class="row social-media" style="margin-left: -15px !important; margin-right: -15px;">\n        <div class="container">\n            <a href="https://www.instagram.com/lendorelendoencantando/?hl=pt-br" target="_blank">\n                <img class="instagram-icon pull-right" src="../../assets/insta.png" />\n            </a>\n            <a href="https://pt-br.facebook.com/lendorelendoencantando" target="_blank">\n              <img class="instagram-icon pull-right icon-item" src="../../assets/face.png" />\n            </a>\n        </div>\n    </div>\n\n    <div class="title" style="text-align: center;">\n        <div>Lendo,</div>\n        <div>Relendo,</div>\n        <div>Encantando</div>\n    </div>\n\n    <div style="margin-top: 20px">\n        <nav class="navbar navbar-light bg-faded ">\n            <ul class="nav navbar-nav">\n                <li class="nav-item active">\n                    <a class="nav-link nav-item-color" href="#">Início <span class="sr-only">(current)</span></a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link nav-item-color" href="#">Resenhas</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link nav-item-color" href="#">Entrevistas</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link nav-item-color" href="#">Parceiros</a>\n                </li>\n                <li class="dropdown">\n                    <a class="dropdown-toggle nav-item-color" data-toggle="dropdown" href="#">Dicas<span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="#"><span class="nav-item-color">Filmes</span></a></li>\n                        <li><a href="#"><span class="nav-item-color">Séries</span></a></li>\n                    </ul>\n                </li>\n            </ul>\n        </nav>\n    </div>\n'},692:function(t,e){t.exports='<div class="container">\r\n    <app-header></app-header>\r\n\r\n    <app-resenhas></app-resenhas>\r\n</div>\r\n'},693:function(t,e){t.exports="<p>\n  pagenotfound works!\n</p>\n"},694:function(t,e){t.exports='<div class="container">\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12" style="text-align: center">\r\n        <span class="field-title" style="font-size: 26pt;">Quiz</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row" style="margin-top: 20px">\r\n        <div class="col-xs-12">\r\n            <div class="form-group">\r\n                <div>Digite seu insta/E-mail</div>\r\n                <input class="form-control" type="text" name="identificacao" [(ngModel)]="identificacao">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row" *ngFor="let item of quiz.itensQuiz; let i = index">\r\n        <div class="form-group">\r\n            <div class="col-xs-12">\r\n            <span>{{ item.pergunta }}</span>\r\n            </div>\r\n\r\n            <div class="col-xs-12" *ngIf="respostas[i] != undefined">\r\n                <input class="form-control" type="text" name="resposta" [(ngModel)]="respostas[i].resposta">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <button type="button" class="btn pull-right" (click)="responderQuiz()">Responder</button>\r\n    </div>\r\n</div>'},695:function(t,e){t.exports='<div class="container">\n  <div class="row">\n    <div class="col-xs-12" style="text-align: center">\n      <span class="field-title" style="font-size: 26pt;">Quiz</span>\n    </div>\n  </div>\n  <div class="row" (click)="adicionarPergunta()">\n    <span><i class="material-icons">&#xE3CD;</i></span>\n  </div>\n  <div class="row form-group" *ngFor="let p of quiz.itensQuiz; let i = index">\n    <div class="col-xs-10">\n      <input type="text" class="form-control" name="pergunta" [(ngModel)]="p.pergunta" placeholder="Digite a pergunta">\n    </div>\n    <div class="col-xs-2" (click)="deletarPerguntar(i)">\n      <i class="material-icons">&#xE872;</i>\n    </div>\n  </div>\n  <div class="row">\n    <button type="button" class="btn pull-right" (click)="criarQuiz()">Cadastrar</button>\n  </div>\n</div>'},696:function(t,e){t.exports='<div class="container">\r\n    <div class="col-xs-12" style="text-align: center;">\r\n        <span class="title">Criar Resenha</span>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="titulo" class="field-title">Foto do livro</label>\r\n            <input #foto type="file" class="form-control" id="foto" name="foto" required placeholder="Digite o nome do livro">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="titulo" class="field-title">Título</label>\r\n            <input type="text" class="form-control" id="titulo" name="titulo" [(ngModel)]="resenha.titulo" required placeholder="Digite o nome do livro">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="autor" class="field-title">Autor(a)</label>\r\n            <input type="text" class="form-control" id="autor" name="autor" [(ngModel)]="resenha.autor" required placeholder="Digite o nome do autor(a)">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="ediora" class="field-title">Editora</label>\r\n            <input type="text" class="form-control" id="editora" name="editora" [(ngModel)]="resenha.editora" required placeholder="Digite o nome da editora">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="paginas" class="field-title">Quantidade de páginas</label>\r\n            <input type="number" class="form-control" id="paginas" name="paginas" [(ngModel)]="resenha.quantidadePaginas" required placeholder="Digite a quantidade de páginas">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 col-md-6 form-group">\r\n            <label for="paginas" class="field-title">Nota</label>\r\n            <input type="number" class="form-control" id="nota" name="nota" [(ngModel)]="resenha.nota" required placeholder="Digite a nota">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12 form-group">\r\n            <label for="resenha" class="field-title">Resenha</label>\r\n            <simple-tiny #tiny [elementId]="\'my-tiny\'"></simple-tiny>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group pull-right">\r\n        <input type="button" id="btnCriar" value="Criar" class="btn btn-default" (click)="criarResenha()">\r\n    </div>\r\n</div>'},697:function(t,e){t.exports='<div style="margin-top: 10px;">\n    <resenha-item ng-if="resenhas.length > 0" *ngFor="let r of resenhas" [resenha]="r"></resenha-item>\n</div>'},731:function(t,e,n){t.exports=n(393)}},[731]);
//# sourceMappingURL=main.70cc147707aa793da89d.bundle.map