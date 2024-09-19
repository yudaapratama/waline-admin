(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#373c42;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#292d33}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#373c42}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var RO = Object.defineProperty;
var hS = (o) => {
  throw TypeError(o);
};
var jO = (o, a, s) => a in o ? RO(o, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[a] = s;
var Va = (o, a, s) => jO(o, typeof a != "symbol" ? a + "" : a, s), Ov = (o, a, s) => a.has(o) || hS("Cannot " + s);
var Kt = (o, a, s) => (Ov(o, a, "read from private field"), s ? s.call(o) : a.get(o)), gs = (o, a, s) => a.has(o) ? hS("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(o) : a.set(o, s), Zf = (o, a, s, l) => (Ov(o, a, "write to private field"), l ? l.call(o, s) : a.set(o, s), s), mt = (o, a, s) => (Ov(o, a, "access private method"), s);
function TO(o, a) {
  for (var s = 0; s < a.length; s++) {
    const l = a[s];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const d in l)
        if (d !== "default" && !(d in o)) {
          const f = Object.getOwnPropertyDescriptor(l, d);
          f && Object.defineProperty(o, d, f.get ? f : {
            enumerable: !0,
            get: () => l[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function xd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var i1 = { exports: {} }, Fv = {}, o1 = { exports: {} }, dd = { exports: {} };
dd.exports;
(function(o, a) {
  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var s = "18.3.1", l = Symbol.for("react.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), D = Symbol.iterator, P = "@@iterator";
    function L(N) {
      if (N === null || typeof N != "object")
        return null;
      var T = D && N[D] || N[P];
      return typeof T == "function" ? T : null;
    }
    var $ = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, k = {
      transition: null
    }, U = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, I = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, Z = {}, Le = null;
    function ke(N) {
      Le = N;
    }
    Z.setExtraStackFrame = function(N) {
      Le = N;
    }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
      var N = "";
      Le && (N += Le);
      var T = Z.getCurrentStack;
      return T && (N += T() || ""), N;
    };
    var he = !1, be = !1, nt = !1, pe = !1, we = !1, Ce = {
      ReactCurrentDispatcher: $,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: I
    };
    Ce.ReactDebugCurrentFrame = Z, Ce.ReactCurrentActQueue = U;
    function et(N) {
      {
        for (var T = arguments.length, B = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          B[Y - 1] = arguments[Y];
        Qe("warn", N, B);
      }
    }
    function Ee(N) {
      {
        for (var T = arguments.length, B = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          B[Y - 1] = arguments[Y];
        Qe("error", N, B);
      }
    }
    function Qe(N, T, B) {
      {
        var Y = Ce.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (T += "%s", B = B.concat([ee]));
        var xe = B.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + T), Function.prototype.apply.call(console[N], console, xe);
      }
    }
    var Ot = {};
    function We(N, T) {
      {
        var B = N.constructor, Y = B && (B.displayName || B.name) || "ReactClass", ee = Y + "." + T;
        if (Ot[ee])
          return;
        Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, Y), Ot[ee] = !0;
      }
    }
    var pn = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(N) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(N, T, B) {
        We(N, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(N, T, B, Y) {
        We(N, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(N, T, B, Y) {
        We(N, "setState");
      }
    }, jt = Object.assign, hn = {};
    Object.freeze(hn);
    function Yn(N, T, B) {
      this.props = N, this.context = T, this.refs = hn, this.updater = B || pn;
    }
    Yn.prototype.isReactComponent = {}, Yn.prototype.setState = function(N, T) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, T, "setState");
    }, Yn.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    {
      var Jr = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, Nr = function(N, T) {
        Object.defineProperty(Yn.prototype, N, {
          get: function() {
            et("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
          }
        });
      };
      for (var wr in Jr)
        Jr.hasOwnProperty(wr) && Nr(wr, Jr[wr]);
    }
    function ur() {
    }
    ur.prototype = Yn.prototype;
    function tn(N, T, B) {
      this.props = N, this.context = T, this.refs = hn, this.updater = B || pn;
    }
    var Pn = tn.prototype = new ur();
    Pn.constructor = tn, jt(Pn, Yn.prototype), Pn.isPureReactComponent = !0;
    function Kn() {
      var N = {
        current: null
      };
      return Object.seal(N), N;
    }
    var Wn = Array.isArray;
    function Lt(N) {
      return Wn(N);
    }
    function vn(N) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, B = T && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return B;
      }
    }
    function Wt(N) {
      try {
        return Mt(N), !1;
      } catch {
        return !0;
      }
    }
    function Mt(N) {
      return "" + N;
    }
    function Ut(N) {
      if (Wt(N))
        return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(N)), Mt(N);
    }
    function Gn(N, T, B) {
      var Y = N.displayName;
      if (Y)
        return Y;
      var ee = T.displayName || T.name || "";
      return ee !== "" ? B + "(" + ee + ")" : B;
    }
    function cr(N) {
      return N.displayName || "Context";
    }
    function Mn(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case f:
          return "Fragment";
        case d:
          return "Portal";
        case y:
          return "Profiler";
        case c:
          return "StrictMode";
        case b:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case p:
            var T = N;
            return cr(T) + ".Consumer";
          case h:
            var B = N;
            return cr(B._context) + ".Provider";
          case v:
            return Gn(N, N.render, "ForwardRef");
          case E:
            var Y = N.displayName || null;
            return Y !== null ? Y : Mn(N.type) || "Memo";
          case j: {
            var ee = N, xe = ee._payload, ce = ee._init;
            try {
              return Mn(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Cr = Object.prototype.hasOwnProperty, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jn, dr, gn;
    gn = {};
    function qn(N) {
      if (Cr.call(N, "ref")) {
        var T = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Tt(N) {
      if (Cr.call(N, "key")) {
        var T = Object.getOwnPropertyDescriptor(N, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function mr(N, T) {
      var B = function() {
        jn || (jn = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      B.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: B,
        configurable: !0
      });
    }
    function ua(N, T) {
      var B = function() {
        dr || (dr = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      B.isReactWarning = !0, Object.defineProperty(N, "ref", {
        get: B,
        configurable: !0
      });
    }
    function ca(N) {
      if (typeof N.ref == "string" && I.current && N.__self && I.current.stateNode !== N.__self) {
        var T = Mn(I.current.type);
        gn[T] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, N.ref), gn[T] = !0);
      }
    }
    var ne = function(N, T, B, Y, ee, xe, ce) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: T,
        ref: B,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function de(N, T, B) {
      var Y, ee = {}, xe = null, ce = null, Re = null, He = null;
      if (T != null) {
        qn(T) && (ce = T.ref, ca(T)), Tt(T) && (Ut(T.key), xe = "" + T.key), Re = T.__self === void 0 ? null : T.__self, He = T.__source === void 0 ? null : T.__source;
        for (Y in T)
          Cr.call(T, Y) && !fr.hasOwnProperty(Y) && (ee[Y] = T[Y]);
      }
      var it = arguments.length - 2;
      if (it === 1)
        ee.children = B;
      else if (it > 1) {
        for (var ct = Array(it), ft = 0; ft < it; ft++)
          ct[ft] = arguments[ft + 2];
        Object.freeze && Object.freeze(ct), ee.children = ct;
      }
      if (N && N.defaultProps) {
        var gt = N.defaultProps;
        for (Y in gt)
          ee[Y] === void 0 && (ee[Y] = gt[Y]);
      }
      if (xe || ce) {
        var Ct = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
        xe && mr(ee, Ct), ce && ua(ee, Ct);
      }
      return ne(N, xe, ce, Re, He, I.current, ee);
    }
    function Ue(N, T) {
      var B = ne(N.type, T, N.ref, N._self, N._source, N._owner, N.props);
      return B;
    }
    function rt(N, T, B) {
      if (N == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
      var Y, ee = jt({}, N.props), xe = N.key, ce = N.ref, Re = N._self, He = N._source, it = N._owner;
      if (T != null) {
        qn(T) && (ce = T.ref, it = I.current), Tt(T) && (Ut(T.key), xe = "" + T.key);
        var ct;
        N.type && N.type.defaultProps && (ct = N.type.defaultProps);
        for (Y in T)
          Cr.call(T, Y) && !fr.hasOwnProperty(Y) && (T[Y] === void 0 && ct !== void 0 ? ee[Y] = ct[Y] : ee[Y] = T[Y]);
      }
      var ft = arguments.length - 2;
      if (ft === 1)
        ee.children = B;
      else if (ft > 1) {
        for (var gt = Array(ft), Ct = 0; Ct < ft; Ct++)
          gt[Ct] = arguments[Ct + 2];
        ee.children = gt;
      }
      return ne(N.type, xe, ce, Re, He, it, ee);
    }
    function at(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    var Vt = ".", Dt = ":";
    function Un(N) {
      var T = /[=:]/g, B = {
        "=": "=0",
        ":": "=2"
      }, Y = N.replace(T, function(ee) {
        return B[ee];
      });
      return "$" + Y;
    }
    var ut = !1, Qn = /\/+/g;
    function ht(N) {
      return N.replace(Qn, "$&/");
    }
    function vt(N, T) {
      return typeof N == "object" && N !== null && N.key != null ? (Ut(N.key), Un("" + N.key)) : T.toString(36);
    }
    function Ir(N, T, B, Y, ee) {
      var xe = typeof N;
      (xe === "undefined" || xe === "boolean") && (N = null);
      var ce = !1;
      if (N === null)
        ce = !0;
      else
        switch (xe) {
          case "string":
          case "number":
            ce = !0;
            break;
          case "object":
            switch (N.$$typeof) {
              case l:
              case d:
                ce = !0;
            }
        }
      if (ce) {
        var Re = N, He = ee(Re), it = Y === "" ? Vt + vt(Re, 0) : Y;
        if (Lt(He)) {
          var ct = "";
          it != null && (ct = ht(it) + "/"), Ir(He, T, ct, "", function(kd) {
            return kd;
          });
        } else He != null && (at(He) && (He.key && (!Re || Re.key !== He.key) && Ut(He.key), He = Ue(
          He,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (He.key && (!Re || Re.key !== He.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            ht("" + He.key) + "/"
          ) : "") + it
        )), T.push(He));
        return 1;
      }
      var ft, gt, Ct = 0, Xe = Y === "" ? Vt : Y + Dt;
      if (Lt(N))
        for (var qa = 0; qa < N.length; qa++)
          ft = N[qa], gt = Xe + vt(ft, qa), Ct += Ir(ft, T, B, gt, ee);
      else {
        var wo = L(N);
        if (typeof wo == "function") {
          var Bs = N;
          wo === Bs.entries && (ut || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ut = !0);
          for (var Dd = wo.call(Bs), ha, Js = 0; !(ha = Dd.next()).done; )
            ft = ha.value, gt = Xe + vt(ft, Js++), Ct += Ir(ft, T, B, gt, ee);
        } else if (xe === "object") {
          var Is = String(N);
          throw new Error("Objects are not valid as a React child (found: " + (Is === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : Is) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Ct;
    }
    function Er(N, T, B) {
      if (N == null)
        return N;
      var Y = [], ee = 0;
      return Ir(N, Y, "", "", function(xe) {
        return T.call(B, xe, ee++);
      }), Y;
    }
    function Di(N) {
      var T = 0;
      return Er(N, function() {
        T++;
      }), T;
    }
    function vo(N, T, B) {
      Er(N, function() {
        T.apply(this, arguments);
      }, B);
    }
    function Ts(N) {
      return Er(N, function(T) {
        return T;
      }) || [];
    }
    function ki(N) {
      if (!at(N))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return N;
    }
    function Oi(N) {
      var T = {
        $$typeof: p,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: N,
        _currentValue2: N,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      T.Provider = {
        $$typeof: h,
        _context: T
      };
      var B = !1, Y = !1, ee = !1;
      {
        var xe = {
          $$typeof: p,
          _context: T
        };
        Object.defineProperties(xe, {
          Provider: {
            get: function() {
              return Y || (Y = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
            },
            set: function(ce) {
              T.Provider = ce;
            }
          },
          _currentValue: {
            get: function() {
              return T._currentValue;
            },
            set: function(ce) {
              T._currentValue = ce;
            }
          },
          _currentValue2: {
            get: function() {
              return T._currentValue2;
            },
            set: function(ce) {
              T._currentValue2 = ce;
            }
          },
          _threadCount: {
            get: function() {
              return T._threadCount;
            },
            set: function(ce) {
              T._threadCount = ce;
            }
          },
          Consumer: {
            get: function() {
              return B || (B = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
            }
          },
          displayName: {
            get: function() {
              return T.displayName;
            },
            set: function(ce) {
              ee || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), ee = !0);
            }
          }
        }), T.Consumer = xe;
      }
      return T._currentRenderer = null, T._currentRenderer2 = null, T;
    }
    var fa = -1, Ha = 0, da = 1, Yr = 2;
    function Rr(N) {
      if (N._status === fa) {
        var T = N._result, B = T();
        if (B.then(function(xe) {
          if (N._status === Ha || N._status === fa) {
            var ce = N;
            ce._status = da, ce._result = xe;
          }
        }, function(xe) {
          if (N._status === Ha || N._status === fa) {
            var ce = N;
            ce._status = Yr, ce._result = xe;
          }
        }), N._status === fa) {
          var Y = N;
          Y._status = Ha, Y._result = B;
        }
      }
      if (N._status === da) {
        var ee = N._result;
        return ee === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw N._result;
    }
    function O(N) {
      var T = {
        // We use these fields to store the result.
        _status: fa,
        _result: N
      }, B = {
        $$typeof: j,
        _payload: T,
        _init: Rr
      };
      {
        var Y, ee;
        Object.defineProperties(B, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(xe) {
              Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = xe, Object.defineProperty(B, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(xe) {
              Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = xe, Object.defineProperty(B, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return B;
    }
    function Q(N) {
      N != null && N.$$typeof === E ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof N != "function" ? Ee("forwardRef requires a render function but was given %s.", N === null ? "null" : typeof N) : N.length !== 0 && N.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", N.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), N != null && (N.defaultProps != null || N.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var T = {
        $$typeof: v,
        render: N
      };
      {
        var B;
        Object.defineProperty(T, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return B;
          },
          set: function(Y) {
            B = Y, !N.name && !N.displayName && (N.displayName = Y);
          }
        });
      }
      return T;
    }
    var re;
    re = Symbol.for("react.module.reference");
    function ge(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === f || N === y || we || N === c || N === b || N === S || pe || N === M || he || be || nt || typeof N == "object" && N !== null && (N.$$typeof === j || N.$$typeof === E || N.$$typeof === h || N.$$typeof === p || N.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === re || N.getModuleId !== void 0));
    }
    function $e(N, T) {
      ge(N) || Ee("memo: The first argument must be a component. Instead received: %s", N === null ? "null" : typeof N);
      var B = {
        $$typeof: E,
        type: N,
        compare: T === void 0 ? null : T
      };
      {
        var Y;
        Object.defineProperty(B, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return Y;
          },
          set: function(ee) {
            Y = ee, !N.name && !N.displayName && (N.displayName = ee);
          }
        });
      }
      return B;
    }
    function Ne() {
      var N = $.current;
      return N === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), N;
    }
    function Me(N) {
      var T = Ne();
      if (N._context !== void 0) {
        var B = N._context;
        B.Consumer === N ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === N && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return T.useContext(N);
    }
    function Ae(N) {
      var T = Ne();
      return T.useState(N);
    }
    function xt(N, T, B) {
      var Y = Ne();
      return Y.useReducer(N, T, B);
    }
    function Ve(N) {
      var T = Ne();
      return T.useRef(N);
    }
    function bt(N, T) {
      var B = Ne();
      return B.useEffect(N, T);
    }
    function yn(N, T) {
      var B = Ne();
      return B.useInsertionEffect(N, T);
    }
    function jr(N, T) {
      var B = Ne();
      return B.useLayoutEffect(N, T);
    }
    function Tr(N, T) {
      var B = Ne();
      return B.useCallback(N, T);
    }
    function Gt(N, T) {
      var B = Ne();
      return B.useMemo(N, T);
    }
    function Li(N, T, B) {
      var Y = Ne();
      return Y.useImperativeHandle(N, T, B);
    }
    function go(N, T) {
      {
        var B = Ne();
        return B.useDebugValue(N, T);
      }
    }
    function Ds() {
      var N = Ne();
      return N.useTransition();
    }
    function ma(N) {
      var T = Ne();
      return T.useDeferredValue(N);
    }
    function ze() {
      var N = Ne();
      return N.useId();
    }
    function _i(N, T, B) {
      var Y = Ne();
      return Y.useSyncExternalStore(N, T, B);
    }
    var Ba = 0, ks, Os, Ls, _s, As, Ps, Ms;
    function Fu() {
    }
    Fu.__reactDisabledLog = !0;
    function Rd() {
      {
        if (Ba === 0) {
          ks = console.log, Os = console.info, Ls = console.warn, _s = console.error, As = console.group, Ps = console.groupCollapsed, Ms = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Fu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        Ba++;
      }
    }
    function Us() {
      {
        if (Ba--, Ba === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, N, {
              value: ks
            }),
            info: jt({}, N, {
              value: Os
            }),
            warn: jt({}, N, {
              value: Ls
            }),
            error: jt({}, N, {
              value: _s
            }),
            group: jt({}, N, {
              value: As
            }),
            groupCollapsed: jt({}, N, {
              value: Ps
            }),
            groupEnd: jt({}, N, {
              value: Ms
            })
          });
        }
        Ba < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = Ce.ReactCurrentDispatcher, pr;
    function Ja(N, T, B) {
      {
        if (pr === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            pr = Y && Y[1] || "";
          }
        return `
` + pr + N;
      }
    }
    var Ia = !1, yo;
    {
      var Vs = typeof WeakMap == "function" ? WeakMap : Map;
      yo = new Vs();
    }
    function zu(N, T) {
      if (!N || Ia)
        return "";
      {
        var B = yo.get(N);
        if (B !== void 0)
          return B;
      }
      var Y;
      Ia = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = Ai.current, Ai.current = null, Rd();
      try {
        if (T) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Xe) {
              Y = Xe;
            }
            Reflect.construct(N, [], ce);
          } else {
            try {
              ce.call();
            } catch (Xe) {
              Y = Xe;
            }
            N.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            Y = Xe;
          }
          N();
        }
      } catch (Xe) {
        if (Xe && Y && typeof Xe.stack == "string") {
          for (var Re = Xe.stack.split(`
`), He = Y.stack.split(`
`), it = Re.length - 1, ct = He.length - 1; it >= 1 && ct >= 0 && Re[it] !== He[ct]; )
            ct--;
          for (; it >= 1 && ct >= 0; it--, ct--)
            if (Re[it] !== He[ct]) {
              if (it !== 1 || ct !== 1)
                do
                  if (it--, ct--, ct < 0 || Re[it] !== He[ct]) {
                    var ft = `
` + Re[it].replace(" at new ", " at ");
                    return N.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", N.displayName)), typeof N == "function" && yo.set(N, ft), ft;
                  }
                while (it >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        Ia = !1, Ai.current = xe, Us(), Error.prepareStackTrace = ee;
      }
      var gt = N ? N.displayName || N.name : "", Ct = gt ? Ja(gt) : "";
      return typeof N == "function" && yo.set(N, Ct), Ct;
    }
    function Fs(N, T, B) {
      return zu(N, !1);
    }
    function jd(N) {
      var T = N.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ya(N, T, B) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return zu(N, jd(N));
      if (typeof N == "string")
        return Ja(N);
      switch (N) {
        case b:
          return Ja("Suspense");
        case S:
          return Ja("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case v:
            return Fs(N.render);
          case E:
            return Ya(N.type, T, B);
          case j: {
            var Y = N, ee = Y._payload, xe = Y._init;
            try {
              return Ya(xe(ee), T, B);
            } catch {
            }
          }
        }
      return "";
    }
    var $u = {}, zs = Ce.ReactDebugCurrentFrame;
    function bo(N) {
      if (N) {
        var T = N._owner, B = Ya(N.type, N._source, T ? T.type : null);
        zs.setExtraStackFrame(B);
      } else
        zs.setExtraStackFrame(null);
    }
    function Hu(N, T, B, Y, ee) {
      {
        var xe = Function.call.bind(Cr);
        for (var ce in N)
          if (xe(N, ce)) {
            var Re = void 0;
            try {
              if (typeof N[ce] != "function") {
                var He = Error((Y || "React class") + ": " + B + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Re = N[ce](T, ce, Y, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              Re = it;
            }
            Re && !(Re instanceof Error) && (bo(ee), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", B, ce, typeof Re), bo(null)), Re instanceof Error && !(Re.message in $u) && ($u[Re.message] = !0, bo(ee), Ee("Failed %s type: %s", B, Re.message), bo(null));
          }
      }
    }
    function Ke(N) {
      if (N) {
        var T = N._owner, B = Ya(N.type, N._source, T ? T.type : null);
        ke(B);
      } else
        ke(null);
    }
    var $s;
    $s = !1;
    function Hs() {
      if (I.current) {
        var N = Mn(I.current.type);
        if (N)
          return `

Check the render method of \`` + N + "`.";
      }
      return "";
    }
    function _e(N) {
      if (N !== void 0) {
        var T = N.fileName.replace(/^.*[\\\/]/, ""), B = N.lineNumber;
        return `

Check your code at ` + T + ":" + B + ".";
      }
      return "";
    }
    function Bu(N) {
      return N != null ? _e(N.__source) : "";
    }
    var bn = {};
    function Pi(N) {
      var T = Hs();
      if (!T) {
        var B = typeof N == "string" ? N : N.displayName || N.name;
        B && (T = `

Check the top-level render call using <` + B + ">.");
      }
      return T;
    }
    function Ka(N, T) {
      if (!(!N._store || N._store.validated || N.key != null)) {
        N._store.validated = !0;
        var B = Pi(T);
        if (!bn[B]) {
          bn[B] = !0;
          var Y = "";
          N && N._owner && N._owner !== I.current && (Y = " It was passed a child from " + Mn(N._owner.type) + "."), Ke(N), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, Y), Ke(null);
        }
      }
    }
    function Ju(N, T) {
      if (typeof N == "object") {
        if (Lt(N))
          for (var B = 0; B < N.length; B++) {
            var Y = N[B];
            at(Y) && Ka(Y, T);
          }
        else if (at(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ee = L(N);
          if (typeof ee == "function" && ee !== N.entries)
            for (var xe = ee.call(N), ce; !(ce = xe.next()).done; )
              at(ce.value) && Ka(ce.value, T);
        }
      }
    }
    function qt(N) {
      {
        var T = N.type;
        if (T == null || typeof T == "string")
          return;
        var B;
        if (typeof T == "function")
          B = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === E))
          B = T.propTypes;
        else
          return;
        if (B) {
          var Y = Mn(T);
          Hu(B, N.props, "prop", Y, N);
        } else if (T.PropTypes !== void 0 && !$s) {
          $s = !0;
          var ee = Mn(T);
          Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function St(N) {
      {
        for (var T = Object.keys(N.props), B = 0; B < T.length; B++) {
          var Y = T[B];
          if (Y !== "children" && Y !== "key") {
            Ke(N), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ke(null);
            break;
          }
        }
        N.ref !== null && (Ke(N), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    function Iu(N, T, B) {
      var Y = ge(N);
      if (!Y) {
        var ee = "";
        (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var xe = Bu(T);
        xe ? ee += xe : ee += Hs();
        var ce;
        N === null ? ce = "null" : Lt(N) ? ce = "array" : N !== void 0 && N.$$typeof === l ? (ce = "<" + (Mn(N.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof N, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, ee);
      }
      var Re = de.apply(this, arguments);
      if (Re == null)
        return Re;
      if (Y)
        for (var He = 2; He < arguments.length; He++)
          Ju(arguments[He], N);
      return N === f ? St(Re) : qt(Re), Re;
    }
    var Xn = !1;
    function Vn(N) {
      var T = Iu.bind(null, N);
      return T.type = N, Xn || (Xn = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
        enumerable: !1,
        get: function() {
          return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: N
          }), N;
        }
      }), T;
    }
    function Kr(N, T, B) {
      for (var Y = rt.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        Ju(arguments[ee], Y.type);
      return qt(Y), Y;
    }
    function Td(N, T) {
      var B = k.transition;
      k.transition = {};
      var Y = k.transition;
      k.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        N();
      } finally {
        if (k.transition = B, B === null && Y._updatedFibers) {
          var ee = Y._updatedFibers.size;
          ee > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
        }
      }
    }
    var xo = !1, Mi = null;
    function Yu(N) {
      if (Mi === null)
        try {
          var T = ("require" + Math.random()).slice(0, 7), B = o && o[T];
          Mi = B.call(o, "timers").setImmediate;
        } catch {
          Mi = function(ee) {
            xo === !1 && (xo = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var xe = new MessageChannel();
            xe.port1.onmessage = ee, xe.port2.postMessage(void 0);
          };
        }
      return Mi(N);
    }
    var Wa = 0, Ku = !1;
    function Wu(N) {
      {
        var T = Wa;
        Wa++, U.current === null && (U.current = []);
        var B = U.isBatchingLegacy, Y;
        try {
          if (U.isBatchingLegacy = !0, Y = N(), !B && U.didScheduleLegacyUpdate) {
            var ee = U.current;
            ee !== null && (U.didScheduleLegacyUpdate = !1, No(ee));
          }
        } catch (gt) {
          throw pa(T), gt;
        } finally {
          U.isBatchingLegacy = B;
        }
        if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
          var xe = Y, ce = !1, Re = {
            then: function(gt, Ct) {
              ce = !0, xe.then(function(Xe) {
                pa(T), Wa === 0 ? So(Xe, gt, Ct) : gt(Xe);
              }, function(Xe) {
                pa(T), Ct(Xe);
              });
            }
          };
          return !Ku && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            ce || (Ku = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Re;
        } else {
          var He = Y;
          if (pa(T), Wa === 0) {
            var it = U.current;
            it !== null && (No(it), U.current = null);
            var ct = {
              then: function(gt, Ct) {
                U.current === null ? (U.current = [], So(He, gt, Ct)) : gt(He);
              }
            };
            return ct;
          } else {
            var ft = {
              then: function(gt, Ct) {
                gt(He);
              }
            };
            return ft;
          }
        }
      }
    }
    function pa(N) {
      N !== Wa - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Wa = N;
    }
    function So(N, T, B) {
      {
        var Y = U.current;
        if (Y !== null)
          try {
            No(Y), Yu(function() {
              Y.length === 0 ? (U.current = null, T(N)) : So(N, T, B);
            });
          } catch (ee) {
            B(ee);
          }
        else
          T(N);
      }
    }
    var Ga = !1;
    function No(N) {
      if (!Ga) {
        Ga = !0;
        var T = 0;
        try {
          for (; T < N.length; T++) {
            var B = N[T];
            do
              B = B(!0);
            while (B !== null);
          }
          N.length = 0;
        } catch (Y) {
          throw N = N.slice(T + 1), Y;
        } finally {
          Ga = !1;
        }
      }
    }
    var Gu = Iu, qu = Kr, Qu = Vn, Xu = {
      map: Er,
      forEach: vo,
      count: Di,
      toArray: Ts,
      only: ki
    };
    a.Children = Xu, a.Component = Yn, a.Fragment = f, a.Profiler = y, a.PureComponent = tn, a.StrictMode = c, a.Suspense = b, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, a.act = Wu, a.cloneElement = qu, a.createContext = Oi, a.createElement = Gu, a.createFactory = Qu, a.createRef = Kn, a.forwardRef = Q, a.isValidElement = at, a.lazy = O, a.memo = $e, a.startTransition = Td, a.unstable_act = Wu, a.useCallback = Tr, a.useContext = Me, a.useDebugValue = go, a.useDeferredValue = ma, a.useEffect = bt, a.useId = ze, a.useImperativeHandle = Li, a.useInsertionEffect = yn, a.useLayoutEffect = jr, a.useMemo = Gt, a.useReducer = xt, a.useRef = Ve, a.useState = Ae, a.useSyncExternalStore = _i, a.useTransition = Ds, a.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(dd, dd.exports);
var DO = dd.exports;
o1.exports = DO;
var V = o1.exports;
const Sd = /* @__PURE__ */ xd(V), zv = /* @__PURE__ */ TO({
  __proto__: null,
  default: Sd
}, [V]);
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var o = V, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), j = Symbol.iterator, M = "@@iterator";
  function D(O) {
    if (O === null || typeof O != "object")
      return null;
    var Q = j && O[j] || O[M];
    return typeof Q == "function" ? Q : null;
  }
  var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function L(O) {
    {
      for (var Q = arguments.length, re = new Array(Q > 1 ? Q - 1 : 0), ge = 1; ge < Q; ge++)
        re[ge - 1] = arguments[ge];
      $("error", O, re);
    }
  }
  function $(O, Q, re) {
    {
      var ge = P.ReactDebugCurrentFrame, $e = ge.getStackAddendum();
      $e !== "" && (Q += "%s", re = re.concat([$e]));
      var Ne = re.map(function(Me) {
        return String(Me);
      });
      Ne.unshift("Warning: " + Q), Function.prototype.apply.call(console[O], console, Ne);
    }
  }
  var k = !1, U = !1, I = !1, Z = !1, Le = !1, ke;
  ke = Symbol.for("react.module.reference");
  function he(O) {
    return !!(typeof O == "string" || typeof O == "function" || O === l || O === f || Le || O === d || O === p || O === v || Z || O === E || k || U || I || typeof O == "object" && O !== null && (O.$$typeof === S || O.$$typeof === b || O.$$typeof === c || O.$$typeof === y || O.$$typeof === h || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    O.$$typeof === ke || O.getModuleId !== void 0));
  }
  function be(O, Q, re) {
    var ge = O.displayName;
    if (ge)
      return ge;
    var $e = Q.displayName || Q.name || "";
    return $e !== "" ? re + "(" + $e + ")" : re;
  }
  function nt(O) {
    return O.displayName || "Context";
  }
  function pe(O) {
    if (O == null)
      return null;
    if (typeof O.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
      return O.displayName || O.name || null;
    if (typeof O == "string")
      return O;
    switch (O) {
      case l:
        return "Fragment";
      case s:
        return "Portal";
      case f:
        return "Profiler";
      case d:
        return "StrictMode";
      case p:
        return "Suspense";
      case v:
        return "SuspenseList";
    }
    if (typeof O == "object")
      switch (O.$$typeof) {
        case y:
          var Q = O;
          return nt(Q) + ".Consumer";
        case c:
          var re = O;
          return nt(re._context) + ".Provider";
        case h:
          return be(O, O.render, "ForwardRef");
        case b:
          var ge = O.displayName || null;
          return ge !== null ? ge : pe(O.type) || "Memo";
        case S: {
          var $e = O, Ne = $e._payload, Me = $e._init;
          try {
            return pe(Me(Ne));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var we = Object.assign, Ce = 0, et, Ee, Qe, Ot, We, pn, jt;
  function hn() {
  }
  hn.__reactDisabledLog = !0;
  function Yn() {
    {
      if (Ce === 0) {
        et = console.log, Ee = console.info, Qe = console.warn, Ot = console.error, We = console.group, pn = console.groupCollapsed, jt = console.groupEnd;
        var O = {
          configurable: !0,
          enumerable: !0,
          value: hn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: O,
          log: O,
          warn: O,
          error: O,
          group: O,
          groupCollapsed: O,
          groupEnd: O
        });
      }
      Ce++;
    }
  }
  function Jr() {
    {
      if (Ce--, Ce === 0) {
        var O = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: we({}, O, {
            value: et
          }),
          info: we({}, O, {
            value: Ee
          }),
          warn: we({}, O, {
            value: Qe
          }),
          error: we({}, O, {
            value: Ot
          }),
          group: we({}, O, {
            value: We
          }),
          groupCollapsed: we({}, O, {
            value: pn
          }),
          groupEnd: we({}, O, {
            value: jt
          })
        });
      }
      Ce < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Nr = P.ReactCurrentDispatcher, wr;
  function ur(O, Q, re) {
    {
      if (wr === void 0)
        try {
          throw Error();
        } catch ($e) {
          var ge = $e.stack.trim().match(/\n( *(at )?)/);
          wr = ge && ge[1] || "";
        }
      return `
` + wr + O;
    }
  }
  var tn = !1, Pn;
  {
    var Kn = typeof WeakMap == "function" ? WeakMap : Map;
    Pn = new Kn();
  }
  function Wn(O, Q) {
    if (!O || tn)
      return "";
    {
      var re = Pn.get(O);
      if (re !== void 0)
        return re;
    }
    var ge;
    tn = !0;
    var $e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Ne;
    Ne = Nr.current, Nr.current = null, Yn();
    try {
      if (Q) {
        var Me = function() {
          throw Error();
        };
        if (Object.defineProperty(Me.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(Me, []);
          } catch (Gt) {
            ge = Gt;
          }
          Reflect.construct(O, [], Me);
        } else {
          try {
            Me.call();
          } catch (Gt) {
            ge = Gt;
          }
          O.call(Me.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Gt) {
          ge = Gt;
        }
        O();
      }
    } catch (Gt) {
      if (Gt && ge && typeof Gt.stack == "string") {
        for (var Ae = Gt.stack.split(`
`), xt = ge.stack.split(`
`), Ve = Ae.length - 1, bt = xt.length - 1; Ve >= 1 && bt >= 0 && Ae[Ve] !== xt[bt]; )
          bt--;
        for (; Ve >= 1 && bt >= 0; Ve--, bt--)
          if (Ae[Ve] !== xt[bt]) {
            if (Ve !== 1 || bt !== 1)
              do
                if (Ve--, bt--, bt < 0 || Ae[Ve] !== xt[bt]) {
                  var yn = `
` + Ae[Ve].replace(" at new ", " at ");
                  return O.displayName && yn.includes("<anonymous>") && (yn = yn.replace("<anonymous>", O.displayName)), typeof O == "function" && Pn.set(O, yn), yn;
                }
              while (Ve >= 1 && bt >= 0);
            break;
          }
      }
    } finally {
      tn = !1, Nr.current = Ne, Jr(), Error.prepareStackTrace = $e;
    }
    var jr = O ? O.displayName || O.name : "", Tr = jr ? ur(jr) : "";
    return typeof O == "function" && Pn.set(O, Tr), Tr;
  }
  function Lt(O, Q, re) {
    return Wn(O, !1);
  }
  function vn(O) {
    var Q = O.prototype;
    return !!(Q && Q.isReactComponent);
  }
  function Wt(O, Q, re) {
    if (O == null)
      return "";
    if (typeof O == "function")
      return Wn(O, vn(O));
    if (typeof O == "string")
      return ur(O);
    switch (O) {
      case p:
        return ur("Suspense");
      case v:
        return ur("SuspenseList");
    }
    if (typeof O == "object")
      switch (O.$$typeof) {
        case h:
          return Lt(O.render);
        case b:
          return Wt(O.type, Q, re);
        case S: {
          var ge = O, $e = ge._payload, Ne = ge._init;
          try {
            return Wt(Ne($e), Q, re);
          } catch {
          }
        }
      }
    return "";
  }
  var Mt = Object.prototype.hasOwnProperty, Ut = {}, Gn = P.ReactDebugCurrentFrame;
  function cr(O) {
    if (O) {
      var Q = O._owner, re = Wt(O.type, O._source, Q ? Q.type : null);
      Gn.setExtraStackFrame(re);
    } else
      Gn.setExtraStackFrame(null);
  }
  function Mn(O, Q, re, ge, $e) {
    {
      var Ne = Function.call.bind(Mt);
      for (var Me in O)
        if (Ne(O, Me)) {
          var Ae = void 0;
          try {
            if (typeof O[Me] != "function") {
              var xt = Error((ge || "React class") + ": " + re + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw xt.name = "Invariant Violation", xt;
            }
            Ae = O[Me](Q, Me, ge, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ve) {
            Ae = Ve;
          }
          Ae && !(Ae instanceof Error) && (cr($e), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", re, Me, typeof Ae), cr(null)), Ae instanceof Error && !(Ae.message in Ut) && (Ut[Ae.message] = !0, cr($e), L("Failed %s type: %s", re, Ae.message), cr(null));
        }
    }
  }
  var Cr = Array.isArray;
  function fr(O) {
    return Cr(O);
  }
  function jn(O) {
    {
      var Q = typeof Symbol == "function" && Symbol.toStringTag, re = Q && O[Symbol.toStringTag] || O.constructor.name || "Object";
      return re;
    }
  }
  function dr(O) {
    try {
      return gn(O), !1;
    } catch {
      return !0;
    }
  }
  function gn(O) {
    return "" + O;
  }
  function qn(O) {
    if (dr(O))
      return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(O)), gn(O);
  }
  var Tt = P.ReactCurrentOwner, mr = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, ua, ca, ne;
  ne = {};
  function de(O) {
    if (Mt.call(O, "ref")) {
      var Q = Object.getOwnPropertyDescriptor(O, "ref").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return O.ref !== void 0;
  }
  function Ue(O) {
    if (Mt.call(O, "key")) {
      var Q = Object.getOwnPropertyDescriptor(O, "key").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return O.key !== void 0;
  }
  function rt(O, Q) {
    if (typeof O.ref == "string" && Tt.current && Q && Tt.current.stateNode !== Q) {
      var re = pe(Tt.current.type);
      ne[re] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(Tt.current.type), O.ref), ne[re] = !0);
    }
  }
  function at(O, Q) {
    {
      var re = function() {
        ua || (ua = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      re.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: re,
        configurable: !0
      });
    }
  }
  function Vt(O, Q) {
    {
      var re = function() {
        ca || (ca = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      re.isReactWarning = !0, Object.defineProperty(O, "ref", {
        get: re,
        configurable: !0
      });
    }
  }
  var Dt = function(O, Q, re, ge, $e, Ne, Me) {
    var Ae = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: a,
      // Built-in properties that belong on the element
      type: O,
      key: Q,
      ref: re,
      props: Me,
      // Record the component responsible for creating this element.
      _owner: Ne
    };
    return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(Ae, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: ge
    }), Object.defineProperty(Ae, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: $e
    }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
  };
  function Un(O, Q, re, ge, $e) {
    {
      var Ne, Me = {}, Ae = null, xt = null;
      re !== void 0 && (qn(re), Ae = "" + re), Ue(Q) && (qn(Q.key), Ae = "" + Q.key), de(Q) && (xt = Q.ref, rt(Q, $e));
      for (Ne in Q)
        Mt.call(Q, Ne) && !mr.hasOwnProperty(Ne) && (Me[Ne] = Q[Ne]);
      if (O && O.defaultProps) {
        var Ve = O.defaultProps;
        for (Ne in Ve)
          Me[Ne] === void 0 && (Me[Ne] = Ve[Ne]);
      }
      if (Ae || xt) {
        var bt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
        Ae && at(Me, bt), xt && Vt(Me, bt);
      }
      return Dt(O, Ae, xt, $e, ge, Tt.current, Me);
    }
  }
  var ut = P.ReactCurrentOwner, Qn = P.ReactDebugCurrentFrame;
  function ht(O) {
    if (O) {
      var Q = O._owner, re = Wt(O.type, O._source, Q ? Q.type : null);
      Qn.setExtraStackFrame(re);
    } else
      Qn.setExtraStackFrame(null);
  }
  var vt;
  vt = !1;
  function Ir(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }
  function Er() {
    {
      if (ut.current) {
        var O = pe(ut.current.type);
        if (O)
          return `

Check the render method of \`` + O + "`.";
      }
      return "";
    }
  }
  function Di(O) {
    {
      if (O !== void 0) {
        var Q = O.fileName.replace(/^.*[\\\/]/, ""), re = O.lineNumber;
        return `

Check your code at ` + Q + ":" + re + ".";
      }
      return "";
    }
  }
  var vo = {};
  function Ts(O) {
    {
      var Q = Er();
      if (!Q) {
        var re = typeof O == "string" ? O : O.displayName || O.name;
        re && (Q = `

Check the top-level render call using <` + re + ">.");
      }
      return Q;
    }
  }
  function ki(O, Q) {
    {
      if (!O._store || O._store.validated || O.key != null)
        return;
      O._store.validated = !0;
      var re = Ts(Q);
      if (vo[re])
        return;
      vo[re] = !0;
      var ge = "";
      O && O._owner && O._owner !== ut.current && (ge = " It was passed a child from " + pe(O._owner.type) + "."), ht(O), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, ge), ht(null);
    }
  }
  function Oi(O, Q) {
    {
      if (typeof O != "object")
        return;
      if (fr(O))
        for (var re = 0; re < O.length; re++) {
          var ge = O[re];
          Ir(ge) && ki(ge, Q);
        }
      else if (Ir(O))
        O._store && (O._store.validated = !0);
      else if (O) {
        var $e = D(O);
        if (typeof $e == "function" && $e !== O.entries)
          for (var Ne = $e.call(O), Me; !(Me = Ne.next()).done; )
            Ir(Me.value) && ki(Me.value, Q);
      }
    }
  }
  function fa(O) {
    {
      var Q = O.type;
      if (Q == null || typeof Q == "string")
        return;
      var re;
      if (typeof Q == "function")
        re = Q.propTypes;
      else if (typeof Q == "object" && (Q.$$typeof === h || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      Q.$$typeof === b))
        re = Q.propTypes;
      else
        return;
      if (re) {
        var ge = pe(Q);
        Mn(re, O.props, "prop", ge, O);
      } else if (Q.PropTypes !== void 0 && !vt) {
        vt = !0;
        var $e = pe(Q);
        L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
      }
      typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ha(O) {
    {
      for (var Q = Object.keys(O.props), re = 0; re < Q.length; re++) {
        var ge = Q[re];
        if (ge !== "children" && ge !== "key") {
          ht(O), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), ht(null);
          break;
        }
      }
      O.ref !== null && (ht(O), L("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
    }
  }
  var da = {};
  function Yr(O, Q, re, ge, $e, Ne) {
    {
      var Me = he(O);
      if (!Me) {
        var Ae = "";
        (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var xt = Di($e);
        xt ? Ae += xt : Ae += Er();
        var Ve;
        O === null ? Ve = "null" : fr(O) ? Ve = "array" : O !== void 0 && O.$$typeof === a ? (Ve = "<" + (pe(O.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof O, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, Ae);
      }
      var bt = Un(O, Q, re, $e, Ne);
      if (bt == null)
        return bt;
      if (Me) {
        var yn = Q.children;
        if (yn !== void 0)
          if (ge)
            if (fr(yn)) {
              for (var jr = 0; jr < yn.length; jr++)
                Oi(yn[jr], O);
              Object.freeze && Object.freeze(yn);
            } else
              L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Oi(yn, O);
      }
      if (Mt.call(Q, "key")) {
        var Tr = pe(O), Gt = Object.keys(Q).filter(function(Ds) {
          return Ds !== "key";
        }), Li = Gt.length > 0 ? "{key: someKey, " + Gt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!da[Tr + Li]) {
          var go = Gt.length > 0 ? "{" + Gt.join(": ..., ") + ": ...}" : "{}";
          L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Li, Tr, go, Tr), da[Tr + Li] = !0;
        }
      }
      return O === l ? Ha(bt) : fa(bt), bt;
    }
  }
  var Rr = Yr;
  Fv.Fragment = l, Fv.jsxDEV = Rr;
})();
i1.exports = Fv;
var w = i1.exports, s1 = { exports: {} }, sr = {}, l1 = { exports: {} }, u1 = {};
(function(o) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = !1, s = !1, l = 5;
    function d(ne, de) {
      var Ue = ne.length;
      ne.push(de), y(ne, de, Ue);
    }
    function f(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function c(ne) {
      if (ne.length === 0)
        return null;
      var de = ne[0], Ue = ne.pop();
      return Ue !== de && (ne[0] = Ue, h(ne, Ue, 0)), de;
    }
    function y(ne, de, Ue) {
      for (var rt = Ue; rt > 0; ) {
        var at = rt - 1 >>> 1, Vt = ne[at];
        if (p(Vt, de) > 0)
          ne[at] = de, ne[rt] = Vt, rt = at;
        else
          return;
      }
    }
    function h(ne, de, Ue) {
      for (var rt = Ue, at = ne.length, Vt = at >>> 1; rt < Vt; ) {
        var Dt = (rt + 1) * 2 - 1, Un = ne[Dt], ut = Dt + 1, Qn = ne[ut];
        if (p(Un, de) < 0)
          ut < at && p(Qn, Un) < 0 ? (ne[rt] = Qn, ne[ut] = de, rt = ut) : (ne[rt] = Un, ne[Dt] = de, rt = Dt);
        else if (ut < at && p(Qn, de) < 0)
          ne[rt] = Qn, ne[ut] = de, rt = ut;
        else
          return;
      }
    }
    function p(ne, de) {
      var Ue = ne.sortIndex - de.sortIndex;
      return Ue !== 0 ? Ue : ne.id - de.id;
    }
    var v = 1, b = 2, S = 3, E = 4, j = 5;
    function M(ne, de) {
    }
    var D = typeof performance == "object" && typeof performance.now == "function";
    if (D) {
      var P = performance;
      o.unstable_now = function() {
        return P.now();
      };
    } else {
      var L = Date, $ = L.now();
      o.unstable_now = function() {
        return L.now() - $;
      };
    }
    var k = 1073741823, U = -1, I = 250, Z = 5e3, Le = 1e4, ke = k, he = [], be = [], nt = 1, pe = null, we = S, Ce = !1, et = !1, Ee = !1, Qe = typeof setTimeout == "function" ? setTimeout : null, Ot = typeof clearTimeout == "function" ? clearTimeout : null, We = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pn(ne) {
      for (var de = f(be); de !== null; ) {
        if (de.callback === null)
          c(be);
        else if (de.startTime <= ne)
          c(be), de.sortIndex = de.expirationTime, d(he, de);
        else
          return;
        de = f(be);
      }
    }
    function jt(ne) {
      if (Ee = !1, pn(ne), !et)
        if (f(he) !== null)
          et = !0, qn(hn);
        else {
          var de = f(be);
          de !== null && Tt(jt, de.startTime - ne);
        }
    }
    function hn(ne, de) {
      et = !1, Ee && (Ee = !1, mr()), Ce = !0;
      var Ue = we;
      try {
        var rt;
        if (!s) return Yn(ne, de);
      } finally {
        pe = null, we = Ue, Ce = !1;
      }
    }
    function Yn(ne, de) {
      var Ue = de;
      for (pn(Ue), pe = f(he); pe !== null && !a && !(pe.expirationTime > Ue && (!ne || cr())); ) {
        var rt = pe.callback;
        if (typeof rt == "function") {
          pe.callback = null, we = pe.priorityLevel;
          var at = pe.expirationTime <= Ue, Vt = rt(at);
          Ue = o.unstable_now(), typeof Vt == "function" ? pe.callback = Vt : pe === f(he) && c(he), pn(Ue);
        } else
          c(he);
        pe = f(he);
      }
      if (pe !== null)
        return !0;
      var Dt = f(be);
      return Dt !== null && Tt(jt, Dt.startTime - Ue), !1;
    }
    function Jr(ne, de) {
      switch (ne) {
        case v:
        case b:
        case S:
        case E:
        case j:
          break;
        default:
          ne = S;
      }
      var Ue = we;
      we = ne;
      try {
        return de();
      } finally {
        we = Ue;
      }
    }
    function Nr(ne) {
      var de;
      switch (we) {
        case v:
        case b:
        case S:
          de = S;
          break;
        default:
          de = we;
          break;
      }
      var Ue = we;
      we = de;
      try {
        return ne();
      } finally {
        we = Ue;
      }
    }
    function wr(ne) {
      var de = we;
      return function() {
        var Ue = we;
        we = de;
        try {
          return ne.apply(this, arguments);
        } finally {
          we = Ue;
        }
      };
    }
    function ur(ne, de, Ue) {
      var rt = o.unstable_now(), at;
      if (typeof Ue == "object" && Ue !== null) {
        var Vt = Ue.delay;
        typeof Vt == "number" && Vt > 0 ? at = rt + Vt : at = rt;
      } else
        at = rt;
      var Dt;
      switch (ne) {
        case v:
          Dt = U;
          break;
        case b:
          Dt = I;
          break;
        case j:
          Dt = ke;
          break;
        case E:
          Dt = Le;
          break;
        case S:
        default:
          Dt = Z;
          break;
      }
      var Un = at + Dt, ut = {
        id: nt++,
        callback: de,
        priorityLevel: ne,
        startTime: at,
        expirationTime: Un,
        sortIndex: -1
      };
      return at > rt ? (ut.sortIndex = at, d(be, ut), f(he) === null && ut === f(be) && (Ee ? mr() : Ee = !0, Tt(jt, at - rt))) : (ut.sortIndex = Un, d(he, ut), !et && !Ce && (et = !0, qn(hn))), ut;
    }
    function tn() {
    }
    function Pn() {
      !et && !Ce && (et = !0, qn(hn));
    }
    function Kn() {
      return f(he);
    }
    function Wn(ne) {
      ne.callback = null;
    }
    function Lt() {
      return we;
    }
    var vn = !1, Wt = null, Mt = -1, Ut = l, Gn = -1;
    function cr() {
      var ne = o.unstable_now() - Gn;
      return !(ne < Ut);
    }
    function Mn() {
    }
    function Cr(ne) {
      if (ne < 0 || ne > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ne > 0 ? Ut = Math.floor(1e3 / ne) : Ut = l;
    }
    var fr = function() {
      if (Wt !== null) {
        var ne = o.unstable_now();
        Gn = ne;
        var de = !0, Ue = !0;
        try {
          Ue = Wt(de, ne);
        } finally {
          Ue ? jn() : (vn = !1, Wt = null);
        }
      } else
        vn = !1;
    }, jn;
    if (typeof We == "function")
      jn = function() {
        We(fr);
      };
    else if (typeof MessageChannel < "u") {
      var dr = new MessageChannel(), gn = dr.port2;
      dr.port1.onmessage = fr, jn = function() {
        gn.postMessage(null);
      };
    } else
      jn = function() {
        Qe(fr, 0);
      };
    function qn(ne) {
      Wt = ne, vn || (vn = !0, jn());
    }
    function Tt(ne, de) {
      Mt = Qe(function() {
        ne(o.unstable_now());
      }, de);
    }
    function mr() {
      Ot(Mt), Mt = -1;
    }
    var ua = Mn, ca = null;
    o.unstable_IdlePriority = j, o.unstable_ImmediatePriority = v, o.unstable_LowPriority = E, o.unstable_NormalPriority = S, o.unstable_Profiling = ca, o.unstable_UserBlockingPriority = b, o.unstable_cancelCallback = Wn, o.unstable_continueExecution = Pn, o.unstable_forceFrameRate = Cr, o.unstable_getCurrentPriorityLevel = Lt, o.unstable_getFirstCallbackNode = Kn, o.unstable_next = Nr, o.unstable_pauseExecution = tn, o.unstable_requestPaint = ua, o.unstable_runWithPriority = Jr, o.unstable_scheduleCallback = ur, o.unstable_shouldYield = cr, o.unstable_wrapCallback = wr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(u1);
l1.exports = u1;
var kO = l1.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var o = V, a = kO, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
  function d(e) {
    l = e;
  }
  function f(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      y("warn", e, n);
    }
  }
  function c(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      y("error", e, n);
    }
  }
  function y(e, t, n) {
    {
      var r = s.ReactDebugCurrentFrame, i = r.getStackAddendum();
      i !== "" && (t += "%s", n = n.concat([i]));
      var u = n.map(function(m) {
        return String(m);
      });
      u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var h = 0, p = 1, v = 2, b = 3, S = 4, E = 5, j = 6, M = 7, D = 8, P = 9, L = 10, $ = 11, k = 12, U = 13, I = 14, Z = 15, Le = 16, ke = 17, he = 18, be = 19, nt = 21, pe = 22, we = 23, Ce = 24, et = 25, Ee = !0, Qe = !1, Ot = !1, We = !1, pn = !1, jt = !0, hn = !1, Yn = !0, Jr = !0, Nr = !0, wr = !0, ur = /* @__PURE__ */ new Set(), tn = {}, Pn = {};
  function Kn(e, t) {
    Wn(e, t), Wn(e + "Capture", t);
  }
  function Wn(e, t) {
    tn[e] && c("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tn[e] = t;
    {
      var n = e.toLowerCase();
      Pn[n] = e, e === "onDoubleClick" && (Pn.ondblclick = e);
    }
    for (var r = 0; r < t.length; r++)
      ur.add(t[r]);
  }
  var Lt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vn = Object.prototype.hasOwnProperty;
  function Wt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Mt(e) {
    try {
      return Ut(e), !1;
    } catch {
      return !0;
    }
  }
  function Ut(e) {
    return "" + e;
  }
  function Gn(e, t) {
    if (Mt(e))
      return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function cr(e) {
    if (Mt(e))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  function Mn(e, t) {
    if (Mt(e))
      return c("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function Cr(e, t) {
    if (Mt(e))
      return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function fr(e) {
    if (Mt(e))
      return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  function jn(e) {
    if (Mt(e))
      return c("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  var dr = 0, gn = 1, qn = 2, Tt = 3, mr = 4, ua = 5, ca = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + ne + "][" + de + "]*$"), rt = {}, at = {};
  function Vt(e) {
    return vn.call(at, e) ? !0 : vn.call(rt, e) ? !1 : Ue.test(e) ? (at[e] = !0, !0) : (rt[e] = !0, c("Invalid attribute name: `%s`", e), !1);
  }
  function Dt(e, t, n) {
    return t !== null ? t.type === dr : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Un(e, t, n, r) {
    if (n !== null && n.type === dr)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (r)
          return !1;
        if (n !== null)
          return !n.acceptsBooleans;
        var i = e.toLowerCase().slice(0, 5);
        return i !== "data-" && i !== "aria-";
      }
      default:
        return !1;
    }
  }
  function ut(e, t, n, r) {
    if (t === null || typeof t > "u" || Un(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case Tt:
          return !t;
        case mr:
          return t === !1;
        case ua:
          return isNaN(t);
        case ca:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function Qn(e) {
    return vt.hasOwnProperty(e) ? vt[e] : null;
  }
  function ht(e, t, n, r, i, u, m) {
    this.acceptsBooleans = t === qn || t === Tt || t === mr, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
  }
  var vt = {}, Ir = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  Ir.forEach(function(e) {
    vt[e] = new ht(
      e,
      dr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], n = e[1];
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    vt[e] = new ht(
      e,
      qn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    vt[e] = new ht(
      e,
      qn,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      Tt,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      Tt,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      mr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      ca,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(e) {
    vt[e] = new ht(
      e,
      ua,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Er = /[\-\:]([a-z])/g, Di = function(e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Er, Di);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Er, Di);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Er, Di);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    vt[e] = new ht(
      e,
      gn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var vo = "xlinkHref";
  vt[vo] = new ht(
    "xlinkHref",
    gn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    vt[e] = new ht(
      e,
      gn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var Ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ki = !1;
  function Oi(e) {
    !ki && Ts.test(e) && (ki = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function fa(e, t, n, r) {
    if (r.mustUseProperty) {
      var i = r.propertyName;
      return e[i];
    } else {
      Gn(n, t), r.sanitizeURL && Oi("" + n);
      var u = r.attributeName, m = null;
      if (r.type === mr) {
        if (e.hasAttribute(u)) {
          var g = e.getAttribute(u);
          return g === "" ? !0 : ut(t, n, r, !1) ? g : g === "" + n ? n : g;
        }
      } else if (e.hasAttribute(u)) {
        if (ut(t, n, r, !1))
          return e.getAttribute(u);
        if (r.type === Tt)
          return n;
        m = e.getAttribute(u);
      }
      return ut(t, n, r, !1) ? m === null ? n : m : m === "" + n ? n : m;
    }
  }
  function Ha(e, t, n, r) {
    {
      if (!Vt(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var i = e.getAttribute(t);
      return Gn(n, t), i === "" + n ? n : i;
    }
  }
  function da(e, t, n, r) {
    var i = Qn(t);
    if (!Dt(t, i, r)) {
      if (ut(t, n, i, r) && (n = null), r || i === null) {
        if (Vt(t)) {
          var u = t;
          n === null ? e.removeAttribute(u) : (Gn(n, t), e.setAttribute(u, "" + n));
        }
        return;
      }
      var m = i.mustUseProperty;
      if (m) {
        var g = i.propertyName;
        if (n === null) {
          var x = i.type;
          e[g] = x === Tt ? !1 : "";
        } else
          e[g] = n;
        return;
      }
      var C = i.attributeName, R = i.attributeNamespace;
      if (n === null)
        e.removeAttribute(C);
      else {
        var A = i.type, _;
        A === Tt || A === mr && n === !0 ? _ = "" : (Gn(n, C), _ = "" + n, i.sanitizeURL && Oi(_.toString())), R ? e.setAttributeNS(R, C, _) : e.setAttribute(C, _);
      }
    }
  }
  var Yr = Symbol.for("react.element"), Rr = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), $e = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), bt = Symbol.for("react.scope"), yn = Symbol.for("react.debug_trace_mode"), jr = Symbol.for("react.offscreen"), Tr = Symbol.for("react.legacy_hidden"), Gt = Symbol.for("react.cache"), Li = Symbol.for("react.tracing_marker"), go = Symbol.iterator, Ds = "@@iterator";
  function ma(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = go && e[go] || e[Ds];
    return typeof t == "function" ? t : null;
  }
  var ze = Object.assign, _i = 0, Ba, ks, Os, Ls, _s, As, Ps;
  function Ms() {
  }
  Ms.__reactDisabledLog = !0;
  function Fu() {
    {
      if (_i === 0) {
        Ba = console.log, ks = console.info, Os = console.warn, Ls = console.error, _s = console.group, As = console.groupCollapsed, Ps = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ms,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      _i++;
    }
  }
  function Rd() {
    {
      if (_i--, _i === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: ze({}, e, {
            value: Ba
          }),
          info: ze({}, e, {
            value: ks
          }),
          warn: ze({}, e, {
            value: Os
          }),
          error: ze({}, e, {
            value: Ls
          }),
          group: ze({}, e, {
            value: _s
          }),
          groupCollapsed: ze({}, e, {
            value: As
          }),
          groupEnd: ze({}, e, {
            value: Ps
          })
        });
      }
      _i < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Us = s.ReactCurrentDispatcher, Ai;
  function pr(e, t, n) {
    {
      if (Ai === void 0)
        try {
          throw Error();
        } catch (i) {
          var r = i.stack.trim().match(/\n( *(at )?)/);
          Ai = r && r[1] || "";
        }
      return `
` + Ai + e;
    }
  }
  var Ja = !1, Ia;
  {
    var yo = typeof WeakMap == "function" ? WeakMap : Map;
    Ia = new yo();
  }
  function Vs(e, t) {
    if (!e || Ja)
      return "";
    {
      var n = Ia.get(e);
      if (n !== void 0)
        return n;
    }
    var r;
    Ja = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = Us.current, Us.current = null, Fu();
    try {
      if (t) {
        var m = function() {
          throw Error();
        };
        if (Object.defineProperty(m.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(m, []);
          } catch (J) {
            r = J;
          }
          Reflect.construct(e, [], m);
        } else {
          try {
            m.call();
          } catch (J) {
            r = J;
          }
          e.call(m.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (J) {
          r = J;
        }
        e();
      }
    } catch (J) {
      if (J && r && typeof J.stack == "string") {
        for (var g = J.stack.split(`
`), x = r.stack.split(`
`), C = g.length - 1, R = x.length - 1; C >= 1 && R >= 0 && g[C] !== x[R]; )
          R--;
        for (; C >= 1 && R >= 0; C--, R--)
          if (g[C] !== x[R]) {
            if (C !== 1 || R !== 1)
              do
                if (C--, R--, R < 0 || g[C] !== x[R]) {
                  var A = `
` + g[C].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Ia.set(e, A), A;
                }
              while (C >= 1 && R >= 0);
            break;
          }
      }
    } finally {
      Ja = !1, Us.current = u, Rd(), Error.prepareStackTrace = i;
    }
    var _ = e ? e.displayName || e.name : "", H = _ ? pr(_) : "";
    return typeof e == "function" && Ia.set(e, H), H;
  }
  function zu(e, t, n) {
    return Vs(e, !0);
  }
  function Fs(e, t, n) {
    return Vs(e, !1);
  }
  function jd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ya(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Vs(e, jd(e));
    if (typeof e == "string")
      return pr(e);
    switch (e) {
      case Me:
        return pr("Suspense");
      case Ae:
        return pr("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ne:
          return Fs(e.render);
        case xt:
          return Ya(e.type, t, n);
        case Ve: {
          var r = e, i = r._payload, u = r._init;
          try {
            return Ya(u(i), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function $u(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case E:
        return pr(e.type);
      case Le:
        return pr("Lazy");
      case U:
        return pr("Suspense");
      case be:
        return pr("SuspenseList");
      case h:
      case v:
      case Z:
        return Fs(e.type);
      case $:
        return Fs(e.type.render);
      case p:
        return zu(e.type);
      default:
        return "";
    }
  }
  function zs(e) {
    try {
      var t = "", n = e;
      do
        t += $u(n), n = n.return;
      while (n);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  function bo(e, t, n) {
    var r = e.displayName;
    if (r)
      return r;
    var i = t.displayName || t.name || "";
    return i !== "" ? n + "(" + i + ")" : n;
  }
  function Hu(e) {
    return e.displayName || "Context";
  }
  function Ke(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case O:
        return "Fragment";
      case Rr:
        return "Portal";
      case re:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Me:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          var t = e;
          return Hu(t) + ".Consumer";
        case ge:
          var n = e;
          return Hu(n._context) + ".Provider";
        case Ne:
          return bo(e, e.render, "ForwardRef");
        case xt:
          var r = e.displayName || null;
          return r !== null ? r : Ke(e.type) || "Memo";
        case Ve: {
          var i = e, u = i._payload, m = i._init;
          try {
            return Ke(m(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function $s(e, t, n) {
    var r = t.displayName || t.name || "";
    return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
  }
  function Hs(e) {
    return e.displayName || "Context";
  }
  function _e(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case Ce:
        return "Cache";
      case P:
        var r = n;
        return Hs(r) + ".Consumer";
      case L:
        var i = n;
        return Hs(i._context) + ".Provider";
      case he:
        return "DehydratedFragment";
      case $:
        return $s(n, n.render, "ForwardRef");
      case M:
        return "Fragment";
      case E:
        return n;
      case S:
        return "Portal";
      case b:
        return "Root";
      case j:
        return "Text";
      case Le:
        return Ke(n);
      case D:
        return n === Q ? "StrictMode" : "Mode";
      case pe:
        return "Offscreen";
      case k:
        return "Profiler";
      case nt:
        return "Scope";
      case U:
        return "Suspense";
      case be:
        return "SuspenseList";
      case et:
        return "TracingMarker";
      case p:
      case h:
      case ke:
      case v:
      case I:
      case Z:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Bu = s.ReactDebugCurrentFrame, bn = null, Pi = !1;
  function Ka() {
    {
      if (bn === null)
        return null;
      var e = bn._debugOwner;
      if (e !== null && typeof e < "u")
        return _e(e);
    }
    return null;
  }
  function Ju() {
    return bn === null ? "" : zs(bn);
  }
  function qt() {
    Bu.getCurrentStack = null, bn = null, Pi = !1;
  }
  function St(e) {
    Bu.getCurrentStack = e === null ? null : Ju, bn = e, Pi = !1;
  }
  function Iu() {
    return bn;
  }
  function Xn(e) {
    Pi = e;
  }
  function Vn(e) {
    return "" + e;
  }
  function Kr(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return jn(e), e;
      default:
        return "";
    }
  }
  var Td = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function xo(e, t) {
    Td[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Mi(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Yu(e) {
    return e._valueTracker;
  }
  function Wa(e) {
    e._valueTracker = null;
  }
  function Ku(e) {
    var t = "";
    return e && (Mi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Wu(e) {
    var t = Mi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    jn(e[t]);
    var r = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var i = n.get, u = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(g) {
          jn(g), r = "" + g, u.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var m = {
        getValue: function() {
          return r;
        },
        setValue: function(g) {
          jn(g), r = "" + g;
        },
        stopTracking: function() {
          Wa(e), delete e[t];
        }
      };
      return m;
    }
  }
  function pa(e) {
    Yu(e) || (e._valueTracker = Wu(e));
  }
  function So(e) {
    if (!e)
      return !1;
    var t = Yu(e);
    if (!t)
      return !0;
    var n = t.getValue(), r = Ku(e);
    return r !== n ? (t.setValue(r), !0) : !1;
  }
  function Ga(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var No = !1, Gu = !1, qu = !1, Qu = !1;
  function Xu(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function N(e, t) {
    var n = e, r = t.checked, i = ze({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? n._wrapperState.initialChecked
    });
    return i;
  }
  function T(e, t) {
    xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Gu && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component", t.type), Gu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !No && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component", t.type), No = !0);
    var n = e, r = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Kr(t.value != null ? t.value : r),
      controlled: Xu(t)
    };
  }
  function B(e, t) {
    var n = e, r = t.checked;
    r != null && da(n, "checked", r, !1);
  }
  function Y(e, t) {
    var n = e;
    {
      var r = Xu(t);
      !n._wrapperState.controlled && r && !Qu && (c("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qu = !0), n._wrapperState.controlled && !r && !qu && (c("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qu = !0);
    }
    B(e, t);
    var i = Kr(t.value), u = t.type;
    if (i != null)
      u === "number" ? (i === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != i) && (n.value = Vn(i)) : n.value !== Vn(i) && (n.value = Vn(i));
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Re(n, t.type, i) : t.hasOwnProperty("defaultValue") && Re(n, t.type, Kr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function ee(e, t, n) {
    var r = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type, u = i === "submit" || i === "reset";
      if (u && (t.value === void 0 || t.value === null))
        return;
      var m = Vn(r._wrapperState.initialValue);
      n || m !== r.value && (r.value = m), r.defaultValue = m;
    }
    var g = r.name;
    g !== "" && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !!r._wrapperState.initialChecked, g !== "" && (r.name = g);
  }
  function xe(e, t) {
    var n = e;
    Y(n, t), ce(n, t);
  }
  function ce(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var r = e; r.parentNode; )
        r = r.parentNode;
      Gn(n, "name");
      for (var i = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), u = 0; u < i.length; u++) {
        var m = i[u];
        if (!(m === e || m.form !== e.form)) {
          var g = Vc(m);
          if (!g)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          So(m), Y(m, g);
        }
      }
    }
  }
  function Re(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Ga(e.ownerDocument) !== e) && (n == null ? e.defaultValue = Vn(e._wrapperState.initialValue) : e.defaultValue !== Vn(n) && (e.defaultValue = Vn(n)));
  }
  var He = !1, it = !1, ct = !1;
  function ft(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || it || (it = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (ct || (ct = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !He && (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), He = !0);
  }
  function gt(e, t) {
    t.value != null && e.setAttribute("value", Vn(Kr(t.value)));
  }
  var Ct = Array.isArray;
  function Xe(e) {
    return Ct(e);
  }
  var qa;
  qa = !1;
  function wo() {
    var e = Ka();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Bs = ["value", "defaultValue"];
  function Dd(e) {
    {
      xo("select", e);
      for (var t = 0; t < Bs.length; t++) {
        var n = Bs[t];
        if (e[n] != null) {
          var r = Xe(e[n]);
          e.multiple && !r ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, wo()) : !e.multiple && r && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, wo());
        }
      }
    }
  }
  function ha(e, t, n, r) {
    var i = e.options;
    if (t) {
      for (var u = n, m = {}, g = 0; g < u.length; g++)
        m["$" + u[g]] = !0;
      for (var x = 0; x < i.length; x++) {
        var C = m.hasOwnProperty("$" + i[x].value);
        i[x].selected !== C && (i[x].selected = C), C && r && (i[x].defaultSelected = !0);
      }
    } else {
      for (var R = Vn(Kr(n)), A = null, _ = 0; _ < i.length; _++) {
        if (i[_].value === R) {
          i[_].selected = !0, r && (i[_].defaultSelected = !0);
          return;
        }
        A === null && !i[_].disabled && (A = i[_]);
      }
      A !== null && (A.selected = !0);
    }
  }
  function Js(e, t) {
    return ze({}, t, {
      value: void 0
    });
  }
  function Is(e, t) {
    var n = e;
    Dd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !qa && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qa = !0);
  }
  function kd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var r = t.value;
    r != null ? ha(n, !!t.multiple, r, !1) : t.defaultValue != null && ha(n, !!t.multiple, t.defaultValue, !0);
  }
  function cN(e, t) {
    var n = e, r = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var i = t.value;
    i != null ? ha(n, !!t.multiple, i, !1) : r !== !!t.multiple && (t.defaultValue != null ? ha(n, !!t.multiple, t.defaultValue, !0) : ha(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function fN(e, t) {
    var n = e, r = t.value;
    r != null && ha(n, !!t.multiple, r, !1);
  }
  var lg = !1;
  function Od(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var r = ze({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: Vn(n._wrapperState.initialValue)
    });
    return r;
  }
  function ug(e, t) {
    var n = e;
    xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !lg && (c("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component"), lg = !0);
    var r = t.value;
    if (r == null) {
      var i = t.children, u = t.defaultValue;
      if (i != null) {
        c("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (u != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Xe(i)) {
            if (i.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          u = i;
        }
      }
      u == null && (u = ""), r = u;
    }
    n._wrapperState = {
      initialValue: Kr(r)
    };
  }
  function cg(e, t) {
    var n = e, r = Kr(t.value), i = Kr(t.defaultValue);
    if (r != null) {
      var u = Vn(r);
      u !== n.value && (n.value = u), t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u);
    }
    i != null && (n.defaultValue = Vn(i));
  }
  function fg(e, t) {
    var n = e, r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function dN(e, t) {
    cg(e, t);
  }
  var va = "http://www.w3.org/1999/xhtml", mN = "http://www.w3.org/1998/Math/MathML", Ld = "http://www.w3.org/2000/svg";
  function _d(e) {
    switch (e) {
      case "svg":
        return Ld;
      case "math":
        return mN;
      default:
        return va;
    }
  }
  function Ad(e, t) {
    return e == null || e === va ? _d(t) : e === Ld && t === "foreignObject" ? va : e;
  }
  var pN = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }, Zu, dg = pN(function(e, t) {
    if (e.namespaceURI === Ld && !("innerHTML" in e)) {
      Zu = Zu || document.createElement("div"), Zu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = Zu.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Fn = 1, ga = 3, _t = 8, ya = 9, Pd = 11, ec = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === ga) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, hN = {
    animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
    background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
    backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
    border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
    borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
    borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
    borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
    borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
    borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
    borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
    borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
    borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
    borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
    borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
    borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
    columns: ["columnCount", "columnWidth"],
    flex: ["flexBasis", "flexGrow", "flexShrink"],
    flexFlow: ["flexDirection", "flexWrap"],
    font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
    fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
    gap: ["columnGap", "rowGap"],
    grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
    gridColumn: ["gridColumnEnd", "gridColumnStart"],
    gridColumnGap: ["columnGap"],
    gridGap: ["columnGap", "rowGap"],
    gridRow: ["gridRowEnd", "gridRowStart"],
    gridRowGap: ["rowGap"],
    gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marker: ["markerEnd", "markerMid", "markerStart"],
    mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
    maskPosition: ["maskPositionX", "maskPositionY"],
    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
    overflow: ["overflowX", "overflowY"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    placeContent: ["alignContent", "justifyContent"],
    placeItems: ["alignItems", "justifyItems"],
    placeSelf: ["alignSelf", "justifySelf"],
    textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
    textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
    transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
    wordWrap: ["overflowWrap"]
  }, Ys = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function vN(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var gN = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ys).forEach(function(e) {
    gN.forEach(function(t) {
      Ys[vN(t, e)] = Ys[e];
    });
  });
  function Md(e, t, n) {
    var r = t == null || typeof t == "boolean" || t === "";
    return r ? "" : !n && typeof t == "number" && t !== 0 && !(Ys.hasOwnProperty(e) && Ys[e]) ? t + "px" : (Cr(t, e), ("" + t).trim());
  }
  var yN = /([A-Z])/g, bN = /^ms-/;
  function xN(e) {
    return e.replace(yN, "-$1").toLowerCase().replace(bN, "-ms-");
  }
  var mg = function() {
  };
  {
    var SN = /^(?:webkit|moz|o)[A-Z]/, NN = /^-ms-/, wN = /-(.)/g, pg = /;\s*$/, Co = {}, Ud = {}, hg = !1, vg = !1, CN = function(e) {
      return e.replace(wN, function(t, n) {
        return n.toUpperCase();
      });
    }, EN = function(e) {
      Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, c(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        CN(e.replace(NN, "ms-"))
      ));
    }, RN = function(e) {
      Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, jN = function(e, t) {
      Ud.hasOwnProperty(t) && Ud[t] || (Ud[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(pg, "")));
    }, TN = function(e, t) {
      hg || (hg = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
    }, DN = function(e, t) {
      vg || (vg = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    mg = function(e, t) {
      e.indexOf("-") > -1 ? EN(e) : SN.test(e) ? RN(e) : pg.test(t) && jN(e, t), typeof t == "number" && (isNaN(t) ? TN(e, t) : isFinite(t) || DN(e, t));
    };
  }
  var kN = mg;
  function ON(e) {
    {
      var t = "", n = "";
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var i = e[r];
          if (i != null) {
            var u = r.indexOf("--") === 0;
            t += n + (u ? r : xN(r)) + ":", t += Md(r, i, u), n = ";";
          }
        }
      return t || null;
    }
  }
  function gg(e, t) {
    var n = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0;
        i || kN(r, t[r]);
        var u = Md(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? n.setProperty(r, u) : n[r] = u;
      }
  }
  function LN(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function yg(e) {
    var t = {};
    for (var n in e)
      for (var r = hN[n] || [n], i = 0; i < r.length; i++)
        t[r[i]] = n;
    return t;
  }
  function _N(e, t) {
    {
      if (!t)
        return;
      var n = yg(e), r = yg(t), i = {};
      for (var u in n) {
        var m = n[u], g = r[u];
        if (g && m !== g) {
          var x = m + "," + g;
          if (i[x])
            continue;
          i[x] = !0, c("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", LN(e[m]) ? "Removing" : "Updating", m, g);
        }
      }
    }
  }
  var AN = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, PN = ze({
    menuitem: !0
  }, AN), MN = "__html";
  function Vd(e, t) {
    if (t) {
      if (PN[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(MN in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Ui(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var tc = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, bg = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, Eo = {}, UN = new RegExp("^(aria)-[" + de + "]*$"), VN = new RegExp("^(aria)[A-Z][" + de + "]*$");
  function FN(e, t) {
    {
      if (vn.call(Eo, t) && Eo[t])
        return !0;
      if (VN.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), r = bg.hasOwnProperty(n) ? n : null;
        if (r == null)
          return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Eo[t] = !0, !0;
        if (t !== r)
          return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), Eo[t] = !0, !0;
      }
      if (UN.test(t)) {
        var i = t.toLowerCase(), u = bg.hasOwnProperty(i) ? i : null;
        if (u == null)
          return Eo[t] = !0, !1;
        if (t !== u)
          return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), Eo[t] = !0, !0;
      }
    }
    return !0;
  }
  function zN(e, t) {
    {
      var n = [];
      for (var r in t) {
        var i = FN(e, r);
        i || n.push(r);
      }
      var u = n.map(function(m) {
        return "`" + m + "`";
      }).join(", ");
      n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function $N(e, t) {
    Ui(e, t) || zN(e, t);
  }
  var xg = !1;
  function HN(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !xg && (xg = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var Sg = function() {
  };
  {
    var Tn = {}, Ng = /^on./, BN = /^on[^A-Z]/, JN = new RegExp("^(aria)-[" + de + "]*$"), IN = new RegExp("^(aria)[A-Z][" + de + "]*$");
    Sg = function(e, t, n, r) {
      if (vn.call(Tn, t) && Tn[t])
        return !0;
      var i = t.toLowerCase();
      if (i === "onfocusin" || i === "onfocusout")
        return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tn[t] = !0, !0;
      if (r != null) {
        var u = r.registrationNameDependencies, m = r.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var g = m.hasOwnProperty(i) ? m[i] : null;
        if (g != null)
          return c("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Tn[t] = !0, !0;
        if (Ng.test(t))
          return c("Unknown event handler property `%s`. It will be ignored.", t), Tn[t] = !0, !0;
      } else if (Ng.test(t))
        return BN.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tn[t] = !0, !0;
      if (JN.test(t) || IN.test(t))
        return !0;
      if (i === "innerhtml")
        return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tn[t] = !0, !0;
      if (i === "aria")
        return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tn[t] = !0, !0;
      if (i === "is" && n !== null && n !== void 0 && typeof n != "string")
        return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Tn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tn[t] = !0, !0;
      var x = Qn(t), C = x !== null && x.type === dr;
      if (tc.hasOwnProperty(i)) {
        var R = tc[i];
        if (R !== t)
          return c("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Tn[t] = !0, !0;
      } else if (!C && t !== i)
        return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Tn[t] = !0, !0;
      return typeof n == "boolean" && Un(t, n, x, !1) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Tn[t] = !0, !0) : C ? !0 : Un(t, n, x, !1) ? (Tn[t] = !0, !1) : ((n === "false" || n === "true") && x !== null && x.type === Tt && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Tn[t] = !0), !0);
    };
  }
  var YN = function(e, t, n) {
    {
      var r = [];
      for (var i in t) {
        var u = Sg(e, i, t[i], n);
        u || r.push(i);
      }
      var m = r.map(function(g) {
        return "`" + g + "`";
      }).join(", ");
      r.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : r.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
    }
  };
  function KN(e, t, n) {
    Ui(e, t) || YN(e, t, n);
  }
  var wg = 1, Fd = 2, Ks = 4, WN = wg | Fd | Ks, Ws = null;
  function GN(e) {
    Ws !== null && c("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ws = e;
  }
  function qN() {
    Ws === null && c("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ws = null;
  }
  function QN(e) {
    return e === Ws;
  }
  function zd(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ga ? t.parentNode : t;
  }
  var $d = null, Ro = null, jo = null;
  function Cg(e) {
    var t = ai(e);
    if (t) {
      if (typeof $d != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var r = Vc(n);
        $d(t.stateNode, t.type, r);
      }
    }
  }
  function XN(e) {
    $d = e;
  }
  function Eg(e) {
    Ro ? jo ? jo.push(e) : jo = [e] : Ro = e;
  }
  function ZN() {
    return Ro !== null || jo !== null;
  }
  function Rg() {
    if (Ro) {
      var e = Ro, t = jo;
      if (Ro = null, jo = null, Cg(e), t)
        for (var n = 0; n < t.length; n++)
          Cg(t[n]);
    }
  }
  var jg = function(e, t) {
    return e(t);
  }, Tg = function() {
  }, Hd = !1;
  function ew() {
    var e = ZN();
    e && (Tg(), Rg());
  }
  function Dg(e, t, n) {
    if (Hd)
      return e(t, n);
    Hd = !0;
    try {
      return jg(e, t, n);
    } finally {
      Hd = !1, ew();
    }
  }
  function tw(e, t, n) {
    jg = e, Tg = n;
  }
  function nw(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function rw(e, t, n) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        return !!(n.disabled && nw(t));
      default:
        return !1;
    }
  }
  function Gs(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Vc(n);
    if (r === null)
      return null;
    var i = r[t];
    if (rw(t, e.type, r))
      return null;
    if (i && typeof i != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
    return i;
  }
  var Bd = !1;
  if (Lt)
    try {
      var qs = {};
      Object.defineProperty(qs, "passive", {
        get: function() {
          Bd = !0;
        }
      }), window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
    } catch {
      Bd = !1;
    }
  function kg(e, t, n, r, i, u, m, g, x) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (R) {
      this.onError(R);
    }
  }
  var Og = kg;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Jd = document.createElement("react");
    Og = function(t, n, r, i, u, m, g, x, C) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var R = document.createEvent("Event"), A = !1, _ = !0, H = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
      function K() {
        Jd.removeEventListener(W, me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
      }
      var ae = Array.prototype.slice.call(arguments, 3);
      function me() {
        A = !0, K(), n.apply(r, ae), _ = !1;
      }
      var fe, Ie = !1, Fe = !1;
      function F(z) {
        if (fe = z.error, Ie = !0, fe === null && z.colno === 0 && z.lineno === 0 && (Fe = !0), z.defaultPrevented && fe != null && typeof fe == "object")
          try {
            fe._suppressLogging = !0;
          } catch {
          }
      }
      var W = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", F), Jd.addEventListener(W, me, !1), R.initEvent(W, !1, !1), Jd.dispatchEvent(R), J && Object.defineProperty(window, "event", J), A && _ && (Ie ? Fe && (fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(fe)), window.removeEventListener("error", F), !A)
        return K(), kg.apply(this, arguments);
    };
  }
  var aw = Og, To = !1, nc = null, rc = !1, Id = null, iw = {
    onError: function(e) {
      To = !0, nc = e;
    }
  };
  function Yd(e, t, n, r, i, u, m, g, x) {
    To = !1, nc = null, aw.apply(iw, arguments);
  }
  function ow(e, t, n, r, i, u, m, g, x) {
    if (Yd.apply(this, arguments), To) {
      var C = Kd();
      rc || (rc = !0, Id = C);
    }
  }
  function sw() {
    if (rc) {
      var e = Id;
      throw rc = !1, Id = null, e;
    }
  }
  function lw() {
    return To;
  }
  function Kd() {
    if (To) {
      var e = nc;
      return To = !1, nc = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Do(e) {
    return e._reactInternals;
  }
  function uw(e) {
    return e._reactInternals !== void 0;
  }
  function cw(e, t) {
    e._reactInternals = t;
  }
  var ye = (
    /*                      */
    0
  ), ko = (
    /*                */
    1
  ), At = (
    /*                    */
    2
  ), Ye = (
    /*                       */
    4
  ), Vi = (
    /*                */
    16
  ), Qs = (
    /*                 */
    32
  ), Wd = (
    /*                     */
    64
  ), Ze = (
    /*                   */
    128
  ), ba = (
    /*            */
    256
  ), Qa = (
    /*                          */
    512
  ), Fi = (
    /*                     */
    1024
  ), Dr = (
    /*                      */
    2048
  ), xa = (
    /*                    */
    4096
  ), zi = (
    /*                   */
    8192
  ), ac = (
    /*             */
    16384
  ), fw = Dr | Ye | Wd | Qa | Fi | ac, dw = (
    /*               */
    32767
  ), Xs = (
    /*                   */
    32768
  ), Dn = (
    /*                */
    65536
  ), Gd = (
    /* */
    131072
  ), Lg = (
    /*                       */
    1048576
  ), qd = (
    /*                    */
    2097152
  ), $i = (
    /*                 */
    4194304
  ), Qd = (
    /*                */
    8388608
  ), Sa = (
    /*               */
    16777216
  ), ic = (
    /*              */
    33554432
  ), Xd = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ye | Fi | 0
  ), Zd = At | Ye | Vi | Qs | Qa | xa | zi, Zs = Ye | Wd | Qa | zi, Oo = Dr | Vi, Na = $i | Qd | qd, mw = s.ReactCurrentOwner;
  function Hi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var r = t;
      do
        t = r, (t.flags & (At | xa)) !== ye && (n = t.return), r = t.return;
      while (r);
    }
    return t.tag === b ? n : null;
  }
  function _g(e) {
    if (e.tag === U) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Ag(e) {
    return e.tag === b ? e.stateNode.containerInfo : null;
  }
  function pw(e) {
    return Hi(e) === e;
  }
  function hw(e) {
    {
      var t = mw.current;
      if (t !== null && t.tag === p) {
        var n = t, r = n.stateNode;
        r._warnedAboutRefsInRender || c("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _e(n) || "A component"), r._warnedAboutRefsInRender = !0;
      }
    }
    var i = Do(e);
    return i ? Hi(i) === i : !1;
  }
  function Pg(e) {
    if (Hi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function Mg(e) {
    var t = e.alternate;
    if (!t) {
      var n = Hi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var u = r.return;
      if (u === null)
        break;
      var m = u.alternate;
      if (m === null) {
        var g = u.return;
        if (g !== null) {
          r = i = g;
          continue;
        }
        break;
      }
      if (u.child === m.child) {
        for (var x = u.child; x; ) {
          if (x === r)
            return Pg(u), e;
          if (x === i)
            return Pg(u), t;
          x = x.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (r.return !== i.return)
        r = u, i = m;
      else {
        for (var C = !1, R = u.child; R; ) {
          if (R === r) {
            C = !0, r = u, i = m;
            break;
          }
          if (R === i) {
            C = !0, i = u, r = m;
            break;
          }
          R = R.sibling;
        }
        if (!C) {
          for (R = m.child; R; ) {
            if (R === r) {
              C = !0, r = m, i = u;
              break;
            }
            if (R === i) {
              C = !0, i = m, r = u;
              break;
            }
            R = R.sibling;
          }
          if (!C)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (r.alternate !== i)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (r.tag !== b)
      throw new Error("Unable to find node on an unmounted component.");
    return r.stateNode.current === r ? e : t;
  }
  function Ug(e) {
    var t = Mg(e);
    return t !== null ? Vg(t) : null;
  }
  function Vg(e) {
    if (e.tag === E || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = Vg(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function vw(e) {
    var t = Mg(e);
    return t !== null ? Fg(t) : null;
  }
  function Fg(e) {
    if (e.tag === E || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== S) {
        var n = Fg(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var zg = a.unstable_scheduleCallback, gw = a.unstable_cancelCallback, yw = a.unstable_shouldYield, bw = a.unstable_requestPaint, Qt = a.unstable_now, xw = a.unstable_getCurrentPriorityLevel, oc = a.unstable_ImmediatePriority, em = a.unstable_UserBlockingPriority, Bi = a.unstable_NormalPriority, Sw = a.unstable_LowPriority, tm = a.unstable_IdlePriority, Nw = a.unstable_yieldValue, ww = a.unstable_setDisableYieldValue, Lo = null, xn = null, oe = null, Wr = !1, kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function Cw(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return c("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Jr && (e = ze({}, e, {
        getLaneLabelMap: kw,
        injectProfilingHooks: Dw
      })), Lo = t.inject(e), xn = t;
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function Ew(e, t) {
    if (xn && typeof xn.onScheduleFiberRoot == "function")
      try {
        xn.onScheduleFiberRoot(Lo, e, t);
      } catch (n) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", n));
      }
  }
  function Rw(e, t) {
    if (xn && typeof xn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Ze) === Ze;
        if (Nr) {
          var r;
          switch (t) {
            case tr:
              r = oc;
              break;
            case Ca:
              r = em;
              break;
            case Ea:
              r = Bi;
              break;
            case mc:
              r = tm;
              break;
            default:
              r = Bi;
              break;
          }
          xn.onCommitFiberRoot(Lo, e, r, n);
        }
      } catch (i) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", i));
      }
  }
  function jw(e) {
    if (xn && typeof xn.onPostCommitFiberRoot == "function")
      try {
        xn.onPostCommitFiberRoot(Lo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Tw(e) {
    if (xn && typeof xn.onCommitFiberUnmount == "function")
      try {
        xn.onCommitFiberUnmount(Lo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Xt(e) {
    if (typeof Nw == "function" && (ww(e), d(e)), xn && typeof xn.setStrictMode == "function")
      try {
        xn.setStrictMode(Lo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Dw(e) {
    oe = e;
  }
  function kw() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < rm; n++) {
        var r = qw(t);
        e.set(t, r), t *= 2;
      }
      return e;
    }
  }
  function Ow(e) {
    oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
  }
  function $g() {
    oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
  }
  function el(e) {
    oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
  }
  function _o() {
    oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
  }
  function Lw(e) {
    oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
  }
  function _w() {
    oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
  }
  function Aw(e) {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
  }
  function Pw() {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
  }
  function Mw(e) {
    oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
  }
  function Uw() {
    oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
  }
  function Hg(e) {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
  }
  function Bg() {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
  }
  function Vw(e, t, n) {
    oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, n);
  }
  function Fw(e, t, n) {
    oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, n);
  }
  function zw(e) {
    oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
  }
  function $w() {
    oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
  }
  function Hw(e) {
    oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
  }
  function Bw() {
    oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
  }
  function Jg(e) {
    oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
  }
  function Jw() {
    oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
  }
  function Ig() {
    oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
  }
  function Iw(e) {
    oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
  }
  function Yw(e, t) {
    oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
  }
  function nm(e, t) {
    oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
  }
  var ve = (
    /*                         */
    0
  ), Be = (
    /*                 */
    1
  ), ot = (
    /*                    */
    2
  ), Et = (
    /*               */
    8
  ), Gr = (
    /*              */
    16
  ), Yg = Math.clz32 ? Math.clz32 : Gw, Kw = Math.log, Ww = Math.LN2;
  function Gw(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (Kw(t) / Ww | 0) | 0;
  }
  var rm = 31, q = (
    /*                        */
    0
  ), Zt = (
    /*                          */
    0
  ), je = (
    /*                        */
    1
  ), Ao = (
    /*    */
    2
  ), wa = (
    /*             */
    4
  ), Ji = (
    /*            */
    8
  ), qr = (
    /*                     */
    16
  ), tl = (
    /*                */
    32
  ), Po = (
    /*                       */
    4194240
  ), nl = (
    /*                        */
    64
  ), am = (
    /*                        */
    128
  ), im = (
    /*                        */
    256
  ), om = (
    /*                        */
    512
  ), sm = (
    /*                        */
    1024
  ), lm = (
    /*                        */
    2048
  ), um = (
    /*                        */
    4096
  ), cm = (
    /*                        */
    8192
  ), fm = (
    /*                        */
    16384
  ), dm = (
    /*                       */
    32768
  ), mm = (
    /*                       */
    65536
  ), pm = (
    /*                       */
    131072
  ), hm = (
    /*                       */
    262144
  ), vm = (
    /*                       */
    524288
  ), gm = (
    /*                       */
    1048576
  ), ym = (
    /*                       */
    2097152
  ), sc = (
    /*                            */
    130023424
  ), Mo = (
    /*                             */
    4194304
  ), bm = (
    /*                             */
    8388608
  ), xm = (
    /*                             */
    16777216
  ), Sm = (
    /*                             */
    33554432
  ), Nm = (
    /*                             */
    67108864
  ), Kg = Mo, rl = (
    /*          */
    134217728
  ), Wg = (
    /*                          */
    268435455
  ), al = (
    /*               */
    268435456
  ), Ii = (
    /*                        */
    536870912
  ), Zn = (
    /*                   */
    1073741824
  );
  function qw(e) {
    {
      if (e & je)
        return "Sync";
      if (e & Ao)
        return "InputContinuousHydration";
      if (e & wa)
        return "InputContinuous";
      if (e & Ji)
        return "DefaultHydration";
      if (e & qr)
        return "Default";
      if (e & tl)
        return "TransitionHydration";
      if (e & Po)
        return "Transition";
      if (e & sc)
        return "Retry";
      if (e & rl)
        return "SelectiveHydration";
      if (e & al)
        return "IdleHydration";
      if (e & Ii)
        return "Idle";
      if (e & Zn)
        return "Offscreen";
    }
  }
  var pt = -1, lc = nl, uc = Mo;
  function il(e) {
    switch (Yi(e)) {
      case je:
        return je;
      case Ao:
        return Ao;
      case wa:
        return wa;
      case Ji:
        return Ji;
      case qr:
        return qr;
      case tl:
        return tl;
      case nl:
      case am:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
        return e & Po;
      case Mo:
      case bm:
      case xm:
      case Sm:
      case Nm:
        return e & sc;
      case rl:
        return rl;
      case al:
        return al;
      case Ii:
        return Ii;
      case Zn:
        return Zn;
      default:
        return c("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function cc(e, t) {
    var n = e.pendingLanes;
    if (n === q)
      return q;
    var r = q, i = e.suspendedLanes, u = e.pingedLanes, m = n & Wg;
    if (m !== q) {
      var g = m & ~i;
      if (g !== q)
        r = il(g);
      else {
        var x = m & u;
        x !== q && (r = il(x));
      }
    } else {
      var C = n & ~i;
      C !== q ? r = il(C) : u !== q && (r = il(u));
    }
    if (r === q)
      return q;
    if (t !== q && t !== r && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & i) === q) {
      var R = Yi(r), A = Yi(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        R >= A || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        R === qr && (A & Po) !== q
      )
        return t;
    }
    (r & wa) !== q && (r |= n & qr);
    var _ = e.entangledLanes;
    if (_ !== q)
      for (var H = e.entanglements, J = r & _; J > 0; ) {
        var K = Ki(J), ae = 1 << K;
        r |= H[K], J &= ~ae;
      }
    return r;
  }
  function Qw(e, t) {
    for (var n = e.eventTimes, r = pt; t > 0; ) {
      var i = Ki(t), u = 1 << i, m = n[i];
      m > r && (r = m), t &= ~u;
    }
    return r;
  }
  function Xw(e, t) {
    switch (e) {
      case je:
      case Ao:
      case wa:
        return t + 250;
      case Ji:
      case qr:
      case tl:
      case nl:
      case am:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
        return t + 5e3;
      case Mo:
      case bm:
      case xm:
      case Sm:
      case Nm:
        return pt;
      case rl:
      case al:
      case Ii:
      case Zn:
        return pt;
      default:
        return c("Should have found matching lanes. This is a bug in React."), pt;
    }
  }
  function Zw(e, t) {
    for (var n = e.pendingLanes, r = e.suspendedLanes, i = e.pingedLanes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Ki(m), x = 1 << g, C = u[g];
      C === pt ? ((x & r) === q || (x & i) !== q) && (u[g] = Xw(x, t)) : C <= t && (e.expiredLanes |= x), m &= ~x;
    }
  }
  function eC(e) {
    return il(e.pendingLanes);
  }
  function wm(e) {
    var t = e.pendingLanes & ~Zn;
    return t !== q ? t : t & Zn ? Zn : q;
  }
  function tC(e) {
    return (e & je) !== q;
  }
  function Cm(e) {
    return (e & Wg) !== q;
  }
  function Gg(e) {
    return (e & sc) === e;
  }
  function nC(e) {
    var t = je | wa | qr;
    return (e & t) === q;
  }
  function rC(e) {
    return (e & Po) === e;
  }
  function fc(e, t) {
    var n = Ao | wa | Ji | qr;
    return (t & n) !== q;
  }
  function aC(e, t) {
    return (t & e.expiredLanes) !== q;
  }
  function qg(e) {
    return (e & Po) !== q;
  }
  function Qg() {
    var e = lc;
    return lc <<= 1, (lc & Po) === q && (lc = nl), e;
  }
  function iC() {
    var e = uc;
    return uc <<= 1, (uc & sc) === q && (uc = Mo), e;
  }
  function Yi(e) {
    return e & -e;
  }
  function ol(e) {
    return Yi(e);
  }
  function Ki(e) {
    return 31 - Yg(e);
  }
  function Em(e) {
    return Ki(e);
  }
  function er(e, t) {
    return (e & t) !== q;
  }
  function Uo(e, t) {
    return (e & t) === t;
  }
  function Pe(e, t) {
    return e | t;
  }
  function dc(e, t) {
    return e & ~t;
  }
  function Xg(e, t) {
    return e & t;
  }
  function PM(e) {
    return e;
  }
  function oC(e, t) {
    return e !== Zt && e < t ? e : t;
  }
  function Rm(e) {
    for (var t = [], n = 0; n < rm; n++)
      t.push(e);
    return t;
  }
  function sl(e, t, n) {
    e.pendingLanes |= t, t !== Ii && (e.suspendedLanes = q, e.pingedLanes = q);
    var r = e.eventTimes, i = Em(t);
    r[i] = n;
  }
  function sC(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var i = Ki(r), u = 1 << i;
      n[i] = pt, r &= ~u;
    }
  }
  function Zg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function lC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var r = e.entanglements, i = e.eventTimes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Ki(m), x = 1 << g;
      r[g] = q, i[g] = pt, u[g] = pt, m &= ~x;
    }
  }
  function jm(e, t) {
    for (var n = e.entangledLanes |= t, r = e.entanglements, i = n; i; ) {
      var u = Ki(i), m = 1 << u;
      // Is this one of the newly entangled lanes?
      m & t | // Is this lane transitively entangled with the newly entangled lanes?
      r[u] & t && (r[u] |= t), i &= ~m;
    }
  }
  function uC(e, t) {
    var n = Yi(t), r;
    switch (n) {
      case wa:
        r = Ao;
        break;
      case qr:
        r = Ji;
        break;
      case nl:
      case am:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
      case Mo:
      case bm:
      case xm:
      case Sm:
      case Nm:
        r = tl;
        break;
      case Ii:
        r = al;
        break;
      default:
        r = Zt;
        break;
    }
    return (r & (e.suspendedLanes | t)) !== Zt ? Zt : r;
  }
  function ey(e, t, n) {
    if (kr)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var i = Em(n), u = 1 << i, m = r[i];
        m.add(t), n &= ~u;
      }
  }
  function ty(e, t) {
    if (kr)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var i = Em(t), u = 1 << i, m = n[i];
        m.size > 0 && (m.forEach(function(g) {
          var x = g.alternate;
          (x === null || !r.has(x)) && r.add(g);
        }), m.clear()), t &= ~u;
      }
  }
  function ny(e, t) {
    return null;
  }
  var tr = je, Ca = wa, Ea = qr, mc = Ii, ll = Zt;
  function Or() {
    return ll;
  }
  function en(e) {
    ll = e;
  }
  function cC(e, t) {
    var n = ll;
    try {
      return ll = e, t();
    } finally {
      ll = n;
    }
  }
  function fC(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function dC(e, t) {
    return e > t ? e : t;
  }
  function Tm(e, t) {
    return e !== 0 && e < t;
  }
  function ry(e) {
    var t = Yi(e);
    return Tm(tr, t) ? Tm(Ca, t) ? Cm(t) ? Ea : mc : Ca : tr;
  }
  function pc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var ay;
  function mC(e) {
    ay = e;
  }
  function pC(e) {
    ay(e);
  }
  var Dm;
  function hC(e) {
    Dm = e;
  }
  var iy;
  function vC(e) {
    iy = e;
  }
  var oy;
  function gC(e) {
    oy = e;
  }
  var sy;
  function yC(e) {
    sy = e;
  }
  var km = !1, hc = [], Xa = null, Za = null, ei = null, ul = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), ti = [], bC = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function xC(e) {
    return bC.indexOf(e) > -1;
  }
  function SC(e, t, n, r, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [r]
    };
  }
  function ly(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xa = null;
        break;
      case "dragenter":
      case "dragleave":
        Za = null;
        break;
      case "mouseover":
      case "mouseout":
        ei = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        ul.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var r = t.pointerId;
        cl.delete(r);
        break;
      }
    }
  }
  function fl(e, t, n, r, i, u) {
    if (e === null || e.nativeEvent !== u) {
      var m = SC(t, n, r, i, u);
      if (t !== null) {
        var g = ai(t);
        g !== null && Dm(g);
      }
      return m;
    }
    e.eventSystemFlags |= r;
    var x = e.targetContainers;
    return i !== null && x.indexOf(i) === -1 && x.push(i), e;
  }
  function NC(e, t, n, r, i) {
    switch (t) {
      case "focusin": {
        var u = i;
        return Xa = fl(Xa, e, t, n, r, u), !0;
      }
      case "dragenter": {
        var m = i;
        return Za = fl(Za, e, t, n, r, m), !0;
      }
      case "mouseover": {
        var g = i;
        return ei = fl(ei, e, t, n, r, g), !0;
      }
      case "pointerover": {
        var x = i, C = x.pointerId;
        return ul.set(C, fl(ul.get(C) || null, e, t, n, r, x)), !0;
      }
      case "gotpointercapture": {
        var R = i, A = R.pointerId;
        return cl.set(A, fl(cl.get(A) || null, e, t, n, r, R)), !0;
      }
    }
    return !1;
  }
  function uy(e) {
    var t = qi(e.target);
    if (t !== null) {
      var n = Hi(t);
      if (n !== null) {
        var r = n.tag;
        if (r === U) {
          var i = _g(n);
          if (i !== null) {
            e.blockedOn = i, sy(e.priority, function() {
              iy(n);
            });
            return;
          }
        } else if (r === b) {
          var u = n.stateNode;
          if (pc(u)) {
            e.blockedOn = Ag(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function wC(e) {
    for (var t = oy(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, r = 0; r < ti.length && Tm(t, ti[r].priority); r++)
      ;
    ti.splice(r, 0, n), r === 0 && uy(n);
  }
  function vc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], r = _m(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (r === null) {
        var i = e.nativeEvent, u = new i.constructor(i.type, i);
        GN(u), i.target.dispatchEvent(u), qN();
      } else {
        var m = ai(r);
        return m !== null && Dm(m), e.blockedOn = r, !1;
      }
      t.shift();
    }
    return !0;
  }
  function cy(e, t, n) {
    vc(e) && n.delete(t);
  }
  function CC() {
    km = !1, Xa !== null && vc(Xa) && (Xa = null), Za !== null && vc(Za) && (Za = null), ei !== null && vc(ei) && (ei = null), ul.forEach(cy), cl.forEach(cy);
  }
  function dl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, km || (km = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, CC)));
  }
  function ml(e) {
    if (hc.length > 0) {
      dl(hc[0], e);
      for (var t = 1; t < hc.length; t++) {
        var n = hc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Xa !== null && dl(Xa, e), Za !== null && dl(Za, e), ei !== null && dl(ei, e);
    var r = function(g) {
      return dl(g, e);
    };
    ul.forEach(r), cl.forEach(r);
    for (var i = 0; i < ti.length; i++) {
      var u = ti[i];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; ti.length > 0; ) {
      var m = ti[0];
      if (m.blockedOn !== null)
        break;
      uy(m), m.blockedOn === null && ti.shift();
    }
  }
  var Vo = s.ReactCurrentBatchConfig, Om = !0;
  function fy(e) {
    Om = !!e;
  }
  function EC() {
    return Om;
  }
  function RC(e, t, n) {
    var r = dy(t), i;
    switch (r) {
      case tr:
        i = jC;
        break;
      case Ca:
        i = TC;
        break;
      case Ea:
      default:
        i = Lm;
        break;
    }
    return i.bind(null, t, n, e);
  }
  function jC(e, t, n, r) {
    var i = Or(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(tr), Lm(e, t, n, r);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function TC(e, t, n, r) {
    var i = Or(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(Ca), Lm(e, t, n, r);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function Lm(e, t, n, r) {
    Om && DC(e, t, n, r);
  }
  function DC(e, t, n, r) {
    var i = _m(e, t, n, r);
    if (i === null) {
      Km(e, t, r, gc, n), ly(e, r);
      return;
    }
    if (NC(i, e, t, n, r)) {
      r.stopPropagation();
      return;
    }
    if (ly(e, r), t & Ks && xC(e)) {
      for (; i !== null; ) {
        var u = ai(i);
        u !== null && pC(u);
        var m = _m(e, t, n, r);
        if (m === null && Km(e, t, r, gc, n), m === i)
          break;
        i = m;
      }
      i !== null && r.stopPropagation();
      return;
    }
    Km(e, t, r, null, n);
  }
  var gc = null;
  function _m(e, t, n, r) {
    gc = null;
    var i = zd(r), u = qi(i);
    if (u !== null) {
      var m = Hi(u);
      if (m === null)
        u = null;
      else {
        var g = m.tag;
        if (g === U) {
          var x = _g(m);
          if (x !== null)
            return x;
          u = null;
        } else if (g === b) {
          var C = m.stateNode;
          if (pc(C))
            return Ag(m);
          u = null;
        } else m !== u && (u = null);
      }
    }
    return gc = u, null;
  }
  function dy(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return tr;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return Ca;
      case "message": {
        var t = xw();
        switch (t) {
          case oc:
            return tr;
          case em:
            return Ca;
          case Bi:
          case Sw:
            return Ea;
          case tm:
            return mc;
          default:
            return Ea;
        }
      }
      default:
        return Ea;
    }
  }
  function kC(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function OC(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function LC(e, t, n, r) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: r
    }), n;
  }
  function _C(e, t, n, r) {
    return e.addEventListener(t, n, {
      passive: r
    }), n;
  }
  var pl = null, Am = null, hl = null;
  function AC(e) {
    return pl = e, Am = py(), !0;
  }
  function PC() {
    pl = null, Am = null, hl = null;
  }
  function my() {
    if (hl)
      return hl;
    var e, t = Am, n = t.length, r, i = py(), u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var m = n - e;
    for (r = 1; r <= m && t[n - r] === i[u - r]; r++)
      ;
    var g = r > 1 ? 1 - r : void 0;
    return hl = i.slice(e, g), hl;
  }
  function py() {
    return "value" in pl ? pl.value : pl.textContent;
  }
  function yc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function bc() {
    return !0;
  }
  function hy() {
    return !1;
  }
  function nr(e) {
    function t(n, r, i, u, m) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var g in e)
        if (e.hasOwnProperty(g)) {
          var x = e[g];
          x ? this[g] = x(u) : this[g] = u[g];
        }
      var C = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return C ? this.isDefaultPrevented = bc : this.isDefaultPrevented = hy, this.isPropagationStopped = hy, this;
    }
    return ze(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bc);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bc);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: bc
    }), t;
  }
  var Fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pm = nr(Fo), vl = ze({}, Fo, {
    view: 0,
    detail: 0
  }), MC = nr(vl), Mm, Um, gl;
  function UC(e) {
    e !== gl && (gl && e.type === "mousemove" ? (Mm = e.screenX - gl.screenX, Um = e.screenY - gl.screenY) : (Mm = 0, Um = 0), gl = e);
  }
  var xc = ze({}, vl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fm,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (UC(e), Mm);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Um;
    }
  }), vy = nr(xc), VC = ze({}, xc, {
    dataTransfer: 0
  }), FC = nr(VC), zC = ze({}, vl, {
    relatedTarget: 0
  }), Vm = nr(zC), $C = ze({}, Fo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), HC = nr($C), BC = ze({}, Fo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), JC = nr(BC), IC = ze({}, Fo, {
    data: 0
  }), gy = nr(IC), YC = gy, KC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, WC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  function GC(e) {
    if (e.key) {
      var t = KC[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = yc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? WC[e.keyCode] || "Unidentified" : "";
  }
  var qC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function QC(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var r = qC[e];
    return r ? !!n[r] : !1;
  }
  function Fm(e) {
    return QC;
  }
  var XC = ze({}, vl, {
    key: GC,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fm,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? yc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ZC = nr(XC), eE = ze({}, xc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), yy = nr(eE), tE = ze({}, vl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fm
  }), nE = nr(tE), rE = ze({}, Fo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), aE = nr(rE), iE = ze({}, xc, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), oE = nr(iE), sE = [9, 13, 27, 32], by = 229, zm = Lt && "CompositionEvent" in window, yl = null;
  Lt && "documentMode" in document && (yl = document.documentMode);
  var lE = Lt && "TextEvent" in window && !yl, xy = Lt && (!zm || yl && yl > 8 && yl <= 11), Sy = 32, Ny = String.fromCharCode(Sy);
  function uE() {
    Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var wy = !1;
  function cE(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function fE(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function dE(e, t) {
    return e === "keydown" && t.keyCode === by;
  }
  function Cy(e, t) {
    switch (e) {
      case "keyup":
        return sE.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== by;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ey(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function Ry(e) {
    return e.locale === "ko";
  }
  var zo = !1;
  function mE(e, t, n, r, i) {
    var u, m;
    if (zm ? u = fE(t) : zo ? Cy(t, r) && (u = "onCompositionEnd") : dE(t, r) && (u = "onCompositionStart"), !u)
      return null;
    xy && !Ry(r) && (!zo && u === "onCompositionStart" ? zo = AC(i) : u === "onCompositionEnd" && zo && (m = my()));
    var g = Ec(n, u);
    if (g.length > 0) {
      var x = new gy(u, t, null, r, i);
      if (e.push({
        event: x,
        listeners: g
      }), m)
        x.data = m;
      else {
        var C = Ey(r);
        C !== null && (x.data = C);
      }
    }
  }
  function pE(e, t) {
    switch (e) {
      case "compositionend":
        return Ey(t);
      case "keypress":
        var n = t.which;
        return n !== Sy ? null : (wy = !0, Ny);
      case "textInput":
        var r = t.data;
        return r === Ny && wy ? null : r;
      default:
        return null;
    }
  }
  function hE(e, t) {
    if (zo) {
      if (e === "compositionend" || !zm && Cy(e, t)) {
        var n = my();
        return PC(), zo = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!cE(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xy && !Ry(t) ? null : t.data;
      default:
        return null;
    }
  }
  function vE(e, t, n, r, i) {
    var u;
    if (lE ? u = pE(t, r) : u = hE(t, r), !u)
      return null;
    var m = Ec(n, "onBeforeInput");
    if (m.length > 0) {
      var g = new YC("onBeforeInput", "beforeinput", null, r, i);
      e.push({
        event: g,
        listeners: m
      }), g.data = u;
    }
  }
  function gE(e, t, n, r, i, u, m) {
    mE(e, t, n, r, i), vE(e, t, n, r, i);
  }
  var yE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function jy(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yE[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function bE(e) {
    if (!Lt)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
  function xE() {
    Kn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function Ty(e, t, n, r) {
    Eg(r);
    var i = Ec(t, "onChange");
    if (i.length > 0) {
      var u = new Pm("onChange", "change", null, n, r);
      e.push({
        event: u,
        listeners: i
      });
    }
  }
  var bl = null, xl = null;
  function SE(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function NE(e) {
    var t = [];
    Ty(t, xl, e, zd(e)), Dg(wE, t);
  }
  function wE(e) {
    Yy(e, 0);
  }
  function Sc(e) {
    var t = Yo(e);
    if (So(t))
      return e;
  }
  function CE(e, t) {
    if (e === "change")
      return t;
  }
  var Dy = !1;
  Lt && (Dy = bE("input") && (!document.documentMode || document.documentMode > 9));
  function EE(e, t) {
    bl = e, xl = t, bl.attachEvent("onpropertychange", Oy);
  }
  function ky() {
    bl && (bl.detachEvent("onpropertychange", Oy), bl = null, xl = null);
  }
  function Oy(e) {
    e.propertyName === "value" && Sc(xl) && NE(e);
  }
  function RE(e, t, n) {
    e === "focusin" ? (ky(), EE(t, n)) : e === "focusout" && ky();
  }
  function jE(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Sc(xl);
  }
  function TE(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function DE(e, t) {
    if (e === "click")
      return Sc(t);
  }
  function kE(e, t) {
    if (e === "input" || e === "change")
      return Sc(t);
  }
  function OE(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Re(e, "number", e.value);
  }
  function LE(e, t, n, r, i, u, m) {
    var g = n ? Yo(n) : window, x, C;
    if (SE(g) ? x = CE : jy(g) ? Dy ? x = kE : (x = jE, C = RE) : TE(g) && (x = DE), x) {
      var R = x(t, n);
      if (R) {
        Ty(e, R, r, i);
        return;
      }
    }
    C && C(t, g, n), t === "focusout" && OE(g);
  }
  function _E() {
    Wn("onMouseEnter", ["mouseout", "mouseover"]), Wn("onMouseLeave", ["mouseout", "mouseover"]), Wn("onPointerEnter", ["pointerout", "pointerover"]), Wn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function AE(e, t, n, r, i, u, m) {
    var g = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
    if (g && !QN(r)) {
      var C = r.relatedTarget || r.fromElement;
      if (C && (qi(C) || Pl(C)))
        return;
    }
    if (!(!x && !g)) {
      var R;
      if (i.window === i)
        R = i;
      else {
        var A = i.ownerDocument;
        A ? R = A.defaultView || A.parentWindow : R = window;
      }
      var _, H;
      if (x) {
        var J = r.relatedTarget || r.toElement;
        if (_ = n, H = J ? qi(J) : null, H !== null) {
          var K = Hi(H);
          (H !== K || H.tag !== E && H.tag !== j) && (H = null);
        }
      } else
        _ = null, H = n;
      if (_ !== H) {
        var ae = vy, me = "onMouseLeave", fe = "onMouseEnter", Ie = "mouse";
        (t === "pointerout" || t === "pointerover") && (ae = yy, me = "onPointerLeave", fe = "onPointerEnter", Ie = "pointer");
        var Fe = _ == null ? R : Yo(_), F = H == null ? R : Yo(H), W = new ae(me, Ie + "leave", _, r, i);
        W.target = Fe, W.relatedTarget = F;
        var z = null, X = qi(i);
        if (X === n) {
          var le = new ae(fe, Ie + "enter", H, r, i);
          le.target = F, le.relatedTarget = Fe, z = le;
        }
        aR(e, W, z, _, H);
      }
    }
  }
  function PE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rr = typeof Object.is == "function" ? Object.is : PE;
  function Sl(e, t) {
    if (rr(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (var i = 0; i < n.length; i++) {
      var u = n[i];
      if (!vn.call(t, u) || !rr(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function Ly(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function ME(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function _y(e, t) {
    for (var n = Ly(e), r = 0, i = 0; n; ) {
      if (n.nodeType === ga) {
        if (i = r + n.textContent.length, r <= t && i >= t)
          return {
            node: n,
            offset: t - r
          };
        r = i;
      }
      n = Ly(ME(n));
    }
  }
  function UE(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
    if (!r || r.rangeCount === 0)
      return null;
    var i = r.anchorNode, u = r.anchorOffset, m = r.focusNode, g = r.focusOffset;
    try {
      i.nodeType, m.nodeType;
    } catch {
      return null;
    }
    return VE(e, i, u, m, g);
  }
  function VE(e, t, n, r, i) {
    var u = 0, m = -1, g = -1, x = 0, C = 0, R = e, A = null;
    e: for (; ; ) {
      for (var _ = null; R === t && (n === 0 || R.nodeType === ga) && (m = u + n), R === r && (i === 0 || R.nodeType === ga) && (g = u + i), R.nodeType === ga && (u += R.nodeValue.length), (_ = R.firstChild) !== null; )
        A = R, R = _;
      for (; ; ) {
        if (R === e)
          break e;
        if (A === t && ++x === n && (m = u), A === r && ++C === i && (g = u), (_ = R.nextSibling) !== null)
          break;
        R = A, A = R.parentNode;
      }
      R = _;
    }
    return m === -1 || g === -1 ? null : {
      start: m,
      end: g
    };
  }
  function FE(e, t) {
    var n = e.ownerDocument || document, r = n && n.defaultView || window;
    if (r.getSelection) {
      var i = r.getSelection(), u = e.textContent.length, m = Math.min(t.start, u), g = t.end === void 0 ? m : Math.min(t.end, u);
      if (!i.extend && m > g) {
        var x = g;
        g = m, m = x;
      }
      var C = _y(e, m), R = _y(e, g);
      if (C && R) {
        if (i.rangeCount === 1 && i.anchorNode === C.node && i.anchorOffset === C.offset && i.focusNode === R.node && i.focusOffset === R.offset)
          return;
        var A = n.createRange();
        A.setStart(C.node, C.offset), i.removeAllRanges(), m > g ? (i.addRange(A), i.extend(R.node, R.offset)) : (A.setEnd(R.node, R.offset), i.addRange(A));
      }
    }
  }
  function Ay(e) {
    return e && e.nodeType === ga;
  }
  function Py(e, t) {
    return !e || !t ? !1 : e === t ? !0 : Ay(e) ? !1 : Ay(t) ? Py(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function zE(e) {
    return e && e.ownerDocument && Py(e.ownerDocument.documentElement, e);
  }
  function $E(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function My() {
    for (var e = window, t = Ga(); t instanceof e.HTMLIFrameElement; ) {
      if ($E(t))
        e = t.contentWindow;
      else
        return t;
      t = Ga(e.document);
    }
    return t;
  }
  function $m(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function HE() {
    var e = My();
    return {
      focusedElem: e,
      selectionRange: $m(e) ? JE(e) : null
    };
  }
  function BE(e) {
    var t = My(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && zE(n)) {
      r !== null && $m(n) && IE(n, r);
      for (var i = [], u = n; u = u.parentNode; )
        u.nodeType === Fn && i.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var m = 0; m < i.length; m++) {
        var g = i[m];
        g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
      }
    }
  }
  function JE(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = UE(e), t || {
      start: 0,
      end: 0
    };
  }
  function IE(e, t) {
    var n = t.start, r = t.end;
    r === void 0 && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : FE(e, t);
  }
  var YE = Lt && "documentMode" in document && document.documentMode <= 11;
  function KE() {
    Kn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var $o = null, Hm = null, Nl = null, Bm = !1;
  function WE(e) {
    if ("selectionStart" in e && $m(e))
      return {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    };
  }
  function GE(e) {
    return e.window === e ? e.document : e.nodeType === ya ? e : e.ownerDocument;
  }
  function Uy(e, t, n) {
    var r = GE(n);
    if (!(Bm || $o == null || $o !== Ga(r))) {
      var i = WE($o);
      if (!Nl || !Sl(Nl, i)) {
        Nl = i;
        var u = Ec(Hm, "onSelect");
        if (u.length > 0) {
          var m = new Pm("onSelect", "select", null, t, n);
          e.push({
            event: m,
            listeners: u
          }), m.target = $o;
        }
      }
    }
  }
  function qE(e, t, n, r, i, u, m) {
    var g = n ? Yo(n) : window;
    switch (t) {
      case "focusin":
        (jy(g) || g.contentEditable === "true") && ($o = g, Hm = n, Nl = null);
        break;
      case "focusout":
        $o = null, Hm = null, Nl = null;
        break;
      case "mousedown":
        Bm = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Bm = !1, Uy(e, r, i);
        break;
      case "selectionchange":
        if (YE)
          break;
      case "keydown":
      case "keyup":
        Uy(e, r, i);
    }
  }
  function Nc(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ho = {
    animationend: Nc("Animation", "AnimationEnd"),
    animationiteration: Nc("Animation", "AnimationIteration"),
    animationstart: Nc("Animation", "AnimationStart"),
    transitionend: Nc("Transition", "TransitionEnd")
  }, Jm = {}, Vy = {};
  Lt && (Vy = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
  function wc(e) {
    if (Jm[e])
      return Jm[e];
    if (!Ho[e])
      return e;
    var t = Ho[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in Vy)
        return Jm[e] = t[n];
    return e;
  }
  var Fy = wc("animationend"), zy = wc("animationiteration"), $y = wc("animationstart"), Hy = wc("transitionend"), By = /* @__PURE__ */ new Map(), Jy = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function ni(e, t) {
    By.set(e, t), Kn(t, [e]);
  }
  function QE() {
    for (var e = 0; e < Jy.length; e++) {
      var t = Jy[e], n = t.toLowerCase(), r = t[0].toUpperCase() + t.slice(1);
      ni(n, "on" + r);
    }
    ni(Fy, "onAnimationEnd"), ni(zy, "onAnimationIteration"), ni($y, "onAnimationStart"), ni("dblclick", "onDoubleClick"), ni("focusin", "onFocus"), ni("focusout", "onBlur"), ni(Hy, "onTransitionEnd");
  }
  function XE(e, t, n, r, i, u, m) {
    var g = By.get(t);
    if (g !== void 0) {
      var x = Pm, C = t;
      switch (t) {
        case "keypress":
          if (yc(r) === 0)
            return;
        case "keydown":
        case "keyup":
          x = ZC;
          break;
        case "focusin":
          C = "focus", x = Vm;
          break;
        case "focusout":
          C = "blur", x = Vm;
          break;
        case "beforeblur":
        case "afterblur":
          x = Vm;
          break;
        case "click":
          if (r.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          x = vy;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          x = FC;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          x = nE;
          break;
        case Fy:
        case zy:
        case $y:
          x = HC;
          break;
        case Hy:
          x = aE;
          break;
        case "scroll":
          x = MC;
          break;
        case "wheel":
          x = oE;
          break;
        case "copy":
        case "cut":
        case "paste":
          x = JC;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          x = yy;
          break;
      }
      var R = (u & Ks) !== 0;
      {
        var A = !R && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", _ = nR(n, g, r.type, R, A);
        if (_.length > 0) {
          var H = new x(g, C, null, r, i);
          e.push({
            event: H,
            listeners: _
          });
        }
      }
    }
  }
  QE(), _E(), xE(), KE(), uE();
  function ZE(e, t, n, r, i, u, m) {
    XE(e, t, n, r, i, u);
    var g = (u & WN) === 0;
    g && (AE(e, t, n, r, i), LE(e, t, n, r, i), qE(e, t, n, r, i), gE(e, t, n, r, i));
  }
  var wl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Im = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wl));
  function Iy(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ow(r, t, void 0, e), e.currentTarget = null;
  }
  function eR(e, t, n) {
    var r;
    if (n)
      for (var i = t.length - 1; i >= 0; i--) {
        var u = t[i], m = u.instance, g = u.currentTarget, x = u.listener;
        if (m !== r && e.isPropagationStopped())
          return;
        Iy(e, x, g), r = m;
      }
    else
      for (var C = 0; C < t.length; C++) {
        var R = t[C], A = R.instance, _ = R.currentTarget, H = R.listener;
        if (A !== r && e.isPropagationStopped())
          return;
        Iy(e, H, _), r = A;
      }
  }
  function Yy(e, t) {
    for (var n = (t & Ks) !== 0, r = 0; r < e.length; r++) {
      var i = e[r], u = i.event, m = i.listeners;
      eR(u, m, n);
    }
    sw();
  }
  function tR(e, t, n, r, i) {
    var u = zd(n), m = [];
    ZE(m, e, r, n, u, t), Yy(m, t);
  }
  function yt(e, t) {
    Im.has(e) || c('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, r = Oj(t), i = iR(e);
    r.has(i) || (Ky(t, e, Fd, n), r.add(i));
  }
  function Ym(e, t, n) {
    Im.has(e) && !t && c('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var r = 0;
    t && (r |= Ks), Ky(n, e, r, t);
  }
  var Cc = "_reactListening" + Math.random().toString(36).slice(2);
  function Cl(e) {
    if (!e[Cc]) {
      e[Cc] = !0, ur.forEach(function(n) {
        n !== "selectionchange" && (Im.has(n) || Ym(n, !1, e), Ym(n, !0, e));
      });
      var t = e.nodeType === ya ? e : e.ownerDocument;
      t !== null && (t[Cc] || (t[Cc] = !0, Ym("selectionchange", !1, t)));
    }
  }
  function Ky(e, t, n, r, i) {
    var u = RC(e, t, n), m = void 0;
    Bd && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, r ? m !== void 0 ? LC(e, t, u, m) : OC(e, t, u) : m !== void 0 ? _C(e, t, u, m) : kC(e, t, u);
  }
  function Wy(e, t) {
    return e === t || e.nodeType === _t && e.parentNode === t;
  }
  function Km(e, t, n, r, i) {
    var u = r;
    if (!(t & wg) && !(t & Fd)) {
      var m = i;
      if (r !== null) {
        var g = r;
        e: for (; ; ) {
          if (g === null)
            return;
          var x = g.tag;
          if (x === b || x === S) {
            var C = g.stateNode.containerInfo;
            if (Wy(C, m))
              break;
            if (x === S)
              for (var R = g.return; R !== null; ) {
                var A = R.tag;
                if (A === b || A === S) {
                  var _ = R.stateNode.containerInfo;
                  if (Wy(_, m))
                    return;
                }
                R = R.return;
              }
            for (; C !== null; ) {
              var H = qi(C);
              if (H === null)
                return;
              var J = H.tag;
              if (J === E || J === j) {
                g = u = H;
                continue e;
              }
              C = C.parentNode;
            }
          }
          g = g.return;
        }
      }
    }
    Dg(function() {
      return tR(e, t, n, u);
    });
  }
  function El(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function nR(e, t, n, r, i, u) {
    for (var m = t !== null ? t + "Capture" : null, g = r ? m : t, x = [], C = e, R = null; C !== null; ) {
      var A = C, _ = A.stateNode, H = A.tag;
      if (H === E && _ !== null && (R = _, g !== null)) {
        var J = Gs(C, g);
        J != null && x.push(El(C, J, R));
      }
      if (i)
        break;
      C = C.return;
    }
    return x;
  }
  function Ec(e, t) {
    for (var n = t + "Capture", r = [], i = e; i !== null; ) {
      var u = i, m = u.stateNode, g = u.tag;
      if (g === E && m !== null) {
        var x = m, C = Gs(i, n);
        C != null && r.unshift(El(i, C, x));
        var R = Gs(i, t);
        R != null && r.push(El(i, R, x));
      }
      i = i.return;
    }
    return r;
  }
  function Bo(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== E);
    return e || null;
  }
  function rR(e, t) {
    for (var n = e, r = t, i = 0, u = n; u; u = Bo(u))
      i++;
    for (var m = 0, g = r; g; g = Bo(g))
      m++;
    for (; i - m > 0; )
      n = Bo(n), i--;
    for (; m - i > 0; )
      r = Bo(r), m--;
    for (var x = i; x--; ) {
      if (n === r || r !== null && n === r.alternate)
        return n;
      n = Bo(n), r = Bo(r);
    }
    return null;
  }
  function Gy(e, t, n, r, i) {
    for (var u = t._reactName, m = [], g = n; g !== null && g !== r; ) {
      var x = g, C = x.alternate, R = x.stateNode, A = x.tag;
      if (C !== null && C === r)
        break;
      if (A === E && R !== null) {
        var _ = R;
        if (i) {
          var H = Gs(g, u);
          H != null && m.unshift(El(g, H, _));
        } else if (!i) {
          var J = Gs(g, u);
          J != null && m.push(El(g, J, _));
        }
      }
      g = g.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  function aR(e, t, n, r, i) {
    var u = r && i ? rR(r, i) : null;
    r !== null && Gy(e, t, r, u, !1), i !== null && n !== null && Gy(e, n, i, u, !0);
  }
  function iR(e, t) {
    return e + "__bubble";
  }
  var zn = !1, Rl = "dangerouslySetInnerHTML", Rc = "suppressContentEditableWarning", ri = "suppressHydrationWarning", qy = "autoFocus", Wi = "children", Gi = "style", jc = "__html", Wm, Tc, jl, Qy, Dc, Xy, Zy;
  Wm = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Tc = function(e, t) {
    $N(e, t), HN(e, t), KN(e, t, {
      registrationNameDependencies: tn,
      possibleRegistrationNames: Pn
    });
  }, Xy = Lt && !document.documentMode, jl = function(e, t, n) {
    if (!zn) {
      var r = kc(n), i = kc(t);
      i !== r && (zn = !0, c("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(i), JSON.stringify(r)));
    }
  }, Qy = function(e) {
    if (!zn) {
      zn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), c("Extra attributes from the server: %s", t);
    }
  }, Dc = function(e, t) {
    t === !1 ? c("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : c("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Zy = function(e, t) {
    var n = e.namespaceURI === va ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var oR = /\r\n?/g, sR = /\u0000|\uFFFD/g;
  function kc(e) {
    fr(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(oR, `
`).replace(sR, "");
  }
  function Oc(e, t, n, r) {
    var i = kc(t), u = kc(e);
    if (u !== i && (r && (zn || (zn = !0, c('Text content did not match. Server: "%s" Client: "%s"', u, i))), n && Ee))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function eb(e) {
    return e.nodeType === ya ? e : e.ownerDocument;
  }
  function lR() {
  }
  function Lc(e) {
    e.onclick = lR;
  }
  function uR(e, t, n, r, i) {
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var m = r[u];
        if (u === Gi)
          m && Object.freeze(m), gg(t, m);
        else if (u === Rl) {
          var g = m ? m[jc] : void 0;
          g != null && dg(t, g);
        } else if (u === Wi)
          if (typeof m == "string") {
            var x = e !== "textarea" || m !== "";
            x && ec(t, m);
          } else typeof m == "number" && ec(t, "" + m);
        else u === Rc || u === ri || u === qy || (tn.hasOwnProperty(u) ? m != null && (typeof m != "function" && Dc(u, m), u === "onScroll" && yt("scroll", t)) : m != null && da(t, u, m, i));
      }
  }
  function cR(e, t, n, r) {
    for (var i = 0; i < t.length; i += 2) {
      var u = t[i], m = t[i + 1];
      u === Gi ? gg(e, m) : u === Rl ? dg(e, m) : u === Wi ? ec(e, m) : da(e, u, m, r);
    }
  }
  function fR(e, t, n, r) {
    var i, u = eb(n), m, g = r;
    if (g === va && (g = _d(e)), g === va) {
      if (i = Ui(e, t), !i && e !== e.toLowerCase() && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var x = u.createElement("div");
        x.innerHTML = "<script><\/script>";
        var C = x.firstChild;
        m = x.removeChild(C);
      } else if (typeof t.is == "string")
        m = u.createElement(e, {
          is: t.is
        });
      else if (m = u.createElement(e), e === "select") {
        var R = m;
        t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
      }
    } else
      m = u.createElementNS(g, e);
    return g === va && !i && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !vn.call(Wm, e) && (Wm[e] = !0, c("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
  }
  function dR(e, t) {
    return eb(t).createTextNode(e);
  }
  function mR(e, t, n, r) {
    var i = Ui(t, n);
    Tc(t, n);
    var u;
    switch (t) {
      case "dialog":
        yt("cancel", e), yt("close", e), u = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e), u = n;
        break;
      case "video":
      case "audio":
        for (var m = 0; m < wl.length; m++)
          yt(wl[m], e);
        u = n;
        break;
      case "source":
        yt("error", e), u = n;
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e), u = n;
        break;
      case "details":
        yt("toggle", e), u = n;
        break;
      case "input":
        T(e, n), u = N(e, n), yt("invalid", e);
        break;
      case "option":
        ft(e, n), u = n;
        break;
      case "select":
        Is(e, n), u = Js(e, n), yt("invalid", e);
        break;
      case "textarea":
        ug(e, n), u = Od(e, n), yt("invalid", e);
        break;
      default:
        u = n;
    }
    switch (Vd(t, u), uR(t, e, r, u, i), t) {
      case "input":
        pa(e), ee(e, n, !1);
        break;
      case "textarea":
        pa(e), fg(e);
        break;
      case "option":
        gt(e, n);
        break;
      case "select":
        kd(e, n);
        break;
      default:
        typeof u.onClick == "function" && Lc(e);
        break;
    }
  }
  function pR(e, t, n, r, i) {
    Tc(t, r);
    var u = null, m, g;
    switch (t) {
      case "input":
        m = N(e, n), g = N(e, r), u = [];
        break;
      case "select":
        m = Js(e, n), g = Js(e, r), u = [];
        break;
      case "textarea":
        m = Od(e, n), g = Od(e, r), u = [];
        break;
      default:
        m = n, g = r, typeof m.onClick != "function" && typeof g.onClick == "function" && Lc(e);
        break;
    }
    Vd(t, g);
    var x, C, R = null;
    for (x in m)
      if (!(g.hasOwnProperty(x) || !m.hasOwnProperty(x) || m[x] == null))
        if (x === Gi) {
          var A = m[x];
          for (C in A)
            A.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
        } else x === Rl || x === Wi || x === Rc || x === ri || x === qy || (tn.hasOwnProperty(x) ? u || (u = []) : (u = u || []).push(x, null));
    for (x in g) {
      var _ = g[x], H = m != null ? m[x] : void 0;
      if (!(!g.hasOwnProperty(x) || _ === H || _ == null && H == null))
        if (x === Gi)
          if (_ && Object.freeze(_), H) {
            for (C in H)
              H.hasOwnProperty(C) && (!_ || !_.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
            for (C in _)
              _.hasOwnProperty(C) && H[C] !== _[C] && (R || (R = {}), R[C] = _[C]);
          } else
            R || (u || (u = []), u.push(x, R)), R = _;
        else if (x === Rl) {
          var J = _ ? _[jc] : void 0, K = H ? H[jc] : void 0;
          J != null && K !== J && (u = u || []).push(x, J);
        } else x === Wi ? (typeof _ == "string" || typeof _ == "number") && (u = u || []).push(x, "" + _) : x === Rc || x === ri || (tn.hasOwnProperty(x) ? (_ != null && (typeof _ != "function" && Dc(x, _), x === "onScroll" && yt("scroll", e)), !u && H !== _ && (u = [])) : (u = u || []).push(x, _));
    }
    return R && (_N(R, g[Gi]), (u = u || []).push(Gi, R)), u;
  }
  function hR(e, t, n, r, i) {
    n === "input" && i.type === "radio" && i.name != null && B(e, i);
    var u = Ui(n, r), m = Ui(n, i);
    switch (cR(e, t, u, m), n) {
      case "input":
        Y(e, i);
        break;
      case "textarea":
        cg(e, i);
        break;
      case "select":
        cN(e, i);
        break;
    }
  }
  function vR(e) {
    {
      var t = e.toLowerCase();
      return tc.hasOwnProperty(t) && tc[t] || null;
    }
  }
  function gR(e, t, n, r, i, u, m) {
    var g, x;
    switch (g = Ui(t, n), Tc(t, n), t) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (var C = 0; C < wl.length; C++)
          yt(wl[C], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        T(e, n), yt("invalid", e);
        break;
      case "option":
        ft(e, n);
        break;
      case "select":
        Is(e, n), yt("invalid", e);
        break;
      case "textarea":
        ug(e, n), yt("invalid", e);
        break;
    }
    Vd(t, n);
    {
      x = /* @__PURE__ */ new Set();
      for (var R = e.attributes, A = 0; A < R.length; A++) {
        var _ = R[A].name.toLowerCase();
        switch (_) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            x.add(R[A].name);
        }
      }
    }
    var H = null;
    for (var J in n)
      if (n.hasOwnProperty(J)) {
        var K = n[J];
        if (J === Wi)
          typeof K == "string" ? e.textContent !== K && (n[ri] !== !0 && Oc(e.textContent, K, u, m), H = [Wi, K]) : typeof K == "number" && e.textContent !== "" + K && (n[ri] !== !0 && Oc(e.textContent, K, u, m), H = [Wi, "" + K]);
        else if (tn.hasOwnProperty(J))
          K != null && (typeof K != "function" && Dc(J, K), J === "onScroll" && yt("scroll", e));
        else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof g == "boolean") {
          var ae = void 0, me = g && hn ? null : Qn(J);
          if (n[ri] !== !0) {
            if (!(J === Rc || J === ri || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            J === "value" || J === "checked" || J === "selected")) {
              if (J === Rl) {
                var fe = e.innerHTML, Ie = K ? K[jc] : void 0;
                if (Ie != null) {
                  var Fe = Zy(e, Ie);
                  Fe !== fe && jl(J, fe, Fe);
                }
              } else if (J === Gi) {
                if (x.delete(J), Xy) {
                  var F = ON(K);
                  ae = e.getAttribute("style"), F !== ae && jl(J, ae, F);
                }
              } else if (g && !hn)
                x.delete(J.toLowerCase()), ae = Ha(e, J, K), K !== ae && jl(J, ae, K);
              else if (!Dt(J, me, g) && !ut(J, K, me, g)) {
                var W = !1;
                if (me !== null)
                  x.delete(me.attributeName), ae = fa(e, J, K, me);
                else {
                  var z = r;
                  if (z === va && (z = _d(t)), z === va)
                    x.delete(J.toLowerCase());
                  else {
                    var X = vR(J);
                    X !== null && X !== J && (W = !0, x.delete(X)), x.delete(J);
                  }
                  ae = Ha(e, J, K);
                }
                var le = hn;
                !le && K !== ae && !W && jl(J, ae, K);
              }
            }
          }
        }
      }
    switch (m && // $FlowFixMe - Should be inferred as not undefined.
    x.size > 0 && n[ri] !== !0 && Qy(x), t) {
      case "input":
        pa(e), ee(e, n, !0);
        break;
      case "textarea":
        pa(e), fg(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && Lc(e);
        break;
    }
    return H;
  }
  function yR(e, t, n) {
    var r = e.nodeValue !== t;
    return r;
  }
  function Gm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function qm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Qm(e, t, n) {
    {
      if (zn)
        return;
      zn = !0, c("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Xm(e, t) {
    {
      if (t === "" || zn)
        return;
      zn = !0, c('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function bR(e, t, n) {
    switch (t) {
      case "input":
        xe(e, n);
        return;
      case "textarea":
        dN(e, n);
        return;
      case "select":
        fN(e, n);
        return;
    }
  }
  var Tl = function() {
  }, Dl = function() {
  };
  {
    var xR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], tb = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], SR = tb.concat(["button"]), NR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], nb = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Dl = function(e, t) {
      var n = ze({}, e || nb), r = {
        tag: t
      };
      return tb.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), SR.indexOf(t) !== -1 && (n.pTagInButtonScope = null), xR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), n;
    };
    var wR = function(e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return NR.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, CR = function(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, rb = {};
    Tl = function(e, t, n) {
      n = n || nb;
      var r = n.current, i = r && r.tag;
      t != null && (e != null && c("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = wR(e, i) ? null : r, m = u ? null : CR(e, n), g = u || m;
      if (g) {
        var x = g.tag, C = !!u + "|" + e + "|" + x;
        if (!rb[C]) {
          rb[C] = !0;
          var R = e, A = "";
          if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", u) {
            var _ = "";
            x === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), c("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, x, A, _);
          } else
            c("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, x);
        }
      }
    };
  }
  var _c = "suppressHydrationWarning", Ac = "$", Pc = "/$", kl = "$?", Ol = "$!", ER = "style", Zm = null, ep = null;
  function RR(e) {
    var t, n, r = e.nodeType;
    switch (r) {
      case ya:
      case Pd: {
        t = r === ya ? "#document" : "#fragment";
        var i = e.documentElement;
        n = i ? i.namespaceURI : Ad(null, "");
        break;
      }
      default: {
        var u = r === _t ? e.parentNode : e, m = u.namespaceURI || null;
        t = u.tagName, n = Ad(m, t);
        break;
      }
    }
    {
      var g = t.toLowerCase(), x = Dl(null, g);
      return {
        namespace: n,
        ancestorInfo: x
      };
    }
  }
  function jR(e, t, n) {
    {
      var r = e, i = Ad(r.namespace, t), u = Dl(r.ancestorInfo, t);
      return {
        namespace: i,
        ancestorInfo: u
      };
    }
  }
  function MM(e) {
    return e;
  }
  function TR(e) {
    Zm = EC(), ep = HE();
    var t = null;
    return fy(!1), t;
  }
  function DR(e) {
    BE(ep), fy(Zm), Zm = null, ep = null;
  }
  function kR(e, t, n, r, i) {
    var u;
    {
      var m = r;
      if (Tl(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var g = "" + t.children, x = Dl(m.ancestorInfo, e);
        Tl(null, g, x);
      }
      u = m.namespace;
    }
    var C = fR(e, t, n, u);
    return Al(i, C), lp(C, t), C;
  }
  function OR(e, t) {
    e.appendChild(t);
  }
  function LR(e, t, n, r, i) {
    switch (mR(e, t, n, r), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function _R(e, t, n, r, i, u) {
    {
      var m = u;
      if (typeof r.children != typeof n.children && (typeof r.children == "string" || typeof r.children == "number")) {
        var g = "" + r.children, x = Dl(m.ancestorInfo, t);
        Tl(null, g, x);
      }
    }
    return pR(e, t, n, r);
  }
  function tp(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function AR(e, t, n, r) {
    {
      var i = n;
      Tl(null, e, i.ancestorInfo);
    }
    var u = dR(e, t);
    return Al(r, u), u;
  }
  function PR() {
    var e = window.event;
    return e === void 0 ? Ea : dy(e.type);
  }
  var np = typeof setTimeout == "function" ? setTimeout : void 0, MR = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = -1, ab = typeof Promise == "function" ? Promise : void 0, UR = typeof queueMicrotask == "function" ? queueMicrotask : typeof ab < "u" ? function(e) {
    return ab.resolve(null).then(e).catch(VR);
  } : np;
  function VR(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function FR(e, t, n, r) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && e.focus();
        return;
      case "img": {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function zR(e, t, n, r, i, u) {
    hR(e, t, n, r, i), lp(e, i);
  }
  function ib(e) {
    ec(e, "");
  }
  function $R(e, t, n) {
    e.nodeValue = n;
  }
  function HR(e, t) {
    e.appendChild(t);
  }
  function BR(e, t) {
    var n;
    e.nodeType === _t ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var r = e._reactRootContainer;
    r == null && n.onclick === null && Lc(n);
  }
  function JR(e, t, n) {
    e.insertBefore(t, n);
  }
  function IR(e, t, n) {
    e.nodeType === _t ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function YR(e, t) {
    e.removeChild(t);
  }
  function KR(e, t) {
    e.nodeType === _t ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function ap(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === _t) {
        var u = i.data;
        if (u === Pc)
          if (r === 0) {
            e.removeChild(i), ml(t);
            return;
          } else
            r--;
        else (u === Ac || u === kl || u === Ol) && r++;
      }
      n = i;
    } while (n);
    ml(t);
  }
  function WR(e, t) {
    e.nodeType === _t ? ap(e.parentNode, t) : e.nodeType === Fn && ap(e, t), ml(e);
  }
  function GR(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function qR(e) {
    e.nodeValue = "";
  }
  function QR(e, t) {
    e = e;
    var n = t[ER], r = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Md("display", r);
  }
  function XR(e, t) {
    e.nodeValue = t;
  }
  function ZR(e) {
    e.nodeType === Fn ? e.textContent = "" : e.nodeType === ya && e.documentElement && e.removeChild(e.documentElement);
  }
  function ej(e, t, n) {
    return e.nodeType !== Fn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function tj(e, t) {
    return t === "" || e.nodeType !== ga ? null : e;
  }
  function nj(e) {
    return e.nodeType !== _t ? null : e;
  }
  function ob(e) {
    return e.data === kl;
  }
  function ip(e) {
    return e.data === Ol;
  }
  function rj(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, r, i;
    return t && (n = t.dgst, r = t.msg, i = t.stck), {
      message: r,
      digest: n,
      stack: i
    };
  }
  function aj(e, t) {
    e._reactRetry = t;
  }
  function Mc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Fn || t === ga)
        break;
      if (t === _t) {
        var n = e.data;
        if (n === Ac || n === Ol || n === kl)
          break;
        if (n === Pc)
          return null;
      }
    }
    return e;
  }
  function Ll(e) {
    return Mc(e.nextSibling);
  }
  function ij(e) {
    return Mc(e.firstChild);
  }
  function oj(e) {
    return Mc(e.firstChild);
  }
  function sj(e) {
    return Mc(e.nextSibling);
  }
  function lj(e, t, n, r, i, u, m) {
    Al(u, e), lp(e, n);
    var g;
    {
      var x = i;
      g = x.namespace;
    }
    var C = (u.mode & Be) !== ve;
    return gR(e, t, n, g, r, C, m);
  }
  function uj(e, t, n, r) {
    return Al(n, e), n.mode & Be, yR(e, t);
  }
  function cj(e, t) {
    Al(t, e);
  }
  function fj(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === _t) {
        var r = t.data;
        if (r === Pc) {
          if (n === 0)
            return Ll(t);
          n--;
        } else (r === Ac || r === Ol || r === kl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function sb(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === _t) {
        var r = t.data;
        if (r === Ac || r === Ol || r === kl) {
          if (n === 0)
            return t;
          n--;
        } else r === Pc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function dj(e) {
    ml(e);
  }
  function mj(e) {
    ml(e);
  }
  function pj(e) {
    return e !== "head" && e !== "body";
  }
  function hj(e, t, n, r) {
    var i = !0;
    Oc(t.nodeValue, n, r, i);
  }
  function vj(e, t, n, r, i, u) {
    if (t[_c] !== !0) {
      var m = !0;
      Oc(r.nodeValue, i, u, m);
    }
  }
  function gj(e, t) {
    t.nodeType === Fn ? Gm(e, t) : t.nodeType === _t || qm(e, t);
  }
  function yj(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Fn ? Gm(n, t) : t.nodeType === _t || qm(n, t));
    }
  }
  function bj(e, t, n, r, i) {
    (i || t[_c] !== !0) && (r.nodeType === Fn ? Gm(n, r) : r.nodeType === _t || qm(n, r));
  }
  function xj(e, t, n) {
    Qm(e, t);
  }
  function Sj(e, t) {
    Xm(e, t);
  }
  function Nj(e, t, n) {
    {
      var r = e.parentNode;
      r !== null && Qm(r, t);
    }
  }
  function wj(e, t) {
    {
      var n = e.parentNode;
      n !== null && Xm(n, t);
    }
  }
  function Cj(e, t, n, r, i, u) {
    (u || t[_c] !== !0) && Qm(n, r);
  }
  function Ej(e, t, n, r, i) {
    (i || t[_c] !== !0) && Xm(n, r);
  }
  function Rj(e) {
    c("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function jj(e) {
    Cl(e);
  }
  var Jo = Math.random().toString(36).slice(2), Io = "__reactFiber$" + Jo, op = "__reactProps$" + Jo, _l = "__reactContainer$" + Jo, sp = "__reactEvents$" + Jo, Tj = "__reactListeners$" + Jo, Dj = "__reactHandles$" + Jo;
  function kj(e) {
    delete e[Io], delete e[op], delete e[sp], delete e[Tj], delete e[Dj];
  }
  function Al(e, t) {
    t[Io] = e;
  }
  function Uc(e, t) {
    t[_l] = e;
  }
  function lb(e) {
    e[_l] = null;
  }
  function Pl(e) {
    return !!e[_l];
  }
  function qi(e) {
    var t = e[Io];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_l] || n[Io], t) {
        var r = t.alternate;
        if (t.child !== null || r !== null && r.child !== null)
          for (var i = sb(e); i !== null; ) {
            var u = i[Io];
            if (u)
              return u;
            i = sb(i);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ai(e) {
    var t = e[Io] || e[_l];
    return t && (t.tag === E || t.tag === j || t.tag === U || t.tag === b) ? t : null;
  }
  function Yo(e) {
    if (e.tag === E || e.tag === j)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Vc(e) {
    return e[op] || null;
  }
  function lp(e, t) {
    e[op] = t;
  }
  function Oj(e) {
    var t = e[sp];
    return t === void 0 && (t = e[sp] = /* @__PURE__ */ new Set()), t;
  }
  var ub = {}, cb = s.ReactDebugCurrentFrame;
  function Fc(e) {
    if (e) {
      var t = e._owner, n = Ya(e.type, e._source, t ? t.type : null);
      cb.setExtraStackFrame(n);
    } else
      cb.setExtraStackFrame(null);
  }
  function Lr(e, t, n, r, i) {
    {
      var u = Function.call.bind(vn);
      for (var m in e)
        if (u(e, m)) {
          var g = void 0;
          try {
            if (typeof e[m] != "function") {
              var x = Error((r || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw x.name = "Invariant Violation", x;
            }
            g = e[m](t, m, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (C) {
            g = C;
          }
          g && !(g instanceof Error) && (Fc(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, m, typeof g), Fc(null)), g instanceof Error && !(g.message in ub) && (ub[g.message] = !0, Fc(i), c("Failed %s type: %s", n, g.message), Fc(null));
        }
    }
  }
  var up = [], zc;
  zc = [];
  var Ra = -1;
  function ii(e) {
    return {
      current: e
    };
  }
  function Sn(e, t) {
    if (Ra < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== zc[Ra] && c("Unexpected Fiber popped."), e.current = up[Ra], up[Ra] = null, zc[Ra] = null, Ra--;
  }
  function Nn(e, t, n) {
    Ra++, up[Ra] = e.current, zc[Ra] = n, e.current = t;
  }
  var cp;
  cp = {};
  var ar = {};
  Object.freeze(ar);
  var ja = ii(ar), Qr = ii(!1), fp = ar;
  function Ko(e, t, n) {
    return n && Xr(t) ? fp : ja.current;
  }
  function fb(e, t, n) {
    {
      var r = e.stateNode;
      r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Wo(e, t) {
    {
      var n = e.type, r = n.contextTypes;
      if (!r)
        return ar;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var m in r)
        u[m] = t[m];
      {
        var g = _e(e) || "Unknown";
        Lr(r, u, "context", g);
      }
      return i && fb(e, t, u), u;
    }
  }
  function $c() {
    return Qr.current;
  }
  function Xr(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Hc(e) {
    Sn(Qr, e), Sn(ja, e);
  }
  function dp(e) {
    Sn(Qr, e), Sn(ja, e);
  }
  function db(e, t, n) {
    {
      if (ja.current !== ar)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      Nn(ja, t, e), Nn(Qr, n, e);
    }
  }
  function mb(e, t, n) {
    {
      var r = e.stateNode, i = t.childContextTypes;
      if (typeof r.getChildContext != "function") {
        {
          var u = _e(e) || "Unknown";
          cp[u] || (cp[u] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return n;
      }
      var m = r.getChildContext();
      for (var g in m)
        if (!(g in i))
          throw new Error((_e(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
      {
        var x = _e(e) || "Unknown";
        Lr(i, m, "child context", x);
      }
      return ze({}, n, m);
    }
  }
  function Bc(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || ar;
      return fp = ja.current, Nn(ja, n, e), Nn(Qr, Qr.current, e), !0;
    }
  }
  function pb(e, t, n) {
    {
      var r = e.stateNode;
      if (!r)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var i = mb(e, t, fp);
        r.__reactInternalMemoizedMergedChildContext = i, Sn(Qr, e), Sn(ja, e), Nn(ja, i, e), Nn(Qr, n, e);
      } else
        Sn(Qr, e), Nn(Qr, n, e);
    }
  }
  function Lj(e) {
    {
      if (!pw(e) || e.tag !== p)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case b:
            return t.stateNode.context;
          case p: {
            var n = t.type;
            if (Xr(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var oi = 0, Jc = 1, Ta = null, mp = !1, pp = !1;
  function hb(e) {
    Ta === null ? Ta = [e] : Ta.push(e);
  }
  function _j(e) {
    mp = !0, hb(e);
  }
  function vb() {
    mp && si();
  }
  function si() {
    if (!pp && Ta !== null) {
      pp = !0;
      var e = 0, t = Or();
      try {
        var n = !0, r = Ta;
        for (en(tr); e < r.length; e++) {
          var i = r[e];
          do
            i = i(n);
          while (i !== null);
        }
        Ta = null, mp = !1;
      } catch (u) {
        throw Ta !== null && (Ta = Ta.slice(e + 1)), zg(oc, si), u;
      } finally {
        en(t), pp = !1;
      }
    }
    return null;
  }
  var Go = [], qo = 0, Ic = null, Yc = 0, hr = [], vr = 0, Qi = null, Da = 1, ka = "";
  function Aj(e) {
    return Zi(), (e.flags & Lg) !== ye;
  }
  function Pj(e) {
    return Zi(), Yc;
  }
  function Mj() {
    var e = ka, t = Da, n = t & ~Uj(t);
    return n.toString(32) + e;
  }
  function Xi(e, t) {
    Zi(), Go[qo++] = Yc, Go[qo++] = Ic, Ic = e, Yc = t;
  }
  function gb(e, t, n) {
    Zi(), hr[vr++] = Da, hr[vr++] = ka, hr[vr++] = Qi, Qi = e;
    var r = Da, i = ka, u = Kc(r) - 1, m = r & ~(1 << u), g = n + 1, x = Kc(t) + u;
    if (x > 30) {
      var C = u - u % 5, R = (1 << C) - 1, A = (m & R).toString(32), _ = m >> C, H = u - C, J = Kc(t) + H, K = g << H, ae = K | _, me = A + i;
      Da = 1 << J | ae, ka = me;
    } else {
      var fe = g << u, Ie = fe | m, Fe = i;
      Da = 1 << x | Ie, ka = Fe;
    }
  }
  function hp(e) {
    Zi();
    var t = e.return;
    if (t !== null) {
      var n = 1, r = 0;
      Xi(e, n), gb(e, n, r);
    }
  }
  function Kc(e) {
    return 32 - Yg(e);
  }
  function Uj(e) {
    return 1 << Kc(e) - 1;
  }
  function vp(e) {
    for (; e === Ic; )
      Ic = Go[--qo], Go[qo] = null, Yc = Go[--qo], Go[qo] = null;
    for (; e === Qi; )
      Qi = hr[--vr], hr[vr] = null, ka = hr[--vr], hr[vr] = null, Da = hr[--vr], hr[vr] = null;
  }
  function Vj() {
    return Zi(), Qi !== null ? {
      id: Da,
      overflow: ka
    } : null;
  }
  function Fj(e, t) {
    Zi(), hr[vr++] = Da, hr[vr++] = ka, hr[vr++] = Qi, Da = t.id, ka = t.overflow, Qi = e;
  }
  function Zi() {
    rn() || c("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var nn = null, gr = null, _r = !1, eo = !1, li = null;
  function zj() {
    _r && c("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function yb() {
    eo = !0;
  }
  function $j() {
    return eo;
  }
  function Hj(e) {
    var t = e.stateNode.containerInfo;
    return gr = oj(t), nn = e, _r = !0, li = null, eo = !1, !0;
  }
  function Bj(e, t, n) {
    return gr = sj(t), nn = e, _r = !0, li = null, eo = !1, n !== null && Fj(e, n), !0;
  }
  function bb(e, t) {
    switch (e.tag) {
      case b: {
        gj(e.stateNode.containerInfo, t);
        break;
      }
      case E: {
        var n = (e.mode & Be) !== ve;
        bj(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case U: {
        var r = e.memoizedState;
        r.dehydrated !== null && yj(r.dehydrated, t);
        break;
      }
    }
  }
  function xb(e, t) {
    bb(e, t);
    var n = Kk();
    n.stateNode = t, n.return = e;
    var r = e.deletions;
    r === null ? (e.deletions = [n], e.flags |= Vi) : r.push(n);
  }
  function gp(e, t) {
    {
      if (eo)
        return;
      switch (e.tag) {
        case b: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case E:
              var r = t.type;
              t.pendingProps, xj(n, r);
              break;
            case j:
              var i = t.pendingProps;
              Sj(n, i);
              break;
          }
          break;
        }
        case E: {
          var u = e.type, m = e.memoizedProps, g = e.stateNode;
          switch (t.tag) {
            case E: {
              var x = t.type, C = t.pendingProps, R = (e.mode & Be) !== ve;
              Cj(
                u,
                m,
                g,
                x,
                C,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
            case j: {
              var A = t.pendingProps, _ = (e.mode & Be) !== ve;
              Ej(
                u,
                m,
                g,
                A,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
          break;
        }
        case U: {
          var H = e.memoizedState, J = H.dehydrated;
          if (J !== null) switch (t.tag) {
            case E:
              var K = t.type;
              t.pendingProps, Nj(J, K);
              break;
            case j:
              var ae = t.pendingProps;
              wj(J, ae);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function Sb(e, t) {
    t.flags = t.flags & ~xa | At, gp(e, t);
  }
  function Nb(e, t) {
    switch (e.tag) {
      case E: {
        var n = e.type;
        e.pendingProps;
        var r = ej(t, n);
        return r !== null ? (e.stateNode = r, nn = e, gr = ij(r), !0) : !1;
      }
      case j: {
        var i = e.pendingProps, u = tj(t, i);
        return u !== null ? (e.stateNode = u, nn = e, gr = null, !0) : !1;
      }
      case U: {
        var m = nj(t);
        if (m !== null) {
          var g = {
            dehydrated: m,
            treeContext: Vj(),
            retryLane: Zn
          };
          e.memoizedState = g;
          var x = Wk(m);
          return x.return = e, e.child = x, nn = e, gr = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function yp(e) {
    return (e.mode & Be) !== ve && (e.flags & Ze) === ye;
  }
  function bp(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function xp(e) {
    if (_r) {
      var t = gr;
      if (!t) {
        yp(e) && (gp(nn, e), bp()), Sb(nn, e), _r = !1, nn = e;
        return;
      }
      var n = t;
      if (!Nb(e, t)) {
        yp(e) && (gp(nn, e), bp()), t = Ll(n);
        var r = nn;
        if (!t || !Nb(e, t)) {
          Sb(nn, e), _r = !1, nn = e;
          return;
        }
        xb(r, n);
      }
    }
  }
  function Jj(e, t, n) {
    var r = e.stateNode, i = !eo, u = lj(r, e.type, e.memoizedProps, t, n, e, i);
    return e.updateQueue = u, u !== null;
  }
  function Ij(e) {
    var t = e.stateNode, n = e.memoizedProps, r = uj(t, n, e);
    if (r) {
      var i = nn;
      if (i !== null)
        switch (i.tag) {
          case b: {
            var u = i.stateNode.containerInfo, m = (i.mode & Be) !== ve;
            hj(
              u,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              m
            );
            break;
          }
          case E: {
            var g = i.type, x = i.memoizedProps, C = i.stateNode, R = (i.mode & Be) !== ve;
            vj(
              g,
              x,
              C,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              R
            );
            break;
          }
        }
    }
    return r;
  }
  function Yj(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    cj(n, e);
  }
  function Kj(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return fj(n);
  }
  function wb(e) {
    for (var t = e.return; t !== null && t.tag !== E && t.tag !== b && t.tag !== U; )
      t = t.return;
    nn = t;
  }
  function Wc(e) {
    if (e !== nn)
      return !1;
    if (!_r)
      return wb(e), _r = !0, !1;
    if (e.tag !== b && (e.tag !== E || pj(e.type) && !tp(e.type, e.memoizedProps))) {
      var t = gr;
      if (t)
        if (yp(e))
          Cb(e), bp();
        else
          for (; t; )
            xb(e, t), t = Ll(t);
    }
    return wb(e), e.tag === U ? gr = Kj(e) : gr = nn ? Ll(e.stateNode) : null, !0;
  }
  function Wj() {
    return _r && gr !== null;
  }
  function Cb(e) {
    for (var t = gr; t; )
      bb(e, t), t = Ll(t);
  }
  function Qo() {
    nn = null, gr = null, _r = !1, eo = !1;
  }
  function Eb() {
    li !== null && (y0(li), li = null);
  }
  function rn() {
    return _r;
  }
  function Sp(e) {
    li === null ? li = [e] : li.push(e);
  }
  var Gj = s.ReactCurrentBatchConfig, qj = null;
  function Qj() {
    return Gj.transition;
  }
  var Ar = {
    recordUnsafeLifecycleWarnings: function(e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function() {
    },
    recordLegacyContextWarning: function(e, t) {
    },
    flushLegacyContextWarning: function() {
    },
    discardPendingWarnings: function() {
    }
  };
  {
    var Xj = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Et && (t = n), n = n.return;
      return t;
    }, to = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Ml = [], Ul = [], Vl = [], Fl = [], zl = [], $l = [], no = /* @__PURE__ */ new Set();
    Ar.recordUnsafeLifecycleWarnings = function(e, t) {
      no.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && Ml.push(e), e.mode & Et && typeof t.UNSAFE_componentWillMount == "function" && Ul.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vl.push(e), e.mode & Et && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zl.push(e), e.mode & Et && typeof t.UNSAFE_componentWillUpdate == "function" && $l.push(e));
    }, Ar.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Ml.length > 0 && (Ml.forEach(function(_) {
        e.add(_e(_) || "Component"), no.add(_.type);
      }), Ml = []);
      var t = /* @__PURE__ */ new Set();
      Ul.length > 0 && (Ul.forEach(function(_) {
        t.add(_e(_) || "Component"), no.add(_.type);
      }), Ul = []);
      var n = /* @__PURE__ */ new Set();
      Vl.length > 0 && (Vl.forEach(function(_) {
        n.add(_e(_) || "Component"), no.add(_.type);
      }), Vl = []);
      var r = /* @__PURE__ */ new Set();
      Fl.length > 0 && (Fl.forEach(function(_) {
        r.add(_e(_) || "Component"), no.add(_.type);
      }), Fl = []);
      var i = /* @__PURE__ */ new Set();
      zl.length > 0 && (zl.forEach(function(_) {
        i.add(_e(_) || "Component"), no.add(_.type);
      }), zl = []);
      var u = /* @__PURE__ */ new Set();
      if ($l.length > 0 && ($l.forEach(function(_) {
        u.add(_e(_) || "Component"), no.add(_.type);
      }), $l = []), t.size > 0) {
        var m = to(t);
        c(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
      }
      if (r.size > 0) {
        var g = to(r);
        c(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
      }
      if (u.size > 0) {
        var x = to(u);
        c(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
      }
      if (e.size > 0) {
        var C = to(e);
        f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
      }
      if (n.size > 0) {
        var R = to(n);
        f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
      }
      if (i.size > 0) {
        var A = to(i);
        f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
      }
    };
    var Gc = /* @__PURE__ */ new Map(), Rb = /* @__PURE__ */ new Set();
    Ar.recordLegacyContextWarning = function(e, t) {
      var n = Xj(e);
      if (n === null) {
        c("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!Rb.has(e.type)) {
        var r = Gc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], Gc.set(n, r)), r.push(e));
      }
    }, Ar.flushLegacyContextWarning = function() {
      Gc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], r = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            r.add(_e(u) || "Component"), Rb.add(u.type);
          });
          var i = to(r);
          try {
            St(n), c(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i);
          } finally {
            qt();
          }
        }
      });
    }, Ar.discardPendingWarnings = function() {
      Ml = [], Ul = [], Vl = [], Fl = [], zl = [], $l = [], Gc = /* @__PURE__ */ new Map();
    };
  }
  var Np, wp, Cp, Ep, Rp, jb = function(e, t) {
  };
  Np = !1, wp = !1, Cp = {}, Ep = {}, Rp = {}, jb = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = _e(t) || "Component";
      Ep[n] || (Ep[n] = !0, c('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function Zj(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function Hl(e, t, n) {
    var r = n.ref;
    if (r !== null && typeof r != "function" && typeof r != "object") {
      if ((e.mode & Et || Yn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== p) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !Zj(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var i = _e(e) || "Component";
        Cp[i] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, r), Cp[i] = !0);
      }
      if (n._owner) {
        var u = n._owner, m;
        if (u) {
          var g = u;
          if (g.tag !== p)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          m = g.stateNode;
        }
        if (!m)
          throw new Error("Missing owner for string ref " + r + ". This error is likely caused by a bug in React. Please file an issue.");
        var x = m;
        Mn(r, "ref");
        var C = "" + r;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
          return t.ref;
        var R = function(A) {
          var _ = x.refs;
          A === null ? delete _[C] : _[C] = A;
        };
        return R._stringRef = C, R;
      } else {
        if (typeof r != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!n._owner)
          throw new Error("Element ref was specified as a string (" + r + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return r;
  }
  function qc(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Qc(e) {
    {
      var t = _e(e) || "Component";
      if (Rp[t])
        return;
      Rp[t] = !0, c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function Tb(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function Db(e) {
    function t(F, W) {
      if (e) {
        var z = F.deletions;
        z === null ? (F.deletions = [W], F.flags |= Vi) : z.push(W);
      }
    }
    function n(F, W) {
      if (!e)
        return null;
      for (var z = W; z !== null; )
        t(F, z), z = z.sibling;
      return null;
    }
    function r(F, W) {
      for (var z = /* @__PURE__ */ new Map(), X = W; X !== null; )
        X.key !== null ? z.set(X.key, X) : z.set(X.index, X), X = X.sibling;
      return z;
    }
    function i(F, W) {
      var z = fo(F, W);
      return z.index = 0, z.sibling = null, z;
    }
    function u(F, W, z) {
      if (F.index = z, !e)
        return F.flags |= Lg, W;
      var X = F.alternate;
      if (X !== null) {
        var le = X.index;
        return le < W ? (F.flags |= At, W) : le;
      } else
        return F.flags |= At, W;
    }
    function m(F) {
      return e && F.alternate === null && (F.flags |= At), F;
    }
    function g(F, W, z, X) {
      if (W === null || W.tag !== j) {
        var le = Sv(z, F.mode, X);
        return le.return = F, le;
      } else {
        var ie = i(W, z);
        return ie.return = F, ie;
      }
    }
    function x(F, W, z, X) {
      var le = z.type;
      if (le === O)
        return R(F, W, z.props.children, X, z.key);
      if (W !== null && (W.elementType === le || // Keep this check inline so it only runs on the false path:
      A0(W, z) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof le == "object" && le !== null && le.$$typeof === Ve && Tb(le) === W.type)) {
        var ie = i(W, z.props);
        return ie.ref = Hl(F, W, z), ie.return = F, ie._debugSource = z._source, ie._debugOwner = z._owner, ie;
      }
      var Se = xv(z, F.mode, X);
      return Se.ref = Hl(F, W, z), Se.return = F, Se;
    }
    function C(F, W, z, X) {
      if (W === null || W.tag !== S || W.stateNode.containerInfo !== z.containerInfo || W.stateNode.implementation !== z.implementation) {
        var le = Nv(z, F.mode, X);
        return le.return = F, le;
      } else {
        var ie = i(W, z.children || []);
        return ie.return = F, ie;
      }
    }
    function R(F, W, z, X, le) {
      if (W === null || W.tag !== M) {
        var ie = bi(z, F.mode, X, le);
        return ie.return = F, ie;
      } else {
        var Se = i(W, z);
        return Se.return = F, Se;
      }
    }
    function A(F, W, z) {
      if (typeof W == "string" && W !== "" || typeof W == "number") {
        var X = Sv("" + W, F.mode, z);
        return X.return = F, X;
      }
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Yr: {
            var le = xv(W, F.mode, z);
            return le.ref = Hl(F, null, W), le.return = F, le;
          }
          case Rr: {
            var ie = Nv(W, F.mode, z);
            return ie.return = F, ie;
          }
          case Ve: {
            var Se = W._payload, De = W._init;
            return A(F, De(Se), z);
          }
        }
        if (Xe(W) || ma(W)) {
          var lt = bi(W, F.mode, z, null);
          return lt.return = F, lt;
        }
        qc(F, W);
      }
      return typeof W == "function" && Qc(F), null;
    }
    function _(F, W, z, X) {
      var le = W !== null ? W.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return le !== null ? null : g(F, W, "" + z, X);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Yr:
            return z.key === le ? x(F, W, z, X) : null;
          case Rr:
            return z.key === le ? C(F, W, z, X) : null;
          case Ve: {
            var ie = z._payload, Se = z._init;
            return _(F, W, Se(ie), X);
          }
        }
        if (Xe(z) || ma(z))
          return le !== null ? null : R(F, W, z, X, null);
        qc(F, z);
      }
      return typeof z == "function" && Qc(F), null;
    }
    function H(F, W, z, X, le) {
      if (typeof X == "string" && X !== "" || typeof X == "number") {
        var ie = F.get(z) || null;
        return g(W, ie, "" + X, le);
      }
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Yr: {
            var Se = F.get(X.key === null ? z : X.key) || null;
            return x(W, Se, X, le);
          }
          case Rr: {
            var De = F.get(X.key === null ? z : X.key) || null;
            return C(W, De, X, le);
          }
          case Ve:
            var lt = X._payload, Ge = X._init;
            return H(F, W, z, Ge(lt), le);
        }
        if (Xe(X) || ma(X)) {
          var kt = F.get(z) || null;
          return R(W, kt, X, le, null);
        }
        qc(W, X);
      }
      return typeof X == "function" && Qc(W), null;
    }
    function J(F, W, z) {
      {
        if (typeof F != "object" || F === null)
          return W;
        switch (F.$$typeof) {
          case Yr:
          case Rr:
            jb(F, z);
            var X = F.key;
            if (typeof X != "string")
              break;
            if (W === null) {
              W = /* @__PURE__ */ new Set(), W.add(X);
              break;
            }
            if (!W.has(X)) {
              W.add(X);
              break;
            }
            c("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
            break;
          case Ve:
            var le = F._payload, ie = F._init;
            J(ie(le), W, z);
            break;
        }
      }
      return W;
    }
    function K(F, W, z, X) {
      for (var le = null, ie = 0; ie < z.length; ie++) {
        var Se = z[ie];
        le = J(Se, le, F);
      }
      for (var De = null, lt = null, Ge = W, kt = 0, qe = 0, Rt = null; Ge !== null && qe < z.length; qe++) {
        Ge.index > qe ? (Rt = Ge, Ge = null) : Rt = Ge.sibling;
        var Cn = _(F, Ge, z[qe], X);
        if (Cn === null) {
          Ge === null && (Ge = Rt);
          break;
        }
        e && Ge && Cn.alternate === null && t(F, Ge), kt = u(Cn, kt, qe), lt === null ? De = Cn : lt.sibling = Cn, lt = Cn, Ge = Rt;
      }
      if (qe === z.length) {
        if (n(F, Ge), rn()) {
          var fn = qe;
          Xi(F, fn);
        }
        return De;
      }
      if (Ge === null) {
        for (; qe < z.length; qe++) {
          var or = A(F, z[qe], X);
          or !== null && (kt = u(or, kt, qe), lt === null ? De = or : lt.sibling = or, lt = or);
        }
        if (rn()) {
          var _n = qe;
          Xi(F, _n);
        }
        return De;
      }
      for (var An = r(F, Ge); qe < z.length; qe++) {
        var En = H(An, F, qe, z[qe], X);
        En !== null && (e && En.alternate !== null && An.delete(En.key === null ? qe : En.key), kt = u(En, kt, qe), lt === null ? De = En : lt.sibling = En, lt = En);
      }
      if (e && An.forEach(function(vs) {
        return t(F, vs);
      }), rn()) {
        var Ua = qe;
        Xi(F, Ua);
      }
      return De;
    }
    function ae(F, W, z, X) {
      var le = ma(z);
      if (typeof le != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        z[Symbol.toStringTag] === "Generator" && (wp || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wp = !0), z.entries === le && (Np || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Np = !0);
        var ie = le.call(z);
        if (ie)
          for (var Se = null, De = ie.next(); !De.done; De = ie.next()) {
            var lt = De.value;
            Se = J(lt, Se, F);
          }
      }
      var Ge = le.call(z);
      if (Ge == null)
        throw new Error("An iterable object provided no iterator.");
      for (var kt = null, qe = null, Rt = W, Cn = 0, fn = 0, or = null, _n = Ge.next(); Rt !== null && !_n.done; fn++, _n = Ge.next()) {
        Rt.index > fn ? (or = Rt, Rt = null) : or = Rt.sibling;
        var An = _(F, Rt, _n.value, X);
        if (An === null) {
          Rt === null && (Rt = or);
          break;
        }
        e && Rt && An.alternate === null && t(F, Rt), Cn = u(An, Cn, fn), qe === null ? kt = An : qe.sibling = An, qe = An, Rt = or;
      }
      if (_n.done) {
        if (n(F, Rt), rn()) {
          var En = fn;
          Xi(F, En);
        }
        return kt;
      }
      if (Rt === null) {
        for (; !_n.done; fn++, _n = Ge.next()) {
          var Ua = A(F, _n.value, X);
          Ua !== null && (Cn = u(Ua, Cn, fn), qe === null ? kt = Ua : qe.sibling = Ua, qe = Ua);
        }
        if (rn()) {
          var vs = fn;
          Xi(F, vs);
        }
        return kt;
      }
      for (var xu = r(F, Rt); !_n.done; fn++, _n = Ge.next()) {
        var oa = H(xu, F, fn, _n.value, X);
        oa !== null && (e && oa.alternate !== null && xu.delete(oa.key === null ? fn : oa.key), Cn = u(oa, Cn, fn), qe === null ? kt = oa : qe.sibling = oa, qe = oa);
      }
      if (e && xu.forEach(function(EO) {
        return t(F, EO);
      }), rn()) {
        var CO = fn;
        Xi(F, CO);
      }
      return kt;
    }
    function me(F, W, z, X) {
      if (W !== null && W.tag === j) {
        n(F, W.sibling);
        var le = i(W, z);
        return le.return = F, le;
      }
      n(F, W);
      var ie = Sv(z, F.mode, X);
      return ie.return = F, ie;
    }
    function fe(F, W, z, X) {
      for (var le = z.key, ie = W; ie !== null; ) {
        if (ie.key === le) {
          var Se = z.type;
          if (Se === O) {
            if (ie.tag === M) {
              n(F, ie.sibling);
              var De = i(ie, z.props.children);
              return De.return = F, De._debugSource = z._source, De._debugOwner = z._owner, De;
            }
          } else if (ie.elementType === Se || // Keep this check inline so it only runs on the false path:
          A0(ie, z) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Tb(Se) === ie.type) {
            n(F, ie.sibling);
            var lt = i(ie, z.props);
            return lt.ref = Hl(F, ie, z), lt.return = F, lt._debugSource = z._source, lt._debugOwner = z._owner, lt;
          }
          n(F, ie);
          break;
        } else
          t(F, ie);
        ie = ie.sibling;
      }
      if (z.type === O) {
        var Ge = bi(z.props.children, F.mode, X, z.key);
        return Ge.return = F, Ge;
      } else {
        var kt = xv(z, F.mode, X);
        return kt.ref = Hl(F, W, z), kt.return = F, kt;
      }
    }
    function Ie(F, W, z, X) {
      for (var le = z.key, ie = W; ie !== null; ) {
        if (ie.key === le)
          if (ie.tag === S && ie.stateNode.containerInfo === z.containerInfo && ie.stateNode.implementation === z.implementation) {
            n(F, ie.sibling);
            var Se = i(ie, z.children || []);
            return Se.return = F, Se;
          } else {
            n(F, ie);
            break;
          }
        else
          t(F, ie);
        ie = ie.sibling;
      }
      var De = Nv(z, F.mode, X);
      return De.return = F, De;
    }
    function Fe(F, W, z, X) {
      var le = typeof z == "object" && z !== null && z.type === O && z.key === null;
      if (le && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Yr:
            return m(fe(F, W, z, X));
          case Rr:
            return m(Ie(F, W, z, X));
          case Ve:
            var ie = z._payload, Se = z._init;
            return Fe(F, W, Se(ie), X);
        }
        if (Xe(z))
          return K(F, W, z, X);
        if (ma(z))
          return ae(F, W, z, X);
        qc(F, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? m(me(F, W, "" + z, X)) : (typeof z == "function" && Qc(F), n(F, W));
    }
    return Fe;
  }
  var Xo = Db(!0), kb = Db(!1);
  function eT(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, r = fo(n, n.pendingProps);
      for (t.child = r, r.return = t; n.sibling !== null; )
        n = n.sibling, r = r.sibling = fo(n, n.pendingProps), r.return = t;
      r.sibling = null;
    }
  }
  function tT(e, t) {
    for (var n = e.child; n !== null; )
      Hk(n, t), n = n.sibling;
  }
  var jp = ii(null), Tp;
  Tp = {};
  var Xc = null, Zo = null, Dp = null, Zc = !1;
  function ef() {
    Xc = null, Zo = null, Dp = null, Zc = !1;
  }
  function Ob() {
    Zc = !0;
  }
  function Lb() {
    Zc = !1;
  }
  function _b(e, t, n) {
    Nn(jp, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Tp && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Tp;
  }
  function kp(e, t) {
    var n = jp.current;
    Sn(jp, t), e._currentValue = n;
  }
  function Op(e, t, n) {
    for (var r = e; r !== null; ) {
      var i = r.alternate;
      if (Uo(r.childLanes, t) ? i !== null && !Uo(i.childLanes, t) && (i.childLanes = Pe(i.childLanes, t)) : (r.childLanes = Pe(r.childLanes, t), i !== null && (i.childLanes = Pe(i.childLanes, t))), r === n)
        break;
      r = r.return;
    }
    r !== n && c("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function nT(e, t, n) {
    rT(e, t, n);
  }
  function rT(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var i = void 0, u = r.dependencies;
      if (u !== null) {
        i = r.child;
        for (var m = u.firstContext; m !== null; ) {
          if (m.context === t) {
            if (r.tag === p) {
              var g = ol(n), x = Oa(pt, g);
              x.tag = nf;
              var C = r.updateQueue;
              if (C !== null) {
                var R = C.shared, A = R.pending;
                A === null ? x.next = x : (x.next = A.next, A.next = x), R.pending = x;
              }
            }
            r.lanes = Pe(r.lanes, n);
            var _ = r.alternate;
            _ !== null && (_.lanes = Pe(_.lanes, n)), Op(r.return, n, e), u.lanes = Pe(u.lanes, n);
            break;
          }
          m = m.next;
        }
      } else if (r.tag === L)
        i = r.type === e.type ? null : r.child;
      else if (r.tag === he) {
        var H = r.return;
        if (H === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        H.lanes = Pe(H.lanes, n);
        var J = H.alternate;
        J !== null && (J.lanes = Pe(J.lanes, n)), Op(H, n, e), i = r.sibling;
      } else
        i = r.child;
      if (i !== null)
        i.return = r;
      else
        for (i = r; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          var K = i.sibling;
          if (K !== null) {
            K.return = i.return, i = K;
            break;
          }
          i = i.return;
        }
      r = i;
    }
  }
  function es(e, t) {
    Xc = e, Zo = null, Dp = null;
    var n = e.dependencies;
    if (n !== null) {
      var r = n.firstContext;
      r !== null && (er(n.lanes, t) && ru(), n.firstContext = null);
    }
  }
  function Pt(e) {
    Zc && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Dp !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Zo === null) {
        if (Xc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Zo = n, Xc.dependencies = {
          lanes: q,
          firstContext: n
        };
      } else
        Zo = Zo.next = n;
    }
    return t;
  }
  var ro = null;
  function Lp(e) {
    ro === null ? ro = [e] : ro.push(e);
  }
  function aT() {
    if (ro !== null) {
      for (var e = 0; e < ro.length; e++) {
        var t = ro[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var r = n.next, i = t.pending;
          if (i !== null) {
            var u = i.next;
            i.next = r, n.next = u;
          }
          t.pending = n;
        }
      }
      ro = null;
    }
  }
  function Ab(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Lp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, tf(e, r);
  }
  function iT(e, t, n, r) {
    var i = t.interleaved;
    i === null ? (n.next = n, Lp(t)) : (n.next = i.next, i.next = n), t.interleaved = n;
  }
  function oT(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Lp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, tf(e, r);
  }
  function $n(e, t) {
    return tf(e, t);
  }
  var sT = tf;
  function tf(e, t) {
    e.lanes = Pe(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Pe(n.lanes, t)), n === null && (e.flags & (At | xa)) !== ye && k0(e);
    for (var r = e, i = e.return; i !== null; )
      i.childLanes = Pe(i.childLanes, t), n = i.alternate, n !== null ? n.childLanes = Pe(n.childLanes, t) : (i.flags & (At | xa)) !== ye && k0(e), r = i, i = i.return;
    if (r.tag === b) {
      var u = r.stateNode;
      return u;
    } else
      return null;
  }
  var Pb = 0, Mb = 1, nf = 2, _p = 3, rf = !1, Ap, af;
  Ap = !1, af = null;
  function Pp(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: q
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function Ub(e, t) {
    var n = t.updateQueue, r = e.updateQueue;
    if (n === r) {
      var i = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        effects: r.effects
      };
      t.updateQueue = i;
    }
  }
  function Oa(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Pb,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function ui(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    var i = r.shared;
    if (af === i && !Ap && (c("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ap = !0), ik()) {
      var u = i.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, sT(e, n);
    } else
      return oT(e, i, t, n);
  }
  function of(e, t, n) {
    var r = t.updateQueue;
    if (r !== null) {
      var i = r.shared;
      if (qg(n)) {
        var u = i.lanes;
        u = Xg(u, e.pendingLanes);
        var m = Pe(u, n);
        i.lanes = m, jm(e, m);
      }
    }
  }
  function Mp(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null) {
      var i = r.updateQueue;
      if (n === i) {
        var u = null, m = null, g = n.firstBaseUpdate;
        if (g !== null) {
          var x = g;
          do {
            var C = {
              eventTime: x.eventTime,
              lane: x.lane,
              tag: x.tag,
              payload: x.payload,
              callback: x.callback,
              next: null
            };
            m === null ? u = m = C : (m.next = C, m = C), x = x.next;
          } while (x !== null);
          m === null ? u = m = t : (m.next = t, m = t);
        } else
          u = m = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: m,
          shared: i.shared,
          effects: i.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var R = n.lastBaseUpdate;
    R === null ? n.firstBaseUpdate = t : R.next = t, n.lastBaseUpdate = t;
  }
  function lT(e, t, n, r, i, u) {
    switch (n.tag) {
      case Mb: {
        var m = n.payload;
        if (typeof m == "function") {
          Ob();
          var g = m.call(u, r, i);
          {
            if (e.mode & Et) {
              Xt(!0);
              try {
                m.call(u, r, i);
              } finally {
                Xt(!1);
              }
            }
            Lb();
          }
          return g;
        }
        return m;
      }
      case _p:
        e.flags = e.flags & ~Dn | Ze;
      case Pb: {
        var x = n.payload, C;
        if (typeof x == "function") {
          Ob(), C = x.call(u, r, i);
          {
            if (e.mode & Et) {
              Xt(!0);
              try {
                x.call(u, r, i);
              } finally {
                Xt(!1);
              }
            }
            Lb();
          }
        } else
          C = x;
        return C == null ? r : ze({}, r, C);
      }
      case nf:
        return rf = !0, r;
    }
    return r;
  }
  function sf(e, t, n, r) {
    var i = e.updateQueue;
    rf = !1, af = i.shared;
    var u = i.firstBaseUpdate, m = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var x = g, C = x.next;
      x.next = null, m === null ? u = C : m.next = C, m = x;
      var R = e.alternate;
      if (R !== null) {
        var A = R.updateQueue, _ = A.lastBaseUpdate;
        _ !== m && (_ === null ? A.firstBaseUpdate = C : _.next = C, A.lastBaseUpdate = x);
      }
    }
    if (u !== null) {
      var H = i.baseState, J = q, K = null, ae = null, me = null, fe = u;
      do {
        var Ie = fe.lane, Fe = fe.eventTime;
        if (Uo(r, Ie)) {
          if (me !== null) {
            var W = {
              eventTime: Fe,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Zt,
              tag: fe.tag,
              payload: fe.payload,
              callback: fe.callback,
              next: null
            };
            me = me.next = W;
          }
          H = lT(e, i, fe, H, t, n);
          var z = fe.callback;
          if (z !== null && // If the update was already committed, we should not queue its
          // callback again.
          fe.lane !== Zt) {
            e.flags |= Wd;
            var X = i.effects;
            X === null ? i.effects = [fe] : X.push(fe);
          }
        } else {
          var F = {
            eventTime: Fe,
            lane: Ie,
            tag: fe.tag,
            payload: fe.payload,
            callback: fe.callback,
            next: null
          };
          me === null ? (ae = me = F, K = H) : me = me.next = F, J = Pe(J, Ie);
        }
        if (fe = fe.next, fe === null) {
          if (g = i.shared.pending, g === null)
            break;
          var le = g, ie = le.next;
          le.next = null, fe = ie, i.lastBaseUpdate = le, i.shared.pending = null;
        }
      } while (!0);
      me === null && (K = H), i.baseState = K, i.firstBaseUpdate = ae, i.lastBaseUpdate = me;
      var Se = i.shared.interleaved;
      if (Se !== null) {
        var De = Se;
        do
          J = Pe(J, De.lane), De = De.next;
        while (De !== Se);
      } else u === null && (i.shared.lanes = q);
      hu(J), e.lanes = J, e.memoizedState = H;
    }
    af = null;
  }
  function uT(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function Vb() {
    rf = !1;
  }
  function lf() {
    return rf;
  }
  function Fb(e, t, n) {
    var r = t.effects;
    if (t.effects = null, r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i], m = u.callback;
        m !== null && (u.callback = null, uT(m, n));
      }
  }
  var Bl = {}, ci = ii(Bl), Jl = ii(Bl), uf = ii(Bl);
  function cf(e) {
    if (e === Bl)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function zb() {
    var e = cf(uf.current);
    return e;
  }
  function Up(e, t) {
    Nn(uf, t, e), Nn(Jl, e, e), Nn(ci, Bl, e);
    var n = RR(t);
    Sn(ci, e), Nn(ci, n, e);
  }
  function ts(e) {
    Sn(ci, e), Sn(Jl, e), Sn(uf, e);
  }
  function Vp() {
    var e = cf(ci.current);
    return e;
  }
  function $b(e) {
    cf(uf.current);
    var t = cf(ci.current), n = jR(t, e.type);
    t !== n && (Nn(Jl, e, e), Nn(ci, n, e));
  }
  function Fp(e) {
    Jl.current === e && (Sn(ci, e), Sn(Jl, e));
  }
  var cT = 0, Hb = 1, Bb = 1, Il = 2, Pr = ii(cT);
  function zp(e, t) {
    return (e & t) !== 0;
  }
  function ns(e) {
    return e & Hb;
  }
  function $p(e, t) {
    return e & Hb | t;
  }
  function fT(e, t) {
    return e | t;
  }
  function fi(e, t) {
    Nn(Pr, t, e);
  }
  function rs(e) {
    Sn(Pr, e);
  }
  function dT(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function ff(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === U) {
        var n = t.memoizedState;
        if (n !== null) {
          var r = n.dehydrated;
          if (r === null || ob(r) || ip(r))
            return t;
        }
      } else if (t.tag === be && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var i = (t.flags & Ze) !== ye;
        if (i)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Hn = (
    /*   */
    0
  ), Ft = (
    /* */
    1
  ), Zr = (
    /*  */
    2
  ), zt = (
    /*    */
    4
  ), an = (
    /*   */
    8
  ), Hp = [];
  function Bp() {
    for (var e = 0; e < Hp.length; e++) {
      var t = Hp[e];
      t._workInProgressVersionPrimary = null;
    }
    Hp.length = 0;
  }
  function mT(e, t) {
    var n = t._getVersion, r = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
  }
  var se = s.ReactCurrentDispatcher, Yl = s.ReactCurrentBatchConfig, Jp, as;
  Jp = /* @__PURE__ */ new Set();
  var ao = q, st = null, $t = null, Ht = null, df = !1, Kl = !1, Wl = 0, pT = 0, hT = 25, G = null, yr = null, di = -1, Ip = !1;
  function tt() {
    {
      var e = G;
      yr === null ? yr = [e] : yr.push(e);
    }
  }
  function te() {
    {
      var e = G;
      yr !== null && (di++, yr[di] !== e && vT(e));
    }
  }
  function is(e) {
    e != null && !Xe(e) && c("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
  }
  function vT(e) {
    {
      var t = _e(st);
      if (!Jp.has(t) && (Jp.add(t), yr !== null)) {
        for (var n = "", r = 30, i = 0; i <= di; i++) {
          for (var u = yr[i], m = i === di ? e : u, g = i + 1 + ". " + u; g.length < r; )
            g += " ";
          g += m + `
`, n += g;
        }
        c(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
      }
    }
  }
  function wn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Yp(e, t) {
    if (Ip)
      return !1;
    if (t === null)
      return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
    e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!rr(e[n], t[n]))
        return !1;
    return !0;
  }
  function os(e, t, n, r, i, u) {
    ao = u, st = t, yr = e !== null ? e._debugHookTypes : null, di = -1, Ip = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? se.current = fx : yr !== null ? se.current = cx : se.current = ux;
    var m = n(r, i);
    if (Kl) {
      var g = 0;
      do {
        if (Kl = !1, Wl = 0, g >= hT)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        g += 1, Ip = !1, $t = null, Ht = null, t.updateQueue = null, di = -1, se.current = dx, m = n(r, i);
      } while (Kl);
    }
    se.current = Ef, t._debugHookTypes = yr;
    var x = $t !== null && $t.next !== null;
    if (ao = q, st = null, $t = null, Ht = null, G = null, yr = null, di = -1, e !== null && (e.flags & Na) !== (t.flags & Na) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Be) !== ve && c("Internal React error: Expected static flag was missing. Please notify the React team."), df = !1, x)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return m;
  }
  function ss() {
    var e = Wl !== 0;
    return Wl = 0, e;
  }
  function Jb(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Gr) !== ve ? t.flags &= ~(ic | Sa | Dr | Ye) : t.flags &= ~(Dr | Ye), e.lanes = dc(e.lanes, n);
  }
  function Ib() {
    if (se.current = Ef, df) {
      for (var e = st.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      df = !1;
    }
    ao = q, st = null, $t = null, Ht = null, yr = null, di = -1, G = null, ax = !1, Kl = !1, Wl = 0;
  }
  function ea() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ht === null ? st.memoizedState = Ht = e : Ht = Ht.next = e, Ht;
  }
  function br() {
    var e;
    if ($t === null) {
      var t = st.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = $t.next;
    var n;
    if (Ht === null ? n = st.memoizedState : n = Ht.next, n !== null)
      Ht = n, n = Ht.next, $t = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      $t = e;
      var r = {
        memoizedState: $t.memoizedState,
        baseState: $t.baseState,
        baseQueue: $t.baseQueue,
        queue: $t.queue,
        next: null
      };
      Ht === null ? st.memoizedState = Ht = r : Ht = Ht.next = r;
    }
    return Ht;
  }
  function Yb() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Kp(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wp(e, t, n) {
    var r = ea(), i;
    n !== void 0 ? i = n(t) : i = t, r.memoizedState = r.baseState = i;
    var u = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: i
    };
    r.queue = u;
    var m = u.dispatch = xT.bind(null, st, u);
    return [r.memoizedState, m];
  }
  function Gp(e, t, n) {
    var r = br(), i = r.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = $t, m = u.baseQueue, g = i.pending;
    if (g !== null) {
      if (m !== null) {
        var x = m.next, C = g.next;
        m.next = C, g.next = x;
      }
      u.baseQueue !== m && c("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = m = g, i.pending = null;
    }
    if (m !== null) {
      var R = m.next, A = u.baseState, _ = null, H = null, J = null, K = R;
      do {
        var ae = K.lane;
        if (Uo(ao, ae)) {
          if (J !== null) {
            var fe = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Zt,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            J = J.next = fe;
          }
          if (K.hasEagerState)
            A = K.eagerState;
          else {
            var Ie = K.action;
            A = e(A, Ie);
          }
        } else {
          var me = {
            lane: ae,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          J === null ? (H = J = me, _ = A) : J = J.next = me, st.lanes = Pe(st.lanes, ae), hu(ae);
        }
        K = K.next;
      } while (K !== null && K !== R);
      J === null ? _ = A : J.next = H, rr(A, r.memoizedState) || ru(), r.memoizedState = A, r.baseState = _, r.baseQueue = J, i.lastRenderedState = A;
    }
    var Fe = i.interleaved;
    if (Fe !== null) {
      var F = Fe;
      do {
        var W = F.lane;
        st.lanes = Pe(st.lanes, W), hu(W), F = F.next;
      } while (F !== Fe);
    } else m === null && (i.lanes = q);
    var z = i.dispatch;
    return [r.memoizedState, z];
  }
  function qp(e, t, n) {
    var r = br(), i = r.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = i.dispatch, m = i.pending, g = r.memoizedState;
    if (m !== null) {
      i.pending = null;
      var x = m.next, C = x;
      do {
        var R = C.action;
        g = e(g, R), C = C.next;
      } while (C !== x);
      rr(g, r.memoizedState) || ru(), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), i.lastRenderedState = g;
    }
    return [g, u];
  }
  function UM(e, t, n) {
  }
  function VM(e, t, n) {
  }
  function Qp(e, t, n) {
    var r = st, i = ea(), u, m = rn();
    if (m) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      u = n(), as || u !== n() && (c("The result of getServerSnapshot should be cached to avoid an infinite loop"), as = !0);
    } else {
      if (u = t(), !as) {
        var g = t();
        rr(u, g) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), as = !0);
      }
      var x = Jf();
      if (x === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      fc(x, ao) || Kb(r, t, u);
    }
    i.memoizedState = u;
    var C = {
      value: u,
      getSnapshot: t
    };
    return i.queue = C, gf(Gb.bind(null, r, C, e), [e]), r.flags |= Dr, Gl(Ft | an, Wb.bind(null, r, C, u, t), void 0, null), u;
  }
  function mf(e, t, n) {
    var r = st, i = br(), u = t();
    if (!as) {
      var m = t();
      rr(u, m) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), as = !0);
    }
    var g = i.memoizedState, x = !rr(g, u);
    x && (i.memoizedState = u, ru());
    var C = i.queue;
    if (Ql(Gb.bind(null, r, C, e), [e]), C.getSnapshot !== t || x || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Ht !== null && Ht.memoizedState.tag & Ft) {
      r.flags |= Dr, Gl(Ft | an, Wb.bind(null, r, C, u, t), void 0, null);
      var R = Jf();
      if (R === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      fc(R, ao) || Kb(r, t, u);
    }
    return u;
  }
  function Kb(e, t, n) {
    e.flags |= ac;
    var r = {
      getSnapshot: t,
      value: n
    }, i = st.updateQueue;
    if (i === null)
      i = Yb(), st.updateQueue = i, i.stores = [r];
    else {
      var u = i.stores;
      u === null ? i.stores = [r] : u.push(r);
    }
  }
  function Wb(e, t, n, r) {
    t.value = n, t.getSnapshot = r, qb(t) && Qb(e);
  }
  function Gb(e, t, n) {
    var r = function() {
      qb(t) && Qb(e);
    };
    return n(r);
  }
  function qb(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var r = t();
      return !rr(n, r);
    } catch {
      return !0;
    }
  }
  function Qb(e) {
    var t = $n(e, je);
    t !== null && Yt(t, e, je, pt);
  }
  function pf(e) {
    var t = ea();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: Kp,
      lastRenderedState: e
    };
    t.queue = n;
    var r = n.dispatch = ST.bind(null, st, n);
    return [t.memoizedState, r];
  }
  function Xp(e) {
    return Gp(Kp);
  }
  function Zp(e) {
    return qp(Kp);
  }
  function Gl(e, t, n, r) {
    var i = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      // Circular
      next: null
    }, u = st.updateQueue;
    if (u === null)
      u = Yb(), st.updateQueue = u, u.lastEffect = i.next = i;
    else {
      var m = u.lastEffect;
      if (m === null)
        u.lastEffect = i.next = i;
      else {
        var g = m.next;
        m.next = i, i.next = g, u.lastEffect = i;
      }
    }
    return i;
  }
  function eh(e) {
    var t = ea();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function hf(e) {
    var t = br();
    return t.memoizedState;
  }
  function ql(e, t, n, r) {
    var i = ea(), u = r === void 0 ? null : r;
    st.flags |= e, i.memoizedState = Gl(Ft | t, n, void 0, u);
  }
  function vf(e, t, n, r) {
    var i = br(), u = r === void 0 ? null : r, m = void 0;
    if ($t !== null) {
      var g = $t.memoizedState;
      if (m = g.destroy, u !== null) {
        var x = g.deps;
        if (Yp(u, x)) {
          i.memoizedState = Gl(t, n, m, u);
          return;
        }
      }
    }
    st.flags |= e, i.memoizedState = Gl(Ft | t, n, m, u);
  }
  function gf(e, t) {
    return (st.mode & Gr) !== ve ? ql(ic | Dr | Qd, an, e, t) : ql(Dr | Qd, an, e, t);
  }
  function Ql(e, t) {
    return vf(Dr, an, e, t);
  }
  function th(e, t) {
    return ql(Ye, Zr, e, t);
  }
  function yf(e, t) {
    return vf(Ye, Zr, e, t);
  }
  function nh(e, t) {
    var n = Ye;
    return n |= $i, (st.mode & Gr) !== ve && (n |= Sa), ql(n, zt, e, t);
  }
  function bf(e, t) {
    return vf(Ye, zt, e, t);
  }
  function Xb(e, t) {
    if (typeof t == "function") {
      var n = t, r = e();
      return n(r), function() {
        n(null);
      };
    } else if (t != null) {
      var i = t;
      i.hasOwnProperty("current") || c("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(i).join(", ") + "}");
      var u = e();
      return i.current = u, function() {
        i.current = null;
      };
    }
  }
  function rh(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null, i = Ye;
    return i |= $i, (st.mode & Gr) !== ve && (i |= Sa), ql(i, zt, Xb.bind(null, t, e), r);
  }
  function xf(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null;
    return vf(Ye, zt, Xb.bind(null, t, e), r);
  }
  function gT(e, t) {
  }
  var Sf = gT;
  function ah(e, t) {
    var n = ea(), r = t === void 0 ? null : t;
    return n.memoizedState = [e, r], e;
  }
  function Nf(e, t) {
    var n = br(), r = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && r !== null) {
      var u = i[1];
      if (Yp(r, u))
        return i[0];
    }
    return n.memoizedState = [e, r], e;
  }
  function ih(e, t) {
    var n = ea(), r = t === void 0 ? null : t, i = e();
    return n.memoizedState = [i, r], i;
  }
  function wf(e, t) {
    var n = br(), r = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && r !== null) {
      var u = i[1];
      if (Yp(r, u))
        return i[0];
    }
    var m = e();
    return n.memoizedState = [m, r], m;
  }
  function oh(e) {
    var t = ea();
    return t.memoizedState = e, e;
  }
  function Zb(e) {
    var t = br(), n = $t, r = n.memoizedState;
    return tx(t, r, e);
  }
  function ex(e) {
    var t = br();
    if ($t === null)
      return t.memoizedState = e, e;
    var n = $t.memoizedState;
    return tx(t, n, e);
  }
  function tx(e, t, n) {
    var r = !nC(ao);
    if (r) {
      if (!rr(n, t)) {
        var i = Qg();
        st.lanes = Pe(st.lanes, i), hu(i), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, ru()), e.memoizedState = n, n;
  }
  function yT(e, t, n) {
    var r = Or();
    en(fC(r, Ca)), e(!0);
    var i = Yl.transition;
    Yl.transition = {};
    var u = Yl.transition;
    Yl.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (en(r), Yl.transition = i, i === null && u._updatedFibers) {
        var m = u._updatedFibers.size;
        m > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function sh() {
    var e = pf(!1), t = e[0], n = e[1], r = yT.bind(null, n), i = ea();
    return i.memoizedState = r, [t, r];
  }
  function nx() {
    var e = Xp(), t = e[0], n = br(), r = n.memoizedState;
    return [t, r];
  }
  function rx() {
    var e = Zp(), t = e[0], n = br(), r = n.memoizedState;
    return [t, r];
  }
  var ax = !1;
  function bT() {
    return ax;
  }
  function lh() {
    var e = ea(), t = Jf(), n = t.identifierPrefix, r;
    if (rn()) {
      var i = Mj();
      r = ":" + n + "R" + i;
      var u = Wl++;
      u > 0 && (r += "H" + u.toString(32)), r += ":";
    } else {
      var m = pT++;
      r = ":" + n + "r" + m.toString(32) + ":";
    }
    return e.memoizedState = r, r;
  }
  function Cf() {
    var e = br(), t = e.memoizedState;
    return t;
  }
  function xT(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = gi(e), i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ix(e))
      ox(t, i);
    else {
      var u = Ab(e, t, i, r);
      if (u !== null) {
        var m = Ln();
        Yt(u, e, r, m), sx(u, t, r);
      }
    }
    lx(e, r);
  }
  function ST(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = gi(e), i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ix(e))
      ox(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === q && (u === null || u.lanes === q)) {
        var m = t.lastRenderedReducer;
        if (m !== null) {
          var g;
          g = se.current, se.current = Mr;
          try {
            var x = t.lastRenderedState, C = m(x, n);
            if (i.hasEagerState = !0, i.eagerState = C, rr(C, x)) {
              iT(e, t, i, r);
              return;
            }
          } catch {
          } finally {
            se.current = g;
          }
        }
      }
      var R = Ab(e, t, i, r);
      if (R !== null) {
        var A = Ln();
        Yt(R, e, r, A), sx(R, t, r);
      }
    }
    lx(e, r);
  }
  function ix(e) {
    var t = e.alternate;
    return e === st || t !== null && t === st;
  }
  function ox(e, t) {
    Kl = df = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sx(e, t, n) {
    if (qg(n)) {
      var r = t.lanes;
      r = Xg(r, e.pendingLanes);
      var i = Pe(r, n);
      t.lanes = i, jm(e, i);
    }
  }
  function lx(e, t, n) {
    nm(e, t);
  }
  var Ef = {
    readContext: Pt,
    useCallback: wn,
    useContext: wn,
    useEffect: wn,
    useImperativeHandle: wn,
    useInsertionEffect: wn,
    useLayoutEffect: wn,
    useMemo: wn,
    useReducer: wn,
    useRef: wn,
    useState: wn,
    useDebugValue: wn,
    useDeferredValue: wn,
    useTransition: wn,
    useMutableSource: wn,
    useSyncExternalStore: wn,
    useId: wn,
    unstable_isNewReconciler: Qe
  }, ux = null, cx = null, fx = null, dx = null, ta = null, Mr = null, Rf = null;
  {
    var uh = function() {
      c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, Te = function() {
      c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    ux = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", tt(), is(t), ah(e, t);
      },
      useContext: function(e) {
        return G = "useContext", tt(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", tt(), is(t), gf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", tt(), is(n), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", tt(), is(t), th(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", tt(), is(t), nh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", tt(), is(t);
        var n = se.current;
        se.current = ta;
        try {
          return ih(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", tt();
        var r = se.current;
        se.current = ta;
        try {
          return Wp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", tt(), eh(e);
      },
      useState: function(e) {
        G = "useState", tt();
        var t = se.current;
        se.current = ta;
        try {
          return pf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", tt(), oh(e);
      },
      useTransition: function() {
        return G = "useTransition", tt(), sh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", tt(), Qp(e, t, n);
      },
      useId: function() {
        return G = "useId", tt(), lh();
      },
      unstable_isNewReconciler: Qe
    }, cx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), ah(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), gf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), th(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), nh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = ta;
        try {
          return ih(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var r = se.current;
        se.current = ta;
        try {
          return Wp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), eh(e);
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = ta;
        try {
          return pf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), oh(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), sh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), Qp(e, t, n);
      },
      useId: function() {
        return G = "useId", te(), lh();
      },
      unstable_isNewReconciler: Qe
    }, fx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), yf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Mr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var r = se.current;
        se.current = Mr;
        try {
          return Gp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), hf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Mr;
        try {
          return Xp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Zb(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), nx();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), mf(e, t);
      },
      useId: function() {
        return G = "useId", te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, dx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), yf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Rf;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var r = se.current;
        se.current = Rf;
        try {
          return qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), hf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Rf;
        try {
          return Zp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), ex(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), rx();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), mf(e, t);
      },
      useId: function() {
        return G = "useId", te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, ta = {
      readContext: function(e) {
        return uh(), Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), tt(), ah(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), tt(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), tt(), gf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), tt(), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), tt(), th(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), tt(), nh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), tt();
        var n = se.current;
        se.current = ta;
        try {
          return ih(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), tt();
        var r = se.current;
        se.current = ta;
        try {
          return Wp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), tt(), eh(e);
      },
      useState: function(e) {
        G = "useState", Te(), tt();
        var t = se.current;
        se.current = ta;
        try {
          return pf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), tt(), oh(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), tt(), sh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), tt(), Qp(e, t, n);
      },
      useId: function() {
        return G = "useId", Te(), tt(), lh();
      },
      unstable_isNewReconciler: Qe
    }, Mr = {
      readContext: function(e) {
        return uh(), Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), te(), yf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), te();
        var n = se.current;
        se.current = Mr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), te();
        var r = se.current;
        se.current = Mr;
        try {
          return Gp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), te(), hf();
      },
      useState: function(e) {
        G = "useState", Te(), te();
        var t = se.current;
        se.current = Mr;
        try {
          return Xp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), te(), Zb(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), te(), nx();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), te(), mf(e, t);
      },
      useId: function() {
        return G = "useId", Te(), te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, Rf = {
      readContext: function(e) {
        return uh(), Pt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), te(), yf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), te();
        var n = se.current;
        se.current = Mr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), te();
        var r = se.current;
        se.current = Mr;
        try {
          return qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), te(), hf();
      },
      useState: function(e) {
        G = "useState", Te(), te();
        var t = se.current;
        se.current = Mr;
        try {
          return Zp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), te(), ex(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), te(), rx();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), te(), mf(e, t);
      },
      useId: function() {
        return G = "useId", Te(), te(), Cf();
      },
      unstable_isNewReconciler: Qe
    };
  }
  var mi = a.unstable_now, mx = 0, jf = -1, Xl = -1, Tf = -1, ch = !1, Df = !1;
  function px() {
    return ch;
  }
  function NT() {
    Df = !0;
  }
  function wT() {
    ch = !1, Df = !1;
  }
  function CT() {
    ch = Df, Df = !1;
  }
  function hx() {
    return mx;
  }
  function vx() {
    mx = mi();
  }
  function fh(e) {
    Xl = mi(), e.actualStartTime < 0 && (e.actualStartTime = mi());
  }
  function gx(e) {
    Xl = -1;
  }
  function kf(e, t) {
    if (Xl >= 0) {
      var n = mi() - Xl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Xl = -1;
    }
  }
  function na(e) {
    if (jf >= 0) {
      var t = mi() - jf;
      jf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case b:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
          case k:
            var i = n.stateNode;
            i.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function dh(e) {
    if (Tf >= 0) {
      var t = mi() - Tf;
      Tf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case b:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
          case k:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function ra() {
    jf = mi();
  }
  function mh() {
    Tf = mi();
  }
  function ph(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Ur(e, t) {
    if (e && e.defaultProps) {
      var n = ze({}, t), r = e.defaultProps;
      for (var i in r)
        n[i] === void 0 && (n[i] = r[i]);
      return n;
    }
    return t;
  }
  var hh = {}, vh, gh, yh, bh, xh, yx, Of, Sh, Nh, wh, Zl;
  {
    vh = /* @__PURE__ */ new Set(), gh = /* @__PURE__ */ new Set(), yh = /* @__PURE__ */ new Set(), bh = /* @__PURE__ */ new Set(), Sh = /* @__PURE__ */ new Set(), xh = /* @__PURE__ */ new Set(), Nh = /* @__PURE__ */ new Set(), wh = /* @__PURE__ */ new Set(), Zl = /* @__PURE__ */ new Set();
    var bx = /* @__PURE__ */ new Set();
    Of = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        bx.has(n) || (bx.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, yx = function(e, t) {
      if (t === void 0) {
        var n = Ke(e) || "Component";
        xh.has(n) || (xh.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(hh, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(hh);
  }
  function Ch(e, t, n, r) {
    var i = e.memoizedState, u = n(r, i);
    {
      if (e.mode & Et) {
        Xt(!0);
        try {
          u = n(r, i);
        } finally {
          Xt(!1);
        }
      }
      yx(t, u);
    }
    var m = u == null ? i : ze({}, i, u);
    if (e.memoizedState = m, e.lanes === q) {
      var g = e.updateQueue;
      g.baseState = m;
    }
  }
  var Eh = {
    isMounted: hw,
    enqueueSetState: function(e, t, n) {
      var r = Do(e), i = Ln(), u = gi(r), m = Oa(i, u);
      m.payload = t, n != null && (Of(n, "setState"), m.callback = n);
      var g = ui(r, m, u);
      g !== null && (Yt(g, r, u, i), of(g, r, u)), nm(r, u);
    },
    enqueueReplaceState: function(e, t, n) {
      var r = Do(e), i = Ln(), u = gi(r), m = Oa(i, u);
      m.tag = Mb, m.payload = t, n != null && (Of(n, "replaceState"), m.callback = n);
      var g = ui(r, m, u);
      g !== null && (Yt(g, r, u, i), of(g, r, u)), nm(r, u);
    },
    enqueueForceUpdate: function(e, t) {
      var n = Do(e), r = Ln(), i = gi(n), u = Oa(r, i);
      u.tag = nf, t != null && (Of(t, "forceUpdate"), u.callback = t);
      var m = ui(n, u, i);
      m !== null && (Yt(m, n, i, r), of(m, n, i)), Yw(n, i);
    }
  };
  function xx(e, t, n, r, i, u, m) {
    var g = e.stateNode;
    if (typeof g.shouldComponentUpdate == "function") {
      var x = g.shouldComponentUpdate(r, u, m);
      {
        if (e.mode & Et) {
          Xt(!0);
          try {
            x = g.shouldComponentUpdate(r, u, m);
          } finally {
            Xt(!1);
          }
        }
        x === void 0 && c("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ke(t) || "Component");
      }
      return x;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !Sl(n, r) || !Sl(i, u) : !0;
  }
  function ET(e, t, n) {
    var r = e.stateNode;
    {
      var i = Ke(t) || "Component", u = r.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), r.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), r.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), t.childContextTypes && !Zl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ve && (Zl.add(t), c(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), t.contextTypes && !Zl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ve && (Zl.add(t), c(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), r.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !Nh.has(t) && (Nh.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof r.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ke(t) || "A pure component"), typeof r.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof r.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof r.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof r.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
      var m = r.props !== n;
      r.props !== void 0 && m && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), r.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !yh.has(t) && (yh.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ke(t))), typeof r.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof r.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
      var g = r.state;
      g && (typeof g != "object" || Xe(g)) && c("%s.state: must be set to an object or null", i), typeof r.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
    }
  }
  function Sx(e, t) {
    t.updater = Eh, e.stateNode = t, cw(t, e), t._reactInternalInstance = hh;
  }
  function Nx(e, t, n) {
    var r = !1, i = ar, u = ar, m = t.contextType;
    if ("contextType" in t) {
      var g = (
        // Allow null for conditional declaration
        m === null || m !== void 0 && m.$$typeof === $e && m._context === void 0
      );
      if (!g && !wh.has(t)) {
        wh.add(t);
        var x = "";
        m === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? x = " However, it is set to a " + typeof m + "." : m.$$typeof === ge ? x = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ke(t) || "Component", x);
      }
    }
    if (typeof m == "object" && m !== null)
      u = Pt(m);
    else {
      i = Ko(e, t, !0);
      var C = t.contextTypes;
      r = C != null, u = r ? Wo(e, i) : ar;
    }
    var R = new t(n, u);
    if (e.mode & Et) {
      Xt(!0);
      try {
        R = new t(n, u);
      } finally {
        Xt(!1);
      }
    }
    var A = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
    Sx(e, R);
    {
      if (typeof t.getDerivedStateFromProps == "function" && A === null) {
        var _ = Ke(t) || "Component";
        gh.has(_) || (gh.add(_), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, R.state === null ? "null" : "undefined", _));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
        var H = null, J = null, K = null;
        if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), H !== null || J !== null || K !== null) {
          var ae = Ke(t) || "Component", me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          bh.has(ae) || (bh.add(ae), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, me, H !== null ? `
  ` + H : "", J !== null ? `
  ` + J : "", K !== null ? `
  ` + K : ""));
        }
      }
    }
    return r && fb(e, i, u), R;
  }
  function RT(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", _e(e) || "Component"), Eh.enqueueReplaceState(t, t.state, null));
  }
  function wx(e, t, n, r) {
    var i = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== i) {
      {
        var u = _e(e) || "Component";
        vh.has(u) || (vh.add(u), c("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      Eh.enqueueReplaceState(t, t.state, null);
    }
  }
  function Rh(e, t, n, r) {
    ET(e, t, n);
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Pp(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      i.context = Pt(u);
    else {
      var m = Ko(e, t, !0);
      i.context = Wo(e, m);
    }
    {
      if (i.state === n) {
        var g = Ke(t) || "Component";
        Sh.has(g) || (Sh.add(g), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
      }
      e.mode & Et && Ar.recordLegacyContextWarning(e, i), Ar.recordUnsafeLifecycleWarnings(e, i);
    }
    i.state = e.memoizedState;
    var x = t.getDerivedStateFromProps;
    if (typeof x == "function" && (Ch(e, t, x, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (RT(e, i), sf(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function") {
      var C = Ye;
      C |= $i, (e.mode & Gr) !== ve && (C |= Sa), e.flags |= C;
    }
  }
  function jT(e, t, n, r) {
    var i = e.stateNode, u = e.memoizedProps;
    i.props = u;
    var m = i.context, g = t.contextType, x = ar;
    if (typeof g == "object" && g !== null)
      x = Pt(g);
    else {
      var C = Ko(e, t, !0);
      x = Wo(e, C);
    }
    var R = t.getDerivedStateFromProps, A = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !A && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== n || m !== x) && wx(e, i, n, x), Vb();
    var _ = e.memoizedState, H = i.state = _;
    if (sf(e, n, i, r), H = e.memoizedState, u === n && _ === H && !$c() && !lf()) {
      if (typeof i.componentDidMount == "function") {
        var J = Ye;
        J |= $i, (e.mode & Gr) !== ve && (J |= Sa), e.flags |= J;
      }
      return !1;
    }
    typeof R == "function" && (Ch(e, t, R, n), H = e.memoizedState);
    var K = lf() || xx(e, t, u, n, _, H, x);
    if (K) {
      if (!A && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function") {
        var ae = Ye;
        ae |= $i, (e.mode & Gr) !== ve && (ae |= Sa), e.flags |= ae;
      }
    } else {
      if (typeof i.componentDidMount == "function") {
        var me = Ye;
        me |= $i, (e.mode & Gr) !== ve && (me |= Sa), e.flags |= me;
      }
      e.memoizedProps = n, e.memoizedState = H;
    }
    return i.props = n, i.state = H, i.context = x, K;
  }
  function TT(e, t, n, r, i) {
    var u = t.stateNode;
    Ub(e, t);
    var m = t.memoizedProps, g = t.type === t.elementType ? m : Ur(t.type, m);
    u.props = g;
    var x = t.pendingProps, C = u.context, R = n.contextType, A = ar;
    if (typeof R == "object" && R !== null)
      A = Pt(R);
    else {
      var _ = Ko(t, n, !0);
      A = Wo(t, _);
    }
    var H = n.getDerivedStateFromProps, J = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !J && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (m !== x || C !== A) && wx(t, u, r, A), Vb();
    var K = t.memoizedState, ae = u.state = K;
    if (sf(t, r, u, i), ae = t.memoizedState, m === x && K === ae && !$c() && !lf() && !Ot)
      return typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fi), !1;
    typeof H == "function" && (Ch(t, n, H, r), ae = t.memoizedState);
    var me = lf() || xx(t, n, g, r, K, ae, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    Ot;
    return me ? (!J && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, ae, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, ae, A)), typeof u.componentDidUpdate == "function" && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= Fi)) : (typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fi), t.memoizedProps = r, t.memoizedState = ae), u.props = r, u.state = ae, u.context = A, me;
  }
  function io(e, t) {
    return {
      value: e,
      source: t,
      stack: zs(t),
      digest: null
    };
  }
  function jh(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function DT(e, t) {
    return !0;
  }
  function Th(e, t) {
    try {
      var n = DT(e, t);
      if (n === !1)
        return;
      var r = t.value, i = t.source, u = t.stack, m = u !== null ? u : "";
      if (r != null && r._suppressLogging) {
        if (e.tag === p)
          return;
        console.error(r);
      }
      var g = i ? _e(i) : null, x = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", C;
      if (e.tag === b)
        C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var R = _e(e) || "Anonymous";
        C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
      }
      var A = x + `
` + m + `

` + ("" + C);
      console.error(A);
    } catch (_) {
      setTimeout(function() {
        throw _;
      });
    }
  }
  var kT = typeof WeakMap == "function" ? WeakMap : Map;
  function Cx(e, t, n) {
    var r = Oa(pt, n);
    r.tag = _p, r.payload = {
      element: null
    };
    var i = t.value;
    return r.callback = function() {
      Nk(i), Th(e, t);
    }, r;
  }
  function Dh(e, t, n) {
    var r = Oa(pt, n);
    r.tag = _p;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = t.value;
      r.payload = function() {
        return i(u);
      }, r.callback = function() {
        P0(e), Th(e, t);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (r.callback = function() {
      P0(e), Th(e, t), typeof i != "function" && xk(this);
      var x = t.value, C = t.stack;
      this.componentDidCatch(x, {
        componentStack: C !== null ? C : ""
      }), typeof i != "function" && (er(e.lanes, je) || c("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", _e(e) || "Unknown"));
    }), r;
  }
  function Ex(e, t, n) {
    var r = e.pingCache, i;
    if (r === null ? (r = e.pingCache = new kT(), i = /* @__PURE__ */ new Set(), r.set(t, i)) : (i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i))), !i.has(n)) {
      i.add(n);
      var u = wk.bind(null, e, t, n);
      kr && vu(e, n), t.then(u, u);
    }
  }
  function OT(e, t, n, r) {
    var i = e.updateQueue;
    if (i === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(n), e.updateQueue = u;
    } else
      i.add(n);
  }
  function LT(e, t) {
    var n = e.tag;
    if ((e.mode & Be) === ve && (n === h || n === $ || n === Z)) {
      var r = e.alternate;
      r ? (e.updateQueue = r.updateQueue, e.memoizedState = r.memoizedState, e.lanes = r.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function Rx(e) {
    var t = e;
    do {
      if (t.tag === U && dT(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function jx(e, t, n, r, i) {
    if ((e.mode & Be) === ve) {
      if (e === t)
        e.flags |= Dn;
      else {
        if (e.flags |= Ze, n.flags |= Gd, n.flags &= ~(fw | Xs), n.tag === p) {
          var u = n.alternate;
          if (u === null)
            n.tag = ke;
          else {
            var m = Oa(pt, je);
            m.tag = nf, ui(n, m, je);
          }
        }
        n.lanes = Pe(n.lanes, je);
      }
      return e;
    }
    return e.flags |= Dn, e.lanes = i, e;
  }
  function _T(e, t, n, r, i) {
    if (n.flags |= Xs, kr && vu(e, i), r !== null && typeof r == "object" && typeof r.then == "function") {
      var u = r;
      LT(n), rn() && n.mode & Be && yb();
      var m = Rx(t);
      if (m !== null) {
        m.flags &= ~ba, jx(m, t, n, e, i), m.mode & Be && Ex(e, u, i), OT(m, e, u);
        return;
      } else {
        if (!tC(i)) {
          Ex(e, u, i), lv();
          return;
        }
        var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        r = g;
      }
    } else if (rn() && n.mode & Be) {
      yb();
      var x = Rx(t);
      if (x !== null) {
        (x.flags & Dn) === ye && (x.flags |= ba), jx(x, t, n, e, i), Sp(io(r, n));
        return;
      }
    }
    r = io(r, n), dk(r);
    var C = t;
    do {
      switch (C.tag) {
        case b: {
          var R = r;
          C.flags |= Dn;
          var A = ol(i);
          C.lanes = Pe(C.lanes, A);
          var _ = Cx(C, R, A);
          Mp(C, _);
          return;
        }
        case p:
          var H = r, J = C.type, K = C.stateNode;
          if ((C.flags & Ze) === ye && (typeof J.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !R0(K))) {
            C.flags |= Dn;
            var ae = ol(i);
            C.lanes = Pe(C.lanes, ae);
            var me = Dh(C, H, ae);
            Mp(C, me);
            return;
          }
          break;
      }
      C = C.return;
    } while (C !== null);
  }
  function AT() {
    return null;
  }
  var eu = s.ReactCurrentOwner, Vr = !1, kh, tu, Oh, Lh, _h, oo, Ah, Lf, nu;
  kh = {}, tu = {}, Oh = {}, Lh = {}, _h = {}, oo = !1, Ah = {}, Lf = {}, nu = {};
  function kn(e, t, n, r) {
    e === null ? t.child = kb(t, null, n, r) : t.child = Xo(t, e.child, n, r);
  }
  function PT(e, t, n, r) {
    t.child = Xo(t, e.child, null, r), t.child = Xo(t, null, n, r);
  }
  function Tx(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Lr(
        u,
        r,
        // Resolved props
        "prop",
        Ke(n)
      );
    }
    var m = n.render, g = t.ref, x, C;
    es(t, i), el(t);
    {
      if (eu.current = t, Xn(!0), x = os(e, t, m, r, g, i), C = ss(), t.mode & Et) {
        Xt(!0);
        try {
          x = os(e, t, m, r, g, i), C = ss();
        } finally {
          Xt(!1);
        }
      }
      Xn(!1);
    }
    return _o(), e !== null && !Vr ? (Jb(e, t, i), La(e, t, i)) : (rn() && C && hp(t), t.flags |= ko, kn(e, t, x, i), t.child);
  }
  function Dx(e, t, n, r, i) {
    if (e === null) {
      var u = n.type;
      if (zk(u) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var m = u;
        return m = hs(u), t.tag = Z, t.type = m, Uh(t, u), kx(e, t, m, r, i);
      }
      {
        var g = u.propTypes;
        if (g && Lr(
          g,
          r,
          // Resolved props
          "prop",
          Ke(u)
        ), n.defaultProps !== void 0) {
          var x = Ke(u) || "Unknown";
          nu[x] || (c("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", x), nu[x] = !0);
        }
      }
      var C = bv(n.type, null, r, t, t.mode, i);
      return C.ref = t.ref, C.return = t, t.child = C, C;
    }
    {
      var R = n.type, A = R.propTypes;
      A && Lr(
        A,
        r,
        // Resolved props
        "prop",
        Ke(R)
      );
    }
    var _ = e.child, H = Bh(e, i);
    if (!H) {
      var J = _.memoizedProps, K = n.compare;
      if (K = K !== null ? K : Sl, K(J, r) && e.ref === t.ref)
        return La(e, t, i);
    }
    t.flags |= ko;
    var ae = fo(_, r);
    return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
  }
  function kx(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ve) {
        var m = u, g = m._payload, x = m._init;
        try {
          u = x(g);
        } catch {
          u = null;
        }
        var C = u && u.propTypes;
        C && Lr(
          C,
          r,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ke(u)
        );
      }
    }
    if (e !== null) {
      var R = e.memoizedProps;
      if (Sl(R, r) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Vr = !1, t.pendingProps = r = R, Bh(e, i))
          (e.flags & Gd) !== ye && (Vr = !0);
        else return t.lanes = e.lanes, La(e, t, i);
    }
    return Ph(e, t, n, r, i);
  }
  function Ox(e, t, n) {
    var r = t.pendingProps, i = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || We)
      if ((t.mode & Be) === ve) {
        var m = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = m, If(t, n);
      } else if (er(n, Zn)) {
        var A = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = A;
        var _ = u !== null ? u.baseLanes : n;
        If(t, _);
      } else {
        var g = null, x;
        if (u !== null) {
          var C = u.baseLanes;
          x = Pe(C, n);
        } else
          x = n;
        t.lanes = t.childLanes = Zn;
        var R = {
          baseLanes: x,
          cachePool: g,
          transitions: null
        };
        return t.memoizedState = R, t.updateQueue = null, If(t, x), null;
      }
    else {
      var H;
      u !== null ? (H = Pe(u.baseLanes, n), t.memoizedState = null) : H = n, If(t, H);
    }
    return kn(e, t, i, n), t.child;
  }
  function MT(e, t, n) {
    var r = t.pendingProps;
    return kn(e, t, r, n), t.child;
  }
  function UT(e, t, n) {
    var r = t.pendingProps.children;
    return kn(e, t, r, n), t.child;
  }
  function VT(e, t, n) {
    {
      t.flags |= Ye;
      {
        var r = t.stateNode;
        r.effectDuration = 0, r.passiveEffectDuration = 0;
      }
    }
    var i = t.pendingProps, u = i.children;
    return kn(e, t, u, n), t.child;
  }
  function Lx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Qa, t.flags |= qd);
  }
  function Ph(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Lr(
        u,
        r,
        // Resolved props
        "prop",
        Ke(n)
      );
    }
    var m;
    {
      var g = Ko(t, n, !0);
      m = Wo(t, g);
    }
    var x, C;
    es(t, i), el(t);
    {
      if (eu.current = t, Xn(!0), x = os(e, t, n, r, m, i), C = ss(), t.mode & Et) {
        Xt(!0);
        try {
          x = os(e, t, n, r, m, i), C = ss();
        } finally {
          Xt(!1);
        }
      }
      Xn(!1);
    }
    return _o(), e !== null && !Vr ? (Jb(e, t, i), La(e, t, i)) : (rn() && C && hp(t), t.flags |= ko, kn(e, t, x, i), t.child);
  }
  function _x(e, t, n, r, i) {
    {
      switch (tO(t)) {
        case !1: {
          var u = t.stateNode, m = t.type, g = new m(t.memoizedProps, u.context), x = g.state;
          u.updater.enqueueSetState(u, x, null);
          break;
        }
        case !0: {
          t.flags |= Ze, t.flags |= Dn;
          var C = new Error("Simulated error coming from DevTools"), R = ol(i);
          t.lanes = Pe(t.lanes, R);
          var A = Dh(t, io(C, t), R);
          Mp(t, A);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var _ = n.propTypes;
        _ && Lr(
          _,
          r,
          // Resolved props
          "prop",
          Ke(n)
        );
      }
    }
    var H;
    Xr(n) ? (H = !0, Bc(t)) : H = !1, es(t, i);
    var J = t.stateNode, K;
    J === null ? (Af(e, t), Nx(t, n, r), Rh(t, n, r, i), K = !0) : e === null ? K = jT(t, n, r, i) : K = TT(e, t, n, r, i);
    var ae = Mh(e, t, n, K, H, i);
    {
      var me = t.stateNode;
      K && me.props !== r && (oo || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", _e(t) || "a component"), oo = !0);
    }
    return ae;
  }
  function Mh(e, t, n, r, i, u) {
    Lx(e, t);
    var m = (t.flags & Ze) !== ye;
    if (!r && !m)
      return i && pb(t, n, !1), La(e, t, u);
    var g = t.stateNode;
    eu.current = t;
    var x;
    if (m && typeof n.getDerivedStateFromError != "function")
      x = null, gx();
    else {
      el(t);
      {
        if (Xn(!0), x = g.render(), t.mode & Et) {
          Xt(!0);
          try {
            g.render();
          } finally {
            Xt(!1);
          }
        }
        Xn(!1);
      }
      _o();
    }
    return t.flags |= ko, e !== null && m ? PT(e, t, x, u) : kn(e, t, x, u), t.memoizedState = g.state, i && pb(t, n, !0), t.child;
  }
  function Ax(e) {
    var t = e.stateNode;
    t.pendingContext ? db(e, t.pendingContext, t.pendingContext !== t.context) : t.context && db(e, t.context, !1), Up(e, t.containerInfo);
  }
  function FT(e, t, n) {
    if (Ax(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var r = t.pendingProps, i = t.memoizedState, u = i.element;
    Ub(e, t), sf(t, r, null, n);
    var m = t.memoizedState;
    t.stateNode;
    var g = m.element;
    if (i.isDehydrated) {
      var x = {
        element: g,
        isDehydrated: !1,
        cache: m.cache,
        pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
        transitions: m.transitions
      }, C = t.updateQueue;
      if (C.baseState = x, t.memoizedState = x, t.flags & ba) {
        var R = io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return Px(e, t, g, n, R);
      } else if (g !== u) {
        var A = io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return Px(e, t, g, n, A);
      } else {
        Hj(t);
        var _ = kb(t, null, g, n);
        t.child = _;
        for (var H = _; H; )
          H.flags = H.flags & ~At | xa, H = H.sibling;
      }
    } else {
      if (Qo(), g === u)
        return La(e, t, n);
      kn(e, t, g, n);
    }
    return t.child;
  }
  function Px(e, t, n, r, i) {
    return Qo(), Sp(i), t.flags |= ba, kn(e, t, n, r), t.child;
  }
  function zT(e, t, n) {
    $b(t), e === null && xp(t);
    var r = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = i.children, g = tp(r, i);
    return g ? m = null : u !== null && tp(r, u) && (t.flags |= Qs), Lx(e, t), kn(e, t, m, n), t.child;
  }
  function $T(e, t) {
    return e === null && xp(t), null;
  }
  function HT(e, t, n, r) {
    Af(e, t);
    var i = t.pendingProps, u = n, m = u._payload, g = u._init, x = g(m);
    t.type = x;
    var C = t.tag = $k(x), R = Ur(x, i), A;
    switch (C) {
      case h:
        return Uh(t, x), t.type = x = hs(x), A = Ph(null, t, x, R, r), A;
      case p:
        return t.type = x = mv(x), A = _x(null, t, x, R, r), A;
      case $:
        return t.type = x = pv(x), A = Tx(null, t, x, R, r), A;
      case I: {
        if (t.type !== t.elementType) {
          var _ = x.propTypes;
          _ && Lr(
            _,
            R,
            // Resolved for outer only
            "prop",
            Ke(x)
          );
        }
        return A = Dx(
          null,
          t,
          x,
          Ur(x.type, R),
          // The inner type can have defaults too
          r
        ), A;
      }
    }
    var H = "";
    throw x !== null && typeof x == "object" && x.$$typeof === Ve && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + x + ". " + ("Lazy element type must resolve to a class or function." + H));
  }
  function BT(e, t, n, r, i) {
    Af(e, t), t.tag = p;
    var u;
    return Xr(n) ? (u = !0, Bc(t)) : u = !1, es(t, i), Nx(t, n, r), Rh(t, n, r, i), Mh(null, t, n, !0, u, i);
  }
  function JT(e, t, n, r) {
    Af(e, t);
    var i = t.pendingProps, u;
    {
      var m = Ko(t, n, !1);
      u = Wo(t, m);
    }
    es(t, r);
    var g, x;
    el(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var C = Ke(n) || "Unknown";
        kh[C] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), kh[C] = !0);
      }
      t.mode & Et && Ar.recordLegacyContextWarning(t, null), Xn(!0), eu.current = t, g = os(null, t, n, i, u, r), x = ss(), Xn(!1);
    }
    if (_o(), t.flags |= ko, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
      var R = Ke(n) || "Unknown";
      tu[R] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), tu[R] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
    ) {
      {
        var A = Ke(n) || "Unknown";
        tu[A] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), tu[A] = !0);
      }
      t.tag = p, t.memoizedState = null, t.updateQueue = null;
      var _ = !1;
      return Xr(n) ? (_ = !0, Bc(t)) : _ = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, Pp(t), Sx(t, g), Rh(t, n, i, r), Mh(null, t, n, !0, _, r);
    } else {
      if (t.tag = h, t.mode & Et) {
        Xt(!0);
        try {
          g = os(null, t, n, i, u, r), x = ss();
        } finally {
          Xt(!1);
        }
      }
      return rn() && x && hp(t), kn(null, t, g, r), Uh(t, n), t.child;
    }
  }
  function Uh(e, t) {
    {
      if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", r = Ka();
        r && (n += `

Check the render method of \`` + r + "`.");
        var i = r || "", u = e._debugSource;
        u && (i = u.fileName + ":" + u.lineNumber), _h[i] || (_h[i] = !0, c("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var m = Ke(t) || "Unknown";
        nu[m] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), nu[m] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var g = Ke(t) || "Unknown";
        Lh[g] || (c("%s: Function components do not support getDerivedStateFromProps.", g), Lh[g] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var x = Ke(t) || "Unknown";
        Oh[x] || (c("%s: Function components do not support contextType.", x), Oh[x] = !0);
      }
    }
  }
  var Vh = {
    dehydrated: null,
    treeContext: null,
    retryLane: Zt
  };
  function Fh(e) {
    return {
      baseLanes: e,
      cachePool: AT(),
      transitions: null
    };
  }
  function IT(e, t) {
    var n = null;
    return {
      baseLanes: Pe(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function YT(e, t, n, r) {
    if (t !== null) {
      var i = t.memoizedState;
      if (i === null)
        return !1;
    }
    return zp(e, Il);
  }
  function KT(e, t) {
    return dc(e.childLanes, t);
  }
  function Mx(e, t, n) {
    var r = t.pendingProps;
    nO(t) && (t.flags |= Ze);
    var i = Pr.current, u = !1, m = (t.flags & Ze) !== ye;
    if (m || YT(i, e) ? (u = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (i = fT(i, Bb)), i = ns(i), fi(t, i), e === null) {
      xp(t);
      var g = t.memoizedState;
      if (g !== null) {
        var x = g.dehydrated;
        if (x !== null)
          return XT(t, x);
      }
      var C = r.children, R = r.fallback;
      if (u) {
        var A = WT(t, C, R, n), _ = t.child;
        return _.memoizedState = Fh(n), t.memoizedState = Vh, A;
      } else
        return zh(t, C);
    } else {
      var H = e.memoizedState;
      if (H !== null) {
        var J = H.dehydrated;
        if (J !== null)
          return ZT(e, t, m, r, J, H, n);
      }
      if (u) {
        var K = r.fallback, ae = r.children, me = qT(e, t, ae, K, n), fe = t.child, Ie = e.child.memoizedState;
        return fe.memoizedState = Ie === null ? Fh(n) : IT(Ie, n), fe.childLanes = KT(e, n), t.memoizedState = Vh, me;
      } else {
        var Fe = r.children, F = GT(e, t, Fe, n);
        return t.memoizedState = null, F;
      }
    }
  }
  function zh(e, t, n) {
    var r = e.mode, i = {
      mode: "visible",
      children: t
    }, u = $h(i, r);
    return u.return = e, e.child = u, u;
  }
  function WT(e, t, n, r) {
    var i = e.mode, u = e.child, m = {
      mode: "hidden",
      children: t
    }, g, x;
    return (i & Be) === ve && u !== null ? (g = u, g.childLanes = q, g.pendingProps = m, e.mode & ot && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), x = bi(n, i, r, null)) : (g = $h(m, i), x = bi(n, i, r, null)), g.return = e, x.return = e, g.sibling = x, e.child = g, x;
  }
  function $h(e, t, n) {
    return U0(e, t, q, null);
  }
  function Ux(e, t) {
    return fo(e, t);
  }
  function GT(e, t, n, r) {
    var i = e.child, u = i.sibling, m = Ux(i, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Be) === ve && (m.lanes = r), m.return = t, m.sibling = null, u !== null) {
      var g = t.deletions;
      g === null ? (t.deletions = [u], t.flags |= Vi) : g.push(u);
    }
    return t.child = m, m;
  }
  function qT(e, t, n, r, i) {
    var u = t.mode, m = e.child, g = m.sibling, x = {
      mode: "hidden",
      children: n
    }, C;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & Be) === ve && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== m
    ) {
      var R = t.child;
      C = R, C.childLanes = q, C.pendingProps = x, t.mode & ot && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = m.selfBaseDuration, C.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
    } else
      C = Ux(m, x), C.subtreeFlags = m.subtreeFlags & Na;
    var A;
    return g !== null ? A = fo(g, r) : (A = bi(r, u, i, null), A.flags |= At), A.return = t, C.return = t, C.sibling = A, t.child = C, A;
  }
  function _f(e, t, n, r) {
    r !== null && Sp(r), Xo(t, e.child, null, n);
    var i = t.pendingProps, u = i.children, m = zh(t, u);
    return m.flags |= At, t.memoizedState = null, m;
  }
  function QT(e, t, n, r, i) {
    var u = t.mode, m = {
      mode: "visible",
      children: n
    }, g = $h(m, u), x = bi(r, u, i, null);
    return x.flags |= At, g.return = t, x.return = t, g.sibling = x, t.child = g, (t.mode & Be) !== ve && Xo(t, e.child, null, i), x;
  }
  function XT(e, t, n) {
    return (e.mode & Be) === ve ? (c("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : ip(t) ? e.lanes = Ji : e.lanes = Zn, null;
  }
  function ZT(e, t, n, r, i, u, m) {
    if (n)
      if (t.flags & ba) {
        t.flags &= ~ba;
        var F = jh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return _f(e, t, m, F);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Ze, null;
        var W = r.children, z = r.fallback, X = QT(e, t, W, z, m), le = t.child;
        return le.memoizedState = Fh(m), t.memoizedState = Vh, X;
      }
    else {
      if (zj(), (t.mode & Be) === ve)
        return _f(
          e,
          t,
          m,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (ip(i)) {
        var g, x, C;
        {
          var R = rj(i);
          g = R.digest, x = R.message, C = R.stack;
        }
        var A;
        x ? A = new Error(x) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var _ = jh(A, g, C);
        return _f(e, t, m, _);
      }
      var H = er(m, e.childLanes);
      if (Vr || H) {
        var J = Jf();
        if (J !== null) {
          var K = uC(J, m);
          if (K !== Zt && K !== u.retryLane) {
            u.retryLane = K;
            var ae = pt;
            $n(e, K), Yt(J, e, K, ae);
          }
        }
        lv();
        var me = jh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return _f(e, t, m, me);
      } else if (ob(i)) {
        t.flags |= Ze, t.child = e.child;
        var fe = Ck.bind(null, e);
        return aj(i, fe), null;
      } else {
        Bj(t, i, u.treeContext);
        var Ie = r.children, Fe = zh(t, Ie);
        return Fe.flags |= xa, Fe;
      }
    }
  }
  function Vx(e, t, n) {
    e.lanes = Pe(e.lanes, t);
    var r = e.alternate;
    r !== null && (r.lanes = Pe(r.lanes, t)), Op(e.return, t, n);
  }
  function eD(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === U) {
        var i = r.memoizedState;
        i !== null && Vx(r, n, e);
      } else if (r.tag === be)
        Vx(r, n, e);
      else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e)
        return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }
  function tD(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate;
      r !== null && ff(r) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function nD(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Ah[e])
      if (Ah[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            c('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            c('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            c('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        c('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function rD(e, t) {
    e !== void 0 && !Lf[e] && (e !== "collapsed" && e !== "hidden" ? (Lf[e] = !0, c('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Lf[e] = !0, c('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Fx(e, t) {
    {
      var n = Xe(e), r = !n && typeof ma(e) == "function";
      if (n || r) {
        var i = n ? "array" : "iterable";
        return c("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", i, t, i), !1;
      }
    }
    return !0;
  }
  function aD(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Xe(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Fx(e[n], n))
            return;
      } else {
        var r = ma(e);
        if (typeof r == "function") {
          var i = r.call(e);
          if (i)
            for (var u = i.next(), m = 0; !u.done; u = i.next()) {
              if (!Fx(u.value, m))
                return;
              m++;
            }
        } else
          c('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Hh(e, t, n, r, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = i);
  }
  function zx(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, u = r.tail, m = r.children;
    nD(i), rD(u, i), aD(m, i), kn(e, t, m, n);
    var g = Pr.current, x = zp(g, Il);
    if (x)
      g = $p(g, Il), t.flags |= Ze;
    else {
      var C = e !== null && (e.flags & Ze) !== ye;
      C && eD(t, t.child, n), g = ns(g);
    }
    if (fi(t, g), (t.mode & Be) === ve)
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards": {
          var R = tD(t.child), A;
          R === null ? (A = t.child, t.child = null) : (A = R.sibling, R.sibling = null), Hh(
            t,
            !1,
            // isBackwards
            A,
            R,
            u
          );
          break;
        }
        case "backwards": {
          var _ = null, H = t.child;
          for (t.child = null; H !== null; ) {
            var J = H.alternate;
            if (J !== null && ff(J) === null) {
              t.child = H;
              break;
            }
            var K = H.sibling;
            H.sibling = _, _ = H, H = K;
          }
          Hh(
            t,
            !0,
            // isBackwards
            _,
            null,
            // last
            u
          );
          break;
        }
        case "together": {
          Hh(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function iD(e, t, n) {
    Up(t, t.stateNode.containerInfo);
    var r = t.pendingProps;
    return e === null ? t.child = Xo(t, null, r, n) : kn(e, t, r, n), t.child;
  }
  var $x = !1;
  function oD(e, t, n) {
    var r = t.type, i = r._context, u = t.pendingProps, m = t.memoizedProps, g = u.value;
    {
      "value" in u || $x || ($x = !0, c("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var x = t.type.propTypes;
      x && Lr(x, u, "prop", "Context.Provider");
    }
    if (_b(t, i, g), m !== null) {
      var C = m.value;
      if (rr(C, g)) {
        if (m.children === u.children && !$c())
          return La(e, t, n);
      } else
        nT(t, i, n);
    }
    var R = u.children;
    return kn(e, t, R, n), t.child;
  }
  var Hx = !1;
  function sD(e, t, n) {
    var r = t.type;
    r._context === void 0 ? r !== r.Consumer && (Hx || (Hx = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
    var i = t.pendingProps, u = i.children;
    typeof u != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), es(t, n);
    var m = Pt(r);
    el(t);
    var g;
    return eu.current = t, Xn(!0), g = u(m), Xn(!1), _o(), t.flags |= ko, kn(e, t, g, n), t.child;
  }
  function ru() {
    Vr = !0;
  }
  function Af(e, t) {
    (t.mode & Be) === ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= At);
  }
  function La(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), gx(), hu(t.lanes), er(n, t.childLanes) ? (eT(e, t), t.child) : null;
  }
  function lD(e, t, n) {
    {
      var r = t.return;
      if (r === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === r.child)
        r.child = n;
      else {
        var i = r.child;
        if (i === null)
          throw new Error("Expected parent to have a child.");
        for (; i.sibling !== t; )
          if (i = i.sibling, i === null)
            throw new Error("Expected to find the previous sibling.");
        i.sibling = n;
      }
      var u = r.deletions;
      return u === null ? (r.deletions = [e], r.flags |= Vi) : u.push(e), n.flags |= At, n;
    }
  }
  function Bh(e, t) {
    var n = e.lanes;
    return !!er(n, t);
  }
  function uD(e, t, n) {
    switch (t.tag) {
      case b:
        Ax(t), t.stateNode, Qo();
        break;
      case E:
        $b(t);
        break;
      case p: {
        var r = t.type;
        Xr(r) && Bc(t);
        break;
      }
      case S:
        Up(t, t.stateNode.containerInfo);
        break;
      case L: {
        var i = t.memoizedProps.value, u = t.type._context;
        _b(t, u, i);
        break;
      }
      case k:
        {
          var m = er(n, t.childLanes);
          m && (t.flags |= Ye);
          {
            var g = t.stateNode;
            g.effectDuration = 0, g.passiveEffectDuration = 0;
          }
        }
        break;
      case U: {
        var x = t.memoizedState;
        if (x !== null) {
          if (x.dehydrated !== null)
            return fi(t, ns(Pr.current)), t.flags |= Ze, null;
          var C = t.child, R = C.childLanes;
          if (er(n, R))
            return Mx(e, t, n);
          fi(t, ns(Pr.current));
          var A = La(e, t, n);
          return A !== null ? A.sibling : null;
        } else
          fi(t, ns(Pr.current));
        break;
      }
      case be: {
        var _ = (e.flags & Ze) !== ye, H = er(n, t.childLanes);
        if (_) {
          if (H)
            return zx(e, t, n);
          t.flags |= Ze;
        }
        var J = t.memoizedState;
        if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), fi(t, Pr.current), H)
          break;
        return null;
      }
      case pe:
      case we:
        return t.lanes = q, Ox(e, t, n);
    }
    return La(e, t, n);
  }
  function Bx(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return lD(e, t, bv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var r = e.memoizedProps, i = t.pendingProps;
      if (r !== i || $c() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Vr = !0;
      else {
        var u = Bh(e, n);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Ze) === ye)
          return Vr = !1, uD(e, t, n);
        (e.flags & Gd) !== ye ? Vr = !0 : Vr = !1;
      }
    } else if (Vr = !1, rn() && Aj(t)) {
      var m = t.index, g = Pj();
      gb(t, g, m);
    }
    switch (t.lanes = q, t.tag) {
      case v:
        return JT(e, t, t.type, n);
      case Le: {
        var x = t.elementType;
        return HT(e, t, x, n);
      }
      case h: {
        var C = t.type, R = t.pendingProps, A = t.elementType === C ? R : Ur(C, R);
        return Ph(e, t, C, A, n);
      }
      case p: {
        var _ = t.type, H = t.pendingProps, J = t.elementType === _ ? H : Ur(_, H);
        return _x(e, t, _, J, n);
      }
      case b:
        return FT(e, t, n);
      case E:
        return zT(e, t, n);
      case j:
        return $T(e, t);
      case U:
        return Mx(e, t, n);
      case S:
        return iD(e, t, n);
      case $: {
        var K = t.type, ae = t.pendingProps, me = t.elementType === K ? ae : Ur(K, ae);
        return Tx(e, t, K, me, n);
      }
      case M:
        return MT(e, t, n);
      case D:
        return UT(e, t, n);
      case k:
        return VT(e, t, n);
      case L:
        return oD(e, t, n);
      case P:
        return sD(e, t, n);
      case I: {
        var fe = t.type, Ie = t.pendingProps, Fe = Ur(fe, Ie);
        if (t.type !== t.elementType) {
          var F = fe.propTypes;
          F && Lr(
            F,
            Fe,
            // Resolved for outer only
            "prop",
            Ke(fe)
          );
        }
        return Fe = Ur(fe.type, Fe), Dx(e, t, fe, Fe, n);
      }
      case Z:
        return kx(e, t, t.type, t.pendingProps, n);
      case ke: {
        var W = t.type, z = t.pendingProps, X = t.elementType === W ? z : Ur(W, z);
        return BT(e, t, W, X, n);
      }
      case be:
        return zx(e, t, n);
      case nt:
        break;
      case pe:
        return Ox(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function ls(e) {
    e.flags |= Ye;
  }
  function Jx(e) {
    e.flags |= Qa, e.flags |= qd;
  }
  var Ix, Jh, Yx, Kx;
  Ix = function(e, t, n, r) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === E || i.tag === j)
        OR(e, i.stateNode);
      else if (i.tag !== S) {
        if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
      }
      if (i === t)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t)
          return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Jh = function(e, t) {
  }, Yx = function(e, t, n, r, i) {
    var u = e.memoizedProps;
    if (u !== r) {
      var m = t.stateNode, g = Vp(), x = _R(m, n, u, r, i, g);
      t.updateQueue = x, x && ls(t);
    }
  }, Kx = function(e, t, n, r) {
    n !== r && ls(t);
  };
  function au(e, t) {
    if (!rn())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        }
        case "collapsed": {
          for (var i = e.tail, u = null; i !== null; )
            i.alternate !== null && (u = i), i = i.sibling;
          u === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : u.sibling = null;
          break;
        }
      }
  }
  function on(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = q, r = ye;
    if (t) {
      if ((e.mode & ot) !== ve) {
        for (var x = e.selfBaseDuration, C = e.child; C !== null; )
          n = Pe(n, Pe(C.lanes, C.childLanes)), r |= C.subtreeFlags & Na, r |= C.flags & Na, x += C.treeBaseDuration, C = C.sibling;
        e.treeBaseDuration = x;
      } else
        for (var R = e.child; R !== null; )
          n = Pe(n, Pe(R.lanes, R.childLanes)), r |= R.subtreeFlags & Na, r |= R.flags & Na, R.return = e, R = R.sibling;
      e.subtreeFlags |= r;
    } else {
      if ((e.mode & ot) !== ve) {
        for (var i = e.actualDuration, u = e.selfBaseDuration, m = e.child; m !== null; )
          n = Pe(n, Pe(m.lanes, m.childLanes)), r |= m.subtreeFlags, r |= m.flags, i += m.actualDuration, u += m.treeBaseDuration, m = m.sibling;
        e.actualDuration = i, e.treeBaseDuration = u;
      } else
        for (var g = e.child; g !== null; )
          n = Pe(n, Pe(g.lanes, g.childLanes)), r |= g.subtreeFlags, r |= g.flags, g.return = e, g = g.sibling;
      e.subtreeFlags |= r;
    }
    return e.childLanes = n, t;
  }
  function cD(e, t, n) {
    if (Wj() && (t.mode & Be) !== ve && (t.flags & Ze) === ye)
      return Cb(t), Qo(), t.flags |= ba | Xs | Dn, !1;
    var r = Wc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (Yj(t), on(t), (t.mode & ot) !== ve) {
          var i = n !== null;
          if (i) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Qo(), (t.flags & Ze) === ye && (t.memoizedState = null), t.flags |= Ye, on(t), (t.mode & ot) !== ve) {
          var m = n !== null;
          if (m) {
            var g = t.child;
            g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return Eb(), !0;
  }
  function Wx(e, t, n) {
    var r = t.pendingProps;
    switch (vp(t), t.tag) {
      case v:
      case Le:
      case Z:
      case h:
      case $:
      case M:
      case D:
      case k:
      case P:
      case I:
        return on(t), null;
      case p: {
        var i = t.type;
        return Xr(i) && Hc(t), on(t), null;
      }
      case b: {
        var u = t.stateNode;
        if (ts(t), dp(t), Bp(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var m = Wc(t);
          if (m)
            ls(t);
          else if (e !== null) {
            var g = e.memoizedState;
            // Check if this is a client root
            (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & ba) !== ye) && (t.flags |= Fi, Eb());
          }
        }
        return Jh(e, t), on(t), null;
      }
      case E: {
        Fp(t);
        var x = zb(), C = t.type;
        if (e !== null && t.stateNode != null)
          Yx(e, t, C, r, x), e.ref !== t.ref && Jx(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return on(t), null;
          }
          var R = Vp(), A = Wc(t);
          if (A)
            Jj(t, x, R) && ls(t);
          else {
            var _ = kR(C, r, x, R, t);
            Ix(_, t, !1, !1), t.stateNode = _, LR(_, C, r, x) && ls(t);
          }
          t.ref !== null && Jx(t);
        }
        return on(t), null;
      }
      case j: {
        var H = r;
        if (e && t.stateNode != null) {
          var J = e.memoizedProps;
          Kx(e, t, J, H);
        } else {
          if (typeof H != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var K = zb(), ae = Vp(), me = Wc(t);
          me ? Ij(t) && ls(t) : t.stateNode = AR(H, K, ae, t);
        }
        return on(t), null;
      }
      case U: {
        rs(t);
        var fe = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ie = cD(e, t, fe);
          if (!Ie)
            return t.flags & Dn ? t : null;
        }
        if ((t.flags & Ze) !== ye)
          return t.lanes = n, (t.mode & ot) !== ve && ph(t), t;
        var Fe = fe !== null, F = e !== null && e.memoizedState !== null;
        if (Fe !== F && Fe) {
          var W = t.child;
          if (W.flags |= zi, (t.mode & Be) !== ve) {
            var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !pn);
            z || zp(Pr.current, Bb) ? fk() : lv();
          }
        }
        var X = t.updateQueue;
        if (X !== null && (t.flags |= Ye), on(t), (t.mode & ot) !== ve && Fe) {
          var le = t.child;
          le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
        }
        return null;
      }
      case S:
        return ts(t), Jh(e, t), e === null && jj(t.stateNode.containerInfo), on(t), null;
      case L:
        var ie = t.type._context;
        return kp(ie, t), on(t), null;
      case ke: {
        var Se = t.type;
        return Xr(Se) && Hc(t), on(t), null;
      }
      case be: {
        rs(t);
        var De = t.memoizedState;
        if (De === null)
          return on(t), null;
        var lt = (t.flags & Ze) !== ye, Ge = De.rendering;
        if (Ge === null)
          if (lt)
            au(De, !1);
          else {
            var kt = mk() && (e === null || (e.flags & Ze) === ye);
            if (!kt)
              for (var qe = t.child; qe !== null; ) {
                var Rt = ff(qe);
                if (Rt !== null) {
                  lt = !0, t.flags |= Ze, au(De, !1);
                  var Cn = Rt.updateQueue;
                  return Cn !== null && (t.updateQueue = Cn, t.flags |= Ye), t.subtreeFlags = ye, tT(t, n), fi(t, $p(Pr.current, Il)), t.child;
                }
                qe = qe.sibling;
              }
            De.tail !== null && Qt() > h0() && (t.flags |= Ze, lt = !0, au(De, !1), t.lanes = Kg);
          }
        else {
          if (!lt) {
            var fn = ff(Ge);
            if (fn !== null) {
              t.flags |= Ze, lt = !0;
              var or = fn.updateQueue;
              if (or !== null && (t.updateQueue = or, t.flags |= Ye), au(De, !0), De.tail === null && De.tailMode === "hidden" && !Ge.alternate && !rn())
                return on(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Qt() * 2 - De.renderingStartTime > h0() && n !== Zn && (t.flags |= Ze, lt = !0, au(De, !1), t.lanes = Kg);
          }
          if (De.isBackwards)
            Ge.sibling = t.child, t.child = Ge;
          else {
            var _n = De.last;
            _n !== null ? _n.sibling = Ge : t.child = Ge, De.last = Ge;
          }
        }
        if (De.tail !== null) {
          var An = De.tail;
          De.rendering = An, De.tail = An.sibling, De.renderingStartTime = Qt(), An.sibling = null;
          var En = Pr.current;
          return lt ? En = $p(En, Il) : En = ns(En), fi(t, En), An;
        }
        return on(t), null;
      }
      case nt:
        break;
      case pe:
      case we: {
        sv(t);
        var Ua = t.memoizedState, vs = Ua !== null;
        if (e !== null) {
          var xu = e.memoizedState, oa = xu !== null;
          oa !== vs && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !We && (t.flags |= zi);
        }
        return !vs || (t.mode & Be) === ve ? on(t) : er(ia, Zn) && (on(t), t.subtreeFlags & (At | Ye) && (t.flags |= zi)), null;
      }
      case Ce:
        return null;
      case et:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function fD(e, t, n) {
    switch (vp(t), t.tag) {
      case p: {
        var r = t.type;
        Xr(r) && Hc(t);
        var i = t.flags;
        return i & Dn ? (t.flags = i & ~Dn | Ze, (t.mode & ot) !== ve && ph(t), t) : null;
      }
      case b: {
        t.stateNode, ts(t), dp(t), Bp();
        var u = t.flags;
        return (u & Dn) !== ye && (u & Ze) === ye ? (t.flags = u & ~Dn | Ze, t) : null;
      }
      case E:
        return Fp(t), null;
      case U: {
        rs(t);
        var m = t.memoizedState;
        if (m !== null && m.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Qo();
        }
        var g = t.flags;
        return g & Dn ? (t.flags = g & ~Dn | Ze, (t.mode & ot) !== ve && ph(t), t) : null;
      }
      case be:
        return rs(t), null;
      case S:
        return ts(t), null;
      case L:
        var x = t.type._context;
        return kp(x, t), null;
      case pe:
      case we:
        return sv(t), null;
      case Ce:
        return null;
      default:
        return null;
    }
  }
  function Gx(e, t, n) {
    switch (vp(t), t.tag) {
      case p: {
        var r = t.type.childContextTypes;
        r != null && Hc(t);
        break;
      }
      case b: {
        t.stateNode, ts(t), dp(t), Bp();
        break;
      }
      case E: {
        Fp(t);
        break;
      }
      case S:
        ts(t);
        break;
      case U:
        rs(t);
        break;
      case be:
        rs(t);
        break;
      case L:
        var i = t.type._context;
        kp(i, t);
        break;
      case pe:
      case we:
        sv(t);
        break;
    }
  }
  var qx = null;
  qx = /* @__PURE__ */ new Set();
  var Pf = !1, sn = !1, dD = typeof WeakSet == "function" ? WeakSet : Set, ue = null, us = null, cs = null;
  function mD(e) {
    Yd(null, function() {
      throw e;
    }), Kd();
  }
  var pD = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ot)
      try {
        ra(), t.componentWillUnmount();
      } finally {
        na(e);
      }
    else
      t.componentWillUnmount();
  };
  function Qx(e, t) {
    try {
      pi(zt, e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function Ih(e, t, n) {
    try {
      pD(e, n);
    } catch (r) {
      dt(e, t, r);
    }
  }
  function hD(e, t, n) {
    try {
      n.componentDidMount();
    } catch (r) {
      dt(e, t, r);
    }
  }
  function Xx(e, t) {
    try {
      e0(e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function fs(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var r;
        try {
          if (Nr && wr && e.mode & ot)
            try {
              ra(), r = n(null);
            } finally {
              na(e);
            }
          else
            r = n(null);
        } catch (i) {
          dt(e, t, i);
        }
        typeof r == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", _e(e));
      } else
        n.current = null;
  }
  function Mf(e, t, n) {
    try {
      n();
    } catch (r) {
      dt(e, t, r);
    }
  }
  var Zx = !1;
  function vD(e, t) {
    TR(e.containerInfo), ue = t, gD();
    var n = Zx;
    return Zx = !1, n;
  }
  function gD() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      (e.subtreeFlags & Xd) !== ye && t !== null ? (t.return = e, ue = t) : yD();
    }
  }
  function yD() {
    for (; ue !== null; ) {
      var e = ue;
      St(e);
      try {
        bD(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      qt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function bD(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Fi) !== ye) {
      switch (St(e), e.tag) {
        case h:
        case $:
        case Z:
          break;
        case p: {
          if (t !== null) {
            var r = t.memoizedProps, i = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !oo && (u.props !== e.memoizedProps && c("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(e) || "instance"), u.state !== e.memoizedState && c("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(e) || "instance"));
            var m = u.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Ur(e.type, r), i);
            {
              var g = qx;
              m === void 0 && !g.has(e.type) && (g.add(e.type), c("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", _e(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        }
        case b: {
          {
            var x = e.stateNode;
            ZR(x.containerInfo);
          }
          break;
        }
        case E:
        case j:
        case S:
        case ke:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      qt();
    }
  }
  function Fr(e, t, n) {
    var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
    if (i !== null) {
      var u = i.next, m = u;
      do {
        if ((m.tag & e) === e) {
          var g = m.destroy;
          m.destroy = void 0, g !== void 0 && ((e & an) !== Hn ? Aw(t) : (e & zt) !== Hn && Hg(t), (e & Zr) !== Hn && gu(!0), Mf(t, n, g), (e & Zr) !== Hn && gu(!1), (e & an) !== Hn ? Pw() : (e & zt) !== Hn && Bg());
        }
        m = m.next;
      } while (m !== u);
    }
  }
  function pi(e, t) {
    var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
    if (r !== null) {
      var i = r.next, u = i;
      do {
        if ((u.tag & e) === e) {
          (e & an) !== Hn ? Lw(t) : (e & zt) !== Hn && Mw(t);
          var m = u.create;
          (e & Zr) !== Hn && gu(!0), u.destroy = m(), (e & Zr) !== Hn && gu(!1), (e & an) !== Hn ? _w() : (e & zt) !== Hn && Uw();
          {
            var g = u.destroy;
            if (g !== void 0 && typeof g != "function") {
              var x = void 0;
              (u.tag & zt) !== ye ? x = "useLayoutEffect" : (u.tag & Zr) !== ye ? x = "useInsertionEffect" : x = "useEffect";
              var C = void 0;
              g === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? C = `

It looks like you wrote ` + x + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + x + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + g, c("%s must not return anything besides a function, which is used for clean-up.%s", x, C);
            }
          }
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function xD(e, t) {
    if ((t.flags & Ye) !== ye)
      switch (t.tag) {
        case k: {
          var n = t.stateNode.passiveEffectDuration, r = t.memoizedProps, i = r.id, u = r.onPostCommit, m = hx(), g = t.alternate === null ? "mount" : "update";
          px() && (g = "nested-update"), typeof u == "function" && u(i, g, n, m);
          var x = t.return;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case b:
                var C = x.stateNode;
                C.passiveEffectDuration += n;
                break e;
              case k:
                var R = x.stateNode;
                R.passiveEffectDuration += n;
                break e;
            }
            x = x.return;
          }
          break;
        }
      }
  }
  function SD(e, t, n, r) {
    if ((n.flags & Zs) !== ye)
      switch (n.tag) {
        case h:
        case $:
        case Z: {
          if (!sn)
            if (n.mode & ot)
              try {
                ra(), pi(zt | Ft, n);
              } finally {
                na(n);
              }
            else
              pi(zt | Ft, n);
          break;
        }
        case p: {
          var i = n.stateNode;
          if (n.flags & Ye && !sn)
            if (t === null)
              if (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(n) || "instance")), n.mode & ot)
                try {
                  ra(), i.componentDidMount();
                } finally {
                  na(n);
                }
              else
                i.componentDidMount();
            else {
              var u = n.elementType === n.type ? t.memoizedProps : Ur(n.type, t.memoizedProps), m = t.memoizedState;
              if (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(n) || "instance")), n.mode & ot)
                try {
                  ra(), i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  na(n);
                }
              else
                i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
            }
          var g = n.updateQueue;
          g !== null && (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(n) || "instance")), Fb(n, g, i));
          break;
        }
        case b: {
          var x = n.updateQueue;
          if (x !== null) {
            var C = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case E:
                  C = n.child.stateNode;
                  break;
                case p:
                  C = n.child.stateNode;
                  break;
              }
            Fb(n, x, C);
          }
          break;
        }
        case E: {
          var R = n.stateNode;
          if (t === null && n.flags & Ye) {
            var A = n.type, _ = n.memoizedProps;
            FR(R, A, _);
          }
          break;
        }
        case j:
          break;
        case S:
          break;
        case k: {
          {
            var H = n.memoizedProps, J = H.onCommit, K = H.onRender, ae = n.stateNode.effectDuration, me = hx(), fe = t === null ? "mount" : "update";
            px() && (fe = "nested-update"), typeof K == "function" && K(n.memoizedProps.id, fe, n.actualDuration, n.treeBaseDuration, n.actualStartTime, me);
            {
              typeof J == "function" && J(n.memoizedProps.id, fe, ae, me), yk(n);
              var Ie = n.return;
              e: for (; Ie !== null; ) {
                switch (Ie.tag) {
                  case b:
                    var Fe = Ie.stateNode;
                    Fe.effectDuration += ae;
                    break e;
                  case k:
                    var F = Ie.stateNode;
                    F.effectDuration += ae;
                    break e;
                }
                Ie = Ie.return;
              }
            }
          }
          break;
        }
        case U: {
          DD(e, n);
          break;
        }
        case be:
        case ke:
        case nt:
        case pe:
        case we:
        case et:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    sn || n.flags & Qa && e0(n);
  }
  function ND(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        if (e.mode & ot)
          try {
            ra(), Qx(e, e.return);
          } finally {
            na(e);
          }
        else
          Qx(e, e.return);
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && hD(e, e.return, t), Xx(e, e.return);
        break;
      }
      case E: {
        Xx(e, e.return);
        break;
      }
    }
  }
  function wD(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === E) {
        if (n === null) {
          n = r;
          try {
            var i = r.stateNode;
            t ? GR(i) : QR(r.stateNode, r.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
        }
      } else if (r.tag === j) {
        if (n === null)
          try {
            var u = r.stateNode;
            t ? qR(u) : XR(u, r.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
      } else if (!((r.tag === pe || r.tag === we) && r.memoizedState !== null && r !== e)) {
        if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
      }
      if (r === e)
        return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e)
          return;
        n === r && (n = null), r = r.return;
      }
      n === r && (n = null), r.sibling.return = r.return, r = r.sibling;
    }
  }
  function e0(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, r;
      switch (e.tag) {
        case E:
          r = n;
          break;
        default:
          r = n;
      }
      if (typeof t == "function") {
        var i;
        if (e.mode & ot)
          try {
            ra(), i = t(r);
          } finally {
            na(e);
          }
        else
          i = t(r);
        typeof i == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", _e(e));
      } else
        t.hasOwnProperty("current") || c("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", _e(e)), t.current = r;
    }
  }
  function CD(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function t0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, t0(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === E) {
        var n = e.stateNode;
        n !== null && kj(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function ED(e) {
    for (var t = e.return; t !== null; ) {
      if (n0(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function n0(e) {
    return e.tag === E || e.tag === b || e.tag === S;
  }
  function r0(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || n0(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== E && t.tag !== j && t.tag !== he; ) {
        if (t.flags & At || t.child === null || t.tag === S)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & At))
        return t.stateNode;
    }
  }
  function RD(e) {
    var t = ED(e);
    switch (t.tag) {
      case E: {
        var n = t.stateNode;
        t.flags & Qs && (ib(n), t.flags &= ~Qs);
        var r = r0(e);
        Kh(e, r, n);
        break;
      }
      case b:
      case S: {
        var i = t.stateNode.containerInfo, u = r0(e);
        Yh(e, u, i);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Yh(e, t, n) {
    var r = e.tag, i = r === E || r === j;
    if (i) {
      var u = e.stateNode;
      t ? IR(n, u, t) : BR(n, u);
    } else if (r !== S) {
      var m = e.child;
      if (m !== null) {
        Yh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Yh(g, t, n), g = g.sibling;
      }
    }
  }
  function Kh(e, t, n) {
    var r = e.tag, i = r === E || r === j;
    if (i) {
      var u = e.stateNode;
      t ? JR(n, u, t) : HR(n, u);
    } else if (r !== S) {
      var m = e.child;
      if (m !== null) {
        Kh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Kh(g, t, n), g = g.sibling;
      }
    }
  }
  var ln = null, zr = !1;
  function jD(e, t, n) {
    {
      var r = t;
      e: for (; r !== null; ) {
        switch (r.tag) {
          case E: {
            ln = r.stateNode, zr = !1;
            break e;
          }
          case b: {
            ln = r.stateNode.containerInfo, zr = !0;
            break e;
          }
          case S: {
            ln = r.stateNode.containerInfo, zr = !0;
            break e;
          }
        }
        r = r.return;
      }
      if (ln === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      a0(e, t, n), ln = null, zr = !1;
    }
    CD(n);
  }
  function hi(e, t, n) {
    for (var r = n.child; r !== null; )
      a0(e, t, r), r = r.sibling;
  }
  function a0(e, t, n) {
    switch (Tw(n), n.tag) {
      case E:
        sn || fs(n, t);
      case j: {
        {
          var r = ln, i = zr;
          ln = null, hi(e, t, n), ln = r, zr = i, ln !== null && (zr ? KR(ln, n.stateNode) : YR(ln, n.stateNode));
        }
        return;
      }
      case he: {
        ln !== null && (zr ? WR(ln, n.stateNode) : ap(ln, n.stateNode));
        return;
      }
      case S: {
        {
          var u = ln, m = zr;
          ln = n.stateNode.containerInfo, zr = !0, hi(e, t, n), ln = u, zr = m;
        }
        return;
      }
      case h:
      case $:
      case I:
      case Z: {
        if (!sn) {
          var g = n.updateQueue;
          if (g !== null) {
            var x = g.lastEffect;
            if (x !== null) {
              var C = x.next, R = C;
              do {
                var A = R, _ = A.destroy, H = A.tag;
                _ !== void 0 && ((H & Zr) !== Hn ? Mf(n, t, _) : (H & zt) !== Hn && (Hg(n), n.mode & ot ? (ra(), Mf(n, t, _), na(n)) : Mf(n, t, _), Bg())), R = R.next;
              } while (R !== C);
            }
          }
        }
        hi(e, t, n);
        return;
      }
      case p: {
        if (!sn) {
          fs(n, t);
          var J = n.stateNode;
          typeof J.componentWillUnmount == "function" && Ih(n, t, J);
        }
        hi(e, t, n);
        return;
      }
      case nt: {
        hi(e, t, n);
        return;
      }
      case pe: {
        if (
          // TODO: Remove this dead flag
          n.mode & Be
        ) {
          var K = sn;
          sn = K || n.memoizedState !== null, hi(e, t, n), sn = K;
        } else
          hi(e, t, n);
        break;
      }
      default: {
        hi(e, t, n);
        return;
      }
    }
  }
  function TD(e) {
    e.memoizedState;
  }
  function DD(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var r = t.alternate;
      if (r !== null) {
        var i = r.memoizedState;
        if (i !== null) {
          var u = i.dehydrated;
          u !== null && mj(u);
        }
      }
    }
  }
  function i0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new dD()), t.forEach(function(r) {
        var i = Ek.bind(null, e, r);
        if (!n.has(r)) {
          if (n.add(r), kr)
            if (us !== null && cs !== null)
              vu(cs, us);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          r.then(i, i);
        }
      });
    }
  }
  function kD(e, t, n) {
    us = n, cs = e, St(t), o0(t, e), St(t), us = null, cs = null;
  }
  function $r(e, t, n) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i];
        try {
          jD(e, t, u);
        } catch (x) {
          dt(u, t, x);
        }
      }
    var m = Iu();
    if (t.subtreeFlags & Zd)
      for (var g = t.child; g !== null; )
        St(g), o0(g, e), g = g.sibling;
    St(m);
  }
  function o0(e, t, n) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case h:
      case $:
      case I:
      case Z: {
        if ($r(t, e), aa(e), i & Ye) {
          try {
            Fr(Zr | Ft, e, e.return), pi(Zr | Ft, e);
          } catch (Se) {
            dt(e, e.return, Se);
          }
          if (e.mode & ot) {
            try {
              ra(), Fr(zt | Ft, e, e.return);
            } catch (Se) {
              dt(e, e.return, Se);
            }
            na(e);
          } else
            try {
              Fr(zt | Ft, e, e.return);
            } catch (Se) {
              dt(e, e.return, Se);
            }
        }
        return;
      }
      case p: {
        $r(t, e), aa(e), i & Qa && r !== null && fs(r, r.return);
        return;
      }
      case E: {
        $r(t, e), aa(e), i & Qa && r !== null && fs(r, r.return);
        {
          if (e.flags & Qs) {
            var u = e.stateNode;
            try {
              ib(u);
            } catch (Se) {
              dt(e, e.return, Se);
            }
          }
          if (i & Ye) {
            var m = e.stateNode;
            if (m != null) {
              var g = e.memoizedProps, x = r !== null ? r.memoizedProps : g, C = e.type, R = e.updateQueue;
              if (e.updateQueue = null, R !== null)
                try {
                  zR(m, R, C, x, g, e);
                } catch (Se) {
                  dt(e, e.return, Se);
                }
            }
          }
        }
        return;
      }
      case j: {
        if ($r(t, e), aa(e), i & Ye) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var A = e.stateNode, _ = e.memoizedProps, H = r !== null ? r.memoizedProps : _;
          try {
            $R(A, H, _);
          } catch (Se) {
            dt(e, e.return, Se);
          }
        }
        return;
      }
      case b: {
        if ($r(t, e), aa(e), i & Ye && r !== null) {
          var J = r.memoizedState;
          if (J.isDehydrated)
            try {
              dj(t.containerInfo);
            } catch (Se) {
              dt(e, e.return, Se);
            }
        }
        return;
      }
      case S: {
        $r(t, e), aa(e);
        return;
      }
      case U: {
        $r(t, e), aa(e);
        var K = e.child;
        if (K.flags & zi) {
          var ae = K.stateNode, me = K.memoizedState, fe = me !== null;
          if (ae.isHidden = fe, fe) {
            var Ie = K.alternate !== null && K.alternate.memoizedState !== null;
            Ie || ck();
          }
        }
        if (i & Ye) {
          try {
            TD(e);
          } catch (Se) {
            dt(e, e.return, Se);
          }
          i0(e);
        }
        return;
      }
      case pe: {
        var Fe = r !== null && r.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Be
        ) {
          var F = sn;
          sn = F || Fe, $r(t, e), sn = F;
        } else
          $r(t, e);
        if (aa(e), i & zi) {
          var W = e.stateNode, z = e.memoizedState, X = z !== null, le = e;
          if (W.isHidden = X, X && !Fe && (le.mode & Be) !== ve) {
            ue = le;
            for (var ie = le.child; ie !== null; )
              ue = ie, LD(ie), ie = ie.sibling;
          }
          wD(le, X);
        }
        return;
      }
      case be: {
        $r(t, e), aa(e), i & Ye && i0(e);
        return;
      }
      case nt:
        return;
      default: {
        $r(t, e), aa(e);
        return;
      }
    }
  }
  function aa(e) {
    var t = e.flags;
    if (t & At) {
      try {
        RD(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      e.flags &= ~At;
    }
    t & xa && (e.flags &= ~xa);
  }
  function OD(e, t, n) {
    us = n, cs = t, ue = e, s0(e, t, n), us = null, cs = null;
  }
  function s0(e, t, n) {
    for (var r = (e.mode & Be) !== ve; ue !== null; ) {
      var i = ue, u = i.child;
      if (i.tag === pe && r) {
        var m = i.memoizedState !== null, g = m || Pf;
        if (g) {
          Wh(e, t, n);
          continue;
        } else {
          var x = i.alternate, C = x !== null && x.memoizedState !== null, R = C || sn, A = Pf, _ = sn;
          Pf = g, sn = R, sn && !_ && (ue = i, _D(i));
          for (var H = u; H !== null; )
            ue = H, s0(
              H,
              // New root; bubble back up to here and stop.
              t,
              n
            ), H = H.sibling;
          ue = i, Pf = A, sn = _, Wh(e, t, n);
          continue;
        }
      }
      (i.subtreeFlags & Zs) !== ye && u !== null ? (u.return = i, ue = u) : Wh(e, t, n);
    }
  }
  function Wh(e, t, n) {
    for (; ue !== null; ) {
      var r = ue;
      if ((r.flags & Zs) !== ye) {
        var i = r.alternate;
        St(r);
        try {
          SD(t, i, r, n);
        } catch (m) {
          dt(r, r.return, m);
        }
        qt();
      }
      if (r === e) {
        ue = null;
        return;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, ue = u;
        return;
      }
      ue = r.return;
    }
  }
  function LD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      switch (t.tag) {
        case h:
        case $:
        case I:
        case Z: {
          if (t.mode & ot)
            try {
              ra(), Fr(zt, t, t.return);
            } finally {
              na(t);
            }
          else
            Fr(zt, t, t.return);
          break;
        }
        case p: {
          fs(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Ih(t, t.return, r);
          break;
        }
        case E: {
          fs(t, t.return);
          break;
        }
        case pe: {
          var i = t.memoizedState !== null;
          if (i) {
            l0(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, ue = n) : l0(e);
    }
  }
  function l0(e) {
    for (; ue !== null; ) {
      var t = ue;
      if (t === e) {
        ue = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ue = n;
        return;
      }
      ue = t.return;
    }
  }
  function _D(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      if (t.tag === pe) {
        var r = t.memoizedState !== null;
        if (r) {
          u0(e);
          continue;
        }
      }
      n !== null ? (n.return = t, ue = n) : u0(e);
    }
  }
  function u0(e) {
    for (; ue !== null; ) {
      var t = ue;
      St(t);
      try {
        ND(t);
      } catch (r) {
        dt(t, t.return, r);
      }
      if (qt(), t === e) {
        ue = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ue = n;
        return;
      }
      ue = t.return;
    }
  }
  function AD(e, t, n, r) {
    ue = t, PD(t, e, n, r);
  }
  function PD(e, t, n, r) {
    for (; ue !== null; ) {
      var i = ue, u = i.child;
      (i.subtreeFlags & Oo) !== ye && u !== null ? (u.return = i, ue = u) : MD(e, t, n, r);
    }
  }
  function MD(e, t, n, r) {
    for (; ue !== null; ) {
      var i = ue;
      if ((i.flags & Dr) !== ye) {
        St(i);
        try {
          UD(t, i, n, r);
        } catch (m) {
          dt(i, i.return, m);
        }
        qt();
      }
      if (i === e) {
        ue = null;
        return;
      }
      var u = i.sibling;
      if (u !== null) {
        u.return = i.return, ue = u;
        return;
      }
      ue = i.return;
    }
  }
  function UD(e, t, n, r) {
    switch (t.tag) {
      case h:
      case $:
      case Z: {
        if (t.mode & ot) {
          mh();
          try {
            pi(an | Ft, t);
          } finally {
            dh(t);
          }
        } else
          pi(an | Ft, t);
        break;
      }
    }
  }
  function VD(e) {
    ue = e, FD();
  }
  function FD() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      if ((ue.flags & Vi) !== ye) {
        var n = e.deletions;
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            ue = i, HD(i, e);
          }
          {
            var u = e.alternate;
            if (u !== null) {
              var m = u.child;
              if (m !== null) {
                u.child = null;
                do {
                  var g = m.sibling;
                  m.sibling = null, m = g;
                } while (m !== null);
              }
            }
          }
          ue = e;
        }
      }
      (e.subtreeFlags & Oo) !== ye && t !== null ? (t.return = e, ue = t) : zD();
    }
  }
  function zD() {
    for (; ue !== null; ) {
      var e = ue;
      (e.flags & Dr) !== ye && (St(e), $D(e), qt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function $D(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        e.mode & ot ? (mh(), Fr(an | Ft, e, e.return), dh(e)) : Fr(an | Ft, e, e.return);
        break;
      }
    }
  }
  function HD(e, t) {
    for (; ue !== null; ) {
      var n = ue;
      St(n), JD(n, t), qt();
      var r = n.child;
      r !== null ? (r.return = n, ue = r) : BD(e);
    }
  }
  function BD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.sibling, r = t.return;
      if (t0(t), t === e) {
        ue = null;
        return;
      }
      if (n !== null) {
        n.return = r, ue = n;
        return;
      }
      ue = r;
    }
  }
  function JD(e, t) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        e.mode & ot ? (mh(), Fr(an, e, t), dh(e)) : Fr(an, e, t);
        break;
      }
    }
  }
  function ID(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        try {
          pi(zt | Ft, e);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
    }
  }
  function YD(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        try {
          pi(an | Ft, e);
        } catch (t) {
          dt(e, e.return, t);
        }
        break;
      }
    }
  }
  function KD(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z: {
        try {
          Fr(zt | Ft, e, e.return);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Ih(e, e.return, t);
        break;
      }
    }
  }
  function WD(e) {
    switch (e.tag) {
      case h:
      case $:
      case Z:
        try {
          Fr(an | Ft, e, e.return);
        } catch (t) {
          dt(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var iu = Symbol.for;
    iu("selector.component"), iu("selector.has_pseudo_class"), iu("selector.role"), iu("selector.test_id"), iu("selector.text");
  }
  var GD = [];
  function qD() {
    GD.forEach(function(e) {
      return e();
    });
  }
  var QD = s.ReactCurrentActQueue;
  function XD(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function c0() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && QD.current !== null && c("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var ZD = Math.ceil, Gh = s.ReactCurrentDispatcher, qh = s.ReactCurrentOwner, un = s.ReactCurrentBatchConfig, Hr = s.ReactCurrentActQueue, Bt = (
    /*             */
    0
  ), f0 = (
    /*               */
    1
  ), cn = (
    /*                */
    2
  ), xr = (
    /*                */
    4
  ), _a = 0, ou = 1, so = 2, Uf = 3, su = 4, d0 = 5, Qh = 6, Je = Bt, On = null, Nt = null, Jt = q, ia = q, Xh = ii(q), It = _a, lu = null, Vf = q, uu = q, Ff = q, cu = null, Bn = null, Zh = 0, m0 = 500, p0 = 1 / 0, ek = 500, Aa = null;
  function fu() {
    p0 = Qt() + ek;
  }
  function h0() {
    return p0;
  }
  var zf = !1, ev = null, ds = null, lo = !1, vi = null, du = q, tv = [], nv = null, tk = 50, mu = 0, rv = null, av = !1, $f = !1, nk = 50, ms = 0, Hf = null, pu = pt, Bf = q, v0 = !1;
  function Jf() {
    return On;
  }
  function Ln() {
    return (Je & (cn | xr)) !== Bt ? Qt() : (pu !== pt || (pu = Qt()), pu);
  }
  function gi(e) {
    var t = e.mode;
    if ((t & Be) === ve)
      return je;
    if ((Je & cn) !== Bt && Jt !== q)
      return ol(Jt);
    var n = Qj() !== qj;
    if (n) {
      if (un.transition !== null) {
        var r = un.transition;
        r._updatedFibers || (r._updatedFibers = /* @__PURE__ */ new Set()), r._updatedFibers.add(e);
      }
      return Bf === Zt && (Bf = Qg()), Bf;
    }
    var i = Or();
    if (i !== Zt)
      return i;
    var u = PR();
    return u;
  }
  function rk(e) {
    var t = e.mode;
    return (t & Be) === ve ? je : iC();
  }
  function Yt(e, t, n, r) {
    jk(), v0 && c("useInsertionEffect must not schedule updates."), av && ($f = !0), sl(e, n, r), (Je & cn) !== q && e === On ? kk(t) : (kr && ey(e, t, n), Ok(t), e === On && ((Je & cn) === Bt && (uu = Pe(uu, n)), It === su && yi(e, Jt)), Jn(e, r), n === je && Je === Bt && (t.mode & Be) === ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Hr.isBatchingLegacy && (fu(), vb()));
  }
  function ak(e, t, n) {
    var r = e.current;
    r.lanes = t, sl(e, t, n), Jn(e, n);
  }
  function ik(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Je & cn) !== Bt
    );
  }
  function Jn(e, t) {
    var n = e.callbackNode;
    Zw(e, t);
    var r = cc(e, e === On ? Jt : q);
    if (r === q) {
      n !== null && L0(n), e.callbackNode = null, e.callbackPriority = Zt;
      return;
    }
    var i = Yi(r), u = e.callbackPriority;
    if (u === i && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Hr.current !== null && n !== fv)) {
      n == null && u !== je && c("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && L0(n);
    var m;
    if (i === je)
      e.tag === oi ? (Hr.isBatchingLegacy !== null && (Hr.didScheduleLegacyUpdate = !0), _j(b0.bind(null, e))) : hb(b0.bind(null, e)), Hr.current !== null ? Hr.current.push(si) : UR(function() {
        (Je & (cn | xr)) === Bt && si();
      }), m = null;
    else {
      var g;
      switch (ry(r)) {
        case tr:
          g = oc;
          break;
        case Ca:
          g = em;
          break;
        case Ea:
          g = Bi;
          break;
        case mc:
          g = tm;
          break;
        default:
          g = Bi;
          break;
      }
      m = dv(g, g0.bind(null, e));
    }
    e.callbackPriority = i, e.callbackNode = m;
  }
  function g0(e, t) {
    if (wT(), pu = pt, Bf = q, (Je & (cn | xr)) !== Bt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, r = Ma();
    if (r && e.callbackNode !== n)
      return null;
    var i = cc(e, e === On ? Jt : q);
    if (i === q)
      return null;
    var u = !fc(e, i) && !aC(e, i) && !t, m = u ? hk(e, i) : Yf(e, i);
    if (m !== _a) {
      if (m === so) {
        var g = wm(e);
        g !== q && (i = g, m = iv(e, g));
      }
      if (m === ou) {
        var x = lu;
        throw uo(e, q), yi(e, i), Jn(e, Qt()), x;
      }
      if (m === Qh)
        yi(e, i);
      else {
        var C = !fc(e, i), R = e.current.alternate;
        if (C && !sk(R)) {
          if (m = Yf(e, i), m === so) {
            var A = wm(e);
            A !== q && (i = A, m = iv(e, A));
          }
          if (m === ou) {
            var _ = lu;
            throw uo(e, q), yi(e, i), Jn(e, Qt()), _;
          }
        }
        e.finishedWork = R, e.finishedLanes = i, ok(e, m, i);
      }
    }
    return Jn(e, Qt()), e.callbackNode === n ? g0.bind(null, e) : null;
  }
  function iv(e, t) {
    var n = cu;
    if (pc(e)) {
      var r = uo(e, t);
      r.flags |= ba, Rj(e.containerInfo);
    }
    var i = Yf(e, t);
    if (i !== so) {
      var u = Bn;
      Bn = n, u !== null && y0(u);
    }
    return i;
  }
  function y0(e) {
    Bn === null ? Bn = e : Bn.push.apply(Bn, e);
  }
  function ok(e, t, n) {
    switch (t) {
      case _a:
      case ou:
        throw new Error("Root did not complete. This is a bug in React.");
      case so: {
        co(e, Bn, Aa);
        break;
      }
      case Uf: {
        if (yi(e, n), Gg(n) && // do not delay if we're inside an act() scope
        !_0()) {
          var r = Zh + m0 - Qt();
          if (r > 10) {
            var i = cc(e, q);
            if (i !== q)
              break;
            var u = e.suspendedLanes;
            if (!Uo(u, n)) {
              Ln(), Zg(e, u);
              break;
            }
            e.timeoutHandle = np(co.bind(null, e, Bn, Aa), r);
            break;
          }
        }
        co(e, Bn, Aa);
        break;
      }
      case su: {
        if (yi(e, n), rC(n))
          break;
        if (!_0()) {
          var m = Qw(e, n), g = m, x = Qt() - g, C = Rk(x) - x;
          if (C > 10) {
            e.timeoutHandle = np(co.bind(null, e, Bn, Aa), C);
            break;
          }
        }
        co(e, Bn, Aa);
        break;
      }
      case d0: {
        co(e, Bn, Aa);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function sk(e) {
    for (var t = e; ; ) {
      if (t.flags & ac) {
        var n = t.updateQueue;
        if (n !== null) {
          var r = n.stores;
          if (r !== null)
            for (var i = 0; i < r.length; i++) {
              var u = r[i], m = u.getSnapshot, g = u.value;
              try {
                if (!rr(m(), g))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var x = t.child;
      if (t.subtreeFlags & ac && x !== null) {
        x.return = t, t = x;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function yi(e, t) {
    t = dc(t, Ff), t = dc(t, uu), sC(e, t);
  }
  function b0(e) {
    if (CT(), (Je & (cn | xr)) !== Bt)
      throw new Error("Should not already be working.");
    Ma();
    var t = cc(e, q);
    if (!er(t, je))
      return Jn(e, Qt()), null;
    var n = Yf(e, t);
    if (e.tag !== oi && n === so) {
      var r = wm(e);
      r !== q && (t = r, n = iv(e, r));
    }
    if (n === ou) {
      var i = lu;
      throw uo(e, q), yi(e, t), Jn(e, Qt()), i;
    }
    if (n === Qh)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, co(e, Bn, Aa), Jn(e, Qt()), null;
  }
  function lk(e, t) {
    t !== q && (jm(e, Pe(t, je)), Jn(e, Qt()), (Je & (cn | xr)) === Bt && (fu(), si()));
  }
  function ov(e, t) {
    var n = Je;
    Je |= f0;
    try {
      return e(t);
    } finally {
      Je = n, Je === Bt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Hr.isBatchingLegacy && (fu(), vb());
    }
  }
  function uk(e, t, n, r, i) {
    var u = Or(), m = un.transition;
    try {
      return un.transition = null, en(tr), e(t, n, r, i);
    } finally {
      en(u), un.transition = m, Je === Bt && fu();
    }
  }
  function Pa(e) {
    vi !== null && vi.tag === oi && (Je & (cn | xr)) === Bt && Ma();
    var t = Je;
    Je |= f0;
    var n = un.transition, r = Or();
    try {
      return un.transition = null, en(tr), e ? e() : void 0;
    } finally {
      en(r), un.transition = n, Je = t, (Je & (cn | xr)) === Bt && si();
    }
  }
  function x0() {
    return (Je & (cn | xr)) !== Bt;
  }
  function If(e, t) {
    Nn(Xh, ia, e), ia = Pe(ia, t);
  }
  function sv(e) {
    ia = Xh.current, Sn(Xh, e);
  }
  function uo(e, t) {
    e.finishedWork = null, e.finishedLanes = q;
    var n = e.timeoutHandle;
    if (n !== rp && (e.timeoutHandle = rp, MR(n)), Nt !== null)
      for (var r = Nt.return; r !== null; ) {
        var i = r.alternate;
        Gx(i, r), r = r.return;
      }
    On = e;
    var u = fo(e.current, null);
    return Nt = u, Jt = ia = t, It = _a, lu = null, Vf = q, uu = q, Ff = q, cu = null, Bn = null, aT(), Ar.discardPendingWarnings(), u;
  }
  function S0(e, t) {
    do {
      var n = Nt;
      try {
        if (ef(), Ib(), qt(), qh.current = null, n === null || n.return === null) {
          It = ou, lu = t, Nt = null;
          return;
        }
        if (Nr && n.mode & ot && kf(n, !0), Jr)
          if (_o(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var r = t;
            Fw(n, r, Jt);
          } else
            Vw(n, t, Jt);
        _T(e, n.return, n, t, Jt), E0(n);
      } catch (i) {
        t = i, Nt === n && n !== null ? (n = n.return, Nt = n) : n = Nt;
        continue;
      }
      return;
    } while (!0);
  }
  function N0() {
    var e = Gh.current;
    return Gh.current = Ef, e === null ? Ef : e;
  }
  function w0(e) {
    Gh.current = e;
  }
  function ck() {
    Zh = Qt();
  }
  function hu(e) {
    Vf = Pe(e, Vf);
  }
  function fk() {
    It === _a && (It = Uf);
  }
  function lv() {
    (It === _a || It === Uf || It === so) && (It = su), On !== null && (Cm(Vf) || Cm(uu)) && yi(On, Jt);
  }
  function dk(e) {
    It !== su && (It = so), cu === null ? cu = [e] : cu.push(e);
  }
  function mk() {
    return It === _a;
  }
  function Yf(e, t) {
    var n = Je;
    Je |= cn;
    var r = N0();
    if (On !== e || Jt !== t) {
      if (kr) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (vu(e, Jt), i.clear()), ty(e, t);
      }
      Aa = ny(), uo(e, t);
    }
    Jg(t);
    do
      try {
        pk();
        break;
      } catch (u) {
        S0(e, u);
      }
    while (!0);
    if (ef(), Je = n, w0(r), Nt !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return Ig(), On = null, Jt = q, It;
  }
  function pk() {
    for (; Nt !== null; )
      C0(Nt);
  }
  function hk(e, t) {
    var n = Je;
    Je |= cn;
    var r = N0();
    if (On !== e || Jt !== t) {
      if (kr) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (vu(e, Jt), i.clear()), ty(e, t);
      }
      Aa = ny(), fu(), uo(e, t);
    }
    Jg(t);
    do
      try {
        vk();
        break;
      } catch (u) {
        S0(e, u);
      }
    while (!0);
    return ef(), w0(r), Je = n, Nt !== null ? (Jw(), _a) : (Ig(), On = null, Jt = q, It);
  }
  function vk() {
    for (; Nt !== null && !yw(); )
      C0(Nt);
  }
  function C0(e) {
    var t = e.alternate;
    St(e);
    var n;
    (e.mode & ot) !== ve ? (fh(e), n = uv(t, e, ia), kf(e, !0)) : n = uv(t, e, ia), qt(), e.memoizedProps = e.pendingProps, n === null ? E0(e) : Nt = n, qh.current = null;
  }
  function E0(e) {
    var t = e;
    do {
      var n = t.alternate, r = t.return;
      if ((t.flags & Xs) === ye) {
        St(t);
        var i = void 0;
        if ((t.mode & ot) === ve ? i = Wx(n, t, ia) : (fh(t), i = Wx(n, t, ia), kf(t, !1)), qt(), i !== null) {
          Nt = i;
          return;
        }
      } else {
        var u = fD(n, t);
        if (u !== null) {
          u.flags &= dw, Nt = u;
          return;
        }
        if ((t.mode & ot) !== ve) {
          kf(t, !1);
          for (var m = t.actualDuration, g = t.child; g !== null; )
            m += g.actualDuration, g = g.sibling;
          t.actualDuration = m;
        }
        if (r !== null)
          r.flags |= Xs, r.subtreeFlags = ye, r.deletions = null;
        else {
          It = Qh, Nt = null;
          return;
        }
      }
      var x = t.sibling;
      if (x !== null) {
        Nt = x;
        return;
      }
      t = r, Nt = t;
    } while (t !== null);
    It === _a && (It = d0);
  }
  function co(e, t, n) {
    var r = Or(), i = un.transition;
    try {
      un.transition = null, en(tr), gk(e, t, n, r);
    } finally {
      un.transition = i, en(r);
    }
    return null;
  }
  function gk(e, t, n, r) {
    do
      Ma();
    while (vi !== null);
    if (Tk(), (Je & (cn | xr)) !== Bt)
      throw new Error("Should not already be working.");
    var i = e.finishedWork, u = e.finishedLanes;
    if (Ow(u), i === null)
      return $g(), null;
    if (u === q && c("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, i === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Zt;
    var m = Pe(i.lanes, i.childLanes);
    lC(e, m), e === On && (On = null, Nt = null, Jt = q), ((i.subtreeFlags & Oo) !== ye || (i.flags & Oo) !== ye) && (lo || (lo = !0, nv = n, dv(Bi, function() {
      return Ma(), null;
    })));
    var g = (i.subtreeFlags & (Xd | Zd | Zs | Oo)) !== ye, x = (i.flags & (Xd | Zd | Zs | Oo)) !== ye;
    if (g || x) {
      var C = un.transition;
      un.transition = null;
      var R = Or();
      en(tr);
      var A = Je;
      Je |= xr, qh.current = null, vD(e, i), vx(), kD(e, i, u), DR(e.containerInfo), e.current = i, zw(u), OD(i, e, u), $w(), bw(), Je = A, en(R), un.transition = C;
    } else
      e.current = i, vx();
    var _ = lo;
    if (lo ? (lo = !1, vi = e, du = u) : (ms = 0, Hf = null), m = e.pendingLanes, m === q && (ds = null), _ || D0(e.current, !1), Rw(i.stateNode, r), kr && e.memoizedUpdaters.clear(), qD(), Jn(e, Qt()), t !== null)
      for (var H = e.onRecoverableError, J = 0; J < t.length; J++) {
        var K = t[J], ae = K.stack, me = K.digest;
        H(K.value, {
          componentStack: ae,
          digest: me
        });
      }
    if (zf) {
      zf = !1;
      var fe = ev;
      throw ev = null, fe;
    }
    return er(du, je) && e.tag !== oi && Ma(), m = e.pendingLanes, er(m, je) ? (NT(), e === rv ? mu++ : (mu = 0, rv = e)) : mu = 0, si(), $g(), null;
  }
  function Ma() {
    if (vi !== null) {
      var e = ry(du), t = dC(Ea, e), n = un.transition, r = Or();
      try {
        return un.transition = null, en(t), bk();
      } finally {
        en(r), un.transition = n;
      }
    }
    return !1;
  }
  function yk(e) {
    tv.push(e), lo || (lo = !0, dv(Bi, function() {
      return Ma(), null;
    }));
  }
  function bk() {
    if (vi === null)
      return !1;
    var e = nv;
    nv = null;
    var t = vi, n = du;
    if (vi = null, du = q, (Je & (cn | xr)) !== Bt)
      throw new Error("Cannot flush passive effects while already rendering.");
    av = !0, $f = !1, Hw(n);
    var r = Je;
    Je |= xr, VD(t.current), AD(t, t.current, n, e);
    {
      var i = tv;
      tv = [];
      for (var u = 0; u < i.length; u++) {
        var m = i[u];
        xD(t, m);
      }
    }
    Bw(), D0(t.current, !0), Je = r, si(), $f ? t === Hf ? ms++ : (ms = 0, Hf = t) : ms = 0, av = !1, $f = !1, jw(t);
    {
      var g = t.current.stateNode;
      g.effectDuration = 0, g.passiveEffectDuration = 0;
    }
    return !0;
  }
  function R0(e) {
    return ds !== null && ds.has(e);
  }
  function xk(e) {
    ds === null ? ds = /* @__PURE__ */ new Set([e]) : ds.add(e);
  }
  function Sk(e) {
    zf || (zf = !0, ev = e);
  }
  var Nk = Sk;
  function j0(e, t, n) {
    var r = io(n, t), i = Cx(e, r, je), u = ui(e, i, je), m = Ln();
    u !== null && (sl(u, je, m), Jn(u, m));
  }
  function dt(e, t, n) {
    if (mD(n), gu(!1), e.tag === b) {
      j0(e, e, n);
      return;
    }
    var r = null;
    for (r = t; r !== null; ) {
      if (r.tag === b) {
        j0(r, e, n);
        return;
      } else if (r.tag === p) {
        var i = r.type, u = r.stateNode;
        if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !R0(u)) {
          var m = io(n, e), g = Dh(r, m, je), x = ui(r, g, je), C = Ln();
          x !== null && (sl(x, je, C), Jn(x, C));
          return;
        }
      }
      r = r.return;
    }
    c(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function wk(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t);
    var i = Ln();
    Zg(e, n), Lk(e), On === e && Uo(Jt, n) && (It === su || It === Uf && Gg(Jt) && Qt() - Zh < m0 ? uo(e, q) : Ff = Pe(Ff, n)), Jn(e, i);
  }
  function T0(e, t) {
    t === Zt && (t = rk(e));
    var n = Ln(), r = $n(e, t);
    r !== null && (sl(r, t, n), Jn(r, n));
  }
  function Ck(e) {
    var t = e.memoizedState, n = Zt;
    t !== null && (n = t.retryLane), T0(e, n);
  }
  function Ek(e, t) {
    var n = Zt, r;
    switch (e.tag) {
      case U:
        r = e.stateNode;
        var i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case be:
        r = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    r !== null && r.delete(t), T0(e, n);
  }
  function Rk(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ZD(e / 1960) * 1960;
  }
  function jk() {
    if (mu > tk)
      throw mu = 0, rv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    ms > nk && (ms = 0, Hf = null, c("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function Tk() {
    Ar.flushLegacyContextWarning(), Ar.flushPendingUnsafeLifecycleWarnings();
  }
  function D0(e, t) {
    St(e), Kf(e, Sa, KD), t && Kf(e, ic, WD), Kf(e, Sa, ID), t && Kf(e, ic, YD), qt();
  }
  function Kf(e, t, n) {
    for (var r = e, i = null; r !== null; ) {
      var u = r.subtreeFlags & t;
      r !== i && r.child !== null && u !== ye ? r = r.child : ((r.flags & t) !== ye && n(r), r.sibling !== null ? r = r.sibling : r = i = r.return);
    }
  }
  var Wf = null;
  function k0(e) {
    {
      if ((Je & cn) !== Bt || !(e.mode & Be))
        return;
      var t = e.tag;
      if (t !== v && t !== b && t !== p && t !== h && t !== $ && t !== I && t !== Z)
        return;
      var n = _e(e) || "ReactComponent";
      if (Wf !== null) {
        if (Wf.has(n))
          return;
        Wf.add(n);
      } else
        Wf = /* @__PURE__ */ new Set([n]);
      var r = bn;
      try {
        St(e), c("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        r ? St(e) : qt();
      }
    }
  }
  var uv;
  {
    var Dk = null;
    uv = function(e, t, n) {
      var r = V0(Dk, t);
      try {
        return Bx(e, t, n);
      } catch (u) {
        if ($j() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (ef(), Ib(), Gx(e, t), V0(t, r), t.mode & ot && fh(t), Yd(null, Bx, null, e, t, n), lw()) {
          var i = Kd();
          typeof i == "object" && i !== null && i._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var O0 = !1, cv;
  cv = /* @__PURE__ */ new Set();
  function kk(e) {
    if (Pi && !bT())
      switch (e.tag) {
        case h:
        case $:
        case Z: {
          var t = Nt && _e(Nt) || "Unknown", n = t;
          if (!cv.has(n)) {
            cv.add(n);
            var r = _e(e) || "Unknown";
            c("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", r, t, t);
          }
          break;
        }
        case p: {
          O0 || (c("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), O0 = !0);
          break;
        }
      }
  }
  function vu(e, t) {
    if (kr) {
      var n = e.memoizedUpdaters;
      n.forEach(function(r) {
        ey(e, r, t);
      });
    }
  }
  var fv = {};
  function dv(e, t) {
    {
      var n = Hr.current;
      return n !== null ? (n.push(t), fv) : zg(e, t);
    }
  }
  function L0(e) {
    if (e !== fv)
      return gw(e);
  }
  function _0() {
    return Hr.current !== null;
  }
  function Ok(e) {
    {
      if (e.mode & Be) {
        if (!c0())
          return;
      } else if (!XD() || Je !== Bt || e.tag !== h && e.tag !== $ && e.tag !== Z)
        return;
      if (Hr.current === null) {
        var t = bn;
        try {
          St(e), c(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, _e(e));
        } finally {
          t ? St(e) : qt();
        }
      }
    }
  }
  function Lk(e) {
    e.tag !== oi && c0() && Hr.current === null && c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function gu(e) {
    v0 = e;
  }
  var Sr = null, ps = null, _k = function(e) {
    Sr = e;
  };
  function hs(e) {
    {
      if (Sr === null)
        return e;
      var t = Sr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function mv(e) {
    return hs(e);
  }
  function pv(e) {
    {
      if (Sr === null)
        return e;
      var t = Sr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = hs(e.render);
          if (e.render !== n) {
            var r = {
              $$typeof: Ne,
              render: n
            };
            return e.displayName !== void 0 && (r.displayName = e.displayName), r;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function A0(e, t) {
    {
      if (Sr === null)
        return !1;
      var n = e.elementType, r = t.type, i = !1, u = typeof r == "object" && r !== null ? r.$$typeof : null;
      switch (e.tag) {
        case p: {
          typeof r == "function" && (i = !0);
          break;
        }
        case h: {
          (typeof r == "function" || u === Ve) && (i = !0);
          break;
        }
        case $: {
          (u === Ne || u === Ve) && (i = !0);
          break;
        }
        case I:
        case Z: {
          (u === xt || u === Ve) && (i = !0);
          break;
        }
        default:
          return !1;
      }
      if (i) {
        var m = Sr(n);
        if (m !== void 0 && m === Sr(r))
          return !0;
      }
      return !1;
    }
  }
  function P0(e) {
    {
      if (Sr === null || typeof WeakSet != "function")
        return;
      ps === null && (ps = /* @__PURE__ */ new WeakSet()), ps.add(e);
    }
  }
  var Ak = function(e, t) {
    {
      if (Sr === null)
        return;
      var n = t.staleFamilies, r = t.updatedFamilies;
      Ma(), Pa(function() {
        hv(e.current, r, n);
      });
    }
  }, Pk = function(e, t) {
    {
      if (e.context !== ar)
        return;
      Ma(), Pa(function() {
        yu(t, e, null, null);
      });
    }
  };
  function hv(e, t, n) {
    {
      var r = e.alternate, i = e.child, u = e.sibling, m = e.tag, g = e.type, x = null;
      switch (m) {
        case h:
        case Z:
        case p:
          x = g;
          break;
        case $:
          x = g.render;
          break;
      }
      if (Sr === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var C = !1, R = !1;
      if (x !== null) {
        var A = Sr(x);
        A !== void 0 && (n.has(A) ? R = !0 : t.has(A) && (m === p ? R = !0 : C = !0));
      }
      if (ps !== null && (ps.has(e) || r !== null && ps.has(r)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
        var _ = $n(e, je);
        _ !== null && Yt(_, e, je, pt);
      }
      i !== null && !R && hv(i, t, n), u !== null && hv(u, t, n);
    }
  }
  var Mk = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), r = new Set(t.map(function(i) {
        return i.current;
      }));
      return vv(e.current, r, n), n;
    }
  };
  function vv(e, t, n) {
    {
      var r = e.child, i = e.sibling, u = e.tag, m = e.type, g = null;
      switch (u) {
        case h:
        case Z:
        case p:
          g = m;
          break;
        case $:
          g = m.render;
          break;
      }
      var x = !1;
      g !== null && t.has(g) && (x = !0), x ? Uk(e, n) : r !== null && vv(r, t, n), i !== null && vv(i, t, n);
    }
  }
  function Uk(e, t) {
    {
      var n = Vk(e, t);
      if (n)
        return;
      for (var r = e; ; ) {
        switch (r.tag) {
          case E:
            t.add(r.stateNode);
            return;
          case S:
            t.add(r.stateNode.containerInfo);
            return;
          case b:
            t.add(r.stateNode.containerInfo);
            return;
        }
        if (r.return === null)
          throw new Error("Expected to reach root first.");
        r = r.return;
      }
    }
  }
  function Vk(e, t) {
    for (var n = e, r = !1; ; ) {
      if (n.tag === E)
        r = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return r;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return r;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var gv;
  {
    gv = !1;
    try {
      var M0 = Object.preventExtensions({});
    } catch {
      gv = !0;
    }
  }
  function Fk(e, t, n, r) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.flags = ye, this.subtreeFlags = ye, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !gv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var ir = function(e, t, n, r) {
    return new Fk(e, t, n, r);
  };
  function yv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function zk(e) {
    return typeof e == "function" && !yv(e) && e.defaultProps === void 0;
  }
  function $k(e) {
    if (typeof e == "function")
      return yv(e) ? p : h;
    if (e != null) {
      var t = e.$$typeof;
      if (t === Ne)
        return $;
      if (t === xt)
        return I;
    }
    return v;
  }
  function fo(e, t) {
    var n = e.alternate;
    n === null ? (n = ir(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = ye, n.subtreeFlags = ye, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & Na, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var r = e.dependencies;
    switch (n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case v:
      case h:
      case Z:
        n.type = hs(e.type);
        break;
      case p:
        n.type = mv(e.type);
        break;
      case $:
        n.type = pv(e.type);
        break;
    }
    return n;
  }
  function Hk(e, t) {
    e.flags &= Na | At;
    var n = e.alternate;
    if (n === null)
      e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = ye, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var r = n.dependencies;
      e.dependencies = r === null ? null : {
        lanes: r.lanes,
        firstContext: r.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function Bk(e, t, n) {
    var r;
    return e === Jc ? (r = Be, t === !0 && (r |= Et, r |= Gr)) : r = ve, kr && (r |= ot), ir(b, null, null, r);
  }
  function bv(e, t, n, r, i, u) {
    var m = v, g = e;
    if (typeof e == "function")
      yv(e) ? (m = p, g = mv(g)) : g = hs(g);
    else if (typeof e == "string")
      m = E;
    else
      e: switch (e) {
        case O:
          return bi(n.children, i, u, t);
        case Q:
          m = D, i |= Et, (i & Be) !== ve && (i |= Gr);
          break;
        case re:
          return Jk(n, i, u, t);
        case Me:
          return Ik(n, i, u, t);
        case Ae:
          return Yk(n, i, u, t);
        case jr:
          return U0(n, i, u, t);
        case Tr:
        case bt:
        case Gt:
        case Li:
        case yn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                m = L;
                break e;
              case $e:
                m = P;
                break e;
              case Ne:
                m = $, g = pv(g);
                break e;
              case xt:
                m = I;
                break e;
              case Ve:
                m = Le, g = null;
                break e;
            }
          var x = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var C = r ? _e(r) : null;
            C && (x += `

Check the render method of \`` + C + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + x));
        }
      }
    var R = ir(m, n, t, i);
    return R.elementType = e, R.type = g, R.lanes = u, R._debugOwner = r, R;
  }
  function xv(e, t, n) {
    var r = null;
    r = e._owner;
    var i = e.type, u = e.key, m = e.props, g = bv(i, u, m, r, t, n);
    return g._debugSource = e._source, g._debugOwner = e._owner, g;
  }
  function bi(e, t, n, r) {
    var i = ir(M, e, r, t);
    return i.lanes = n, i;
  }
  function Jk(e, t, n, r) {
    typeof e.id != "string" && c('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var i = ir(k, e, r, t | ot);
    return i.elementType = re, i.lanes = n, i.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, i;
  }
  function Ik(e, t, n, r) {
    var i = ir(U, e, r, t);
    return i.elementType = Me, i.lanes = n, i;
  }
  function Yk(e, t, n, r) {
    var i = ir(be, e, r, t);
    return i.elementType = Ae, i.lanes = n, i;
  }
  function U0(e, t, n, r) {
    var i = ir(pe, e, r, t);
    i.elementType = jr, i.lanes = n;
    var u = {
      isHidden: !1
    };
    return i.stateNode = u, i;
  }
  function Sv(e, t, n) {
    var r = ir(j, e, null, t);
    return r.lanes = n, r;
  }
  function Kk() {
    var e = ir(E, null, null, ve);
    return e.elementType = "DELETED", e;
  }
  function Wk(e) {
    var t = ir(he, null, null, ve);
    return t.stateNode = e, t;
  }
  function Nv(e, t, n) {
    var r = e.children !== null ? e.children : [], i = ir(S, r, e.key, t);
    return i.lanes = n, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, i;
  }
  function V0(e, t) {
    return e === null && (e = ir(v, null, null, ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function Gk(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = rp, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Zt, this.eventTimes = Rm(q), this.expirationTimes = Rm(pt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = Rm(q), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], m = 0; m < rm; m++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Jc:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case oi:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function F0(e, t, n, r, i, u, m, g, x, C) {
    var R = new Gk(e, t, n, g, x), A = Bk(t, u);
    R.current = A, A.stateNode = R;
    {
      var _ = {
        element: r,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      A.memoizedState = _;
    }
    return Pp(A), R;
  }
  var wv = "18.3.1";
  function qk(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return cr(r), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Rr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var Cv, Ev;
  Cv = !1, Ev = {};
  function z0(e) {
    if (!e)
      return ar;
    var t = Do(e), n = Lj(t);
    if (t.tag === p) {
      var r = t.type;
      if (Xr(r))
        return mb(t, r, n);
    }
    return n;
  }
  function Qk(e, t) {
    {
      var n = Do(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var r = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
      }
      var i = Ug(n);
      if (i === null)
        return null;
      if (i.mode & Et) {
        var u = _e(n) || "Component";
        if (!Ev[u]) {
          Ev[u] = !0;
          var m = bn;
          try {
            St(i), n.mode & Et ? c("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : c("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            m ? St(m) : qt();
          }
        }
      }
      return i.stateNode;
    }
  }
  function $0(e, t, n, r, i, u, m, g) {
    var x = !1, C = null;
    return F0(e, t, x, C, n, r, i, u, m);
  }
  function H0(e, t, n, r, i, u, m, g, x, C) {
    var R = !0, A = F0(n, r, R, e, i, u, m, g, x);
    A.context = z0(null);
    var _ = A.current, H = Ln(), J = gi(_), K = Oa(H, J);
    return K.callback = t ?? null, ui(_, K, J), ak(A, J, H), A;
  }
  function yu(e, t, n, r) {
    Ew(t, e);
    var i = t.current, u = Ln(), m = gi(i);
    Iw(m);
    var g = z0(n);
    t.context === null ? t.context = g : t.pendingContext = g, Pi && bn !== null && !Cv && (Cv = !0, c(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, _e(bn) || "Unknown"));
    var x = Oa(u, m);
    x.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && c("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r), x.callback = r);
    var C = ui(i, x, m);
    return C !== null && (Yt(C, i, m, u), of(C, i, m)), m;
  }
  function Gf(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case E:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Xk(e) {
    switch (e.tag) {
      case b: {
        var t = e.stateNode;
        if (pc(t)) {
          var n = eC(t);
          lk(t, n);
        }
        break;
      }
      case U: {
        Pa(function() {
          var i = $n(e, je);
          if (i !== null) {
            var u = Ln();
            Yt(i, e, je, u);
          }
        });
        var r = je;
        Rv(e, r);
        break;
      }
    }
  }
  function B0(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = oC(n.retryLane, t));
  }
  function Rv(e, t) {
    B0(e, t);
    var n = e.alternate;
    n && B0(n, t);
  }
  function Zk(e) {
    if (e.tag === U) {
      var t = rl, n = $n(e, t);
      if (n !== null) {
        var r = Ln();
        Yt(n, e, t, r);
      }
      Rv(e, t);
    }
  }
  function eO(e) {
    if (e.tag === U) {
      var t = gi(e), n = $n(e, t);
      if (n !== null) {
        var r = Ln();
        Yt(n, e, t, r);
      }
      Rv(e, t);
    }
  }
  function J0(e) {
    var t = vw(e);
    return t === null ? null : t.stateNode;
  }
  var I0 = function(e) {
    return null;
  };
  function tO(e) {
    return I0(e);
  }
  var Y0 = function(e) {
    return !1;
  };
  function nO(e) {
    return Y0(e);
  }
  var K0 = null, W0 = null, G0 = null, q0 = null, Q0 = null, X0 = null, Z0 = null, eS = null, tS = null;
  {
    var nS = function(e, t, n) {
      var r = t[n], i = Xe(e) ? e.slice() : ze({}, e);
      return n + 1 === t.length ? (Xe(i) ? i.splice(r, 1) : delete i[r], i) : (i[r] = nS(e[r], t, n + 1), i);
    }, rS = function(e, t) {
      return nS(e, t, 0);
    }, aS = function(e, t, n, r) {
      var i = t[r], u = Xe(e) ? e.slice() : ze({}, e);
      if (r + 1 === t.length) {
        var m = n[r];
        u[m] = u[i], Xe(u) ? u.splice(i, 1) : delete u[i];
      } else
        u[i] = aS(
          // $FlowFixMe number or string is fine here
          e[i],
          t,
          n,
          r + 1
        );
      return u;
    }, iS = function(e, t, n) {
      if (t.length !== n.length) {
        f("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var r = 0; r < n.length - 1; r++)
          if (t[r] !== n[r]) {
            f("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return aS(e, t, n, 0);
    }, oS = function(e, t, n, r) {
      if (n >= t.length)
        return r;
      var i = t[n], u = Xe(e) ? e.slice() : ze({}, e);
      return u[i] = oS(e[i], t, n + 1, r), u;
    }, sS = function(e, t, n) {
      return oS(e, t, 0, n);
    }, jv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    K0 = function(e, t, n, r) {
      var i = jv(e, t);
      if (i !== null) {
        var u = sS(i.memoizedState, n, r);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, je);
        m !== null && Yt(m, e, je, pt);
      }
    }, W0 = function(e, t, n) {
      var r = jv(e, t);
      if (r !== null) {
        var i = rS(r.memoizedState, n);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = ze({}, e.memoizedProps);
        var u = $n(e, je);
        u !== null && Yt(u, e, je, pt);
      }
    }, G0 = function(e, t, n, r) {
      var i = jv(e, t);
      if (i !== null) {
        var u = iS(i.memoizedState, n, r);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, je);
        m !== null && Yt(m, e, je, pt);
      }
    }, q0 = function(e, t, n) {
      e.pendingProps = sS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = $n(e, je);
      r !== null && Yt(r, e, je, pt);
    }, Q0 = function(e, t) {
      e.pendingProps = rS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = $n(e, je);
      n !== null && Yt(n, e, je, pt);
    }, X0 = function(e, t, n) {
      e.pendingProps = iS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = $n(e, je);
      r !== null && Yt(r, e, je, pt);
    }, Z0 = function(e) {
      var t = $n(e, je);
      t !== null && Yt(t, e, je, pt);
    }, eS = function(e) {
      I0 = e;
    }, tS = function(e) {
      Y0 = e;
    };
  }
  function rO(e) {
    var t = Ug(e);
    return t === null ? null : t.stateNode;
  }
  function aO(e) {
    return null;
  }
  function iO() {
    return bn;
  }
  function oO(e) {
    var t = e.findFiberByHostInstance, n = s.ReactCurrentDispatcher;
    return Cw({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: K0,
      overrideHookStateDeletePath: W0,
      overrideHookStateRenamePath: G0,
      overrideProps: q0,
      overridePropsDeletePath: Q0,
      overridePropsRenamePath: X0,
      setErrorHandler: eS,
      setSuspenseHandler: tS,
      scheduleUpdate: Z0,
      currentDispatcherRef: n,
      findHostInstanceByFiber: rO,
      findFiberByHostInstance: t || aO,
      // React Refresh
      findHostInstancesForRefresh: Mk,
      scheduleRefresh: Ak,
      scheduleRoot: Pk,
      setRefreshHandler: _k,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: iO,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: wv
    });
  }
  var lS = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function Tv(e) {
    this._internalRoot = e;
  }
  qf.prototype.render = Tv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? c("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qf(arguments[1]) ? c("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && c("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== _t) {
        var r = J0(t.current);
        r && r.parentNode !== n && c("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    yu(e, t, null, null);
  }, qf.prototype.unmount = Tv.prototype.unmount = function() {
    typeof arguments[0] == "function" && c("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      x0() && c("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pa(function() {
        yu(null, e, null, null);
      }), lb(t);
    }
  };
  function sO(e, t) {
    if (!Qf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    uS(e);
    var n = !1, r = !1, i = "", u = lS;
    t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yr && c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var m = $0(e, Jc, null, n, r, i, u);
    Uc(m.current, e);
    var g = e.nodeType === _t ? e.parentNode : e;
    return Cl(g), new Tv(m);
  }
  function qf(e) {
    this._internalRoot = e;
  }
  function lO(e) {
    e && wC(e);
  }
  qf.prototype.unstable_scheduleHydration = lO;
  function uO(e, t, n) {
    if (!Qf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    uS(e), t === void 0 && c("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var r = n ?? null, i = n != null && n.hydratedSources || null, u = !1, m = !1, g = "", x = lS;
    n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (g = n.identifierPrefix), n.onRecoverableError !== void 0 && (x = n.onRecoverableError));
    var C = H0(t, null, e, Jc, r, u, m, g, x);
    if (Uc(C.current, e), Cl(e), i)
      for (var R = 0; R < i.length; R++) {
        var A = i[R];
        mT(C, A);
      }
    return new qf(C);
  }
  function Qf(e) {
    return !!(e && (e.nodeType === Fn || e.nodeType === ya || e.nodeType === Pd || !jt));
  }
  function bu(e) {
    return !!(e && (e.nodeType === Fn || e.nodeType === ya || e.nodeType === Pd || e.nodeType === _t && e.nodeValue === " react-mount-point-unstable "));
  }
  function uS(e) {
    e.nodeType === Fn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Pl(e) && (e._reactRootContainer ? c("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : c("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var cO = s.ReactCurrentOwner, cS;
  cS = function(e) {
    if (e._reactRootContainer && e.nodeType !== _t) {
      var t = J0(e._reactRootContainer.current);
      t && t.parentNode !== e && c("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, r = Dv(e), i = !!(r && ai(r));
    i && !n && c("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Fn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function Dv(e) {
    return e ? e.nodeType === ya ? e.documentElement : e.firstChild : null;
  }
  function fS() {
  }
  function fO(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var _ = Gf(m);
          u.call(_);
        };
      }
      var m = H0(
        t,
        r,
        e,
        oi,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fS
      );
      e._reactRootContainer = m, Uc(m.current, e);
      var g = e.nodeType === _t ? e.parentNode : e;
      return Cl(g), Pa(), m;
    } else {
      for (var x; x = e.lastChild; )
        e.removeChild(x);
      if (typeof r == "function") {
        var C = r;
        r = function() {
          var _ = Gf(R);
          C.call(_);
        };
      }
      var R = $0(
        e,
        oi,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fS
      );
      e._reactRootContainer = R, Uc(R.current, e);
      var A = e.nodeType === _t ? e.parentNode : e;
      return Cl(A), Pa(function() {
        yu(t, R, n, r);
      }), R;
    }
  }
  function dO(e, t) {
    e !== null && typeof e != "function" && c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Xf(e, t, n, r, i) {
    cS(n), dO(i === void 0 ? null : i, "render");
    var u = n._reactRootContainer, m;
    if (!u)
      m = fO(n, t, e, i, r);
    else {
      if (m = u, typeof i == "function") {
        var g = i;
        i = function() {
          var x = Gf(m);
          g.call(x);
        };
      }
      yu(t, m, e, i);
    }
    return Gf(m);
  }
  var dS = !1;
  function mO(e) {
    {
      dS || (dS = !0, c("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = cO.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || c("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Fn ? e : Qk(e, "findDOMNode");
  }
  function pO(e, t, n) {
    if (c("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !bu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Pl(t) && t._reactRootContainer === void 0;
      r && c("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Xf(null, e, t, !0, n);
  }
  function hO(e, t, n) {
    if (c("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !bu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Pl(t) && t._reactRootContainer === void 0;
      r && c("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Xf(null, e, t, !1, n);
  }
  function vO(e, t, n, r) {
    if (c("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !bu(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !uw(e))
      throw new Error("parentComponent must be a valid React Component");
    return Xf(e, t, n, !1, r);
  }
  var mS = !1;
  function gO(e) {
    if (mS || (mS = !0, c("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !bu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Pl(e) && e._reactRootContainer === void 0;
      t && c("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = Dv(e), r = n && !ai(n);
        r && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Pa(function() {
        Xf(null, null, e, !1, function() {
          e._reactRootContainer = null, lb(e);
        });
      }), !0;
    } else {
      {
        var i = Dv(e), u = !!(i && ai(i)), m = e.nodeType === Fn && bu(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  mC(Xk), hC(Zk), vC(eO), gC(Or), yC(cC), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && c("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), XN(bR), tw(ov, uk, Pa);
  function yO(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qf(t))
      throw new Error("Target container is not a DOM element.");
    return qk(e, t, null, n);
  }
  function bO(e, t, n, r) {
    return vO(e, t, n, r);
  }
  var kv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [ai, Yo, Vc, Eg, Rg, ov]
  };
  function xO(e, t) {
    return kv.usingClientEntryPoint || c('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sO(e, t);
  }
  function SO(e, t, n) {
    return kv.usingClientEntryPoint || c('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uO(e, t, n);
  }
  function NO(e) {
    return x0() && c("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pa(e);
  }
  var wO = oO({
    findFiberByHostInstance: qi,
    bundleType: 1,
    version: wv,
    rendererPackageName: "react-dom"
  });
  if (!wO && Lt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var pS = window.location.protocol;
    /^(https?|file):$/.test(pS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv, sr.createPortal = yO, sr.createRoot = xO, sr.findDOMNode = mO, sr.flushSync = NO, sr.hydrate = pO, sr.hydrateRoot = SO, sr.render = hO, sr.unmountComponentAtNode = gO, sr.unstable_batchedUpdates = ov, sr.unstable_renderSubtreeIntoContainer = bO, sr.version = wv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
s1.exports = sr;
var OO = s1.exports, c1, vS = OO;
{
  var gS = vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  c1 = function(o, a) {
    gS.usingClientEntryPoint = !0;
    try {
      return vS.createRoot(o, a);
    } finally {
      gS.usingClientEntryPoint = !1;
    }
  };
}
var f1 = { exports: {} }, d1 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var o = V;
  function a(p, v) {
    return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : a, l = o.useSyncExternalStore, d = o.useRef, f = o.useEffect, c = o.useMemo, y = o.useDebugValue;
  function h(p, v, b, S, E) {
    var j = d(null), M;
    j.current === null ? (M = {
      hasValue: !1,
      value: null
    }, j.current = M) : M = j.current;
    var D = c(function() {
      var k = !1, U, I, Z = function(be) {
        if (!k) {
          k = !0, U = be;
          var nt = S(be);
          if (E !== void 0 && M.hasValue) {
            var pe = M.value;
            if (E(pe, nt))
              return I = pe, pe;
          }
          return I = nt, nt;
        }
        var we = U, Ce = I;
        if (s(we, be))
          return Ce;
        var et = S(be);
        return E !== void 0 && E(Ce, et) ? Ce : (U = be, I = et, et);
      }, Le = b === void 0 ? null : b, ke = function() {
        return Z(v());
      }, he = Le === null ? void 0 : function() {
        return Z(Le());
      };
      return [ke, he];
    }, [v, b, S, E]), P = D[0], L = D[1], $ = l(p, P, L);
    return f(function() {
      M.hasValue = !0, M.value = $;
    }, [$]), y($), $;
  }
  d1.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
f1.exports = d1;
var LO = f1.exports, lr = (
  // prettier-ignore
  // @ts-ignore
  "default" in zv ? Sd : zv
), yS = Symbol.for("react-redux-context"), bS = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function _O() {
  if (!lr.createContext)
    return {};
  const o = bS[yS] ?? (bS[yS] = /* @__PURE__ */ new Map());
  let a = o.get(lr.createContext);
  return a || (a = lr.createContext(
    null
  ), a.displayName = "ReactRedux", o.set(lr.createContext, a)), a;
}
var Ei = /* @__PURE__ */ _O(), AO = () => {
  throw new Error("uSES not initialized!");
};
function eg(o = Ei) {
  return function() {
    const s = lr.useContext(o);
    if (!s)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return s;
  };
}
var m1 = /* @__PURE__ */ eg(), p1 = AO, PO = (o) => {
  p1 = o;
}, MO = (o, a) => o === a;
function UO(o = Ei) {
  const a = o === Ei ? m1 : eg(o), s = (l, d = {}) => {
    const { equalityFn: f = MO, devModeChecks: c = {} } = typeof d == "function" ? { equalityFn: d } : d;
    {
      if (!l)
        throw new Error("You must pass a selector to useSelector");
      if (typeof l != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof f != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: y,
      subscription: h,
      getServerState: p,
      stabilityCheck: v,
      identityFunctionCheck: b
    } = a(), S = lr.useRef(!0), E = lr.useCallback(
      {
        [l.name](M) {
          const D = l(M);
          {
            const {
              identityFunctionCheck: P,
              stabilityCheck: L
            } = {
              stabilityCheck: v,
              identityFunctionCheck: b,
              ...c
            };
            if (L === "always" || L === "once" && S.current) {
              const $ = l(M);
              if (!f(D, $)) {
                let k;
                try {
                  throw new Error();
                } catch (U) {
                  ({ stack: k } = U);
                }
                console.warn(
                  "Selector " + (l.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: M,
                    selected: D,
                    selected2: $,
                    stack: k
                  }
                );
              }
            }
            if ((P === "always" || P === "once" && S.current) && D === M) {
              let $;
              try {
                throw new Error();
              } catch (k) {
                ({ stack: $ } = k);
              }
              console.warn(
                "Selector " + (l.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: $ }
              );
            }
            S.current && (S.current = !1);
          }
          return D;
        }
      }[l.name],
      [l, v, c.stabilityCheck]
    ), j = p1(
      h.addNestedSub,
      y.getState,
      p || y.getState,
      E,
      f
    );
    return lr.useDebugValue(j), j;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var ji = /* @__PURE__ */ UO();
function VO(o) {
  o();
}
function FO() {
  let o = null, a = null;
  return {
    clear() {
      o = null, a = null;
    },
    notify() {
      VO(() => {
        let s = o;
        for (; s; )
          s.callback(), s = s.next;
      });
    },
    get() {
      const s = [];
      let l = o;
      for (; l; )
        s.push(l), l = l.next;
      return s;
    },
    subscribe(s) {
      let l = !0;
      const d = a = {
        callback: s,
        next: null,
        prev: a
      };
      return d.prev ? d.prev.next = d : o = d, function() {
        !l || o === null || (l = !1, d.next ? d.next.prev = d.prev : a = d.prev, d.prev ? d.prev.next = d.next : o = d.next);
      };
    }
  };
}
var xS = {
  notify() {
  },
  get: () => []
};
function zO(o, a) {
  let s, l = xS, d = 0, f = !1;
  function c(M) {
    v();
    const D = l.subscribe(M);
    let P = !1;
    return () => {
      P || (P = !0, D(), b());
    };
  }
  function y() {
    l.notify();
  }
  function h() {
    j.onStateChange && j.onStateChange();
  }
  function p() {
    return f;
  }
  function v() {
    d++, s || (s = o.subscribe(h), l = FO());
  }
  function b() {
    d--, s && d === 0 && (s(), s = void 0, l.clear(), l = xS);
  }
  function S() {
    f || (f = !0, v());
  }
  function E() {
    f && (f = !1, b());
  }
  const j = {
    addNestedSub: c,
    notifyNestedSubs: y,
    handleChangeWrapper: h,
    isSubscribed: p,
    trySubscribe: S,
    tryUnsubscribe: E,
    getListeners: () => l
  };
  return j;
}
var $O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", HO = typeof navigator < "u" && navigator.product === "ReactNative", BO = $O || HO ? lr.useLayoutEffect : lr.useEffect;
function JO({
  store: o,
  context: a,
  children: s,
  serverState: l,
  stabilityCheck: d = "once",
  identityFunctionCheck: f = "once"
}) {
  const c = lr.useMemo(() => {
    const p = zO(o);
    return {
      store: o,
      subscription: p,
      getServerState: l ? () => l : void 0,
      stabilityCheck: d,
      identityFunctionCheck: f
    };
  }, [o, l, d, f]), y = lr.useMemo(() => o.getState(), [o]);
  BO(() => {
    const { subscription: p } = c;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), y !== o.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [c, y]);
  const h = a || Ei;
  return /* @__PURE__ */ lr.createElement(h.Provider, { value: c }, s);
}
var IO = JO;
function h1(o = Ei) {
  const a = o === Ei ? m1 : (
    // @ts-ignore
    eg(o)
  ), s = () => {
    const { store: l } = a();
    return l;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var YO = /* @__PURE__ */ h1();
function KO(o = Ei) {
  const a = o === Ei ? YO : h1(o), s = () => a().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Lu = /* @__PURE__ */ KO();
PO(LO.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ru() {
  return Ru = Object.assign ? Object.assign.bind() : function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Ru.apply(this, arguments);
}
var wi;
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(wi || (wi = {}));
const SS = "popstate";
function WO(o) {
  o === void 0 && (o = {});
  function a(l, d) {
    let {
      pathname: f,
      search: c,
      hash: y
    } = l.location;
    return $v(
      "",
      {
        pathname: f,
        search: c,
        hash: y
      },
      // state defaults to `null` because `window.history.state` does
      d.state && d.state.usr || null,
      d.state && d.state.key || "default"
    );
  }
  function s(l, d) {
    return typeof d == "string" ? d : ju(d);
  }
  return qO(a, s, null, o);
}
function wt(o, a) {
  if (o === !1 || o === null || typeof o > "u")
    throw new Error(a);
}
function la(o, a) {
  if (!o) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function GO() {
  return Math.random().toString(36).substr(2, 8);
}
function NS(o, a) {
  return {
    usr: o.state,
    key: o.key,
    idx: a
  };
}
function $v(o, a, s, l) {
  return s === void 0 && (s = null), Ru({
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: ""
  }, typeof a == "string" ? Rs(a) : a, {
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || l || GO()
  });
}
function ju(o) {
  let {
    pathname: a = "/",
    search: s = "",
    hash: l = ""
  } = o;
  return s && s !== "?" && (a += s.charAt(0) === "?" ? s : "?" + s), l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l), a;
}
function Rs(o) {
  let a = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && (a.hash = o.substr(s), o = o.substr(0, s));
    let l = o.indexOf("?");
    l >= 0 && (a.search = o.substr(l), o = o.substr(0, l)), o && (a.pathname = o);
  }
  return a;
}
function qO(o, a, s, l) {
  l === void 0 && (l = {});
  let {
    window: d = document.defaultView,
    v5Compat: f = !1
  } = l, c = d.history, y = wi.Pop, h = null, p = v();
  p == null && (p = 0, c.replaceState(Ru({}, c.state, {
    idx: p
  }), ""));
  function v() {
    return (c.state || {
      idx: null
    }).idx;
  }
  function b() {
    y = wi.Pop;
    let D = v(), P = D == null ? null : D - p;
    p = D, h && h({
      action: y,
      location: M.location,
      delta: P
    });
  }
  function S(D, P) {
    y = wi.Push;
    let L = $v(M.location, D, P);
    p = v() + 1;
    let $ = NS(L, p), k = M.createHref(L);
    try {
      c.pushState($, "", k);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError")
        throw U;
      d.location.assign(k);
    }
    f && h && h({
      action: y,
      location: M.location,
      delta: 1
    });
  }
  function E(D, P) {
    y = wi.Replace;
    let L = $v(M.location, D, P);
    p = v();
    let $ = NS(L, p), k = M.createHref(L);
    c.replaceState($, "", k), f && h && h({
      action: y,
      location: M.location,
      delta: 0
    });
  }
  function j(D) {
    let P = d.location.origin !== "null" ? d.location.origin : d.location.href, L = typeof D == "string" ? D : ju(D);
    return L = L.replace(/ $/, "%20"), wt(P, "No window.location.(origin|href) available to create URL for href: " + L), new URL(L, P);
  }
  let M = {
    get action() {
      return y;
    },
    get location() {
      return o(d, c);
    },
    listen(D) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(SS, b), h = D, () => {
        d.removeEventListener(SS, b), h = null;
      };
    },
    createHref(D) {
      return a(d, D);
    },
    createURL: j,
    encodeLocation(D) {
      let P = j(D);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: S,
    replace: E,
    go(D) {
      return c.go(D);
    }
  };
  return M;
}
var wS;
(function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
})(wS || (wS = {}));
function QO(o, a, s) {
  return s === void 0 && (s = "/"), XO(o, a, s, !1);
}
function XO(o, a, s, l) {
  let d = typeof a == "string" ? Rs(a) : a, f = Ri(d.pathname || "/", s);
  if (f == null)
    return null;
  let c = v1(o);
  ZO(c);
  let y = null;
  for (let h = 0; y == null && h < c.length; ++h) {
    let p = c3(f);
    y = l3(c[h], p, l);
  }
  return y;
}
function v1(o, a, s, l) {
  a === void 0 && (a = []), s === void 0 && (s = []), l === void 0 && (l = "");
  let d = (f, c, y) => {
    let h = {
      relativePath: y === void 0 ? f.path || "" : y,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: c,
      route: f
    };
    h.relativePath.startsWith("/") && (wt(h.relativePath.startsWith(l), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(l.length));
    let p = za([l, h.relativePath]), v = s.concat(h);
    f.children && f.children.length > 0 && (wt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), v1(f.children, a, v, p)), !(f.path == null && !f.index) && a.push({
      path: p,
      score: o3(p, f.index),
      routesMeta: v
    });
  };
  return o.forEach((f, c) => {
    var y;
    if (f.path === "" || !((y = f.path) != null && y.includes("?")))
      d(f, c);
    else
      for (let h of g1(f.path))
        d(f, c, h);
  }), a;
}
function g1(o) {
  let a = o.split("/");
  if (a.length === 0) return [];
  let [s, ...l] = a, d = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (l.length === 0)
    return d ? [f, ""] : [f];
  let c = g1(l.join("/")), y = [];
  return y.push(...c.map((h) => h === "" ? f : [f, h].join("/"))), d && y.push(...c), y.map((h) => o.startsWith("/") && h === "" ? "/" : h);
}
function ZO(o) {
  o.sort((a, s) => a.score !== s.score ? s.score - a.score : s3(a.routesMeta.map((l) => l.childrenIndex), s.routesMeta.map((l) => l.childrenIndex)));
}
const e3 = /^:[\w-]+$/, t3 = 3, n3 = 2, r3 = 1, a3 = 10, i3 = -2, CS = (o) => o === "*";
function o3(o, a) {
  let s = o.split("/"), l = s.length;
  return s.some(CS) && (l += i3), a && (l += n3), s.filter((d) => !CS(d)).reduce((d, f) => d + (e3.test(f) ? t3 : f === "" ? r3 : a3), l);
}
function s3(o, a) {
  return o.length === a.length && o.slice(0, -1).every((l, d) => l === a[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    o[o.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function l3(o, a, s) {
  let {
    routesMeta: l
  } = o, d = {}, f = "/", c = [];
  for (let y = 0; y < l.length; ++y) {
    let h = l[y], p = y === l.length - 1, v = f === "/" ? a : a.slice(f.length) || "/", b = md({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: p
    }, v), S = h.route;
    if (!b && p && s && !l[l.length - 1].route.index && (b = md({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: !1
    }, v)), !b)
      return null;
    Object.assign(d, b.params), c.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: za([f, b.pathname]),
      pathnameBase: p3(za([f, b.pathnameBase])),
      route: S
    }), b.pathnameBase !== "/" && (f = za([f, b.pathnameBase]));
  }
  return c;
}
function md(o, a) {
  typeof o == "string" && (o = {
    path: o,
    caseSensitive: !1,
    end: !0
  });
  let [s, l] = u3(o.path, o.caseSensitive, o.end), d = a.match(s);
  if (!d) return null;
  let f = d[0], c = f.replace(/(.)\/+$/, "$1"), y = d.slice(1);
  return {
    params: l.reduce((p, v, b) => {
      let {
        paramName: S,
        isOptional: E
      } = v;
      if (S === "*") {
        let M = y[b] || "";
        c = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const j = y[b];
      return E && !j ? p[S] = void 0 : p[S] = (j || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: f,
    pathnameBase: c,
    pattern: o
  };
}
function u3(o, a, s) {
  a === void 0 && (a = !1), s === void 0 && (s = !0), la(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were ' + ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'));
  let l = [], d = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, y, h) => (l.push({
    paramName: y,
    isOptional: h != null
  }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (l.push({
    paramName: "*"
  }), d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), l];
}
function c3(o) {
  try {
    return o.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return la(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + a + ").")), o;
  }
}
function Ri(o, a) {
  if (a === "/") return o;
  if (!o.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let s = a.endsWith("/") ? a.length - 1 : a.length, l = o.charAt(s);
  return l && l !== "/" ? null : o.slice(s) || "/";
}
function f3(o, a) {
  a === void 0 && (a = "/");
  let {
    pathname: s,
    search: l = "",
    hash: d = ""
  } = typeof o == "string" ? Rs(o) : o;
  return {
    pathname: s ? s.startsWith("/") ? s : d3(s, a) : a,
    search: h3(l),
    hash: v3(d)
  };
}
function d3(o, a) {
  let s = a.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function Lv(o, a, s, l) {
  return "Cannot include a '" + o + "' character in a manually specified " + ("`to." + a + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function m3(o) {
  return o.filter((a, s) => s === 0 || a.route.path && a.route.path.length > 0);
}
function y1(o, a) {
  let s = m3(o);
  return a ? s.map((l, d) => d === s.length - 1 ? l.pathname : l.pathnameBase) : s.map((l) => l.pathnameBase);
}
function b1(o, a, s, l) {
  l === void 0 && (l = !1);
  let d;
  typeof o == "string" ? d = Rs(o) : (d = Ru({}, o), wt(!d.pathname || !d.pathname.includes("?"), Lv("?", "pathname", "search", d)), wt(!d.pathname || !d.pathname.includes("#"), Lv("#", "pathname", "hash", d)), wt(!d.search || !d.search.includes("#"), Lv("#", "search", "hash", d)));
  let f = o === "" || d.pathname === "", c = f ? "/" : d.pathname, y;
  if (c == null)
    y = s;
  else {
    let b = a.length - 1;
    if (!l && c.startsWith("..")) {
      let S = c.split("/");
      for (; S[0] === ".."; )
        S.shift(), b -= 1;
      d.pathname = S.join("/");
    }
    y = b >= 0 ? a[b] : "/";
  }
  let h = f3(d, y), p = c && c !== "/" && c.endsWith("/"), v = (f || c === ".") && s.endsWith("/");
  return !h.pathname.endsWith("/") && (p || v) && (h.pathname += "/"), h;
}
const za = (o) => o.join("/").replace(/\/\/+/g, "/"), p3 = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), h3 = (o) => !o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o, v3 = (o) => !o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o;
function g3(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const x1 = ["post", "put", "patch", "delete"];
new Set(x1);
const y3 = ["get", ...x1];
new Set(y3);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Tu.apply(this, arguments);
}
const _u = /* @__PURE__ */ V.createContext(null);
_u.displayName = "DataRouter";
const tg = /* @__PURE__ */ V.createContext(null);
tg.displayName = "DataRouterState";
const b3 = /* @__PURE__ */ V.createContext(null);
b3.displayName = "Await";
const Br = /* @__PURE__ */ V.createContext(null);
Br.displayName = "Navigation";
const Au = /* @__PURE__ */ V.createContext(null);
Au.displayName = "Location";
const $a = /* @__PURE__ */ V.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
$a.displayName = "Route";
const ng = /* @__PURE__ */ V.createContext(null);
ng.displayName = "RouteError";
function x3(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a;
  Pu() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: l,
    navigator: d
  } = V.useContext(Br), {
    hash: f,
    pathname: c,
    search: y
  } = Uu(o, {
    relative: s
  }), h = c;
  return l !== "/" && (h = c === "/" ? l : za([l, c])), d.createHref({
    pathname: h,
    search: y,
    hash: f
  });
}
function Pu() {
  return V.useContext(Au) != null;
}
function js() {
  return Pu() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), V.useContext(Au).location;
}
const S1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function N1(o) {
  V.useContext(Br).static || V.useLayoutEffect(o);
}
function Mu() {
  let {
    isDataRoute: o
  } = V.useContext($a);
  return o ? A3() : S3();
}
function S3() {
  Pu() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = V.useContext(_u), {
    basename: a,
    future: s,
    navigator: l
  } = V.useContext(Br), {
    matches: d
  } = V.useContext($a), {
    pathname: f
  } = js(), c = JSON.stringify(y1(d, s.v7_relativeSplatPath)), y = V.useRef(!1);
  return N1(() => {
    y.current = !0;
  }), V.useCallback(function(p, v) {
    if (v === void 0 && (v = {}), la(y.current, S1), !y.current) return;
    if (typeof p == "number") {
      l.go(p);
      return;
    }
    let b = b1(p, JSON.parse(c), f, v.relative === "path");
    o == null && a !== "/" && (b.pathname = b.pathname === "/" ? a : za([a, b.pathname])), (v.replace ? l.replace : l.push)(b, v.state, v);
  }, [a, l, c, f, o]);
}
function Uu(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a, {
    future: l
  } = V.useContext(Br), {
    matches: d
  } = V.useContext($a), {
    pathname: f
  } = js(), c = JSON.stringify(y1(d, l.v7_relativeSplatPath));
  return V.useMemo(() => b1(o, JSON.parse(c), f, s === "path"), [o, c, f, s]);
}
function N3(o, a) {
  return w3(o, a);
}
function w3(o, a, s, l) {
  Pu() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = V.useContext(Br), {
    matches: f
  } = V.useContext($a), c = f[f.length - 1], y = c ? c.params : {}, h = c ? c.pathname : "/", p = c ? c.pathnameBase : "/", v = c && c.route;
  {
    let L = v && v.path || "";
    C1(h, !v || L.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + h + '" (under <Route path="' + L + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + L + '"> to <Route ') + ('path="' + (L === "/" ? "*" : L + "/*") + '">.'));
  }
  let b = js(), S;
  if (a) {
    var E;
    let L = typeof a == "string" ? Rs(a) : a;
    p === "/" || (E = L.pathname) != null && E.startsWith(p) || wt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + L.pathname + '" was given in the `location` prop.')), S = L;
  } else
    S = b;
  let j = S.pathname || "/", M = j;
  if (p !== "/") {
    let L = p.replace(/^\//, "").split("/");
    M = "/" + j.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let D = QO(o, {
    pathname: M
  });
  la(v || D != null, 'No routes matched location "' + S.pathname + S.search + S.hash + '" '), la(D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + S.pathname + S.search + S.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let P = T3(D && D.map((L) => Object.assign({}, L, {
    params: Object.assign({}, y, L.params),
    pathname: za([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(L.pathname).pathname : L.pathname
    ]),
    pathnameBase: L.pathnameBase === "/" ? p : za([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(L.pathnameBase).pathname : L.pathnameBase
    ])
  })), f, s, l);
  return a && P ? /* @__PURE__ */ V.createElement(Au.Provider, {
    value: {
      location: Tu({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, S),
      navigationType: wi.Pop
    }
  }, P) : P;
}
function C3() {
  let o = _3(), a = g3(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), s = o instanceof Error ? o.stack : null, l = "rgba(200,200,200, 0.5)", d = {
    padding: "0.5rem",
    backgroundColor: l
  }, f = {
    padding: "2px 4px",
    backgroundColor: l
  }, c = null;
  return console.error("Error handled by React Router default ErrorBoundary:", o), c = /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ V.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ V.createElement("code", {
    style: f
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ V.createElement("code", {
    style: f
  }, "errorElement"), " prop on your route.")), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ V.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, a), s ? /* @__PURE__ */ V.createElement("pre", {
    style: d
  }, s) : null, c);
}
const E3 = /* @__PURE__ */ V.createElement(C3, null);
class R3 extends V.Component {
  constructor(a) {
    super(a), this.state = {
      location: a.location,
      revalidation: a.revalidation,
      error: a.error
    };
  }
  static getDerivedStateFromError(a) {
    return {
      error: a
    };
  }
  static getDerivedStateFromProps(a, s) {
    return s.location !== a.location || s.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : s.error,
      location: s.location,
      revalidation: a.revalidation || s.revalidation
    };
  }
  componentDidCatch(a, s) {
    console.error("React Router caught the following error during render", a, s);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ V.createElement($a.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ V.createElement(ng.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function j3(o) {
  let {
    routeContext: a,
    match: s,
    children: l
  } = o, d = V.useContext(_u);
  return d && d.static && d.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = s.route.id), /* @__PURE__ */ V.createElement($a.Provider, {
    value: a
  }, l);
}
function T3(o, a, s, l) {
  var d;
  if (a === void 0 && (a = []), s === void 0 && (s = null), l === void 0 && (l = null), o == null) {
    var f;
    if ((f = s) != null && f.errors)
      o = s.matches;
    else
      return null;
  }
  let c = o, y = (d = s) == null ? void 0 : d.errors;
  if (y != null) {
    let v = c.findIndex((b) => b.route.id && (y == null ? void 0 : y[b.route.id]) !== void 0);
    v >= 0 || wt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")), c = c.slice(0, Math.min(c.length, v + 1));
  }
  let h = !1, p = -1;
  if (s && l && l.v7_partialHydration)
    for (let v = 0; v < c.length; v++) {
      let b = c[v];
      if ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (p = v), b.route.id) {
        let {
          loaderData: S,
          errors: E
        } = s, j = b.route.loader && S[b.route.id] === void 0 && (!E || E[b.route.id] === void 0);
        if (b.route.lazy || j) {
          h = !0, p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((v, b, S) => {
    let E, j = !1, M = null, D = null;
    s && (E = y && b.route.id ? y[b.route.id] : void 0, M = b.route.errorElement || E3, h && (p < 0 && S === 0 ? (C1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, D = null) : p === S && (j = !0, D = b.route.hydrateFallbackElement || null)));
    let P = a.concat(c.slice(0, S + 1)), L = () => {
      let $;
      return E ? $ = M : j ? $ = D : b.route.Component ? $ = /* @__PURE__ */ V.createElement(b.route.Component, null) : b.route.element ? $ = b.route.element : $ = v, /* @__PURE__ */ V.createElement(j3, {
        match: b,
        routeContext: {
          outlet: v,
          matches: P,
          isDataRoute: s != null
        },
        children: $
      });
    };
    return s && (b.route.ErrorBoundary || b.route.errorElement || S === 0) ? /* @__PURE__ */ V.createElement(R3, {
      location: s.location,
      revalidation: s.revalidation,
      component: M,
      error: E,
      children: L(),
      routeContext: {
        outlet: null,
        matches: P,
        isDataRoute: !0
      }
    }) : L();
  }, null);
}
var w1 = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(w1 || {}), Du = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(Du || {});
function rg(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function D3(o) {
  let a = V.useContext(_u);
  return a || wt(!1, rg(o)), a;
}
function k3(o) {
  let a = V.useContext(tg);
  return a || wt(!1, rg(o)), a;
}
function O3(o) {
  let a = V.useContext($a);
  return a || wt(!1, rg(o)), a;
}
function ag(o) {
  let a = O3(o), s = a.matches[a.matches.length - 1];
  return s.route.id || wt(!1, o + ' can only be used on routes that contain a unique "id"'), s.route.id;
}
function L3() {
  return ag(Du.UseRouteId);
}
function _3() {
  var o;
  let a = V.useContext(ng), s = k3(Du.UseRouteError), l = ag(Du.UseRouteError);
  return a !== void 0 ? a : (o = s.errors) == null ? void 0 : o[l];
}
function A3() {
  let {
    router: o
  } = D3(w1.UseNavigateStable), a = ag(Du.UseNavigateStable), s = V.useRef(!1);
  return N1(() => {
    s.current = !0;
  }), V.useCallback(function(d, f) {
    f === void 0 && (f = {}), la(s.current, S1), s.current && (typeof d == "number" ? o.navigate(d) : o.navigate(d, Tu({
      fromRouteId: a
    }, f)));
  }, [o, a]);
}
const ES = {};
function C1(o, a, s) {
  !a && !ES[o] && (ES[o] = !0, la(!1, s));
}
function Si(o) {
  wt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function P3(o) {
  let {
    basename: a = "/",
    children: s = null,
    location: l,
    navigationType: d = wi.Pop,
    navigator: f,
    static: c = !1,
    future: y
  } = o;
  Pu() && wt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let h = a.replace(/^\/*/, "/"), p = V.useMemo(() => ({
    basename: h,
    navigator: f,
    static: c,
    future: Tu({
      v7_relativeSplatPath: !1
    }, y)
  }), [h, y, f, c]);
  typeof l == "string" && (l = Rs(l));
  let {
    pathname: v = "/",
    search: b = "",
    hash: S = "",
    state: E = null,
    key: j = "default"
  } = l, M = V.useMemo(() => {
    let D = Ri(v, h);
    return D == null ? null : {
      location: {
        pathname: D,
        search: b,
        hash: S,
        state: E,
        key: j
      },
      navigationType: d
    };
  }, [h, v, b, S, E, j, d]);
  return la(M != null, '<Router basename="' + h + '"> is not able to match the URL ' + ('"' + v + b + S + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), M == null ? null : /* @__PURE__ */ V.createElement(Br.Provider, {
    value: p
  }, /* @__PURE__ */ V.createElement(Au.Provider, {
    children: s,
    value: M
  }));
}
function M3(o) {
  let {
    children: a,
    location: s
  } = o;
  return N3(Hv(a), s);
}
new Promise(() => {
});
function Hv(o, a) {
  a === void 0 && (a = []);
  let s = [];
  return V.Children.forEach(o, (l, d) => {
    if (!/* @__PURE__ */ V.isValidElement(l))
      return;
    let f = [...a, d];
    if (l.type === V.Fragment) {
      s.push.apply(s, Hv(l.props.children, f));
      return;
    }
    l.type !== Si && wt(!1, "[" + (typeof l.type == "string" ? l.type : l.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !l.props.index || !l.props.children || wt(!1, "An index route cannot have child routes.");
    let c = {
      id: l.props.id || f.join("-"),
      caseSensitive: l.props.caseSensitive,
      element: l.props.element,
      Component: l.props.Component,
      index: l.props.index,
      path: l.props.path,
      loader: l.props.loader,
      action: l.props.action,
      errorElement: l.props.errorElement,
      ErrorBoundary: l.props.ErrorBoundary,
      hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null,
      shouldRevalidate: l.props.shouldRevalidate,
      handle: l.props.handle,
      lazy: l.props.lazy
    };
    l.props.children && (c.children = Hv(l.props.children, f)), s.push(c);
  }), s;
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Es.apply(this, arguments);
}
function ig(o, a) {
  if (o == null) return {};
  var s = {}, l = Object.keys(o), d, f;
  for (f = 0; f < l.length; f++)
    d = l[f], !(a.indexOf(d) >= 0) && (s[d] = o[d]);
  return s;
}
const sd = "get", ld = "application/x-www-form-urlencoded";
function Nd(o) {
  return o != null && typeof o.tagName == "string";
}
function U3(o) {
  return Nd(o) && o.tagName.toLowerCase() === "button";
}
function V3(o) {
  return Nd(o) && o.tagName.toLowerCase() === "form";
}
function F3(o) {
  return Nd(o) && o.tagName.toLowerCase() === "input";
}
function z3(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function $3(o, a) {
  return o.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !z3(o);
}
let ed = null;
function H3() {
  if (ed === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ed = !1;
    } catch {
      ed = !0;
    }
  return ed;
}
const B3 = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function _v(o) {
  return o != null && !B3.has(o) ? (la(!1, '"' + o + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ld + '"')), null) : o;
}
function J3(o, a) {
  let s, l, d, f, c;
  if (V3(o)) {
    let y = o.getAttribute("action");
    l = y ? Ri(y, a) : null, s = o.getAttribute("method") || sd, d = _v(o.getAttribute("enctype")) || ld, f = new FormData(o);
  } else if (U3(o) || F3(o) && (o.type === "submit" || o.type === "image")) {
    let y = o.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = o.getAttribute("formaction") || y.getAttribute("action");
    if (l = h ? Ri(h, a) : null, s = o.getAttribute("formmethod") || y.getAttribute("method") || sd, d = _v(o.getAttribute("formenctype")) || _v(y.getAttribute("enctype")) || ld, f = new FormData(y, o), !H3()) {
      let {
        name: p,
        type: v,
        value: b
      } = o;
      if (v === "image") {
        let S = p ? p + "." : "";
        f.append(S + "x", "0"), f.append(S + "y", "0");
      } else p && f.append(p, b);
    }
  } else {
    if (Nd(o))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = sd, l = null, d = ld, c = o;
  }
  return f && d === "text/plain" && (c = f, f = void 0), {
    action: l,
    method: s.toLowerCase(),
    encType: d,
    formData: f,
    body: c
  };
}
const I3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Y3 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], K3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], W3 = "6";
try {
  window.__reactRouterVersion = W3;
} catch {
}
const E1 = /* @__PURE__ */ V.createContext({
  isTransitioning: !1
});
E1.displayName = "ViewTransition";
const G3 = /* @__PURE__ */ V.createContext(/* @__PURE__ */ new Map());
G3.displayName = "Fetchers";
const q3 = "startTransition", RS = zv[q3];
function Q3(o) {
  let {
    basename: a,
    children: s,
    future: l,
    window: d
  } = o, f = V.useRef();
  f.current == null && (f.current = WO({
    window: d,
    v5Compat: !0
  }));
  let c = f.current, [y, h] = V.useState({
    action: c.action,
    location: c.location
  }), {
    v7_startTransition: p
  } = l || {}, v = V.useCallback((b) => {
    p && RS ? RS(() => h(b)) : h(b);
  }, [h, p]);
  return V.useLayoutEffect(() => c.listen(v), [c, v]), /* @__PURE__ */ V.createElement(P3, {
    basename: a,
    children: s,
    location: y.location,
    navigationType: y.action,
    navigator: c,
    future: l
  });
}
const X3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Z3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, In = /* @__PURE__ */ V.forwardRef(function(a, s) {
  let {
    onClick: l,
    relative: d,
    reloadDocument: f,
    replace: c,
    state: y,
    target: h,
    to: p,
    preventScrollReset: v,
    unstable_viewTransition: b
  } = a, S = ig(a, I3), {
    basename: E
  } = V.useContext(Br), j, M = !1;
  if (typeof p == "string" && Z3.test(p) && (j = p, X3))
    try {
      let $ = new URL(window.location.href), k = p.startsWith("//") ? new URL($.protocol + p) : new URL(p), U = Ri(k.pathname, E);
      k.origin === $.origin && U != null ? p = U + k.search + k.hash : M = !0;
    } catch {
      la(!1, '<Link to="' + p + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let D = x3(p, {
    relative: d
  }), P = rL(p, {
    replace: c,
    state: y,
    target: h,
    preventScrollReset: v,
    relative: d,
    unstable_viewTransition: b
  });
  function L($) {
    l && l($), $.defaultPrevented || P($);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ V.createElement("a", Es({}, S, {
      href: j || D,
      onClick: M || f ? l : L,
      ref: s,
      target: h
    }))
  );
});
In.displayName = "Link";
const eL = /* @__PURE__ */ V.forwardRef(function(a, s) {
  let {
    "aria-current": l = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: c = !1,
    style: y,
    to: h,
    unstable_viewTransition: p,
    children: v
  } = a, b = ig(a, Y3), S = Uu(h, {
    relative: b.relative
  }), E = js(), j = V.useContext(tg), {
    navigator: M,
    basename: D
  } = V.useContext(Br), P = j != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  uL(S) && p === !0, L = M.encodeLocation ? M.encodeLocation(S).pathname : S.pathname, $ = E.pathname, k = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  d || ($ = $.toLowerCase(), k = k ? k.toLowerCase() : null, L = L.toLowerCase()), k && D && (k = Ri(k, D) || k);
  const U = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
  let I = $ === L || !c && $.startsWith(L) && $.charAt(U) === "/", Z = k != null && (k === L || !c && k.startsWith(L) && k.charAt(L.length) === "/"), Le = {
    isActive: I,
    isPending: Z,
    isTransitioning: P
  }, ke = I ? l : void 0, he;
  typeof f == "function" ? he = f(Le) : he = [f, I ? "active" : null, Z ? "pending" : null, P ? "transitioning" : null].filter(Boolean).join(" ");
  let be = typeof y == "function" ? y(Le) : y;
  return /* @__PURE__ */ V.createElement(In, Es({}, b, {
    "aria-current": ke,
    className: he,
    ref: s,
    style: be,
    to: h,
    unstable_viewTransition: p
  }), typeof v == "function" ? v(Le) : v);
});
eL.displayName = "NavLink";
const tL = /* @__PURE__ */ V.forwardRef((o, a) => {
  let {
    fetcherKey: s,
    navigate: l,
    reloadDocument: d,
    replace: f,
    state: c,
    method: y = sd,
    action: h,
    onSubmit: p,
    relative: v,
    preventScrollReset: b,
    unstable_viewTransition: S
  } = o, E = ig(o, K3), j = sL(), M = lL(h, {
    relative: v
  }), D = y.toLowerCase() === "get" ? "get" : "post", P = (L) => {
    if (p && p(L), L.defaultPrevented) return;
    L.preventDefault();
    let $ = L.nativeEvent.submitter, k = ($ == null ? void 0 : $.getAttribute("formmethod")) || y;
    j($ || L.currentTarget, {
      fetcherKey: s,
      method: k,
      navigate: l,
      replace: f,
      state: c,
      relative: v,
      preventScrollReset: b,
      unstable_viewTransition: S
    });
  };
  return /* @__PURE__ */ V.createElement("form", Es({
    ref: a,
    method: D,
    action: M,
    onSubmit: d ? p : P
  }, E));
});
tL.displayName = "Form";
var pd;
(function(o) {
  o.UseScrollRestoration = "useScrollRestoration", o.UseSubmit = "useSubmit", o.UseSubmitFetcher = "useSubmitFetcher", o.UseFetcher = "useFetcher", o.useViewTransitionState = "useViewTransitionState";
})(pd || (pd = {}));
var jS;
(function(o) {
  o.UseFetcher = "useFetcher", o.UseFetchers = "useFetchers", o.UseScrollRestoration = "useScrollRestoration";
})(jS || (jS = {}));
function nL(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function R1(o) {
  let a = V.useContext(_u);
  return a || wt(!1, nL(o)), a;
}
function rL(o, a) {
  let {
    target: s,
    replace: l,
    state: d,
    preventScrollReset: f,
    relative: c,
    unstable_viewTransition: y
  } = a === void 0 ? {} : a, h = Mu(), p = js(), v = Uu(o, {
    relative: c
  });
  return V.useCallback((b) => {
    if ($3(b, s)) {
      b.preventDefault();
      let S = l !== void 0 ? l : ju(p) === ju(v);
      h(o, {
        replace: S,
        state: d,
        preventScrollReset: f,
        relative: c,
        unstable_viewTransition: y
      });
    }
  }, [p, h, v, l, d, s, o, f, c, y]);
}
function aL() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let iL = 0, oL = () => "__" + String(++iL) + "__";
function sL() {
  let {
    router: o
  } = R1(pd.UseSubmit), {
    basename: a
  } = V.useContext(Br), s = L3();
  return V.useCallback(function(l, d) {
    d === void 0 && (d = {}), aL();
    let {
      action: f,
      method: c,
      encType: y,
      formData: h,
      body: p
    } = J3(l, a);
    if (d.navigate === !1) {
      let v = d.fetcherKey || oL();
      o.fetch(v, s, d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: h,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        unstable_flushSync: d.unstable_flushSync
      });
    } else
      o.navigate(d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: h,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        replace: d.replace,
        state: d.state,
        fromRouteId: s,
        unstable_flushSync: d.unstable_flushSync,
        unstable_viewTransition: d.unstable_viewTransition
      });
  }, [o, a, s]);
}
function lL(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a, {
    basename: l
  } = V.useContext(Br), d = V.useContext($a);
  d || wt(!1, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1), c = Es({}, Uu(o || ".", {
    relative: s
  })), y = js();
  if (o == null) {
    c.search = y.search;
    let h = new URLSearchParams(c.search);
    h.has("index") && h.get("index") === "" && (h.delete("index"), c.search = h.toString() ? "?" + h.toString() : "");
  }
  return (!o || o === ".") && f.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (c.pathname = c.pathname === "/" ? l : za([l, c.pathname])), ju(c);
}
function uL(o, a) {
  a === void 0 && (a = {});
  let s = V.useContext(E1);
  s == null && wt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: l
  } = R1(pd.useViewTransitionState), d = Uu(o, {
    relative: a.relative
  });
  if (!s.isTransitioning)
    return !1;
  let f = Ri(s.currentLocation.pathname, l) || s.currentLocation.pathname, c = Ri(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return md(d.pathname, c) != null || md(d.pathname, f) != null;
}
var cL = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const fL = /* @__PURE__ */ xd(cL);
var dL = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function TS(o) {
  var a = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (a.name = s[1], (fL[s[1]] || o.charAt(o.length - 2) === "/") && (a.voidElement = !0), a.name.startsWith("!--"))) {
    var l = o.indexOf("-->");
    return { type: "comment", comment: l !== -1 ? o.slice(4, l) : "" };
  }
  for (var d = new RegExp(dL), f = null; (f = d.exec(o)) !== null; ) if (f[0].trim()) if (f[1]) {
    var c = f[1].trim(), y = [c, ""];
    c.indexOf("=") > -1 && (y = c.split("=")), a.attrs[y[0]] = y[1], d.lastIndex--;
  } else f[2] && (a.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return a;
}
var mL = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, pL = /^\s*$/, hL = /* @__PURE__ */ Object.create(null);
function j1(o, a) {
  switch (a.type) {
    case "text":
      return o + a.content;
    case "tag":
      return o += "<" + a.name + (a.attrs ? function(s) {
        var l = [];
        for (var d in s) l.push(d + '="' + s[d] + '"');
        return l.length ? " " + l.join(" ") : "";
      }(a.attrs) : "") + (a.voidElement ? "/>" : ">"), a.voidElement ? o : o + a.children.reduce(j1, "") + "</" + a.name + ">";
    case "comment":
      return o + "<!--" + a.comment + "-->";
  }
}
var vL = { parse: function(o, a) {
  a || (a = {}), a.components || (a.components = hL);
  var s, l = [], d = [], f = -1, c = !1;
  if (o.indexOf("<") !== 0) {
    var y = o.indexOf("<");
    l.push({ type: "text", content: y === -1 ? o : o.substring(0, y) });
  }
  return o.replace(mL, function(h, p) {
    if (c) {
      if (h !== "</" + s.name + ">") return;
      c = !1;
    }
    var v, b = h.charAt(1) !== "/", S = h.startsWith("<!--"), E = p + h.length, j = o.charAt(E);
    if (S) {
      var M = TS(h);
      return f < 0 ? (l.push(M), l) : ((v = d[f]).children.push(M), l);
    }
    if (b && (f++, (s = TS(h)).type === "tag" && a.components[s.name] && (s.type = "component", c = !0), s.voidElement || c || !j || j === "<" || s.children.push({ type: "text", content: o.slice(E, o.indexOf("<", E)) }), f === 0 && l.push(s), (v = d[f - 1]) && v.children.push(s), d[f] = s), (!b || s.voidElement) && (f > -1 && (s.voidElement || s.name === h.slice(2, -1)) && (f--, s = f === -1 ? l : d[f]), !c && j !== "<" && j)) {
      v = f === -1 ? l : d[f].children;
      var D = o.indexOf("<", E), P = o.slice(E, D === -1 ? void 0 : D);
      pL.test(P) && (P = " "), (D > -1 && f + v.length >= 0 || P !== " ") && v.push({ type: "text", content: P });
    }
  }), l;
}, stringify: function(o) {
  return o.reduce(function(a, s) {
    return a + j1("", s);
  }, "");
} };
function ud() {
  if (console && console.warn) {
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    typeof a[0] == "string" && (a[0] = `react-i18next:: ${a[0]}`), console.warn(...a);
  }
}
const DS = {};
function hd() {
  for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
    a[s] = arguments[s];
  typeof a[0] == "string" && DS[a[0]] || (typeof a[0] == "string" && (DS[a[0]] = /* @__PURE__ */ new Date()), ud(...a));
}
const T1 = (o, a) => () => {
  if (o.isInitialized)
    a();
  else {
    const s = () => {
      setTimeout(() => {
        o.off("initialized", s);
      }, 0), a();
    };
    o.on("initialized", s);
  }
};
function kS(o, a, s) {
  o.loadNamespaces(a, T1(o, s));
}
function OS(o, a, s, l) {
  typeof s == "string" && (s = [s]), s.forEach((d) => {
    o.options.ns.indexOf(d) < 0 && o.options.ns.push(d);
  }), o.loadLanguages(a, T1(o, l));
}
function gL(o, a) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const l = a.languages[0], d = a.options ? a.options.fallbackLng : !1, f = a.languages[a.languages.length - 1];
  if (l.toLowerCase() === "cimode") return !0;
  const c = (y, h) => {
    const p = a.services.backendConnector.state[`${y}|${h}`];
    return p === -1 || p === 2;
  };
  return s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !c(a.isLanguageChangingTo, o) ? !1 : !!(a.hasResourceBundle(l, o) || !a.services.backendConnector.backend || a.options.resources && !a.options.partialBundledLanguages || c(l, o) && (!d || c(f, o)));
}
function yL(o, a) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !a.languages || !a.languages.length ? (hd("i18n.languages were undefined or empty", a.languages), !0) : a.options.ignoreJSONStructure !== void 0 ? a.hasLoadedNamespace(o, {
    lng: s.lng,
    precheck: (d, f) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !f(d.isLanguageChangingTo, o)) return !1;
    }
  }) : gL(o, a, s);
}
const bL = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, xL = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, SL = (o) => xL[o], NL = (o) => o.replace(bL, SL);
let Bv = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: NL
};
function wL() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Bv = {
    ...Bv,
    ...o
  };
}
function D1() {
  return Bv;
}
let k1;
function CL(o) {
  k1 = o;
}
function og() {
  return k1;
}
function Av(o, a) {
  if (!o) return !1;
  const s = o.props ? o.props.children : o.children;
  return a ? s.length > 0 : !!s;
}
function Pv(o) {
  if (!o) return [];
  const a = o.props ? o.props.children : o.children;
  return o.props && o.props.i18nIsDynamicList ? Ss(a) : a;
}
function EL(o) {
  return Object.prototype.toString.call(o) !== "[object Array]" ? !1 : o.every((a) => V.isValidElement(a));
}
function Ss(o) {
  return Array.isArray(o) ? o : [o];
}
function RL(o, a) {
  const s = {
    ...a
  };
  return s.props = Object.assign(o.props, a.props), s;
}
function O1(o, a) {
  if (!o) return "";
  let s = "";
  const l = Ss(o), d = a.transSupportBasicHtmlNodes && a.transKeepBasicHtmlNodesFor ? a.transKeepBasicHtmlNodesFor : [];
  return l.forEach((f, c) => {
    if (typeof f == "string")
      s += `${f}`;
    else if (V.isValidElement(f)) {
      const y = Object.keys(f.props).length, h = d.indexOf(f.type) > -1, p = f.props.children;
      if (!p && h && y === 0)
        s += `<${f.type}/>`;
      else if (!p && (!h || y !== 0))
        s += `<${c}></${c}>`;
      else if (f.props.i18nIsDynamicList)
        s += `<${c}></${c}>`;
      else if (h && y === 1 && typeof p == "string")
        s += `<${f.type}>${p}</${f.type}>`;
      else {
        const v = O1(p, a);
        s += `<${c}>${v}</${c}>`;
      }
    } else if (f === null)
      ud("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof f == "object") {
      const {
        format: y,
        ...h
      } = f, p = Object.keys(h);
      if (p.length === 1) {
        const v = y ? `${p[0]}, ${y}` : p[0];
        s += `{{${v}}}`;
      } else
        ud("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", f);
    } else
      ud("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", f);
  }), s;
}
function jL(o, a, s, l, d, f) {
  if (a === "") return [];
  const c = l.transKeepBasicHtmlNodesFor || [], y = a && new RegExp(c.map((D) => `<${D}`).join("|")).test(a);
  if (!o && !y && !f) return [a];
  const h = {};
  function p(D) {
    Ss(D).forEach((L) => {
      typeof L != "string" && (Av(L) ? p(Pv(L)) : typeof L == "object" && !V.isValidElement(L) && Object.assign(h, L));
    });
  }
  p(o);
  const v = vL.parse(`<0>${a}</0>`), b = {
    ...h,
    ...d
  };
  function S(D, P, L) {
    const $ = Pv(D), k = j($, P.children, L);
    return EL($) && k.length === 0 || D.props && D.props.i18nIsDynamicList ? $ : k;
  }
  function E(D, P, L, $, k) {
    D.dummy ? (D.children = P, L.push(V.cloneElement(D, {
      key: $
    }, k ? void 0 : P))) : L.push(...V.Children.map([D], (U) => {
      const I = {
        ...U.props
      };
      return delete I.i18nIsDynamicList, V.createElement(U.type, {
        ...I,
        key: $,
        ref: U.ref
      }, k ? null : P);
    }));
  }
  function j(D, P, L) {
    const $ = Ss(D);
    return Ss(P).reduce((U, I, Z) => {
      const Le = I.children && I.children[0] && I.children[0].content && s.services.interpolator.interpolate(I.children[0].content, b, s.language);
      if (I.type === "tag") {
        let ke = $[parseInt(I.name, 10)];
        L.length === 1 && !ke && (ke = L[0][I.name]), ke || (ke = {});
        const he = Object.keys(I.attrs).length !== 0 ? RL({
          props: I.attrs
        }, ke) : ke, be = V.isValidElement(he), nt = be && Av(I, !0) && !I.voidElement, pe = y && typeof he == "object" && he.dummy && !be, we = typeof o == "object" && o !== null && Object.hasOwnProperty.call(o, I.name);
        if (typeof he == "string") {
          const Ce = s.services.interpolator.interpolate(he, b, s.language);
          U.push(Ce);
        } else if (Av(he) || nt) {
          const Ce = S(he, I, L);
          E(he, Ce, U, Z);
        } else if (pe) {
          const Ce = j($, I.children, L);
          E(he, Ce, U, Z);
        } else if (Number.isNaN(parseFloat(I.name)))
          if (we) {
            const Ce = S(he, I, L);
            E(he, Ce, U, Z, I.voidElement);
          } else if (l.transSupportBasicHtmlNodes && c.indexOf(I.name) > -1)
            if (I.voidElement)
              U.push(V.createElement(I.name, {
                key: `${I.name}-${Z}`
              }));
            else {
              const Ce = j($, I.children, L);
              U.push(V.createElement(I.name, {
                key: `${I.name}-${Z}`
              }, Ce));
            }
          else if (I.voidElement)
            U.push(`<${I.name} />`);
          else {
            const Ce = j($, I.children, L);
            U.push(`<${I.name}>${Ce}</${I.name}>`);
          }
        else if (typeof he == "object" && !be) {
          const Ce = I.children[0] ? Le : null;
          Ce && U.push(Ce);
        } else
          E(he, Le, U, Z, I.children.length !== 1 || !Le);
      } else if (I.type === "text") {
        const ke = l.transWrapTextNodes, he = f ? l.unescape(s.services.interpolator.interpolate(I.content, b, s.language)) : s.services.interpolator.interpolate(I.content, b, s.language);
        ke ? U.push(V.createElement(ke, {
          key: `${I.name}-${Z}`
        }, he)) : U.push(he);
      }
      return U;
    }, []);
  }
  const M = j([{
    dummy: !0,
    children: o || []
  }], v, Ss(o || []));
  return Pv(M[0]);
}
function TL(o) {
  let {
    children: a,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: h,
    components: p,
    ns: v,
    i18n: b,
    t: S,
    shouldUnescape: E,
    ...j
  } = o;
  const M = b || og();
  if (!M)
    return hd("You will need to pass in an i18next instance by using i18nextReactModule"), a;
  const D = S || M.t.bind(M) || ((nt) => nt), P = {
    ...D1(),
    ...M.options && M.options.react
  };
  let L = v || D.ns || M.options && M.options.defaultNS;
  L = typeof L == "string" ? [L] : L || ["translation"];
  const $ = O1(a, P), k = h || $ || P.transEmptyNodeValue || d, {
    hashTransKey: U
  } = P, I = d || (U ? U($ || k) : $ || k);
  M.options && M.options.interpolation && M.options.interpolation.defaultVariables && (y = y && Object.keys(y).length > 0 ? {
    ...y,
    ...M.options.interpolation.defaultVariables
  } : {
    ...M.options.interpolation.defaultVariables
  });
  const Z = y || s !== void 0 || !a ? c.interpolation : {
    interpolation: {
      ...c.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, Le = {
    ...c,
    context: f || c.context,
    count: s,
    ...y,
    ...Z,
    defaultValue: k,
    ns: L
  }, ke = I ? D(I, Le) : k;
  p && Object.keys(p).forEach((nt) => {
    const pe = p[nt];
    if (typeof pe.type == "function" || !pe.props || !pe.props.children || ke.indexOf(`${nt}/>`) < 0 && ke.indexOf(`${nt} />`) < 0) return;
    function we() {
      return V.createElement(V.Fragment, null, pe);
    }
    p[nt] = V.createElement(we);
  });
  const he = jL(p || a, ke, M, P, Le, E), be = l !== void 0 ? l : P.defaultTransParent;
  return be ? V.createElement(be, j, he) : he;
}
const DL = {
  type: "3rdParty",
  init(o) {
    wL(o.options.react), CL(o);
  }
}, L1 = V.createContext();
class kL {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(a) {
    a.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function xs(o) {
  let {
    children: a,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: h,
    components: p,
    ns: v,
    i18n: b,
    t: S,
    shouldUnescape: E,
    ...j
  } = o;
  const {
    i18n: M,
    defaultNS: D
  } = V.useContext(L1) || {}, P = b || M || og(), L = S || P && P.t.bind(P);
  return TL({
    children: a,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c,
    values: y,
    defaults: h,
    components: p,
    ns: v || L && L.ns || D || P && P.options && P.options.defaultNS,
    i18n: P,
    t: S,
    shouldUnescape: E,
    ...j
  });
}
const OL = (o, a) => {
  const s = V.useRef();
  return V.useEffect(() => {
    s.current = o;
  }, [o, a]), s.current;
};
function _1(o, a, s, l) {
  return o.getFixedT(a, s, l);
}
function LL(o, a, s, l) {
  return V.useCallback(_1(o, a, s, l), [o, a, s, l]);
}
function Ti(o) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: s
  } = a, {
    i18n: l,
    defaultNS: d
  } = V.useContext(L1) || {}, f = s || l || og();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new kL()), !f) {
    hd("You will need to pass in an i18next instance by using initReactI18next");
    const k = (I, Z) => typeof Z == "string" ? Z : Z && typeof Z == "object" && typeof Z.defaultValue == "string" ? Z.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, U = [k, {}, !1];
    return U.t = k, U.i18n = {}, U.ready = !1, U;
  }
  f.options.react && f.options.react.wait !== void 0 && hd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...D1(),
    ...f.options.react,
    ...a
  }, {
    useSuspense: y,
    keyPrefix: h
  } = c;
  let p = d || f.options && f.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(p);
  const v = (f.isInitialized || f.initializedStoreOnce) && p.every((k) => yL(k, f, c)), b = LL(f, a.lng || null, c.nsMode === "fallback" ? p : p[0], h), S = () => b, E = () => _1(f, a.lng || null, c.nsMode === "fallback" ? p : p[0], h), [j, M] = V.useState(S);
  let D = p.join();
  a.lng && (D = `${a.lng}${D}`);
  const P = OL(D), L = V.useRef(!0);
  V.useEffect(() => {
    const {
      bindI18n: k,
      bindI18nStore: U
    } = c;
    L.current = !0, !v && !y && (a.lng ? OS(f, a.lng, p, () => {
      L.current && M(E);
    }) : kS(f, p, () => {
      L.current && M(E);
    })), v && P && P !== D && L.current && M(E);
    function I() {
      L.current && M(E);
    }
    return k && f && f.on(k, I), U && f && f.store.on(U, I), () => {
      L.current = !1, k && f && k.split(" ").forEach((Z) => f.off(Z, I)), U && f && U.split(" ").forEach((Z) => f.store.off(Z, I));
    };
  }, [f, D]), V.useEffect(() => {
    L.current && v && M(S);
  }, [f, h, v]);
  const $ = [j, f, v];
  if ($.t = j, $.i18n = f, $.ready = v, v || !v && !y) return $;
  throw new Promise((k) => {
    a.lng ? OS(f, a.lng, p, () => k()) : kS(f, p, () => k());
  });
}
const _L = "Management", AL = "Comment", PL = "Login", ML = "Logout", UL = "Register", VL = "Email", FL = "Password", zL = "Nickname", $L = "Personal Website", HL = "Setting", BL = "Profile", JL = "Homepage", IL = "All", YL = "Mine", KL = "Approved", WL = "Waiting", GL = "Spam", qL = "Sticky", QL = "Edit", XL = "Reply", ZL = "Action", e_ = "Filter", t_ = "Author", n_ = "Content", r_ = "Username", a_ = "Submit", i_ = "Cancel", o_ = "At", s_ = "Migration", l_ = "Exporting…", u_ = "Under verification", c_ = "Administrator", f_ = "Guest", d_ = "User", m_ = "Role", td = {
  management: _L,
  comment: AL,
  login: PL,
  logout: ML,
  register: UL,
  email: VL,
  password: FL,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: zL,
  website: $L,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: HL,
  profile: BL,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: JL,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: IL,
  mine: YL,
  approved: KL,
  "approved button": "Approved",
  waiting: WL,
  spam: GL,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: qL,
  edit: QL,
  reply: XL,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: ZL,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: e_,
  author: t_,
  content: n_,
  username: r_,
  submit: a_,
  cancel: i_,
  at: o_,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: s_,
  exporting: l_,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: u_,
  administrator: c_,
  guest: f_,
  user: d_,
  "manage users": "Manage Users",
  role: m_,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, p_ = "管理", h_ = "评论", v_ = "登录", g_ = "登出", y_ = "用户注册", b_ = "邮箱", x_ = "密码", S_ = "昵称", N_ = "个人网站", w_ = "个人设置", C_ = "个人资料", E_ = "个人主页地址", R_ = "所有", j_ = "我的", T_ = "已通过", D_ = "待审核", k_ = "垃圾", O_ = "置顶评论", L_ = "编辑", __ = "回复", A_ = "操作", P_ = "筛选", M_ = "作者", U_ = "内容", V_ = "用户名", F_ = "提交", z_ = "取消", $_ = "于", H_ = "导入导出", B_ = "导出中...", J_ = "待认证", I_ = "管理员", Y_ = "普通用户", K_ = "用户", W_ = "角色", LS = {
  management: p_,
  comment: h_,
  login: v_,
  logout: g_,
  register: y_,
  email: b_,
  password: x_,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: S_,
  website: N_,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: w_,
  profile: C_,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: E_,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: R_,
  mine: j_,
  approved: T_,
  "approved button": "通过",
  waiting: D_,
  spam: k_,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: O_,
  edit: L_,
  reply: __,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: A_,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: P_,
  author: M_,
  content: U_,
  username: V_,
  submit: F_,
  cancel: z_,
  at: $_,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: H_,
  exporting: B_,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: J_,
  administrator: I_,
  guest: Y_,
  user: K_,
  "manage users": "管理用户",
  role: W_,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, G_ = "管理", q_ = "留言", Q_ = "登入", X_ = "登出", Z_ = "使用者註冊", eA = "信箱", tA = "密碼", nA = "暱稱", rA = "個人網站", aA = "個人設定", iA = "個人資料", oA = "個人首頁網址", sA = "所有", lA = "我的", uA = "已通過", cA = "待審核", fA = "垃圾", dA = "置頂留言", mA = "編輯", pA = "回覆", hA = "動作", vA = "篩選", gA = "作者", yA = "內容", bA = "使用者名稱", xA = "送出", SA = "取消", NA = "於", wA = "匯入匯出", CA = "匯出中...", EA = "待認證", RA = "管理員", jA = "使用者", TA = "使用者", DA = "角色", kA = {
  management: G_,
  comment: q_,
  login: Q_,
  logout: X_,
  register: Z_,
  email: eA,
  password: tA,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: nA,
  website: rA,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: aA,
  profile: iA,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: oA,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: sA,
  mine: lA,
  approved: uA,
  "approved button": "通過",
  waiting: cA,
  spam: fA,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: dA,
  edit: mA,
  reply: pA,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: hA,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: vA,
  author: gA,
  content: yA,
  username: bA,
  submit: xA,
  cancel: SA,
  at: NA,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: wA,
  exporting: CA,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: EA,
  administrator: RA,
  guest: jA,
  user: TA,
  "manage users": "使用者管理",
  role: DA,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, _S = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US", "jp", "jp-JP"]
  }
], OA = {
  "zh-cn": { translations: LS },
  "zh-CN": { translations: LS },
  en: { translations: td },
  "en-US": { translations: td },
  "zh-TW": { translations: kA },
  jp: { translations: td },
  "jp-JP": { translations: td }
};
function ho() {
  const o = Lu(), a = Mu(), s = ji((v) => v.user), { t: l, i18n: d } = Ti(), [f, c] = V.useState(null), y = V.useMemo(() => {
    const v = _S.find(
      (b) => b.alias.includes(d.language)
    );
    return (v == null ? void 0 : v.value) ?? "";
  }, [d.language]);
  V.useEffect(() => {
    !(s != null && s.email) || !(s != null && s.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((v) => v.json()).then((v) => {
      s.__version !== v.version && c(v.version);
    });
  }, [s == null ? void 0 : s.email]);
  const h = function(v) {
    d.changeLanguage(v.target.value);
  }, p = function(v) {
    v.preventDefault(), o.user.logout(), a("/ui/login");
  };
  return [
    /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (s == null ? void 0 : s.type) === "administrator" ? /* @__PURE__ */ w.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ w.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ w.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ w.jsxDEV(In, { to: "/ui", children: l("management") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(In, { to: "/ui", children: l("comment") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/user", children: l("user") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/migration", children: l("migration") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ w.jsxDEV("div", { className: "operate", children: [
        /* @__PURE__ */ w.jsxDEV("div", { className: "language-select", children: /* @__PURE__ */ w.jsxDEV(
          "select",
          {
            defaultValue: y,
            onChange: h,
            style: { width: 120 },
            children: _S.map((v) => /* @__PURE__ */ w.jsxDEV("option", { value: v.value, children: v.label }, v.value, !1, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
              lineNumber: 78,
              columnNumber: 15
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 72,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        s != null && s.type ? /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/profile", className: "author", children: s.display_name }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this) : null,
        s != null && s.type ? /* @__PURE__ */ w.jsxDEV("a", { className: "exit", href: "#", onClick: p, children: l("logout") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this) : null
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ] }, "header", !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
      lineNumber: 49,
      columnNumber: 5
    }, this),
    f ? /* @__PURE__ */ w.jsxDEV("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ w.jsxDEV(
      xs,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ w.jsxDEV("a", {}, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 103,
            columnNumber: 16
          }, this)
        },
        values: {
          version: f
        },
        transKeepBasicHtmlNodesFor: ["a"]
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
        lineNumber: 99,
        columnNumber: 9
      },
      this
    ) }, "upgrade", !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this) : null
  ];
}
function LA() {
  const { t: o } = Ti(), a = Lu(), s = Mu(), l = ji((p) => p.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1);
  V.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const h = async function(p) {
    p.preventDefault(), f(!1);
    const v = p.target.email.value;
    if (!v)
      return f(o("please input email"));
    try {
      y(!0), await a.user.forgot({
        email: v
      }), alert(o("find password success! please go to your mailbox to reset it!")), s("/ui/login");
    } catch {
      f(o("find password error! try again later"));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ w.jsxDEV("ul", { children: d ? /* @__PURE__ */ w.jsxDEV("li", { children: d }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 57,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ w.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: h, children: [
        /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
              lineNumber: 67,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ w.jsxDEV("p", { className: "description", style: { textAlign: "left" }, children: o(
            "you will receive an email which contains a link to create new password"
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ w.jsxDEV(
          "button",
          {
            type: "submit",
            disabled: c,
            className: "btn btn-l w-100 primary",
            children: o("get new password")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
            lineNumber: 82,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
const _A = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), AA = (o) => /* @__PURE__ */ V.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...o }, /* @__PURE__ */ V.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ V.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), PA = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), MA = (o) => /* @__PURE__ */ V.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...o }, /* @__PURE__ */ V.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ V.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), UA = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), VA = (o) => /* @__PURE__ */ V.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...o }, /* @__PURE__ */ V.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), FA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: PA,
  github: _A,
  google: VA,
  qq: UA,
  twitter: AA,
  weibo: MA
}, Symbol.toStringTag, { value: "Module" })), cd = {}, AS = (o) => {
  const a = document.querySelector(`script[src="${o}"]`);
  if (a)
    return cd[o] = {
      loading: !1,
      error: null,
      scriptEl: a
    };
};
function A1({
  src: o,
  checkForExisting: a = !1,
  ...s
}) {
  let l = o ? cd[o] : void 0;
  !l && a && o && PS && (l = AS(o));
  const [d, f] = V.useState(
    l ? l.loading : !!o
  ), [c, y] = V.useState(l ? l.error : null), [h, p] = V.useState(!1);
  return V.useEffect(() => {
    if (!PS || !o || h || c) return;
    l = cd[o], !l && a && (l = AS(o));
    let v;
    l ? v = l.scriptEl : (v = document.createElement("script"), v.src = o, Object.keys(s).forEach((E) => {
      v[E] === void 0 ? v.setAttribute(E, s[E]) : v[E] = s[E];
    }), l = cd[o] = {
      loading: !0,
      error: null,
      scriptEl: v
    });
    const b = () => {
      l && (l.loading = !1), f(!1), p(!0);
    }, S = (E) => {
      l && (l.error = E), y(E);
    };
    return v.addEventListener("load", b), v.addEventListener("error", S), document.body.appendChild(v), () => {
      v.removeEventListener("load", b), v.removeEventListener("error", S);
    };
  }, [o]), [d, c];
}
const PS = typeof window < "u" && typeof window.document < "u";
function zA({
  sitekey: o,
  hideDefaultBadge: a = !1,
  checkForExisting: s = !0
}) {
  const [l, d] = V.useState();
  return V.useEffect(() => {
    $A && a && HA(".grecaptcha-badge { visibility: hidden; }");
  }, [a]), A1({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${o}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    }),
    checkForExisting: s
  }), V.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    });
  }, []), (f) => new Promise((c, y) => {
    l ? c(l.execute(o, { action: f })) : y(new Error("Recaptcha script not available"));
  });
}
const $A = typeof window < "u" && typeof window.document < "u", HA = (o) => {
  const a = document.createElement("style");
  document.head.appendChild(a);
  const s = a.sheet;
  s && s.insertRule(o, s.cssRules.length);
};
function BA({ sitekey: o, checkForExisting: a = !0 }) {
  const [s, l] = V.useState();
  return A1({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      l(window.turnstile);
    }),
    async: !1,
    checkForExisting: a
  }), V.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      l(window.turnstile);
    });
  }, []), (d) => new Promise((f, c) => {
    if (!s)
      return c(new Error("Turnstile script not available"));
    s.render(".captcha-container", {
      sitekey: o,
      action: d,
      callback: f
    });
  });
}
function P1(o) {
  const a = zA(o), s = BA(o);
  return window.turnstileKey ? s : window.recaptchaV3Key ? a : () => {
  };
}
const JA = {
  type: "logger",
  log(o) {
    this.output("log", o);
  },
  warn(o) {
    this.output("warn", o);
  },
  error(o) {
    this.output("error", o);
  },
  output(o, a) {
    console && console[o] && console[o].apply(console, a);
  }
};
class vd {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(a, s);
  }
  init(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = s.prefix || "i18next:", this.logger = a || JA, this.options = s, this.debug = s.debug;
  }
  log() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return this.forward(s, "log", "", !0);
  }
  warn() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "", !0);
  }
  error() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return this.forward(s, "error", "");
  }
  deprecate() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(a, s, l, d) {
    return d && !this.debug ? null : (typeof a[0] == "string" && (a[0] = `${l}${this.prefix} ${a[0]}`), this.logger[s](a));
  }
  create(a) {
    return new vd(this.logger, {
      prefix: `${this.prefix}:${a}:`,
      ...this.options
    });
  }
  clone(a) {
    return a = a || this.options, a.prefix = a.prefix || this.prefix, new vd(this.logger, a);
  }
}
var sa = new vd();
class wd {
  constructor() {
    this.observers = {};
  }
  on(a, s) {
    return a.split(" ").forEach((l) => {
      this.observers[l] || (this.observers[l] = /* @__PURE__ */ new Map());
      const d = this.observers[l].get(s) || 0;
      this.observers[l].set(s, d + 1);
    }), this;
  }
  off(a, s) {
    if (this.observers[a]) {
      if (!s) {
        delete this.observers[a];
        return;
      }
      this.observers[a].delete(s);
    }
  }
  emit(a) {
    for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
      l[d - 1] = arguments[d];
    this.observers[a] && Array.from(this.observers[a].entries()).forEach((c) => {
      let [y, h] = c;
      for (let p = 0; p < h; p++)
        y(...l);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [y, h] = c;
      for (let p = 0; p < h; p++)
        y.apply(y, [a, ...l]);
    });
  }
}
function Su() {
  let o, a;
  const s = new Promise((l, d) => {
    o = l, a = d;
  });
  return s.resolve = o, s.reject = a, s;
}
function MS(o) {
  return o == null ? "" : "" + o;
}
function IA(o, a, s) {
  o.forEach((l) => {
    a[l] && (s[l] = a[l]);
  });
}
const YA = /###/g;
function Eu(o, a, s) {
  function l(y) {
    return y && y.indexOf("###") > -1 ? y.replace(YA, ".") : y;
  }
  function d() {
    return !o || typeof o == "string";
  }
  const f = typeof a != "string" ? a : a.split(".");
  let c = 0;
  for (; c < f.length - 1; ) {
    if (d()) return {};
    const y = l(f[c]);
    !o[y] && s && (o[y] = new s()), Object.prototype.hasOwnProperty.call(o, y) ? o = o[y] : o = {}, ++c;
  }
  return d() ? {} : {
    obj: o,
    k: l(f[c])
  };
}
function US(o, a, s) {
  const {
    obj: l,
    k: d
  } = Eu(o, a, Object);
  if (l !== void 0 || a.length === 1) {
    l[d] = s;
    return;
  }
  let f = a[a.length - 1], c = a.slice(0, a.length - 1), y = Eu(o, c, Object);
  for (; y.obj === void 0 && c.length; )
    f = `${c[c.length - 1]}.${f}`, c = c.slice(0, c.length - 1), y = Eu(o, c, Object), y && y.obj && typeof y.obj[`${y.k}.${f}`] < "u" && (y.obj = void 0);
  y.obj[`${y.k}.${f}`] = s;
}
function KA(o, a, s, l) {
  const {
    obj: d,
    k: f
  } = Eu(o, a, Object);
  d[f] = d[f] || [], d[f].push(s);
}
function gd(o, a) {
  const {
    obj: s,
    k: l
  } = Eu(o, a);
  if (s)
    return s[l];
}
function WA(o, a, s) {
  const l = gd(o, s);
  return l !== void 0 ? l : gd(a, s);
}
function M1(o, a, s) {
  for (const l in a)
    l !== "__proto__" && l !== "constructor" && (l in o ? typeof o[l] == "string" || o[l] instanceof String || typeof a[l] == "string" || a[l] instanceof String ? s && (o[l] = a[l]) : M1(o[l], a[l], s) : o[l] = a[l]);
  return o;
}
function ys(o) {
  return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var GA = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function qA(o) {
  return typeof o == "string" ? o.replace(/[&<>"'\/]/g, (a) => GA[a]) : o;
}
class QA {
  constructor(a) {
    this.capacity = a, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(a) {
    const s = this.regExpMap.get(a);
    if (s !== void 0)
      return s;
    const l = new RegExp(a);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(a, l), this.regExpQueue.push(a), l;
  }
}
const XA = [" ", ",", "?", "!", ";"], ZA = new QA(20);
function eP(o, a, s) {
  a = a || "", s = s || "";
  const l = XA.filter((c) => a.indexOf(c) < 0 && s.indexOf(c) < 0);
  if (l.length === 0) return !0;
  const d = ZA.getRegExp(`(${l.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let f = !d.test(o);
  if (!f) {
    const c = o.indexOf(s);
    c > 0 && !d.test(o.substring(0, c)) && (f = !0);
  }
  return f;
}
function Jv(o, a) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!o) return;
  if (o[a]) return o[a];
  const l = a.split(s);
  let d = o;
  for (let f = 0; f < l.length; ) {
    if (!d || typeof d != "object")
      return;
    let c, y = "";
    for (let h = f; h < l.length; ++h)
      if (h !== f && (y += s), y += l[h], c = d[y], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && h < l.length - 1)
          continue;
        f += h - f + 1;
        break;
      }
    d = c;
  }
  return d;
}
function yd(o) {
  return o && o.indexOf("_") > 0 ? o.replace("_", "-") : o;
}
class VS extends wd {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = a || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(a) {
    this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
  }
  removeNamespaces(a) {
    const s = this.options.ns.indexOf(a);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator, c = d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let y;
    a.indexOf(".") > -1 ? y = a.split(".") : (y = [a, s], l && (Array.isArray(l) ? y.push(...l) : typeof l == "string" && f ? y.push(...l.split(f)) : y.push(l)));
    const h = gd(this.data, y);
    return !h && !s && !l && a.indexOf(".") > -1 && (a = y[0], s = y[1], l = y.slice(2).join(".")), h || !c || typeof l != "string" ? h : Jv(this.data && this.data[a] && this.data[a][s], l, f);
  }
  addResource(a, s, l, d) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let y = [a, s];
    l && (y = y.concat(c ? l.split(c) : l)), a.indexOf(".") > -1 && (y = a.split("."), d = s, s = y[1]), this.addNamespaces(s), US(this.data, y, d), f.silent || this.emit("added", a, s, l, d);
  }
  addResources(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const f in l)
      (typeof l[f] == "string" || Array.isArray(l[f])) && this.addResource(a, s, f, l[f], {
        silent: !0
      });
    d.silent || this.emit("added", a, s, l);
  }
  addResourceBundle(a, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, y = [a, s];
    a.indexOf(".") > -1 && (y = a.split("."), d = l, l = s, s = y[1]), this.addNamespaces(s);
    let h = gd(this.data, y) || {};
    c.skipCopy || (l = JSON.parse(JSON.stringify(l))), d ? M1(h, l, f) : h = {
      ...h,
      ...l
    }, US(this.data, y, h), c.silent || this.emit("added", a, s, l);
  }
  removeResourceBundle(a, s) {
    this.hasResourceBundle(a, s) && delete this.data[a][s], this.removeNamespaces(s), this.emit("removed", a, s);
  }
  hasResourceBundle(a, s) {
    return this.getResource(a, s) !== void 0;
  }
  getResourceBundle(a, s) {
    return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(a, s)
    } : this.getResource(a, s);
  }
  getDataByLanguage(a) {
    return this.data[a];
  }
  hasLanguageSomeTranslations(a) {
    const s = this.getDataByLanguage(a);
    return !!(s && Object.keys(s) || []).find((d) => s[d] && Object.keys(s[d]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var U1 = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, a, s, l, d) {
    return o.forEach((f) => {
      this.processors[f] && (a = this.processors[f].process(a, s, l, d));
    }), a;
  }
};
const FS = {};
class bd extends wd {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), IA(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = sa.create("translator");
  }
  changeLanguage(a) {
    a && (this.language = a);
  }
  exists(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (a == null)
      return !1;
    const l = this.resolve(a, s);
    return l && l.res !== void 0;
  }
  extractFromKey(a, s) {
    let l = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ":");
    const d = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let f = s.ns || this.options.defaultNS || [];
    const c = l && a.indexOf(l) > -1, y = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !eP(a, l, d);
    if (c && !y) {
      const h = a.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0)
        return {
          key: a,
          namespaces: f
        };
      const p = a.split(l);
      (l !== d || l === d && this.options.ns.indexOf(p[0]) > -1) && (f = p.shift()), a = p.join(d);
    }
    return typeof f == "string" && (f = [f]), {
      key: a,
      namespaces: f
    };
  }
  translate(a, s, l) {
    if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof s == "object" && (s = {
      ...s
    }), s || (s = {}), a == null) return "";
    Array.isArray(a) || (a = [String(a)]);
    const d = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, f = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: y
    } = this.extractFromKey(a[a.length - 1], s), h = y[y.length - 1], p = s.lng || this.language, v = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (v) {
        const k = s.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${h}${k}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: h,
          usedParams: this.getUsedParamsDetails(s)
        } : `${h}${k}${c}`;
      }
      return d ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: p,
        usedNS: h,
        usedParams: this.getUsedParamsDetails(s)
      } : c;
    }
    const b = this.resolve(a, s);
    let S = b && b.res;
    const E = b && b.usedKey || c, j = b && b.exactUsedKey || c, M = Object.prototype.toString.apply(S), D = ["[object Number]", "[object Function]", "[object RegExp]"], P = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (L && S && (typeof S != "string" && typeof S != "boolean" && typeof S != "number") && D.indexOf(M) < 0 && !(typeof P == "string" && Array.isArray(S))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const k = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, S, {
          ...s,
          ns: y
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return d ? (b.res = k, b.usedParams = this.getUsedParamsDetails(s), b) : k;
      }
      if (f) {
        const k = Array.isArray(S), U = k ? [] : {}, I = k ? j : E;
        for (const Z in S)
          if (Object.prototype.hasOwnProperty.call(S, Z)) {
            const Le = `${I}${f}${Z}`;
            U[Z] = this.translate(Le, {
              ...s,
              joinArrays: !1,
              ns: y
            }), U[Z] === Le && (U[Z] = S[Z]);
          }
        S = U;
      }
    } else if (L && typeof P == "string" && Array.isArray(S))
      S = S.join(P), S && (S = this.extendTranslation(S, a, s, l));
    else {
      let k = !1, U = !1;
      const I = s.count !== void 0 && typeof s.count != "string", Z = bd.hasDefaultValue(s), Le = I ? this.pluralResolver.getSuffix(p, s.count, s) : "", ke = s.ordinal && I ? this.pluralResolver.getSuffix(p, s.count, {
        ordinal: !1
      }) : "", he = I && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), be = he && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${Le}`] || s[`defaultValue${ke}`] || s.defaultValue;
      !this.isValidLookup(S) && Z && (k = !0, S = be), this.isValidLookup(S) || (U = !0, S = c);
      const pe = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && U ? void 0 : S, we = Z && be !== S && this.options.updateMissing;
      if (U || k || we) {
        if (this.logger.log(we ? "updateKey" : "missingKey", p, h, c, we ? be : S), f) {
          const Qe = this.resolve(c, {
            ...s,
            keySeparator: !1
          });
          Qe && Qe.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ce = [];
        const et = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && et && et[0])
          for (let Qe = 0; Qe < et.length; Qe++)
            Ce.push(et[Qe]);
        else this.options.saveMissingTo === "all" ? Ce = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Ce.push(s.lng || this.language);
        const Ee = (Qe, Ot, We) => {
          const pn = Z && We !== S ? We : pe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(Qe, h, Ot, pn, we, s) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Qe, h, Ot, pn, we, s), this.emit("missingKey", Qe, h, Ot, S);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && I ? Ce.forEach((Qe) => {
          const Ot = this.pluralResolver.getSuffixes(Qe, s);
          he && s[`defaultValue${this.options.pluralSeparator}zero`] && Ot.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Ot.push(`${this.options.pluralSeparator}zero`), Ot.forEach((We) => {
            Ee([Qe], c + We, s[`defaultValue${We}`] || be);
          });
        }) : Ee(Ce, c, be));
      }
      S = this.extendTranslation(S, a, s, b, l), U && S === c && this.options.appendNamespaceToMissingKey && (S = `${h}:${c}`), (U || k) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? S = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${c}` : c, k ? S : void 0) : S = this.options.parseMissingKeyHandler(S));
    }
    return d ? (b.res = S, b.usedParams = this.getUsedParamsDetails(s), b) : S;
  }
  extendTranslation(a, s, l, d, f) {
    var c = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      a = this.i18nFormat.parse(a, {
        ...this.options.interpolation.defaultVariables,
        ...l
      }, l.lng || this.language || d.usedLng, d.usedNS, d.usedKey, {
        resolved: d
      });
    else if (!l.skipInterpolation) {
      l.interpolation && this.interpolator.init({
        ...l,
        interpolation: {
          ...this.options.interpolation,
          ...l.interpolation
        }
      });
      const p = typeof a == "string" && (l && l.interpolation && l.interpolation.skipOnVariables !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let v;
      if (p) {
        const S = a.match(this.interpolator.nestingRegexp);
        v = S && S.length;
      }
      let b = l.replace && typeof l.replace != "string" ? l.replace : l;
      if (this.options.interpolation.defaultVariables && (b = {
        ...this.options.interpolation.defaultVariables,
        ...b
      }), a = this.interpolator.interpolate(a, b, l.lng || this.language, l), p) {
        const S = a.match(this.interpolator.nestingRegexp), E = S && S.length;
        v < E && (l.nest = !1);
      }
      !l.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (l.lng = d.usedLng), l.nest !== !1 && (a = this.interpolator.nest(a, function() {
        for (var S = arguments.length, E = new Array(S), j = 0; j < S; j++)
          E[j] = arguments[j];
        return f && f[0] === E[0] && !l.context ? (c.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${s[0]}`), null) : c.translate(...E, s);
      }, l)), l.interpolation && this.interpolator.reset();
    }
    const y = l.postProcess || this.options.postProcess, h = typeof y == "string" ? [y] : y;
    return a != null && h && h.length && l.applyPostProcessor !== !1 && (a = U1.handle(h, a, s, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...d,
        usedParams: this.getUsedParamsDetails(l)
      },
      ...l
    } : l, this)), a;
  }
  resolve(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l, d, f, c, y;
    return typeof a == "string" && (a = [a]), a.forEach((h) => {
      if (this.isValidLookup(l)) return;
      const p = this.extractFromKey(h, s), v = p.key;
      d = v;
      let b = p.namespaces;
      this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
      const S = s.count !== void 0 && typeof s.count != "string", E = S && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", M = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      b.forEach((D) => {
        this.isValidLookup(l) || (y = D, !FS[`${M[0]}-${D}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(y) && (FS[`${M[0]}-${D}`] = !0, this.logger.warn(`key "${d}" for languages "${M.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), M.forEach((P) => {
          if (this.isValidLookup(l)) return;
          c = P;
          const L = [v];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(L, v, P, D, s);
          else {
            let k;
            S && (k = this.pluralResolver.getSuffix(P, s.count, s));
            const U = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (S && (L.push(v + k), s.ordinal && k.indexOf(I) === 0 && L.push(v + k.replace(I, this.options.pluralSeparator)), E && L.push(v + U)), j) {
              const Z = `${v}${this.options.contextSeparator}${s.context}`;
              L.push(Z), S && (L.push(Z + k), s.ordinal && k.indexOf(I) === 0 && L.push(Z + k.replace(I, this.options.pluralSeparator)), E && L.push(Z + U));
            }
          }
          let $;
          for (; $ = L.pop(); )
            this.isValidLookup(l) || (f = $, l = this.getResource(P, D, $, s));
        }));
      });
    }), {
      res: l,
      usedKey: d,
      exactUsedKey: f,
      usedLng: c,
      usedNS: y
    };
  }
  isValidLookup(a) {
    return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === "");
  }
  getResource(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(a, s, l, d) : this.resourceStore.getResource(a, s, l, d);
  }
  getUsedParamsDetails() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], l = a.replace && typeof a.replace != "string";
    let d = l ? a.replace : a;
    if (l && typeof a.count < "u" && (d.count = a.count), this.options.interpolation.defaultVariables && (d = {
      ...this.options.interpolation.defaultVariables,
      ...d
    }), !l) {
      d = {
        ...d
      };
      for (const f of s)
        delete d[f];
    }
    return d;
  }
  static hasDefaultValue(a) {
    const s = "defaultValue";
    for (const l in a)
      if (Object.prototype.hasOwnProperty.call(a, l) && s === l.substring(0, s.length) && a[l] !== void 0)
        return !0;
    return !1;
  }
}
function Mv(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
class zS {
  constructor(a) {
    this.options = a, this.supportedLngs = this.options.supportedLngs || !1, this.logger = sa.create("languageUtils");
  }
  getScriptPartFromCode(a) {
    if (a = yd(a), !a || a.indexOf("-") < 0) return null;
    const s = a.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(a) {
    if (a = yd(a), !a || a.indexOf("-") < 0) return a;
    const s = a.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(a) {
    if (typeof a == "string" && a.indexOf("-") > -1) {
      const s = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let l = a.split("-");
      return this.options.lowerCaseLng ? l = l.map((d) => d.toLowerCase()) : l.length === 2 ? (l[0] = l[0].toLowerCase(), l[1] = l[1].toUpperCase(), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Mv(l[1].toLowerCase()))) : l.length === 3 && (l[0] = l[0].toLowerCase(), l[1].length === 2 && (l[1] = l[1].toUpperCase()), l[0] !== "sgn" && l[2].length === 2 && (l[2] = l[2].toUpperCase()), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Mv(l[1].toLowerCase())), s.indexOf(l[2].toLowerCase()) > -1 && (l[2] = Mv(l[2].toLowerCase()))), l.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? a.toLowerCase() : a;
  }
  isSupportedCode(a) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (a = this.getLanguagePartFromCode(a)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(a) > -1;
  }
  getBestMatchFromCodes(a) {
    if (!a) return null;
    let s;
    return a.forEach((l) => {
      if (s) return;
      const d = this.formatLanguageCode(l);
      (!this.options.supportedLngs || this.isSupportedCode(d)) && (s = d);
    }), !s && this.options.supportedLngs && a.forEach((l) => {
      if (s) return;
      const d = this.getLanguagePartFromCode(l);
      if (this.isSupportedCode(d)) return s = d;
      s = this.options.supportedLngs.find((f) => {
        if (f === d) return f;
        if (!(f.indexOf("-") < 0 && d.indexOf("-") < 0) && (f.indexOf("-") > 0 && d.indexOf("-") < 0 && f.substring(0, f.indexOf("-")) === d || f.indexOf(d) === 0 && d.length > 1))
          return f;
      });
    }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s;
  }
  getFallbackCodes(a, s) {
    if (!a) return [];
    if (typeof a == "function" && (a = a(s)), typeof a == "string" && (a = [a]), Array.isArray(a)) return a;
    if (!s) return a.default || [];
    let l = a[s];
    return l || (l = a[this.getScriptPartFromCode(s)]), l || (l = a[this.formatLanguageCode(s)]), l || (l = a[this.getLanguagePartFromCode(s)]), l || (l = a.default), l || [];
  }
  toResolveHierarchy(a, s) {
    const l = this.getFallbackCodes(s || this.options.fallbackLng || [], a), d = [], f = (c) => {
      c && (this.isSupportedCode(c) ? d.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return typeof a == "string" && (a.indexOf("-") > -1 || a.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(a)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(a)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(a))) : typeof a == "string" && f(this.formatLanguageCode(a)), l.forEach((c) => {
      d.indexOf(c) < 0 && f(this.formatLanguageCode(c));
    }), d;
  }
}
let tP = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], nP = {
  1: function(o) {
    return +(o > 1);
  },
  2: function(o) {
    return +(o != 1);
  },
  3: function(o) {
    return 0;
  },
  4: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  5: function(o) {
    return o == 0 ? 0 : o == 1 ? 1 : o == 2 ? 2 : o % 100 >= 3 && o % 100 <= 10 ? 3 : o % 100 >= 11 ? 4 : 5;
  },
  6: function(o) {
    return o == 1 ? 0 : o >= 2 && o <= 4 ? 1 : 2;
  },
  7: function(o) {
    return o == 1 ? 0 : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  8: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o != 8 && o != 11 ? 2 : 3;
  },
  9: function(o) {
    return +(o >= 2);
  },
  10: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o < 7 ? 2 : o < 11 ? 3 : 4;
  },
  11: function(o) {
    return o == 1 || o == 11 ? 0 : o == 2 || o == 12 ? 1 : o > 2 && o < 20 ? 2 : 3;
  },
  12: function(o) {
    return +(o % 10 != 1 || o % 100 == 11);
  },
  13: function(o) {
    return +(o !== 0);
  },
  14: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o == 3 ? 2 : 3;
  },
  15: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o % 10 >= 2 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  16: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o !== 0 ? 1 : 2;
  },
  17: function(o) {
    return o == 1 || o % 10 == 1 && o % 100 != 11 ? 0 : 1;
  },
  18: function(o) {
    return o == 0 ? 0 : o == 1 ? 1 : 2;
  },
  19: function(o) {
    return o == 1 ? 0 : o == 0 || o % 100 > 1 && o % 100 < 11 ? 1 : o % 100 > 10 && o % 100 < 20 ? 2 : 3;
  },
  20: function(o) {
    return o == 1 ? 0 : o == 0 || o % 100 > 0 && o % 100 < 20 ? 1 : 2;
  },
  21: function(o) {
    return o % 100 == 1 ? 1 : o % 100 == 2 ? 2 : o % 100 == 3 || o % 100 == 4 ? 3 : 0;
  },
  22: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : (o < 0 || o > 10) && o % 10 == 0 ? 2 : 3;
  }
};
const rP = ["v1", "v2", "v3"], aP = ["v4"], $S = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function iP() {
  const o = {};
  return tP.forEach((a) => {
    a.lngs.forEach((s) => {
      o[s] = {
        numbers: a.nr,
        plurals: nP[a.fc]
      };
    });
  }), o;
}
class oP {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = a, this.options = s, this.logger = sa.create("pluralResolver"), (!this.options.compatibilityJSON || aP.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = iP();
  }
  addRule(a, s) {
    this.rules[a] = s;
  }
  getRule(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(yd(a === "dev" ? "en" : a), {
          type: s.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[a] || this.rules[this.languageUtils.getLanguagePartFromCode(a)];
  }
  needsPlural(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(a, s);
    return this.shouldUseIntlApi() ? l && l.resolvedOptions().pluralCategories.length > 1 : l && l.numbers.length > 1;
  }
  getPluralFormsOfKey(a, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(a, l).map((d) => `${s}${d}`);
  }
  getSuffixes(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(a, s);
    return l ? this.shouldUseIntlApi() ? l.resolvedOptions().pluralCategories.sort((d, f) => $S[d] - $S[f]).map((d) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : l.numbers.map((d) => this.getSuffix(a, d, s)) : [];
  }
  getSuffix(a, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const d = this.getRule(a, l);
    return d ? this.shouldUseIntlApi() ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${d.select(s)}` : this.getSuffixRetroCompatible(d, s) : (this.logger.warn(`no plural rule found for: ${a}`), "");
  }
  getSuffixRetroCompatible(a, s) {
    const l = a.noAbs ? a.plurals(s) : a.plurals(Math.abs(s));
    let d = a.numbers[l];
    this.options.simplifyPluralSuffix && a.numbers.length === 2 && a.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
    const f = () => this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
    return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? `_plural_${d.toString()}` : f() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && a.numbers.length === 2 && a.numbers[0] === 1 ? f() : this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString();
  }
  shouldUseIntlApi() {
    return !rP.includes(this.options.compatibilityJSON);
  }
}
function HS(o, a, s) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = WA(o, a, s);
  return !f && d && typeof s == "string" && (f = Jv(o, s, l), f === void 0 && (f = Jv(a, s, l))), f;
}
class sP {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = sa.create("interpolator"), this.options = a, this.format = a.interpolation && a.interpolation.format || ((s) => s), this.init(a);
  }
  init() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    a.interpolation || (a.interpolation = {
      escapeValue: !0
    });
    const {
      escape: s,
      escapeValue: l,
      useRawValueToEscape: d,
      prefix: f,
      prefixEscaped: c,
      suffix: y,
      suffixEscaped: h,
      formatSeparator: p,
      unescapeSuffix: v,
      unescapePrefix: b,
      nestingPrefix: S,
      nestingPrefixEscaped: E,
      nestingSuffix: j,
      nestingSuffixEscaped: M,
      nestingOptionsSeparator: D,
      maxReplaces: P,
      alwaysFormat: L
    } = a.interpolation;
    this.escape = s !== void 0 ? s : qA, this.escapeValue = l !== void 0 ? l : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = f ? ys(f) : c || "{{", this.suffix = y ? ys(y) : h || "}}", this.formatSeparator = p || ",", this.unescapePrefix = v ? "" : b || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = S ? ys(S) : E || ys("$t("), this.nestingSuffix = j ? ys(j) : M || ys(")"), this.nestingOptionsSeparator = D || ",", this.maxReplaces = P || 1e3, this.alwaysFormat = L !== void 0 ? L : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const a = (s, l) => s && s.source === l ? (s.lastIndex = 0, s) : new RegExp(l, "g");
    this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = a(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = a(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(a, s, l, d) {
    let f, c, y;
    const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function p(j) {
      return j.replace(/\$/g, "$$$$");
    }
    const v = (j) => {
      if (j.indexOf(this.formatSeparator) < 0) {
        const L = HS(s, h, j, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, l, {
          ...d,
          ...s,
          interpolationkey: j
        }) : L;
      }
      const M = j.split(this.formatSeparator), D = M.shift().trim(), P = M.join(this.formatSeparator).trim();
      return this.format(HS(s, h, D, this.options.keySeparator, this.options.ignoreJSONStructure), P, l, {
        ...d,
        ...s,
        interpolationkey: D
      });
    };
    this.resetRegExp();
    const b = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, S = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (j) => p(j)
    }, {
      regex: this.regexp,
      safeValue: (j) => this.escapeValue ? p(this.escape(j)) : p(j)
    }].forEach((j) => {
      for (y = 0; f = j.regex.exec(a); ) {
        const M = f[1].trim();
        if (c = v(M), c === void 0)
          if (typeof b == "function") {
            const P = b(a, f, d);
            c = typeof P == "string" ? P : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, M))
            c = "";
          else if (S) {
            c = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${M} for interpolating ${a}`), c = "";
        else typeof c != "string" && !this.useRawValueToEscape && (c = MS(c));
        const D = j.safeValue(c);
        if (a = a.replace(f[0], D), S ? (j.regex.lastIndex += c.length, j.regex.lastIndex -= f[0].length) : j.regex.lastIndex = 0, y++, y >= this.maxReplaces)
          break;
      }
    }), a;
  }
  nest(a, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, f, c;
    function y(h, p) {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const b = h.split(new RegExp(`${v}[ ]*{`));
      let S = `{${b[1]}`;
      h = b[0], S = this.interpolate(S, c);
      const E = S.match(/'/g), j = S.match(/"/g);
      (E && E.length % 2 === 0 && !j || j.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
      try {
        c = JSON.parse(S), p && (c = {
          ...p,
          ...c
        });
      } catch (M) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, M), `${h}${v}${S}`;
      }
      return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, h;
    }
    for (; d = this.nestingRegexp.exec(a); ) {
      let h = [];
      c = {
        ...l
      }, c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let p = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const v = d[1].split(this.formatSeparator).map((b) => b.trim());
        d[1] = v.shift(), h = v, p = !0;
      }
      if (f = s(y.call(this, d[1].trim(), c), c), f && d[0] === a && typeof f != "string") return f;
      typeof f != "string" && (f = MS(f)), f || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${a}`), f = ""), p && (f = h.reduce((v, b) => this.format(v, b, l.lng, {
        ...l,
        interpolationkey: d[1].trim()
      }), f.trim())), a = a.replace(d[0], f), this.regexp.lastIndex = 0;
    }
    return a;
  }
}
function lP(o) {
  let a = o.toLowerCase().trim();
  const s = {};
  if (o.indexOf("(") > -1) {
    const l = o.split("(");
    a = l[0].toLowerCase().trim();
    const d = l[1].substring(0, l[1].length - 1);
    a === "currency" && d.indexOf(":") < 0 ? s.currency || (s.currency = d.trim()) : a === "relativetime" && d.indexOf(":") < 0 ? s.range || (s.range = d.trim()) : d.split(";").forEach((c) => {
      if (c) {
        const [y, ...h] = c.split(":"), p = h.join(":").trim().replace(/^'+|'+$/g, ""), v = y.trim();
        s[v] || (s[v] = p), p === "false" && (s[v] = !1), p === "true" && (s[v] = !0), isNaN(p) || (s[v] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: a,
    formatOptions: s
  };
}
function bs(o) {
  const a = {};
  return function(l, d, f) {
    const c = d + JSON.stringify(f);
    let y = a[c];
    return y || (y = o(yd(d), f), a[c] = y), y(l);
  };
}
class uP {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = sa.create("formatter"), this.options = a, this.formats = {
      number: bs((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      currency: bs((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l,
          style: "currency"
        });
        return (f) => d.format(f);
      }),
      datetime: bs((s, l) => {
        const d = new Intl.DateTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      relativetime: bs((s, l) => {
        const d = new Intl.RelativeTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f, l.range || "day");
      }),
      list: bs((s, l) => {
        const d = new Intl.ListFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      })
    }, this.init(a);
  }
  init(a) {
    const l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",";
  }
  add(a, s) {
    this.formats[a.toLowerCase().trim()] = s;
  }
  addCached(a, s) {
    this.formats[a.toLowerCase().trim()] = bs(s);
  }
  format(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return s.split(this.formatSeparator).reduce((y, h) => {
      const {
        formatName: p,
        formatOptions: v
      } = lP(h);
      if (this.formats[p]) {
        let b = y;
        try {
          const S = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, E = S.locale || S.lng || d.locale || d.lng || l;
          b = this.formats[p](y, E, {
            ...v,
            ...d,
            ...S
          });
        } catch (S) {
          this.logger.warn(S);
        }
        return b;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return y;
    }, a);
  }
}
function cP(o, a) {
  o.pending[a] !== void 0 && (delete o.pending[a], o.pendingCount--);
}
class fP extends wd {
  constructor(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = a, this.store = s, this.services = l, this.languageUtils = l.languageUtils, this.options = d, this.logger = sa.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(l, d.backend, d);
  }
  queueLoad(a, s, l, d) {
    const f = {}, c = {}, y = {}, h = {};
    return a.forEach((p) => {
      let v = !0;
      s.forEach((b) => {
        const S = `${p}|${b}`;
        !l.reload && this.store.hasResourceBundle(p, b) ? this.state[S] = 2 : this.state[S] < 0 || (this.state[S] === 1 ? c[S] === void 0 && (c[S] = !0) : (this.state[S] = 1, v = !1, c[S] === void 0 && (c[S] = !0), f[S] === void 0 && (f[S] = !0), h[b] === void 0 && (h[b] = !0)));
      }), v || (y[p] = !0);
    }), (Object.keys(f).length || Object.keys(c).length) && this.queue.push({
      pending: c,
      pendingCount: Object.keys(c).length,
      loaded: {},
      errors: [],
      callback: d
    }), {
      toLoad: Object.keys(f),
      pending: Object.keys(c),
      toLoadLanguages: Object.keys(y),
      toLoadNamespaces: Object.keys(h)
    };
  }
  loaded(a, s, l) {
    const d = a.split("|"), f = d[0], c = d[1];
    s && this.emit("failedLoading", f, c, s), l && this.store.addResourceBundle(f, c, l, void 0, void 0, {
      skipCopy: !0
    }), this.state[a] = s ? -1 : 2;
    const y = {};
    this.queue.forEach((h) => {
      KA(h.loaded, [f], c), cP(h, a), s && h.errors.push(s), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((p) => {
        y[p] || (y[p] = {});
        const v = h.loaded[p];
        v.length && v.forEach((b) => {
          y[p][b] === void 0 && (y[p][b] = !0);
        });
      }), h.done = !0, h.errors.length ? h.callback(h.errors) : h.callback());
    }), this.emit("loaded", y), this.queue = this.queue.filter((h) => !h.done);
  }
  read(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!a.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: a,
        ns: s,
        fcName: l,
        tried: d,
        wait: f,
        callback: c
      });
      return;
    }
    this.readingCalls++;
    const y = (p, v) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const b = this.waitingReads.shift();
        this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
      }
      if (p && v && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, a, s, l, d + 1, f * 2, c);
        }, f);
        return;
      }
      c(p, v);
    }, h = this.backend[l].bind(this.backend);
    if (h.length === 2) {
      try {
        const p = h(a, s);
        p && typeof p.then == "function" ? p.then((v) => y(null, v)).catch(y) : y(null, p);
      } catch (p) {
        y(p);
      }
      return;
    }
    return h(a, s, y);
  }
  prepareLoading(a, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
    typeof a == "string" && (a = this.languageUtils.toResolveHierarchy(a)), typeof s == "string" && (s = [s]);
    const f = this.queueLoad(a, s, l, d);
    if (!f.toLoad.length)
      return f.pending.length || d(), null;
    f.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(a, s, l) {
    this.prepareLoading(a, s, {}, l);
  }
  reload(a, s, l) {
    this.prepareLoading(a, s, {
      reload: !0
    }, l);
  }
  loadOne(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const l = a.split("|"), d = l[0], f = l[1];
    this.read(d, f, "read", void 0, void 0, (c, y) => {
      c && this.logger.warn(`${s}loading namespace ${f} for language ${d} failed`, c), !c && y && this.logger.log(`${s}loaded namespace ${f} for language ${d}`, y), this.loaded(a, c, y);
    });
  }
  saveMissing(a, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, y = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s)) {
      this.logger.warn(`did not save key "${l}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(l == null || l === "")) {
      if (this.backend && this.backend.create) {
        const h = {
          ...c,
          isUpdate: f
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let v;
            p.length === 5 ? v = p(a, s, l, d, h) : v = p(a, s, l, d), v && typeof v.then == "function" ? v.then((b) => y(null, b)).catch(y) : y(null, v);
          } catch (v) {
            y(v);
          }
        else
          p(a, s, l, d, y, h);
      }
      !a || !a[0] || this.store.addResource(a[0], s, l, d);
    }
  }
}
function BS() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(a) {
      let s = {};
      if (typeof a[1] == "object" && (s = a[1]), typeof a[1] == "string" && (s.defaultValue = a[1]), typeof a[2] == "string" && (s.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
        const l = a[3] || a[2];
        Object.keys(l).forEach((d) => {
          s[d] = l[d];
        });
      }
      return s;
    },
    interpolation: {
      escapeValue: !0,
      format: (o) => o,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function JS(o) {
  return typeof o.ns == "string" && (o.ns = [o.ns]), typeof o.fallbackLng == "string" && (o.fallbackLng = [o.fallbackLng]), typeof o.fallbackNS == "string" && (o.fallbackNS = [o.fallbackNS]), o.supportedLngs && o.supportedLngs.indexOf("cimode") < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), o;
}
function nd() {
}
function dP(o) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((s) => {
    typeof o[s] == "function" && (o[s] = o[s].bind(o));
  });
}
class ku extends wd {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = JS(a), this.services = {}, this.logger = sa, this.modules = {
      external: []
    }, dP(this), s && !this.isInitialized && !a.isClone) {
      if (!this.options.initImmediate)
        return this.init(a, s), this;
      setTimeout(() => {
        this.init(a, s);
      }, 0);
    }
  }
  init() {
    var a = this;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof s == "function" && (l = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
    const d = BS();
    this.options = {
      ...d,
      ...this.options,
      ...JS(s)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
    function f(v) {
      return v ? typeof v == "function" ? new v() : v : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? sa.init(f(this.modules.logger), this.options) : sa.init(null, this.options);
      let v;
      this.modules.formatter ? v = this.modules.formatter : typeof Intl < "u" && (v = uP);
      const b = new zS(this.options);
      this.store = new VS(this.options.resources, this.options);
      const S = this.services;
      S.logger = sa, S.resourceStore = this.store, S.languageUtils = b, S.pluralResolver = new oP(b, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), v && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (S.formatter = f(v), S.formatter.init(S, this.options), this.options.interpolation.format = S.formatter.format.bind(S.formatter)), S.interpolator = new sP(this.options), S.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, S.backendConnector = new fP(f(this.modules.backend), S.resourceStore, S, this.options), S.backendConnector.on("*", function(E) {
        for (var j = arguments.length, M = new Array(j > 1 ? j - 1 : 0), D = 1; D < j; D++)
          M[D - 1] = arguments[D];
        a.emit(E, ...M);
      }), this.modules.languageDetector && (S.languageDetector = f(this.modules.languageDetector), S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)), this.modules.i18nFormat && (S.i18nFormat = f(this.modules.i18nFormat), S.i18nFormat.init && S.i18nFormat.init(this)), this.translator = new bd(this.services, this.options), this.translator.on("*", function(E) {
        for (var j = arguments.length, M = new Array(j > 1 ? j - 1 : 0), D = 1; D < j; D++)
          M[D - 1] = arguments[D];
        a.emit(E, ...M);
      }), this.modules.external.forEach((E) => {
        E.init && E.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, l || (l = nd), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((v) => {
      this[v] = function() {
        return a.store[v](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((v) => {
      this[v] = function() {
        return a.store[v](...arguments), a;
      };
    });
    const h = Su(), p = () => {
      const v = (b, S) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), h.resolve(S), l(b, S);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return v(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, v);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), h;
  }
  loadResources(a) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nd;
    const d = typeof a == "string" ? a : this.language;
    if (typeof a == "function" && (l = a), !this.options.resources || this.options.partialBundledLanguages) {
      if (d && d.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return l();
      const f = [], c = (y) => {
        if (!y || y === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(y).forEach((p) => {
          p !== "cimode" && f.indexOf(p) < 0 && f.push(p);
        });
      };
      d ? c(d) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => c(h)), this.options.preload && this.options.preload.forEach((y) => c(y)), this.services.backendConnector.load(f, this.options.ns, (y) => {
        !y && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(y);
      });
    } else
      l(null);
  }
  reloadResources(a, s, l) {
    const d = Su();
    return a || (a = this.languages), s || (s = this.options.ns), l || (l = nd), this.services.backendConnector.reload(a, s, (f) => {
      d.resolve(), l(f);
    }), d;
  }
  use(a) {
    if (!a) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!a.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return a.type === "backend" && (this.modules.backend = a), (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a), a.type === "languageDetector" && (this.modules.languageDetector = a), a.type === "i18nFormat" && (this.modules.i18nFormat = a), a.type === "postProcessor" && U1.addPostProcessor(a), a.type === "formatter" && (this.modules.formatter = a), a.type === "3rdParty" && this.modules.external.push(a), this;
  }
  setResolvedLanguage(a) {
    if (!(!a || !this.languages) && !(["cimode", "dev"].indexOf(a) > -1))
      for (let s = 0; s < this.languages.length; s++) {
        const l = this.languages[s];
        if (!(["cimode", "dev"].indexOf(l) > -1) && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          break;
        }
      }
  }
  changeLanguage(a, s) {
    var l = this;
    this.isLanguageChangingTo = a;
    const d = Su();
    this.emit("languageChanging", a);
    const f = (h) => {
      this.language = h, this.languages = this.services.languageUtils.toResolveHierarchy(h), this.resolvedLanguage = void 0, this.setResolvedLanguage(h);
    }, c = (h, p) => {
      p ? (f(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return l.t(...arguments);
      }), s && s(h, function() {
        return l.t(...arguments);
      });
    }, y = (h) => {
      !a && !h && this.services.languageDetector && (h = []);
      const p = typeof h == "string" ? h : this.services.languageUtils.getBestMatchFromCodes(h);
      p && (this.language || f(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(p)), this.loadResources(p, (v) => {
        c(v, p);
      });
    };
    return !a && this.services.languageDetector && !this.services.languageDetector.async ? y(this.services.languageDetector.detect()) : !a && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(y) : this.services.languageDetector.detect(y) : y(a), d;
  }
  getFixedT(a, s, l) {
    var d = this;
    const f = function(c, y) {
      let h;
      if (typeof y != "object") {
        for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), b = 2; b < p; b++)
          v[b - 2] = arguments[b];
        h = d.options.overloadTranslationOptionHandler([c, y].concat(v));
      } else
        h = {
          ...y
        };
      h.lng = h.lng || f.lng, h.lngs = h.lngs || f.lngs, h.ns = h.ns || f.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || l || f.keyPrefix);
      const S = d.options.keySeparator || ".";
      let E;
      return h.keyPrefix && Array.isArray(c) ? E = c.map((j) => `${h.keyPrefix}${S}${j}`) : E = h.keyPrefix ? `${h.keyPrefix}${S}${c}` : c, d.t(E, h);
    };
    return typeof a == "string" ? f.lng = a : f.lngs = a, f.ns = s, f.keyPrefix = l, f;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(a) {
    this.options.defaultNS = a;
  }
  hasLoadedNamespace(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const l = s.lng || this.resolvedLanguage || this.languages[0], d = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
    if (l.toLowerCase() === "cimode") return !0;
    const c = (y, h) => {
      const p = this.services.backendConnector.state[`${y}|${h}`];
      return p === -1 || p === 2;
    };
    if (s.precheck) {
      const y = s.precheck(this, c);
      if (y !== void 0) return y;
    }
    return !!(this.hasResourceBundle(l, a) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(l, a) && (!d || c(f, a)));
  }
  loadNamespaces(a, s) {
    const l = Su();
    return this.options.ns ? (typeof a == "string" && (a = [a]), a.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      l.resolve(), s && s(d);
    }), l) : (s && s(), Promise.resolve());
  }
  loadLanguages(a, s) {
    const l = Su();
    typeof a == "string" && (a = [a]);
    const d = this.options.preload || [], f = a.filter((c) => d.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return f.length ? (this.options.preload = d.concat(f), this.loadResources((c) => {
      l.resolve(), s && s(c);
    }), l) : (s && s(), Promise.resolve());
  }
  dir(a) {
    if (a || (a = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !a) return "rtl";
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], l = this.services && this.services.languageUtils || new zS(BS());
    return s.indexOf(l.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    return new ku(a, s);
  }
  cloneInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nd;
    const l = a.forkResourceStore;
    l && delete a.forkResourceStore;
    const d = {
      ...this.options,
      ...a,
      isClone: !0
    }, f = new ku(d);
    return (a.debug !== void 0 || a.prefix !== void 0) && (f.logger = f.logger.clone(a)), ["store", "services", "language"].forEach((y) => {
      f[y] = this[y];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, l && (f.store = new VS(this.store.data, d), f.services.resourceStore = f.store), f.translator = new bd(f.services, d), f.translator.on("*", function(y) {
      for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
        p[v - 1] = arguments[v];
      f.emit(y, ...p);
    }), f.init(d, s), f.translator.options = d, f.translator.backendConnector.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, f;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const mn = ku.createInstance();
mn.createInstance = ku.createInstance;
mn.createInstance;
mn.dir;
mn.init;
mn.loadResources;
mn.reloadResources;
mn.use;
mn.changeLanguage;
mn.getFixedT;
mn.t;
mn.exists;
mn.setDefaultNamespace;
mn.hasLoadedNamespace;
mn.loadNamespaces;
mn.loadLanguages;
async function dn(o, a = {}) {
  typeof o == "object" ? a = o : typeof o == "string" && (a.url = o), a.headers || (a.headers = {}), a.body && !(a.body instanceof FormData) && (a.headers["Content-Type"] = "application/json", a.body = JSON.stringify(a.body));
  let s = window.TOKEN || sessionStorage.getItem("TOKEN");
  s || (s = localStorage.getItem("TOKEN")), s && (a.headers.Authorization = `Bearer ${s}`);
  let l = window.serverURL;
  if (!l) {
    const h = location.pathname.match(/(.*?\/)ui/);
    l = h ? h[1] : "/";
  }
  const d = a.url.includes("?") ? "&" : "?", f = await fetch(
    `${l}${a.url}${d}lang=${mn.language}`,
    a
  );
  if (!f.ok) {
    if (f.status === 401)
      throw new Error(401);
    let h;
    try {
      h = await f.json();
    } catch {
    }
    throw new Error(`${f.status}: ${(h == null ? void 0 : h.errmsg) || f.statusText}`);
  }
  const c = await f.json();
  if (c.errno !== 0)
    throw new Error(c.errmsg);
  return { __version: f.headers.get("x-waline-version"), ...c.data };
}
function mP(o) {
  const a = o ? `?email=${encodeURIComponent(o)}` : "";
  return dn({ url: "token/2fa" + a, method: "GET" });
}
function pP(o) {
  return dn({ url: "user", method: "PUT", body: o });
}
function hP({ page: o }) {
  return dn({
    url: `user?page=${o}`,
    method: "GET"
  });
}
function Uv({ id: o, ...a }) {
  return dn({ url: `user/${o}`, method: "PUT", body: a });
}
function vP() {
  const { t: o } = Ti(), a = Lu(), s = Mu(), l = ji((P) => P.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1), [h, p] = V.useState(!1), v = P1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), b = location.pathname.match(/(.*?\/)ui/), S = b && b[1] ? b[1] : "/";
  V.useEffect(() => {
    if (!l || !l.email)
      return;
    const P = new URLSearchParams(location.search), L = l.type === "administrator", $ = L ? "/ui/profile" : "/ui", k = L && P.get("redirect") ? P.get("redirect") : $;
    console.log(k), s(k.replace(/\/+/g, "/"));
  }, [l]);
  const E = async function(P) {
    P.preventDefault(), y(!1), f(!0);
    const L = P.target.email.value, $ = P.target.password.value, k = P.target.code ? P.target.code.value : "", U = P.target.remember.checked;
    if (!L)
      return y(o("please input email"));
    if (!$)
      return y(o("please input password"));
    if (P.target.code && !k)
      return y(o("please input 2fa code"));
    const I = await v("login");
    try {
      await a.user.login({
        email: L,
        password: $,
        code: k,
        remember: U,
        recaptchaV3: window.recaptchaV3Key ? I : void 0,
        turnstile: window.turnstileKey ? I : void 0
      });
    } catch {
      y(o("email or password error"));
    } finally {
      f(!1);
    }
  }, j = async (P) => {
    const L = P.target.value;
    if (!L)
      return;
    const $ = await mP(L);
    p($.enable);
  };
  let M = window.serverURL;
  if (!M) {
    const P = location.pathname.match(/(.*?\/)ui/);
    M = P ? P[1] : "/";
  }
  const D = ["google"];
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ w.jsxDEV("ul", { children: c ? /* @__PURE__ */ w.jsxDEV("li", { children: c }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 116,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ w.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: E, style: { minWidth: "300px" }, children: [
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100",
              onBlur: j
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
              lineNumber: 127,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: o("password")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
              lineNumber: 140,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        h && /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "code", className: "sr-only", children: o("2fa code") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "code",
              name: "code",
              className: "text-l w-100",
              placeholder: o("2fa code")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
              lineNumber: 153,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ w.jsxDEV(
          "button",
          {
            type: "submit",
            className: "btn btn-l w-100 primary",
            disabled: d,
            children: o("login")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 164,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ w.jsxDEV(
              "input",
              {
                type: "checkbox",
                name: "remember",
                className: "checkbox",
                id: "remember"
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
                lineNumber: 174,
                columnNumber: 17
              },
              this
            ),
            " ",
            o("remember me")
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/forgot", children: o("forgot password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 183,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 172,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || D).map((P) => /* @__PURE__ */ w.jsxDEV(
        "a",
        {
          href: `${M}oauth${window.ALLOW_SOCIALS ? "/" + P + "?" : `?type=${P}`}&redirect=${S}ui/profile`,
          children: Sd.createElement(FA[P])
        },
        P,
        !1,
        {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 189,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/register", children: o("register") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 202,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 200,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
var V1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var a = {}.hasOwnProperty;
    function s() {
      for (var f = "", c = 0; c < arguments.length; c++) {
        var y = arguments[c];
        y && (f = d(f, l(y)));
      }
      return f;
    }
    function l(f) {
      if (typeof f == "string" || typeof f == "number")
        return f;
      if (typeof f != "object")
        return "";
      if (Array.isArray(f))
        return s.apply(null, f);
      if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
        return f.toString();
      var c = "";
      for (var y in f)
        a.call(f, y) && f[y] && (c = d(c, y));
      return c;
    }
    function d(f, c) {
      return c ? f ? f + " " + c : f + c : f;
    }
    o.exports ? (s.default = s, o.exports = s) : window.classNames = s;
  })();
})(V1);
var gP = V1.exports;
const Iv = /* @__PURE__ */ xd(gP);
var F1 = { exports: {} }, z1 = { exports: {} };
(function() {
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = {
    // Bit-wise rotation left
    rotl: function(s, l) {
      return s << l | s >>> 32 - l;
    },
    // Bit-wise rotation right
    rotr: function(s, l) {
      return s << 32 - l | s >>> l;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(s) {
      if (s.constructor == Number)
        return a.rotl(s, 8) & 16711935 | a.rotl(s, 24) & 4278255360;
      for (var l = 0; l < s.length; l++)
        s[l] = a.endian(s[l]);
      return s;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(s) {
      for (var l = []; s > 0; s--)
        l.push(Math.floor(Math.random() * 256));
      return l;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(s) {
      for (var l = [], d = 0, f = 0; d < s.length; d++, f += 8)
        l[f >>> 5] |= s[d] << 24 - f % 32;
      return l;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(s) {
      for (var l = [], d = 0; d < s.length * 32; d += 8)
        l.push(s[d >>> 5] >>> 24 - d % 32 & 255);
      return l;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(s) {
      for (var l = [], d = 0; d < s.length; d++)
        l.push((s[d] >>> 4).toString(16)), l.push((s[d] & 15).toString(16));
      return l.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(s) {
      for (var l = [], d = 0; d < s.length; d += 2)
        l.push(parseInt(s.substr(d, 2), 16));
      return l;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(s) {
      for (var l = [], d = 0; d < s.length; d += 3)
        for (var f = s[d] << 16 | s[d + 1] << 8 | s[d + 2], c = 0; c < 4; c++)
          d * 8 + c * 6 <= s.length * 8 ? l.push(o.charAt(f >>> 6 * (3 - c) & 63)) : l.push("=");
      return l.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(s) {
      s = s.replace(/[^A-Z0-9+\/]/ig, "");
      for (var l = [], d = 0, f = 0; d < s.length; f = ++d % 4)
        f != 0 && l.push((o.indexOf(s.charAt(d - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | o.indexOf(s.charAt(d)) >>> 6 - f * 2);
      return l;
    }
  };
  z1.exports = a;
})();
var yP = z1.exports, Yv = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      return Yv.bin.stringToBytes(unescape(encodeURIComponent(o)));
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      return decodeURIComponent(escape(Yv.bin.bytesToString(o)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      for (var a = [], s = 0; s < o.length; s++)
        a.push(o.charCodeAt(s) & 255);
      return a;
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      for (var a = [], s = 0; s < o.length; s++)
        a.push(String.fromCharCode(o[s]));
      return a.join("");
    }
  }
}, IS = Yv;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var bP = function(o) {
  return o != null && ($1(o) || xP(o) || !!o._isBuffer);
};
function $1(o) {
  return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o);
}
function xP(o) {
  return typeof o.readFloatLE == "function" && typeof o.slice == "function" && $1(o.slice(0, 0));
}
(function() {
  var o = yP, a = IS.utf8, s = bP, l = IS.bin, d = function(f, c) {
    f.constructor == String ? c && c.encoding === "binary" ? f = l.stringToBytes(f) : f = a.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
    for (var y = o.bytesToWords(f), h = f.length * 8, p = 1732584193, v = -271733879, b = -1732584194, S = 271733878, E = 0; E < y.length; E++)
      y[E] = (y[E] << 8 | y[E] >>> 24) & 16711935 | (y[E] << 24 | y[E] >>> 8) & 4278255360;
    y[h >>> 5] |= 128 << h % 32, y[(h + 64 >>> 9 << 4) + 14] = h;
    for (var j = d._ff, M = d._gg, D = d._hh, P = d._ii, E = 0; E < y.length; E += 16) {
      var L = p, $ = v, k = b, U = S;
      p = j(p, v, b, S, y[E + 0], 7, -680876936), S = j(S, p, v, b, y[E + 1], 12, -389564586), b = j(b, S, p, v, y[E + 2], 17, 606105819), v = j(v, b, S, p, y[E + 3], 22, -1044525330), p = j(p, v, b, S, y[E + 4], 7, -176418897), S = j(S, p, v, b, y[E + 5], 12, 1200080426), b = j(b, S, p, v, y[E + 6], 17, -1473231341), v = j(v, b, S, p, y[E + 7], 22, -45705983), p = j(p, v, b, S, y[E + 8], 7, 1770035416), S = j(S, p, v, b, y[E + 9], 12, -1958414417), b = j(b, S, p, v, y[E + 10], 17, -42063), v = j(v, b, S, p, y[E + 11], 22, -1990404162), p = j(p, v, b, S, y[E + 12], 7, 1804603682), S = j(S, p, v, b, y[E + 13], 12, -40341101), b = j(b, S, p, v, y[E + 14], 17, -1502002290), v = j(v, b, S, p, y[E + 15], 22, 1236535329), p = M(p, v, b, S, y[E + 1], 5, -165796510), S = M(S, p, v, b, y[E + 6], 9, -1069501632), b = M(b, S, p, v, y[E + 11], 14, 643717713), v = M(v, b, S, p, y[E + 0], 20, -373897302), p = M(p, v, b, S, y[E + 5], 5, -701558691), S = M(S, p, v, b, y[E + 10], 9, 38016083), b = M(b, S, p, v, y[E + 15], 14, -660478335), v = M(v, b, S, p, y[E + 4], 20, -405537848), p = M(p, v, b, S, y[E + 9], 5, 568446438), S = M(S, p, v, b, y[E + 14], 9, -1019803690), b = M(b, S, p, v, y[E + 3], 14, -187363961), v = M(v, b, S, p, y[E + 8], 20, 1163531501), p = M(p, v, b, S, y[E + 13], 5, -1444681467), S = M(S, p, v, b, y[E + 2], 9, -51403784), b = M(b, S, p, v, y[E + 7], 14, 1735328473), v = M(v, b, S, p, y[E + 12], 20, -1926607734), p = D(p, v, b, S, y[E + 5], 4, -378558), S = D(S, p, v, b, y[E + 8], 11, -2022574463), b = D(b, S, p, v, y[E + 11], 16, 1839030562), v = D(v, b, S, p, y[E + 14], 23, -35309556), p = D(p, v, b, S, y[E + 1], 4, -1530992060), S = D(S, p, v, b, y[E + 4], 11, 1272893353), b = D(b, S, p, v, y[E + 7], 16, -155497632), v = D(v, b, S, p, y[E + 10], 23, -1094730640), p = D(p, v, b, S, y[E + 13], 4, 681279174), S = D(S, p, v, b, y[E + 0], 11, -358537222), b = D(b, S, p, v, y[E + 3], 16, -722521979), v = D(v, b, S, p, y[E + 6], 23, 76029189), p = D(p, v, b, S, y[E + 9], 4, -640364487), S = D(S, p, v, b, y[E + 12], 11, -421815835), b = D(b, S, p, v, y[E + 15], 16, 530742520), v = D(v, b, S, p, y[E + 2], 23, -995338651), p = P(p, v, b, S, y[E + 0], 6, -198630844), S = P(S, p, v, b, y[E + 7], 10, 1126891415), b = P(b, S, p, v, y[E + 14], 15, -1416354905), v = P(v, b, S, p, y[E + 5], 21, -57434055), p = P(p, v, b, S, y[E + 12], 6, 1700485571), S = P(S, p, v, b, y[E + 3], 10, -1894986606), b = P(b, S, p, v, y[E + 10], 15, -1051523), v = P(v, b, S, p, y[E + 1], 21, -2054922799), p = P(p, v, b, S, y[E + 8], 6, 1873313359), S = P(S, p, v, b, y[E + 15], 10, -30611744), b = P(b, S, p, v, y[E + 6], 15, -1560198380), v = P(v, b, S, p, y[E + 13], 21, 1309151649), p = P(p, v, b, S, y[E + 4], 6, -145523070), S = P(S, p, v, b, y[E + 11], 10, -1120210379), b = P(b, S, p, v, y[E + 2], 15, 718787259), v = P(v, b, S, p, y[E + 9], 21, -343485551), p = p + L >>> 0, v = v + $ >>> 0, b = b + k >>> 0, S = S + U >>> 0;
    }
    return o.endian([p, v, b, S]);
  };
  d._ff = function(f, c, y, h, p, v, b) {
    var S = f + (c & y | ~c & h) + (p >>> 0) + b;
    return (S << v | S >>> 32 - v) + c;
  }, d._gg = function(f, c, y, h, p, v, b) {
    var S = f + (c & h | y & ~h) + (p >>> 0) + b;
    return (S << v | S >>> 32 - v) + c;
  }, d._hh = function(f, c, y, h, p, v, b) {
    var S = f + (c ^ y ^ h) + (p >>> 0) + b;
    return (S << v | S >>> 32 - v) + c;
  }, d._ii = function(f, c, y, h, p, v, b) {
    var S = f + (y ^ (c | ~h)) + (p >>> 0) + b;
    return (S << v | S >>> 32 - v) + c;
  }, d._blocksize = 16, d._digestsize = 16, F1.exports = function(f, c) {
    if (f == null)
      throw new Error("Illegal argument " + f);
    var y = o.wordsToBytes(d(f, c));
    return c && c.asBytes ? y : c && c.asString ? l.bytesToString(y) : o.bytesToHex(y);
  };
})();
var SP = F1.exports;
const NP = /* @__PURE__ */ xd(SP);
function H1(o = "", a = "") {
  return a || (typeof o != "string" && (o = ""), `https://sdn.geekzu.org/avatar/${NP(o)}?s=40&r=G&d=`);
}
function wP(o) {
  return window.SITE_URL ? window.SITE_URL + o : o;
}
function CP(o) {
  let a;
  typeof o == "number" ? a = new Date(o) : a = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(o) ? o.replace(/-/g, "/") : o
  );
  const s = (f) => f < 10 ? "0" + f : f, l = [a.getFullYear(), a.getMonth() + 1, a.getDate()].map(s).join("-"), d = [a.getHours(), a.getMinutes(), a.getSeconds()].map(s).join(":");
  return l + " " + d;
}
function B1({ current: o, total: a, onChange: s }) {
  return a < 1 ? null : /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-pager", children: [
    o > 1 ? /* @__PURE__ */ w.jsxDEV("li", { className: "prev", children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => s(o - 1), children: "«" }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    o > 4 ? /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => s(1), children: "1" }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) : null,
    [
      o - 3,
      o - 2,
      o - 1,
      o,
      o + 1,
      o + 2,
      o + 3
    ].filter((l) => l > 0 && l <= a).map((l) => /* @__PURE__ */ w.jsxDEV("li", { className: Iv({ current: l === o }), children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => s(l), children: l }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, l, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)),
    o < a - 3 ? /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => s(a), children: a }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) : null,
    o < a ? /* @__PURE__ */ w.jsxDEV("li", { className: "next", children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => s(o + 1), children: "»" }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function Nu({ page: o = 1, filter: a }) {
  return dn({
    url: `comment?type=list&owner=${a.owner}&status=${a.status}&keyword=${a.keyword}&page=${o}`,
    method: "GET"
  });
}
async function xi(o, a) {
  return dn({
    url: `comment/${o}`,
    method: "PUT",
    body: a
  });
}
async function EP(o) {
  return dn({
    url: "comment",
    method: "POST",
    body: o
  });
}
async function YS(o) {
  return dn({
    url: `comment/${o}`,
    method: "DELETE"
  });
}
function RP() {
  const { t: o } = Ti(), a = V.useRef(null), s = V.useRef(null), l = V.useRef({}), d = ji((k) => k.user), [f, c] = V.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [y, h] = V.useReducer(
    function(k, U) {
      return { ...k, ...U };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [p, v] = V.useState({}), [b, S] = V.useState(!1), [E, j] = V.useState([]), M = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ w.jsxDEV(xs, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ w.jsxDEV(xs, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ w.jsxDEV(xs, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ w.jsxDEV(xs, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ w.jsxDEV(xs, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  V.useEffect(() => {
    Nu({ page: f.page, filter: y }).then((k) => {
      c({ ...f, ...k }), j([]);
    });
  }, [y, f.page]);
  const D = (k) => [
    {
      key: "approved",
      name: o("approved button"),
      show: !0,
      disable: k && k.status === "approved",
      async action() {
        if (k) {
          switch (await xi(k.objectId, { status: "approved" }), f.data = f.data.filter(
            ({ objectId: U }) => U !== k.objectId
          ), k.status) {
            case "waiting":
              f.waitingCount -= 1;
              break;
            case "spam":
              f.spamCount -= 1;
              break;
          }
          c({ ...f });
        } else
          await Promise.all(
            E.map(
              (U) => xi(U, { status: "approved" })
            )
          ), Nu({ page: f.page, filter: y }).then((U) => {
            c({ ...f, ...U }), j([]);
          });
      }
    },
    {
      key: "waiting",
      name: o("waiting"),
      show: !0,
      disable: k && k.status === "waiting",
      async action() {
        k ? (await xi(k.objectId, { status: "waiting" }), f.data = f.data.filter(
          ({ objectId: U }) => U !== k.objectId
        ), k.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, c({ ...f })) : (await Promise.all(
          E.map(
            (U) => xi(U, { status: "waiting" })
          )
        ), Nu({ page: f.page, filter: y }).then((U) => {
          c({ ...f, ...U }), j([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: o(k ? "spam" : "mark as spam"),
      disable: k && k.status === "spam",
      async action() {
        k ? (await xi(k.objectId, { status: "spam" }), f.data = f.data.filter(
          ({ objectId: U }) => U !== k.objectId
        ), f.spamCount += 1, c({ ...f })) : (await Promise.all(
          E.map(
            (U) => xi(U, { status: "spam" })
          )
        ), Nu({ page: f.page, filter: y }).then((U) => {
          c({ ...f, ...U }), j([]);
        }));
      }
    },
    {
      key: "sticky",
      show: k && !k.rid && k.status === "approved",
      name: k && k.sticky ? o("disable sticky") : o("sticky"),
      async action(U) {
        U.preventDefault();
        const I = !k.sticky;
        f.data.forEach((Z) => {
          Z.objectId === k.objectId && (Z.sticky = I);
        }), await xi(k.objectId, { sticky: I ? 1 : 0 }), c({ ...f });
      }
    },
    {
      key: "edit",
      show: k,
      name: o("edit"),
      action() {
        const U = {};
        p.id !== k.objectId && p.action !== "edit" && (U.id = k.objectId, U.action = "edit"), v(U);
      }
    },
    {
      key: "reply",
      show: k && k.status === "approved",
      name: o("reply"),
      action() {
        const U = {};
        p.id !== k.objectId && p.action !== "reply" && (U.id = k.objectId, U.action = "reply"), v(U);
      }
    },
    {
      key: "delete",
      name: o("delete"),
      show: !0,
      async action() {
        const U = k ? o("delete one confirm", { nick: k.nick }) : o("delete multiple confirm");
        confirm(U) && (k ? (await YS(k.objectId), f.data = f.data.filter(
          ({ objectId: I }) => I !== k.objectId
        ), c({ ...f })) : (await Promise.all(E.map(YS)), Nu({ page: f.page, filter: y }).then((I) => {
          c({ ...f, ...I }), j([]);
        })));
      }
    }
  ].filter(({ show: U }) => U), P = async ({ pid: k, rid: U, url: I, at: Z }) => {
    const Le = s.current.value;
    if (!Le)
      return null;
    const { display_name: ke, email: he, url: be } = d;
    await EP({
      nick: ke,
      mail: he,
      ua: navigator.userAgent,
      link: be,
      url: I,
      comment: Le,
      pid: k,
      rid: U || k,
      at: Z
    }), location.reload();
  }, L = async (k) => {
    const U = f.data[k];
    await xi(U.objectId, l.current), f.data[k] = { ...U, ...l.current }, c({ ...f }), v({});
  }, $ = f.data.length && f.data.every(({ objectId: k }) => E.includes(k));
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: o("manage comments") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ w.jsxDEV("div", { className: "clear-fix", children: M.map(([k, U]) => /* @__PURE__ */ w.jsxDEV(
          "ul",
          {
            className: Iv("typecho-option-tabs", {
              right: k === "owner"
            }),
            children: U.map(({ type: I, name: Z }) => /* @__PURE__ */ w.jsxDEV(
              "li",
              {
                className: Iv({ current: I === y[k] }),
                children: /* @__PURE__ */ w.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => h({ [k]: I }),
                    children: [
                      Z,
                      k === "status" && I !== "approved" && f[`${I}Count`] > 0 ? /* @__PURE__ */ w.jsxDEV("span", { className: "balloon", children: f[`${I}Count`] }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 304,
                        columnNumber: 29
                      }, this) : null
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 296,
                    columnNumber: 25
                  },
                  this
                )
              },
              I,
              !1,
              {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 292,
                columnNumber: 23
              },
              this
            ))
          },
          k,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
            lineNumber: 285,
            columnNumber: 19
          },
          this
        )) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 283,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ w.jsxDEV("form", { method: "get", children: [
          /* @__PURE__ */ w.jsxDEV("div", { className: "operate", children: [
            /* @__PURE__ */ w.jsxDEV("label", { children: [
              /* @__PURE__ */ w.jsxDEV("i", { className: "sr-only", children: o("select all") }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 319,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ w.jsxDEV(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: $,
                  onChange: () => j(
                    $ ? [] : f.data.map(({ objectId: k }) => k)
                  )
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 320,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
              lineNumber: 318,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ w.jsxDEV("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ w.jsxDEV(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => S(!b),
                  children: [
                    /* @__PURE__ */ w.jsxDEV("i", { className: "sr-only", children: o("action") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 339,
                      columnNumber: 25
                    }, this),
                    o("selected items"),
                    " ",
                    /* @__PURE__ */ w.jsxDEV("i", { className: "i-caret-down" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 340,
                      columnNumber: 47
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 334,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ w.jsxDEV(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: b ? "block" : "none" },
                  onClick: () => S(!1),
                  children: D().map(({ key: k, name: U, action: I }) => /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "javascript:void(0)", onClick: I, children: U }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, k, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 348,
                    columnNumber: 27
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 342,
                  columnNumber: 23
                },
                this
              ),
              " "
            ] }, void 0, !0, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
              lineNumber: 333,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
            lineNumber: 317,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ w.jsxDEV("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ w.jsxDEV(
              "input",
              {
                type: "text",
                ref: a,
                className: "text-s",
                placeholder: o("please input keywords")
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 363,
                columnNumber: 21
              },
              this
            ),
            " ",
            /* @__PURE__ */ w.jsxDEV(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (k) => {
                  k.preventDefault(), h({ keyword: a.current.value });
                },
                children: o("filter")
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 370,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
            lineNumber: 362,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 316,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 315,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ w.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ w.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ w.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ w.jsxDEV("col", { width: "3%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 392,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 393,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 394,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "71%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 395,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ w.jsxDEV("thead", { children: /* @__PURE__ */ w.jsxDEV("tr", { children: [
                /* @__PURE__ */ w.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 399,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 400,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: o("author") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 401,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: o("content") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 402,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 398,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 397,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ w.jsxDEV("tbody", { children: f.data.map(
                ({
                  objectId: k,
                  nick: U,
                  mail: I,
                  avatar: Z,
                  link: Le,
                  comment: ke,
                  ip: he,
                  addr: be,
                  url: nt,
                  status: pe,
                  rid: we,
                  pid: Ce,
                  sticky: et,
                  time: Ee,
                  insertedAt: Qe
                }, Ot) => p.id === k && p.action === "edit" ? /* @__PURE__ */ w.jsxDEV("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ w.jsxDEV("td", { children: " " }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 430,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ w.jsxDEV("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ w.jsxDEV("p", { children: [
                      /* @__PURE__ */ w.jsxDEV(
                        "label",
                        {
                          htmlFor: `comment-${k}-author`,
                          children: o("username")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 434,
                          columnNumber: 37
                        },
                        this
                      ),
                      /* @__PURE__ */ w.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${k}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: U,
                          onChange: (We) => l.current.nick = We.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 439,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 433,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ w.jsxDEV("p", { children: [
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${k}-mail`, children: o("email") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 452,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ w.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${k}-mail`,
                          defaultValue: I,
                          onChange: (We) => l.current.mail = We.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 455,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 451,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ w.jsxDEV("p", { children: [
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${k}-url`, children: o("homepage") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 468,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ w.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${k}-author`,
                          defaultValue: Le,
                          onChange: (We) => l.current.link = We.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 471,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 467,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 432,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 431,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ w.jsxDEV("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ w.jsxDEV("p", { children: [
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${k}-text`, children: o("content") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ w.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${k}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: ke,
                          onChange: (We) => l.current.comment = We.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 491,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 487,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ w.jsxDEV("p", { children: [
                      /* @__PURE__ */ w.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => L(Ot),
                          children: o("submit")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 504,
                          columnNumber: 37
                        },
                        this
                      ),
                      /* @__PURE__ */ w.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => v({}),
                          children: o("cancel")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 511,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 503,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 486,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 485,
                    columnNumber: 31
                  }, this)
                ] }, k, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 429,
                  columnNumber: 29
                }, this) : /* @__PURE__ */ w.jsxDEV("tr", { id: `comment-${k}`, children: [
                  /* @__PURE__ */ w.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ w.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: k,
                      checked: E.includes(k),
                      onChange: () => j(
                        E.includes(k) ? E.filter(
                          (We) => We !== k
                        ) : [...E, k]
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 525,
                      columnNumber: 33
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 524,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ w.jsxDEV("div", { className: "comment-avatar", children: /* @__PURE__ */ w.jsxDEV(
                    "img",
                    {
                      className: "avatar",
                      src: H1(I, Z),
                      alt: U,
                      width: "40",
                      height: "40"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 542,
                      columnNumber: 35
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 541,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 540,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ w.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ w.jsxDEV("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ w.jsxDEV("strong", { className: "comment-author", children: Le ? /* @__PURE__ */ w.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(Le) ? Le : "https://" + Le,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: U
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : U }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 556,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 573,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("span", { children: /* @__PURE__ */ w.jsxDEV(
                          "a",
                          {
                            href: `mailto:${I}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: I
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 575,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 574,
                          columnNumber: 35
                        }, this),
                        I && /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 583,
                          columnNumber: 44
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("span", { children: he }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        he && /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("span", { children: be }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 586,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 555,
                        columnNumber: 33
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 551,
                      columnNumber: 31
                    },
                    this
                  ),
                  /* @__PURE__ */ w.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ w.jsxDEV("div", { className: "comment-date", children: [
                          CP(Qe || Ee),
                          " ",
                          o("at"),
                          " ",
                          /* @__PURE__ */ w.jsxDEV(
                            "a",
                            {
                              href: wP(nt),
                              target: "_blank",
                              rel: "noreferrer",
                              children: nt
                            },
                            void 0,
                            !1,
                            {
                              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 595,
                              columnNumber: 35
                            },
                            this
                          )
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 593,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ w.jsxDEV(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: ke }
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 603,
                            columnNumber: 33
                          },
                          this
                        ),
                        p.id === k && p.action === "reply" ? /* @__PURE__ */ w.jsxDEV("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ w.jsxDEV("p", { children: [
                            /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "text", className: "sr-only", children: o("content") }, void 0, !1, {
                              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 611,
                              columnNumber: 39
                            }, this),
                            /* @__PURE__ */ w.jsxDEV(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: s
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 614,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, !0, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 610,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ w.jsxDEV("p", { children: [
                            /* @__PURE__ */ w.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (We) => {
                                  We.preventDefault(), P({
                                    rid: we,
                                    pid: k,
                                    url: nt,
                                    at: U
                                  });
                                },
                                children: o("reply")
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 623,
                                columnNumber: 39
                              },
                              this
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ w.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => v({}),
                                children: o("cancel")
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 639,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, !0, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 622,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 609,
                          columnNumber: 35
                        }, this) : null,
                        /* @__PURE__ */ w.jsxDEV("div", { className: "comment-action hidden-by-mouse", children: D({
                          objectId: k,
                          nick: U,
                          status: pe,
                          rid: we,
                          pid: Ce,
                          sticky: et
                        }).map(
                          ({ key: We, disable: pn, name: jt, action: hn }) => pn ? /* @__PURE__ */ w.jsxDEV("span", { className: "weak", children: jt }, We, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 659,
                            columnNumber: 39
                          }, this) : /* @__PURE__ */ w.jsxDEV(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${We}`,
                              onClick: hn,
                              children: jt
                            },
                            We,
                            !1,
                            {
                              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 663,
                              columnNumber: 39
                            },
                            this
                          )
                        ) }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 649,
                          columnNumber: 33
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 589,
                      columnNumber: 31
                    },
                    this
                  )
                ] }, k, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 523,
                  columnNumber: 29
                }, this)
              ) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 405,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
              lineNumber: 390,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
              lineNumber: 389,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
            lineNumber: 384,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ w.jsxDEV("form", { method: "get", children: /* @__PURE__ */ w.jsxDEV(
          B1,
          {
            current: f.page,
            total: f.totalPages,
            onChange: (k) => c({ ...f, page: k })
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
            lineNumber: 685,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 684,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 683,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 282,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 281,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 277,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 276,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
    lineNumber: 274,
    columnNumber: 5
  }, this);
}
function jP(o, a, s) {
  const l = new Blob([o], { type: s }), d = document.createElement("a"), f = URL.createObjectURL(l);
  d.href = f, d.download = a, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(f);
  }, 0);
}
function TP(o) {
  return new Promise((a, s) => {
    const l = new FileReader();
    l.onload = (d) => a(d.target.result), l.onerror = s, l.readAsText(o);
  });
}
function DP() {
  const [o, a] = V.useState(!1), [s, l] = V.useState(!1), { t: d } = Ti(), f = V.useRef(null), c = () => {
    confirm(d("import clear data confirm")) && f.current.click();
  }, y = async (p) => {
    try {
      const v = await TP(p.target.files[0]), b = JSON.parse(v);
      if (!b || b.type !== "waline")
        return alert("import data format not support!");
      const S = b.tables.reduce(
        (P, L) => {
          var $;
          return P + ((($ = b.data[L]) == null ? void 0 : $.length) || 0);
        },
        0
      );
      let E = 0;
      a([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: E, maxLength: S }
      ]);
      const j = {};
      for (const P of b.tables) {
        const L = b.data[P];
        if (P !== "Users" && await dn({
          url: "db?table=" + P,
          method: "DELETE"
        }), j[P] || (j[P] = {}), !!Array.isArray(L))
          for (const $ of L) {
            let k = !1;
            if (P === "Users") {
              const ke = await dn("user?email=" + $.email);
              ke.objectId && (k = ke.objectId);
            }
            const I = P == "Users" && k ? "PUT" : "POST", Z = P === "Comment" ? Object.assign({}, $, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : $;
            for (const ke in Z)
              (Z[ke] === null || Z[ke] === void 0) && delete Z[ke];
            const Le = await dn({
              url: `db?table=${P}${I === "PUT" ? `&objectId=${k}` : ""}`,
              method: I,
              body: Z
            });
            j[P][$.objectId] = Le.objectId, E += 1, a([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: E, maxLength: S }
            ]);
          }
      }
      a(["comment data index relationship reconstruction"]);
      const M = b.data.Comment, D = [];
      for (const P of M) {
        const L = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: $, field: k }) => {
          if (!P[k])
            return;
          const U = P[k], I = j[$][P[k]];
          U && I && U !== I && (L[k] = I);
        }), Object.keys(L).length && D.push([
          L,
          { objectId: j.Comment[P.objectId] }
        ]);
      }
      E = 0;
      for (const [P, L] of D)
        await dn({
          url: `db?table=Comment&objectId=${L.objectId}`,
          method: "PUT",
          body: P
        }), E += 1, a([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: E, maxLength: D.length }
        ]);
      alert(d("import success")), location.reload();
    } catch (v) {
      throw console.log(v), alert(v.message), v;
    } finally {
      a(!1), p.target.value = null;
    }
  }, h = async () => {
    l(!0);
    try {
      const p = await dn("db");
      jP(
        JSON.stringify(p, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: d("migration") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ w.jsxDEV(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: h,
            disabled: s,
            children: d(s ? "exporting" : "export")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
            lineNumber: 192,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ w.jsxDEV(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: c,
              disabled: o,
              children: Array.isArray(o) ? d(...o) : d("import")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
              lineNumber: 202,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              ref: f,
              onChange: y,
              type: "file",
              style: { display: "none" }
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
              lineNumber: 212,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}
class Ns {
  constructor(a, s, l) {
    Va(this, "x");
    Va(this, "y");
    Va(this, "scale");
    this.x = a, this.y = s, this.scale = l;
  }
  toString() {
    return "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
  }
  static parse(a) {
    var l = a.style.transform.split(") "), d = l[0].substring(10).split(","), f = l.length > 1 ? l[1].substring(6) : "1", c = d.length > 1 ? d[0] : "0", y = d.length > 1 ? d[1] : "0";
    return new Ns(parseFloat(c), parseFloat(y), parseFloat(f));
  }
}
class rd {
  constructor(a) {
    Va(this, "x");
    Va(this, "y");
    if (!a || !a.style.transformOrigin) {
      this.x = 0, this.y = 0;
      return;
    }
    var s = a.style.transformOrigin.split(" ");
    this.x = parseFloat(s[0]), this.y = parseFloat(s[1]);
  }
  toString() {
    return this.x + "px " + this.y + "px";
  }
}
function kP(o, a) {
  let s = 0;
  return (...l) => {
    clearTimeout(s), s = setTimeout(() => o(...l), a);
  };
}
function Kv(o, a) {
  return o.toFixed(a);
}
function OP(o, a) {
  const s = parseFloat(a.min), l = parseFloat(a.max);
  a.value = Kv(Math.max(s, Math.min(l, o)), 3);
}
function LP(o) {
  var a = new Image();
  return new Promise(function(s, l) {
    a.onload = () => {
      s(a);
    }, a.onerror = l, a.src = o;
  });
}
function KS() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function _P(o) {
  return o === "ArrowLeft" ? [2, 0] : o === "ArrowUp" ? [0, 2] : o === "ArrowRight" ? [-2, 0] : [0, -2];
}
function AP() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var ws, Rn, Cs, Ou, Oe, J1, Wv, I1, Y1, K1, Gv, W1, G1, q1, Q1, qv, fd, X1, Qv, Xv, Zv, Z1, eN;
class PP {
  constructor(a, s) {
    gs(this, Oe);
    Va(this, "element");
    Va(this, "elements");
    Va(this, "options", {
      mouseWheelZoom: "on",
      viewport: {
        width: 220,
        height: 220,
        type: "square"
      },
      zoomerInputClass: "cr-slider"
    });
    gs(this, ws, null);
    gs(this, Rn, 1);
    gs(this, Cs, null);
    gs(this, Ou, kP(() => {
      mt(this, Oe, Qv).call(this);
    }, 200));
    if (a.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    s.viewport && (s.viewport = { ...this.options.viewport, ...s.viewport }), this.options = { ...this.options, ...s }, this.element = a, this.element.classList.add("cropt-container"), this.elements = KS(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), mt(this, Oe, qv).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), mt(this, Oe, Wv).call(this), mt(this, Oe, W1).call(this), mt(this, Oe, G1).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(a, s = null) {
    if (!a)
      throw new Error("src cannot be empty");
    return Zf(this, ws, s), LP(a).then((l) => {
      mt(this, Oe, Q1).call(this, l), mt(this, Oe, Xv).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(a = null) {
    var s = this.elements.viewport.getBoundingClientRect(), l = s.width / s.height, d = mt(this, Oe, J1).call(this), f = d.right - d.left, c = d.bottom - d.top;
    return a !== null && (l > 1 ? (f = a, c = a / l) : (c = a, f = a * l)), Promise.resolve(mt(this, Oe, Y1).call(this, d, f, c));
  }
  toBlob(a = null, s = "image/webp", l = 1) {
    return s === "image/webp" && l < 1 && !AP() && (s = "image/jpeg"), new Promise((d, f) => {
      this.toCanvas(a).then((c) => {
        c.toBlob((y) => {
          y === null ? f("Canvas blob is null") : d(y);
        }, s, l);
      });
    });
  }
  refresh() {
    mt(this, Oe, Xv).call(this);
  }
  setOptions(a) {
    const s = this.options.viewport.width, l = this.options.viewport.height;
    a.viewport && (a.viewport = { ...this.options.viewport, ...a.viewport }), this.options = { ...this.options, ...a }, mt(this, Oe, Wv).call(this), (this.options.viewport.width !== s || this.options.viewport.height !== l) && this.refresh();
  }
  setZoom(a) {
    OP(a, this.elements.zoomer);
    var s = new Event("input");
    this.elements.zoomer.dispatchEvent(s);
  }
  destroy() {
    Kt(this, Cs) && document.removeEventListener("keydown", Kt(this, Cs)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = KS();
  }
}
ws = new WeakMap(), Rn = new WeakMap(), Cs = new WeakMap(), Ou = new WeakMap(), Oe = new WeakSet(), J1 = function() {
  var a = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = s.left - a.left, d = s.top - a.top, f = (s.width - this.elements.viewport.offsetWidth) / 2, c = (s.height - this.elements.viewport.offsetHeight) / 2, y = l + this.elements.viewport.offsetWidth + f, h = d + this.elements.viewport.offsetHeight + c;
  return l = Math.max(0, l / Kt(this, Rn)), d = Math.max(0, d / Kt(this, Rn)), y = Math.max(0, y / Kt(this, Rn)), h = Math.max(0, h / Kt(this, Rn)), {
    left: Math.round(l),
    top: Math.round(d),
    right: Math.round(y),
    bottom: Math.round(h)
  };
}, Wv = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const a = "cr-vp-circle", s = this.elements.viewport;
  this.options.viewport.type === "circle" ? s.classList.add(a) : s.classList.remove(a), s.style.width = this.options.viewport.width + "px", s.style.height = this.options.viewport.height + "px";
}, I1 = function(a) {
  var s = a.right - a.left, l = a.bottom - a.top, d = document.createElement("canvas"), f = d.getContext("2d");
  if (f === null)
    throw new Error("Canvas context cannot be null");
  return d.width = s, d.height = l, f.drawImage(this.elements.preview, a.left, a.top, s, l, 0, 0, d.width, d.height), d;
}, Y1 = function(a, s, l) {
  var d = mt(this, Oe, I1).call(this, a), f = d.getContext("2d"), c = document.createElement("canvas"), y = c.getContext("2d"), h = document.createElement("canvas"), p = h.getContext("2d");
  if (h.width = s, h.height = l, p === null || f === null || y === null)
    throw new Error("Canvas context cannot be null");
  for (var v = {
    width: d.width,
    height: d.height
  }; v.width * 0.5 > h.width; ) {
    let b = v.width, S = v.height;
    v = {
      width: Math.floor(v.width * 0.5),
      height: Math.floor(v.height * 0.5)
    }, c.width = b, c.height = S, y.clearRect(0, 0, c.width, c.height), y.drawImage(d, 0, 0), f.clearRect(0, 0, b, S), f.drawImage(c, 0, 0, b, S, 0, 0, v.width, v.height);
  }
  return p.drawImage(d, 0, 0, v.width, v.height, 0, 0, h.width, h.height), h;
}, K1 = function() {
  var a = Kt(this, Rn), s = this.elements.viewport.getBoundingClientRect(), l = s.width, d = s.height, f = this.elements.boundary.clientWidth / 2, c = this.elements.boundary.clientHeight / 2, y = this.elements.preview.getBoundingClientRect(), h = y.width, p = y.height, v = l / 2, b = d / 2, S = (v / a - f) * -1, E = S - (h * (1 / a) - l * (1 / a)), j = (b / a - c) * -1, M = j - (p * (1 / a) - d * (1 / a)), D = 1 / a * v, P = h * (1 / a) - D, L = 1 / a * b, $ = p * (1 / a) - L;
  return {
    translate: {
      maxX: S,
      minX: E,
      maxY: j,
      minY: M
    },
    origin: {
      maxX: P,
      minX: D,
      maxY: $,
      minY: L
    }
  };
}, Gv = function(a, s) {
  const l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = Ns.parse(this.elements.preview);
  d.top > l.top + s && d.bottom < l.bottom + s && (f.y = f.y + s), d.left > l.left + a && d.right < l.right + a && (f.x = f.x + a), mt(this, Oe, Zv).call(this, f), Kt(this, Ou).call(this);
}, W1 = function() {
  let a = 0, s = 0, l = [], d = 0, f = (p) => {
    p.preventDefault();
    const v = l.findIndex((b) => b.pointerId === p.pointerId);
    if (v !== -1) {
      if (l[v] = p, l.length === 2) {
        let b = l[0], S = l[1], E = Math.sqrt((b.pageX - S.pageX) * (b.pageX - S.pageX) + (b.pageY - S.pageY) * (b.pageY - S.pageY));
        d === 0 && (d = E / Kt(this, Rn)), this.setZoom(E / d);
        return;
      } else if (d !== 0)
        return;
      mt(this, Oe, Gv).call(this, p.pageX - a, p.pageY - s), a = p.pageX, s = p.pageY;
    }
  }, c = (p) => {
    const v = l.findIndex((b) => b.pointerId === p.pointerId);
    v !== -1 && l.splice(v, 1), l.length === 0 && (this.elements.overlay.removeEventListener("pointermove", f), this.elements.overlay.removeEventListener("pointerup", c), this.elements.overlay.removeEventListener("pointerout", c), mt(this, Oe, fd).call(this, !1, this.elements.preview), d = 0);
  }, y = (p) => {
    p.button || (p.preventDefault(), l.push(p), this.elements.overlay.setPointerCapture(p.pointerId), !(l.length > 1) && (a = p.pageX, s = p.pageY, mt(this, Oe, fd).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", f), this.elements.overlay.addEventListener("pointerup", c), this.elements.overlay.addEventListener("pointerout", c)));
  }, h = (p) => {
    if (document.activeElement === this.elements.viewport) {
      if (p.shiftKey && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
        p.preventDefault();
        let v = parseFloat(this.elements.zoomer.value), b = p.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(v + b);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(p.key)) {
        p.preventDefault();
        let [v, b] = _P(p.key);
        mt(this, Oe, Gv).call(this, v, b);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", y), document.addEventListener("keydown", h), Zf(this, Cs, h);
}, G1 = function() {
  let a = () => {
    mt(this, Oe, q1).call(this);
  }, s = (l) => {
    const d = this.options.mouseWheelZoom;
    let f = 0;
    d === "off" || d === "ctrl" && !l.ctrlKey || (l.deltaY && (f = l.deltaY * -1 / 2e3), l.preventDefault(), this.setZoom(Kt(this, Rn) + f * Kt(this, Rn)));
  };
  this.elements.zoomer.addEventListener("input", a), this.elements.boundary.addEventListener("wheel", s);
}, q1 = function() {
  const a = Ns.parse(this.elements.preview), s = new rd(this.elements.preview);
  let l = () => {
    this.elements.preview.style.transform = a.toString(), this.elements.preview.style.transformOrigin = s.toString();
  };
  Zf(this, Rn, parseFloat(this.elements.zoomer.value)), a.scale = Kt(this, Rn), l();
  var d = mt(this, Oe, K1).call(this), f = d.translate, c = d.origin;
  a.x >= f.maxX && (s.x = c.minX, a.x = f.maxX), a.x <= f.minX && (s.x = c.maxX, a.x = f.minX), a.y >= f.maxY && (s.y = c.minY, a.y = f.maxY), a.y <= f.minY && (s.y = c.maxY, a.y = f.minY), l(), Kt(this, Ou).call(this);
}, Q1 = function(a) {
  mt(this, Oe, qv).call(this, a), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(a, this.elements.preview), this.elements.preview = a;
}, qv = function(a) {
  a.classList.add("cr-image"), a.setAttribute("alt", "preview"), mt(this, Oe, fd).call(this, !1, a);
}, fd = function(a, s) {
  s.setAttribute("aria-grabbed", a.toString()), this.elements.boundary.setAttribute("aria-dropeffect", a ? "move" : "none");
}, X1 = function() {
  return this.elements.preview.offsetParent !== null;
}, Qv = function() {
  const a = this.elements.boundary.getBoundingClientRect(), s = this.elements.preview.getBoundingClientRect(), l = this.elements.overlay;
  l.style.width = s.width + "px", l.style.height = s.height + "px", l.style.top = s.top - a.top + "px", l.style.left = s.left - a.left + "px";
}, Xv = function() {
  if (!mt(this, Oe, X1).call(this))
    return;
  const a = this.elements.preview, s = new Ns(0, 0, 1);
  a.style.transform = s.toString(), a.style.transformOrigin = new rd().toString(), mt(this, Oe, Z1).call(this), s.scale = Kt(this, Rn), a.style.transform = s.toString(), a.style.transformOrigin = new rd().toString(), mt(this, Oe, eN).call(this), mt(this, Oe, Qv).call(this);
}, Zv = function(a) {
  var s = Kt(this, Rn), l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = new rd(this.elements.preview), c = d.top - l.top + d.height / 2, y = d.left - l.left + d.width / 2, h = { x: y / s, y: c / s }, p = {
    x: (h.x - f.x) * (1 - s),
    y: (h.y - f.y) * (1 - s)
  };
  a.x -= p.x, a.y -= p.y, this.elements.preview.style.transform = a.toString(), this.elements.preview.style.transformOrigin = h.x + "px " + h.y + "px";
}, Z1 = function() {
  var a = 0.85, s = this.elements.boundary.getBoundingClientRect(), l = this.elements.preview, d = this.elements.viewport.getBoundingClientRect(), f = d.width / l.naturalWidth, c = d.height / l.naturalHeight, y = Math.max(f, c);
  y >= a && (a += y), this.elements.zoomer.min = Kv(y, 3), this.elements.zoomer.max = Kv(a, 3);
  var h = Math.max(s.width / l.naturalWidth, s.height / l.naturalHeight);
  this.setZoom(Kt(this, ws) !== null ? Kt(this, ws) : h);
}, eN = function() {
  var a = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = this.elements.boundary.getBoundingClientRect(), d = s.left - l.left, f = s.top - l.top, c = d - (a.width - s.width) / 2, y = f - (a.height - s.height) / 2, h = new Ns(c, y, Kt(this, Rn));
  mt(this, Oe, Zv).call(this, h);
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var mo;
((o) => {
  const a = class {
    constructor(h, p, v, b) {
      if (this.version = h, this.errorCorrectionLevel = p, this.modules = [], this.isFunction = [], h < a.MIN_VERSION || h > a.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (b < -1 || b > 7)
        throw new RangeError("Mask value out of range");
      this.size = h * 4 + 17;
      let S = [];
      for (let j = 0; j < this.size; j++)
        S.push(!1);
      for (let j = 0; j < this.size; j++)
        this.modules.push(S.slice()), this.isFunction.push(S.slice());
      this.drawFunctionPatterns();
      const E = this.addEccAndInterleave(v);
      if (this.drawCodewords(E), b == -1) {
        let j = 1e9;
        for (let M = 0; M < 8; M++) {
          this.applyMask(M), this.drawFormatBits(M);
          const D = this.getPenaltyScore();
          D < j && (b = M, j = D), this.applyMask(M);
        }
      }
      f(0 <= b && b <= 7), this.mask = b, this.applyMask(b), this.drawFormatBits(b), this.isFunction = [];
    }
    static encodeText(h, p) {
      const v = o.QrSegment.makeSegments(h);
      return a.encodeSegments(v, p);
    }
    static encodeBinary(h, p) {
      const v = o.QrSegment.makeBytes(h);
      return a.encodeSegments([v], p);
    }
    static encodeSegments(h, p, v = 1, b = 40, S = -1, E = !0) {
      if (!(a.MIN_VERSION <= v && v <= b && b <= a.MAX_VERSION) || S < -1 || S > 7)
        throw new RangeError("Invalid value");
      let j, M;
      for (j = v; ; j++) {
        const $ = a.getNumDataCodewords(j, p) * 8, k = y.getTotalBits(h, j);
        if (k <= $) {
          M = k;
          break;
        }
        if (j >= b)
          throw new RangeError("Data too long");
      }
      for (const $ of [a.Ecc.MEDIUM, a.Ecc.QUARTILE, a.Ecc.HIGH])
        E && M <= a.getNumDataCodewords(j, $) * 8 && (p = $);
      let D = [];
      for (const $ of h) {
        l($.mode.modeBits, 4, D), l($.numChars, $.mode.numCharCountBits(j), D);
        for (const k of $.getData())
          D.push(k);
      }
      f(D.length == M);
      const P = a.getNumDataCodewords(j, p) * 8;
      f(D.length <= P), l(0, Math.min(4, P - D.length), D), l(0, (8 - D.length % 8) % 8, D), f(D.length % 8 == 0);
      for (let $ = 236; D.length < P; $ ^= 253)
        l($, 8, D);
      let L = [];
      for (; L.length * 8 < D.length; )
        L.push(0);
      return D.forEach(($, k) => L[k >>> 3] |= $ << 7 - (k & 7)), new a(j, p, L, S);
    }
    getModule(h, p) {
      return 0 <= h && h < this.size && 0 <= p && p < this.size && this.modules[p][h];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let v = 0; v < this.size; v++)
        this.setFunctionModule(6, v, v % 2 == 0), this.setFunctionModule(v, 6, v % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const h = this.getAlignmentPatternPositions(), p = h.length;
      for (let v = 0; v < p; v++)
        for (let b = 0; b < p; b++)
          v == 0 && b == 0 || v == 0 && b == p - 1 || v == p - 1 && b == 0 || this.drawAlignmentPattern(h[v], h[b]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(h) {
      const p = this.errorCorrectionLevel.formatBits << 3 | h;
      let v = p;
      for (let S = 0; S < 10; S++)
        v = v << 1 ^ (v >>> 9) * 1335;
      const b = (p << 10 | v) ^ 21522;
      f(b >>> 15 == 0);
      for (let S = 0; S <= 5; S++)
        this.setFunctionModule(8, S, d(b, S));
      this.setFunctionModule(8, 7, d(b, 6)), this.setFunctionModule(8, 8, d(b, 7)), this.setFunctionModule(7, 8, d(b, 8));
      for (let S = 9; S < 15; S++)
        this.setFunctionModule(14 - S, 8, d(b, S));
      for (let S = 0; S < 8; S++)
        this.setFunctionModule(this.size - 1 - S, 8, d(b, S));
      for (let S = 8; S < 15; S++)
        this.setFunctionModule(8, this.size - 15 + S, d(b, S));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let h = this.version;
      for (let v = 0; v < 12; v++)
        h = h << 1 ^ (h >>> 11) * 7973;
      const p = this.version << 12 | h;
      f(p >>> 18 == 0);
      for (let v = 0; v < 18; v++) {
        const b = d(p, v), S = this.size - 11 + v % 3, E = Math.floor(v / 3);
        this.setFunctionModule(S, E, b), this.setFunctionModule(E, S, b);
      }
    }
    drawFinderPattern(h, p) {
      for (let v = -4; v <= 4; v++)
        for (let b = -4; b <= 4; b++) {
          const S = Math.max(Math.abs(b), Math.abs(v)), E = h + b, j = p + v;
          0 <= E && E < this.size && 0 <= j && j < this.size && this.setFunctionModule(E, j, S != 2 && S != 4);
        }
    }
    drawAlignmentPattern(h, p) {
      for (let v = -2; v <= 2; v++)
        for (let b = -2; b <= 2; b++)
          this.setFunctionModule(h + b, p + v, Math.max(Math.abs(b), Math.abs(v)) != 1);
    }
    setFunctionModule(h, p, v) {
      this.modules[p][h] = v, this.isFunction[p][h] = !0;
    }
    addEccAndInterleave(h) {
      const p = this.version, v = this.errorCorrectionLevel;
      if (h.length != a.getNumDataCodewords(p, v))
        throw new RangeError("Invalid argument");
      const b = a.NUM_ERROR_CORRECTION_BLOCKS[v.ordinal][p], S = a.ECC_CODEWORDS_PER_BLOCK[v.ordinal][p], E = Math.floor(a.getNumRawDataModules(p) / 8), j = b - E % b, M = Math.floor(E / b);
      let D = [];
      const P = a.reedSolomonComputeDivisor(S);
      for (let $ = 0, k = 0; $ < b; $++) {
        let U = h.slice(k, k + M - S + ($ < j ? 0 : 1));
        k += U.length;
        const I = a.reedSolomonComputeRemainder(U, P);
        $ < j && U.push(0), D.push(U.concat(I));
      }
      let L = [];
      for (let $ = 0; $ < D[0].length; $++)
        D.forEach((k, U) => {
          ($ != M - S || U >= j) && L.push(k[$]);
        });
      return f(L.length == E), L;
    }
    drawCodewords(h) {
      if (h.length != Math.floor(a.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let p = 0;
      for (let v = this.size - 1; v >= 1; v -= 2) {
        v == 6 && (v = 5);
        for (let b = 0; b < this.size; b++)
          for (let S = 0; S < 2; S++) {
            const E = v - S, M = (v + 1 & 2) == 0 ? this.size - 1 - b : b;
            !this.isFunction[M][E] && p < h.length * 8 && (this.modules[M][E] = d(h[p >>> 3], 7 - (p & 7)), p++);
          }
      }
      f(p == h.length * 8);
    }
    applyMask(h) {
      if (h < 0 || h > 7)
        throw new RangeError("Mask value out of range");
      for (let p = 0; p < this.size; p++)
        for (let v = 0; v < this.size; v++) {
          let b;
          switch (h) {
            case 0:
              b = (v + p) % 2 == 0;
              break;
            case 1:
              b = p % 2 == 0;
              break;
            case 2:
              b = v % 3 == 0;
              break;
            case 3:
              b = (v + p) % 3 == 0;
              break;
            case 4:
              b = (Math.floor(v / 3) + Math.floor(p / 2)) % 2 == 0;
              break;
            case 5:
              b = v * p % 2 + v * p % 3 == 0;
              break;
            case 6:
              b = (v * p % 2 + v * p % 3) % 2 == 0;
              break;
            case 7:
              b = ((v + p) % 2 + v * p % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[p][v] && b && (this.modules[p][v] = !this.modules[p][v]);
        }
    }
    getPenaltyScore() {
      let h = 0;
      for (let S = 0; S < this.size; S++) {
        let E = !1, j = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let D = 0; D < this.size; D++)
          this.modules[S][D] == E ? (j++, j == 5 ? h += a.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, M), E || (h += this.finderPenaltyCountPatterns(M) * a.PENALTY_N3), E = this.modules[S][D], j = 1);
        h += this.finderPenaltyTerminateAndCount(E, j, M) * a.PENALTY_N3;
      }
      for (let S = 0; S < this.size; S++) {
        let E = !1, j = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let D = 0; D < this.size; D++)
          this.modules[D][S] == E ? (j++, j == 5 ? h += a.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, M), E || (h += this.finderPenaltyCountPatterns(M) * a.PENALTY_N3), E = this.modules[D][S], j = 1);
        h += this.finderPenaltyTerminateAndCount(E, j, M) * a.PENALTY_N3;
      }
      for (let S = 0; S < this.size - 1; S++)
        for (let E = 0; E < this.size - 1; E++) {
          const j = this.modules[S][E];
          j == this.modules[S][E + 1] && j == this.modules[S + 1][E] && j == this.modules[S + 1][E + 1] && (h += a.PENALTY_N2);
        }
      let p = 0;
      for (const S of this.modules)
        p = S.reduce((E, j) => E + (j ? 1 : 0), p);
      const v = this.size * this.size, b = Math.ceil(Math.abs(p * 20 - v * 10) / v) - 1;
      return f(0 <= b && b <= 9), h += b * a.PENALTY_N4, f(0 <= h && h <= 2568888), h;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const h = Math.floor(this.version / 7) + 2, p = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (h * 2 - 2)) * 2;
        let v = [6];
        for (let b = this.size - 7; v.length < h; b -= p)
          v.splice(1, 0, b);
        return v;
      }
    }
    static getNumRawDataModules(h) {
      if (h < a.MIN_VERSION || h > a.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let p = (16 * h + 128) * h + 64;
      if (h >= 2) {
        const v = Math.floor(h / 7) + 2;
        p -= (25 * v - 10) * v - 55, h >= 7 && (p -= 36);
      }
      return f(208 <= p && p <= 29648), p;
    }
    static getNumDataCodewords(h, p) {
      return Math.floor(a.getNumRawDataModules(h) / 8) - a.ECC_CODEWORDS_PER_BLOCK[p.ordinal][h] * a.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][h];
    }
    static reedSolomonComputeDivisor(h) {
      if (h < 1 || h > 255)
        throw new RangeError("Degree out of range");
      let p = [];
      for (let b = 0; b < h - 1; b++)
        p.push(0);
      p.push(1);
      let v = 1;
      for (let b = 0; b < h; b++) {
        for (let S = 0; S < p.length; S++)
          p[S] = a.reedSolomonMultiply(p[S], v), S + 1 < p.length && (p[S] ^= p[S + 1]);
        v = a.reedSolomonMultiply(v, 2);
      }
      return p;
    }
    static reedSolomonComputeRemainder(h, p) {
      let v = p.map((b) => 0);
      for (const b of h) {
        const S = b ^ v.shift();
        v.push(0), p.forEach((E, j) => v[j] ^= a.reedSolomonMultiply(E, S));
      }
      return v;
    }
    static reedSolomonMultiply(h, p) {
      if (h >>> 8 || p >>> 8)
        throw new RangeError("Byte out of range");
      let v = 0;
      for (let b = 7; b >= 0; b--)
        v = v << 1 ^ (v >>> 7) * 285, v ^= (p >>> b & 1) * h;
      return f(v >>> 8 == 0), v;
    }
    finderPenaltyCountPatterns(h) {
      const p = h[1];
      f(p <= this.size * 3);
      const v = p > 0 && h[2] == p && h[3] == p * 3 && h[4] == p && h[5] == p;
      return (v && h[0] >= p * 4 && h[6] >= p ? 1 : 0) + (v && h[6] >= p * 4 && h[0] >= p ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(h, p, v) {
      return h && (this.finderPenaltyAddHistory(p, v), p = 0), p += this.size, this.finderPenaltyAddHistory(p, v), this.finderPenaltyCountPatterns(v);
    }
    finderPenaltyAddHistory(h, p) {
      p[0] == 0 && (h += this.size), p.pop(), p.unshift(h);
    }
  };
  let s = a;
  s.MIN_VERSION = 1, s.MAX_VERSION = 40, s.PENALTY_N1 = 3, s.PENALTY_N2 = 3, s.PENALTY_N3 = 40, s.PENALTY_N4 = 10, s.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], s.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], o.QrCode = s;
  function l(h, p, v) {
    if (p < 0 || p > 31 || h >>> p)
      throw new RangeError("Value out of range");
    for (let b = p - 1; b >= 0; b--)
      v.push(h >>> b & 1);
  }
  function d(h, p) {
    return (h >>> p & 1) != 0;
  }
  function f(h) {
    if (!h)
      throw new Error("Assertion error");
  }
  const c = class {
    constructor(h, p, v) {
      if (this.mode = h, this.numChars = p, this.bitData = v, p < 0)
        throw new RangeError("Invalid argument");
      this.bitData = v.slice();
    }
    static makeBytes(h) {
      let p = [];
      for (const v of h)
        l(v, 8, p);
      return new c(c.Mode.BYTE, h.length, p);
    }
    static makeNumeric(h) {
      if (!c.isNumeric(h))
        throw new RangeError("String contains non-numeric characters");
      let p = [];
      for (let v = 0; v < h.length; ) {
        const b = Math.min(h.length - v, 3);
        l(parseInt(h.substr(v, b), 10), b * 3 + 1, p), v += b;
      }
      return new c(c.Mode.NUMERIC, h.length, p);
    }
    static makeAlphanumeric(h) {
      if (!c.isAlphanumeric(h))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let p = [], v;
      for (v = 0; v + 2 <= h.length; v += 2) {
        let b = c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v)) * 45;
        b += c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v + 1)), l(b, 11, p);
      }
      return v < h.length && l(c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v)), 6, p), new c(c.Mode.ALPHANUMERIC, h.length, p);
    }
    static makeSegments(h) {
      return h == "" ? [] : c.isNumeric(h) ? [c.makeNumeric(h)] : c.isAlphanumeric(h) ? [c.makeAlphanumeric(h)] : [c.makeBytes(c.toUtf8ByteArray(h))];
    }
    static makeEci(h) {
      let p = [];
      if (h < 0)
        throw new RangeError("ECI assignment value out of range");
      if (h < 128)
        l(h, 8, p);
      else if (h < 16384)
        l(2, 2, p), l(h, 14, p);
      else if (h < 1e6)
        l(6, 3, p), l(h, 21, p);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, p);
    }
    static isNumeric(h) {
      return c.NUMERIC_REGEX.test(h);
    }
    static isAlphanumeric(h) {
      return c.ALPHANUMERIC_REGEX.test(h);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(h, p) {
      let v = 0;
      for (const b of h) {
        const S = b.mode.numCharCountBits(p);
        if (b.numChars >= 1 << S)
          return 1 / 0;
        v += 4 + S + b.bitData.length;
      }
      return v;
    }
    static toUtf8ByteArray(h) {
      h = encodeURI(h);
      let p = [];
      for (let v = 0; v < h.length; v++)
        h.charAt(v) != "%" ? p.push(h.charCodeAt(v)) : (p.push(parseInt(h.substr(v + 1, 2), 16)), v += 2);
      return p;
    }
  };
  let y = c;
  y.NUMERIC_REGEX = /^[0-9]*$/, y.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, y.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", o.QrSegment = y;
})(mo || (mo = {}));
((o) => {
  ((a) => {
    const s = class {
      constructor(d, f) {
        this.ordinal = d, this.formatBits = f;
      }
    };
    let l = s;
    l.LOW = new s(0, 1), l.MEDIUM = new s(1, 0), l.QUARTILE = new s(2, 3), l.HIGH = new s(3, 2), a.Ecc = l;
  })(o.QrCode || (o.QrCode = {}));
})(mo || (mo = {}));
((o) => {
  ((a) => {
    const s = class {
      constructor(d, f) {
        this.modeBits = d, this.numBitsCharCount = f;
      }
      numCharCountBits(d) {
        return this.numBitsCharCount[Math.floor((d + 7) / 17)];
      }
    };
    let l = s;
    l.NUMERIC = new s(1, [10, 12, 14]), l.ALPHANUMERIC = new s(2, [9, 11, 13]), l.BYTE = new s(4, [8, 16, 16]), l.KANJI = new s(8, [8, 10, 12]), l.ECI = new s(7, [0, 0, 0]), a.Mode = l;
  })(o.QrSegment || (o.QrSegment = {}));
})(mo || (mo = {}));
var ad = mo;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
ad.QrCode.Ecc.LOW, ad.QrCode.Ecc.MEDIUM, ad.QrCode.Ecc.QUARTILE, ad.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function MP() {
  V.useState(!1);
  const [o, a] = V.useState(!1), s = Lu(), l = ji((M) => M.user), { t: d } = Ti();
  let f = null, c = null;
  const y = async function(M) {
    M.preventDefault(), a(!0);
    const D = M.target.screenName.value;
    let P;
    c ? P = c : P = M.target.avatar.files[0];
    let L = l.avatar;
    P && (L = await b(P));
    try {
      await s.user.updateProfile({ display_name: D, avatar: L });
    } catch ($) {
      alert($);
    } finally {
      a(!1), location.reload();
    }
  }, h = (M) => {
    M.preventDefault();
    const D = document.getElementById("image-container"), P = document.getElementById("image-container-wrapper"), L = document.getElementById("image-result");
    if (P.setAttribute("style", "display: none;"), M.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", L.removeAttribute("src"), L.setAttribute("style", "display: none;");
      return;
    }
    const $ = M.target.files[0].size;
    if (parseInt($) > 31 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    P.removeAttribute("style"), f && f.destroy(), f = new PP(D, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const k = new FileReader();
    k.onload = function(U) {
      f.bind(U.target.result);
    }, k.readAsDataURL(M.target.files[0]);
  }, p = (M) => {
    M.preventDefault(), f.toCanvas(300).then((D) => {
      const P = document.getElementById("image-result");
      P.removeAttribute("style"), P.src = D.toDataURL("image/jpeg", 1), c = D.toDataURL("image/jpeg", 1).replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    });
  }, v = (M) => {
    M.preventDefault(), f.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, b = async function(M) {
    try {
      let D = new FormData();
      return D.append("image", M), D.append("key", "d8dc5b96ed210c8360b48acb0fa5ee32"), (await (await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        // headers: {
        // 	'Content-Type': 'multipart/form-data',
        // },
        body: D
      })).json()).data.url;
    } catch (D) {
      throw console.error(D), D;
    }
  };
  let S = window.serverURL;
  if (!S) {
    const M = location.pathname.match(/(.*?\/)ui/);
    S = M ? M[1] : "/";
  }
  const E = new URLSearchParams(location.search);
  let j = window.TOKEN || sessionStorage.getItem("TOKEN") || E.get("token");
  return j || (j = localStorage.getItem("TOKEN")), /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: d("setting") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 208,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 207,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ w.jsxDEV("p", { children: /* @__PURE__ */ w.jsxDEV(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ w.jsxDEV(
                "img",
                {
                  className: "profile-avatar",
                  src: l.avatar || `https://seccdn.libravatar.org/avatar/${l.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 216,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
              lineNumber: 213,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("h2", { children: l.display_name }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 225,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("p", { children: l.email }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 226,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
          lineNumber: 211,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ w.jsxDEV("section", { children: [
                /* @__PURE__ */ w.jsxDEV("h3", { children: d("profile") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 234,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ w.jsxDEV("form", { method: "post", onSubmit: y, children: [
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
                    /* @__PURE__ */ w.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: d("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 238,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ w.jsxDEV(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: l.display_name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 241,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ w.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 248,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 237,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 236,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ w.jsxDEV("div", { id: "image-container" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 255,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ w.jsxDEV(
                      "button",
                      {
                        onClick: p,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 256,
                        columnNumber: 13
                      },
                      this
                    ),
                    /* @__PURE__ */ w.jsxDEV(
                      "button",
                      {
                        onClick: v,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 263,
                        columnNumber: 13
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 254,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 253,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 252,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 277,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 276,
                    columnNumber: 11
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 275,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
                    /* @__PURE__ */ w.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-3", children: d("change avatar") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 283,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ w.jsxDEV(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: h,
                        accept: "image/*"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 286,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ w.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 294,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 282,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 281,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: o,
                      children: d("update my profile")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 300,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 299,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 298,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 235,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 233,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 311,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 314,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 229,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 206,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
    lineNumber: 203,
    columnNumber: 5
  }, this);
}
function UP() {
  const { t: o } = Ti(), a = Lu(), s = Mu(), l = ji((v) => v.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1), h = P1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  V.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const p = async function(v) {
    v.preventDefault(), f(!1);
    const b = v.target.nick.value;
    if (!b || b.length < 2)
      return f(o("nickname illegal"));
    const S = v.target.email.value;
    if (!S)
      return f(o("please input email"));
    const E = v.target.link.value, j = v.target.password.value, M = v.target["password-again"].value;
    if (!j || !M || M !== j)
      return f(o("passwords don't match"));
    try {
      y(!0);
      const D = await h("login"), P = await a.user.register({
        display_name: b,
        email: S,
        url: E,
        password: j,
        recaptchaV3: window.recaptchaV3Key ? D : void 0,
        turnstile: window.turnstileKey ? D : void 0
      });
      P && P.verify && alert(o("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (D) {
      f(D.message);
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ w.jsxDEV("ul", { children: d ? /* @__PURE__ */ w.jsxDEV("li", { children: d }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 83,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ w.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: p, children: [
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "nick", className: "sr-only", children: o("nickname") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: o("nickname"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
              lineNumber: 92,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "link", className: "sr-only", children: o("website") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: o("website"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
              lineNumber: 116,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: o("password")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
              lineNumber: 128,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password-again", className: "sr-only", children: o("password again") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: o("password again")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
              lineNumber: 140,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ w.jsxDEV(
          "button",
          {
            type: "submit",
            disabled: c,
            className: "btn btn-l w-100 primary",
            children: o("register")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 150,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 149,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(In, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
        lineNumber: 160,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
function VP() {
  const o = ji((c) => c.user), { t: a } = Ti(), [s, l] = V.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  V.useEffect(() => {
    hP({ page: s.page }).then((c) => {
      console.log(c), l({ ...s, ...c });
    });
  }, [s.page]);
  const d = (c) => [
    {
      key: "administrator",
      name: a("set administrator"),
      show: c.type === "guest",
      async action(y) {
        y.preventDefault(), await Uv({
          id: c.objectId,
          type: "administrator"
        }), c.type = "administrator", l({ ...s });
      }
    },
    {
      key: "guest",
      name: a("set guest"),
      show: c.type === "administrator",
      async action(y) {
        if (y.preventDefault(), c.objectId === o.objectId)
          return alert(a("You can't set yourself to be guest!"));
        await Uv({
          id: c.objectId,
          type: "guest"
        }), c.type = "guest", l({ ...s });
      }
    },
    {
      key: "label",
      name: a("set label"),
      show: !0,
      async action(y) {
        y.preventDefault();
        const h = prompt(a("please enter an exclusive label"));
        await Uv({
          id: c.objectId,
          label: h
        }), c.label = h, l({ ...s });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: y }) => y), f = (c) => /^verify/.test(c) ? a("verify") : a(c);
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: a("manage users") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ w.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ w.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ w.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ w.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 115,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 116,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 117,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 118,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ w.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 119,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ w.jsxDEV("thead", { children: /* @__PURE__ */ w.jsxDEV("tr", { children: [
                /* @__PURE__ */ w.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 123,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: a("nickname") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 124,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: a("email") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 125,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: a("role") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 126,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: a("exclusive label") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 127,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: a("action") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 128,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 122,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ w.jsxDEV("tbody", { children: s.data.map((c) => /* @__PURE__ */ w.jsxDEV("tr", { id: `user-${c.objectId}`, children: [
                /* @__PURE__ */ w.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ w.jsxDEV("div", { className: "user-avatar", children: /* @__PURE__ */ w.jsxDEV(
                  "img",
                  {
                    className: "avatar",
                    src: H1(c.email, c.avatar),
                    alt: c.display_name,
                    width: "40",
                    height: "40"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 136,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 135,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 134,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { children: /* @__PURE__ */ w.jsxDEV(
                  "a",
                  {
                    href: /^https:\/\//.test(c.url) ? c.url : "https://" + c.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: c.display_name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 146,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 145,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { children: /* @__PURE__ */ w.jsxDEV(
                  "a",
                  {
                    href: `mailto:${c.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: c.email
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 159,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 158,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { children: f(c.type) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 167,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { children: c.label }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 168,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { className: "comment-action", children: d(c).map(
                  ({ key: y, disable: h, name: p, action: v }) => h ? /* @__PURE__ */ w.jsxDEV("span", { className: "weak", children: p }, y, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 173,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ w.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${y}`,
                      onClick: v,
                      children: p
                    },
                    y,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                      lineNumber: 177,
                      columnNumber: 35
                    },
                    this
                  )
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 169,
                  columnNumber: 27
                }, this)
              ] }, c.objectId, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 133,
                columnNumber: 25
              }, this)) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 131,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 113,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
            lineNumber: 107,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ w.jsxDEV("form", { method: "get", children: /* @__PURE__ */ w.jsxDEV(
          B1,
          {
            current: s.page,
            total: s.totalPages,
            onChange: (c) => l({ ...s, page: c })
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
            lineNumber: 198,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 197,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 196,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
var FP = typeof Symbol == "function" && Symbol.observable || "@@observable", WS = FP, Vv = () => Math.random().toString(36).substring(7).split("").join("."), zP = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vv()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vv()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vv()}`
}, Ci = zP;
function Cd(o) {
  if (typeof o != "object" || o === null)
    return !1;
  let a = o;
  for (; Object.getPrototypeOf(a) !== null; )
    a = Object.getPrototypeOf(a);
  return Object.getPrototypeOf(o) === a || Object.getPrototypeOf(o) === null;
}
function $P(o) {
  if (o === void 0)
    return "undefined";
  if (o === null)
    return "null";
  const a = typeof o;
  switch (a) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return a;
  }
  if (Array.isArray(o))
    return "array";
  if (JP(o))
    return "date";
  if (BP(o))
    return "error";
  const s = HP(o);
  switch (s) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return s;
  }
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function HP(o) {
  return typeof o.constructor == "function" ? o.constructor.name : null;
}
function BP(o) {
  return o instanceof Error || typeof o.message == "string" && o.constructor && typeof o.constructor.stackTraceLimit == "number";
}
function JP(o) {
  return o instanceof Date ? !0 : typeof o.toDateString == "function" && typeof o.getDate == "function" && typeof o.setDate == "function";
}
function Fa(o) {
  let a = typeof o;
  return a = $P(o), a;
}
function Ed(o, a, s) {
  if (typeof o != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${Fa(o)}'`);
  if (typeof a == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof a == "function" && typeof s > "u" && (s = a, a = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${Fa(s)}'`);
    return s(Ed)(o, a);
  }
  let l = o, d = a, f = /* @__PURE__ */ new Map(), c = f, y = 0, h = !1;
  function p() {
    c === f && (c = /* @__PURE__ */ new Map(), f.forEach((D, P) => {
      c.set(P, D);
    }));
  }
  function v() {
    if (h)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function b(D) {
    if (typeof D != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${Fa(D)}'`);
    if (h)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let P = !0;
    p();
    const L = y++;
    return c.set(L, D), function() {
      if (P) {
        if (h)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        P = !1, p(), c.delete(L), f = null;
      }
    };
  }
  function S(D) {
    if (!Cd(D))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${Fa(D)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof D.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof D.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${Fa(D.type)}'. Value was: '${D.type}' (stringified)`);
    if (h)
      throw new Error("Reducers may not dispatch actions.");
    try {
      h = !0, d = l(d, D);
    } finally {
      h = !1;
    }
    return (f = c).forEach((L) => {
      L();
    }), D;
  }
  function E(D) {
    if (typeof D != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${Fa(D)}`);
    l = D, S({
      type: Ci.REPLACE
    });
  }
  function j() {
    const D = b;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(P) {
        if (typeof P != "object" || P === null)
          throw new Error(`Expected the observer to be an object. Instead, received: '${Fa(P)}'`);
        function L() {
          const k = P;
          k.next && k.next(v());
        }
        return L(), {
          unsubscribe: D(L)
        };
      },
      [WS]() {
        return this;
      }
    };
  }
  return S({
    type: Ci.INIT
  }), {
    dispatch: S,
    subscribe: b,
    getState: v,
    replaceReducer: E,
    [WS]: j
  };
}
function IP(o, a, s) {
  return Ed(o, a, s);
}
function GS(o) {
  typeof console < "u" && typeof console.error == "function" && console.error(o);
  try {
    throw new Error(o);
  } catch {
  }
}
function YP(o, a, s, l) {
  const d = Object.keys(a), f = s && s.type === Ci.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Cd(o))
    return `The ${f} has unexpected type of "${Fa(o)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const c = Object.keys(o).filter((y) => !a.hasOwnProperty(y) && !l[y]);
  if (c.forEach((y) => {
    l[y] = !0;
  }), !(s && s.type === Ci.REPLACE) && c.length > 0)
    return `Unexpected ${c.length > 1 ? "keys" : "key"} "${c.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function KP(o) {
  Object.keys(o).forEach((a) => {
    const s = o[a];
    if (typeof s(void 0, {
      type: Ci.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof s(void 0, {
      type: Ci.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined when probed with a random type. Don't try to handle '${Ci.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function tN(o) {
  const a = Object.keys(o), s = {};
  for (let c = 0; c < a.length; c++) {
    const y = a[c];
    typeof o[y] > "u" && GS(`No reducer provided for key "${y}"`), typeof o[y] == "function" && (s[y] = o[y]);
  }
  const l = Object.keys(s);
  let d;
  d = {};
  let f;
  try {
    KP(s);
  } catch (c) {
    f = c;
  }
  return function(y = {}, h) {
    if (f)
      throw f;
    {
      const b = YP(y, s, h, d);
      b && GS(b);
    }
    let p = !1;
    const v = {};
    for (let b = 0; b < l.length; b++) {
      const S = l[b], E = s[S], j = y[S], M = E(j, h);
      if (typeof M > "u") {
        const D = h && h.type;
        throw new Error(`When called with an action of type ${D ? `"${String(D)}"` : "(unknown type)"}, the slice reducer for key "${S}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      v[S] = M, p = p || M !== j;
    }
    return p = p || l.length !== Object.keys(y).length, p ? v : y;
  };
}
function qS(o, a) {
  return function(...s) {
    return a(o.apply(this, s));
  };
}
function WP(o, a) {
  if (typeof o == "function")
    return qS(o, a);
  if (typeof o != "object" || o === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${Fa(o)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const s = {};
  for (const l in o) {
    const d = o[l];
    typeof d == "function" && (s[l] = qS(d, a));
  }
  return s;
}
function sg(...o) {
  return o.length === 0 ? (a) => a : o.length === 1 ? o[0] : o.reduce((a, s) => (...l) => a(s(...l)));
}
function nN(...o) {
  return (a) => (s, l) => {
    const d = a(s, l);
    let f = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const c = {
      getState: d.getState,
      dispatch: (h, ...p) => f(h, ...p)
    }, y = o.map((h) => h(c));
    return f = sg(...y)(d.dispatch), {
      ...d,
      dispatch: f
    };
  };
}
function GP(o) {
  return Cd(o) && "type" in o && typeof o.type == "string";
}
const qP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Ci,
  applyMiddleware: nN,
  bindActionCreators: WP,
  combineReducers: tN,
  compose: sg,
  createStore: Ed,
  isAction: GP,
  isPlainObject: Cd,
  legacy_createStore: IP
}, Symbol.toStringTag, { value: "Module" }));
function po() {
  return po = Object.assign || function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, po.apply(this, arguments);
}
function QP(o) {
  var a;
  o.models.forEach(function(h) {
    return rN(o, h);
  });
  var s = aN(o), l = nN.apply(qP, o.reduxConfig.middlewares), d = o.reduxConfig.devtoolComposer ? (a = o.reduxConfig).devtoolComposer.apply(a, o.reduxConfig.enhancers.concat([l])) : ZP(o.reduxConfig.devtoolOptions).apply(void 0, o.reduxConfig.enhancers.concat([l])), f = o.reduxConfig.createStore || Ed, c = o.reduxConfig.initialState, y = c === void 0 ? {} : c;
  return f(s, y, d);
}
function rN(o, a) {
  var s = {}, l = Object.keys(a.reducers);
  l.forEach(function(y) {
    var h = eM(y) ? y : a.name + "/" + y;
    s[h] = a.reducers[y];
  });
  var d = function(h, p) {
    return h === void 0 && (h = a.state), p.type in s ? s[p.type](h, p.payload, p.meta) : h;
  }, f = a.baseReducer, c = f ? function(y, h) {
    return y === void 0 && (y = a.state), d(f(y, h), h);
  } : d;
  o.forEachPlugin("onReducer", function(y) {
    c = y(c, a.name, o) || c;
  }), o.reduxConfig.reducers[a.name] = c;
}
function aN(o) {
  var a = o.reduxConfig.rootReducers, s = XP(o.reduxConfig), l = s;
  return a && Object.keys(a).length && (l = function(f, c) {
    var y = a[c.type];
    return s(y ? y(f, c) : f, c);
  }), o.forEachPlugin("onRootReducer", function(d) {
    l = d(l, o) || l;
  }), l;
}
function XP(o) {
  var a = o.combineReducers || tN;
  return Object.keys(o.reducers).length ? a(o.reducers) : function(s) {
    return s;
  };
}
function ZP(o) {
  return o === void 0 && (o = {}), !o.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(o) : sg;
}
function eM(o) {
  return o.indexOf("/") > -1;
}
var QS = function(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}, Ni = function(a) {
  return !a || typeof a == "function";
}, Vu = function(a) {
  {
    var s = a(), l = [];
    if (s.forEach(function(d) {
      var f = d[0], c = d[1];
      f && l.push(c);
    }), l.length > 0)
      throw new Error(l.join(", "));
  }
}, tM = function(a) {
  Vu(function() {
    return [[!Array.isArray(a.plugins), "init config.plugins must be an array"], [!QS(a.models), "init config.models must be an object"], [!QS(a.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(a.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(a.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!Ni(a.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!Ni(a.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, iN = function(a) {
  Vu(function() {
    return [[!a, "model config is required"], [typeof a.name != "string", 'model "name" [string] is required'], [a.state === void 0 && a.baseReducer === void 0, 'model "state" is required'], [!Ni(a.baseReducer), 'model "baseReducer" must be a function']];
  });
}, nM = function(a) {
  Vu(function() {
    return [[!Ni(a.onStoreCreated), "Plugin onStoreCreated must be a function"], [!Ni(a.onModel), "Plugin onModel must be a function"], [!Ni(a.onReducer), "Plugin onReducer must be a function"], [!Ni(a.onRootReducer), "Plugin onRootReducer must be a function"], [!Ni(a.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, rM = function(a, s, l) {
  Vu(function() {
    return [[!!l.match(/\/.+\//), "Invalid reducer name (" + a + "/" + l + ")"], [typeof s[l] != "function", "Invalid reducer (" + a + "/" + l + "). Must be a function"]];
  });
}, aM = function(a, s, l) {
  Vu(function() {
    return [[!!l.match(/\//), "Invalid effect name (" + a + "/" + l + ")"], [typeof s[l] != "function", "Invalid effect (" + a + "/" + l + "). Must be a function"]];
  });
}, oN = function(a, s, l, d) {
  return Object.assign(function(f, c) {
    var y = {
      type: s + "/" + l
    };
    return typeof f < "u" && (y.payload = f), typeof c < "u" && (y.meta = c), a.dispatch(y);
  }, {
    isEffect: d
  });
}, iM = function(a, s) {
  var l = a.dispatch[s.name], d = Object.keys(s.reducers);
  d.forEach(function(f) {
    rM(s.name, s.reducers, f), l[f] = oN(a, s.name, f, !1);
  });
}, oM = function(a, s, l) {
  var d = a.dispatch[l.name], f = {};
  l.effects && (f = typeof l.effects == "function" ? l.effects(a.dispatch) : l.effects);
  var c = Object.keys(f);
  c.forEach(function(y) {
    aM(l.name, f, y), s.effects[l.name + "/" + y] = f[y].bind(d), d[y] = oN(a, l.name, y, !0);
  });
};
function sM(o) {
  return {
    models: lM(o.models),
    reduxConfig: o.redux,
    forEachPlugin: function(s, l) {
      o.plugins.forEach(function(d) {
        d[s] && l(d[s]);
      });
    },
    effects: {}
  };
}
function lM(o) {
  return Object.keys(o).map(function(a) {
    var s = uM(a, o[a]);
    return iN(s), s;
  });
}
function uM(o, a) {
  return po({
    name: o,
    reducers: {}
  }, a);
}
function cM(o) {
  var a = sM(o);
  a.reduxConfig.middlewares.push(fM(a)), a.forEachPlugin("createMiddleware", function(d) {
    a.reduxConfig.middlewares.push(d(a));
  });
  var s = QP(a), l = po({}, s, {
    name: o.name,
    addModel: function(f) {
      iN(f), rN(a, f), XS(l, f), ZS(l, a, f), s.replaceReducer(aN(a)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return dM(l, o.plugins), a.models.forEach(function(d) {
    return XS(l, d);
  }), a.models.forEach(function(d) {
    return ZS(l, a, d);
  }), a.forEachPlugin("onStoreCreated", function(d) {
    l = d(l, a) || l;
  }), l;
}
function fM(o) {
  return function(a) {
    return function(s) {
      return function(l) {
        return l.type in o.effects ? (s(l), o.effects[l.type](l.payload, a.getState(), l.meta)) : s(l);
      };
    };
  };
}
function XS(o, a) {
  var s = {};
  o.dispatch["" + a.name] = s, iM(o, a);
}
function ZS(o, a, s) {
  oM(o, a, s), a.forEachPlugin("onModel", function(l) {
    l(s, o);
  });
}
function dM(o, a) {
  a.forEach(function(s) {
    if (s.exposed) {
      var l = Object.keys(s.exposed);
      l.forEach(function(d) {
        if (s.exposed) {
          var f = s.exposed[d], c = typeof f == "function";
          o[d] = c ? function() {
            for (var y = arguments.length, h = new Array(y), p = 0; p < y; p++)
              h[p] = arguments[p];
            return f.apply(void 0, [o].concat(h));
          } : Object.create(s.exposed[d]);
        }
      });
    }
  });
}
var e1 = 0;
function mM(o) {
  var a, s, l, d = (a = o.name) != null ? a : "Rematch Store " + e1;
  e1 += 1;
  var f = {
    name: d,
    models: o.models || {},
    plugins: o.plugins || [],
    redux: po({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, o.redux, {
      devtoolOptions: po({
        name: d
      }, (s = (l = o.redux) == null ? void 0 : l.devtoolOptions) != null ? s : {})
    })
  };
  return tM(f), f.plugins.forEach(function(c) {
    c.config && (f.models = id(f.models, c.config.models), c.config.redux && (f.redux.initialState = id(f.redux.initialState, c.config.redux.initialState), f.redux.reducers = id(f.redux.reducers, c.config.redux.reducers), f.redux.rootReducers = id(f.redux.rootReducers, c.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, c.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, c.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || c.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || c.config.redux.createStore)), nM(c);
  }), f;
}
function id(o, a) {
  return a ? po({}, a, o) : o;
}
var pM = function(a) {
  var s = mM(a || {});
  return cM(s);
};
async function hM() {
  return dn("token").catch(() => {
    sN(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function vM({ email: o, password: a, code: s, recaptchaV3: l, turnstile: d }) {
  return dn({
    url: "token",
    method: "POST",
    body: { email: o, password: a, code: s, recaptchaV3: l, turnstile: d }
  });
}
async function sN() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function gM(o) {
  return dn({ url: "user", method: "POST", body: o });
}
async function yM({ email: o }) {
  return dn({
    url: "user/password",
    method: "PUT",
    body: { email: o }
  });
}
const bM = {
  state: null,
  reducers: {
    setUser(o, a) {
      return a;
    },
    updateUser(o, a) {
      return { ...o, ...a };
    }
  },
  effects: (o) => ({
    async loadUserInfo() {
      const a = await hM();
      if (a != null && a.email) {
        if (window.opener) {
          const s = localStorage.getItem("TOKEN"), l = !!s, d = s || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: d, remember: l, ...a } },
            "*"
          );
        }
        return o.user.setUser(a);
      }
    },
    async login({ email: a, password: s, code: l, remember: d, recaptchaV3: f, turnstile: c }) {
      const { token: y, ...h } = await vM({
        email: a,
        password: s,
        code: l,
        recaptchaV3: f,
        turnstile: c
      });
      return y && (window.TOKEN = y, sessionStorage.setItem("TOKEN", y), d && localStorage.setItem("TOKEN", y), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: y, remember: d, ...h } },
        "*"
      )), o.user.setUser(h);
    },
    logout() {
      sN(), o.user.setUser(null);
    },
    register(a) {
      return gM(a);
    },
    forgot(a) {
      return yM(a);
    },
    async updateProfile(a) {
      return await pP(a), window.opener && window.opener.postMessage({ type: "profile", data: a }, "*"), o.user.updateUser(a);
    }
  })
}, lN = pM({ models: { user: bM } });
function od(o) {
  const a = ji((s) => s.user);
  return V.useEffect(() => {
    const s = o.meta || {}, l = o.basename || "";
    if (!(a != null && a.email))
      return location.href = l + "/ui/login?redirect=" + location.pathname.replace(l, "");
    if (s.auth ? o.meta.auth !== a.type : !1)
      return location.href = l + "/ui/profile";
  }, [a, o.meta]), a ? o.children : null;
}
function xM() {
  const o = location.pathname.match(/(.*?)\/ui/), a = o ? o[1] : "/";
  return /* @__PURE__ */ w.jsxDEV(IO, { store: lN, children: /* @__PURE__ */ w.jsxDEV(Q3, { basename: a, children: /* @__PURE__ */ w.jsxDEV(M3, { children: [
    /* @__PURE__ */ w.jsxDEV(
      Si,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(od, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(RP, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 47,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV(
      Si,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(od, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(VP, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 60,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 56,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV(
      Si,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(od, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(DP, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 65,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ w.jsxDEV(Si, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ w.jsxDEV(vP, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(Si, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ w.jsxDEV(UP, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(Si, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ w.jsxDEV(LA, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(
      Si,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(od, { children: /* @__PURE__ */ w.jsxDEV(MP, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 82,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 77,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
const {
  slice: SM,
  forEach: NM
} = [];
function wM(o) {
  return NM.call(SM.call(arguments, 1), (a) => {
    if (a)
      for (const s in a)
        o[s] === void 0 && (o[s] = a[s]);
  }), o;
}
const t1 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, CM = (o, a, s) => {
  const l = s || {};
  l.path = l.path || "/";
  const d = encodeURIComponent(a);
  let f = `${o}=${d}`;
  if (l.maxAge > 0) {
    const c = l.maxAge - 0;
    if (Number.isNaN(c)) throw new Error("maxAge should be a Number");
    f += `; Max-Age=${Math.floor(c)}`;
  }
  if (l.domain) {
    if (!t1.test(l.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${l.domain}`;
  }
  if (l.path) {
    if (!t1.test(l.path))
      throw new TypeError("option path is invalid");
    f += `; Path=${l.path}`;
  }
  if (l.expires) {
    if (typeof l.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    f += `; Expires=${l.expires.toUTCString()}`;
  }
  if (l.httpOnly && (f += "; HttpOnly"), l.secure && (f += "; Secure"), l.sameSite)
    switch (typeof l.sameSite == "string" ? l.sameSite.toLowerCase() : l.sameSite) {
      case !0:
        f += "; SameSite=Strict";
        break;
      case "lax":
        f += "; SameSite=Lax";
        break;
      case "strict":
        f += "; SameSite=Strict";
        break;
      case "none":
        f += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return f;
}, n1 = {
  create(o, a, s, l) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + s * 60 * 1e3)), l && (d.domain = l), document.cookie = CM(o, encodeURIComponent(a), d);
  },
  read(o) {
    const a = `${o}=`, s = document.cookie.split(";");
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      for (; d.charAt(0) === " "; ) d = d.substring(1, d.length);
      if (d.indexOf(a) === 0) return d.substring(a.length, d.length);
    }
    return null;
  },
  remove(o) {
    this.create(o, "", -1);
  }
};
var EM = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(o) {
    let {
      lookupCookie: a
    } = o;
    if (a && typeof document < "u")
      return n1.read(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(o, a) {
    let {
      lookupCookie: s,
      cookieMinutes: l,
      cookieDomain: d,
      cookieOptions: f
    } = a;
    s && typeof document < "u" && n1.create(s, o, l, d, f);
  }
}, RM = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(o) {
    var l;
    let {
      lookupQuerystring: a
    } = o, s;
    if (typeof window < "u") {
      let {
        search: d
      } = window.location;
      !window.location.search && ((l = window.location.hash) == null ? void 0 : l.indexOf("?")) > -1 && (d = window.location.hash.substring(window.location.hash.indexOf("?")));
      const c = d.substring(1).split("&");
      for (let y = 0; y < c.length; y++) {
        const h = c[y].indexOf("=");
        h > 0 && c[y].substring(0, h) === a && (s = c[y].substring(h + 1));
      }
    }
    return s;
  }
};
let wu = null;
const r1 = () => {
  if (wu !== null) return wu;
  try {
    wu = window !== "undefined" && window.localStorage !== null;
    const o = "i18next.translate.boo";
    window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o);
  } catch {
    wu = !1;
  }
  return wu;
};
var jM = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(o) {
    let {
      lookupLocalStorage: a
    } = o;
    if (a && r1())
      return window.localStorage.getItem(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(o, a) {
    let {
      lookupLocalStorage: s
    } = a;
    s && r1() && window.localStorage.setItem(s, o);
  }
};
let Cu = null;
const a1 = () => {
  if (Cu !== null) return Cu;
  try {
    Cu = window !== "undefined" && window.sessionStorage !== null;
    const o = "i18next.translate.boo";
    window.sessionStorage.setItem(o, "foo"), window.sessionStorage.removeItem(o);
  } catch {
    Cu = !1;
  }
  return Cu;
};
var TM = {
  name: "sessionStorage",
  lookup(o) {
    let {
      lookupSessionStorage: a
    } = o;
    if (a && a1())
      return window.sessionStorage.getItem(a) || void 0;
  },
  cacheUserLanguage(o, a) {
    let {
      lookupSessionStorage: s
    } = a;
    s && a1() && window.sessionStorage.setItem(s, o);
  }
}, DM = {
  name: "navigator",
  lookup(o) {
    const a = [];
    if (typeof navigator < "u") {
      const {
        languages: s,
        userLanguage: l,
        language: d
      } = navigator;
      if (s)
        for (let f = 0; f < s.length; f++)
          a.push(s[f]);
      l && a.push(l), d && a.push(d);
    }
    return a.length > 0 ? a : void 0;
  }
}, kM = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(o) {
    let {
      htmlTag: a
    } = o, s;
    const l = a || (typeof document < "u" ? document.documentElement : null);
    return l && typeof l.getAttribute == "function" && (s = l.getAttribute("lang")), s;
  }
}, OM = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(o) {
    var d;
    let {
      lookupFromPathIndex: a
    } = o;
    if (typeof window > "u") return;
    const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(s) ? (d = s[typeof a == "number" ? a : 0]) == null ? void 0 : d.replace("/", "") : void 0;
  }
}, LM = {
  name: "subdomain",
  lookup(o) {
    var d, f;
    let {
      lookupFromSubdomainIndex: a
    } = o;
    const s = typeof a == "number" ? a + 1 : 1, l = typeof window < "u" && ((f = (d = window.location) == null ? void 0 : d.hostname) == null ? void 0 : f.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (l)
      return l[s];
  }
};
function _M() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (o) => o
  };
}
class uN {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(a, s);
  }
  init(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = a || {
      languageUtils: {}
    }, this.options = wM(s, this.options || {}, _M()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(EM), this.addDetector(RM), this.addDetector(jM), this.addDetector(TM), this.addDetector(DM), this.addDetector(kM), this.addDetector(OM), this.addDetector(LM);
  }
  addDetector(a) {
    return this.detectors[a.name] = a, this;
  }
  detect(a) {
    a || (a = this.options.order);
    let s = [];
    return a.forEach((l) => {
      if (this.detectors[l]) {
        let d = this.detectors[l].lookup(this.options);
        d && typeof d == "string" && (d = [d]), d && (s = s.concat(d));
      }
    }), s = s.map((l) => this.options.convertDetectedLanguage(l)), this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null;
  }
  cacheUserLanguage(a, s) {
    s || (s = this.options.caches), s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(a) > -1 || s.forEach((l) => {
      this.detectors[l] && this.detectors[l].cacheUserLanguage(a, this.options);
    }));
  }
}
uN.type = "languageDetector";
mn.use(uN).use(DL).init({
  // we init with resources
  resources: OA,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
async function AM() {
  await Promise.race([
    new Promise((s) => setTimeout(s, 50)),
    new Promise((s) => {
      window.addEventListener("message", (l) => {
        l && l.type === "TOKEN" && l.data && s(l);
      });
    }),
    new Promise((s) => {
      const d = new URLSearchParams(location.search).get("token");
      d && s(d);
    })
  ]).then((s) => {
    s && (window.TOKEN = s, sessionStorage.setItem("TOKEN", s));
  }), await Promise.all([lN.dispatch({ type: "user/loadUserInfo" })]).catch(
    (s) => {
      console.error(s);
    }
  );
  const o = document.createElement("div");
  o.style.height = "100%", document.body.appendChild(o), c1(o).render(
    /* @__PURE__ */ w.jsxDEV(Sd.StrictMode, { children: /* @__PURE__ */ w.jsxDEV(xM, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/index.jsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
AM();
