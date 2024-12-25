(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;background:#09090b;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#4f46e5;text-decoration:none}a:hover{color:#4f46e5;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#27272a;color:#d4d4d8;border:1px solid #27272a;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:1px solid #4f46e5;background-color:#4f46e5;cursor:pointer;border-radius:8px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#6366f1}.primary:active,.primary.active{background-color:#4f46e5}.primary:disabled{background-color:#6366f1;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#18181b;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;border-radius:8px;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#18181b;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-banned,a.operate-banned,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#18181b}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#09090b}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#4f46e5;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#4f46e5!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#4f46e5}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#4f46e5;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.shinigami:hover a #shinigami,.account-item.shinigami.bind a #shinigami{--color-shinigami-1: #000;--color-shinigami-2: #fff}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var CN = Object.defineProperty;
var hb = (o) => {
  throw TypeError(o);
};
var EN = (o, a, s) => a in o ? CN(o, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[a] = s;
var Va = (o, a, s) => EN(o, typeof a != "symbol" ? a + "" : a, s), Ov = (o, a, s) => a.has(o) || hb("Cannot " + s);
var Kt = (o, a, s) => (Ov(o, a, "read from private field"), s ? s.call(o) : a.get(o)), gs = (o, a, s) => a.has(o) ? hb("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(o) : a.set(o, s), ed = (o, a, s, l) => (Ov(o, a, "write to private field"), l ? l.call(o, s) : a.set(o, s), s), mt = (o, a, s) => (Ov(o, a, "access private method"), s);
function RN(o, a) {
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
var a3 = { exports: {} }, Fv = {}, i3 = { exports: {} }, md = { exports: {} };
md.exports;
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
    var s = "18.3.1", l = Symbol.for("react.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), O = Symbol.iterator, M = "@@iterator";
    function k(S) {
      if (S === null || typeof S != "object")
        return null;
      var T = O && S[O] || S[M];
      return typeof T == "function" ? T : null;
    }
    var V = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, R = {
      transition: null
    }, P = {
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
    }, X = {}, De = null;
    function ke(S) {
      De = S;
    }
    X.setExtraStackFrame = function(S) {
      De = S;
    }, X.getCurrentStack = null, X.getStackAddendum = function() {
      var S = "";
      De && (S += De);
      var T = X.getCurrentStack;
      return T && (S += T() || ""), S;
    };
    var he = !1, Le = !1, nt = !1, pe = !1, Ne = !1, we = {
      ReactCurrentDispatcher: V,
      ReactCurrentBatchConfig: R,
      ReactCurrentOwner: I
    };
    we.ReactDebugCurrentFrame = X, we.ReactCurrentActQueue = P;
    function et(S) {
      {
        for (var T = arguments.length, J = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          J[Y - 1] = arguments[Y];
        Qe("warn", S, J);
      }
    }
    function Ce(S) {
      {
        for (var T = arguments.length, J = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          J[Y - 1] = arguments[Y];
        Qe("error", S, J);
      }
    }
    function Qe(S, T, J) {
      {
        var Y = we.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (T += "%s", J = J.concat([ee]));
        var be = J.map(function(ce) {
          return String(ce);
        });
        be.unshift("Warning: " + T), Function.prototype.apply.call(console[S], console, be);
      }
    }
    var kt = {};
    function We(S, T) {
      {
        var J = S.constructor, Y = J && (J.displayName || J.name) || "ReactClass", ee = Y + "." + T;
        if (kt[ee])
          return;
        Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, Y), kt[ee] = !0;
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
      isMounted: function(S) {
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
      enqueueForceUpdate: function(S, T, J) {
        We(S, "forceUpdate");
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
      enqueueReplaceState: function(S, T, J, Y) {
        We(S, "replaceState");
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
      enqueueSetState: function(S, T, J, Y) {
        We(S, "setState");
      }
    }, Rt = Object.assign, hn = {};
    Object.freeze(hn);
    function Yn(S, T, J) {
      this.props = S, this.context = T, this.refs = hn, this.updater = J || pn;
    }
    Yn.prototype.isReactComponent = {}, Yn.prototype.setState = function(S, T) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, T, "setState");
    }, Yn.prototype.forceUpdate = function(S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    };
    {
      var Br = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, Sr = function(S, T) {
        Object.defineProperty(Yn.prototype, S, {
          get: function() {
            et("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
          }
        });
      };
      for (var Nr in Br)
        Br.hasOwnProperty(Nr) && Sr(Nr, Br[Nr]);
    }
    function ur() {
    }
    ur.prototype = Yn.prototype;
    function tn(S, T, J) {
      this.props = S, this.context = T, this.refs = hn, this.updater = J || pn;
    }
    var Mn = tn.prototype = new ur();
    Mn.constructor = tn, Rt(Mn, Yn.prototype), Mn.isPureReactComponent = !0;
    function Kn() {
      var S = {
        current: null
      };
      return Object.seal(S), S;
    }
    var Wn = Array.isArray;
    function Ot(S) {
      return Wn(S);
    }
    function vn(S) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, J = T && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return J;
      }
    }
    function Wt(S) {
      try {
        return Pt(S), !1;
      } catch {
        return !0;
      }
    }
    function Pt(S) {
      return "" + S;
    }
    function Ut(S) {
      if (Wt(S))
        return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(S)), Pt(S);
    }
    function Gn(S, T, J) {
      var Y = S.displayName;
      if (Y)
        return Y;
      var ee = T.displayName || T.name || "";
      return ee !== "" ? J + "(" + ee + ")" : J;
    }
    function cr(S) {
      return S.displayName || "Context";
    }
    function Pn(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case f:
          return "Fragment";
        case d:
          return "Portal";
        case y:
          return "Profiler";
        case c:
          return "StrictMode";
        case L:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case p:
            var T = S;
            return cr(T) + ".Consumer";
          case h:
            var J = S;
            return cr(J._context) + ".Provider";
          case v:
            return Gn(S, S.render, "ForwardRef");
          case C:
            var Y = S.displayName || null;
            return Y !== null ? Y : Pn(S.type) || "Memo";
          case j: {
            var ee = S, be = ee._payload, ce = ee._init;
            try {
              return Pn(ce(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var wr = Object.prototype.hasOwnProperty, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rn, dr, gn;
    gn = {};
    function qn(S) {
      if (wr.call(S, "ref")) {
        var T = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function jt(S) {
      if (wr.call(S, "key")) {
        var T = Object.getOwnPropertyDescriptor(S, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function mr(S, T) {
      var J = function() {
        Rn || (Rn = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      J.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: J,
        configurable: !0
      });
    }
    function ua(S, T) {
      var J = function() {
        dr || (dr = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      J.isReactWarning = !0, Object.defineProperty(S, "ref", {
        get: J,
        configurable: !0
      });
    }
    function ca(S) {
      if (typeof S.ref == "string" && I.current && S.__self && I.current.stateNode !== S.__self) {
        var T = Pn(I.current.type);
        gn[T] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, S.ref), gn[T] = !0);
      }
    }
    var ne = function(S, T, J, Y, ee, be, ce) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: S,
        key: T,
        ref: J,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function de(S, T, J) {
      var Y, ee = {}, be = null, ce = null, Ee = null, He = null;
      if (T != null) {
        qn(T) && (ce = T.ref, ca(T)), jt(T) && (Ut(T.key), be = "" + T.key), Ee = T.__self === void 0 ? null : T.__self, He = T.__source === void 0 ? null : T.__source;
        for (Y in T)
          wr.call(T, Y) && !fr.hasOwnProperty(Y) && (ee[Y] = T[Y]);
      }
      var it = arguments.length - 2;
      if (it === 1)
        ee.children = J;
      else if (it > 1) {
        for (var ct = Array(it), ft = 0; ft < it; ft++)
          ct[ft] = arguments[ft + 2];
        Object.freeze && Object.freeze(ct), ee.children = ct;
      }
      if (S && S.defaultProps) {
        var gt = S.defaultProps;
        for (Y in gt)
          ee[Y] === void 0 && (ee[Y] = gt[Y]);
      }
      if (be || ce) {
        var wt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
        be && mr(ee, wt), ce && ua(ee, wt);
      }
      return ne(S, be, ce, Ee, He, I.current, ee);
    }
    function Ue(S, T) {
      var J = ne(S.type, T, S.ref, S._self, S._source, S._owner, S.props);
      return J;
    }
    function rt(S, T, J) {
      if (S == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
      var Y, ee = Rt({}, S.props), be = S.key, ce = S.ref, Ee = S._self, He = S._source, it = S._owner;
      if (T != null) {
        qn(T) && (ce = T.ref, it = I.current), jt(T) && (Ut(T.key), be = "" + T.key);
        var ct;
        S.type && S.type.defaultProps && (ct = S.type.defaultProps);
        for (Y in T)
          wr.call(T, Y) && !fr.hasOwnProperty(Y) && (T[Y] === void 0 && ct !== void 0 ? ee[Y] = ct[Y] : ee[Y] = T[Y]);
      }
      var ft = arguments.length - 2;
      if (ft === 1)
        ee.children = J;
      else if (ft > 1) {
        for (var gt = Array(ft), wt = 0; wt < ft; wt++)
          gt[wt] = arguments[wt + 2];
        ee.children = gt;
      }
      return ne(S.type, be, ce, Ee, He, it, ee);
    }
    function at(S) {
      return typeof S == "object" && S !== null && S.$$typeof === l;
    }
    var Vt = ".", Tt = ":";
    function Un(S) {
      var T = /[=:]/g, J = {
        "=": "=0",
        ":": "=2"
      }, Y = S.replace(T, function(ee) {
        return J[ee];
      });
      return "$" + Y;
    }
    var ut = !1, Qn = /\/+/g;
    function ht(S) {
      return S.replace(Qn, "$&/");
    }
    function vt(S, T) {
      return typeof S == "object" && S !== null && S.key != null ? (Ut(S.key), Un("" + S.key)) : T.toString(36);
    }
    function Ir(S, T, J, Y, ee) {
      var be = typeof S;
      (be === "undefined" || be === "boolean") && (S = null);
      var ce = !1;
      if (S === null)
        ce = !0;
      else
        switch (be) {
          case "string":
          case "number":
            ce = !0;
            break;
          case "object":
            switch (S.$$typeof) {
              case l:
              case d:
                ce = !0;
            }
        }
      if (ce) {
        var Ee = S, He = ee(Ee), it = Y === "" ? Vt + vt(Ee, 0) : Y;
        if (Ot(He)) {
          var ct = "";
          it != null && (ct = ht(it) + "/"), Ir(He, T, ct, "", function(kd) {
            return kd;
          });
        } else He != null && (at(He) && (He.key && (!Ee || Ee.key !== He.key) && Ut(He.key), He = Ue(
          He,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          J + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (He.key && (!Ee || Ee.key !== He.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            ht("" + He.key) + "/"
          ) : "") + it
        )), T.push(He));
        return 1;
      }
      var ft, gt, wt = 0, Xe = Y === "" ? Vt : Y + Tt;
      if (Ot(S))
        for (var Qa = 0; Qa < S.length; Qa++)
          ft = S[Qa], gt = Xe + vt(ft, Qa), wt += Ir(ft, T, J, gt, ee);
      else {
        var No = k(S);
        if (typeof No == "function") {
          var Hs = S;
          No === Hs.entries && (ut || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ut = !0);
          for (var Dd = No.call(Hs), ha, Js = 0; !(ha = Dd.next()).done; )
            ft = ha.value, gt = Xe + vt(ft, Js++), wt += Ir(ft, T, J, gt, ee);
        } else if (be === "object") {
          var Bs = String(S);
          throw new Error("Objects are not valid as a React child (found: " + (Bs === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Bs) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return wt;
    }
    function Cr(S, T, J) {
      if (S == null)
        return S;
      var Y = [], ee = 0;
      return Ir(S, Y, "", "", function(be) {
        return T.call(J, be, ee++);
      }), Y;
    }
    function Ti(S) {
      var T = 0;
      return Cr(S, function() {
        T++;
      }), T;
    }
    function vo(S, T, J) {
      Cr(S, function() {
        T.apply(this, arguments);
      }, J);
    }
    function Rs(S) {
      return Cr(S, function(T) {
        return T;
      }) || [];
    }
    function Di(S) {
      if (!at(S))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
    function ki(S) {
      var T = {
        $$typeof: p,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: S,
        _currentValue2: S,
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
      var J = !1, Y = !1, ee = !1;
      {
        var be = {
          $$typeof: p,
          _context: T
        };
        Object.defineProperties(be, {
          Provider: {
            get: function() {
              return Y || (Y = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
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
              return J || (J = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
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
        }), T.Consumer = be;
      }
      return T._currentRenderer = null, T._currentRenderer2 = null, T;
    }
    var fa = -1, Ja = 0, da = 1, Yr = 2;
    function Er(S) {
      if (S._status === fa) {
        var T = S._result, J = T();
        if (J.then(function(be) {
          if (S._status === Ja || S._status === fa) {
            var ce = S;
            ce._status = da, ce._result = be;
          }
        }, function(be) {
          if (S._status === Ja || S._status === fa) {
            var ce = S;
            ce._status = Yr, ce._result = be;
          }
        }), S._status === fa) {
          var Y = S;
          Y._status = Ja, Y._result = J;
        }
      }
      if (S._status === da) {
        var ee = S._result;
        return ee === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw S._result;
    }
    function D(S) {
      var T = {
        // We use these fields to store the result.
        _status: fa,
        _result: S
      }, J = {
        $$typeof: j,
        _payload: T,
        _init: Er
      };
      {
        var Y, ee;
        Object.defineProperties(J, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(be) {
              Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = be, Object.defineProperty(J, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(be) {
              Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = be, Object.defineProperty(J, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return J;
    }
    function Q(S) {
      S != null && S.$$typeof === C ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Ce("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var T = {
        $$typeof: v,
        render: S
      };
      {
        var J;
        Object.defineProperty(T, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return J;
          },
          set: function(Y) {
            J = Y, !S.name && !S.displayName && (S.displayName = Y);
          }
        });
      }
      return T;
    }
    var re;
    re = Symbol.for("react.module.reference");
    function ge(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === f || S === y || Ne || S === c || S === L || S === x || pe || S === F || he || Le || nt || typeof S == "object" && S !== null && (S.$$typeof === j || S.$$typeof === C || S.$$typeof === h || S.$$typeof === p || S.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === re || S.getModuleId !== void 0));
    }
    function $e(S, T) {
      ge(S) || Ce("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
      var J = {
        $$typeof: C,
        type: S,
        compare: T === void 0 ? null : T
      };
      {
        var Y;
        Object.defineProperty(J, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return Y;
          },
          set: function(ee) {
            Y = ee, !S.name && !S.displayName && (S.displayName = ee);
          }
        });
      }
      return J;
    }
    function Se() {
      var S = V.current;
      return S === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
    }
    function Pe(S) {
      var T = Se();
      if (S._context !== void 0) {
        var J = S._context;
        J.Consumer === S ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : J.Provider === S && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return T.useContext(S);
    }
    function Ae(S) {
      var T = Se();
      return T.useState(S);
    }
    function bt(S, T, J) {
      var Y = Se();
      return Y.useReducer(S, T, J);
    }
    function Ve(S) {
      var T = Se();
      return T.useRef(S);
    }
    function Lt(S, T) {
      var J = Se();
      return J.useEffect(S, T);
    }
    function yn(S, T) {
      var J = Se();
      return J.useInsertionEffect(S, T);
    }
    function Rr(S, T) {
      var J = Se();
      return J.useLayoutEffect(S, T);
    }
    function jr(S, T) {
      var J = Se();
      return J.useCallback(S, T);
    }
    function Gt(S, T) {
      var J = Se();
      return J.useMemo(S, T);
    }
    function Oi(S, T, J) {
      var Y = Se();
      return Y.useImperativeHandle(S, T, J);
    }
    function go(S, T) {
      {
        var J = Se();
        return J.useDebugValue(S, T);
      }
    }
    function js() {
      var S = Se();
      return S.useTransition();
    }
    function ma(S) {
      var T = Se();
      return T.useDeferredValue(S);
    }
    function ze() {
      var S = Se();
      return S.useId();
    }
    function _i(S, T, J) {
      var Y = Se();
      return Y.useSyncExternalStore(S, T, J);
    }
    var Ba = 0, Ts, Ds, ks, Os, _s, As, Ms;
    function zu() {
    }
    zu.__reactDisabledLog = !0;
    function Rd() {
      {
        if (Ba === 0) {
          Ts = console.log, Ds = console.info, ks = console.warn, Os = console.error, _s = console.group, As = console.groupCollapsed, Ms = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: zu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        Ba++;
      }
    }
    function Ps() {
      {
        if (Ba--, Ba === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, S, {
              value: Ts
            }),
            info: Rt({}, S, {
              value: Ds
            }),
            warn: Rt({}, S, {
              value: ks
            }),
            error: Rt({}, S, {
              value: Os
            }),
            group: Rt({}, S, {
              value: _s
            }),
            groupCollapsed: Rt({}, S, {
              value: As
            }),
            groupEnd: Rt({}, S, {
              value: Ms
            })
          });
        }
        Ba < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = we.ReactCurrentDispatcher, pr;
    function Ia(S, T, J) {
      {
        if (pr === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            pr = Y && Y[1] || "";
          }
        return `
` + pr + S;
      }
    }
    var Ya = !1, yo;
    {
      var Us = typeof WeakMap == "function" ? WeakMap : Map;
      yo = new Us();
    }
    function $u(S, T) {
      if (!S || Ya)
        return "";
      {
        var J = yo.get(S);
        if (J !== void 0)
          return J;
      }
      var Y;
      Ya = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = Ai.current, Ai.current = null, Rd();
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
            Reflect.construct(S, [], ce);
          } else {
            try {
              ce.call();
            } catch (Xe) {
              Y = Xe;
            }
            S.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            Y = Xe;
          }
          S();
        }
      } catch (Xe) {
        if (Xe && Y && typeof Xe.stack == "string") {
          for (var Ee = Xe.stack.split(`
`), He = Y.stack.split(`
`), it = Ee.length - 1, ct = He.length - 1; it >= 1 && ct >= 0 && Ee[it] !== He[ct]; )
            ct--;
          for (; it >= 1 && ct >= 0; it--, ct--)
            if (Ee[it] !== He[ct]) {
              if (it !== 1 || ct !== 1)
                do
                  if (it--, ct--, ct < 0 || Ee[it] !== He[ct]) {
                    var ft = `
` + Ee[it].replace(" at new ", " at ");
                    return S.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", S.displayName)), typeof S == "function" && yo.set(S, ft), ft;
                  }
                while (it >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        Ya = !1, Ai.current = be, Ps(), Error.prepareStackTrace = ee;
      }
      var gt = S ? S.displayName || S.name : "", wt = gt ? Ia(gt) : "";
      return typeof S == "function" && yo.set(S, wt), wt;
    }
    function Vs(S, T, J) {
      return $u(S, !1);
    }
    function jd(S) {
      var T = S.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ka(S, T, J) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return $u(S, jd(S));
      if (typeof S == "string")
        return Ia(S);
      switch (S) {
        case L:
          return Ia("Suspense");
        case x:
          return Ia("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case v:
            return Vs(S.render);
          case C:
            return Ka(S.type, T, J);
          case j: {
            var Y = S, ee = Y._payload, be = Y._init;
            try {
              return Ka(be(ee), T, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Hu = {}, Fs = we.ReactDebugCurrentFrame;
    function Lo(S) {
      if (S) {
        var T = S._owner, J = Ka(S.type, S._source, T ? T.type : null);
        Fs.setExtraStackFrame(J);
      } else
        Fs.setExtraStackFrame(null);
    }
    function Ju(S, T, J, Y, ee) {
      {
        var be = Function.call.bind(wr);
        for (var ce in S)
          if (be(S, ce)) {
            var Ee = void 0;
            try {
              if (typeof S[ce] != "function") {
                var He = Error((Y || "React class") + ": " + J + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Ee = S[ce](T, ce, Y, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              Ee = it;
            }
            Ee && !(Ee instanceof Error) && (Lo(ee), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", J, ce, typeof Ee), Lo(null)), Ee instanceof Error && !(Ee.message in Hu) && (Hu[Ee.message] = !0, Lo(ee), Ce("Failed %s type: %s", J, Ee.message), Lo(null));
          }
      }
    }
    function Ke(S) {
      if (S) {
        var T = S._owner, J = Ka(S.type, S._source, T ? T.type : null);
        ke(J);
      } else
        ke(null);
    }
    var zs;
    zs = !1;
    function $s() {
      if (I.current) {
        var S = Pn(I.current.type);
        if (S)
          return `

Check the render method of \`` + S + "`.";
      }
      return "";
    }
    function _e(S) {
      if (S !== void 0) {
        var T = S.fileName.replace(/^.*[\\\/]/, ""), J = S.lineNumber;
        return `

Check your code at ` + T + ":" + J + ".";
      }
      return "";
    }
    function Bu(S) {
      return S != null ? _e(S.__source) : "";
    }
    var Ln = {};
    function Mi(S) {
      var T = $s();
      if (!T) {
        var J = typeof S == "string" ? S : S.displayName || S.name;
        J && (T = `

Check the top-level render call using <` + J + ">.");
      }
      return T;
    }
    function Wa(S, T) {
      if (!(!S._store || S._store.validated || S.key != null)) {
        S._store.validated = !0;
        var J = Mi(T);
        if (!Ln[J]) {
          Ln[J] = !0;
          var Y = "";
          S && S._owner && S._owner !== I.current && (Y = " It was passed a child from " + Pn(S._owner.type) + "."), Ke(S), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, Y), Ke(null);
        }
      }
    }
    function Iu(S, T) {
      if (typeof S == "object") {
        if (Ot(S))
          for (var J = 0; J < S.length; J++) {
            var Y = S[J];
            at(Y) && Wa(Y, T);
          }
        else if (at(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ee = k(S);
          if (typeof ee == "function" && ee !== S.entries)
            for (var be = ee.call(S), ce; !(ce = be.next()).done; )
              at(ce.value) && Wa(ce.value, T);
        }
      }
    }
    function qt(S) {
      {
        var T = S.type;
        if (T == null || typeof T == "string")
          return;
        var J;
        if (typeof T == "function")
          J = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === C))
          J = T.propTypes;
        else
          return;
        if (J) {
          var Y = Pn(T);
          Ju(J, S.props, "prop", Y, S);
        } else if (T.PropTypes !== void 0 && !zs) {
          zs = !0;
          var ee = Pn(T);
          Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(S) {
      {
        for (var T = Object.keys(S.props), J = 0; J < T.length; J++) {
          var Y = T[J];
          if (Y !== "children" && Y !== "key") {
            Ke(S), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ke(null);
            break;
          }
        }
        S.ref !== null && (Ke(S), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    function Yu(S, T, J) {
      var Y = ge(S);
      if (!Y) {
        var ee = "";
        (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var be = Bu(T);
        be ? ee += be : ee += $s();
        var ce;
        S === null ? ce = "null" : Ot(S) ? ce = "array" : S !== void 0 && S.$$typeof === l ? (ce = "<" + (Pn(S.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof S, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, ee);
      }
      var Ee = de.apply(this, arguments);
      if (Ee == null)
        return Ee;
      if (Y)
        for (var He = 2; He < arguments.length; He++)
          Iu(arguments[He], S);
      return S === f ? xt(Ee) : qt(Ee), Ee;
    }
    var Xn = !1;
    function Vn(S) {
      var T = Yu.bind(null, S);
      return T.type = S, Xn || (Xn = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
        enumerable: !1,
        get: function() {
          return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: S
          }), S;
        }
      }), T;
    }
    function Kr(S, T, J) {
      for (var Y = rt.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        Iu(arguments[ee], Y.type);
      return qt(Y), Y;
    }
    function Td(S, T) {
      var J = R.transition;
      R.transition = {};
      var Y = R.transition;
      R.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        S();
      } finally {
        if (R.transition = J, J === null && Y._updatedFibers) {
          var ee = Y._updatedFibers.size;
          ee > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
        }
      }
    }
    var bo = !1, Pi = null;
    function Ku(S) {
      if (Pi === null)
        try {
          var T = ("require" + Math.random()).slice(0, 7), J = o && o[T];
          Pi = J.call(o, "timers").setImmediate;
        } catch {
          Pi = function(ee) {
            bo === !1 && (bo = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var be = new MessageChannel();
            be.port1.onmessage = ee, be.port2.postMessage(void 0);
          };
        }
      return Pi(S);
    }
    var Ga = 0, Wu = !1;
    function Gu(S) {
      {
        var T = Ga;
        Ga++, P.current === null && (P.current = []);
        var J = P.isBatchingLegacy, Y;
        try {
          if (P.isBatchingLegacy = !0, Y = S(), !J && P.didScheduleLegacyUpdate) {
            var ee = P.current;
            ee !== null && (P.didScheduleLegacyUpdate = !1, So(ee));
          }
        } catch (gt) {
          throw pa(T), gt;
        } finally {
          P.isBatchingLegacy = J;
        }
        if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
          var be = Y, ce = !1, Ee = {
            then: function(gt, wt) {
              ce = !0, be.then(function(Xe) {
                pa(T), Ga === 0 ? xo(Xe, gt, wt) : gt(Xe);
              }, function(Xe) {
                pa(T), wt(Xe);
              });
            }
          };
          return !Wu && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            ce || (Wu = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Ee;
        } else {
          var He = Y;
          if (pa(T), Ga === 0) {
            var it = P.current;
            it !== null && (So(it), P.current = null);
            var ct = {
              then: function(gt, wt) {
                P.current === null ? (P.current = [], xo(He, gt, wt)) : gt(He);
              }
            };
            return ct;
          } else {
            var ft = {
              then: function(gt, wt) {
                gt(He);
              }
            };
            return ft;
          }
        }
      }
    }
    function pa(S) {
      S !== Ga - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ga = S;
    }
    function xo(S, T, J) {
      {
        var Y = P.current;
        if (Y !== null)
          try {
            So(Y), Ku(function() {
              Y.length === 0 ? (P.current = null, T(S)) : xo(S, T, J);
            });
          } catch (ee) {
            J(ee);
          }
        else
          T(S);
      }
    }
    var qa = !1;
    function So(S) {
      if (!qa) {
        qa = !0;
        var T = 0;
        try {
          for (; T < S.length; T++) {
            var J = S[T];
            do
              J = J(!0);
            while (J !== null);
          }
          S.length = 0;
        } catch (Y) {
          throw S = S.slice(T + 1), Y;
        } finally {
          qa = !1;
        }
      }
    }
    var qu = Yu, Qu = Kr, Xu = Vn, Zu = {
      map: Cr,
      forEach: vo,
      count: Ti,
      toArray: Rs,
      only: Di
    };
    a.Children = Zu, a.Component = Yn, a.Fragment = f, a.Profiler = y, a.PureComponent = tn, a.StrictMode = c, a.Suspense = L, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, a.act = Gu, a.cloneElement = Qu, a.createContext = ki, a.createElement = qu, a.createFactory = Xu, a.createRef = Kn, a.forwardRef = Q, a.isValidElement = at, a.lazy = D, a.memo = $e, a.startTransition = Td, a.unstable_act = Gu, a.useCallback = jr, a.useContext = Pe, a.useDebugValue = go, a.useDeferredValue = ma, a.useEffect = Lt, a.useId = ze, a.useImperativeHandle = Oi, a.useInsertionEffect = yn, a.useLayoutEffect = Rr, a.useMemo = Gt, a.useReducer = bt, a.useRef = Ve, a.useState = Ae, a.useSyncExternalStore = _i, a.useTransition = js, a.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(md, md.exports);
var jN = md.exports;
i3.exports = jN;
var U = i3.exports;
const Sd = /* @__PURE__ */ xd(U), zv = /* @__PURE__ */ RN({
  __proto__: null,
  default: Sd
}, [U]);
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
  var o = U, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), j = Symbol.iterator, F = "@@iterator";
  function O(D) {
    if (D === null || typeof D != "object")
      return null;
    var Q = j && D[j] || D[F];
    return typeof Q == "function" ? Q : null;
  }
  var M = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function k(D) {
    {
      for (var Q = arguments.length, re = new Array(Q > 1 ? Q - 1 : 0), ge = 1; ge < Q; ge++)
        re[ge - 1] = arguments[ge];
      V("error", D, re);
    }
  }
  function V(D, Q, re) {
    {
      var ge = M.ReactDebugCurrentFrame, $e = ge.getStackAddendum();
      $e !== "" && (Q += "%s", re = re.concat([$e]));
      var Se = re.map(function(Pe) {
        return String(Pe);
      });
      Se.unshift("Warning: " + Q), Function.prototype.apply.call(console[D], console, Se);
    }
  }
  var R = !1, P = !1, I = !1, X = !1, De = !1, ke;
  ke = Symbol.for("react.module.reference");
  function he(D) {
    return !!(typeof D == "string" || typeof D == "function" || D === l || D === f || De || D === d || D === p || D === v || X || D === C || R || P || I || typeof D == "object" && D !== null && (D.$$typeof === x || D.$$typeof === L || D.$$typeof === c || D.$$typeof === y || D.$$typeof === h || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    D.$$typeof === ke || D.getModuleId !== void 0));
  }
  function Le(D, Q, re) {
    var ge = D.displayName;
    if (ge)
      return ge;
    var $e = Q.displayName || Q.name || "";
    return $e !== "" ? re + "(" + $e + ")" : re;
  }
  function nt(D) {
    return D.displayName || "Context";
  }
  function pe(D) {
    if (D == null)
      return null;
    if (typeof D.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
      return D.displayName || D.name || null;
    if (typeof D == "string")
      return D;
    switch (D) {
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
    if (typeof D == "object")
      switch (D.$$typeof) {
        case y:
          var Q = D;
          return nt(Q) + ".Consumer";
        case c:
          var re = D;
          return nt(re._context) + ".Provider";
        case h:
          return Le(D, D.render, "ForwardRef");
        case L:
          var ge = D.displayName || null;
          return ge !== null ? ge : pe(D.type) || "Memo";
        case x: {
          var $e = D, Se = $e._payload, Pe = $e._init;
          try {
            return pe(Pe(Se));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Ne = Object.assign, we = 0, et, Ce, Qe, kt, We, pn, Rt;
  function hn() {
  }
  hn.__reactDisabledLog = !0;
  function Yn() {
    {
      if (we === 0) {
        et = console.log, Ce = console.info, Qe = console.warn, kt = console.error, We = console.group, pn = console.groupCollapsed, Rt = console.groupEnd;
        var D = {
          configurable: !0,
          enumerable: !0,
          value: hn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: D,
          log: D,
          warn: D,
          error: D,
          group: D,
          groupCollapsed: D,
          groupEnd: D
        });
      }
      we++;
    }
  }
  function Br() {
    {
      if (we--, we === 0) {
        var D = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Ne({}, D, {
            value: et
          }),
          info: Ne({}, D, {
            value: Ce
          }),
          warn: Ne({}, D, {
            value: Qe
          }),
          error: Ne({}, D, {
            value: kt
          }),
          group: Ne({}, D, {
            value: We
          }),
          groupCollapsed: Ne({}, D, {
            value: pn
          }),
          groupEnd: Ne({}, D, {
            value: Rt
          })
        });
      }
      we < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Sr = M.ReactCurrentDispatcher, Nr;
  function ur(D, Q, re) {
    {
      if (Nr === void 0)
        try {
          throw Error();
        } catch ($e) {
          var ge = $e.stack.trim().match(/\n( *(at )?)/);
          Nr = ge && ge[1] || "";
        }
      return `
` + Nr + D;
    }
  }
  var tn = !1, Mn;
  {
    var Kn = typeof WeakMap == "function" ? WeakMap : Map;
    Mn = new Kn();
  }
  function Wn(D, Q) {
    if (!D || tn)
      return "";
    {
      var re = Mn.get(D);
      if (re !== void 0)
        return re;
    }
    var ge;
    tn = !0;
    var $e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Se;
    Se = Sr.current, Sr.current = null, Yn();
    try {
      if (Q) {
        var Pe = function() {
          throw Error();
        };
        if (Object.defineProperty(Pe.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(Pe, []);
          } catch (Gt) {
            ge = Gt;
          }
          Reflect.construct(D, [], Pe);
        } else {
          try {
            Pe.call();
          } catch (Gt) {
            ge = Gt;
          }
          D.call(Pe.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Gt) {
          ge = Gt;
        }
        D();
      }
    } catch (Gt) {
      if (Gt && ge && typeof Gt.stack == "string") {
        for (var Ae = Gt.stack.split(`
`), bt = ge.stack.split(`
`), Ve = Ae.length - 1, Lt = bt.length - 1; Ve >= 1 && Lt >= 0 && Ae[Ve] !== bt[Lt]; )
          Lt--;
        for (; Ve >= 1 && Lt >= 0; Ve--, Lt--)
          if (Ae[Ve] !== bt[Lt]) {
            if (Ve !== 1 || Lt !== 1)
              do
                if (Ve--, Lt--, Lt < 0 || Ae[Ve] !== bt[Lt]) {
                  var yn = `
` + Ae[Ve].replace(" at new ", " at ");
                  return D.displayName && yn.includes("<anonymous>") && (yn = yn.replace("<anonymous>", D.displayName)), typeof D == "function" && Mn.set(D, yn), yn;
                }
              while (Ve >= 1 && Lt >= 0);
            break;
          }
      }
    } finally {
      tn = !1, Sr.current = Se, Br(), Error.prepareStackTrace = $e;
    }
    var Rr = D ? D.displayName || D.name : "", jr = Rr ? ur(Rr) : "";
    return typeof D == "function" && Mn.set(D, jr), jr;
  }
  function Ot(D, Q, re) {
    return Wn(D, !1);
  }
  function vn(D) {
    var Q = D.prototype;
    return !!(Q && Q.isReactComponent);
  }
  function Wt(D, Q, re) {
    if (D == null)
      return "";
    if (typeof D == "function")
      return Wn(D, vn(D));
    if (typeof D == "string")
      return ur(D);
    switch (D) {
      case p:
        return ur("Suspense");
      case v:
        return ur("SuspenseList");
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case h:
          return Ot(D.render);
        case L:
          return Wt(D.type, Q, re);
        case x: {
          var ge = D, $e = ge._payload, Se = ge._init;
          try {
            return Wt(Se($e), Q, re);
          } catch {
          }
        }
      }
    return "";
  }
  var Pt = Object.prototype.hasOwnProperty, Ut = {}, Gn = M.ReactDebugCurrentFrame;
  function cr(D) {
    if (D) {
      var Q = D._owner, re = Wt(D.type, D._source, Q ? Q.type : null);
      Gn.setExtraStackFrame(re);
    } else
      Gn.setExtraStackFrame(null);
  }
  function Pn(D, Q, re, ge, $e) {
    {
      var Se = Function.call.bind(Pt);
      for (var Pe in D)
        if (Se(D, Pe)) {
          var Ae = void 0;
          try {
            if (typeof D[Pe] != "function") {
              var bt = Error((ge || "React class") + ": " + re + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw bt.name = "Invariant Violation", bt;
            }
            Ae = D[Pe](Q, Pe, ge, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ve) {
            Ae = Ve;
          }
          Ae && !(Ae instanceof Error) && (cr($e), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", re, Pe, typeof Ae), cr(null)), Ae instanceof Error && !(Ae.message in Ut) && (Ut[Ae.message] = !0, cr($e), k("Failed %s type: %s", re, Ae.message), cr(null));
        }
    }
  }
  var wr = Array.isArray;
  function fr(D) {
    return wr(D);
  }
  function Rn(D) {
    {
      var Q = typeof Symbol == "function" && Symbol.toStringTag, re = Q && D[Symbol.toStringTag] || D.constructor.name || "Object";
      return re;
    }
  }
  function dr(D) {
    try {
      return gn(D), !1;
    } catch {
      return !0;
    }
  }
  function gn(D) {
    return "" + D;
  }
  function qn(D) {
    if (dr(D))
      return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(D)), gn(D);
  }
  var jt = M.ReactCurrentOwner, mr = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, ua, ca, ne;
  ne = {};
  function de(D) {
    if (Pt.call(D, "ref")) {
      var Q = Object.getOwnPropertyDescriptor(D, "ref").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return D.ref !== void 0;
  }
  function Ue(D) {
    if (Pt.call(D, "key")) {
      var Q = Object.getOwnPropertyDescriptor(D, "key").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return D.key !== void 0;
  }
  function rt(D, Q) {
    if (typeof D.ref == "string" && jt.current && Q && jt.current.stateNode !== Q) {
      var re = pe(jt.current.type);
      ne[re] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(jt.current.type), D.ref), ne[re] = !0);
    }
  }
  function at(D, Q) {
    {
      var re = function() {
        ua || (ua = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      re.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: re,
        configurable: !0
      });
    }
  }
  function Vt(D, Q) {
    {
      var re = function() {
        ca || (ca = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      re.isReactWarning = !0, Object.defineProperty(D, "ref", {
        get: re,
        configurable: !0
      });
    }
  }
  var Tt = function(D, Q, re, ge, $e, Se, Pe) {
    var Ae = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: a,
      // Built-in properties that belong on the element
      type: D,
      key: Q,
      ref: re,
      props: Pe,
      // Record the component responsible for creating this element.
      _owner: Se
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
  function Un(D, Q, re, ge, $e) {
    {
      var Se, Pe = {}, Ae = null, bt = null;
      re !== void 0 && (qn(re), Ae = "" + re), Ue(Q) && (qn(Q.key), Ae = "" + Q.key), de(Q) && (bt = Q.ref, rt(Q, $e));
      for (Se in Q)
        Pt.call(Q, Se) && !mr.hasOwnProperty(Se) && (Pe[Se] = Q[Se]);
      if (D && D.defaultProps) {
        var Ve = D.defaultProps;
        for (Se in Ve)
          Pe[Se] === void 0 && (Pe[Se] = Ve[Se]);
      }
      if (Ae || bt) {
        var Lt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
        Ae && at(Pe, Lt), bt && Vt(Pe, Lt);
      }
      return Tt(D, Ae, bt, $e, ge, jt.current, Pe);
    }
  }
  var ut = M.ReactCurrentOwner, Qn = M.ReactDebugCurrentFrame;
  function ht(D) {
    if (D) {
      var Q = D._owner, re = Wt(D.type, D._source, Q ? Q.type : null);
      Qn.setExtraStackFrame(re);
    } else
      Qn.setExtraStackFrame(null);
  }
  var vt;
  vt = !1;
  function Ir(D) {
    return typeof D == "object" && D !== null && D.$$typeof === a;
  }
  function Cr() {
    {
      if (ut.current) {
        var D = pe(ut.current.type);
        if (D)
          return `

Check the render method of \`` + D + "`.";
      }
      return "";
    }
  }
  function Ti(D) {
    {
      if (D !== void 0) {
        var Q = D.fileName.replace(/^.*[\\\/]/, ""), re = D.lineNumber;
        return `

Check your code at ` + Q + ":" + re + ".";
      }
      return "";
    }
  }
  var vo = {};
  function Rs(D) {
    {
      var Q = Cr();
      if (!Q) {
        var re = typeof D == "string" ? D : D.displayName || D.name;
        re && (Q = `

Check the top-level render call using <` + re + ">.");
      }
      return Q;
    }
  }
  function Di(D, Q) {
    {
      if (!D._store || D._store.validated || D.key != null)
        return;
      D._store.validated = !0;
      var re = Rs(Q);
      if (vo[re])
        return;
      vo[re] = !0;
      var ge = "";
      D && D._owner && D._owner !== ut.current && (ge = " It was passed a child from " + pe(D._owner.type) + "."), ht(D), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, ge), ht(null);
    }
  }
  function ki(D, Q) {
    {
      if (typeof D != "object")
        return;
      if (fr(D))
        for (var re = 0; re < D.length; re++) {
          var ge = D[re];
          Ir(ge) && Di(ge, Q);
        }
      else if (Ir(D))
        D._store && (D._store.validated = !0);
      else if (D) {
        var $e = O(D);
        if (typeof $e == "function" && $e !== D.entries)
          for (var Se = $e.call(D), Pe; !(Pe = Se.next()).done; )
            Ir(Pe.value) && Di(Pe.value, Q);
      }
    }
  }
  function fa(D) {
    {
      var Q = D.type;
      if (Q == null || typeof Q == "string")
        return;
      var re;
      if (typeof Q == "function")
        re = Q.propTypes;
      else if (typeof Q == "object" && (Q.$$typeof === h || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      Q.$$typeof === L))
        re = Q.propTypes;
      else
        return;
      if (re) {
        var ge = pe(Q);
        Pn(re, D.props, "prop", ge, D);
      } else if (Q.PropTypes !== void 0 && !vt) {
        vt = !0;
        var $e = pe(Q);
        k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
      }
      typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ja(D) {
    {
      for (var Q = Object.keys(D.props), re = 0; re < Q.length; re++) {
        var ge = Q[re];
        if (ge !== "children" && ge !== "key") {
          ht(D), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), ht(null);
          break;
        }
      }
      D.ref !== null && (ht(D), k("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
    }
  }
  var da = {};
  function Yr(D, Q, re, ge, $e, Se) {
    {
      var Pe = he(D);
      if (!Pe) {
        var Ae = "";
        (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var bt = Ti($e);
        bt ? Ae += bt : Ae += Cr();
        var Ve;
        D === null ? Ve = "null" : fr(D) ? Ve = "array" : D !== void 0 && D.$$typeof === a ? (Ve = "<" + (pe(D.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof D, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, Ae);
      }
      var Lt = Un(D, Q, re, $e, Se);
      if (Lt == null)
        return Lt;
      if (Pe) {
        var yn = Q.children;
        if (yn !== void 0)
          if (ge)
            if (fr(yn)) {
              for (var Rr = 0; Rr < yn.length; Rr++)
                ki(yn[Rr], D);
              Object.freeze && Object.freeze(yn);
            } else
              k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            ki(yn, D);
      }
      if (Pt.call(Q, "key")) {
        var jr = pe(D), Gt = Object.keys(Q).filter(function(js) {
          return js !== "key";
        }), Oi = Gt.length > 0 ? "{key: someKey, " + Gt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!da[jr + Oi]) {
          var go = Gt.length > 0 ? "{" + Gt.join(": ..., ") + ": ...}" : "{}";
          k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oi, jr, go, jr), da[jr + Oi] = !0;
        }
      }
      return D === l ? Ja(Lt) : fa(Lt), Lt;
    }
  }
  var Er = Yr;
  Fv.Fragment = l, Fv.jsxDEV = Er;
})();
a3.exports = Fv;
var N = a3.exports, o3 = { exports: {} }, sr = {}, s3 = { exports: {} }, l3 = {};
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
        var Tt = (rt + 1) * 2 - 1, Un = ne[Tt], ut = Tt + 1, Qn = ne[ut];
        if (p(Un, de) < 0)
          ut < at && p(Qn, Un) < 0 ? (ne[rt] = Qn, ne[ut] = de, rt = ut) : (ne[rt] = Un, ne[Tt] = de, rt = Tt);
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
    var v = 1, L = 2, x = 3, C = 4, j = 5;
    function F(ne, de) {
    }
    var O = typeof performance == "object" && typeof performance.now == "function";
    if (O) {
      var M = performance;
      o.unstable_now = function() {
        return M.now();
      };
    } else {
      var k = Date, V = k.now();
      o.unstable_now = function() {
        return k.now() - V;
      };
    }
    var R = 1073741823, P = -1, I = 250, X = 5e3, De = 1e4, ke = R, he = [], Le = [], nt = 1, pe = null, Ne = x, we = !1, et = !1, Ce = !1, Qe = typeof setTimeout == "function" ? setTimeout : null, kt = typeof clearTimeout == "function" ? clearTimeout : null, We = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pn(ne) {
      for (var de = f(Le); de !== null; ) {
        if (de.callback === null)
          c(Le);
        else if (de.startTime <= ne)
          c(Le), de.sortIndex = de.expirationTime, d(he, de);
        else
          return;
        de = f(Le);
      }
    }
    function Rt(ne) {
      if (Ce = !1, pn(ne), !et)
        if (f(he) !== null)
          et = !0, qn(hn);
        else {
          var de = f(Le);
          de !== null && jt(Rt, de.startTime - ne);
        }
    }
    function hn(ne, de) {
      et = !1, Ce && (Ce = !1, mr()), we = !0;
      var Ue = Ne;
      try {
        var rt;
        if (!s) return Yn(ne, de);
      } finally {
        pe = null, Ne = Ue, we = !1;
      }
    }
    function Yn(ne, de) {
      var Ue = de;
      for (pn(Ue), pe = f(he); pe !== null && !a && !(pe.expirationTime > Ue && (!ne || cr())); ) {
        var rt = pe.callback;
        if (typeof rt == "function") {
          pe.callback = null, Ne = pe.priorityLevel;
          var at = pe.expirationTime <= Ue, Vt = rt(at);
          Ue = o.unstable_now(), typeof Vt == "function" ? pe.callback = Vt : pe === f(he) && c(he), pn(Ue);
        } else
          c(he);
        pe = f(he);
      }
      if (pe !== null)
        return !0;
      var Tt = f(Le);
      return Tt !== null && jt(Rt, Tt.startTime - Ue), !1;
    }
    function Br(ne, de) {
      switch (ne) {
        case v:
        case L:
        case x:
        case C:
        case j:
          break;
        default:
          ne = x;
      }
      var Ue = Ne;
      Ne = ne;
      try {
        return de();
      } finally {
        Ne = Ue;
      }
    }
    function Sr(ne) {
      var de;
      switch (Ne) {
        case v:
        case L:
        case x:
          de = x;
          break;
        default:
          de = Ne;
          break;
      }
      var Ue = Ne;
      Ne = de;
      try {
        return ne();
      } finally {
        Ne = Ue;
      }
    }
    function Nr(ne) {
      var de = Ne;
      return function() {
        var Ue = Ne;
        Ne = de;
        try {
          return ne.apply(this, arguments);
        } finally {
          Ne = Ue;
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
      var Tt;
      switch (ne) {
        case v:
          Tt = P;
          break;
        case L:
          Tt = I;
          break;
        case j:
          Tt = ke;
          break;
        case C:
          Tt = De;
          break;
        case x:
        default:
          Tt = X;
          break;
      }
      var Un = at + Tt, ut = {
        id: nt++,
        callback: de,
        priorityLevel: ne,
        startTime: at,
        expirationTime: Un,
        sortIndex: -1
      };
      return at > rt ? (ut.sortIndex = at, d(Le, ut), f(he) === null && ut === f(Le) && (Ce ? mr() : Ce = !0, jt(Rt, at - rt))) : (ut.sortIndex = Un, d(he, ut), !et && !we && (et = !0, qn(hn))), ut;
    }
    function tn() {
    }
    function Mn() {
      !et && !we && (et = !0, qn(hn));
    }
    function Kn() {
      return f(he);
    }
    function Wn(ne) {
      ne.callback = null;
    }
    function Ot() {
      return Ne;
    }
    var vn = !1, Wt = null, Pt = -1, Ut = l, Gn = -1;
    function cr() {
      var ne = o.unstable_now() - Gn;
      return !(ne < Ut);
    }
    function Pn() {
    }
    function wr(ne) {
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
          Ue ? Rn() : (vn = !1, Wt = null);
        }
      } else
        vn = !1;
    }, Rn;
    if (typeof We == "function")
      Rn = function() {
        We(fr);
      };
    else if (typeof MessageChannel < "u") {
      var dr = new MessageChannel(), gn = dr.port2;
      dr.port1.onmessage = fr, Rn = function() {
        gn.postMessage(null);
      };
    } else
      Rn = function() {
        Qe(fr, 0);
      };
    function qn(ne) {
      Wt = ne, vn || (vn = !0, Rn());
    }
    function jt(ne, de) {
      Pt = Qe(function() {
        ne(o.unstable_now());
      }, de);
    }
    function mr() {
      kt(Pt), Pt = -1;
    }
    var ua = Pn, ca = null;
    o.unstable_IdlePriority = j, o.unstable_ImmediatePriority = v, o.unstable_LowPriority = C, o.unstable_NormalPriority = x, o.unstable_Profiling = ca, o.unstable_UserBlockingPriority = L, o.unstable_cancelCallback = Wn, o.unstable_continueExecution = Mn, o.unstable_forceFrameRate = wr, o.unstable_getCurrentPriorityLevel = Ot, o.unstable_getFirstCallbackNode = Kn, o.unstable_next = Sr, o.unstable_pauseExecution = tn, o.unstable_requestPaint = ua, o.unstable_runWithPriority = Br, o.unstable_scheduleCallback = ur, o.unstable_shouldYield = cr, o.unstable_wrapCallback = Nr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(l3);
s3.exports = l3;
var TN = s3.exports;
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
  var o = U, a = TN, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
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
  var h = 0, p = 1, v = 2, L = 3, x = 4, C = 5, j = 6, F = 7, O = 8, M = 9, k = 10, V = 11, R = 12, P = 13, I = 14, X = 15, De = 16, ke = 17, he = 18, Le = 19, nt = 21, pe = 22, Ne = 23, we = 24, et = 25, Ce = !0, Qe = !1, kt = !1, We = !1, pn = !1, Rt = !0, hn = !1, Yn = !0, Br = !0, Sr = !0, Nr = !0, ur = /* @__PURE__ */ new Set(), tn = {}, Mn = {};
  function Kn(e, t) {
    Wn(e, t), Wn(e + "Capture", t);
  }
  function Wn(e, t) {
    tn[e] && c("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tn[e] = t;
    {
      var n = e.toLowerCase();
      Mn[n] = e, e === "onDoubleClick" && (Mn.ondblclick = e);
    }
    for (var r = 0; r < t.length; r++)
      ur.add(t[r]);
  }
  var Ot = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vn = Object.prototype.hasOwnProperty;
  function Wt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Pt(e) {
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
    if (Pt(e))
      return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function cr(e) {
    if (Pt(e))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  function Pn(e, t) {
    if (Pt(e))
      return c("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function wr(e, t) {
    if (Pt(e))
      return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wt(e)), Ut(e);
  }
  function fr(e) {
    if (Pt(e))
      return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  function Rn(e) {
    if (Pt(e))
      return c("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Wt(e)), Ut(e);
  }
  var dr = 0, gn = 1, qn = 2, jt = 3, mr = 4, ua = 5, ca = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + ne + "][" + de + "]*$"), rt = {}, at = {};
  function Vt(e) {
    return vn.call(at, e) ? !0 : vn.call(rt, e) ? !1 : Ue.test(e) ? (at[e] = !0, !0) : (rt[e] = !0, c("Invalid attribute name: `%s`", e), !1);
  }
  function Tt(e, t, n) {
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
        case jt:
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
    this.acceptsBooleans = t === qn || t === jt || t === mr, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
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
      jt,
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
      jt,
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
  var Cr = /[\-\:]([a-z])/g, Ti = function(e) {
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
    var t = e.replace(Cr, Ti);
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
    var t = e.replace(Cr, Ti);
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
    var t = e.replace(Cr, Ti);
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
  var Rs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Di = !1;
  function ki(e) {
    !Di && Rs.test(e) && (Di = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function fa(e, t, n, r) {
    if (r.mustUseProperty) {
      var i = r.propertyName;
      return e[i];
    } else {
      Gn(n, t), r.sanitizeURL && ki("" + n);
      var u = r.attributeName, m = null;
      if (r.type === mr) {
        if (e.hasAttribute(u)) {
          var g = e.getAttribute(u);
          return g === "" ? !0 : ut(t, n, r, !1) ? g : g === "" + n ? n : g;
        }
      } else if (e.hasAttribute(u)) {
        if (ut(t, n, r, !1))
          return e.getAttribute(u);
        if (r.type === jt)
          return n;
        m = e.getAttribute(u);
      }
      return ut(t, n, r, !1) ? m === null ? n : m : m === "" + n ? n : m;
    }
  }
  function Ja(e, t, n, r) {
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
    if (!Tt(t, i, r)) {
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
          var b = i.type;
          e[g] = b === jt ? !1 : "";
        } else
          e[g] = n;
        return;
      }
      var w = i.attributeName, E = i.attributeNamespace;
      if (n === null)
        e.removeAttribute(w);
      else {
        var A = i.type, _;
        A === jt || A === mr && n === !0 ? _ = "" : (Gn(n, w), _ = "" + n, i.sanitizeURL && ki(_.toString())), E ? e.setAttributeNS(E, w, _) : e.setAttribute(w, _);
      }
    }
  }
  var Yr = Symbol.for("react.element"), Er = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), $e = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Lt = Symbol.for("react.scope"), yn = Symbol.for("react.debug_trace_mode"), Rr = Symbol.for("react.offscreen"), jr = Symbol.for("react.legacy_hidden"), Gt = Symbol.for("react.cache"), Oi = Symbol.for("react.tracing_marker"), go = Symbol.iterator, js = "@@iterator";
  function ma(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = go && e[go] || e[js];
    return typeof t == "function" ? t : null;
  }
  var ze = Object.assign, _i = 0, Ba, Ts, Ds, ks, Os, _s, As;
  function Ms() {
  }
  Ms.__reactDisabledLog = !0;
  function zu() {
    {
      if (_i === 0) {
        Ba = console.log, Ts = console.info, Ds = console.warn, ks = console.error, Os = console.group, _s = console.groupCollapsed, As = console.groupEnd;
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
            value: Ts
          }),
          warn: ze({}, e, {
            value: Ds
          }),
          error: ze({}, e, {
            value: ks
          }),
          group: ze({}, e, {
            value: Os
          }),
          groupCollapsed: ze({}, e, {
            value: _s
          }),
          groupEnd: ze({}, e, {
            value: As
          })
        });
      }
      _i < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Ps = s.ReactCurrentDispatcher, Ai;
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
  var Ia = !1, Ya;
  {
    var yo = typeof WeakMap == "function" ? WeakMap : Map;
    Ya = new yo();
  }
  function Us(e, t) {
    if (!e || Ia)
      return "";
    {
      var n = Ya.get(e);
      if (n !== void 0)
        return n;
    }
    var r;
    Ia = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = Ps.current, Ps.current = null, zu();
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
          } catch (B) {
            r = B;
          }
          Reflect.construct(e, [], m);
        } else {
          try {
            m.call();
          } catch (B) {
            r = B;
          }
          e.call(m.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (B) {
          r = B;
        }
        e();
      }
    } catch (B) {
      if (B && r && typeof B.stack == "string") {
        for (var g = B.stack.split(`
`), b = r.stack.split(`
`), w = g.length - 1, E = b.length - 1; w >= 1 && E >= 0 && g[w] !== b[E]; )
          E--;
        for (; w >= 1 && E >= 0; w--, E--)
          if (g[w] !== b[E]) {
            if (w !== 1 || E !== 1)
              do
                if (w--, E--, E < 0 || g[w] !== b[E]) {
                  var A = `
` + g[w].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Ya.set(e, A), A;
                }
              while (w >= 1 && E >= 0);
            break;
          }
      }
    } finally {
      Ia = !1, Ps.current = u, Rd(), Error.prepareStackTrace = i;
    }
    var _ = e ? e.displayName || e.name : "", H = _ ? pr(_) : "";
    return typeof e == "function" && Ya.set(e, H), H;
  }
  function $u(e, t, n) {
    return Us(e, !0);
  }
  function Vs(e, t, n) {
    return Us(e, !1);
  }
  function jd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ka(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Us(e, jd(e));
    if (typeof e == "string")
      return pr(e);
    switch (e) {
      case Pe:
        return pr("Suspense");
      case Ae:
        return pr("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return Vs(e.render);
        case bt:
          return Ka(e.type, t, n);
        case Ve: {
          var r = e, i = r._payload, u = r._init;
          try {
            return Ka(u(i), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function Hu(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case C:
        return pr(e.type);
      case De:
        return pr("Lazy");
      case P:
        return pr("Suspense");
      case Le:
        return pr("SuspenseList");
      case h:
      case v:
      case X:
        return Vs(e.type);
      case V:
        return Vs(e.type.render);
      case p:
        return $u(e.type);
      default:
        return "";
    }
  }
  function Fs(e) {
    try {
      var t = "", n = e;
      do
        t += Hu(n), n = n.return;
      while (n);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  function Lo(e, t, n) {
    var r = e.displayName;
    if (r)
      return r;
    var i = t.displayName || t.name || "";
    return i !== "" ? n + "(" + i + ")" : n;
  }
  function Ju(e) {
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
      case D:
        return "Fragment";
      case Er:
        return "Portal";
      case re:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          var t = e;
          return Ju(t) + ".Consumer";
        case ge:
          var n = e;
          return Ju(n._context) + ".Provider";
        case Se:
          return Lo(e, e.render, "ForwardRef");
        case bt:
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
  function zs(e, t, n) {
    var r = t.displayName || t.name || "";
    return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
  }
  function $s(e) {
    return e.displayName || "Context";
  }
  function _e(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case we:
        return "Cache";
      case M:
        var r = n;
        return $s(r) + ".Consumer";
      case k:
        var i = n;
        return $s(i._context) + ".Provider";
      case he:
        return "DehydratedFragment";
      case V:
        return zs(n, n.render, "ForwardRef");
      case F:
        return "Fragment";
      case C:
        return n;
      case x:
        return "Portal";
      case L:
        return "Root";
      case j:
        return "Text";
      case De:
        return Ke(n);
      case O:
        return n === Q ? "StrictMode" : "Mode";
      case pe:
        return "Offscreen";
      case R:
        return "Profiler";
      case nt:
        return "Scope";
      case P:
        return "Suspense";
      case Le:
        return "SuspenseList";
      case et:
        return "TracingMarker";
      case p:
      case h:
      case ke:
      case v:
      case I:
      case X:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Bu = s.ReactDebugCurrentFrame, Ln = null, Mi = !1;
  function Wa() {
    {
      if (Ln === null)
        return null;
      var e = Ln._debugOwner;
      if (e !== null && typeof e < "u")
        return _e(e);
    }
    return null;
  }
  function Iu() {
    return Ln === null ? "" : Fs(Ln);
  }
  function qt() {
    Bu.getCurrentStack = null, Ln = null, Mi = !1;
  }
  function xt(e) {
    Bu.getCurrentStack = e === null ? null : Iu, Ln = e, Mi = !1;
  }
  function Yu() {
    return Ln;
  }
  function Xn(e) {
    Mi = e;
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
        return Rn(e), e;
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
  function bo(e, t) {
    Td[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Pi(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ku(e) {
    return e._valueTracker;
  }
  function Ga(e) {
    e._valueTracker = null;
  }
  function Wu(e) {
    var t = "";
    return e && (Pi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Gu(e) {
    var t = Pi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    Rn(e[t]);
    var r = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var i = n.get, u = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(g) {
          Rn(g), r = "" + g, u.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var m = {
        getValue: function() {
          return r;
        },
        setValue: function(g) {
          Rn(g), r = "" + g;
        },
        stopTracking: function() {
          Ga(e), delete e[t];
        }
      };
      return m;
    }
  }
  function pa(e) {
    Ku(e) || (e._valueTracker = Gu(e));
  }
  function xo(e) {
    if (!e)
      return !1;
    var t = Ku(e);
    if (!t)
      return !0;
    var n = t.getValue(), r = Wu(e);
    return r !== n ? (t.setValue(r), !0) : !1;
  }
  function qa(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var So = !1, qu = !1, Qu = !1, Xu = !1;
  function Zu(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function S(e, t) {
    var n = e, r = t.checked, i = ze({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? n._wrapperState.initialChecked
    });
    return i;
  }
  function T(e, t) {
    bo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !qu && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wa() || "A component", t.type), qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !So && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wa() || "A component", t.type), So = !0);
    var n = e, r = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Kr(t.value != null ? t.value : r),
      controlled: Zu(t)
    };
  }
  function J(e, t) {
    var n = e, r = t.checked;
    r != null && da(n, "checked", r, !1);
  }
  function Y(e, t) {
    var n = e;
    {
      var r = Zu(t);
      !n._wrapperState.controlled && r && !Xu && (c("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0), n._wrapperState.controlled && !r && !Qu && (c("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qu = !0);
    }
    J(e, t);
    var i = Kr(t.value), u = t.type;
    if (i != null)
      u === "number" ? (i === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != i) && (n.value = Vn(i)) : n.value !== Vn(i) && (n.value = Vn(i));
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ee(n, t.type, i) : t.hasOwnProperty("defaultValue") && Ee(n, t.type, Kr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
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
  function be(e, t) {
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
          var g = Fc(m);
          if (!g)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          xo(m), Y(m, g);
        }
      }
    }
  }
  function Ee(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || qa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = Vn(e._wrapperState.initialValue) : e.defaultValue !== Vn(n) && (e.defaultValue = Vn(n)));
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
  var wt = Array.isArray;
  function Xe(e) {
    return wt(e);
  }
  var Qa;
  Qa = !1;
  function No() {
    var e = Wa();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Hs = ["value", "defaultValue"];
  function Dd(e) {
    {
      bo("select", e);
      for (var t = 0; t < Hs.length; t++) {
        var n = Hs[t];
        if (e[n] != null) {
          var r = Xe(e[n]);
          e.multiple && !r ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, No()) : !e.multiple && r && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, No());
        }
      }
    }
  }
  function ha(e, t, n, r) {
    var i = e.options;
    if (t) {
      for (var u = n, m = {}, g = 0; g < u.length; g++)
        m["$" + u[g]] = !0;
      for (var b = 0; b < i.length; b++) {
        var w = m.hasOwnProperty("$" + i[b].value);
        i[b].selected !== w && (i[b].selected = w), w && r && (i[b].defaultSelected = !0);
      }
    } else {
      for (var E = Vn(Kr(n)), A = null, _ = 0; _ < i.length; _++) {
        if (i[_].value === E) {
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
  function Bs(e, t) {
    var n = e;
    Dd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Qa && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qa = !0);
  }
  function kd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var r = t.value;
    r != null ? ha(n, !!t.multiple, r, !1) : t.defaultValue != null && ha(n, !!t.multiple, t.defaultValue, !0);
  }
  function u4(e, t) {
    var n = e, r = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var i = t.value;
    i != null ? ha(n, !!t.multiple, i, !1) : r !== !!t.multiple && (t.defaultValue != null ? ha(n, !!t.multiple, t.defaultValue, !0) : ha(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function c4(e, t) {
    var n = e, r = t.value;
    r != null && ha(n, !!t.multiple, r, !1);
  }
  var l1 = !1;
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
  function u1(e, t) {
    var n = e;
    bo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !l1 && (c("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wa() || "A component"), l1 = !0);
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
  function c1(e, t) {
    var n = e, r = Kr(t.value), i = Kr(t.defaultValue);
    if (r != null) {
      var u = Vn(r);
      u !== n.value && (n.value = u), t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u);
    }
    i != null && (n.defaultValue = Vn(i));
  }
  function f1(e, t) {
    var n = e, r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function f4(e, t) {
    c1(e, t);
  }
  var va = "http://www.w3.org/1999/xhtml", d4 = "http://www.w3.org/1998/Math/MathML", _d = "http://www.w3.org/2000/svg";
  function Ad(e) {
    switch (e) {
      case "svg":
        return _d;
      case "math":
        return d4;
      default:
        return va;
    }
  }
  function Md(e, t) {
    return e == null || e === va ? Ad(t) : e === _d && t === "foreignObject" ? va : e;
  }
  var m4 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }, ec, d1 = m4(function(e, t) {
    if (e.namespaceURI === _d && !("innerHTML" in e)) {
      ec = ec || document.createElement("div"), ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = ec.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Fn = 1, ga = 3, _t = 8, ya = 9, Pd = 11, tc = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === ga) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, p4 = {
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
  }, Is = {
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
  function h4(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var v4 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Is).forEach(function(e) {
    v4.forEach(function(t) {
      Is[h4(t, e)] = Is[e];
    });
  });
  function Ud(e, t, n) {
    var r = t == null || typeof t == "boolean" || t === "";
    return r ? "" : !n && typeof t == "number" && t !== 0 && !(Is.hasOwnProperty(e) && Is[e]) ? t + "px" : (wr(t, e), ("" + t).trim());
  }
  var g4 = /([A-Z])/g, y4 = /^ms-/;
  function L4(e) {
    return e.replace(g4, "-$1").toLowerCase().replace(y4, "-ms-");
  }
  var m1 = function() {
  };
  {
    var b4 = /^(?:webkit|moz|o)[A-Z]/, x4 = /^-ms-/, S4 = /-(.)/g, p1 = /;\s*$/, wo = {}, Vd = {}, h1 = !1, v1 = !1, N4 = function(e) {
      return e.replace(S4, function(t, n) {
        return n.toUpperCase();
      });
    }, w4 = function(e) {
      wo.hasOwnProperty(e) && wo[e] || (wo[e] = !0, c(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        N4(e.replace(x4, "ms-"))
      ));
    }, C4 = function(e) {
      wo.hasOwnProperty(e) && wo[e] || (wo[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, E4 = function(e, t) {
      Vd.hasOwnProperty(t) && Vd[t] || (Vd[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(p1, "")));
    }, R4 = function(e, t) {
      h1 || (h1 = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
    }, j4 = function(e, t) {
      v1 || (v1 = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    m1 = function(e, t) {
      e.indexOf("-") > -1 ? w4(e) : b4.test(e) ? C4(e) : p1.test(t) && E4(e, t), typeof t == "number" && (isNaN(t) ? R4(e, t) : isFinite(t) || j4(e, t));
    };
  }
  var T4 = m1;
  function D4(e) {
    {
      var t = "", n = "";
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var i = e[r];
          if (i != null) {
            var u = r.indexOf("--") === 0;
            t += n + (u ? r : L4(r)) + ":", t += Ud(r, i, u), n = ";";
          }
        }
      return t || null;
    }
  }
  function g1(e, t) {
    var n = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0;
        i || T4(r, t[r]);
        var u = Ud(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? n.setProperty(r, u) : n[r] = u;
      }
  }
  function k4(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function y1(e) {
    var t = {};
    for (var n in e)
      for (var r = p4[n] || [n], i = 0; i < r.length; i++)
        t[r[i]] = n;
    return t;
  }
  function O4(e, t) {
    {
      if (!t)
        return;
      var n = y1(e), r = y1(t), i = {};
      for (var u in n) {
        var m = n[u], g = r[u];
        if (g && m !== g) {
          var b = m + "," + g;
          if (i[b])
            continue;
          i[b] = !0, c("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", k4(e[m]) ? "Removing" : "Updating", m, g);
        }
      }
    }
  }
  var _4 = {
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
  }, A4 = ze({
    menuitem: !0
  }, _4), M4 = "__html";
  function Fd(e, t) {
    if (t) {
      if (A4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(M4 in t.dangerouslySetInnerHTML))
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
  var nc = {
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
  }, L1 = {
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
  }, Co = {}, P4 = new RegExp("^(aria)-[" + de + "]*$"), U4 = new RegExp("^(aria)[A-Z][" + de + "]*$");
  function V4(e, t) {
    {
      if (vn.call(Co, t) && Co[t])
        return !0;
      if (U4.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), r = L1.hasOwnProperty(n) ? n : null;
        if (r == null)
          return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Co[t] = !0, !0;
        if (t !== r)
          return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), Co[t] = !0, !0;
      }
      if (P4.test(t)) {
        var i = t.toLowerCase(), u = L1.hasOwnProperty(i) ? i : null;
        if (u == null)
          return Co[t] = !0, !1;
        if (t !== u)
          return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), Co[t] = !0, !0;
      }
    }
    return !0;
  }
  function F4(e, t) {
    {
      var n = [];
      for (var r in t) {
        var i = V4(e, r);
        i || n.push(r);
      }
      var u = n.map(function(m) {
        return "`" + m + "`";
      }).join(", ");
      n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function z4(e, t) {
    Ui(e, t) || F4(e, t);
  }
  var b1 = !1;
  function $4(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !b1 && (b1 = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var x1 = function() {
  };
  {
    var jn = {}, S1 = /^on./, H4 = /^on[^A-Z]/, J4 = new RegExp("^(aria)-[" + de + "]*$"), B4 = new RegExp("^(aria)[A-Z][" + de + "]*$");
    x1 = function(e, t, n, r) {
      if (vn.call(jn, t) && jn[t])
        return !0;
      var i = t.toLowerCase();
      if (i === "onfocusin" || i === "onfocusout")
        return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jn[t] = !0, !0;
      if (r != null) {
        var u = r.registrationNameDependencies, m = r.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var g = m.hasOwnProperty(i) ? m[i] : null;
        if (g != null)
          return c("Invalid event handler property `%s`. Did you mean `%s`?", t, g), jn[t] = !0, !0;
        if (S1.test(t))
          return c("Unknown event handler property `%s`. It will be ignored.", t), jn[t] = !0, !0;
      } else if (S1.test(t))
        return H4.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jn[t] = !0, !0;
      if (J4.test(t) || B4.test(t))
        return !0;
      if (i === "innerhtml")
        return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jn[t] = !0, !0;
      if (i === "aria")
        return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jn[t] = !0, !0;
      if (i === "is" && n !== null && n !== void 0 && typeof n != "string")
        return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), jn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jn[t] = !0, !0;
      var b = Qn(t), w = b !== null && b.type === dr;
      if (nc.hasOwnProperty(i)) {
        var E = nc[i];
        if (E !== t)
          return c("Invalid DOM property `%s`. Did you mean `%s`?", t, E), jn[t] = !0, !0;
      } else if (!w && t !== i)
        return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), jn[t] = !0, !0;
      return typeof n == "boolean" && Un(t, n, b, !1) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), jn[t] = !0, !0) : w ? !0 : Un(t, n, b, !1) ? (jn[t] = !0, !1) : ((n === "false" || n === "true") && b !== null && b.type === jt && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), jn[t] = !0), !0);
    };
  }
  var I4 = function(e, t, n) {
    {
      var r = [];
      for (var i in t) {
        var u = x1(e, i, t[i], n);
        u || r.push(i);
      }
      var m = r.map(function(g) {
        return "`" + g + "`";
      }).join(", ");
      r.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : r.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
    }
  };
  function Y4(e, t, n) {
    Ui(e, t) || I4(e, t, n);
  }
  var N1 = 1, zd = 2, Ys = 4, K4 = N1 | zd | Ys, Ks = null;
  function W4(e) {
    Ks !== null && c("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ks = e;
  }
  function G4() {
    Ks === null && c("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ks = null;
  }
  function q4(e) {
    return e === Ks;
  }
  function $d(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ga ? t.parentNode : t;
  }
  var Hd = null, Eo = null, Ro = null;
  function w1(e) {
    var t = ii(e);
    if (t) {
      if (typeof Hd != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var r = Fc(n);
        Hd(t.stateNode, t.type, r);
      }
    }
  }
  function Q4(e) {
    Hd = e;
  }
  function C1(e) {
    Eo ? Ro ? Ro.push(e) : Ro = [e] : Eo = e;
  }
  function X4() {
    return Eo !== null || Ro !== null;
  }
  function E1() {
    if (Eo) {
      var e = Eo, t = Ro;
      if (Eo = null, Ro = null, w1(e), t)
        for (var n = 0; n < t.length; n++)
          w1(t[n]);
    }
  }
  var R1 = function(e, t) {
    return e(t);
  }, j1 = function() {
  }, Jd = !1;
  function Z4() {
    var e = X4();
    e && (j1(), E1());
  }
  function T1(e, t, n) {
    if (Jd)
      return e(t, n);
    Jd = !0;
    try {
      return R1(e, t, n);
    } finally {
      Jd = !1, Z4();
    }
  }
  function e5(e, t, n) {
    R1 = e, j1 = n;
  }
  function t5(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function n5(e, t, n) {
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
        return !!(n.disabled && t5(t));
      default:
        return !1;
    }
  }
  function Ws(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Fc(n);
    if (r === null)
      return null;
    var i = r[t];
    if (n5(t, e.type, r))
      return null;
    if (i && typeof i != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
    return i;
  }
  var Bd = !1;
  if (Ot)
    try {
      var Gs = {};
      Object.defineProperty(Gs, "passive", {
        get: function() {
          Bd = !0;
        }
      }), window.addEventListener("test", Gs, Gs), window.removeEventListener("test", Gs, Gs);
    } catch {
      Bd = !1;
    }
  function D1(e, t, n, r, i, u, m, g, b) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (E) {
      this.onError(E);
    }
  }
  var k1 = D1;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Id = document.createElement("react");
    k1 = function(t, n, r, i, u, m, g, b, w) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var E = document.createEvent("Event"), A = !1, _ = !0, H = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
      function K() {
        Id.removeEventListener(W, me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
      }
      var ae = Array.prototype.slice.call(arguments, 3);
      function me() {
        A = !0, K(), n.apply(r, ae), _ = !1;
      }
      var fe, Ie = !1, Fe = !1;
      function z($) {
        if (fe = $.error, Ie = !0, fe === null && $.colno === 0 && $.lineno === 0 && (Fe = !0), $.defaultPrevented && fe != null && typeof fe == "object")
          try {
            fe._suppressLogging = !0;
          } catch {
          }
      }
      var W = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", z), Id.addEventListener(W, me, !1), E.initEvent(W, !1, !1), Id.dispatchEvent(E), B && Object.defineProperty(window, "event", B), A && _ && (Ie ? Fe && (fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(fe)), window.removeEventListener("error", z), !A)
        return K(), D1.apply(this, arguments);
    };
  }
  var r5 = k1, jo = !1, rc = null, ac = !1, Yd = null, a5 = {
    onError: function(e) {
      jo = !0, rc = e;
    }
  };
  function Kd(e, t, n, r, i, u, m, g, b) {
    jo = !1, rc = null, r5.apply(a5, arguments);
  }
  function i5(e, t, n, r, i, u, m, g, b) {
    if (Kd.apply(this, arguments), jo) {
      var w = Wd();
      ac || (ac = !0, Yd = w);
    }
  }
  function o5() {
    if (ac) {
      var e = Yd;
      throw ac = !1, Yd = null, e;
    }
  }
  function s5() {
    return jo;
  }
  function Wd() {
    if (jo) {
      var e = rc;
      return jo = !1, rc = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function To(e) {
    return e._reactInternals;
  }
  function l5(e) {
    return e._reactInternals !== void 0;
  }
  function u5(e, t) {
    e._reactInternals = t;
  }
  var ye = (
    /*                      */
    0
  ), Do = (
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
  ), qs = (
    /*                 */
    32
  ), Gd = (
    /*                     */
    64
  ), Ze = (
    /*                   */
    128
  ), La = (
    /*            */
    256
  ), Xa = (
    /*                          */
    512
  ), Fi = (
    /*                     */
    1024
  ), Tr = (
    /*                      */
    2048
  ), ba = (
    /*                    */
    4096
  ), zi = (
    /*                   */
    8192
  ), ic = (
    /*             */
    16384
  ), c5 = Tr | Ye | Gd | Xa | Fi | ic, f5 = (
    /*               */
    32767
  ), Qs = (
    /*                   */
    32768
  ), Tn = (
    /*                */
    65536
  ), qd = (
    /* */
    131072
  ), O1 = (
    /*                       */
    1048576
  ), Qd = (
    /*                    */
    2097152
  ), $i = (
    /*                 */
    4194304
  ), Xd = (
    /*                */
    8388608
  ), xa = (
    /*               */
    16777216
  ), oc = (
    /*              */
    33554432
  ), Zd = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ye | Fi | 0
  ), em = At | Ye | Vi | qs | Xa | ba | zi, Xs = Ye | Gd | Xa | zi, ko = Tr | Vi, Sa = $i | Xd | Qd, d5 = s.ReactCurrentOwner;
  function Hi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var r = t;
      do
        t = r, (t.flags & (At | ba)) !== ye && (n = t.return), r = t.return;
      while (r);
    }
    return t.tag === L ? n : null;
  }
  function _1(e) {
    if (e.tag === P) {
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
  function A1(e) {
    return e.tag === L ? e.stateNode.containerInfo : null;
  }
  function m5(e) {
    return Hi(e) === e;
  }
  function p5(e) {
    {
      var t = d5.current;
      if (t !== null && t.tag === p) {
        var n = t, r = n.stateNode;
        r._warnedAboutRefsInRender || c("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _e(n) || "A component"), r._warnedAboutRefsInRender = !0;
      }
    }
    var i = To(e);
    return i ? Hi(i) === i : !1;
  }
  function M1(e) {
    if (Hi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function P1(e) {
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
        for (var b = u.child; b; ) {
          if (b === r)
            return M1(u), e;
          if (b === i)
            return M1(u), t;
          b = b.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (r.return !== i.return)
        r = u, i = m;
      else {
        for (var w = !1, E = u.child; E; ) {
          if (E === r) {
            w = !0, r = u, i = m;
            break;
          }
          if (E === i) {
            w = !0, i = u, r = m;
            break;
          }
          E = E.sibling;
        }
        if (!w) {
          for (E = m.child; E; ) {
            if (E === r) {
              w = !0, r = m, i = u;
              break;
            }
            if (E === i) {
              w = !0, i = m, r = u;
              break;
            }
            E = E.sibling;
          }
          if (!w)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (r.alternate !== i)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (r.tag !== L)
      throw new Error("Unable to find node on an unmounted component.");
    return r.stateNode.current === r ? e : t;
  }
  function U1(e) {
    var t = P1(e);
    return t !== null ? V1(t) : null;
  }
  function V1(e) {
    if (e.tag === C || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = V1(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function h5(e) {
    var t = P1(e);
    return t !== null ? F1(t) : null;
  }
  function F1(e) {
    if (e.tag === C || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== x) {
        var n = F1(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var z1 = a.unstable_scheduleCallback, v5 = a.unstable_cancelCallback, g5 = a.unstable_shouldYield, y5 = a.unstable_requestPaint, Qt = a.unstable_now, L5 = a.unstable_getCurrentPriorityLevel, sc = a.unstable_ImmediatePriority, tm = a.unstable_UserBlockingPriority, Ji = a.unstable_NormalPriority, b5 = a.unstable_LowPriority, nm = a.unstable_IdlePriority, x5 = a.unstable_yieldValue, S5 = a.unstable_setDisableYieldValue, Oo = null, bn = null, oe = null, Wr = !1, Dr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function N5(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return c("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Br && (e = ze({}, e, {
        getLaneLabelMap: T5,
        injectProfilingHooks: j5
      })), Oo = t.inject(e), bn = t;
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function w5(e, t) {
    if (bn && typeof bn.onScheduleFiberRoot == "function")
      try {
        bn.onScheduleFiberRoot(Oo, e, t);
      } catch (n) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", n));
      }
  }
  function C5(e, t) {
    if (bn && typeof bn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Ze) === Ze;
        if (Sr) {
          var r;
          switch (t) {
            case tr:
              r = sc;
              break;
            case wa:
              r = tm;
              break;
            case Ca:
              r = Ji;
              break;
            case pc:
              r = nm;
              break;
            default:
              r = Ji;
              break;
          }
          bn.onCommitFiberRoot(Oo, e, r, n);
        }
      } catch (i) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", i));
      }
  }
  function E5(e) {
    if (bn && typeof bn.onPostCommitFiberRoot == "function")
      try {
        bn.onPostCommitFiberRoot(Oo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function R5(e) {
    if (bn && typeof bn.onCommitFiberUnmount == "function")
      try {
        bn.onCommitFiberUnmount(Oo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Xt(e) {
    if (typeof x5 == "function" && (S5(e), d(e)), bn && typeof bn.setStrictMode == "function")
      try {
        bn.setStrictMode(Oo, e);
      } catch (t) {
        Wr || (Wr = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function j5(e) {
    oe = e;
  }
  function T5() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < am; n++) {
        var r = G5(t);
        e.set(t, r), t *= 2;
      }
      return e;
    }
  }
  function D5(e) {
    oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
  }
  function $1() {
    oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
  }
  function Zs(e) {
    oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
  }
  function _o() {
    oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
  }
  function k5(e) {
    oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
  }
  function O5() {
    oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
  }
  function _5(e) {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
  }
  function A5() {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
  }
  function M5(e) {
    oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
  }
  function P5() {
    oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
  }
  function H1(e) {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
  }
  function J1() {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
  }
  function U5(e, t, n) {
    oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, n);
  }
  function V5(e, t, n) {
    oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, n);
  }
  function F5(e) {
    oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
  }
  function z5() {
    oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
  }
  function $5(e) {
    oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
  }
  function H5() {
    oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
  }
  function B1(e) {
    oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
  }
  function J5() {
    oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
  }
  function I1() {
    oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
  }
  function B5(e) {
    oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
  }
  function I5(e, t) {
    oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
  }
  function rm(e, t) {
    oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
  }
  var ve = (
    /*                         */
    0
  ), Je = (
    /*                 */
    1
  ), ot = (
    /*                    */
    2
  ), Ct = (
    /*               */
    8
  ), Gr = (
    /*              */
    16
  ), Y1 = Math.clz32 ? Math.clz32 : W5, Y5 = Math.log, K5 = Math.LN2;
  function W5(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (Y5(t) / K5 | 0) | 0;
  }
  var am = 31, q = (
    /*                        */
    0
  ), Zt = (
    /*                          */
    0
  ), Re = (
    /*                        */
    1
  ), Ao = (
    /*    */
    2
  ), Na = (
    /*             */
    4
  ), Bi = (
    /*            */
    8
  ), qr = (
    /*                     */
    16
  ), el = (
    /*                */
    32
  ), Mo = (
    /*                       */
    4194240
  ), tl = (
    /*                        */
    64
  ), im = (
    /*                        */
    128
  ), om = (
    /*                        */
    256
  ), sm = (
    /*                        */
    512
  ), lm = (
    /*                        */
    1024
  ), um = (
    /*                        */
    2048
  ), cm = (
    /*                        */
    4096
  ), fm = (
    /*                        */
    8192
  ), dm = (
    /*                        */
    16384
  ), mm = (
    /*                       */
    32768
  ), pm = (
    /*                       */
    65536
  ), hm = (
    /*                       */
    131072
  ), vm = (
    /*                       */
    262144
  ), gm = (
    /*                       */
    524288
  ), ym = (
    /*                       */
    1048576
  ), Lm = (
    /*                       */
    2097152
  ), lc = (
    /*                            */
    130023424
  ), Po = (
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
  ), K1 = Po, nl = (
    /*          */
    134217728
  ), W1 = (
    /*                          */
    268435455
  ), rl = (
    /*               */
    268435456
  ), Ii = (
    /*                        */
    536870912
  ), Zn = (
    /*                   */
    1073741824
  );
  function G5(e) {
    {
      if (e & Re)
        return "Sync";
      if (e & Ao)
        return "InputContinuousHydration";
      if (e & Na)
        return "InputContinuous";
      if (e & Bi)
        return "DefaultHydration";
      if (e & qr)
        return "Default";
      if (e & el)
        return "TransitionHydration";
      if (e & Mo)
        return "Transition";
      if (e & lc)
        return "Retry";
      if (e & nl)
        return "SelectiveHydration";
      if (e & rl)
        return "IdleHydration";
      if (e & Ii)
        return "Idle";
      if (e & Zn)
        return "Offscreen";
    }
  }
  var pt = -1, uc = tl, cc = Po;
  function al(e) {
    switch (Yi(e)) {
      case Re:
        return Re;
      case Ao:
        return Ao;
      case Na:
        return Na;
      case Bi:
        return Bi;
      case qr:
        return qr;
      case el:
        return el;
      case tl:
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
      case Lm:
        return e & Mo;
      case Po:
      case bm:
      case xm:
      case Sm:
      case Nm:
        return e & lc;
      case nl:
        return nl;
      case rl:
        return rl;
      case Ii:
        return Ii;
      case Zn:
        return Zn;
      default:
        return c("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function fc(e, t) {
    var n = e.pendingLanes;
    if (n === q)
      return q;
    var r = q, i = e.suspendedLanes, u = e.pingedLanes, m = n & W1;
    if (m !== q) {
      var g = m & ~i;
      if (g !== q)
        r = al(g);
      else {
        var b = m & u;
        b !== q && (r = al(b));
      }
    } else {
      var w = n & ~i;
      w !== q ? r = al(w) : u !== q && (r = al(u));
    }
    if (r === q)
      return q;
    if (t !== q && t !== r && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & i) === q) {
      var E = Yi(r), A = Yi(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        E >= A || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        E === qr && (A & Mo) !== q
      )
        return t;
    }
    (r & Na) !== q && (r |= n & qr);
    var _ = e.entangledLanes;
    if (_ !== q)
      for (var H = e.entanglements, B = r & _; B > 0; ) {
        var K = Ki(B), ae = 1 << K;
        r |= H[K], B &= ~ae;
      }
    return r;
  }
  function q5(e, t) {
    for (var n = e.eventTimes, r = pt; t > 0; ) {
      var i = Ki(t), u = 1 << i, m = n[i];
      m > r && (r = m), t &= ~u;
    }
    return r;
  }
  function Q5(e, t) {
    switch (e) {
      case Re:
      case Ao:
      case Na:
        return t + 250;
      case Bi:
      case qr:
      case el:
      case tl:
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
      case Lm:
        return t + 5e3;
      case Po:
      case bm:
      case xm:
      case Sm:
      case Nm:
        return pt;
      case nl:
      case rl:
      case Ii:
      case Zn:
        return pt;
      default:
        return c("Should have found matching lanes. This is a bug in React."), pt;
    }
  }
  function X5(e, t) {
    for (var n = e.pendingLanes, r = e.suspendedLanes, i = e.pingedLanes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Ki(m), b = 1 << g, w = u[g];
      w === pt ? ((b & r) === q || (b & i) !== q) && (u[g] = Q5(b, t)) : w <= t && (e.expiredLanes |= b), m &= ~b;
    }
  }
  function Z5(e) {
    return al(e.pendingLanes);
  }
  function wm(e) {
    var t = e.pendingLanes & ~Zn;
    return t !== q ? t : t & Zn ? Zn : q;
  }
  function e8(e) {
    return (e & Re) !== q;
  }
  function Cm(e) {
    return (e & W1) !== q;
  }
  function G1(e) {
    return (e & lc) === e;
  }
  function t8(e) {
    var t = Re | Na | qr;
    return (e & t) === q;
  }
  function n8(e) {
    return (e & Mo) === e;
  }
  function dc(e, t) {
    var n = Ao | Na | Bi | qr;
    return (t & n) !== q;
  }
  function r8(e, t) {
    return (t & e.expiredLanes) !== q;
  }
  function q1(e) {
    return (e & Mo) !== q;
  }
  function Q1() {
    var e = uc;
    return uc <<= 1, (uc & Mo) === q && (uc = tl), e;
  }
  function a8() {
    var e = cc;
    return cc <<= 1, (cc & lc) === q && (cc = Po), e;
  }
  function Yi(e) {
    return e & -e;
  }
  function il(e) {
    return Yi(e);
  }
  function Ki(e) {
    return 31 - Y1(e);
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
  function Me(e, t) {
    return e | t;
  }
  function mc(e, t) {
    return e & ~t;
  }
  function X1(e, t) {
    return e & t;
  }
  function UT(e) {
    return e;
  }
  function i8(e, t) {
    return e !== Zt && e < t ? e : t;
  }
  function Rm(e) {
    for (var t = [], n = 0; n < am; n++)
      t.push(e);
    return t;
  }
  function ol(e, t, n) {
    e.pendingLanes |= t, t !== Ii && (e.suspendedLanes = q, e.pingedLanes = q);
    var r = e.eventTimes, i = Em(t);
    r[i] = n;
  }
  function o8(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var i = Ki(r), u = 1 << i;
      n[i] = pt, r &= ~u;
    }
  }
  function Z1(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function s8(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var r = e.entanglements, i = e.eventTimes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Ki(m), b = 1 << g;
      r[g] = q, i[g] = pt, u[g] = pt, m &= ~b;
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
  function l8(e, t) {
    var n = Yi(t), r;
    switch (n) {
      case Na:
        r = Ao;
        break;
      case qr:
        r = Bi;
        break;
      case tl:
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
      case Lm:
      case Po:
      case bm:
      case xm:
      case Sm:
      case Nm:
        r = el;
        break;
      case Ii:
        r = rl;
        break;
      default:
        r = Zt;
        break;
    }
    return (r & (e.suspendedLanes | t)) !== Zt ? Zt : r;
  }
  function eg(e, t, n) {
    if (Dr)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var i = Em(n), u = 1 << i, m = r[i];
        m.add(t), n &= ~u;
      }
  }
  function tg(e, t) {
    if (Dr)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var i = Em(t), u = 1 << i, m = n[i];
        m.size > 0 && (m.forEach(function(g) {
          var b = g.alternate;
          (b === null || !r.has(b)) && r.add(g);
        }), m.clear()), t &= ~u;
      }
  }
  function ng(e, t) {
    return null;
  }
  var tr = Re, wa = Na, Ca = qr, pc = Ii, sl = Zt;
  function kr() {
    return sl;
  }
  function en(e) {
    sl = e;
  }
  function u8(e, t) {
    var n = sl;
    try {
      return sl = e, t();
    } finally {
      sl = n;
    }
  }
  function c8(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function f8(e, t) {
    return e > t ? e : t;
  }
  function Tm(e, t) {
    return e !== 0 && e < t;
  }
  function rg(e) {
    var t = Yi(e);
    return Tm(tr, t) ? Tm(wa, t) ? Cm(t) ? Ca : pc : wa : tr;
  }
  function hc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var ag;
  function d8(e) {
    ag = e;
  }
  function m8(e) {
    ag(e);
  }
  var Dm;
  function p8(e) {
    Dm = e;
  }
  var ig;
  function h8(e) {
    ig = e;
  }
  var og;
  function v8(e) {
    og = e;
  }
  var sg;
  function g8(e) {
    sg = e;
  }
  var km = !1, vc = [], Za = null, ei = null, ti = null, ll = /* @__PURE__ */ new Map(), ul = /* @__PURE__ */ new Map(), ni = [], y8 = [
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
  function L8(e) {
    return y8.indexOf(e) > -1;
  }
  function b8(e, t, n, r, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [r]
    };
  }
  function lg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        ei = null;
        break;
      case "mouseover":
      case "mouseout":
        ti = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        ll.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var r = t.pointerId;
        ul.delete(r);
        break;
      }
    }
  }
  function cl(e, t, n, r, i, u) {
    if (e === null || e.nativeEvent !== u) {
      var m = b8(t, n, r, i, u);
      if (t !== null) {
        var g = ii(t);
        g !== null && Dm(g);
      }
      return m;
    }
    e.eventSystemFlags |= r;
    var b = e.targetContainers;
    return i !== null && b.indexOf(i) === -1 && b.push(i), e;
  }
  function x8(e, t, n, r, i) {
    switch (t) {
      case "focusin": {
        var u = i;
        return Za = cl(Za, e, t, n, r, u), !0;
      }
      case "dragenter": {
        var m = i;
        return ei = cl(ei, e, t, n, r, m), !0;
      }
      case "mouseover": {
        var g = i;
        return ti = cl(ti, e, t, n, r, g), !0;
      }
      case "pointerover": {
        var b = i, w = b.pointerId;
        return ll.set(w, cl(ll.get(w) || null, e, t, n, r, b)), !0;
      }
      case "gotpointercapture": {
        var E = i, A = E.pointerId;
        return ul.set(A, cl(ul.get(A) || null, e, t, n, r, E)), !0;
      }
    }
    return !1;
  }
  function ug(e) {
    var t = qi(e.target);
    if (t !== null) {
      var n = Hi(t);
      if (n !== null) {
        var r = n.tag;
        if (r === P) {
          var i = _1(n);
          if (i !== null) {
            e.blockedOn = i, sg(e.priority, function() {
              ig(n);
            });
            return;
          }
        } else if (r === L) {
          var u = n.stateNode;
          if (hc(u)) {
            e.blockedOn = A1(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function S8(e) {
    for (var t = og(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, r = 0; r < ni.length && Tm(t, ni[r].priority); r++)
      ;
    ni.splice(r, 0, n), r === 0 && ug(n);
  }
  function gc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], r = Am(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (r === null) {
        var i = e.nativeEvent, u = new i.constructor(i.type, i);
        W4(u), i.target.dispatchEvent(u), G4();
      } else {
        var m = ii(r);
        return m !== null && Dm(m), e.blockedOn = r, !1;
      }
      t.shift();
    }
    return !0;
  }
  function cg(e, t, n) {
    gc(e) && n.delete(t);
  }
  function N8() {
    km = !1, Za !== null && gc(Za) && (Za = null), ei !== null && gc(ei) && (ei = null), ti !== null && gc(ti) && (ti = null), ll.forEach(cg), ul.forEach(cg);
  }
  function fl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, km || (km = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, N8)));
  }
  function dl(e) {
    if (vc.length > 0) {
      fl(vc[0], e);
      for (var t = 1; t < vc.length; t++) {
        var n = vc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Za !== null && fl(Za, e), ei !== null && fl(ei, e), ti !== null && fl(ti, e);
    var r = function(g) {
      return fl(g, e);
    };
    ll.forEach(r), ul.forEach(r);
    for (var i = 0; i < ni.length; i++) {
      var u = ni[i];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; ni.length > 0; ) {
      var m = ni[0];
      if (m.blockedOn !== null)
        break;
      ug(m), m.blockedOn === null && ni.shift();
    }
  }
  var Vo = s.ReactCurrentBatchConfig, Om = !0;
  function fg(e) {
    Om = !!e;
  }
  function w8() {
    return Om;
  }
  function C8(e, t, n) {
    var r = dg(t), i;
    switch (r) {
      case tr:
        i = E8;
        break;
      case wa:
        i = R8;
        break;
      case Ca:
      default:
        i = _m;
        break;
    }
    return i.bind(null, t, n, e);
  }
  function E8(e, t, n, r) {
    var i = kr(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(tr), _m(e, t, n, r);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function R8(e, t, n, r) {
    var i = kr(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(wa), _m(e, t, n, r);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function _m(e, t, n, r) {
    Om && j8(e, t, n, r);
  }
  function j8(e, t, n, r) {
    var i = Am(e, t, n, r);
    if (i === null) {
      Wm(e, t, r, yc, n), lg(e, r);
      return;
    }
    if (x8(i, e, t, n, r)) {
      r.stopPropagation();
      return;
    }
    if (lg(e, r), t & Ys && L8(e)) {
      for (; i !== null; ) {
        var u = ii(i);
        u !== null && m8(u);
        var m = Am(e, t, n, r);
        if (m === null && Wm(e, t, r, yc, n), m === i)
          break;
        i = m;
      }
      i !== null && r.stopPropagation();
      return;
    }
    Wm(e, t, r, null, n);
  }
  var yc = null;
  function Am(e, t, n, r) {
    yc = null;
    var i = $d(r), u = qi(i);
    if (u !== null) {
      var m = Hi(u);
      if (m === null)
        u = null;
      else {
        var g = m.tag;
        if (g === P) {
          var b = _1(m);
          if (b !== null)
            return b;
          u = null;
        } else if (g === L) {
          var w = m.stateNode;
          if (hc(w))
            return A1(m);
          u = null;
        } else m !== u && (u = null);
      }
    }
    return yc = u, null;
  }
  function dg(e) {
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
        return wa;
      case "message": {
        var t = L5();
        switch (t) {
          case sc:
            return tr;
          case tm:
            return wa;
          case Ji:
          case b5:
            return Ca;
          case nm:
            return pc;
          default:
            return Ca;
        }
      }
      default:
        return Ca;
    }
  }
  function T8(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function D8(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function k8(e, t, n, r) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: r
    }), n;
  }
  function O8(e, t, n, r) {
    return e.addEventListener(t, n, {
      passive: r
    }), n;
  }
  var ml = null, Mm = null, pl = null;
  function _8(e) {
    return ml = e, Mm = pg(), !0;
  }
  function A8() {
    ml = null, Mm = null, pl = null;
  }
  function mg() {
    if (pl)
      return pl;
    var e, t = Mm, n = t.length, r, i = pg(), u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var m = n - e;
    for (r = 1; r <= m && t[n - r] === i[u - r]; r++)
      ;
    var g = r > 1 ? 1 - r : void 0;
    return pl = i.slice(e, g), pl;
  }
  function pg() {
    return "value" in ml ? ml.value : ml.textContent;
  }
  function Lc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function bc() {
    return !0;
  }
  function hg() {
    return !1;
  }
  function nr(e) {
    function t(n, r, i, u, m) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var g in e)
        if (e.hasOwnProperty(g)) {
          var b = e[g];
          b ? this[g] = b(u) : this[g] = u[g];
        }
      var w = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return w ? this.isDefaultPrevented = bc : this.isDefaultPrevented = hg, this.isPropagationStopped = hg, this;
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
  }, Pm = nr(Fo), hl = ze({}, Fo, {
    view: 0,
    detail: 0
  }), M8 = nr(hl), Um, Vm, vl;
  function P8(e) {
    e !== vl && (vl && e.type === "mousemove" ? (Um = e.screenX - vl.screenX, Vm = e.screenY - vl.screenY) : (Um = 0, Vm = 0), vl = e);
  }
  var xc = ze({}, hl, {
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
    getModifierState: zm,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (P8(e), Um);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vm;
    }
  }), vg = nr(xc), U8 = ze({}, xc, {
    dataTransfer: 0
  }), V8 = nr(U8), F8 = ze({}, hl, {
    relatedTarget: 0
  }), Fm = nr(F8), z8 = ze({}, Fo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $8 = nr(z8), H8 = ze({}, Fo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), J8 = nr(H8), B8 = ze({}, Fo, {
    data: 0
  }), gg = nr(B8), I8 = gg, Y8 = {
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
  }, K8 = {
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
  function W8(e) {
    if (e.key) {
      var t = Y8[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = Lc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? K8[e.keyCode] || "Unidentified" : "";
  }
  var G8 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function q8(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var r = G8[e];
    return r ? !!n[r] : !1;
  }
  function zm(e) {
    return q8;
  }
  var Q8 = ze({}, hl, {
    key: W8,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zm,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Lc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Lc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), X8 = nr(Q8), Z8 = ze({}, xc, {
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
  }), yg = nr(Z8), e7 = ze({}, hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zm
  }), t7 = nr(e7), n7 = ze({}, Fo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), r7 = nr(n7), a7 = ze({}, xc, {
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
  }), i7 = nr(a7), o7 = [9, 13, 27, 32], Lg = 229, $m = Ot && "CompositionEvent" in window, gl = null;
  Ot && "documentMode" in document && (gl = document.documentMode);
  var s7 = Ot && "TextEvent" in window && !gl, bg = Ot && (!$m || gl && gl > 8 && gl <= 11), xg = 32, Sg = String.fromCharCode(xg);
  function l7() {
    Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var Ng = !1;
  function u7(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function c7(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function f7(e, t) {
    return e === "keydown" && t.keyCode === Lg;
  }
  function wg(e, t) {
    switch (e) {
      case "keyup":
        return o7.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== Lg;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cg(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function Eg(e) {
    return e.locale === "ko";
  }
  var zo = !1;
  function d7(e, t, n, r, i) {
    var u, m;
    if ($m ? u = c7(t) : zo ? wg(t, r) && (u = "onCompositionEnd") : f7(t, r) && (u = "onCompositionStart"), !u)
      return null;
    bg && !Eg(r) && (!zo && u === "onCompositionStart" ? zo = _8(i) : u === "onCompositionEnd" && zo && (m = mg()));
    var g = Ec(n, u);
    if (g.length > 0) {
      var b = new gg(u, t, null, r, i);
      if (e.push({
        event: b,
        listeners: g
      }), m)
        b.data = m;
      else {
        var w = Cg(r);
        w !== null && (b.data = w);
      }
    }
  }
  function m7(e, t) {
    switch (e) {
      case "compositionend":
        return Cg(t);
      case "keypress":
        var n = t.which;
        return n !== xg ? null : (Ng = !0, Sg);
      case "textInput":
        var r = t.data;
        return r === Sg && Ng ? null : r;
      default:
        return null;
    }
  }
  function p7(e, t) {
    if (zo) {
      if (e === "compositionend" || !$m && wg(e, t)) {
        var n = mg();
        return A8(), zo = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!u7(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return bg && !Eg(t) ? null : t.data;
      default:
        return null;
    }
  }
  function h7(e, t, n, r, i) {
    var u;
    if (s7 ? u = m7(t, r) : u = p7(t, r), !u)
      return null;
    var m = Ec(n, "onBeforeInput");
    if (m.length > 0) {
      var g = new I8("onBeforeInput", "beforeinput", null, r, i);
      e.push({
        event: g,
        listeners: m
      }), g.data = u;
    }
  }
  function v7(e, t, n, r, i, u, m) {
    d7(e, t, n, r, i), h7(e, t, n, r, i);
  }
  var g7 = {
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
  function Rg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!g7[e.type] : t === "textarea";
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
  function y7(e) {
    if (!Ot)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
  function L7() {
    Kn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function jg(e, t, n, r) {
    C1(r);
    var i = Ec(t, "onChange");
    if (i.length > 0) {
      var u = new Pm("onChange", "change", null, n, r);
      e.push({
        event: u,
        listeners: i
      });
    }
  }
  var yl = null, Ll = null;
  function b7(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function x7(e) {
    var t = [];
    jg(t, Ll, e, $d(e)), T1(S7, t);
  }
  function S7(e) {
    Yg(e, 0);
  }
  function Sc(e) {
    var t = Yo(e);
    if (xo(t))
      return e;
  }
  function N7(e, t) {
    if (e === "change")
      return t;
  }
  var Tg = !1;
  Ot && (Tg = y7("input") && (!document.documentMode || document.documentMode > 9));
  function w7(e, t) {
    yl = e, Ll = t, yl.attachEvent("onpropertychange", kg);
  }
  function Dg() {
    yl && (yl.detachEvent("onpropertychange", kg), yl = null, Ll = null);
  }
  function kg(e) {
    e.propertyName === "value" && Sc(Ll) && x7(e);
  }
  function C7(e, t, n) {
    e === "focusin" ? (Dg(), w7(t, n)) : e === "focusout" && Dg();
  }
  function E7(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Sc(Ll);
  }
  function R7(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function j7(e, t) {
    if (e === "click")
      return Sc(t);
  }
  function T7(e, t) {
    if (e === "input" || e === "change")
      return Sc(t);
  }
  function D7(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Ee(e, "number", e.value);
  }
  function k7(e, t, n, r, i, u, m) {
    var g = n ? Yo(n) : window, b, w;
    if (b7(g) ? b = N7 : Rg(g) ? Tg ? b = T7 : (b = E7, w = C7) : R7(g) && (b = j7), b) {
      var E = b(t, n);
      if (E) {
        jg(e, E, r, i);
        return;
      }
    }
    w && w(t, g, n), t === "focusout" && D7(g);
  }
  function O7() {
    Wn("onMouseEnter", ["mouseout", "mouseover"]), Wn("onMouseLeave", ["mouseout", "mouseover"]), Wn("onPointerEnter", ["pointerout", "pointerover"]), Wn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function _7(e, t, n, r, i, u, m) {
    var g = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
    if (g && !q4(r)) {
      var w = r.relatedTarget || r.fromElement;
      if (w && (qi(w) || Al(w)))
        return;
    }
    if (!(!b && !g)) {
      var E;
      if (i.window === i)
        E = i;
      else {
        var A = i.ownerDocument;
        A ? E = A.defaultView || A.parentWindow : E = window;
      }
      var _, H;
      if (b) {
        var B = r.relatedTarget || r.toElement;
        if (_ = n, H = B ? qi(B) : null, H !== null) {
          var K = Hi(H);
          (H !== K || H.tag !== C && H.tag !== j) && (H = null);
        }
      } else
        _ = null, H = n;
      if (_ !== H) {
        var ae = vg, me = "onMouseLeave", fe = "onMouseEnter", Ie = "mouse";
        (t === "pointerout" || t === "pointerover") && (ae = yg, me = "onPointerLeave", fe = "onPointerEnter", Ie = "pointer");
        var Fe = _ == null ? E : Yo(_), z = H == null ? E : Yo(H), W = new ae(me, Ie + "leave", _, r, i);
        W.target = Fe, W.relatedTarget = z;
        var $ = null, Z = qi(i);
        if (Z === n) {
          var le = new ae(fe, Ie + "enter", H, r, i);
          le.target = z, le.relatedTarget = Fe, $ = le;
        }
        r6(e, W, $, _, H);
      }
    }
  }
  function A7(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rr = typeof Object.is == "function" ? Object.is : A7;
  function bl(e, t) {
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
  function Og(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function M7(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function _g(e, t) {
    for (var n = Og(e), r = 0, i = 0; n; ) {
      if (n.nodeType === ga) {
        if (i = r + n.textContent.length, r <= t && i >= t)
          return {
            node: n,
            offset: t - r
          };
        r = i;
      }
      n = Og(M7(n));
    }
  }
  function P7(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
    if (!r || r.rangeCount === 0)
      return null;
    var i = r.anchorNode, u = r.anchorOffset, m = r.focusNode, g = r.focusOffset;
    try {
      i.nodeType, m.nodeType;
    } catch {
      return null;
    }
    return U7(e, i, u, m, g);
  }
  function U7(e, t, n, r, i) {
    var u = 0, m = -1, g = -1, b = 0, w = 0, E = e, A = null;
    e: for (; ; ) {
      for (var _ = null; E === t && (n === 0 || E.nodeType === ga) && (m = u + n), E === r && (i === 0 || E.nodeType === ga) && (g = u + i), E.nodeType === ga && (u += E.nodeValue.length), (_ = E.firstChild) !== null; )
        A = E, E = _;
      for (; ; ) {
        if (E === e)
          break e;
        if (A === t && ++b === n && (m = u), A === r && ++w === i && (g = u), (_ = E.nextSibling) !== null)
          break;
        E = A, A = E.parentNode;
      }
      E = _;
    }
    return m === -1 || g === -1 ? null : {
      start: m,
      end: g
    };
  }
  function V7(e, t) {
    var n = e.ownerDocument || document, r = n && n.defaultView || window;
    if (r.getSelection) {
      var i = r.getSelection(), u = e.textContent.length, m = Math.min(t.start, u), g = t.end === void 0 ? m : Math.min(t.end, u);
      if (!i.extend && m > g) {
        var b = g;
        g = m, m = b;
      }
      var w = _g(e, m), E = _g(e, g);
      if (w && E) {
        if (i.rangeCount === 1 && i.anchorNode === w.node && i.anchorOffset === w.offset && i.focusNode === E.node && i.focusOffset === E.offset)
          return;
        var A = n.createRange();
        A.setStart(w.node, w.offset), i.removeAllRanges(), m > g ? (i.addRange(A), i.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), i.addRange(A));
      }
    }
  }
  function Ag(e) {
    return e && e.nodeType === ga;
  }
  function Mg(e, t) {
    return !e || !t ? !1 : e === t ? !0 : Ag(e) ? !1 : Ag(t) ? Mg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function F7(e) {
    return e && e.ownerDocument && Mg(e.ownerDocument.documentElement, e);
  }
  function z7(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function Pg() {
    for (var e = window, t = qa(); t instanceof e.HTMLIFrameElement; ) {
      if (z7(t))
        e = t.contentWindow;
      else
        return t;
      t = qa(e.document);
    }
    return t;
  }
  function Hm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function $7() {
    var e = Pg();
    return {
      focusedElem: e,
      selectionRange: Hm(e) ? J7(e) : null
    };
  }
  function H7(e) {
    var t = Pg(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && F7(n)) {
      r !== null && Hm(n) && B7(n, r);
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
  function J7(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = P7(e), t || {
      start: 0,
      end: 0
    };
  }
  function B7(e, t) {
    var n = t.start, r = t.end;
    r === void 0 && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : V7(e, t);
  }
  var I7 = Ot && "documentMode" in document && document.documentMode <= 11;
  function Y7() {
    Kn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var $o = null, Jm = null, xl = null, Bm = !1;
  function K7(e) {
    if ("selectionStart" in e && Hm(e))
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
  function W7(e) {
    return e.window === e ? e.document : e.nodeType === ya ? e : e.ownerDocument;
  }
  function Ug(e, t, n) {
    var r = W7(n);
    if (!(Bm || $o == null || $o !== qa(r))) {
      var i = K7($o);
      if (!xl || !bl(xl, i)) {
        xl = i;
        var u = Ec(Jm, "onSelect");
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
  function G7(e, t, n, r, i, u, m) {
    var g = n ? Yo(n) : window;
    switch (t) {
      case "focusin":
        (Rg(g) || g.contentEditable === "true") && ($o = g, Jm = n, xl = null);
        break;
      case "focusout":
        $o = null, Jm = null, xl = null;
        break;
      case "mousedown":
        Bm = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Bm = !1, Ug(e, r, i);
        break;
      case "selectionchange":
        if (I7)
          break;
      case "keydown":
      case "keyup":
        Ug(e, r, i);
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
  }, Im = {}, Vg = {};
  Ot && (Vg = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
  function wc(e) {
    if (Im[e])
      return Im[e];
    if (!Ho[e])
      return e;
    var t = Ho[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in Vg)
        return Im[e] = t[n];
    return e;
  }
  var Fg = wc("animationend"), zg = wc("animationiteration"), $g = wc("animationstart"), Hg = wc("transitionend"), Jg = /* @__PURE__ */ new Map(), Bg = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function ri(e, t) {
    Jg.set(e, t), Kn(t, [e]);
  }
  function q7() {
    for (var e = 0; e < Bg.length; e++) {
      var t = Bg[e], n = t.toLowerCase(), r = t[0].toUpperCase() + t.slice(1);
      ri(n, "on" + r);
    }
    ri(Fg, "onAnimationEnd"), ri(zg, "onAnimationIteration"), ri($g, "onAnimationStart"), ri("dblclick", "onDoubleClick"), ri("focusin", "onFocus"), ri("focusout", "onBlur"), ri(Hg, "onTransitionEnd");
  }
  function Q7(e, t, n, r, i, u, m) {
    var g = Jg.get(t);
    if (g !== void 0) {
      var b = Pm, w = t;
      switch (t) {
        case "keypress":
          if (Lc(r) === 0)
            return;
        case "keydown":
        case "keyup":
          b = X8;
          break;
        case "focusin":
          w = "focus", b = Fm;
          break;
        case "focusout":
          w = "blur", b = Fm;
          break;
        case "beforeblur":
        case "afterblur":
          b = Fm;
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
          b = vg;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          b = V8;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          b = t7;
          break;
        case Fg:
        case zg:
        case $g:
          b = $8;
          break;
        case Hg:
          b = r7;
          break;
        case "scroll":
          b = M8;
          break;
        case "wheel":
          b = i7;
          break;
        case "copy":
        case "cut":
        case "paste":
          b = J8;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          b = yg;
          break;
      }
      var E = (u & Ys) !== 0;
      {
        var A = !E && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", _ = t6(n, g, r.type, E, A);
        if (_.length > 0) {
          var H = new b(g, w, null, r, i);
          e.push({
            event: H,
            listeners: _
          });
        }
      }
    }
  }
  q7(), O7(), L7(), Y7(), l7();
  function X7(e, t, n, r, i, u, m) {
    Q7(e, t, n, r, i, u);
    var g = (u & K4) === 0;
    g && (_7(e, t, n, r, i), k7(e, t, n, r, i), G7(e, t, n, r, i), v7(e, t, n, r, i));
  }
  var Sl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ym = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sl));
  function Ig(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, i5(r, t, void 0, e), e.currentTarget = null;
  }
  function Z7(e, t, n) {
    var r;
    if (n)
      for (var i = t.length - 1; i >= 0; i--) {
        var u = t[i], m = u.instance, g = u.currentTarget, b = u.listener;
        if (m !== r && e.isPropagationStopped())
          return;
        Ig(e, b, g), r = m;
      }
    else
      for (var w = 0; w < t.length; w++) {
        var E = t[w], A = E.instance, _ = E.currentTarget, H = E.listener;
        if (A !== r && e.isPropagationStopped())
          return;
        Ig(e, H, _), r = A;
      }
  }
  function Yg(e, t) {
    for (var n = (t & Ys) !== 0, r = 0; r < e.length; r++) {
      var i = e[r], u = i.event, m = i.listeners;
      Z7(u, m, n);
    }
    o5();
  }
  function e6(e, t, n, r, i) {
    var u = $d(n), m = [];
    X7(m, e, r, n, u, t), Yg(m, t);
  }
  function yt(e, t) {
    Ym.has(e) || c('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, r = Dx(t), i = a6(e);
    r.has(i) || (Kg(t, e, zd, n), r.add(i));
  }
  function Km(e, t, n) {
    Ym.has(e) && !t && c('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var r = 0;
    t && (r |= Ys), Kg(n, e, r, t);
  }
  var Cc = "_reactListening" + Math.random().toString(36).slice(2);
  function Nl(e) {
    if (!e[Cc]) {
      e[Cc] = !0, ur.forEach(function(n) {
        n !== "selectionchange" && (Ym.has(n) || Km(n, !1, e), Km(n, !0, e));
      });
      var t = e.nodeType === ya ? e : e.ownerDocument;
      t !== null && (t[Cc] || (t[Cc] = !0, Km("selectionchange", !1, t)));
    }
  }
  function Kg(e, t, n, r, i) {
    var u = C8(e, t, n), m = void 0;
    Bd && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, r ? m !== void 0 ? k8(e, t, u, m) : D8(e, t, u) : m !== void 0 ? O8(e, t, u, m) : T8(e, t, u);
  }
  function Wg(e, t) {
    return e === t || e.nodeType === _t && e.parentNode === t;
  }
  function Wm(e, t, n, r, i) {
    var u = r;
    if (!(t & N1) && !(t & zd)) {
      var m = i;
      if (r !== null) {
        var g = r;
        e: for (; ; ) {
          if (g === null)
            return;
          var b = g.tag;
          if (b === L || b === x) {
            var w = g.stateNode.containerInfo;
            if (Wg(w, m))
              break;
            if (b === x)
              for (var E = g.return; E !== null; ) {
                var A = E.tag;
                if (A === L || A === x) {
                  var _ = E.stateNode.containerInfo;
                  if (Wg(_, m))
                    return;
                }
                E = E.return;
              }
            for (; w !== null; ) {
              var H = qi(w);
              if (H === null)
                return;
              var B = H.tag;
              if (B === C || B === j) {
                g = u = H;
                continue e;
              }
              w = w.parentNode;
            }
          }
          g = g.return;
        }
      }
    }
    T1(function() {
      return e6(e, t, n, u);
    });
  }
  function wl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function t6(e, t, n, r, i, u) {
    for (var m = t !== null ? t + "Capture" : null, g = r ? m : t, b = [], w = e, E = null; w !== null; ) {
      var A = w, _ = A.stateNode, H = A.tag;
      if (H === C && _ !== null && (E = _, g !== null)) {
        var B = Ws(w, g);
        B != null && b.push(wl(w, B, E));
      }
      if (i)
        break;
      w = w.return;
    }
    return b;
  }
  function Ec(e, t) {
    for (var n = t + "Capture", r = [], i = e; i !== null; ) {
      var u = i, m = u.stateNode, g = u.tag;
      if (g === C && m !== null) {
        var b = m, w = Ws(i, n);
        w != null && r.unshift(wl(i, w, b));
        var E = Ws(i, t);
        E != null && r.push(wl(i, E, b));
      }
      i = i.return;
    }
    return r;
  }
  function Jo(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== C);
    return e || null;
  }
  function n6(e, t) {
    for (var n = e, r = t, i = 0, u = n; u; u = Jo(u))
      i++;
    for (var m = 0, g = r; g; g = Jo(g))
      m++;
    for (; i - m > 0; )
      n = Jo(n), i--;
    for (; m - i > 0; )
      r = Jo(r), m--;
    for (var b = i; b--; ) {
      if (n === r || r !== null && n === r.alternate)
        return n;
      n = Jo(n), r = Jo(r);
    }
    return null;
  }
  function Gg(e, t, n, r, i) {
    for (var u = t._reactName, m = [], g = n; g !== null && g !== r; ) {
      var b = g, w = b.alternate, E = b.stateNode, A = b.tag;
      if (w !== null && w === r)
        break;
      if (A === C && E !== null) {
        var _ = E;
        if (i) {
          var H = Ws(g, u);
          H != null && m.unshift(wl(g, H, _));
        } else if (!i) {
          var B = Ws(g, u);
          B != null && m.push(wl(g, B, _));
        }
      }
      g = g.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  function r6(e, t, n, r, i) {
    var u = r && i ? n6(r, i) : null;
    r !== null && Gg(e, t, r, u, !1), i !== null && n !== null && Gg(e, n, i, u, !0);
  }
  function a6(e, t) {
    return e + "__bubble";
  }
  var zn = !1, Cl = "dangerouslySetInnerHTML", Rc = "suppressContentEditableWarning", ai = "suppressHydrationWarning", qg = "autoFocus", Wi = "children", Gi = "style", jc = "__html", Gm, Tc, El, Qg, Dc, Xg, Zg;
  Gm = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Tc = function(e, t) {
    z4(e, t), $4(e, t), Y4(e, t, {
      registrationNameDependencies: tn,
      possibleRegistrationNames: Mn
    });
  }, Xg = Ot && !document.documentMode, El = function(e, t, n) {
    if (!zn) {
      var r = kc(n), i = kc(t);
      i !== r && (zn = !0, c("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(i), JSON.stringify(r)));
    }
  }, Qg = function(e) {
    if (!zn) {
      zn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), c("Extra attributes from the server: %s", t);
    }
  }, Dc = function(e, t) {
    t === !1 ? c("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : c("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Zg = function(e, t) {
    var n = e.namespaceURI === va ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var i6 = /\r\n?/g, o6 = /\u0000|\uFFFD/g;
  function kc(e) {
    fr(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(i6, `
`).replace(o6, "");
  }
  function Oc(e, t, n, r) {
    var i = kc(t), u = kc(e);
    if (u !== i && (r && (zn || (zn = !0, c('Text content did not match. Server: "%s" Client: "%s"', u, i))), n && Ce))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function e0(e) {
    return e.nodeType === ya ? e : e.ownerDocument;
  }
  function s6() {
  }
  function _c(e) {
    e.onclick = s6;
  }
  function l6(e, t, n, r, i) {
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var m = r[u];
        if (u === Gi)
          m && Object.freeze(m), g1(t, m);
        else if (u === Cl) {
          var g = m ? m[jc] : void 0;
          g != null && d1(t, g);
        } else if (u === Wi)
          if (typeof m == "string") {
            var b = e !== "textarea" || m !== "";
            b && tc(t, m);
          } else typeof m == "number" && tc(t, "" + m);
        else u === Rc || u === ai || u === qg || (tn.hasOwnProperty(u) ? m != null && (typeof m != "function" && Dc(u, m), u === "onScroll" && yt("scroll", t)) : m != null && da(t, u, m, i));
      }
  }
  function u6(e, t, n, r) {
    for (var i = 0; i < t.length; i += 2) {
      var u = t[i], m = t[i + 1];
      u === Gi ? g1(e, m) : u === Cl ? d1(e, m) : u === Wi ? tc(e, m) : da(e, u, m, r);
    }
  }
  function c6(e, t, n, r) {
    var i, u = e0(n), m, g = r;
    if (g === va && (g = Ad(e)), g === va) {
      if (i = Ui(e, t), !i && e !== e.toLowerCase() && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var b = u.createElement("div");
        b.innerHTML = "<script><\/script>";
        var w = b.firstChild;
        m = b.removeChild(w);
      } else if (typeof t.is == "string")
        m = u.createElement(e, {
          is: t.is
        });
      else if (m = u.createElement(e), e === "select") {
        var E = m;
        t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
      }
    } else
      m = u.createElementNS(g, e);
    return g === va && !i && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !vn.call(Gm, e) && (Gm[e] = !0, c("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
  }
  function f6(e, t) {
    return e0(t).createTextNode(e);
  }
  function d6(e, t, n, r) {
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
        for (var m = 0; m < Sl.length; m++)
          yt(Sl[m], e);
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
        T(e, n), u = S(e, n), yt("invalid", e);
        break;
      case "option":
        ft(e, n), u = n;
        break;
      case "select":
        Bs(e, n), u = Js(e, n), yt("invalid", e);
        break;
      case "textarea":
        u1(e, n), u = Od(e, n), yt("invalid", e);
        break;
      default:
        u = n;
    }
    switch (Fd(t, u), l6(t, e, r, u, i), t) {
      case "input":
        pa(e), ee(e, n, !1);
        break;
      case "textarea":
        pa(e), f1(e);
        break;
      case "option":
        gt(e, n);
        break;
      case "select":
        kd(e, n);
        break;
      default:
        typeof u.onClick == "function" && _c(e);
        break;
    }
  }
  function m6(e, t, n, r, i) {
    Tc(t, r);
    var u = null, m, g;
    switch (t) {
      case "input":
        m = S(e, n), g = S(e, r), u = [];
        break;
      case "select":
        m = Js(e, n), g = Js(e, r), u = [];
        break;
      case "textarea":
        m = Od(e, n), g = Od(e, r), u = [];
        break;
      default:
        m = n, g = r, typeof m.onClick != "function" && typeof g.onClick == "function" && _c(e);
        break;
    }
    Fd(t, g);
    var b, w, E = null;
    for (b in m)
      if (!(g.hasOwnProperty(b) || !m.hasOwnProperty(b) || m[b] == null))
        if (b === Gi) {
          var A = m[b];
          for (w in A)
            A.hasOwnProperty(w) && (E || (E = {}), E[w] = "");
        } else b === Cl || b === Wi || b === Rc || b === ai || b === qg || (tn.hasOwnProperty(b) ? u || (u = []) : (u = u || []).push(b, null));
    for (b in g) {
      var _ = g[b], H = m != null ? m[b] : void 0;
      if (!(!g.hasOwnProperty(b) || _ === H || _ == null && H == null))
        if (b === Gi)
          if (_ && Object.freeze(_), H) {
            for (w in H)
              H.hasOwnProperty(w) && (!_ || !_.hasOwnProperty(w)) && (E || (E = {}), E[w] = "");
            for (w in _)
              _.hasOwnProperty(w) && H[w] !== _[w] && (E || (E = {}), E[w] = _[w]);
          } else
            E || (u || (u = []), u.push(b, E)), E = _;
        else if (b === Cl) {
          var B = _ ? _[jc] : void 0, K = H ? H[jc] : void 0;
          B != null && K !== B && (u = u || []).push(b, B);
        } else b === Wi ? (typeof _ == "string" || typeof _ == "number") && (u = u || []).push(b, "" + _) : b === Rc || b === ai || (tn.hasOwnProperty(b) ? (_ != null && (typeof _ != "function" && Dc(b, _), b === "onScroll" && yt("scroll", e)), !u && H !== _ && (u = [])) : (u = u || []).push(b, _));
    }
    return E && (O4(E, g[Gi]), (u = u || []).push(Gi, E)), u;
  }
  function p6(e, t, n, r, i) {
    n === "input" && i.type === "radio" && i.name != null && J(e, i);
    var u = Ui(n, r), m = Ui(n, i);
    switch (u6(e, t, u, m), n) {
      case "input":
        Y(e, i);
        break;
      case "textarea":
        c1(e, i);
        break;
      case "select":
        u4(e, i);
        break;
    }
  }
  function h6(e) {
    {
      var t = e.toLowerCase();
      return nc.hasOwnProperty(t) && nc[t] || null;
    }
  }
  function v6(e, t, n, r, i, u, m) {
    var g, b;
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
        for (var w = 0; w < Sl.length; w++)
          yt(Sl[w], e);
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
        Bs(e, n), yt("invalid", e);
        break;
      case "textarea":
        u1(e, n), yt("invalid", e);
        break;
    }
    Fd(t, n);
    {
      b = /* @__PURE__ */ new Set();
      for (var E = e.attributes, A = 0; A < E.length; A++) {
        var _ = E[A].name.toLowerCase();
        switch (_) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            b.add(E[A].name);
        }
      }
    }
    var H = null;
    for (var B in n)
      if (n.hasOwnProperty(B)) {
        var K = n[B];
        if (B === Wi)
          typeof K == "string" ? e.textContent !== K && (n[ai] !== !0 && Oc(e.textContent, K, u, m), H = [Wi, K]) : typeof K == "number" && e.textContent !== "" + K && (n[ai] !== !0 && Oc(e.textContent, K, u, m), H = [Wi, "" + K]);
        else if (tn.hasOwnProperty(B))
          K != null && (typeof K != "function" && Dc(B, K), B === "onScroll" && yt("scroll", e));
        else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof g == "boolean") {
          var ae = void 0, me = g && hn ? null : Qn(B);
          if (n[ai] !== !0) {
            if (!(B === Rc || B === ai || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            B === "value" || B === "checked" || B === "selected")) {
              if (B === Cl) {
                var fe = e.innerHTML, Ie = K ? K[jc] : void 0;
                if (Ie != null) {
                  var Fe = Zg(e, Ie);
                  Fe !== fe && El(B, fe, Fe);
                }
              } else if (B === Gi) {
                if (b.delete(B), Xg) {
                  var z = D4(K);
                  ae = e.getAttribute("style"), z !== ae && El(B, ae, z);
                }
              } else if (g && !hn)
                b.delete(B.toLowerCase()), ae = Ja(e, B, K), K !== ae && El(B, ae, K);
              else if (!Tt(B, me, g) && !ut(B, K, me, g)) {
                var W = !1;
                if (me !== null)
                  b.delete(me.attributeName), ae = fa(e, B, K, me);
                else {
                  var $ = r;
                  if ($ === va && ($ = Ad(t)), $ === va)
                    b.delete(B.toLowerCase());
                  else {
                    var Z = h6(B);
                    Z !== null && Z !== B && (W = !0, b.delete(Z)), b.delete(B);
                  }
                  ae = Ja(e, B, K);
                }
                var le = hn;
                !le && K !== ae && !W && El(B, ae, K);
              }
            }
          }
        }
      }
    switch (m && // $FlowFixMe - Should be inferred as not undefined.
    b.size > 0 && n[ai] !== !0 && Qg(b), t) {
      case "input":
        pa(e), ee(e, n, !0);
        break;
      case "textarea":
        pa(e), f1(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && _c(e);
        break;
    }
    return H;
  }
  function g6(e, t, n) {
    var r = e.nodeValue !== t;
    return r;
  }
  function qm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Qm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Xm(e, t, n) {
    {
      if (zn)
        return;
      zn = !0, c("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Zm(e, t) {
    {
      if (t === "" || zn)
        return;
      zn = !0, c('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function y6(e, t, n) {
    switch (t) {
      case "input":
        be(e, n);
        return;
      case "textarea":
        f4(e, n);
        return;
      case "select":
        c4(e, n);
        return;
    }
  }
  var Rl = function() {
  }, jl = function() {
  };
  {
    var L6 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], t0 = [
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
    ], b6 = t0.concat(["button"]), x6 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], n0 = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    jl = function(e, t) {
      var n = ze({}, e || n0), r = {
        tag: t
      };
      return t0.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), b6.indexOf(t) !== -1 && (n.pTagInButtonScope = null), L6.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), n;
    };
    var S6 = function(e, t) {
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
          return x6.indexOf(t) === -1;
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
    }, N6 = function(e, t) {
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
    }, r0 = {};
    Rl = function(e, t, n) {
      n = n || n0;
      var r = n.current, i = r && r.tag;
      t != null && (e != null && c("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = S6(e, i) ? null : r, m = u ? null : N6(e, n), g = u || m;
      if (g) {
        var b = g.tag, w = !!u + "|" + e + "|" + b;
        if (!r0[w]) {
          r0[w] = !0;
          var E = e, A = "";
          if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", u) {
            var _ = "";
            b === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), c("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, b, A, _);
          } else
            c("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, b);
        }
      }
    };
  }
  var Ac = "suppressHydrationWarning", Mc = "$", Pc = "/$", Tl = "$?", Dl = "$!", w6 = "style", ep = null, tp = null;
  function C6(e) {
    var t, n, r = e.nodeType;
    switch (r) {
      case ya:
      case Pd: {
        t = r === ya ? "#document" : "#fragment";
        var i = e.documentElement;
        n = i ? i.namespaceURI : Md(null, "");
        break;
      }
      default: {
        var u = r === _t ? e.parentNode : e, m = u.namespaceURI || null;
        t = u.tagName, n = Md(m, t);
        break;
      }
    }
    {
      var g = t.toLowerCase(), b = jl(null, g);
      return {
        namespace: n,
        ancestorInfo: b
      };
    }
  }
  function E6(e, t, n) {
    {
      var r = e, i = Md(r.namespace, t), u = jl(r.ancestorInfo, t);
      return {
        namespace: i,
        ancestorInfo: u
      };
    }
  }
  function VT(e) {
    return e;
  }
  function R6(e) {
    ep = w8(), tp = $7();
    var t = null;
    return fg(!1), t;
  }
  function j6(e) {
    H7(tp), fg(ep), ep = null, tp = null;
  }
  function T6(e, t, n, r, i) {
    var u;
    {
      var m = r;
      if (Rl(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var g = "" + t.children, b = jl(m.ancestorInfo, e);
        Rl(null, g, b);
      }
      u = m.namespace;
    }
    var w = c6(e, t, n, u);
    return _l(i, w), up(w, t), w;
  }
  function D6(e, t) {
    e.appendChild(t);
  }
  function k6(e, t, n, r, i) {
    switch (d6(e, t, n, r), t) {
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
  function O6(e, t, n, r, i, u) {
    {
      var m = u;
      if (typeof r.children != typeof n.children && (typeof r.children == "string" || typeof r.children == "number")) {
        var g = "" + r.children, b = jl(m.ancestorInfo, t);
        Rl(null, g, b);
      }
    }
    return m6(e, t, n, r);
  }
  function np(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function _6(e, t, n, r) {
    {
      var i = n;
      Rl(null, e, i.ancestorInfo);
    }
    var u = f6(e, t);
    return _l(r, u), u;
  }
  function A6() {
    var e = window.event;
    return e === void 0 ? Ca : dg(e.type);
  }
  var rp = typeof setTimeout == "function" ? setTimeout : void 0, M6 = typeof clearTimeout == "function" ? clearTimeout : void 0, ap = -1, a0 = typeof Promise == "function" ? Promise : void 0, P6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof a0 < "u" ? function(e) {
    return a0.resolve(null).then(e).catch(U6);
  } : rp;
  function U6(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function V6(e, t, n, r) {
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
  function F6(e, t, n, r, i, u) {
    p6(e, t, n, r, i), up(e, i);
  }
  function i0(e) {
    tc(e, "");
  }
  function z6(e, t, n) {
    e.nodeValue = n;
  }
  function $6(e, t) {
    e.appendChild(t);
  }
  function H6(e, t) {
    var n;
    e.nodeType === _t ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var r = e._reactRootContainer;
    r == null && n.onclick === null && _c(n);
  }
  function J6(e, t, n) {
    e.insertBefore(t, n);
  }
  function B6(e, t, n) {
    e.nodeType === _t ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function I6(e, t) {
    e.removeChild(t);
  }
  function Y6(e, t) {
    e.nodeType === _t ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function ip(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === _t) {
        var u = i.data;
        if (u === Pc)
          if (r === 0) {
            e.removeChild(i), dl(t);
            return;
          } else
            r--;
        else (u === Mc || u === Tl || u === Dl) && r++;
      }
      n = i;
    } while (n);
    dl(t);
  }
  function K6(e, t) {
    e.nodeType === _t ? ip(e.parentNode, t) : e.nodeType === Fn && ip(e, t), dl(e);
  }
  function W6(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function G6(e) {
    e.nodeValue = "";
  }
  function q6(e, t) {
    e = e;
    var n = t[w6], r = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Ud("display", r);
  }
  function Q6(e, t) {
    e.nodeValue = t;
  }
  function X6(e) {
    e.nodeType === Fn ? e.textContent = "" : e.nodeType === ya && e.documentElement && e.removeChild(e.documentElement);
  }
  function Z6(e, t, n) {
    return e.nodeType !== Fn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function ex(e, t) {
    return t === "" || e.nodeType !== ga ? null : e;
  }
  function tx(e) {
    return e.nodeType !== _t ? null : e;
  }
  function o0(e) {
    return e.data === Tl;
  }
  function op(e) {
    return e.data === Dl;
  }
  function nx(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, r, i;
    return t && (n = t.dgst, r = t.msg, i = t.stck), {
      message: r,
      digest: n,
      stack: i
    };
  }
  function rx(e, t) {
    e._reactRetry = t;
  }
  function Uc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Fn || t === ga)
        break;
      if (t === _t) {
        var n = e.data;
        if (n === Mc || n === Dl || n === Tl)
          break;
        if (n === Pc)
          return null;
      }
    }
    return e;
  }
  function kl(e) {
    return Uc(e.nextSibling);
  }
  function ax(e) {
    return Uc(e.firstChild);
  }
  function ix(e) {
    return Uc(e.firstChild);
  }
  function ox(e) {
    return Uc(e.nextSibling);
  }
  function sx(e, t, n, r, i, u, m) {
    _l(u, e), up(e, n);
    var g;
    {
      var b = i;
      g = b.namespace;
    }
    var w = (u.mode & Je) !== ve;
    return v6(e, t, n, g, r, w, m);
  }
  function lx(e, t, n, r) {
    return _l(n, e), n.mode & Je, g6(e, t);
  }
  function ux(e, t) {
    _l(t, e);
  }
  function cx(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === _t) {
        var r = t.data;
        if (r === Pc) {
          if (n === 0)
            return kl(t);
          n--;
        } else (r === Mc || r === Dl || r === Tl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function s0(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === _t) {
        var r = t.data;
        if (r === Mc || r === Dl || r === Tl) {
          if (n === 0)
            return t;
          n--;
        } else r === Pc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function fx(e) {
    dl(e);
  }
  function dx(e) {
    dl(e);
  }
  function mx(e) {
    return e !== "head" && e !== "body";
  }
  function px(e, t, n, r) {
    var i = !0;
    Oc(t.nodeValue, n, r, i);
  }
  function hx(e, t, n, r, i, u) {
    if (t[Ac] !== !0) {
      var m = !0;
      Oc(r.nodeValue, i, u, m);
    }
  }
  function vx(e, t) {
    t.nodeType === Fn ? qm(e, t) : t.nodeType === _t || Qm(e, t);
  }
  function gx(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Fn ? qm(n, t) : t.nodeType === _t || Qm(n, t));
    }
  }
  function yx(e, t, n, r, i) {
    (i || t[Ac] !== !0) && (r.nodeType === Fn ? qm(n, r) : r.nodeType === _t || Qm(n, r));
  }
  function Lx(e, t, n) {
    Xm(e, t);
  }
  function bx(e, t) {
    Zm(e, t);
  }
  function xx(e, t, n) {
    {
      var r = e.parentNode;
      r !== null && Xm(r, t);
    }
  }
  function Sx(e, t) {
    {
      var n = e.parentNode;
      n !== null && Zm(n, t);
    }
  }
  function Nx(e, t, n, r, i, u) {
    (u || t[Ac] !== !0) && Xm(n, r);
  }
  function wx(e, t, n, r, i) {
    (i || t[Ac] !== !0) && Zm(n, r);
  }
  function Cx(e) {
    c("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function Ex(e) {
    Nl(e);
  }
  var Bo = Math.random().toString(36).slice(2), Io = "__reactFiber$" + Bo, sp = "__reactProps$" + Bo, Ol = "__reactContainer$" + Bo, lp = "__reactEvents$" + Bo, Rx = "__reactListeners$" + Bo, jx = "__reactHandles$" + Bo;
  function Tx(e) {
    delete e[Io], delete e[sp], delete e[lp], delete e[Rx], delete e[jx];
  }
  function _l(e, t) {
    t[Io] = e;
  }
  function Vc(e, t) {
    t[Ol] = e;
  }
  function l0(e) {
    e[Ol] = null;
  }
  function Al(e) {
    return !!e[Ol];
  }
  function qi(e) {
    var t = e[Io];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ol] || n[Io], t) {
        var r = t.alternate;
        if (t.child !== null || r !== null && r.child !== null)
          for (var i = s0(e); i !== null; ) {
            var u = i[Io];
            if (u)
              return u;
            i = s0(i);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ii(e) {
    var t = e[Io] || e[Ol];
    return t && (t.tag === C || t.tag === j || t.tag === P || t.tag === L) ? t : null;
  }
  function Yo(e) {
    if (e.tag === C || e.tag === j)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Fc(e) {
    return e[sp] || null;
  }
  function up(e, t) {
    e[sp] = t;
  }
  function Dx(e) {
    var t = e[lp];
    return t === void 0 && (t = e[lp] = /* @__PURE__ */ new Set()), t;
  }
  var u0 = {}, c0 = s.ReactDebugCurrentFrame;
  function zc(e) {
    if (e) {
      var t = e._owner, n = Ka(e.type, e._source, t ? t.type : null);
      c0.setExtraStackFrame(n);
    } else
      c0.setExtraStackFrame(null);
  }
  function Or(e, t, n, r, i) {
    {
      var u = Function.call.bind(vn);
      for (var m in e)
        if (u(e, m)) {
          var g = void 0;
          try {
            if (typeof e[m] != "function") {
              var b = Error((r || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw b.name = "Invariant Violation", b;
            }
            g = e[m](t, m, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (w) {
            g = w;
          }
          g && !(g instanceof Error) && (zc(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, m, typeof g), zc(null)), g instanceof Error && !(g.message in u0) && (u0[g.message] = !0, zc(i), c("Failed %s type: %s", n, g.message), zc(null));
        }
    }
  }
  var cp = [], $c;
  $c = [];
  var Ea = -1;
  function oi(e) {
    return {
      current: e
    };
  }
  function xn(e, t) {
    if (Ea < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== $c[Ea] && c("Unexpected Fiber popped."), e.current = cp[Ea], cp[Ea] = null, $c[Ea] = null, Ea--;
  }
  function Sn(e, t, n) {
    Ea++, cp[Ea] = e.current, $c[Ea] = n, e.current = t;
  }
  var fp;
  fp = {};
  var ar = {};
  Object.freeze(ar);
  var Ra = oi(ar), Qr = oi(!1), dp = ar;
  function Ko(e, t, n) {
    return n && Xr(t) ? dp : Ra.current;
  }
  function f0(e, t, n) {
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
        Or(r, u, "context", g);
      }
      return i && f0(e, t, u), u;
    }
  }
  function Hc() {
    return Qr.current;
  }
  function Xr(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Jc(e) {
    xn(Qr, e), xn(Ra, e);
  }
  function mp(e) {
    xn(Qr, e), xn(Ra, e);
  }
  function d0(e, t, n) {
    {
      if (Ra.current !== ar)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      Sn(Ra, t, e), Sn(Qr, n, e);
    }
  }
  function m0(e, t, n) {
    {
      var r = e.stateNode, i = t.childContextTypes;
      if (typeof r.getChildContext != "function") {
        {
          var u = _e(e) || "Unknown";
          fp[u] || (fp[u] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return n;
      }
      var m = r.getChildContext();
      for (var g in m)
        if (!(g in i))
          throw new Error((_e(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
      {
        var b = _e(e) || "Unknown";
        Or(i, m, "child context", b);
      }
      return ze({}, n, m);
    }
  }
  function Bc(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || ar;
      return dp = Ra.current, Sn(Ra, n, e), Sn(Qr, Qr.current, e), !0;
    }
  }
  function p0(e, t, n) {
    {
      var r = e.stateNode;
      if (!r)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var i = m0(e, t, dp);
        r.__reactInternalMemoizedMergedChildContext = i, xn(Qr, e), xn(Ra, e), Sn(Ra, i, e), Sn(Qr, n, e);
      } else
        xn(Qr, e), Sn(Qr, n, e);
    }
  }
  function kx(e) {
    {
      if (!m5(e) || e.tag !== p)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case L:
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
  var si = 0, Ic = 1, ja = null, pp = !1, hp = !1;
  function h0(e) {
    ja === null ? ja = [e] : ja.push(e);
  }
  function Ox(e) {
    pp = !0, h0(e);
  }
  function v0() {
    pp && li();
  }
  function li() {
    if (!hp && ja !== null) {
      hp = !0;
      var e = 0, t = kr();
      try {
        var n = !0, r = ja;
        for (en(tr); e < r.length; e++) {
          var i = r[e];
          do
            i = i(n);
          while (i !== null);
        }
        ja = null, pp = !1;
      } catch (u) {
        throw ja !== null && (ja = ja.slice(e + 1)), z1(sc, li), u;
      } finally {
        en(t), hp = !1;
      }
    }
    return null;
  }
  var Go = [], qo = 0, Yc = null, Kc = 0, hr = [], vr = 0, Qi = null, Ta = 1, Da = "";
  function _x(e) {
    return Zi(), (e.flags & O1) !== ye;
  }
  function Ax(e) {
    return Zi(), Kc;
  }
  function Mx() {
    var e = Da, t = Ta, n = t & ~Px(t);
    return n.toString(32) + e;
  }
  function Xi(e, t) {
    Zi(), Go[qo++] = Kc, Go[qo++] = Yc, Yc = e, Kc = t;
  }
  function g0(e, t, n) {
    Zi(), hr[vr++] = Ta, hr[vr++] = Da, hr[vr++] = Qi, Qi = e;
    var r = Ta, i = Da, u = Wc(r) - 1, m = r & ~(1 << u), g = n + 1, b = Wc(t) + u;
    if (b > 30) {
      var w = u - u % 5, E = (1 << w) - 1, A = (m & E).toString(32), _ = m >> w, H = u - w, B = Wc(t) + H, K = g << H, ae = K | _, me = A + i;
      Ta = 1 << B | ae, Da = me;
    } else {
      var fe = g << u, Ie = fe | m, Fe = i;
      Ta = 1 << b | Ie, Da = Fe;
    }
  }
  function vp(e) {
    Zi();
    var t = e.return;
    if (t !== null) {
      var n = 1, r = 0;
      Xi(e, n), g0(e, n, r);
    }
  }
  function Wc(e) {
    return 32 - Y1(e);
  }
  function Px(e) {
    return 1 << Wc(e) - 1;
  }
  function gp(e) {
    for (; e === Yc; )
      Yc = Go[--qo], Go[qo] = null, Kc = Go[--qo], Go[qo] = null;
    for (; e === Qi; )
      Qi = hr[--vr], hr[vr] = null, Da = hr[--vr], hr[vr] = null, Ta = hr[--vr], hr[vr] = null;
  }
  function Ux() {
    return Zi(), Qi !== null ? {
      id: Ta,
      overflow: Da
    } : null;
  }
  function Vx(e, t) {
    Zi(), hr[vr++] = Ta, hr[vr++] = Da, hr[vr++] = Qi, Ta = t.id, Da = t.overflow, Qi = e;
  }
  function Zi() {
    rn() || c("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var nn = null, gr = null, _r = !1, eo = !1, ui = null;
  function Fx() {
    _r && c("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function y0() {
    eo = !0;
  }
  function zx() {
    return eo;
  }
  function $x(e) {
    var t = e.stateNode.containerInfo;
    return gr = ix(t), nn = e, _r = !0, ui = null, eo = !1, !0;
  }
  function Hx(e, t, n) {
    return gr = ox(t), nn = e, _r = !0, ui = null, eo = !1, n !== null && Vx(e, n), !0;
  }
  function L0(e, t) {
    switch (e.tag) {
      case L: {
        vx(e.stateNode.containerInfo, t);
        break;
      }
      case C: {
        var n = (e.mode & Je) !== ve;
        yx(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case P: {
        var r = e.memoizedState;
        r.dehydrated !== null && gx(r.dehydrated, t);
        break;
      }
    }
  }
  function b0(e, t) {
    L0(e, t);
    var n = YS();
    n.stateNode = t, n.return = e;
    var r = e.deletions;
    r === null ? (e.deletions = [n], e.flags |= Vi) : r.push(n);
  }
  function yp(e, t) {
    {
      if (eo)
        return;
      switch (e.tag) {
        case L: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case C:
              var r = t.type;
              t.pendingProps, Lx(n, r);
              break;
            case j:
              var i = t.pendingProps;
              bx(n, i);
              break;
          }
          break;
        }
        case C: {
          var u = e.type, m = e.memoizedProps, g = e.stateNode;
          switch (t.tag) {
            case C: {
              var b = t.type, w = t.pendingProps, E = (e.mode & Je) !== ve;
              Nx(
                u,
                m,
                g,
                b,
                w,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
            case j: {
              var A = t.pendingProps, _ = (e.mode & Je) !== ve;
              wx(
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
        case P: {
          var H = e.memoizedState, B = H.dehydrated;
          if (B !== null) switch (t.tag) {
            case C:
              var K = t.type;
              t.pendingProps, xx(B, K);
              break;
            case j:
              var ae = t.pendingProps;
              Sx(B, ae);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function x0(e, t) {
    t.flags = t.flags & ~ba | At, yp(e, t);
  }
  function S0(e, t) {
    switch (e.tag) {
      case C: {
        var n = e.type;
        e.pendingProps;
        var r = Z6(t, n);
        return r !== null ? (e.stateNode = r, nn = e, gr = ax(r), !0) : !1;
      }
      case j: {
        var i = e.pendingProps, u = ex(t, i);
        return u !== null ? (e.stateNode = u, nn = e, gr = null, !0) : !1;
      }
      case P: {
        var m = tx(t);
        if (m !== null) {
          var g = {
            dehydrated: m,
            treeContext: Ux(),
            retryLane: Zn
          };
          e.memoizedState = g;
          var b = KS(m);
          return b.return = e, e.child = b, nn = e, gr = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Lp(e) {
    return (e.mode & Je) !== ve && (e.flags & Ze) === ye;
  }
  function bp(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function xp(e) {
    if (_r) {
      var t = gr;
      if (!t) {
        Lp(e) && (yp(nn, e), bp()), x0(nn, e), _r = !1, nn = e;
        return;
      }
      var n = t;
      if (!S0(e, t)) {
        Lp(e) && (yp(nn, e), bp()), t = kl(n);
        var r = nn;
        if (!t || !S0(e, t)) {
          x0(nn, e), _r = !1, nn = e;
          return;
        }
        b0(r, n);
      }
    }
  }
  function Jx(e, t, n) {
    var r = e.stateNode, i = !eo, u = sx(r, e.type, e.memoizedProps, t, n, e, i);
    return e.updateQueue = u, u !== null;
  }
  function Bx(e) {
    var t = e.stateNode, n = e.memoizedProps, r = lx(t, n, e);
    if (r) {
      var i = nn;
      if (i !== null)
        switch (i.tag) {
          case L: {
            var u = i.stateNode.containerInfo, m = (i.mode & Je) !== ve;
            px(
              u,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              m
            );
            break;
          }
          case C: {
            var g = i.type, b = i.memoizedProps, w = i.stateNode, E = (i.mode & Je) !== ve;
            hx(
              g,
              b,
              w,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              E
            );
            break;
          }
        }
    }
    return r;
  }
  function Ix(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    ux(n, e);
  }
  function Yx(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return cx(n);
  }
  function N0(e) {
    for (var t = e.return; t !== null && t.tag !== C && t.tag !== L && t.tag !== P; )
      t = t.return;
    nn = t;
  }
  function Gc(e) {
    if (e !== nn)
      return !1;
    if (!_r)
      return N0(e), _r = !0, !1;
    if (e.tag !== L && (e.tag !== C || mx(e.type) && !np(e.type, e.memoizedProps))) {
      var t = gr;
      if (t)
        if (Lp(e))
          w0(e), bp();
        else
          for (; t; )
            b0(e, t), t = kl(t);
    }
    return N0(e), e.tag === P ? gr = Yx(e) : gr = nn ? kl(e.stateNode) : null, !0;
  }
  function Kx() {
    return _r && gr !== null;
  }
  function w0(e) {
    for (var t = gr; t; )
      L0(e, t), t = kl(t);
  }
  function Qo() {
    nn = null, gr = null, _r = !1, eo = !1;
  }
  function C0() {
    ui !== null && (yL(ui), ui = null);
  }
  function rn() {
    return _r;
  }
  function Sp(e) {
    ui === null ? ui = [e] : ui.push(e);
  }
  var Wx = s.ReactCurrentBatchConfig, Gx = null;
  function qx() {
    return Wx.transition;
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
    var Qx = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Ct && (t = n), n = n.return;
      return t;
    }, to = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Ml = [], Pl = [], Ul = [], Vl = [], Fl = [], zl = [], no = /* @__PURE__ */ new Set();
    Ar.recordUnsafeLifecycleWarnings = function(e, t) {
      no.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && Ml.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillMount == "function" && Pl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ul.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Fl.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillUpdate == "function" && zl.push(e));
    }, Ar.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Ml.length > 0 && (Ml.forEach(function(_) {
        e.add(_e(_) || "Component"), no.add(_.type);
      }), Ml = []);
      var t = /* @__PURE__ */ new Set();
      Pl.length > 0 && (Pl.forEach(function(_) {
        t.add(_e(_) || "Component"), no.add(_.type);
      }), Pl = []);
      var n = /* @__PURE__ */ new Set();
      Ul.length > 0 && (Ul.forEach(function(_) {
        n.add(_e(_) || "Component"), no.add(_.type);
      }), Ul = []);
      var r = /* @__PURE__ */ new Set();
      Vl.length > 0 && (Vl.forEach(function(_) {
        r.add(_e(_) || "Component"), no.add(_.type);
      }), Vl = []);
      var i = /* @__PURE__ */ new Set();
      Fl.length > 0 && (Fl.forEach(function(_) {
        i.add(_e(_) || "Component"), no.add(_.type);
      }), Fl = []);
      var u = /* @__PURE__ */ new Set();
      if (zl.length > 0 && (zl.forEach(function(_) {
        u.add(_e(_) || "Component"), no.add(_.type);
      }), zl = []), t.size > 0) {
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
        var b = to(u);
        c(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
      }
      if (e.size > 0) {
        var w = to(e);
        f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
      }
      if (n.size > 0) {
        var E = to(n);
        f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
      }
      if (i.size > 0) {
        var A = to(i);
        f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
      }
    };
    var qc = /* @__PURE__ */ new Map(), E0 = /* @__PURE__ */ new Set();
    Ar.recordLegacyContextWarning = function(e, t) {
      var n = Qx(e);
      if (n === null) {
        c("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!E0.has(e.type)) {
        var r = qc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], qc.set(n, r)), r.push(e));
      }
    }, Ar.flushLegacyContextWarning = function() {
      qc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], r = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            r.add(_e(u) || "Component"), E0.add(u.type);
          });
          var i = to(r);
          try {
            xt(n), c(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i);
          } finally {
            qt();
          }
        }
      });
    }, Ar.discardPendingWarnings = function() {
      Ml = [], Pl = [], Ul = [], Vl = [], Fl = [], zl = [], qc = /* @__PURE__ */ new Map();
    };
  }
  var Np, wp, Cp, Ep, Rp, R0 = function(e, t) {
  };
  Np = !1, wp = !1, Cp = {}, Ep = {}, Rp = {}, R0 = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = _e(t) || "Component";
      Ep[n] || (Ep[n] = !0, c('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function Xx(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function $l(e, t, n) {
    var r = n.ref;
    if (r !== null && typeof r != "function" && typeof r != "object") {
      if ((e.mode & Ct || Yn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== p) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !Xx(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
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
        var b = m;
        Pn(r, "ref");
        var w = "" + r;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
          return t.ref;
        var E = function(A) {
          var _ = b.refs;
          A === null ? delete _[w] : _[w] = A;
        };
        return E._stringRef = w, E;
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
  function Qc(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Xc(e) {
    {
      var t = _e(e) || "Component";
      if (Rp[t])
        return;
      Rp[t] = !0, c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function j0(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function T0(e) {
    function t(z, W) {
      if (e) {
        var $ = z.deletions;
        $ === null ? (z.deletions = [W], z.flags |= Vi) : $.push(W);
      }
    }
    function n(z, W) {
      if (!e)
        return null;
      for (var $ = W; $ !== null; )
        t(z, $), $ = $.sibling;
      return null;
    }
    function r(z, W) {
      for (var $ = /* @__PURE__ */ new Map(), Z = W; Z !== null; )
        Z.key !== null ? $.set(Z.key, Z) : $.set(Z.index, Z), Z = Z.sibling;
      return $;
    }
    function i(z, W) {
      var $ = fo(z, W);
      return $.index = 0, $.sibling = null, $;
    }
    function u(z, W, $) {
      if (z.index = $, !e)
        return z.flags |= O1, W;
      var Z = z.alternate;
      if (Z !== null) {
        var le = Z.index;
        return le < W ? (z.flags |= At, W) : le;
      } else
        return z.flags |= At, W;
    }
    function m(z) {
      return e && z.alternate === null && (z.flags |= At), z;
    }
    function g(z, W, $, Z) {
      if (W === null || W.tag !== j) {
        var le = Sv($, z.mode, Z);
        return le.return = z, le;
      } else {
        var ie = i(W, $);
        return ie.return = z, ie;
      }
    }
    function b(z, W, $, Z) {
      var le = $.type;
      if (le === D)
        return E(z, W, $.props.children, Z, $.key);
      if (W !== null && (W.elementType === le || // Keep this check inline so it only runs on the false path:
      AL(W, $) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof le == "object" && le !== null && le.$$typeof === Ve && j0(le) === W.type)) {
        var ie = i(W, $.props);
        return ie.ref = $l(z, W, $), ie.return = z, ie._debugSource = $._source, ie._debugOwner = $._owner, ie;
      }
      var xe = xv($, z.mode, Z);
      return xe.ref = $l(z, W, $), xe.return = z, xe;
    }
    function w(z, W, $, Z) {
      if (W === null || W.tag !== x || W.stateNode.containerInfo !== $.containerInfo || W.stateNode.implementation !== $.implementation) {
        var le = Nv($, z.mode, Z);
        return le.return = z, le;
      } else {
        var ie = i(W, $.children || []);
        return ie.return = z, ie;
      }
    }
    function E(z, W, $, Z, le) {
      if (W === null || W.tag !== F) {
        var ie = bi($, z.mode, Z, le);
        return ie.return = z, ie;
      } else {
        var xe = i(W, $);
        return xe.return = z, xe;
      }
    }
    function A(z, W, $) {
      if (typeof W == "string" && W !== "" || typeof W == "number") {
        var Z = Sv("" + W, z.mode, $);
        return Z.return = z, Z;
      }
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Yr: {
            var le = xv(W, z.mode, $);
            return le.ref = $l(z, null, W), le.return = z, le;
          }
          case Er: {
            var ie = Nv(W, z.mode, $);
            return ie.return = z, ie;
          }
          case Ve: {
            var xe = W._payload, Te = W._init;
            return A(z, Te(xe), $);
          }
        }
        if (Xe(W) || ma(W)) {
          var lt = bi(W, z.mode, $, null);
          return lt.return = z, lt;
        }
        Qc(z, W);
      }
      return typeof W == "function" && Xc(z), null;
    }
    function _(z, W, $, Z) {
      var le = W !== null ? W.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return le !== null ? null : g(z, W, "" + $, Z);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Yr:
            return $.key === le ? b(z, W, $, Z) : null;
          case Er:
            return $.key === le ? w(z, W, $, Z) : null;
          case Ve: {
            var ie = $._payload, xe = $._init;
            return _(z, W, xe(ie), Z);
          }
        }
        if (Xe($) || ma($))
          return le !== null ? null : E(z, W, $, Z, null);
        Qc(z, $);
      }
      return typeof $ == "function" && Xc(z), null;
    }
    function H(z, W, $, Z, le) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
        var ie = z.get($) || null;
        return g(W, ie, "" + Z, le);
      }
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Yr: {
            var xe = z.get(Z.key === null ? $ : Z.key) || null;
            return b(W, xe, Z, le);
          }
          case Er: {
            var Te = z.get(Z.key === null ? $ : Z.key) || null;
            return w(W, Te, Z, le);
          }
          case Ve:
            var lt = Z._payload, Ge = Z._init;
            return H(z, W, $, Ge(lt), le);
        }
        if (Xe(Z) || ma(Z)) {
          var Dt = z.get($) || null;
          return E(W, Dt, Z, le, null);
        }
        Qc(W, Z);
      }
      return typeof Z == "function" && Xc(W), null;
    }
    function B(z, W, $) {
      {
        if (typeof z != "object" || z === null)
          return W;
        switch (z.$$typeof) {
          case Yr:
          case Er:
            R0(z, $);
            var Z = z.key;
            if (typeof Z != "string")
              break;
            if (W === null) {
              W = /* @__PURE__ */ new Set(), W.add(Z);
              break;
            }
            if (!W.has(Z)) {
              W.add(Z);
              break;
            }
            c("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
            break;
          case Ve:
            var le = z._payload, ie = z._init;
            B(ie(le), W, $);
            break;
        }
      }
      return W;
    }
    function K(z, W, $, Z) {
      for (var le = null, ie = 0; ie < $.length; ie++) {
        var xe = $[ie];
        le = B(xe, le, z);
      }
      for (var Te = null, lt = null, Ge = W, Dt = 0, qe = 0, Et = null; Ge !== null && qe < $.length; qe++) {
        Ge.index > qe ? (Et = Ge, Ge = null) : Et = Ge.sibling;
        var wn = _(z, Ge, $[qe], Z);
        if (wn === null) {
          Ge === null && (Ge = Et);
          break;
        }
        e && Ge && wn.alternate === null && t(z, Ge), Dt = u(wn, Dt, qe), lt === null ? Te = wn : lt.sibling = wn, lt = wn, Ge = Et;
      }
      if (qe === $.length) {
        if (n(z, Ge), rn()) {
          var fn = qe;
          Xi(z, fn);
        }
        return Te;
      }
      if (Ge === null) {
        for (; qe < $.length; qe++) {
          var or = A(z, $[qe], Z);
          or !== null && (Dt = u(or, Dt, qe), lt === null ? Te = or : lt.sibling = or, lt = or);
        }
        if (rn()) {
          var _n = qe;
          Xi(z, _n);
        }
        return Te;
      }
      for (var An = r(z, Ge); qe < $.length; qe++) {
        var Cn = H(An, z, qe, $[qe], Z);
        Cn !== null && (e && Cn.alternate !== null && An.delete(Cn.key === null ? qe : Cn.key), Dt = u(Cn, Dt, qe), lt === null ? Te = Cn : lt.sibling = Cn, lt = Cn);
      }
      if (e && An.forEach(function(vs) {
        return t(z, vs);
      }), rn()) {
        var Ua = qe;
        Xi(z, Ua);
      }
      return Te;
    }
    function ae(z, W, $, Z) {
      var le = ma($);
      if (typeof le != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        $[Symbol.toStringTag] === "Generator" && (wp || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wp = !0), $.entries === le && (Np || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Np = !0);
        var ie = le.call($);
        if (ie)
          for (var xe = null, Te = ie.next(); !Te.done; Te = ie.next()) {
            var lt = Te.value;
            xe = B(lt, xe, z);
          }
      }
      var Ge = le.call($);
      if (Ge == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Dt = null, qe = null, Et = W, wn = 0, fn = 0, or = null, _n = Ge.next(); Et !== null && !_n.done; fn++, _n = Ge.next()) {
        Et.index > fn ? (or = Et, Et = null) : or = Et.sibling;
        var An = _(z, Et, _n.value, Z);
        if (An === null) {
          Et === null && (Et = or);
          break;
        }
        e && Et && An.alternate === null && t(z, Et), wn = u(An, wn, fn), qe === null ? Dt = An : qe.sibling = An, qe = An, Et = or;
      }
      if (_n.done) {
        if (n(z, Et), rn()) {
          var Cn = fn;
          Xi(z, Cn);
        }
        return Dt;
      }
      if (Et === null) {
        for (; !_n.done; fn++, _n = Ge.next()) {
          var Ua = A(z, _n.value, Z);
          Ua !== null && (wn = u(Ua, wn, fn), qe === null ? Dt = Ua : qe.sibling = Ua, qe = Ua);
        }
        if (rn()) {
          var vs = fn;
          Xi(z, vs);
        }
        return Dt;
      }
      for (var Lu = r(z, Et); !_n.done; fn++, _n = Ge.next()) {
        var oa = H(Lu, z, fn, _n.value, Z);
        oa !== null && (e && oa.alternate !== null && Lu.delete(oa.key === null ? fn : oa.key), wn = u(oa, wn, fn), qe === null ? Dt = oa : qe.sibling = oa, qe = oa);
      }
      if (e && Lu.forEach(function(wN) {
        return t(z, wN);
      }), rn()) {
        var NN = fn;
        Xi(z, NN);
      }
      return Dt;
    }
    function me(z, W, $, Z) {
      if (W !== null && W.tag === j) {
        n(z, W.sibling);
        var le = i(W, $);
        return le.return = z, le;
      }
      n(z, W);
      var ie = Sv($, z.mode, Z);
      return ie.return = z, ie;
    }
    function fe(z, W, $, Z) {
      for (var le = $.key, ie = W; ie !== null; ) {
        if (ie.key === le) {
          var xe = $.type;
          if (xe === D) {
            if (ie.tag === F) {
              n(z, ie.sibling);
              var Te = i(ie, $.props.children);
              return Te.return = z, Te._debugSource = $._source, Te._debugOwner = $._owner, Te;
            }
          } else if (ie.elementType === xe || // Keep this check inline so it only runs on the false path:
          AL(ie, $) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof xe == "object" && xe !== null && xe.$$typeof === Ve && j0(xe) === ie.type) {
            n(z, ie.sibling);
            var lt = i(ie, $.props);
            return lt.ref = $l(z, ie, $), lt.return = z, lt._debugSource = $._source, lt._debugOwner = $._owner, lt;
          }
          n(z, ie);
          break;
        } else
          t(z, ie);
        ie = ie.sibling;
      }
      if ($.type === D) {
        var Ge = bi($.props.children, z.mode, Z, $.key);
        return Ge.return = z, Ge;
      } else {
        var Dt = xv($, z.mode, Z);
        return Dt.ref = $l(z, W, $), Dt.return = z, Dt;
      }
    }
    function Ie(z, W, $, Z) {
      for (var le = $.key, ie = W; ie !== null; ) {
        if (ie.key === le)
          if (ie.tag === x && ie.stateNode.containerInfo === $.containerInfo && ie.stateNode.implementation === $.implementation) {
            n(z, ie.sibling);
            var xe = i(ie, $.children || []);
            return xe.return = z, xe;
          } else {
            n(z, ie);
            break;
          }
        else
          t(z, ie);
        ie = ie.sibling;
      }
      var Te = Nv($, z.mode, Z);
      return Te.return = z, Te;
    }
    function Fe(z, W, $, Z) {
      var le = typeof $ == "object" && $ !== null && $.type === D && $.key === null;
      if (le && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Yr:
            return m(fe(z, W, $, Z));
          case Er:
            return m(Ie(z, W, $, Z));
          case Ve:
            var ie = $._payload, xe = $._init;
            return Fe(z, W, xe(ie), Z);
        }
        if (Xe($))
          return K(z, W, $, Z);
        if (ma($))
          return ae(z, W, $, Z);
        Qc(z, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? m(me(z, W, "" + $, Z)) : (typeof $ == "function" && Xc(z), n(z, W));
    }
    return Fe;
  }
  var Xo = T0(!0), D0 = T0(!1);
  function Zx(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, r = fo(n, n.pendingProps);
      for (t.child = r, r.return = t; n.sibling !== null; )
        n = n.sibling, r = r.sibling = fo(n, n.pendingProps), r.return = t;
      r.sibling = null;
    }
  }
  function e9(e, t) {
    for (var n = e.child; n !== null; )
      $S(n, t), n = n.sibling;
  }
  var jp = oi(null), Tp;
  Tp = {};
  var Zc = null, Zo = null, Dp = null, ef = !1;
  function tf() {
    Zc = null, Zo = null, Dp = null, ef = !1;
  }
  function k0() {
    ef = !0;
  }
  function O0() {
    ef = !1;
  }
  function _0(e, t, n) {
    Sn(jp, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Tp && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Tp;
  }
  function kp(e, t) {
    var n = jp.current;
    xn(jp, t), e._currentValue = n;
  }
  function Op(e, t, n) {
    for (var r = e; r !== null; ) {
      var i = r.alternate;
      if (Uo(r.childLanes, t) ? i !== null && !Uo(i.childLanes, t) && (i.childLanes = Me(i.childLanes, t)) : (r.childLanes = Me(r.childLanes, t), i !== null && (i.childLanes = Me(i.childLanes, t))), r === n)
        break;
      r = r.return;
    }
    r !== n && c("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function t9(e, t, n) {
    n9(e, t, n);
  }
  function n9(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var i = void 0, u = r.dependencies;
      if (u !== null) {
        i = r.child;
        for (var m = u.firstContext; m !== null; ) {
          if (m.context === t) {
            if (r.tag === p) {
              var g = il(n), b = ka(pt, g);
              b.tag = rf;
              var w = r.updateQueue;
              if (w !== null) {
                var E = w.shared, A = E.pending;
                A === null ? b.next = b : (b.next = A.next, A.next = b), E.pending = b;
              }
            }
            r.lanes = Me(r.lanes, n);
            var _ = r.alternate;
            _ !== null && (_.lanes = Me(_.lanes, n)), Op(r.return, n, e), u.lanes = Me(u.lanes, n);
            break;
          }
          m = m.next;
        }
      } else if (r.tag === k)
        i = r.type === e.type ? null : r.child;
      else if (r.tag === he) {
        var H = r.return;
        if (H === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        H.lanes = Me(H.lanes, n);
        var B = H.alternate;
        B !== null && (B.lanes = Me(B.lanes, n)), Op(H, n, e), i = r.sibling;
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
    Zc = e, Zo = null, Dp = null;
    var n = e.dependencies;
    if (n !== null) {
      var r = n.firstContext;
      r !== null && (er(n.lanes, t) && nu(), n.firstContext = null);
    }
  }
  function Mt(e) {
    ef && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Dp !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Zo === null) {
        if (Zc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Zo = n, Zc.dependencies = {
          lanes: q,
          firstContext: n
        };
      } else
        Zo = Zo.next = n;
    }
    return t;
  }
  var ro = null;
  function _p(e) {
    ro === null ? ro = [e] : ro.push(e);
  }
  function r9() {
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
  function A0(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, _p(t)) : (n.next = i.next, i.next = n), t.interleaved = n, nf(e, r);
  }
  function a9(e, t, n, r) {
    var i = t.interleaved;
    i === null ? (n.next = n, _p(t)) : (n.next = i.next, i.next = n), t.interleaved = n;
  }
  function i9(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, _p(t)) : (n.next = i.next, i.next = n), t.interleaved = n, nf(e, r);
  }
  function $n(e, t) {
    return nf(e, t);
  }
  var o9 = nf;
  function nf(e, t) {
    e.lanes = Me(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Me(n.lanes, t)), n === null && (e.flags & (At | ba)) !== ye && DL(e);
    for (var r = e, i = e.return; i !== null; )
      i.childLanes = Me(i.childLanes, t), n = i.alternate, n !== null ? n.childLanes = Me(n.childLanes, t) : (i.flags & (At | ba)) !== ye && DL(e), r = i, i = i.return;
    if (r.tag === L) {
      var u = r.stateNode;
      return u;
    } else
      return null;
  }
  var M0 = 0, P0 = 1, rf = 2, Ap = 3, af = !1, Mp, of;
  Mp = !1, of = null;
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
  function U0(e, t) {
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
  function ka(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: M0,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function ci(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    var i = r.shared;
    if (of === i && !Mp && (c("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Mp = !0), aS()) {
      var u = i.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, o9(e, n);
    } else
      return i9(e, i, t, n);
  }
  function sf(e, t, n) {
    var r = t.updateQueue;
    if (r !== null) {
      var i = r.shared;
      if (q1(n)) {
        var u = i.lanes;
        u = X1(u, e.pendingLanes);
        var m = Me(u, n);
        i.lanes = m, jm(e, m);
      }
    }
  }
  function Up(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null) {
      var i = r.updateQueue;
      if (n === i) {
        var u = null, m = null, g = n.firstBaseUpdate;
        if (g !== null) {
          var b = g;
          do {
            var w = {
              eventTime: b.eventTime,
              lane: b.lane,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null
            };
            m === null ? u = m = w : (m.next = w, m = w), b = b.next;
          } while (b !== null);
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
    var E = n.lastBaseUpdate;
    E === null ? n.firstBaseUpdate = t : E.next = t, n.lastBaseUpdate = t;
  }
  function s9(e, t, n, r, i, u) {
    switch (n.tag) {
      case P0: {
        var m = n.payload;
        if (typeof m == "function") {
          k0();
          var g = m.call(u, r, i);
          {
            if (e.mode & Ct) {
              Xt(!0);
              try {
                m.call(u, r, i);
              } finally {
                Xt(!1);
              }
            }
            O0();
          }
          return g;
        }
        return m;
      }
      case Ap:
        e.flags = e.flags & ~Tn | Ze;
      case M0: {
        var b = n.payload, w;
        if (typeof b == "function") {
          k0(), w = b.call(u, r, i);
          {
            if (e.mode & Ct) {
              Xt(!0);
              try {
                b.call(u, r, i);
              } finally {
                Xt(!1);
              }
            }
            O0();
          }
        } else
          w = b;
        return w == null ? r : ze({}, r, w);
      }
      case rf:
        return af = !0, r;
    }
    return r;
  }
  function lf(e, t, n, r) {
    var i = e.updateQueue;
    af = !1, of = i.shared;
    var u = i.firstBaseUpdate, m = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var b = g, w = b.next;
      b.next = null, m === null ? u = w : m.next = w, m = b;
      var E = e.alternate;
      if (E !== null) {
        var A = E.updateQueue, _ = A.lastBaseUpdate;
        _ !== m && (_ === null ? A.firstBaseUpdate = w : _.next = w, A.lastBaseUpdate = b);
      }
    }
    if (u !== null) {
      var H = i.baseState, B = q, K = null, ae = null, me = null, fe = u;
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
          H = s9(e, i, fe, H, t, n);
          var $ = fe.callback;
          if ($ !== null && // If the update was already committed, we should not queue its
          // callback again.
          fe.lane !== Zt) {
            e.flags |= Gd;
            var Z = i.effects;
            Z === null ? i.effects = [fe] : Z.push(fe);
          }
        } else {
          var z = {
            eventTime: Fe,
            lane: Ie,
            tag: fe.tag,
            payload: fe.payload,
            callback: fe.callback,
            next: null
          };
          me === null ? (ae = me = z, K = H) : me = me.next = z, B = Me(B, Ie);
        }
        if (fe = fe.next, fe === null) {
          if (g = i.shared.pending, g === null)
            break;
          var le = g, ie = le.next;
          le.next = null, fe = ie, i.lastBaseUpdate = le, i.shared.pending = null;
        }
      } while (!0);
      me === null && (K = H), i.baseState = K, i.firstBaseUpdate = ae, i.lastBaseUpdate = me;
      var xe = i.shared.interleaved;
      if (xe !== null) {
        var Te = xe;
        do
          B = Me(B, Te.lane), Te = Te.next;
        while (Te !== xe);
      } else u === null && (i.shared.lanes = q);
      pu(B), e.lanes = B, e.memoizedState = H;
    }
    of = null;
  }
  function l9(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function V0() {
    af = !1;
  }
  function uf() {
    return af;
  }
  function F0(e, t, n) {
    var r = t.effects;
    if (t.effects = null, r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i], m = u.callback;
        m !== null && (u.callback = null, l9(m, n));
      }
  }
  var Hl = {}, fi = oi(Hl), Jl = oi(Hl), cf = oi(Hl);
  function ff(e) {
    if (e === Hl)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function z0() {
    var e = ff(cf.current);
    return e;
  }
  function Vp(e, t) {
    Sn(cf, t, e), Sn(Jl, e, e), Sn(fi, Hl, e);
    var n = C6(t);
    xn(fi, e), Sn(fi, n, e);
  }
  function ts(e) {
    xn(fi, e), xn(Jl, e), xn(cf, e);
  }
  function Fp() {
    var e = ff(fi.current);
    return e;
  }
  function $0(e) {
    ff(cf.current);
    var t = ff(fi.current), n = E6(t, e.type);
    t !== n && (Sn(Jl, e, e), Sn(fi, n, e));
  }
  function zp(e) {
    Jl.current === e && (xn(fi, e), xn(Jl, e));
  }
  var u9 = 0, H0 = 1, J0 = 1, Bl = 2, Mr = oi(u9);
  function $p(e, t) {
    return (e & t) !== 0;
  }
  function ns(e) {
    return e & H0;
  }
  function Hp(e, t) {
    return e & H0 | t;
  }
  function c9(e, t) {
    return e | t;
  }
  function di(e, t) {
    Sn(Mr, t, e);
  }
  function rs(e) {
    xn(Mr, e);
  }
  function f9(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function df(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === P) {
        var n = t.memoizedState;
        if (n !== null) {
          var r = n.dehydrated;
          if (r === null || o0(r) || op(r))
            return t;
        }
      } else if (t.tag === Le && // revealOrder undefined can't be trusted because it don't
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
  ), Jp = [];
  function Bp() {
    for (var e = 0; e < Jp.length; e++) {
      var t = Jp[e];
      t._workInProgressVersionPrimary = null;
    }
    Jp.length = 0;
  }
  function d9(e, t) {
    var n = t._getVersion, r = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
  }
  var se = s.ReactCurrentDispatcher, Il = s.ReactCurrentBatchConfig, Ip, as;
  Ip = /* @__PURE__ */ new Set();
  var ao = q, st = null, $t = null, Ht = null, mf = !1, Yl = !1, Kl = 0, m9 = 0, p9 = 25, G = null, yr = null, mi = -1, Yp = !1;
  function tt() {
    {
      var e = G;
      yr === null ? yr = [e] : yr.push(e);
    }
  }
  function te() {
    {
      var e = G;
      yr !== null && (mi++, yr[mi] !== e && h9(e));
    }
  }
  function is(e) {
    e != null && !Xe(e) && c("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
  }
  function h9(e) {
    {
      var t = _e(st);
      if (!Ip.has(t) && (Ip.add(t), yr !== null)) {
        for (var n = "", r = 30, i = 0; i <= mi; i++) {
          for (var u = yr[i], m = i === mi ? e : u, g = i + 1 + ". " + u; g.length < r; )
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
  function Nn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Kp(e, t) {
    if (Yp)
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
    ao = u, st = t, yr = e !== null ? e._debugHookTypes : null, mi = -1, Yp = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? se.current = fy : yr !== null ? se.current = cy : se.current = uy;
    var m = n(r, i);
    if (Yl) {
      var g = 0;
      do {
        if (Yl = !1, Kl = 0, g >= p9)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        g += 1, Yp = !1, $t = null, Ht = null, t.updateQueue = null, mi = -1, se.current = dy, m = n(r, i);
      } while (Yl);
    }
    se.current = Ef, t._debugHookTypes = yr;
    var b = $t !== null && $t.next !== null;
    if (ao = q, st = null, $t = null, Ht = null, G = null, yr = null, mi = -1, e !== null && (e.flags & Sa) !== (t.flags & Sa) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Je) !== ve && c("Internal React error: Expected static flag was missing. Please notify the React team."), mf = !1, b)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return m;
  }
  function ss() {
    var e = Kl !== 0;
    return Kl = 0, e;
  }
  function B0(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Gr) !== ve ? t.flags &= ~(oc | xa | Tr | Ye) : t.flags &= ~(Tr | Ye), e.lanes = mc(e.lanes, n);
  }
  function I0() {
    if (se.current = Ef, mf) {
      for (var e = st.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mf = !1;
    }
    ao = q, st = null, $t = null, Ht = null, yr = null, mi = -1, G = null, ay = !1, Yl = !1, Kl = 0;
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
  function Lr() {
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
  function Y0() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Wp(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gp(e, t, n) {
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
    var m = u.dispatch = L9.bind(null, st, u);
    return [r.memoizedState, m];
  }
  function qp(e, t, n) {
    var r = Lr(), i = r.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = $t, m = u.baseQueue, g = i.pending;
    if (g !== null) {
      if (m !== null) {
        var b = m.next, w = g.next;
        m.next = w, g.next = b;
      }
      u.baseQueue !== m && c("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = m = g, i.pending = null;
    }
    if (m !== null) {
      var E = m.next, A = u.baseState, _ = null, H = null, B = null, K = E;
      do {
        var ae = K.lane;
        if (Uo(ao, ae)) {
          if (B !== null) {
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
            B = B.next = fe;
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
          B === null ? (H = B = me, _ = A) : B = B.next = me, st.lanes = Me(st.lanes, ae), pu(ae);
        }
        K = K.next;
      } while (K !== null && K !== E);
      B === null ? _ = A : B.next = H, rr(A, r.memoizedState) || nu(), r.memoizedState = A, r.baseState = _, r.baseQueue = B, i.lastRenderedState = A;
    }
    var Fe = i.interleaved;
    if (Fe !== null) {
      var z = Fe;
      do {
        var W = z.lane;
        st.lanes = Me(st.lanes, W), pu(W), z = z.next;
      } while (z !== Fe);
    } else m === null && (i.lanes = q);
    var $ = i.dispatch;
    return [r.memoizedState, $];
  }
  function Qp(e, t, n) {
    var r = Lr(), i = r.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = i.dispatch, m = i.pending, g = r.memoizedState;
    if (m !== null) {
      i.pending = null;
      var b = m.next, w = b;
      do {
        var E = w.action;
        g = e(g, E), w = w.next;
      } while (w !== b);
      rr(g, r.memoizedState) || nu(), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), i.lastRenderedState = g;
    }
    return [g, u];
  }
  function FT(e, t, n) {
  }
  function zT(e, t, n) {
  }
  function Xp(e, t, n) {
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
      var b = If();
      if (b === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      dc(b, ao) || K0(r, t, u);
    }
    i.memoizedState = u;
    var w = {
      value: u,
      getSnapshot: t
    };
    return i.queue = w, yf(G0.bind(null, r, w, e), [e]), r.flags |= Tr, Wl(Ft | an, W0.bind(null, r, w, u, t), void 0, null), u;
  }
  function pf(e, t, n) {
    var r = st, i = Lr(), u = t();
    if (!as) {
      var m = t();
      rr(u, m) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), as = !0);
    }
    var g = i.memoizedState, b = !rr(g, u);
    b && (i.memoizedState = u, nu());
    var w = i.queue;
    if (ql(G0.bind(null, r, w, e), [e]), w.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Ht !== null && Ht.memoizedState.tag & Ft) {
      r.flags |= Tr, Wl(Ft | an, W0.bind(null, r, w, u, t), void 0, null);
      var E = If();
      if (E === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      dc(E, ao) || K0(r, t, u);
    }
    return u;
  }
  function K0(e, t, n) {
    e.flags |= ic;
    var r = {
      getSnapshot: t,
      value: n
    }, i = st.updateQueue;
    if (i === null)
      i = Y0(), st.updateQueue = i, i.stores = [r];
    else {
      var u = i.stores;
      u === null ? i.stores = [r] : u.push(r);
    }
  }
  function W0(e, t, n, r) {
    t.value = n, t.getSnapshot = r, q0(t) && Q0(e);
  }
  function G0(e, t, n) {
    var r = function() {
      q0(t) && Q0(e);
    };
    return n(r);
  }
  function q0(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var r = t();
      return !rr(n, r);
    } catch {
      return !0;
    }
  }
  function Q0(e) {
    var t = $n(e, Re);
    t !== null && Yt(t, e, Re, pt);
  }
  function hf(e) {
    var t = ea();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: Wp,
      lastRenderedState: e
    };
    t.queue = n;
    var r = n.dispatch = b9.bind(null, st, n);
    return [t.memoizedState, r];
  }
  function Zp(e) {
    return qp(Wp);
  }
  function eh(e) {
    return Qp(Wp);
  }
  function Wl(e, t, n, r) {
    var i = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      // Circular
      next: null
    }, u = st.updateQueue;
    if (u === null)
      u = Y0(), st.updateQueue = u, u.lastEffect = i.next = i;
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
  function th(e) {
    var t = ea();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function vf(e) {
    var t = Lr();
    return t.memoizedState;
  }
  function Gl(e, t, n, r) {
    var i = ea(), u = r === void 0 ? null : r;
    st.flags |= e, i.memoizedState = Wl(Ft | t, n, void 0, u);
  }
  function gf(e, t, n, r) {
    var i = Lr(), u = r === void 0 ? null : r, m = void 0;
    if ($t !== null) {
      var g = $t.memoizedState;
      if (m = g.destroy, u !== null) {
        var b = g.deps;
        if (Kp(u, b)) {
          i.memoizedState = Wl(t, n, m, u);
          return;
        }
      }
    }
    st.flags |= e, i.memoizedState = Wl(Ft | t, n, m, u);
  }
  function yf(e, t) {
    return (st.mode & Gr) !== ve ? Gl(oc | Tr | Xd, an, e, t) : Gl(Tr | Xd, an, e, t);
  }
  function ql(e, t) {
    return gf(Tr, an, e, t);
  }
  function nh(e, t) {
    return Gl(Ye, Zr, e, t);
  }
  function Lf(e, t) {
    return gf(Ye, Zr, e, t);
  }
  function rh(e, t) {
    var n = Ye;
    return n |= $i, (st.mode & Gr) !== ve && (n |= xa), Gl(n, zt, e, t);
  }
  function bf(e, t) {
    return gf(Ye, zt, e, t);
  }
  function X0(e, t) {
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
  function ah(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null, i = Ye;
    return i |= $i, (st.mode & Gr) !== ve && (i |= xa), Gl(i, zt, X0.bind(null, t, e), r);
  }
  function xf(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null;
    return gf(Ye, zt, X0.bind(null, t, e), r);
  }
  function v9(e, t) {
  }
  var Sf = v9;
  function ih(e, t) {
    var n = ea(), r = t === void 0 ? null : t;
    return n.memoizedState = [e, r], e;
  }
  function Nf(e, t) {
    var n = Lr(), r = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && r !== null) {
      var u = i[1];
      if (Kp(r, u))
        return i[0];
    }
    return n.memoizedState = [e, r], e;
  }
  function oh(e, t) {
    var n = ea(), r = t === void 0 ? null : t, i = e();
    return n.memoizedState = [i, r], i;
  }
  function wf(e, t) {
    var n = Lr(), r = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && r !== null) {
      var u = i[1];
      if (Kp(r, u))
        return i[0];
    }
    var m = e();
    return n.memoizedState = [m, r], m;
  }
  function sh(e) {
    var t = ea();
    return t.memoizedState = e, e;
  }
  function Z0(e) {
    var t = Lr(), n = $t, r = n.memoizedState;
    return ty(t, r, e);
  }
  function ey(e) {
    var t = Lr();
    if ($t === null)
      return t.memoizedState = e, e;
    var n = $t.memoizedState;
    return ty(t, n, e);
  }
  function ty(e, t, n) {
    var r = !t8(ao);
    if (r) {
      if (!rr(n, t)) {
        var i = Q1();
        st.lanes = Me(st.lanes, i), pu(i), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, nu()), e.memoizedState = n, n;
  }
  function g9(e, t, n) {
    var r = kr();
    en(c8(r, wa)), e(!0);
    var i = Il.transition;
    Il.transition = {};
    var u = Il.transition;
    Il.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (en(r), Il.transition = i, i === null && u._updatedFibers) {
        var m = u._updatedFibers.size;
        m > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function lh() {
    var e = hf(!1), t = e[0], n = e[1], r = g9.bind(null, n), i = ea();
    return i.memoizedState = r, [t, r];
  }
  function ny() {
    var e = Zp(), t = e[0], n = Lr(), r = n.memoizedState;
    return [t, r];
  }
  function ry() {
    var e = eh(), t = e[0], n = Lr(), r = n.memoizedState;
    return [t, r];
  }
  var ay = !1;
  function y9() {
    return ay;
  }
  function uh() {
    var e = ea(), t = If(), n = t.identifierPrefix, r;
    if (rn()) {
      var i = Mx();
      r = ":" + n + "R" + i;
      var u = Kl++;
      u > 0 && (r += "H" + u.toString(32)), r += ":";
    } else {
      var m = m9++;
      r = ":" + n + "r" + m.toString(32) + ":";
    }
    return e.memoizedState = r, r;
  }
  function Cf() {
    var e = Lr(), t = e.memoizedState;
    return t;
  }
  function L9(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = yi(e), i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iy(e))
      oy(t, i);
    else {
      var u = A0(e, t, i, r);
      if (u !== null) {
        var m = On();
        Yt(u, e, r, m), sy(u, t, r);
      }
    }
    ly(e, r);
  }
  function b9(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = yi(e), i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iy(e))
      oy(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === q && (u === null || u.lanes === q)) {
        var m = t.lastRenderedReducer;
        if (m !== null) {
          var g;
          g = se.current, se.current = Pr;
          try {
            var b = t.lastRenderedState, w = m(b, n);
            if (i.hasEagerState = !0, i.eagerState = w, rr(w, b)) {
              a9(e, t, i, r);
              return;
            }
          } catch {
          } finally {
            se.current = g;
          }
        }
      }
      var E = A0(e, t, i, r);
      if (E !== null) {
        var A = On();
        Yt(E, e, r, A), sy(E, t, r);
      }
    }
    ly(e, r);
  }
  function iy(e) {
    var t = e.alternate;
    return e === st || t !== null && t === st;
  }
  function oy(e, t) {
    Yl = mf = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sy(e, t, n) {
    if (q1(n)) {
      var r = t.lanes;
      r = X1(r, e.pendingLanes);
      var i = Me(r, n);
      t.lanes = i, jm(e, i);
    }
  }
  function ly(e, t, n) {
    rm(e, t);
  }
  var Ef = {
    readContext: Mt,
    useCallback: Nn,
    useContext: Nn,
    useEffect: Nn,
    useImperativeHandle: Nn,
    useInsertionEffect: Nn,
    useLayoutEffect: Nn,
    useMemo: Nn,
    useReducer: Nn,
    useRef: Nn,
    useState: Nn,
    useDebugValue: Nn,
    useDeferredValue: Nn,
    useTransition: Nn,
    useMutableSource: Nn,
    useSyncExternalStore: Nn,
    useId: Nn,
    unstable_isNewReconciler: Qe
  }, uy = null, cy = null, fy = null, dy = null, ta = null, Pr = null, Rf = null;
  {
    var ch = function() {
      c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, je = function() {
      c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    uy = {
      readContext: function(e) {
        return Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", tt(), is(t), ih(e, t);
      },
      useContext: function(e) {
        return G = "useContext", tt(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", tt(), is(t), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", tt(), is(n), ah(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", tt(), is(t), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", tt(), is(t), rh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", tt(), is(t);
        var n = se.current;
        se.current = ta;
        try {
          return oh(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", tt();
        var r = se.current;
        se.current = ta;
        try {
          return Gp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", tt(), th(e);
      },
      useState: function(e) {
        G = "useState", tt();
        var t = se.current;
        se.current = ta;
        try {
          return hf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", tt(), sh(e);
      },
      useTransition: function() {
        return G = "useTransition", tt(), lh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", tt(), Xp(e, t, n);
      },
      useId: function() {
        return G = "useId", tt(), uh();
      },
      unstable_isNewReconciler: Qe
    }, cy = {
      readContext: function(e) {
        return Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), ih(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), ah(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), rh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = ta;
        try {
          return oh(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var r = se.current;
        se.current = ta;
        try {
          return Gp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), th(e);
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = ta;
        try {
          return hf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), sh(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), lh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), Xp(e, t, n);
      },
      useId: function() {
        return G = "useId", te(), uh();
      },
      unstable_isNewReconciler: Qe
    }, fy = {
      readContext: function(e) {
        return Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Pr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var r = se.current;
        se.current = Pr;
        try {
          return qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), vf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Pr;
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
        return G = "useDeferredValue", te(), Z0(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), ny();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), pf(e, t);
      },
      useId: function() {
        return G = "useId", te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, dy = {
      readContext: function(e) {
        return Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), Lf(e, t);
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
          return Qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), vf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Rf;
        try {
          return eh(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), ey(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), ry();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), pf(e, t);
      },
      useId: function() {
        return G = "useId", te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, ta = {
      readContext: function(e) {
        return ch(), Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", je(), tt(), ih(e, t);
      },
      useContext: function(e) {
        return G = "useContext", je(), tt(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", je(), tt(), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", je(), tt(), ah(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", je(), tt(), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", je(), tt(), rh(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", je(), tt();
        var n = se.current;
        se.current = ta;
        try {
          return oh(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", je(), tt();
        var r = se.current;
        se.current = ta;
        try {
          return Gp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", je(), tt(), th(e);
      },
      useState: function(e) {
        G = "useState", je(), tt();
        var t = se.current;
        se.current = ta;
        try {
          return hf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", je(), tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", je(), tt(), sh(e);
      },
      useTransition: function() {
        return G = "useTransition", je(), tt(), lh();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", je(), tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", je(), tt(), Xp(e, t, n);
      },
      useId: function() {
        return G = "useId", je(), tt(), uh();
      },
      unstable_isNewReconciler: Qe
    }, Pr = {
      readContext: function(e) {
        return ch(), Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", je(), te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", je(), te(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", je(), te(), ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", je(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", je(), te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", je(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", je(), te();
        var n = se.current;
        se.current = Pr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", je(), te();
        var r = se.current;
        se.current = Pr;
        try {
          return qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", je(), te(), vf();
      },
      useState: function(e) {
        G = "useState", je(), te();
        var t = se.current;
        se.current = Pr;
        try {
          return Zp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", je(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", je(), te(), Z0(e);
      },
      useTransition: function() {
        return G = "useTransition", je(), te(), ny();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", je(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", je(), te(), pf(e, t);
      },
      useId: function() {
        return G = "useId", je(), te(), Cf();
      },
      unstable_isNewReconciler: Qe
    }, Rf = {
      readContext: function(e) {
        return ch(), Mt(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", je(), te(), Nf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", je(), te(), Mt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", je(), te(), ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", je(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", je(), te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", je(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", je(), te();
        var n = se.current;
        se.current = Pr;
        try {
          return wf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", je(), te();
        var r = se.current;
        se.current = Pr;
        try {
          return Qp(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return G = "useRef", je(), te(), vf();
      },
      useState: function(e) {
        G = "useState", je(), te();
        var t = se.current;
        se.current = Pr;
        try {
          return eh(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", je(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", je(), te(), ey(e);
      },
      useTransition: function() {
        return G = "useTransition", je(), te(), ry();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", je(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", je(), te(), pf(e, t);
      },
      useId: function() {
        return G = "useId", je(), te(), Cf();
      },
      unstable_isNewReconciler: Qe
    };
  }
  var pi = a.unstable_now, my = 0, jf = -1, Ql = -1, Tf = -1, fh = !1, Df = !1;
  function py() {
    return fh;
  }
  function x9() {
    Df = !0;
  }
  function S9() {
    fh = !1, Df = !1;
  }
  function N9() {
    fh = Df, Df = !1;
  }
  function hy() {
    return my;
  }
  function vy() {
    my = pi();
  }
  function dh(e) {
    Ql = pi(), e.actualStartTime < 0 && (e.actualStartTime = pi());
  }
  function gy(e) {
    Ql = -1;
  }
  function kf(e, t) {
    if (Ql >= 0) {
      var n = pi() - Ql;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Ql = -1;
    }
  }
  function na(e) {
    if (jf >= 0) {
      var t = pi() - jf;
      jf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
          case R:
            var i = n.stateNode;
            i.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function mh(e) {
    if (Tf >= 0) {
      var t = pi() - Tf;
      Tf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
          case R:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function ra() {
    jf = pi();
  }
  function ph() {
    Tf = pi();
  }
  function hh(e) {
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
  var vh = {}, gh, yh, Lh, bh, xh, yy, Of, Sh, Nh, wh, Xl;
  {
    gh = /* @__PURE__ */ new Set(), yh = /* @__PURE__ */ new Set(), Lh = /* @__PURE__ */ new Set(), bh = /* @__PURE__ */ new Set(), Sh = /* @__PURE__ */ new Set(), xh = /* @__PURE__ */ new Set(), Nh = /* @__PURE__ */ new Set(), wh = /* @__PURE__ */ new Set(), Xl = /* @__PURE__ */ new Set();
    var Ly = /* @__PURE__ */ new Set();
    Of = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Ly.has(n) || (Ly.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, yy = function(e, t) {
      if (t === void 0) {
        var n = Ke(e) || "Component";
        xh.has(n) || (xh.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(vh, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(vh);
  }
  function Ch(e, t, n, r) {
    var i = e.memoizedState, u = n(r, i);
    {
      if (e.mode & Ct) {
        Xt(!0);
        try {
          u = n(r, i);
        } finally {
          Xt(!1);
        }
      }
      yy(t, u);
    }
    var m = u == null ? i : ze({}, i, u);
    if (e.memoizedState = m, e.lanes === q) {
      var g = e.updateQueue;
      g.baseState = m;
    }
  }
  var Eh = {
    isMounted: p5,
    enqueueSetState: function(e, t, n) {
      var r = To(e), i = On(), u = yi(r), m = ka(i, u);
      m.payload = t, n != null && (Of(n, "setState"), m.callback = n);
      var g = ci(r, m, u);
      g !== null && (Yt(g, r, u, i), sf(g, r, u)), rm(r, u);
    },
    enqueueReplaceState: function(e, t, n) {
      var r = To(e), i = On(), u = yi(r), m = ka(i, u);
      m.tag = P0, m.payload = t, n != null && (Of(n, "replaceState"), m.callback = n);
      var g = ci(r, m, u);
      g !== null && (Yt(g, r, u, i), sf(g, r, u)), rm(r, u);
    },
    enqueueForceUpdate: function(e, t) {
      var n = To(e), r = On(), i = yi(n), u = ka(r, i);
      u.tag = rf, t != null && (Of(t, "forceUpdate"), u.callback = t);
      var m = ci(n, u, i);
      m !== null && (Yt(m, n, i, r), sf(m, n, i)), I5(n, i);
    }
  };
  function by(e, t, n, r, i, u, m) {
    var g = e.stateNode;
    if (typeof g.shouldComponentUpdate == "function") {
      var b = g.shouldComponentUpdate(r, u, m);
      {
        if (e.mode & Ct) {
          Xt(!0);
          try {
            b = g.shouldComponentUpdate(r, u, m);
          } finally {
            Xt(!1);
          }
        }
        b === void 0 && c("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ke(t) || "Component");
      }
      return b;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !bl(n, r) || !bl(i, u) : !0;
  }
  function w9(e, t, n) {
    var r = e.stateNode;
    {
      var i = Ke(t) || "Component", u = r.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), r.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), r.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), t.childContextTypes && !Xl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Ct) === ve && (Xl.add(t), c(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), t.contextTypes && !Xl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Ct) === ve && (Xl.add(t), c(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), r.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !Nh.has(t) && (Nh.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof r.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ke(t) || "A pure component"), typeof r.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof r.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof r.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof r.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
      var m = r.props !== n;
      r.props !== void 0 && m && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), r.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Lh.has(t) && (Lh.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ke(t))), typeof r.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof r.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
      var g = r.state;
      g && (typeof g != "object" || Xe(g)) && c("%s.state: must be set to an object or null", i), typeof r.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
    }
  }
  function xy(e, t) {
    t.updater = Eh, e.stateNode = t, u5(t, e), t._reactInternalInstance = vh;
  }
  function Sy(e, t, n) {
    var r = !1, i = ar, u = ar, m = t.contextType;
    if ("contextType" in t) {
      var g = (
        // Allow null for conditional declaration
        m === null || m !== void 0 && m.$$typeof === $e && m._context === void 0
      );
      if (!g && !wh.has(t)) {
        wh.add(t);
        var b = "";
        m === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? b = " However, it is set to a " + typeof m + "." : m.$$typeof === ge ? b = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ke(t) || "Component", b);
      }
    }
    if (typeof m == "object" && m !== null)
      u = Mt(m);
    else {
      i = Ko(e, t, !0);
      var w = t.contextTypes;
      r = w != null, u = r ? Wo(e, i) : ar;
    }
    var E = new t(n, u);
    if (e.mode & Ct) {
      Xt(!0);
      try {
        E = new t(n, u);
      } finally {
        Xt(!1);
      }
    }
    var A = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
    xy(e, E);
    {
      if (typeof t.getDerivedStateFromProps == "function" && A === null) {
        var _ = Ke(t) || "Component";
        yh.has(_) || (yh.add(_), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, E.state === null ? "null" : "undefined", _));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
        var H = null, B = null, K = null;
        if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), H !== null || B !== null || K !== null) {
          var ae = Ke(t) || "Component", me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          bh.has(ae) || (bh.add(ae), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, me, H !== null ? `
  ` + H : "", B !== null ? `
  ` + B : "", K !== null ? `
  ` + K : ""));
        }
      }
    }
    return r && f0(e, i, u), E;
  }
  function C9(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", _e(e) || "Component"), Eh.enqueueReplaceState(t, t.state, null));
  }
  function Ny(e, t, n, r) {
    var i = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== i) {
      {
        var u = _e(e) || "Component";
        gh.has(u) || (gh.add(u), c("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      Eh.enqueueReplaceState(t, t.state, null);
    }
  }
  function Rh(e, t, n, r) {
    w9(e, t, n);
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Pp(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      i.context = Mt(u);
    else {
      var m = Ko(e, t, !0);
      i.context = Wo(e, m);
    }
    {
      if (i.state === n) {
        var g = Ke(t) || "Component";
        Sh.has(g) || (Sh.add(g), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
      }
      e.mode & Ct && Ar.recordLegacyContextWarning(e, i), Ar.recordUnsafeLifecycleWarnings(e, i);
    }
    i.state = e.memoizedState;
    var b = t.getDerivedStateFromProps;
    if (typeof b == "function" && (Ch(e, t, b, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (C9(e, i), lf(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function") {
      var w = Ye;
      w |= $i, (e.mode & Gr) !== ve && (w |= xa), e.flags |= w;
    }
  }
  function E9(e, t, n, r) {
    var i = e.stateNode, u = e.memoizedProps;
    i.props = u;
    var m = i.context, g = t.contextType, b = ar;
    if (typeof g == "object" && g !== null)
      b = Mt(g);
    else {
      var w = Ko(e, t, !0);
      b = Wo(e, w);
    }
    var E = t.getDerivedStateFromProps, A = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !A && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== n || m !== b) && Ny(e, i, n, b), V0();
    var _ = e.memoizedState, H = i.state = _;
    if (lf(e, n, i, r), H = e.memoizedState, u === n && _ === H && !Hc() && !uf()) {
      if (typeof i.componentDidMount == "function") {
        var B = Ye;
        B |= $i, (e.mode & Gr) !== ve && (B |= xa), e.flags |= B;
      }
      return !1;
    }
    typeof E == "function" && (Ch(e, t, E, n), H = e.memoizedState);
    var K = uf() || by(e, t, u, n, _, H, b);
    if (K) {
      if (!A && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function") {
        var ae = Ye;
        ae |= $i, (e.mode & Gr) !== ve && (ae |= xa), e.flags |= ae;
      }
    } else {
      if (typeof i.componentDidMount == "function") {
        var me = Ye;
        me |= $i, (e.mode & Gr) !== ve && (me |= xa), e.flags |= me;
      }
      e.memoizedProps = n, e.memoizedState = H;
    }
    return i.props = n, i.state = H, i.context = b, K;
  }
  function R9(e, t, n, r, i) {
    var u = t.stateNode;
    U0(e, t);
    var m = t.memoizedProps, g = t.type === t.elementType ? m : Ur(t.type, m);
    u.props = g;
    var b = t.pendingProps, w = u.context, E = n.contextType, A = ar;
    if (typeof E == "object" && E !== null)
      A = Mt(E);
    else {
      var _ = Ko(t, n, !0);
      A = Wo(t, _);
    }
    var H = n.getDerivedStateFromProps, B = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !B && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (m !== b || w !== A) && Ny(t, u, r, A), V0();
    var K = t.memoizedState, ae = u.state = K;
    if (lf(t, r, u, i), ae = t.memoizedState, m === b && K === ae && !Hc() && !uf() && !kt)
      return typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fi), !1;
    typeof H == "function" && (Ch(t, n, H, r), ae = t.memoizedState);
    var me = uf() || by(t, n, g, r, K, ae, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    kt;
    return me ? (!B && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, ae, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, ae, A)), typeof u.componentDidUpdate == "function" && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= Fi)) : (typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ye), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fi), t.memoizedProps = r, t.memoizedState = ae), u.props = r, u.state = ae, u.context = A, me;
  }
  function io(e, t) {
    return {
      value: e,
      source: t,
      stack: Fs(t),
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
  function j9(e, t) {
    return !0;
  }
  function Th(e, t) {
    try {
      var n = j9(e, t);
      if (n === !1)
        return;
      var r = t.value, i = t.source, u = t.stack, m = u !== null ? u : "";
      if (r != null && r._suppressLogging) {
        if (e.tag === p)
          return;
        console.error(r);
      }
      var g = i ? _e(i) : null, b = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
      if (e.tag === L)
        w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var E = _e(e) || "Anonymous";
        w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
      }
      var A = b + `
` + m + `

` + ("" + w);
      console.error(A);
    } catch (_) {
      setTimeout(function() {
        throw _;
      });
    }
  }
  var T9 = typeof WeakMap == "function" ? WeakMap : Map;
  function wy(e, t, n) {
    var r = ka(pt, n);
    r.tag = Ap, r.payload = {
      element: null
    };
    var i = t.value;
    return r.callback = function() {
      xS(i), Th(e, t);
    }, r;
  }
  function Dh(e, t, n) {
    var r = ka(pt, n);
    r.tag = Ap;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = t.value;
      r.payload = function() {
        return i(u);
      }, r.callback = function() {
        ML(e), Th(e, t);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (r.callback = function() {
      ML(e), Th(e, t), typeof i != "function" && LS(this);
      var b = t.value, w = t.stack;
      this.componentDidCatch(b, {
        componentStack: w !== null ? w : ""
      }), typeof i != "function" && (er(e.lanes, Re) || c("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", _e(e) || "Unknown"));
    }), r;
  }
  function Cy(e, t, n) {
    var r = e.pingCache, i;
    if (r === null ? (r = e.pingCache = new T9(), i = /* @__PURE__ */ new Set(), r.set(t, i)) : (i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i))), !i.has(n)) {
      i.add(n);
      var u = SS.bind(null, e, t, n);
      Dr && hu(e, n), t.then(u, u);
    }
  }
  function D9(e, t, n, r) {
    var i = e.updateQueue;
    if (i === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(n), e.updateQueue = u;
    } else
      i.add(n);
  }
  function k9(e, t) {
    var n = e.tag;
    if ((e.mode & Je) === ve && (n === h || n === V || n === X)) {
      var r = e.alternate;
      r ? (e.updateQueue = r.updateQueue, e.memoizedState = r.memoizedState, e.lanes = r.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function Ey(e) {
    var t = e;
    do {
      if (t.tag === P && f9(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Ry(e, t, n, r, i) {
    if ((e.mode & Je) === ve) {
      if (e === t)
        e.flags |= Tn;
      else {
        if (e.flags |= Ze, n.flags |= qd, n.flags &= ~(c5 | Qs), n.tag === p) {
          var u = n.alternate;
          if (u === null)
            n.tag = ke;
          else {
            var m = ka(pt, Re);
            m.tag = rf, ci(n, m, Re);
          }
        }
        n.lanes = Me(n.lanes, Re);
      }
      return e;
    }
    return e.flags |= Tn, e.lanes = i, e;
  }
  function O9(e, t, n, r, i) {
    if (n.flags |= Qs, Dr && hu(e, i), r !== null && typeof r == "object" && typeof r.then == "function") {
      var u = r;
      k9(n), rn() && n.mode & Je && y0();
      var m = Ey(t);
      if (m !== null) {
        m.flags &= ~La, Ry(m, t, n, e, i), m.mode & Je && Cy(e, u, i), D9(m, e, u);
        return;
      } else {
        if (!e8(i)) {
          Cy(e, u, i), uv();
          return;
        }
        var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        r = g;
      }
    } else if (rn() && n.mode & Je) {
      y0();
      var b = Ey(t);
      if (b !== null) {
        (b.flags & Tn) === ye && (b.flags |= La), Ry(b, t, n, e, i), Sp(io(r, n));
        return;
      }
    }
    r = io(r, n), fS(r);
    var w = t;
    do {
      switch (w.tag) {
        case L: {
          var E = r;
          w.flags |= Tn;
          var A = il(i);
          w.lanes = Me(w.lanes, A);
          var _ = wy(w, E, A);
          Up(w, _);
          return;
        }
        case p:
          var H = r, B = w.type, K = w.stateNode;
          if ((w.flags & Ze) === ye && (typeof B.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !EL(K))) {
            w.flags |= Tn;
            var ae = il(i);
            w.lanes = Me(w.lanes, ae);
            var me = Dh(w, H, ae);
            Up(w, me);
            return;
          }
          break;
      }
      w = w.return;
    } while (w !== null);
  }
  function _9() {
    return null;
  }
  var Zl = s.ReactCurrentOwner, Vr = !1, kh, eu, Oh, _h, Ah, oo, Mh, _f, tu;
  kh = {}, eu = {}, Oh = {}, _h = {}, Ah = {}, oo = !1, Mh = {}, _f = {}, tu = {};
  function Dn(e, t, n, r) {
    e === null ? t.child = D0(t, null, n, r) : t.child = Xo(t, e.child, n, r);
  }
  function A9(e, t, n, r) {
    t.child = Xo(t, e.child, null, r), t.child = Xo(t, null, n, r);
  }
  function jy(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Or(
        u,
        r,
        // Resolved props
        "prop",
        Ke(n)
      );
    }
    var m = n.render, g = t.ref, b, w;
    es(t, i), Zs(t);
    {
      if (Zl.current = t, Xn(!0), b = os(e, t, m, r, g, i), w = ss(), t.mode & Ct) {
        Xt(!0);
        try {
          b = os(e, t, m, r, g, i), w = ss();
        } finally {
          Xt(!1);
        }
      }
      Xn(!1);
    }
    return _o(), e !== null && !Vr ? (B0(e, t, i), Oa(e, t, i)) : (rn() && w && vp(t), t.flags |= Do, Dn(e, t, b, i), t.child);
  }
  function Ty(e, t, n, r, i) {
    if (e === null) {
      var u = n.type;
      if (FS(u) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var m = u;
        return m = hs(u), t.tag = X, t.type = m, Vh(t, u), Dy(e, t, m, r, i);
      }
      {
        var g = u.propTypes;
        if (g && Or(
          g,
          r,
          // Resolved props
          "prop",
          Ke(u)
        ), n.defaultProps !== void 0) {
          var b = Ke(u) || "Unknown";
          tu[b] || (c("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), tu[b] = !0);
        }
      }
      var w = bv(n.type, null, r, t, t.mode, i);
      return w.ref = t.ref, w.return = t, t.child = w, w;
    }
    {
      var E = n.type, A = E.propTypes;
      A && Or(
        A,
        r,
        // Resolved props
        "prop",
        Ke(E)
      );
    }
    var _ = e.child, H = Bh(e, i);
    if (!H) {
      var B = _.memoizedProps, K = n.compare;
      if (K = K !== null ? K : bl, K(B, r) && e.ref === t.ref)
        return Oa(e, t, i);
    }
    t.flags |= Do;
    var ae = fo(_, r);
    return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
  }
  function Dy(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ve) {
        var m = u, g = m._payload, b = m._init;
        try {
          u = b(g);
        } catch {
          u = null;
        }
        var w = u && u.propTypes;
        w && Or(
          w,
          r,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ke(u)
        );
      }
    }
    if (e !== null) {
      var E = e.memoizedProps;
      if (bl(E, r) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Vr = !1, t.pendingProps = r = E, Bh(e, i))
          (e.flags & qd) !== ye && (Vr = !0);
        else return t.lanes = e.lanes, Oa(e, t, i);
    }
    return Ph(e, t, n, r, i);
  }
  function ky(e, t, n) {
    var r = t.pendingProps, i = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || We)
      if ((t.mode & Je) === ve) {
        var m = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = m, Yf(t, n);
      } else if (er(n, Zn)) {
        var A = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = A;
        var _ = u !== null ? u.baseLanes : n;
        Yf(t, _);
      } else {
        var g = null, b;
        if (u !== null) {
          var w = u.baseLanes;
          b = Me(w, n);
        } else
          b = n;
        t.lanes = t.childLanes = Zn;
        var E = {
          baseLanes: b,
          cachePool: g,
          transitions: null
        };
        return t.memoizedState = E, t.updateQueue = null, Yf(t, b), null;
      }
    else {
      var H;
      u !== null ? (H = Me(u.baseLanes, n), t.memoizedState = null) : H = n, Yf(t, H);
    }
    return Dn(e, t, i, n), t.child;
  }
  function M9(e, t, n) {
    var r = t.pendingProps;
    return Dn(e, t, r, n), t.child;
  }
  function P9(e, t, n) {
    var r = t.pendingProps.children;
    return Dn(e, t, r, n), t.child;
  }
  function U9(e, t, n) {
    {
      t.flags |= Ye;
      {
        var r = t.stateNode;
        r.effectDuration = 0, r.passiveEffectDuration = 0;
      }
    }
    var i = t.pendingProps, u = i.children;
    return Dn(e, t, u, n), t.child;
  }
  function Oy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Xa, t.flags |= Qd);
  }
  function Ph(e, t, n, r, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Or(
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
    var b, w;
    es(t, i), Zs(t);
    {
      if (Zl.current = t, Xn(!0), b = os(e, t, n, r, m, i), w = ss(), t.mode & Ct) {
        Xt(!0);
        try {
          b = os(e, t, n, r, m, i), w = ss();
        } finally {
          Xt(!1);
        }
      }
      Xn(!1);
    }
    return _o(), e !== null && !Vr ? (B0(e, t, i), Oa(e, t, i)) : (rn() && w && vp(t), t.flags |= Do, Dn(e, t, b, i), t.child);
  }
  function _y(e, t, n, r, i) {
    {
      switch (eN(t)) {
        case !1: {
          var u = t.stateNode, m = t.type, g = new m(t.memoizedProps, u.context), b = g.state;
          u.updater.enqueueSetState(u, b, null);
          break;
        }
        case !0: {
          t.flags |= Ze, t.flags |= Tn;
          var w = new Error("Simulated error coming from DevTools"), E = il(i);
          t.lanes = Me(t.lanes, E);
          var A = Dh(t, io(w, t), E);
          Up(t, A);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var _ = n.propTypes;
        _ && Or(
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
    var B = t.stateNode, K;
    B === null ? (Mf(e, t), Sy(t, n, r), Rh(t, n, r, i), K = !0) : e === null ? K = E9(t, n, r, i) : K = R9(e, t, n, r, i);
    var ae = Uh(e, t, n, K, H, i);
    {
      var me = t.stateNode;
      K && me.props !== r && (oo || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", _e(t) || "a component"), oo = !0);
    }
    return ae;
  }
  function Uh(e, t, n, r, i, u) {
    Oy(e, t);
    var m = (t.flags & Ze) !== ye;
    if (!r && !m)
      return i && p0(t, n, !1), Oa(e, t, u);
    var g = t.stateNode;
    Zl.current = t;
    var b;
    if (m && typeof n.getDerivedStateFromError != "function")
      b = null, gy();
    else {
      Zs(t);
      {
        if (Xn(!0), b = g.render(), t.mode & Ct) {
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
    return t.flags |= Do, e !== null && m ? A9(e, t, b, u) : Dn(e, t, b, u), t.memoizedState = g.state, i && p0(t, n, !0), t.child;
  }
  function Ay(e) {
    var t = e.stateNode;
    t.pendingContext ? d0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && d0(e, t.context, !1), Vp(e, t.containerInfo);
  }
  function V9(e, t, n) {
    if (Ay(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var r = t.pendingProps, i = t.memoizedState, u = i.element;
    U0(e, t), lf(t, r, null, n);
    var m = t.memoizedState;
    t.stateNode;
    var g = m.element;
    if (i.isDehydrated) {
      var b = {
        element: g,
        isDehydrated: !1,
        cache: m.cache,
        pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
        transitions: m.transitions
      }, w = t.updateQueue;
      if (w.baseState = b, t.memoizedState = b, t.flags & La) {
        var E = io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return My(e, t, g, n, E);
      } else if (g !== u) {
        var A = io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return My(e, t, g, n, A);
      } else {
        $x(t);
        var _ = D0(t, null, g, n);
        t.child = _;
        for (var H = _; H; )
          H.flags = H.flags & ~At | ba, H = H.sibling;
      }
    } else {
      if (Qo(), g === u)
        return Oa(e, t, n);
      Dn(e, t, g, n);
    }
    return t.child;
  }
  function My(e, t, n, r, i) {
    return Qo(), Sp(i), t.flags |= La, Dn(e, t, n, r), t.child;
  }
  function F9(e, t, n) {
    $0(t), e === null && xp(t);
    var r = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = i.children, g = np(r, i);
    return g ? m = null : u !== null && np(r, u) && (t.flags |= qs), Oy(e, t), Dn(e, t, m, n), t.child;
  }
  function z9(e, t) {
    return e === null && xp(t), null;
  }
  function $9(e, t, n, r) {
    Mf(e, t);
    var i = t.pendingProps, u = n, m = u._payload, g = u._init, b = g(m);
    t.type = b;
    var w = t.tag = zS(b), E = Ur(b, i), A;
    switch (w) {
      case h:
        return Vh(t, b), t.type = b = hs(b), A = Ph(null, t, b, E, r), A;
      case p:
        return t.type = b = pv(b), A = _y(null, t, b, E, r), A;
      case V:
        return t.type = b = hv(b), A = jy(null, t, b, E, r), A;
      case I: {
        if (t.type !== t.elementType) {
          var _ = b.propTypes;
          _ && Or(
            _,
            E,
            // Resolved for outer only
            "prop",
            Ke(b)
          );
        }
        return A = Ty(
          null,
          t,
          b,
          Ur(b.type, E),
          // The inner type can have defaults too
          r
        ), A;
      }
    }
    var H = "";
    throw b !== null && typeof b == "object" && b.$$typeof === Ve && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + H));
  }
  function H9(e, t, n, r, i) {
    Mf(e, t), t.tag = p;
    var u;
    return Xr(n) ? (u = !0, Bc(t)) : u = !1, es(t, i), Sy(t, n, r), Rh(t, n, r, i), Uh(null, t, n, !0, u, i);
  }
  function J9(e, t, n, r) {
    Mf(e, t);
    var i = t.pendingProps, u;
    {
      var m = Ko(t, n, !1);
      u = Wo(t, m);
    }
    es(t, r);
    var g, b;
    Zs(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var w = Ke(n) || "Unknown";
        kh[w] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), kh[w] = !0);
      }
      t.mode & Ct && Ar.recordLegacyContextWarning(t, null), Xn(!0), Zl.current = t, g = os(null, t, n, i, u, r), b = ss(), Xn(!1);
    }
    if (_o(), t.flags |= Do, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
      var E = Ke(n) || "Unknown";
      eu[E] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), eu[E] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
    ) {
      {
        var A = Ke(n) || "Unknown";
        eu[A] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), eu[A] = !0);
      }
      t.tag = p, t.memoizedState = null, t.updateQueue = null;
      var _ = !1;
      return Xr(n) ? (_ = !0, Bc(t)) : _ = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, Pp(t), xy(t, g), Rh(t, n, i, r), Uh(null, t, n, !0, _, r);
    } else {
      if (t.tag = h, t.mode & Ct) {
        Xt(!0);
        try {
          g = os(null, t, n, i, u, r), b = ss();
        } finally {
          Xt(!1);
        }
      }
      return rn() && b && vp(t), Dn(null, t, g, r), Vh(t, n), t.child;
    }
  }
  function Vh(e, t) {
    {
      if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", r = Wa();
        r && (n += `

Check the render method of \`` + r + "`.");
        var i = r || "", u = e._debugSource;
        u && (i = u.fileName + ":" + u.lineNumber), Ah[i] || (Ah[i] = !0, c("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var m = Ke(t) || "Unknown";
        tu[m] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), tu[m] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var g = Ke(t) || "Unknown";
        _h[g] || (c("%s: Function components do not support getDerivedStateFromProps.", g), _h[g] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var b = Ke(t) || "Unknown";
        Oh[b] || (c("%s: Function components do not support contextType.", b), Oh[b] = !0);
      }
    }
  }
  var Fh = {
    dehydrated: null,
    treeContext: null,
    retryLane: Zt
  };
  function zh(e) {
    return {
      baseLanes: e,
      cachePool: _9(),
      transitions: null
    };
  }
  function B9(e, t) {
    var n = null;
    return {
      baseLanes: Me(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function I9(e, t, n, r) {
    if (t !== null) {
      var i = t.memoizedState;
      if (i === null)
        return !1;
    }
    return $p(e, Bl);
  }
  function Y9(e, t) {
    return mc(e.childLanes, t);
  }
  function Py(e, t, n) {
    var r = t.pendingProps;
    tN(t) && (t.flags |= Ze);
    var i = Mr.current, u = !1, m = (t.flags & Ze) !== ye;
    if (m || I9(i, e) ? (u = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (i = c9(i, J0)), i = ns(i), di(t, i), e === null) {
      xp(t);
      var g = t.memoizedState;
      if (g !== null) {
        var b = g.dehydrated;
        if (b !== null)
          return Q9(t, b);
      }
      var w = r.children, E = r.fallback;
      if (u) {
        var A = K9(t, w, E, n), _ = t.child;
        return _.memoizedState = zh(n), t.memoizedState = Fh, A;
      } else
        return $h(t, w);
    } else {
      var H = e.memoizedState;
      if (H !== null) {
        var B = H.dehydrated;
        if (B !== null)
          return X9(e, t, m, r, B, H, n);
      }
      if (u) {
        var K = r.fallback, ae = r.children, me = G9(e, t, ae, K, n), fe = t.child, Ie = e.child.memoizedState;
        return fe.memoizedState = Ie === null ? zh(n) : B9(Ie, n), fe.childLanes = Y9(e, n), t.memoizedState = Fh, me;
      } else {
        var Fe = r.children, z = W9(e, t, Fe, n);
        return t.memoizedState = null, z;
      }
    }
  }
  function $h(e, t, n) {
    var r = e.mode, i = {
      mode: "visible",
      children: t
    }, u = Hh(i, r);
    return u.return = e, e.child = u, u;
  }
  function K9(e, t, n, r) {
    var i = e.mode, u = e.child, m = {
      mode: "hidden",
      children: t
    }, g, b;
    return (i & Je) === ve && u !== null ? (g = u, g.childLanes = q, g.pendingProps = m, e.mode & ot && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), b = bi(n, i, r, null)) : (g = Hh(m, i), b = bi(n, i, r, null)), g.return = e, b.return = e, g.sibling = b, e.child = g, b;
  }
  function Hh(e, t, n) {
    return UL(e, t, q, null);
  }
  function Uy(e, t) {
    return fo(e, t);
  }
  function W9(e, t, n, r) {
    var i = e.child, u = i.sibling, m = Uy(i, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Je) === ve && (m.lanes = r), m.return = t, m.sibling = null, u !== null) {
      var g = t.deletions;
      g === null ? (t.deletions = [u], t.flags |= Vi) : g.push(u);
    }
    return t.child = m, m;
  }
  function G9(e, t, n, r, i) {
    var u = t.mode, m = e.child, g = m.sibling, b = {
      mode: "hidden",
      children: n
    }, w;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & Je) === ve && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== m
    ) {
      var E = t.child;
      w = E, w.childLanes = q, w.pendingProps = b, t.mode & ot && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = m.selfBaseDuration, w.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
    } else
      w = Uy(m, b), w.subtreeFlags = m.subtreeFlags & Sa;
    var A;
    return g !== null ? A = fo(g, r) : (A = bi(r, u, i, null), A.flags |= At), A.return = t, w.return = t, w.sibling = A, t.child = w, A;
  }
  function Af(e, t, n, r) {
    r !== null && Sp(r), Xo(t, e.child, null, n);
    var i = t.pendingProps, u = i.children, m = $h(t, u);
    return m.flags |= At, t.memoizedState = null, m;
  }
  function q9(e, t, n, r, i) {
    var u = t.mode, m = {
      mode: "visible",
      children: n
    }, g = Hh(m, u), b = bi(r, u, i, null);
    return b.flags |= At, g.return = t, b.return = t, g.sibling = b, t.child = g, (t.mode & Je) !== ve && Xo(t, e.child, null, i), b;
  }
  function Q9(e, t, n) {
    return (e.mode & Je) === ve ? (c("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Re) : op(t) ? e.lanes = Bi : e.lanes = Zn, null;
  }
  function X9(e, t, n, r, i, u, m) {
    if (n)
      if (t.flags & La) {
        t.flags &= ~La;
        var z = jh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Af(e, t, m, z);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Ze, null;
        var W = r.children, $ = r.fallback, Z = q9(e, t, W, $, m), le = t.child;
        return le.memoizedState = zh(m), t.memoizedState = Fh, Z;
      }
    else {
      if (Fx(), (t.mode & Je) === ve)
        return Af(
          e,
          t,
          m,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (op(i)) {
        var g, b, w;
        {
          var E = nx(i);
          g = E.digest, b = E.message, w = E.stack;
        }
        var A;
        b ? A = new Error(b) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var _ = jh(A, g, w);
        return Af(e, t, m, _);
      }
      var H = er(m, e.childLanes);
      if (Vr || H) {
        var B = If();
        if (B !== null) {
          var K = l8(B, m);
          if (K !== Zt && K !== u.retryLane) {
            u.retryLane = K;
            var ae = pt;
            $n(e, K), Yt(B, e, K, ae);
          }
        }
        uv();
        var me = jh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return Af(e, t, m, me);
      } else if (o0(i)) {
        t.flags |= Ze, t.child = e.child;
        var fe = NS.bind(null, e);
        return rx(i, fe), null;
      } else {
        Hx(t, i, u.treeContext);
        var Ie = r.children, Fe = $h(t, Ie);
        return Fe.flags |= ba, Fe;
      }
    }
  }
  function Vy(e, t, n) {
    e.lanes = Me(e.lanes, t);
    var r = e.alternate;
    r !== null && (r.lanes = Me(r.lanes, t)), Op(e.return, t, n);
  }
  function Z9(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === P) {
        var i = r.memoizedState;
        i !== null && Vy(r, n, e);
      } else if (r.tag === Le)
        Vy(r, n, e);
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
  function e2(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate;
      r !== null && df(r) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function t2(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Mh[e])
      if (Mh[e] = !0, typeof e == "string")
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
  function n2(e, t) {
    e !== void 0 && !_f[e] && (e !== "collapsed" && e !== "hidden" ? (_f[e] = !0, c('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_f[e] = !0, c('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Fy(e, t) {
    {
      var n = Xe(e), r = !n && typeof ma(e) == "function";
      if (n || r) {
        var i = n ? "array" : "iterable";
        return c("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", i, t, i), !1;
      }
    }
    return !0;
  }
  function r2(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Xe(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Fy(e[n], n))
            return;
      } else {
        var r = ma(e);
        if (typeof r == "function") {
          var i = r.call(e);
          if (i)
            for (var u = i.next(), m = 0; !u.done; u = i.next()) {
              if (!Fy(u.value, m))
                return;
              m++;
            }
        } else
          c('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Jh(e, t, n, r, i) {
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
  function zy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, u = r.tail, m = r.children;
    t2(i), n2(u, i), r2(m, i), Dn(e, t, m, n);
    var g = Mr.current, b = $p(g, Bl);
    if (b)
      g = Hp(g, Bl), t.flags |= Ze;
    else {
      var w = e !== null && (e.flags & Ze) !== ye;
      w && Z9(t, t.child, n), g = ns(g);
    }
    if (di(t, g), (t.mode & Je) === ve)
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards": {
          var E = e2(t.child), A;
          E === null ? (A = t.child, t.child = null) : (A = E.sibling, E.sibling = null), Jh(
            t,
            !1,
            // isBackwards
            A,
            E,
            u
          );
          break;
        }
        case "backwards": {
          var _ = null, H = t.child;
          for (t.child = null; H !== null; ) {
            var B = H.alternate;
            if (B !== null && df(B) === null) {
              t.child = H;
              break;
            }
            var K = H.sibling;
            H.sibling = _, _ = H, H = K;
          }
          Jh(
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
          Jh(
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
  function a2(e, t, n) {
    Vp(t, t.stateNode.containerInfo);
    var r = t.pendingProps;
    return e === null ? t.child = Xo(t, null, r, n) : Dn(e, t, r, n), t.child;
  }
  var $y = !1;
  function i2(e, t, n) {
    var r = t.type, i = r._context, u = t.pendingProps, m = t.memoizedProps, g = u.value;
    {
      "value" in u || $y || ($y = !0, c("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var b = t.type.propTypes;
      b && Or(b, u, "prop", "Context.Provider");
    }
    if (_0(t, i, g), m !== null) {
      var w = m.value;
      if (rr(w, g)) {
        if (m.children === u.children && !Hc())
          return Oa(e, t, n);
      } else
        t9(t, i, n);
    }
    var E = u.children;
    return Dn(e, t, E, n), t.child;
  }
  var Hy = !1;
  function o2(e, t, n) {
    var r = t.type;
    r._context === void 0 ? r !== r.Consumer && (Hy || (Hy = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
    var i = t.pendingProps, u = i.children;
    typeof u != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), es(t, n);
    var m = Mt(r);
    Zs(t);
    var g;
    return Zl.current = t, Xn(!0), g = u(m), Xn(!1), _o(), t.flags |= Do, Dn(e, t, g, n), t.child;
  }
  function nu() {
    Vr = !0;
  }
  function Mf(e, t) {
    (t.mode & Je) === ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= At);
  }
  function Oa(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), gy(), pu(t.lanes), er(n, t.childLanes) ? (Zx(e, t), t.child) : null;
  }
  function s2(e, t, n) {
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
  function l2(e, t, n) {
    switch (t.tag) {
      case L:
        Ay(t), t.stateNode, Qo();
        break;
      case C:
        $0(t);
        break;
      case p: {
        var r = t.type;
        Xr(r) && Bc(t);
        break;
      }
      case x:
        Vp(t, t.stateNode.containerInfo);
        break;
      case k: {
        var i = t.memoizedProps.value, u = t.type._context;
        _0(t, u, i);
        break;
      }
      case R:
        {
          var m = er(n, t.childLanes);
          m && (t.flags |= Ye);
          {
            var g = t.stateNode;
            g.effectDuration = 0, g.passiveEffectDuration = 0;
          }
        }
        break;
      case P: {
        var b = t.memoizedState;
        if (b !== null) {
          if (b.dehydrated !== null)
            return di(t, ns(Mr.current)), t.flags |= Ze, null;
          var w = t.child, E = w.childLanes;
          if (er(n, E))
            return Py(e, t, n);
          di(t, ns(Mr.current));
          var A = Oa(e, t, n);
          return A !== null ? A.sibling : null;
        } else
          di(t, ns(Mr.current));
        break;
      }
      case Le: {
        var _ = (e.flags & Ze) !== ye, H = er(n, t.childLanes);
        if (_) {
          if (H)
            return zy(e, t, n);
          t.flags |= Ze;
        }
        var B = t.memoizedState;
        if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), di(t, Mr.current), H)
          break;
        return null;
      }
      case pe:
      case Ne:
        return t.lanes = q, ky(e, t, n);
    }
    return Oa(e, t, n);
  }
  function Jy(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return s2(e, t, bv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var r = e.memoizedProps, i = t.pendingProps;
      if (r !== i || Hc() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Vr = !0;
      else {
        var u = Bh(e, n);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Ze) === ye)
          return Vr = !1, l2(e, t, n);
        (e.flags & qd) !== ye ? Vr = !0 : Vr = !1;
      }
    } else if (Vr = !1, rn() && _x(t)) {
      var m = t.index, g = Ax();
      g0(t, g, m);
    }
    switch (t.lanes = q, t.tag) {
      case v:
        return J9(e, t, t.type, n);
      case De: {
        var b = t.elementType;
        return $9(e, t, b, n);
      }
      case h: {
        var w = t.type, E = t.pendingProps, A = t.elementType === w ? E : Ur(w, E);
        return Ph(e, t, w, A, n);
      }
      case p: {
        var _ = t.type, H = t.pendingProps, B = t.elementType === _ ? H : Ur(_, H);
        return _y(e, t, _, B, n);
      }
      case L:
        return V9(e, t, n);
      case C:
        return F9(e, t, n);
      case j:
        return z9(e, t);
      case P:
        return Py(e, t, n);
      case x:
        return a2(e, t, n);
      case V: {
        var K = t.type, ae = t.pendingProps, me = t.elementType === K ? ae : Ur(K, ae);
        return jy(e, t, K, me, n);
      }
      case F:
        return M9(e, t, n);
      case O:
        return P9(e, t, n);
      case R:
        return U9(e, t, n);
      case k:
        return i2(e, t, n);
      case M:
        return o2(e, t, n);
      case I: {
        var fe = t.type, Ie = t.pendingProps, Fe = Ur(fe, Ie);
        if (t.type !== t.elementType) {
          var z = fe.propTypes;
          z && Or(
            z,
            Fe,
            // Resolved for outer only
            "prop",
            Ke(fe)
          );
        }
        return Fe = Ur(fe.type, Fe), Ty(e, t, fe, Fe, n);
      }
      case X:
        return Dy(e, t, t.type, t.pendingProps, n);
      case ke: {
        var W = t.type, $ = t.pendingProps, Z = t.elementType === W ? $ : Ur(W, $);
        return H9(e, t, W, Z, n);
      }
      case Le:
        return zy(e, t, n);
      case nt:
        break;
      case pe:
        return ky(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function ls(e) {
    e.flags |= Ye;
  }
  function By(e) {
    e.flags |= Xa, e.flags |= Qd;
  }
  var Iy, Ih, Yy, Ky;
  Iy = function(e, t, n, r) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === C || i.tag === j)
        D6(e, i.stateNode);
      else if (i.tag !== x) {
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
  }, Ih = function(e, t) {
  }, Yy = function(e, t, n, r, i) {
    var u = e.memoizedProps;
    if (u !== r) {
      var m = t.stateNode, g = Fp(), b = O6(m, n, u, r, i, g);
      t.updateQueue = b, b && ls(t);
    }
  }, Ky = function(e, t, n, r) {
    n !== r && ls(t);
  };
  function ru(e, t) {
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
        for (var b = e.selfBaseDuration, w = e.child; w !== null; )
          n = Me(n, Me(w.lanes, w.childLanes)), r |= w.subtreeFlags & Sa, r |= w.flags & Sa, b += w.treeBaseDuration, w = w.sibling;
        e.treeBaseDuration = b;
      } else
        for (var E = e.child; E !== null; )
          n = Me(n, Me(E.lanes, E.childLanes)), r |= E.subtreeFlags & Sa, r |= E.flags & Sa, E.return = e, E = E.sibling;
      e.subtreeFlags |= r;
    } else {
      if ((e.mode & ot) !== ve) {
        for (var i = e.actualDuration, u = e.selfBaseDuration, m = e.child; m !== null; )
          n = Me(n, Me(m.lanes, m.childLanes)), r |= m.subtreeFlags, r |= m.flags, i += m.actualDuration, u += m.treeBaseDuration, m = m.sibling;
        e.actualDuration = i, e.treeBaseDuration = u;
      } else
        for (var g = e.child; g !== null; )
          n = Me(n, Me(g.lanes, g.childLanes)), r |= g.subtreeFlags, r |= g.flags, g.return = e, g = g.sibling;
      e.subtreeFlags |= r;
    }
    return e.childLanes = n, t;
  }
  function u2(e, t, n) {
    if (Kx() && (t.mode & Je) !== ve && (t.flags & Ze) === ye)
      return w0(t), Qo(), t.flags |= La | Qs | Tn, !1;
    var r = Gc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (Ix(t), on(t), (t.mode & ot) !== ve) {
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
      return C0(), !0;
  }
  function Wy(e, t, n) {
    var r = t.pendingProps;
    switch (gp(t), t.tag) {
      case v:
      case De:
      case X:
      case h:
      case V:
      case F:
      case O:
      case R:
      case M:
      case I:
        return on(t), null;
      case p: {
        var i = t.type;
        return Xr(i) && Jc(t), on(t), null;
      }
      case L: {
        var u = t.stateNode;
        if (ts(t), mp(t), Bp(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var m = Gc(t);
          if (m)
            ls(t);
          else if (e !== null) {
            var g = e.memoizedState;
            // Check if this is a client root
            (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & La) !== ye) && (t.flags |= Fi, C0());
          }
        }
        return Ih(e, t), on(t), null;
      }
      case C: {
        zp(t);
        var b = z0(), w = t.type;
        if (e !== null && t.stateNode != null)
          Yy(e, t, w, r, b), e.ref !== t.ref && By(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return on(t), null;
          }
          var E = Fp(), A = Gc(t);
          if (A)
            Jx(t, b, E) && ls(t);
          else {
            var _ = T6(w, r, b, E, t);
            Iy(_, t, !1, !1), t.stateNode = _, k6(_, w, r, b) && ls(t);
          }
          t.ref !== null && By(t);
        }
        return on(t), null;
      }
      case j: {
        var H = r;
        if (e && t.stateNode != null) {
          var B = e.memoizedProps;
          Ky(e, t, B, H);
        } else {
          if (typeof H != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var K = z0(), ae = Fp(), me = Gc(t);
          me ? Bx(t) && ls(t) : t.stateNode = _6(H, K, ae, t);
        }
        return on(t), null;
      }
      case P: {
        rs(t);
        var fe = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ie = u2(e, t, fe);
          if (!Ie)
            return t.flags & Tn ? t : null;
        }
        if ((t.flags & Ze) !== ye)
          return t.lanes = n, (t.mode & ot) !== ve && hh(t), t;
        var Fe = fe !== null, z = e !== null && e.memoizedState !== null;
        if (Fe !== z && Fe) {
          var W = t.child;
          if (W.flags |= zi, (t.mode & Je) !== ve) {
            var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !pn);
            $ || $p(Mr.current, J0) ? cS() : uv();
          }
        }
        var Z = t.updateQueue;
        if (Z !== null && (t.flags |= Ye), on(t), (t.mode & ot) !== ve && Fe) {
          var le = t.child;
          le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
        }
        return null;
      }
      case x:
        return ts(t), Ih(e, t), e === null && Ex(t.stateNode.containerInfo), on(t), null;
      case k:
        var ie = t.type._context;
        return kp(ie, t), on(t), null;
      case ke: {
        var xe = t.type;
        return Xr(xe) && Jc(t), on(t), null;
      }
      case Le: {
        rs(t);
        var Te = t.memoizedState;
        if (Te === null)
          return on(t), null;
        var lt = (t.flags & Ze) !== ye, Ge = Te.rendering;
        if (Ge === null)
          if (lt)
            ru(Te, !1);
          else {
            var Dt = dS() && (e === null || (e.flags & Ze) === ye);
            if (!Dt)
              for (var qe = t.child; qe !== null; ) {
                var Et = df(qe);
                if (Et !== null) {
                  lt = !0, t.flags |= Ze, ru(Te, !1);
                  var wn = Et.updateQueue;
                  return wn !== null && (t.updateQueue = wn, t.flags |= Ye), t.subtreeFlags = ye, e9(t, n), di(t, Hp(Mr.current, Bl)), t.child;
                }
                qe = qe.sibling;
              }
            Te.tail !== null && Qt() > hL() && (t.flags |= Ze, lt = !0, ru(Te, !1), t.lanes = K1);
          }
        else {
          if (!lt) {
            var fn = df(Ge);
            if (fn !== null) {
              t.flags |= Ze, lt = !0;
              var or = fn.updateQueue;
              if (or !== null && (t.updateQueue = or, t.flags |= Ye), ru(Te, !0), Te.tail === null && Te.tailMode === "hidden" && !Ge.alternate && !rn())
                return on(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Qt() * 2 - Te.renderingStartTime > hL() && n !== Zn && (t.flags |= Ze, lt = !0, ru(Te, !1), t.lanes = K1);
          }
          if (Te.isBackwards)
            Ge.sibling = t.child, t.child = Ge;
          else {
            var _n = Te.last;
            _n !== null ? _n.sibling = Ge : t.child = Ge, Te.last = Ge;
          }
        }
        if (Te.tail !== null) {
          var An = Te.tail;
          Te.rendering = An, Te.tail = An.sibling, Te.renderingStartTime = Qt(), An.sibling = null;
          var Cn = Mr.current;
          return lt ? Cn = Hp(Cn, Bl) : Cn = ns(Cn), di(t, Cn), An;
        }
        return on(t), null;
      }
      case nt:
        break;
      case pe:
      case Ne: {
        lv(t);
        var Ua = t.memoizedState, vs = Ua !== null;
        if (e !== null) {
          var Lu = e.memoizedState, oa = Lu !== null;
          oa !== vs && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !We && (t.flags |= zi);
        }
        return !vs || (t.mode & Je) === ve ? on(t) : er(ia, Zn) && (on(t), t.subtreeFlags & (At | Ye) && (t.flags |= zi)), null;
      }
      case we:
        return null;
      case et:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function c2(e, t, n) {
    switch (gp(t), t.tag) {
      case p: {
        var r = t.type;
        Xr(r) && Jc(t);
        var i = t.flags;
        return i & Tn ? (t.flags = i & ~Tn | Ze, (t.mode & ot) !== ve && hh(t), t) : null;
      }
      case L: {
        t.stateNode, ts(t), mp(t), Bp();
        var u = t.flags;
        return (u & Tn) !== ye && (u & Ze) === ye ? (t.flags = u & ~Tn | Ze, t) : null;
      }
      case C:
        return zp(t), null;
      case P: {
        rs(t);
        var m = t.memoizedState;
        if (m !== null && m.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Qo();
        }
        var g = t.flags;
        return g & Tn ? (t.flags = g & ~Tn | Ze, (t.mode & ot) !== ve && hh(t), t) : null;
      }
      case Le:
        return rs(t), null;
      case x:
        return ts(t), null;
      case k:
        var b = t.type._context;
        return kp(b, t), null;
      case pe:
      case Ne:
        return lv(t), null;
      case we:
        return null;
      default:
        return null;
    }
  }
  function Gy(e, t, n) {
    switch (gp(t), t.tag) {
      case p: {
        var r = t.type.childContextTypes;
        r != null && Jc(t);
        break;
      }
      case L: {
        t.stateNode, ts(t), mp(t), Bp();
        break;
      }
      case C: {
        zp(t);
        break;
      }
      case x:
        ts(t);
        break;
      case P:
        rs(t);
        break;
      case Le:
        rs(t);
        break;
      case k:
        var i = t.type._context;
        kp(i, t);
        break;
      case pe:
      case Ne:
        lv(t);
        break;
    }
  }
  var qy = null;
  qy = /* @__PURE__ */ new Set();
  var Pf = !1, sn = !1, f2 = typeof WeakSet == "function" ? WeakSet : Set, ue = null, us = null, cs = null;
  function d2(e) {
    Kd(null, function() {
      throw e;
    }), Wd();
  }
  var m2 = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ot)
      try {
        ra(), t.componentWillUnmount();
      } finally {
        na(e);
      }
    else
      t.componentWillUnmount();
  };
  function Qy(e, t) {
    try {
      hi(zt, e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function Yh(e, t, n) {
    try {
      m2(e, n);
    } catch (r) {
      dt(e, t, r);
    }
  }
  function p2(e, t, n) {
    try {
      n.componentDidMount();
    } catch (r) {
      dt(e, t, r);
    }
  }
  function Xy(e, t) {
    try {
      eL(e);
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
          if (Sr && Nr && e.mode & ot)
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
  function Uf(e, t, n) {
    try {
      n();
    } catch (r) {
      dt(e, t, r);
    }
  }
  var Zy = !1;
  function h2(e, t) {
    R6(e.containerInfo), ue = t, v2();
    var n = Zy;
    return Zy = !1, n;
  }
  function v2() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      (e.subtreeFlags & Zd) !== ye && t !== null ? (t.return = e, ue = t) : g2();
    }
  }
  function g2() {
    for (; ue !== null; ) {
      var e = ue;
      xt(e);
      try {
        y2(e);
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
  function y2(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Fi) !== ye) {
      switch (xt(e), e.tag) {
        case h:
        case V:
        case X:
          break;
        case p: {
          if (t !== null) {
            var r = t.memoizedProps, i = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !oo && (u.props !== e.memoizedProps && c("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(e) || "instance"), u.state !== e.memoizedState && c("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(e) || "instance"));
            var m = u.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Ur(e.type, r), i);
            {
              var g = qy;
              m === void 0 && !g.has(e.type) && (g.add(e.type), c("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", _e(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        }
        case L: {
          {
            var b = e.stateNode;
            X6(b.containerInfo);
          }
          break;
        }
        case C:
        case j:
        case x:
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
          m.destroy = void 0, g !== void 0 && ((e & an) !== Hn ? _5(t) : (e & zt) !== Hn && H1(t), (e & Zr) !== Hn && vu(!0), Uf(t, n, g), (e & Zr) !== Hn && vu(!1), (e & an) !== Hn ? A5() : (e & zt) !== Hn && J1());
        }
        m = m.next;
      } while (m !== u);
    }
  }
  function hi(e, t) {
    var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
    if (r !== null) {
      var i = r.next, u = i;
      do {
        if ((u.tag & e) === e) {
          (e & an) !== Hn ? k5(t) : (e & zt) !== Hn && M5(t);
          var m = u.create;
          (e & Zr) !== Hn && vu(!0), u.destroy = m(), (e & Zr) !== Hn && vu(!1), (e & an) !== Hn ? O5() : (e & zt) !== Hn && P5();
          {
            var g = u.destroy;
            if (g !== void 0 && typeof g != "function") {
              var b = void 0;
              (u.tag & zt) !== ye ? b = "useLayoutEffect" : (u.tag & Zr) !== ye ? b = "useInsertionEffect" : b = "useEffect";
              var w = void 0;
              g === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? w = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + g, c("%s must not return anything besides a function, which is used for clean-up.%s", b, w);
            }
          }
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function L2(e, t) {
    if ((t.flags & Ye) !== ye)
      switch (t.tag) {
        case R: {
          var n = t.stateNode.passiveEffectDuration, r = t.memoizedProps, i = r.id, u = r.onPostCommit, m = hy(), g = t.alternate === null ? "mount" : "update";
          py() && (g = "nested-update"), typeof u == "function" && u(i, g, n, m);
          var b = t.return;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case L:
                var w = b.stateNode;
                w.passiveEffectDuration += n;
                break e;
              case R:
                var E = b.stateNode;
                E.passiveEffectDuration += n;
                break e;
            }
            b = b.return;
          }
          break;
        }
      }
  }
  function b2(e, t, n, r) {
    if ((n.flags & Xs) !== ye)
      switch (n.tag) {
        case h:
        case V:
        case X: {
          if (!sn)
            if (n.mode & ot)
              try {
                ra(), hi(zt | Ft, n);
              } finally {
                na(n);
              }
            else
              hi(zt | Ft, n);
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
          g !== null && (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", _e(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", _e(n) || "instance")), F0(n, g, i));
          break;
        }
        case L: {
          var b = n.updateQueue;
          if (b !== null) {
            var w = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case C:
                  w = n.child.stateNode;
                  break;
                case p:
                  w = n.child.stateNode;
                  break;
              }
            F0(n, b, w);
          }
          break;
        }
        case C: {
          var E = n.stateNode;
          if (t === null && n.flags & Ye) {
            var A = n.type, _ = n.memoizedProps;
            V6(E, A, _);
          }
          break;
        }
        case j:
          break;
        case x:
          break;
        case R: {
          {
            var H = n.memoizedProps, B = H.onCommit, K = H.onRender, ae = n.stateNode.effectDuration, me = hy(), fe = t === null ? "mount" : "update";
            py() && (fe = "nested-update"), typeof K == "function" && K(n.memoizedProps.id, fe, n.actualDuration, n.treeBaseDuration, n.actualStartTime, me);
            {
              typeof B == "function" && B(n.memoizedProps.id, fe, ae, me), gS(n);
              var Ie = n.return;
              e: for (; Ie !== null; ) {
                switch (Ie.tag) {
                  case L:
                    var Fe = Ie.stateNode;
                    Fe.effectDuration += ae;
                    break e;
                  case R:
                    var z = Ie.stateNode;
                    z.effectDuration += ae;
                    break e;
                }
                Ie = Ie.return;
              }
            }
          }
          break;
        }
        case P: {
          j2(e, n);
          break;
        }
        case Le:
        case ke:
        case nt:
        case pe:
        case Ne:
        case et:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    sn || n.flags & Xa && eL(n);
  }
  function x2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        if (e.mode & ot)
          try {
            ra(), Qy(e, e.return);
          } finally {
            na(e);
          }
        else
          Qy(e, e.return);
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && p2(e, e.return, t), Xy(e, e.return);
        break;
      }
      case C: {
        Xy(e, e.return);
        break;
      }
    }
  }
  function S2(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === C) {
        if (n === null) {
          n = r;
          try {
            var i = r.stateNode;
            t ? W6(i) : q6(r.stateNode, r.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
        }
      } else if (r.tag === j) {
        if (n === null)
          try {
            var u = r.stateNode;
            t ? G6(u) : Q6(u, r.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
      } else if (!((r.tag === pe || r.tag === Ne) && r.memoizedState !== null && r !== e)) {
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
  function eL(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, r;
      switch (e.tag) {
        case C:
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
  function N2(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function tL(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tL(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === C) {
        var n = e.stateNode;
        n !== null && Tx(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function w2(e) {
    for (var t = e.return; t !== null; ) {
      if (nL(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function nL(e) {
    return e.tag === C || e.tag === L || e.tag === x;
  }
  function rL(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || nL(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== C && t.tag !== j && t.tag !== he; ) {
        if (t.flags & At || t.child === null || t.tag === x)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & At))
        return t.stateNode;
    }
  }
  function C2(e) {
    var t = w2(e);
    switch (t.tag) {
      case C: {
        var n = t.stateNode;
        t.flags & qs && (i0(n), t.flags &= ~qs);
        var r = rL(e);
        Wh(e, r, n);
        break;
      }
      case L:
      case x: {
        var i = t.stateNode.containerInfo, u = rL(e);
        Kh(e, u, i);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Kh(e, t, n) {
    var r = e.tag, i = r === C || r === j;
    if (i) {
      var u = e.stateNode;
      t ? B6(n, u, t) : H6(n, u);
    } else if (r !== x) {
      var m = e.child;
      if (m !== null) {
        Kh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Kh(g, t, n), g = g.sibling;
      }
    }
  }
  function Wh(e, t, n) {
    var r = e.tag, i = r === C || r === j;
    if (i) {
      var u = e.stateNode;
      t ? J6(n, u, t) : $6(n, u);
    } else if (r !== x) {
      var m = e.child;
      if (m !== null) {
        Wh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Wh(g, t, n), g = g.sibling;
      }
    }
  }
  var ln = null, zr = !1;
  function E2(e, t, n) {
    {
      var r = t;
      e: for (; r !== null; ) {
        switch (r.tag) {
          case C: {
            ln = r.stateNode, zr = !1;
            break e;
          }
          case L: {
            ln = r.stateNode.containerInfo, zr = !0;
            break e;
          }
          case x: {
            ln = r.stateNode.containerInfo, zr = !0;
            break e;
          }
        }
        r = r.return;
      }
      if (ln === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      aL(e, t, n), ln = null, zr = !1;
    }
    N2(n);
  }
  function vi(e, t, n) {
    for (var r = n.child; r !== null; )
      aL(e, t, r), r = r.sibling;
  }
  function aL(e, t, n) {
    switch (R5(n), n.tag) {
      case C:
        sn || fs(n, t);
      case j: {
        {
          var r = ln, i = zr;
          ln = null, vi(e, t, n), ln = r, zr = i, ln !== null && (zr ? Y6(ln, n.stateNode) : I6(ln, n.stateNode));
        }
        return;
      }
      case he: {
        ln !== null && (zr ? K6(ln, n.stateNode) : ip(ln, n.stateNode));
        return;
      }
      case x: {
        {
          var u = ln, m = zr;
          ln = n.stateNode.containerInfo, zr = !0, vi(e, t, n), ln = u, zr = m;
        }
        return;
      }
      case h:
      case V:
      case I:
      case X: {
        if (!sn) {
          var g = n.updateQueue;
          if (g !== null) {
            var b = g.lastEffect;
            if (b !== null) {
              var w = b.next, E = w;
              do {
                var A = E, _ = A.destroy, H = A.tag;
                _ !== void 0 && ((H & Zr) !== Hn ? Uf(n, t, _) : (H & zt) !== Hn && (H1(n), n.mode & ot ? (ra(), Uf(n, t, _), na(n)) : Uf(n, t, _), J1())), E = E.next;
              } while (E !== w);
            }
          }
        }
        vi(e, t, n);
        return;
      }
      case p: {
        if (!sn) {
          fs(n, t);
          var B = n.stateNode;
          typeof B.componentWillUnmount == "function" && Yh(n, t, B);
        }
        vi(e, t, n);
        return;
      }
      case nt: {
        vi(e, t, n);
        return;
      }
      case pe: {
        if (
          // TODO: Remove this dead flag
          n.mode & Je
        ) {
          var K = sn;
          sn = K || n.memoizedState !== null, vi(e, t, n), sn = K;
        } else
          vi(e, t, n);
        break;
      }
      default: {
        vi(e, t, n);
        return;
      }
    }
  }
  function R2(e) {
    e.memoizedState;
  }
  function j2(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var r = t.alternate;
      if (r !== null) {
        var i = r.memoizedState;
        if (i !== null) {
          var u = i.dehydrated;
          u !== null && dx(u);
        }
      }
    }
  }
  function iL(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new f2()), t.forEach(function(r) {
        var i = wS.bind(null, e, r);
        if (!n.has(r)) {
          if (n.add(r), Dr)
            if (us !== null && cs !== null)
              hu(cs, us);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          r.then(i, i);
        }
      });
    }
  }
  function T2(e, t, n) {
    us = n, cs = e, xt(t), oL(t, e), xt(t), us = null, cs = null;
  }
  function $r(e, t, n) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i];
        try {
          E2(e, t, u);
        } catch (b) {
          dt(u, t, b);
        }
      }
    var m = Yu();
    if (t.subtreeFlags & em)
      for (var g = t.child; g !== null; )
        xt(g), oL(g, e), g = g.sibling;
    xt(m);
  }
  function oL(e, t, n) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case h:
      case V:
      case I:
      case X: {
        if ($r(t, e), aa(e), i & Ye) {
          try {
            Fr(Zr | Ft, e, e.return), hi(Zr | Ft, e);
          } catch (xe) {
            dt(e, e.return, xe);
          }
          if (e.mode & ot) {
            try {
              ra(), Fr(zt | Ft, e, e.return);
            } catch (xe) {
              dt(e, e.return, xe);
            }
            na(e);
          } else
            try {
              Fr(zt | Ft, e, e.return);
            } catch (xe) {
              dt(e, e.return, xe);
            }
        }
        return;
      }
      case p: {
        $r(t, e), aa(e), i & Xa && r !== null && fs(r, r.return);
        return;
      }
      case C: {
        $r(t, e), aa(e), i & Xa && r !== null && fs(r, r.return);
        {
          if (e.flags & qs) {
            var u = e.stateNode;
            try {
              i0(u);
            } catch (xe) {
              dt(e, e.return, xe);
            }
          }
          if (i & Ye) {
            var m = e.stateNode;
            if (m != null) {
              var g = e.memoizedProps, b = r !== null ? r.memoizedProps : g, w = e.type, E = e.updateQueue;
              if (e.updateQueue = null, E !== null)
                try {
                  F6(m, E, w, b, g, e);
                } catch (xe) {
                  dt(e, e.return, xe);
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
            z6(A, H, _);
          } catch (xe) {
            dt(e, e.return, xe);
          }
        }
        return;
      }
      case L: {
        if ($r(t, e), aa(e), i & Ye && r !== null) {
          var B = r.memoizedState;
          if (B.isDehydrated)
            try {
              fx(t.containerInfo);
            } catch (xe) {
              dt(e, e.return, xe);
            }
        }
        return;
      }
      case x: {
        $r(t, e), aa(e);
        return;
      }
      case P: {
        $r(t, e), aa(e);
        var K = e.child;
        if (K.flags & zi) {
          var ae = K.stateNode, me = K.memoizedState, fe = me !== null;
          if (ae.isHidden = fe, fe) {
            var Ie = K.alternate !== null && K.alternate.memoizedState !== null;
            Ie || uS();
          }
        }
        if (i & Ye) {
          try {
            R2(e);
          } catch (xe) {
            dt(e, e.return, xe);
          }
          iL(e);
        }
        return;
      }
      case pe: {
        var Fe = r !== null && r.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Je
        ) {
          var z = sn;
          sn = z || Fe, $r(t, e), sn = z;
        } else
          $r(t, e);
        if (aa(e), i & zi) {
          var W = e.stateNode, $ = e.memoizedState, Z = $ !== null, le = e;
          if (W.isHidden = Z, Z && !Fe && (le.mode & Je) !== ve) {
            ue = le;
            for (var ie = le.child; ie !== null; )
              ue = ie, k2(ie), ie = ie.sibling;
          }
          S2(le, Z);
        }
        return;
      }
      case Le: {
        $r(t, e), aa(e), i & Ye && iL(e);
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
        C2(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      e.flags &= ~At;
    }
    t & ba && (e.flags &= ~ba);
  }
  function D2(e, t, n) {
    us = n, cs = t, ue = e, sL(e, t, n), us = null, cs = null;
  }
  function sL(e, t, n) {
    for (var r = (e.mode & Je) !== ve; ue !== null; ) {
      var i = ue, u = i.child;
      if (i.tag === pe && r) {
        var m = i.memoizedState !== null, g = m || Pf;
        if (g) {
          Gh(e, t, n);
          continue;
        } else {
          var b = i.alternate, w = b !== null && b.memoizedState !== null, E = w || sn, A = Pf, _ = sn;
          Pf = g, sn = E, sn && !_ && (ue = i, O2(i));
          for (var H = u; H !== null; )
            ue = H, sL(
              H,
              // New root; bubble back up to here and stop.
              t,
              n
            ), H = H.sibling;
          ue = i, Pf = A, sn = _, Gh(e, t, n);
          continue;
        }
      }
      (i.subtreeFlags & Xs) !== ye && u !== null ? (u.return = i, ue = u) : Gh(e, t, n);
    }
  }
  function Gh(e, t, n) {
    for (; ue !== null; ) {
      var r = ue;
      if ((r.flags & Xs) !== ye) {
        var i = r.alternate;
        xt(r);
        try {
          b2(t, i, r, n);
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
  function k2(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      switch (t.tag) {
        case h:
        case V:
        case I:
        case X: {
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
          typeof r.componentWillUnmount == "function" && Yh(t, t.return, r);
          break;
        }
        case C: {
          fs(t, t.return);
          break;
        }
        case pe: {
          var i = t.memoizedState !== null;
          if (i) {
            lL(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, ue = n) : lL(e);
    }
  }
  function lL(e) {
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
  function O2(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      if (t.tag === pe) {
        var r = t.memoizedState !== null;
        if (r) {
          uL(e);
          continue;
        }
      }
      n !== null ? (n.return = t, ue = n) : uL(e);
    }
  }
  function uL(e) {
    for (; ue !== null; ) {
      var t = ue;
      xt(t);
      try {
        x2(t);
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
  function _2(e, t, n, r) {
    ue = t, A2(t, e, n, r);
  }
  function A2(e, t, n, r) {
    for (; ue !== null; ) {
      var i = ue, u = i.child;
      (i.subtreeFlags & ko) !== ye && u !== null ? (u.return = i, ue = u) : M2(e, t, n, r);
    }
  }
  function M2(e, t, n, r) {
    for (; ue !== null; ) {
      var i = ue;
      if ((i.flags & Tr) !== ye) {
        xt(i);
        try {
          P2(t, i, n, r);
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
  function P2(e, t, n, r) {
    switch (t.tag) {
      case h:
      case V:
      case X: {
        if (t.mode & ot) {
          ph();
          try {
            hi(an | Ft, t);
          } finally {
            mh(t);
          }
        } else
          hi(an | Ft, t);
        break;
      }
    }
  }
  function U2(e) {
    ue = e, V2();
  }
  function V2() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      if ((ue.flags & Vi) !== ye) {
        var n = e.deletions;
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            ue = i, $2(i, e);
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
      (e.subtreeFlags & ko) !== ye && t !== null ? (t.return = e, ue = t) : F2();
    }
  }
  function F2() {
    for (; ue !== null; ) {
      var e = ue;
      (e.flags & Tr) !== ye && (xt(e), z2(e), qt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function z2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        e.mode & ot ? (ph(), Fr(an | Ft, e, e.return), mh(e)) : Fr(an | Ft, e, e.return);
        break;
      }
    }
  }
  function $2(e, t) {
    for (; ue !== null; ) {
      var n = ue;
      xt(n), J2(n, t), qt();
      var r = n.child;
      r !== null ? (r.return = n, ue = r) : H2(e);
    }
  }
  function H2(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.sibling, r = t.return;
      if (tL(t), t === e) {
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
  function J2(e, t) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        e.mode & ot ? (ph(), Fr(an, e, t), mh(e)) : Fr(an, e, t);
        break;
      }
    }
  }
  function B2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        try {
          hi(zt | Ft, e);
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
  function I2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        try {
          hi(an | Ft, e);
        } catch (t) {
          dt(e, e.return, t);
        }
        break;
      }
    }
  }
  function Y2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X: {
        try {
          Fr(zt | Ft, e, e.return);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Yh(e, e.return, t);
        break;
      }
    }
  }
  function K2(e) {
    switch (e.tag) {
      case h:
      case V:
      case X:
        try {
          Fr(an | Ft, e, e.return);
        } catch (t) {
          dt(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var au = Symbol.for;
    au("selector.component"), au("selector.has_pseudo_class"), au("selector.role"), au("selector.test_id"), au("selector.text");
  }
  var W2 = [];
  function G2() {
    W2.forEach(function(e) {
      return e();
    });
  }
  var q2 = s.ReactCurrentActQueue;
  function Q2(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function cL() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && q2.current !== null && c("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var X2 = Math.ceil, qh = s.ReactCurrentDispatcher, Qh = s.ReactCurrentOwner, un = s.ReactCurrentBatchConfig, Hr = s.ReactCurrentActQueue, Jt = (
    /*             */
    0
  ), fL = (
    /*               */
    1
  ), cn = (
    /*                */
    2
  ), br = (
    /*                */
    4
  ), _a = 0, iu = 1, so = 2, Vf = 3, ou = 4, dL = 5, Xh = 6, Be = Jt, kn = null, St = null, Bt = q, ia = q, Zh = oi(q), It = _a, su = null, Ff = q, lu = q, zf = q, uu = null, Jn = null, ev = 0, mL = 500, pL = 1 / 0, Z2 = 500, Aa = null;
  function cu() {
    pL = Qt() + Z2;
  }
  function hL() {
    return pL;
  }
  var $f = !1, tv = null, ds = null, lo = !1, gi = null, fu = q, nv = [], rv = null, eS = 50, du = 0, av = null, iv = !1, Hf = !1, tS = 50, ms = 0, Jf = null, mu = pt, Bf = q, vL = !1;
  function If() {
    return kn;
  }
  function On() {
    return (Be & (cn | br)) !== Jt ? Qt() : (mu !== pt || (mu = Qt()), mu);
  }
  function yi(e) {
    var t = e.mode;
    if ((t & Je) === ve)
      return Re;
    if ((Be & cn) !== Jt && Bt !== q)
      return il(Bt);
    var n = qx() !== Gx;
    if (n) {
      if (un.transition !== null) {
        var r = un.transition;
        r._updatedFibers || (r._updatedFibers = /* @__PURE__ */ new Set()), r._updatedFibers.add(e);
      }
      return Bf === Zt && (Bf = Q1()), Bf;
    }
    var i = kr();
    if (i !== Zt)
      return i;
    var u = A6();
    return u;
  }
  function nS(e) {
    var t = e.mode;
    return (t & Je) === ve ? Re : a8();
  }
  function Yt(e, t, n, r) {
    ES(), vL && c("useInsertionEffect must not schedule updates."), iv && (Hf = !0), ol(e, n, r), (Be & cn) !== q && e === kn ? TS(t) : (Dr && eg(e, t, n), DS(t), e === kn && ((Be & cn) === Jt && (lu = Me(lu, n)), It === ou && Li(e, Bt)), Bn(e, r), n === Re && Be === Jt && (t.mode & Je) === ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Hr.isBatchingLegacy && (cu(), v0()));
  }
  function rS(e, t, n) {
    var r = e.current;
    r.lanes = t, ol(e, t, n), Bn(e, n);
  }
  function aS(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Be & cn) !== Jt
    );
  }
  function Bn(e, t) {
    var n = e.callbackNode;
    X5(e, t);
    var r = fc(e, e === kn ? Bt : q);
    if (r === q) {
      n !== null && OL(n), e.callbackNode = null, e.callbackPriority = Zt;
      return;
    }
    var i = Yi(r), u = e.callbackPriority;
    if (u === i && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Hr.current !== null && n !== dv)) {
      n == null && u !== Re && c("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && OL(n);
    var m;
    if (i === Re)
      e.tag === si ? (Hr.isBatchingLegacy !== null && (Hr.didScheduleLegacyUpdate = !0), Ox(LL.bind(null, e))) : h0(LL.bind(null, e)), Hr.current !== null ? Hr.current.push(li) : P6(function() {
        (Be & (cn | br)) === Jt && li();
      }), m = null;
    else {
      var g;
      switch (rg(r)) {
        case tr:
          g = sc;
          break;
        case wa:
          g = tm;
          break;
        case Ca:
          g = Ji;
          break;
        case pc:
          g = nm;
          break;
        default:
          g = Ji;
          break;
      }
      m = mv(g, gL.bind(null, e));
    }
    e.callbackPriority = i, e.callbackNode = m;
  }
  function gL(e, t) {
    if (S9(), mu = pt, Bf = q, (Be & (cn | br)) !== Jt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, r = Pa();
    if (r && e.callbackNode !== n)
      return null;
    var i = fc(e, e === kn ? Bt : q);
    if (i === q)
      return null;
    var u = !dc(e, i) && !r8(e, i) && !t, m = u ? pS(e, i) : Kf(e, i);
    if (m !== _a) {
      if (m === so) {
        var g = wm(e);
        g !== q && (i = g, m = ov(e, g));
      }
      if (m === iu) {
        var b = su;
        throw uo(e, q), Li(e, i), Bn(e, Qt()), b;
      }
      if (m === Xh)
        Li(e, i);
      else {
        var w = !dc(e, i), E = e.current.alternate;
        if (w && !oS(E)) {
          if (m = Kf(e, i), m === so) {
            var A = wm(e);
            A !== q && (i = A, m = ov(e, A));
          }
          if (m === iu) {
            var _ = su;
            throw uo(e, q), Li(e, i), Bn(e, Qt()), _;
          }
        }
        e.finishedWork = E, e.finishedLanes = i, iS(e, m, i);
      }
    }
    return Bn(e, Qt()), e.callbackNode === n ? gL.bind(null, e) : null;
  }
  function ov(e, t) {
    var n = uu;
    if (hc(e)) {
      var r = uo(e, t);
      r.flags |= La, Cx(e.containerInfo);
    }
    var i = Kf(e, t);
    if (i !== so) {
      var u = Jn;
      Jn = n, u !== null && yL(u);
    }
    return i;
  }
  function yL(e) {
    Jn === null ? Jn = e : Jn.push.apply(Jn, e);
  }
  function iS(e, t, n) {
    switch (t) {
      case _a:
      case iu:
        throw new Error("Root did not complete. This is a bug in React.");
      case so: {
        co(e, Jn, Aa);
        break;
      }
      case Vf: {
        if (Li(e, n), G1(n) && // do not delay if we're inside an act() scope
        !_L()) {
          var r = ev + mL - Qt();
          if (r > 10) {
            var i = fc(e, q);
            if (i !== q)
              break;
            var u = e.suspendedLanes;
            if (!Uo(u, n)) {
              On(), Z1(e, u);
              break;
            }
            e.timeoutHandle = rp(co.bind(null, e, Jn, Aa), r);
            break;
          }
        }
        co(e, Jn, Aa);
        break;
      }
      case ou: {
        if (Li(e, n), n8(n))
          break;
        if (!_L()) {
          var m = q5(e, n), g = m, b = Qt() - g, w = CS(b) - b;
          if (w > 10) {
            e.timeoutHandle = rp(co.bind(null, e, Jn, Aa), w);
            break;
          }
        }
        co(e, Jn, Aa);
        break;
      }
      case dL: {
        co(e, Jn, Aa);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function oS(e) {
    for (var t = e; ; ) {
      if (t.flags & ic) {
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
      var b = t.child;
      if (t.subtreeFlags & ic && b !== null) {
        b.return = t, t = b;
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
  function Li(e, t) {
    t = mc(t, zf), t = mc(t, lu), o8(e, t);
  }
  function LL(e) {
    if (N9(), (Be & (cn | br)) !== Jt)
      throw new Error("Should not already be working.");
    Pa();
    var t = fc(e, q);
    if (!er(t, Re))
      return Bn(e, Qt()), null;
    var n = Kf(e, t);
    if (e.tag !== si && n === so) {
      var r = wm(e);
      r !== q && (t = r, n = ov(e, r));
    }
    if (n === iu) {
      var i = su;
      throw uo(e, q), Li(e, t), Bn(e, Qt()), i;
    }
    if (n === Xh)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, co(e, Jn, Aa), Bn(e, Qt()), null;
  }
  function sS(e, t) {
    t !== q && (jm(e, Me(t, Re)), Bn(e, Qt()), (Be & (cn | br)) === Jt && (cu(), li()));
  }
  function sv(e, t) {
    var n = Be;
    Be |= fL;
    try {
      return e(t);
    } finally {
      Be = n, Be === Jt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Hr.isBatchingLegacy && (cu(), v0());
    }
  }
  function lS(e, t, n, r, i) {
    var u = kr(), m = un.transition;
    try {
      return un.transition = null, en(tr), e(t, n, r, i);
    } finally {
      en(u), un.transition = m, Be === Jt && cu();
    }
  }
  function Ma(e) {
    gi !== null && gi.tag === si && (Be & (cn | br)) === Jt && Pa();
    var t = Be;
    Be |= fL;
    var n = un.transition, r = kr();
    try {
      return un.transition = null, en(tr), e ? e() : void 0;
    } finally {
      en(r), un.transition = n, Be = t, (Be & (cn | br)) === Jt && li();
    }
  }
  function bL() {
    return (Be & (cn | br)) !== Jt;
  }
  function Yf(e, t) {
    Sn(Zh, ia, e), ia = Me(ia, t);
  }
  function lv(e) {
    ia = Zh.current, xn(Zh, e);
  }
  function uo(e, t) {
    e.finishedWork = null, e.finishedLanes = q;
    var n = e.timeoutHandle;
    if (n !== ap && (e.timeoutHandle = ap, M6(n)), St !== null)
      for (var r = St.return; r !== null; ) {
        var i = r.alternate;
        Gy(i, r), r = r.return;
      }
    kn = e;
    var u = fo(e.current, null);
    return St = u, Bt = ia = t, It = _a, su = null, Ff = q, lu = q, zf = q, uu = null, Jn = null, r9(), Ar.discardPendingWarnings(), u;
  }
  function xL(e, t) {
    do {
      var n = St;
      try {
        if (tf(), I0(), qt(), Qh.current = null, n === null || n.return === null) {
          It = iu, su = t, St = null;
          return;
        }
        if (Sr && n.mode & ot && kf(n, !0), Br)
          if (_o(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var r = t;
            V5(n, r, Bt);
          } else
            U5(n, t, Bt);
        O9(e, n.return, n, t, Bt), CL(n);
      } catch (i) {
        t = i, St === n && n !== null ? (n = n.return, St = n) : n = St;
        continue;
      }
      return;
    } while (!0);
  }
  function SL() {
    var e = qh.current;
    return qh.current = Ef, e === null ? Ef : e;
  }
  function NL(e) {
    qh.current = e;
  }
  function uS() {
    ev = Qt();
  }
  function pu(e) {
    Ff = Me(e, Ff);
  }
  function cS() {
    It === _a && (It = Vf);
  }
  function uv() {
    (It === _a || It === Vf || It === so) && (It = ou), kn !== null && (Cm(Ff) || Cm(lu)) && Li(kn, Bt);
  }
  function fS(e) {
    It !== ou && (It = so), uu === null ? uu = [e] : uu.push(e);
  }
  function dS() {
    return It === _a;
  }
  function Kf(e, t) {
    var n = Be;
    Be |= cn;
    var r = SL();
    if (kn !== e || Bt !== t) {
      if (Dr) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (hu(e, Bt), i.clear()), tg(e, t);
      }
      Aa = ng(), uo(e, t);
    }
    B1(t);
    do
      try {
        mS();
        break;
      } catch (u) {
        xL(e, u);
      }
    while (!0);
    if (tf(), Be = n, NL(r), St !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return I1(), kn = null, Bt = q, It;
  }
  function mS() {
    for (; St !== null; )
      wL(St);
  }
  function pS(e, t) {
    var n = Be;
    Be |= cn;
    var r = SL();
    if (kn !== e || Bt !== t) {
      if (Dr) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (hu(e, Bt), i.clear()), tg(e, t);
      }
      Aa = ng(), cu(), uo(e, t);
    }
    B1(t);
    do
      try {
        hS();
        break;
      } catch (u) {
        xL(e, u);
      }
    while (!0);
    return tf(), NL(r), Be = n, St !== null ? (J5(), _a) : (I1(), kn = null, Bt = q, It);
  }
  function hS() {
    for (; St !== null && !g5(); )
      wL(St);
  }
  function wL(e) {
    var t = e.alternate;
    xt(e);
    var n;
    (e.mode & ot) !== ve ? (dh(e), n = cv(t, e, ia), kf(e, !0)) : n = cv(t, e, ia), qt(), e.memoizedProps = e.pendingProps, n === null ? CL(e) : St = n, Qh.current = null;
  }
  function CL(e) {
    var t = e;
    do {
      var n = t.alternate, r = t.return;
      if ((t.flags & Qs) === ye) {
        xt(t);
        var i = void 0;
        if ((t.mode & ot) === ve ? i = Wy(n, t, ia) : (dh(t), i = Wy(n, t, ia), kf(t, !1)), qt(), i !== null) {
          St = i;
          return;
        }
      } else {
        var u = c2(n, t);
        if (u !== null) {
          u.flags &= f5, St = u;
          return;
        }
        if ((t.mode & ot) !== ve) {
          kf(t, !1);
          for (var m = t.actualDuration, g = t.child; g !== null; )
            m += g.actualDuration, g = g.sibling;
          t.actualDuration = m;
        }
        if (r !== null)
          r.flags |= Qs, r.subtreeFlags = ye, r.deletions = null;
        else {
          It = Xh, St = null;
          return;
        }
      }
      var b = t.sibling;
      if (b !== null) {
        St = b;
        return;
      }
      t = r, St = t;
    } while (t !== null);
    It === _a && (It = dL);
  }
  function co(e, t, n) {
    var r = kr(), i = un.transition;
    try {
      un.transition = null, en(tr), vS(e, t, n, r);
    } finally {
      un.transition = i, en(r);
    }
    return null;
  }
  function vS(e, t, n, r) {
    do
      Pa();
    while (gi !== null);
    if (RS(), (Be & (cn | br)) !== Jt)
      throw new Error("Should not already be working.");
    var i = e.finishedWork, u = e.finishedLanes;
    if (D5(u), i === null)
      return $1(), null;
    if (u === q && c("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, i === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Zt;
    var m = Me(i.lanes, i.childLanes);
    s8(e, m), e === kn && (kn = null, St = null, Bt = q), ((i.subtreeFlags & ko) !== ye || (i.flags & ko) !== ye) && (lo || (lo = !0, rv = n, mv(Ji, function() {
      return Pa(), null;
    })));
    var g = (i.subtreeFlags & (Zd | em | Xs | ko)) !== ye, b = (i.flags & (Zd | em | Xs | ko)) !== ye;
    if (g || b) {
      var w = un.transition;
      un.transition = null;
      var E = kr();
      en(tr);
      var A = Be;
      Be |= br, Qh.current = null, h2(e, i), vy(), T2(e, i, u), j6(e.containerInfo), e.current = i, F5(u), D2(i, e, u), z5(), y5(), Be = A, en(E), un.transition = w;
    } else
      e.current = i, vy();
    var _ = lo;
    if (lo ? (lo = !1, gi = e, fu = u) : (ms = 0, Jf = null), m = e.pendingLanes, m === q && (ds = null), _ || TL(e.current, !1), C5(i.stateNode, r), Dr && e.memoizedUpdaters.clear(), G2(), Bn(e, Qt()), t !== null)
      for (var H = e.onRecoverableError, B = 0; B < t.length; B++) {
        var K = t[B], ae = K.stack, me = K.digest;
        H(K.value, {
          componentStack: ae,
          digest: me
        });
      }
    if ($f) {
      $f = !1;
      var fe = tv;
      throw tv = null, fe;
    }
    return er(fu, Re) && e.tag !== si && Pa(), m = e.pendingLanes, er(m, Re) ? (x9(), e === av ? du++ : (du = 0, av = e)) : du = 0, li(), $1(), null;
  }
  function Pa() {
    if (gi !== null) {
      var e = rg(fu), t = f8(Ca, e), n = un.transition, r = kr();
      try {
        return un.transition = null, en(t), yS();
      } finally {
        en(r), un.transition = n;
      }
    }
    return !1;
  }
  function gS(e) {
    nv.push(e), lo || (lo = !0, mv(Ji, function() {
      return Pa(), null;
    }));
  }
  function yS() {
    if (gi === null)
      return !1;
    var e = rv;
    rv = null;
    var t = gi, n = fu;
    if (gi = null, fu = q, (Be & (cn | br)) !== Jt)
      throw new Error("Cannot flush passive effects while already rendering.");
    iv = !0, Hf = !1, $5(n);
    var r = Be;
    Be |= br, U2(t.current), _2(t, t.current, n, e);
    {
      var i = nv;
      nv = [];
      for (var u = 0; u < i.length; u++) {
        var m = i[u];
        L2(t, m);
      }
    }
    H5(), TL(t.current, !0), Be = r, li(), Hf ? t === Jf ? ms++ : (ms = 0, Jf = t) : ms = 0, iv = !1, Hf = !1, E5(t);
    {
      var g = t.current.stateNode;
      g.effectDuration = 0, g.passiveEffectDuration = 0;
    }
    return !0;
  }
  function EL(e) {
    return ds !== null && ds.has(e);
  }
  function LS(e) {
    ds === null ? ds = /* @__PURE__ */ new Set([e]) : ds.add(e);
  }
  function bS(e) {
    $f || ($f = !0, tv = e);
  }
  var xS = bS;
  function RL(e, t, n) {
    var r = io(n, t), i = wy(e, r, Re), u = ci(e, i, Re), m = On();
    u !== null && (ol(u, Re, m), Bn(u, m));
  }
  function dt(e, t, n) {
    if (d2(n), vu(!1), e.tag === L) {
      RL(e, e, n);
      return;
    }
    var r = null;
    for (r = t; r !== null; ) {
      if (r.tag === L) {
        RL(r, e, n);
        return;
      } else if (r.tag === p) {
        var i = r.type, u = r.stateNode;
        if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !EL(u)) {
          var m = io(n, e), g = Dh(r, m, Re), b = ci(r, g, Re), w = On();
          b !== null && (ol(b, Re, w), Bn(b, w));
          return;
        }
      }
      r = r.return;
    }
    c(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function SS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t);
    var i = On();
    Z1(e, n), kS(e), kn === e && Uo(Bt, n) && (It === ou || It === Vf && G1(Bt) && Qt() - ev < mL ? uo(e, q) : zf = Me(zf, n)), Bn(e, i);
  }
  function jL(e, t) {
    t === Zt && (t = nS(e));
    var n = On(), r = $n(e, t);
    r !== null && (ol(r, t, n), Bn(r, n));
  }
  function NS(e) {
    var t = e.memoizedState, n = Zt;
    t !== null && (n = t.retryLane), jL(e, n);
  }
  function wS(e, t) {
    var n = Zt, r;
    switch (e.tag) {
      case P:
        r = e.stateNode;
        var i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case Le:
        r = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    r !== null && r.delete(t), jL(e, n);
  }
  function CS(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : X2(e / 1960) * 1960;
  }
  function ES() {
    if (du > eS)
      throw du = 0, av = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    ms > tS && (ms = 0, Jf = null, c("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function RS() {
    Ar.flushLegacyContextWarning(), Ar.flushPendingUnsafeLifecycleWarnings();
  }
  function TL(e, t) {
    xt(e), Wf(e, xa, Y2), t && Wf(e, oc, K2), Wf(e, xa, B2), t && Wf(e, oc, I2), qt();
  }
  function Wf(e, t, n) {
    for (var r = e, i = null; r !== null; ) {
      var u = r.subtreeFlags & t;
      r !== i && r.child !== null && u !== ye ? r = r.child : ((r.flags & t) !== ye && n(r), r.sibling !== null ? r = r.sibling : r = i = r.return);
    }
  }
  var Gf = null;
  function DL(e) {
    {
      if ((Be & cn) !== Jt || !(e.mode & Je))
        return;
      var t = e.tag;
      if (t !== v && t !== L && t !== p && t !== h && t !== V && t !== I && t !== X)
        return;
      var n = _e(e) || "ReactComponent";
      if (Gf !== null) {
        if (Gf.has(n))
          return;
        Gf.add(n);
      } else
        Gf = /* @__PURE__ */ new Set([n]);
      var r = Ln;
      try {
        xt(e), c("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        r ? xt(e) : qt();
      }
    }
  }
  var cv;
  {
    var jS = null;
    cv = function(e, t, n) {
      var r = VL(jS, t);
      try {
        return Jy(e, t, n);
      } catch (u) {
        if (zx() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (tf(), I0(), Gy(e, t), VL(t, r), t.mode & ot && dh(t), Kd(null, Jy, null, e, t, n), s5()) {
          var i = Wd();
          typeof i == "object" && i !== null && i._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var kL = !1, fv;
  fv = /* @__PURE__ */ new Set();
  function TS(e) {
    if (Mi && !y9())
      switch (e.tag) {
        case h:
        case V:
        case X: {
          var t = St && _e(St) || "Unknown", n = t;
          if (!fv.has(n)) {
            fv.add(n);
            var r = _e(e) || "Unknown";
            c("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", r, t, t);
          }
          break;
        }
        case p: {
          kL || (c("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), kL = !0);
          break;
        }
      }
  }
  function hu(e, t) {
    if (Dr) {
      var n = e.memoizedUpdaters;
      n.forEach(function(r) {
        eg(e, r, t);
      });
    }
  }
  var dv = {};
  function mv(e, t) {
    {
      var n = Hr.current;
      return n !== null ? (n.push(t), dv) : z1(e, t);
    }
  }
  function OL(e) {
    if (e !== dv)
      return v5(e);
  }
  function _L() {
    return Hr.current !== null;
  }
  function DS(e) {
    {
      if (e.mode & Je) {
        if (!cL())
          return;
      } else if (!Q2() || Be !== Jt || e.tag !== h && e.tag !== V && e.tag !== X)
        return;
      if (Hr.current === null) {
        var t = Ln;
        try {
          xt(e), c(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, _e(e));
        } finally {
          t ? xt(e) : qt();
        }
      }
    }
  }
  function kS(e) {
    e.tag !== si && cL() && Hr.current === null && c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function vu(e) {
    vL = e;
  }
  var xr = null, ps = null, OS = function(e) {
    xr = e;
  };
  function hs(e) {
    {
      if (xr === null)
        return e;
      var t = xr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function pv(e) {
    return hs(e);
  }
  function hv(e) {
    {
      if (xr === null)
        return e;
      var t = xr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = hs(e.render);
          if (e.render !== n) {
            var r = {
              $$typeof: Se,
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
  function AL(e, t) {
    {
      if (xr === null)
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
        case V: {
          (u === Se || u === Ve) && (i = !0);
          break;
        }
        case I:
        case X: {
          (u === bt || u === Ve) && (i = !0);
          break;
        }
        default:
          return !1;
      }
      if (i) {
        var m = xr(n);
        if (m !== void 0 && m === xr(r))
          return !0;
      }
      return !1;
    }
  }
  function ML(e) {
    {
      if (xr === null || typeof WeakSet != "function")
        return;
      ps === null && (ps = /* @__PURE__ */ new WeakSet()), ps.add(e);
    }
  }
  var _S = function(e, t) {
    {
      if (xr === null)
        return;
      var n = t.staleFamilies, r = t.updatedFamilies;
      Pa(), Ma(function() {
        vv(e.current, r, n);
      });
    }
  }, AS = function(e, t) {
    {
      if (e.context !== ar)
        return;
      Pa(), Ma(function() {
        gu(t, e, null, null);
      });
    }
  };
  function vv(e, t, n) {
    {
      var r = e.alternate, i = e.child, u = e.sibling, m = e.tag, g = e.type, b = null;
      switch (m) {
        case h:
        case X:
        case p:
          b = g;
          break;
        case V:
          b = g.render;
          break;
      }
      if (xr === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var w = !1, E = !1;
      if (b !== null) {
        var A = xr(b);
        A !== void 0 && (n.has(A) ? E = !0 : t.has(A) && (m === p ? E = !0 : w = !0));
      }
      if (ps !== null && (ps.has(e) || r !== null && ps.has(r)) && (E = !0), E && (e._debugNeedsRemount = !0), E || w) {
        var _ = $n(e, Re);
        _ !== null && Yt(_, e, Re, pt);
      }
      i !== null && !E && vv(i, t, n), u !== null && vv(u, t, n);
    }
  }
  var MS = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), r = new Set(t.map(function(i) {
        return i.current;
      }));
      return gv(e.current, r, n), n;
    }
  };
  function gv(e, t, n) {
    {
      var r = e.child, i = e.sibling, u = e.tag, m = e.type, g = null;
      switch (u) {
        case h:
        case X:
        case p:
          g = m;
          break;
        case V:
          g = m.render;
          break;
      }
      var b = !1;
      g !== null && t.has(g) && (b = !0), b ? PS(e, n) : r !== null && gv(r, t, n), i !== null && gv(i, t, n);
    }
  }
  function PS(e, t) {
    {
      var n = US(e, t);
      if (n)
        return;
      for (var r = e; ; ) {
        switch (r.tag) {
          case C:
            t.add(r.stateNode);
            return;
          case x:
            t.add(r.stateNode.containerInfo);
            return;
          case L:
            t.add(r.stateNode.containerInfo);
            return;
        }
        if (r.return === null)
          throw new Error("Expected to reach root first.");
        r = r.return;
      }
    }
  }
  function US(e, t) {
    for (var n = e, r = !1; ; ) {
      if (n.tag === C)
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
  var yv;
  {
    yv = !1;
    try {
      var PL = Object.preventExtensions({});
    } catch {
      yv = !0;
    }
  }
  function VS(e, t, n, r) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.flags = ye, this.subtreeFlags = ye, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !yv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var ir = function(e, t, n, r) {
    return new VS(e, t, n, r);
  };
  function Lv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function FS(e) {
    return typeof e == "function" && !Lv(e) && e.defaultProps === void 0;
  }
  function zS(e) {
    if (typeof e == "function")
      return Lv(e) ? p : h;
    if (e != null) {
      var t = e.$$typeof;
      if (t === Se)
        return V;
      if (t === bt)
        return I;
    }
    return v;
  }
  function fo(e, t) {
    var n = e.alternate;
    n === null ? (n = ir(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = ye, n.subtreeFlags = ye, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & Sa, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var r = e.dependencies;
    switch (n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case v:
      case h:
      case X:
        n.type = hs(e.type);
        break;
      case p:
        n.type = pv(e.type);
        break;
      case V:
        n.type = hv(e.type);
        break;
    }
    return n;
  }
  function $S(e, t) {
    e.flags &= Sa | At;
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
  function HS(e, t, n) {
    var r;
    return e === Ic ? (r = Je, t === !0 && (r |= Ct, r |= Gr)) : r = ve, Dr && (r |= ot), ir(L, null, null, r);
  }
  function bv(e, t, n, r, i, u) {
    var m = v, g = e;
    if (typeof e == "function")
      Lv(e) ? (m = p, g = pv(g)) : g = hs(g);
    else if (typeof e == "string")
      m = C;
    else
      e: switch (e) {
        case D:
          return bi(n.children, i, u, t);
        case Q:
          m = O, i |= Ct, (i & Je) !== ve && (i |= Gr);
          break;
        case re:
          return JS(n, i, u, t);
        case Pe:
          return BS(n, i, u, t);
        case Ae:
          return IS(n, i, u, t);
        case Rr:
          return UL(n, i, u, t);
        case jr:
        case Lt:
        case Gt:
        case Oi:
        case yn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                m = k;
                break e;
              case $e:
                m = M;
                break e;
              case Se:
                m = V, g = hv(g);
                break e;
              case bt:
                m = I;
                break e;
              case Ve:
                m = De, g = null;
                break e;
            }
          var b = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var w = r ? _e(r) : null;
            w && (b += `

Check the render method of \`` + w + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
        }
      }
    var E = ir(m, n, t, i);
    return E.elementType = e, E.type = g, E.lanes = u, E._debugOwner = r, E;
  }
  function xv(e, t, n) {
    var r = null;
    r = e._owner;
    var i = e.type, u = e.key, m = e.props, g = bv(i, u, m, r, t, n);
    return g._debugSource = e._source, g._debugOwner = e._owner, g;
  }
  function bi(e, t, n, r) {
    var i = ir(F, e, r, t);
    return i.lanes = n, i;
  }
  function JS(e, t, n, r) {
    typeof e.id != "string" && c('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var i = ir(R, e, r, t | ot);
    return i.elementType = re, i.lanes = n, i.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, i;
  }
  function BS(e, t, n, r) {
    var i = ir(P, e, r, t);
    return i.elementType = Pe, i.lanes = n, i;
  }
  function IS(e, t, n, r) {
    var i = ir(Le, e, r, t);
    return i.elementType = Ae, i.lanes = n, i;
  }
  function UL(e, t, n, r) {
    var i = ir(pe, e, r, t);
    i.elementType = Rr, i.lanes = n;
    var u = {
      isHidden: !1
    };
    return i.stateNode = u, i;
  }
  function Sv(e, t, n) {
    var r = ir(j, e, null, t);
    return r.lanes = n, r;
  }
  function YS() {
    var e = ir(C, null, null, ve);
    return e.elementType = "DELETED", e;
  }
  function KS(e) {
    var t = ir(he, null, null, ve);
    return t.stateNode = e, t;
  }
  function Nv(e, t, n) {
    var r = e.children !== null ? e.children : [], i = ir(x, r, e.key, t);
    return i.lanes = n, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, i;
  }
  function VL(e, t) {
    return e === null && (e = ir(v, null, null, ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function WS(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ap, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Zt, this.eventTimes = Rm(q), this.expirationTimes = Rm(pt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = Rm(q), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], m = 0; m < am; m++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Ic:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case si:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function FL(e, t, n, r, i, u, m, g, b, w) {
    var E = new WS(e, t, n, g, b), A = HS(t, u);
    E.current = A, A.stateNode = E;
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
    return Pp(A), E;
  }
  var wv = "18.3.1";
  function GS(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return cr(r), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Er,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var Cv, Ev;
  Cv = !1, Ev = {};
  function zL(e) {
    if (!e)
      return ar;
    var t = To(e), n = kx(t);
    if (t.tag === p) {
      var r = t.type;
      if (Xr(r))
        return m0(t, r, n);
    }
    return n;
  }
  function qS(e, t) {
    {
      var n = To(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var r = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
      }
      var i = U1(n);
      if (i === null)
        return null;
      if (i.mode & Ct) {
        var u = _e(n) || "Component";
        if (!Ev[u]) {
          Ev[u] = !0;
          var m = Ln;
          try {
            xt(i), n.mode & Ct ? c("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : c("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            m ? xt(m) : qt();
          }
        }
      }
      return i.stateNode;
    }
  }
  function $L(e, t, n, r, i, u, m, g) {
    var b = !1, w = null;
    return FL(e, t, b, w, n, r, i, u, m);
  }
  function HL(e, t, n, r, i, u, m, g, b, w) {
    var E = !0, A = FL(n, r, E, e, i, u, m, g, b);
    A.context = zL(null);
    var _ = A.current, H = On(), B = yi(_), K = ka(H, B);
    return K.callback = t ?? null, ci(_, K, B), rS(A, B, H), A;
  }
  function gu(e, t, n, r) {
    w5(t, e);
    var i = t.current, u = On(), m = yi(i);
    B5(m);
    var g = zL(n);
    t.context === null ? t.context = g : t.pendingContext = g, Mi && Ln !== null && !Cv && (Cv = !0, c(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, _e(Ln) || "Unknown"));
    var b = ka(u, m);
    b.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && c("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r), b.callback = r);
    var w = ci(i, b, m);
    return w !== null && (Yt(w, i, m, u), sf(w, i, m)), m;
  }
  function qf(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case C:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function QS(e) {
    switch (e.tag) {
      case L: {
        var t = e.stateNode;
        if (hc(t)) {
          var n = Z5(t);
          sS(t, n);
        }
        break;
      }
      case P: {
        Ma(function() {
          var i = $n(e, Re);
          if (i !== null) {
            var u = On();
            Yt(i, e, Re, u);
          }
        });
        var r = Re;
        Rv(e, r);
        break;
      }
    }
  }
  function JL(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = i8(n.retryLane, t));
  }
  function Rv(e, t) {
    JL(e, t);
    var n = e.alternate;
    n && JL(n, t);
  }
  function XS(e) {
    if (e.tag === P) {
      var t = nl, n = $n(e, t);
      if (n !== null) {
        var r = On();
        Yt(n, e, t, r);
      }
      Rv(e, t);
    }
  }
  function ZS(e) {
    if (e.tag === P) {
      var t = yi(e), n = $n(e, t);
      if (n !== null) {
        var r = On();
        Yt(n, e, t, r);
      }
      Rv(e, t);
    }
  }
  function BL(e) {
    var t = h5(e);
    return t === null ? null : t.stateNode;
  }
  var IL = function(e) {
    return null;
  };
  function eN(e) {
    return IL(e);
  }
  var YL = function(e) {
    return !1;
  };
  function tN(e) {
    return YL(e);
  }
  var KL = null, WL = null, GL = null, qL = null, QL = null, XL = null, ZL = null, eb = null, tb = null;
  {
    var nb = function(e, t, n) {
      var r = t[n], i = Xe(e) ? e.slice() : ze({}, e);
      return n + 1 === t.length ? (Xe(i) ? i.splice(r, 1) : delete i[r], i) : (i[r] = nb(e[r], t, n + 1), i);
    }, rb = function(e, t) {
      return nb(e, t, 0);
    }, ab = function(e, t, n, r) {
      var i = t[r], u = Xe(e) ? e.slice() : ze({}, e);
      if (r + 1 === t.length) {
        var m = n[r];
        u[m] = u[i], Xe(u) ? u.splice(i, 1) : delete u[i];
      } else
        u[i] = ab(
          // $FlowFixMe number or string is fine here
          e[i],
          t,
          n,
          r + 1
        );
      return u;
    }, ib = function(e, t, n) {
      if (t.length !== n.length) {
        f("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var r = 0; r < n.length - 1; r++)
          if (t[r] !== n[r]) {
            f("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return ab(e, t, n, 0);
    }, ob = function(e, t, n, r) {
      if (n >= t.length)
        return r;
      var i = t[n], u = Xe(e) ? e.slice() : ze({}, e);
      return u[i] = ob(e[i], t, n + 1, r), u;
    }, sb = function(e, t, n) {
      return ob(e, t, 0, n);
    }, jv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    KL = function(e, t, n, r) {
      var i = jv(e, t);
      if (i !== null) {
        var u = sb(i.memoizedState, n, r);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, Re);
        m !== null && Yt(m, e, Re, pt);
      }
    }, WL = function(e, t, n) {
      var r = jv(e, t);
      if (r !== null) {
        var i = rb(r.memoizedState, n);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = ze({}, e.memoizedProps);
        var u = $n(e, Re);
        u !== null && Yt(u, e, Re, pt);
      }
    }, GL = function(e, t, n, r) {
      var i = jv(e, t);
      if (i !== null) {
        var u = ib(i.memoizedState, n, r);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, Re);
        m !== null && Yt(m, e, Re, pt);
      }
    }, qL = function(e, t, n) {
      e.pendingProps = sb(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = $n(e, Re);
      r !== null && Yt(r, e, Re, pt);
    }, QL = function(e, t) {
      e.pendingProps = rb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = $n(e, Re);
      n !== null && Yt(n, e, Re, pt);
    }, XL = function(e, t, n) {
      e.pendingProps = ib(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = $n(e, Re);
      r !== null && Yt(r, e, Re, pt);
    }, ZL = function(e) {
      var t = $n(e, Re);
      t !== null && Yt(t, e, Re, pt);
    }, eb = function(e) {
      IL = e;
    }, tb = function(e) {
      YL = e;
    };
  }
  function nN(e) {
    var t = U1(e);
    return t === null ? null : t.stateNode;
  }
  function rN(e) {
    return null;
  }
  function aN() {
    return Ln;
  }
  function iN(e) {
    var t = e.findFiberByHostInstance, n = s.ReactCurrentDispatcher;
    return N5({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: KL,
      overrideHookStateDeletePath: WL,
      overrideHookStateRenamePath: GL,
      overrideProps: qL,
      overridePropsDeletePath: QL,
      overridePropsRenamePath: XL,
      setErrorHandler: eb,
      setSuspenseHandler: tb,
      scheduleUpdate: ZL,
      currentDispatcherRef: n,
      findHostInstanceByFiber: nN,
      findFiberByHostInstance: t || rN,
      // React Refresh
      findHostInstancesForRefresh: MS,
      scheduleRefresh: _S,
      scheduleRoot: AS,
      setRefreshHandler: OS,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: aN,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: wv
    });
  }
  var lb = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function Tv(e) {
    this._internalRoot = e;
  }
  Qf.prototype.render = Tv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? c("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xf(arguments[1]) ? c("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && c("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== _t) {
        var r = BL(t.current);
        r && r.parentNode !== n && c("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    gu(e, t, null, null);
  }, Qf.prototype.unmount = Tv.prototype.unmount = function() {
    typeof arguments[0] == "function" && c("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      bL() && c("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ma(function() {
        gu(null, e, null, null);
      }), l0(t);
    }
  };
  function oN(e, t) {
    if (!Xf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    ub(e);
    var n = !1, r = !1, i = "", u = lb;
    t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yr && c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var m = $L(e, Ic, null, n, r, i, u);
    Vc(m.current, e);
    var g = e.nodeType === _t ? e.parentNode : e;
    return Nl(g), new Tv(m);
  }
  function Qf(e) {
    this._internalRoot = e;
  }
  function sN(e) {
    e && S8(e);
  }
  Qf.prototype.unstable_scheduleHydration = sN;
  function lN(e, t, n) {
    if (!Xf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    ub(e), t === void 0 && c("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var r = n ?? null, i = n != null && n.hydratedSources || null, u = !1, m = !1, g = "", b = lb;
    n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (g = n.identifierPrefix), n.onRecoverableError !== void 0 && (b = n.onRecoverableError));
    var w = HL(t, null, e, Ic, r, u, m, g, b);
    if (Vc(w.current, e), Nl(e), i)
      for (var E = 0; E < i.length; E++) {
        var A = i[E];
        d9(w, A);
      }
    return new Qf(w);
  }
  function Xf(e) {
    return !!(e && (e.nodeType === Fn || e.nodeType === ya || e.nodeType === Pd || !Rt));
  }
  function yu(e) {
    return !!(e && (e.nodeType === Fn || e.nodeType === ya || e.nodeType === Pd || e.nodeType === _t && e.nodeValue === " react-mount-point-unstable "));
  }
  function ub(e) {
    e.nodeType === Fn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Al(e) && (e._reactRootContainer ? c("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : c("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var uN = s.ReactCurrentOwner, cb;
  cb = function(e) {
    if (e._reactRootContainer && e.nodeType !== _t) {
      var t = BL(e._reactRootContainer.current);
      t && t.parentNode !== e && c("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, r = Dv(e), i = !!(r && ii(r));
    i && !n && c("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Fn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function Dv(e) {
    return e ? e.nodeType === ya ? e.documentElement : e.firstChild : null;
  }
  function fb() {
  }
  function cN(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var _ = qf(m);
          u.call(_);
        };
      }
      var m = HL(
        t,
        r,
        e,
        si,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fb
      );
      e._reactRootContainer = m, Vc(m.current, e);
      var g = e.nodeType === _t ? e.parentNode : e;
      return Nl(g), Ma(), m;
    } else {
      for (var b; b = e.lastChild; )
        e.removeChild(b);
      if (typeof r == "function") {
        var w = r;
        r = function() {
          var _ = qf(E);
          w.call(_);
        };
      }
      var E = $L(
        e,
        si,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fb
      );
      e._reactRootContainer = E, Vc(E.current, e);
      var A = e.nodeType === _t ? e.parentNode : e;
      return Nl(A), Ma(function() {
        gu(t, E, n, r);
      }), E;
    }
  }
  function fN(e, t) {
    e !== null && typeof e != "function" && c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Zf(e, t, n, r, i) {
    cb(n), fN(i === void 0 ? null : i, "render");
    var u = n._reactRootContainer, m;
    if (!u)
      m = cN(n, t, e, i, r);
    else {
      if (m = u, typeof i == "function") {
        var g = i;
        i = function() {
          var b = qf(m);
          g.call(b);
        };
      }
      gu(t, m, e, i);
    }
    return qf(m);
  }
  var db = !1;
  function dN(e) {
    {
      db || (db = !0, c("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = uN.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || c("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Fn ? e : qS(e, "findDOMNode");
  }
  function mN(e, t, n) {
    if (c("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Al(t) && t._reactRootContainer === void 0;
      r && c("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Zf(null, e, t, !0, n);
  }
  function pN(e, t, n) {
    if (c("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Al(t) && t._reactRootContainer === void 0;
      r && c("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Zf(null, e, t, !1, n);
  }
  function hN(e, t, n, r) {
    if (c("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !l5(e))
      throw new Error("parentComponent must be a valid React Component");
    return Zf(e, t, n, !1, r);
  }
  var mb = !1;
  function vN(e) {
    if (mb || (mb = !0, c("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !yu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Al(e) && e._reactRootContainer === void 0;
      t && c("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = Dv(e), r = n && !ii(n);
        r && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Ma(function() {
        Zf(null, null, e, !1, function() {
          e._reactRootContainer = null, l0(e);
        });
      }), !0;
    } else {
      {
        var i = Dv(e), u = !!(i && ii(i)), m = e.nodeType === Fn && yu(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  d8(QS), p8(XS), h8(ZS), v8(kr), g8(u8), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && c("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Q4(y6), e5(sv, lS, Ma);
  function gN(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xf(t))
      throw new Error("Target container is not a DOM element.");
    return GS(e, t, null, n);
  }
  function yN(e, t, n, r) {
    return hN(e, t, n, r);
  }
  var kv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [ii, Yo, Fc, C1, E1, sv]
  };
  function LN(e, t) {
    return kv.usingClientEntryPoint || c('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), oN(e, t);
  }
  function bN(e, t, n) {
    return kv.usingClientEntryPoint || c('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lN(e, t, n);
  }
  function xN(e) {
    return bL() && c("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ma(e);
  }
  var SN = iN({
    findFiberByHostInstance: qi,
    bundleType: 1,
    version: wv,
    rendererPackageName: "react-dom"
  });
  if (!SN && Ot && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var pb = window.location.protocol;
    /^(https?|file):$/.test(pb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv, sr.createPortal = gN, sr.createRoot = LN, sr.findDOMNode = dN, sr.flushSync = xN, sr.hydrate = mN, sr.hydrateRoot = bN, sr.render = pN, sr.unmountComponentAtNode = vN, sr.unstable_batchedUpdates = sv, sr.unstable_renderSubtreeIntoContainer = yN, sr.version = wv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
o3.exports = sr;
var DN = o3.exports, u3, vb = DN;
{
  var gb = vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  u3 = function(o, a) {
    gb.usingClientEntryPoint = !0;
    try {
      return vb.createRoot(o, a);
    } finally {
      gb.usingClientEntryPoint = !1;
    }
  };
}
var c3 = { exports: {} }, f3 = {};
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
  var o = U;
  function a(p, v) {
    return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : a, l = o.useSyncExternalStore, d = o.useRef, f = o.useEffect, c = o.useMemo, y = o.useDebugValue;
  function h(p, v, L, x, C) {
    var j = d(null), F;
    j.current === null ? (F = {
      hasValue: !1,
      value: null
    }, j.current = F) : F = j.current;
    var O = c(function() {
      var R = !1, P, I, X = function(Le) {
        if (!R) {
          R = !0, P = Le;
          var nt = x(Le);
          if (C !== void 0 && F.hasValue) {
            var pe = F.value;
            if (C(pe, nt))
              return I = pe, pe;
          }
          return I = nt, nt;
        }
        var Ne = P, we = I;
        if (s(Ne, Le))
          return we;
        var et = x(Le);
        return C !== void 0 && C(we, et) ? we : (P = Le, I = et, et);
      }, De = L === void 0 ? null : L, ke = function() {
        return X(v());
      }, he = De === null ? void 0 : function() {
        return X(De());
      };
      return [ke, he];
    }, [v, L, x, C]), M = O[0], k = O[1], V = l(p, M, k);
    return f(function() {
      F.hasValue = !0, F.value = V;
    }, [V]), y(V), V;
  }
  f3.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
c3.exports = f3;
var kN = c3.exports, lr = (
  // prettier-ignore
  // @ts-ignore
  "default" in zv ? Sd : zv
), yb = Symbol.for("react-redux-context"), Lb = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ON() {
  if (!lr.createContext)
    return {};
  const o = Lb[yb] ?? (Lb[yb] = /* @__PURE__ */ new Map());
  let a = o.get(lr.createContext);
  return a || (a = lr.createContext(
    null
  ), a.displayName = "ReactRedux", o.set(lr.createContext, a)), a;
}
var Ci = /* @__PURE__ */ ON(), _N = () => {
  throw new Error("uSES not initialized!");
};
function e1(o = Ci) {
  return function() {
    const s = lr.useContext(o);
    if (!s)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return s;
  };
}
var d3 = /* @__PURE__ */ e1(), m3 = _N, AN = (o) => {
  m3 = o;
}, MN = (o, a) => o === a;
function PN(o = Ci) {
  const a = o === Ci ? d3 : e1(o), s = (l, d = {}) => {
    const { equalityFn: f = MN, devModeChecks: c = {} } = typeof d == "function" ? { equalityFn: d } : d;
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
      identityFunctionCheck: L
    } = a(), x = lr.useRef(!0), C = lr.useCallback(
      {
        [l.name](F) {
          const O = l(F);
          {
            const {
              identityFunctionCheck: M,
              stabilityCheck: k
            } = {
              stabilityCheck: v,
              identityFunctionCheck: L,
              ...c
            };
            if (k === "always" || k === "once" && x.current) {
              const V = l(F);
              if (!f(O, V)) {
                let R;
                try {
                  throw new Error();
                } catch (P) {
                  ({ stack: R } = P);
                }
                console.warn(
                  "Selector " + (l.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: F,
                    selected: O,
                    selected2: V,
                    stack: R
                  }
                );
              }
            }
            if ((M === "always" || M === "once" && x.current) && O === F) {
              let V;
              try {
                throw new Error();
              } catch (R) {
                ({ stack: V } = R);
              }
              console.warn(
                "Selector " + (l.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: V }
              );
            }
            x.current && (x.current = !1);
          }
          return O;
        }
      }[l.name],
      [l, v, c.stabilityCheck]
    ), j = m3(
      h.addNestedSub,
      y.getState,
      p || y.getState,
      C,
      f
    );
    return lr.useDebugValue(j), j;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ri = /* @__PURE__ */ PN();
function UN(o) {
  o();
}
function VN() {
  let o = null, a = null;
  return {
    clear() {
      o = null, a = null;
    },
    notify() {
      UN(() => {
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
var bb = {
  notify() {
  },
  get: () => []
};
function FN(o, a) {
  let s, l = bb, d = 0, f = !1;
  function c(F) {
    v();
    const O = l.subscribe(F);
    let M = !1;
    return () => {
      M || (M = !0, O(), L());
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
    d++, s || (s = o.subscribe(h), l = VN());
  }
  function L() {
    d--, s && d === 0 && (s(), s = void 0, l.clear(), l = bb);
  }
  function x() {
    f || (f = !0, v());
  }
  function C() {
    f && (f = !1, L());
  }
  const j = {
    addNestedSub: c,
    notifyNestedSubs: y,
    handleChangeWrapper: h,
    isSubscribed: p,
    trySubscribe: x,
    tryUnsubscribe: C,
    getListeners: () => l
  };
  return j;
}
var zN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $N = typeof navigator < "u" && navigator.product === "ReactNative", HN = zN || $N ? lr.useLayoutEffect : lr.useEffect;
function JN({
  store: o,
  context: a,
  children: s,
  serverState: l,
  stabilityCheck: d = "once",
  identityFunctionCheck: f = "once"
}) {
  const c = lr.useMemo(() => {
    const p = FN(o);
    return {
      store: o,
      subscription: p,
      getServerState: l ? () => l : void 0,
      stabilityCheck: d,
      identityFunctionCheck: f
    };
  }, [o, l, d, f]), y = lr.useMemo(() => o.getState(), [o]);
  HN(() => {
    const { subscription: p } = c;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), y !== o.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [c, y]);
  const h = a || Ci;
  return /* @__PURE__ */ lr.createElement(h.Provider, { value: c }, s);
}
var BN = JN;
function p3(o = Ci) {
  const a = o === Ci ? d3 : (
    // @ts-ignore
    e1(o)
  ), s = () => {
    const { store: l } = a();
    return l;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var IN = /* @__PURE__ */ p3();
function YN(o = Ci) {
  const a = o === Ci ? IN : p3(o), s = () => a().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var _u = /* @__PURE__ */ YN();
AN(kN.useSyncExternalStoreWithSelector);
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
var Ni;
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(Ni || (Ni = {}));
const xb = "popstate";
function KN(o) {
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
  return GN(a, s, null, o);
}
function Nt(o, a) {
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
function WN() {
  return Math.random().toString(36).substr(2, 8);
}
function Sb(o, a) {
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
  }, typeof a == "string" ? Cs(a) : a, {
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || l || WN()
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
function Cs(o) {
  let a = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && (a.hash = o.substr(s), o = o.substr(0, s));
    let l = o.indexOf("?");
    l >= 0 && (a.search = o.substr(l), o = o.substr(0, l)), o && (a.pathname = o);
  }
  return a;
}
function GN(o, a, s, l) {
  l === void 0 && (l = {});
  let {
    window: d = document.defaultView,
    v5Compat: f = !1
  } = l, c = d.history, y = Ni.Pop, h = null, p = v();
  p == null && (p = 0, c.replaceState(Ru({}, c.state, {
    idx: p
  }), ""));
  function v() {
    return (c.state || {
      idx: null
    }).idx;
  }
  function L() {
    y = Ni.Pop;
    let O = v(), M = O == null ? null : O - p;
    p = O, h && h({
      action: y,
      location: F.location,
      delta: M
    });
  }
  function x(O, M) {
    y = Ni.Push;
    let k = $v(F.location, O, M);
    p = v() + 1;
    let V = Sb(k, p), R = F.createHref(k);
    try {
      c.pushState(V, "", R);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError")
        throw P;
      d.location.assign(R);
    }
    f && h && h({
      action: y,
      location: F.location,
      delta: 1
    });
  }
  function C(O, M) {
    y = Ni.Replace;
    let k = $v(F.location, O, M);
    p = v();
    let V = Sb(k, p), R = F.createHref(k);
    c.replaceState(V, "", R), f && h && h({
      action: y,
      location: F.location,
      delta: 0
    });
  }
  function j(O) {
    let M = d.location.origin !== "null" ? d.location.origin : d.location.href, k = typeof O == "string" ? O : ju(O);
    return k = k.replace(/ $/, "%20"), Nt(M, "No window.location.(origin|href) available to create URL for href: " + k), new URL(k, M);
  }
  let F = {
    get action() {
      return y;
    },
    get location() {
      return o(d, c);
    },
    listen(O) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(xb, L), h = O, () => {
        d.removeEventListener(xb, L), h = null;
      };
    },
    createHref(O) {
      return a(d, O);
    },
    createURL: j,
    encodeLocation(O) {
      let M = j(O);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: x,
    replace: C,
    go(O) {
      return c.go(O);
    }
  };
  return F;
}
var Nb;
(function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
})(Nb || (Nb = {}));
function qN(o, a, s) {
  return s === void 0 && (s = "/"), QN(o, a, s, !1);
}
function QN(o, a, s, l) {
  let d = typeof a == "string" ? Cs(a) : a, f = Ei(d.pathname || "/", s);
  if (f == null)
    return null;
  let c = h3(o);
  XN(c);
  let y = null;
  for (let h = 0; y == null && h < c.length; ++h) {
    let p = uw(f);
    y = sw(c[h], p, l);
  }
  return y;
}
function h3(o, a, s, l) {
  a === void 0 && (a = []), s === void 0 && (s = []), l === void 0 && (l = "");
  let d = (f, c, y) => {
    let h = {
      relativePath: y === void 0 ? f.path || "" : y,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: c,
      route: f
    };
    h.relativePath.startsWith("/") && (Nt(h.relativePath.startsWith(l), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(l.length));
    let p = $a([l, h.relativePath]), v = s.concat(h);
    f.children && f.children.length > 0 && (Nt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), h3(f.children, a, v, p)), !(f.path == null && !f.index) && a.push({
      path: p,
      score: iw(p, f.index),
      routesMeta: v
    });
  };
  return o.forEach((f, c) => {
    var y;
    if (f.path === "" || !((y = f.path) != null && y.includes("?")))
      d(f, c);
    else
      for (let h of v3(f.path))
        d(f, c, h);
  }), a;
}
function v3(o) {
  let a = o.split("/");
  if (a.length === 0) return [];
  let [s, ...l] = a, d = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (l.length === 0)
    return d ? [f, ""] : [f];
  let c = v3(l.join("/")), y = [];
  return y.push(...c.map((h) => h === "" ? f : [f, h].join("/"))), d && y.push(...c), y.map((h) => o.startsWith("/") && h === "" ? "/" : h);
}
function XN(o) {
  o.sort((a, s) => a.score !== s.score ? s.score - a.score : ow(a.routesMeta.map((l) => l.childrenIndex), s.routesMeta.map((l) => l.childrenIndex)));
}
const ZN = /^:[\w-]+$/, ew = 3, tw = 2, nw = 1, rw = 10, aw = -2, wb = (o) => o === "*";
function iw(o, a) {
  let s = o.split("/"), l = s.length;
  return s.some(wb) && (l += aw), a && (l += tw), s.filter((d) => !wb(d)).reduce((d, f) => d + (ZN.test(f) ? ew : f === "" ? nw : rw), l);
}
function ow(o, a) {
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
function sw(o, a, s) {
  let {
    routesMeta: l
  } = o, d = {}, f = "/", c = [];
  for (let y = 0; y < l.length; ++y) {
    let h = l[y], p = y === l.length - 1, v = f === "/" ? a : a.slice(f.length) || "/", L = pd({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: p
    }, v), x = h.route;
    if (!L && p && s && !l[l.length - 1].route.index && (L = pd({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: !1
    }, v)), !L)
      return null;
    Object.assign(d, L.params), c.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: $a([f, L.pathname]),
      pathnameBase: mw($a([f, L.pathnameBase])),
      route: x
    }), L.pathnameBase !== "/" && (f = $a([f, L.pathnameBase]));
  }
  return c;
}
function pd(o, a) {
  typeof o == "string" && (o = {
    path: o,
    caseSensitive: !1,
    end: !0
  });
  let [s, l] = lw(o.path, o.caseSensitive, o.end), d = a.match(s);
  if (!d) return null;
  let f = d[0], c = f.replace(/(.)\/+$/, "$1"), y = d.slice(1);
  return {
    params: l.reduce((p, v, L) => {
      let {
        paramName: x,
        isOptional: C
      } = v;
      if (x === "*") {
        let F = y[L] || "";
        c = f.slice(0, f.length - F.length).replace(/(.)\/+$/, "$1");
      }
      const j = y[L];
      return C && !j ? p[x] = void 0 : p[x] = (j || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: f,
    pathnameBase: c,
    pattern: o
  };
}
function lw(o, a, s) {
  a === void 0 && (a = !1), s === void 0 && (s = !0), la(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were ' + ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'));
  let l = [], d = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, y, h) => (l.push({
    paramName: y,
    isOptional: h != null
  }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (l.push({
    paramName: "*"
  }), d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), l];
}
function uw(o) {
  try {
    return o.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return la(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + a + ").")), o;
  }
}
function Ei(o, a) {
  if (a === "/") return o;
  if (!o.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let s = a.endsWith("/") ? a.length - 1 : a.length, l = o.charAt(s);
  return l && l !== "/" ? null : o.slice(s) || "/";
}
function cw(o, a) {
  a === void 0 && (a = "/");
  let {
    pathname: s,
    search: l = "",
    hash: d = ""
  } = typeof o == "string" ? Cs(o) : o;
  return {
    pathname: s ? s.startsWith("/") ? s : fw(s, a) : a,
    search: pw(l),
    hash: hw(d)
  };
}
function fw(o, a) {
  let s = a.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function _v(o, a, s, l) {
  return "Cannot include a '" + o + "' character in a manually specified " + ("`to." + a + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function dw(o) {
  return o.filter((a, s) => s === 0 || a.route.path && a.route.path.length > 0);
}
function g3(o, a) {
  let s = dw(o);
  return a ? s.map((l, d) => d === s.length - 1 ? l.pathname : l.pathnameBase) : s.map((l) => l.pathnameBase);
}
function y3(o, a, s, l) {
  l === void 0 && (l = !1);
  let d;
  typeof o == "string" ? d = Cs(o) : (d = Ru({}, o), Nt(!d.pathname || !d.pathname.includes("?"), _v("?", "pathname", "search", d)), Nt(!d.pathname || !d.pathname.includes("#"), _v("#", "pathname", "hash", d)), Nt(!d.search || !d.search.includes("#"), _v("#", "search", "hash", d)));
  let f = o === "" || d.pathname === "", c = f ? "/" : d.pathname, y;
  if (c == null)
    y = s;
  else {
    let L = a.length - 1;
    if (!l && c.startsWith("..")) {
      let x = c.split("/");
      for (; x[0] === ".."; )
        x.shift(), L -= 1;
      d.pathname = x.join("/");
    }
    y = L >= 0 ? a[L] : "/";
  }
  let h = cw(d, y), p = c && c !== "/" && c.endsWith("/"), v = (f || c === ".") && s.endsWith("/");
  return !h.pathname.endsWith("/") && (p || v) && (h.pathname += "/"), h;
}
const $a = (o) => o.join("/").replace(/\/\/+/g, "/"), mw = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), pw = (o) => !o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o, hw = (o) => !o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o;
function vw(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const L3 = ["post", "put", "patch", "delete"];
new Set(L3);
const gw = ["get", ...L3];
new Set(gw);
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
const Au = /* @__PURE__ */ U.createContext(null);
Au.displayName = "DataRouter";
const t1 = /* @__PURE__ */ U.createContext(null);
t1.displayName = "DataRouterState";
const yw = /* @__PURE__ */ U.createContext(null);
yw.displayName = "Await";
const Jr = /* @__PURE__ */ U.createContext(null);
Jr.displayName = "Navigation";
const Mu = /* @__PURE__ */ U.createContext(null);
Mu.displayName = "Location";
const Ha = /* @__PURE__ */ U.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ha.displayName = "Route";
const n1 = /* @__PURE__ */ U.createContext(null);
n1.displayName = "RouteError";
function Lw(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a;
  Pu() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: l,
    navigator: d
  } = U.useContext(Jr), {
    hash: f,
    pathname: c,
    search: y
  } = Vu(o, {
    relative: s
  }), h = c;
  return l !== "/" && (h = c === "/" ? l : $a([l, c])), d.createHref({
    pathname: h,
    search: y,
    hash: f
  });
}
function Pu() {
  return U.useContext(Mu) != null;
}
function Es() {
  return Pu() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), U.useContext(Mu).location;
}
const b3 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function x3(o) {
  U.useContext(Jr).static || U.useLayoutEffect(o);
}
function Uu() {
  let {
    isDataRoute: o
  } = U.useContext(Ha);
  return o ? _w() : bw();
}
function bw() {
  Pu() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = U.useContext(Au), {
    basename: a,
    future: s,
    navigator: l
  } = U.useContext(Jr), {
    matches: d
  } = U.useContext(Ha), {
    pathname: f
  } = Es(), c = JSON.stringify(g3(d, s.v7_relativeSplatPath)), y = U.useRef(!1);
  return x3(() => {
    y.current = !0;
  }), U.useCallback(function(p, v) {
    if (v === void 0 && (v = {}), la(y.current, b3), !y.current) return;
    if (typeof p == "number") {
      l.go(p);
      return;
    }
    let L = y3(p, JSON.parse(c), f, v.relative === "path");
    o == null && a !== "/" && (L.pathname = L.pathname === "/" ? a : $a([a, L.pathname])), (v.replace ? l.replace : l.push)(L, v.state, v);
  }, [a, l, c, f, o]);
}
function Vu(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a, {
    future: l
  } = U.useContext(Jr), {
    matches: d
  } = U.useContext(Ha), {
    pathname: f
  } = Es(), c = JSON.stringify(g3(d, l.v7_relativeSplatPath));
  return U.useMemo(() => y3(o, JSON.parse(c), f, s === "path"), [o, c, f, s]);
}
function xw(o, a) {
  return Sw(o, a);
}
function Sw(o, a, s, l) {
  Pu() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = U.useContext(Jr), {
    matches: f
  } = U.useContext(Ha), c = f[f.length - 1], y = c ? c.params : {}, h = c ? c.pathname : "/", p = c ? c.pathnameBase : "/", v = c && c.route;
  {
    let k = v && v.path || "";
    N3(h, !v || k.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + h + '" (under <Route path="' + k + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + k + '"> to <Route ') + ('path="' + (k === "/" ? "*" : k + "/*") + '">.'));
  }
  let L = Es(), x;
  if (a) {
    var C;
    let k = typeof a == "string" ? Cs(a) : a;
    p === "/" || (C = k.pathname) != null && C.startsWith(p) || Nt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + k.pathname + '" was given in the `location` prop.')), x = k;
  } else
    x = L;
  let j = x.pathname || "/", F = j;
  if (p !== "/") {
    let k = p.replace(/^\//, "").split("/");
    F = "/" + j.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let O = qN(o, {
    pathname: F
  });
  la(v || O != null, 'No routes matched location "' + x.pathname + x.search + x.hash + '" '), la(O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + x.pathname + x.search + x.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let M = Rw(O && O.map((k) => Object.assign({}, k, {
    params: Object.assign({}, y, k.params),
    pathname: $a([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(k.pathname).pathname : k.pathname
    ]),
    pathnameBase: k.pathnameBase === "/" ? p : $a([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(k.pathnameBase).pathname : k.pathnameBase
    ])
  })), f, s, l);
  return a && M ? /* @__PURE__ */ U.createElement(Mu.Provider, {
    value: {
      location: Tu({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, x),
      navigationType: Ni.Pop
    }
  }, M) : M;
}
function Nw() {
  let o = Ow(), a = vw(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), s = o instanceof Error ? o.stack : null, l = "rgba(200,200,200, 0.5)", d = {
    padding: "0.5rem",
    backgroundColor: l
  }, f = {
    padding: "2px 4px",
    backgroundColor: l
  }, c = null;
  return console.error("Error handled by React Router default ErrorBoundary:", o), c = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ U.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ U.createElement("code", {
    style: f
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ U.createElement("code", {
    style: f
  }, "errorElement"), " prop on your route.")), /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ U.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, a), s ? /* @__PURE__ */ U.createElement("pre", {
    style: d
  }, s) : null, c);
}
const ww = /* @__PURE__ */ U.createElement(Nw, null);
class Cw extends U.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ U.createElement(Ha.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ U.createElement(n1.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Ew(o) {
  let {
    routeContext: a,
    match: s,
    children: l
  } = o, d = U.useContext(Au);
  return d && d.static && d.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = s.route.id), /* @__PURE__ */ U.createElement(Ha.Provider, {
    value: a
  }, l);
}
function Rw(o, a, s, l) {
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
    let v = c.findIndex((L) => L.route.id && (y == null ? void 0 : y[L.route.id]) !== void 0);
    v >= 0 || Nt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")), c = c.slice(0, Math.min(c.length, v + 1));
  }
  let h = !1, p = -1;
  if (s && l && l.v7_partialHydration)
    for (let v = 0; v < c.length; v++) {
      let L = c[v];
      if ((L.route.HydrateFallback || L.route.hydrateFallbackElement) && (p = v), L.route.id) {
        let {
          loaderData: x,
          errors: C
        } = s, j = L.route.loader && x[L.route.id] === void 0 && (!C || C[L.route.id] === void 0);
        if (L.route.lazy || j) {
          h = !0, p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((v, L, x) => {
    let C, j = !1, F = null, O = null;
    s && (C = y && L.route.id ? y[L.route.id] : void 0, F = L.route.errorElement || ww, h && (p < 0 && x === 0 ? (N3("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, O = null) : p === x && (j = !0, O = L.route.hydrateFallbackElement || null)));
    let M = a.concat(c.slice(0, x + 1)), k = () => {
      let V;
      return C ? V = F : j ? V = O : L.route.Component ? V = /* @__PURE__ */ U.createElement(L.route.Component, null) : L.route.element ? V = L.route.element : V = v, /* @__PURE__ */ U.createElement(Ew, {
        match: L,
        routeContext: {
          outlet: v,
          matches: M,
          isDataRoute: s != null
        },
        children: V
      });
    };
    return s && (L.route.ErrorBoundary || L.route.errorElement || x === 0) ? /* @__PURE__ */ U.createElement(Cw, {
      location: s.location,
      revalidation: s.revalidation,
      component: F,
      error: C,
      children: k(),
      routeContext: {
        outlet: null,
        matches: M,
        isDataRoute: !0
      }
    }) : k();
  }, null);
}
var S3 = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(S3 || {}), Du = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(Du || {});
function r1(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function jw(o) {
  let a = U.useContext(Au);
  return a || Nt(!1, r1(o)), a;
}
function Tw(o) {
  let a = U.useContext(t1);
  return a || Nt(!1, r1(o)), a;
}
function Dw(o) {
  let a = U.useContext(Ha);
  return a || Nt(!1, r1(o)), a;
}
function a1(o) {
  let a = Dw(o), s = a.matches[a.matches.length - 1];
  return s.route.id || Nt(!1, o + ' can only be used on routes that contain a unique "id"'), s.route.id;
}
function kw() {
  return a1(Du.UseRouteId);
}
function Ow() {
  var o;
  let a = U.useContext(n1), s = Tw(Du.UseRouteError), l = a1(Du.UseRouteError);
  return a !== void 0 ? a : (o = s.errors) == null ? void 0 : o[l];
}
function _w() {
  let {
    router: o
  } = jw(S3.UseNavigateStable), a = a1(Du.UseNavigateStable), s = U.useRef(!1);
  return x3(() => {
    s.current = !0;
  }), U.useCallback(function(d, f) {
    f === void 0 && (f = {}), la(s.current, b3), s.current && (typeof d == "number" ? o.navigate(d) : o.navigate(d, Tu({
      fromRouteId: a
    }, f)));
  }, [o, a]);
}
const Cb = {};
function N3(o, a, s) {
  !a && !Cb[o] && (Cb[o] = !0, la(!1, s));
}
function Fa(o) {
  Nt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function Aw(o) {
  let {
    basename: a = "/",
    children: s = null,
    location: l,
    navigationType: d = Ni.Pop,
    navigator: f,
    static: c = !1,
    future: y
  } = o;
  Pu() && Nt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let h = a.replace(/^\/*/, "/"), p = U.useMemo(() => ({
    basename: h,
    navigator: f,
    static: c,
    future: Tu({
      v7_relativeSplatPath: !1
    }, y)
  }), [h, y, f, c]);
  typeof l == "string" && (l = Cs(l));
  let {
    pathname: v = "/",
    search: L = "",
    hash: x = "",
    state: C = null,
    key: j = "default"
  } = l, F = U.useMemo(() => {
    let O = Ei(v, h);
    return O == null ? null : {
      location: {
        pathname: O,
        search: L,
        hash: x,
        state: C,
        key: j
      },
      navigationType: d
    };
  }, [h, v, L, x, C, j, d]);
  return la(F != null, '<Router basename="' + h + '"> is not able to match the URL ' + ('"' + v + L + x + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), F == null ? null : /* @__PURE__ */ U.createElement(Jr.Provider, {
    value: p
  }, /* @__PURE__ */ U.createElement(Mu.Provider, {
    children: s,
    value: F
  }));
}
function Mw(o) {
  let {
    children: a,
    location: s
  } = o;
  return xw(Hv(a), s);
}
new Promise(() => {
});
function Hv(o, a) {
  a === void 0 && (a = []);
  let s = [];
  return U.Children.forEach(o, (l, d) => {
    if (!/* @__PURE__ */ U.isValidElement(l))
      return;
    let f = [...a, d];
    if (l.type === U.Fragment) {
      s.push.apply(s, Hv(l.props.children, f));
      return;
    }
    l.type !== Fa && Nt(!1, "[" + (typeof l.type == "string" ? l.type : l.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !l.props.index || !l.props.children || Nt(!1, "An index route cannot have child routes.");
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
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, ws.apply(this, arguments);
}
function i1(o, a) {
  if (o == null) return {};
  var s = {}, l = Object.keys(o), d, f;
  for (f = 0; f < l.length; f++)
    d = l[f], !(a.indexOf(d) >= 0) && (s[d] = o[d]);
  return s;
}
const ld = "get", ud = "application/x-www-form-urlencoded";
function Nd(o) {
  return o != null && typeof o.tagName == "string";
}
function Pw(o) {
  return Nd(o) && o.tagName.toLowerCase() === "button";
}
function Uw(o) {
  return Nd(o) && o.tagName.toLowerCase() === "form";
}
function Vw(o) {
  return Nd(o) && o.tagName.toLowerCase() === "input";
}
function Fw(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function zw(o, a) {
  return o.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Fw(o);
}
let td = null;
function $w() {
  if (td === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), td = !1;
    } catch {
      td = !0;
    }
  return td;
}
const Hw = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Av(o) {
  return o != null && !Hw.has(o) ? (la(!1, '"' + o + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ud + '"')), null) : o;
}
function Jw(o, a) {
  let s, l, d, f, c;
  if (Uw(o)) {
    let y = o.getAttribute("action");
    l = y ? Ei(y, a) : null, s = o.getAttribute("method") || ld, d = Av(o.getAttribute("enctype")) || ud, f = new FormData(o);
  } else if (Pw(o) || Vw(o) && (o.type === "submit" || o.type === "image")) {
    let y = o.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = o.getAttribute("formaction") || y.getAttribute("action");
    if (l = h ? Ei(h, a) : null, s = o.getAttribute("formmethod") || y.getAttribute("method") || ld, d = Av(o.getAttribute("formenctype")) || Av(y.getAttribute("enctype")) || ud, f = new FormData(y, o), !$w()) {
      let {
        name: p,
        type: v,
        value: L
      } = o;
      if (v === "image") {
        let x = p ? p + "." : "";
        f.append(x + "x", "0"), f.append(x + "y", "0");
      } else p && f.append(p, L);
    }
  } else {
    if (Nd(o))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = ld, l = null, d = ud, c = o;
  }
  return f && d === "text/plain" && (c = f, f = void 0), {
    action: l,
    method: s.toLowerCase(),
    encType: d,
    formData: f,
    body: c
  };
}
const Bw = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Iw = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Yw = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Kw = "6";
try {
  window.__reactRouterVersion = Kw;
} catch {
}
const w3 = /* @__PURE__ */ U.createContext({
  isTransitioning: !1
});
w3.displayName = "ViewTransition";
const Ww = /* @__PURE__ */ U.createContext(/* @__PURE__ */ new Map());
Ww.displayName = "Fetchers";
const Gw = "startTransition", Eb = zv[Gw];
function qw(o) {
  let {
    basename: a,
    children: s,
    future: l,
    window: d
  } = o, f = U.useRef();
  f.current == null && (f.current = KN({
    window: d,
    v5Compat: !0
  }));
  let c = f.current, [y, h] = U.useState({
    action: c.action,
    location: c.location
  }), {
    v7_startTransition: p
  } = l || {}, v = U.useCallback((L) => {
    p && Eb ? Eb(() => h(L)) : h(L);
  }, [h, p]);
  return U.useLayoutEffect(() => c.listen(v), [c, v]), /* @__PURE__ */ U.createElement(Aw, {
    basename: a,
    children: s,
    location: y.location,
    navigationType: y.action,
    navigator: c,
    future: l
  });
}
const Qw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, In = /* @__PURE__ */ U.forwardRef(function(a, s) {
  let {
    onClick: l,
    relative: d,
    reloadDocument: f,
    replace: c,
    state: y,
    target: h,
    to: p,
    preventScrollReset: v,
    unstable_viewTransition: L
  } = a, x = i1(a, Bw), {
    basename: C
  } = U.useContext(Jr), j, F = !1;
  if (typeof p == "string" && Xw.test(p) && (j = p, Qw))
    try {
      let V = new URL(window.location.href), R = p.startsWith("//") ? new URL(V.protocol + p) : new URL(p), P = Ei(R.pathname, C);
      R.origin === V.origin && P != null ? p = P + R.search + R.hash : F = !0;
    } catch {
      la(!1, '<Link to="' + p + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let O = Lw(p, {
    relative: d
  }), M = nC(p, {
    replace: c,
    state: y,
    target: h,
    preventScrollReset: v,
    relative: d,
    unstable_viewTransition: L
  });
  function k(V) {
    l && l(V), V.defaultPrevented || M(V);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ U.createElement("a", ws({}, x, {
      href: j || O,
      onClick: F || f ? l : k,
      ref: s,
      target: h
    }))
  );
});
In.displayName = "Link";
const Zw = /* @__PURE__ */ U.forwardRef(function(a, s) {
  let {
    "aria-current": l = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: c = !1,
    style: y,
    to: h,
    unstable_viewTransition: p,
    children: v
  } = a, L = i1(a, Iw), x = Vu(h, {
    relative: L.relative
  }), C = Es(), j = U.useContext(t1), {
    navigator: F,
    basename: O
  } = U.useContext(Jr), M = j != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  lC(x) && p === !0, k = F.encodeLocation ? F.encodeLocation(x).pathname : x.pathname, V = C.pathname, R = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  d || (V = V.toLowerCase(), R = R ? R.toLowerCase() : null, k = k.toLowerCase()), R && O && (R = Ei(R, O) || R);
  const P = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
  let I = V === k || !c && V.startsWith(k) && V.charAt(P) === "/", X = R != null && (R === k || !c && R.startsWith(k) && R.charAt(k.length) === "/"), De = {
    isActive: I,
    isPending: X,
    isTransitioning: M
  }, ke = I ? l : void 0, he;
  typeof f == "function" ? he = f(De) : he = [f, I ? "active" : null, X ? "pending" : null, M ? "transitioning" : null].filter(Boolean).join(" ");
  let Le = typeof y == "function" ? y(De) : y;
  return /* @__PURE__ */ U.createElement(In, ws({}, L, {
    "aria-current": ke,
    className: he,
    ref: s,
    style: Le,
    to: h,
    unstable_viewTransition: p
  }), typeof v == "function" ? v(De) : v);
});
Zw.displayName = "NavLink";
const eC = /* @__PURE__ */ U.forwardRef((o, a) => {
  let {
    fetcherKey: s,
    navigate: l,
    reloadDocument: d,
    replace: f,
    state: c,
    method: y = ld,
    action: h,
    onSubmit: p,
    relative: v,
    preventScrollReset: L,
    unstable_viewTransition: x
  } = o, C = i1(o, Yw), j = oC(), F = sC(h, {
    relative: v
  }), O = y.toLowerCase() === "get" ? "get" : "post", M = (k) => {
    if (p && p(k), k.defaultPrevented) return;
    k.preventDefault();
    let V = k.nativeEvent.submitter, R = (V == null ? void 0 : V.getAttribute("formmethod")) || y;
    j(V || k.currentTarget, {
      fetcherKey: s,
      method: R,
      navigate: l,
      replace: f,
      state: c,
      relative: v,
      preventScrollReset: L,
      unstable_viewTransition: x
    });
  };
  return /* @__PURE__ */ U.createElement("form", ws({
    ref: a,
    method: O,
    action: F,
    onSubmit: d ? p : M
  }, C));
});
eC.displayName = "Form";
var hd;
(function(o) {
  o.UseScrollRestoration = "useScrollRestoration", o.UseSubmit = "useSubmit", o.UseSubmitFetcher = "useSubmitFetcher", o.UseFetcher = "useFetcher", o.useViewTransitionState = "useViewTransitionState";
})(hd || (hd = {}));
var Rb;
(function(o) {
  o.UseFetcher = "useFetcher", o.UseFetchers = "useFetchers", o.UseScrollRestoration = "useScrollRestoration";
})(Rb || (Rb = {}));
function tC(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function C3(o) {
  let a = U.useContext(Au);
  return a || Nt(!1, tC(o)), a;
}
function nC(o, a) {
  let {
    target: s,
    replace: l,
    state: d,
    preventScrollReset: f,
    relative: c,
    unstable_viewTransition: y
  } = a === void 0 ? {} : a, h = Uu(), p = Es(), v = Vu(o, {
    relative: c
  });
  return U.useCallback((L) => {
    if (zw(L, s)) {
      L.preventDefault();
      let x = l !== void 0 ? l : ju(p) === ju(v);
      h(o, {
        replace: x,
        state: d,
        preventScrollReset: f,
        relative: c,
        unstable_viewTransition: y
      });
    }
  }, [p, h, v, l, d, s, o, f, c, y]);
}
function rC() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let aC = 0, iC = () => "__" + String(++aC) + "__";
function oC() {
  let {
    router: o
  } = C3(hd.UseSubmit), {
    basename: a
  } = U.useContext(Jr), s = kw();
  return U.useCallback(function(l, d) {
    d === void 0 && (d = {}), rC();
    let {
      action: f,
      method: c,
      encType: y,
      formData: h,
      body: p
    } = Jw(l, a);
    if (d.navigate === !1) {
      let v = d.fetcherKey || iC();
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
function sC(o, a) {
  let {
    relative: s
  } = a === void 0 ? {} : a, {
    basename: l
  } = U.useContext(Jr), d = U.useContext(Ha);
  d || Nt(!1, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1), c = ws({}, Vu(o || ".", {
    relative: s
  })), y = Es();
  if (o == null) {
    c.search = y.search;
    let h = new URLSearchParams(c.search);
    h.has("index") && h.get("index") === "" && (h.delete("index"), c.search = h.toString() ? "?" + h.toString() : "");
  }
  return (!o || o === ".") && f.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (c.pathname = c.pathname === "/" ? l : $a([l, c.pathname])), ju(c);
}
function lC(o, a) {
  a === void 0 && (a = {});
  let s = U.useContext(w3);
  s == null && Nt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: l
  } = C3(hd.useViewTransitionState), d = Vu(o, {
    relative: a.relative
  });
  if (!s.isTransitioning)
    return !1;
  let f = Ei(s.currentLocation.pathname, l) || s.currentLocation.pathname, c = Ei(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return pd(d.pathname, c) != null || pd(d.pathname, f) != null;
}
var uC = {
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
const cC = /* @__PURE__ */ xd(uC);
var fC = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function jb(o) {
  var a = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (a.name = s[1], (cC[s[1]] || o.charAt(o.length - 2) === "/") && (a.voidElement = !0), a.name.startsWith("!--"))) {
    var l = o.indexOf("-->");
    return { type: "comment", comment: l !== -1 ? o.slice(4, l) : "" };
  }
  for (var d = new RegExp(fC), f = null; (f = d.exec(o)) !== null; ) if (f[0].trim()) if (f[1]) {
    var c = f[1].trim(), y = [c, ""];
    c.indexOf("=") > -1 && (y = c.split("=")), a.attrs[y[0]] = y[1], d.lastIndex--;
  } else f[2] && (a.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return a;
}
var dC = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, mC = /^\s*$/, pC = /* @__PURE__ */ Object.create(null);
function E3(o, a) {
  switch (a.type) {
    case "text":
      return o + a.content;
    case "tag":
      return o += "<" + a.name + (a.attrs ? function(s) {
        var l = [];
        for (var d in s) l.push(d + '="' + s[d] + '"');
        return l.length ? " " + l.join(" ") : "";
      }(a.attrs) : "") + (a.voidElement ? "/>" : ">"), a.voidElement ? o : o + a.children.reduce(E3, "") + "</" + a.name + ">";
    case "comment":
      return o + "<!--" + a.comment + "-->";
  }
}
var hC = { parse: function(o, a) {
  a || (a = {}), a.components || (a.components = pC);
  var s, l = [], d = [], f = -1, c = !1;
  if (o.indexOf("<") !== 0) {
    var y = o.indexOf("<");
    l.push({ type: "text", content: y === -1 ? o : o.substring(0, y) });
  }
  return o.replace(dC, function(h, p) {
    if (c) {
      if (h !== "</" + s.name + ">") return;
      c = !1;
    }
    var v, L = h.charAt(1) !== "/", x = h.startsWith("<!--"), C = p + h.length, j = o.charAt(C);
    if (x) {
      var F = jb(h);
      return f < 0 ? (l.push(F), l) : ((v = d[f]).children.push(F), l);
    }
    if (L && (f++, (s = jb(h)).type === "tag" && a.components[s.name] && (s.type = "component", c = !0), s.voidElement || c || !j || j === "<" || s.children.push({ type: "text", content: o.slice(C, o.indexOf("<", C)) }), f === 0 && l.push(s), (v = d[f - 1]) && v.children.push(s), d[f] = s), (!L || s.voidElement) && (f > -1 && (s.voidElement || s.name === h.slice(2, -1)) && (f--, s = f === -1 ? l : d[f]), !c && j !== "<" && j)) {
      v = f === -1 ? l : d[f].children;
      var O = o.indexOf("<", C), M = o.slice(C, O === -1 ? void 0 : O);
      mC.test(M) && (M = " "), (O > -1 && f + v.length >= 0 || M !== " ") && v.push({ type: "text", content: M });
    }
  }), l;
}, stringify: function(o) {
  return o.reduce(function(a, s) {
    return a + E3("", s);
  }, "");
} };
function cd() {
  if (console && console.warn) {
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    typeof a[0] == "string" && (a[0] = `react-i18next:: ${a[0]}`), console.warn(...a);
  }
}
const Tb = {};
function vd() {
  for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
    a[s] = arguments[s];
  typeof a[0] == "string" && Tb[a[0]] || (typeof a[0] == "string" && (Tb[a[0]] = /* @__PURE__ */ new Date()), cd(...a));
}
const R3 = (o, a) => () => {
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
function Db(o, a, s) {
  o.loadNamespaces(a, R3(o, s));
}
function kb(o, a, s, l) {
  typeof s == "string" && (s = [s]), s.forEach((d) => {
    o.options.ns.indexOf(d) < 0 && o.options.ns.push(d);
  }), o.loadLanguages(a, R3(o, l));
}
function vC(o, a) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const l = a.languages[0], d = a.options ? a.options.fallbackLng : !1, f = a.languages[a.languages.length - 1];
  if (l.toLowerCase() === "cimode") return !0;
  const c = (y, h) => {
    const p = a.services.backendConnector.state[`${y}|${h}`];
    return p === -1 || p === 2;
  };
  return s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !c(a.isLanguageChangingTo, o) ? !1 : !!(a.hasResourceBundle(l, o) || !a.services.backendConnector.backend || a.options.resources && !a.options.partialBundledLanguages || c(l, o) && (!d || c(f, o)));
}
function gC(o, a) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !a.languages || !a.languages.length ? (vd("i18n.languages were undefined or empty", a.languages), !0) : a.options.ignoreJSONStructure !== void 0 ? a.hasLoadedNamespace(o, {
    lng: s.lng,
    precheck: (d, f) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !f(d.isLanguageChangingTo, o)) return !1;
    }
  }) : vC(o, a, s);
}
const yC = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, LC = {
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
}, bC = (o) => LC[o], xC = (o) => o.replace(yC, bC);
let Jv = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: xC
};
function SC() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Jv = {
    ...Jv,
    ...o
  };
}
function j3() {
  return Jv;
}
let T3;
function NC(o) {
  T3 = o;
}
function o1() {
  return T3;
}
function Mv(o, a) {
  if (!o) return !1;
  const s = o.props ? o.props.children : o.children;
  return a ? s.length > 0 : !!s;
}
function Pv(o) {
  if (!o) return [];
  const a = o.props ? o.props.children : o.children;
  return o.props && o.props.i18nIsDynamicList ? bs(a) : a;
}
function wC(o) {
  return Object.prototype.toString.call(o) !== "[object Array]" ? !1 : o.every((a) => U.isValidElement(a));
}
function bs(o) {
  return Array.isArray(o) ? o : [o];
}
function CC(o, a) {
  const s = {
    ...a
  };
  return s.props = Object.assign(o.props, a.props), s;
}
function D3(o, a) {
  if (!o) return "";
  let s = "";
  const l = bs(o), d = a.transSupportBasicHtmlNodes && a.transKeepBasicHtmlNodesFor ? a.transKeepBasicHtmlNodesFor : [];
  return l.forEach((f, c) => {
    if (typeof f == "string")
      s += `${f}`;
    else if (U.isValidElement(f)) {
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
        const v = D3(p, a);
        s += `<${c}>${v}</${c}>`;
      }
    } else if (f === null)
      cd("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof f == "object") {
      const {
        format: y,
        ...h
      } = f, p = Object.keys(h);
      if (p.length === 1) {
        const v = y ? `${p[0]}, ${y}` : p[0];
        s += `{{${v}}}`;
      } else
        cd("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", f);
    } else
      cd("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", f);
  }), s;
}
function EC(o, a, s, l, d, f) {
  if (a === "") return [];
  const c = l.transKeepBasicHtmlNodesFor || [], y = a && new RegExp(c.map((O) => `<${O}`).join("|")).test(a);
  if (!o && !y && !f) return [a];
  const h = {};
  function p(O) {
    bs(O).forEach((k) => {
      typeof k != "string" && (Mv(k) ? p(Pv(k)) : typeof k == "object" && !U.isValidElement(k) && Object.assign(h, k));
    });
  }
  p(o);
  const v = hC.parse(`<0>${a}</0>`), L = {
    ...h,
    ...d
  };
  function x(O, M, k) {
    const V = Pv(O), R = j(V, M.children, k);
    return wC(V) && R.length === 0 || O.props && O.props.i18nIsDynamicList ? V : R;
  }
  function C(O, M, k, V, R) {
    O.dummy ? (O.children = M, k.push(U.cloneElement(O, {
      key: V
    }, R ? void 0 : M))) : k.push(...U.Children.map([O], (P) => {
      const I = {
        ...P.props
      };
      return delete I.i18nIsDynamicList, U.createElement(P.type, {
        ...I,
        key: V,
        ref: P.ref
      }, R ? null : M);
    }));
  }
  function j(O, M, k) {
    const V = bs(O);
    return bs(M).reduce((P, I, X) => {
      const De = I.children && I.children[0] && I.children[0].content && s.services.interpolator.interpolate(I.children[0].content, L, s.language);
      if (I.type === "tag") {
        let ke = V[parseInt(I.name, 10)];
        k.length === 1 && !ke && (ke = k[0][I.name]), ke || (ke = {});
        const he = Object.keys(I.attrs).length !== 0 ? CC({
          props: I.attrs
        }, ke) : ke, Le = U.isValidElement(he), nt = Le && Mv(I, !0) && !I.voidElement, pe = y && typeof he == "object" && he.dummy && !Le, Ne = typeof o == "object" && o !== null && Object.hasOwnProperty.call(o, I.name);
        if (typeof he == "string") {
          const we = s.services.interpolator.interpolate(he, L, s.language);
          P.push(we);
        } else if (Mv(he) || nt) {
          const we = x(he, I, k);
          C(he, we, P, X);
        } else if (pe) {
          const we = j(V, I.children, k);
          C(he, we, P, X);
        } else if (Number.isNaN(parseFloat(I.name)))
          if (Ne) {
            const we = x(he, I, k);
            C(he, we, P, X, I.voidElement);
          } else if (l.transSupportBasicHtmlNodes && c.indexOf(I.name) > -1)
            if (I.voidElement)
              P.push(U.createElement(I.name, {
                key: `${I.name}-${X}`
              }));
            else {
              const we = j(V, I.children, k);
              P.push(U.createElement(I.name, {
                key: `${I.name}-${X}`
              }, we));
            }
          else if (I.voidElement)
            P.push(`<${I.name} />`);
          else {
            const we = j(V, I.children, k);
            P.push(`<${I.name}>${we}</${I.name}>`);
          }
        else if (typeof he == "object" && !Le) {
          const we = I.children[0] ? De : null;
          we && P.push(we);
        } else
          C(he, De, P, X, I.children.length !== 1 || !De);
      } else if (I.type === "text") {
        const ke = l.transWrapTextNodes, he = f ? l.unescape(s.services.interpolator.interpolate(I.content, L, s.language)) : s.services.interpolator.interpolate(I.content, L, s.language);
        ke ? P.push(U.createElement(ke, {
          key: `${I.name}-${X}`
        }, he)) : P.push(he);
      }
      return P;
    }, []);
  }
  const F = j([{
    dummy: !0,
    children: o || []
  }], v, bs(o || []));
  return Pv(F[0]);
}
function RC(o) {
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
    i18n: L,
    t: x,
    shouldUnescape: C,
    ...j
  } = o;
  const F = L || o1();
  if (!F)
    return vd("You will need to pass in an i18next instance by using i18nextReactModule"), a;
  const O = x || F.t.bind(F) || ((nt) => nt), M = {
    ...j3(),
    ...F.options && F.options.react
  };
  let k = v || O.ns || F.options && F.options.defaultNS;
  k = typeof k == "string" ? [k] : k || ["translation"];
  const V = D3(a, M), R = h || V || M.transEmptyNodeValue || d, {
    hashTransKey: P
  } = M, I = d || (P ? P(V || R) : V || R);
  F.options && F.options.interpolation && F.options.interpolation.defaultVariables && (y = y && Object.keys(y).length > 0 ? {
    ...y,
    ...F.options.interpolation.defaultVariables
  } : {
    ...F.options.interpolation.defaultVariables
  });
  const X = y || s !== void 0 || !a ? c.interpolation : {
    interpolation: {
      ...c.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, De = {
    ...c,
    context: f || c.context,
    count: s,
    ...y,
    ...X,
    defaultValue: R,
    ns: k
  }, ke = I ? O(I, De) : R;
  p && Object.keys(p).forEach((nt) => {
    const pe = p[nt];
    if (typeof pe.type == "function" || !pe.props || !pe.props.children || ke.indexOf(`${nt}/>`) < 0 && ke.indexOf(`${nt} />`) < 0) return;
    function Ne() {
      return U.createElement(U.Fragment, null, pe);
    }
    p[nt] = U.createElement(Ne);
  });
  const he = EC(p || a, ke, F, M, De, C), Le = l !== void 0 ? l : M.defaultTransParent;
  return Le ? U.createElement(Le, j, he) : he;
}
const jC = {
  type: "3rdParty",
  init(o) {
    SC(o.options.react), NC(o);
  }
}, k3 = U.createContext();
class TC {
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
function bu(o) {
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
    i18n: L,
    t: x,
    shouldUnescape: C,
    ...j
  } = o;
  const {
    i18n: F,
    defaultNS: O
  } = U.useContext(k3) || {}, M = L || F || o1(), k = x || M && M.t.bind(M);
  return RC({
    children: a,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c,
    values: y,
    defaults: h,
    components: p,
    ns: v || k && k.ns || O || M && M.options && M.options.defaultNS,
    i18n: M,
    t: x,
    shouldUnescape: C,
    ...j
  });
}
const DC = (o, a) => {
  const s = U.useRef();
  return U.useEffect(() => {
    s.current = o;
  }, [o, a]), s.current;
};
function O3(o, a, s, l) {
  return o.getFixedT(a, s, l);
}
function kC(o, a, s, l) {
  return U.useCallback(O3(o, a, s, l), [o, a, s, l]);
}
function ji(o) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: s
  } = a, {
    i18n: l,
    defaultNS: d
  } = U.useContext(k3) || {}, f = s || l || o1();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new TC()), !f) {
    vd("You will need to pass in an i18next instance by using initReactI18next");
    const R = (I, X) => typeof X == "string" ? X : X && typeof X == "object" && typeof X.defaultValue == "string" ? X.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, P = [R, {}, !1];
    return P.t = R, P.i18n = {}, P.ready = !1, P;
  }
  f.options.react && f.options.react.wait !== void 0 && vd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...j3(),
    ...f.options.react,
    ...a
  }, {
    useSuspense: y,
    keyPrefix: h
  } = c;
  let p = d || f.options && f.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(p);
  const v = (f.isInitialized || f.initializedStoreOnce) && p.every((R) => gC(R, f, c)), L = kC(f, a.lng || null, c.nsMode === "fallback" ? p : p[0], h), x = () => L, C = () => O3(f, a.lng || null, c.nsMode === "fallback" ? p : p[0], h), [j, F] = U.useState(x);
  let O = p.join();
  a.lng && (O = `${a.lng}${O}`);
  const M = DC(O), k = U.useRef(!0);
  U.useEffect(() => {
    const {
      bindI18n: R,
      bindI18nStore: P
    } = c;
    k.current = !0, !v && !y && (a.lng ? kb(f, a.lng, p, () => {
      k.current && F(C);
    }) : Db(f, p, () => {
      k.current && F(C);
    })), v && M && M !== O && k.current && F(C);
    function I() {
      k.current && F(C);
    }
    return R && f && f.on(R, I), P && f && f.store.on(P, I), () => {
      k.current = !1, R && f && R.split(" ").forEach((X) => f.off(X, I)), P && f && P.split(" ").forEach((X) => f.store.off(X, I));
    };
  }, [f, O]), U.useEffect(() => {
    k.current && v && F(x);
  }, [f, h, v]);
  const V = [j, f, v];
  if (V.t = j, V.i18n = f, V.ready = v, v || !v && !y) return V;
  throw new Promise((R) => {
    a.lng ? kb(f, a.lng, p, () => R()) : Db(f, p, () => R());
  });
}
const OC = "Management", _C = "Comment", AC = "Login", MC = "Logout", PC = "Register", UC = "Email", VC = "Password", FC = "Nickname", zC = "Personal Website", $C = "Setting", HC = "Profile", JC = "Homepage", BC = "All", IC = "Mine", YC = "Approved", KC = "Waiting", WC = "Spam", GC = "Sticky", qC = "Edit", QC = "Reply", XC = "Action", ZC = "Filter", eE = "Author", tE = "Content", nE = "Username", rE = "Submit", aE = "Cancel", iE = "At", oE = "Migration", sE = "Exporting…", lE = "Under verification", uE = "Administrator", cE = "Guest", fE = "User", dE = "Role", nd = {
  management: OC,
  comment: _C,
  login: AC,
  logout: MC,
  register: PC,
  email: UC,
  password: VC,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: FC,
  website: zC,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: $C,
  profile: HC,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: JC,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: BC,
  mine: IC,
  approved: YC,
  "approved button": "Approved",
  waiting: KC,
  spam: WC,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: GC,
  edit: qC,
  reply: QC,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: XC,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: ZC,
  author: eE,
  content: tE,
  username: nE,
  submit: rE,
  cancel: aE,
  at: iE,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: oE,
  exporting: sE,
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
  verify: lE,
  administrator: uE,
  guest: cE,
  user: fE,
  "manage users": "Manage Users",
  role: dE,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, mE = "管理", pE = "评论", hE = "登录", vE = "登出", gE = "用户注册", yE = "邮箱", LE = "密码", bE = "昵称", xE = "个人网站", SE = "个人设置", NE = "个人资料", wE = "个人主页地址", CE = "所有", EE = "我的", RE = "已通过", jE = "待审核", TE = "垃圾", DE = "置顶评论", kE = "编辑", OE = "回复", _E = "操作", AE = "筛选", ME = "作者", PE = "内容", UE = "用户名", VE = "提交", FE = "取消", zE = "于", $E = "导入导出", HE = "导出中...", JE = "待认证", BE = "管理员", IE = "普通用户", YE = "用户", KE = "角色", Ob = {
  management: mE,
  comment: pE,
  login: hE,
  logout: vE,
  register: gE,
  email: yE,
  password: LE,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: bE,
  website: xE,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: SE,
  profile: NE,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: wE,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: CE,
  mine: EE,
  approved: RE,
  "approved button": "通过",
  waiting: jE,
  spam: TE,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: DE,
  edit: kE,
  reply: OE,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: _E,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: AE,
  author: ME,
  content: PE,
  username: UE,
  submit: VE,
  cancel: FE,
  at: zE,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: $E,
  exporting: HE,
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
  verify: JE,
  administrator: BE,
  guest: IE,
  user: YE,
  "manage users": "管理用户",
  role: KE,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, WE = "管理", GE = "留言", qE = "登入", QE = "登出", XE = "使用者註冊", ZE = "信箱", eR = "密碼", tR = "暱稱", nR = "個人網站", rR = "個人設定", aR = "個人資料", iR = "個人首頁網址", oR = "所有", sR = "我的", lR = "已通過", uR = "待審核", cR = "垃圾", fR = "置頂留言", dR = "編輯", mR = "回覆", pR = "動作", hR = "篩選", vR = "作者", gR = "內容", yR = "使用者名稱", LR = "送出", bR = "取消", xR = "於", SR = "匯入匯出", NR = "匯出中...", wR = "待認證", CR = "管理員", ER = "使用者", RR = "使用者", jR = "角色", TR = {
  management: WE,
  comment: GE,
  login: qE,
  logout: QE,
  register: XE,
  email: ZE,
  password: eR,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: tR,
  website: nR,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: rR,
  profile: aR,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: iR,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: oR,
  mine: sR,
  approved: lR,
  "approved button": "通過",
  waiting: uR,
  spam: cR,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: fR,
  edit: dR,
  reply: mR,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: pR,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: hR,
  author: vR,
  content: gR,
  username: yR,
  submit: LR,
  cancel: bR,
  at: xR,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: SR,
  exporting: NR,
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
  verify: wR,
  administrator: CR,
  guest: ER,
  user: RR,
  "manage users": "使用者管理",
  role: jR,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, DR = [
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
], kR = {
  "zh-cn": { translations: Ob },
  "zh-CN": { translations: Ob },
  en: { translations: nd },
  "en-US": { translations: nd },
  "zh-TW": { translations: TR },
  jp: { translations: nd },
  "jp-JP": { translations: nd }
};
function ho() {
  const o = _u(), a = Uu(), s = Ri((h) => h.user), { t: l, i18n: d } = ji(), [f, c] = U.useState(null);
  U.useMemo(() => {
    const h = DR.find(
      (p) => p.alias.includes(d.language)
    );
    return (h == null ? void 0 : h.value) ?? "";
  }, [d.language]), U.useEffect(() => {
    !(s != null && s.email) || !(s != null && s.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((h) => h.json()).then((h) => {
      s.__version !== h.version && c(h.version);
    });
  }, [s == null ? void 0 : s.email]);
  const y = function(h) {
    h.preventDefault(), o.user.logout(), a("/ui/login");
  };
  return [
    /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (s == null ? void 0 : s.type) === "administrator" ? /* @__PURE__ */ N.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ N.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ N.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ N.jsxDEV(In, { to: "/ui", children: l("management") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ N.jsxDEV("li", { className: "last", children: /* @__PURE__ */ N.jsxDEV(In, { to: "/ui", children: l("comment") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV("li", { className: "last", children: /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/user", children: l("user") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV("li", { className: "last", children: /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/migration", children: l("migration") }, void 0, !1, {
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
      /* @__PURE__ */ N.jsxDEV("div", { className: "operate", children: [
        s != null && s.type ? /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/profile", className: "author", children: s.display_name }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this) : null,
        s != null && s.type ? /* @__PURE__ */ N.jsxDEV("a", { className: "exit", href: "#", onClick: y, children: l("logout") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 79,
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
    }, this)
  ];
}
function OR() {
  const { t: o } = ji(), a = _u(), s = Uu(), l = Ri((p) => p.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1);
  U.useEffect(() => {
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
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ N.jsxDEV("ul", { children: d ? /* @__PURE__ */ N.jsxDEV("li", { children: d }, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ N.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: h, children: [
        /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ N.jsxDEV("li", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
          /* @__PURE__ */ N.jsxDEV("p", { className: "description", style: { textAlign: "left" }, children: o(
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
        /* @__PURE__ */ N.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ N.jsxDEV(
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
      /* @__PURE__ */ N.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
const _R = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), AR = (o) => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...o }, /* @__PURE__ */ U.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ U.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), MR = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), PR = (o) => /* @__PURE__ */ U.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...o }, /* @__PURE__ */ U.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ U.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), UR = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), VR = (o) => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...o }, /* @__PURE__ */ U.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ U.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ U.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ U.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), FR = (o) => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 100, height: 100, viewBox: "0 0 127 115", id: "shinigami", ...o }, /* @__PURE__ */ U.createElement("g", null, /* @__PURE__ */ U.createElement("path", { d: "M 74.96,6.01 L 81.77,6.32 L 85.92,6.86 L 87.92,7.31 L 91.89,8.36 L 93.92,9.10 L 98.04,10.73 L 100.27,11.80 L 105.99,14.91 L 109.79,17.27 L 111.31,18.34 L 112.74,19.36 L 113.29,19.80 L 114.27,20.61 L 114.54,20.90 L 114.92,21.40 L 114.85,21.50 L 114.50,21.58 L 114.00,21.43 L 107.94,19.93 L 104.11,19.28 L 102.28,19.13 L 98.70,18.95 L 97.00,19.03 L 93.66,19.32 L 92.07,19.64 L 88.90,20.27 L 94.15,23.27 L 100.07,27.34 L 103.76,30.58 L 105.44,32.41 L 108.67,36.21 L 110.07,38.27 L 112.70,42.49 L 113.76,44.71 L 114.87,47.09 L 115.48,48.50 L 115.74,49.14 L 116.62,51.58 L 116.90,52.78 L 117.37,55.24 L 117.52,56.73 L 117.64,58.28 L 117.70,59.17 L 117.79,61.03 L 117.84,62.10 L 117.83,67.72 L 117.59,71.28 L 117.35,72.97 L 116.79,76.31 L 116.39,77.90 L 115.49,81.02 L 114.91,82.52 L 113.68,85.47 L 112.93,86.88 L 111.34,89.66 L 110.42,91.00 L 108.48,93.64 L 107.37,94.91 L 105.06,97.43 L 103.77,98.65 L 99.03,102.73 L 95.86,105.03 L 94.25,106.00 L 91.00,107.80 L 89.31,108.53 L 85.88,109.88 L 84.07,110.41 L 82.04,110.94 L 80.92,111.15 L 78.61,111.52 L 77.38,111.65 L 72.30,112.01 L 69.69,111.96 L 64.48,111.72 L 62.08,111.38 L 59.72,111.00 L 58.63,110.75 L 56.53,110.22 L 55.61,109.91 L 51.28,108.18 L 48.48,106.83 L 47.14,106.06 L 44.49,104.47 L 43.23,103.58 L 40.75,101.76 L 39.59,100.77 L 37.31,98.75 L 36.25,97.67 L 34.19,95.46 L 33.25,94.30 L 31.44,91.93 L 30.64,90.70 L 29.10,88.19 L 28.44,86.89 L 27.59,85.23 L 27.12,84.34 L 26.92,83.99 L 26.21,82.87 L 25.94,82.65 L 25.43,82.42 L 25.18,82.59 L 24.65,83.09 L 24.30,83.55 L 23.69,84.70 L 23.40,85.64 L 23.31,86.20 L 23.18,87.37 L 23.17,88.04 L 23.20,89.45 L 23.27,90.25 L 23.48,93.60 L 23.49,94.38 L 23.47,94.63 L 23.42,95.00 L 23.37,95.00 L 22.80,94.53 L 22.27,93.79 L 21.94,93.26 L 21.27,92.11 L 20.91,91.44 L 20.17,90.03 L 19.81,89.28 L 18.38,86.22 L 17.86,84.90 L 17.39,83.64 L 17.24,83.13 L 17.01,82.23 L 17.01,81.96 L 17.24,80.70 L 17.60,79.70 L 17.87,79.15 L 19.15,76.91 L 19.96,75.96 L 21.68,73.69 L 22.50,72.29 L 22.73,71.63 L 23.08,70.33 L 23.08,69.71 L 22.94,68.48 L 22.69,67.87 L 22.05,66.65 L 21.54,66.03 L 20.38,64.78 L 19.60,64.13 L 17.91,62.80 L 16.85,62.10 L 14.59,60.65 L 13.25,59.87 L 9.37,57.43 L 8.39,56.74 L 8.05,56.47 L 7.49,55.99 L 7.41,55.86 L 7.32,54.88 L 7.40,53.70 L 7.51,52.92 L 7.75,51.24 L 7.93,50.27 L 8.32,48.26 L 8.56,47.20 L 9.07,44.99 L 9.36,43.79 L 9.49,43.31 L 9.73,42.43 L 9.84,42.11 L 10.04,41.53 L 10.13,41.36 L 10.45,40.92 L 10.60,41.08 L 10.89,41.63 L 11.05,42.21 L 11.61,43.77 L 12.15,45.02 L 12.49,45.72 L 14.01,48.69 L 14.93,50.27 L 16.84,53.43 L 17.81,54.86 L 18.77,56.25 L 19.23,56.86 L 20.13,58.03 L 20.54,58.50 L 21.50,59.57 L 22.00,60.08 L 22.18,60.21 L 22.49,60.40 L 22.57,60.36 L 22.68,60.19 L 22.67,59.96 L 22.58,59.39 L 22.46,58.95 L 22.18,57.95 L 21.96,57.28 L 21.47,55.81 L 21.15,54.88 L 20.45,52.91 L 20.02,51.71 L 18.39,46.36 L 17.93,44.55 L 17.75,43.74 L 17.44,42.20 L 17.36,41.61 L 17.11,39.26 L 17.12,38.22 L 17.24,37.88 L 17.56,37.31 L 17.87,37.12 L 18.60,36.80 L 19.13,36.66 L 21.69,36.21 L 23.67,36.01 L 24.50,36.01 L 26.14,35.85 L 26.97,35.52 L 27.32,35.18 L 27.98,34.39 L 28.32,33.75 L 29.01,32.29 L 29.44,31.25 L 30.66,28.84 L 31.74,27.15 L 32.39,26.28 L 35.27,22.74 L 37.02,21.00 L 40.68,17.60 L 42.64,16.11 L 46.62,13.29 L 48.58,12.26 L 54.79,9.44 L 58.96,8.00 L 61.10,7.49 L 65.45,6.61 L 67.74,6.37 L 72.43,6.01 M 33.94,75.66 L 33.78,75.82 L 33.83,76.85 L 34.39,78.07 L 34.92,78.94 L 36.16,80.85 L 37.03,82.06 L 38.93,84.63 L 40.12,86.15 L 43.03,89.83 L 44.79,92.03 L 45.53,92.93 L 46.90,94.58 L 47.37,95.12 L 47.80,95.62 L 47.95,95.78 L 48.21,96.05 L 48.27,96.09 L 48.78,96.78 L 48.91,97.34 L 48.84,97.59 L 49.02,98.89 L 49.48,100.13 L 49.82,100.75 L 50.59,101.93 L 50.99,102.34 L 51.77,103.00 L 52.04,103.00 L 52.76,102.87 L 52.95,102.58 L 52.88,102.27 L 52.62,101.53 L 52.32,100.92 L 51.58,99.53 L 51.01,98.52 L 49.61,95.81 L 49.28,95.08 L 49.17,94.81 L 49.01,94.34 L 49.01,94.24 L 48.73,93.72 L 48.34,93.50 L 48.08,93.50 L 47.19,93.23 L 46.56,92.84 L 46.33,92.59 L 46.09,92.14 L 46.39,92.19 L 46.75,92.40 L 47.63,92.63 L 48.00,92.44 L 48.00,92.18 L 47.58,91.07 L 46.97,90.38 L 46.59,90.11 L 45.80,89.66 L 45.43,89.58 L 44.73,89.55 L 44.50,89.76 L 44.16,89.87 L 44.27,89.48 L 44.49,89.10 L 44.82,88.23 L 44.60,88.13 L 44.27,88.33 L 43.57,88.29 L 43.32,87.73 L 43.36,87.24 L 43.07,86.09 L 42.54,85.70 L 42.18,85.77 L 41.42,85.65 L 41.36,85.22 L 41.58,84.87 L 41.81,84.20 L 41.57,84.15 L 41.27,84.33 L 40.57,84.29 L 40.32,83.73 L 40.36,83.24 L 40.06,82.06 L 39.46,81.73 L 39.00,81.83 L 38.15,81.86 L 38.02,81.64 L 38.22,81.45 L 38.34,80.93 L 38.24,80.41 L 38.11,80.07 L 37.42,78.59 L 36.85,77.79 L 35.88,76.58 L 35.30,76.01 L 35.04,75.85 L 34.54,75.60 L 34.33,75.59 M 94.28,27.80 L 94.19,28.01 L 94.30,28.28 L 94.64,28.95 L 94.97,29.46 L 95.77,30.61 L 96.35,31.37 L 97.75,33.55 L 98.61,35.24 L 99.00,36.20 L 99.76,38.23 L 100.11,39.37 L 100.77,41.74 L 101.07,43.06 L 101.64,45.79 L 101.89,47.29 L 102.37,50.40 L 102.58,52.10 L 102.98,55.59 L 103.14,57.49 L 103.45,61.39 L 103.58,63.50 L 103.79,68.32 L 103.82,71.06 L 103.76,72.22 L 103.60,74.42 L 103.43,75.35 L 103.04,77.11 L 102.75,77.86 L 102.08,79.27 L 101.64,79.88 L 100.67,81.04 L 100.06,81.56 L 98.75,82.57 L 97.95,83.05 L 96.25,84.01 L 95.25,84.50 L 92.86,85.76 L 91.46,86.60 L 90.89,86.99 L 89.87,87.73 L 89.56,88.03 L 89.06,88.58 L 89.05,88.75 L 88.72,89.63 L 88.27,90.00 L 88.00,90.00 L 87.13,90.35 L 87.02,90.92 L 87.19,91.37 L 87.69,92.40 L 88.17,93.07 L 89.29,94.54 L 90.08,95.43 L 91.47,97.17 L 92.11,98.18 L 92.31,98.63 L 92.60,99.49 L 92.63,99.89 L 92.60,100.67 L 92.48,101.06 L 92.22,101.91 L 92.18,102.17 L 92.16,102.59 L 92.27,102.65 L 92.58,102.67 L 92.88,102.55 L 93.59,102.22 L 94.12,101.94 L 96.06,100.67 L 97.47,99.55 L 98.22,98.88 L 101.28,95.93 L 102.79,94.20 L 105.75,90.62 L 107.01,88.81 L 108.22,87.01 L 108.74,86.14 L 109.71,84.44 L 110.08,83.65 L 112.57,77.19 L 113.73,72.87 L 114.05,70.71 L 114.54,66.40 L 114.54,64.26 L 114.36,60.00 L 114.03,57.91 L 113.20,53.76 L 112.54,51.74 L 111.06,47.73 L 110.08,45.79 L 107.96,41.97 L 106.66,40.15 L 103.91,36.56 L 102.30,34.87 L 99.77,32.29 L 98.28,30.84 L 97.65,30.26 L 96.47,29.19 L 96.00,28.81 L 95.15,28.16 L 94.86,27.99 L 94.37,27.75 M 29.51,77.19 L 29.18,77.46 L 29.09,77.67 L 28.91,78.71 L 29.08,79.48 L 29.58,81.17 L 30.05,82.19 L 31.11,84.34 L 31.82,85.51 L 33.33,87.91 L 34.22,89.15 L 36.07,91.62 L 37.08,92.81 L 39.15,95.16 L 40.22,96.22 L 42.39,98.24 L 43.48,99.07 L 44.83,100.08 L 45.44,100.52 L 46.63,101.32 L 47.13,101.63 L 48.03,102.16 L 48.34,102.30 L 48.85,102.49 L 48.91,102.42 L 48.88,101.75 L 48.51,101.11 L 48.18,100.78 L 47.35,99.56 L 47.00,98.64 L 47.00,98.27 L 46.83,97.72 L 46.55,97.18 L 46.34,96.82 L 45.32,95.21 L 44.60,94.17 L 43.02,91.97 L 42.10,90.75 L 40.19,88.24 L 39.19,86.97 L 37.18,84.45 L 36.22,83.29 L 34.33,81.04 L 33.51,80.12 L 31.97,78.43 L 31.41,77.89 L 30.88,77.41 L 30.69,77.27 L 30.34,77.05 L 30.25,77.04 M 52.21,94.45 L 52.24,95.26 L 52.65,96.07 L 53.00,96.50 L 53.73,97.26 L 54.05,97.45 L 54.65,97.69 L 54.79,97.55 L 54.76,96.74 L 54.35,95.93 L 54.00,95.50 L 52.95,94.55 L 52.35,94.31 M 35.63,56.33 L 35.40,56.85 L 35.31,57.31 L 35.15,58.36 L 35.10,59.09 L 35.02,60.69 L 35.02,61.69 L 34.71,64.84 L 34.50,65.65 L 34.38,65.94 L 34.12,66.42 L 33.98,66.51 L 33.70,66.98 L 33.71,67.45 L 33.80,67.76 L 34.04,68.42 L 34.25,68.80 L 34.72,69.61 L 35.05,70.06 L 36.35,72.39 L 36.59,73.04 L 36.63,73.30 L 36.65,73.75 L 36.58,73.88 L 36.49,74.73 L 36.66,75.16 L 36.83,75.46 L 37.22,76.12 L 37.53,76.57 L 38.21,77.54 L 38.68,78.17 L 39.71,79.53 L 40.37,80.38 L 41.79,82.22 L 42.68,83.34 L 44.56,85.73 L 45.69,87.17 L 46.89,88.67 L 47.43,89.30 L 48.47,90.49 L 48.93,90.97 L 49.83,91.86 L 50.23,92.20 L 51.01,92.80 L 51.37,93.00 L 52.05,93.34 L 52.37,93.41 L 52.99,93.49 L 53.29,93.43 L 54.42,92.98 L 54.98,92.42 L 55.65,90.75 L 55.37,89.39 L 54.89,88.62 L 53.70,87.02 L 52.77,86.15 L 50.71,84.37 L 49.36,83.45 L 44.78,79.67 L 42.43,76.95 L 41.54,75.38 L 40.70,73.76 L 40.34,72.87 L 39.65,71.05 L 39.36,70.04 L 38.81,67.97 L 38.58,66.83 L 38.13,64.46 L 37.94,63.15 L 37.46,60.27 L 37.13,58.72 L 36.96,58.13 L 36.63,57.09 L 36.48,56.76 L 36.17,56.22 L 36.02,56.15 L 35.75,56.14 M 64.09,46.78 L 63.48,47.00 L 62.24,47.54 L 61.61,47.91 L 60.35,48.73 L 59.73,49.24 L 57.26,51.50 L 56.16,52.93 L 54.08,55.95 L 53.30,57.65 L 52.05,60.69 L 51.49,62.45 L 51.34,63.33 L 51.10,65.10 L 51.08,66.10 L 51.10,68.22 L 51.18,69.53 L 51.41,72.14 L 51.63,73.64 L 51.80,74.29 L 52.17,75.54 L 52.44,76.11 L 53.03,77.20 L 53.43,77.71 L 54.32,78.73 L 54.89,79.24 L 56.12,80.27 L 56.90,80.82 L 58.55,81.94 L 59.56,82.56 L 61.70,83.87 L 62.98,84.62 L 65.03,85.79 L 65.99,86.32 L 67.85,87.31 L 68.64,87.71 L 70.13,88.43 L 70.66,88.65 L 71.58,89.00 L 71.76,89.00 L 72.90,88.75 L 73.98,88.36 L 74.65,88.08 L 76.06,87.45 L 76.84,87.07 L 78.44,86.27 L 79.28,85.83 L 82.66,83.96 L 84.18,83.02 L 85.64,82.09 L 86.27,81.66 L 87.45,80.81 L 87.89,80.44 L 90.56,77.72 L 92.05,75.75 L 92.58,74.83 L 93.45,73.08 L 93.56,72.44 L 93.61,71.84 L 93.55,71.64 L 93.34,71.28 L 93.13,71.21 L 92.32,70.16 L 91.98,68.90 L 91.97,68.17 L 91.90,66.69 L 91.75,66.24 L 91.55,66.31 L 91.07,66.64 L 90.64,67.13 L 90.17,67.67 L 89.88,68.02 L 89.25,68.78 L 88.87,69.25 L 87.22,71.08 L 86.24,71.95 L 85.76,72.23 L 84.79,72.71 L 84.27,72.83 L 83.17,73.00 L 82.53,73.00 L 79.86,72.58 L 79.09,72.30 L 78.78,72.13 L 78.23,71.77 L 78.06,71.58 L 77.56,70.61 L 77.37,69.79 L 77.34,69.32 L 77.40,67.30 L 77.66,66.18 L 78.32,63.93 L 78.84,62.89 L 80.00,60.91 L 83.15,57.75 L 79.83,54.29 L 76.97,51.72 L 74.85,50.18 L 73.73,49.52 L 71.46,48.28 L 70.30,47.79 L 68.00,46.92 L 66.88,46.66 L 65.25,46.57 M 90.75,70.49 L 90.70,70.85 L 90.53,71.76 L 90.38,72.50 L 89.38,75.76 L 88.39,77.59 L 87.66,78.41 L 86.04,80.02 L 84.90,80.82 L 83.72,81.64 L 83.03,82.06 L 81.59,82.92 L 80.76,83.38 L 78.67,84.56 L 77.80,85.03 L 76.19,85.89 L 75.52,86.21 L 74.26,86.78 L 73.72,86.95 L 72.70,87.23 L 72.22,87.26 L 71.30,87.25 L 70.83,87.15 L 69.88,86.87 L 69.35,86.62 L 68.25,86.08 L 67.60,85.71 L 66.22,84.91 L 65.39,84.41 L 62.43,82.62 L 60.73,81.54 L 60.00,81.04 L 58.61,80.08 L 58.02,79.63 L 56.92,78.75 L 56.46,78.34 L 54.89,76.73 L 54.41,75.94 L 53.62,74.36 L 53.43,73.50 L 52.78,70.50 L 56.08,74.40 L 57.84,76.21 L 59.33,77.57 L 60.18,78.26 L 63.73,81.04 L 65.37,82.08 L 71.35,85.86 L 75.40,83.79 L 80.44,81.00 L 83.21,79.22 L 84.33,78.34 L 86.39,76.60 L 87.17,75.72 L 88.58,73.97 L 89.07,73.07 L 90.16,71.09 L 90.58,70.40 L 90.66,70.36 M 31.05,68.79 L 30.63,69.01 L 29.72,69.53 L 29.17,69.88 L 28.03,70.65 L 27.41,71.10 L 24.84,73.05 L 23.63,74.09 L 22.46,75.13 L 21.95,75.63 L 20.98,76.61 L 20.62,77.05 L 18.78,79.73 L 18.36,80.57 L 18.23,80.93 L 18.04,81.60 L 18.04,81.83 L 18.11,82.18 L 18.21,82.19 L 18.46,82.12 L 18.64,81.94 L 19.03,81.49 L 19.27,81.13 L 19.76,80.34 L 20.03,79.83 L 21.18,78.13 L 22.22,76.91 L 22.85,76.29 L 25.55,73.84 L 26.98,72.92 L 28.93,71.58 L 30.07,70.73 L 30.53,70.36 L 31.35,69.65 L 31.60,69.38 L 32.00,68.90 L 32.00,68.78 L 31.63,68.61 M 34.63,76.20 L 34.93,76.51 L 35.12,76.73 L 35.96,77.81 L 36.41,78.50 L 37.14,79.68 L 37.34,80.09 L 37.63,80.79 L 37.62,80.92 L 37.49,81.04 L 37.26,80.86 L 36.71,80.31 L 36.28,79.75 L 35.27,78.35 L 34.74,77.50 L 34.56,77.15 L 34.26,76.51 L 34.21,76.31 L 34.20,76.00 L 34.33,76.00 M 59.80,58.38 L 61.07,58.98 L 61.66,59.42 L 62.82,60.39 L 63.34,60.98 L 64.34,62.21 L 64.75,62.89 L 65.52,64.30 L 65.80,65.03 L 66.28,66.50 L 66.40,67.23 L 66.53,68.67 L 66.45,69.35 L 66.18,70.66 L 65.87,71.24 L 65.42,71.89 L 65.11,72.14 L 64.43,72.59 L 64.02,72.74 L 62.23,73.14 L 61.21,73.06 L 59.12,72.70 L 58.12,72.24 L 56.19,71.16 L 55.45,70.35 L 54.11,68.50 L 53.48,67.16 L 53.29,66.48 L 53.00,65.10 L 52.97,64.42 L 52.98,63.07 L 53.11,62.45 L 53.42,61.23 L 53.69,60.69 L 54.29,59.68 L 54.69,59.28 L 55.56,58.56 L 56.08,58.34 L 57.20,58.00 L 57.85,58.00 M 84.91,64.77 L 84.56,64.95 L 82.99,65.90 L 82.16,66.55 L 80.55,67.89 L 79.96,68.53 L 79.43,69.15 L 79.26,69.41 L 79.00,69.91 L 79.00,70.09 L 79.23,70.74 L 79.59,70.88 L 80.46,71.04 L 81.01,70.95 L 82.16,70.66 L 82.72,70.37 L 83.80,69.71 L 84.19,69.25 L 85.64,67.43 L 86.26,66.47 L 86.42,66.10 L 86.61,65.42 L 86.56,65.17 L 86.35,64.72 L 86.10,64.56 L 85.50,64.56 M 57.88,64.57 L 57.16,65.32 L 57.02,65.94 L 57.11,66.30 L 57.40,67.07 L 57.72,67.52 L 58.46,68.46 L 59.00,69.00 L 60.18,70.04 L 60.76,70.36 L 61.89,70.88 L 62.37,70.93 L 63.26,70.90 L 63.55,70.68 L 64.00,70.09 L 64.00,69.57 L 63.79,68.82 L 63.45,68.25 L 63.22,67.95 L 62.09,66.70 L 61.40,66.13 L 59.98,65.09 L 59.35,64.79 L 58.75,64.54 L 58.50,64.50 L 58.03,64.48 M 64.71,19.14 L 64.20,19.18 L 62.33,19.41 L 61.48,19.72 L 59.78,20.49 L 58.73,21.17 L 57.64,21.91 L 57.00,22.36 L 55.66,23.34 L 54.85,23.93 L 49.87,28.08 L 47.06,30.93 L 45.90,32.44 L 43.72,35.50 L 42.85,37.13 L 41.24,40.48 L 40.62,42.28 L 40.05,44.43 L 39.72,46.09 L 39.59,47.01 L 39.15,50.88 L 39.07,52.94 L 39.00,57.08 L 39.11,59.00 L 39.25,60.88 L 39.35,61.75 L 39.59,63.41 L 39.75,64.12 L 39.88,64.67 L 39.95,64.83 L 40.07,65.08 L 40.13,65.09 L 40.24,65.02 L 40.30,64.87 L 40.40,64.48 L 40.45,64.16 L 40.56,63.43 L 40.61,62.93 L 40.70,61.85 L 40.75,61.18 L 40.85,59.74 L 40.90,58.87 L 41.00,57.05 L 41.05,56.00 L 41.40,50.54 L 41.71,47.54 L 41.90,46.31 L 42.31,44.02 L 42.56,43.10 L 43.10,41.40 L 43.42,40.73 L 44.84,38.14 L 45.69,36.90 L 46.00,36.59 L 46.28,36.33 L 46.39,36.29 L 46.57,36.27 L 46.62,36.35 L 46.67,36.59 L 46.64,36.81 L 46.54,37.33 L 46.43,37.70 L 46.32,38.30 L 46.39,38.44 L 46.50,38.39 L 46.76,38.18 L 46.96,37.95 L 47.40,37.40 L 47.69,37.00 L 50.86,33.06 L 53.40,30.26 L 54.72,28.93 L 57.35,26.35 L 58.55,25.30 L 59.71,24.31 L 60.23,23.91 L 61.23,23.17 L 61.65,22.91 L 63.33,22.04 L 64.68,21.47 L 65.41,21.21 L 68.45,20.25 L 69.75,20.03 L 74.50,19.24 L 68.00,19.13 L 65.90,19.12 M 69.98,9.20 L 67.26,9.47 L 66.00,9.68 L 63.56,10.15 L 62.47,10.47 L 57.44,12.21 L 53.88,13.66 L 52.30,14.39 L 50.78,15.11 L 50.13,15.45 L 48.90,16.10 L 48.44,16.38 L 47.62,16.90 L 47.40,17.10 L 47.11,17.44 L 47.20,17.53 L 47.83,17.49 L 48.68,17.28 L 49.27,17.09 L 50.55,16.67 L 51.29,16.39 L 52.85,15.81 L 53.69,15.47 L 60.33,13.30 L 65.07,12.19 L 67.31,11.83 L 69.51,11.52 L 70.53,11.42 L 72.50,11.26 L 73.36,11.25 L 74.98,11.27 L 75.63,11.36 L 76.82,11.57 L 77.21,11.76 L 78.25,12.34 L 78.44,12.60 L 78.24,12.69 L 77.66,12.82 L 77.04,12.86 L 75.56,12.92 L 74.46,12.93 L 67.79,13.55 L 63.27,14.46 L 61.02,15.13 L 56.56,16.61 L 54.41,17.53 L 50.18,19.48 L 48.22,20.59 L 44.39,22.92 L 42.70,24.19 L 39.45,26.78 L 38.11,28.15 L 35.61,30.93 L 34.71,32.35 L 33.86,33.78 L 33.53,34.49 L 32.94,35.92 L 32.75,36.63 L 31.59,41.00 L 26.29,41.00 L 24.27,41.04 L 23.18,41.13 L 22.76,41.23 L 22.00,41.47 L 21.73,41.66 L 21.27,42.11 L 21.15,42.43 L 20.96,43.16 L 20.96,43.65 L 21.03,44.71 L 21.15,45.40 L 21.44,46.87 L 21.66,47.78 L 22.15,49.73 L 22.46,50.90 L 23.12,53.16 L 23.56,54.47 L 23.77,55.01 L 24.18,56.02 L 24.37,56.40 L 24.73,57.07 L 24.88,57.27 L 25.16,57.57 L 25.27,57.57 L 25.45,57.48 L 25.50,57.27 L 25.56,56.74 L 25.53,56.31 L 25.44,55.32 L 25.33,54.64 L 25.34,51.56 L 25.87,49.81 L 26.37,49.14 L 27.51,47.94 L 28.27,47.58 L 29.92,47.05 L 30.90,47.08 L 32.36,47.28 L 32.54,47.40 L 32.52,47.46 L 32.40,47.60 L 32.23,47.67 L 31.08,48.52 L 30.37,49.42 L 30.05,50.01 L 29.45,51.25 L 29.19,51.97 L 28.71,53.45 L 28.53,54.25 L 27.96,57.54 L 27.95,59.14 L 28.00,60.71 L 28.11,61.43 L 28.38,62.82 L 28.61,63.42 L 29.14,64.59 L 29.40,64.79 L 29.65,64.92 L 29.78,64.89 L 30.03,64.75 L 30.16,64.58 L 30.42,64.17 L 30.55,63.86 L 30.81,63.16 L 30.95,62.71 L 31.22,61.73 L 31.37,61.13 L 31.66,59.86 L 31.81,59.12 L 33.40,53.89 L 34.10,52.20 L 34.45,51.46 L 35.17,50.08 L 35.51,49.57 L 37.28,46.63 L 37.69,45.79 L 37.82,45.46 L 38.02,44.87 L 38.02,44.71 L 38.20,43.68 L 38.47,42.78 L 38.67,42.25 L 39.64,39.96 L 40.29,38.66 L 41.68,36.03 L 42.44,34.78 L 43.97,32.38 L 44.69,31.45 L 46.33,29.66 L 47.83,28.21 L 48.72,27.43 L 52.54,24.18 L 54.46,22.78 L 56.76,21.11 L 58.05,20.20 L 58.62,19.83 L 60.74,18.60 L 61.81,18.21 L 62.91,17.87 L 63.52,17.73 L 64.81,17.48 L 65.57,17.37 L 67.18,17.16 L 68.15,17.06 L 70.21,16.86 L 71.46,16.75 L 76.24,16.42 L 79.93,16.25 L 81.86,16.21 L 85.74,16.14 L 87.60,16.14 L 91.22,16.17 L 92.76,16.22 L 97.08,16.32 L 99.54,16.32 L 100.50,16.28 L 102.19,16.20 L 102.67,16.13 L 103.09,16.05 L 103.19,16.01 L 103.32,15.92 L 103.26,15.86 L 102.41,15.35 L 101.37,14.85 L 100.67,14.53 L 99.15,13.88 L 98.28,13.52 L 96.46,12.78 L 95.50,12.42 L 91.75,11.20 L 89.04,10.52 L 87.61,10.24 L 81.73,9.33 L 78.73,9.15 L 72.75,8.99 M 10.88,48.08 L 10.42,48.38 L 10.26,48.83 L 10.01,49.92 L 10.02,50.75 L 10.20,52.99 L 10.59,54.21 L 11.03,54.82 L 12.08,56.09 L 12.97,56.89 L 13.92,57.73 L 14.51,58.22 L 15.75,59.25 L 16.50,59.86 L 17.87,60.96 L 18.51,61.44 L 19.75,62.37 L 20.28,62.74 L 21.26,63.42 L 21.61,63.63 L 22.22,63.96 L 22.33,63.96 L 22.25,63.52 L 21.80,62.82 L 21.41,62.30 L 20.53,61.17 L 19.96,60.48 L 18.74,59.04 L 18.04,58.25 L 14.25,53.53 L 13.30,52.14 L 12.97,51.58 L 12.43,50.56 L 12.35,50.25 L 11.65,48.54 L 11.12,48.03 M 83.48,23.18 L 83.67,23.63 L 84.13,24.16 L 84.51,24.52 L 85.34,25.27 L 85.86,25.70 L 86.98,26.60 L 87.61,27.07 L 90.12,29.16 L 91.60,30.63 L 92.26,31.43 L 93.53,33.08 L 94.08,33.98 L 95.15,35.84 L 95.61,36.87 L 96.50,39.00 L 96.89,40.19 L 97.63,42.64 L 97.95,44.01 L 98.56,46.85 L 98.82,48.42 L 99.33,51.69 L 99.55,53.50 L 100.14,57.57 L 100.34,58.75 L 100.43,59.22 L 100.61,60.07 L 100.68,60.33 L 101.00,61.23 L 101.18,61.47 L 101.54,61.80 L 101.67,61.66 L 101.81,61.24 L 101.85,60.74 L 101.84,60.40 L 101.76,58.77 L 101.63,57.66 L 101.33,55.28 L 101.12,53.91 L 100.66,51.06 L 100.39,49.57 L 99.82,46.55 L 99.52,45.09 L 98.89,42.20 L 98.58,40.90 L 97.96,38.43 L 97.67,37.46 L 97.10,35.70 L 96.85,35.19 L 95.77,33.49 L 94.74,32.18 L 94.12,31.48 L 91.37,28.58 L 89.89,27.26 L 88.42,25.97 L 87.73,25.42 L 86.38,24.38 L 85.80,24.00 L 84.72,23.34 L 84.32,23.20 L 83.63,23.03 Z", fill: "var(--color-shinigami-1, #373c42)" }), /* @__PURE__ */ U.createElement("path", { d: "M 60.00,113.44 L 59.11,113.24 L 56.98,112.64 L 55.89,112.32 L 53.58,111.52 L 52.43,111.11 L 50.20,110.21 L 47.27,108.88 L 46.42,108.45 L 44.57,107.31 L 43.63,106.70 L 41.66,105.28 L 39.68,103.80 L 35.80,100.37 L 34.87,99.50 L 33.14,97.76 L 32.30,96.90 L 30.85,95.23 L 30.17,94.41 L 29.08,92.91 L 27.97,90.93 L 27.69,90.26 L 27.16,89.26 L 26.90,88.82 L 26.42,88.28 L 26.20,88.06 L 25.81,87.92 L 25.64,87.90 L 25.37,88.14 L 25.25,88.30 L 25.13,88.88 L 25.08,89.20 L 25.13,90.07 L 25.18,90.54 L 25.42,91.67 L 26.04,93.61 L 26.25,94.15 L 26.48,95.01 L 26.56,95.42 L 26.55,96.10 L 26.52,96.42 L 26.25,97.01 L 25.55,97.88 L 25.08,98.35 L 24.33,98.77 L 24.14,98.82 L 23.75,98.75 L 23.55,98.68 L 23.11,98.33 L 22.88,98.12 L 22.33,97.46 L 22.05,97.09 L 21.36,96.09 L 21.00,95.54 L 20.13,94.14 L 18.57,91.56 L 17.99,90.61 L 17.06,88.85 L 16.62,88.00 L 15.97,86.43 L 15.67,85.66 L 15.29,84.23 L 15.13,83.52 L 15.03,82.20 L 15.01,81.54 L 15.17,80.28 L 15.29,79.66 L 15.73,78.44 L 15.99,77.83 L 16.70,76.60 L 18.07,74.73 L 18.92,73.70 L 20.15,71.58 L 20.40,71.08 L 20.70,70.22 L 20.82,69.25 L 20.78,69.01 L 20.18,68.23 L 19.81,67.81 L 18.68,66.76 L 18.06,66.22 L 16.55,65.04 L 14.00,63.25 L 12.79,62.46 L 10.83,61.17 L 9.92,60.56 L 8.48,59.57 L 7.82,59.10 L 6.84,58.31 L 6.41,57.92 L 5.81,57.22 L 5.55,56.87 L 5.25,56.15 L 5.13,55.79 L 5.07,54.96 L 5.05,54.52 L 5.14,53.49 L 5.36,51.58 L 5.60,49.55 L 6.34,45.88 L 6.75,44.14 L 7.75,41.25 L 8.01,40.59 L 8.55,39.48 L 8.82,38.95 L 9.39,38.14 L 9.67,37.77 L 10.25,37.29 L 11.09,37.00 L 11.74,37.00 L 12.54,37.55 L 13.05,39.25 L 13.06,39.81 L 13.50,41.59 L 13.76,42.53 L 14.45,44.43 L 14.62,44.88 L 14.96,45.64 L 15.12,45.99 L 15.41,46.49 L 15.54,46.70 L 15.73,46.83 L 15.88,46.50 L 15.88,46.36 L 15.82,45.76 L 15.78,45.41 L 15.65,44.47 L 15.04,41.00 L 14.90,40.28 L 14.73,39.04 L 14.67,38.46 L 14.66,37.47 L 14.67,37.01 L 14.85,36.25 L 14.96,35.90 L 15.34,35.34 L 15.55,35.08 L 16.16,34.69 L 16.49,34.52 L 17.35,34.28 L 17.81,34.18 L 18.93,34.06 L 20.95,34.00 L 22.12,34.00 L 23.70,33.92 L 24.40,33.83 L 25.36,33.35 L 25.81,33.03 L 26.59,31.84 L 26.80,31.49 L 27.25,30.59 L 28.04,28.92 L 28.40,28.14 L 29.43,26.45 L 29.99,25.59 L 31.35,23.81 L 32.77,22.01 L 36.34,18.39 L 38.19,16.62 L 42.21,13.43 L 43.22,12.69 L 45.23,11.36 L 48.17,9.69 L 49.63,8.96 L 52.64,7.68 L 54.17,7.07 L 57.30,6.04 L 60.45,5.07 L 66.93,3.90 L 68.55,3.67 L 71.80,3.41 L 73.42,3.32 L 76.64,3.33 L 78.24,3.37 L 81.39,3.65 L 86.00,4.39 L 87.58,4.72 L 91.04,5.77 L 92.80,6.34 L 96.47,7.79 L 98.32,8.55 L 101.98,10.26 L 103.79,11.15 L 107.23,13.01 L 108.89,13.96 L 111.88,15.85 L 113.30,16.79 L 115.62,18.59 L 116.67,19.46 L 118.10,21.03 L 118.39,21.41 L 118.77,22.09 L 119.00,23.01 L 119.00,23.60 L 118.74,24.35 L 118.55,24.66 L 117.77,24.88 L 117.29,24.92 L 115.79,24.61 L 115.36,24.50 L 114.33,24.19 L 112.50,23.58 L 111.04,23.08 L 107.62,22.27 L 105.89,21.91 L 102.56,21.46 L 101.78,21.37 L 100.37,21.28 L 99.70,21.25 L 98.60,21.28 L 98.10,21.31 L 97.43,21.48 L 97.00,21.88 L 97.00,22.19 L 97.27,22.67 L 97.92,23.00 L 98.14,23.00 L 98.94,23.44 L 99.39,23.73 L 100.57,24.65 L 101.19,25.15 L 102.62,26.43 L 103.36,27.11 L 104.92,28.63 L 106.49,30.18 L 109.51,33.50 L 110.22,34.31 L 111.45,35.83 L 112.90,37.84 L 113.95,39.48 L 115.79,43.12 L 116.66,44.99 L 118.09,48.98 L 118.75,51.00 L 119.73,55.18 L 120.64,61.50 L 120.76,63.04 L 120.77,66.11 L 120.74,67.63 L 120.44,70.66 L 120.25,72.17 L 119.66,75.15 L 119.33,76.62 L 118.46,79.53 L 117.99,80.96 L 116.85,83.77 L 116.25,85.17 L 114.87,87.86 L 114.15,89.20 L 112.53,91.77 L 111.69,93.04 L 109.85,95.46 L 108.90,96.65 L 106.86,98.91 L 105.81,100.01 L 103.58,102.09 L 102.44,103.10 L 100.02,104.97 L 98.80,105.87 L 96.23,107.52 L 94.92,108.32 L 92.20,109.72 L 90.83,110.40 L 87.97,111.55 L 86.53,112.09 L 83.57,112.96 L 79.00,113.94 L 77.98,114.10 L 76.17,114.36 L 75.30,114.49 L 73.72,114.66 L 72.19,114.81 L 69.47,114.84 L 68.11,114.80 L 65.23,114.44 L 64.47,114.32 L 62.80,114.01 L 61.94,113.85 M 84.07,110.41 L 85.88,109.88 L 89.31,108.53 L 91.00,107.80 L 94.25,106.00 L 95.86,105.03 L 99.03,102.73 L 103.77,98.65 L 105.06,97.43 L 107.37,94.91 L 108.48,93.64 L 110.42,91.00 L 111.34,89.66 L 112.93,86.88 L 113.68,85.47 L 114.91,82.52 L 115.49,81.02 L 116.39,77.90 L 116.79,76.31 L 117.35,72.97 L 117.59,71.28 L 117.83,67.72 L 117.84,62.10 L 117.79,61.03 L 117.70,59.17 L 117.64,58.28 L 117.52,56.73 L 117.37,55.24 L 116.90,52.78 L 116.62,51.58 L 115.74,49.14 L 115.48,48.50 L 114.87,47.09 L 113.76,44.71 L 112.70,42.49 L 110.07,38.27 L 108.67,36.21 L 105.44,32.41 L 103.76,30.58 L 100.07,27.34 L 94.15,23.27 L 88.90,20.27 L 92.07,19.64 L 93.66,19.32 L 97.00,19.03 L 98.70,18.95 L 102.28,19.13 L 104.11,19.28 L 107.94,19.93 L 114.00,21.43 L 114.50,21.58 L 114.85,21.50 L 114.92,21.40 L 114.54,20.90 L 114.27,20.61 L 113.29,19.80 L 112.74,19.36 L 111.31,18.34 L 109.79,17.27 L 105.99,14.91 L 100.27,11.80 L 98.04,10.73 L 93.92,9.10 L 91.89,8.36 L 87.92,7.31 L 85.92,6.86 L 81.77,6.32 L 74.96,6.01 L 72.43,6.01 L 67.74,6.37 L 65.45,6.61 L 61.10,7.49 L 58.96,8.00 L 54.79,9.44 L 48.58,12.26 L 46.62,13.29 L 42.64,16.11 L 40.68,17.60 L 37.02,21.00 L 35.27,22.74 L 32.39,26.28 L 31.74,27.15 L 30.66,28.84 L 29.44,31.25 L 29.01,32.29 L 28.32,33.75 L 27.98,34.39 L 27.32,35.18 L 26.97,35.52 L 26.14,35.85 L 24.50,36.01 L 23.67,36.01 L 21.69,36.21 L 19.13,36.66 L 18.60,36.80 L 17.87,37.12 L 17.56,37.31 L 17.24,37.88 L 17.12,38.22 L 17.11,39.26 L 17.36,41.61 L 17.44,42.20 L 17.75,43.74 L 17.93,44.55 L 18.39,46.36 L 20.02,51.71 L 20.45,52.91 L 21.15,54.88 L 21.47,55.81 L 21.96,57.28 L 22.18,57.95 L 22.46,58.95 L 22.58,59.39 L 22.67,59.96 L 22.68,60.19 L 22.57,60.36 L 22.49,60.40 L 22.18,60.21 L 22.00,60.08 L 21.50,59.57 L 20.54,58.50 L 20.13,58.03 L 19.23,56.86 L 18.77,56.25 L 17.81,54.86 L 16.84,53.43 L 14.93,50.27 L 14.01,48.69 L 12.49,45.72 L 12.15,45.02 L 11.61,43.77 L 11.05,42.21 L 10.89,41.63 L 10.60,41.08 L 10.45,40.92 L 10.13,41.36 L 10.04,41.53 L 9.84,42.11 L 9.73,42.43 L 9.49,43.31 L 9.36,43.79 L 9.07,44.99 L 8.56,47.20 L 8.32,48.26 L 7.93,50.27 L 7.75,51.24 L 7.51,52.92 L 7.40,53.70 L 7.32,54.88 L 7.41,55.86 L 7.49,55.99 L 8.05,56.47 L 8.39,56.74 L 9.37,57.43 L 13.25,59.87 L 14.59,60.65 L 16.85,62.10 L 17.91,62.80 L 19.60,64.13 L 20.38,64.78 L 21.54,66.03 L 22.05,66.65 L 22.69,67.87 L 22.94,68.48 L 23.08,69.71 L 23.08,70.33 L 22.73,71.63 L 22.50,72.29 L 21.68,73.69 L 19.96,75.96 L 19.15,76.91 L 17.87,79.15 L 17.60,79.70 L 17.24,80.70 L 17.01,81.96 L 17.01,82.23 L 17.24,83.13 L 17.39,83.64 L 17.86,84.90 L 18.38,86.22 L 19.81,89.28 L 20.17,90.03 L 20.91,91.44 L 21.27,92.11 L 21.94,93.26 L 22.27,93.79 L 22.80,94.53 L 23.37,95.00 L 23.42,95.00 L 23.47,94.63 L 23.49,94.38 L 23.48,93.60 L 23.27,90.25 L 23.20,89.45 L 23.17,88.04 L 23.18,87.37 L 23.31,86.20 L 23.40,85.64 L 23.69,84.70 L 24.30,83.55 L 24.65,83.09 L 25.18,82.59 L 25.43,82.42 L 25.94,82.65 L 26.21,82.87 L 26.92,83.99 L 27.12,84.34 L 27.59,85.23 L 28.44,86.89 L 29.10,88.19 L 30.64,90.70 L 31.44,91.93 L 33.25,94.30 L 34.19,95.46 L 36.25,97.67 L 37.31,98.75 L 39.59,100.77 L 40.75,101.76 L 43.23,103.58 L 44.49,104.47 L 47.14,106.06 L 48.48,106.83 L 51.28,108.18 L 55.61,109.91 L 56.53,110.22 L 58.63,110.75 L 59.72,111.00 L 62.08,111.38 L 64.48,111.72 L 69.69,111.96 L 72.30,112.01 L 77.38,111.65 L 78.61,111.52 L 80.92,111.15 L 82.04,110.94 M 43.48,99.07 L 42.39,98.24 L 40.22,96.22 L 39.15,95.16 L 37.08,92.81 L 36.07,91.62 L 34.22,89.15 L 33.33,87.91 L 31.82,85.51 L 31.11,84.34 L 30.05,82.19 L 29.58,81.17 L 29.08,79.48 L 28.91,78.71 L 29.09,77.67 L 29.18,77.46 L 29.51,77.19 L 30.25,77.04 L 30.34,77.05 L 30.69,77.27 L 30.88,77.41 L 31.41,77.89 L 31.97,78.43 L 33.51,80.12 L 34.33,81.04 L 36.22,83.29 L 37.18,84.45 L 39.19,86.97 L 40.19,88.24 L 42.10,90.75 L 43.02,91.97 L 44.60,94.17 L 45.32,95.21 L 46.34,96.82 L 46.55,97.18 L 46.83,97.72 L 47.00,98.27 L 47.00,98.64 L 47.35,99.56 L 48.18,100.78 L 48.51,101.11 L 48.88,101.75 L 48.91,102.42 L 48.85,102.49 L 48.34,102.30 L 48.03,102.16 L 47.13,101.63 L 46.63,101.32 L 45.44,100.52 L 44.83,100.08 M 49.82,100.75 L 49.48,100.13 L 49.02,98.89 L 48.84,97.59 L 48.91,97.34 L 48.78,96.78 L 48.27,96.09 L 48.21,96.05 L 47.95,95.78 L 47.80,95.62 L 47.37,95.12 L 46.90,94.58 L 45.53,92.93 L 44.79,92.03 L 43.03,89.83 L 40.12,86.15 L 38.93,84.63 L 37.03,82.06 L 36.16,80.85 L 34.92,78.94 L 34.39,78.07 L 33.83,76.85 L 33.78,75.82 L 33.94,75.66 L 34.33,75.59 L 34.54,75.60 L 35.04,75.85 L 35.30,76.01 L 35.88,76.58 L 36.85,77.79 L 37.42,78.59 L 38.11,80.07 L 38.24,80.41 L 38.34,80.93 L 38.22,81.45 L 38.02,81.64 L 38.15,81.86 L 39.00,81.83 L 39.46,81.73 L 40.06,82.06 L 40.36,83.24 L 40.32,83.73 L 40.57,84.29 L 41.27,84.33 L 41.57,84.15 L 41.81,84.20 L 41.58,84.87 L 41.36,85.22 L 41.42,85.65 L 42.18,85.77 L 42.54,85.70 L 43.07,86.09 L 43.36,87.24 L 43.32,87.73 L 43.57,88.29 L 44.27,88.33 L 44.60,88.13 L 44.82,88.23 L 44.49,89.10 L 44.27,89.48 L 44.16,89.87 L 44.50,89.76 L 44.73,89.55 L 45.43,89.58 L 45.80,89.66 L 46.59,90.11 L 46.97,90.38 L 47.58,91.07 L 48.00,92.18 L 48.00,92.44 L 47.63,92.63 L 46.75,92.40 L 46.39,92.19 L 46.09,92.14 L 46.33,92.59 L 46.56,92.84 L 47.19,93.23 L 48.08,93.50 L 48.34,93.50 L 48.73,93.72 L 49.01,94.24 L 49.01,94.34 L 49.17,94.81 L 49.28,95.08 L 49.61,95.81 L 51.01,98.52 L 51.58,99.53 L 52.32,100.92 L 52.62,101.53 L 52.88,102.27 L 52.95,102.58 L 52.76,102.87 L 52.04,103.00 L 51.77,103.00 L 50.99,102.34 L 50.59,101.93 M 36.41,78.50 L 35.96,77.81 L 35.12,76.73 L 34.93,76.51 L 34.63,76.20 L 34.33,76.00 L 34.20,76.00 L 34.21,76.31 L 34.26,76.51 L 34.56,77.15 L 34.74,77.50 L 35.27,78.35 L 36.28,79.75 L 36.71,80.31 L 37.26,80.86 L 37.49,81.04 L 37.62,80.92 L 37.63,80.79 L 37.34,80.09 L 37.14,79.68 M 92.48,101.06 L 92.60,100.67 L 92.63,99.89 L 92.60,99.49 L 92.31,98.63 L 92.11,98.18 L 91.47,97.17 L 90.08,95.43 L 89.29,94.54 L 88.17,93.07 L 87.69,92.40 L 87.19,91.37 L 87.02,90.92 L 87.13,90.35 L 88.00,90.00 L 88.27,90.00 L 88.72,89.63 L 89.05,88.75 L 89.06,88.58 L 89.56,88.03 L 89.87,87.73 L 90.89,86.99 L 91.46,86.60 L 92.86,85.76 L 95.25,84.50 L 96.25,84.01 L 97.95,83.05 L 98.75,82.57 L 100.06,81.56 L 100.67,81.04 L 101.64,79.88 L 102.08,79.27 L 102.75,77.86 L 103.04,77.11 L 103.43,75.35 L 103.60,74.42 L 103.76,72.22 L 103.82,71.06 L 103.79,68.32 L 103.58,63.50 L 103.45,61.39 L 103.14,57.49 L 102.98,55.59 L 102.58,52.10 L 102.37,50.40 L 101.89,47.29 L 101.64,45.79 L 101.07,43.06 L 100.77,41.74 L 100.11,39.37 L 99.76,38.23 L 99.00,36.20 L 98.61,35.24 L 97.75,33.55 L 96.35,31.37 L 95.77,30.61 L 94.97,29.46 L 94.64,28.95 L 94.30,28.28 L 94.19,28.01 L 94.28,27.80 L 94.37,27.75 L 94.86,27.99 L 95.15,28.16 L 96.00,28.81 L 96.47,29.19 L 97.65,30.26 L 98.28,30.84 L 99.77,32.29 L 102.30,34.87 L 103.91,36.56 L 106.66,40.15 L 107.96,41.97 L 110.08,45.79 L 111.06,47.73 L 112.54,51.74 L 113.20,53.76 L 114.03,57.91 L 114.36,60.00 L 114.54,64.26 L 114.54,66.40 L 114.05,70.71 L 113.73,72.87 L 112.57,77.19 L 110.08,83.65 L 109.71,84.44 L 108.74,86.14 L 108.22,87.01 L 107.01,88.81 L 105.75,90.62 L 102.79,94.20 L 101.28,95.93 L 98.22,98.88 L 97.47,99.55 L 96.06,100.67 L 94.12,101.94 L 93.59,102.22 L 92.88,102.55 L 92.58,102.67 L 92.27,102.65 L 92.16,102.59 L 92.18,102.17 L 92.22,101.91 M 53.00,96.50 L 52.65,96.07 L 52.24,95.26 L 52.21,94.45 L 52.35,94.31 L 52.95,94.55 L 54.00,95.50 L 54.35,95.93 L 54.76,96.74 L 54.79,97.55 L 54.65,97.69 L 54.05,97.45 L 53.73,97.26 M 45.69,87.17 L 44.56,85.73 L 42.68,83.34 L 41.79,82.22 L 40.37,80.38 L 39.71,79.53 L 38.68,78.17 L 38.21,77.54 L 37.53,76.57 L 37.22,76.12 L 36.83,75.46 L 36.66,75.16 L 36.49,74.73 L 36.58,73.88 L 36.65,73.75 L 36.63,73.30 L 36.59,73.04 L 36.35,72.39 L 35.05,70.06 L 34.72,69.61 L 34.25,68.80 L 34.04,68.42 L 33.80,67.76 L 33.71,67.45 L 33.70,66.98 L 33.98,66.51 L 34.12,66.42 L 34.38,65.94 L 34.50,65.65 L 34.71,64.84 L 35.02,61.69 L 35.02,60.69 L 35.10,59.09 L 35.15,58.36 L 35.31,57.31 L 35.40,56.85 L 35.63,56.33 L 35.75,56.14 L 36.02,56.15 L 36.17,56.22 L 36.48,56.76 L 36.63,57.09 L 36.96,58.13 L 37.13,58.72 L 37.46,60.27 L 37.94,63.15 L 38.13,64.46 L 38.58,66.83 L 38.81,67.97 L 39.36,70.04 L 39.65,71.05 L 40.34,72.87 L 40.70,73.76 L 41.54,75.38 L 42.43,76.95 L 44.78,79.67 L 49.36,83.45 L 50.71,84.37 L 52.77,86.15 L 53.70,87.02 L 54.89,88.62 L 55.37,89.39 L 55.65,90.75 L 54.98,92.42 L 54.42,92.98 L 53.29,93.43 L 52.99,93.49 L 52.37,93.41 L 52.05,93.34 L 51.37,93.00 L 51.01,92.80 L 50.23,92.20 L 49.83,91.86 L 48.93,90.97 L 48.47,90.49 L 47.43,89.30 L 46.89,88.67 M 62.98,84.62 L 61.70,83.87 L 59.56,82.56 L 58.55,81.94 L 56.90,80.82 L 56.12,80.27 L 54.89,79.24 L 54.32,78.73 L 53.43,77.71 L 53.03,77.20 L 52.44,76.11 L 52.17,75.54 L 51.80,74.29 L 51.63,73.64 L 51.41,72.14 L 51.18,69.53 L 51.10,68.22 L 51.08,66.10 L 51.10,65.10 L 51.34,63.33 L 51.49,62.45 L 52.05,60.69 L 53.30,57.65 L 54.08,55.95 L 56.16,52.93 L 57.26,51.50 L 59.73,49.24 L 60.35,48.73 L 61.61,47.91 L 62.24,47.54 L 63.48,47.00 L 64.09,46.78 L 65.25,46.57 L 66.88,46.66 L 68.00,46.92 L 70.30,47.79 L 71.46,48.28 L 73.73,49.52 L 74.85,50.18 L 76.97,51.72 L 79.83,54.29 L 83.15,57.75 L 80.72,60.18 L 80.00,60.91 L 78.84,62.89 L 78.32,63.93 L 77.66,66.18 L 77.40,67.30 L 77.34,69.32 L 77.37,69.79 L 77.56,70.61 L 78.06,71.58 L 78.23,71.77 L 78.78,72.13 L 79.09,72.30 L 79.86,72.58 L 82.53,73.00 L 83.17,73.00 L 84.27,72.83 L 84.79,72.71 L 85.76,72.23 L 86.24,71.95 L 87.22,71.08 L 88.87,69.25 L 89.25,68.78 L 89.88,68.02 L 90.17,67.67 L 90.64,67.13 L 91.07,66.64 L 91.55,66.31 L 91.75,66.24 L 91.90,66.69 L 91.97,68.17 L 91.98,68.90 L 92.32,70.16 L 93.13,71.21 L 93.34,71.28 L 93.55,71.64 L 93.61,71.84 L 93.56,72.44 L 93.45,73.08 L 92.58,74.83 L 92.05,75.75 L 90.56,77.72 L 87.89,80.44 L 87.45,80.81 L 86.27,81.66 L 85.64,82.09 L 84.18,83.02 L 82.66,83.96 L 79.28,85.83 L 78.44,86.27 L 76.84,87.07 L 76.06,87.45 L 74.65,88.08 L 73.98,88.36 L 72.90,88.75 L 71.76,89.00 L 71.58,89.00 L 70.66,88.65 L 70.13,88.43 L 68.64,87.71 L 67.85,87.31 L 65.99,86.32 L 65.03,85.79 M 80.76,83.38 L 81.59,82.92 L 83.03,82.06 L 83.72,81.64 L 84.90,80.82 L 86.04,80.02 L 87.66,78.41 L 88.39,77.59 L 89.38,75.76 L 90.38,72.50 L 90.53,71.76 L 90.70,70.85 L 90.75,70.49 L 90.66,70.36 L 90.58,70.40 L 90.16,71.09 L 89.07,73.07 L 88.58,73.97 L 87.17,75.72 L 86.39,76.60 L 84.33,78.34 L 83.21,79.22 L 80.44,81.00 L 75.40,83.79 L 71.35,85.86 L 65.37,82.08 L 63.73,81.04 L 60.18,78.26 L 59.33,77.57 L 57.84,76.21 L 56.08,74.40 L 52.78,70.50 L 53.43,73.50 L 53.62,74.36 L 54.41,75.94 L 54.89,76.73 L 56.46,78.34 L 56.92,78.75 L 58.02,79.63 L 58.61,80.08 L 60.00,81.04 L 60.73,81.54 L 62.43,82.62 L 65.39,84.41 L 66.22,84.91 L 67.60,85.71 L 68.25,86.08 L 69.35,86.62 L 69.88,86.87 L 70.83,87.15 L 71.30,87.25 L 72.22,87.26 L 72.70,87.23 L 73.72,86.95 L 74.26,86.78 L 75.52,86.21 L 76.19,85.89 L 77.80,85.03 L 78.67,84.56 M 65.87,71.24 L 66.18,70.66 L 66.45,69.35 L 66.53,68.67 L 66.40,67.23 L 66.28,66.50 L 65.80,65.03 L 65.52,64.30 L 64.75,62.89 L 64.34,62.21 L 63.34,60.98 L 62.82,60.39 L 61.66,59.42 L 61.07,58.98 L 59.80,58.38 L 57.85,58.00 L 57.20,58.00 L 56.08,58.34 L 55.56,58.56 L 54.69,59.28 L 54.29,59.68 L 53.69,60.69 L 53.42,61.23 L 53.11,62.45 L 52.98,63.07 L 52.97,64.42 L 53.00,65.10 L 53.29,66.48 L 53.48,67.16 L 54.11,68.50 L 55.45,70.35 L 56.19,71.16 L 58.12,72.24 L 59.12,72.70 L 61.21,73.06 L 62.23,73.14 L 64.02,72.74 L 64.43,72.59 L 65.11,72.14 L 65.42,71.89 M 18.04,81.83 L 18.04,81.60 L 18.23,80.93 L 18.36,80.57 L 18.78,79.73 L 20.62,77.05 L 20.98,76.61 L 21.95,75.63 L 22.46,75.13 L 23.63,74.09 L 24.84,73.05 L 27.41,71.10 L 28.03,70.65 L 29.17,69.88 L 29.72,69.53 L 30.63,69.01 L 31.05,68.79 L 31.63,68.61 L 32.00,68.78 L 32.00,68.90 L 31.60,69.38 L 31.35,69.65 L 30.53,70.36 L 30.07,70.73 L 28.93,71.58 L 26.98,72.92 L 25.55,73.84 L 22.85,76.29 L 22.22,76.91 L 21.18,78.13 L 20.03,79.83 L 19.76,80.34 L 19.27,81.13 L 19.03,81.49 L 18.64,81.94 L 18.46,82.12 L 18.21,82.19 L 18.11,82.18 M 79.00,70.09 L 79.00,69.91 L 79.26,69.41 L 79.43,69.15 L 79.96,68.53 L 80.55,67.89 L 82.16,66.55 L 82.99,65.90 L 84.56,64.95 L 84.91,64.77 L 85.50,64.56 L 86.10,64.56 L 86.35,64.72 L 86.56,65.17 L 86.61,65.42 L 86.42,66.10 L 86.26,66.47 L 85.64,67.43 L 84.19,69.25 L 83.80,69.71 L 82.72,70.37 L 82.16,70.66 L 81.01,70.95 L 80.46,71.04 L 79.59,70.88 L 79.23,70.74 M 39.75,64.12 L 39.59,63.41 L 39.35,61.75 L 39.25,60.88 L 39.11,59.00 L 39.00,57.08 L 39.07,52.94 L 39.15,50.88 L 39.59,47.01 L 39.72,46.09 L 40.05,44.43 L 40.62,42.28 L 41.24,40.48 L 42.85,37.13 L 43.72,35.50 L 45.90,32.44 L 47.06,30.93 L 49.87,28.08 L 54.85,23.93 L 55.66,23.34 L 57.00,22.36 L 57.64,21.91 L 58.73,21.17 L 59.78,20.49 L 61.48,19.72 L 62.33,19.41 L 64.20,19.18 L 64.71,19.14 L 65.90,19.12 L 68.00,19.13 L 74.50,19.24 L 69.75,20.03 L 68.45,20.25 L 65.41,21.21 L 64.68,21.47 L 63.33,22.04 L 61.65,22.91 L 61.23,23.17 L 60.23,23.91 L 59.71,24.31 L 58.55,25.30 L 57.35,26.35 L 54.72,28.93 L 53.40,30.26 L 50.86,33.06 L 47.69,37.00 L 47.40,37.40 L 46.96,37.95 L 46.76,38.18 L 46.50,38.39 L 46.39,38.44 L 46.32,38.30 L 46.43,37.70 L 46.54,37.33 L 46.64,36.81 L 46.67,36.59 L 46.62,36.35 L 46.57,36.27 L 46.39,36.29 L 46.28,36.33 L 46.00,36.59 L 45.69,36.90 L 44.84,38.14 L 43.42,40.73 L 43.10,41.40 L 42.56,43.10 L 42.31,44.02 L 41.90,46.31 L 41.71,47.54 L 41.40,50.54 L 41.05,56.00 L 41.00,57.05 L 40.90,58.87 L 40.85,59.74 L 40.75,61.18 L 40.70,61.85 L 40.61,62.93 L 40.56,63.43 L 40.45,64.16 L 40.40,64.48 L 40.30,64.87 L 40.24,65.02 L 40.13,65.09 L 40.07,65.08 L 39.95,64.83 L 39.88,64.67 M 28.61,63.42 L 28.38,62.82 L 28.11,61.43 L 28.00,60.71 L 27.95,59.14 L 27.96,57.54 L 28.53,54.25 L 28.71,53.45 L 29.19,51.97 L 29.45,51.25 L 30.05,50.01 L 30.37,49.42 L 31.08,48.52 L 32.23,47.67 L 32.40,47.60 L 32.52,47.46 L 32.54,47.40 L 32.36,47.28 L 30.90,47.08 L 29.92,47.05 L 28.27,47.58 L 27.51,47.94 L 26.37,49.14 L 25.87,49.81 L 25.34,51.56 L 25.33,54.64 L 25.44,55.32 L 25.53,56.31 L 25.56,56.74 L 25.50,57.27 L 25.45,57.48 L 25.27,57.57 L 25.16,57.57 L 24.88,57.27 L 24.73,57.07 L 24.37,56.40 L 24.18,56.02 L 23.77,55.01 L 23.56,54.47 L 23.12,53.16 L 22.46,50.90 L 22.15,49.73 L 21.66,47.78 L 21.44,46.87 L 21.15,45.40 L 21.03,44.71 L 20.96,43.65 L 20.96,43.16 L 21.15,42.43 L 21.27,42.11 L 21.73,41.66 L 22.00,41.47 L 22.76,41.23 L 23.18,41.13 L 24.27,41.04 L 26.29,41.00 L 31.59,41.00 L 32.75,36.63 L 32.94,35.92 L 33.53,34.49 L 33.86,33.78 L 34.71,32.35 L 35.61,30.93 L 38.11,28.15 L 39.45,26.78 L 42.70,24.19 L 44.39,22.92 L 48.22,20.59 L 50.18,19.48 L 54.41,17.53 L 56.56,16.61 L 61.02,15.13 L 63.27,14.46 L 67.79,13.55 L 74.46,12.93 L 75.56,12.92 L 77.04,12.86 L 77.66,12.82 L 78.24,12.69 L 78.44,12.60 L 78.25,12.34 L 77.21,11.76 L 76.82,11.57 L 75.63,11.36 L 74.98,11.27 L 73.36,11.25 L 72.50,11.26 L 70.53,11.42 L 69.51,11.52 L 67.31,11.83 L 65.07,12.19 L 60.33,13.30 L 53.69,15.47 L 52.85,15.81 L 51.29,16.39 L 50.55,16.67 L 49.27,17.09 L 48.68,17.28 L 47.83,17.49 L 47.20,17.53 L 47.11,17.44 L 47.40,17.10 L 47.62,16.90 L 48.44,16.38 L 48.90,16.10 L 50.13,15.45 L 50.78,15.11 L 52.30,14.39 L 53.88,13.66 L 57.44,12.21 L 62.47,10.47 L 63.56,10.15 L 66.00,9.68 L 67.26,9.47 L 69.98,9.20 L 72.75,8.99 L 78.73,9.15 L 81.73,9.33 L 87.61,10.24 L 89.04,10.52 L 91.75,11.20 L 95.50,12.42 L 96.46,12.78 L 98.28,13.52 L 99.15,13.88 L 100.67,14.53 L 101.37,14.85 L 102.41,15.35 L 103.26,15.86 L 103.32,15.92 L 103.19,16.01 L 103.09,16.05 L 102.67,16.13 L 102.19,16.20 L 100.50,16.28 L 99.54,16.32 L 97.08,16.32 L 92.76,16.22 L 91.22,16.17 L 87.60,16.14 L 85.74,16.14 L 81.86,16.21 L 79.93,16.25 L 76.24,16.42 L 71.46,16.75 L 70.21,16.86 L 68.15,17.06 L 67.18,17.16 L 65.57,17.37 L 64.81,17.48 L 63.52,17.73 L 62.91,17.87 L 61.81,18.21 L 60.74,18.60 L 58.62,19.83 L 58.05,20.20 L 56.76,21.11 L 54.46,22.78 L 52.54,24.18 L 48.72,27.43 L 47.83,28.21 L 46.33,29.66 L 44.69,31.45 L 43.97,32.38 L 42.44,34.78 L 41.68,36.03 L 40.29,38.66 L 39.64,39.96 L 38.67,42.25 L 38.47,42.78 L 38.20,43.68 L 38.02,44.71 L 38.02,44.87 L 37.82,45.46 L 37.69,45.79 L 37.28,46.63 L 35.51,49.57 L 35.17,50.08 L 34.45,51.46 L 34.10,52.20 L 33.40,53.89 L 31.81,59.12 L 31.66,59.86 L 31.37,61.13 L 31.22,61.73 L 30.95,62.71 L 30.81,63.16 L 30.55,63.86 L 30.42,64.17 L 30.16,64.58 L 30.03,64.75 L 29.78,64.89 L 29.65,64.92 L 29.40,64.79 L 29.14,64.59 M 16.50,59.86 L 15.75,59.25 L 14.51,58.22 L 13.92,57.73 L 12.97,56.89 L 12.08,56.09 L 11.03,54.82 L 10.59,54.21 L 10.20,52.99 L 10.02,50.75 L 10.01,49.92 L 10.26,48.83 L 10.42,48.38 L 10.88,48.08 L 11.12,48.03 L 11.65,48.54 L 12.35,50.25 L 12.43,50.56 L 12.97,51.58 L 13.30,52.14 L 14.25,53.53 L 18.04,58.25 L 18.74,59.04 L 19.96,60.48 L 20.53,61.17 L 21.41,62.30 L 21.80,62.82 L 22.25,63.52 L 22.33,63.96 L 22.22,63.96 L 21.61,63.63 L 21.26,63.42 L 20.28,62.74 L 19.75,62.37 L 18.51,61.44 L 17.87,60.96 M 100.68,60.33 L 100.61,60.07 L 100.43,59.22 L 100.34,58.75 L 100.14,57.57 L 99.55,53.50 L 99.33,51.69 L 98.82,48.42 L 98.56,46.85 L 97.95,44.01 L 97.63,42.64 L 96.89,40.19 L 96.50,39.00 L 95.61,36.87 L 95.15,35.84 L 94.08,33.98 L 93.53,33.08 L 92.26,31.43 L 91.60,30.63 L 90.12,29.16 L 87.61,27.07 L 86.98,26.60 L 85.86,25.70 L 85.34,25.27 L 84.51,24.52 L 84.13,24.16 L 83.67,23.63 L 83.48,23.18 L 83.63,23.03 L 84.32,23.20 L 84.72,23.34 L 85.80,24.00 L 86.38,24.38 L 87.73,25.42 L 88.42,25.97 L 89.89,27.26 L 91.37,28.58 L 94.12,31.48 L 94.74,32.18 L 95.77,33.49 L 96.85,35.19 L 97.10,35.70 L 97.67,37.46 L 97.96,38.43 L 98.58,40.90 L 98.89,42.20 L 99.52,45.09 L 99.82,46.55 L 100.39,49.57 L 100.66,51.06 L 101.12,53.91 L 101.33,55.28 L 101.63,57.66 L 101.76,58.77 L 101.84,60.40 L 101.85,60.74 L 101.81,61.24 L 101.67,61.66 L 101.54,61.80 L 101.18,61.47 L 101.00,61.23 M 59.00,69.00 L 58.46,68.46 L 57.72,67.52 L 57.40,67.07 L 57.11,66.30 L 57.02,65.94 L 57.16,65.32 L 57.88,64.57 L 58.03,64.48 L 58.50,64.50 L 58.75,64.54 L 59.35,64.79 L 59.98,65.09 L 61.40,66.13 L 62.09,66.70 L 63.22,67.95 L 63.45,68.25 L 63.79,68.82 L 64.00,69.57 L 64.00,70.09 L 63.55,70.68 L 63.26,70.90 L 62.37,70.93 L 61.89,70.88 L 60.76,70.36 L 60.18,70.04 Z", fill: "var(--color-shinigami-2, #808080)" }))), zR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: MR,
  github: _R,
  google: VR,
  qq: UR,
  shinigami: FR,
  twitter: AR,
  weibo: PR
}, Symbol.toStringTag, { value: "Module" })), fd = {}, _b = (o) => {
  const a = document.querySelector(`script[src="${o}"]`);
  if (a)
    return fd[o] = {
      loading: !1,
      error: null,
      scriptEl: a
    };
};
function _3({
  src: o,
  checkForExisting: a = !1,
  ...s
}) {
  let l = o ? fd[o] : void 0;
  !l && a && o && Ab && (l = _b(o));
  const [d, f] = U.useState(
    l ? l.loading : !!o
  ), [c, y] = U.useState(l ? l.error : null), [h, p] = U.useState(!1);
  return U.useEffect(() => {
    if (!Ab || !o || h || c) return;
    l = fd[o], !l && a && (l = _b(o));
    let v;
    l ? v = l.scriptEl : (v = document.createElement("script"), v.src = o, Object.keys(s).forEach((C) => {
      v[C] === void 0 ? v.setAttribute(C, s[C]) : v[C] = s[C];
    }), l = fd[o] = {
      loading: !0,
      error: null,
      scriptEl: v
    });
    const L = () => {
      l && (l.loading = !1), f(!1), p(!0);
    }, x = (C) => {
      l && (l.error = C), y(C);
    };
    return v.addEventListener("load", L), v.addEventListener("error", x), document.body.appendChild(v), () => {
      v.removeEventListener("load", L), v.removeEventListener("error", x);
    };
  }, [o]), [d, c];
}
const Ab = typeof window < "u" && typeof window.document < "u";
function $R({
  sitekey: o,
  hideDefaultBadge: a = !1,
  checkForExisting: s = !0
}) {
  const [l, d] = U.useState();
  return U.useEffect(() => {
    HR && a && JR(".grecaptcha-badge { visibility: hidden; }");
  }, [a]), _3({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${o}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    }),
    checkForExisting: s
  }), U.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    });
  }, []), (f) => new Promise((c, y) => {
    l ? c(l.execute(o, { action: f })) : y(new Error("Recaptcha script not available"));
  });
}
const HR = typeof window < "u" && typeof window.document < "u", JR = (o) => {
  const a = document.createElement("style");
  document.head.appendChild(a);
  const s = a.sheet;
  s && s.insertRule(o, s.cssRules.length);
};
function BR({ sitekey: o, checkForExisting: a = !0 }) {
  const [s, l] = U.useState();
  return _3({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      l(window.turnstile);
    }),
    async: !1,
    checkForExisting: a
  }), U.useEffect(() => {
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
function A3(o) {
  const a = $R(o), s = BR(o);
  return window.turnstileKey ? s : window.recaptchaV3Key ? a : () => {
  };
}
const IR = {
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
class gd {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(a, s);
  }
  init(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = s.prefix || "i18next:", this.logger = a || IR, this.options = s, this.debug = s.debug;
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
    return new gd(this.logger, {
      prefix: `${this.prefix}:${a}:`,
      ...this.options
    });
  }
  clone(a) {
    return a = a || this.options, a.prefix = a.prefix || this.prefix, new gd(this.logger, a);
  }
}
var sa = new gd();
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
function xu() {
  let o, a;
  const s = new Promise((l, d) => {
    o = l, a = d;
  });
  return s.resolve = o, s.reject = a, s;
}
function Mb(o) {
  return o == null ? "" : "" + o;
}
function YR(o, a, s) {
  o.forEach((l) => {
    a[l] && (s[l] = a[l]);
  });
}
const KR = /###/g;
function Eu(o, a, s) {
  function l(y) {
    return y && y.indexOf("###") > -1 ? y.replace(KR, ".") : y;
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
function Pb(o, a, s) {
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
function WR(o, a, s, l) {
  const {
    obj: d,
    k: f
  } = Eu(o, a, Object);
  d[f] = d[f] || [], d[f].push(s);
}
function yd(o, a) {
  const {
    obj: s,
    k: l
  } = Eu(o, a);
  if (s)
    return s[l];
}
function GR(o, a, s) {
  const l = yd(o, s);
  return l !== void 0 ? l : yd(a, s);
}
function M3(o, a, s) {
  for (const l in a)
    l !== "__proto__" && l !== "constructor" && (l in o ? typeof o[l] == "string" || o[l] instanceof String || typeof a[l] == "string" || a[l] instanceof String ? s && (o[l] = a[l]) : M3(o[l], a[l], s) : o[l] = a[l]);
  return o;
}
function ys(o) {
  return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var qR = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function QR(o) {
  return typeof o == "string" ? o.replace(/[&<>"'\/]/g, (a) => qR[a]) : o;
}
class XR {
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
const ZR = [" ", ",", "?", "!", ";"], ej = new XR(20);
function tj(o, a, s) {
  a = a || "", s = s || "";
  const l = ZR.filter((c) => a.indexOf(c) < 0 && s.indexOf(c) < 0);
  if (l.length === 0) return !0;
  const d = ej.getRegExp(`(${l.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let f = !d.test(o);
  if (!f) {
    const c = o.indexOf(s);
    c > 0 && !d.test(o.substring(0, c)) && (f = !0);
  }
  return f;
}
function Bv(o, a) {
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
function Ld(o) {
  return o && o.indexOf("_") > 0 ? o.replace("_", "-") : o;
}
class Ub extends wd {
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
    const h = yd(this.data, y);
    return !h && !s && !l && a.indexOf(".") > -1 && (a = y[0], s = y[1], l = y.slice(2).join(".")), h || !c || typeof l != "string" ? h : Bv(this.data && this.data[a] && this.data[a][s], l, f);
  }
  addResource(a, s, l, d) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let y = [a, s];
    l && (y = y.concat(c ? l.split(c) : l)), a.indexOf(".") > -1 && (y = a.split("."), d = s, s = y[1]), this.addNamespaces(s), Pb(this.data, y, d), f.silent || this.emit("added", a, s, l, d);
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
    let h = yd(this.data, y) || {};
    c.skipCopy || (l = JSON.parse(JSON.stringify(l))), d ? M3(h, l, f) : h = {
      ...h,
      ...l
    }, Pb(this.data, y, h), c.silent || this.emit("added", a, s, l);
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
var P3 = {
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
const Vb = {};
class bd extends wd {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), YR(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = sa.create("translator");
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
    const c = l && a.indexOf(l) > -1, y = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !tj(a, l, d);
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
        const R = s.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${h}${R}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: h,
          usedParams: this.getUsedParamsDetails(s)
        } : `${h}${R}${c}`;
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
    const L = this.resolve(a, s);
    let x = L && L.res;
    const C = L && L.usedKey || c, j = L && L.exactUsedKey || c, F = Object.prototype.toString.apply(x), O = ["[object Number]", "[object Function]", "[object RegExp]"], M = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, k = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (k && x && (typeof x != "string" && typeof x != "boolean" && typeof x != "number") && O.indexOf(F) < 0 && !(typeof M == "string" && Array.isArray(x))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(C, x, {
          ...s,
          ns: y
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return d ? (L.res = R, L.usedParams = this.getUsedParamsDetails(s), L) : R;
      }
      if (f) {
        const R = Array.isArray(x), P = R ? [] : {}, I = R ? j : C;
        for (const X in x)
          if (Object.prototype.hasOwnProperty.call(x, X)) {
            const De = `${I}${f}${X}`;
            P[X] = this.translate(De, {
              ...s,
              joinArrays: !1,
              ns: y
            }), P[X] === De && (P[X] = x[X]);
          }
        x = P;
      }
    } else if (k && typeof M == "string" && Array.isArray(x))
      x = x.join(M), x && (x = this.extendTranslation(x, a, s, l));
    else {
      let R = !1, P = !1;
      const I = s.count !== void 0 && typeof s.count != "string", X = bd.hasDefaultValue(s), De = I ? this.pluralResolver.getSuffix(p, s.count, s) : "", ke = s.ordinal && I ? this.pluralResolver.getSuffix(p, s.count, {
        ordinal: !1
      }) : "", he = I && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), Le = he && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${De}`] || s[`defaultValue${ke}`] || s.defaultValue;
      !this.isValidLookup(x) && X && (R = !0, x = Le), this.isValidLookup(x) || (P = !0, x = c);
      const pe = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && P ? void 0 : x, Ne = X && Le !== x && this.options.updateMissing;
      if (P || R || Ne) {
        if (this.logger.log(Ne ? "updateKey" : "missingKey", p, h, c, Ne ? Le : x), f) {
          const Qe = this.resolve(c, {
            ...s,
            keySeparator: !1
          });
          Qe && Qe.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let we = [];
        const et = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && et && et[0])
          for (let Qe = 0; Qe < et.length; Qe++)
            we.push(et[Qe]);
        else this.options.saveMissingTo === "all" ? we = this.languageUtils.toResolveHierarchy(s.lng || this.language) : we.push(s.lng || this.language);
        const Ce = (Qe, kt, We) => {
          const pn = X && We !== x ? We : pe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(Qe, h, kt, pn, Ne, s) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Qe, h, kt, pn, Ne, s), this.emit("missingKey", Qe, h, kt, x);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && I ? we.forEach((Qe) => {
          const kt = this.pluralResolver.getSuffixes(Qe, s);
          he && s[`defaultValue${this.options.pluralSeparator}zero`] && kt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && kt.push(`${this.options.pluralSeparator}zero`), kt.forEach((We) => {
            Ce([Qe], c + We, s[`defaultValue${We}`] || Le);
          });
        }) : Ce(we, c, Le));
      }
      x = this.extendTranslation(x, a, s, L, l), P && x === c && this.options.appendNamespaceToMissingKey && (x = `${h}:${c}`), (P || R) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? x = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${c}` : c, R ? x : void 0) : x = this.options.parseMissingKeyHandler(x));
    }
    return d ? (L.res = x, L.usedParams = this.getUsedParamsDetails(s), L) : x;
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
        const x = a.match(this.interpolator.nestingRegexp);
        v = x && x.length;
      }
      let L = l.replace && typeof l.replace != "string" ? l.replace : l;
      if (this.options.interpolation.defaultVariables && (L = {
        ...this.options.interpolation.defaultVariables,
        ...L
      }), a = this.interpolator.interpolate(a, L, l.lng || this.language, l), p) {
        const x = a.match(this.interpolator.nestingRegexp), C = x && x.length;
        v < C && (l.nest = !1);
      }
      !l.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (l.lng = d.usedLng), l.nest !== !1 && (a = this.interpolator.nest(a, function() {
        for (var x = arguments.length, C = new Array(x), j = 0; j < x; j++)
          C[j] = arguments[j];
        return f && f[0] === C[0] && !l.context ? (c.logger.warn(`It seems you are nesting recursively key: ${C[0]} in key: ${s[0]}`), null) : c.translate(...C, s);
      }, l)), l.interpolation && this.interpolator.reset();
    }
    const y = l.postProcess || this.options.postProcess, h = typeof y == "string" ? [y] : y;
    return a != null && h && h.length && l.applyPostProcessor !== !1 && (a = P3.handle(h, a, s, this.options && this.options.postProcessPassResolved ? {
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
      let L = p.namespaces;
      this.options.fallbackNS && (L = L.concat(this.options.fallbackNS));
      const x = s.count !== void 0 && typeof s.count != "string", C = x && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", F = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      L.forEach((O) => {
        this.isValidLookup(l) || (y = O, !Vb[`${F[0]}-${O}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(y) && (Vb[`${F[0]}-${O}`] = !0, this.logger.warn(`key "${d}" for languages "${F.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), F.forEach((M) => {
          if (this.isValidLookup(l)) return;
          c = M;
          const k = [v];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(k, v, M, O, s);
          else {
            let R;
            x && (R = this.pluralResolver.getSuffix(M, s.count, s));
            const P = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (x && (k.push(v + R), s.ordinal && R.indexOf(I) === 0 && k.push(v + R.replace(I, this.options.pluralSeparator)), C && k.push(v + P)), j) {
              const X = `${v}${this.options.contextSeparator}${s.context}`;
              k.push(X), x && (k.push(X + R), s.ordinal && R.indexOf(I) === 0 && k.push(X + R.replace(I, this.options.pluralSeparator)), C && k.push(X + P));
            }
          }
          let V;
          for (; V = k.pop(); )
            this.isValidLookup(l) || (f = V, l = this.getResource(M, O, V, s));
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
function Uv(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
class Fb {
  constructor(a) {
    this.options = a, this.supportedLngs = this.options.supportedLngs || !1, this.logger = sa.create("languageUtils");
  }
  getScriptPartFromCode(a) {
    if (a = Ld(a), !a || a.indexOf("-") < 0) return null;
    const s = a.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(a) {
    if (a = Ld(a), !a || a.indexOf("-") < 0) return a;
    const s = a.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(a) {
    if (typeof a == "string" && a.indexOf("-") > -1) {
      const s = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let l = a.split("-");
      return this.options.lowerCaseLng ? l = l.map((d) => d.toLowerCase()) : l.length === 2 ? (l[0] = l[0].toLowerCase(), l[1] = l[1].toUpperCase(), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Uv(l[1].toLowerCase()))) : l.length === 3 && (l[0] = l[0].toLowerCase(), l[1].length === 2 && (l[1] = l[1].toUpperCase()), l[0] !== "sgn" && l[2].length === 2 && (l[2] = l[2].toUpperCase()), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Uv(l[1].toLowerCase())), s.indexOf(l[2].toLowerCase()) > -1 && (l[2] = Uv(l[2].toLowerCase()))), l.join("-");
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
let nj = [{
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
}], rj = {
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
const aj = ["v1", "v2", "v3"], ij = ["v4"], zb = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function oj() {
  const o = {};
  return nj.forEach((a) => {
    a.lngs.forEach((s) => {
      o[s] = {
        numbers: a.nr,
        plurals: rj[a.fc]
      };
    });
  }), o;
}
class sj {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = a, this.options = s, this.logger = sa.create("pluralResolver"), (!this.options.compatibilityJSON || ij.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = oj();
  }
  addRule(a, s) {
    this.rules[a] = s;
  }
  getRule(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Ld(a === "dev" ? "en" : a), {
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
    return l ? this.shouldUseIntlApi() ? l.resolvedOptions().pluralCategories.sort((d, f) => zb[d] - zb[f]).map((d) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : l.numbers.map((d) => this.getSuffix(a, d, s)) : [];
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
    return !aj.includes(this.options.compatibilityJSON);
  }
}
function $b(o, a, s) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = GR(o, a, s);
  return !f && d && typeof s == "string" && (f = Bv(o, s, l), f === void 0 && (f = Bv(a, s, l))), f;
}
class lj {
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
      unescapePrefix: L,
      nestingPrefix: x,
      nestingPrefixEscaped: C,
      nestingSuffix: j,
      nestingSuffixEscaped: F,
      nestingOptionsSeparator: O,
      maxReplaces: M,
      alwaysFormat: k
    } = a.interpolation;
    this.escape = s !== void 0 ? s : QR, this.escapeValue = l !== void 0 ? l : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = f ? ys(f) : c || "{{", this.suffix = y ? ys(y) : h || "}}", this.formatSeparator = p || ",", this.unescapePrefix = v ? "" : L || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = x ? ys(x) : C || ys("$t("), this.nestingSuffix = j ? ys(j) : F || ys(")"), this.nestingOptionsSeparator = O || ",", this.maxReplaces = M || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
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
        const k = $b(s, h, j, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, l, {
          ...d,
          ...s,
          interpolationkey: j
        }) : k;
      }
      const F = j.split(this.formatSeparator), O = F.shift().trim(), M = F.join(this.formatSeparator).trim();
      return this.format($b(s, h, O, this.options.keySeparator, this.options.ignoreJSONStructure), M, l, {
        ...d,
        ...s,
        interpolationkey: O
      });
    };
    this.resetRegExp();
    const L = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, x = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (j) => p(j)
    }, {
      regex: this.regexp,
      safeValue: (j) => this.escapeValue ? p(this.escape(j)) : p(j)
    }].forEach((j) => {
      for (y = 0; f = j.regex.exec(a); ) {
        const F = f[1].trim();
        if (c = v(F), c === void 0)
          if (typeof L == "function") {
            const M = L(a, f, d);
            c = typeof M == "string" ? M : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, F))
            c = "";
          else if (x) {
            c = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${F} for interpolating ${a}`), c = "";
        else typeof c != "string" && !this.useRawValueToEscape && (c = Mb(c));
        const O = j.safeValue(c);
        if (a = a.replace(f[0], O), x ? (j.regex.lastIndex += c.length, j.regex.lastIndex -= f[0].length) : j.regex.lastIndex = 0, y++, y >= this.maxReplaces)
          break;
      }
    }), a;
  }
  nest(a, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, f, c;
    function y(h, p) {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const L = h.split(new RegExp(`${v}[ ]*{`));
      let x = `{${L[1]}`;
      h = L[0], x = this.interpolate(x, c);
      const C = x.match(/'/g), j = x.match(/"/g);
      (C && C.length % 2 === 0 && !j || j.length % 2 !== 0) && (x = x.replace(/'/g, '"'));
      try {
        c = JSON.parse(x), p && (c = {
          ...p,
          ...c
        });
      } catch (F) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, F), `${h}${v}${x}`;
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
        const v = d[1].split(this.formatSeparator).map((L) => L.trim());
        d[1] = v.shift(), h = v, p = !0;
      }
      if (f = s(y.call(this, d[1].trim(), c), c), f && d[0] === a && typeof f != "string") return f;
      typeof f != "string" && (f = Mb(f)), f || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${a}`), f = ""), p && (f = h.reduce((v, L) => this.format(v, L, l.lng, {
        ...l,
        interpolationkey: d[1].trim()
      }), f.trim())), a = a.replace(d[0], f), this.regexp.lastIndex = 0;
    }
    return a;
  }
}
function uj(o) {
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
function Ls(o) {
  const a = {};
  return function(l, d, f) {
    const c = d + JSON.stringify(f);
    let y = a[c];
    return y || (y = o(Ld(d), f), a[c] = y), y(l);
  };
}
class cj {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = sa.create("formatter"), this.options = a, this.formats = {
      number: Ls((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      currency: Ls((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l,
          style: "currency"
        });
        return (f) => d.format(f);
      }),
      datetime: Ls((s, l) => {
        const d = new Intl.DateTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      relativetime: Ls((s, l) => {
        const d = new Intl.RelativeTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f, l.range || "day");
      }),
      list: Ls((s, l) => {
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
    this.formats[a.toLowerCase().trim()] = Ls(s);
  }
  format(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return s.split(this.formatSeparator).reduce((y, h) => {
      const {
        formatName: p,
        formatOptions: v
      } = uj(h);
      if (this.formats[p]) {
        let L = y;
        try {
          const x = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, C = x.locale || x.lng || d.locale || d.lng || l;
          L = this.formats[p](y, C, {
            ...v,
            ...d,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return L;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return y;
    }, a);
  }
}
function fj(o, a) {
  o.pending[a] !== void 0 && (delete o.pending[a], o.pendingCount--);
}
class dj extends wd {
  constructor(a, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = a, this.store = s, this.services = l, this.languageUtils = l.languageUtils, this.options = d, this.logger = sa.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(l, d.backend, d);
  }
  queueLoad(a, s, l, d) {
    const f = {}, c = {}, y = {}, h = {};
    return a.forEach((p) => {
      let v = !0;
      s.forEach((L) => {
        const x = `${p}|${L}`;
        !l.reload && this.store.hasResourceBundle(p, L) ? this.state[x] = 2 : this.state[x] < 0 || (this.state[x] === 1 ? c[x] === void 0 && (c[x] = !0) : (this.state[x] = 1, v = !1, c[x] === void 0 && (c[x] = !0), f[x] === void 0 && (f[x] = !0), h[L] === void 0 && (h[L] = !0)));
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
      WR(h.loaded, [f], c), fj(h, a), s && h.errors.push(s), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((p) => {
        y[p] || (y[p] = {});
        const v = h.loaded[p];
        v.length && v.forEach((L) => {
          y[p][L] === void 0 && (y[p][L] = !0);
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
        const L = this.waitingReads.shift();
        this.read(L.lng, L.ns, L.fcName, L.tried, L.wait, L.callback);
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
            p.length === 5 ? v = p(a, s, l, d, h) : v = p(a, s, l, d), v && typeof v.then == "function" ? v.then((L) => y(null, L)).catch(y) : y(null, v);
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
function Hb() {
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
function Jb(o) {
  return typeof o.ns == "string" && (o.ns = [o.ns]), typeof o.fallbackLng == "string" && (o.fallbackLng = [o.fallbackLng]), typeof o.fallbackNS == "string" && (o.fallbackNS = [o.fallbackNS]), o.supportedLngs && o.supportedLngs.indexOf("cimode") < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), o;
}
function rd() {
}
function mj(o) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((s) => {
    typeof o[s] == "function" && (o[s] = o[s].bind(o));
  });
}
class ku extends wd {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Jb(a), this.services = {}, this.logger = sa, this.modules = {
      external: []
    }, mj(this), s && !this.isInitialized && !a.isClone) {
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
    const d = Hb();
    this.options = {
      ...d,
      ...this.options,
      ...Jb(s)
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
      this.modules.formatter ? v = this.modules.formatter : typeof Intl < "u" && (v = cj);
      const L = new Fb(this.options);
      this.store = new Ub(this.options.resources, this.options);
      const x = this.services;
      x.logger = sa, x.resourceStore = this.store, x.languageUtils = L, x.pluralResolver = new sj(L, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), v && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (x.formatter = f(v), x.formatter.init(x, this.options), this.options.interpolation.format = x.formatter.format.bind(x.formatter)), x.interpolator = new lj(this.options), x.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, x.backendConnector = new dj(f(this.modules.backend), x.resourceStore, x, this.options), x.backendConnector.on("*", function(C) {
        for (var j = arguments.length, F = new Array(j > 1 ? j - 1 : 0), O = 1; O < j; O++)
          F[O - 1] = arguments[O];
        a.emit(C, ...F);
      }), this.modules.languageDetector && (x.languageDetector = f(this.modules.languageDetector), x.languageDetector.init && x.languageDetector.init(x, this.options.detection, this.options)), this.modules.i18nFormat && (x.i18nFormat = f(this.modules.i18nFormat), x.i18nFormat.init && x.i18nFormat.init(this)), this.translator = new bd(this.services, this.options), this.translator.on("*", function(C) {
        for (var j = arguments.length, F = new Array(j > 1 ? j - 1 : 0), O = 1; O < j; O++)
          F[O - 1] = arguments[O];
        a.emit(C, ...F);
      }), this.modules.external.forEach((C) => {
        C.init && C.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, l || (l = rd), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const h = xu(), p = () => {
      const v = (L, x) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), h.resolve(x), l(L, x);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return v(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, v);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), h;
  }
  loadResources(a) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rd;
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
    const d = xu();
    return a || (a = this.languages), s || (s = this.options.ns), l || (l = rd), this.services.backendConnector.reload(a, s, (f) => {
      d.resolve(), l(f);
    }), d;
  }
  use(a) {
    if (!a) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!a.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return a.type === "backend" && (this.modules.backend = a), (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a), a.type === "languageDetector" && (this.modules.languageDetector = a), a.type === "i18nFormat" && (this.modules.i18nFormat = a), a.type === "postProcessor" && P3.addPostProcessor(a), a.type === "formatter" && (this.modules.formatter = a), a.type === "3rdParty" && this.modules.external.push(a), this;
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
    const d = xu();
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
        for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), L = 2; L < p; L++)
          v[L - 2] = arguments[L];
        h = d.options.overloadTranslationOptionHandler([c, y].concat(v));
      } else
        h = {
          ...y
        };
      h.lng = h.lng || f.lng, h.lngs = h.lngs || f.lngs, h.ns = h.ns || f.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || l || f.keyPrefix);
      const x = d.options.keySeparator || ".";
      let C;
      return h.keyPrefix && Array.isArray(c) ? C = c.map((j) => `${h.keyPrefix}${x}${j}`) : C = h.keyPrefix ? `${h.keyPrefix}${x}${c}` : c, d.t(C, h);
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
    const l = xu();
    return this.options.ns ? (typeof a == "string" && (a = [a]), a.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      l.resolve(), s && s(d);
    }), l) : (s && s(), Promise.resolve());
  }
  loadLanguages(a, s) {
    const l = xu();
    typeof a == "string" && (a = [a]);
    const d = this.options.preload || [], f = a.filter((c) => d.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return f.length ? (this.options.preload = d.concat(f), this.loadResources((c) => {
      l.resolve(), s && s(c);
    }), l) : (s && s(), Promise.resolve());
  }
  dir(a) {
    if (a || (a = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !a) return "rtl";
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], l = this.services && this.services.languageUtils || new Fb(Hb());
    return s.indexOf(l.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    return new ku(a, s);
  }
  cloneInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rd;
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
    }, l && (f.store = new Ub(this.store.data, d), f.services.resourceStore = f.store), f.translator = new bd(f.services, d), f.translator.on("*", function(y) {
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
function pj(o) {
  const a = o ? `?email=${encodeURIComponent(o)}` : "";
  return dn({ url: "token/2fa" + a, method: "GET" });
}
function hj(o) {
  return dn({ url: "user", method: "PUT", body: o });
}
function vj({ page: o, filter: a }) {
  return dn({
    url: `user?page=${o}&keyword=${a.keyword}`,
    method: "GET"
  });
}
function Su({ id: o, ...a }) {
  return dn({ url: `user/${o}`, method: "PUT", body: a });
}
function gj() {
  const { t: o } = ji(), a = _u(), s = Uu(), l = Ri((M) => M.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1), [h, p] = U.useState(!1), v = A3({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), L = location.pathname.match(/(.*?\/)ui/), x = L && L[1] ? L[1] : "/";
  U.useEffect(() => {
    if (!l || !l.email)
      return;
    const M = new URLSearchParams(location.search), k = l.type === "administrator", V = k ? "/ui/profile" : "/ui", R = k && M.get("redirect") ? M.get("redirect") : V;
    console.log(R), s(R.replace(/\/+/g, "/"));
  }, [l]);
  const C = async function(M) {
    M.preventDefault(), y(!1), f(!0);
    const k = M.target.email.value, V = M.target.password.value, R = M.target.code ? M.target.code.value : "", P = M.target.remember.checked;
    if (!k)
      return y(o("please input email"));
    if (!V)
      return y(o("please input password"));
    if (M.target.code && !R)
      return y(o("please input 2fa code"));
    const I = await v("login");
    try {
      await a.user.login({
        email: k,
        password: V,
        code: R,
        remember: P,
        recaptchaV3: window.recaptchaV3Key ? I : void 0,
        turnstile: window.turnstileKey ? I : void 0
      });
    } catch (X) {
      y(X.message || o("email or password error"));
    } finally {
      f(!1);
    }
  }, j = async (M) => {
    const k = M.target.value;
    if (!k)
      return;
    const V = await pj(k);
    p(V.enable);
  };
  let F = window.serverURL;
  if (!F) {
    const M = location.pathname.match(/(.*?\/)ui/);
    F = M ? M[1] : "/";
  }
  const O = ["google"];
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ N.jsxDEV("ul", { children: c ? /* @__PURE__ */ N.jsxDEV("li", { children: c }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 117,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ N.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: C, style: { minWidth: "300px" }, children: [
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
              lineNumber: 128,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
              lineNumber: 141,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        h && /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "code", className: "sr-only", children: o("2fa code") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
              lineNumber: 154,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 150,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ N.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ N.jsxDEV(
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
            lineNumber: 165,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ N.jsxDEV(
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
                lineNumber: 175,
                columnNumber: 17
              },
              this
            ),
            " ",
            o("remember me")
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/forgot", children: o("forgot password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 184,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 183,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || O).map((M) => /* @__PURE__ */ N.jsxDEV(
        "a",
        {
          href: `${F}oauth${window.ALLOW_SOCIALS ? "/" + M + "?" : `?type=${M}`}&redirect=${x}ui/profile`,
          children: Sd.createElement(zR[M])
        },
        M,
        !1,
        {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 190,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/register", children: o("register") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 203,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
        lineNumber: 201,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
var U3 = { exports: {} };
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
})(U3);
var yj = U3.exports;
const Iv = /* @__PURE__ */ xd(yj);
var V3 = { exports: {} }, F3 = { exports: {} };
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
  F3.exports = a;
})();
var Lj = F3.exports, Yv = {
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
}, Bb = Yv;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var bj = function(o) {
  return o != null && (z3(o) || xj(o) || !!o._isBuffer);
};
function z3(o) {
  return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o);
}
function xj(o) {
  return typeof o.readFloatLE == "function" && typeof o.slice == "function" && z3(o.slice(0, 0));
}
(function() {
  var o = Lj, a = Bb.utf8, s = bj, l = Bb.bin, d = function(f, c) {
    f.constructor == String ? c && c.encoding === "binary" ? f = l.stringToBytes(f) : f = a.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
    for (var y = o.bytesToWords(f), h = f.length * 8, p = 1732584193, v = -271733879, L = -1732584194, x = 271733878, C = 0; C < y.length; C++)
      y[C] = (y[C] << 8 | y[C] >>> 24) & 16711935 | (y[C] << 24 | y[C] >>> 8) & 4278255360;
    y[h >>> 5] |= 128 << h % 32, y[(h + 64 >>> 9 << 4) + 14] = h;
    for (var j = d._ff, F = d._gg, O = d._hh, M = d._ii, C = 0; C < y.length; C += 16) {
      var k = p, V = v, R = L, P = x;
      p = j(p, v, L, x, y[C + 0], 7, -680876936), x = j(x, p, v, L, y[C + 1], 12, -389564586), L = j(L, x, p, v, y[C + 2], 17, 606105819), v = j(v, L, x, p, y[C + 3], 22, -1044525330), p = j(p, v, L, x, y[C + 4], 7, -176418897), x = j(x, p, v, L, y[C + 5], 12, 1200080426), L = j(L, x, p, v, y[C + 6], 17, -1473231341), v = j(v, L, x, p, y[C + 7], 22, -45705983), p = j(p, v, L, x, y[C + 8], 7, 1770035416), x = j(x, p, v, L, y[C + 9], 12, -1958414417), L = j(L, x, p, v, y[C + 10], 17, -42063), v = j(v, L, x, p, y[C + 11], 22, -1990404162), p = j(p, v, L, x, y[C + 12], 7, 1804603682), x = j(x, p, v, L, y[C + 13], 12, -40341101), L = j(L, x, p, v, y[C + 14], 17, -1502002290), v = j(v, L, x, p, y[C + 15], 22, 1236535329), p = F(p, v, L, x, y[C + 1], 5, -165796510), x = F(x, p, v, L, y[C + 6], 9, -1069501632), L = F(L, x, p, v, y[C + 11], 14, 643717713), v = F(v, L, x, p, y[C + 0], 20, -373897302), p = F(p, v, L, x, y[C + 5], 5, -701558691), x = F(x, p, v, L, y[C + 10], 9, 38016083), L = F(L, x, p, v, y[C + 15], 14, -660478335), v = F(v, L, x, p, y[C + 4], 20, -405537848), p = F(p, v, L, x, y[C + 9], 5, 568446438), x = F(x, p, v, L, y[C + 14], 9, -1019803690), L = F(L, x, p, v, y[C + 3], 14, -187363961), v = F(v, L, x, p, y[C + 8], 20, 1163531501), p = F(p, v, L, x, y[C + 13], 5, -1444681467), x = F(x, p, v, L, y[C + 2], 9, -51403784), L = F(L, x, p, v, y[C + 7], 14, 1735328473), v = F(v, L, x, p, y[C + 12], 20, -1926607734), p = O(p, v, L, x, y[C + 5], 4, -378558), x = O(x, p, v, L, y[C + 8], 11, -2022574463), L = O(L, x, p, v, y[C + 11], 16, 1839030562), v = O(v, L, x, p, y[C + 14], 23, -35309556), p = O(p, v, L, x, y[C + 1], 4, -1530992060), x = O(x, p, v, L, y[C + 4], 11, 1272893353), L = O(L, x, p, v, y[C + 7], 16, -155497632), v = O(v, L, x, p, y[C + 10], 23, -1094730640), p = O(p, v, L, x, y[C + 13], 4, 681279174), x = O(x, p, v, L, y[C + 0], 11, -358537222), L = O(L, x, p, v, y[C + 3], 16, -722521979), v = O(v, L, x, p, y[C + 6], 23, 76029189), p = O(p, v, L, x, y[C + 9], 4, -640364487), x = O(x, p, v, L, y[C + 12], 11, -421815835), L = O(L, x, p, v, y[C + 15], 16, 530742520), v = O(v, L, x, p, y[C + 2], 23, -995338651), p = M(p, v, L, x, y[C + 0], 6, -198630844), x = M(x, p, v, L, y[C + 7], 10, 1126891415), L = M(L, x, p, v, y[C + 14], 15, -1416354905), v = M(v, L, x, p, y[C + 5], 21, -57434055), p = M(p, v, L, x, y[C + 12], 6, 1700485571), x = M(x, p, v, L, y[C + 3], 10, -1894986606), L = M(L, x, p, v, y[C + 10], 15, -1051523), v = M(v, L, x, p, y[C + 1], 21, -2054922799), p = M(p, v, L, x, y[C + 8], 6, 1873313359), x = M(x, p, v, L, y[C + 15], 10, -30611744), L = M(L, x, p, v, y[C + 6], 15, -1560198380), v = M(v, L, x, p, y[C + 13], 21, 1309151649), p = M(p, v, L, x, y[C + 4], 6, -145523070), x = M(x, p, v, L, y[C + 11], 10, -1120210379), L = M(L, x, p, v, y[C + 2], 15, 718787259), v = M(v, L, x, p, y[C + 9], 21, -343485551), p = p + k >>> 0, v = v + V >>> 0, L = L + R >>> 0, x = x + P >>> 0;
    }
    return o.endian([p, v, L, x]);
  };
  d._ff = function(f, c, y, h, p, v, L) {
    var x = f + (c & y | ~c & h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._gg = function(f, c, y, h, p, v, L) {
    var x = f + (c & h | y & ~h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._hh = function(f, c, y, h, p, v, L) {
    var x = f + (c ^ y ^ h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._ii = function(f, c, y, h, p, v, L) {
    var x = f + (y ^ (c | ~h)) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._blocksize = 16, d._digestsize = 16, V3.exports = function(f, c) {
    if (f == null)
      throw new Error("Illegal argument " + f);
    var y = o.wordsToBytes(d(f, c));
    return c && c.asBytes ? y : c && c.asString ? l.bytesToString(y) : o.bytesToHex(y);
  };
})();
var Sj = V3.exports;
const Nj = /* @__PURE__ */ xd(Sj);
function $3(o = "", a = "") {
  return a || (typeof o != "string" && (o = ""), `https://sdn.geekzu.org/avatar/${Nj(o)}?s=40&r=G&d=`);
}
function wj(o) {
  return window.SITE_URL ? window.SITE_URL + o : o;
}
function Cj(o) {
  let a;
  typeof o == "number" ? a = new Date(o) : a = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(o) ? o.replace(/-/g, "/") : o
  );
  const s = (f) => f < 10 ? "0" + f : f, l = [a.getFullYear(), a.getMonth() + 1, a.getDate()].map(s).join("-"), d = [a.getHours(), a.getMinutes(), a.getSeconds()].map(s).join(":");
  return l + " " + d;
}
function H3({ current: o, total: a, onChange: s }) {
  return a < 1 ? null : /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-pager", children: [
    o > 1 ? /* @__PURE__ */ N.jsxDEV("li", { className: "prev", children: /* @__PURE__ */ N.jsxDEV("a", { href: "#", onClick: () => s(o - 1), children: "«" }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    o > 4 ? /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
      /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("a", { href: "#", onClick: () => s(1), children: "1" }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("span", { children: "..." }, void 0, !1, {
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
    ].filter((l) => l > 0 && l <= a).map((l) => /* @__PURE__ */ N.jsxDEV("li", { className: Iv({ current: l === o }), children: /* @__PURE__ */ N.jsxDEV("a", { href: "#", onClick: () => s(l), children: l }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, l, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)),
    o < a - 3 ? /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
      /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("a", { href: "#", onClick: () => s(a), children: a }, void 0, !1, {
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
    o < a ? /* @__PURE__ */ N.jsxDEV("li", { className: "next", children: /* @__PURE__ */ N.jsxDEV("a", { href: "#", onClick: () => s(o + 1), children: "»" }, void 0, !1, {
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
async function Ej(o) {
  return dn({
    url: "comment",
    method: "POST",
    body: o
  });
}
async function Ib(o) {
  return dn({
    url: `comment/${o}`,
    method: "DELETE"
  });
}
function Rj() {
  const { t: o } = ji(), a = U.useRef(null), s = U.useRef(null), l = U.useRef({}), d = Ri((R) => R.user), [f, c] = U.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [y, h] = U.useReducer(
    function(R, P) {
      return { ...R, ...P };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [p, v] = U.useState({}), [L, x] = U.useState(!1), [C, j] = U.useState([]), F = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ N.jsxDEV(bu, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ N.jsxDEV(bu, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ N.jsxDEV(bu, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ N.jsxDEV(bu, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ N.jsxDEV(bu, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  U.useEffect(() => {
    Nu({ page: f.page, filter: y }).then((R) => {
      c({ ...f, ...R }), j([]);
    });
  }, [y, f.page]);
  const O = (R) => [
    {
      key: "approved",
      name: o("approved button"),
      show: !0,
      disable: R && R.status === "approved",
      async action() {
        if (R) {
          switch (await xi(R.objectId, { status: "approved" }), f.data = f.data.filter(
            ({ objectId: P }) => P !== R.objectId
          ), R.status) {
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
            C.map(
              (P) => xi(P, { status: "approved" })
            )
          ), Nu({ page: f.page, filter: y }).then((P) => {
            c({ ...f, ...P }), j([]);
          });
      }
    },
    {
      key: "waiting",
      name: o("waiting"),
      show: !0,
      disable: R && R.status === "waiting",
      async action() {
        R ? (await xi(R.objectId, { status: "waiting" }), f.data = f.data.filter(
          ({ objectId: P }) => P !== R.objectId
        ), R.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, c({ ...f })) : (await Promise.all(
          C.map(
            (P) => xi(P, { status: "waiting" })
          )
        ), Nu({ page: f.page, filter: y }).then((P) => {
          c({ ...f, ...P }), j([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: o(R ? "spam" : "mark as spam"),
      disable: R && R.status === "spam",
      async action() {
        R ? (await xi(R.objectId, { status: "spam" }), f.data = f.data.filter(
          ({ objectId: P }) => P !== R.objectId
        ), f.spamCount += 1, c({ ...f })) : (await Promise.all(
          C.map(
            (P) => xi(P, { status: "spam" })
          )
        ), Nu({ page: f.page, filter: y }).then((P) => {
          c({ ...f, ...P }), j([]);
        }));
      }
    },
    {
      key: "sticky",
      show: R && !R.rid && R.status === "approved",
      name: R && R.sticky ? o("disable sticky") : o("sticky"),
      async action(P) {
        P.preventDefault();
        const I = !R.sticky;
        f.data.forEach((X) => {
          X.objectId === R.objectId && (X.sticky = I);
        }), await xi(R.objectId, { sticky: I ? 1 : 0 }), c({ ...f });
      }
    },
    {
      key: "edit",
      show: R,
      name: o("edit"),
      action() {
        const P = {};
        p.id !== R.objectId && p.action !== "edit" && (P.id = R.objectId, P.action = "edit"), v(P);
      }
    },
    {
      key: "reply",
      show: R && R.status === "approved",
      name: o("reply"),
      action() {
        const P = {};
        p.id !== R.objectId && p.action !== "reply" && (P.id = R.objectId, P.action = "reply"), v(P);
      }
    },
    {
      key: "delete",
      name: o("delete"),
      show: !0,
      async action() {
        const P = R ? o("delete one confirm", { nick: R.nick }) : o("delete multiple confirm");
        confirm(P) && (R ? (await Ib(R.objectId), f.data = f.data.filter(
          ({ objectId: I }) => I !== R.objectId
        ), c({ ...f })) : (await Promise.all(C.map(Ib)), Nu({ page: f.page, filter: y }).then((I) => {
          c({ ...f, ...I }), j([]);
        })));
      }
    }
  ].filter(({ show: P }) => P), M = async ({ pid: R, rid: P, url: I, at: X }) => {
    const De = s.current.value;
    if (!De)
      return null;
    const { display_name: ke, email: he, url: Le } = d;
    await Ej({
      nick: ke,
      mail: he,
      ua: navigator.userAgent,
      link: Le,
      url: I,
      comment: De,
      pid: R,
      rid: P || R,
      at: X
    }), location.reload();
  }, k = async (R) => {
    const P = f.data[R];
    await xi(P.objectId, l.current), f.data[R] = { ...P, ...l.current }, c({ ...f }), v({});
  }, V = f.data.length && f.data.every(({ objectId: R }) => C.includes(R));
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV("div", { className: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ N.jsxDEV("h2", { children: o("manage comments") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ N.jsxDEV("div", { className: "clear-fix", children: F.map(([R, P]) => /* @__PURE__ */ N.jsxDEV(
          "ul",
          {
            className: Iv("typecho-option-tabs", {
              right: R === "owner"
            }),
            children: P.map(({ type: I, name: X }) => /* @__PURE__ */ N.jsxDEV(
              "li",
              {
                className: Iv({ current: I === y[R] }),
                children: /* @__PURE__ */ N.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => h({ [R]: I }),
                    children: [
                      X,
                      R === "status" && I !== "approved" && f[`${I}Count`] > 0 ? /* @__PURE__ */ N.jsxDEV("span", { className: "balloon", children: f[`${I}Count`] }, void 0, !1, {
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
          R,
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
        /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ N.jsxDEV("form", { method: "get", children: [
          /* @__PURE__ */ N.jsxDEV("div", { className: "operate", children: [
            /* @__PURE__ */ N.jsxDEV("label", { children: [
              /* @__PURE__ */ N.jsxDEV("i", { className: "sr-only", children: o("select all") }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 319,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ N.jsxDEV(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: V,
                  onChange: () => j(
                    V ? [] : f.data.map(({ objectId: R }) => R)
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
            /* @__PURE__ */ N.jsxDEV("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ N.jsxDEV(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => x(!L),
                  children: [
                    /* @__PURE__ */ N.jsxDEV("i", { className: "sr-only", children: o("action") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 339,
                      columnNumber: 25
                    }, this),
                    o("selected items"),
                    " ",
                    /* @__PURE__ */ N.jsxDEV("i", { className: "i-caret-down" }, void 0, !1, {
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
              /* @__PURE__ */ N.jsxDEV(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: L ? "block" : "none" },
                  onClick: () => x(!1),
                  children: O().map(({ key: R, name: P, action: I }) => /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("a", { href: "javascript:void(0)", onClick: I, children: P }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, R, !1, {
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
          /* @__PURE__ */ N.jsxDEV("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ N.jsxDEV(
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
            /* @__PURE__ */ N.jsxDEV(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (R) => {
                  R.preventDefault(), h({ keyword: a.current.value });
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
        /* @__PURE__ */ N.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ N.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ N.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ N.jsxDEV("col", { width: "3%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 392,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 393,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 394,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "71%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 395,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ N.jsxDEV("thead", { children: /* @__PURE__ */ N.jsxDEV("tr", { children: [
                /* @__PURE__ */ N.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 399,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 400,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: o("author") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 401,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: o("content") }, void 0, !1, {
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
              /* @__PURE__ */ N.jsxDEV("tbody", { children: f.data.map(
                ({
                  objectId: R,
                  nick: P,
                  mail: I,
                  avatar: X,
                  link: De,
                  comment: ke,
                  ip: he,
                  addr: Le,
                  url: nt,
                  status: pe,
                  rid: Ne,
                  pid: we,
                  sticky: et,
                  time: Ce,
                  insertedAt: Qe
                }, kt) => p.id === R && p.action === "edit" ? /* @__PURE__ */ N.jsxDEV("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ N.jsxDEV("td", { children: " " }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 430,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ N.jsxDEV("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ N.jsxDEV("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ N.jsxDEV("p", { children: [
                      /* @__PURE__ */ N.jsxDEV(
                        "label",
                        {
                          htmlFor: `comment-${R}-author`,
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
                      /* @__PURE__ */ N.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${R}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: P,
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
                    /* @__PURE__ */ N.jsxDEV("p", { children: [
                      /* @__PURE__ */ N.jsxDEV("label", { htmlFor: `comment-${R}-mail`, children: o("email") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 452,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ N.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${R}-mail`,
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
                    /* @__PURE__ */ N.jsxDEV("p", { children: [
                      /* @__PURE__ */ N.jsxDEV("label", { htmlFor: `comment-${R}-url`, children: o("homepage") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 468,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ N.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${R}-author`,
                          defaultValue: De,
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
                  /* @__PURE__ */ N.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ N.jsxDEV("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ N.jsxDEV("p", { children: [
                      /* @__PURE__ */ N.jsxDEV("label", { htmlFor: `comment-${R}-text`, children: o("content") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ N.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${R}-text`,
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
                    /* @__PURE__ */ N.jsxDEV("p", { children: [
                      /* @__PURE__ */ N.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => k(kt),
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
                      /* @__PURE__ */ N.jsxDEV(
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
                ] }, R, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 429,
                  columnNumber: 29
                }, this) : /* @__PURE__ */ N.jsxDEV("tr", { id: `comment-${R}`, children: [
                  /* @__PURE__ */ N.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ N.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: R,
                      checked: C.includes(R),
                      onChange: () => j(
                        C.includes(R) ? C.filter(
                          (We) => We !== R
                        ) : [...C, R]
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
                  /* @__PURE__ */ N.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ N.jsxDEV("div", { className: "comment-avatar", children: /* @__PURE__ */ N.jsxDEV(
                    "img",
                    {
                      className: "avatar",
                      src: $3(I, X),
                      alt: P,
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
                  /* @__PURE__ */ N.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ N.jsxDEV("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ N.jsxDEV("strong", { className: "comment-author", children: De ? /* @__PURE__ */ N.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(De) ? De : "https://" + De,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: P
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : P }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 556,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ N.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 573,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ N.jsxDEV("span", { children: /* @__PURE__ */ N.jsxDEV(
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
                        I && /* @__PURE__ */ N.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 583,
                          columnNumber: 44
                        }, this),
                        /* @__PURE__ */ N.jsxDEV("span", { children: he }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        he && /* @__PURE__ */ N.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ N.jsxDEV("span", { children: Le }, void 0, !1, {
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
                  /* @__PURE__ */ N.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ N.jsxDEV("div", { className: "comment-date", children: [
                          Cj(Qe || Ce),
                          " ",
                          o("at"),
                          " ",
                          /* @__PURE__ */ N.jsxDEV(
                            "a",
                            {
                              href: wj(nt),
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
                        /* @__PURE__ */ N.jsxDEV(
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
                        p.id === R && p.action === "reply" ? /* @__PURE__ */ N.jsxDEV("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ N.jsxDEV("p", { children: [
                            /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "text", className: "sr-only", children: o("content") }, void 0, !1, {
                              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 611,
                              columnNumber: 39
                            }, this),
                            /* @__PURE__ */ N.jsxDEV(
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
                          /* @__PURE__ */ N.jsxDEV("p", { children: [
                            /* @__PURE__ */ N.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (We) => {
                                  We.preventDefault(), M({
                                    rid: Ne,
                                    pid: R,
                                    url: nt,
                                    at: P
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
                            /* @__PURE__ */ N.jsxDEV(
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
                        /* @__PURE__ */ N.jsxDEV("div", { className: "comment-action hidden-by-mouse", children: O({
                          objectId: R,
                          nick: P,
                          status: pe,
                          rid: Ne,
                          pid: we,
                          sticky: et
                        }).map(
                          ({ key: We, disable: pn, name: Rt, action: hn }) => pn ? /* @__PURE__ */ N.jsxDEV("span", { className: "weak", children: Rt }, We, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 659,
                            columnNumber: 39
                          }, this) : /* @__PURE__ */ N.jsxDEV(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${We}`,
                              onClick: hn,
                              children: Rt
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
                ] }, R, !0, {
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
        /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ N.jsxDEV("form", { method: "get", children: /* @__PURE__ */ N.jsxDEV(
          H3,
          {
            current: f.page,
            total: f.totalPages,
            onChange: (R) => c({ ...f, page: R })
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
function jj(o, a, s) {
  const l = new Blob([o], { type: s }), d = document.createElement("a"), f = URL.createObjectURL(l);
  d.href = f, d.download = a, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(f);
  }, 0);
}
function Tj(o) {
  return new Promise((a, s) => {
    const l = new FileReader();
    l.onload = (d) => a(d.target.result), l.onerror = s, l.readAsText(o);
  });
}
function Dj() {
  const [o, a] = U.useState(!1), [s, l] = U.useState(!1), { t: d } = ji(), f = U.useRef(null), c = () => {
    confirm(d("import clear data confirm")) && f.current.click();
  }, y = async (p) => {
    try {
      const v = await Tj(p.target.files[0]), L = JSON.parse(v);
      if (!L || L.type !== "waline")
        return alert("import data format not support!");
      const x = L.tables.reduce(
        (M, k) => {
          var V;
          return M + (((V = L.data[k]) == null ? void 0 : V.length) || 0);
        },
        0
      );
      let C = 0;
      a([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: C, maxLength: x }
      ]);
      const j = {};
      for (const M of L.tables) {
        const k = L.data[M];
        if (M !== "Users" && await dn({
          url: "db?table=" + M,
          method: "DELETE"
        }), j[M] || (j[M] = {}), !!Array.isArray(k))
          for (const V of k) {
            let R = !1;
            if (M === "Users") {
              const ke = await dn("user?email=" + V.email);
              ke.objectId && (R = ke.objectId);
            }
            const I = M == "Users" && R ? "PUT" : "POST", X = M === "Comment" ? Object.assign({}, V, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : V;
            for (const ke in X)
              (X[ke] === null || X[ke] === void 0) && delete X[ke];
            const De = await dn({
              url: `db?table=${M}${I === "PUT" ? `&objectId=${R}` : ""}`,
              method: I,
              body: X
            });
            j[M][V.objectId] = De.objectId, C += 1, a([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: C, maxLength: x }
            ]);
          }
      }
      a(["comment data index relationship reconstruction"]);
      const F = L.data.Comment, O = [];
      for (const M of F) {
        const k = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: V, field: R }) => {
          if (!M[R])
            return;
          const P = M[R], I = j[V][M[R]];
          P && I && P !== I && (k[R] = I);
        }), Object.keys(k).length && O.push([
          k,
          { objectId: j.Comment[M.objectId] }
        ]);
      }
      C = 0;
      for (const [M, k] of O)
        await dn({
          url: `db?table=Comment&objectId=${k.objectId}`,
          method: "PUT",
          body: M
        }), C += 1, a([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: C, maxLength: O.length }
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
      jj(
        JSON.stringify(p, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV("div", { className: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ N.jsxDEV("h2", { children: d("migration") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ N.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ N.jsxDEV(
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
          /* @__PURE__ */ N.jsxDEV(
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
new Proxy({}, {
  get(o, a) {
    throw new Error(`Module "https" has been externalized for browser compatibility. Cannot access "https.${a}" in client code.  See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
class xs {
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
    return new xs(parseFloat(c), parseFloat(y), parseFloat(f));
  }
}
class ad {
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
function kj(o, a) {
  let s = 0;
  return (...l) => {
    clearTimeout(s), s = setTimeout(() => o(...l), a);
  };
}
function Kv(o, a) {
  return o.toFixed(a);
}
function Oj(o, a) {
  const s = parseFloat(a.min), l = parseFloat(a.max);
  a.value = Kv(Math.max(s, Math.min(l, o)), 3);
}
function _j(o) {
  var a = new Image();
  return new Promise(function(s, l) {
    a.onload = () => {
      s(a);
    }, a.onerror = l, a.src = o;
  });
}
function Yb() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function Aj(o) {
  return o === "ArrowLeft" ? [2, 0] : o === "ArrowUp" ? [0, 2] : o === "ArrowRight" ? [-2, 0] : [0, -2];
}
function Mj() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var Ss, En, Ns, Ou, Oe, J3, Wv, B3, I3, Y3, Gv, K3, W3, G3, q3, qv, dd, Q3, Qv, Xv, Zv, X3, Z3;
class Pj {
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
    gs(this, Ss, null);
    gs(this, En, 1);
    gs(this, Ns, null);
    gs(this, Ou, kj(() => {
      mt(this, Oe, Qv).call(this);
    }, 200));
    if (a.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    s.viewport && (s.viewport = { ...this.options.viewport, ...s.viewport }), this.options = { ...this.options, ...s }, this.element = a, this.element.classList.add("cropt-container"), this.elements = Yb(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), mt(this, Oe, qv).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), mt(this, Oe, Wv).call(this), mt(this, Oe, K3).call(this), mt(this, Oe, W3).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(a, s = null) {
    if (!a)
      throw new Error("src cannot be empty");
    return ed(this, Ss, s), _j(a).then((l) => {
      mt(this, Oe, q3).call(this, l), mt(this, Oe, Xv).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(a = null) {
    var s = this.elements.viewport.getBoundingClientRect(), l = s.width / s.height, d = mt(this, Oe, J3).call(this), f = d.right - d.left, c = d.bottom - d.top;
    return a !== null && (l > 1 ? (f = a, c = a / l) : (c = a, f = a * l)), Promise.resolve(mt(this, Oe, I3).call(this, d, f, c));
  }
  toBlob(a = null, s = "image/webp", l = 1) {
    return s === "image/webp" && l < 1 && !Mj() && (s = "image/jpeg"), new Promise((d, f) => {
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
    Oj(a, this.elements.zoomer);
    var s = new Event("input");
    this.elements.zoomer.dispatchEvent(s);
  }
  destroy() {
    Kt(this, Ns) && document.removeEventListener("keydown", Kt(this, Ns)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = Yb();
  }
}
Ss = new WeakMap(), En = new WeakMap(), Ns = new WeakMap(), Ou = new WeakMap(), Oe = new WeakSet(), J3 = function() {
  var a = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = s.left - a.left, d = s.top - a.top, f = (s.width - this.elements.viewport.offsetWidth) / 2, c = (s.height - this.elements.viewport.offsetHeight) / 2, y = l + this.elements.viewport.offsetWidth + f, h = d + this.elements.viewport.offsetHeight + c;
  return l = Math.max(0, l / Kt(this, En)), d = Math.max(0, d / Kt(this, En)), y = Math.max(0, y / Kt(this, En)), h = Math.max(0, h / Kt(this, En)), {
    left: Math.round(l),
    top: Math.round(d),
    right: Math.round(y),
    bottom: Math.round(h)
  };
}, Wv = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const a = "cr-vp-circle", s = this.elements.viewport;
  this.options.viewport.type === "circle" ? s.classList.add(a) : s.classList.remove(a), s.style.width = this.options.viewport.width + "px", s.style.height = this.options.viewport.height + "px";
}, B3 = function(a) {
  var s = a.right - a.left, l = a.bottom - a.top, d = document.createElement("canvas"), f = d.getContext("2d");
  if (f === null)
    throw new Error("Canvas context cannot be null");
  return d.width = s, d.height = l, f.drawImage(this.elements.preview, a.left, a.top, s, l, 0, 0, d.width, d.height), d;
}, I3 = function(a, s, l) {
  var d = mt(this, Oe, B3).call(this, a), f = d.getContext("2d"), c = document.createElement("canvas"), y = c.getContext("2d"), h = document.createElement("canvas"), p = h.getContext("2d");
  if (h.width = s, h.height = l, p === null || f === null || y === null)
    throw new Error("Canvas context cannot be null");
  for (var v = {
    width: d.width,
    height: d.height
  }; v.width * 0.5 > h.width; ) {
    let L = v.width, x = v.height;
    v = {
      width: Math.floor(v.width * 0.5),
      height: Math.floor(v.height * 0.5)
    }, c.width = L, c.height = x, y.clearRect(0, 0, c.width, c.height), y.drawImage(d, 0, 0), f.clearRect(0, 0, L, x), f.drawImage(c, 0, 0, L, x, 0, 0, v.width, v.height);
  }
  return p.drawImage(d, 0, 0, v.width, v.height, 0, 0, h.width, h.height), h;
}, Y3 = function() {
  var a = Kt(this, En), s = this.elements.viewport.getBoundingClientRect(), l = s.width, d = s.height, f = this.elements.boundary.clientWidth / 2, c = this.elements.boundary.clientHeight / 2, y = this.elements.preview.getBoundingClientRect(), h = y.width, p = y.height, v = l / 2, L = d / 2, x = (v / a - f) * -1, C = x - (h * (1 / a) - l * (1 / a)), j = (L / a - c) * -1, F = j - (p * (1 / a) - d * (1 / a)), O = 1 / a * v, M = h * (1 / a) - O, k = 1 / a * L, V = p * (1 / a) - k;
  return {
    translate: {
      maxX: x,
      minX: C,
      maxY: j,
      minY: F
    },
    origin: {
      maxX: M,
      minX: O,
      maxY: V,
      minY: k
    }
  };
}, Gv = function(a, s) {
  const l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = xs.parse(this.elements.preview);
  d.top > l.top + s && d.bottom < l.bottom + s && (f.y = f.y + s), d.left > l.left + a && d.right < l.right + a && (f.x = f.x + a), mt(this, Oe, Zv).call(this, f), Kt(this, Ou).call(this);
}, K3 = function() {
  let a = 0, s = 0, l = [], d = 0, f = (p) => {
    p.preventDefault();
    const v = l.findIndex((L) => L.pointerId === p.pointerId);
    if (v !== -1) {
      if (l[v] = p, l.length === 2) {
        let L = l[0], x = l[1], C = Math.sqrt((L.pageX - x.pageX) * (L.pageX - x.pageX) + (L.pageY - x.pageY) * (L.pageY - x.pageY));
        d === 0 && (d = C / Kt(this, En)), this.setZoom(C / d);
        return;
      } else if (d !== 0)
        return;
      mt(this, Oe, Gv).call(this, p.pageX - a, p.pageY - s), a = p.pageX, s = p.pageY;
    }
  }, c = (p) => {
    const v = l.findIndex((L) => L.pointerId === p.pointerId);
    v !== -1 && l.splice(v, 1), l.length === 0 && (this.elements.overlay.removeEventListener("pointermove", f), this.elements.overlay.removeEventListener("pointerup", c), this.elements.overlay.removeEventListener("pointerout", c), mt(this, Oe, dd).call(this, !1, this.elements.preview), d = 0);
  }, y = (p) => {
    p.button || (p.preventDefault(), l.push(p), this.elements.overlay.setPointerCapture(p.pointerId), !(l.length > 1) && (a = p.pageX, s = p.pageY, mt(this, Oe, dd).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", f), this.elements.overlay.addEventListener("pointerup", c), this.elements.overlay.addEventListener("pointerout", c)));
  }, h = (p) => {
    if (document.activeElement === this.elements.viewport) {
      if (p.shiftKey && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
        p.preventDefault();
        let v = parseFloat(this.elements.zoomer.value), L = p.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(v + L);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(p.key)) {
        p.preventDefault();
        let [v, L] = Aj(p.key);
        mt(this, Oe, Gv).call(this, v, L);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", y), document.addEventListener("keydown", h), ed(this, Ns, h);
}, W3 = function() {
  let a = () => {
    mt(this, Oe, G3).call(this);
  }, s = (l) => {
    const d = this.options.mouseWheelZoom;
    let f = 0;
    d === "off" || d === "ctrl" && !l.ctrlKey || (l.deltaY && (f = l.deltaY * -1 / 2e3), l.preventDefault(), this.setZoom(Kt(this, En) + f * Kt(this, En)));
  };
  this.elements.zoomer.addEventListener("input", a), this.elements.boundary.addEventListener("wheel", s);
}, G3 = function() {
  const a = xs.parse(this.elements.preview), s = new ad(this.elements.preview);
  let l = () => {
    this.elements.preview.style.transform = a.toString(), this.elements.preview.style.transformOrigin = s.toString();
  };
  ed(this, En, parseFloat(this.elements.zoomer.value)), a.scale = Kt(this, En), l();
  var d = mt(this, Oe, Y3).call(this), f = d.translate, c = d.origin;
  a.x >= f.maxX && (s.x = c.minX, a.x = f.maxX), a.x <= f.minX && (s.x = c.maxX, a.x = f.minX), a.y >= f.maxY && (s.y = c.minY, a.y = f.maxY), a.y <= f.minY && (s.y = c.maxY, a.y = f.minY), l(), Kt(this, Ou).call(this);
}, q3 = function(a) {
  mt(this, Oe, qv).call(this, a), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(a, this.elements.preview), this.elements.preview = a;
}, qv = function(a) {
  a.classList.add("cr-image"), a.setAttribute("alt", "preview"), mt(this, Oe, dd).call(this, !1, a);
}, dd = function(a, s) {
  s.setAttribute("aria-grabbed", a.toString()), this.elements.boundary.setAttribute("aria-dropeffect", a ? "move" : "none");
}, Q3 = function() {
  return this.elements.preview.offsetParent !== null;
}, Qv = function() {
  const a = this.elements.boundary.getBoundingClientRect(), s = this.elements.preview.getBoundingClientRect(), l = this.elements.overlay;
  l.style.width = s.width + "px", l.style.height = s.height + "px", l.style.top = s.top - a.top + "px", l.style.left = s.left - a.left + "px";
}, Xv = function() {
  if (!mt(this, Oe, Q3).call(this))
    return;
  const a = this.elements.preview, s = new xs(0, 0, 1);
  a.style.transform = s.toString(), a.style.transformOrigin = new ad().toString(), mt(this, Oe, X3).call(this), s.scale = Kt(this, En), a.style.transform = s.toString(), a.style.transformOrigin = new ad().toString(), mt(this, Oe, Z3).call(this), mt(this, Oe, Qv).call(this);
}, Zv = function(a) {
  var s = Kt(this, En), l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = new ad(this.elements.preview), c = d.top - l.top + d.height / 2, y = d.left - l.left + d.width / 2, h = { x: y / s, y: c / s }, p = {
    x: (h.x - f.x) * (1 - s),
    y: (h.y - f.y) * (1 - s)
  };
  a.x -= p.x, a.y -= p.y, this.elements.preview.style.transform = a.toString(), this.elements.preview.style.transformOrigin = h.x + "px " + h.y + "px";
}, X3 = function() {
  var a = 0.85, s = this.elements.boundary.getBoundingClientRect(), l = this.elements.preview, d = this.elements.viewport.getBoundingClientRect(), f = d.width / l.naturalWidth, c = d.height / l.naturalHeight, y = Math.max(f, c);
  y >= a && (a += y), this.elements.zoomer.min = Kv(y, 3), this.elements.zoomer.max = Kv(a, 3);
  var h = Math.max(s.width / l.naturalWidth, s.height / l.naturalHeight);
  this.setZoom(Kt(this, Ss) !== null ? Kt(this, Ss) : h);
}, Z3 = function() {
  var a = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = this.elements.boundary.getBoundingClientRect(), d = s.left - l.left, f = s.top - l.top, c = d - (a.width - s.width) / 2, y = f - (a.height - s.height) / 2, h = new xs(c, y, Kt(this, En));
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
    constructor(h, p, v, L) {
      if (this.version = h, this.errorCorrectionLevel = p, this.modules = [], this.isFunction = [], h < a.MIN_VERSION || h > a.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (L < -1 || L > 7)
        throw new RangeError("Mask value out of range");
      this.size = h * 4 + 17;
      let x = [];
      for (let j = 0; j < this.size; j++)
        x.push(!1);
      for (let j = 0; j < this.size; j++)
        this.modules.push(x.slice()), this.isFunction.push(x.slice());
      this.drawFunctionPatterns();
      const C = this.addEccAndInterleave(v);
      if (this.drawCodewords(C), L == -1) {
        let j = 1e9;
        for (let F = 0; F < 8; F++) {
          this.applyMask(F), this.drawFormatBits(F);
          const O = this.getPenaltyScore();
          O < j && (L = F, j = O), this.applyMask(F);
        }
      }
      f(0 <= L && L <= 7), this.mask = L, this.applyMask(L), this.drawFormatBits(L), this.isFunction = [];
    }
    static encodeText(h, p) {
      const v = o.QrSegment.makeSegments(h);
      return a.encodeSegments(v, p);
    }
    static encodeBinary(h, p) {
      const v = o.QrSegment.makeBytes(h);
      return a.encodeSegments([v], p);
    }
    static encodeSegments(h, p, v = 1, L = 40, x = -1, C = !0) {
      if (!(a.MIN_VERSION <= v && v <= L && L <= a.MAX_VERSION) || x < -1 || x > 7)
        throw new RangeError("Invalid value");
      let j, F;
      for (j = v; ; j++) {
        const V = a.getNumDataCodewords(j, p) * 8, R = y.getTotalBits(h, j);
        if (R <= V) {
          F = R;
          break;
        }
        if (j >= L)
          throw new RangeError("Data too long");
      }
      for (const V of [a.Ecc.MEDIUM, a.Ecc.QUARTILE, a.Ecc.HIGH])
        C && F <= a.getNumDataCodewords(j, V) * 8 && (p = V);
      let O = [];
      for (const V of h) {
        l(V.mode.modeBits, 4, O), l(V.numChars, V.mode.numCharCountBits(j), O);
        for (const R of V.getData())
          O.push(R);
      }
      f(O.length == F);
      const M = a.getNumDataCodewords(j, p) * 8;
      f(O.length <= M), l(0, Math.min(4, M - O.length), O), l(0, (8 - O.length % 8) % 8, O), f(O.length % 8 == 0);
      for (let V = 236; O.length < M; V ^= 253)
        l(V, 8, O);
      let k = [];
      for (; k.length * 8 < O.length; )
        k.push(0);
      return O.forEach((V, R) => k[R >>> 3] |= V << 7 - (R & 7)), new a(j, p, k, x);
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
        for (let L = 0; L < p; L++)
          v == 0 && L == 0 || v == 0 && L == p - 1 || v == p - 1 && L == 0 || this.drawAlignmentPattern(h[v], h[L]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(h) {
      const p = this.errorCorrectionLevel.formatBits << 3 | h;
      let v = p;
      for (let x = 0; x < 10; x++)
        v = v << 1 ^ (v >>> 9) * 1335;
      const L = (p << 10 | v) ^ 21522;
      f(L >>> 15 == 0);
      for (let x = 0; x <= 5; x++)
        this.setFunctionModule(8, x, d(L, x));
      this.setFunctionModule(8, 7, d(L, 6)), this.setFunctionModule(8, 8, d(L, 7)), this.setFunctionModule(7, 8, d(L, 8));
      for (let x = 9; x < 15; x++)
        this.setFunctionModule(14 - x, 8, d(L, x));
      for (let x = 0; x < 8; x++)
        this.setFunctionModule(this.size - 1 - x, 8, d(L, x));
      for (let x = 8; x < 15; x++)
        this.setFunctionModule(8, this.size - 15 + x, d(L, x));
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
        const L = d(p, v), x = this.size - 11 + v % 3, C = Math.floor(v / 3);
        this.setFunctionModule(x, C, L), this.setFunctionModule(C, x, L);
      }
    }
    drawFinderPattern(h, p) {
      for (let v = -4; v <= 4; v++)
        for (let L = -4; L <= 4; L++) {
          const x = Math.max(Math.abs(L), Math.abs(v)), C = h + L, j = p + v;
          0 <= C && C < this.size && 0 <= j && j < this.size && this.setFunctionModule(C, j, x != 2 && x != 4);
        }
    }
    drawAlignmentPattern(h, p) {
      for (let v = -2; v <= 2; v++)
        for (let L = -2; L <= 2; L++)
          this.setFunctionModule(h + L, p + v, Math.max(Math.abs(L), Math.abs(v)) != 1);
    }
    setFunctionModule(h, p, v) {
      this.modules[p][h] = v, this.isFunction[p][h] = !0;
    }
    addEccAndInterleave(h) {
      const p = this.version, v = this.errorCorrectionLevel;
      if (h.length != a.getNumDataCodewords(p, v))
        throw new RangeError("Invalid argument");
      const L = a.NUM_ERROR_CORRECTION_BLOCKS[v.ordinal][p], x = a.ECC_CODEWORDS_PER_BLOCK[v.ordinal][p], C = Math.floor(a.getNumRawDataModules(p) / 8), j = L - C % L, F = Math.floor(C / L);
      let O = [];
      const M = a.reedSolomonComputeDivisor(x);
      for (let V = 0, R = 0; V < L; V++) {
        let P = h.slice(R, R + F - x + (V < j ? 0 : 1));
        R += P.length;
        const I = a.reedSolomonComputeRemainder(P, M);
        V < j && P.push(0), O.push(P.concat(I));
      }
      let k = [];
      for (let V = 0; V < O[0].length; V++)
        O.forEach((R, P) => {
          (V != F - x || P >= j) && k.push(R[V]);
        });
      return f(k.length == C), k;
    }
    drawCodewords(h) {
      if (h.length != Math.floor(a.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let p = 0;
      for (let v = this.size - 1; v >= 1; v -= 2) {
        v == 6 && (v = 5);
        for (let L = 0; L < this.size; L++)
          for (let x = 0; x < 2; x++) {
            const C = v - x, F = (v + 1 & 2) == 0 ? this.size - 1 - L : L;
            !this.isFunction[F][C] && p < h.length * 8 && (this.modules[F][C] = d(h[p >>> 3], 7 - (p & 7)), p++);
          }
      }
      f(p == h.length * 8);
    }
    applyMask(h) {
      if (h < 0 || h > 7)
        throw new RangeError("Mask value out of range");
      for (let p = 0; p < this.size; p++)
        for (let v = 0; v < this.size; v++) {
          let L;
          switch (h) {
            case 0:
              L = (v + p) % 2 == 0;
              break;
            case 1:
              L = p % 2 == 0;
              break;
            case 2:
              L = v % 3 == 0;
              break;
            case 3:
              L = (v + p) % 3 == 0;
              break;
            case 4:
              L = (Math.floor(v / 3) + Math.floor(p / 2)) % 2 == 0;
              break;
            case 5:
              L = v * p % 2 + v * p % 3 == 0;
              break;
            case 6:
              L = (v * p % 2 + v * p % 3) % 2 == 0;
              break;
            case 7:
              L = ((v + p) % 2 + v * p % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[p][v] && L && (this.modules[p][v] = !this.modules[p][v]);
        }
    }
    getPenaltyScore() {
      let h = 0;
      for (let x = 0; x < this.size; x++) {
        let C = !1, j = 0, F = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[x][O] == C ? (j++, j == 5 ? h += a.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, F), C || (h += this.finderPenaltyCountPatterns(F) * a.PENALTY_N3), C = this.modules[x][O], j = 1);
        h += this.finderPenaltyTerminateAndCount(C, j, F) * a.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let C = !1, j = 0, F = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[O][x] == C ? (j++, j == 5 ? h += a.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, F), C || (h += this.finderPenaltyCountPatterns(F) * a.PENALTY_N3), C = this.modules[O][x], j = 1);
        h += this.finderPenaltyTerminateAndCount(C, j, F) * a.PENALTY_N3;
      }
      for (let x = 0; x < this.size - 1; x++)
        for (let C = 0; C < this.size - 1; C++) {
          const j = this.modules[x][C];
          j == this.modules[x][C + 1] && j == this.modules[x + 1][C] && j == this.modules[x + 1][C + 1] && (h += a.PENALTY_N2);
        }
      let p = 0;
      for (const x of this.modules)
        p = x.reduce((C, j) => C + (j ? 1 : 0), p);
      const v = this.size * this.size, L = Math.ceil(Math.abs(p * 20 - v * 10) / v) - 1;
      return f(0 <= L && L <= 9), h += L * a.PENALTY_N4, f(0 <= h && h <= 2568888), h;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const h = Math.floor(this.version / 7) + 2, p = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (h * 2 - 2)) * 2;
        let v = [6];
        for (let L = this.size - 7; v.length < h; L -= p)
          v.splice(1, 0, L);
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
      for (let L = 0; L < h - 1; L++)
        p.push(0);
      p.push(1);
      let v = 1;
      for (let L = 0; L < h; L++) {
        for (let x = 0; x < p.length; x++)
          p[x] = a.reedSolomonMultiply(p[x], v), x + 1 < p.length && (p[x] ^= p[x + 1]);
        v = a.reedSolomonMultiply(v, 2);
      }
      return p;
    }
    static reedSolomonComputeRemainder(h, p) {
      let v = p.map((L) => 0);
      for (const L of h) {
        const x = L ^ v.shift();
        v.push(0), p.forEach((C, j) => v[j] ^= a.reedSolomonMultiply(C, x));
      }
      return v;
    }
    static reedSolomonMultiply(h, p) {
      if (h >>> 8 || p >>> 8)
        throw new RangeError("Byte out of range");
      let v = 0;
      for (let L = 7; L >= 0; L--)
        v = v << 1 ^ (v >>> 7) * 285, v ^= (p >>> L & 1) * h;
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
    for (let L = p - 1; L >= 0; L--)
      v.push(h >>> L & 1);
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
        const L = Math.min(h.length - v, 3);
        l(parseInt(h.substr(v, L), 10), L * 3 + 1, p), v += L;
      }
      return new c(c.Mode.NUMERIC, h.length, p);
    }
    static makeAlphanumeric(h) {
      if (!c.isAlphanumeric(h))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let p = [], v;
      for (v = 0; v + 2 <= h.length; v += 2) {
        let L = c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v)) * 45;
        L += c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v + 1)), l(L, 11, p);
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
      for (const L of h) {
        const x = L.mode.numCharCountBits(p);
        if (L.numChars >= 1 << x)
          return 1 / 0;
        v += 4 + x + L.bitData.length;
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
var id = mo;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
id.QrCode.Ecc.LOW, id.QrCode.Ecc.MEDIUM, id.QrCode.Ecc.QUARTILE, id.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function Uj() {
  U.useState(!1);
  const [o, a] = U.useState(!1), [s, l] = U.useState(!1), d = _u(), f = Ri((k) => k.user), { t: c } = ji();
  let y = null, h = null;
  const p = async function(k) {
    try {
      k.preventDefault(), a(!0);
      const V = k.target.screenName.value;
      let R;
      h ? R = h : R = k.target.avatar.files[0];
      let P = f.avatar;
      R && (P = await C(R)), await d.user.updateProfile({ display_name: V, avatar: P });
    } catch (V) {
      alert(V);
    } finally {
      a(!1), location.reload();
    }
  }, v = (k) => {
    k.preventDefault();
    const V = document.getElementById("image-container"), R = document.getElementById("image-container-wrapper"), P = document.getElementById("image-result");
    if (R.setAttribute("style", "display: none;"), k.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", P.removeAttribute("src"), P.setAttribute("style", "display: none;");
      return;
    }
    const I = k.target.files[0].size;
    if (parseInt(I) > 1 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    R.removeAttribute("style"), y && y.destroy(), y = new Pj(V, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const X = new FileReader();
    X.onload = function(De) {
      y.bind(De.target.result);
    }, X.readAsDataURL(k.target.files[0]);
  }, L = async (k) => {
    k.preventDefault(), y.toCanvas(300).then(async (R) => {
      const P = document.getElementById("image-result");
      P.removeAttribute("style"), P.src = R.toDataURL("image/jpeg", 1);
    });
    const V = await y.toBlob(300, "image/jpeg");
    h = new File([V], "image.jpeg", { type: V.type });
  }, x = (k) => {
    k.preventDefault(), y.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, C = async function(k) {
    try {
      let V = new FormData();
      return V.append("file", k), (await (await fetch("https://upload.shngm.id/upload/image", {
        method: "POST",
        body: V
      })).json()).imageUrl;
    } catch (V) {
      throw console.error(V), V;
    }
  }, j = async () => {
    try {
      l(!0);
      const k = await fetch(`https://api.shngm.io/v1/sys/get-user-by-email?email=${f.email}`, {
        headers: {
          Authorization: "Bearer VSa@JSIJHJK%Jaa@PgcJ@C!SKkfd&OCc8"
        }
      });
      if (!k.ok) {
        l(!1);
        const P = await k.json();
        return alert(`Error: ${P.message}`);
      }
      const R = (await k.json()).data.user_id;
      await d.user.updateProfile({ url: `https://go.shng.me/user/${R}` }), l(!1);
    } catch (k) {
      return console.error("error", k), l(!1), alert(`Something went wrong: ${k.message}`);
    }
  };
  let F = window.serverURL;
  if (!F) {
    const k = location.pathname.match(/(.*?\/)ui/);
    F = k ? k[1] : "/";
  }
  const O = new URLSearchParams(location.search);
  let M = window.TOKEN || sessionStorage.getItem("TOKEN") || O.get("token");
  return M || (M = localStorage.getItem("TOKEN")), /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 231,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV("div", { className: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ N.jsxDEV("h2", { children: c("setting") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 235,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ N.jsxDEV("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ N.jsxDEV("p", { children: /* @__PURE__ */ N.jsxDEV(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ N.jsxDEV(
                "img",
                {
                  className: "profile-avatar",
                  src: f.avatar || `https://seccdn.libravatar.org/avatar/${f.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 243,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
              lineNumber: 240,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 239,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV("h2", { children: f.display_name }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 252,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV("p", { children: f.email }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 253,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ N.jsxDEV("section", { children: [
                /* @__PURE__ */ N.jsxDEV("h3", { children: c("profile") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 261,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ N.jsxDEV("form", { method: "post", onSubmit: p, children: [
                  /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ N.jsxDEV("li", { children: [
                    /* @__PURE__ */ N.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: c("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 265,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ N.jsxDEV(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: f.display_name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 268,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ N.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 275,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 264,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 263,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ N.jsxDEV("div", { id: "image-container" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 282,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ N.jsxDEV(
                      "button",
                      {
                        onClick: L,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 283,
                        columnNumber: 13
                      },
                      this
                    ),
                    /* @__PURE__ */ N.jsxDEV(
                      "button",
                      {
                        onClick: x,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 290,
                        columnNumber: 13
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 281,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 280,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 279,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 304,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 303,
                    columnNumber: 11
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 302,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ N.jsxDEV("li", { children: [
                    /* @__PURE__ */ N.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-3", children: c("change avatar") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 310,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ N.jsxDEV(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: v,
                        accept: "image/*"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 313,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ N.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 321,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 309,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 308,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ N.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ N.jsxDEV("li", { children: /* @__PURE__ */ N.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: o,
                      children: c("update my profile")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 327,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 326,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 325,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 262,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 260,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ N.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 338,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ N.jsxDEV("section", { id: "social-account", children: [
                /* @__PURE__ */ N.jsxDEV("h3", { children: "Connect" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 340,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ N.jsxDEV(
                  "div",
                  {
                    className: "account-item shinigami",
                    children: /* @__PURE__ */ N.jsxDEV(
                      "button",
                      {
                        disabled: s,
                        className: "btn primary",
                        style: { minWidth: "200px", display: "flex", justifyContent: "center", alignItems: "center" },
                        onClick: j,
                        children: s ? /* @__PURE__ */ N.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", width: "24", height: "24", style: { "shape-rendering": "auto", display: "block", background: "transparent" }, "xmlns:xlink": "http://www.w3.org/1999/xlink", children: /* @__PURE__ */ N.jsxDEV("g", { children: [
                          /* @__PURE__ */ N.jsxDEV("circle", { "stroke-dasharray": "127.23450247038662 44.411500823462205", r: "27", "stroke-width": "8", stroke: "#fff", fill: "none", cy: "50", cx: "50", children: /* @__PURE__ */ N.jsxDEV("animateTransform", { keyTimes: "0;1", values: "0 50 50;360 50 50", dur: "1s", repeatCount: "indefinite", type: "rotate", attributeName: "transform" }, void 0, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                            lineNumber: 352,
                            columnNumber: 12
                          }, this) }, void 0, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                            lineNumber: 351,
                            columnNumber: 255
                          }, this),
                          /* @__PURE__ */ N.jsxDEV("g", {}, void 0, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                            lineNumber: 353,
                            columnNumber: 20
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 351,
                          columnNumber: 252
                        }, this) }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 351,
                          columnNumber: 12
                        }, this) : "Connect to Shinigami"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 344,
                        columnNumber: 10
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 341,
                    columnNumber: 9
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 339,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ N.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 360,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 256,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 237,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 233,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
    lineNumber: 230,
    columnNumber: 5
  }, this);
}
function Vj() {
  const { t: o } = ji(), a = _u(), s = Uu(), l = Ri((v) => v.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1), h = A3({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  U.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const p = async function(v) {
    v.preventDefault(), f(!1);
    const L = v.target.nick.value;
    if (!L || L.length < 2)
      return f(o("nickname illegal"));
    const x = v.target.email.value;
    if (!x)
      return f(o("please input email"));
    const C = v.target.link.value, j = v.target.password.value, F = v.target["password-again"].value;
    if (!j || !F || F !== j)
      return f(o("passwords don't match"));
    try {
      y(!0);
      const O = await h("login"), M = await a.user.register({
        display_name: L,
        email: x,
        url: C,
        password: j,
        recaptchaV3: window.recaptchaV3Key ? O : void 0,
        turnstile: window.turnstileKey ? O : void 0
      });
      M && M.verify && alert(o("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (O) {
      f(O.message);
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ N.jsxDEV("ul", { children: d ? /* @__PURE__ */ N.jsxDEV("li", { children: d }, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ N.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: p, children: [
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "nick", className: "sr-only", children: o("nickname") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "link", className: "sr-only", children: o("website") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("p", { children: [
          /* @__PURE__ */ N.jsxDEV("label", { htmlFor: "password-again", className: "sr-only", children: o("password again") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ N.jsxDEV(
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
        /* @__PURE__ */ N.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ N.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ N.jsxDEV(
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
      /* @__PURE__ */ N.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ N.jsxDEV(In, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
function Fj() {
  const o = U.useRef(null), a = Ri((p) => p.user), { t: s } = ji(), [l, d] = U.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [f, c] = U.useReducer(
    function(p, v) {
      return { ...p, ...v };
    },
    { keyword: "" }
  );
  U.useEffect(() => {
    vj({ page: l.page, filter: f }).then((p) => {
      d({ ...l, ...p });
    });
  }, [f, l.page]);
  const y = (p) => [
    {
      key: "administrator",
      name: s("set administrator"),
      show: p.type === "guest",
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          type: "administrator"
        }), p.type = "administrator", d({ ...l });
      }
    },
    {
      key: "guest",
      name: s("set guest"),
      show: p.type === "administrator",
      async action(v) {
        if (v.preventDefault(), p.objectId === a.objectId)
          return alert(s("You can't set yourself to be guest!"));
        await Su({
          id: p.objectId,
          type: "guest"
        }), p.type = "guest", d({ ...l });
      }
    },
    {
      key: "label",
      name: s("set label"),
      show: !0,
      async action(v) {
        v.preventDefault();
        const L = prompt(s("please enter an exclusive label"));
        await Su({
          id: p.objectId,
          label: L
        }), p.label = L, d({ ...l });
      }
    },
    {
      key: "banned",
      name: "Banned User",
      show: !p.is_banned,
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          is_banned: 1
        }), p.is_banned = 1, d({ ...l });
      }
    },
    {
      key: "unbanned",
      name: "Unbanned User",
      show: p.is_banned,
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          is_banned: 0
        }), p.is_banned = 0, d({ ...l });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: v }) => v), h = (p) => /^verify/.test(p) ? s("verify") : s(p);
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ N.jsxDEV("div", { className: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ N.jsxDEV("h2", { children: s("manage users") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 142,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ N.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ N.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ N.jsxDEV("div", { className: "search", role: "search", children: [
          /* @__PURE__ */ N.jsxDEV(
            "input",
            {
              type: "text",
              ref: o,
              className: "text-s",
              placeholder: "Search user..."
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 150,
              columnNumber: 21
            },
            this
          ),
          " ",
          /* @__PURE__ */ N.jsxDEV(
            "button",
            {
              type: "submit",
              className: "btn btn-s",
              onClick: (p) => {
                p.preventDefault(), c({ keyword: o.current.value });
              },
              children: s("filter")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 157,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 149,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 147,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ N.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ N.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ N.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ N.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 178,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 179,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 180,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ N.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 182,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 177,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ N.jsxDEV("thead", { children: /* @__PURE__ */ N.jsxDEV("tr", { children: [
                /* @__PURE__ */ N.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 186,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: s("nickname") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 187,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: s("email") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 188,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: s("role") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 189,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: s("exclusive label") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 190,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ N.jsxDEV("th", { children: s("action") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 191,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 185,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 184,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ N.jsxDEV("tbody", { children: l.data.map((p) => /* @__PURE__ */ N.jsxDEV("tr", { id: `user-${p.objectId}`, children: [
                /* @__PURE__ */ N.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ N.jsxDEV("div", { className: "user-avatar", children: /* @__PURE__ */ N.jsxDEV(
                  "img",
                  {
                    className: "avatar",
                    src: $3(p.email, p.avatar),
                    alt: p.display_name,
                    width: "40",
                    height: "40"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 199,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 197,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ N.jsxDEV("td", { children: /* @__PURE__ */ N.jsxDEV(
                  "a",
                  {
                    href: /^https:\/\//.test(p.url) ? p.url : "https://" + p.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: p.display_name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 209,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 208,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ N.jsxDEV("td", { children: /* @__PURE__ */ N.jsxDEV(
                  "a",
                  {
                    href: `mailto:${p.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: p.email
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 222,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 221,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ N.jsxDEV("td", { children: h(p.type) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 230,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ N.jsxDEV("td", { children: p.label }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ N.jsxDEV("td", { className: "comment-action", children: y(p).map(
                  ({ key: v, disable: L, name: x, action: C }) => L ? /* @__PURE__ */ N.jsxDEV("span", { className: "weak", children: x }, v, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 236,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ N.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${v}`,
                      onClick: C,
                      children: x
                    },
                    v,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                      lineNumber: 240,
                      columnNumber: 35
                    },
                    this
                  )
                ) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this)
              ] }, p.objectId, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 196,
                columnNumber: 25
              }, this)) }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 194,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 176,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
            lineNumber: 170,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ N.jsxDEV("form", { method: "get", children: /* @__PURE__ */ N.jsxDEV(
          H3,
          {
            current: l.page,
            total: l.totalPages,
            onChange: (p) => d({ ...l, page: p })
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
            lineNumber: 261,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 260,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}
function zj() {
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ N.jsxDEV("div", { className: "typecho-login", children: /* @__PURE__ */ N.jsxDEV("h2", { children: "Your account has been banned, please contact the admin." }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/banned/index.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/banned/index.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/banned/index.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/banned/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var $j = typeof Symbol == "function" && Symbol.observable || "@@observable", Kb = $j, Vv = () => Math.random().toString(36).substring(7).split("").join("."), Hj = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vv()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vv()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vv()}`
}, wi = Hj;
function Cd(o) {
  if (typeof o != "object" || o === null)
    return !1;
  let a = o;
  for (; Object.getPrototypeOf(a) !== null; )
    a = Object.getPrototypeOf(a);
  return Object.getPrototypeOf(o) === a || Object.getPrototypeOf(o) === null;
}
function Jj(o) {
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
  if (Yj(o))
    return "date";
  if (Ij(o))
    return "error";
  const s = Bj(o);
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
function Bj(o) {
  return typeof o.constructor == "function" ? o.constructor.name : null;
}
function Ij(o) {
  return o instanceof Error || typeof o.message == "string" && o.constructor && typeof o.constructor.stackTraceLimit == "number";
}
function Yj(o) {
  return o instanceof Date ? !0 : typeof o.toDateString == "function" && typeof o.getDate == "function" && typeof o.setDate == "function";
}
function za(o) {
  let a = typeof o;
  return a = Jj(o), a;
}
function Ed(o, a, s) {
  if (typeof o != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${za(o)}'`);
  if (typeof a == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof a == "function" && typeof s > "u" && (s = a, a = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${za(s)}'`);
    return s(Ed)(o, a);
  }
  let l = o, d = a, f = /* @__PURE__ */ new Map(), c = f, y = 0, h = !1;
  function p() {
    c === f && (c = /* @__PURE__ */ new Map(), f.forEach((O, M) => {
      c.set(M, O);
    }));
  }
  function v() {
    if (h)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function L(O) {
    if (typeof O != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${za(O)}'`);
    if (h)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let M = !0;
    p();
    const k = y++;
    return c.set(k, O), function() {
      if (M) {
        if (h)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        M = !1, p(), c.delete(k), f = null;
      }
    };
  }
  function x(O) {
    if (!Cd(O))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${za(O)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof O.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof O.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${za(O.type)}'. Value was: '${O.type}' (stringified)`);
    if (h)
      throw new Error("Reducers may not dispatch actions.");
    try {
      h = !0, d = l(d, O);
    } finally {
      h = !1;
    }
    return (f = c).forEach((k) => {
      k();
    }), O;
  }
  function C(O) {
    if (typeof O != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${za(O)}`);
    l = O, x({
      type: wi.REPLACE
    });
  }
  function j() {
    const O = L;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(M) {
        if (typeof M != "object" || M === null)
          throw new Error(`Expected the observer to be an object. Instead, received: '${za(M)}'`);
        function k() {
          const R = M;
          R.next && R.next(v());
        }
        return k(), {
          unsubscribe: O(k)
        };
      },
      [Kb]() {
        return this;
      }
    };
  }
  return x({
    type: wi.INIT
  }), {
    dispatch: x,
    subscribe: L,
    getState: v,
    replaceReducer: C,
    [Kb]: j
  };
}
function Kj(o, a, s) {
  return Ed(o, a, s);
}
function Wb(o) {
  typeof console < "u" && typeof console.error == "function" && console.error(o);
  try {
    throw new Error(o);
  } catch {
  }
}
function Wj(o, a, s, l) {
  const d = Object.keys(a), f = s && s.type === wi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Cd(o))
    return `The ${f} has unexpected type of "${za(o)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const c = Object.keys(o).filter((y) => !a.hasOwnProperty(y) && !l[y]);
  if (c.forEach((y) => {
    l[y] = !0;
  }), !(s && s.type === wi.REPLACE) && c.length > 0)
    return `Unexpected ${c.length > 1 ? "keys" : "key"} "${c.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function Gj(o) {
  Object.keys(o).forEach((a) => {
    const s = o[a];
    if (typeof s(void 0, {
      type: wi.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof s(void 0, {
      type: wi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined when probed with a random type. Don't try to handle '${wi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function e4(o) {
  const a = Object.keys(o), s = {};
  for (let c = 0; c < a.length; c++) {
    const y = a[c];
    typeof o[y] > "u" && Wb(`No reducer provided for key "${y}"`), typeof o[y] == "function" && (s[y] = o[y]);
  }
  const l = Object.keys(s);
  let d;
  d = {};
  let f;
  try {
    Gj(s);
  } catch (c) {
    f = c;
  }
  return function(y = {}, h) {
    if (f)
      throw f;
    {
      const L = Wj(y, s, h, d);
      L && Wb(L);
    }
    let p = !1;
    const v = {};
    for (let L = 0; L < l.length; L++) {
      const x = l[L], C = s[x], j = y[x], F = C(j, h);
      if (typeof F > "u") {
        const O = h && h.type;
        throw new Error(`When called with an action of type ${O ? `"${String(O)}"` : "(unknown type)"}, the slice reducer for key "${x}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      v[x] = F, p = p || F !== j;
    }
    return p = p || l.length !== Object.keys(y).length, p ? v : y;
  };
}
function Gb(o, a) {
  return function(...s) {
    return a(o.apply(this, s));
  };
}
function qj(o, a) {
  if (typeof o == "function")
    return Gb(o, a);
  if (typeof o != "object" || o === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${za(o)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const s = {};
  for (const l in o) {
    const d = o[l];
    typeof d == "function" && (s[l] = Gb(d, a));
  }
  return s;
}
function s1(...o) {
  return o.length === 0 ? (a) => a : o.length === 1 ? o[0] : o.reduce((a, s) => (...l) => a(s(...l)));
}
function t4(...o) {
  return (a) => (s, l) => {
    const d = a(s, l);
    let f = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const c = {
      getState: d.getState,
      dispatch: (h, ...p) => f(h, ...p)
    }, y = o.map((h) => h(c));
    return f = s1(...y)(d.dispatch), {
      ...d,
      dispatch: f
    };
  };
}
function Qj(o) {
  return Cd(o) && "type" in o && typeof o.type == "string";
}
const Xj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: wi,
  applyMiddleware: t4,
  bindActionCreators: qj,
  combineReducers: e4,
  compose: s1,
  createStore: Ed,
  isAction: Qj,
  isPlainObject: Cd,
  legacy_createStore: Kj
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
function Zj(o) {
  var a;
  o.models.forEach(function(h) {
    return n4(o, h);
  });
  var s = r4(o), l = t4.apply(Xj, o.reduxConfig.middlewares), d = o.reduxConfig.devtoolComposer ? (a = o.reduxConfig).devtoolComposer.apply(a, o.reduxConfig.enhancers.concat([l])) : tT(o.reduxConfig.devtoolOptions).apply(void 0, o.reduxConfig.enhancers.concat([l])), f = o.reduxConfig.createStore || Ed, c = o.reduxConfig.initialState, y = c === void 0 ? {} : c;
  return f(s, y, d);
}
function n4(o, a) {
  var s = {}, l = Object.keys(a.reducers);
  l.forEach(function(y) {
    var h = nT(y) ? y : a.name + "/" + y;
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
function r4(o) {
  var a = o.reduxConfig.rootReducers, s = eT(o.reduxConfig), l = s;
  return a && Object.keys(a).length && (l = function(f, c) {
    var y = a[c.type];
    return s(y ? y(f, c) : f, c);
  }), o.forEachPlugin("onRootReducer", function(d) {
    l = d(l, o) || l;
  }), l;
}
function eT(o) {
  var a = o.combineReducers || e4;
  return Object.keys(o.reducers).length ? a(o.reducers) : function(s) {
    return s;
  };
}
function tT(o) {
  return o === void 0 && (o = {}), !o.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(o) : s1;
}
function nT(o) {
  return o.indexOf("/") > -1;
}
var qb = function(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}, Si = function(a) {
  return !a || typeof a == "function";
}, Fu = function(a) {
  {
    var s = a(), l = [];
    if (s.forEach(function(d) {
      var f = d[0], c = d[1];
      f && l.push(c);
    }), l.length > 0)
      throw new Error(l.join(", "));
  }
}, rT = function(a) {
  Fu(function() {
    return [[!Array.isArray(a.plugins), "init config.plugins must be an array"], [!qb(a.models), "init config.models must be an object"], [!qb(a.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(a.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(a.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!Si(a.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!Si(a.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, a4 = function(a) {
  Fu(function() {
    return [[!a, "model config is required"], [typeof a.name != "string", 'model "name" [string] is required'], [a.state === void 0 && a.baseReducer === void 0, 'model "state" is required'], [!Si(a.baseReducer), 'model "baseReducer" must be a function']];
  });
}, aT = function(a) {
  Fu(function() {
    return [[!Si(a.onStoreCreated), "Plugin onStoreCreated must be a function"], [!Si(a.onModel), "Plugin onModel must be a function"], [!Si(a.onReducer), "Plugin onReducer must be a function"], [!Si(a.onRootReducer), "Plugin onRootReducer must be a function"], [!Si(a.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, iT = function(a, s, l) {
  Fu(function() {
    return [[!!l.match(/\/.+\//), "Invalid reducer name (" + a + "/" + l + ")"], [typeof s[l] != "function", "Invalid reducer (" + a + "/" + l + "). Must be a function"]];
  });
}, oT = function(a, s, l) {
  Fu(function() {
    return [[!!l.match(/\//), "Invalid effect name (" + a + "/" + l + ")"], [typeof s[l] != "function", "Invalid effect (" + a + "/" + l + "). Must be a function"]];
  });
}, i4 = function(a, s, l, d) {
  return Object.assign(function(f, c) {
    var y = {
      type: s + "/" + l
    };
    return typeof f < "u" && (y.payload = f), typeof c < "u" && (y.meta = c), a.dispatch(y);
  }, {
    isEffect: d
  });
}, sT = function(a, s) {
  var l = a.dispatch[s.name], d = Object.keys(s.reducers);
  d.forEach(function(f) {
    iT(s.name, s.reducers, f), l[f] = i4(a, s.name, f, !1);
  });
}, lT = function(a, s, l) {
  var d = a.dispatch[l.name], f = {};
  l.effects && (f = typeof l.effects == "function" ? l.effects(a.dispatch) : l.effects);
  var c = Object.keys(f);
  c.forEach(function(y) {
    oT(l.name, f, y), s.effects[l.name + "/" + y] = f[y].bind(d), d[y] = i4(a, l.name, y, !0);
  });
};
function uT(o) {
  return {
    models: cT(o.models),
    reduxConfig: o.redux,
    forEachPlugin: function(s, l) {
      o.plugins.forEach(function(d) {
        d[s] && l(d[s]);
      });
    },
    effects: {}
  };
}
function cT(o) {
  return Object.keys(o).map(function(a) {
    var s = fT(a, o[a]);
    return a4(s), s;
  });
}
function fT(o, a) {
  return po({
    name: o,
    reducers: {}
  }, a);
}
function dT(o) {
  var a = uT(o);
  a.reduxConfig.middlewares.push(mT(a)), a.forEachPlugin("createMiddleware", function(d) {
    a.reduxConfig.middlewares.push(d(a));
  });
  var s = Zj(a), l = po({}, s, {
    name: o.name,
    addModel: function(f) {
      a4(f), n4(a, f), Qb(l, f), Xb(l, a, f), s.replaceReducer(r4(a)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return pT(l, o.plugins), a.models.forEach(function(d) {
    return Qb(l, d);
  }), a.models.forEach(function(d) {
    return Xb(l, a, d);
  }), a.forEachPlugin("onStoreCreated", function(d) {
    l = d(l, a) || l;
  }), l;
}
function mT(o) {
  return function(a) {
    return function(s) {
      return function(l) {
        return l.type in o.effects ? (s(l), o.effects[l.type](l.payload, a.getState(), l.meta)) : s(l);
      };
    };
  };
}
function Qb(o, a) {
  var s = {};
  o.dispatch["" + a.name] = s, sT(o, a);
}
function Xb(o, a, s) {
  lT(o, a, s), a.forEachPlugin("onModel", function(l) {
    l(s, o);
  });
}
function pT(o, a) {
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
var Zb = 0;
function hT(o) {
  var a, s, l, d = (a = o.name) != null ? a : "Rematch Store " + Zb;
  Zb += 1;
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
  return rT(f), f.plugins.forEach(function(c) {
    c.config && (f.models = od(f.models, c.config.models), c.config.redux && (f.redux.initialState = od(f.redux.initialState, c.config.redux.initialState), f.redux.reducers = od(f.redux.reducers, c.config.redux.reducers), f.redux.rootReducers = od(f.redux.rootReducers, c.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, c.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, c.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || c.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || c.config.redux.createStore)), aT(c);
  }), f;
}
function od(o, a) {
  return a ? po({}, a, o) : o;
}
var vT = function(a) {
  var s = hT(a || {});
  return dT(s);
};
async function gT() {
  return dn("token").catch(() => {
    o4(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function yT({ email: o, password: a, code: s, recaptchaV3: l, turnstile: d }) {
  return dn({
    url: "token",
    method: "POST",
    body: { email: o, password: a, code: s, recaptchaV3: l, turnstile: d }
  });
}
async function o4() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function LT(o) {
  return dn({ url: "user", method: "POST", body: o });
}
async function bT({ email: o }) {
  return dn({
    url: "user/password",
    method: "PUT",
    body: { email: o }
  });
}
const xT = {
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
      const a = await gT();
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
      const { token: y, ...h } = await yT({
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
      o4(), o.user.setUser(null);
    },
    register(a) {
      return LT(a);
    },
    forgot(a) {
      return bT(a);
    },
    async updateProfile(a) {
      return await hj(a), window.opener && window.opener.postMessage({ type: "profile", data: a }, "*"), o.user.updateUser(a);
    }
  })
}, s4 = vT({ models: { user: xT } });
function sd(o) {
  const a = Ri((s) => s.user);
  return U.useEffect(() => {
    const s = o.meta || {}, l = o.basename || "";
    if (!(a != null && a.email))
      return location.href = l + "/ui/login?redirect=" + location.pathname.replace(l, "");
    if (s.auth ? o.meta.auth !== a.type : !1)
      return location.href = l + "/ui/profile";
  }, [a, o.meta]), a ? o.children : null;
}
function ST() {
  const o = location.pathname.match(/(.*?)\/ui/), a = o ? o[1] : "/";
  return /* @__PURE__ */ N.jsxDEV(BN, { store: s4, children: /* @__PURE__ */ N.jsxDEV(qw, { basename: a, children: /* @__PURE__ */ N.jsxDEV(Mw, { children: [
    /* @__PURE__ */ N.jsxDEV(
      Fa,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ N.jsxDEV(sd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ N.jsxDEV(Rj, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ N.jsxDEV(
      Fa,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ N.jsxDEV(sd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ N.jsxDEV(Fj, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 62,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 57,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ N.jsxDEV(
      Fa,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ N.jsxDEV(sd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ N.jsxDEV(Dj, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 66,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ N.jsxDEV(Fa, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ N.jsxDEV(gj, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ N.jsxDEV(Fa, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ N.jsxDEV(Vj, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ N.jsxDEV(Fa, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ N.jsxDEV(OR, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 77,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ N.jsxDEV(Fa, { path: "/ui/banned", exact: !0, element: /* @__PURE__ */ N.jsxDEV(zj, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 78,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 78,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ N.jsxDEV(
      Fa,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ N.jsxDEV(sd, { children: /* @__PURE__ */ N.jsxDEV(Uj, {}, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
        lineNumber: 79,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
const {
  slice: NT,
  forEach: wT
} = [];
function CT(o) {
  return wT.call(NT.call(arguments, 1), (a) => {
    if (a)
      for (const s in a)
        o[s] === void 0 && (o[s] = a[s]);
  }), o;
}
const e3 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, ET = (o, a, s) => {
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
    if (!e3.test(l.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${l.domain}`;
  }
  if (l.path) {
    if (!e3.test(l.path))
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
}, t3 = {
  create(o, a, s, l) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + s * 60 * 1e3)), l && (d.domain = l), document.cookie = ET(o, encodeURIComponent(a), d);
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
var RT = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(o) {
    let {
      lookupCookie: a
    } = o;
    if (a && typeof document < "u")
      return t3.read(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(o, a) {
    let {
      lookupCookie: s,
      cookieMinutes: l,
      cookieDomain: d,
      cookieOptions: f
    } = a;
    s && typeof document < "u" && t3.create(s, o, l, d, f);
  }
}, jT = {
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
const n3 = () => {
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
var TT = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(o) {
    let {
      lookupLocalStorage: a
    } = o;
    if (a && n3())
      return window.localStorage.getItem(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(o, a) {
    let {
      lookupLocalStorage: s
    } = a;
    s && n3() && window.localStorage.setItem(s, o);
  }
};
let Cu = null;
const r3 = () => {
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
var DT = {
  name: "sessionStorage",
  lookup(o) {
    let {
      lookupSessionStorage: a
    } = o;
    if (a && r3())
      return window.sessionStorage.getItem(a) || void 0;
  },
  cacheUserLanguage(o, a) {
    let {
      lookupSessionStorage: s
    } = a;
    s && r3() && window.sessionStorage.setItem(s, o);
  }
}, kT = {
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
}, OT = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(o) {
    let {
      htmlTag: a
    } = o, s;
    const l = a || (typeof document < "u" ? document.documentElement : null);
    return l && typeof l.getAttribute == "function" && (s = l.getAttribute("lang")), s;
  }
}, _T = {
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
}, AT = {
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
function MT() {
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
class l4 {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(a, s);
  }
  init(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = a || {
      languageUtils: {}
    }, this.options = CT(s, this.options || {}, MT()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(RT), this.addDetector(jT), this.addDetector(TT), this.addDetector(DT), this.addDetector(kT), this.addDetector(OT), this.addDetector(_T), this.addDetector(AT);
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
l4.type = "languageDetector";
mn.use(l4).use(jC).init({
  // we init with resources
  resources: kR,
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
async function PT() {
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
  }), await Promise.all([s4.dispatch({ type: "user/loadUserInfo" })]).catch(
    (s) => {
      console.error(s);
    }
  );
  const o = document.createElement("div");
  o.style.height = "100%", document.body.appendChild(o), u3(o).render(
    /* @__PURE__ */ N.jsxDEV(Sd.StrictMode, { children: /* @__PURE__ */ N.jsxDEV(ST, {}, void 0, !1, {
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
PT();
