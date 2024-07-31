(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#f6f6f3;color:#444;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;max-width:100%}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#fff}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td{background-color:#f6f6f3}.typecho-list-table tbody tr.checked td{background-color:#fff9e8}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function mO(o, r) {
  for (var s = 0; s < r.length; s++) {
    const l = r[s];
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
function dd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var H0 = { exports: {} }, Dv = {}, B0 = { exports: {} }, ad = { exports: {} };
ad.exports;
(function(o, r) {
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
    var s = "18.3.1", l = Symbol.for("react.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function P(S) {
      if (S === null || typeof S != "object")
        return null;
      var D = O && S[O] || S[A];
      return typeof D == "function" ? D : null;
    }
    var z = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, T = {
      transition: null
    }, V = {
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
    }, Q = {}, Se = null;
    function je(S) {
      Se = S;
    }
    Q.setExtraStackFrame = function(S) {
      Se = S;
    }, Q.getCurrentStack = null, Q.getStackAddendum = function() {
      var S = "";
      Se && (S += Se);
      var D = Q.getCurrentStack;
      return D && (S += D() || ""), S;
    };
    var de = !1, ve = !1, qe = !1, me = !1, Ee = !1, Ce = {
      ReactCurrentDispatcher: z,
      ReactCurrentBatchConfig: T,
      ReactCurrentOwner: I
    };
    Ce.ReactDebugCurrentFrame = Q, Ce.ReactCurrentActQueue = V;
    function et(S) {
      {
        for (var D = arguments.length, H = new Array(D > 1 ? D - 1 : 0), Y = 1; Y < D; Y++)
          H[Y - 1] = arguments[Y];
        Qe("warn", S, H);
      }
    }
    function Re(S) {
      {
        for (var D = arguments.length, H = new Array(D > 1 ? D - 1 : 0), Y = 1; Y < D; Y++)
          H[Y - 1] = arguments[Y];
        Qe("error", S, H);
      }
    }
    function Qe(S, D, H) {
      {
        var Y = Ce.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (D += "%s", H = H.concat([ee]));
        var xe = H.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, xe);
      }
    }
    var Dt = {};
    function Ke(S, D) {
      {
        var H = S.constructor, Y = H && (H.displayName || H.name) || "ReactClass", ee = Y + "." + D;
        if (Dt[ee])
          return;
        Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, Y), Dt[ee] = !0;
      }
    }
    var fn = {
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
      enqueueForceUpdate: function(S, D, H) {
        Ke(S, "forceUpdate");
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
      enqueueReplaceState: function(S, D, H, Y) {
        Ke(S, "replaceState");
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
      enqueueSetState: function(S, D, H, Y) {
        Ke(S, "setState");
      }
    }, wt = Object.assign, dn = {};
    Object.freeze(dn);
    function Hn(S, D, H) {
      this.props = S, this.context = D, this.refs = dn, this.updater = H || fn;
    }
    Hn.prototype.isReactComponent = {}, Hn.prototype.setState = function(S, D) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, D, "setState");
    }, Hn.prototype.forceUpdate = function(S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    };
    {
      var za = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, ba = function(S, D) {
        Object.defineProperty(Hn.prototype, S, {
          get: function() {
            et("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
          }
        });
      };
      for (var xa in za)
        za.hasOwnProperty(xa) && ba(xa, za[xa]);
    }
    function oa() {
    }
    oa.prototype = Hn.prototype;
    function Zt(S, D, H) {
      this.props = S, this.context = D, this.refs = dn, this.updater = H || fn;
    }
    var Ln = Zt.prototype = new oa();
    Ln.constructor = Zt, wt(Ln, Hn.prototype), Ln.isPureReactComponent = !0;
    function Bn() {
      var S = {
        current: null
      };
      return Object.seal(S), S;
    }
    var In = Array.isArray;
    function kt(S) {
      return In(S);
    }
    function mn(S) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, H = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return H;
      }
    }
    function It(S) {
      try {
        return Pt(S), !1;
      } catch {
        return !0;
      }
    }
    function Pt(S) {
      return "" + S;
    }
    function At(S) {
      if (It(S))
        return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mn(S)), Pt(S);
    }
    function Yn(S, D, H) {
      var Y = S.displayName;
      if (Y)
        return Y;
      var ee = D.displayName || D.name || "";
      return ee !== "" ? H + "(" + ee + ")" : H;
    }
    function sa(S) {
      return S.displayName || "Context";
    }
    function _n(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
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
        case b:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case p:
            var D = S;
            return sa(D) + ".Consumer";
          case v:
            var H = S;
            return sa(H._context) + ".Provider";
          case h:
            return Yn(S, S.render, "ForwardRef");
          case w:
            var Y = S.displayName || null;
            return Y !== null ? Y : _n(S.type) || "Memo";
          case R: {
            var ee = S, xe = ee._payload, ce = ee._init;
            try {
              return _n(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Na = Object.prototype.hasOwnProperty, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cn, ua, pn;
    pn = {};
    function Kn(S) {
      if (Na.call(S, "ref")) {
        var D = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function jt(S) {
      if (Na.call(S, "key")) {
        var D = Object.getOwnPropertyDescriptor(S, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function ca(S, D) {
      var H = function() {
        Cn || (Cn = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
      };
      H.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: H,
        configurable: !0
      });
    }
    function or(S, D) {
      var H = function() {
        ua || (ua = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
      };
      H.isReactWarning = !0, Object.defineProperty(S, "ref", {
        get: H,
        configurable: !0
      });
    }
    function sr(S) {
      if (typeof S.ref == "string" && I.current && S.__self && I.current.stateNode !== S.__self) {
        var D = _n(I.current.type);
        pn[D] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), pn[D] = !0);
      }
    }
    var ne = function(S, D, H, Y, ee, xe, ce) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: S,
        key: D,
        ref: H,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function pe(S, D, H) {
      var Y, ee = {}, xe = null, ce = null, Te = null, ze = null;
      if (D != null) {
        Kn(D) && (ce = D.ref, sr(D)), jt(D) && (At(D.key), xe = "" + D.key), Te = D.__self === void 0 ? null : D.__self, ze = D.__source === void 0 ? null : D.__source;
        for (Y in D)
          Na.call(D, Y) && !la.hasOwnProperty(Y) && (ee[Y] = D[Y]);
      }
      var rt = arguments.length - 2;
      if (rt === 1)
        ee.children = H;
      else if (rt > 1) {
        for (var ut = Array(rt), ct = 0; ct < rt; ct++)
          ut[ct] = arguments[ct + 2];
        Object.freeze && Object.freeze(ut), ee.children = ut;
      }
      if (S && S.defaultProps) {
        var ht = S.defaultProps;
        for (Y in ht)
          ee[Y] === void 0 && (ee[Y] = ht[Y]);
      }
      if (xe || ce) {
        var St = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
        xe && ca(ee, St), ce && or(ee, St);
      }
      return ne(S, xe, ce, Te, ze, I.current, ee);
    }
    function Me(S, D) {
      var H = ne(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
      return H;
    }
    function nt(S, D, H) {
      if (S == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
      var Y, ee = wt({}, S.props), xe = S.key, ce = S.ref, Te = S._self, ze = S._source, rt = S._owner;
      if (D != null) {
        Kn(D) && (ce = D.ref, rt = I.current), jt(D) && (At(D.key), xe = "" + D.key);
        var ut;
        S.type && S.type.defaultProps && (ut = S.type.defaultProps);
        for (Y in D)
          Na.call(D, Y) && !la.hasOwnProperty(Y) && (D[Y] === void 0 && ut !== void 0 ? ee[Y] = ut[Y] : ee[Y] = D[Y]);
      }
      var ct = arguments.length - 2;
      if (ct === 1)
        ee.children = H;
      else if (ct > 1) {
        for (var ht = Array(ct), St = 0; St < ct; St++)
          ht[St] = arguments[St + 2];
        ee.children = ht;
      }
      return ne(S.type, xe, ce, Te, ze, rt, ee);
    }
    function at(S) {
      return typeof S == "object" && S !== null && S.$$typeof === l;
    }
    var Mt = ".", Rt = ":";
    function Pn(S) {
      var D = /[=:]/g, H = {
        "=": "=0",
        ":": "=2"
      }, Y = S.replace(D, function(ee) {
        return H[ee];
      });
      return "$" + Y;
    }
    var lt = !1, Wn = /\/+/g;
    function mt(S) {
      return S.replace(Wn, "$&/");
    }
    function pt(S, D) {
      return typeof S == "object" && S !== null && S.key != null ? (At(S.key), Pn("" + S.key)) : D.toString(36);
    }
    function Ja(S, D, H, Y, ee) {
      var xe = typeof S;
      (xe === "undefined" || xe === "boolean") && (S = null);
      var ce = !1;
      if (S === null)
        ce = !0;
      else
        switch (xe) {
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
        var Te = S, ze = ee(Te), rt = Y === "" ? Mt + pt(Te, 0) : Y;
        if (kt(ze)) {
          var ut = "";
          rt != null && (ut = mt(rt) + "/"), Ja(ze, D, ut, "", function(Nd) {
            return Nd;
          });
        } else ze != null && (at(ze) && (ze.key && (!Te || Te.key !== ze.key) && At(ze.key), ze = Me(
          ze,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          H + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (ze.key && (!Te || Te.key !== ze.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            mt("" + ze.key) + "/"
          ) : "") + rt
        )), D.push(ze));
        return 1;
      }
      var ct, ht, St = 0, Xe = Y === "" ? Mt : Y + Rt;
      if (kt(S))
        for (var Gr = 0; Gr < S.length; Gr++)
          ct = S[Gr], ht = Xe + pt(ct, Gr), St += Ja(ct, D, H, ht, ee);
      else {
        var xo = P(S);
        if (typeof xo == "function") {
          var Ms = S;
          xo === Ms.entries && (lt || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lt = !0);
          for (var xd = xo.call(Ms), dr, Vs = 0; !(dr = xd.next()).done; )
            ct = dr.value, ht = Xe + pt(ct, Vs++), St += Ja(ct, D, H, ht, ee);
        } else if (xe === "object") {
          var Us = String(S);
          throw new Error("Objects are not valid as a React child (found: " + (Us === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Us) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return St;
    }
    function Sa(S, D, H) {
      if (S == null)
        return S;
      var Y = [], ee = 0;
      return Ja(S, Y, "", "", function(xe) {
        return D.call(H, xe, ee++);
      }), Y;
    }
    function ji(S) {
      var D = 0;
      return Sa(S, function() {
        D++;
      }), D;
    }
    function mo(S, D, H) {
      Sa(S, function() {
        D.apply(this, arguments);
      }, H);
    }
    function Ns(S) {
      return Sa(S, function(D) {
        return D;
      }) || [];
    }
    function Ri(S) {
      if (!at(S))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
    function Ti(S) {
      var D = {
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
      D.Provider = {
        $$typeof: v,
        _context: D
      };
      var H = !1, Y = !1, ee = !1;
      {
        var xe = {
          $$typeof: p,
          _context: D
        };
        Object.defineProperties(xe, {
          Provider: {
            get: function() {
              return Y || (Y = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
            },
            set: function(ce) {
              D.Provider = ce;
            }
          },
          _currentValue: {
            get: function() {
              return D._currentValue;
            },
            set: function(ce) {
              D._currentValue = ce;
            }
          },
          _currentValue2: {
            get: function() {
              return D._currentValue2;
            },
            set: function(ce) {
              D._currentValue2 = ce;
            }
          },
          _threadCount: {
            get: function() {
              return D._threadCount;
            },
            set: function(ce) {
              D._threadCount = ce;
            }
          },
          Consumer: {
            get: function() {
              return H || (H = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
            }
          },
          displayName: {
            get: function() {
              return D.displayName;
            },
            set: function(ce) {
              ee || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), ee = !0);
            }
          }
        }), D.Consumer = xe;
      }
      return D._currentRenderer = null, D._currentRenderer2 = null, D;
    }
    var lr = -1, zr = 0, ur = 1, Ha = 2;
    function Ea(S) {
      if (S._status === lr) {
        var D = S._result, H = D();
        if (H.then(function(xe) {
          if (S._status === zr || S._status === lr) {
            var ce = S;
            ce._status = ur, ce._result = xe;
          }
        }, function(xe) {
          if (S._status === zr || S._status === lr) {
            var ce = S;
            ce._status = Ha, ce._result = xe;
          }
        }), S._status === lr) {
          var Y = S;
          Y._status = zr, Y._result = H;
        }
      }
      if (S._status === ur) {
        var ee = S._result;
        return ee === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw S._result;
    }
    function k(S) {
      var D = {
        // We use these fields to store the result.
        _status: lr,
        _result: S
      }, H = {
        $$typeof: R,
        _payload: D,
        _init: Ea
      };
      {
        var Y, ee;
        Object.defineProperties(H, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(xe) {
              Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = xe, Object.defineProperty(H, "defaultProps", {
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
              Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = xe, Object.defineProperty(H, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return H;
    }
    function X(S) {
      S != null && S.$$typeof === w ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Re("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var D = {
        $$typeof: h,
        render: S
      };
      {
        var H;
        Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return H;
          },
          set: function(Y) {
            H = Y, !S.name && !S.displayName && (S.displayName = Y);
          }
        });
      }
      return D;
    }
    var ae;
    ae = Symbol.for("react.module.reference");
    function ye(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === f || S === y || Ee || S === c || S === b || S === N || me || S === M || de || ve || qe || typeof S == "object" && S !== null && (S.$$typeof === R || S.$$typeof === w || S.$$typeof === v || S.$$typeof === p || S.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === ae || S.getModuleId !== void 0));
    }
    function $e(S, D) {
      ye(S) || Re("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
      var H = {
        $$typeof: w,
        type: S,
        compare: D === void 0 ? null : D
      };
      {
        var Y;
        Object.defineProperty(H, "displayName", {
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
      return H;
    }
    function we() {
      var S = z.current;
      return S === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
    }
    function Ae(S) {
      var D = we();
      if (S._context !== void 0) {
        var H = S._context;
        H.Consumer === S ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : H.Provider === S && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return D.useContext(S);
    }
    function _e(S) {
      var D = we();
      return D.useState(S);
    }
    function yt(S, D, H) {
      var Y = we();
      return Y.useReducer(S, D, H);
    }
    function Ve(S) {
      var D = we();
      return D.useRef(S);
    }
    function gt(S, D) {
      var H = we();
      return H.useEffect(S, D);
    }
    function hn(S, D) {
      var H = we();
      return H.useInsertionEffect(S, D);
    }
    function Ca(S, D) {
      var H = we();
      return H.useLayoutEffect(S, D);
    }
    function wa(S, D) {
      var H = we();
      return H.useCallback(S, D);
    }
    function Yt(S, D) {
      var H = we();
      return H.useMemo(S, D);
    }
    function Di(S, D, H) {
      var Y = we();
      return Y.useImperativeHandle(S, D, H);
    }
    function po(S, D) {
      {
        var H = we();
        return H.useDebugValue(S, D);
      }
    }
    function Ss() {
      var S = we();
      return S.useTransition();
    }
    function cr(S) {
      var D = we();
      return D.useDeferredValue(S);
    }
    function Fe() {
      var S = we();
      return S.useId();
    }
    function ki(S, D, H) {
      var Y = we();
      return Y.useSyncExternalStore(S, D, H);
    }
    var Jr = 0, Es, Cs, ws, js, Rs, Ts, Ds;
    function Pu() {
    }
    Pu.__reactDisabledLog = !0;
    function gd() {
      {
        if (Jr === 0) {
          Es = console.log, Cs = console.info, ws = console.warn, js = console.error, Rs = console.group, Ts = console.groupCollapsed, Ds = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: Pu,
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
        Jr++;
      }
    }
    function ks() {
      {
        if (Jr--, Jr === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, S, {
              value: Es
            }),
            info: wt({}, S, {
              value: Cs
            }),
            warn: wt({}, S, {
              value: ws
            }),
            error: wt({}, S, {
              value: js
            }),
            group: wt({}, S, {
              value: Rs
            }),
            groupCollapsed: wt({}, S, {
              value: Ts
            }),
            groupEnd: wt({}, S, {
              value: Ds
            })
          });
        }
        Jr < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oi = Ce.ReactCurrentDispatcher, fa;
    function Hr(S, D, H) {
      {
        if (fa === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            fa = Y && Y[1] || "";
          }
        return `
` + fa + S;
      }
    }
    var Br = !1, ho;
    {
      var Os = typeof WeakMap == "function" ? WeakMap : Map;
      ho = new Os();
    }
    function Au(S, D) {
      if (!S || Br)
        return "";
      {
        var H = ho.get(S);
        if (H !== void 0)
          return H;
      }
      var Y;
      Br = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = Oi.current, Oi.current = null, gd();
      try {
        if (D) {
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
          for (var Te = Xe.stack.split(`
`), ze = Y.stack.split(`
`), rt = Te.length - 1, ut = ze.length - 1; rt >= 1 && ut >= 0 && Te[rt] !== ze[ut]; )
            ut--;
          for (; rt >= 1 && ut >= 0; rt--, ut--)
            if (Te[rt] !== ze[ut]) {
              if (rt !== 1 || ut !== 1)
                do
                  if (rt--, ut--, ut < 0 || Te[rt] !== ze[ut]) {
                    var ct = `
` + Te[rt].replace(" at new ", " at ");
                    return S.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", S.displayName)), typeof S == "function" && ho.set(S, ct), ct;
                  }
                while (rt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        Br = !1, Oi.current = xe, ks(), Error.prepareStackTrace = ee;
      }
      var ht = S ? S.displayName || S.name : "", St = ht ? Hr(ht) : "";
      return typeof S == "function" && ho.set(S, St), St;
    }
    function Ls(S, D, H) {
      return Au(S, !1);
    }
    function yd(S) {
      var D = S.prototype;
      return !!(D && D.isReactComponent);
    }
    function Ir(S, D, H) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return Au(S, yd(S));
      if (typeof S == "string")
        return Hr(S);
      switch (S) {
        case b:
          return Hr("Suspense");
        case N:
          return Hr("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case h:
            return Ls(S.render);
          case w:
            return Ir(S.type, D, H);
          case R: {
            var Y = S, ee = Y._payload, xe = Y._init;
            try {
              return Ir(xe(ee), D, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Mu = {}, _s = Ce.ReactDebugCurrentFrame;
    function vo(S) {
      if (S) {
        var D = S._owner, H = Ir(S.type, S._source, D ? D.type : null);
        _s.setExtraStackFrame(H);
      } else
        _s.setExtraStackFrame(null);
    }
    function Vu(S, D, H, Y, ee) {
      {
        var xe = Function.call.bind(Na);
        for (var ce in S)
          if (xe(S, ce)) {
            var Te = void 0;
            try {
              if (typeof S[ce] != "function") {
                var ze = Error((Y || "React class") + ": " + H + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              Te = S[ce](D, ce, Y, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Te = rt;
            }
            Te && !(Te instanceof Error) && (vo(ee), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", H, ce, typeof Te), vo(null)), Te instanceof Error && !(Te.message in Mu) && (Mu[Te.message] = !0, vo(ee), Re("Failed %s type: %s", H, Te.message), vo(null));
          }
      }
    }
    function Ye(S) {
      if (S) {
        var D = S._owner, H = Ir(S.type, S._source, D ? D.type : null);
        je(H);
      } else
        je(null);
    }
    var Ps;
    Ps = !1;
    function As() {
      if (I.current) {
        var S = _n(I.current.type);
        if (S)
          return `

Check the render method of \`` + S + "`.";
      }
      return "";
    }
    function Le(S) {
      if (S !== void 0) {
        var D = S.fileName.replace(/^.*[\\\/]/, ""), H = S.lineNumber;
        return `

Check your code at ` + D + ":" + H + ".";
      }
      return "";
    }
    function Uu(S) {
      return S != null ? Le(S.__source) : "";
    }
    var vn = {};
    function Li(S) {
      var D = As();
      if (!D) {
        var H = typeof S == "string" ? S : S.displayName || S.name;
        H && (D = `

Check the top-level render call using <` + H + ">.");
      }
      return D;
    }
    function Yr(S, D) {
      if (!(!S._store || S._store.validated || S.key != null)) {
        S._store.validated = !0;
        var H = Li(D);
        if (!vn[H]) {
          vn[H] = !0;
          var Y = "";
          S && S._owner && S._owner !== I.current && (Y = " It was passed a child from " + _n(S._owner.type) + "."), Ye(S), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, Y), Ye(null);
        }
      }
    }
    function Fu(S, D) {
      if (typeof S == "object") {
        if (kt(S))
          for (var H = 0; H < S.length; H++) {
            var Y = S[H];
            at(Y) && Yr(Y, D);
          }
        else if (at(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ee = P(S);
          if (typeof ee == "function" && ee !== S.entries)
            for (var xe = ee.call(S), ce; !(ce = xe.next()).done; )
              at(ce.value) && Yr(ce.value, D);
        }
      }
    }
    function Kt(S) {
      {
        var D = S.type;
        if (D == null || typeof D == "string")
          return;
        var H;
        if (typeof D == "function")
          H = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === w))
          H = D.propTypes;
        else
          return;
        if (H) {
          var Y = _n(D);
          Vu(H, S.props, "prop", Y, S);
        } else if (D.PropTypes !== void 0 && !Ps) {
          Ps = !0;
          var ee = _n(D);
          Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(S) {
      {
        for (var D = Object.keys(S.props), H = 0; H < D.length; H++) {
          var Y = D[H];
          if (Y !== "children" && Y !== "key") {
            Ye(S), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ye(null);
            break;
          }
        }
        S.ref !== null && (Ye(S), Re("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    function $u(S, D, H) {
      var Y = ye(S);
      if (!Y) {
        var ee = "";
        (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var xe = Uu(D);
        xe ? ee += xe : ee += As();
        var ce;
        S === null ? ce = "null" : kt(S) ? ce = "array" : S !== void 0 && S.$$typeof === l ? (ce = "<" + (_n(S.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof S, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, ee);
      }
      var Te = pe.apply(this, arguments);
      if (Te == null)
        return Te;
      if (Y)
        for (var ze = 2; ze < arguments.length; ze++)
          Fu(arguments[ze], S);
      return S === f ? bt(Te) : Kt(Te), Te;
    }
    var Gn = !1;
    function An(S) {
      var D = $u.bind(null, S);
      return D.type = S, Gn || (Gn = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
        enumerable: !1,
        get: function() {
          return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: S
          }), S;
        }
      }), D;
    }
    function Ba(S, D, H) {
      for (var Y = nt.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        Fu(arguments[ee], Y.type);
      return Kt(Y), Y;
    }
    function bd(S, D) {
      var H = T.transition;
      T.transition = {};
      var Y = T.transition;
      T.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        S();
      } finally {
        if (T.transition = H, H === null && Y._updatedFibers) {
          var ee = Y._updatedFibers.size;
          ee > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
        }
      }
    }
    var go = !1, _i = null;
    function zu(S) {
      if (_i === null)
        try {
          var D = ("require" + Math.random()).slice(0, 7), H = o && o[D];
          _i = H.call(o, "timers").setImmediate;
        } catch {
          _i = function(ee) {
            go === !1 && (go = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var xe = new MessageChannel();
            xe.port1.onmessage = ee, xe.port2.postMessage(void 0);
          };
        }
      return _i(S);
    }
    var Kr = 0, Ju = !1;
    function Hu(S) {
      {
        var D = Kr;
        Kr++, V.current === null && (V.current = []);
        var H = V.isBatchingLegacy, Y;
        try {
          if (V.isBatchingLegacy = !0, Y = S(), !H && V.didScheduleLegacyUpdate) {
            var ee = V.current;
            ee !== null && (V.didScheduleLegacyUpdate = !1, bo(ee));
          }
        } catch (ht) {
          throw fr(D), ht;
        } finally {
          V.isBatchingLegacy = H;
        }
        if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
          var xe = Y, ce = !1, Te = {
            then: function(ht, St) {
              ce = !0, xe.then(function(Xe) {
                fr(D), Kr === 0 ? yo(Xe, ht, St) : ht(Xe);
              }, function(Xe) {
                fr(D), St(Xe);
              });
            }
          };
          return !Ju && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            ce || (Ju = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Te;
        } else {
          var ze = Y;
          if (fr(D), Kr === 0) {
            var rt = V.current;
            rt !== null && (bo(rt), V.current = null);
            var ut = {
              then: function(ht, St) {
                V.current === null ? (V.current = [], yo(ze, ht, St)) : ht(ze);
              }
            };
            return ut;
          } else {
            var ct = {
              then: function(ht, St) {
                ht(ze);
              }
            };
            return ct;
          }
        }
      }
    }
    function fr(S) {
      S !== Kr - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Kr = S;
    }
    function yo(S, D, H) {
      {
        var Y = V.current;
        if (Y !== null)
          try {
            bo(Y), zu(function() {
              Y.length === 0 ? (V.current = null, D(S)) : yo(S, D, H);
            });
          } catch (ee) {
            H(ee);
          }
        else
          D(S);
      }
    }
    var Wr = !1;
    function bo(S) {
      if (!Wr) {
        Wr = !0;
        var D = 0;
        try {
          for (; D < S.length; D++) {
            var H = S[D];
            do
              H = H(!0);
            while (H !== null);
          }
          S.length = 0;
        } catch (Y) {
          throw S = S.slice(D + 1), Y;
        } finally {
          Wr = !1;
        }
      }
    }
    var Bu = $u, Iu = Ba, Yu = An, Ku = {
      map: Sa,
      forEach: mo,
      count: ji,
      toArray: Ns,
      only: Ri
    };
    r.Children = Ku, r.Component = Hn, r.Fragment = f, r.Profiler = y, r.PureComponent = Zt, r.StrictMode = c, r.Suspense = b, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, r.act = Hu, r.cloneElement = Iu, r.createContext = Ti, r.createElement = Bu, r.createFactory = Yu, r.createRef = Bn, r.forwardRef = X, r.isValidElement = at, r.lazy = k, r.memo = $e, r.startTransition = bd, r.unstable_act = Hu, r.useCallback = wa, r.useContext = Ae, r.useDebugValue = po, r.useDeferredValue = cr, r.useEffect = gt, r.useId = Fe, r.useImperativeHandle = Di, r.useInsertionEffect = hn, r.useLayoutEffect = Ca, r.useMemo = Yt, r.useReducer = yt, r.useRef = Ve, r.useState = _e, r.useSyncExternalStore = ki, r.useTransition = Ss, r.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(ad, ad.exports);
var pO = ad.exports;
B0.exports = pO;
var U = B0.exports;
const En = /* @__PURE__ */ dd(U), kv = /* @__PURE__ */ mO({
  __proto__: null,
  default: En
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
  var o = U, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), R = Symbol.iterator, M = "@@iterator";
  function O(k) {
    if (k === null || typeof k != "object")
      return null;
    var X = R && k[R] || k[M];
    return typeof X == "function" ? X : null;
  }
  var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function P(k) {
    {
      for (var X = arguments.length, ae = new Array(X > 1 ? X - 1 : 0), ye = 1; ye < X; ye++)
        ae[ye - 1] = arguments[ye];
      z("error", k, ae);
    }
  }
  function z(k, X, ae) {
    {
      var ye = A.ReactDebugCurrentFrame, $e = ye.getStackAddendum();
      $e !== "" && (X += "%s", ae = ae.concat([$e]));
      var we = ae.map(function(Ae) {
        return String(Ae);
      });
      we.unshift("Warning: " + X), Function.prototype.apply.call(console[k], console, we);
    }
  }
  var T = !1, V = !1, I = !1, Q = !1, Se = !1, je;
  je = Symbol.for("react.module.reference");
  function de(k) {
    return !!(typeof k == "string" || typeof k == "function" || k === l || k === f || Se || k === d || k === p || k === h || Q || k === w || T || V || I || typeof k == "object" && k !== null && (k.$$typeof === N || k.$$typeof === b || k.$$typeof === c || k.$$typeof === y || k.$$typeof === v || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    k.$$typeof === je || k.getModuleId !== void 0));
  }
  function ve(k, X, ae) {
    var ye = k.displayName;
    if (ye)
      return ye;
    var $e = X.displayName || X.name || "";
    return $e !== "" ? ae + "(" + $e + ")" : ae;
  }
  function qe(k) {
    return k.displayName || "Context";
  }
  function me(k) {
    if (k == null)
      return null;
    if (typeof k.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
      return k.displayName || k.name || null;
    if (typeof k == "string")
      return k;
    switch (k) {
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
      case h:
        return "SuspenseList";
    }
    if (typeof k == "object")
      switch (k.$$typeof) {
        case y:
          var X = k;
          return qe(X) + ".Consumer";
        case c:
          var ae = k;
          return qe(ae._context) + ".Provider";
        case v:
          return ve(k, k.render, "ForwardRef");
        case b:
          var ye = k.displayName || null;
          return ye !== null ? ye : me(k.type) || "Memo";
        case N: {
          var $e = k, we = $e._payload, Ae = $e._init;
          try {
            return me(Ae(we));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Ee = Object.assign, Ce = 0, et, Re, Qe, Dt, Ke, fn, wt;
  function dn() {
  }
  dn.__reactDisabledLog = !0;
  function Hn() {
    {
      if (Ce === 0) {
        et = console.log, Re = console.info, Qe = console.warn, Dt = console.error, Ke = console.group, fn = console.groupCollapsed, wt = console.groupEnd;
        var k = {
          configurable: !0,
          enumerable: !0,
          value: dn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: k,
          log: k,
          warn: k,
          error: k,
          group: k,
          groupCollapsed: k,
          groupEnd: k
        });
      }
      Ce++;
    }
  }
  function za() {
    {
      if (Ce--, Ce === 0) {
        var k = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Ee({}, k, {
            value: et
          }),
          info: Ee({}, k, {
            value: Re
          }),
          warn: Ee({}, k, {
            value: Qe
          }),
          error: Ee({}, k, {
            value: Dt
          }),
          group: Ee({}, k, {
            value: Ke
          }),
          groupCollapsed: Ee({}, k, {
            value: fn
          }),
          groupEnd: Ee({}, k, {
            value: wt
          })
        });
      }
      Ce < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ba = A.ReactCurrentDispatcher, xa;
  function oa(k, X, ae) {
    {
      if (xa === void 0)
        try {
          throw Error();
        } catch ($e) {
          var ye = $e.stack.trim().match(/\n( *(at )?)/);
          xa = ye && ye[1] || "";
        }
      return `
` + xa + k;
    }
  }
  var Zt = !1, Ln;
  {
    var Bn = typeof WeakMap == "function" ? WeakMap : Map;
    Ln = new Bn();
  }
  function In(k, X) {
    if (!k || Zt)
      return "";
    {
      var ae = Ln.get(k);
      if (ae !== void 0)
        return ae;
    }
    var ye;
    Zt = !0;
    var $e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var we;
    we = ba.current, ba.current = null, Hn();
    try {
      if (X) {
        var Ae = function() {
          throw Error();
        };
        if (Object.defineProperty(Ae.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(Ae, []);
          } catch (Yt) {
            ye = Yt;
          }
          Reflect.construct(k, [], Ae);
        } else {
          try {
            Ae.call();
          } catch (Yt) {
            ye = Yt;
          }
          k.call(Ae.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Yt) {
          ye = Yt;
        }
        k();
      }
    } catch (Yt) {
      if (Yt && ye && typeof Yt.stack == "string") {
        for (var _e = Yt.stack.split(`
`), yt = ye.stack.split(`
`), Ve = _e.length - 1, gt = yt.length - 1; Ve >= 1 && gt >= 0 && _e[Ve] !== yt[gt]; )
          gt--;
        for (; Ve >= 1 && gt >= 0; Ve--, gt--)
          if (_e[Ve] !== yt[gt]) {
            if (Ve !== 1 || gt !== 1)
              do
                if (Ve--, gt--, gt < 0 || _e[Ve] !== yt[gt]) {
                  var hn = `
` + _e[Ve].replace(" at new ", " at ");
                  return k.displayName && hn.includes("<anonymous>") && (hn = hn.replace("<anonymous>", k.displayName)), typeof k == "function" && Ln.set(k, hn), hn;
                }
              while (Ve >= 1 && gt >= 0);
            break;
          }
      }
    } finally {
      Zt = !1, ba.current = we, za(), Error.prepareStackTrace = $e;
    }
    var Ca = k ? k.displayName || k.name : "", wa = Ca ? oa(Ca) : "";
    return typeof k == "function" && Ln.set(k, wa), wa;
  }
  function kt(k, X, ae) {
    return In(k, !1);
  }
  function mn(k) {
    var X = k.prototype;
    return !!(X && X.isReactComponent);
  }
  function It(k, X, ae) {
    if (k == null)
      return "";
    if (typeof k == "function")
      return In(k, mn(k));
    if (typeof k == "string")
      return oa(k);
    switch (k) {
      case p:
        return oa("Suspense");
      case h:
        return oa("SuspenseList");
    }
    if (typeof k == "object")
      switch (k.$$typeof) {
        case v:
          return kt(k.render);
        case b:
          return It(k.type, X, ae);
        case N: {
          var ye = k, $e = ye._payload, we = ye._init;
          try {
            return It(we($e), X, ae);
          } catch {
          }
        }
      }
    return "";
  }
  var Pt = Object.prototype.hasOwnProperty, At = {}, Yn = A.ReactDebugCurrentFrame;
  function sa(k) {
    if (k) {
      var X = k._owner, ae = It(k.type, k._source, X ? X.type : null);
      Yn.setExtraStackFrame(ae);
    } else
      Yn.setExtraStackFrame(null);
  }
  function _n(k, X, ae, ye, $e) {
    {
      var we = Function.call.bind(Pt);
      for (var Ae in k)
        if (we(k, Ae)) {
          var _e = void 0;
          try {
            if (typeof k[Ae] != "function") {
              var yt = Error((ye || "React class") + ": " + ae + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw yt.name = "Invariant Violation", yt;
            }
            _e = k[Ae](X, Ae, ye, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ve) {
            _e = Ve;
          }
          _e && !(_e instanceof Error) && (sa($e), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", ae, Ae, typeof _e), sa(null)), _e instanceof Error && !(_e.message in At) && (At[_e.message] = !0, sa($e), P("Failed %s type: %s", ae, _e.message), sa(null));
        }
    }
  }
  var Na = Array.isArray;
  function la(k) {
    return Na(k);
  }
  function Cn(k) {
    {
      var X = typeof Symbol == "function" && Symbol.toStringTag, ae = X && k[Symbol.toStringTag] || k.constructor.name || "Object";
      return ae;
    }
  }
  function ua(k) {
    try {
      return pn(k), !1;
    } catch {
      return !0;
    }
  }
  function pn(k) {
    return "" + k;
  }
  function Kn(k) {
    if (ua(k))
      return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(k)), pn(k);
  }
  var jt = A.ReactCurrentOwner, ca = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, or, sr, ne;
  ne = {};
  function pe(k) {
    if (Pt.call(k, "ref")) {
      var X = Object.getOwnPropertyDescriptor(k, "ref").get;
      if (X && X.isReactWarning)
        return !1;
    }
    return k.ref !== void 0;
  }
  function Me(k) {
    if (Pt.call(k, "key")) {
      var X = Object.getOwnPropertyDescriptor(k, "key").get;
      if (X && X.isReactWarning)
        return !1;
    }
    return k.key !== void 0;
  }
  function nt(k, X) {
    if (typeof k.ref == "string" && jt.current && X && jt.current.stateNode !== X) {
      var ae = me(jt.current.type);
      ne[ae] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', me(jt.current.type), k.ref), ne[ae] = !0);
    }
  }
  function at(k, X) {
    {
      var ae = function() {
        or || (or = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
      };
      ae.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: ae,
        configurable: !0
      });
    }
  }
  function Mt(k, X) {
    {
      var ae = function() {
        sr || (sr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
      };
      ae.isReactWarning = !0, Object.defineProperty(k, "ref", {
        get: ae,
        configurable: !0
      });
    }
  }
  var Rt = function(k, X, ae, ye, $e, we, Ae) {
    var _e = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: r,
      // Built-in properties that belong on the element
      type: k,
      key: X,
      ref: ae,
      props: Ae,
      // Record the component responsible for creating this element.
      _owner: we
    };
    return _e._store = {}, Object.defineProperty(_e._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(_e, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: ye
    }), Object.defineProperty(_e, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: $e
    }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
  };
  function Pn(k, X, ae, ye, $e) {
    {
      var we, Ae = {}, _e = null, yt = null;
      ae !== void 0 && (Kn(ae), _e = "" + ae), Me(X) && (Kn(X.key), _e = "" + X.key), pe(X) && (yt = X.ref, nt(X, $e));
      for (we in X)
        Pt.call(X, we) && !ca.hasOwnProperty(we) && (Ae[we] = X[we]);
      if (k && k.defaultProps) {
        var Ve = k.defaultProps;
        for (we in Ve)
          Ae[we] === void 0 && (Ae[we] = Ve[we]);
      }
      if (_e || yt) {
        var gt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
        _e && at(Ae, gt), yt && Mt(Ae, gt);
      }
      return Rt(k, _e, yt, $e, ye, jt.current, Ae);
    }
  }
  var lt = A.ReactCurrentOwner, Wn = A.ReactDebugCurrentFrame;
  function mt(k) {
    if (k) {
      var X = k._owner, ae = It(k.type, k._source, X ? X.type : null);
      Wn.setExtraStackFrame(ae);
    } else
      Wn.setExtraStackFrame(null);
  }
  var pt;
  pt = !1;
  function Ja(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r;
  }
  function Sa() {
    {
      if (lt.current) {
        var k = me(lt.current.type);
        if (k)
          return `

Check the render method of \`` + k + "`.";
      }
      return "";
    }
  }
  function ji(k) {
    {
      if (k !== void 0) {
        var X = k.fileName.replace(/^.*[\\\/]/, ""), ae = k.lineNumber;
        return `

Check your code at ` + X + ":" + ae + ".";
      }
      return "";
    }
  }
  var mo = {};
  function Ns(k) {
    {
      var X = Sa();
      if (!X) {
        var ae = typeof k == "string" ? k : k.displayName || k.name;
        ae && (X = `

Check the top-level render call using <` + ae + ">.");
      }
      return X;
    }
  }
  function Ri(k, X) {
    {
      if (!k._store || k._store.validated || k.key != null)
        return;
      k._store.validated = !0;
      var ae = Ns(X);
      if (mo[ae])
        return;
      mo[ae] = !0;
      var ye = "";
      k && k._owner && k._owner !== lt.current && (ye = " It was passed a child from " + me(k._owner.type) + "."), mt(k), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ye), mt(null);
    }
  }
  function Ti(k, X) {
    {
      if (typeof k != "object")
        return;
      if (la(k))
        for (var ae = 0; ae < k.length; ae++) {
          var ye = k[ae];
          Ja(ye) && Ri(ye, X);
        }
      else if (Ja(k))
        k._store && (k._store.validated = !0);
      else if (k) {
        var $e = O(k);
        if (typeof $e == "function" && $e !== k.entries)
          for (var we = $e.call(k), Ae; !(Ae = we.next()).done; )
            Ja(Ae.value) && Ri(Ae.value, X);
      }
    }
  }
  function lr(k) {
    {
      var X = k.type;
      if (X == null || typeof X == "string")
        return;
      var ae;
      if (typeof X == "function")
        ae = X.propTypes;
      else if (typeof X == "object" && (X.$$typeof === v || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      X.$$typeof === b))
        ae = X.propTypes;
      else
        return;
      if (ae) {
        var ye = me(X);
        _n(ae, k.props, "prop", ye, k);
      } else if (X.PropTypes !== void 0 && !pt) {
        pt = !0;
        var $e = me(X);
        P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
      }
      typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function zr(k) {
    {
      for (var X = Object.keys(k.props), ae = 0; ae < X.length; ae++) {
        var ye = X[ae];
        if (ye !== "children" && ye !== "key") {
          mt(k), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), mt(null);
          break;
        }
      }
      k.ref !== null && (mt(k), P("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
    }
  }
  var ur = {};
  function Ha(k, X, ae, ye, $e, we) {
    {
      var Ae = de(k);
      if (!Ae) {
        var _e = "";
        (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var yt = ji($e);
        yt ? _e += yt : _e += Sa();
        var Ve;
        k === null ? Ve = "null" : la(k) ? Ve = "array" : k !== void 0 && k.$$typeof === r ? (Ve = "<" + (me(k.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof k, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, _e);
      }
      var gt = Pn(k, X, ae, $e, we);
      if (gt == null)
        return gt;
      if (Ae) {
        var hn = X.children;
        if (hn !== void 0)
          if (ye)
            if (la(hn)) {
              for (var Ca = 0; Ca < hn.length; Ca++)
                Ti(hn[Ca], k);
              Object.freeze && Object.freeze(hn);
            } else
              P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Ti(hn, k);
      }
      if (Pt.call(X, "key")) {
        var wa = me(k), Yt = Object.keys(X).filter(function(Ss) {
          return Ss !== "key";
        }), Di = Yt.length > 0 ? "{key: someKey, " + Yt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!ur[wa + Di]) {
          var po = Yt.length > 0 ? "{" + Yt.join(": ..., ") + ": ...}" : "{}";
          P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Di, wa, po, wa), ur[wa + Di] = !0;
        }
      }
      return k === l ? zr(gt) : lr(gt), gt;
    }
  }
  var Ea = Ha;
  Dv.Fragment = l, Dv.jsxDEV = Ea;
})();
H0.exports = Dv;
var E = H0.exports, I0 = { exports: {} }, ra = {}, Y0 = { exports: {} }, K0 = {};
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
    var r = !1, s = !1, l = 5;
    function d(ne, pe) {
      var Me = ne.length;
      ne.push(pe), y(ne, pe, Me);
    }
    function f(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function c(ne) {
      if (ne.length === 0)
        return null;
      var pe = ne[0], Me = ne.pop();
      return Me !== pe && (ne[0] = Me, v(ne, Me, 0)), pe;
    }
    function y(ne, pe, Me) {
      for (var nt = Me; nt > 0; ) {
        var at = nt - 1 >>> 1, Mt = ne[at];
        if (p(Mt, pe) > 0)
          ne[at] = pe, ne[nt] = Mt, nt = at;
        else
          return;
      }
    }
    function v(ne, pe, Me) {
      for (var nt = Me, at = ne.length, Mt = at >>> 1; nt < Mt; ) {
        var Rt = (nt + 1) * 2 - 1, Pn = ne[Rt], lt = Rt + 1, Wn = ne[lt];
        if (p(Pn, pe) < 0)
          lt < at && p(Wn, Pn) < 0 ? (ne[nt] = Wn, ne[lt] = pe, nt = lt) : (ne[nt] = Pn, ne[Rt] = pe, nt = Rt);
        else if (lt < at && p(Wn, pe) < 0)
          ne[nt] = Wn, ne[lt] = pe, nt = lt;
        else
          return;
      }
    }
    function p(ne, pe) {
      var Me = ne.sortIndex - pe.sortIndex;
      return Me !== 0 ? Me : ne.id - pe.id;
    }
    var h = 1, b = 2, N = 3, w = 4, R = 5;
    function M(ne, pe) {
    }
    var O = typeof performance == "object" && typeof performance.now == "function";
    if (O) {
      var A = performance;
      o.unstable_now = function() {
        return A.now();
      };
    } else {
      var P = Date, z = P.now();
      o.unstable_now = function() {
        return P.now() - z;
      };
    }
    var T = 1073741823, V = -1, I = 250, Q = 5e3, Se = 1e4, je = T, de = [], ve = [], qe = 1, me = null, Ee = N, Ce = !1, et = !1, Re = !1, Qe = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fn(ne) {
      for (var pe = f(ve); pe !== null; ) {
        if (pe.callback === null)
          c(ve);
        else if (pe.startTime <= ne)
          c(ve), pe.sortIndex = pe.expirationTime, d(de, pe);
        else
          return;
        pe = f(ve);
      }
    }
    function wt(ne) {
      if (Re = !1, fn(ne), !et)
        if (f(de) !== null)
          et = !0, Kn(dn);
        else {
          var pe = f(ve);
          pe !== null && jt(wt, pe.startTime - ne);
        }
    }
    function dn(ne, pe) {
      et = !1, Re && (Re = !1, ca()), Ce = !0;
      var Me = Ee;
      try {
        var nt;
        if (!s) return Hn(ne, pe);
      } finally {
        me = null, Ee = Me, Ce = !1;
      }
    }
    function Hn(ne, pe) {
      var Me = pe;
      for (fn(Me), me = f(de); me !== null && !r && !(me.expirationTime > Me && (!ne || sa())); ) {
        var nt = me.callback;
        if (typeof nt == "function") {
          me.callback = null, Ee = me.priorityLevel;
          var at = me.expirationTime <= Me, Mt = nt(at);
          Me = o.unstable_now(), typeof Mt == "function" ? me.callback = Mt : me === f(de) && c(de), fn(Me);
        } else
          c(de);
        me = f(de);
      }
      if (me !== null)
        return !0;
      var Rt = f(ve);
      return Rt !== null && jt(wt, Rt.startTime - Me), !1;
    }
    function za(ne, pe) {
      switch (ne) {
        case h:
        case b:
        case N:
        case w:
        case R:
          break;
        default:
          ne = N;
      }
      var Me = Ee;
      Ee = ne;
      try {
        return pe();
      } finally {
        Ee = Me;
      }
    }
    function ba(ne) {
      var pe;
      switch (Ee) {
        case h:
        case b:
        case N:
          pe = N;
          break;
        default:
          pe = Ee;
          break;
      }
      var Me = Ee;
      Ee = pe;
      try {
        return ne();
      } finally {
        Ee = Me;
      }
    }
    function xa(ne) {
      var pe = Ee;
      return function() {
        var Me = Ee;
        Ee = pe;
        try {
          return ne.apply(this, arguments);
        } finally {
          Ee = Me;
        }
      };
    }
    function oa(ne, pe, Me) {
      var nt = o.unstable_now(), at;
      if (typeof Me == "object" && Me !== null) {
        var Mt = Me.delay;
        typeof Mt == "number" && Mt > 0 ? at = nt + Mt : at = nt;
      } else
        at = nt;
      var Rt;
      switch (ne) {
        case h:
          Rt = V;
          break;
        case b:
          Rt = I;
          break;
        case R:
          Rt = je;
          break;
        case w:
          Rt = Se;
          break;
        case N:
        default:
          Rt = Q;
          break;
      }
      var Pn = at + Rt, lt = {
        id: qe++,
        callback: pe,
        priorityLevel: ne,
        startTime: at,
        expirationTime: Pn,
        sortIndex: -1
      };
      return at > nt ? (lt.sortIndex = at, d(ve, lt), f(de) === null && lt === f(ve) && (Re ? ca() : Re = !0, jt(wt, at - nt))) : (lt.sortIndex = Pn, d(de, lt), !et && !Ce && (et = !0, Kn(dn))), lt;
    }
    function Zt() {
    }
    function Ln() {
      !et && !Ce && (et = !0, Kn(dn));
    }
    function Bn() {
      return f(de);
    }
    function In(ne) {
      ne.callback = null;
    }
    function kt() {
      return Ee;
    }
    var mn = !1, It = null, Pt = -1, At = l, Yn = -1;
    function sa() {
      var ne = o.unstable_now() - Yn;
      return !(ne < At);
    }
    function _n() {
    }
    function Na(ne) {
      if (ne < 0 || ne > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ne > 0 ? At = Math.floor(1e3 / ne) : At = l;
    }
    var la = function() {
      if (It !== null) {
        var ne = o.unstable_now();
        Yn = ne;
        var pe = !0, Me = !0;
        try {
          Me = It(pe, ne);
        } finally {
          Me ? Cn() : (mn = !1, It = null);
        }
      } else
        mn = !1;
    }, Cn;
    if (typeof Ke == "function")
      Cn = function() {
        Ke(la);
      };
    else if (typeof MessageChannel < "u") {
      var ua = new MessageChannel(), pn = ua.port2;
      ua.port1.onmessage = la, Cn = function() {
        pn.postMessage(null);
      };
    } else
      Cn = function() {
        Qe(la, 0);
      };
    function Kn(ne) {
      It = ne, mn || (mn = !0, Cn());
    }
    function jt(ne, pe) {
      Pt = Qe(function() {
        ne(o.unstable_now());
      }, pe);
    }
    function ca() {
      Dt(Pt), Pt = -1;
    }
    var or = _n, sr = null;
    o.unstable_IdlePriority = R, o.unstable_ImmediatePriority = h, o.unstable_LowPriority = w, o.unstable_NormalPriority = N, o.unstable_Profiling = sr, o.unstable_UserBlockingPriority = b, o.unstable_cancelCallback = In, o.unstable_continueExecution = Ln, o.unstable_forceFrameRate = Na, o.unstable_getCurrentPriorityLevel = kt, o.unstable_getFirstCallbackNode = Bn, o.unstable_next = ba, o.unstable_pauseExecution = Zt, o.unstable_requestPaint = or, o.unstable_runWithPriority = za, o.unstable_scheduleCallback = oa, o.unstable_shouldYield = sa, o.unstable_wrapCallback = xa, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(K0);
Y0.exports = K0;
var hO = Y0.exports;
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
  var o = U, r = hO, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
  function d(e) {
    l = e;
  }
  function f(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      y("warn", e, n);
    }
  }
  function c(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      y("error", e, n);
    }
  }
  function y(e, t, n) {
    {
      var a = s.ReactDebugCurrentFrame, i = a.getStackAddendum();
      i !== "" && (t += "%s", n = n.concat([i]));
      var u = n.map(function(m) {
        return String(m);
      });
      u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var v = 0, p = 1, h = 2, b = 3, N = 4, w = 5, R = 6, M = 7, O = 8, A = 9, P = 10, z = 11, T = 12, V = 13, I = 14, Q = 15, Se = 16, je = 17, de = 18, ve = 19, qe = 21, me = 22, Ee = 23, Ce = 24, et = 25, Re = !0, Qe = !1, Dt = !1, Ke = !1, fn = !1, wt = !0, dn = !1, Hn = !0, za = !0, ba = !0, xa = !0, oa = /* @__PURE__ */ new Set(), Zt = {}, Ln = {};
  function Bn(e, t) {
    In(e, t), In(e + "Capture", t);
  }
  function In(e, t) {
    Zt[e] && c("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Zt[e] = t;
    {
      var n = e.toLowerCase();
      Ln[n] = e, e === "onDoubleClick" && (Ln.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++)
      oa.add(t[a]);
  }
  var kt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mn = Object.prototype.hasOwnProperty;
  function It(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Pt(e) {
    try {
      return At(e), !1;
    } catch {
      return !0;
    }
  }
  function At(e) {
    return "" + e;
  }
  function Yn(e, t) {
    if (Pt(e))
      return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), At(e);
  }
  function sa(e) {
    if (Pt(e))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", It(e)), At(e);
  }
  function _n(e, t) {
    if (Pt(e))
      return c("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), At(e);
  }
  function Na(e, t) {
    if (Pt(e))
      return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), At(e);
  }
  function la(e) {
    if (Pt(e))
      return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", It(e)), At(e);
  }
  function Cn(e) {
    if (Pt(e))
      return c("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", It(e)), At(e);
  }
  var ua = 0, pn = 1, Kn = 2, jt = 3, ca = 4, or = 5, sr = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", pe = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + ne + "][" + pe + "]*$"), nt = {}, at = {};
  function Mt(e) {
    return mn.call(at, e) ? !0 : mn.call(nt, e) ? !1 : Me.test(e) ? (at[e] = !0, !0) : (nt[e] = !0, c("Invalid attribute name: `%s`", e), !1);
  }
  function Rt(e, t, n) {
    return t !== null ? t.type === ua : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Pn(e, t, n, a) {
    if (n !== null && n.type === ua)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (a)
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
  function lt(e, t, n, a) {
    if (t === null || typeof t > "u" || Pn(e, t, n, a))
      return !0;
    if (a)
      return !1;
    if (n !== null)
      switch (n.type) {
        case jt:
          return !t;
        case ca:
          return t === !1;
        case or:
          return isNaN(t);
        case sr:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function Wn(e) {
    return pt.hasOwnProperty(e) ? pt[e] : null;
  }
  function mt(e, t, n, a, i, u, m) {
    this.acceptsBooleans = t === Kn || t === jt || t === ca, this.attributeName = a, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
  }
  var pt = {}, Ja = [
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
  Ja.forEach(function(e) {
    pt[e] = new mt(
      e,
      ua,
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
    pt[t] = new mt(
      t,
      pn,
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
    pt[e] = new mt(
      e,
      Kn,
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
    pt[e] = new mt(
      e,
      Kn,
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
    pt[e] = new mt(
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
    pt[e] = new mt(
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
    pt[e] = new mt(
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
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    pt[e] = new mt(
      e,
      sr,
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
    pt[e] = new mt(
      e,
      or,
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
  var Sa = /[\-\:]([a-z])/g, ji = function(e) {
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
    var t = e.replace(Sa, ji);
    pt[t] = new mt(
      t,
      pn,
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
    var t = e.replace(Sa, ji);
    pt[t] = new mt(
      t,
      pn,
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
    var t = e.replace(Sa, ji);
    pt[t] = new mt(
      t,
      pn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    pt[e] = new mt(
      e,
      pn,
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
  var mo = "xlinkHref";
  pt[mo] = new mt(
    "xlinkHref",
    pn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    pt[e] = new mt(
      e,
      pn,
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
  var Ns = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ri = !1;
  function Ti(e) {
    !Ri && Ns.test(e) && (Ri = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function lr(e, t, n, a) {
    if (a.mustUseProperty) {
      var i = a.propertyName;
      return e[i];
    } else {
      Yn(n, t), a.sanitizeURL && Ti("" + n);
      var u = a.attributeName, m = null;
      if (a.type === ca) {
        if (e.hasAttribute(u)) {
          var g = e.getAttribute(u);
          return g === "" ? !0 : lt(t, n, a, !1) ? g : g === "" + n ? n : g;
        }
      } else if (e.hasAttribute(u)) {
        if (lt(t, n, a, !1))
          return e.getAttribute(u);
        if (a.type === jt)
          return n;
        m = e.getAttribute(u);
      }
      return lt(t, n, a, !1) ? m === null ? n : m : m === "" + n ? n : m;
    }
  }
  function zr(e, t, n, a) {
    {
      if (!Mt(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var i = e.getAttribute(t);
      return Yn(n, t), i === "" + n ? n : i;
    }
  }
  function ur(e, t, n, a) {
    var i = Wn(t);
    if (!Rt(t, i, a)) {
      if (lt(t, n, i, a) && (n = null), a || i === null) {
        if (Mt(t)) {
          var u = t;
          n === null ? e.removeAttribute(u) : (Yn(n, t), e.setAttribute(u, "" + n));
        }
        return;
      }
      var m = i.mustUseProperty;
      if (m) {
        var g = i.propertyName;
        if (n === null) {
          var x = i.type;
          e[g] = x === jt ? !1 : "";
        } else
          e[g] = n;
        return;
      }
      var C = i.attributeName, j = i.attributeNamespace;
      if (n === null)
        e.removeAttribute(C);
      else {
        var _ = i.type, L;
        _ === jt || _ === ca && n === !0 ? L = "" : (Yn(n, C), L = "" + n, i.sanitizeURL && Ti(L.toString())), j ? e.setAttributeNS(j, C, L) : e.setAttribute(C, L);
      }
    }
  }
  var Ha = Symbol.for("react.element"), Ea = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), $e = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), gt = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), Ca = Symbol.for("react.offscreen"), wa = Symbol.for("react.legacy_hidden"), Yt = Symbol.for("react.cache"), Di = Symbol.for("react.tracing_marker"), po = Symbol.iterator, Ss = "@@iterator";
  function cr(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = po && e[po] || e[Ss];
    return typeof t == "function" ? t : null;
  }
  var Fe = Object.assign, ki = 0, Jr, Es, Cs, ws, js, Rs, Ts;
  function Ds() {
  }
  Ds.__reactDisabledLog = !0;
  function Pu() {
    {
      if (ki === 0) {
        Jr = console.log, Es = console.info, Cs = console.warn, ws = console.error, js = console.group, Rs = console.groupCollapsed, Ts = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ds,
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
      ki++;
    }
  }
  function gd() {
    {
      if (ki--, ki === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Fe({}, e, {
            value: Jr
          }),
          info: Fe({}, e, {
            value: Es
          }),
          warn: Fe({}, e, {
            value: Cs
          }),
          error: Fe({}, e, {
            value: ws
          }),
          group: Fe({}, e, {
            value: js
          }),
          groupCollapsed: Fe({}, e, {
            value: Rs
          }),
          groupEnd: Fe({}, e, {
            value: Ts
          })
        });
      }
      ki < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ks = s.ReactCurrentDispatcher, Oi;
  function fa(e, t, n) {
    {
      if (Oi === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          Oi = a && a[1] || "";
        }
      return `
` + Oi + e;
    }
  }
  var Hr = !1, Br;
  {
    var ho = typeof WeakMap == "function" ? WeakMap : Map;
    Br = new ho();
  }
  function Os(e, t) {
    if (!e || Hr)
      return "";
    {
      var n = Br.get(e);
      if (n !== void 0)
        return n;
    }
    var a;
    Hr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = ks.current, ks.current = null, Pu();
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
            a = B;
          }
          Reflect.construct(e, [], m);
        } else {
          try {
            m.call();
          } catch (B) {
            a = B;
          }
          e.call(m.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (B) {
          a = B;
        }
        e();
      }
    } catch (B) {
      if (B && a && typeof B.stack == "string") {
        for (var g = B.stack.split(`
`), x = a.stack.split(`
`), C = g.length - 1, j = x.length - 1; C >= 1 && j >= 0 && g[C] !== x[j]; )
          j--;
        for (; C >= 1 && j >= 0; C--, j--)
          if (g[C] !== x[j]) {
            if (C !== 1 || j !== 1)
              do
                if (C--, j--, j < 0 || g[C] !== x[j]) {
                  var _ = `
` + g[C].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Br.set(e, _), _;
                }
              while (C >= 1 && j >= 0);
            break;
          }
      }
    } finally {
      Hr = !1, ks.current = u, gd(), Error.prepareStackTrace = i;
    }
    var L = e ? e.displayName || e.name : "", J = L ? fa(L) : "";
    return typeof e == "function" && Br.set(e, J), J;
  }
  function Au(e, t, n) {
    return Os(e, !0);
  }
  function Ls(e, t, n) {
    return Os(e, !1);
  }
  function yd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ir(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Os(e, yd(e));
    if (typeof e == "string")
      return fa(e);
    switch (e) {
      case Ae:
        return fa("Suspense");
      case _e:
        return fa("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case we:
          return Ls(e.render);
        case yt:
          return Ir(e.type, t, n);
        case Ve: {
          var a = e, i = a._payload, u = a._init;
          try {
            return Ir(u(i), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function Mu(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case w:
        return fa(e.type);
      case Se:
        return fa("Lazy");
      case V:
        return fa("Suspense");
      case ve:
        return fa("SuspenseList");
      case v:
      case h:
      case Q:
        return Ls(e.type);
      case z:
        return Ls(e.type.render);
      case p:
        return Au(e.type);
      default:
        return "";
    }
  }
  function _s(e) {
    try {
      var t = "", n = e;
      do
        t += Mu(n), n = n.return;
      while (n);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function vo(e, t, n) {
    var a = e.displayName;
    if (a)
      return a;
    var i = t.displayName || t.name || "";
    return i !== "" ? n + "(" + i + ")" : n;
  }
  function Vu(e) {
    return e.displayName || "Context";
  }
  function Ye(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case k:
        return "Fragment";
      case Ea:
        return "Portal";
      case ae:
        return "Profiler";
      case X:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          var t = e;
          return Vu(t) + ".Consumer";
        case ye:
          var n = e;
          return Vu(n._context) + ".Provider";
        case we:
          return vo(e, e.render, "ForwardRef");
        case yt:
          var a = e.displayName || null;
          return a !== null ? a : Ye(e.type) || "Memo";
        case Ve: {
          var i = e, u = i._payload, m = i._init;
          try {
            return Ye(m(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function Ps(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function As(e) {
    return e.displayName || "Context";
  }
  function Le(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case Ce:
        return "Cache";
      case A:
        var a = n;
        return As(a) + ".Consumer";
      case P:
        var i = n;
        return As(i._context) + ".Provider";
      case de:
        return "DehydratedFragment";
      case z:
        return Ps(n, n.render, "ForwardRef");
      case M:
        return "Fragment";
      case w:
        return n;
      case N:
        return "Portal";
      case b:
        return "Root";
      case R:
        return "Text";
      case Se:
        return Ye(n);
      case O:
        return n === X ? "StrictMode" : "Mode";
      case me:
        return "Offscreen";
      case T:
        return "Profiler";
      case qe:
        return "Scope";
      case V:
        return "Suspense";
      case ve:
        return "SuspenseList";
      case et:
        return "TracingMarker";
      case p:
      case v:
      case je:
      case h:
      case I:
      case Q:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Uu = s.ReactDebugCurrentFrame, vn = null, Li = !1;
  function Yr() {
    {
      if (vn === null)
        return null;
      var e = vn._debugOwner;
      if (e !== null && typeof e < "u")
        return Le(e);
    }
    return null;
  }
  function Fu() {
    return vn === null ? "" : _s(vn);
  }
  function Kt() {
    Uu.getCurrentStack = null, vn = null, Li = !1;
  }
  function bt(e) {
    Uu.getCurrentStack = e === null ? null : Fu, vn = e, Li = !1;
  }
  function $u() {
    return vn;
  }
  function Gn(e) {
    Li = e;
  }
  function An(e) {
    return "" + e;
  }
  function Ba(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return Cn(e), e;
      default:
        return "";
    }
  }
  var bd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function go(e, t) {
    bd[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function _i(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zu(e) {
    return e._valueTracker;
  }
  function Kr(e) {
    e._valueTracker = null;
  }
  function Ju(e) {
    var t = "";
    return e && (_i(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Hu(e) {
    var t = _i(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    Cn(e[t]);
    var a = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var i = n.get, u = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(g) {
          Cn(g), a = "" + g, u.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var m = {
        getValue: function() {
          return a;
        },
        setValue: function(g) {
          Cn(g), a = "" + g;
        },
        stopTracking: function() {
          Kr(e), delete e[t];
        }
      };
      return m;
    }
  }
  function fr(e) {
    zu(e) || (e._valueTracker = Hu(e));
  }
  function yo(e) {
    if (!e)
      return !1;
    var t = zu(e);
    if (!t)
      return !0;
    var n = t.getValue(), a = Ju(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function Wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var bo = !1, Bu = !1, Iu = !1, Yu = !1;
  function Ku(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function S(e, t) {
    var n = e, a = t.checked, i = Fe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked
    });
    return i;
  }
  function D(e, t) {
    go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Bu && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component", t.type), Bu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !bo && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component", t.type), bo = !0);
    var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Ba(t.value != null ? t.value : a),
      controlled: Ku(t)
    };
  }
  function H(e, t) {
    var n = e, a = t.checked;
    a != null && ur(n, "checked", a, !1);
  }
  function Y(e, t) {
    var n = e;
    {
      var a = Ku(t);
      !n._wrapperState.controlled && a && !Yu && (c("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), n._wrapperState.controlled && !a && !Iu && (c("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Iu = !0);
    }
    H(e, t);
    var i = Ba(t.value), u = t.type;
    if (i != null)
      u === "number" ? (i === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != i) && (n.value = An(i)) : n.value !== An(i) && (n.value = An(i));
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Te(n, t.type, i) : t.hasOwnProperty("defaultValue") && Te(n, t.type, Ba(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function ee(e, t, n) {
    var a = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type, u = i === "submit" || i === "reset";
      if (u && (t.value === void 0 || t.value === null))
        return;
      var m = An(a._wrapperState.initialValue);
      n || m !== a.value && (a.value = m), a.defaultValue = m;
    }
    var g = a.name;
    g !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, g !== "" && (a.name = g);
  }
  function xe(e, t) {
    var n = e;
    Y(n, t), ce(n, t);
  }
  function ce(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var a = e; a.parentNode; )
        a = a.parentNode;
      Yn(n, "name");
      for (var i = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), u = 0; u < i.length; u++) {
        var m = i[u];
        if (!(m === e || m.form !== e.form)) {
          var g = _c(m);
          if (!g)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          yo(m), Y(m, g);
        }
      }
    }
  }
  function Te(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Wr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = An(e._wrapperState.initialValue) : e.defaultValue !== An(n) && (e.defaultValue = An(n)));
  }
  var ze = !1, rt = !1, ut = !1;
  function ct(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || rt || (rt = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (ut || (ut = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ze && (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ze = !0);
  }
  function ht(e, t) {
    t.value != null && e.setAttribute("value", An(Ba(t.value)));
  }
  var St = Array.isArray;
  function Xe(e) {
    return St(e);
  }
  var Gr;
  Gr = !1;
  function xo() {
    var e = Yr();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Ms = ["value", "defaultValue"];
  function xd(e) {
    {
      go("select", e);
      for (var t = 0; t < Ms.length; t++) {
        var n = Ms[t];
        if (e[n] != null) {
          var a = Xe(e[n]);
          e.multiple && !a ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, xo()) : !e.multiple && a && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, xo());
        }
      }
    }
  }
  function dr(e, t, n, a) {
    var i = e.options;
    if (t) {
      for (var u = n, m = {}, g = 0; g < u.length; g++)
        m["$" + u[g]] = !0;
      for (var x = 0; x < i.length; x++) {
        var C = m.hasOwnProperty("$" + i[x].value);
        i[x].selected !== C && (i[x].selected = C), C && a && (i[x].defaultSelected = !0);
      }
    } else {
      for (var j = An(Ba(n)), _ = null, L = 0; L < i.length; L++) {
        if (i[L].value === j) {
          i[L].selected = !0, a && (i[L].defaultSelected = !0);
          return;
        }
        _ === null && !i[L].disabled && (_ = i[L]);
      }
      _ !== null && (_.selected = !0);
    }
  }
  function Vs(e, t) {
    return Fe({}, t, {
      value: void 0
    });
  }
  function Us(e, t) {
    var n = e;
    xd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Gr && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gr = !0);
  }
  function Nd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null ? dr(n, !!t.multiple, a, !1) : t.defaultValue != null && dr(n, !!t.multiple, t.defaultValue, !0);
  }
  function QS(e, t) {
    var n = e, a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var i = t.value;
    i != null ? dr(n, !!t.multiple, i, !1) : a !== !!t.multiple && (t.defaultValue != null ? dr(n, !!t.multiple, t.defaultValue, !0) : dr(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function XS(e, t) {
    var n = e, a = t.value;
    a != null && dr(n, !!t.multiple, a, !1);
  }
  var Yv = !1;
  function Sd(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var a = Fe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: An(n._wrapperState.initialValue)
    });
    return a;
  }
  function Kv(e, t) {
    var n = e;
    go("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Yv && (c("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component"), Yv = !0);
    var a = t.value;
    if (a == null) {
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
      u == null && (u = ""), a = u;
    }
    n._wrapperState = {
      initialValue: Ba(a)
    };
  }
  function Wv(e, t) {
    var n = e, a = Ba(t.value), i = Ba(t.defaultValue);
    if (a != null) {
      var u = An(a);
      u !== n.value && (n.value = u), t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u);
    }
    i != null && (n.defaultValue = An(i));
  }
  function Gv(e, t) {
    var n = e, a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function ZS(e, t) {
    Wv(e, t);
  }
  var mr = "http://www.w3.org/1999/xhtml", e1 = "http://www.w3.org/1998/Math/MathML", Ed = "http://www.w3.org/2000/svg";
  function Cd(e) {
    switch (e) {
      case "svg":
        return Ed;
      case "math":
        return e1;
      default:
        return mr;
    }
  }
  function wd(e, t) {
    return e == null || e === mr ? Cd(t) : e === Ed && t === "foreignObject" ? mr : e;
  }
  var t1 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, a, i);
      });
    } : e;
  }, Wu, qv = t1(function(e, t) {
    if (e.namespaceURI === Ed && !("innerHTML" in e)) {
      Wu = Wu || document.createElement("div"), Wu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = Wu.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Mn = 1, pr = 3, Ot = 8, hr = 9, jd = 11, Gu = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === pr) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, n1 = {
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
  }, Fs = {
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
  function a1(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var r1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fs).forEach(function(e) {
    r1.forEach(function(t) {
      Fs[a1(t, e)] = Fs[e];
    });
  });
  function Rd(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a ? "" : !n && typeof t == "number" && t !== 0 && !(Fs.hasOwnProperty(e) && Fs[e]) ? t + "px" : (Na(t, e), ("" + t).trim());
  }
  var i1 = /([A-Z])/g, o1 = /^ms-/;
  function s1(e) {
    return e.replace(i1, "-$1").toLowerCase().replace(o1, "-ms-");
  }
  var Qv = function() {
  };
  {
    var l1 = /^(?:webkit|moz|o)[A-Z]/, u1 = /^-ms-/, c1 = /-(.)/g, Xv = /;\s*$/, No = {}, Td = {}, Zv = !1, eg = !1, f1 = function(e) {
      return e.replace(c1, function(t, n) {
        return n.toUpperCase();
      });
    }, d1 = function(e) {
      No.hasOwnProperty(e) && No[e] || (No[e] = !0, c(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        f1(e.replace(u1, "ms-"))
      ));
    }, m1 = function(e) {
      No.hasOwnProperty(e) && No[e] || (No[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, p1 = function(e, t) {
      Td.hasOwnProperty(t) && Td[t] || (Td[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Xv, "")));
    }, h1 = function(e, t) {
      Zv || (Zv = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
    }, v1 = function(e, t) {
      eg || (eg = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    Qv = function(e, t) {
      e.indexOf("-") > -1 ? d1(e) : l1.test(e) ? m1(e) : Xv.test(t) && p1(e, t), typeof t == "number" && (isNaN(t) ? h1(e, t) : isFinite(t) || v1(e, t));
    };
  }
  var g1 = Qv;
  function y1(e) {
    {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var i = e[a];
          if (i != null) {
            var u = a.indexOf("--") === 0;
            t += n + (u ? a : s1(a)) + ":", t += Rd(a, i, u), n = ";";
          }
        }
      return t || null;
    }
  }
  function tg(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var i = a.indexOf("--") === 0;
        i || g1(a, t[a]);
        var u = Rd(a, t[a], i);
        a === "float" && (a = "cssFloat"), i ? n.setProperty(a, u) : n[a] = u;
      }
  }
  function b1(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function ng(e) {
    var t = {};
    for (var n in e)
      for (var a = n1[n] || [n], i = 0; i < a.length; i++)
        t[a[i]] = n;
    return t;
  }
  function x1(e, t) {
    {
      if (!t)
        return;
      var n = ng(e), a = ng(t), i = {};
      for (var u in n) {
        var m = n[u], g = a[u];
        if (g && m !== g) {
          var x = m + "," + g;
          if (i[x])
            continue;
          i[x] = !0, c("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", b1(e[m]) ? "Removing" : "Updating", m, g);
        }
      }
    }
  }
  var N1 = {
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
  }, S1 = Fe({
    menuitem: !0
  }, N1), E1 = "__html";
  function Dd(e, t) {
    if (t) {
      if (S1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(E1 in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Pi(e, t) {
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
  var qu = {
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
  }, ag = {
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
  }, So = {}, C1 = new RegExp("^(aria)-[" + pe + "]*$"), w1 = new RegExp("^(aria)[A-Z][" + pe + "]*$");
  function j1(e, t) {
    {
      if (mn.call(So, t) && So[t])
        return !0;
      if (w1.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), a = ag.hasOwnProperty(n) ? n : null;
        if (a == null)
          return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), So[t] = !0, !0;
        if (t !== a)
          return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), So[t] = !0, !0;
      }
      if (C1.test(t)) {
        var i = t.toLowerCase(), u = ag.hasOwnProperty(i) ? i : null;
        if (u == null)
          return So[t] = !0, !1;
        if (t !== u)
          return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), So[t] = !0, !0;
      }
    }
    return !0;
  }
  function R1(e, t) {
    {
      var n = [];
      for (var a in t) {
        var i = j1(e, a);
        i || n.push(a);
      }
      var u = n.map(function(m) {
        return "`" + m + "`";
      }).join(", ");
      n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function T1(e, t) {
    Pi(e, t) || R1(e, t);
  }
  var rg = !1;
  function D1(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !rg && (rg = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var ig = function() {
  };
  {
    var wn = {}, og = /^on./, k1 = /^on[^A-Z]/, O1 = new RegExp("^(aria)-[" + pe + "]*$"), L1 = new RegExp("^(aria)[A-Z][" + pe + "]*$");
    ig = function(e, t, n, a) {
      if (mn.call(wn, t) && wn[t])
        return !0;
      var i = t.toLowerCase();
      if (i === "onfocusin" || i === "onfocusout")
        return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wn[t] = !0, !0;
      if (a != null) {
        var u = a.registrationNameDependencies, m = a.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var g = m.hasOwnProperty(i) ? m[i] : null;
        if (g != null)
          return c("Invalid event handler property `%s`. Did you mean `%s`?", t, g), wn[t] = !0, !0;
        if (og.test(t))
          return c("Unknown event handler property `%s`. It will be ignored.", t), wn[t] = !0, !0;
      } else if (og.test(t))
        return k1.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wn[t] = !0, !0;
      if (O1.test(t) || L1.test(t))
        return !0;
      if (i === "innerhtml")
        return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wn[t] = !0, !0;
      if (i === "aria")
        return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wn[t] = !0, !0;
      if (i === "is" && n !== null && n !== void 0 && typeof n != "string")
        return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), wn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wn[t] = !0, !0;
      var x = Wn(t), C = x !== null && x.type === ua;
      if (qu.hasOwnProperty(i)) {
        var j = qu[i];
        if (j !== t)
          return c("Invalid DOM property `%s`. Did you mean `%s`?", t, j), wn[t] = !0, !0;
      } else if (!C && t !== i)
        return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), wn[t] = !0, !0;
      return typeof n == "boolean" && Pn(t, n, x, !1) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), wn[t] = !0, !0) : C ? !0 : Pn(t, n, x, !1) ? (wn[t] = !0, !1) : ((n === "false" || n === "true") && x !== null && x.type === jt && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), wn[t] = !0), !0);
    };
  }
  var _1 = function(e, t, n) {
    {
      var a = [];
      for (var i in t) {
        var u = ig(e, i, t[i], n);
        u || a.push(i);
      }
      var m = a.map(function(g) {
        return "`" + g + "`";
      }).join(", ");
      a.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : a.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
    }
  };
  function P1(e, t, n) {
    Pi(e, t) || _1(e, t, n);
  }
  var sg = 1, kd = 2, $s = 4, A1 = sg | kd | $s, zs = null;
  function M1(e) {
    zs !== null && c("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), zs = e;
  }
  function V1() {
    zs === null && c("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), zs = null;
  }
  function U1(e) {
    return e === zs;
  }
  function Od(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === pr ? t.parentNode : t;
  }
  var Ld = null, Eo = null, Co = null;
  function lg(e) {
    var t = ai(e);
    if (t) {
      if (typeof Ld != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var a = _c(n);
        Ld(t.stateNode, t.type, a);
      }
    }
  }
  function F1(e) {
    Ld = e;
  }
  function ug(e) {
    Eo ? Co ? Co.push(e) : Co = [e] : Eo = e;
  }
  function $1() {
    return Eo !== null || Co !== null;
  }
  function cg() {
    if (Eo) {
      var e = Eo, t = Co;
      if (Eo = null, Co = null, lg(e), t)
        for (var n = 0; n < t.length; n++)
          lg(t[n]);
    }
  }
  var fg = function(e, t) {
    return e(t);
  }, dg = function() {
  }, _d = !1;
  function z1() {
    var e = $1();
    e && (dg(), cg());
  }
  function mg(e, t, n) {
    if (_d)
      return e(t, n);
    _d = !0;
    try {
      return fg(e, t, n);
    } finally {
      _d = !1, z1();
    }
  }
  function J1(e, t, n) {
    fg = e, dg = n;
  }
  function H1(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function B1(e, t, n) {
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
        return !!(n.disabled && H1(t));
      default:
        return !1;
    }
  }
  function Js(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var a = _c(n);
    if (a === null)
      return null;
    var i = a[t];
    if (B1(t, e.type, a))
      return null;
    if (i && typeof i != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
    return i;
  }
  var Pd = !1;
  if (kt)
    try {
      var Hs = {};
      Object.defineProperty(Hs, "passive", {
        get: function() {
          Pd = !0;
        }
      }), window.addEventListener("test", Hs, Hs), window.removeEventListener("test", Hs, Hs);
    } catch {
      Pd = !1;
    }
  function pg(e, t, n, a, i, u, m, g, x) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (j) {
      this.onError(j);
    }
  }
  var hg = pg;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Ad = document.createElement("react");
    hg = function(t, n, a, i, u, m, g, x, C) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var j = document.createEvent("Event"), _ = !1, L = !0, J = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
      function K() {
        Ad.removeEventListener(W, he, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = J);
      }
      var re = Array.prototype.slice.call(arguments, 3);
      function he() {
        _ = !0, K(), n.apply(a, re), L = !1;
      }
      var fe, Be = !1, Ue = !1;
      function F($) {
        if (fe = $.error, Be = !0, fe === null && $.colno === 0 && $.lineno === 0 && (Ue = !0), $.defaultPrevented && fe != null && typeof fe == "object")
          try {
            fe._suppressLogging = !0;
          } catch {
          }
      }
      var W = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", F), Ad.addEventListener(W, he, !1), j.initEvent(W, !1, !1), Ad.dispatchEvent(j), B && Object.defineProperty(window, "event", B), _ && L && (Be ? Ue && (fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(fe)), window.removeEventListener("error", F), !_)
        return K(), pg.apply(this, arguments);
    };
  }
  var I1 = hg, wo = !1, Qu = null, Xu = !1, Md = null, Y1 = {
    onError: function(e) {
      wo = !0, Qu = e;
    }
  };
  function Vd(e, t, n, a, i, u, m, g, x) {
    wo = !1, Qu = null, I1.apply(Y1, arguments);
  }
  function K1(e, t, n, a, i, u, m, g, x) {
    if (Vd.apply(this, arguments), wo) {
      var C = Ud();
      Xu || (Xu = !0, Md = C);
    }
  }
  function W1() {
    if (Xu) {
      var e = Md;
      throw Xu = !1, Md = null, e;
    }
  }
  function G1() {
    return wo;
  }
  function Ud() {
    if (wo) {
      var e = Qu;
      return wo = !1, Qu = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function jo(e) {
    return e._reactInternals;
  }
  function q1(e) {
    return e._reactInternals !== void 0;
  }
  function Q1(e, t) {
    e._reactInternals = t;
  }
  var be = (
    /*                      */
    0
  ), Ro = (
    /*                */
    1
  ), Lt = (
    /*                    */
    2
  ), Ie = (
    /*                       */
    4
  ), Ai = (
    /*                */
    16
  ), Bs = (
    /*                 */
    32
  ), Fd = (
    /*                     */
    64
  ), Ze = (
    /*                   */
    128
  ), vr = (
    /*            */
    256
  ), qr = (
    /*                          */
    512
  ), Mi = (
    /*                     */
    1024
  ), ja = (
    /*                      */
    2048
  ), gr = (
    /*                    */
    4096
  ), Vi = (
    /*                   */
    8192
  ), Zu = (
    /*             */
    16384
  ), X1 = ja | Ie | Fd | qr | Mi | Zu, Z1 = (
    /*               */
    32767
  ), Is = (
    /*                   */
    32768
  ), jn = (
    /*                */
    65536
  ), $d = (
    /* */
    131072
  ), vg = (
    /*                       */
    1048576
  ), zd = (
    /*                    */
    2097152
  ), Ui = (
    /*                 */
    4194304
  ), Jd = (
    /*                */
    8388608
  ), yr = (
    /*               */
    16777216
  ), ec = (
    /*              */
    33554432
  ), Hd = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ie | Mi | 0
  ), Bd = Lt | Ie | Ai | Bs | qr | gr | Vi, Ys = Ie | Fd | qr | Vi, To = ja | Ai, br = Ui | Jd | zd, eE = s.ReactCurrentOwner;
  function Fi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var a = t;
      do
        t = a, (t.flags & (Lt | gr)) !== be && (n = t.return), a = t.return;
      while (a);
    }
    return t.tag === b ? n : null;
  }
  function gg(e) {
    if (e.tag === V) {
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
  function yg(e) {
    return e.tag === b ? e.stateNode.containerInfo : null;
  }
  function tE(e) {
    return Fi(e) === e;
  }
  function nE(e) {
    {
      var t = eE.current;
      if (t !== null && t.tag === p) {
        var n = t, a = n.stateNode;
        a._warnedAboutRefsInRender || c("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(n) || "A component"), a._warnedAboutRefsInRender = !0;
      }
    }
    var i = jo(e);
    return i ? Fi(i) === i : !1;
  }
  function bg(e) {
    if (Fi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function xg(e) {
    var t = e.alternate;
    if (!t) {
      var n = Fi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, i = t; ; ) {
      var u = a.return;
      if (u === null)
        break;
      var m = u.alternate;
      if (m === null) {
        var g = u.return;
        if (g !== null) {
          a = i = g;
          continue;
        }
        break;
      }
      if (u.child === m.child) {
        for (var x = u.child; x; ) {
          if (x === a)
            return bg(u), e;
          if (x === i)
            return bg(u), t;
          x = x.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== i.return)
        a = u, i = m;
      else {
        for (var C = !1, j = u.child; j; ) {
          if (j === a) {
            C = !0, a = u, i = m;
            break;
          }
          if (j === i) {
            C = !0, i = u, a = m;
            break;
          }
          j = j.sibling;
        }
        if (!C) {
          for (j = m.child; j; ) {
            if (j === a) {
              C = !0, a = m, i = u;
              break;
            }
            if (j === i) {
              C = !0, i = m, a = u;
              break;
            }
            j = j.sibling;
          }
          if (!C)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (a.alternate !== i)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (a.tag !== b)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function Ng(e) {
    var t = xg(e);
    return t !== null ? Sg(t) : null;
  }
  function Sg(e) {
    if (e.tag === w || e.tag === R)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = Sg(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function aE(e) {
    var t = xg(e);
    return t !== null ? Eg(t) : null;
  }
  function Eg(e) {
    if (e.tag === w || e.tag === R)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== N) {
        var n = Eg(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var Cg = r.unstable_scheduleCallback, rE = r.unstable_cancelCallback, iE = r.unstable_shouldYield, oE = r.unstable_requestPaint, Wt = r.unstable_now, sE = r.unstable_getCurrentPriorityLevel, tc = r.unstable_ImmediatePriority, Id = r.unstable_UserBlockingPriority, $i = r.unstable_NormalPriority, lE = r.unstable_LowPriority, Yd = r.unstable_IdlePriority, uE = r.unstable_yieldValue, cE = r.unstable_setDisableYieldValue, Do = null, gn = null, oe = null, Ia = !1, Ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function fE(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return c("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      za && (e = Fe({}, e, {
        getLaneLabelMap: gE,
        injectProfilingHooks: vE
      })), Do = t.inject(e), gn = t;
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function dE(e, t) {
    if (gn && typeof gn.onScheduleFiberRoot == "function")
      try {
        gn.onScheduleFiberRoot(Do, e, t);
      } catch (n) {
        Ia || (Ia = !0, c("React instrumentation encountered an error: %s", n));
      }
  }
  function mE(e, t) {
    if (gn && typeof gn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Ze) === Ze;
        if (ba) {
          var a;
          switch (t) {
            case Xn:
              a = tc;
              break;
            case Nr:
              a = Id;
              break;
            case Sr:
              a = $i;
              break;
            case lc:
              a = Yd;
              break;
            default:
              a = $i;
              break;
          }
          gn.onCommitFiberRoot(Do, e, a, n);
        }
      } catch (i) {
        Ia || (Ia = !0, c("React instrumentation encountered an error: %s", i));
      }
  }
  function pE(e) {
    if (gn && typeof gn.onPostCommitFiberRoot == "function")
      try {
        gn.onPostCommitFiberRoot(Do, e);
      } catch (t) {
        Ia || (Ia = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function hE(e) {
    if (gn && typeof gn.onCommitFiberUnmount == "function")
      try {
        gn.onCommitFiberUnmount(Do, e);
      } catch (t) {
        Ia || (Ia = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Gt(e) {
    if (typeof uE == "function" && (cE(e), d(e)), gn && typeof gn.setStrictMode == "function")
      try {
        gn.setStrictMode(Do, e);
      } catch (t) {
        Ia || (Ia = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function vE(e) {
    oe = e;
  }
  function gE() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < Wd; n++) {
        var a = VE(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
  }
  function yE(e) {
    oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
  }
  function wg() {
    oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
  }
  function Ks(e) {
    oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
  }
  function ko() {
    oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
  }
  function bE(e) {
    oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
  }
  function xE() {
    oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
  }
  function NE(e) {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
  }
  function SE() {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
  }
  function EE(e) {
    oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
  }
  function CE() {
    oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
  }
  function jg(e) {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
  }
  function Rg() {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
  }
  function wE(e, t, n) {
    oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, n);
  }
  function jE(e, t, n) {
    oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, n);
  }
  function RE(e) {
    oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
  }
  function TE() {
    oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
  }
  function DE(e) {
    oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
  }
  function kE() {
    oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
  }
  function Tg(e) {
    oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
  }
  function OE() {
    oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
  }
  function Dg() {
    oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
  }
  function LE(e) {
    oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
  }
  function _E(e, t) {
    oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
  }
  function Kd(e, t) {
    oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
  }
  var ge = (
    /*                         */
    0
  ), Je = (
    /*                 */
    1
  ), it = (
    /*                    */
    2
  ), Et = (
    /*               */
    8
  ), Ya = (
    /*              */
    16
  ), kg = Math.clz32 ? Math.clz32 : ME, PE = Math.log, AE = Math.LN2;
  function ME(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (PE(t) / AE | 0) | 0;
  }
  var Wd = 31, q = (
    /*                        */
    0
  ), qt = (
    /*                          */
    0
  ), De = (
    /*                        */
    1
  ), Oo = (
    /*    */
    2
  ), xr = (
    /*             */
    4
  ), zi = (
    /*            */
    8
  ), Ka = (
    /*                     */
    16
  ), Ws = (
    /*                */
    32
  ), Lo = (
    /*                       */
    4194240
  ), Gs = (
    /*                        */
    64
  ), Gd = (
    /*                        */
    128
  ), qd = (
    /*                        */
    256
  ), Qd = (
    /*                        */
    512
  ), Xd = (
    /*                        */
    1024
  ), Zd = (
    /*                        */
    2048
  ), em = (
    /*                        */
    4096
  ), tm = (
    /*                        */
    8192
  ), nm = (
    /*                        */
    16384
  ), am = (
    /*                       */
    32768
  ), rm = (
    /*                       */
    65536
  ), im = (
    /*                       */
    131072
  ), om = (
    /*                       */
    262144
  ), sm = (
    /*                       */
    524288
  ), lm = (
    /*                       */
    1048576
  ), um = (
    /*                       */
    2097152
  ), nc = (
    /*                            */
    130023424
  ), _o = (
    /*                             */
    4194304
  ), cm = (
    /*                             */
    8388608
  ), fm = (
    /*                             */
    16777216
  ), dm = (
    /*                             */
    33554432
  ), mm = (
    /*                             */
    67108864
  ), Og = _o, qs = (
    /*          */
    134217728
  ), Lg = (
    /*                          */
    268435455
  ), Qs = (
    /*               */
    268435456
  ), Ji = (
    /*                        */
    536870912
  ), qn = (
    /*                   */
    1073741824
  );
  function VE(e) {
    {
      if (e & De)
        return "Sync";
      if (e & Oo)
        return "InputContinuousHydration";
      if (e & xr)
        return "InputContinuous";
      if (e & zi)
        return "DefaultHydration";
      if (e & Ka)
        return "Default";
      if (e & Ws)
        return "TransitionHydration";
      if (e & Lo)
        return "Transition";
      if (e & nc)
        return "Retry";
      if (e & qs)
        return "SelectiveHydration";
      if (e & Qs)
        return "IdleHydration";
      if (e & Ji)
        return "Idle";
      if (e & qn)
        return "Offscreen";
    }
  }
  var dt = -1, ac = Gs, rc = _o;
  function Xs(e) {
    switch (Hi(e)) {
      case De:
        return De;
      case Oo:
        return Oo;
      case xr:
        return xr;
      case zi:
        return zi;
      case Ka:
        return Ka;
      case Ws:
        return Ws;
      case Gs:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case em:
      case tm:
      case nm:
      case am:
      case rm:
      case im:
      case om:
      case sm:
      case lm:
      case um:
        return e & Lo;
      case _o:
      case cm:
      case fm:
      case dm:
      case mm:
        return e & nc;
      case qs:
        return qs;
      case Qs:
        return Qs;
      case Ji:
        return Ji;
      case qn:
        return qn;
      default:
        return c("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function ic(e, t) {
    var n = e.pendingLanes;
    if (n === q)
      return q;
    var a = q, i = e.suspendedLanes, u = e.pingedLanes, m = n & Lg;
    if (m !== q) {
      var g = m & ~i;
      if (g !== q)
        a = Xs(g);
      else {
        var x = m & u;
        x !== q && (a = Xs(x));
      }
    } else {
      var C = n & ~i;
      C !== q ? a = Xs(C) : u !== q && (a = Xs(u));
    }
    if (a === q)
      return q;
    if (t !== q && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & i) === q) {
      var j = Hi(a), _ = Hi(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        j >= _ || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        j === Ka && (_ & Lo) !== q
      )
        return t;
    }
    (a & xr) !== q && (a |= n & Ka);
    var L = e.entangledLanes;
    if (L !== q)
      for (var J = e.entanglements, B = a & L; B > 0; ) {
        var K = Bi(B), re = 1 << K;
        a |= J[K], B &= ~re;
      }
    return a;
  }
  function UE(e, t) {
    for (var n = e.eventTimes, a = dt; t > 0; ) {
      var i = Bi(t), u = 1 << i, m = n[i];
      m > a && (a = m), t &= ~u;
    }
    return a;
  }
  function FE(e, t) {
    switch (e) {
      case De:
      case Oo:
      case xr:
        return t + 250;
      case zi:
      case Ka:
      case Ws:
      case Gs:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case em:
      case tm:
      case nm:
      case am:
      case rm:
      case im:
      case om:
      case sm:
      case lm:
      case um:
        return t + 5e3;
      case _o:
      case cm:
      case fm:
      case dm:
      case mm:
        return dt;
      case qs:
      case Qs:
      case Ji:
      case qn:
        return dt;
      default:
        return c("Should have found matching lanes. This is a bug in React."), dt;
    }
  }
  function $E(e, t) {
    for (var n = e.pendingLanes, a = e.suspendedLanes, i = e.pingedLanes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Bi(m), x = 1 << g, C = u[g];
      C === dt ? ((x & a) === q || (x & i) !== q) && (u[g] = FE(x, t)) : C <= t && (e.expiredLanes |= x), m &= ~x;
    }
  }
  function zE(e) {
    return Xs(e.pendingLanes);
  }
  function pm(e) {
    var t = e.pendingLanes & ~qn;
    return t !== q ? t : t & qn ? qn : q;
  }
  function JE(e) {
    return (e & De) !== q;
  }
  function hm(e) {
    return (e & Lg) !== q;
  }
  function _g(e) {
    return (e & nc) === e;
  }
  function HE(e) {
    var t = De | xr | Ka;
    return (e & t) === q;
  }
  function BE(e) {
    return (e & Lo) === e;
  }
  function oc(e, t) {
    var n = Oo | xr | zi | Ka;
    return (t & n) !== q;
  }
  function IE(e, t) {
    return (t & e.expiredLanes) !== q;
  }
  function Pg(e) {
    return (e & Lo) !== q;
  }
  function Ag() {
    var e = ac;
    return ac <<= 1, (ac & Lo) === q && (ac = Gs), e;
  }
  function YE() {
    var e = rc;
    return rc <<= 1, (rc & nc) === q && (rc = _o), e;
  }
  function Hi(e) {
    return e & -e;
  }
  function Zs(e) {
    return Hi(e);
  }
  function Bi(e) {
    return 31 - kg(e);
  }
  function vm(e) {
    return Bi(e);
  }
  function Qn(e, t) {
    return (e & t) !== q;
  }
  function Po(e, t) {
    return (e & t) === t;
  }
  function Pe(e, t) {
    return e | t;
  }
  function sc(e, t) {
    return e & ~t;
  }
  function Mg(e, t) {
    return e & t;
  }
  function gA(e) {
    return e;
  }
  function KE(e, t) {
    return e !== qt && e < t ? e : t;
  }
  function gm(e) {
    for (var t = [], n = 0; n < Wd; n++)
      t.push(e);
    return t;
  }
  function el(e, t, n) {
    e.pendingLanes |= t, t !== Ji && (e.suspendedLanes = q, e.pingedLanes = q);
    var a = e.eventTimes, i = vm(t);
    a[i] = n;
  }
  function WE(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var i = Bi(a), u = 1 << i;
      n[i] = dt, a &= ~u;
    }
  }
  function Vg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function GE(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var a = e.entanglements, i = e.eventTimes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Bi(m), x = 1 << g;
      a[g] = q, i[g] = dt, u[g] = dt, m &= ~x;
    }
  }
  function ym(e, t) {
    for (var n = e.entangledLanes |= t, a = e.entanglements, i = n; i; ) {
      var u = Bi(i), m = 1 << u;
      // Is this one of the newly entangled lanes?
      m & t | // Is this lane transitively entangled with the newly entangled lanes?
      a[u] & t && (a[u] |= t), i &= ~m;
    }
  }
  function qE(e, t) {
    var n = Hi(t), a;
    switch (n) {
      case xr:
        a = Oo;
        break;
      case Ka:
        a = zi;
        break;
      case Gs:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case em:
      case tm:
      case nm:
      case am:
      case rm:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case _o:
      case cm:
      case fm:
      case dm:
      case mm:
        a = Ws;
        break;
      case Ji:
        a = Qs;
        break;
      default:
        a = qt;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== qt ? qt : a;
  }
  function Ug(e, t, n) {
    if (Ra)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var i = vm(n), u = 1 << i, m = a[i];
        m.add(t), n &= ~u;
      }
  }
  function Fg(e, t) {
    if (Ra)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var i = vm(t), u = 1 << i, m = n[i];
        m.size > 0 && (m.forEach(function(g) {
          var x = g.alternate;
          (x === null || !a.has(x)) && a.add(g);
        }), m.clear()), t &= ~u;
      }
  }
  function $g(e, t) {
    return null;
  }
  var Xn = De, Nr = xr, Sr = Ka, lc = Ji, tl = qt;
  function Ta() {
    return tl;
  }
  function Qt(e) {
    tl = e;
  }
  function QE(e, t) {
    var n = tl;
    try {
      return tl = e, t();
    } finally {
      tl = n;
    }
  }
  function XE(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function ZE(e, t) {
    return e > t ? e : t;
  }
  function bm(e, t) {
    return e !== 0 && e < t;
  }
  function zg(e) {
    var t = Hi(e);
    return bm(Xn, t) ? bm(Nr, t) ? hm(t) ? Sr : lc : Nr : Xn;
  }
  function uc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var Jg;
  function eC(e) {
    Jg = e;
  }
  function tC(e) {
    Jg(e);
  }
  var xm;
  function nC(e) {
    xm = e;
  }
  var Hg;
  function aC(e) {
    Hg = e;
  }
  var Bg;
  function rC(e) {
    Bg = e;
  }
  var Ig;
  function iC(e) {
    Ig = e;
  }
  var Nm = !1, cc = [], Qr = null, Xr = null, Zr = null, nl = /* @__PURE__ */ new Map(), al = /* @__PURE__ */ new Map(), ei = [], oC = [
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
  function sC(e) {
    return oC.indexOf(e) > -1;
  }
  function lC(e, t, n, a, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    };
  }
  function Yg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Zr = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        nl.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        al.delete(a);
        break;
      }
    }
  }
  function rl(e, t, n, a, i, u) {
    if (e === null || e.nativeEvent !== u) {
      var m = lC(t, n, a, i, u);
      if (t !== null) {
        var g = ai(t);
        g !== null && xm(g);
      }
      return m;
    }
    e.eventSystemFlags |= a;
    var x = e.targetContainers;
    return i !== null && x.indexOf(i) === -1 && x.push(i), e;
  }
  function uC(e, t, n, a, i) {
    switch (t) {
      case "focusin": {
        var u = i;
        return Qr = rl(Qr, e, t, n, a, u), !0;
      }
      case "dragenter": {
        var m = i;
        return Xr = rl(Xr, e, t, n, a, m), !0;
      }
      case "mouseover": {
        var g = i;
        return Zr = rl(Zr, e, t, n, a, g), !0;
      }
      case "pointerover": {
        var x = i, C = x.pointerId;
        return nl.set(C, rl(nl.get(C) || null, e, t, n, a, x)), !0;
      }
      case "gotpointercapture": {
        var j = i, _ = j.pointerId;
        return al.set(_, rl(al.get(_) || null, e, t, n, a, j)), !0;
      }
    }
    return !1;
  }
  function Kg(e) {
    var t = Ki(e.target);
    if (t !== null) {
      var n = Fi(t);
      if (n !== null) {
        var a = n.tag;
        if (a === V) {
          var i = gg(n);
          if (i !== null) {
            e.blockedOn = i, Ig(e.priority, function() {
              Hg(n);
            });
            return;
          }
        } else if (a === b) {
          var u = n.stateNode;
          if (uc(u)) {
            e.blockedOn = yg(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function cC(e) {
    for (var t = Bg(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, a = 0; a < ei.length && bm(t, ei[a].priority); a++)
      ;
    ei.splice(a, 0, n), a === 0 && Kg(n);
  }
  function fc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], a = Cm(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var i = e.nativeEvent, u = new i.constructor(i.type, i);
        M1(u), i.target.dispatchEvent(u), V1();
      } else {
        var m = ai(a);
        return m !== null && xm(m), e.blockedOn = a, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Wg(e, t, n) {
    fc(e) && n.delete(t);
  }
  function fC() {
    Nm = !1, Qr !== null && fc(Qr) && (Qr = null), Xr !== null && fc(Xr) && (Xr = null), Zr !== null && fc(Zr) && (Zr = null), nl.forEach(Wg), al.forEach(Wg);
  }
  function il(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nm || (Nm = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, fC)));
  }
  function ol(e) {
    if (cc.length > 0) {
      il(cc[0], e);
      for (var t = 1; t < cc.length; t++) {
        var n = cc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Qr !== null && il(Qr, e), Xr !== null && il(Xr, e), Zr !== null && il(Zr, e);
    var a = function(g) {
      return il(g, e);
    };
    nl.forEach(a), al.forEach(a);
    for (var i = 0; i < ei.length; i++) {
      var u = ei[i];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; ei.length > 0; ) {
      var m = ei[0];
      if (m.blockedOn !== null)
        break;
      Kg(m), m.blockedOn === null && ei.shift();
    }
  }
  var Ao = s.ReactCurrentBatchConfig, Sm = !0;
  function Gg(e) {
    Sm = !!e;
  }
  function dC() {
    return Sm;
  }
  function mC(e, t, n) {
    var a = qg(t), i;
    switch (a) {
      case Xn:
        i = pC;
        break;
      case Nr:
        i = hC;
        break;
      case Sr:
      default:
        i = Em;
        break;
    }
    return i.bind(null, t, n, e);
  }
  function pC(e, t, n, a) {
    var i = Ta(), u = Ao.transition;
    Ao.transition = null;
    try {
      Qt(Xn), Em(e, t, n, a);
    } finally {
      Qt(i), Ao.transition = u;
    }
  }
  function hC(e, t, n, a) {
    var i = Ta(), u = Ao.transition;
    Ao.transition = null;
    try {
      Qt(Nr), Em(e, t, n, a);
    } finally {
      Qt(i), Ao.transition = u;
    }
  }
  function Em(e, t, n, a) {
    Sm && vC(e, t, n, a);
  }
  function vC(e, t, n, a) {
    var i = Cm(e, t, n, a);
    if (i === null) {
      Um(e, t, a, dc, n), Yg(e, a);
      return;
    }
    if (uC(i, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if (Yg(e, a), t & $s && sC(e)) {
      for (; i !== null; ) {
        var u = ai(i);
        u !== null && tC(u);
        var m = Cm(e, t, n, a);
        if (m === null && Um(e, t, a, dc, n), m === i)
          break;
        i = m;
      }
      i !== null && a.stopPropagation();
      return;
    }
    Um(e, t, a, null, n);
  }
  var dc = null;
  function Cm(e, t, n, a) {
    dc = null;
    var i = Od(a), u = Ki(i);
    if (u !== null) {
      var m = Fi(u);
      if (m === null)
        u = null;
      else {
        var g = m.tag;
        if (g === V) {
          var x = gg(m);
          if (x !== null)
            return x;
          u = null;
        } else if (g === b) {
          var C = m.stateNode;
          if (uc(C))
            return yg(m);
          u = null;
        } else m !== u && (u = null);
      }
    }
    return dc = u, null;
  }
  function qg(e) {
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
        return Xn;
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
        return Nr;
      case "message": {
        var t = sE();
        switch (t) {
          case tc:
            return Xn;
          case Id:
            return Nr;
          case $i:
          case lE:
            return Sr;
          case Yd:
            return lc;
          default:
            return Sr;
        }
      }
      default:
        return Sr;
    }
  }
  function gC(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function yC(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function bC(e, t, n, a) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }), n;
  }
  function xC(e, t, n, a) {
    return e.addEventListener(t, n, {
      passive: a
    }), n;
  }
  var sl = null, wm = null, ll = null;
  function NC(e) {
    return sl = e, wm = Xg(), !0;
  }
  function SC() {
    sl = null, wm = null, ll = null;
  }
  function Qg() {
    if (ll)
      return ll;
    var e, t = wm, n = t.length, a, i = Xg(), u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var m = n - e;
    for (a = 1; a <= m && t[n - a] === i[u - a]; a++)
      ;
    var g = a > 1 ? 1 - a : void 0;
    return ll = i.slice(e, g), ll;
  }
  function Xg() {
    return "value" in sl ? sl.value : sl.textContent;
  }
  function mc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function pc() {
    return !0;
  }
  function Zg() {
    return !1;
  }
  function Zn(e) {
    function t(n, a, i, u, m) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var g in e)
        if (e.hasOwnProperty(g)) {
          var x = e[g];
          x ? this[g] = x(u) : this[g] = u[g];
        }
      var C = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return C ? this.isDefaultPrevented = pc : this.isDefaultPrevented = Zg, this.isPropagationStopped = Zg, this;
    }
    return Fe(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pc);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pc);
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
      isPersistent: pc
    }), t;
  }
  var Mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jm = Zn(Mo), ul = Fe({}, Mo, {
    view: 0,
    detail: 0
  }), EC = Zn(ul), Rm, Tm, cl;
  function CC(e) {
    e !== cl && (cl && e.type === "mousemove" ? (Rm = e.screenX - cl.screenX, Tm = e.screenY - cl.screenY) : (Rm = 0, Tm = 0), cl = e);
  }
  var hc = Fe({}, ul, {
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
    getModifierState: km,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (CC(e), Rm);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Tm;
    }
  }), ey = Zn(hc), wC = Fe({}, hc, {
    dataTransfer: 0
  }), jC = Zn(wC), RC = Fe({}, ul, {
    relatedTarget: 0
  }), Dm = Zn(RC), TC = Fe({}, Mo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), DC = Zn(TC), kC = Fe({}, Mo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), OC = Zn(kC), LC = Fe({}, Mo, {
    data: 0
  }), ty = Zn(LC), _C = ty, PC = {
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
  }, AC = {
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
  function MC(e) {
    if (e.key) {
      var t = PC[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = mc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? AC[e.keyCode] || "Unidentified" : "";
  }
  var VC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function UC(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var a = VC[e];
    return a ? !!n[a] : !1;
  }
  function km(e) {
    return UC;
  }
  var FC = Fe({}, ul, {
    key: MC,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: km,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? mc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? mc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), $C = Zn(FC), zC = Fe({}, hc, {
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
  }), ny = Zn(zC), JC = Fe({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: km
  }), HC = Zn(JC), BC = Fe({}, Mo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), IC = Zn(BC), YC = Fe({}, hc, {
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
  }), KC = Zn(YC), WC = [9, 13, 27, 32], ay = 229, Om = kt && "CompositionEvent" in window, fl = null;
  kt && "documentMode" in document && (fl = document.documentMode);
  var GC = kt && "TextEvent" in window && !fl, ry = kt && (!Om || fl && fl > 8 && fl <= 11), iy = 32, oy = String.fromCharCode(iy);
  function qC() {
    Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Bn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var sy = !1;
  function QC(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function XC(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function ZC(e, t) {
    return e === "keydown" && t.keyCode === ay;
  }
  function ly(e, t) {
    switch (e) {
      case "keyup":
        return WC.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== ay;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uy(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function cy(e) {
    return e.locale === "ko";
  }
  var Vo = !1;
  function ew(e, t, n, a, i) {
    var u, m;
    if (Om ? u = XC(t) : Vo ? ly(t, a) && (u = "onCompositionEnd") : ZC(t, a) && (u = "onCompositionStart"), !u)
      return null;
    ry && !cy(a) && (!Vo && u === "onCompositionStart" ? Vo = NC(i) : u === "onCompositionEnd" && Vo && (m = Qg()));
    var g = xc(n, u);
    if (g.length > 0) {
      var x = new ty(u, t, null, a, i);
      if (e.push({
        event: x,
        listeners: g
      }), m)
        x.data = m;
      else {
        var C = uy(a);
        C !== null && (x.data = C);
      }
    }
  }
  function tw(e, t) {
    switch (e) {
      case "compositionend":
        return uy(t);
      case "keypress":
        var n = t.which;
        return n !== iy ? null : (sy = !0, oy);
      case "textInput":
        var a = t.data;
        return a === oy && sy ? null : a;
      default:
        return null;
    }
  }
  function nw(e, t) {
    if (Vo) {
      if (e === "compositionend" || !Om && ly(e, t)) {
        var n = Qg();
        return SC(), Vo = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!QC(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ry && !cy(t) ? null : t.data;
      default:
        return null;
    }
  }
  function aw(e, t, n, a, i) {
    var u;
    if (GC ? u = tw(t, a) : u = nw(t, a), !u)
      return null;
    var m = xc(n, "onBeforeInput");
    if (m.length > 0) {
      var g = new _C("onBeforeInput", "beforeinput", null, a, i);
      e.push({
        event: g,
        listeners: m
      }), g.data = u;
    }
  }
  function rw(e, t, n, a, i, u, m) {
    ew(e, t, n, a, i), aw(e, t, n, a, i);
  }
  var iw = {
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
  function fy(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!iw[e.type] : t === "textarea";
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
  function ow(e) {
    if (!kt)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    }
    return n;
  }
  function sw() {
    Bn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function dy(e, t, n, a) {
    ug(a);
    var i = xc(t, "onChange");
    if (i.length > 0) {
      var u = new jm("onChange", "change", null, n, a);
      e.push({
        event: u,
        listeners: i
      });
    }
  }
  var dl = null, ml = null;
  function lw(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function uw(e) {
    var t = [];
    dy(t, ml, e, Od(e)), mg(cw, t);
  }
  function cw(e) {
    ky(e, 0);
  }
  function vc(e) {
    var t = Ho(e);
    if (yo(t))
      return e;
  }
  function fw(e, t) {
    if (e === "change")
      return t;
  }
  var my = !1;
  kt && (my = ow("input") && (!document.documentMode || document.documentMode > 9));
  function dw(e, t) {
    dl = e, ml = t, dl.attachEvent("onpropertychange", hy);
  }
  function py() {
    dl && (dl.detachEvent("onpropertychange", hy), dl = null, ml = null);
  }
  function hy(e) {
    e.propertyName === "value" && vc(ml) && uw(e);
  }
  function mw(e, t, n) {
    e === "focusin" ? (py(), dw(t, n)) : e === "focusout" && py();
  }
  function pw(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vc(ml);
  }
  function hw(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function vw(e, t) {
    if (e === "click")
      return vc(t);
  }
  function gw(e, t) {
    if (e === "input" || e === "change")
      return vc(t);
  }
  function yw(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Te(e, "number", e.value);
  }
  function bw(e, t, n, a, i, u, m) {
    var g = n ? Ho(n) : window, x, C;
    if (lw(g) ? x = fw : fy(g) ? my ? x = gw : (x = pw, C = mw) : hw(g) && (x = vw), x) {
      var j = x(t, n);
      if (j) {
        dy(e, j, a, i);
        return;
      }
    }
    C && C(t, g, n), t === "focusout" && yw(g);
  }
  function xw() {
    In("onMouseEnter", ["mouseout", "mouseover"]), In("onMouseLeave", ["mouseout", "mouseover"]), In("onPointerEnter", ["pointerout", "pointerover"]), In("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function Nw(e, t, n, a, i, u, m) {
    var g = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
    if (g && !U1(a)) {
      var C = a.relatedTarget || a.fromElement;
      if (C && (Ki(C) || Tl(C)))
        return;
    }
    if (!(!x && !g)) {
      var j;
      if (i.window === i)
        j = i;
      else {
        var _ = i.ownerDocument;
        _ ? j = _.defaultView || _.parentWindow : j = window;
      }
      var L, J;
      if (x) {
        var B = a.relatedTarget || a.toElement;
        if (L = n, J = B ? Ki(B) : null, J !== null) {
          var K = Fi(J);
          (J !== K || J.tag !== w && J.tag !== R) && (J = null);
        }
      } else
        L = null, J = n;
      if (L !== J) {
        var re = ey, he = "onMouseLeave", fe = "onMouseEnter", Be = "mouse";
        (t === "pointerout" || t === "pointerover") && (re = ny, he = "onPointerLeave", fe = "onPointerEnter", Be = "pointer");
        var Ue = L == null ? j : Ho(L), F = J == null ? j : Ho(J), W = new re(he, Be + "leave", L, a, i);
        W.target = Ue, W.relatedTarget = F;
        var $ = null, Z = Ki(i);
        if (Z === n) {
          var le = new re(fe, Be + "enter", J, a, i);
          le.target = F, le.relatedTarget = Ue, $ = le;
        }
        Iw(e, W, $, L, J);
      }
    }
  }
  function Sw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ea = typeof Object.is == "function" ? Object.is : Sw;
  function pl(e, t) {
    if (ea(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length)
      return !1;
    for (var i = 0; i < n.length; i++) {
      var u = n[i];
      if (!mn.call(t, u) || !ea(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function vy(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Ew(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function gy(e, t) {
    for (var n = vy(e), a = 0, i = 0; n; ) {
      if (n.nodeType === pr) {
        if (i = a + n.textContent.length, a <= t && i >= t)
          return {
            node: n,
            offset: t - a
          };
        a = i;
      }
      n = vy(Ew(n));
    }
  }
  function Cw(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0)
      return null;
    var i = a.anchorNode, u = a.anchorOffset, m = a.focusNode, g = a.focusOffset;
    try {
      i.nodeType, m.nodeType;
    } catch {
      return null;
    }
    return ww(e, i, u, m, g);
  }
  function ww(e, t, n, a, i) {
    var u = 0, m = -1, g = -1, x = 0, C = 0, j = e, _ = null;
    e: for (; ; ) {
      for (var L = null; j === t && (n === 0 || j.nodeType === pr) && (m = u + n), j === a && (i === 0 || j.nodeType === pr) && (g = u + i), j.nodeType === pr && (u += j.nodeValue.length), (L = j.firstChild) !== null; )
        _ = j, j = L;
      for (; ; ) {
        if (j === e)
          break e;
        if (_ === t && ++x === n && (m = u), _ === a && ++C === i && (g = u), (L = j.nextSibling) !== null)
          break;
        j = _, _ = j.parentNode;
      }
      j = L;
    }
    return m === -1 || g === -1 ? null : {
      start: m,
      end: g
    };
  }
  function jw(e, t) {
    var n = e.ownerDocument || document, a = n && n.defaultView || window;
    if (a.getSelection) {
      var i = a.getSelection(), u = e.textContent.length, m = Math.min(t.start, u), g = t.end === void 0 ? m : Math.min(t.end, u);
      if (!i.extend && m > g) {
        var x = g;
        g = m, m = x;
      }
      var C = gy(e, m), j = gy(e, g);
      if (C && j) {
        if (i.rangeCount === 1 && i.anchorNode === C.node && i.anchorOffset === C.offset && i.focusNode === j.node && i.focusOffset === j.offset)
          return;
        var _ = n.createRange();
        _.setStart(C.node, C.offset), i.removeAllRanges(), m > g ? (i.addRange(_), i.extend(j.node, j.offset)) : (_.setEnd(j.node, j.offset), i.addRange(_));
      }
    }
  }
  function yy(e) {
    return e && e.nodeType === pr;
  }
  function by(e, t) {
    return !e || !t ? !1 : e === t ? !0 : yy(e) ? !1 : yy(t) ? by(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function Rw(e) {
    return e && e.ownerDocument && by(e.ownerDocument.documentElement, e);
  }
  function Tw(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function xy() {
    for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
      if (Tw(t))
        e = t.contentWindow;
      else
        return t;
      t = Wr(e.document);
    }
    return t;
  }
  function Lm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Dw() {
    var e = xy();
    return {
      focusedElem: e,
      selectionRange: Lm(e) ? Ow(e) : null
    };
  }
  function kw(e) {
    var t = xy(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && Rw(n)) {
      a !== null && Lm(n) && Lw(n, a);
      for (var i = [], u = n; u = u.parentNode; )
        u.nodeType === Mn && i.push({
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
  function Ow(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = Cw(e), t || {
      start: 0,
      end: 0
    };
  }
  function Lw(e, t) {
    var n = t.start, a = t.end;
    a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : jw(e, t);
  }
  var _w = kt && "documentMode" in document && document.documentMode <= 11;
  function Pw() {
    Bn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var Uo = null, _m = null, hl = null, Pm = !1;
  function Aw(e) {
    if ("selectionStart" in e && Lm(e))
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
  function Mw(e) {
    return e.window === e ? e.document : e.nodeType === hr ? e : e.ownerDocument;
  }
  function Ny(e, t, n) {
    var a = Mw(n);
    if (!(Pm || Uo == null || Uo !== Wr(a))) {
      var i = Aw(Uo);
      if (!hl || !pl(hl, i)) {
        hl = i;
        var u = xc(_m, "onSelect");
        if (u.length > 0) {
          var m = new jm("onSelect", "select", null, t, n);
          e.push({
            event: m,
            listeners: u
          }), m.target = Uo;
        }
      }
    }
  }
  function Vw(e, t, n, a, i, u, m) {
    var g = n ? Ho(n) : window;
    switch (t) {
      case "focusin":
        (fy(g) || g.contentEditable === "true") && (Uo = g, _m = n, hl = null);
        break;
      case "focusout":
        Uo = null, _m = null, hl = null;
        break;
      case "mousedown":
        Pm = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Pm = !1, Ny(e, a, i);
        break;
      case "selectionchange":
        if (_w)
          break;
      case "keydown":
      case "keyup":
        Ny(e, a, i);
    }
  }
  function gc(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Fo = {
    animationend: gc("Animation", "AnimationEnd"),
    animationiteration: gc("Animation", "AnimationIteration"),
    animationstart: gc("Animation", "AnimationStart"),
    transitionend: gc("Transition", "TransitionEnd")
  }, Am = {}, Sy = {};
  kt && (Sy = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function yc(e) {
    if (Am[e])
      return Am[e];
    if (!Fo[e])
      return e;
    var t = Fo[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in Sy)
        return Am[e] = t[n];
    return e;
  }
  var Ey = yc("animationend"), Cy = yc("animationiteration"), wy = yc("animationstart"), jy = yc("transitionend"), Ry = /* @__PURE__ */ new Map(), Ty = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function ti(e, t) {
    Ry.set(e, t), Bn(t, [e]);
  }
  function Uw() {
    for (var e = 0; e < Ty.length; e++) {
      var t = Ty[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
      ti(n, "on" + a);
    }
    ti(Ey, "onAnimationEnd"), ti(Cy, "onAnimationIteration"), ti(wy, "onAnimationStart"), ti("dblclick", "onDoubleClick"), ti("focusin", "onFocus"), ti("focusout", "onBlur"), ti(jy, "onTransitionEnd");
  }
  function Fw(e, t, n, a, i, u, m) {
    var g = Ry.get(t);
    if (g !== void 0) {
      var x = jm, C = t;
      switch (t) {
        case "keypress":
          if (mc(a) === 0)
            return;
        case "keydown":
        case "keyup":
          x = $C;
          break;
        case "focusin":
          C = "focus", x = Dm;
          break;
        case "focusout":
          C = "blur", x = Dm;
          break;
        case "beforeblur":
        case "afterblur":
          x = Dm;
          break;
        case "click":
          if (a.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          x = ey;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          x = jC;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          x = HC;
          break;
        case Ey:
        case Cy:
        case wy:
          x = DC;
          break;
        case jy:
          x = IC;
          break;
        case "scroll":
          x = EC;
          break;
        case "wheel":
          x = KC;
          break;
        case "copy":
        case "cut":
        case "paste":
          x = OC;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          x = ny;
          break;
      }
      var j = (u & $s) !== 0;
      {
        var _ = !j && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", L = Hw(n, g, a.type, j, _);
        if (L.length > 0) {
          var J = new x(g, C, null, a, i);
          e.push({
            event: J,
            listeners: L
          });
        }
      }
    }
  }
  Uw(), xw(), sw(), Pw(), qC();
  function $w(e, t, n, a, i, u, m) {
    Fw(e, t, n, a, i, u);
    var g = (u & A1) === 0;
    g && (Nw(e, t, n, a, i), bw(e, t, n, a, i), Vw(e, t, n, a, i), rw(e, t, n, a, i));
  }
  var vl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Mm = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(vl));
  function Dy(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, K1(a, t, void 0, e), e.currentTarget = null;
  }
  function zw(e, t, n) {
    var a;
    if (n)
      for (var i = t.length - 1; i >= 0; i--) {
        var u = t[i], m = u.instance, g = u.currentTarget, x = u.listener;
        if (m !== a && e.isPropagationStopped())
          return;
        Dy(e, x, g), a = m;
      }
    else
      for (var C = 0; C < t.length; C++) {
        var j = t[C], _ = j.instance, L = j.currentTarget, J = j.listener;
        if (_ !== a && e.isPropagationStopped())
          return;
        Dy(e, J, L), a = _;
      }
  }
  function ky(e, t) {
    for (var n = (t & $s) !== 0, a = 0; a < e.length; a++) {
      var i = e[a], u = i.event, m = i.listeners;
      zw(u, m, n);
    }
    W1();
  }
  function Jw(e, t, n, a, i) {
    var u = Od(n), m = [];
    $w(m, e, a, n, u, t), ky(m, t);
  }
  function vt(e, t) {
    Mm.has(e) || c('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, a = yR(t), i = Yw(e);
    a.has(i) || (Oy(t, e, kd, n), a.add(i));
  }
  function Vm(e, t, n) {
    Mm.has(e) && !t && c('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var a = 0;
    t && (a |= $s), Oy(n, e, a, t);
  }
  var bc = "_reactListening" + Math.random().toString(36).slice(2);
  function gl(e) {
    if (!e[bc]) {
      e[bc] = !0, oa.forEach(function(n) {
        n !== "selectionchange" && (Mm.has(n) || Vm(n, !1, e), Vm(n, !0, e));
      });
      var t = e.nodeType === hr ? e : e.ownerDocument;
      t !== null && (t[bc] || (t[bc] = !0, Vm("selectionchange", !1, t)));
    }
  }
  function Oy(e, t, n, a, i) {
    var u = mC(e, t, n), m = void 0;
    Pd && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, a ? m !== void 0 ? bC(e, t, u, m) : yC(e, t, u) : m !== void 0 ? xC(e, t, u, m) : gC(e, t, u);
  }
  function Ly(e, t) {
    return e === t || e.nodeType === Ot && e.parentNode === t;
  }
  function Um(e, t, n, a, i) {
    var u = a;
    if (!(t & sg) && !(t & kd)) {
      var m = i;
      if (a !== null) {
        var g = a;
        e: for (; ; ) {
          if (g === null)
            return;
          var x = g.tag;
          if (x === b || x === N) {
            var C = g.stateNode.containerInfo;
            if (Ly(C, m))
              break;
            if (x === N)
              for (var j = g.return; j !== null; ) {
                var _ = j.tag;
                if (_ === b || _ === N) {
                  var L = j.stateNode.containerInfo;
                  if (Ly(L, m))
                    return;
                }
                j = j.return;
              }
            for (; C !== null; ) {
              var J = Ki(C);
              if (J === null)
                return;
              var B = J.tag;
              if (B === w || B === R) {
                g = u = J;
                continue e;
              }
              C = C.parentNode;
            }
          }
          g = g.return;
        }
      }
    }
    mg(function() {
      return Jw(e, t, n, u);
    });
  }
  function yl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Hw(e, t, n, a, i, u) {
    for (var m = t !== null ? t + "Capture" : null, g = a ? m : t, x = [], C = e, j = null; C !== null; ) {
      var _ = C, L = _.stateNode, J = _.tag;
      if (J === w && L !== null && (j = L, g !== null)) {
        var B = Js(C, g);
        B != null && x.push(yl(C, B, j));
      }
      if (i)
        break;
      C = C.return;
    }
    return x;
  }
  function xc(e, t) {
    for (var n = t + "Capture", a = [], i = e; i !== null; ) {
      var u = i, m = u.stateNode, g = u.tag;
      if (g === w && m !== null) {
        var x = m, C = Js(i, n);
        C != null && a.unshift(yl(i, C, x));
        var j = Js(i, t);
        j != null && a.push(yl(i, j, x));
      }
      i = i.return;
    }
    return a;
  }
  function $o(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== w);
    return e || null;
  }
  function Bw(e, t) {
    for (var n = e, a = t, i = 0, u = n; u; u = $o(u))
      i++;
    for (var m = 0, g = a; g; g = $o(g))
      m++;
    for (; i - m > 0; )
      n = $o(n), i--;
    for (; m - i > 0; )
      a = $o(a), m--;
    for (var x = i; x--; ) {
      if (n === a || a !== null && n === a.alternate)
        return n;
      n = $o(n), a = $o(a);
    }
    return null;
  }
  function _y(e, t, n, a, i) {
    for (var u = t._reactName, m = [], g = n; g !== null && g !== a; ) {
      var x = g, C = x.alternate, j = x.stateNode, _ = x.tag;
      if (C !== null && C === a)
        break;
      if (_ === w && j !== null) {
        var L = j;
        if (i) {
          var J = Js(g, u);
          J != null && m.unshift(yl(g, J, L));
        } else if (!i) {
          var B = Js(g, u);
          B != null && m.push(yl(g, B, L));
        }
      }
      g = g.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  function Iw(e, t, n, a, i) {
    var u = a && i ? Bw(a, i) : null;
    a !== null && _y(e, t, a, u, !1), i !== null && n !== null && _y(e, n, i, u, !0);
  }
  function Yw(e, t) {
    return e + "__bubble";
  }
  var Vn = !1, bl = "dangerouslySetInnerHTML", Nc = "suppressContentEditableWarning", ni = "suppressHydrationWarning", Py = "autoFocus", Ii = "children", Yi = "style", Sc = "__html", Fm, Ec, xl, Ay, Cc, My, Vy;
  Fm = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Ec = function(e, t) {
    T1(e, t), D1(e, t), P1(e, t, {
      registrationNameDependencies: Zt,
      possibleRegistrationNames: Ln
    });
  }, My = kt && !document.documentMode, xl = function(e, t, n) {
    if (!Vn) {
      var a = wc(n), i = wc(t);
      i !== a && (Vn = !0, c("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(i), JSON.stringify(a)));
    }
  }, Ay = function(e) {
    if (!Vn) {
      Vn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), c("Extra attributes from the server: %s", t);
    }
  }, Cc = function(e, t) {
    t === !1 ? c("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : c("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Vy = function(e, t) {
    var n = e.namespaceURI === mr ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var Kw = /\r\n?/g, Ww = /\u0000|\uFFFD/g;
  function wc(e) {
    la(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(Kw, `
`).replace(Ww, "");
  }
  function jc(e, t, n, a) {
    var i = wc(t), u = wc(e);
    if (u !== i && (a && (Vn || (Vn = !0, c('Text content did not match. Server: "%s" Client: "%s"', u, i))), n && Re))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function Uy(e) {
    return e.nodeType === hr ? e : e.ownerDocument;
  }
  function Gw() {
  }
  function Rc(e) {
    e.onclick = Gw;
  }
  function qw(e, t, n, a, i) {
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var m = a[u];
        if (u === Yi)
          m && Object.freeze(m), tg(t, m);
        else if (u === bl) {
          var g = m ? m[Sc] : void 0;
          g != null && qv(t, g);
        } else if (u === Ii)
          if (typeof m == "string") {
            var x = e !== "textarea" || m !== "";
            x && Gu(t, m);
          } else typeof m == "number" && Gu(t, "" + m);
        else u === Nc || u === ni || u === Py || (Zt.hasOwnProperty(u) ? m != null && (typeof m != "function" && Cc(u, m), u === "onScroll" && vt("scroll", t)) : m != null && ur(t, u, m, i));
      }
  }
  function Qw(e, t, n, a) {
    for (var i = 0; i < t.length; i += 2) {
      var u = t[i], m = t[i + 1];
      u === Yi ? tg(e, m) : u === bl ? qv(e, m) : u === Ii ? Gu(e, m) : ur(e, u, m, a);
    }
  }
  function Xw(e, t, n, a) {
    var i, u = Uy(n), m, g = a;
    if (g === mr && (g = Cd(e)), g === mr) {
      if (i = Pi(e, t), !i && e !== e.toLowerCase() && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var x = u.createElement("div");
        x.innerHTML = "<script><\/script>";
        var C = x.firstChild;
        m = x.removeChild(C);
      } else if (typeof t.is == "string")
        m = u.createElement(e, {
          is: t.is
        });
      else if (m = u.createElement(e), e === "select") {
        var j = m;
        t.multiple ? j.multiple = !0 : t.size && (j.size = t.size);
      }
    } else
      m = u.createElementNS(g, e);
    return g === mr && !i && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !mn.call(Fm, e) && (Fm[e] = !0, c("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
  }
  function Zw(e, t) {
    return Uy(t).createTextNode(e);
  }
  function ej(e, t, n, a) {
    var i = Pi(t, n);
    Ec(t, n);
    var u;
    switch (t) {
      case "dialog":
        vt("cancel", e), vt("close", e), u = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e), u = n;
        break;
      case "video":
      case "audio":
        for (var m = 0; m < vl.length; m++)
          vt(vl[m], e);
        u = n;
        break;
      case "source":
        vt("error", e), u = n;
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e), u = n;
        break;
      case "details":
        vt("toggle", e), u = n;
        break;
      case "input":
        D(e, n), u = S(e, n), vt("invalid", e);
        break;
      case "option":
        ct(e, n), u = n;
        break;
      case "select":
        Us(e, n), u = Vs(e, n), vt("invalid", e);
        break;
      case "textarea":
        Kv(e, n), u = Sd(e, n), vt("invalid", e);
        break;
      default:
        u = n;
    }
    switch (Dd(t, u), qw(t, e, a, u, i), t) {
      case "input":
        fr(e), ee(e, n, !1);
        break;
      case "textarea":
        fr(e), Gv(e);
        break;
      case "option":
        ht(e, n);
        break;
      case "select":
        Nd(e, n);
        break;
      default:
        typeof u.onClick == "function" && Rc(e);
        break;
    }
  }
  function tj(e, t, n, a, i) {
    Ec(t, a);
    var u = null, m, g;
    switch (t) {
      case "input":
        m = S(e, n), g = S(e, a), u = [];
        break;
      case "select":
        m = Vs(e, n), g = Vs(e, a), u = [];
        break;
      case "textarea":
        m = Sd(e, n), g = Sd(e, a), u = [];
        break;
      default:
        m = n, g = a, typeof m.onClick != "function" && typeof g.onClick == "function" && Rc(e);
        break;
    }
    Dd(t, g);
    var x, C, j = null;
    for (x in m)
      if (!(g.hasOwnProperty(x) || !m.hasOwnProperty(x) || m[x] == null))
        if (x === Yi) {
          var _ = m[x];
          for (C in _)
            _.hasOwnProperty(C) && (j || (j = {}), j[C] = "");
        } else x === bl || x === Ii || x === Nc || x === ni || x === Py || (Zt.hasOwnProperty(x) ? u || (u = []) : (u = u || []).push(x, null));
    for (x in g) {
      var L = g[x], J = m != null ? m[x] : void 0;
      if (!(!g.hasOwnProperty(x) || L === J || L == null && J == null))
        if (x === Yi)
          if (L && Object.freeze(L), J) {
            for (C in J)
              J.hasOwnProperty(C) && (!L || !L.hasOwnProperty(C)) && (j || (j = {}), j[C] = "");
            for (C in L)
              L.hasOwnProperty(C) && J[C] !== L[C] && (j || (j = {}), j[C] = L[C]);
          } else
            j || (u || (u = []), u.push(x, j)), j = L;
        else if (x === bl) {
          var B = L ? L[Sc] : void 0, K = J ? J[Sc] : void 0;
          B != null && K !== B && (u = u || []).push(x, B);
        } else x === Ii ? (typeof L == "string" || typeof L == "number") && (u = u || []).push(x, "" + L) : x === Nc || x === ni || (Zt.hasOwnProperty(x) ? (L != null && (typeof L != "function" && Cc(x, L), x === "onScroll" && vt("scroll", e)), !u && J !== L && (u = [])) : (u = u || []).push(x, L));
    }
    return j && (x1(j, g[Yi]), (u = u || []).push(Yi, j)), u;
  }
  function nj(e, t, n, a, i) {
    n === "input" && i.type === "radio" && i.name != null && H(e, i);
    var u = Pi(n, a), m = Pi(n, i);
    switch (Qw(e, t, u, m), n) {
      case "input":
        Y(e, i);
        break;
      case "textarea":
        Wv(e, i);
        break;
      case "select":
        QS(e, i);
        break;
    }
  }
  function aj(e) {
    {
      var t = e.toLowerCase();
      return qu.hasOwnProperty(t) && qu[t] || null;
    }
  }
  function rj(e, t, n, a, i, u, m) {
    var g, x;
    switch (g = Pi(t, n), Ec(t, n), t) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (var C = 0; C < vl.length; C++)
          vt(vl[C], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        D(e, n), vt("invalid", e);
        break;
      case "option":
        ct(e, n);
        break;
      case "select":
        Us(e, n), vt("invalid", e);
        break;
      case "textarea":
        Kv(e, n), vt("invalid", e);
        break;
    }
    Dd(t, n);
    {
      x = /* @__PURE__ */ new Set();
      for (var j = e.attributes, _ = 0; _ < j.length; _++) {
        var L = j[_].name.toLowerCase();
        switch (L) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            x.add(j[_].name);
        }
      }
    }
    var J = null;
    for (var B in n)
      if (n.hasOwnProperty(B)) {
        var K = n[B];
        if (B === Ii)
          typeof K == "string" ? e.textContent !== K && (n[ni] !== !0 && jc(e.textContent, K, u, m), J = [Ii, K]) : typeof K == "number" && e.textContent !== "" + K && (n[ni] !== !0 && jc(e.textContent, K, u, m), J = [Ii, "" + K]);
        else if (Zt.hasOwnProperty(B))
          K != null && (typeof K != "function" && Cc(B, K), B === "onScroll" && vt("scroll", e));
        else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof g == "boolean") {
          var re = void 0, he = g && dn ? null : Wn(B);
          if (n[ni] !== !0) {
            if (!(B === Nc || B === ni || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            B === "value" || B === "checked" || B === "selected")) {
              if (B === bl) {
                var fe = e.innerHTML, Be = K ? K[Sc] : void 0;
                if (Be != null) {
                  var Ue = Vy(e, Be);
                  Ue !== fe && xl(B, fe, Ue);
                }
              } else if (B === Yi) {
                if (x.delete(B), My) {
                  var F = y1(K);
                  re = e.getAttribute("style"), F !== re && xl(B, re, F);
                }
              } else if (g && !dn)
                x.delete(B.toLowerCase()), re = zr(e, B, K), K !== re && xl(B, re, K);
              else if (!Rt(B, he, g) && !lt(B, K, he, g)) {
                var W = !1;
                if (he !== null)
                  x.delete(he.attributeName), re = lr(e, B, K, he);
                else {
                  var $ = a;
                  if ($ === mr && ($ = Cd(t)), $ === mr)
                    x.delete(B.toLowerCase());
                  else {
                    var Z = aj(B);
                    Z !== null && Z !== B && (W = !0, x.delete(Z)), x.delete(B);
                  }
                  re = zr(e, B, K);
                }
                var le = dn;
                !le && K !== re && !W && xl(B, re, K);
              }
            }
          }
        }
      }
    switch (m && // $FlowFixMe - Should be inferred as not undefined.
    x.size > 0 && n[ni] !== !0 && Ay(x), t) {
      case "input":
        fr(e), ee(e, n, !0);
        break;
      case "textarea":
        fr(e), Gv(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && Rc(e);
        break;
    }
    return J;
  }
  function ij(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function $m(e, t) {
    {
      if (Vn)
        return;
      Vn = !0, c("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function zm(e, t) {
    {
      if (Vn)
        return;
      Vn = !0, c('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Jm(e, t, n) {
    {
      if (Vn)
        return;
      Vn = !0, c("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Hm(e, t) {
    {
      if (t === "" || Vn)
        return;
      Vn = !0, c('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function oj(e, t, n) {
    switch (t) {
      case "input":
        xe(e, n);
        return;
      case "textarea":
        ZS(e, n);
        return;
      case "select":
        XS(e, n);
        return;
    }
  }
  var Nl = function() {
  }, Sl = function() {
  };
  {
    var sj = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Fy = [
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
    ], lj = Fy.concat(["button"]), uj = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], $y = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Sl = function(e, t) {
      var n = Fe({}, e || $y), a = {
        tag: t
      };
      return Fy.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), lj.indexOf(t) !== -1 && (n.pTagInButtonScope = null), sj.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
    };
    var cj = function(e, t) {
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
          return uj.indexOf(t) === -1;
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
    }, fj = function(e, t) {
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
    }, zy = {};
    Nl = function(e, t, n) {
      n = n || $y;
      var a = n.current, i = a && a.tag;
      t != null && (e != null && c("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = cj(e, i) ? null : a, m = u ? null : fj(e, n), g = u || m;
      if (g) {
        var x = g.tag, C = !!u + "|" + e + "|" + x;
        if (!zy[C]) {
          zy[C] = !0;
          var j = e, _ = "";
          if (e === "#text" ? /\S/.test(t) ? j = "Text nodes" : (j = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : j = "<" + e + ">", u) {
            var L = "";
            x === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), c("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", j, x, _, L);
          } else
            c("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", j, x);
        }
      }
    };
  }
  var Tc = "suppressHydrationWarning", Dc = "$", kc = "/$", El = "$?", Cl = "$!", dj = "style", Bm = null, Im = null;
  function mj(e) {
    var t, n, a = e.nodeType;
    switch (a) {
      case hr:
      case jd: {
        t = a === hr ? "#document" : "#fragment";
        var i = e.documentElement;
        n = i ? i.namespaceURI : wd(null, "");
        break;
      }
      default: {
        var u = a === Ot ? e.parentNode : e, m = u.namespaceURI || null;
        t = u.tagName, n = wd(m, t);
        break;
      }
    }
    {
      var g = t.toLowerCase(), x = Sl(null, g);
      return {
        namespace: n,
        ancestorInfo: x
      };
    }
  }
  function pj(e, t, n) {
    {
      var a = e, i = wd(a.namespace, t), u = Sl(a.ancestorInfo, t);
      return {
        namespace: i,
        ancestorInfo: u
      };
    }
  }
  function yA(e) {
    return e;
  }
  function hj(e) {
    Bm = dC(), Im = Dw();
    var t = null;
    return Gg(!1), t;
  }
  function vj(e) {
    kw(Im), Gg(Bm), Bm = null, Im = null;
  }
  function gj(e, t, n, a, i) {
    var u;
    {
      var m = a;
      if (Nl(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var g = "" + t.children, x = Sl(m.ancestorInfo, e);
        Nl(null, g, x);
      }
      u = m.namespace;
    }
    var C = Xw(e, t, n, u);
    return Rl(i, C), Zm(C, t), C;
  }
  function yj(e, t) {
    e.appendChild(t);
  }
  function bj(e, t, n, a, i) {
    switch (ej(e, t, n, a), t) {
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
  function xj(e, t, n, a, i, u) {
    {
      var m = u;
      if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
        var g = "" + a.children, x = Sl(m.ancestorInfo, t);
        Nl(null, g, x);
      }
    }
    return tj(e, t, n, a);
  }
  function Ym(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function Nj(e, t, n, a) {
    {
      var i = n;
      Nl(null, e, i.ancestorInfo);
    }
    var u = Zw(e, t);
    return Rl(a, u), u;
  }
  function Sj() {
    var e = window.event;
    return e === void 0 ? Sr : qg(e.type);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0, Ej = typeof clearTimeout == "function" ? clearTimeout : void 0, Wm = -1, Jy = typeof Promise == "function" ? Promise : void 0, Cj = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jy < "u" ? function(e) {
    return Jy.resolve(null).then(e).catch(wj);
  } : Km;
  function wj(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jj(e, t, n, a) {
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
  function Rj(e, t, n, a, i, u) {
    nj(e, t, n, a, i), Zm(e, i);
  }
  function Hy(e) {
    Gu(e, "");
  }
  function Tj(e, t, n) {
    e.nodeValue = n;
  }
  function Dj(e, t) {
    e.appendChild(t);
  }
  function kj(e, t) {
    var n;
    e.nodeType === Ot ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && Rc(n);
  }
  function Oj(e, t, n) {
    e.insertBefore(t, n);
  }
  function Lj(e, t, n) {
    e.nodeType === Ot ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function _j(e, t) {
    e.removeChild(t);
  }
  function Pj(e, t) {
    e.nodeType === Ot ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Gm(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === Ot) {
        var u = i.data;
        if (u === kc)
          if (a === 0) {
            e.removeChild(i), ol(t);
            return;
          } else
            a--;
        else (u === Dc || u === El || u === Cl) && a++;
      }
      n = i;
    } while (n);
    ol(t);
  }
  function Aj(e, t) {
    e.nodeType === Ot ? Gm(e.parentNode, t) : e.nodeType === Mn && Gm(e, t), ol(e);
  }
  function Mj(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function Vj(e) {
    e.nodeValue = "";
  }
  function Uj(e, t) {
    e = e;
    var n = t[dj], a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Rd("display", a);
  }
  function Fj(e, t) {
    e.nodeValue = t;
  }
  function $j(e) {
    e.nodeType === Mn ? e.textContent = "" : e.nodeType === hr && e.documentElement && e.removeChild(e.documentElement);
  }
  function zj(e, t, n) {
    return e.nodeType !== Mn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function Jj(e, t) {
    return t === "" || e.nodeType !== pr ? null : e;
  }
  function Hj(e) {
    return e.nodeType !== Ot ? null : e;
  }
  function By(e) {
    return e.data === El;
  }
  function qm(e) {
    return e.data === Cl;
  }
  function Bj(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, a, i;
    return t && (n = t.dgst, a = t.msg, i = t.stck), {
      message: a,
      digest: n,
      stack: i
    };
  }
  function Ij(e, t) {
    e._reactRetry = t;
  }
  function Oc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Mn || t === pr)
        break;
      if (t === Ot) {
        var n = e.data;
        if (n === Dc || n === Cl || n === El)
          break;
        if (n === kc)
          return null;
      }
    }
    return e;
  }
  function wl(e) {
    return Oc(e.nextSibling);
  }
  function Yj(e) {
    return Oc(e.firstChild);
  }
  function Kj(e) {
    return Oc(e.firstChild);
  }
  function Wj(e) {
    return Oc(e.nextSibling);
  }
  function Gj(e, t, n, a, i, u, m) {
    Rl(u, e), Zm(e, n);
    var g;
    {
      var x = i;
      g = x.namespace;
    }
    var C = (u.mode & Je) !== ge;
    return rj(e, t, n, g, a, C, m);
  }
  function qj(e, t, n, a) {
    return Rl(n, e), n.mode & Je, ij(e, t);
  }
  function Qj(e, t) {
    Rl(t, e);
  }
  function Xj(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === kc) {
          if (n === 0)
            return wl(t);
          n--;
        } else (a === Dc || a === Cl || a === El) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Iy(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === Dc || a === Cl || a === El) {
          if (n === 0)
            return t;
          n--;
        } else a === kc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Zj(e) {
    ol(e);
  }
  function eR(e) {
    ol(e);
  }
  function tR(e) {
    return e !== "head" && e !== "body";
  }
  function nR(e, t, n, a) {
    var i = !0;
    jc(t.nodeValue, n, a, i);
  }
  function aR(e, t, n, a, i, u) {
    if (t[Tc] !== !0) {
      var m = !0;
      jc(a.nodeValue, i, u, m);
    }
  }
  function rR(e, t) {
    t.nodeType === Mn ? $m(e, t) : t.nodeType === Ot || zm(e, t);
  }
  function iR(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Mn ? $m(n, t) : t.nodeType === Ot || zm(n, t));
    }
  }
  function oR(e, t, n, a, i) {
    (i || t[Tc] !== !0) && (a.nodeType === Mn ? $m(n, a) : a.nodeType === Ot || zm(n, a));
  }
  function sR(e, t, n) {
    Jm(e, t);
  }
  function lR(e, t) {
    Hm(e, t);
  }
  function uR(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && Jm(a, t);
    }
  }
  function cR(e, t) {
    {
      var n = e.parentNode;
      n !== null && Hm(n, t);
    }
  }
  function fR(e, t, n, a, i, u) {
    (u || t[Tc] !== !0) && Jm(n, a);
  }
  function dR(e, t, n, a, i) {
    (i || t[Tc] !== !0) && Hm(n, a);
  }
  function mR(e) {
    c("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function pR(e) {
    gl(e);
  }
  var zo = Math.random().toString(36).slice(2), Jo = "__reactFiber$" + zo, Qm = "__reactProps$" + zo, jl = "__reactContainer$" + zo, Xm = "__reactEvents$" + zo, hR = "__reactListeners$" + zo, vR = "__reactHandles$" + zo;
  function gR(e) {
    delete e[Jo], delete e[Qm], delete e[Xm], delete e[hR], delete e[vR];
  }
  function Rl(e, t) {
    t[Jo] = e;
  }
  function Lc(e, t) {
    t[jl] = e;
  }
  function Yy(e) {
    e[jl] = null;
  }
  function Tl(e) {
    return !!e[jl];
  }
  function Ki(e) {
    var t = e[Jo];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[jl] || n[Jo], t) {
        var a = t.alternate;
        if (t.child !== null || a !== null && a.child !== null)
          for (var i = Iy(e); i !== null; ) {
            var u = i[Jo];
            if (u)
              return u;
            i = Iy(i);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ai(e) {
    var t = e[Jo] || e[jl];
    return t && (t.tag === w || t.tag === R || t.tag === V || t.tag === b) ? t : null;
  }
  function Ho(e) {
    if (e.tag === w || e.tag === R)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function _c(e) {
    return e[Qm] || null;
  }
  function Zm(e, t) {
    e[Qm] = t;
  }
  function yR(e) {
    var t = e[Xm];
    return t === void 0 && (t = e[Xm] = /* @__PURE__ */ new Set()), t;
  }
  var Ky = {}, Wy = s.ReactDebugCurrentFrame;
  function Pc(e) {
    if (e) {
      var t = e._owner, n = Ir(e.type, e._source, t ? t.type : null);
      Wy.setExtraStackFrame(n);
    } else
      Wy.setExtraStackFrame(null);
  }
  function Da(e, t, n, a, i) {
    {
      var u = Function.call.bind(mn);
      for (var m in e)
        if (u(e, m)) {
          var g = void 0;
          try {
            if (typeof e[m] != "function") {
              var x = Error((a || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw x.name = "Invariant Violation", x;
            }
            g = e[m](t, m, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (C) {
            g = C;
          }
          g && !(g instanceof Error) && (Pc(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, m, typeof g), Pc(null)), g instanceof Error && !(g.message in Ky) && (Ky[g.message] = !0, Pc(i), c("Failed %s type: %s", n, g.message), Pc(null));
        }
    }
  }
  var ep = [], Ac;
  Ac = [];
  var Er = -1;
  function ri(e) {
    return {
      current: e
    };
  }
  function yn(e, t) {
    if (Er < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== Ac[Er] && c("Unexpected Fiber popped."), e.current = ep[Er], ep[Er] = null, Ac[Er] = null, Er--;
  }
  function bn(e, t, n) {
    Er++, ep[Er] = e.current, Ac[Er] = n, e.current = t;
  }
  var tp;
  tp = {};
  var ta = {};
  Object.freeze(ta);
  var Cr = ri(ta), Wa = ri(!1), np = ta;
  function Bo(e, t, n) {
    return n && Ga(t) ? np : Cr.current;
  }
  function Gy(e, t, n) {
    {
      var a = e.stateNode;
      a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Io(e, t) {
    {
      var n = e.type, a = n.contextTypes;
      if (!a)
        return ta;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var m in a)
        u[m] = t[m];
      {
        var g = Le(e) || "Unknown";
        Da(a, u, "context", g);
      }
      return i && Gy(e, t, u), u;
    }
  }
  function Mc() {
    return Wa.current;
  }
  function Ga(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Vc(e) {
    yn(Wa, e), yn(Cr, e);
  }
  function ap(e) {
    yn(Wa, e), yn(Cr, e);
  }
  function qy(e, t, n) {
    {
      if (Cr.current !== ta)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      bn(Cr, t, e), bn(Wa, n, e);
    }
  }
  function Qy(e, t, n) {
    {
      var a = e.stateNode, i = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var u = Le(e) || "Unknown";
          tp[u] || (tp[u] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return n;
      }
      var m = a.getChildContext();
      for (var g in m)
        if (!(g in i))
          throw new Error((Le(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
      {
        var x = Le(e) || "Unknown";
        Da(i, m, "child context", x);
      }
      return Fe({}, n, m);
    }
  }
  function Uc(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || ta;
      return np = Cr.current, bn(Cr, n, e), bn(Wa, Wa.current, e), !0;
    }
  }
  function Xy(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var i = Qy(e, t, np);
        a.__reactInternalMemoizedMergedChildContext = i, yn(Wa, e), yn(Cr, e), bn(Cr, i, e), bn(Wa, n, e);
      } else
        yn(Wa, e), bn(Wa, n, e);
    }
  }
  function bR(e) {
    {
      if (!tE(e) || e.tag !== p)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case b:
            return t.stateNode.context;
          case p: {
            var n = t.type;
            if (Ga(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var ii = 0, Fc = 1, wr = null, rp = !1, ip = !1;
  function Zy(e) {
    wr === null ? wr = [e] : wr.push(e);
  }
  function xR(e) {
    rp = !0, Zy(e);
  }
  function eb() {
    rp && oi();
  }
  function oi() {
    if (!ip && wr !== null) {
      ip = !0;
      var e = 0, t = Ta();
      try {
        var n = !0, a = wr;
        for (Qt(Xn); e < a.length; e++) {
          var i = a[e];
          do
            i = i(n);
          while (i !== null);
        }
        wr = null, rp = !1;
      } catch (u) {
        throw wr !== null && (wr = wr.slice(e + 1)), Cg(tc, oi), u;
      } finally {
        Qt(t), ip = !1;
      }
    }
    return null;
  }
  var Yo = [], Ko = 0, $c = null, zc = 0, da = [], ma = 0, Wi = null, jr = 1, Rr = "";
  function NR(e) {
    return qi(), (e.flags & vg) !== be;
  }
  function SR(e) {
    return qi(), zc;
  }
  function ER() {
    var e = Rr, t = jr, n = t & ~CR(t);
    return n.toString(32) + e;
  }
  function Gi(e, t) {
    qi(), Yo[Ko++] = zc, Yo[Ko++] = $c, $c = e, zc = t;
  }
  function tb(e, t, n) {
    qi(), da[ma++] = jr, da[ma++] = Rr, da[ma++] = Wi, Wi = e;
    var a = jr, i = Rr, u = Jc(a) - 1, m = a & ~(1 << u), g = n + 1, x = Jc(t) + u;
    if (x > 30) {
      var C = u - u % 5, j = (1 << C) - 1, _ = (m & j).toString(32), L = m >> C, J = u - C, B = Jc(t) + J, K = g << J, re = K | L, he = _ + i;
      jr = 1 << B | re, Rr = he;
    } else {
      var fe = g << u, Be = fe | m, Ue = i;
      jr = 1 << x | Be, Rr = Ue;
    }
  }
  function op(e) {
    qi();
    var t = e.return;
    if (t !== null) {
      var n = 1, a = 0;
      Gi(e, n), tb(e, n, a);
    }
  }
  function Jc(e) {
    return 32 - kg(e);
  }
  function CR(e) {
    return 1 << Jc(e) - 1;
  }
  function sp(e) {
    for (; e === $c; )
      $c = Yo[--Ko], Yo[Ko] = null, zc = Yo[--Ko], Yo[Ko] = null;
    for (; e === Wi; )
      Wi = da[--ma], da[ma] = null, Rr = da[--ma], da[ma] = null, jr = da[--ma], da[ma] = null;
  }
  function wR() {
    return qi(), Wi !== null ? {
      id: jr,
      overflow: Rr
    } : null;
  }
  function jR(e, t) {
    qi(), da[ma++] = jr, da[ma++] = Rr, da[ma++] = Wi, jr = t.id, Rr = t.overflow, Wi = e;
  }
  function qi() {
    tn() || c("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var en = null, pa = null, ka = !1, Qi = !1, si = null;
  function RR() {
    ka && c("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function nb() {
    Qi = !0;
  }
  function TR() {
    return Qi;
  }
  function DR(e) {
    var t = e.stateNode.containerInfo;
    return pa = Kj(t), en = e, ka = !0, si = null, Qi = !1, !0;
  }
  function kR(e, t, n) {
    return pa = Wj(t), en = e, ka = !0, si = null, Qi = !1, n !== null && jR(e, n), !0;
  }
  function ab(e, t) {
    switch (e.tag) {
      case b: {
        rR(e.stateNode.containerInfo, t);
        break;
      }
      case w: {
        var n = (e.mode & Je) !== ge;
        oR(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case V: {
        var a = e.memoizedState;
        a.dehydrated !== null && iR(a.dehydrated, t);
        break;
      }
    }
  }
  function rb(e, t) {
    ab(e, t);
    var n = Pk();
    n.stateNode = t, n.return = e;
    var a = e.deletions;
    a === null ? (e.deletions = [n], e.flags |= Ai) : a.push(n);
  }
  function lp(e, t) {
    {
      if (Qi)
        return;
      switch (e.tag) {
        case b: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case w:
              var a = t.type;
              t.pendingProps, sR(n, a);
              break;
            case R:
              var i = t.pendingProps;
              lR(n, i);
              break;
          }
          break;
        }
        case w: {
          var u = e.type, m = e.memoizedProps, g = e.stateNode;
          switch (t.tag) {
            case w: {
              var x = t.type, C = t.pendingProps, j = (e.mode & Je) !== ge;
              fR(
                u,
                m,
                g,
                x,
                C,
                // TODO: Delete this argument when we remove the legacy root API.
                j
              );
              break;
            }
            case R: {
              var _ = t.pendingProps, L = (e.mode & Je) !== ge;
              dR(
                u,
                m,
                g,
                _,
                // TODO: Delete this argument when we remove the legacy root API.
                L
              );
              break;
            }
          }
          break;
        }
        case V: {
          var J = e.memoizedState, B = J.dehydrated;
          if (B !== null) switch (t.tag) {
            case w:
              var K = t.type;
              t.pendingProps, uR(B, K);
              break;
            case R:
              var re = t.pendingProps;
              cR(B, re);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function ib(e, t) {
    t.flags = t.flags & ~gr | Lt, lp(e, t);
  }
  function ob(e, t) {
    switch (e.tag) {
      case w: {
        var n = e.type;
        e.pendingProps;
        var a = zj(t, n);
        return a !== null ? (e.stateNode = a, en = e, pa = Yj(a), !0) : !1;
      }
      case R: {
        var i = e.pendingProps, u = Jj(t, i);
        return u !== null ? (e.stateNode = u, en = e, pa = null, !0) : !1;
      }
      case V: {
        var m = Hj(t);
        if (m !== null) {
          var g = {
            dehydrated: m,
            treeContext: wR(),
            retryLane: qn
          };
          e.memoizedState = g;
          var x = Ak(m);
          return x.return = e, e.child = x, en = e, pa = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function up(e) {
    return (e.mode & Je) !== ge && (e.flags & Ze) === be;
  }
  function cp(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function fp(e) {
    if (ka) {
      var t = pa;
      if (!t) {
        up(e) && (lp(en, e), cp()), ib(en, e), ka = !1, en = e;
        return;
      }
      var n = t;
      if (!ob(e, t)) {
        up(e) && (lp(en, e), cp()), t = wl(n);
        var a = en;
        if (!t || !ob(e, t)) {
          ib(en, e), ka = !1, en = e;
          return;
        }
        rb(a, n);
      }
    }
  }
  function OR(e, t, n) {
    var a = e.stateNode, i = !Qi, u = Gj(a, e.type, e.memoizedProps, t, n, e, i);
    return e.updateQueue = u, u !== null;
  }
  function LR(e) {
    var t = e.stateNode, n = e.memoizedProps, a = qj(t, n, e);
    if (a) {
      var i = en;
      if (i !== null)
        switch (i.tag) {
          case b: {
            var u = i.stateNode.containerInfo, m = (i.mode & Je) !== ge;
            nR(
              u,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              m
            );
            break;
          }
          case w: {
            var g = i.type, x = i.memoizedProps, C = i.stateNode, j = (i.mode & Je) !== ge;
            aR(
              g,
              x,
              C,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              j
            );
            break;
          }
        }
    }
    return a;
  }
  function _R(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    Qj(n, e);
  }
  function PR(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return Xj(n);
  }
  function sb(e) {
    for (var t = e.return; t !== null && t.tag !== w && t.tag !== b && t.tag !== V; )
      t = t.return;
    en = t;
  }
  function Hc(e) {
    if (e !== en)
      return !1;
    if (!ka)
      return sb(e), ka = !0, !1;
    if (e.tag !== b && (e.tag !== w || tR(e.type) && !Ym(e.type, e.memoizedProps))) {
      var t = pa;
      if (t)
        if (up(e))
          lb(e), cp();
        else
          for (; t; )
            rb(e, t), t = wl(t);
    }
    return sb(e), e.tag === V ? pa = PR(e) : pa = en ? wl(e.stateNode) : null, !0;
  }
  function AR() {
    return ka && pa !== null;
  }
  function lb(e) {
    for (var t = pa; t; )
      ab(e, t), t = wl(t);
  }
  function Wo() {
    en = null, pa = null, ka = !1, Qi = !1;
  }
  function ub() {
    si !== null && (nN(si), si = null);
  }
  function tn() {
    return ka;
  }
  function dp(e) {
    si === null ? si = [e] : si.push(e);
  }
  var MR = s.ReactCurrentBatchConfig, VR = null;
  function UR() {
    return MR.transition;
  }
  var Oa = {
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
    var FR = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Et && (t = n), n = n.return;
      return t;
    }, Xi = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Dl = [], kl = [], Ol = [], Ll = [], _l = [], Pl = [], Zi = /* @__PURE__ */ new Set();
    Oa.recordUnsafeLifecycleWarnings = function(e, t) {
      Zi.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && Dl.push(e), e.mode & Et && typeof t.UNSAFE_componentWillMount == "function" && kl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ol.push(e), e.mode & Et && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ll.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _l.push(e), e.mode & Et && typeof t.UNSAFE_componentWillUpdate == "function" && Pl.push(e));
    }, Oa.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Dl.length > 0 && (Dl.forEach(function(L) {
        e.add(Le(L) || "Component"), Zi.add(L.type);
      }), Dl = []);
      var t = /* @__PURE__ */ new Set();
      kl.length > 0 && (kl.forEach(function(L) {
        t.add(Le(L) || "Component"), Zi.add(L.type);
      }), kl = []);
      var n = /* @__PURE__ */ new Set();
      Ol.length > 0 && (Ol.forEach(function(L) {
        n.add(Le(L) || "Component"), Zi.add(L.type);
      }), Ol = []);
      var a = /* @__PURE__ */ new Set();
      Ll.length > 0 && (Ll.forEach(function(L) {
        a.add(Le(L) || "Component"), Zi.add(L.type);
      }), Ll = []);
      var i = /* @__PURE__ */ new Set();
      _l.length > 0 && (_l.forEach(function(L) {
        i.add(Le(L) || "Component"), Zi.add(L.type);
      }), _l = []);
      var u = /* @__PURE__ */ new Set();
      if (Pl.length > 0 && (Pl.forEach(function(L) {
        u.add(Le(L) || "Component"), Zi.add(L.type);
      }), Pl = []), t.size > 0) {
        var m = Xi(t);
        c(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
      }
      if (a.size > 0) {
        var g = Xi(a);
        c(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
      }
      if (u.size > 0) {
        var x = Xi(u);
        c(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
      }
      if (e.size > 0) {
        var C = Xi(e);
        f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
      }
      if (n.size > 0) {
        var j = Xi(n);
        f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
      }
      if (i.size > 0) {
        var _ = Xi(i);
        f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
      }
    };
    var Bc = /* @__PURE__ */ new Map(), cb = /* @__PURE__ */ new Set();
    Oa.recordLegacyContextWarning = function(e, t) {
      var n = FR(e);
      if (n === null) {
        c("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!cb.has(e.type)) {
        var a = Bc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Bc.set(n, a)), a.push(e));
      }
    }, Oa.flushLegacyContextWarning = function() {
      Bc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            a.add(Le(u) || "Component"), cb.add(u.type);
          });
          var i = Xi(a);
          try {
            bt(n), c(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i);
          } finally {
            Kt();
          }
        }
      });
    }, Oa.discardPendingWarnings = function() {
      Dl = [], kl = [], Ol = [], Ll = [], _l = [], Pl = [], Bc = /* @__PURE__ */ new Map();
    };
  }
  var mp, pp, hp, vp, gp, fb = function(e, t) {
  };
  mp = !1, pp = !1, hp = {}, vp = {}, gp = {}, fb = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = Le(t) || "Component";
      vp[n] || (vp[n] = !0, c('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function $R(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function Al(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if ((e.mode & Et || Hn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== p) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !$R(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var i = Le(e) || "Component";
        hp[i] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, a), hp[i] = !0);
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
          throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
        var x = m;
        _n(a, "ref");
        var C = "" + a;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
          return t.ref;
        var j = function(_) {
          var L = x.refs;
          _ === null ? delete L[C] : L[C] = _;
        };
        return j._stringRef = C, j;
      } else {
        if (typeof a != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!n._owner)
          throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return a;
  }
  function Ic(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Yc(e) {
    {
      var t = Le(e) || "Component";
      if (gp[t])
        return;
      gp[t] = !0, c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function db(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function mb(e) {
    function t(F, W) {
      if (e) {
        var $ = F.deletions;
        $ === null ? (F.deletions = [W], F.flags |= Ai) : $.push(W);
      }
    }
    function n(F, W) {
      if (!e)
        return null;
      for (var $ = W; $ !== null; )
        t(F, $), $ = $.sibling;
      return null;
    }
    function a(F, W) {
      for (var $ = /* @__PURE__ */ new Map(), Z = W; Z !== null; )
        Z.key !== null ? $.set(Z.key, Z) : $.set(Z.index, Z), Z = Z.sibling;
      return $;
    }
    function i(F, W) {
      var $ = lo(F, W);
      return $.index = 0, $.sibling = null, $;
    }
    function u(F, W, $) {
      if (F.index = $, !e)
        return F.flags |= vg, W;
      var Z = F.alternate;
      if (Z !== null) {
        var le = Z.index;
        return le < W ? (F.flags |= Lt, W) : le;
      } else
        return F.flags |= Lt, W;
    }
    function m(F) {
      return e && F.alternate === null && (F.flags |= Lt), F;
    }
    function g(F, W, $, Z) {
      if (W === null || W.tag !== R) {
        var le = dv($, F.mode, Z);
        return le.return = F, le;
      } else {
        var ie = i(W, $);
        return ie.return = F, ie;
      }
    }
    function x(F, W, $, Z) {
      var le = $.type;
      if (le === k)
        return j(F, W, $.props.children, Z, $.key);
      if (W !== null && (W.elementType === le || // Keep this check inline so it only runs on the false path:
      yN(W, $) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof le == "object" && le !== null && le.$$typeof === Ve && db(le) === W.type)) {
        var ie = i(W, $.props);
        return ie.ref = Al(F, W, $), ie.return = F, ie._debugSource = $._source, ie._debugOwner = $._owner, ie;
      }
      var Ne = fv($, F.mode, Z);
      return Ne.ref = Al(F, W, $), Ne.return = F, Ne;
    }
    function C(F, W, $, Z) {
      if (W === null || W.tag !== N || W.stateNode.containerInfo !== $.containerInfo || W.stateNode.implementation !== $.implementation) {
        var le = mv($, F.mode, Z);
        return le.return = F, le;
      } else {
        var ie = i(W, $.children || []);
        return ie.return = F, ie;
      }
    }
    function j(F, W, $, Z, le) {
      if (W === null || W.tag !== M) {
        var ie = yi($, F.mode, Z, le);
        return ie.return = F, ie;
      } else {
        var Ne = i(W, $);
        return Ne.return = F, Ne;
      }
    }
    function _(F, W, $) {
      if (typeof W == "string" && W !== "" || typeof W == "number") {
        var Z = dv("" + W, F.mode, $);
        return Z.return = F, Z;
      }
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Ha: {
            var le = fv(W, F.mode, $);
            return le.ref = Al(F, null, W), le.return = F, le;
          }
          case Ea: {
            var ie = mv(W, F.mode, $);
            return ie.return = F, ie;
          }
          case Ve: {
            var Ne = W._payload, Oe = W._init;
            return _(F, Oe(Ne), $);
          }
        }
        if (Xe(W) || cr(W)) {
          var st = yi(W, F.mode, $, null);
          return st.return = F, st;
        }
        Ic(F, W);
      }
      return typeof W == "function" && Yc(F), null;
    }
    function L(F, W, $, Z) {
      var le = W !== null ? W.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return le !== null ? null : g(F, W, "" + $, Z);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Ha:
            return $.key === le ? x(F, W, $, Z) : null;
          case Ea:
            return $.key === le ? C(F, W, $, Z) : null;
          case Ve: {
            var ie = $._payload, Ne = $._init;
            return L(F, W, Ne(ie), Z);
          }
        }
        if (Xe($) || cr($))
          return le !== null ? null : j(F, W, $, Z, null);
        Ic(F, $);
      }
      return typeof $ == "function" && Yc(F), null;
    }
    function J(F, W, $, Z, le) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
        var ie = F.get($) || null;
        return g(W, ie, "" + Z, le);
      }
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Ha: {
            var Ne = F.get(Z.key === null ? $ : Z.key) || null;
            return x(W, Ne, Z, le);
          }
          case Ea: {
            var Oe = F.get(Z.key === null ? $ : Z.key) || null;
            return C(W, Oe, Z, le);
          }
          case Ve:
            var st = Z._payload, We = Z._init;
            return J(F, W, $, We(st), le);
        }
        if (Xe(Z) || cr(Z)) {
          var Tt = F.get($) || null;
          return j(W, Tt, Z, le, null);
        }
        Ic(W, Z);
      }
      return typeof Z == "function" && Yc(W), null;
    }
    function B(F, W, $) {
      {
        if (typeof F != "object" || F === null)
          return W;
        switch (F.$$typeof) {
          case Ha:
          case Ea:
            fb(F, $);
            var Z = F.key;
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
            var le = F._payload, ie = F._init;
            B(ie(le), W, $);
            break;
        }
      }
      return W;
    }
    function K(F, W, $, Z) {
      for (var le = null, ie = 0; ie < $.length; ie++) {
        var Ne = $[ie];
        le = B(Ne, le, F);
      }
      for (var Oe = null, st = null, We = W, Tt = 0, Ge = 0, Ct = null; We !== null && Ge < $.length; Ge++) {
        We.index > Ge ? (Ct = We, We = null) : Ct = We.sibling;
        var Nn = L(F, We, $[Ge], Z);
        if (Nn === null) {
          We === null && (We = Ct);
          break;
        }
        e && We && Nn.alternate === null && t(F, We), Tt = u(Nn, Tt, Ge), st === null ? Oe = Nn : st.sibling = Nn, st = Nn, We = Ct;
      }
      if (Ge === $.length) {
        if (n(F, We), tn()) {
          var un = Ge;
          Gi(F, un);
        }
        return Oe;
      }
      if (We === null) {
        for (; Ge < $.length; Ge++) {
          var aa = _(F, $[Ge], Z);
          aa !== null && (Tt = u(aa, Tt, Ge), st === null ? Oe = aa : st.sibling = aa, st = aa);
        }
        if (tn()) {
          var kn = Ge;
          Gi(F, kn);
        }
        return Oe;
      }
      for (var On = a(F, We); Ge < $.length; Ge++) {
        var Sn = J(On, F, Ge, $[Ge], Z);
        Sn !== null && (e && Sn.alternate !== null && On.delete(Sn.key === null ? Ge : Sn.key), Tt = u(Sn, Tt, Ge), st === null ? Oe = Sn : st.sibling = Sn, st = Sn);
      }
      if (e && On.forEach(function(ms) {
        return t(F, ms);
      }), tn()) {
        var Pr = Ge;
        Gi(F, Pr);
      }
      return Oe;
    }
    function re(F, W, $, Z) {
      var le = cr($);
      if (typeof le != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        $[Symbol.toStringTag] === "Generator" && (pp || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pp = !0), $.entries === le && (mp || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), mp = !0);
        var ie = le.call($);
        if (ie)
          for (var Ne = null, Oe = ie.next(); !Oe.done; Oe = ie.next()) {
            var st = Oe.value;
            Ne = B(st, Ne, F);
          }
      }
      var We = le.call($);
      if (We == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Tt = null, Ge = null, Ct = W, Nn = 0, un = 0, aa = null, kn = We.next(); Ct !== null && !kn.done; un++, kn = We.next()) {
        Ct.index > un ? (aa = Ct, Ct = null) : aa = Ct.sibling;
        var On = L(F, Ct, kn.value, Z);
        if (On === null) {
          Ct === null && (Ct = aa);
          break;
        }
        e && Ct && On.alternate === null && t(F, Ct), Nn = u(On, Nn, un), Ge === null ? Tt = On : Ge.sibling = On, Ge = On, Ct = aa;
      }
      if (kn.done) {
        if (n(F, Ct), tn()) {
          var Sn = un;
          Gi(F, Sn);
        }
        return Tt;
      }
      if (Ct === null) {
        for (; !kn.done; un++, kn = We.next()) {
          var Pr = _(F, kn.value, Z);
          Pr !== null && (Nn = u(Pr, Nn, un), Ge === null ? Tt = Pr : Ge.sibling = Pr, Ge = Pr);
        }
        if (tn()) {
          var ms = un;
          Gi(F, ms);
        }
        return Tt;
      }
      for (var mu = a(F, Ct); !kn.done; un++, kn = We.next()) {
        var ar = J(mu, F, un, kn.value, Z);
        ar !== null && (e && ar.alternate !== null && mu.delete(ar.key === null ? un : ar.key), Nn = u(ar, Nn, un), Ge === null ? Tt = ar : Ge.sibling = ar, Ge = ar);
      }
      if (e && mu.forEach(function(dO) {
        return t(F, dO);
      }), tn()) {
        var fO = un;
        Gi(F, fO);
      }
      return Tt;
    }
    function he(F, W, $, Z) {
      if (W !== null && W.tag === R) {
        n(F, W.sibling);
        var le = i(W, $);
        return le.return = F, le;
      }
      n(F, W);
      var ie = dv($, F.mode, Z);
      return ie.return = F, ie;
    }
    function fe(F, W, $, Z) {
      for (var le = $.key, ie = W; ie !== null; ) {
        if (ie.key === le) {
          var Ne = $.type;
          if (Ne === k) {
            if (ie.tag === M) {
              n(F, ie.sibling);
              var Oe = i(ie, $.props.children);
              return Oe.return = F, Oe._debugSource = $._source, Oe._debugOwner = $._owner, Oe;
            }
          } else if (ie.elementType === Ne || // Keep this check inline so it only runs on the false path:
          yN(ie, $) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Ne == "object" && Ne !== null && Ne.$$typeof === Ve && db(Ne) === ie.type) {
            n(F, ie.sibling);
            var st = i(ie, $.props);
            return st.ref = Al(F, ie, $), st.return = F, st._debugSource = $._source, st._debugOwner = $._owner, st;
          }
          n(F, ie);
          break;
        } else
          t(F, ie);
        ie = ie.sibling;
      }
      if ($.type === k) {
        var We = yi($.props.children, F.mode, Z, $.key);
        return We.return = F, We;
      } else {
        var Tt = fv($, F.mode, Z);
        return Tt.ref = Al(F, W, $), Tt.return = F, Tt;
      }
    }
    function Be(F, W, $, Z) {
      for (var le = $.key, ie = W; ie !== null; ) {
        if (ie.key === le)
          if (ie.tag === N && ie.stateNode.containerInfo === $.containerInfo && ie.stateNode.implementation === $.implementation) {
            n(F, ie.sibling);
            var Ne = i(ie, $.children || []);
            return Ne.return = F, Ne;
          } else {
            n(F, ie);
            break;
          }
        else
          t(F, ie);
        ie = ie.sibling;
      }
      var Oe = mv($, F.mode, Z);
      return Oe.return = F, Oe;
    }
    function Ue(F, W, $, Z) {
      var le = typeof $ == "object" && $ !== null && $.type === k && $.key === null;
      if (le && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Ha:
            return m(fe(F, W, $, Z));
          case Ea:
            return m(Be(F, W, $, Z));
          case Ve:
            var ie = $._payload, Ne = $._init;
            return Ue(F, W, Ne(ie), Z);
        }
        if (Xe($))
          return K(F, W, $, Z);
        if (cr($))
          return re(F, W, $, Z);
        Ic(F, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? m(he(F, W, "" + $, Z)) : (typeof $ == "function" && Yc(F), n(F, W));
    }
    return Ue;
  }
  var Go = mb(!0), pb = mb(!1);
  function zR(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, a = lo(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        n = n.sibling, a = a.sibling = lo(n, n.pendingProps), a.return = t;
      a.sibling = null;
    }
  }
  function JR(e, t) {
    for (var n = e.child; n !== null; )
      Dk(n, t), n = n.sibling;
  }
  var yp = ri(null), bp;
  bp = {};
  var Kc = null, qo = null, xp = null, Wc = !1;
  function Gc() {
    Kc = null, qo = null, xp = null, Wc = !1;
  }
  function hb() {
    Wc = !0;
  }
  function vb() {
    Wc = !1;
  }
  function gb(e, t, n) {
    bn(yp, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== bp && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = bp;
  }
  function Np(e, t) {
    var n = yp.current;
    yn(yp, t), e._currentValue = n;
  }
  function Sp(e, t, n) {
    for (var a = e; a !== null; ) {
      var i = a.alternate;
      if (Po(a.childLanes, t) ? i !== null && !Po(i.childLanes, t) && (i.childLanes = Pe(i.childLanes, t)) : (a.childLanes = Pe(a.childLanes, t), i !== null && (i.childLanes = Pe(i.childLanes, t))), a === n)
        break;
      a = a.return;
    }
    a !== n && c("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function HR(e, t, n) {
    BR(e, t, n);
  }
  function BR(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = void 0, u = a.dependencies;
      if (u !== null) {
        i = a.child;
        for (var m = u.firstContext; m !== null; ) {
          if (m.context === t) {
            if (a.tag === p) {
              var g = Zs(n), x = Tr(dt, g);
              x.tag = Qc;
              var C = a.updateQueue;
              if (C !== null) {
                var j = C.shared, _ = j.pending;
                _ === null ? x.next = x : (x.next = _.next, _.next = x), j.pending = x;
              }
            }
            a.lanes = Pe(a.lanes, n);
            var L = a.alternate;
            L !== null && (L.lanes = Pe(L.lanes, n)), Sp(a.return, n, e), u.lanes = Pe(u.lanes, n);
            break;
          }
          m = m.next;
        }
      } else if (a.tag === P)
        i = a.type === e.type ? null : a.child;
      else if (a.tag === de) {
        var J = a.return;
        if (J === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        J.lanes = Pe(J.lanes, n);
        var B = J.alternate;
        B !== null && (B.lanes = Pe(B.lanes, n)), Sp(J, n, e), i = a.sibling;
      } else
        i = a.child;
      if (i !== null)
        i.return = a;
      else
        for (i = a; i !== null; ) {
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
      a = i;
    }
  }
  function Qo(e, t) {
    Kc = e, qo = null, xp = null;
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (Qn(n.lanes, t) && ql(), n.firstContext = null);
    }
  }
  function _t(e) {
    Wc && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (xp !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (qo === null) {
        if (Kc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        qo = n, Kc.dependencies = {
          lanes: q,
          firstContext: n
        };
      } else
        qo = qo.next = n;
    }
    return t;
  }
  var eo = null;
  function Ep(e) {
    eo === null ? eo = [e] : eo.push(e);
  }
  function IR() {
    if (eo !== null) {
      for (var e = 0; e < eo.length; e++) {
        var t = eo[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var a = n.next, i = t.pending;
          if (i !== null) {
            var u = i.next;
            i.next = a, n.next = u;
          }
          t.pending = n;
        }
      }
      eo = null;
    }
  }
  function yb(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ep(t)) : (n.next = i.next, i.next = n), t.interleaved = n, qc(e, a);
  }
  function YR(e, t, n, a) {
    var i = t.interleaved;
    i === null ? (n.next = n, Ep(t)) : (n.next = i.next, i.next = n), t.interleaved = n;
  }
  function KR(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ep(t)) : (n.next = i.next, i.next = n), t.interleaved = n, qc(e, a);
  }
  function Un(e, t) {
    return qc(e, t);
  }
  var WR = qc;
  function qc(e, t) {
    e.lanes = Pe(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Pe(n.lanes, t)), n === null && (e.flags & (Lt | gr)) !== be && pN(e);
    for (var a = e, i = e.return; i !== null; )
      i.childLanes = Pe(i.childLanes, t), n = i.alternate, n !== null ? n.childLanes = Pe(n.childLanes, t) : (i.flags & (Lt | gr)) !== be && pN(e), a = i, i = i.return;
    if (a.tag === b) {
      var u = a.stateNode;
      return u;
    } else
      return null;
  }
  var bb = 0, xb = 1, Qc = 2, Cp = 3, Xc = !1, wp, Zc;
  wp = !1, Zc = null;
  function jp(e) {
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
  function Nb(e, t) {
    var n = t.updateQueue, a = e.updateQueue;
    if (n === a) {
      var i = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
      };
      t.updateQueue = i;
    }
  }
  function Tr(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: bb,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function li(e, t, n) {
    var a = e.updateQueue;
    if (a === null)
      return null;
    var i = a.shared;
    if (Zc === i && !wp && (c("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), wp = !0), YD()) {
      var u = i.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, WR(e, n);
    } else
      return KR(e, i, t, n);
  }
  function ef(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var i = a.shared;
      if (Pg(n)) {
        var u = i.lanes;
        u = Mg(u, e.pendingLanes);
        var m = Pe(u, n);
        i.lanes = m, ym(e, m);
      }
    }
  }
  function Rp(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null) {
      var i = a.updateQueue;
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
    var j = n.lastBaseUpdate;
    j === null ? n.firstBaseUpdate = t : j.next = t, n.lastBaseUpdate = t;
  }
  function GR(e, t, n, a, i, u) {
    switch (n.tag) {
      case xb: {
        var m = n.payload;
        if (typeof m == "function") {
          hb();
          var g = m.call(u, a, i);
          {
            if (e.mode & Et) {
              Gt(!0);
              try {
                m.call(u, a, i);
              } finally {
                Gt(!1);
              }
            }
            vb();
          }
          return g;
        }
        return m;
      }
      case Cp:
        e.flags = e.flags & ~jn | Ze;
      case bb: {
        var x = n.payload, C;
        if (typeof x == "function") {
          hb(), C = x.call(u, a, i);
          {
            if (e.mode & Et) {
              Gt(!0);
              try {
                x.call(u, a, i);
              } finally {
                Gt(!1);
              }
            }
            vb();
          }
        } else
          C = x;
        return C == null ? a : Fe({}, a, C);
      }
      case Qc:
        return Xc = !0, a;
    }
    return a;
  }
  function tf(e, t, n, a) {
    var i = e.updateQueue;
    Xc = !1, Zc = i.shared;
    var u = i.firstBaseUpdate, m = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var x = g, C = x.next;
      x.next = null, m === null ? u = C : m.next = C, m = x;
      var j = e.alternate;
      if (j !== null) {
        var _ = j.updateQueue, L = _.lastBaseUpdate;
        L !== m && (L === null ? _.firstBaseUpdate = C : L.next = C, _.lastBaseUpdate = x);
      }
    }
    if (u !== null) {
      var J = i.baseState, B = q, K = null, re = null, he = null, fe = u;
      do {
        var Be = fe.lane, Ue = fe.eventTime;
        if (Po(a, Be)) {
          if (he !== null) {
            var W = {
              eventTime: Ue,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: qt,
              tag: fe.tag,
              payload: fe.payload,
              callback: fe.callback,
              next: null
            };
            he = he.next = W;
          }
          J = GR(e, i, fe, J, t, n);
          var $ = fe.callback;
          if ($ !== null && // If the update was already committed, we should not queue its
          // callback again.
          fe.lane !== qt) {
            e.flags |= Fd;
            var Z = i.effects;
            Z === null ? i.effects = [fe] : Z.push(fe);
          }
        } else {
          var F = {
            eventTime: Ue,
            lane: Be,
            tag: fe.tag,
            payload: fe.payload,
            callback: fe.callback,
            next: null
          };
          he === null ? (re = he = F, K = J) : he = he.next = F, B = Pe(B, Be);
        }
        if (fe = fe.next, fe === null) {
          if (g = i.shared.pending, g === null)
            break;
          var le = g, ie = le.next;
          le.next = null, fe = ie, i.lastBaseUpdate = le, i.shared.pending = null;
        }
      } while (!0);
      he === null && (K = J), i.baseState = K, i.firstBaseUpdate = re, i.lastBaseUpdate = he;
      var Ne = i.shared.interleaved;
      if (Ne !== null) {
        var Oe = Ne;
        do
          B = Pe(B, Oe.lane), Oe = Oe.next;
        while (Oe !== Ne);
      } else u === null && (i.shared.lanes = q);
      lu(B), e.lanes = B, e.memoizedState = J;
    }
    Zc = null;
  }
  function qR(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function Sb() {
    Xc = !1;
  }
  function nf() {
    return Xc;
  }
  function Eb(e, t, n) {
    var a = t.effects;
    if (t.effects = null, a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i], m = u.callback;
        m !== null && (u.callback = null, qR(m, n));
      }
  }
  var Ml = {}, ui = ri(Ml), Vl = ri(Ml), af = ri(Ml);
  function rf(e) {
    if (e === Ml)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function Cb() {
    var e = rf(af.current);
    return e;
  }
  function Tp(e, t) {
    bn(af, t, e), bn(Vl, e, e), bn(ui, Ml, e);
    var n = mj(t);
    yn(ui, e), bn(ui, n, e);
  }
  function Xo(e) {
    yn(ui, e), yn(Vl, e), yn(af, e);
  }
  function Dp() {
    var e = rf(ui.current);
    return e;
  }
  function wb(e) {
    rf(af.current);
    var t = rf(ui.current), n = pj(t, e.type);
    t !== n && (bn(Vl, e, e), bn(ui, n, e));
  }
  function kp(e) {
    Vl.current === e && (yn(ui, e), yn(Vl, e));
  }
  var QR = 0, jb = 1, Rb = 1, Ul = 2, La = ri(QR);
  function Op(e, t) {
    return (e & t) !== 0;
  }
  function Zo(e) {
    return e & jb;
  }
  function Lp(e, t) {
    return e & jb | t;
  }
  function XR(e, t) {
    return e | t;
  }
  function ci(e, t) {
    bn(La, t, e);
  }
  function es(e) {
    yn(La, e);
  }
  function ZR(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function of(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === V) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || By(a) || qm(a))
            return t;
        }
      } else if (t.tag === ve && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var i = (t.flags & Ze) !== be;
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
  var Fn = (
    /*   */
    0
  ), Vt = (
    /* */
    1
  ), qa = (
    /*  */
    2
  ), Ut = (
    /*    */
    4
  ), nn = (
    /*   */
    8
  ), _p = [];
  function Pp() {
    for (var e = 0; e < _p.length; e++) {
      var t = _p[e];
      t._workInProgressVersionPrimary = null;
    }
    _p.length = 0;
  }
  function eT(e, t) {
    var n = t._getVersion, a = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var se = s.ReactCurrentDispatcher, Fl = s.ReactCurrentBatchConfig, Ap, ts;
  Ap = /* @__PURE__ */ new Set();
  var to = q, ot = null, Ft = null, $t = null, sf = !1, $l = !1, zl = 0, tT = 0, nT = 25, G = null, ha = null, fi = -1, Mp = !1;
  function tt() {
    {
      var e = G;
      ha === null ? ha = [e] : ha.push(e);
    }
  }
  function te() {
    {
      var e = G;
      ha !== null && (fi++, ha[fi] !== e && aT(e));
    }
  }
  function ns(e) {
    e != null && !Xe(e) && c("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
  }
  function aT(e) {
    {
      var t = Le(ot);
      if (!Ap.has(t) && (Ap.add(t), ha !== null)) {
        for (var n = "", a = 30, i = 0; i <= fi; i++) {
          for (var u = ha[i], m = i === fi ? e : u, g = i + 1 + ". " + u; g.length < a; )
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
  function xn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Vp(e, t) {
    if (Mp)
      return !1;
    if (t === null)
      return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
    e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ea(e[n], t[n]))
        return !1;
    return !0;
  }
  function as(e, t, n, a, i, u) {
    to = u, ot = t, ha = e !== null ? e._debugHookTypes : null, fi = -1, Mp = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? se.current = Gb : ha !== null ? se.current = Wb : se.current = Kb;
    var m = n(a, i);
    if ($l) {
      var g = 0;
      do {
        if ($l = !1, zl = 0, g >= nT)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        g += 1, Mp = !1, Ft = null, $t = null, t.updateQueue = null, fi = -1, se.current = qb, m = n(a, i);
      } while ($l);
    }
    se.current = xf, t._debugHookTypes = ha;
    var x = Ft !== null && Ft.next !== null;
    if (to = q, ot = null, Ft = null, $t = null, G = null, ha = null, fi = -1, e !== null && (e.flags & br) !== (t.flags & br) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Je) !== ge && c("Internal React error: Expected static flag was missing. Please notify the React team."), sf = !1, x)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return m;
  }
  function rs() {
    var e = zl !== 0;
    return zl = 0, e;
  }
  function Tb(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Ya) !== ge ? t.flags &= ~(ec | yr | ja | Ie) : t.flags &= ~(ja | Ie), e.lanes = sc(e.lanes, n);
  }
  function Db() {
    if (se.current = xf, sf) {
      for (var e = ot.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      sf = !1;
    }
    to = q, ot = null, Ft = null, $t = null, ha = null, fi = -1, G = null, Jb = !1, $l = !1, zl = 0;
  }
  function Qa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $t === null ? ot.memoizedState = $t = e : $t = $t.next = e, $t;
  }
  function va() {
    var e;
    if (Ft === null) {
      var t = ot.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = Ft.next;
    var n;
    if ($t === null ? n = ot.memoizedState : n = $t.next, n !== null)
      $t = n, n = $t.next, Ft = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      Ft = e;
      var a = {
        memoizedState: Ft.memoizedState,
        baseState: Ft.baseState,
        baseQueue: Ft.baseQueue,
        queue: Ft.queue,
        next: null
      };
      $t === null ? ot.memoizedState = $t = a : $t = $t.next = a;
    }
    return $t;
  }
  function kb() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Up(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fp(e, t, n) {
    var a = Qa(), i;
    n !== void 0 ? i = n(t) : i = t, a.memoizedState = a.baseState = i;
    var u = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: i
    };
    a.queue = u;
    var m = u.dispatch = sT.bind(null, ot, u);
    return [a.memoizedState, m];
  }
  function $p(e, t, n) {
    var a = va(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = Ft, m = u.baseQueue, g = i.pending;
    if (g !== null) {
      if (m !== null) {
        var x = m.next, C = g.next;
        m.next = C, g.next = x;
      }
      u.baseQueue !== m && c("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = m = g, i.pending = null;
    }
    if (m !== null) {
      var j = m.next, _ = u.baseState, L = null, J = null, B = null, K = j;
      do {
        var re = K.lane;
        if (Po(to, re)) {
          if (B !== null) {
            var fe = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: qt,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            B = B.next = fe;
          }
          if (K.hasEagerState)
            _ = K.eagerState;
          else {
            var Be = K.action;
            _ = e(_, Be);
          }
        } else {
          var he = {
            lane: re,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          B === null ? (J = B = he, L = _) : B = B.next = he, ot.lanes = Pe(ot.lanes, re), lu(re);
        }
        K = K.next;
      } while (K !== null && K !== j);
      B === null ? L = _ : B.next = J, ea(_, a.memoizedState) || ql(), a.memoizedState = _, a.baseState = L, a.baseQueue = B, i.lastRenderedState = _;
    }
    var Ue = i.interleaved;
    if (Ue !== null) {
      var F = Ue;
      do {
        var W = F.lane;
        ot.lanes = Pe(ot.lanes, W), lu(W), F = F.next;
      } while (F !== Ue);
    } else m === null && (i.lanes = q);
    var $ = i.dispatch;
    return [a.memoizedState, $];
  }
  function zp(e, t, n) {
    var a = va(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = i.dispatch, m = i.pending, g = a.memoizedState;
    if (m !== null) {
      i.pending = null;
      var x = m.next, C = x;
      do {
        var j = C.action;
        g = e(g, j), C = C.next;
      } while (C !== x);
      ea(g, a.memoizedState) || ql(), a.memoizedState = g, a.baseQueue === null && (a.baseState = g), i.lastRenderedState = g;
    }
    return [g, u];
  }
  function bA(e, t, n) {
  }
  function xA(e, t, n) {
  }
  function Jp(e, t, n) {
    var a = ot, i = Qa(), u, m = tn();
    if (m) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      u = n(), ts || u !== n() && (c("The result of getServerSnapshot should be cached to avoid an infinite loop"), ts = !0);
    } else {
      if (u = t(), !ts) {
        var g = t();
        ea(u, g) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), ts = !0);
      }
      var x = Ff();
      if (x === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      oc(x, to) || Ob(a, t, u);
    }
    i.memoizedState = u;
    var C = {
      value: u,
      getSnapshot: t
    };
    return i.queue = C, df(_b.bind(null, a, C, e), [e]), a.flags |= ja, Jl(Vt | nn, Lb.bind(null, a, C, u, t), void 0, null), u;
  }
  function lf(e, t, n) {
    var a = ot, i = va(), u = t();
    if (!ts) {
      var m = t();
      ea(u, m) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), ts = !0);
    }
    var g = i.memoizedState, x = !ea(g, u);
    x && (i.memoizedState = u, ql());
    var C = i.queue;
    if (Bl(_b.bind(null, a, C, e), [e]), C.getSnapshot !== t || x || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    $t !== null && $t.memoizedState.tag & Vt) {
      a.flags |= ja, Jl(Vt | nn, Lb.bind(null, a, C, u, t), void 0, null);
      var j = Ff();
      if (j === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      oc(j, to) || Ob(a, t, u);
    }
    return u;
  }
  function Ob(e, t, n) {
    e.flags |= Zu;
    var a = {
      getSnapshot: t,
      value: n
    }, i = ot.updateQueue;
    if (i === null)
      i = kb(), ot.updateQueue = i, i.stores = [a];
    else {
      var u = i.stores;
      u === null ? i.stores = [a] : u.push(a);
    }
  }
  function Lb(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Pb(t) && Ab(e);
  }
  function _b(e, t, n) {
    var a = function() {
      Pb(t) && Ab(e);
    };
    return n(a);
  }
  function Pb(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var a = t();
      return !ea(n, a);
    } catch {
      return !0;
    }
  }
  function Ab(e) {
    var t = Un(e, De);
    t !== null && Bt(t, e, De, dt);
  }
  function uf(e) {
    var t = Qa();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: Up,
      lastRenderedState: e
    };
    t.queue = n;
    var a = n.dispatch = lT.bind(null, ot, n);
    return [t.memoizedState, a];
  }
  function Hp(e) {
    return $p(Up);
  }
  function Bp(e) {
    return zp(Up);
  }
  function Jl(e, t, n, a) {
    var i = {
      tag: e,
      create: t,
      destroy: n,
      deps: a,
      // Circular
      next: null
    }, u = ot.updateQueue;
    if (u === null)
      u = kb(), ot.updateQueue = u, u.lastEffect = i.next = i;
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
  function Ip(e) {
    var t = Qa();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function cf(e) {
    var t = va();
    return t.memoizedState;
  }
  function Hl(e, t, n, a) {
    var i = Qa(), u = a === void 0 ? null : a;
    ot.flags |= e, i.memoizedState = Jl(Vt | t, n, void 0, u);
  }
  function ff(e, t, n, a) {
    var i = va(), u = a === void 0 ? null : a, m = void 0;
    if (Ft !== null) {
      var g = Ft.memoizedState;
      if (m = g.destroy, u !== null) {
        var x = g.deps;
        if (Vp(u, x)) {
          i.memoizedState = Jl(t, n, m, u);
          return;
        }
      }
    }
    ot.flags |= e, i.memoizedState = Jl(Vt | t, n, m, u);
  }
  function df(e, t) {
    return (ot.mode & Ya) !== ge ? Hl(ec | ja | Jd, nn, e, t) : Hl(ja | Jd, nn, e, t);
  }
  function Bl(e, t) {
    return ff(ja, nn, e, t);
  }
  function Yp(e, t) {
    return Hl(Ie, qa, e, t);
  }
  function mf(e, t) {
    return ff(Ie, qa, e, t);
  }
  function Kp(e, t) {
    var n = Ie;
    return n |= Ui, (ot.mode & Ya) !== ge && (n |= yr), Hl(n, Ut, e, t);
  }
  function pf(e, t) {
    return ff(Ie, Ut, e, t);
  }
  function Mb(e, t) {
    if (typeof t == "function") {
      var n = t, a = e();
      return n(a), function() {
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
  function Wp(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null, i = Ie;
    return i |= Ui, (ot.mode & Ya) !== ge && (i |= yr), Hl(i, Ut, Mb.bind(null, t, e), a);
  }
  function hf(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null;
    return ff(Ie, Ut, Mb.bind(null, t, e), a);
  }
  function rT(e, t) {
  }
  var vf = rT;
  function Gp(e, t) {
    var n = Qa(), a = t === void 0 ? null : t;
    return n.memoizedState = [e, a], e;
  }
  function gf(e, t) {
    var n = va(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (Vp(a, u))
        return i[0];
    }
    return n.memoizedState = [e, a], e;
  }
  function qp(e, t) {
    var n = Qa(), a = t === void 0 ? null : t, i = e();
    return n.memoizedState = [i, a], i;
  }
  function yf(e, t) {
    var n = va(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (Vp(a, u))
        return i[0];
    }
    var m = e();
    return n.memoizedState = [m, a], m;
  }
  function Qp(e) {
    var t = Qa();
    return t.memoizedState = e, e;
  }
  function Vb(e) {
    var t = va(), n = Ft, a = n.memoizedState;
    return Fb(t, a, e);
  }
  function Ub(e) {
    var t = va();
    if (Ft === null)
      return t.memoizedState = e, e;
    var n = Ft.memoizedState;
    return Fb(t, n, e);
  }
  function Fb(e, t, n) {
    var a = !HE(to);
    if (a) {
      if (!ea(n, t)) {
        var i = Ag();
        ot.lanes = Pe(ot.lanes, i), lu(i), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, ql()), e.memoizedState = n, n;
  }
  function iT(e, t, n) {
    var a = Ta();
    Qt(XE(a, Nr)), e(!0);
    var i = Fl.transition;
    Fl.transition = {};
    var u = Fl.transition;
    Fl.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (Qt(a), Fl.transition = i, i === null && u._updatedFibers) {
        var m = u._updatedFibers.size;
        m > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function Xp() {
    var e = uf(!1), t = e[0], n = e[1], a = iT.bind(null, n), i = Qa();
    return i.memoizedState = a, [t, a];
  }
  function $b() {
    var e = Hp(), t = e[0], n = va(), a = n.memoizedState;
    return [t, a];
  }
  function zb() {
    var e = Bp(), t = e[0], n = va(), a = n.memoizedState;
    return [t, a];
  }
  var Jb = !1;
  function oT() {
    return Jb;
  }
  function Zp() {
    var e = Qa(), t = Ff(), n = t.identifierPrefix, a;
    if (tn()) {
      var i = ER();
      a = ":" + n + "R" + i;
      var u = zl++;
      u > 0 && (a += "H" + u.toString(32)), a += ":";
    } else {
      var m = tT++;
      a = ":" + n + "r" + m.toString(32) + ":";
    }
    return e.memoizedState = a, a;
  }
  function bf() {
    var e = va(), t = e.memoizedState;
    return t;
  }
  function sT(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = vi(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hb(e))
      Bb(t, i);
    else {
      var u = yb(e, t, i, a);
      if (u !== null) {
        var m = Dn();
        Bt(u, e, a, m), Ib(u, t, a);
      }
    }
    Yb(e, a);
  }
  function lT(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = vi(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hb(e))
      Bb(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === q && (u === null || u.lanes === q)) {
        var m = t.lastRenderedReducer;
        if (m !== null) {
          var g;
          g = se.current, se.current = _a;
          try {
            var x = t.lastRenderedState, C = m(x, n);
            if (i.hasEagerState = !0, i.eagerState = C, ea(C, x)) {
              YR(e, t, i, a);
              return;
            }
          } catch {
          } finally {
            se.current = g;
          }
        }
      }
      var j = yb(e, t, i, a);
      if (j !== null) {
        var _ = Dn();
        Bt(j, e, a, _), Ib(j, t, a);
      }
    }
    Yb(e, a);
  }
  function Hb(e) {
    var t = e.alternate;
    return e === ot || t !== null && t === ot;
  }
  function Bb(e, t) {
    $l = sf = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ib(e, t, n) {
    if (Pg(n)) {
      var a = t.lanes;
      a = Mg(a, e.pendingLanes);
      var i = Pe(a, n);
      t.lanes = i, ym(e, i);
    }
  }
  function Yb(e, t, n) {
    Kd(e, t);
  }
  var xf = {
    readContext: _t,
    useCallback: xn,
    useContext: xn,
    useEffect: xn,
    useImperativeHandle: xn,
    useInsertionEffect: xn,
    useLayoutEffect: xn,
    useMemo: xn,
    useReducer: xn,
    useRef: xn,
    useState: xn,
    useDebugValue: xn,
    useDeferredValue: xn,
    useTransition: xn,
    useMutableSource: xn,
    useSyncExternalStore: xn,
    useId: xn,
    unstable_isNewReconciler: Qe
  }, Kb = null, Wb = null, Gb = null, qb = null, Xa = null, _a = null, Nf = null;
  {
    var eh = function() {
      c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, ke = function() {
      c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Kb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", tt(), ns(t), Gp(e, t);
      },
      useContext: function(e) {
        return G = "useContext", tt(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", tt(), ns(t), df(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", tt(), ns(n), Wp(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", tt(), ns(t), Yp(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", tt(), ns(t), Kp(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", tt(), ns(t);
        var n = se.current;
        se.current = Xa;
        try {
          return qp(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", tt();
        var a = se.current;
        se.current = Xa;
        try {
          return Fp(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", tt(), Ip(e);
      },
      useState: function(e) {
        G = "useState", tt();
        var t = se.current;
        se.current = Xa;
        try {
          return uf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", tt(), Qp(e);
      },
      useTransition: function() {
        return G = "useTransition", tt(), Xp();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", tt(), Jp(e, t, n);
      },
      useId: function() {
        return G = "useId", tt(), Zp();
      },
      unstable_isNewReconciler: Qe
    }, Wb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Gp(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), df(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), Wp(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), Yp(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), Kp(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Xa;
        try {
          return qp(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = Xa;
        try {
          return Fp(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), Ip(e);
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Xa;
        try {
          return uf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Qp(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), Xp();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), Jp(e, t, n);
      },
      useId: function() {
        return G = "useId", te(), Zp();
      },
      unstable_isNewReconciler: Qe
    }, Gb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Bl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), hf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), mf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), pf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = _a;
        try {
          return yf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = _a;
        try {
          return $p(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), cf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = _a;
        try {
          return Hp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), vf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Vb(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), $b();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), lf(e, t);
      },
      useId: function() {
        return G = "useId", te(), bf();
      },
      unstable_isNewReconciler: Qe
    }, qb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Bl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), hf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), mf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), pf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Nf;
        try {
          return yf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = Nf;
        try {
          return zp(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), cf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Nf;
        try {
          return Bp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), vf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Ub(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), zb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), lf(e, t);
      },
      useId: function() {
        return G = "useId", te(), bf();
      },
      unstable_isNewReconciler: Qe
    }, Xa = {
      readContext: function(e) {
        return eh(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", ke(), tt(), Gp(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ke(), tt(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", ke(), tt(), df(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", ke(), tt(), Wp(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ke(), tt(), Yp(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ke(), tt(), Kp(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ke(), tt();
        var n = se.current;
        se.current = Xa;
        try {
          return qp(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", ke(), tt();
        var a = se.current;
        se.current = Xa;
        try {
          return Fp(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", ke(), tt(), Ip(e);
      },
      useState: function(e) {
        G = "useState", ke(), tt();
        var t = se.current;
        se.current = Xa;
        try {
          return uf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", ke(), tt(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", ke(), tt(), Qp(e);
      },
      useTransition: function() {
        return G = "useTransition", ke(), tt(), Xp();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", ke(), tt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", ke(), tt(), Jp(e, t, n);
      },
      useId: function() {
        return G = "useId", ke(), tt(), Zp();
      },
      unstable_isNewReconciler: Qe
    }, _a = {
      readContext: function(e) {
        return eh(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", ke(), te(), gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ke(), te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", ke(), te(), Bl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", ke(), te(), hf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ke(), te(), mf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ke(), te(), pf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ke(), te();
        var n = se.current;
        se.current = _a;
        try {
          return yf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", ke(), te();
        var a = se.current;
        se.current = _a;
        try {
          return $p(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", ke(), te(), cf();
      },
      useState: function(e) {
        G = "useState", ke(), te();
        var t = se.current;
        se.current = _a;
        try {
          return Hp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", ke(), te(), vf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", ke(), te(), Vb(e);
      },
      useTransition: function() {
        return G = "useTransition", ke(), te(), $b();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", ke(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", ke(), te(), lf(e, t);
      },
      useId: function() {
        return G = "useId", ke(), te(), bf();
      },
      unstable_isNewReconciler: Qe
    }, Nf = {
      readContext: function(e) {
        return eh(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", ke(), te(), gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ke(), te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", ke(), te(), Bl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", ke(), te(), hf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ke(), te(), mf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ke(), te(), pf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ke(), te();
        var n = se.current;
        se.current = _a;
        try {
          return yf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", ke(), te();
        var a = se.current;
        se.current = _a;
        try {
          return zp(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", ke(), te(), cf();
      },
      useState: function(e) {
        G = "useState", ke(), te();
        var t = se.current;
        se.current = _a;
        try {
          return Bp(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", ke(), te(), vf();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", ke(), te(), Ub(e);
      },
      useTransition: function() {
        return G = "useTransition", ke(), te(), zb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", ke(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", ke(), te(), lf(e, t);
      },
      useId: function() {
        return G = "useId", ke(), te(), bf();
      },
      unstable_isNewReconciler: Qe
    };
  }
  var di = r.unstable_now, Qb = 0, Sf = -1, Il = -1, Ef = -1, th = !1, Cf = !1;
  function Xb() {
    return th;
  }
  function uT() {
    Cf = !0;
  }
  function cT() {
    th = !1, Cf = !1;
  }
  function fT() {
    th = Cf, Cf = !1;
  }
  function Zb() {
    return Qb;
  }
  function ex() {
    Qb = di();
  }
  function nh(e) {
    Il = di(), e.actualStartTime < 0 && (e.actualStartTime = di());
  }
  function tx(e) {
    Il = -1;
  }
  function wf(e, t) {
    if (Il >= 0) {
      var n = di() - Il;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Il = -1;
    }
  }
  function Za(e) {
    if (Sf >= 0) {
      var t = di() - Sf;
      Sf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case b:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case T:
            var i = n.stateNode;
            i.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function ah(e) {
    if (Ef >= 0) {
      var t = di() - Ef;
      Ef = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case b:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case T:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function er() {
    Sf = di();
  }
  function rh() {
    Ef = di();
  }
  function ih(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Pa(e, t) {
    if (e && e.defaultProps) {
      var n = Fe({}, t), a = e.defaultProps;
      for (var i in a)
        n[i] === void 0 && (n[i] = a[i]);
      return n;
    }
    return t;
  }
  var oh = {}, sh, lh, uh, ch, fh, nx, jf, dh, mh, ph, Yl;
  {
    sh = /* @__PURE__ */ new Set(), lh = /* @__PURE__ */ new Set(), uh = /* @__PURE__ */ new Set(), ch = /* @__PURE__ */ new Set(), dh = /* @__PURE__ */ new Set(), fh = /* @__PURE__ */ new Set(), mh = /* @__PURE__ */ new Set(), ph = /* @__PURE__ */ new Set(), Yl = /* @__PURE__ */ new Set();
    var ax = /* @__PURE__ */ new Set();
    jf = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        ax.has(n) || (ax.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, nx = function(e, t) {
      if (t === void 0) {
        var n = Ye(e) || "Component";
        fh.has(n) || (fh.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(oh, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(oh);
  }
  function hh(e, t, n, a) {
    var i = e.memoizedState, u = n(a, i);
    {
      if (e.mode & Et) {
        Gt(!0);
        try {
          u = n(a, i);
        } finally {
          Gt(!1);
        }
      }
      nx(t, u);
    }
    var m = u == null ? i : Fe({}, i, u);
    if (e.memoizedState = m, e.lanes === q) {
      var g = e.updateQueue;
      g.baseState = m;
    }
  }
  var vh = {
    isMounted: nE,
    enqueueSetState: function(e, t, n) {
      var a = jo(e), i = Dn(), u = vi(a), m = Tr(i, u);
      m.payload = t, n != null && (jf(n, "setState"), m.callback = n);
      var g = li(a, m, u);
      g !== null && (Bt(g, a, u, i), ef(g, a, u)), Kd(a, u);
    },
    enqueueReplaceState: function(e, t, n) {
      var a = jo(e), i = Dn(), u = vi(a), m = Tr(i, u);
      m.tag = xb, m.payload = t, n != null && (jf(n, "replaceState"), m.callback = n);
      var g = li(a, m, u);
      g !== null && (Bt(g, a, u, i), ef(g, a, u)), Kd(a, u);
    },
    enqueueForceUpdate: function(e, t) {
      var n = jo(e), a = Dn(), i = vi(n), u = Tr(a, i);
      u.tag = Qc, t != null && (jf(t, "forceUpdate"), u.callback = t);
      var m = li(n, u, i);
      m !== null && (Bt(m, n, i, a), ef(m, n, i)), _E(n, i);
    }
  };
  function rx(e, t, n, a, i, u, m) {
    var g = e.stateNode;
    if (typeof g.shouldComponentUpdate == "function") {
      var x = g.shouldComponentUpdate(a, u, m);
      {
        if (e.mode & Et) {
          Gt(!0);
          try {
            x = g.shouldComponentUpdate(a, u, m);
          } finally {
            Gt(!1);
          }
        }
        x === void 0 && c("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ye(t) || "Component");
      }
      return x;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !pl(n, a) || !pl(i, u) : !0;
  }
  function dT(e, t, n) {
    var a = e.stateNode;
    {
      var i = Ye(t) || "Component", u = a.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), a.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), a.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), t.childContextTypes && !Yl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ge && (Yl.add(t), c(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), t.contextTypes && !Yl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ge && (Yl.add(t), c(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), a.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !mh.has(t) && (mh.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof a.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ye(t) || "A pure component"), typeof a.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof a.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof a.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof a.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
      var m = a.props !== n;
      a.props !== void 0 && m && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), a.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !uh.has(t) && (uh.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ye(t))), typeof a.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof a.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
      var g = a.state;
      g && (typeof g != "object" || Xe(g)) && c("%s.state: must be set to an object or null", i), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
    }
  }
  function ix(e, t) {
    t.updater = vh, e.stateNode = t, Q1(t, e), t._reactInternalInstance = oh;
  }
  function ox(e, t, n) {
    var a = !1, i = ta, u = ta, m = t.contextType;
    if ("contextType" in t) {
      var g = (
        // Allow null for conditional declaration
        m === null || m !== void 0 && m.$$typeof === $e && m._context === void 0
      );
      if (!g && !ph.has(t)) {
        ph.add(t);
        var x = "";
        m === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? x = " However, it is set to a " + typeof m + "." : m.$$typeof === ye ? x = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ye(t) || "Component", x);
      }
    }
    if (typeof m == "object" && m !== null)
      u = _t(m);
    else {
      i = Bo(e, t, !0);
      var C = t.contextTypes;
      a = C != null, u = a ? Io(e, i) : ta;
    }
    var j = new t(n, u);
    if (e.mode & Et) {
      Gt(!0);
      try {
        j = new t(n, u);
      } finally {
        Gt(!1);
      }
    }
    var _ = e.memoizedState = j.state !== null && j.state !== void 0 ? j.state : null;
    ix(e, j);
    {
      if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
        var L = Ye(t) || "Component";
        lh.has(L) || (lh.add(L), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, j.state === null ? "null" : "undefined", L));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof j.getSnapshotBeforeUpdate == "function") {
        var J = null, B = null, K = null;
        if (typeof j.componentWillMount == "function" && j.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof j.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof j.componentWillReceiveProps == "function" && j.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof j.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof j.componentWillUpdate == "function" && j.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof j.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), J !== null || B !== null || K !== null) {
          var re = Ye(t) || "Component", he = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          ch.has(re) || (ch.add(re), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, re, he, J !== null ? `
  ` + J : "", B !== null ? `
  ` + B : "", K !== null ? `
  ` + K : ""));
        }
      }
    }
    return a && Gy(e, i, u), j;
  }
  function mT(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e) || "Component"), vh.enqueueReplaceState(t, t.state, null));
  }
  function sx(e, t, n, a) {
    var i = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== i) {
      {
        var u = Le(e) || "Component";
        sh.has(u) || (sh.add(u), c("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      vh.enqueueReplaceState(t, t.state, null);
    }
  }
  function gh(e, t, n, a) {
    dT(e, t, n);
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, jp(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      i.context = _t(u);
    else {
      var m = Bo(e, t, !0);
      i.context = Io(e, m);
    }
    {
      if (i.state === n) {
        var g = Ye(t) || "Component";
        dh.has(g) || (dh.add(g), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
      }
      e.mode & Et && Oa.recordLegacyContextWarning(e, i), Oa.recordUnsafeLifecycleWarnings(e, i);
    }
    i.state = e.memoizedState;
    var x = t.getDerivedStateFromProps;
    if (typeof x == "function" && (hh(e, t, x, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (mT(e, i), tf(e, n, i, a), i.state = e.memoizedState), typeof i.componentDidMount == "function") {
      var C = Ie;
      C |= Ui, (e.mode & Ya) !== ge && (C |= yr), e.flags |= C;
    }
  }
  function pT(e, t, n, a) {
    var i = e.stateNode, u = e.memoizedProps;
    i.props = u;
    var m = i.context, g = t.contextType, x = ta;
    if (typeof g == "object" && g !== null)
      x = _t(g);
    else {
      var C = Bo(e, t, !0);
      x = Io(e, C);
    }
    var j = t.getDerivedStateFromProps, _ = typeof j == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !_ && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== n || m !== x) && sx(e, i, n, x), Sb();
    var L = e.memoizedState, J = i.state = L;
    if (tf(e, n, i, a), J = e.memoizedState, u === n && L === J && !Mc() && !nf()) {
      if (typeof i.componentDidMount == "function") {
        var B = Ie;
        B |= Ui, (e.mode & Ya) !== ge && (B |= yr), e.flags |= B;
      }
      return !1;
    }
    typeof j == "function" && (hh(e, t, j, n), J = e.memoizedState);
    var K = nf() || rx(e, t, u, n, L, J, x);
    if (K) {
      if (!_ && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function") {
        var re = Ie;
        re |= Ui, (e.mode & Ya) !== ge && (re |= yr), e.flags |= re;
      }
    } else {
      if (typeof i.componentDidMount == "function") {
        var he = Ie;
        he |= Ui, (e.mode & Ya) !== ge && (he |= yr), e.flags |= he;
      }
      e.memoizedProps = n, e.memoizedState = J;
    }
    return i.props = n, i.state = J, i.context = x, K;
  }
  function hT(e, t, n, a, i) {
    var u = t.stateNode;
    Nb(e, t);
    var m = t.memoizedProps, g = t.type === t.elementType ? m : Pa(t.type, m);
    u.props = g;
    var x = t.pendingProps, C = u.context, j = n.contextType, _ = ta;
    if (typeof j == "object" && j !== null)
      _ = _t(j);
    else {
      var L = Bo(t, n, !0);
      _ = Io(t, L);
    }
    var J = n.getDerivedStateFromProps, B = typeof J == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !B && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (m !== x || C !== _) && sx(t, u, a, _), Sb();
    var K = t.memoizedState, re = u.state = K;
    if (tf(t, a, u, i), re = t.memoizedState, m === x && K === re && !Mc() && !nf() && !Dt)
      return typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Mi), !1;
    typeof J == "function" && (hh(t, n, J, a), re = t.memoizedState);
    var he = nf() || rx(t, n, g, a, K, re, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    Dt;
    return he ? (!B && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, re, _), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, re, _)), typeof u.componentDidUpdate == "function" && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= Mi)) : (typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Mi), t.memoizedProps = a, t.memoizedState = re), u.props = a, u.state = re, u.context = _, he;
  }
  function no(e, t) {
    return {
      value: e,
      source: t,
      stack: _s(t),
      digest: null
    };
  }
  function yh(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function vT(e, t) {
    return !0;
  }
  function bh(e, t) {
    try {
      var n = vT(e, t);
      if (n === !1)
        return;
      var a = t.value, i = t.source, u = t.stack, m = u !== null ? u : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === p)
          return;
        console.error(a);
      }
      var g = i ? Le(i) : null, x = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", C;
      if (e.tag === b)
        C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var j = Le(e) || "Anonymous";
        C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + j + ".");
      }
      var _ = x + `
` + m + `

` + ("" + C);
      console.error(_);
    } catch (L) {
      setTimeout(function() {
        throw L;
      });
    }
  }
  var gT = typeof WeakMap == "function" ? WeakMap : Map;
  function lx(e, t, n) {
    var a = Tr(dt, n);
    a.tag = Cp, a.payload = {
      element: null
    };
    var i = t.value;
    return a.callback = function() {
      uk(i), bh(e, t);
    }, a;
  }
  function xh(e, t, n) {
    var a = Tr(dt, n);
    a.tag = Cp;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = t.value;
      a.payload = function() {
        return i(u);
      }, a.callback = function() {
        bN(e), bh(e, t);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (a.callback = function() {
      bN(e), bh(e, t), typeof i != "function" && sk(this);
      var x = t.value, C = t.stack;
      this.componentDidCatch(x, {
        componentStack: C !== null ? C : ""
      }), typeof i != "function" && (Qn(e.lanes, De) || c("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e) || "Unknown"));
    }), a;
  }
  function ux(e, t, n) {
    var a = e.pingCache, i;
    if (a === null ? (a = e.pingCache = new gT(), i = /* @__PURE__ */ new Set(), a.set(t, i)) : (i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i))), !i.has(n)) {
      i.add(n);
      var u = ck.bind(null, e, t, n);
      Ra && uu(e, n), t.then(u, u);
    }
  }
  function yT(e, t, n, a) {
    var i = e.updateQueue;
    if (i === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(n), e.updateQueue = u;
    } else
      i.add(n);
  }
  function bT(e, t) {
    var n = e.tag;
    if ((e.mode & Je) === ge && (n === v || n === z || n === Q)) {
      var a = e.alternate;
      a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function cx(e) {
    var t = e;
    do {
      if (t.tag === V && ZR(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function fx(e, t, n, a, i) {
    if ((e.mode & Je) === ge) {
      if (e === t)
        e.flags |= jn;
      else {
        if (e.flags |= Ze, n.flags |= $d, n.flags &= ~(X1 | Is), n.tag === p) {
          var u = n.alternate;
          if (u === null)
            n.tag = je;
          else {
            var m = Tr(dt, De);
            m.tag = Qc, li(n, m, De);
          }
        }
        n.lanes = Pe(n.lanes, De);
      }
      return e;
    }
    return e.flags |= jn, e.lanes = i, e;
  }
  function xT(e, t, n, a, i) {
    if (n.flags |= Is, Ra && uu(e, i), a !== null && typeof a == "object" && typeof a.then == "function") {
      var u = a;
      bT(n), tn() && n.mode & Je && nb();
      var m = cx(t);
      if (m !== null) {
        m.flags &= ~vr, fx(m, t, n, e, i), m.mode & Je && ux(e, u, i), yT(m, e, u);
        return;
      } else {
        if (!JE(i)) {
          ux(e, u, i), Zh();
          return;
        }
        var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        a = g;
      }
    } else if (tn() && n.mode & Je) {
      nb();
      var x = cx(t);
      if (x !== null) {
        (x.flags & jn) === be && (x.flags |= vr), fx(x, t, n, e, i), dp(no(a, n));
        return;
      }
    }
    a = no(a, n), ZD(a);
    var C = t;
    do {
      switch (C.tag) {
        case b: {
          var j = a;
          C.flags |= jn;
          var _ = Zs(i);
          C.lanes = Pe(C.lanes, _);
          var L = lx(C, j, _);
          Rp(C, L);
          return;
        }
        case p:
          var J = a, B = C.type, K = C.stateNode;
          if ((C.flags & Ze) === be && (typeof B.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !cN(K))) {
            C.flags |= jn;
            var re = Zs(i);
            C.lanes = Pe(C.lanes, re);
            var he = xh(C, J, re);
            Rp(C, he);
            return;
          }
          break;
      }
      C = C.return;
    } while (C !== null);
  }
  function NT() {
    return null;
  }
  var Kl = s.ReactCurrentOwner, Aa = !1, Nh, Wl, Sh, Eh, Ch, ao, wh, Rf, Gl;
  Nh = {}, Wl = {}, Sh = {}, Eh = {}, Ch = {}, ao = !1, wh = {}, Rf = {}, Gl = {};
  function Rn(e, t, n, a) {
    e === null ? t.child = pb(t, null, n, a) : t.child = Go(t, e.child, n, a);
  }
  function ST(e, t, n, a) {
    t.child = Go(t, e.child, null, a), t.child = Go(t, null, n, a);
  }
  function dx(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Da(
        u,
        a,
        // Resolved props
        "prop",
        Ye(n)
      );
    }
    var m = n.render, g = t.ref, x, C;
    Qo(t, i), Ks(t);
    {
      if (Kl.current = t, Gn(!0), x = as(e, t, m, a, g, i), C = rs(), t.mode & Et) {
        Gt(!0);
        try {
          x = as(e, t, m, a, g, i), C = rs();
        } finally {
          Gt(!1);
        }
      }
      Gn(!1);
    }
    return ko(), e !== null && !Aa ? (Tb(e, t, i), Dr(e, t, i)) : (tn() && C && op(t), t.flags |= Ro, Rn(e, t, x, i), t.child);
  }
  function mx(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      if (Rk(u) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var m = u;
        return m = ds(u), t.tag = Q, t.type = m, Th(t, u), px(e, t, m, a, i);
      }
      {
        var g = u.propTypes;
        if (g && Da(
          g,
          a,
          // Resolved props
          "prop",
          Ye(u)
        ), n.defaultProps !== void 0) {
          var x = Ye(u) || "Unknown";
          Gl[x] || (c("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", x), Gl[x] = !0);
        }
      }
      var C = cv(n.type, null, a, t, t.mode, i);
      return C.ref = t.ref, C.return = t, t.child = C, C;
    }
    {
      var j = n.type, _ = j.propTypes;
      _ && Da(
        _,
        a,
        // Resolved props
        "prop",
        Ye(j)
      );
    }
    var L = e.child, J = Ph(e, i);
    if (!J) {
      var B = L.memoizedProps, K = n.compare;
      if (K = K !== null ? K : pl, K(B, a) && e.ref === t.ref)
        return Dr(e, t, i);
    }
    t.flags |= Ro;
    var re = lo(L, a);
    return re.ref = t.ref, re.return = t, t.child = re, re;
  }
  function px(e, t, n, a, i) {
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
        C && Da(
          C,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ye(u)
        );
      }
    }
    if (e !== null) {
      var j = e.memoizedProps;
      if (pl(j, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Aa = !1, t.pendingProps = a = j, Ph(e, i))
          (e.flags & $d) !== be && (Aa = !0);
        else return t.lanes = e.lanes, Dr(e, t, i);
    }
    return jh(e, t, n, a, i);
  }
  function hx(e, t, n) {
    var a = t.pendingProps, i = a.children, u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || Ke)
      if ((t.mode & Je) === ge) {
        var m = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = m, $f(t, n);
      } else if (Qn(n, qn)) {
        var _ = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = _;
        var L = u !== null ? u.baseLanes : n;
        $f(t, L);
      } else {
        var g = null, x;
        if (u !== null) {
          var C = u.baseLanes;
          x = Pe(C, n);
        } else
          x = n;
        t.lanes = t.childLanes = qn;
        var j = {
          baseLanes: x,
          cachePool: g,
          transitions: null
        };
        return t.memoizedState = j, t.updateQueue = null, $f(t, x), null;
      }
    else {
      var J;
      u !== null ? (J = Pe(u.baseLanes, n), t.memoizedState = null) : J = n, $f(t, J);
    }
    return Rn(e, t, i, n), t.child;
  }
  function ET(e, t, n) {
    var a = t.pendingProps;
    return Rn(e, t, a, n), t.child;
  }
  function CT(e, t, n) {
    var a = t.pendingProps.children;
    return Rn(e, t, a, n), t.child;
  }
  function wT(e, t, n) {
    {
      t.flags |= Ie;
      {
        var a = t.stateNode;
        a.effectDuration = 0, a.passiveEffectDuration = 0;
      }
    }
    var i = t.pendingProps, u = i.children;
    return Rn(e, t, u, n), t.child;
  }
  function vx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= qr, t.flags |= zd);
  }
  function jh(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Da(
        u,
        a,
        // Resolved props
        "prop",
        Ye(n)
      );
    }
    var m;
    {
      var g = Bo(t, n, !0);
      m = Io(t, g);
    }
    var x, C;
    Qo(t, i), Ks(t);
    {
      if (Kl.current = t, Gn(!0), x = as(e, t, n, a, m, i), C = rs(), t.mode & Et) {
        Gt(!0);
        try {
          x = as(e, t, n, a, m, i), C = rs();
        } finally {
          Gt(!1);
        }
      }
      Gn(!1);
    }
    return ko(), e !== null && !Aa ? (Tb(e, t, i), Dr(e, t, i)) : (tn() && C && op(t), t.flags |= Ro, Rn(e, t, x, i), t.child);
  }
  function gx(e, t, n, a, i) {
    {
      switch (Jk(t)) {
        case !1: {
          var u = t.stateNode, m = t.type, g = new m(t.memoizedProps, u.context), x = g.state;
          u.updater.enqueueSetState(u, x, null);
          break;
        }
        case !0: {
          t.flags |= Ze, t.flags |= jn;
          var C = new Error("Simulated error coming from DevTools"), j = Zs(i);
          t.lanes = Pe(t.lanes, j);
          var _ = xh(t, no(C, t), j);
          Rp(t, _);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var L = n.propTypes;
        L && Da(
          L,
          a,
          // Resolved props
          "prop",
          Ye(n)
        );
      }
    }
    var J;
    Ga(n) ? (J = !0, Uc(t)) : J = !1, Qo(t, i);
    var B = t.stateNode, K;
    B === null ? (Df(e, t), ox(t, n, a), gh(t, n, a, i), K = !0) : e === null ? K = pT(t, n, a, i) : K = hT(e, t, n, a, i);
    var re = Rh(e, t, n, K, J, i);
    {
      var he = t.stateNode;
      K && he.props !== a && (ao || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t) || "a component"), ao = !0);
    }
    return re;
  }
  function Rh(e, t, n, a, i, u) {
    vx(e, t);
    var m = (t.flags & Ze) !== be;
    if (!a && !m)
      return i && Xy(t, n, !1), Dr(e, t, u);
    var g = t.stateNode;
    Kl.current = t;
    var x;
    if (m && typeof n.getDerivedStateFromError != "function")
      x = null, tx();
    else {
      Ks(t);
      {
        if (Gn(!0), x = g.render(), t.mode & Et) {
          Gt(!0);
          try {
            g.render();
          } finally {
            Gt(!1);
          }
        }
        Gn(!1);
      }
      ko();
    }
    return t.flags |= Ro, e !== null && m ? ST(e, t, x, u) : Rn(e, t, x, u), t.memoizedState = g.state, i && Xy(t, n, !0), t.child;
  }
  function yx(e) {
    var t = e.stateNode;
    t.pendingContext ? qy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qy(e, t.context, !1), Tp(e, t.containerInfo);
  }
  function jT(e, t, n) {
    if (yx(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps, i = t.memoizedState, u = i.element;
    Nb(e, t), tf(t, a, null, n);
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
      if (C.baseState = x, t.memoizedState = x, t.flags & vr) {
        var j = no(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return bx(e, t, g, n, j);
      } else if (g !== u) {
        var _ = no(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return bx(e, t, g, n, _);
      } else {
        DR(t);
        var L = pb(t, null, g, n);
        t.child = L;
        for (var J = L; J; )
          J.flags = J.flags & ~Lt | gr, J = J.sibling;
      }
    } else {
      if (Wo(), g === u)
        return Dr(e, t, n);
      Rn(e, t, g, n);
    }
    return t.child;
  }
  function bx(e, t, n, a, i) {
    return Wo(), dp(i), t.flags |= vr, Rn(e, t, n, a), t.child;
  }
  function RT(e, t, n) {
    wb(t), e === null && fp(t);
    var a = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = i.children, g = Ym(a, i);
    return g ? m = null : u !== null && Ym(a, u) && (t.flags |= Bs), vx(e, t), Rn(e, t, m, n), t.child;
  }
  function TT(e, t) {
    return e === null && fp(t), null;
  }
  function DT(e, t, n, a) {
    Df(e, t);
    var i = t.pendingProps, u = n, m = u._payload, g = u._init, x = g(m);
    t.type = x;
    var C = t.tag = Tk(x), j = Pa(x, i), _;
    switch (C) {
      case v:
        return Th(t, x), t.type = x = ds(x), _ = jh(null, t, x, j, a), _;
      case p:
        return t.type = x = rv(x), _ = gx(null, t, x, j, a), _;
      case z:
        return t.type = x = iv(x), _ = dx(null, t, x, j, a), _;
      case I: {
        if (t.type !== t.elementType) {
          var L = x.propTypes;
          L && Da(
            L,
            j,
            // Resolved for outer only
            "prop",
            Ye(x)
          );
        }
        return _ = mx(
          null,
          t,
          x,
          Pa(x.type, j),
          // The inner type can have defaults too
          a
        ), _;
      }
    }
    var J = "";
    throw x !== null && typeof x == "object" && x.$$typeof === Ve && (J = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + x + ". " + ("Lazy element type must resolve to a class or function." + J));
  }
  function kT(e, t, n, a, i) {
    Df(e, t), t.tag = p;
    var u;
    return Ga(n) ? (u = !0, Uc(t)) : u = !1, Qo(t, i), ox(t, n, a), gh(t, n, a, i), Rh(null, t, n, !0, u, i);
  }
  function OT(e, t, n, a) {
    Df(e, t);
    var i = t.pendingProps, u;
    {
      var m = Bo(t, n, !1);
      u = Io(t, m);
    }
    Qo(t, a);
    var g, x;
    Ks(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var C = Ye(n) || "Unknown";
        Nh[C] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), Nh[C] = !0);
      }
      t.mode & Et && Oa.recordLegacyContextWarning(t, null), Gn(!0), Kl.current = t, g = as(null, t, n, i, u, a), x = rs(), Gn(!1);
    }
    if (ko(), t.flags |= Ro, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
      var j = Ye(n) || "Unknown";
      Wl[j] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), Wl[j] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
    ) {
      {
        var _ = Ye(n) || "Unknown";
        Wl[_] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Wl[_] = !0);
      }
      t.tag = p, t.memoizedState = null, t.updateQueue = null;
      var L = !1;
      return Ga(n) ? (L = !0, Uc(t)) : L = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, jp(t), ix(t, g), gh(t, n, i, a), Rh(null, t, n, !0, L, a);
    } else {
      if (t.tag = v, t.mode & Et) {
        Gt(!0);
        try {
          g = as(null, t, n, i, u, a), x = rs();
        } finally {
          Gt(!1);
        }
      }
      return tn() && x && op(t), Rn(null, t, g, a), Th(t, n), t.child;
    }
  }
  function Th(e, t) {
    {
      if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", a = Yr();
        a && (n += `

Check the render method of \`` + a + "`.");
        var i = a || "", u = e._debugSource;
        u && (i = u.fileName + ":" + u.lineNumber), Ch[i] || (Ch[i] = !0, c("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var m = Ye(t) || "Unknown";
        Gl[m] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), Gl[m] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var g = Ye(t) || "Unknown";
        Eh[g] || (c("%s: Function components do not support getDerivedStateFromProps.", g), Eh[g] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var x = Ye(t) || "Unknown";
        Sh[x] || (c("%s: Function components do not support contextType.", x), Sh[x] = !0);
      }
    }
  }
  var Dh = {
    dehydrated: null,
    treeContext: null,
    retryLane: qt
  };
  function kh(e) {
    return {
      baseLanes: e,
      cachePool: NT(),
      transitions: null
    };
  }
  function LT(e, t) {
    var n = null;
    return {
      baseLanes: Pe(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function _T(e, t, n, a) {
    if (t !== null) {
      var i = t.memoizedState;
      if (i === null)
        return !1;
    }
    return Op(e, Ul);
  }
  function PT(e, t) {
    return sc(e.childLanes, t);
  }
  function xx(e, t, n) {
    var a = t.pendingProps;
    Hk(t) && (t.flags |= Ze);
    var i = La.current, u = !1, m = (t.flags & Ze) !== be;
    if (m || _T(i, e) ? (u = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (i = XR(i, Rb)), i = Zo(i), ci(t, i), e === null) {
      fp(t);
      var g = t.memoizedState;
      if (g !== null) {
        var x = g.dehydrated;
        if (x !== null)
          return FT(t, x);
      }
      var C = a.children, j = a.fallback;
      if (u) {
        var _ = AT(t, C, j, n), L = t.child;
        return L.memoizedState = kh(n), t.memoizedState = Dh, _;
      } else
        return Oh(t, C);
    } else {
      var J = e.memoizedState;
      if (J !== null) {
        var B = J.dehydrated;
        if (B !== null)
          return $T(e, t, m, a, B, J, n);
      }
      if (u) {
        var K = a.fallback, re = a.children, he = VT(e, t, re, K, n), fe = t.child, Be = e.child.memoizedState;
        return fe.memoizedState = Be === null ? kh(n) : LT(Be, n), fe.childLanes = PT(e, n), t.memoizedState = Dh, he;
      } else {
        var Ue = a.children, F = MT(e, t, Ue, n);
        return t.memoizedState = null, F;
      }
    }
  }
  function Oh(e, t, n) {
    var a = e.mode, i = {
      mode: "visible",
      children: t
    }, u = Lh(i, a);
    return u.return = e, e.child = u, u;
  }
  function AT(e, t, n, a) {
    var i = e.mode, u = e.child, m = {
      mode: "hidden",
      children: t
    }, g, x;
    return (i & Je) === ge && u !== null ? (g = u, g.childLanes = q, g.pendingProps = m, e.mode & it && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), x = yi(n, i, a, null)) : (g = Lh(m, i), x = yi(n, i, a, null)), g.return = e, x.return = e, g.sibling = x, e.child = g, x;
  }
  function Lh(e, t, n) {
    return NN(e, t, q, null);
  }
  function Nx(e, t) {
    return lo(e, t);
  }
  function MT(e, t, n, a) {
    var i = e.child, u = i.sibling, m = Nx(i, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Je) === ge && (m.lanes = a), m.return = t, m.sibling = null, u !== null) {
      var g = t.deletions;
      g === null ? (t.deletions = [u], t.flags |= Ai) : g.push(u);
    }
    return t.child = m, m;
  }
  function VT(e, t, n, a, i) {
    var u = t.mode, m = e.child, g = m.sibling, x = {
      mode: "hidden",
      children: n
    }, C;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & Je) === ge && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== m
    ) {
      var j = t.child;
      C = j, C.childLanes = q, C.pendingProps = x, t.mode & it && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = m.selfBaseDuration, C.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
    } else
      C = Nx(m, x), C.subtreeFlags = m.subtreeFlags & br;
    var _;
    return g !== null ? _ = lo(g, a) : (_ = yi(a, u, i, null), _.flags |= Lt), _.return = t, C.return = t, C.sibling = _, t.child = C, _;
  }
  function Tf(e, t, n, a) {
    a !== null && dp(a), Go(t, e.child, null, n);
    var i = t.pendingProps, u = i.children, m = Oh(t, u);
    return m.flags |= Lt, t.memoizedState = null, m;
  }
  function UT(e, t, n, a, i) {
    var u = t.mode, m = {
      mode: "visible",
      children: n
    }, g = Lh(m, u), x = yi(a, u, i, null);
    return x.flags |= Lt, g.return = t, x.return = t, g.sibling = x, t.child = g, (t.mode & Je) !== ge && Go(t, e.child, null, i), x;
  }
  function FT(e, t, n) {
    return (e.mode & Je) === ge ? (c("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : qm(t) ? e.lanes = zi : e.lanes = qn, null;
  }
  function $T(e, t, n, a, i, u, m) {
    if (n)
      if (t.flags & vr) {
        t.flags &= ~vr;
        var F = yh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Tf(e, t, m, F);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Ze, null;
        var W = a.children, $ = a.fallback, Z = UT(e, t, W, $, m), le = t.child;
        return le.memoizedState = kh(m), t.memoizedState = Dh, Z;
      }
    else {
      if (RR(), (t.mode & Je) === ge)
        return Tf(
          e,
          t,
          m,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (qm(i)) {
        var g, x, C;
        {
          var j = Bj(i);
          g = j.digest, x = j.message, C = j.stack;
        }
        var _;
        x ? _ = new Error(x) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var L = yh(_, g, C);
        return Tf(e, t, m, L);
      }
      var J = Qn(m, e.childLanes);
      if (Aa || J) {
        var B = Ff();
        if (B !== null) {
          var K = qE(B, m);
          if (K !== qt && K !== u.retryLane) {
            u.retryLane = K;
            var re = dt;
            Un(e, K), Bt(B, e, K, re);
          }
        }
        Zh();
        var he = yh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return Tf(e, t, m, he);
      } else if (By(i)) {
        t.flags |= Ze, t.child = e.child;
        var fe = fk.bind(null, e);
        return Ij(i, fe), null;
      } else {
        kR(t, i, u.treeContext);
        var Be = a.children, Ue = Oh(t, Be);
        return Ue.flags |= gr, Ue;
      }
    }
  }
  function Sx(e, t, n) {
    e.lanes = Pe(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = Pe(a.lanes, t)), Sp(e.return, t, n);
  }
  function zT(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === V) {
        var i = a.memoizedState;
        i !== null && Sx(a, n, e);
      } else if (a.tag === ve)
        Sx(a, n, e);
      else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }
  function JT(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      a !== null && of(a) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function HT(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !wh[e])
      if (wh[e] = !0, typeof e == "string")
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
  function BT(e, t) {
    e !== void 0 && !Rf[e] && (e !== "collapsed" && e !== "hidden" ? (Rf[e] = !0, c('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Rf[e] = !0, c('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Ex(e, t) {
    {
      var n = Xe(e), a = !n && typeof cr(e) == "function";
      if (n || a) {
        var i = n ? "array" : "iterable";
        return c("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", i, t, i), !1;
      }
    }
    return !0;
  }
  function IT(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Xe(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Ex(e[n], n))
            return;
      } else {
        var a = cr(e);
        if (typeof a == "function") {
          var i = a.call(e);
          if (i)
            for (var u = i.next(), m = 0; !u.done; u = i.next()) {
              if (!Ex(u.value, m))
                return;
              m++;
            }
        } else
          c('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function _h(e, t, n, a, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = i);
  }
  function Cx(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail, m = a.children;
    HT(i), BT(u, i), IT(m, i), Rn(e, t, m, n);
    var g = La.current, x = Op(g, Ul);
    if (x)
      g = Lp(g, Ul), t.flags |= Ze;
    else {
      var C = e !== null && (e.flags & Ze) !== be;
      C && zT(t, t.child, n), g = Zo(g);
    }
    if (ci(t, g), (t.mode & Je) === ge)
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards": {
          var j = JT(t.child), _;
          j === null ? (_ = t.child, t.child = null) : (_ = j.sibling, j.sibling = null), _h(
            t,
            !1,
            // isBackwards
            _,
            j,
            u
          );
          break;
        }
        case "backwards": {
          var L = null, J = t.child;
          for (t.child = null; J !== null; ) {
            var B = J.alternate;
            if (B !== null && of(B) === null) {
              t.child = J;
              break;
            }
            var K = J.sibling;
            J.sibling = L, L = J, J = K;
          }
          _h(
            t,
            !0,
            // isBackwards
            L,
            null,
            // last
            u
          );
          break;
        }
        case "together": {
          _h(
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
  function YT(e, t, n) {
    Tp(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? t.child = Go(t, null, a, n) : Rn(e, t, a, n), t.child;
  }
  var wx = !1;
  function KT(e, t, n) {
    var a = t.type, i = a._context, u = t.pendingProps, m = t.memoizedProps, g = u.value;
    {
      "value" in u || wx || (wx = !0, c("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var x = t.type.propTypes;
      x && Da(x, u, "prop", "Context.Provider");
    }
    if (gb(t, i, g), m !== null) {
      var C = m.value;
      if (ea(C, g)) {
        if (m.children === u.children && !Mc())
          return Dr(e, t, n);
      } else
        HR(t, i, n);
    }
    var j = u.children;
    return Rn(e, t, j, n), t.child;
  }
  var jx = !1;
  function WT(e, t, n) {
    var a = t.type;
    a._context === void 0 ? a !== a.Consumer && (jx || (jx = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
    var i = t.pendingProps, u = i.children;
    typeof u != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qo(t, n);
    var m = _t(a);
    Ks(t);
    var g;
    return Kl.current = t, Gn(!0), g = u(m), Gn(!1), ko(), t.flags |= Ro, Rn(e, t, g, n), t.child;
  }
  function ql() {
    Aa = !0;
  }
  function Df(e, t) {
    (t.mode & Je) === ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Lt);
  }
  function Dr(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), tx(), lu(t.lanes), Qn(n, t.childLanes) ? (zR(e, t), t.child) : null;
  }
  function GT(e, t, n) {
    {
      var a = t.return;
      if (a === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === a.child)
        a.child = n;
      else {
        var i = a.child;
        if (i === null)
          throw new Error("Expected parent to have a child.");
        for (; i.sibling !== t; )
          if (i = i.sibling, i === null)
            throw new Error("Expected to find the previous sibling.");
        i.sibling = n;
      }
      var u = a.deletions;
      return u === null ? (a.deletions = [e], a.flags |= Ai) : u.push(e), n.flags |= Lt, n;
    }
  }
  function Ph(e, t) {
    var n = e.lanes;
    return !!Qn(n, t);
  }
  function qT(e, t, n) {
    switch (t.tag) {
      case b:
        yx(t), t.stateNode, Wo();
        break;
      case w:
        wb(t);
        break;
      case p: {
        var a = t.type;
        Ga(a) && Uc(t);
        break;
      }
      case N:
        Tp(t, t.stateNode.containerInfo);
        break;
      case P: {
        var i = t.memoizedProps.value, u = t.type._context;
        gb(t, u, i);
        break;
      }
      case T:
        {
          var m = Qn(n, t.childLanes);
          m && (t.flags |= Ie);
          {
            var g = t.stateNode;
            g.effectDuration = 0, g.passiveEffectDuration = 0;
          }
        }
        break;
      case V: {
        var x = t.memoizedState;
        if (x !== null) {
          if (x.dehydrated !== null)
            return ci(t, Zo(La.current)), t.flags |= Ze, null;
          var C = t.child, j = C.childLanes;
          if (Qn(n, j))
            return xx(e, t, n);
          ci(t, Zo(La.current));
          var _ = Dr(e, t, n);
          return _ !== null ? _.sibling : null;
        } else
          ci(t, Zo(La.current));
        break;
      }
      case ve: {
        var L = (e.flags & Ze) !== be, J = Qn(n, t.childLanes);
        if (L) {
          if (J)
            return Cx(e, t, n);
          t.flags |= Ze;
        }
        var B = t.memoizedState;
        if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), ci(t, La.current), J)
          break;
        return null;
      }
      case me:
      case Ee:
        return t.lanes = q, hx(e, t, n);
    }
    return Dr(e, t, n);
  }
  function Rx(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return GT(e, t, cv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var a = e.memoizedProps, i = t.pendingProps;
      if (a !== i || Mc() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Aa = !0;
      else {
        var u = Ph(e, n);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Ze) === be)
          return Aa = !1, qT(e, t, n);
        (e.flags & $d) !== be ? Aa = !0 : Aa = !1;
      }
    } else if (Aa = !1, tn() && NR(t)) {
      var m = t.index, g = SR();
      tb(t, g, m);
    }
    switch (t.lanes = q, t.tag) {
      case h:
        return OT(e, t, t.type, n);
      case Se: {
        var x = t.elementType;
        return DT(e, t, x, n);
      }
      case v: {
        var C = t.type, j = t.pendingProps, _ = t.elementType === C ? j : Pa(C, j);
        return jh(e, t, C, _, n);
      }
      case p: {
        var L = t.type, J = t.pendingProps, B = t.elementType === L ? J : Pa(L, J);
        return gx(e, t, L, B, n);
      }
      case b:
        return jT(e, t, n);
      case w:
        return RT(e, t, n);
      case R:
        return TT(e, t);
      case V:
        return xx(e, t, n);
      case N:
        return YT(e, t, n);
      case z: {
        var K = t.type, re = t.pendingProps, he = t.elementType === K ? re : Pa(K, re);
        return dx(e, t, K, he, n);
      }
      case M:
        return ET(e, t, n);
      case O:
        return CT(e, t, n);
      case T:
        return wT(e, t, n);
      case P:
        return KT(e, t, n);
      case A:
        return WT(e, t, n);
      case I: {
        var fe = t.type, Be = t.pendingProps, Ue = Pa(fe, Be);
        if (t.type !== t.elementType) {
          var F = fe.propTypes;
          F && Da(
            F,
            Ue,
            // Resolved for outer only
            "prop",
            Ye(fe)
          );
        }
        return Ue = Pa(fe.type, Ue), mx(e, t, fe, Ue, n);
      }
      case Q:
        return px(e, t, t.type, t.pendingProps, n);
      case je: {
        var W = t.type, $ = t.pendingProps, Z = t.elementType === W ? $ : Pa(W, $);
        return kT(e, t, W, Z, n);
      }
      case ve:
        return Cx(e, t, n);
      case qe:
        break;
      case me:
        return hx(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function is(e) {
    e.flags |= Ie;
  }
  function Tx(e) {
    e.flags |= qr, e.flags |= zd;
  }
  var Dx, Ah, kx, Ox;
  Dx = function(e, t, n, a) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === w || i.tag === R)
        yj(e, i.stateNode);
      else if (i.tag !== N) {
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
  }, Ah = function(e, t) {
  }, kx = function(e, t, n, a, i) {
    var u = e.memoizedProps;
    if (u !== a) {
      var m = t.stateNode, g = Dp(), x = xj(m, n, u, a, i, g);
      t.updateQueue = x, x && is(t);
    }
  }, Ox = function(e, t, n, a) {
    n !== a && is(t);
  };
  function Ql(e, t) {
    if (!tn())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
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
  function an(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = q, a = be;
    if (t) {
      if ((e.mode & it) !== ge) {
        for (var x = e.selfBaseDuration, C = e.child; C !== null; )
          n = Pe(n, Pe(C.lanes, C.childLanes)), a |= C.subtreeFlags & br, a |= C.flags & br, x += C.treeBaseDuration, C = C.sibling;
        e.treeBaseDuration = x;
      } else
        for (var j = e.child; j !== null; )
          n = Pe(n, Pe(j.lanes, j.childLanes)), a |= j.subtreeFlags & br, a |= j.flags & br, j.return = e, j = j.sibling;
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & it) !== ge) {
        for (var i = e.actualDuration, u = e.selfBaseDuration, m = e.child; m !== null; )
          n = Pe(n, Pe(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, i += m.actualDuration, u += m.treeBaseDuration, m = m.sibling;
        e.actualDuration = i, e.treeBaseDuration = u;
      } else
        for (var g = e.child; g !== null; )
          n = Pe(n, Pe(g.lanes, g.childLanes)), a |= g.subtreeFlags, a |= g.flags, g.return = e, g = g.sibling;
      e.subtreeFlags |= a;
    }
    return e.childLanes = n, t;
  }
  function QT(e, t, n) {
    if (AR() && (t.mode & Je) !== ge && (t.flags & Ze) === be)
      return lb(t), Wo(), t.flags |= vr | Is | jn, !1;
    var a = Hc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (_R(t), an(t), (t.mode & it) !== ge) {
          var i = n !== null;
          if (i) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Wo(), (t.flags & Ze) === be && (t.memoizedState = null), t.flags |= Ie, an(t), (t.mode & it) !== ge) {
          var m = n !== null;
          if (m) {
            var g = t.child;
            g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return ub(), !0;
  }
  function Lx(e, t, n) {
    var a = t.pendingProps;
    switch (sp(t), t.tag) {
      case h:
      case Se:
      case Q:
      case v:
      case z:
      case M:
      case O:
      case T:
      case A:
      case I:
        return an(t), null;
      case p: {
        var i = t.type;
        return Ga(i) && Vc(t), an(t), null;
      }
      case b: {
        var u = t.stateNode;
        if (Xo(t), ap(t), Pp(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var m = Hc(t);
          if (m)
            is(t);
          else if (e !== null) {
            var g = e.memoizedState;
            // Check if this is a client root
            (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & vr) !== be) && (t.flags |= Mi, ub());
          }
        }
        return Ah(e, t), an(t), null;
      }
      case w: {
        kp(t);
        var x = Cb(), C = t.type;
        if (e !== null && t.stateNode != null)
          kx(e, t, C, a, x), e.ref !== t.ref && Tx(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return an(t), null;
          }
          var j = Dp(), _ = Hc(t);
          if (_)
            OR(t, x, j) && is(t);
          else {
            var L = gj(C, a, x, j, t);
            Dx(L, t, !1, !1), t.stateNode = L, bj(L, C, a, x) && is(t);
          }
          t.ref !== null && Tx(t);
        }
        return an(t), null;
      }
      case R: {
        var J = a;
        if (e && t.stateNode != null) {
          var B = e.memoizedProps;
          Ox(e, t, B, J);
        } else {
          if (typeof J != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var K = Cb(), re = Dp(), he = Hc(t);
          he ? LR(t) && is(t) : t.stateNode = Nj(J, K, re, t);
        }
        return an(t), null;
      }
      case V: {
        es(t);
        var fe = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Be = QT(e, t, fe);
          if (!Be)
            return t.flags & jn ? t : null;
        }
        if ((t.flags & Ze) !== be)
          return t.lanes = n, (t.mode & it) !== ge && ih(t), t;
        var Ue = fe !== null, F = e !== null && e.memoizedState !== null;
        if (Ue !== F && Ue) {
          var W = t.child;
          if (W.flags |= Vi, (t.mode & Je) !== ge) {
            var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fn);
            $ || Op(La.current, Rb) ? XD() : Zh();
          }
        }
        var Z = t.updateQueue;
        if (Z !== null && (t.flags |= Ie), an(t), (t.mode & it) !== ge && Ue) {
          var le = t.child;
          le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
        }
        return null;
      }
      case N:
        return Xo(t), Ah(e, t), e === null && pR(t.stateNode.containerInfo), an(t), null;
      case P:
        var ie = t.type._context;
        return Np(ie, t), an(t), null;
      case je: {
        var Ne = t.type;
        return Ga(Ne) && Vc(t), an(t), null;
      }
      case ve: {
        es(t);
        var Oe = t.memoizedState;
        if (Oe === null)
          return an(t), null;
        var st = (t.flags & Ze) !== be, We = Oe.rendering;
        if (We === null)
          if (st)
            Ql(Oe, !1);
          else {
            var Tt = ek() && (e === null || (e.flags & Ze) === be);
            if (!Tt)
              for (var Ge = t.child; Ge !== null; ) {
                var Ct = of(Ge);
                if (Ct !== null) {
                  st = !0, t.flags |= Ze, Ql(Oe, !1);
                  var Nn = Ct.updateQueue;
                  return Nn !== null && (t.updateQueue = Nn, t.flags |= Ie), t.subtreeFlags = be, JR(t, n), ci(t, Lp(La.current, Ul)), t.child;
                }
                Ge = Ge.sibling;
              }
            Oe.tail !== null && Wt() > Zx() && (t.flags |= Ze, st = !0, Ql(Oe, !1), t.lanes = Og);
          }
        else {
          if (!st) {
            var un = of(We);
            if (un !== null) {
              t.flags |= Ze, st = !0;
              var aa = un.updateQueue;
              if (aa !== null && (t.updateQueue = aa, t.flags |= Ie), Ql(Oe, !0), Oe.tail === null && Oe.tailMode === "hidden" && !We.alternate && !tn())
                return an(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Wt() * 2 - Oe.renderingStartTime > Zx() && n !== qn && (t.flags |= Ze, st = !0, Ql(Oe, !1), t.lanes = Og);
          }
          if (Oe.isBackwards)
            We.sibling = t.child, t.child = We;
          else {
            var kn = Oe.last;
            kn !== null ? kn.sibling = We : t.child = We, Oe.last = We;
          }
        }
        if (Oe.tail !== null) {
          var On = Oe.tail;
          Oe.rendering = On, Oe.tail = On.sibling, Oe.renderingStartTime = Wt(), On.sibling = null;
          var Sn = La.current;
          return st ? Sn = Lp(Sn, Ul) : Sn = Zo(Sn), ci(t, Sn), On;
        }
        return an(t), null;
      }
      case qe:
        break;
      case me:
      case Ee: {
        Xh(t);
        var Pr = t.memoizedState, ms = Pr !== null;
        if (e !== null) {
          var mu = e.memoizedState, ar = mu !== null;
          ar !== ms && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !Ke && (t.flags |= Vi);
        }
        return !ms || (t.mode & Je) === ge ? an(t) : Qn(nr, qn) && (an(t), t.subtreeFlags & (Lt | Ie) && (t.flags |= Vi)), null;
      }
      case Ce:
        return null;
      case et:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function XT(e, t, n) {
    switch (sp(t), t.tag) {
      case p: {
        var a = t.type;
        Ga(a) && Vc(t);
        var i = t.flags;
        return i & jn ? (t.flags = i & ~jn | Ze, (t.mode & it) !== ge && ih(t), t) : null;
      }
      case b: {
        t.stateNode, Xo(t), ap(t), Pp();
        var u = t.flags;
        return (u & jn) !== be && (u & Ze) === be ? (t.flags = u & ~jn | Ze, t) : null;
      }
      case w:
        return kp(t), null;
      case V: {
        es(t);
        var m = t.memoizedState;
        if (m !== null && m.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Wo();
        }
        var g = t.flags;
        return g & jn ? (t.flags = g & ~jn | Ze, (t.mode & it) !== ge && ih(t), t) : null;
      }
      case ve:
        return es(t), null;
      case N:
        return Xo(t), null;
      case P:
        var x = t.type._context;
        return Np(x, t), null;
      case me:
      case Ee:
        return Xh(t), null;
      case Ce:
        return null;
      default:
        return null;
    }
  }
  function _x(e, t, n) {
    switch (sp(t), t.tag) {
      case p: {
        var a = t.type.childContextTypes;
        a != null && Vc(t);
        break;
      }
      case b: {
        t.stateNode, Xo(t), ap(t), Pp();
        break;
      }
      case w: {
        kp(t);
        break;
      }
      case N:
        Xo(t);
        break;
      case V:
        es(t);
        break;
      case ve:
        es(t);
        break;
      case P:
        var i = t.type._context;
        Np(i, t);
        break;
      case me:
      case Ee:
        Xh(t);
        break;
    }
  }
  var Px = null;
  Px = /* @__PURE__ */ new Set();
  var kf = !1, rn = !1, ZT = typeof WeakSet == "function" ? WeakSet : Set, ue = null, os = null, ss = null;
  function eD(e) {
    Vd(null, function() {
      throw e;
    }), Ud();
  }
  var tD = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & it)
      try {
        er(), t.componentWillUnmount();
      } finally {
        Za(e);
      }
    else
      t.componentWillUnmount();
  };
  function Ax(e, t) {
    try {
      mi(Ut, e);
    } catch (n) {
      ft(e, t, n);
    }
  }
  function Mh(e, t, n) {
    try {
      tD(e, n);
    } catch (a) {
      ft(e, t, a);
    }
  }
  function nD(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      ft(e, t, a);
    }
  }
  function Mx(e, t) {
    try {
      Ux(e);
    } catch (n) {
      ft(e, t, n);
    }
  }
  function ls(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (ba && xa && e.mode & it)
            try {
              er(), a = n(null);
            } finally {
              Za(e);
            }
          else
            a = n(null);
        } catch (i) {
          ft(e, t, i);
        }
        typeof a == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
      } else
        n.current = null;
  }
  function Of(e, t, n) {
    try {
      n();
    } catch (a) {
      ft(e, t, a);
    }
  }
  var Vx = !1;
  function aD(e, t) {
    hj(e.containerInfo), ue = t, rD();
    var n = Vx;
    return Vx = !1, n;
  }
  function rD() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      (e.subtreeFlags & Hd) !== be && t !== null ? (t.return = e, ue = t) : iD();
    }
  }
  function iD() {
    for (; ue !== null; ) {
      var e = ue;
      bt(e);
      try {
        oD(e);
      } catch (n) {
        ft(e, e.return, n);
      }
      Kt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function oD(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Mi) !== be) {
      switch (bt(e), e.tag) {
        case v:
        case z:
        case Q:
          break;
        case p: {
          if (t !== null) {
            var a = t.memoizedProps, i = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !ao && (u.props !== e.memoizedProps && c("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(e) || "instance"), u.state !== e.memoizedState && c("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(e) || "instance"));
            var m = u.getSnapshotBeforeUpdate(e.elementType === e.type ? a : Pa(e.type, a), i);
            {
              var g = Px;
              m === void 0 && !g.has(e.type) && (g.add(e.type), c("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        }
        case b: {
          {
            var x = e.stateNode;
            $j(x.containerInfo);
          }
          break;
        }
        case w:
        case R:
        case N:
        case je:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Kt();
    }
  }
  function Ma(e, t, n) {
    var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
    if (i !== null) {
      var u = i.next, m = u;
      do {
        if ((m.tag & e) === e) {
          var g = m.destroy;
          m.destroy = void 0, g !== void 0 && ((e & nn) !== Fn ? NE(t) : (e & Ut) !== Fn && jg(t), (e & qa) !== Fn && cu(!0), Of(t, n, g), (e & qa) !== Fn && cu(!1), (e & nn) !== Fn ? SE() : (e & Ut) !== Fn && Rg());
        }
        m = m.next;
      } while (m !== u);
    }
  }
  function mi(e, t) {
    var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var i = a.next, u = i;
      do {
        if ((u.tag & e) === e) {
          (e & nn) !== Fn ? bE(t) : (e & Ut) !== Fn && EE(t);
          var m = u.create;
          (e & qa) !== Fn && cu(!0), u.destroy = m(), (e & qa) !== Fn && cu(!1), (e & nn) !== Fn ? xE() : (e & Ut) !== Fn && CE();
          {
            var g = u.destroy;
            if (g !== void 0 && typeof g != "function") {
              var x = void 0;
              (u.tag & Ut) !== be ? x = "useLayoutEffect" : (u.tag & qa) !== be ? x = "useInsertionEffect" : x = "useEffect";
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
  function sD(e, t) {
    if ((t.flags & Ie) !== be)
      switch (t.tag) {
        case T: {
          var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, i = a.id, u = a.onPostCommit, m = Zb(), g = t.alternate === null ? "mount" : "update";
          Xb() && (g = "nested-update"), typeof u == "function" && u(i, g, n, m);
          var x = t.return;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case b:
                var C = x.stateNode;
                C.passiveEffectDuration += n;
                break e;
              case T:
                var j = x.stateNode;
                j.passiveEffectDuration += n;
                break e;
            }
            x = x.return;
          }
          break;
        }
      }
  }
  function lD(e, t, n, a) {
    if ((n.flags & Ys) !== be)
      switch (n.tag) {
        case v:
        case z:
        case Q: {
          if (!rn)
            if (n.mode & it)
              try {
                er(), mi(Ut | Vt, n);
              } finally {
                Za(n);
              }
            else
              mi(Ut | Vt, n);
          break;
        }
        case p: {
          var i = n.stateNode;
          if (n.flags & Ie && !rn)
            if (t === null)
              if (n.type === n.elementType && !ao && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & it)
                try {
                  er(), i.componentDidMount();
                } finally {
                  Za(n);
                }
              else
                i.componentDidMount();
            else {
              var u = n.elementType === n.type ? t.memoizedProps : Pa(n.type, t.memoizedProps), m = t.memoizedState;
              if (n.type === n.elementType && !ao && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & it)
                try {
                  er(), i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  Za(n);
                }
              else
                i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
            }
          var g = n.updateQueue;
          g !== null && (n.type === n.elementType && !ao && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), Eb(n, g, i));
          break;
        }
        case b: {
          var x = n.updateQueue;
          if (x !== null) {
            var C = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case w:
                  C = n.child.stateNode;
                  break;
                case p:
                  C = n.child.stateNode;
                  break;
              }
            Eb(n, x, C);
          }
          break;
        }
        case w: {
          var j = n.stateNode;
          if (t === null && n.flags & Ie) {
            var _ = n.type, L = n.memoizedProps;
            jj(j, _, L);
          }
          break;
        }
        case R:
          break;
        case N:
          break;
        case T: {
          {
            var J = n.memoizedProps, B = J.onCommit, K = J.onRender, re = n.stateNode.effectDuration, he = Zb(), fe = t === null ? "mount" : "update";
            Xb() && (fe = "nested-update"), typeof K == "function" && K(n.memoizedProps.id, fe, n.actualDuration, n.treeBaseDuration, n.actualStartTime, he);
            {
              typeof B == "function" && B(n.memoizedProps.id, fe, re, he), ik(n);
              var Be = n.return;
              e: for (; Be !== null; ) {
                switch (Be.tag) {
                  case b:
                    var Ue = Be.stateNode;
                    Ue.effectDuration += re;
                    break e;
                  case T:
                    var F = Be.stateNode;
                    F.effectDuration += re;
                    break e;
                }
                Be = Be.return;
              }
            }
          }
          break;
        }
        case V: {
          vD(e, n);
          break;
        }
        case ve:
        case je:
        case qe:
        case me:
        case Ee:
        case et:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    rn || n.flags & qr && Ux(n);
  }
  function uD(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        if (e.mode & it)
          try {
            er(), Ax(e, e.return);
          } finally {
            Za(e);
          }
        else
          Ax(e, e.return);
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && nD(e, e.return, t), Mx(e, e.return);
        break;
      }
      case w: {
        Mx(e, e.return);
        break;
      }
    }
  }
  function cD(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === w) {
        if (n === null) {
          n = a;
          try {
            var i = a.stateNode;
            t ? Mj(i) : Uj(a.stateNode, a.memoizedProps);
          } catch (m) {
            ft(e, e.return, m);
          }
        }
      } else if (a.tag === R) {
        if (n === null)
          try {
            var u = a.stateNode;
            t ? Vj(u) : Fj(u, a.memoizedProps);
          } catch (m) {
            ft(e, e.return, m);
          }
      } else if (!((a.tag === me || a.tag === Ee) && a.memoizedState !== null && a !== e)) {
        if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        n === a && (n = null), a = a.return;
      }
      n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
    }
  }
  function Ux(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, a;
      switch (e.tag) {
        case w:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == "function") {
        var i;
        if (e.mode & it)
          try {
            er(), i = t(a);
          } finally {
            Za(e);
          }
        else
          i = t(a);
        typeof i == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
      } else
        t.hasOwnProperty("current") || c("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e)), t.current = a;
    }
  }
  function fD(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function Fx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fx(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === w) {
        var n = e.stateNode;
        n !== null && gR(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function dD(e) {
    for (var t = e.return; t !== null; ) {
      if ($x(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function $x(e) {
    return e.tag === w || e.tag === b || e.tag === N;
  }
  function zx(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || $x(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== w && t.tag !== R && t.tag !== de; ) {
        if (t.flags & Lt || t.child === null || t.tag === N)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & Lt))
        return t.stateNode;
    }
  }
  function mD(e) {
    var t = dD(e);
    switch (t.tag) {
      case w: {
        var n = t.stateNode;
        t.flags & Bs && (Hy(n), t.flags &= ~Bs);
        var a = zx(e);
        Uh(e, a, n);
        break;
      }
      case b:
      case N: {
        var i = t.stateNode.containerInfo, u = zx(e);
        Vh(e, u, i);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Vh(e, t, n) {
    var a = e.tag, i = a === w || a === R;
    if (i) {
      var u = e.stateNode;
      t ? Lj(n, u, t) : kj(n, u);
    } else if (a !== N) {
      var m = e.child;
      if (m !== null) {
        Vh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Vh(g, t, n), g = g.sibling;
      }
    }
  }
  function Uh(e, t, n) {
    var a = e.tag, i = a === w || a === R;
    if (i) {
      var u = e.stateNode;
      t ? Oj(n, u, t) : Dj(n, u);
    } else if (a !== N) {
      var m = e.child;
      if (m !== null) {
        Uh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Uh(g, t, n), g = g.sibling;
      }
    }
  }
  var on = null, Va = !1;
  function pD(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case w: {
            on = a.stateNode, Va = !1;
            break e;
          }
          case b: {
            on = a.stateNode.containerInfo, Va = !0;
            break e;
          }
          case N: {
            on = a.stateNode.containerInfo, Va = !0;
            break e;
          }
        }
        a = a.return;
      }
      if (on === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      Jx(e, t, n), on = null, Va = !1;
    }
    fD(n);
  }
  function pi(e, t, n) {
    for (var a = n.child; a !== null; )
      Jx(e, t, a), a = a.sibling;
  }
  function Jx(e, t, n) {
    switch (hE(n), n.tag) {
      case w:
        rn || ls(n, t);
      case R: {
        {
          var a = on, i = Va;
          on = null, pi(e, t, n), on = a, Va = i, on !== null && (Va ? Pj(on, n.stateNode) : _j(on, n.stateNode));
        }
        return;
      }
      case de: {
        on !== null && (Va ? Aj(on, n.stateNode) : Gm(on, n.stateNode));
        return;
      }
      case N: {
        {
          var u = on, m = Va;
          on = n.stateNode.containerInfo, Va = !0, pi(e, t, n), on = u, Va = m;
        }
        return;
      }
      case v:
      case z:
      case I:
      case Q: {
        if (!rn) {
          var g = n.updateQueue;
          if (g !== null) {
            var x = g.lastEffect;
            if (x !== null) {
              var C = x.next, j = C;
              do {
                var _ = j, L = _.destroy, J = _.tag;
                L !== void 0 && ((J & qa) !== Fn ? Of(n, t, L) : (J & Ut) !== Fn && (jg(n), n.mode & it ? (er(), Of(n, t, L), Za(n)) : Of(n, t, L), Rg())), j = j.next;
              } while (j !== C);
            }
          }
        }
        pi(e, t, n);
        return;
      }
      case p: {
        if (!rn) {
          ls(n, t);
          var B = n.stateNode;
          typeof B.componentWillUnmount == "function" && Mh(n, t, B);
        }
        pi(e, t, n);
        return;
      }
      case qe: {
        pi(e, t, n);
        return;
      }
      case me: {
        if (
          // TODO: Remove this dead flag
          n.mode & Je
        ) {
          var K = rn;
          rn = K || n.memoizedState !== null, pi(e, t, n), rn = K;
        } else
          pi(e, t, n);
        break;
      }
      default: {
        pi(e, t, n);
        return;
      }
    }
  }
  function hD(e) {
    e.memoizedState;
  }
  function vD(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var i = a.memoizedState;
        if (i !== null) {
          var u = i.dehydrated;
          u !== null && eR(u);
        }
      }
    }
  }
  function Hx(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ZT()), t.forEach(function(a) {
        var i = dk.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), Ra)
            if (os !== null && ss !== null)
              uu(ss, os);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          a.then(i, i);
        }
      });
    }
  }
  function gD(e, t, n) {
    os = n, ss = e, bt(t), Bx(t, e), bt(t), os = null, ss = null;
  }
  function Ua(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i];
        try {
          pD(e, t, u);
        } catch (x) {
          ft(u, t, x);
        }
      }
    var m = $u();
    if (t.subtreeFlags & Bd)
      for (var g = t.child; g !== null; )
        bt(g), Bx(g, e), g = g.sibling;
    bt(m);
  }
  function Bx(e, t, n) {
    var a = e.alternate, i = e.flags;
    switch (e.tag) {
      case v:
      case z:
      case I:
      case Q: {
        if (Ua(t, e), tr(e), i & Ie) {
          try {
            Ma(qa | Vt, e, e.return), mi(qa | Vt, e);
          } catch (Ne) {
            ft(e, e.return, Ne);
          }
          if (e.mode & it) {
            try {
              er(), Ma(Ut | Vt, e, e.return);
            } catch (Ne) {
              ft(e, e.return, Ne);
            }
            Za(e);
          } else
            try {
              Ma(Ut | Vt, e, e.return);
            } catch (Ne) {
              ft(e, e.return, Ne);
            }
        }
        return;
      }
      case p: {
        Ua(t, e), tr(e), i & qr && a !== null && ls(a, a.return);
        return;
      }
      case w: {
        Ua(t, e), tr(e), i & qr && a !== null && ls(a, a.return);
        {
          if (e.flags & Bs) {
            var u = e.stateNode;
            try {
              Hy(u);
            } catch (Ne) {
              ft(e, e.return, Ne);
            }
          }
          if (i & Ie) {
            var m = e.stateNode;
            if (m != null) {
              var g = e.memoizedProps, x = a !== null ? a.memoizedProps : g, C = e.type, j = e.updateQueue;
              if (e.updateQueue = null, j !== null)
                try {
                  Rj(m, j, C, x, g, e);
                } catch (Ne) {
                  ft(e, e.return, Ne);
                }
            }
          }
        }
        return;
      }
      case R: {
        if (Ua(t, e), tr(e), i & Ie) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var _ = e.stateNode, L = e.memoizedProps, J = a !== null ? a.memoizedProps : L;
          try {
            Tj(_, J, L);
          } catch (Ne) {
            ft(e, e.return, Ne);
          }
        }
        return;
      }
      case b: {
        if (Ua(t, e), tr(e), i & Ie && a !== null) {
          var B = a.memoizedState;
          if (B.isDehydrated)
            try {
              Zj(t.containerInfo);
            } catch (Ne) {
              ft(e, e.return, Ne);
            }
        }
        return;
      }
      case N: {
        Ua(t, e), tr(e);
        return;
      }
      case V: {
        Ua(t, e), tr(e);
        var K = e.child;
        if (K.flags & Vi) {
          var re = K.stateNode, he = K.memoizedState, fe = he !== null;
          if (re.isHidden = fe, fe) {
            var Be = K.alternate !== null && K.alternate.memoizedState !== null;
            Be || QD();
          }
        }
        if (i & Ie) {
          try {
            hD(e);
          } catch (Ne) {
            ft(e, e.return, Ne);
          }
          Hx(e);
        }
        return;
      }
      case me: {
        var Ue = a !== null && a.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Je
        ) {
          var F = rn;
          rn = F || Ue, Ua(t, e), rn = F;
        } else
          Ua(t, e);
        if (tr(e), i & Vi) {
          var W = e.stateNode, $ = e.memoizedState, Z = $ !== null, le = e;
          if (W.isHidden = Z, Z && !Ue && (le.mode & Je) !== ge) {
            ue = le;
            for (var ie = le.child; ie !== null; )
              ue = ie, bD(ie), ie = ie.sibling;
          }
          cD(le, Z);
        }
        return;
      }
      case ve: {
        Ua(t, e), tr(e), i & Ie && Hx(e);
        return;
      }
      case qe:
        return;
      default: {
        Ua(t, e), tr(e);
        return;
      }
    }
  }
  function tr(e) {
    var t = e.flags;
    if (t & Lt) {
      try {
        mD(e);
      } catch (n) {
        ft(e, e.return, n);
      }
      e.flags &= ~Lt;
    }
    t & gr && (e.flags &= ~gr);
  }
  function yD(e, t, n) {
    os = n, ss = t, ue = e, Ix(e, t, n), os = null, ss = null;
  }
  function Ix(e, t, n) {
    for (var a = (e.mode & Je) !== ge; ue !== null; ) {
      var i = ue, u = i.child;
      if (i.tag === me && a) {
        var m = i.memoizedState !== null, g = m || kf;
        if (g) {
          Fh(e, t, n);
          continue;
        } else {
          var x = i.alternate, C = x !== null && x.memoizedState !== null, j = C || rn, _ = kf, L = rn;
          kf = g, rn = j, rn && !L && (ue = i, xD(i));
          for (var J = u; J !== null; )
            ue = J, Ix(
              J,
              // New root; bubble back up to here and stop.
              t,
              n
            ), J = J.sibling;
          ue = i, kf = _, rn = L, Fh(e, t, n);
          continue;
        }
      }
      (i.subtreeFlags & Ys) !== be && u !== null ? (u.return = i, ue = u) : Fh(e, t, n);
    }
  }
  function Fh(e, t, n) {
    for (; ue !== null; ) {
      var a = ue;
      if ((a.flags & Ys) !== be) {
        var i = a.alternate;
        bt(a);
        try {
          lD(t, i, a, n);
        } catch (m) {
          ft(a, a.return, m);
        }
        Kt();
      }
      if (a === e) {
        ue = null;
        return;
      }
      var u = a.sibling;
      if (u !== null) {
        u.return = a.return, ue = u;
        return;
      }
      ue = a.return;
    }
  }
  function bD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      switch (t.tag) {
        case v:
        case z:
        case I:
        case Q: {
          if (t.mode & it)
            try {
              er(), Ma(Ut, t, t.return);
            } finally {
              Za(t);
            }
          else
            Ma(Ut, t, t.return);
          break;
        }
        case p: {
          ls(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Mh(t, t.return, a);
          break;
        }
        case w: {
          ls(t, t.return);
          break;
        }
        case me: {
          var i = t.memoizedState !== null;
          if (i) {
            Yx(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, ue = n) : Yx(e);
    }
  }
  function Yx(e) {
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
  function xD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      if (t.tag === me) {
        var a = t.memoizedState !== null;
        if (a) {
          Kx(e);
          continue;
        }
      }
      n !== null ? (n.return = t, ue = n) : Kx(e);
    }
  }
  function Kx(e) {
    for (; ue !== null; ) {
      var t = ue;
      bt(t);
      try {
        uD(t);
      } catch (a) {
        ft(t, t.return, a);
      }
      if (Kt(), t === e) {
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
  function ND(e, t, n, a) {
    ue = t, SD(t, e, n, a);
  }
  function SD(e, t, n, a) {
    for (; ue !== null; ) {
      var i = ue, u = i.child;
      (i.subtreeFlags & To) !== be && u !== null ? (u.return = i, ue = u) : ED(e, t, n, a);
    }
  }
  function ED(e, t, n, a) {
    for (; ue !== null; ) {
      var i = ue;
      if ((i.flags & ja) !== be) {
        bt(i);
        try {
          CD(t, i, n, a);
        } catch (m) {
          ft(i, i.return, m);
        }
        Kt();
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
  function CD(e, t, n, a) {
    switch (t.tag) {
      case v:
      case z:
      case Q: {
        if (t.mode & it) {
          rh();
          try {
            mi(nn | Vt, t);
          } finally {
            ah(t);
          }
        } else
          mi(nn | Vt, t);
        break;
      }
    }
  }
  function wD(e) {
    ue = e, jD();
  }
  function jD() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      if ((ue.flags & Ai) !== be) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var i = n[a];
            ue = i, DD(i, e);
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
      (e.subtreeFlags & To) !== be && t !== null ? (t.return = e, ue = t) : RD();
    }
  }
  function RD() {
    for (; ue !== null; ) {
      var e = ue;
      (e.flags & ja) !== be && (bt(e), TD(e), Kt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function TD(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        e.mode & it ? (rh(), Ma(nn | Vt, e, e.return), ah(e)) : Ma(nn | Vt, e, e.return);
        break;
      }
    }
  }
  function DD(e, t) {
    for (; ue !== null; ) {
      var n = ue;
      bt(n), OD(n, t), Kt();
      var a = n.child;
      a !== null ? (a.return = n, ue = a) : kD(e);
    }
  }
  function kD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.sibling, a = t.return;
      if (Fx(t), t === e) {
        ue = null;
        return;
      }
      if (n !== null) {
        n.return = a, ue = n;
        return;
      }
      ue = a;
    }
  }
  function OD(e, t) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        e.mode & it ? (rh(), Ma(nn, e, t), ah(e)) : Ma(nn, e, t);
        break;
      }
    }
  }
  function LD(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        try {
          mi(Ut | Vt, e);
        } catch (n) {
          ft(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          ft(e, e.return, n);
        }
        break;
      }
    }
  }
  function _D(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        try {
          mi(nn | Vt, e);
        } catch (t) {
          ft(e, e.return, t);
        }
        break;
      }
    }
  }
  function PD(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q: {
        try {
          Ma(Ut | Vt, e, e.return);
        } catch (n) {
          ft(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Mh(e, e.return, t);
        break;
      }
    }
  }
  function AD(e) {
    switch (e.tag) {
      case v:
      case z:
      case Q:
        try {
          Ma(nn | Vt, e, e.return);
        } catch (t) {
          ft(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var Xl = Symbol.for;
    Xl("selector.component"), Xl("selector.has_pseudo_class"), Xl("selector.role"), Xl("selector.test_id"), Xl("selector.text");
  }
  var MD = [];
  function VD() {
    MD.forEach(function(e) {
      return e();
    });
  }
  var UD = s.ReactCurrentActQueue;
  function FD(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function Wx() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && UD.current !== null && c("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var $D = Math.ceil, $h = s.ReactCurrentDispatcher, zh = s.ReactCurrentOwner, sn = s.ReactCurrentBatchConfig, Fa = s.ReactCurrentActQueue, zt = (
    /*             */
    0
  ), Gx = (
    /*               */
    1
  ), ln = (
    /*                */
    2
  ), ga = (
    /*                */
    4
  ), kr = 0, Zl = 1, ro = 2, Lf = 3, eu = 4, qx = 5, Jh = 6, He = zt, Tn = null, xt = null, Jt = q, nr = q, Hh = ri(q), Ht = kr, tu = null, _f = q, nu = q, Pf = q, au = null, $n = null, Bh = 0, Qx = 500, Xx = 1 / 0, zD = 500, Or = null;
  function ru() {
    Xx = Wt() + zD;
  }
  function Zx() {
    return Xx;
  }
  var Af = !1, Ih = null, us = null, io = !1, hi = null, iu = q, Yh = [], Kh = null, JD = 50, ou = 0, Wh = null, Gh = !1, Mf = !1, HD = 50, cs = 0, Vf = null, su = dt, Uf = q, eN = !1;
  function Ff() {
    return Tn;
  }
  function Dn() {
    return (He & (ln | ga)) !== zt ? Wt() : (su !== dt || (su = Wt()), su);
  }
  function vi(e) {
    var t = e.mode;
    if ((t & Je) === ge)
      return De;
    if ((He & ln) !== zt && Jt !== q)
      return Zs(Jt);
    var n = UR() !== VR;
    if (n) {
      if (sn.transition !== null) {
        var a = sn.transition;
        a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
      }
      return Uf === qt && (Uf = Ag()), Uf;
    }
    var i = Ta();
    if (i !== qt)
      return i;
    var u = Sj();
    return u;
  }
  function BD(e) {
    var t = e.mode;
    return (t & Je) === ge ? De : YE();
  }
  function Bt(e, t, n, a) {
    pk(), eN && c("useInsertionEffect must not schedule updates."), Gh && (Mf = !0), el(e, n, a), (He & ln) !== q && e === Tn ? gk(t) : (Ra && Ug(e, t, n), yk(t), e === Tn && ((He & ln) === zt && (nu = Pe(nu, n)), Ht === eu && gi(e, Jt)), zn(e, a), n === De && He === zt && (t.mode & Je) === ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Fa.isBatchingLegacy && (ru(), eb()));
  }
  function ID(e, t, n) {
    var a = e.current;
    a.lanes = t, el(e, t, n), zn(e, n);
  }
  function YD(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (He & ln) !== zt
    );
  }
  function zn(e, t) {
    var n = e.callbackNode;
    $E(e, t);
    var a = ic(e, e === Tn ? Jt : q);
    if (a === q) {
      n !== null && vN(n), e.callbackNode = null, e.callbackPriority = qt;
      return;
    }
    var i = Hi(a), u = e.callbackPriority;
    if (u === i && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Fa.current !== null && n !== nv)) {
      n == null && u !== De && c("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && vN(n);
    var m;
    if (i === De)
      e.tag === ii ? (Fa.isBatchingLegacy !== null && (Fa.didScheduleLegacyUpdate = !0), xR(aN.bind(null, e))) : Zy(aN.bind(null, e)), Fa.current !== null ? Fa.current.push(oi) : Cj(function() {
        (He & (ln | ga)) === zt && oi();
      }), m = null;
    else {
      var g;
      switch (zg(a)) {
        case Xn:
          g = tc;
          break;
        case Nr:
          g = Id;
          break;
        case Sr:
          g = $i;
          break;
        case lc:
          g = Yd;
          break;
        default:
          g = $i;
          break;
      }
      m = av(g, tN.bind(null, e));
    }
    e.callbackPriority = i, e.callbackNode = m;
  }
  function tN(e, t) {
    if (cT(), su = dt, Uf = q, (He & (ln | ga)) !== zt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, a = _r();
    if (a && e.callbackNode !== n)
      return null;
    var i = ic(e, e === Tn ? Jt : q);
    if (i === q)
      return null;
    var u = !oc(e, i) && !IE(e, i) && !t, m = u ? nk(e, i) : zf(e, i);
    if (m !== kr) {
      if (m === ro) {
        var g = pm(e);
        g !== q && (i = g, m = qh(e, g));
      }
      if (m === Zl) {
        var x = tu;
        throw oo(e, q), gi(e, i), zn(e, Wt()), x;
      }
      if (m === Jh)
        gi(e, i);
      else {
        var C = !oc(e, i), j = e.current.alternate;
        if (C && !WD(j)) {
          if (m = zf(e, i), m === ro) {
            var _ = pm(e);
            _ !== q && (i = _, m = qh(e, _));
          }
          if (m === Zl) {
            var L = tu;
            throw oo(e, q), gi(e, i), zn(e, Wt()), L;
          }
        }
        e.finishedWork = j, e.finishedLanes = i, KD(e, m, i);
      }
    }
    return zn(e, Wt()), e.callbackNode === n ? tN.bind(null, e) : null;
  }
  function qh(e, t) {
    var n = au;
    if (uc(e)) {
      var a = oo(e, t);
      a.flags |= vr, mR(e.containerInfo);
    }
    var i = zf(e, t);
    if (i !== ro) {
      var u = $n;
      $n = n, u !== null && nN(u);
    }
    return i;
  }
  function nN(e) {
    $n === null ? $n = e : $n.push.apply($n, e);
  }
  function KD(e, t, n) {
    switch (t) {
      case kr:
      case Zl:
        throw new Error("Root did not complete. This is a bug in React.");
      case ro: {
        so(e, $n, Or);
        break;
      }
      case Lf: {
        if (gi(e, n), _g(n) && // do not delay if we're inside an act() scope
        !gN()) {
          var a = Bh + Qx - Wt();
          if (a > 10) {
            var i = ic(e, q);
            if (i !== q)
              break;
            var u = e.suspendedLanes;
            if (!Po(u, n)) {
              Dn(), Vg(e, u);
              break;
            }
            e.timeoutHandle = Km(so.bind(null, e, $n, Or), a);
            break;
          }
        }
        so(e, $n, Or);
        break;
      }
      case eu: {
        if (gi(e, n), BE(n))
          break;
        if (!gN()) {
          var m = UE(e, n), g = m, x = Wt() - g, C = mk(x) - x;
          if (C > 10) {
            e.timeoutHandle = Km(so.bind(null, e, $n, Or), C);
            break;
          }
        }
        so(e, $n, Or);
        break;
      }
      case qx: {
        so(e, $n, Or);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function WD(e) {
    for (var t = e; ; ) {
      if (t.flags & Zu) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var i = 0; i < a.length; i++) {
              var u = a[i], m = u.getSnapshot, g = u.value;
              try {
                if (!ea(m(), g))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var x = t.child;
      if (t.subtreeFlags & Zu && x !== null) {
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
  function gi(e, t) {
    t = sc(t, Pf), t = sc(t, nu), WE(e, t);
  }
  function aN(e) {
    if (fT(), (He & (ln | ga)) !== zt)
      throw new Error("Should not already be working.");
    _r();
    var t = ic(e, q);
    if (!Qn(t, De))
      return zn(e, Wt()), null;
    var n = zf(e, t);
    if (e.tag !== ii && n === ro) {
      var a = pm(e);
      a !== q && (t = a, n = qh(e, a));
    }
    if (n === Zl) {
      var i = tu;
      throw oo(e, q), gi(e, t), zn(e, Wt()), i;
    }
    if (n === Jh)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, so(e, $n, Or), zn(e, Wt()), null;
  }
  function GD(e, t) {
    t !== q && (ym(e, Pe(t, De)), zn(e, Wt()), (He & (ln | ga)) === zt && (ru(), oi()));
  }
  function Qh(e, t) {
    var n = He;
    He |= Gx;
    try {
      return e(t);
    } finally {
      He = n, He === zt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Fa.isBatchingLegacy && (ru(), eb());
    }
  }
  function qD(e, t, n, a, i) {
    var u = Ta(), m = sn.transition;
    try {
      return sn.transition = null, Qt(Xn), e(t, n, a, i);
    } finally {
      Qt(u), sn.transition = m, He === zt && ru();
    }
  }
  function Lr(e) {
    hi !== null && hi.tag === ii && (He & (ln | ga)) === zt && _r();
    var t = He;
    He |= Gx;
    var n = sn.transition, a = Ta();
    try {
      return sn.transition = null, Qt(Xn), e ? e() : void 0;
    } finally {
      Qt(a), sn.transition = n, He = t, (He & (ln | ga)) === zt && oi();
    }
  }
  function rN() {
    return (He & (ln | ga)) !== zt;
  }
  function $f(e, t) {
    bn(Hh, nr, e), nr = Pe(nr, t);
  }
  function Xh(e) {
    nr = Hh.current, yn(Hh, e);
  }
  function oo(e, t) {
    e.finishedWork = null, e.finishedLanes = q;
    var n = e.timeoutHandle;
    if (n !== Wm && (e.timeoutHandle = Wm, Ej(n)), xt !== null)
      for (var a = xt.return; a !== null; ) {
        var i = a.alternate;
        _x(i, a), a = a.return;
      }
    Tn = e;
    var u = lo(e.current, null);
    return xt = u, Jt = nr = t, Ht = kr, tu = null, _f = q, nu = q, Pf = q, au = null, $n = null, IR(), Oa.discardPendingWarnings(), u;
  }
  function iN(e, t) {
    do {
      var n = xt;
      try {
        if (Gc(), Db(), Kt(), zh.current = null, n === null || n.return === null) {
          Ht = Zl, tu = t, xt = null;
          return;
        }
        if (ba && n.mode & it && wf(n, !0), za)
          if (ko(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var a = t;
            jE(n, a, Jt);
          } else
            wE(n, t, Jt);
        xT(e, n.return, n, t, Jt), uN(n);
      } catch (i) {
        t = i, xt === n && n !== null ? (n = n.return, xt = n) : n = xt;
        continue;
      }
      return;
    } while (!0);
  }
  function oN() {
    var e = $h.current;
    return $h.current = xf, e === null ? xf : e;
  }
  function sN(e) {
    $h.current = e;
  }
  function QD() {
    Bh = Wt();
  }
  function lu(e) {
    _f = Pe(e, _f);
  }
  function XD() {
    Ht === kr && (Ht = Lf);
  }
  function Zh() {
    (Ht === kr || Ht === Lf || Ht === ro) && (Ht = eu), Tn !== null && (hm(_f) || hm(nu)) && gi(Tn, Jt);
  }
  function ZD(e) {
    Ht !== eu && (Ht = ro), au === null ? au = [e] : au.push(e);
  }
  function ek() {
    return Ht === kr;
  }
  function zf(e, t) {
    var n = He;
    He |= ln;
    var a = oN();
    if (Tn !== e || Jt !== t) {
      if (Ra) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (uu(e, Jt), i.clear()), Fg(e, t);
      }
      Or = $g(), oo(e, t);
    }
    Tg(t);
    do
      try {
        tk();
        break;
      } catch (u) {
        iN(e, u);
      }
    while (!0);
    if (Gc(), He = n, sN(a), xt !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return Dg(), Tn = null, Jt = q, Ht;
  }
  function tk() {
    for (; xt !== null; )
      lN(xt);
  }
  function nk(e, t) {
    var n = He;
    He |= ln;
    var a = oN();
    if (Tn !== e || Jt !== t) {
      if (Ra) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (uu(e, Jt), i.clear()), Fg(e, t);
      }
      Or = $g(), ru(), oo(e, t);
    }
    Tg(t);
    do
      try {
        ak();
        break;
      } catch (u) {
        iN(e, u);
      }
    while (!0);
    return Gc(), sN(a), He = n, xt !== null ? (OE(), kr) : (Dg(), Tn = null, Jt = q, Ht);
  }
  function ak() {
    for (; xt !== null && !iE(); )
      lN(xt);
  }
  function lN(e) {
    var t = e.alternate;
    bt(e);
    var n;
    (e.mode & it) !== ge ? (nh(e), n = ev(t, e, nr), wf(e, !0)) : n = ev(t, e, nr), Kt(), e.memoizedProps = e.pendingProps, n === null ? uN(e) : xt = n, zh.current = null;
  }
  function uN(e) {
    var t = e;
    do {
      var n = t.alternate, a = t.return;
      if ((t.flags & Is) === be) {
        bt(t);
        var i = void 0;
        if ((t.mode & it) === ge ? i = Lx(n, t, nr) : (nh(t), i = Lx(n, t, nr), wf(t, !1)), Kt(), i !== null) {
          xt = i;
          return;
        }
      } else {
        var u = XT(n, t);
        if (u !== null) {
          u.flags &= Z1, xt = u;
          return;
        }
        if ((t.mode & it) !== ge) {
          wf(t, !1);
          for (var m = t.actualDuration, g = t.child; g !== null; )
            m += g.actualDuration, g = g.sibling;
          t.actualDuration = m;
        }
        if (a !== null)
          a.flags |= Is, a.subtreeFlags = be, a.deletions = null;
        else {
          Ht = Jh, xt = null;
          return;
        }
      }
      var x = t.sibling;
      if (x !== null) {
        xt = x;
        return;
      }
      t = a, xt = t;
    } while (t !== null);
    Ht === kr && (Ht = qx);
  }
  function so(e, t, n) {
    var a = Ta(), i = sn.transition;
    try {
      sn.transition = null, Qt(Xn), rk(e, t, n, a);
    } finally {
      sn.transition = i, Qt(a);
    }
    return null;
  }
  function rk(e, t, n, a) {
    do
      _r();
    while (hi !== null);
    if (hk(), (He & (ln | ga)) !== zt)
      throw new Error("Should not already be working.");
    var i = e.finishedWork, u = e.finishedLanes;
    if (yE(u), i === null)
      return wg(), null;
    if (u === q && c("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, i === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = qt;
    var m = Pe(i.lanes, i.childLanes);
    GE(e, m), e === Tn && (Tn = null, xt = null, Jt = q), ((i.subtreeFlags & To) !== be || (i.flags & To) !== be) && (io || (io = !0, Kh = n, av($i, function() {
      return _r(), null;
    })));
    var g = (i.subtreeFlags & (Hd | Bd | Ys | To)) !== be, x = (i.flags & (Hd | Bd | Ys | To)) !== be;
    if (g || x) {
      var C = sn.transition;
      sn.transition = null;
      var j = Ta();
      Qt(Xn);
      var _ = He;
      He |= ga, zh.current = null, aD(e, i), ex(), gD(e, i, u), vj(e.containerInfo), e.current = i, RE(u), yD(i, e, u), TE(), oE(), He = _, Qt(j), sn.transition = C;
    } else
      e.current = i, ex();
    var L = io;
    if (io ? (io = !1, hi = e, iu = u) : (cs = 0, Vf = null), m = e.pendingLanes, m === q && (us = null), L || mN(e.current, !1), mE(i.stateNode, a), Ra && e.memoizedUpdaters.clear(), VD(), zn(e, Wt()), t !== null)
      for (var J = e.onRecoverableError, B = 0; B < t.length; B++) {
        var K = t[B], re = K.stack, he = K.digest;
        J(K.value, {
          componentStack: re,
          digest: he
        });
      }
    if (Af) {
      Af = !1;
      var fe = Ih;
      throw Ih = null, fe;
    }
    return Qn(iu, De) && e.tag !== ii && _r(), m = e.pendingLanes, Qn(m, De) ? (uT(), e === Wh ? ou++ : (ou = 0, Wh = e)) : ou = 0, oi(), wg(), null;
  }
  function _r() {
    if (hi !== null) {
      var e = zg(iu), t = ZE(Sr, e), n = sn.transition, a = Ta();
      try {
        return sn.transition = null, Qt(t), ok();
      } finally {
        Qt(a), sn.transition = n;
      }
    }
    return !1;
  }
  function ik(e) {
    Yh.push(e), io || (io = !0, av($i, function() {
      return _r(), null;
    }));
  }
  function ok() {
    if (hi === null)
      return !1;
    var e = Kh;
    Kh = null;
    var t = hi, n = iu;
    if (hi = null, iu = q, (He & (ln | ga)) !== zt)
      throw new Error("Cannot flush passive effects while already rendering.");
    Gh = !0, Mf = !1, DE(n);
    var a = He;
    He |= ga, wD(t.current), ND(t, t.current, n, e);
    {
      var i = Yh;
      Yh = [];
      for (var u = 0; u < i.length; u++) {
        var m = i[u];
        sD(t, m);
      }
    }
    kE(), mN(t.current, !0), He = a, oi(), Mf ? t === Vf ? cs++ : (cs = 0, Vf = t) : cs = 0, Gh = !1, Mf = !1, pE(t);
    {
      var g = t.current.stateNode;
      g.effectDuration = 0, g.passiveEffectDuration = 0;
    }
    return !0;
  }
  function cN(e) {
    return us !== null && us.has(e);
  }
  function sk(e) {
    us === null ? us = /* @__PURE__ */ new Set([e]) : us.add(e);
  }
  function lk(e) {
    Af || (Af = !0, Ih = e);
  }
  var uk = lk;
  function fN(e, t, n) {
    var a = no(n, t), i = lx(e, a, De), u = li(e, i, De), m = Dn();
    u !== null && (el(u, De, m), zn(u, m));
  }
  function ft(e, t, n) {
    if (eD(n), cu(!1), e.tag === b) {
      fN(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === b) {
        fN(a, e, n);
        return;
      } else if (a.tag === p) {
        var i = a.type, u = a.stateNode;
        if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !cN(u)) {
          var m = no(n, e), g = xh(a, m, De), x = li(a, g, De), C = Dn();
          x !== null && (el(x, De, C), zn(x, C));
          return;
        }
      }
      a = a.return;
    }
    c(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function ck(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var i = Dn();
    Vg(e, n), bk(e), Tn === e && Po(Jt, n) && (Ht === eu || Ht === Lf && _g(Jt) && Wt() - Bh < Qx ? oo(e, q) : Pf = Pe(Pf, n)), zn(e, i);
  }
  function dN(e, t) {
    t === qt && (t = BD(e));
    var n = Dn(), a = Un(e, t);
    a !== null && (el(a, t, n), zn(a, n));
  }
  function fk(e) {
    var t = e.memoizedState, n = qt;
    t !== null && (n = t.retryLane), dN(e, n);
  }
  function dk(e, t) {
    var n = qt, a;
    switch (e.tag) {
      case V:
        a = e.stateNode;
        var i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case ve:
        a = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    a !== null && a.delete(t), dN(e, n);
  }
  function mk(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : $D(e / 1960) * 1960;
  }
  function pk() {
    if (ou > JD)
      throw ou = 0, Wh = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    cs > HD && (cs = 0, Vf = null, c("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function hk() {
    Oa.flushLegacyContextWarning(), Oa.flushPendingUnsafeLifecycleWarnings();
  }
  function mN(e, t) {
    bt(e), Jf(e, yr, PD), t && Jf(e, ec, AD), Jf(e, yr, LD), t && Jf(e, ec, _D), Kt();
  }
  function Jf(e, t, n) {
    for (var a = e, i = null; a !== null; ) {
      var u = a.subtreeFlags & t;
      a !== i && a.child !== null && u !== be ? a = a.child : ((a.flags & t) !== be && n(a), a.sibling !== null ? a = a.sibling : a = i = a.return);
    }
  }
  var Hf = null;
  function pN(e) {
    {
      if ((He & ln) !== zt || !(e.mode & Je))
        return;
      var t = e.tag;
      if (t !== h && t !== b && t !== p && t !== v && t !== z && t !== I && t !== Q)
        return;
      var n = Le(e) || "ReactComponent";
      if (Hf !== null) {
        if (Hf.has(n))
          return;
        Hf.add(n);
      } else
        Hf = /* @__PURE__ */ new Set([n]);
      var a = vn;
      try {
        bt(e), c("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        a ? bt(e) : Kt();
      }
    }
  }
  var ev;
  {
    var vk = null;
    ev = function(e, t, n) {
      var a = SN(vk, t);
      try {
        return Rx(e, t, n);
      } catch (u) {
        if (TR() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (Gc(), Db(), _x(e, t), SN(t, a), t.mode & it && nh(t), Vd(null, Rx, null, e, t, n), G1()) {
          var i = Ud();
          typeof i == "object" && i !== null && i._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var hN = !1, tv;
  tv = /* @__PURE__ */ new Set();
  function gk(e) {
    if (Li && !oT())
      switch (e.tag) {
        case v:
        case z:
        case Q: {
          var t = xt && Le(xt) || "Unknown", n = t;
          if (!tv.has(n)) {
            tv.add(n);
            var a = Le(e) || "Unknown";
            c("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
          }
          break;
        }
        case p: {
          hN || (c("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hN = !0);
          break;
        }
      }
  }
  function uu(e, t) {
    if (Ra) {
      var n = e.memoizedUpdaters;
      n.forEach(function(a) {
        Ug(e, a, t);
      });
    }
  }
  var nv = {};
  function av(e, t) {
    {
      var n = Fa.current;
      return n !== null ? (n.push(t), nv) : Cg(e, t);
    }
  }
  function vN(e) {
    if (e !== nv)
      return rE(e);
  }
  function gN() {
    return Fa.current !== null;
  }
  function yk(e) {
    {
      if (e.mode & Je) {
        if (!Wx())
          return;
      } else if (!FD() || He !== zt || e.tag !== v && e.tag !== z && e.tag !== Q)
        return;
      if (Fa.current === null) {
        var t = vn;
        try {
          bt(e), c(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e));
        } finally {
          t ? bt(e) : Kt();
        }
      }
    }
  }
  function bk(e) {
    e.tag !== ii && Wx() && Fa.current === null && c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function cu(e) {
    eN = e;
  }
  var ya = null, fs = null, xk = function(e) {
    ya = e;
  };
  function ds(e) {
    {
      if (ya === null)
        return e;
      var t = ya(e);
      return t === void 0 ? e : t.current;
    }
  }
  function rv(e) {
    return ds(e);
  }
  function iv(e) {
    {
      if (ya === null)
        return e;
      var t = ya(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = ds(e.render);
          if (e.render !== n) {
            var a = {
              $$typeof: we,
              render: n
            };
            return e.displayName !== void 0 && (a.displayName = e.displayName), a;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function yN(e, t) {
    {
      if (ya === null)
        return !1;
      var n = e.elementType, a = t.type, i = !1, u = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case p: {
          typeof a == "function" && (i = !0);
          break;
        }
        case v: {
          (typeof a == "function" || u === Ve) && (i = !0);
          break;
        }
        case z: {
          (u === we || u === Ve) && (i = !0);
          break;
        }
        case I:
        case Q: {
          (u === yt || u === Ve) && (i = !0);
          break;
        }
        default:
          return !1;
      }
      if (i) {
        var m = ya(n);
        if (m !== void 0 && m === ya(a))
          return !0;
      }
      return !1;
    }
  }
  function bN(e) {
    {
      if (ya === null || typeof WeakSet != "function")
        return;
      fs === null && (fs = /* @__PURE__ */ new WeakSet()), fs.add(e);
    }
  }
  var Nk = function(e, t) {
    {
      if (ya === null)
        return;
      var n = t.staleFamilies, a = t.updatedFamilies;
      _r(), Lr(function() {
        ov(e.current, a, n);
      });
    }
  }, Sk = function(e, t) {
    {
      if (e.context !== ta)
        return;
      _r(), Lr(function() {
        fu(t, e, null, null);
      });
    }
  };
  function ov(e, t, n) {
    {
      var a = e.alternate, i = e.child, u = e.sibling, m = e.tag, g = e.type, x = null;
      switch (m) {
        case v:
        case Q:
        case p:
          x = g;
          break;
        case z:
          x = g.render;
          break;
      }
      if (ya === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var C = !1, j = !1;
      if (x !== null) {
        var _ = ya(x);
        _ !== void 0 && (n.has(_) ? j = !0 : t.has(_) && (m === p ? j = !0 : C = !0));
      }
      if (fs !== null && (fs.has(e) || a !== null && fs.has(a)) && (j = !0), j && (e._debugNeedsRemount = !0), j || C) {
        var L = Un(e, De);
        L !== null && Bt(L, e, De, dt);
      }
      i !== null && !j && ov(i, t, n), u !== null && ov(u, t, n);
    }
  }
  var Ek = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function(i) {
        return i.current;
      }));
      return sv(e.current, a, n), n;
    }
  };
  function sv(e, t, n) {
    {
      var a = e.child, i = e.sibling, u = e.tag, m = e.type, g = null;
      switch (u) {
        case v:
        case Q:
        case p:
          g = m;
          break;
        case z:
          g = m.render;
          break;
      }
      var x = !1;
      g !== null && t.has(g) && (x = !0), x ? Ck(e, n) : a !== null && sv(a, t, n), i !== null && sv(i, t, n);
    }
  }
  function Ck(e, t) {
    {
      var n = wk(e, t);
      if (n)
        return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case w:
            t.add(a.stateNode);
            return;
          case N:
            t.add(a.stateNode.containerInfo);
            return;
          case b:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null)
          throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function wk(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === w)
        a = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return a;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return a;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var lv;
  {
    lv = !1;
    try {
      var xN = Object.preventExtensions({});
    } catch {
      lv = !0;
    }
  }
  function jk(e, t, n, a) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = be, this.subtreeFlags = be, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !lv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var na = function(e, t, n, a) {
    return new jk(e, t, n, a);
  };
  function uv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Rk(e) {
    return typeof e == "function" && !uv(e) && e.defaultProps === void 0;
  }
  function Tk(e) {
    if (typeof e == "function")
      return uv(e) ? p : v;
    if (e != null) {
      var t = e.$$typeof;
      if (t === we)
        return z;
      if (t === yt)
        return I;
    }
    return h;
  }
  function lo(e, t) {
    var n = e.alternate;
    n === null ? (n = na(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = be, n.subtreeFlags = be, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & br, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var a = e.dependencies;
    switch (n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case h:
      case v:
      case Q:
        n.type = ds(e.type);
        break;
      case p:
        n.type = rv(e.type);
        break;
      case z:
        n.type = iv(e.type);
        break;
    }
    return n;
  }
  function Dk(e, t) {
    e.flags &= br | Lt;
    var n = e.alternate;
    if (n === null)
      e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = be, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var a = n.dependencies;
      e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function kk(e, t, n) {
    var a;
    return e === Fc ? (a = Je, t === !0 && (a |= Et, a |= Ya)) : a = ge, Ra && (a |= it), na(b, null, null, a);
  }
  function cv(e, t, n, a, i, u) {
    var m = h, g = e;
    if (typeof e == "function")
      uv(e) ? (m = p, g = rv(g)) : g = ds(g);
    else if (typeof e == "string")
      m = w;
    else
      e: switch (e) {
        case k:
          return yi(n.children, i, u, t);
        case X:
          m = O, i |= Et, (i & Je) !== ge && (i |= Ya);
          break;
        case ae:
          return Ok(n, i, u, t);
        case Ae:
          return Lk(n, i, u, t);
        case _e:
          return _k(n, i, u, t);
        case Ca:
          return NN(n, i, u, t);
        case wa:
        case gt:
        case Yt:
        case Di:
        case hn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ye:
                m = P;
                break e;
              case $e:
                m = A;
                break e;
              case we:
                m = z, g = iv(g);
                break e;
              case yt:
                m = I;
                break e;
              case Ve:
                m = Se, g = null;
                break e;
            }
          var x = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var C = a ? Le(a) : null;
            C && (x += `

Check the render method of \`` + C + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + x));
        }
      }
    var j = na(m, n, t, i);
    return j.elementType = e, j.type = g, j.lanes = u, j._debugOwner = a, j;
  }
  function fv(e, t, n) {
    var a = null;
    a = e._owner;
    var i = e.type, u = e.key, m = e.props, g = cv(i, u, m, a, t, n);
    return g._debugSource = e._source, g._debugOwner = e._owner, g;
  }
  function yi(e, t, n, a) {
    var i = na(M, e, a, t);
    return i.lanes = n, i;
  }
  function Ok(e, t, n, a) {
    typeof e.id != "string" && c('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var i = na(T, e, a, t | it);
    return i.elementType = ae, i.lanes = n, i.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, i;
  }
  function Lk(e, t, n, a) {
    var i = na(V, e, a, t);
    return i.elementType = Ae, i.lanes = n, i;
  }
  function _k(e, t, n, a) {
    var i = na(ve, e, a, t);
    return i.elementType = _e, i.lanes = n, i;
  }
  function NN(e, t, n, a) {
    var i = na(me, e, a, t);
    i.elementType = Ca, i.lanes = n;
    var u = {
      isHidden: !1
    };
    return i.stateNode = u, i;
  }
  function dv(e, t, n) {
    var a = na(R, e, null, t);
    return a.lanes = n, a;
  }
  function Pk() {
    var e = na(w, null, null, ge);
    return e.elementType = "DELETED", e;
  }
  function Ak(e) {
    var t = na(de, null, null, ge);
    return t.stateNode = e, t;
  }
  function mv(e, t, n) {
    var a = e.children !== null ? e.children : [], i = na(N, a, e.key, t);
    return i.lanes = n, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, i;
  }
  function SN(e, t) {
    return e === null && (e = na(h, null, null, ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function Mk(e, t, n, a, i) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Wm, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = qt, this.eventTimes = gm(q), this.expirationTimes = gm(dt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = gm(q), this.identifierPrefix = a, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], m = 0; m < Wd; m++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Fc:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case ii:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function EN(e, t, n, a, i, u, m, g, x, C) {
    var j = new Mk(e, t, n, g, x), _ = kk(t, u);
    j.current = _, _.stateNode = j;
    {
      var L = {
        element: a,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      _.memoizedState = L;
    }
    return jp(_), j;
  }
  var pv = "18.3.1";
  function Vk(e, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return sa(a), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Ea,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var hv, vv;
  hv = !1, vv = {};
  function CN(e) {
    if (!e)
      return ta;
    var t = jo(e), n = bR(t);
    if (t.tag === p) {
      var a = t.type;
      if (Ga(a))
        return Qy(t, a, n);
    }
    return n;
  }
  function Uk(e, t) {
    {
      var n = jo(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var i = Ng(n);
      if (i === null)
        return null;
      if (i.mode & Et) {
        var u = Le(n) || "Component";
        if (!vv[u]) {
          vv[u] = !0;
          var m = vn;
          try {
            bt(i), n.mode & Et ? c("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : c("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            m ? bt(m) : Kt();
          }
        }
      }
      return i.stateNode;
    }
  }
  function wN(e, t, n, a, i, u, m, g) {
    var x = !1, C = null;
    return EN(e, t, x, C, n, a, i, u, m);
  }
  function jN(e, t, n, a, i, u, m, g, x, C) {
    var j = !0, _ = EN(n, a, j, e, i, u, m, g, x);
    _.context = CN(null);
    var L = _.current, J = Dn(), B = vi(L), K = Tr(J, B);
    return K.callback = t ?? null, li(L, K, B), ID(_, B, J), _;
  }
  function fu(e, t, n, a) {
    dE(t, e);
    var i = t.current, u = Dn(), m = vi(i);
    LE(m);
    var g = CN(n);
    t.context === null ? t.context = g : t.pendingContext = g, Li && vn !== null && !hv && (hv = !0, c(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(vn) || "Unknown"));
    var x = Tr(u, m);
    x.payload = {
      element: e
    }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && c("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), x.callback = a);
    var C = li(i, x, m);
    return C !== null && (Bt(C, i, m, u), ef(C, i, m)), m;
  }
  function Bf(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case w:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Fk(e) {
    switch (e.tag) {
      case b: {
        var t = e.stateNode;
        if (uc(t)) {
          var n = zE(t);
          GD(t, n);
        }
        break;
      }
      case V: {
        Lr(function() {
          var i = Un(e, De);
          if (i !== null) {
            var u = Dn();
            Bt(i, e, De, u);
          }
        });
        var a = De;
        gv(e, a);
        break;
      }
    }
  }
  function RN(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = KE(n.retryLane, t));
  }
  function gv(e, t) {
    RN(e, t);
    var n = e.alternate;
    n && RN(n, t);
  }
  function $k(e) {
    if (e.tag === V) {
      var t = qs, n = Un(e, t);
      if (n !== null) {
        var a = Dn();
        Bt(n, e, t, a);
      }
      gv(e, t);
    }
  }
  function zk(e) {
    if (e.tag === V) {
      var t = vi(e), n = Un(e, t);
      if (n !== null) {
        var a = Dn();
        Bt(n, e, t, a);
      }
      gv(e, t);
    }
  }
  function TN(e) {
    var t = aE(e);
    return t === null ? null : t.stateNode;
  }
  var DN = function(e) {
    return null;
  };
  function Jk(e) {
    return DN(e);
  }
  var kN = function(e) {
    return !1;
  };
  function Hk(e) {
    return kN(e);
  }
  var ON = null, LN = null, _N = null, PN = null, AN = null, MN = null, VN = null, UN = null, FN = null;
  {
    var $N = function(e, t, n) {
      var a = t[n], i = Xe(e) ? e.slice() : Fe({}, e);
      return n + 1 === t.length ? (Xe(i) ? i.splice(a, 1) : delete i[a], i) : (i[a] = $N(e[a], t, n + 1), i);
    }, zN = function(e, t) {
      return $N(e, t, 0);
    }, JN = function(e, t, n, a) {
      var i = t[a], u = Xe(e) ? e.slice() : Fe({}, e);
      if (a + 1 === t.length) {
        var m = n[a];
        u[m] = u[i], Xe(u) ? u.splice(i, 1) : delete u[i];
      } else
        u[i] = JN(
          // $FlowFixMe number or string is fine here
          e[i],
          t,
          n,
          a + 1
        );
      return u;
    }, HN = function(e, t, n) {
      if (t.length !== n.length) {
        f("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            f("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return JN(e, t, n, 0);
    }, BN = function(e, t, n, a) {
      if (n >= t.length)
        return a;
      var i = t[n], u = Xe(e) ? e.slice() : Fe({}, e);
      return u[i] = BN(e[i], t, n + 1, a), u;
    }, IN = function(e, t, n) {
      return BN(e, t, 0, n);
    }, yv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    ON = function(e, t, n, a) {
      var i = yv(e, t);
      if (i !== null) {
        var u = IN(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = Fe({}, e.memoizedProps);
        var m = Un(e, De);
        m !== null && Bt(m, e, De, dt);
      }
    }, LN = function(e, t, n) {
      var a = yv(e, t);
      if (a !== null) {
        var i = zN(a.memoizedState, n);
        a.memoizedState = i, a.baseState = i, e.memoizedProps = Fe({}, e.memoizedProps);
        var u = Un(e, De);
        u !== null && Bt(u, e, De, dt);
      }
    }, _N = function(e, t, n, a) {
      var i = yv(e, t);
      if (i !== null) {
        var u = HN(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = Fe({}, e.memoizedProps);
        var m = Un(e, De);
        m !== null && Bt(m, e, De, dt);
      }
    }, PN = function(e, t, n) {
      e.pendingProps = IN(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = Un(e, De);
      a !== null && Bt(a, e, De, dt);
    }, AN = function(e, t) {
      e.pendingProps = zN(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = Un(e, De);
      n !== null && Bt(n, e, De, dt);
    }, MN = function(e, t, n) {
      e.pendingProps = HN(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = Un(e, De);
      a !== null && Bt(a, e, De, dt);
    }, VN = function(e) {
      var t = Un(e, De);
      t !== null && Bt(t, e, De, dt);
    }, UN = function(e) {
      DN = e;
    }, FN = function(e) {
      kN = e;
    };
  }
  function Bk(e) {
    var t = Ng(e);
    return t === null ? null : t.stateNode;
  }
  function Ik(e) {
    return null;
  }
  function Yk() {
    return vn;
  }
  function Kk(e) {
    var t = e.findFiberByHostInstance, n = s.ReactCurrentDispatcher;
    return fE({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: ON,
      overrideHookStateDeletePath: LN,
      overrideHookStateRenamePath: _N,
      overrideProps: PN,
      overridePropsDeletePath: AN,
      overridePropsRenamePath: MN,
      setErrorHandler: UN,
      setSuspenseHandler: FN,
      scheduleUpdate: VN,
      currentDispatcherRef: n,
      findHostInstanceByFiber: Bk,
      findFiberByHostInstance: t || Ik,
      // React Refresh
      findHostInstancesForRefresh: Ek,
      scheduleRefresh: Nk,
      scheduleRoot: Sk,
      setRefreshHandler: xk,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: Yk,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: pv
    });
  }
  var YN = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function bv(e) {
    this._internalRoot = e;
  }
  If.prototype.render = bv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? c("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Yf(arguments[1]) ? c("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && c("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== Ot) {
        var a = TN(t.current);
        a && a.parentNode !== n && c("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    fu(e, t, null, null);
  }, If.prototype.unmount = bv.prototype.unmount = function() {
    typeof arguments[0] == "function" && c("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rN() && c("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Lr(function() {
        fu(null, e, null, null);
      }), Yy(t);
    }
  };
  function Wk(e, t) {
    if (!Yf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    KN(e);
    var n = !1, a = !1, i = "", u = YN;
    t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ha && c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var m = wN(e, Fc, null, n, a, i, u);
    Lc(m.current, e);
    var g = e.nodeType === Ot ? e.parentNode : e;
    return gl(g), new bv(m);
  }
  function If(e) {
    this._internalRoot = e;
  }
  function Gk(e) {
    e && cC(e);
  }
  If.prototype.unstable_scheduleHydration = Gk;
  function qk(e, t, n) {
    if (!Yf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    KN(e), t === void 0 && c("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var a = n ?? null, i = n != null && n.hydratedSources || null, u = !1, m = !1, g = "", x = YN;
    n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (g = n.identifierPrefix), n.onRecoverableError !== void 0 && (x = n.onRecoverableError));
    var C = jN(t, null, e, Fc, a, u, m, g, x);
    if (Lc(C.current, e), gl(e), i)
      for (var j = 0; j < i.length; j++) {
        var _ = i[j];
        eT(C, _);
      }
    return new If(C);
  }
  function Yf(e) {
    return !!(e && (e.nodeType === Mn || e.nodeType === hr || e.nodeType === jd || !wt));
  }
  function du(e) {
    return !!(e && (e.nodeType === Mn || e.nodeType === hr || e.nodeType === jd || e.nodeType === Ot && e.nodeValue === " react-mount-point-unstable "));
  }
  function KN(e) {
    e.nodeType === Mn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Tl(e) && (e._reactRootContainer ? c("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : c("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var Qk = s.ReactCurrentOwner, WN;
  WN = function(e) {
    if (e._reactRootContainer && e.nodeType !== Ot) {
      var t = TN(e._reactRootContainer.current);
      t && t.parentNode !== e && c("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, a = xv(e), i = !!(a && ai(a));
    i && !n && c("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Mn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function xv(e) {
    return e ? e.nodeType === hr ? e.documentElement : e.firstChild : null;
  }
  function GN() {
  }
  function Xk(e, t, n, a, i) {
    if (i) {
      if (typeof a == "function") {
        var u = a;
        a = function() {
          var L = Bf(m);
          u.call(L);
        };
      }
      var m = jN(
        t,
        a,
        e,
        ii,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        GN
      );
      e._reactRootContainer = m, Lc(m.current, e);
      var g = e.nodeType === Ot ? e.parentNode : e;
      return gl(g), Lr(), m;
    } else {
      for (var x; x = e.lastChild; )
        e.removeChild(x);
      if (typeof a == "function") {
        var C = a;
        a = function() {
          var L = Bf(j);
          C.call(L);
        };
      }
      var j = wN(
        e,
        ii,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        GN
      );
      e._reactRootContainer = j, Lc(j.current, e);
      var _ = e.nodeType === Ot ? e.parentNode : e;
      return gl(_), Lr(function() {
        fu(t, j, n, a);
      }), j;
    }
  }
  function Zk(e, t) {
    e !== null && typeof e != "function" && c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Kf(e, t, n, a, i) {
    WN(n), Zk(i === void 0 ? null : i, "render");
    var u = n._reactRootContainer, m;
    if (!u)
      m = Xk(n, t, e, i, a);
    else {
      if (m = u, typeof i == "function") {
        var g = i;
        i = function() {
          var x = Bf(m);
          g.call(x);
        };
      }
      fu(t, m, e, i);
    }
    return Bf(m);
  }
  var qN = !1;
  function eO(e) {
    {
      qN || (qN = !0, c("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = Qk.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || c("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Mn ? e : Uk(e, "findDOMNode");
  }
  function tO(e, t, n) {
    if (c("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !du(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Tl(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Kf(null, e, t, !0, n);
  }
  function nO(e, t, n) {
    if (c("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !du(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Tl(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Kf(null, e, t, !1, n);
  }
  function aO(e, t, n, a) {
    if (c("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !du(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !q1(e))
      throw new Error("parentComponent must be a valid React Component");
    return Kf(e, t, n, !1, a);
  }
  var QN = !1;
  function rO(e) {
    if (QN || (QN = !0, c("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !du(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Tl(e) && e._reactRootContainer === void 0;
      t && c("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = xv(e), a = n && !ai(n);
        a && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Lr(function() {
        Kf(null, null, e, !1, function() {
          e._reactRootContainer = null, Yy(e);
        });
      }), !0;
    } else {
      {
        var i = xv(e), u = !!(i && ai(i)), m = e.nodeType === Mn && du(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  eC(Fk), nC($k), aC(zk), rC(Ta), iC(QE), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && c("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), F1(oj), J1(Qh, qD, Lr);
  function iO(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Yf(t))
      throw new Error("Target container is not a DOM element.");
    return Vk(e, t, null, n);
  }
  function oO(e, t, n, a) {
    return aO(e, t, n, a);
  }
  var Nv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [ai, Ho, _c, ug, cg, Qh]
  };
  function sO(e, t) {
    return Nv.usingClientEntryPoint || c('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Wk(e, t);
  }
  function lO(e, t, n) {
    return Nv.usingClientEntryPoint || c('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), qk(e, t, n);
  }
  function uO(e) {
    return rN() && c("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Lr(e);
  }
  var cO = Kk({
    findFiberByHostInstance: Ki,
    bundleType: 1,
    version: pv,
    rendererPackageName: "react-dom"
  });
  if (!cO && kt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var XN = window.location.protocol;
    /^(https?|file):$/.test(XN) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XN === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nv, ra.createPortal = iO, ra.createRoot = sO, ra.findDOMNode = eO, ra.flushSync = uO, ra.hydrate = tO, ra.hydrateRoot = lO, ra.render = nO, ra.unmountComponentAtNode = rO, ra.unstable_batchedUpdates = Qh, ra.unstable_renderSubtreeIntoContainer = oO, ra.version = pv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
I0.exports = ra;
var vO = I0.exports, W0, ZN = vO;
{
  var e0 = ZN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  W0 = function(o, r) {
    e0.usingClientEntryPoint = !0;
    try {
      return ZN.createRoot(o, r);
    } finally {
      e0.usingClientEntryPoint = !1;
    }
  };
}
var G0 = { exports: {} }, q0 = {};
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
  function r(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var s = typeof Object.is == "function" ? Object.is : r, l = o.useSyncExternalStore, d = o.useRef, f = o.useEffect, c = o.useMemo, y = o.useDebugValue;
  function v(p, h, b, N, w) {
    var R = d(null), M;
    R.current === null ? (M = {
      hasValue: !1,
      value: null
    }, R.current = M) : M = R.current;
    var O = c(function() {
      var T = !1, V, I, Q = function(ve) {
        if (!T) {
          T = !0, V = ve;
          var qe = N(ve);
          if (w !== void 0 && M.hasValue) {
            var me = M.value;
            if (w(me, qe))
              return I = me, me;
          }
          return I = qe, qe;
        }
        var Ee = V, Ce = I;
        if (s(Ee, ve))
          return Ce;
        var et = N(ve);
        return w !== void 0 && w(Ce, et) ? Ce : (V = ve, I = et, et);
      }, Se = b === void 0 ? null : b, je = function() {
        return Q(h());
      }, de = Se === null ? void 0 : function() {
        return Q(Se());
      };
      return [je, de];
    }, [h, b, N, w]), A = O[0], P = O[1], z = l(p, A, P);
    return f(function() {
      M.hasValue = !0, M.value = z;
    }, [z]), y(z), z;
  }
  q0.useSyncExternalStoreWithSelector = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
G0.exports = q0;
var gO = G0.exports, ia = (
  // prettier-ignore
  // @ts-ignore
  "default" in kv ? En : kv
), t0 = Symbol.for("react-redux-context"), n0 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function yO() {
  if (!ia.createContext)
    return {};
  const o = n0[t0] ?? (n0[t0] = /* @__PURE__ */ new Map());
  let r = o.get(ia.createContext);
  return r || (r = ia.createContext(
    null
  ), r.displayName = "ReactRedux", o.set(ia.createContext, r)), r;
}
var Ci = /* @__PURE__ */ yO(), bO = () => {
  throw new Error("uSES not initialized!");
};
function Mv(o = Ci) {
  return function() {
    const s = ia.useContext(o);
    if (!s)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return s;
  };
}
var Q0 = /* @__PURE__ */ Mv(), X0 = bO, xO = (o) => {
  X0 = o;
}, NO = (o, r) => o === r;
function SO(o = Ci) {
  const r = o === Ci ? Q0 : Mv(o), s = (l, d = {}) => {
    const { equalityFn: f = NO, devModeChecks: c = {} } = typeof d == "function" ? { equalityFn: d } : d;
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
      subscription: v,
      getServerState: p,
      stabilityCheck: h,
      identityFunctionCheck: b
    } = r(), N = ia.useRef(!0), w = ia.useCallback(
      {
        [l.name](M) {
          const O = l(M);
          {
            const {
              identityFunctionCheck: A,
              stabilityCheck: P
            } = {
              stabilityCheck: h,
              identityFunctionCheck: b,
              ...c
            };
            if (P === "always" || P === "once" && N.current) {
              const z = l(M);
              if (!f(O, z)) {
                let T;
                try {
                  throw new Error();
                } catch (V) {
                  ({ stack: T } = V);
                }
                console.warn(
                  "Selector " + (l.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: M,
                    selected: O,
                    selected2: z,
                    stack: T
                  }
                );
              }
            }
            if ((A === "always" || A === "once" && N.current) && O === M) {
              let z;
              try {
                throw new Error();
              } catch (T) {
                ({ stack: z } = T);
              }
              console.warn(
                "Selector " + (l.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: z }
              );
            }
            N.current && (N.current = !1);
          }
          return O;
        }
      }[l.name],
      [l, h, c.stabilityCheck]
    ), R = X0(
      v.addNestedSub,
      y.getState,
      p || y.getState,
      w,
      f
    );
    return ia.useDebugValue(R), R;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ur = /* @__PURE__ */ SO();
function EO(o) {
  o();
}
function CO() {
  let o = null, r = null;
  return {
    clear() {
      o = null, r = null;
    },
    notify() {
      EO(() => {
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
      const d = r = {
        callback: s,
        next: null,
        prev: r
      };
      return d.prev ? d.prev.next = d : o = d, function() {
        !l || o === null || (l = !1, d.next ? d.next.prev = d.prev : r = d.prev, d.prev ? d.prev.next = d.next : o = d.next);
      };
    }
  };
}
var a0 = {
  notify() {
  },
  get: () => []
};
function wO(o, r) {
  let s, l = a0, d = 0, f = !1;
  function c(M) {
    h();
    const O = l.subscribe(M);
    let A = !1;
    return () => {
      A || (A = !0, O(), b());
    };
  }
  function y() {
    l.notify();
  }
  function v() {
    R.onStateChange && R.onStateChange();
  }
  function p() {
    return f;
  }
  function h() {
    d++, s || (s = o.subscribe(v), l = CO());
  }
  function b() {
    d--, s && d === 0 && (s(), s = void 0, l.clear(), l = a0);
  }
  function N() {
    f || (f = !0, h());
  }
  function w() {
    f && (f = !1, b());
  }
  const R = {
    addNestedSub: c,
    notifyNestedSubs: y,
    handleChangeWrapper: v,
    isSubscribed: p,
    trySubscribe: N,
    tryUnsubscribe: w,
    getListeners: () => l
  };
  return R;
}
var jO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", RO = typeof navigator < "u" && navigator.product === "ReactNative", TO = jO || RO ? ia.useLayoutEffect : ia.useEffect;
function DO({
  store: o,
  context: r,
  children: s,
  serverState: l,
  stabilityCheck: d = "once",
  identityFunctionCheck: f = "once"
}) {
  const c = ia.useMemo(() => {
    const p = wO(o);
    return {
      store: o,
      subscription: p,
      getServerState: l ? () => l : void 0,
      stabilityCheck: d,
      identityFunctionCheck: f
    };
  }, [o, l, d, f]), y = ia.useMemo(() => o.getState(), [o]);
  TO(() => {
    const { subscription: p } = c;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), y !== o.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [c, y]);
  const v = r || Ci;
  return /* @__PURE__ */ ia.createElement(v.Provider, { value: c }, s);
}
var kO = DO;
function Z0(o = Ci) {
  const r = o === Ci ? Q0 : (
    // @ts-ignore
    Mv(o)
  ), s = () => {
    const { store: l } = r();
    return l;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var OO = /* @__PURE__ */ Z0();
function LO(o = Ci) {
  const r = o === Ci ? OO : Z0(o), s = () => r().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ru = /* @__PURE__ */ LO();
xO(gO.useSyncExternalStoreWithSelector);
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
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, xu.apply(this, arguments);
}
var Si;
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(Si || (Si = {}));
const r0 = "popstate";
function _O(o) {
  o === void 0 && (o = {});
  function r(l, d) {
    let {
      pathname: f,
      search: c,
      hash: y
    } = l.location;
    return Ov(
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
    return typeof d == "string" ? d : Nu(d);
  }
  return AO(r, s, null, o);
}
function Nt(o, r) {
  if (o === !1 || o === null || typeof o > "u")
    throw new Error(r);
}
function ir(o, r) {
  if (!o) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function PO() {
  return Math.random().toString(36).substr(2, 8);
}
function i0(o, r) {
  return {
    usr: o.state,
    key: o.key,
    idx: r
  };
}
function Ov(o, r, s, l) {
  return s === void 0 && (s = null), xu({
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: ""
  }, typeof r == "string" ? bs(r) : r, {
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || l || PO()
  });
}
function Nu(o) {
  let {
    pathname: r = "/",
    search: s = "",
    hash: l = ""
  } = o;
  return s && s !== "?" && (r += s.charAt(0) === "?" ? s : "?" + s), l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l), r;
}
function bs(o) {
  let r = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && (r.hash = o.substr(s), o = o.substr(0, s));
    let l = o.indexOf("?");
    l >= 0 && (r.search = o.substr(l), o = o.substr(0, l)), o && (r.pathname = o);
  }
  return r;
}
function AO(o, r, s, l) {
  l === void 0 && (l = {});
  let {
    window: d = document.defaultView,
    v5Compat: f = !1
  } = l, c = d.history, y = Si.Pop, v = null, p = h();
  p == null && (p = 0, c.replaceState(xu({}, c.state, {
    idx: p
  }), ""));
  function h() {
    return (c.state || {
      idx: null
    }).idx;
  }
  function b() {
    y = Si.Pop;
    let O = h(), A = O == null ? null : O - p;
    p = O, v && v({
      action: y,
      location: M.location,
      delta: A
    });
  }
  function N(O, A) {
    y = Si.Push;
    let P = Ov(M.location, O, A);
    p = h() + 1;
    let z = i0(P, p), T = M.createHref(P);
    try {
      c.pushState(z, "", T);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError")
        throw V;
      d.location.assign(T);
    }
    f && v && v({
      action: y,
      location: M.location,
      delta: 1
    });
  }
  function w(O, A) {
    y = Si.Replace;
    let P = Ov(M.location, O, A);
    p = h();
    let z = i0(P, p), T = M.createHref(P);
    c.replaceState(z, "", T), f && v && v({
      action: y,
      location: M.location,
      delta: 0
    });
  }
  function R(O) {
    let A = d.location.origin !== "null" ? d.location.origin : d.location.href, P = typeof O == "string" ? O : Nu(O);
    return P = P.replace(/ $/, "%20"), Nt(A, "No window.location.(origin|href) available to create URL for href: " + P), new URL(P, A);
  }
  let M = {
    get action() {
      return y;
    },
    get location() {
      return o(d, c);
    },
    listen(O) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(r0, b), v = O, () => {
        d.removeEventListener(r0, b), v = null;
      };
    },
    createHref(O) {
      return r(d, O);
    },
    createURL: R,
    encodeLocation(O) {
      let A = R(O);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: N,
    replace: w,
    go(O) {
      return c.go(O);
    }
  };
  return M;
}
var o0;
(function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
})(o0 || (o0 = {}));
function MO(o, r, s) {
  return s === void 0 && (s = "/"), VO(o, r, s, !1);
}
function VO(o, r, s, l) {
  let d = typeof r == "string" ? bs(r) : r, f = wi(d.pathname || "/", s);
  if (f == null)
    return null;
  let c = eS(o);
  UO(c);
  let y = null;
  for (let v = 0; y == null && v < c.length; ++v) {
    let p = GO(f);
    y = KO(c[v], p, l);
  }
  return y;
}
function eS(o, r, s, l) {
  r === void 0 && (r = []), s === void 0 && (s = []), l === void 0 && (l = "");
  let d = (f, c, y) => {
    let v = {
      relativePath: y === void 0 ? f.path || "" : y,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: c,
      route: f
    };
    v.relativePath.startsWith("/") && (Nt(v.relativePath.startsWith(l), 'Absolute route path "' + v.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), v.relativePath = v.relativePath.slice(l.length));
    let p = Vr([l, v.relativePath]), h = s.concat(v);
    f.children && f.children.length > 0 && (Nt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), eS(f.children, r, h, p)), !(f.path == null && !f.index) && r.push({
      path: p,
      score: IO(p, f.index),
      routesMeta: h
    });
  };
  return o.forEach((f, c) => {
    var y;
    if (f.path === "" || !((y = f.path) != null && y.includes("?")))
      d(f, c);
    else
      for (let v of tS(f.path))
        d(f, c, v);
  }), r;
}
function tS(o) {
  let r = o.split("/");
  if (r.length === 0) return [];
  let [s, ...l] = r, d = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (l.length === 0)
    return d ? [f, ""] : [f];
  let c = tS(l.join("/")), y = [];
  return y.push(...c.map((v) => v === "" ? f : [f, v].join("/"))), d && y.push(...c), y.map((v) => o.startsWith("/") && v === "" ? "/" : v);
}
function UO(o) {
  o.sort((r, s) => r.score !== s.score ? s.score - r.score : YO(r.routesMeta.map((l) => l.childrenIndex), s.routesMeta.map((l) => l.childrenIndex)));
}
const FO = /^:[\w-]+$/, $O = 3, zO = 2, JO = 1, HO = 10, BO = -2, s0 = (o) => o === "*";
function IO(o, r) {
  let s = o.split("/"), l = s.length;
  return s.some(s0) && (l += BO), r && (l += zO), s.filter((d) => !s0(d)).reduce((d, f) => d + (FO.test(f) ? $O : f === "" ? JO : HO), l);
}
function YO(o, r) {
  return o.length === r.length && o.slice(0, -1).every((l, d) => l === r[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    o[o.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function KO(o, r, s) {
  let {
    routesMeta: l
  } = o, d = {}, f = "/", c = [];
  for (let y = 0; y < l.length; ++y) {
    let v = l[y], p = y === l.length - 1, h = f === "/" ? r : r.slice(f.length) || "/", b = rd({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: p
    }, h), N = v.route;
    if (!b && p && s && !l[l.length - 1].route.index && (b = rd({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: !1
    }, h)), !b)
      return null;
    Object.assign(d, b.params), c.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Vr([f, b.pathname]),
      pathnameBase: ZO(Vr([f, b.pathnameBase])),
      route: N
    }), b.pathnameBase !== "/" && (f = Vr([f, b.pathnameBase]));
  }
  return c;
}
function rd(o, r) {
  typeof o == "string" && (o = {
    path: o,
    caseSensitive: !1,
    end: !0
  });
  let [s, l] = WO(o.path, o.caseSensitive, o.end), d = r.match(s);
  if (!d) return null;
  let f = d[0], c = f.replace(/(.)\/+$/, "$1"), y = d.slice(1);
  return {
    params: l.reduce((p, h, b) => {
      let {
        paramName: N,
        isOptional: w
      } = h;
      if (N === "*") {
        let M = y[b] || "";
        c = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const R = y[b];
      return w && !R ? p[N] = void 0 : p[N] = (R || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: f,
    pathnameBase: c,
    pattern: o
  };
}
function WO(o, r, s) {
  r === void 0 && (r = !1), s === void 0 && (s = !0), ir(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were ' + ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'));
  let l = [], d = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, y, v) => (l.push({
    paramName: y,
    isOptional: v != null
  }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (l.push({
    paramName: "*"
  }), d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, r ? void 0 : "i"), l];
}
function GO(o) {
  try {
    return o.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return ir(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")), o;
  }
}
function wi(o, r) {
  if (r === "/") return o;
  if (!o.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, l = o.charAt(s);
  return l && l !== "/" ? null : o.slice(s) || "/";
}
function qO(o, r) {
  r === void 0 && (r = "/");
  let {
    pathname: s,
    search: l = "",
    hash: d = ""
  } = typeof o == "string" ? bs(o) : o;
  return {
    pathname: s ? s.startsWith("/") ? s : QO(s, r) : r,
    search: e3(l),
    hash: t3(d)
  };
}
function QO(o, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function Sv(o, r, s, l) {
  return "Cannot include a '" + o + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function XO(o) {
  return o.filter((r, s) => s === 0 || r.route.path && r.route.path.length > 0);
}
function nS(o, r) {
  let s = XO(o);
  return r ? s.map((l, d) => d === s.length - 1 ? l.pathname : l.pathnameBase) : s.map((l) => l.pathnameBase);
}
function aS(o, r, s, l) {
  l === void 0 && (l = !1);
  let d;
  typeof o == "string" ? d = bs(o) : (d = xu({}, o), Nt(!d.pathname || !d.pathname.includes("?"), Sv("?", "pathname", "search", d)), Nt(!d.pathname || !d.pathname.includes("#"), Sv("#", "pathname", "hash", d)), Nt(!d.search || !d.search.includes("#"), Sv("#", "search", "hash", d)));
  let f = o === "" || d.pathname === "", c = f ? "/" : d.pathname, y;
  if (c == null)
    y = s;
  else {
    let b = r.length - 1;
    if (!l && c.startsWith("..")) {
      let N = c.split("/");
      for (; N[0] === ".."; )
        N.shift(), b -= 1;
      d.pathname = N.join("/");
    }
    y = b >= 0 ? r[b] : "/";
  }
  let v = qO(d, y), p = c && c !== "/" && c.endsWith("/"), h = (f || c === ".") && s.endsWith("/");
  return !v.pathname.endsWith("/") && (p || h) && (v.pathname += "/"), v;
}
const Vr = (o) => o.join("/").replace(/\/\/+/g, "/"), ZO = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), e3 = (o) => !o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o, t3 = (o) => !o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o;
function n3(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const rS = ["post", "put", "patch", "delete"];
new Set(rS);
const a3 = ["get", ...rS];
new Set(a3);
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
function Su() {
  return Su = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Su.apply(this, arguments);
}
const Tu = /* @__PURE__ */ U.createContext(null);
Tu.displayName = "DataRouter";
const Vv = /* @__PURE__ */ U.createContext(null);
Vv.displayName = "DataRouterState";
const r3 = /* @__PURE__ */ U.createContext(null);
r3.displayName = "Await";
const $a = /* @__PURE__ */ U.createContext(null);
$a.displayName = "Navigation";
const Du = /* @__PURE__ */ U.createContext(null);
Du.displayName = "Location";
const Fr = /* @__PURE__ */ U.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Fr.displayName = "Route";
const Uv = /* @__PURE__ */ U.createContext(null);
Uv.displayName = "RouteError";
function i3(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r;
  ku() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: l,
    navigator: d
  } = U.useContext($a), {
    hash: f,
    pathname: c,
    search: y
  } = Lu(o, {
    relative: s
  }), v = c;
  return l !== "/" && (v = c === "/" ? l : Vr([l, c])), d.createHref({
    pathname: v,
    search: y,
    hash: f
  });
}
function ku() {
  return U.useContext(Du) != null;
}
function xs() {
  return ku() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), U.useContext(Du).location;
}
const iS = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function oS(o) {
  U.useContext($a).static || U.useLayoutEffect(o);
}
function Ou() {
  let {
    isDataRoute: o
  } = U.useContext(Fr);
  return o ? b3() : o3();
}
function o3() {
  ku() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = U.useContext(Tu), {
    basename: r,
    future: s,
    navigator: l
  } = U.useContext($a), {
    matches: d
  } = U.useContext(Fr), {
    pathname: f
  } = xs(), c = JSON.stringify(nS(d, s.v7_relativeSplatPath)), y = U.useRef(!1);
  return oS(() => {
    y.current = !0;
  }), U.useCallback(function(p, h) {
    if (h === void 0 && (h = {}), ir(y.current, iS), !y.current) return;
    if (typeof p == "number") {
      l.go(p);
      return;
    }
    let b = aS(p, JSON.parse(c), f, h.relative === "path");
    o == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : Vr([r, b.pathname])), (h.replace ? l.replace : l.push)(b, h.state, h);
  }, [r, l, c, f, o]);
}
function Lu(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    future: l
  } = U.useContext($a), {
    matches: d
  } = U.useContext(Fr), {
    pathname: f
  } = xs(), c = JSON.stringify(nS(d, l.v7_relativeSplatPath));
  return U.useMemo(() => aS(o, JSON.parse(c), f, s === "path"), [o, c, f, s]);
}
function s3(o, r) {
  return l3(o, r);
}
function l3(o, r, s, l) {
  ku() || Nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = U.useContext($a), {
    matches: f
  } = U.useContext(Fr), c = f[f.length - 1], y = c ? c.params : {}, v = c ? c.pathname : "/", p = c ? c.pathnameBase : "/", h = c && c.route;
  {
    let P = h && h.path || "";
    lS(v, !h || P.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + v + '" (under <Route path="' + P + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + P + '"> to <Route ') + ('path="' + (P === "/" ? "*" : P + "/*") + '">.'));
  }
  let b = xs(), N;
  if (r) {
    var w;
    let P = typeof r == "string" ? bs(r) : r;
    p === "/" || (w = P.pathname) != null && w.startsWith(p) || Nt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + P.pathname + '" was given in the `location` prop.')), N = P;
  } else
    N = b;
  let R = N.pathname || "/", M = R;
  if (p !== "/") {
    let P = p.replace(/^\//, "").split("/");
    M = "/" + R.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let O = MO(o, {
    pathname: M
  });
  ir(h || O != null, 'No routes matched location "' + N.pathname + N.search + N.hash + '" '), ir(O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + N.pathname + N.search + N.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let A = m3(O && O.map((P) => Object.assign({}, P, {
    params: Object.assign({}, y, P.params),
    pathname: Vr([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(P.pathname).pathname : P.pathname
    ]),
    pathnameBase: P.pathnameBase === "/" ? p : Vr([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(P.pathnameBase).pathname : P.pathnameBase
    ])
  })), f, s, l);
  return r && A ? /* @__PURE__ */ U.createElement(Du.Provider, {
    value: {
      location: Su({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, N),
      navigationType: Si.Pop
    }
  }, A) : A;
}
function u3() {
  let o = y3(), r = n3(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), s = o instanceof Error ? o.stack : null, l = "rgba(200,200,200, 0.5)", d = {
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
  }, r), s ? /* @__PURE__ */ U.createElement("pre", {
    style: d
  }, s) : null, c);
}
const c3 = /* @__PURE__ */ U.createElement(u3, null);
class f3 extends U.Component {
  constructor(r) {
    super(r), this.state = {
      location: r.location,
      revalidation: r.revalidation,
      error: r.error
    };
  }
  static getDerivedStateFromError(r) {
    return {
      error: r
    };
  }
  static getDerivedStateFromProps(r, s) {
    return s.location !== r.location || s.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : s.error,
      location: s.location,
      revalidation: r.revalidation || s.revalidation
    };
  }
  componentDidCatch(r, s) {
    console.error("React Router caught the following error during render", r, s);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ U.createElement(Fr.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ U.createElement(Uv.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function d3(o) {
  let {
    routeContext: r,
    match: s,
    children: l
  } = o, d = U.useContext(Tu);
  return d && d.static && d.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = s.route.id), /* @__PURE__ */ U.createElement(Fr.Provider, {
    value: r
  }, l);
}
function m3(o, r, s, l) {
  var d;
  if (r === void 0 && (r = []), s === void 0 && (s = null), l === void 0 && (l = null), o == null) {
    var f;
    if ((f = s) != null && f.errors)
      o = s.matches;
    else
      return null;
  }
  let c = o, y = (d = s) == null ? void 0 : d.errors;
  if (y != null) {
    let h = c.findIndex((b) => b.route.id && (y == null ? void 0 : y[b.route.id]) !== void 0);
    h >= 0 || Nt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")), c = c.slice(0, Math.min(c.length, h + 1));
  }
  let v = !1, p = -1;
  if (s && l && l.v7_partialHydration)
    for (let h = 0; h < c.length; h++) {
      let b = c[h];
      if ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (p = h), b.route.id) {
        let {
          loaderData: N,
          errors: w
        } = s, R = b.route.loader && N[b.route.id] === void 0 && (!w || w[b.route.id] === void 0);
        if (b.route.lazy || R) {
          v = !0, p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((h, b, N) => {
    let w, R = !1, M = null, O = null;
    s && (w = y && b.route.id ? y[b.route.id] : void 0, M = b.route.errorElement || c3, v && (p < 0 && N === 0 ? (lS("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), R = !0, O = null) : p === N && (R = !0, O = b.route.hydrateFallbackElement || null)));
    let A = r.concat(c.slice(0, N + 1)), P = () => {
      let z;
      return w ? z = M : R ? z = O : b.route.Component ? z = /* @__PURE__ */ U.createElement(b.route.Component, null) : b.route.element ? z = b.route.element : z = h, /* @__PURE__ */ U.createElement(d3, {
        match: b,
        routeContext: {
          outlet: h,
          matches: A,
          isDataRoute: s != null
        },
        children: z
      });
    };
    return s && (b.route.ErrorBoundary || b.route.errorElement || N === 0) ? /* @__PURE__ */ U.createElement(f3, {
      location: s.location,
      revalidation: s.revalidation,
      component: M,
      error: w,
      children: P(),
      routeContext: {
        outlet: null,
        matches: A,
        isDataRoute: !0
      }
    }) : P();
  }, null);
}
var sS = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(sS || {}), Eu = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(Eu || {});
function Fv(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function p3(o) {
  let r = U.useContext(Tu);
  return r || Nt(!1, Fv(o)), r;
}
function h3(o) {
  let r = U.useContext(Vv);
  return r || Nt(!1, Fv(o)), r;
}
function v3(o) {
  let r = U.useContext(Fr);
  return r || Nt(!1, Fv(o)), r;
}
function $v(o) {
  let r = v3(o), s = r.matches[r.matches.length - 1];
  return s.route.id || Nt(!1, o + ' can only be used on routes that contain a unique "id"'), s.route.id;
}
function g3() {
  return $v(Eu.UseRouteId);
}
function y3() {
  var o;
  let r = U.useContext(Uv), s = h3(Eu.UseRouteError), l = $v(Eu.UseRouteError);
  return r !== void 0 ? r : (o = s.errors) == null ? void 0 : o[l];
}
function b3() {
  let {
    router: o
  } = p3(sS.UseNavigateStable), r = $v(Eu.UseNavigateStable), s = U.useRef(!1);
  return oS(() => {
    s.current = !0;
  }), U.useCallback(function(d, f) {
    f === void 0 && (f = {}), ir(s.current, iS), s.current && (typeof d == "number" ? o.navigate(d) : o.navigate(d, Su({
      fromRouteId: r
    }, f)));
  }, [o, r]);
}
const l0 = {};
function lS(o, r, s) {
  !r && !l0[o] && (l0[o] = !0, ir(!1, s));
}
function xi(o) {
  Nt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function x3(o) {
  let {
    basename: r = "/",
    children: s = null,
    location: l,
    navigationType: d = Si.Pop,
    navigator: f,
    static: c = !1,
    future: y
  } = o;
  ku() && Nt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let v = r.replace(/^\/*/, "/"), p = U.useMemo(() => ({
    basename: v,
    navigator: f,
    static: c,
    future: Su({
      v7_relativeSplatPath: !1
    }, y)
  }), [v, y, f, c]);
  typeof l == "string" && (l = bs(l));
  let {
    pathname: h = "/",
    search: b = "",
    hash: N = "",
    state: w = null,
    key: R = "default"
  } = l, M = U.useMemo(() => {
    let O = wi(h, v);
    return O == null ? null : {
      location: {
        pathname: O,
        search: b,
        hash: N,
        state: w,
        key: R
      },
      navigationType: d
    };
  }, [v, h, b, N, w, R, d]);
  return ir(M != null, '<Router basename="' + v + '"> is not able to match the URL ' + ('"' + h + b + N + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), M == null ? null : /* @__PURE__ */ U.createElement($a.Provider, {
    value: p
  }, /* @__PURE__ */ U.createElement(Du.Provider, {
    children: s,
    value: M
  }));
}
function N3(o) {
  let {
    children: r,
    location: s
  } = o;
  return s3(Lv(r), s);
}
new Promise(() => {
});
function Lv(o, r) {
  r === void 0 && (r = []);
  let s = [];
  return U.Children.forEach(o, (l, d) => {
    if (!/* @__PURE__ */ U.isValidElement(l))
      return;
    let f = [...r, d];
    if (l.type === U.Fragment) {
      s.push.apply(s, Lv(l.props.children, f));
      return;
    }
    l.type !== xi && Nt(!1, "[" + (typeof l.type == "string" ? l.type : l.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !l.props.index || !l.props.children || Nt(!1, "An index route cannot have child routes.");
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
    l.props.children && (c.children = Lv(l.props.children, f)), s.push(c);
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
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, ys.apply(this, arguments);
}
function zv(o, r) {
  if (o == null) return {};
  var s = {}, l = Object.keys(o), d, f;
  for (f = 0; f < l.length; f++)
    d = l[f], !(r.indexOf(d) >= 0) && (s[d] = o[d]);
  return s;
}
const Zf = "get", ed = "application/x-www-form-urlencoded";
function md(o) {
  return o != null && typeof o.tagName == "string";
}
function S3(o) {
  return md(o) && o.tagName.toLowerCase() === "button";
}
function E3(o) {
  return md(o) && o.tagName.toLowerCase() === "form";
}
function C3(o) {
  return md(o) && o.tagName.toLowerCase() === "input";
}
function w3(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function j3(o, r) {
  return o.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !w3(o);
}
let Wf = null;
function R3() {
  if (Wf === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Wf = !1;
    } catch {
      Wf = !0;
    }
  return Wf;
}
const T3 = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ev(o) {
  return o != null && !T3.has(o) ? (ir(!1, '"' + o + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ed + '"')), null) : o;
}
function D3(o, r) {
  let s, l, d, f, c;
  if (E3(o)) {
    let y = o.getAttribute("action");
    l = y ? wi(y, r) : null, s = o.getAttribute("method") || Zf, d = Ev(o.getAttribute("enctype")) || ed, f = new FormData(o);
  } else if (S3(o) || C3(o) && (o.type === "submit" || o.type === "image")) {
    let y = o.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let v = o.getAttribute("formaction") || y.getAttribute("action");
    if (l = v ? wi(v, r) : null, s = o.getAttribute("formmethod") || y.getAttribute("method") || Zf, d = Ev(o.getAttribute("formenctype")) || Ev(y.getAttribute("enctype")) || ed, f = new FormData(y, o), !R3()) {
      let {
        name: p,
        type: h,
        value: b
      } = o;
      if (h === "image") {
        let N = p ? p + "." : "";
        f.append(N + "x", "0"), f.append(N + "y", "0");
      } else p && f.append(p, b);
    }
  } else {
    if (md(o))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = Zf, l = null, d = ed, c = o;
  }
  return f && d === "text/plain" && (c = f, f = void 0), {
    action: l,
    method: s.toLowerCase(),
    encType: d,
    formData: f,
    body: c
  };
}
const k3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], O3 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], L3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], _3 = "6";
try {
  window.__reactRouterVersion = _3;
} catch {
}
const uS = /* @__PURE__ */ U.createContext({
  isTransitioning: !1
});
uS.displayName = "ViewTransition";
const P3 = /* @__PURE__ */ U.createContext(/* @__PURE__ */ new Map());
P3.displayName = "Fetchers";
const A3 = "startTransition", u0 = kv[A3];
function M3(o) {
  let {
    basename: r,
    children: s,
    future: l,
    window: d
  } = o, f = U.useRef();
  f.current == null && (f.current = _O({
    window: d,
    v5Compat: !0
  }));
  let c = f.current, [y, v] = U.useState({
    action: c.action,
    location: c.location
  }), {
    v7_startTransition: p
  } = l || {}, h = U.useCallback((b) => {
    p && u0 ? u0(() => v(b)) : v(b);
  }, [v, p]);
  return U.useLayoutEffect(() => c.listen(h), [c, h]), /* @__PURE__ */ U.createElement(x3, {
    basename: r,
    children: s,
    location: y.location,
    navigationType: y.action,
    navigator: c,
    future: l
  });
}
const V3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", U3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Jn = /* @__PURE__ */ U.forwardRef(function(r, s) {
  let {
    onClick: l,
    relative: d,
    reloadDocument: f,
    replace: c,
    state: y,
    target: v,
    to: p,
    preventScrollReset: h,
    unstable_viewTransition: b
  } = r, N = zv(r, k3), {
    basename: w
  } = U.useContext($a), R, M = !1;
  if (typeof p == "string" && U3.test(p) && (R = p, V3))
    try {
      let z = new URL(window.location.href), T = p.startsWith("//") ? new URL(z.protocol + p) : new URL(p), V = wi(T.pathname, w);
      T.origin === z.origin && V != null ? p = V + T.search + T.hash : M = !0;
    } catch {
      ir(!1, '<Link to="' + p + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let O = i3(p, {
    relative: d
  }), A = J3(p, {
    replace: c,
    state: y,
    target: v,
    preventScrollReset: h,
    relative: d,
    unstable_viewTransition: b
  });
  function P(z) {
    l && l(z), z.defaultPrevented || A(z);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ U.createElement("a", ys({}, N, {
      href: R || O,
      onClick: M || f ? l : P,
      ref: s,
      target: v
    }))
  );
});
Jn.displayName = "Link";
const F3 = /* @__PURE__ */ U.forwardRef(function(r, s) {
  let {
    "aria-current": l = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: c = !1,
    style: y,
    to: v,
    unstable_viewTransition: p,
    children: h
  } = r, b = zv(r, O3), N = Lu(v, {
    relative: b.relative
  }), w = xs(), R = U.useContext(Vv), {
    navigator: M,
    basename: O
  } = U.useContext($a), A = R != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  W3(N) && p === !0, P = M.encodeLocation ? M.encodeLocation(N).pathname : N.pathname, z = w.pathname, T = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
  d || (z = z.toLowerCase(), T = T ? T.toLowerCase() : null, P = P.toLowerCase()), T && O && (T = wi(T, O) || T);
  const V = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
  let I = z === P || !c && z.startsWith(P) && z.charAt(V) === "/", Q = T != null && (T === P || !c && T.startsWith(P) && T.charAt(P.length) === "/"), Se = {
    isActive: I,
    isPending: Q,
    isTransitioning: A
  }, je = I ? l : void 0, de;
  typeof f == "function" ? de = f(Se) : de = [f, I ? "active" : null, Q ? "pending" : null, A ? "transitioning" : null].filter(Boolean).join(" ");
  let ve = typeof y == "function" ? y(Se) : y;
  return /* @__PURE__ */ U.createElement(Jn, ys({}, b, {
    "aria-current": je,
    className: de,
    ref: s,
    style: ve,
    to: v,
    unstable_viewTransition: p
  }), typeof h == "function" ? h(Se) : h);
});
F3.displayName = "NavLink";
const $3 = /* @__PURE__ */ U.forwardRef((o, r) => {
  let {
    fetcherKey: s,
    navigate: l,
    reloadDocument: d,
    replace: f,
    state: c,
    method: y = Zf,
    action: v,
    onSubmit: p,
    relative: h,
    preventScrollReset: b,
    unstable_viewTransition: N
  } = o, w = zv(o, L3), R = Y3(), M = K3(v, {
    relative: h
  }), O = y.toLowerCase() === "get" ? "get" : "post", A = (P) => {
    if (p && p(P), P.defaultPrevented) return;
    P.preventDefault();
    let z = P.nativeEvent.submitter, T = (z == null ? void 0 : z.getAttribute("formmethod")) || y;
    R(z || P.currentTarget, {
      fetcherKey: s,
      method: T,
      navigate: l,
      replace: f,
      state: c,
      relative: h,
      preventScrollReset: b,
      unstable_viewTransition: N
    });
  };
  return /* @__PURE__ */ U.createElement("form", ys({
    ref: r,
    method: O,
    action: M,
    onSubmit: d ? p : A
  }, w));
});
$3.displayName = "Form";
var id;
(function(o) {
  o.UseScrollRestoration = "useScrollRestoration", o.UseSubmit = "useSubmit", o.UseSubmitFetcher = "useSubmitFetcher", o.UseFetcher = "useFetcher", o.useViewTransitionState = "useViewTransitionState";
})(id || (id = {}));
var c0;
(function(o) {
  o.UseFetcher = "useFetcher", o.UseFetchers = "useFetchers", o.UseScrollRestoration = "useScrollRestoration";
})(c0 || (c0 = {}));
function z3(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function cS(o) {
  let r = U.useContext(Tu);
  return r || Nt(!1, z3(o)), r;
}
function J3(o, r) {
  let {
    target: s,
    replace: l,
    state: d,
    preventScrollReset: f,
    relative: c,
    unstable_viewTransition: y
  } = r === void 0 ? {} : r, v = Ou(), p = xs(), h = Lu(o, {
    relative: c
  });
  return U.useCallback((b) => {
    if (j3(b, s)) {
      b.preventDefault();
      let N = l !== void 0 ? l : Nu(p) === Nu(h);
      v(o, {
        replace: N,
        state: d,
        preventScrollReset: f,
        relative: c,
        unstable_viewTransition: y
      });
    }
  }, [p, v, h, l, d, s, o, f, c, y]);
}
function H3() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let B3 = 0, I3 = () => "__" + String(++B3) + "__";
function Y3() {
  let {
    router: o
  } = cS(id.UseSubmit), {
    basename: r
  } = U.useContext($a), s = g3();
  return U.useCallback(function(l, d) {
    d === void 0 && (d = {}), H3();
    let {
      action: f,
      method: c,
      encType: y,
      formData: v,
      body: p
    } = D3(l, r);
    if (d.navigate === !1) {
      let h = d.fetcherKey || I3();
      o.fetch(h, s, d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        unstable_flushSync: d.unstable_flushSync
      });
    } else
      o.navigate(d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        replace: d.replace,
        state: d.state,
        fromRouteId: s,
        unstable_flushSync: d.unstable_flushSync,
        unstable_viewTransition: d.unstable_viewTransition
      });
  }, [o, r, s]);
}
function K3(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    basename: l
  } = U.useContext($a), d = U.useContext(Fr);
  d || Nt(!1, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1), c = ys({}, Lu(o || ".", {
    relative: s
  })), y = xs();
  if (o == null) {
    c.search = y.search;
    let v = new URLSearchParams(c.search);
    v.has("index") && v.get("index") === "" && (v.delete("index"), c.search = v.toString() ? "?" + v.toString() : "");
  }
  return (!o || o === ".") && f.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (c.pathname = c.pathname === "/" ? l : Vr([l, c.pathname])), Nu(c);
}
function W3(o, r) {
  r === void 0 && (r = {});
  let s = U.useContext(uS);
  s == null && Nt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: l
  } = cS(id.useViewTransitionState), d = Lu(o, {
    relative: r.relative
  });
  if (!s.isTransitioning)
    return !1;
  let f = wi(s.currentLocation.pathname, l) || s.currentLocation.pathname, c = wi(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return rd(d.pathname, c) != null || rd(d.pathname, f) != null;
}
var G3 = {
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
const q3 = /* @__PURE__ */ dd(G3);
var Q3 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function f0(o) {
  var r = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (r.name = s[1], (q3[s[1]] || o.charAt(o.length - 2) === "/") && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var l = o.indexOf("-->");
    return { type: "comment", comment: l !== -1 ? o.slice(4, l) : "" };
  }
  for (var d = new RegExp(Q3), f = null; (f = d.exec(o)) !== null; ) if (f[0].trim()) if (f[1]) {
    var c = f[1].trim(), y = [c, ""];
    c.indexOf("=") > -1 && (y = c.split("=")), r.attrs[y[0]] = y[1], d.lastIndex--;
  } else f[2] && (r.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return r;
}
var X3 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Z3 = /^\s*$/, eL = /* @__PURE__ */ Object.create(null);
function fS(o, r) {
  switch (r.type) {
    case "text":
      return o + r.content;
    case "tag":
      return o += "<" + r.name + (r.attrs ? function(s) {
        var l = [];
        for (var d in s) l.push(d + '="' + s[d] + '"');
        return l.length ? " " + l.join(" ") : "";
      }(r.attrs) : "") + (r.voidElement ? "/>" : ">"), r.voidElement ? o : o + r.children.reduce(fS, "") + "</" + r.name + ">";
    case "comment":
      return o + "<!--" + r.comment + "-->";
  }
}
var tL = { parse: function(o, r) {
  r || (r = {}), r.components || (r.components = eL);
  var s, l = [], d = [], f = -1, c = !1;
  if (o.indexOf("<") !== 0) {
    var y = o.indexOf("<");
    l.push({ type: "text", content: y === -1 ? o : o.substring(0, y) });
  }
  return o.replace(X3, function(v, p) {
    if (c) {
      if (v !== "</" + s.name + ">") return;
      c = !1;
    }
    var h, b = v.charAt(1) !== "/", N = v.startsWith("<!--"), w = p + v.length, R = o.charAt(w);
    if (N) {
      var M = f0(v);
      return f < 0 ? (l.push(M), l) : ((h = d[f]).children.push(M), l);
    }
    if (b && (f++, (s = f0(v)).type === "tag" && r.components[s.name] && (s.type = "component", c = !0), s.voidElement || c || !R || R === "<" || s.children.push({ type: "text", content: o.slice(w, o.indexOf("<", w)) }), f === 0 && l.push(s), (h = d[f - 1]) && h.children.push(s), d[f] = s), (!b || s.voidElement) && (f > -1 && (s.voidElement || s.name === v.slice(2, -1)) && (f--, s = f === -1 ? l : d[f]), !c && R !== "<" && R)) {
      h = f === -1 ? l : d[f].children;
      var O = o.indexOf("<", w), A = o.slice(w, O === -1 ? void 0 : O);
      Z3.test(A) && (A = " "), (O > -1 && f + h.length >= 0 || A !== " ") && h.push({ type: "text", content: A });
    }
  }), l;
}, stringify: function(o) {
  return o.reduce(function(r, s) {
    return r + fS("", s);
  }, "");
} };
function td() {
  if (console && console.warn) {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    typeof r[0] == "string" && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r);
  }
}
const d0 = {};
function od() {
  for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
    r[s] = arguments[s];
  typeof r[0] == "string" && d0[r[0]] || (typeof r[0] == "string" && (d0[r[0]] = /* @__PURE__ */ new Date()), td(...r));
}
const dS = (o, r) => () => {
  if (o.isInitialized)
    r();
  else {
    const s = () => {
      setTimeout(() => {
        o.off("initialized", s);
      }, 0), r();
    };
    o.on("initialized", s);
  }
};
function m0(o, r, s) {
  o.loadNamespaces(r, dS(o, s));
}
function p0(o, r, s, l) {
  typeof s == "string" && (s = [s]), s.forEach((d) => {
    o.options.ns.indexOf(d) < 0 && o.options.ns.push(d);
  }), o.loadLanguages(r, dS(o, l));
}
function nL(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const l = r.languages[0], d = r.options ? r.options.fallbackLng : !1, f = r.languages[r.languages.length - 1];
  if (l.toLowerCase() === "cimode") return !0;
  const c = (y, v) => {
    const p = r.services.backendConnector.state[`${y}|${v}`];
    return p === -1 || p === 2;
  };
  return s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !c(r.isLanguageChangingTo, o) ? !1 : !!(r.hasResourceBundle(l, o) || !r.services.backendConnector.backend || r.options.resources && !r.options.partialBundledLanguages || c(l, o) && (!d || c(f, o)));
}
function aL(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !r.languages || !r.languages.length ? (od("i18n.languages were undefined or empty", r.languages), !0) : r.options.ignoreJSONStructure !== void 0 ? r.hasLoadedNamespace(o, {
    lng: s.lng,
    precheck: (d, f) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !f(d.isLanguageChangingTo, o)) return !1;
    }
  }) : nL(o, r, s);
}
const rL = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, iL = {
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
}, oL = (o) => iL[o], sL = (o) => o.replace(rL, oL);
let _v = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: sL
};
function lL() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  _v = {
    ..._v,
    ...o
  };
}
function mS() {
  return _v;
}
let pS;
function uL(o) {
  pS = o;
}
function Jv() {
  return pS;
}
function Cv(o, r) {
  if (!o) return !1;
  const s = o.props ? o.props.children : o.children;
  return r ? s.length > 0 : !!s;
}
function wv(o) {
  if (!o) return [];
  const r = o.props ? o.props.children : o.children;
  return o.props && o.props.i18nIsDynamicList ? vs(r) : r;
}
function cL(o) {
  return Object.prototype.toString.call(o) !== "[object Array]" ? !1 : o.every((r) => U.isValidElement(r));
}
function vs(o) {
  return Array.isArray(o) ? o : [o];
}
function fL(o, r) {
  const s = {
    ...r
  };
  return s.props = Object.assign(o.props, r.props), s;
}
function hS(o, r) {
  if (!o) return "";
  let s = "";
  const l = vs(o), d = r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor ? r.transKeepBasicHtmlNodesFor : [];
  return l.forEach((f, c) => {
    if (typeof f == "string")
      s += `${f}`;
    else if (U.isValidElement(f)) {
      const y = Object.keys(f.props).length, v = d.indexOf(f.type) > -1, p = f.props.children;
      if (!p && v && y === 0)
        s += `<${f.type}/>`;
      else if (!p && (!v || y !== 0))
        s += `<${c}></${c}>`;
      else if (f.props.i18nIsDynamicList)
        s += `<${c}></${c}>`;
      else if (v && y === 1 && typeof p == "string")
        s += `<${f.type}>${p}</${f.type}>`;
      else {
        const h = hS(p, r);
        s += `<${c}>${h}</${c}>`;
      }
    } else if (f === null)
      td("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof f == "object") {
      const {
        format: y,
        ...v
      } = f, p = Object.keys(v);
      if (p.length === 1) {
        const h = y ? `${p[0]}, ${y}` : p[0];
        s += `{{${h}}}`;
      } else
        td("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", f);
    } else
      td("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", f);
  }), s;
}
function dL(o, r, s, l, d, f) {
  if (r === "") return [];
  const c = l.transKeepBasicHtmlNodesFor || [], y = r && new RegExp(c.map((O) => `<${O}`).join("|")).test(r);
  if (!o && !y && !f) return [r];
  const v = {};
  function p(O) {
    vs(O).forEach((P) => {
      typeof P != "string" && (Cv(P) ? p(wv(P)) : typeof P == "object" && !U.isValidElement(P) && Object.assign(v, P));
    });
  }
  p(o);
  const h = tL.parse(`<0>${r}</0>`), b = {
    ...v,
    ...d
  };
  function N(O, A, P) {
    const z = wv(O), T = R(z, A.children, P);
    return cL(z) && T.length === 0 || O.props && O.props.i18nIsDynamicList ? z : T;
  }
  function w(O, A, P, z, T) {
    O.dummy ? (O.children = A, P.push(U.cloneElement(O, {
      key: z
    }, T ? void 0 : A))) : P.push(...U.Children.map([O], (V) => {
      const I = {
        ...V.props
      };
      return delete I.i18nIsDynamicList, U.createElement(V.type, {
        ...I,
        key: z,
        ref: V.ref
      }, T ? null : A);
    }));
  }
  function R(O, A, P) {
    const z = vs(O);
    return vs(A).reduce((V, I, Q) => {
      const Se = I.children && I.children[0] && I.children[0].content && s.services.interpolator.interpolate(I.children[0].content, b, s.language);
      if (I.type === "tag") {
        let je = z[parseInt(I.name, 10)];
        P.length === 1 && !je && (je = P[0][I.name]), je || (je = {});
        const de = Object.keys(I.attrs).length !== 0 ? fL({
          props: I.attrs
        }, je) : je, ve = U.isValidElement(de), qe = ve && Cv(I, !0) && !I.voidElement, me = y && typeof de == "object" && de.dummy && !ve, Ee = typeof o == "object" && o !== null && Object.hasOwnProperty.call(o, I.name);
        if (typeof de == "string") {
          const Ce = s.services.interpolator.interpolate(de, b, s.language);
          V.push(Ce);
        } else if (Cv(de) || qe) {
          const Ce = N(de, I, P);
          w(de, Ce, V, Q);
        } else if (me) {
          const Ce = R(z, I.children, P);
          w(de, Ce, V, Q);
        } else if (Number.isNaN(parseFloat(I.name)))
          if (Ee) {
            const Ce = N(de, I, P);
            w(de, Ce, V, Q, I.voidElement);
          } else if (l.transSupportBasicHtmlNodes && c.indexOf(I.name) > -1)
            if (I.voidElement)
              V.push(U.createElement(I.name, {
                key: `${I.name}-${Q}`
              }));
            else {
              const Ce = R(z, I.children, P);
              V.push(U.createElement(I.name, {
                key: `${I.name}-${Q}`
              }, Ce));
            }
          else if (I.voidElement)
            V.push(`<${I.name} />`);
          else {
            const Ce = R(z, I.children, P);
            V.push(`<${I.name}>${Ce}</${I.name}>`);
          }
        else if (typeof de == "object" && !ve) {
          const Ce = I.children[0] ? Se : null;
          Ce && V.push(Ce);
        } else
          w(de, Se, V, Q, I.children.length !== 1 || !Se);
      } else if (I.type === "text") {
        const je = l.transWrapTextNodes, de = f ? l.unescape(s.services.interpolator.interpolate(I.content, b, s.language)) : s.services.interpolator.interpolate(I.content, b, s.language);
        je ? V.push(U.createElement(je, {
          key: `${I.name}-${Q}`
        }, de)) : V.push(de);
      }
      return V;
    }, []);
  }
  const M = R([{
    dummy: !0,
    children: o || []
  }], h, vs(o || []));
  return wv(M[0]);
}
function mL(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: v,
    components: p,
    ns: h,
    i18n: b,
    t: N,
    shouldUnescape: w,
    ...R
  } = o;
  const M = b || Jv();
  if (!M)
    return od("You will need to pass in an i18next instance by using i18nextReactModule"), r;
  const O = N || M.t.bind(M) || ((qe) => qe), A = {
    ...mS(),
    ...M.options && M.options.react
  };
  let P = h || O.ns || M.options && M.options.defaultNS;
  P = typeof P == "string" ? [P] : P || ["translation"];
  const z = hS(r, A), T = v || z || A.transEmptyNodeValue || d, {
    hashTransKey: V
  } = A, I = d || (V ? V(z || T) : z || T);
  M.options && M.options.interpolation && M.options.interpolation.defaultVariables && (y = y && Object.keys(y).length > 0 ? {
    ...y,
    ...M.options.interpolation.defaultVariables
  } : {
    ...M.options.interpolation.defaultVariables
  });
  const Q = y || s !== void 0 || !r ? c.interpolation : {
    interpolation: {
      ...c.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, Se = {
    ...c,
    context: f || c.context,
    count: s,
    ...y,
    ...Q,
    defaultValue: T,
    ns: P
  }, je = I ? O(I, Se) : T;
  p && Object.keys(p).forEach((qe) => {
    const me = p[qe];
    if (typeof me.type == "function" || !me.props || !me.props.children || je.indexOf(`${qe}/>`) < 0 && je.indexOf(`${qe} />`) < 0) return;
    function Ee() {
      return U.createElement(U.Fragment, null, me);
    }
    p[qe] = U.createElement(Ee);
  });
  const de = dL(p || r, je, M, A, Se, w), ve = l !== void 0 ? l : A.defaultTransParent;
  return ve ? U.createElement(ve, R, de) : de;
}
const pL = {
  type: "3rdParty",
  init(o) {
    lL(o.options.react), uL(o);
  }
}, vS = U.createContext();
class hL {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Mr(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: v,
    components: p,
    ns: h,
    i18n: b,
    t: N,
    shouldUnescape: w,
    ...R
  } = o;
  const {
    i18n: M,
    defaultNS: O
  } = U.useContext(vS) || {}, A = b || M || Jv(), P = N || A && A.t.bind(A);
  return mL({
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c,
    values: y,
    defaults: v,
    components: p,
    ns: h || P && P.ns || O || A && A.options && A.options.defaultNS,
    i18n: A,
    t: N,
    shouldUnescape: w,
    ...R
  });
}
const vL = (o, r) => {
  const s = U.useRef();
  return U.useEffect(() => {
    s.current = o;
  }, [o, r]), s.current;
};
function gS(o, r, s, l) {
  return o.getFixedT(r, s, l);
}
function gL(o, r, s, l) {
  return U.useCallback(gS(o, r, s, l), [o, r, s, l]);
}
function $r(o) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: s
  } = r, {
    i18n: l,
    defaultNS: d
  } = U.useContext(vS) || {}, f = s || l || Jv();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new hL()), !f) {
    od("You will need to pass in an i18next instance by using initReactI18next");
    const T = (I, Q) => typeof Q == "string" ? Q : Q && typeof Q == "object" && typeof Q.defaultValue == "string" ? Q.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, V = [T, {}, !1];
    return V.t = T, V.i18n = {}, V.ready = !1, V;
  }
  f.options.react && f.options.react.wait !== void 0 && od("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...mS(),
    ...f.options.react,
    ...r
  }, {
    useSuspense: y,
    keyPrefix: v
  } = c;
  let p = d || f.options && f.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(p);
  const h = (f.isInitialized || f.initializedStoreOnce) && p.every((T) => aL(T, f, c)), b = gL(f, r.lng || null, c.nsMode === "fallback" ? p : p[0], v), N = () => b, w = () => gS(f, r.lng || null, c.nsMode === "fallback" ? p : p[0], v), [R, M] = U.useState(N);
  let O = p.join();
  r.lng && (O = `${r.lng}${O}`);
  const A = vL(O), P = U.useRef(!0);
  U.useEffect(() => {
    const {
      bindI18n: T,
      bindI18nStore: V
    } = c;
    P.current = !0, !h && !y && (r.lng ? p0(f, r.lng, p, () => {
      P.current && M(w);
    }) : m0(f, p, () => {
      P.current && M(w);
    })), h && A && A !== O && P.current && M(w);
    function I() {
      P.current && M(w);
    }
    return T && f && f.on(T, I), V && f && f.store.on(V, I), () => {
      P.current = !1, T && f && T.split(" ").forEach((Q) => f.off(Q, I)), V && f && V.split(" ").forEach((Q) => f.store.off(Q, I));
    };
  }, [f, O]), U.useEffect(() => {
    P.current && h && M(N);
  }, [f, v, h]);
  const z = [R, f, h];
  if (z.t = R, z.i18n = f, z.ready = h, h || !h && !y) return z;
  throw new Promise((T) => {
    r.lng ? p0(f, r.lng, p, () => T()) : m0(f, p, () => T());
  });
}
const yL = "Management", bL = "Comment", xL = "Login", NL = "Logout", SL = "Register", EL = "Email", CL = "Password", wL = "Nickname", jL = "Personal Website", RL = "Setting", TL = "Profile", DL = "Homepage", kL = "All", OL = "Mine", LL = "Approved", _L = "Waiting", PL = "Spam", AL = "Sticky", ML = "Edit", VL = "Reply", UL = "Action", FL = "Filter", $L = "Author", zL = "Content", JL = "Username", HL = "Submit", BL = "Cancel", IL = "At", YL = "Migration", KL = "Exporting…", WL = "Under verification", GL = "Administrator", qL = "Guest", QL = "User", XL = "Role", Gf = {
  management: yL,
  comment: bL,
  login: xL,
  logout: NL,
  register: SL,
  email: EL,
  password: CL,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: wL,
  website: jL,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: RL,
  profile: TL,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: DL,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: kL,
  mine: OL,
  approved: LL,
  "approved button": "Approved",
  waiting: _L,
  spam: PL,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: AL,
  edit: ML,
  reply: VL,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: UL,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: FL,
  author: $L,
  content: zL,
  username: JL,
  submit: HL,
  cancel: BL,
  at: IL,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: YL,
  exporting: KL,
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
  verify: WL,
  administrator: GL,
  guest: qL,
  user: QL,
  "manage users": "Manage Users",
  role: XL,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, ZL = "管理", e_ = "评论", t_ = "登录", n_ = "登出", a_ = "用户注册", r_ = "邮箱", i_ = "密码", o_ = "昵称", s_ = "个人网站", l_ = "个人设置", u_ = "个人资料", c_ = "个人主页地址", f_ = "所有", d_ = "我的", m_ = "已通过", p_ = "待审核", h_ = "垃圾", v_ = "置顶评论", g_ = "编辑", y_ = "回复", b_ = "操作", x_ = "筛选", N_ = "作者", S_ = "内容", E_ = "用户名", C_ = "提交", w_ = "取消", j_ = "于", R_ = "导入导出", T_ = "导出中...", D_ = "待认证", k_ = "管理员", O_ = "普通用户", L_ = "用户", __ = "角色", h0 = {
  management: ZL,
  comment: e_,
  login: t_,
  logout: n_,
  register: a_,
  email: r_,
  password: i_,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: o_,
  website: s_,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: l_,
  profile: u_,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: c_,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: f_,
  mine: d_,
  approved: m_,
  "approved button": "通过",
  waiting: p_,
  spam: h_,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: v_,
  edit: g_,
  reply: y_,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: b_,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: x_,
  author: N_,
  content: S_,
  username: E_,
  submit: C_,
  cancel: w_,
  at: j_,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: R_,
  exporting: T_,
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
  verify: D_,
  administrator: k_,
  guest: O_,
  user: L_,
  "manage users": "管理用户",
  role: __,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, P_ = "管理", A_ = "留言", M_ = "登入", V_ = "登出", U_ = "使用者註冊", F_ = "信箱", $_ = "密碼", z_ = "暱稱", J_ = "個人網站", H_ = "個人設定", B_ = "個人資料", I_ = "個人首頁網址", Y_ = "所有", K_ = "我的", W_ = "已通過", G_ = "待審核", q_ = "垃圾", Q_ = "置頂留言", X_ = "編輯", Z_ = "回覆", eP = "動作", tP = "篩選", nP = "作者", aP = "內容", rP = "使用者名稱", iP = "送出", oP = "取消", sP = "於", lP = "匯入匯出", uP = "匯出中...", cP = "待認證", fP = "管理員", dP = "使用者", mP = "使用者", pP = "角色", hP = {
  management: P_,
  comment: A_,
  login: M_,
  logout: V_,
  register: U_,
  email: F_,
  password: $_,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: z_,
  website: J_,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: H_,
  profile: B_,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: I_,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: Y_,
  mine: K_,
  approved: W_,
  "approved button": "通過",
  waiting: G_,
  spam: q_,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: Q_,
  edit: X_,
  reply: Z_,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: eP,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: tP,
  author: nP,
  content: aP,
  username: rP,
  submit: iP,
  cancel: oP,
  at: sP,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: lP,
  exporting: uP,
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
  verify: cP,
  administrator: fP,
  guest: dP,
  user: mP,
  "manage users": "使用者管理",
  role: pP,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, v0 = [
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
], vP = {
  "zh-cn": { translations: h0 },
  "zh-CN": { translations: h0 },
  en: { translations: Gf },
  "en-US": { translations: Gf },
  "zh-TW": { translations: hP },
  jp: { translations: Gf },
  "jp-JP": { translations: Gf }
};
function fo() {
  const o = Ru(), r = Ou(), s = Ur((h) => h.user), { t: l, i18n: d } = $r(), [f, c] = U.useState(null), y = U.useMemo(() => {
    const h = v0.find(
      (b) => b.alias.includes(d.language)
    );
    return (h == null ? void 0 : h.value) ?? "";
  }, [d.language]);
  U.useEffect(() => {
    !(s != null && s.email) || !(s != null && s.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((h) => h.json()).then((h) => {
      s.__version !== h.version && c(h.version);
    });
  }, [s == null ? void 0 : s.email]);
  const v = function(h) {
    d.changeLanguage(h.target.value);
  }, p = function(h) {
    h.preventDefault(), o.user.logout(), r("/ui/login");
  };
  return [
    /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (s == null ? void 0 : s.type) === "administrator" ? /* @__PURE__ */ E.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ E.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ E.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui", children: l("management") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui", children: l("comment") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/user", children: l("user") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/migration", children: l("migration") }, void 0, !1, {
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
      /* @__PURE__ */ E.jsxDEV("div", { className: "operate", children: [
        /* @__PURE__ */ E.jsxDEV("div", { className: "language-select", children: /* @__PURE__ */ E.jsxDEV(
          "select",
          {
            defaultValue: y,
            onChange: v,
            style: { width: 120 },
            children: v0.map((h) => /* @__PURE__ */ E.jsxDEV("option", { value: h.value, children: h.label }, h.value, !1, {
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
        s != null && s.type ? /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/profile", className: "author", children: s.display_name }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this) : null,
        s != null && s.type ? /* @__PURE__ */ E.jsxDEV("a", { className: "exit", href: "#", onClick: p, children: l("logout") }, void 0, !1, {
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
    f ? /* @__PURE__ */ E.jsxDEV("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ E.jsxDEV(
      Mr,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ E.jsxDEV("a", {}, void 0, !1, {
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
function gP() {
  const { t: o } = $r(), r = Ru(), s = Ou(), l = Ur((p) => p.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1);
  U.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const v = async function(p) {
    p.preventDefault(), f(!1);
    const h = p.target.email.value;
    if (!h)
      return f(o("please input email"));
    try {
      y(!0), await r.user.forgot({
        email: h
      }), alert(o("find password success! please go to your mailbox to reset it!")), s("/ui/login");
    } catch {
      f(o("find password error! try again later"));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ E.jsxDEV("ul", { children: d ? /* @__PURE__ */ E.jsxDEV("li", { children: d }, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: v, children: [
        /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
          /* @__PURE__ */ E.jsxDEV("p", { className: "description", style: { textAlign: "left" }, children: o(
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
        /* @__PURE__ */ E.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ E.jsxDEV(
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
      /* @__PURE__ */ E.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
const yS = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), yP = (o) => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...o }, /* @__PURE__ */ U.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ U.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), bP = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), xP = (o) => /* @__PURE__ */ U.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...o }, /* @__PURE__ */ U.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ U.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), NP = (o) => /* @__PURE__ */ U.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ U.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), SP = (o) => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...o }, /* @__PURE__ */ U.createElement("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ U.createElement("path", { fill: "#34A853", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ U.createElement("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ U.createElement("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: bP,
  github: yS,
  google: SP,
  qq: NP,
  twitter: yP,
  weibo: xP
}, Symbol.toStringTag, { value: "Module" })), nd = {}, g0 = (o) => {
  const r = document.querySelector(`script[src="${o}"]`);
  if (r)
    return nd[o] = {
      loading: !1,
      error: null,
      scriptEl: r
    };
};
function xS({
  src: o,
  checkForExisting: r = !1,
  ...s
}) {
  let l = o ? nd[o] : void 0;
  !l && r && o && y0 && (l = g0(o));
  const [d, f] = U.useState(
    l ? l.loading : !!o
  ), [c, y] = U.useState(l ? l.error : null), [v, p] = U.useState(!1);
  return U.useEffect(() => {
    if (!y0 || !o || v || c) return;
    l = nd[o], !l && r && (l = g0(o));
    let h;
    l ? h = l.scriptEl : (h = document.createElement("script"), h.src = o, Object.keys(s).forEach((w) => {
      h[w] === void 0 ? h.setAttribute(w, s[w]) : h[w] = s[w];
    }), l = nd[o] = {
      loading: !0,
      error: null,
      scriptEl: h
    });
    const b = () => {
      l && (l.loading = !1), f(!1), p(!0);
    }, N = (w) => {
      l && (l.error = w), y(w);
    };
    return h.addEventListener("load", b), h.addEventListener("error", N), document.body.appendChild(h), () => {
      h.removeEventListener("load", b), h.removeEventListener("error", N);
    };
  }, [o]), [d, c];
}
const y0 = typeof window < "u" && typeof window.document < "u";
function EP({
  sitekey: o,
  hideDefaultBadge: r = !1,
  checkForExisting: s = !0
}) {
  const [l, d] = U.useState();
  return U.useEffect(() => {
    CP && r && wP(".grecaptcha-badge { visibility: hidden; }");
  }, [r]), xS({
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
const CP = typeof window < "u" && typeof window.document < "u", wP = (o) => {
  const r = document.createElement("style");
  document.head.appendChild(r);
  const s = r.sheet;
  s && s.insertRule(o, s.cssRules.length);
};
function jP({ sitekey: o, checkForExisting: r = !0 }) {
  const [s, l] = U.useState();
  return xS({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      l(window.turnstile);
    }),
    async: !1,
    checkForExisting: r
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
function NS(o) {
  const r = EP(o), s = jP(o);
  return window.turnstileKey ? s : window.recaptchaV3Key ? r : () => {
  };
}
const RP = {
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
  output(o, r) {
    console && console[o] && console[o].apply(console, r);
  }
};
class sd {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = s.prefix || "i18next:", this.logger = r || RP, this.options = s, this.debug = s.debug;
  }
  log() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "log", "", !0);
  }
  warn() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "", !0);
  }
  error() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "error", "");
  }
  deprecate() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(r, s, l, d) {
    return d && !this.debug ? null : (typeof r[0] == "string" && (r[0] = `${l}${this.prefix} ${r[0]}`), this.logger[s](r));
  }
  create(r) {
    return new sd(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new sd(this.logger, r);
  }
}
var rr = new sd();
class pd {
  constructor() {
    this.observers = {};
  }
  on(r, s) {
    return r.split(" ").forEach((l) => {
      this.observers[l] || (this.observers[l] = /* @__PURE__ */ new Map());
      const d = this.observers[l].get(s) || 0;
      this.observers[l].set(s, d + 1);
    }), this;
  }
  off(r, s) {
    if (this.observers[r]) {
      if (!s) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(s);
    }
  }
  emit(r) {
    for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
      l[d - 1] = arguments[d];
    this.observers[r] && Array.from(this.observers[r].entries()).forEach((c) => {
      let [y, v] = c;
      for (let p = 0; p < v; p++)
        y(...l);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [y, v] = c;
      for (let p = 0; p < v; p++)
        y.apply(y, [r, ...l]);
    });
  }
}
function pu() {
  let o, r;
  const s = new Promise((l, d) => {
    o = l, r = d;
  });
  return s.resolve = o, s.reject = r, s;
}
function b0(o) {
  return o == null ? "" : "" + o;
}
function TP(o, r, s) {
  o.forEach((l) => {
    r[l] && (s[l] = r[l]);
  });
}
const DP = /###/g;
function yu(o, r, s) {
  function l(y) {
    return y && y.indexOf("###") > -1 ? y.replace(DP, ".") : y;
  }
  function d() {
    return !o || typeof o == "string";
  }
  const f = typeof r != "string" ? r : r.split(".");
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
function x0(o, r, s) {
  const {
    obj: l,
    k: d
  } = yu(o, r, Object);
  if (l !== void 0 || r.length === 1) {
    l[d] = s;
    return;
  }
  let f = r[r.length - 1], c = r.slice(0, r.length - 1), y = yu(o, c, Object);
  for (; y.obj === void 0 && c.length; )
    f = `${c[c.length - 1]}.${f}`, c = c.slice(0, c.length - 1), y = yu(o, c, Object), y && y.obj && typeof y.obj[`${y.k}.${f}`] < "u" && (y.obj = void 0);
  y.obj[`${y.k}.${f}`] = s;
}
function kP(o, r, s, l) {
  const {
    obj: d,
    k: f
  } = yu(o, r, Object);
  d[f] = d[f] || [], d[f].push(s);
}
function ld(o, r) {
  const {
    obj: s,
    k: l
  } = yu(o, r);
  if (s)
    return s[l];
}
function OP(o, r, s) {
  const l = ld(o, s);
  return l !== void 0 ? l : ld(r, s);
}
function SS(o, r, s) {
  for (const l in r)
    l !== "__proto__" && l !== "constructor" && (l in o ? typeof o[l] == "string" || o[l] instanceof String || typeof r[l] == "string" || r[l] instanceof String ? s && (o[l] = r[l]) : SS(o[l], r[l], s) : o[l] = r[l]);
  return o;
}
function ps(o) {
  return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var LP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function _P(o) {
  return typeof o == "string" ? o.replace(/[&<>"'\/]/g, (r) => LP[r]) : o;
}
class PP {
  constructor(r) {
    this.capacity = r, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(r) {
    const s = this.regExpMap.get(r);
    if (s !== void 0)
      return s;
    const l = new RegExp(r);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(r, l), this.regExpQueue.push(r), l;
  }
}
const AP = [" ", ",", "?", "!", ";"], MP = new PP(20);
function VP(o, r, s) {
  r = r || "", s = s || "";
  const l = AP.filter((c) => r.indexOf(c) < 0 && s.indexOf(c) < 0);
  if (l.length === 0) return !0;
  const d = MP.getRegExp(`(${l.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let f = !d.test(o);
  if (!f) {
    const c = o.indexOf(s);
    c > 0 && !d.test(o.substring(0, c)) && (f = !0);
  }
  return f;
}
function Pv(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!o) return;
  if (o[r]) return o[r];
  const l = r.split(s);
  let d = o;
  for (let f = 0; f < l.length; ) {
    if (!d || typeof d != "object")
      return;
    let c, y = "";
    for (let v = f; v < l.length; ++v)
      if (v !== f && (y += s), y += l[v], c = d[y], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && v < l.length - 1)
          continue;
        f += v - f + 1;
        break;
      }
    d = c;
  }
  return d;
}
function ud(o) {
  return o && o.indexOf("_") > 0 ? o.replace("_", "-") : o;
}
class N0 extends pd {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = r || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const s = this.options.ns.indexOf(r);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator, c = d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let y;
    r.indexOf(".") > -1 ? y = r.split(".") : (y = [r, s], l && (Array.isArray(l) ? y.push(...l) : typeof l == "string" && f ? y.push(...l.split(f)) : y.push(l)));
    const v = ld(this.data, y);
    return !v && !s && !l && r.indexOf(".") > -1 && (r = y[0], s = y[1], l = y.slice(2).join(".")), v || !c || typeof l != "string" ? v : Pv(this.data && this.data[r] && this.data[r][s], l, f);
  }
  addResource(r, s, l, d) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let y = [r, s];
    l && (y = y.concat(c ? l.split(c) : l)), r.indexOf(".") > -1 && (y = r.split("."), d = s, s = y[1]), this.addNamespaces(s), x0(this.data, y, d), f.silent || this.emit("added", r, s, l, d);
  }
  addResources(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const f in l)
      (typeof l[f] == "string" || Array.isArray(l[f])) && this.addResource(r, s, f, l[f], {
        silent: !0
      });
    d.silent || this.emit("added", r, s, l);
  }
  addResourceBundle(r, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, y = [r, s];
    r.indexOf(".") > -1 && (y = r.split("."), d = l, l = s, s = y[1]), this.addNamespaces(s);
    let v = ld(this.data, y) || {};
    c.skipCopy || (l = JSON.parse(JSON.stringify(l))), d ? SS(v, l, f) : v = {
      ...v,
      ...l
    }, x0(this.data, y, v), c.silent || this.emit("added", r, s, l);
  }
  removeResourceBundle(r, s) {
    this.hasResourceBundle(r, s) && delete this.data[r][s], this.removeNamespaces(s), this.emit("removed", r, s);
  }
  hasResourceBundle(r, s) {
    return this.getResource(r, s) !== void 0;
  }
  getResourceBundle(r, s) {
    return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(r, s)
    } : this.getResource(r, s);
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const s = this.getDataByLanguage(r);
    return !!(s && Object.keys(s) || []).find((d) => s[d] && Object.keys(s[d]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ES = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, r, s, l, d) {
    return o.forEach((f) => {
      this.processors[f] && (r = this.processors[f].process(r, s, l, d));
    }), r;
  }
};
const S0 = {};
class cd extends pd {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), TP(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = rr.create("translator");
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (r == null)
      return !1;
    const l = this.resolve(r, s);
    return l && l.res !== void 0;
  }
  extractFromKey(r, s) {
    let l = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ":");
    const d = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let f = s.ns || this.options.defaultNS || [];
    const c = l && r.indexOf(l) > -1, y = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !VP(r, l, d);
    if (c && !y) {
      const v = r.match(this.interpolator.nestingRegexp);
      if (v && v.length > 0)
        return {
          key: r,
          namespaces: f
        };
      const p = r.split(l);
      (l !== d || l === d && this.options.ns.indexOf(p[0]) > -1) && (f = p.shift()), r = p.join(d);
    }
    return typeof f == "string" && (f = [f]), {
      key: r,
      namespaces: f
    };
  }
  translate(r, s, l) {
    if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof s == "object" && (s = {
      ...s
    }), s || (s = {}), r == null) return "";
    Array.isArray(r) || (r = [String(r)]);
    const d = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, f = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: y
    } = this.extractFromKey(r[r.length - 1], s), v = y[y.length - 1], p = s.lng || this.language, h = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (h) {
        const T = s.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${v}${T}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: v,
          usedParams: this.getUsedParamsDetails(s)
        } : `${v}${T}${c}`;
      }
      return d ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: p,
        usedNS: v,
        usedParams: this.getUsedParamsDetails(s)
      } : c;
    }
    const b = this.resolve(r, s);
    let N = b && b.res;
    const w = b && b.usedKey || c, R = b && b.exactUsedKey || c, M = Object.prototype.toString.apply(N), O = ["[object Number]", "[object Function]", "[object RegExp]"], A = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (P && N && (typeof N != "string" && typeof N != "boolean" && typeof N != "number") && O.indexOf(M) < 0 && !(typeof A == "string" && Array.isArray(N))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const T = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, N, {
          ...s,
          ns: y
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return d ? (b.res = T, b.usedParams = this.getUsedParamsDetails(s), b) : T;
      }
      if (f) {
        const T = Array.isArray(N), V = T ? [] : {}, I = T ? R : w;
        for (const Q in N)
          if (Object.prototype.hasOwnProperty.call(N, Q)) {
            const Se = `${I}${f}${Q}`;
            V[Q] = this.translate(Se, {
              ...s,
              joinArrays: !1,
              ns: y
            }), V[Q] === Se && (V[Q] = N[Q]);
          }
        N = V;
      }
    } else if (P && typeof A == "string" && Array.isArray(N))
      N = N.join(A), N && (N = this.extendTranslation(N, r, s, l));
    else {
      let T = !1, V = !1;
      const I = s.count !== void 0 && typeof s.count != "string", Q = cd.hasDefaultValue(s), Se = I ? this.pluralResolver.getSuffix(p, s.count, s) : "", je = s.ordinal && I ? this.pluralResolver.getSuffix(p, s.count, {
        ordinal: !1
      }) : "", de = I && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), ve = de && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${Se}`] || s[`defaultValue${je}`] || s.defaultValue;
      !this.isValidLookup(N) && Q && (T = !0, N = ve), this.isValidLookup(N) || (V = !0, N = c);
      const me = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && V ? void 0 : N, Ee = Q && ve !== N && this.options.updateMissing;
      if (V || T || Ee) {
        if (this.logger.log(Ee ? "updateKey" : "missingKey", p, v, c, Ee ? ve : N), f) {
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
        const Re = (Qe, Dt, Ke) => {
          const fn = Q && Ke !== N ? Ke : me;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(Qe, v, Dt, fn, Ee, s) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Qe, v, Dt, fn, Ee, s), this.emit("missingKey", Qe, v, Dt, N);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && I ? Ce.forEach((Qe) => {
          const Dt = this.pluralResolver.getSuffixes(Qe, s);
          de && s[`defaultValue${this.options.pluralSeparator}zero`] && Dt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Dt.push(`${this.options.pluralSeparator}zero`), Dt.forEach((Ke) => {
            Re([Qe], c + Ke, s[`defaultValue${Ke}`] || ve);
          });
        }) : Re(Ce, c, ve));
      }
      N = this.extendTranslation(N, r, s, b, l), V && N === c && this.options.appendNamespaceToMissingKey && (N = `${v}:${c}`), (V || T) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? N = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${v}:${c}` : c, T ? N : void 0) : N = this.options.parseMissingKeyHandler(N));
    }
    return d ? (b.res = N, b.usedParams = this.getUsedParamsDetails(s), b) : N;
  }
  extendTranslation(r, s, l, d, f) {
    var c = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      r = this.i18nFormat.parse(r, {
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
      const p = typeof r == "string" && (l && l.interpolation && l.interpolation.skipOnVariables !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (p) {
        const N = r.match(this.interpolator.nestingRegexp);
        h = N && N.length;
      }
      let b = l.replace && typeof l.replace != "string" ? l.replace : l;
      if (this.options.interpolation.defaultVariables && (b = {
        ...this.options.interpolation.defaultVariables,
        ...b
      }), r = this.interpolator.interpolate(r, b, l.lng || this.language, l), p) {
        const N = r.match(this.interpolator.nestingRegexp), w = N && N.length;
        h < w && (l.nest = !1);
      }
      !l.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (l.lng = d.usedLng), l.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var N = arguments.length, w = new Array(N), R = 0; R < N; R++)
          w[R] = arguments[R];
        return f && f[0] === w[0] && !l.context ? (c.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${s[0]}`), null) : c.translate(...w, s);
      }, l)), l.interpolation && this.interpolator.reset();
    }
    const y = l.postProcess || this.options.postProcess, v = typeof y == "string" ? [y] : y;
    return r != null && v && v.length && l.applyPostProcessor !== !1 && (r = ES.handle(v, r, s, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...d,
        usedParams: this.getUsedParamsDetails(l)
      },
      ...l
    } : l, this)), r;
  }
  resolve(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l, d, f, c, y;
    return typeof r == "string" && (r = [r]), r.forEach((v) => {
      if (this.isValidLookup(l)) return;
      const p = this.extractFromKey(v, s), h = p.key;
      d = h;
      let b = p.namespaces;
      this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
      const N = s.count !== void 0 && typeof s.count != "string", w = N && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), R = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", M = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      b.forEach((O) => {
        this.isValidLookup(l) || (y = O, !S0[`${M[0]}-${O}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(y) && (S0[`${M[0]}-${O}`] = !0, this.logger.warn(`key "${d}" for languages "${M.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), M.forEach((A) => {
          if (this.isValidLookup(l)) return;
          c = A;
          const P = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(P, h, A, O, s);
          else {
            let T;
            N && (T = this.pluralResolver.getSuffix(A, s.count, s));
            const V = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (N && (P.push(h + T), s.ordinal && T.indexOf(I) === 0 && P.push(h + T.replace(I, this.options.pluralSeparator)), w && P.push(h + V)), R) {
              const Q = `${h}${this.options.contextSeparator}${s.context}`;
              P.push(Q), N && (P.push(Q + T), s.ordinal && T.indexOf(I) === 0 && P.push(Q + T.replace(I, this.options.pluralSeparator)), w && P.push(Q + V));
            }
          }
          let z;
          for (; z = P.pop(); )
            this.isValidLookup(l) || (f = z, l = this.getResource(A, O, z, s));
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
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "");
  }
  getResource(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, s, l, d) : this.resourceStore.getResource(r, s, l, d);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], l = r.replace && typeof r.replace != "string";
    let d = l ? r.replace : r;
    if (l && typeof r.count < "u" && (d.count = r.count), this.options.interpolation.defaultVariables && (d = {
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
  static hasDefaultValue(r) {
    const s = "defaultValue";
    for (const l in r)
      if (Object.prototype.hasOwnProperty.call(r, l) && s === l.substring(0, s.length) && r[l] !== void 0)
        return !0;
    return !1;
  }
}
function jv(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
class E0 {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = rr.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = ud(r), !r || r.indexOf("-") < 0) return null;
    const s = r.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = ud(r), !r || r.indexOf("-") < 0) return r;
    const s = r.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(r) {
    if (typeof r == "string" && r.indexOf("-") > -1) {
      const s = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let l = r.split("-");
      return this.options.lowerCaseLng ? l = l.map((d) => d.toLowerCase()) : l.length === 2 ? (l[0] = l[0].toLowerCase(), l[1] = l[1].toUpperCase(), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = jv(l[1].toLowerCase()))) : l.length === 3 && (l[0] = l[0].toLowerCase(), l[1].length === 2 && (l[1] = l[1].toUpperCase()), l[0] !== "sgn" && l[2].length === 2 && (l[2] = l[2].toUpperCase()), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = jv(l[1].toLowerCase())), s.indexOf(l[2].toLowerCase()) > -1 && (l[2] = jv(l[2].toLowerCase()))), l.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
  }
  isSupportedCode(r) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
  }
  getBestMatchFromCodes(r) {
    if (!r) return null;
    let s;
    return r.forEach((l) => {
      if (s) return;
      const d = this.formatLanguageCode(l);
      (!this.options.supportedLngs || this.isSupportedCode(d)) && (s = d);
    }), !s && this.options.supportedLngs && r.forEach((l) => {
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
  getFallbackCodes(r, s) {
    if (!r) return [];
    if (typeof r == "function" && (r = r(s)), typeof r == "string" && (r = [r]), Array.isArray(r)) return r;
    if (!s) return r.default || [];
    let l = r[s];
    return l || (l = r[this.getScriptPartFromCode(s)]), l || (l = r[this.formatLanguageCode(s)]), l || (l = r[this.getLanguagePartFromCode(s)]), l || (l = r.default), l || [];
  }
  toResolveHierarchy(r, s) {
    const l = this.getFallbackCodes(s || this.options.fallbackLng || [], r), d = [], f = (c) => {
      c && (this.isSupportedCode(c) ? d.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return typeof r == "string" && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(r))) : typeof r == "string" && f(this.formatLanguageCode(r)), l.forEach((c) => {
      d.indexOf(c) < 0 && f(this.formatLanguageCode(c));
    }), d;
  }
}
let UP = [{
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
}], FP = {
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
const $P = ["v1", "v2", "v3"], zP = ["v4"], C0 = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function JP() {
  const o = {};
  return UP.forEach((r) => {
    r.lngs.forEach((s) => {
      o[s] = {
        numbers: r.nr,
        plurals: FP[r.fc]
      };
    });
  }), o;
}
class HP {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = r, this.options = s, this.logger = rr.create("pluralResolver"), (!this.options.compatibilityJSON || zP.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = JP();
  }
  addRule(r, s) {
    this.rules[r] = s;
  }
  getRule(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ud(r === "dev" ? "en" : r), {
          type: s.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
  }
  needsPlural(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(r, s);
    return this.shouldUseIntlApi() ? l && l.resolvedOptions().pluralCategories.length > 1 : l && l.numbers.length > 1;
  }
  getPluralFormsOfKey(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, l).map((d) => `${s}${d}`);
  }
  getSuffixes(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(r, s);
    return l ? this.shouldUseIntlApi() ? l.resolvedOptions().pluralCategories.sort((d, f) => C0[d] - C0[f]).map((d) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : l.numbers.map((d) => this.getSuffix(r, d, s)) : [];
  }
  getSuffix(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const d = this.getRule(r, l);
    return d ? this.shouldUseIntlApi() ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${d.select(s)}` : this.getSuffixRetroCompatible(d, s) : (this.logger.warn(`no plural rule found for: ${r}`), "");
  }
  getSuffixRetroCompatible(r, s) {
    const l = r.noAbs ? r.plurals(s) : r.plurals(Math.abs(s));
    let d = r.numbers[l];
    this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
    const f = () => this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
    return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? `_plural_${d.toString()}` : f() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? f() : this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString();
  }
  shouldUseIntlApi() {
    return !$P.includes(this.options.compatibilityJSON);
  }
}
function w0(o, r, s) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = OP(o, r, s);
  return !f && d && typeof s == "string" && (f = Pv(o, s, l), f === void 0 && (f = Pv(r, s, l))), f;
}
class BP {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = rr.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || ((s) => s), this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = {
      escapeValue: !0
    });
    const {
      escape: s,
      escapeValue: l,
      useRawValueToEscape: d,
      prefix: f,
      prefixEscaped: c,
      suffix: y,
      suffixEscaped: v,
      formatSeparator: p,
      unescapeSuffix: h,
      unescapePrefix: b,
      nestingPrefix: N,
      nestingPrefixEscaped: w,
      nestingSuffix: R,
      nestingSuffixEscaped: M,
      nestingOptionsSeparator: O,
      maxReplaces: A,
      alwaysFormat: P
    } = r.interpolation;
    this.escape = s !== void 0 ? s : _P, this.escapeValue = l !== void 0 ? l : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = f ? ps(f) : c || "{{", this.suffix = y ? ps(y) : v || "}}", this.formatSeparator = p || ",", this.unescapePrefix = h ? "" : b || "-", this.unescapeSuffix = this.unescapePrefix ? "" : h || "", this.nestingPrefix = N ? ps(N) : w || ps("$t("), this.nestingSuffix = R ? ps(R) : M || ps(")"), this.nestingOptionsSeparator = O || ",", this.maxReplaces = A || 1e3, this.alwaysFormat = P !== void 0 ? P : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (s, l) => s && s.source === l ? (s.lastIndex = 0, s) : new RegExp(l, "g");
    this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(r, s, l, d) {
    let f, c, y;
    const v = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function p(R) {
      return R.replace(/\$/g, "$$$$");
    }
    const h = (R) => {
      if (R.indexOf(this.formatSeparator) < 0) {
        const P = w0(s, v, R, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(P, void 0, l, {
          ...d,
          ...s,
          interpolationkey: R
        }) : P;
      }
      const M = R.split(this.formatSeparator), O = M.shift().trim(), A = M.join(this.formatSeparator).trim();
      return this.format(w0(s, v, O, this.options.keySeparator, this.options.ignoreJSONStructure), A, l, {
        ...d,
        ...s,
        interpolationkey: O
      });
    };
    this.resetRegExp();
    const b = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, N = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (R) => p(R)
    }, {
      regex: this.regexp,
      safeValue: (R) => this.escapeValue ? p(this.escape(R)) : p(R)
    }].forEach((R) => {
      for (y = 0; f = R.regex.exec(r); ) {
        const M = f[1].trim();
        if (c = h(M), c === void 0)
          if (typeof b == "function") {
            const A = b(r, f, d);
            c = typeof A == "string" ? A : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, M))
            c = "";
          else if (N) {
            c = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${M} for interpolating ${r}`), c = "";
        else typeof c != "string" && !this.useRawValueToEscape && (c = b0(c));
        const O = R.safeValue(c);
        if (r = r.replace(f[0], O), N ? (R.regex.lastIndex += c.length, R.regex.lastIndex -= f[0].length) : R.regex.lastIndex = 0, y++, y >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, f, c;
    function y(v, p) {
      const h = this.nestingOptionsSeparator;
      if (v.indexOf(h) < 0) return v;
      const b = v.split(new RegExp(`${h}[ ]*{`));
      let N = `{${b[1]}`;
      v = b[0], N = this.interpolate(N, c);
      const w = N.match(/'/g), R = N.match(/"/g);
      (w && w.length % 2 === 0 && !R || R.length % 2 !== 0) && (N = N.replace(/'/g, '"'));
      try {
        c = JSON.parse(N), p && (c = {
          ...p,
          ...c
        });
      } catch (M) {
        return this.logger.warn(`failed parsing options string in nesting for key ${v}`, M), `${v}${h}${N}`;
      }
      return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, v;
    }
    for (; d = this.nestingRegexp.exec(r); ) {
      let v = [];
      c = {
        ...l
      }, c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let p = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const h = d[1].split(this.formatSeparator).map((b) => b.trim());
        d[1] = h.shift(), v = h, p = !0;
      }
      if (f = s(y.call(this, d[1].trim(), c), c), f && d[0] === r && typeof f != "string") return f;
      typeof f != "string" && (f = b0(f)), f || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${r}`), f = ""), p && (f = v.reduce((h, b) => this.format(h, b, l.lng, {
        ...l,
        interpolationkey: d[1].trim()
      }), f.trim())), r = r.replace(d[0], f), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
function IP(o) {
  let r = o.toLowerCase().trim();
  const s = {};
  if (o.indexOf("(") > -1) {
    const l = o.split("(");
    r = l[0].toLowerCase().trim();
    const d = l[1].substring(0, l[1].length - 1);
    r === "currency" && d.indexOf(":") < 0 ? s.currency || (s.currency = d.trim()) : r === "relativetime" && d.indexOf(":") < 0 ? s.range || (s.range = d.trim()) : d.split(";").forEach((c) => {
      if (c) {
        const [y, ...v] = c.split(":"), p = v.join(":").trim().replace(/^'+|'+$/g, ""), h = y.trim();
        s[h] || (s[h] = p), p === "false" && (s[h] = !1), p === "true" && (s[h] = !0), isNaN(p) || (s[h] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: r,
    formatOptions: s
  };
}
function hs(o) {
  const r = {};
  return function(l, d, f) {
    const c = d + JSON.stringify(f);
    let y = r[c];
    return y || (y = o(ud(d), f), r[c] = y), y(l);
  };
}
class YP {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = rr.create("formatter"), this.options = r, this.formats = {
      number: hs((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      currency: hs((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l,
          style: "currency"
        });
        return (f) => d.format(f);
      }),
      datetime: hs((s, l) => {
        const d = new Intl.DateTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      relativetime: hs((s, l) => {
        const d = new Intl.RelativeTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f, l.range || "day");
      }),
      list: hs((s, l) => {
        const d = new Intl.ListFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      })
    }, this.init(r);
  }
  init(r) {
    const l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",";
  }
  add(r, s) {
    this.formats[r.toLowerCase().trim()] = s;
  }
  addCached(r, s) {
    this.formats[r.toLowerCase().trim()] = hs(s);
  }
  format(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return s.split(this.formatSeparator).reduce((y, v) => {
      const {
        formatName: p,
        formatOptions: h
      } = IP(v);
      if (this.formats[p]) {
        let b = y;
        try {
          const N = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, w = N.locale || N.lng || d.locale || d.lng || l;
          b = this.formats[p](y, w, {
            ...h,
            ...d,
            ...N
          });
        } catch (N) {
          this.logger.warn(N);
        }
        return b;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return y;
    }, r);
  }
}
function KP(o, r) {
  o.pending[r] !== void 0 && (delete o.pending[r], o.pendingCount--);
}
class WP extends pd {
  constructor(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = s, this.services = l, this.languageUtils = l.languageUtils, this.options = d, this.logger = rr.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(l, d.backend, d);
  }
  queueLoad(r, s, l, d) {
    const f = {}, c = {}, y = {}, v = {};
    return r.forEach((p) => {
      let h = !0;
      s.forEach((b) => {
        const N = `${p}|${b}`;
        !l.reload && this.store.hasResourceBundle(p, b) ? this.state[N] = 2 : this.state[N] < 0 || (this.state[N] === 1 ? c[N] === void 0 && (c[N] = !0) : (this.state[N] = 1, h = !1, c[N] === void 0 && (c[N] = !0), f[N] === void 0 && (f[N] = !0), v[b] === void 0 && (v[b] = !0)));
      }), h || (y[p] = !0);
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
      toLoadNamespaces: Object.keys(v)
    };
  }
  loaded(r, s, l) {
    const d = r.split("|"), f = d[0], c = d[1];
    s && this.emit("failedLoading", f, c, s), l && this.store.addResourceBundle(f, c, l, void 0, void 0, {
      skipCopy: !0
    }), this.state[r] = s ? -1 : 2;
    const y = {};
    this.queue.forEach((v) => {
      kP(v.loaded, [f], c), KP(v, r), s && v.errors.push(s), v.pendingCount === 0 && !v.done && (Object.keys(v.loaded).forEach((p) => {
        y[p] || (y[p] = {});
        const h = v.loaded[p];
        h.length && h.forEach((b) => {
          y[p][b] === void 0 && (y[p][b] = !0);
        });
      }), v.done = !0, v.errors.length ? v.callback(v.errors) : v.callback());
    }), this.emit("loaded", y), this.queue = this.queue.filter((v) => !v.done);
  }
  read(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: s,
        fcName: l,
        tried: d,
        wait: f,
        callback: c
      });
      return;
    }
    this.readingCalls++;
    const y = (p, h) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const b = this.waitingReads.shift();
        this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
      }
      if (p && h && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, s, l, d + 1, f * 2, c);
        }, f);
        return;
      }
      c(p, h);
    }, v = this.backend[l].bind(this.backend);
    if (v.length === 2) {
      try {
        const p = v(r, s);
        p && typeof p.then == "function" ? p.then((h) => y(null, h)).catch(y) : y(null, p);
      } catch (p) {
        y(p);
      }
      return;
    }
    return v(r, s, y);
  }
  prepareLoading(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
    typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)), typeof s == "string" && (s = [s]);
    const f = this.queueLoad(r, s, l, d);
    if (!f.toLoad.length)
      return f.pending.length || d(), null;
    f.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(r, s, l) {
    this.prepareLoading(r, s, {}, l);
  }
  reload(r, s, l) {
    this.prepareLoading(r, s, {
      reload: !0
    }, l);
  }
  loadOne(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const l = r.split("|"), d = l[0], f = l[1];
    this.read(d, f, "read", void 0, void 0, (c, y) => {
      c && this.logger.warn(`${s}loading namespace ${f} for language ${d} failed`, c), !c && y && this.logger.log(`${s}loaded namespace ${f} for language ${d}`, y), this.loaded(r, c, y);
    });
  }
  saveMissing(r, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, y = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s)) {
      this.logger.warn(`did not save key "${l}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(l == null || l === "")) {
      if (this.backend && this.backend.create) {
        const v = {
          ...c,
          isUpdate: f
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let h;
            p.length === 5 ? h = p(r, s, l, d, v) : h = p(r, s, l, d), h && typeof h.then == "function" ? h.then((b) => y(null, b)).catch(y) : y(null, h);
          } catch (h) {
            y(h);
          }
        else
          p(r, s, l, d, y, v);
      }
      !r || !r[0] || this.store.addResource(r[0], s, l, d);
    }
  }
}
function j0() {
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
    overloadTranslationOptionHandler: function(r) {
      let s = {};
      if (typeof r[1] == "object" && (s = r[1]), typeof r[1] == "string" && (s.defaultValue = r[1]), typeof r[2] == "string" && (s.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
        const l = r[3] || r[2];
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
function R0(o) {
  return typeof o.ns == "string" && (o.ns = [o.ns]), typeof o.fallbackLng == "string" && (o.fallbackLng = [o.fallbackLng]), typeof o.fallbackNS == "string" && (o.fallbackNS = [o.fallbackNS]), o.supportedLngs && o.supportedLngs.indexOf("cimode") < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), o;
}
function qf() {
}
function GP(o) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((s) => {
    typeof o[s] == "function" && (o[s] = o[s].bind(o));
  });
}
class Cu extends pd {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = R0(r), this.services = {}, this.logger = rr, this.modules = {
      external: []
    }, GP(this), s && !this.isInitialized && !r.isClone) {
      if (!this.options.initImmediate)
        return this.init(r, s), this;
      setTimeout(() => {
        this.init(r, s);
      }, 0);
    }
  }
  init() {
    var r = this;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof s == "function" && (l = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
    const d = j0();
    this.options = {
      ...d,
      ...this.options,
      ...R0(s)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
    function f(h) {
      return h ? typeof h == "function" ? new h() : h : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? rr.init(f(this.modules.logger), this.options) : rr.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = YP);
      const b = new E0(this.options);
      this.store = new N0(this.options.resources, this.options);
      const N = this.services;
      N.logger = rr, N.resourceStore = this.store, N.languageUtils = b, N.pluralResolver = new HP(b, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (N.formatter = f(h), N.formatter.init(N, this.options), this.options.interpolation.format = N.formatter.format.bind(N.formatter)), N.interpolator = new BP(this.options), N.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, N.backendConnector = new WP(f(this.modules.backend), N.resourceStore, N, this.options), N.backendConnector.on("*", function(w) {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), O = 1; O < R; O++)
          M[O - 1] = arguments[O];
        r.emit(w, ...M);
      }), this.modules.languageDetector && (N.languageDetector = f(this.modules.languageDetector), N.languageDetector.init && N.languageDetector.init(N, this.options.detection, this.options)), this.modules.i18nFormat && (N.i18nFormat = f(this.modules.i18nFormat), N.i18nFormat.init && N.i18nFormat.init(this)), this.translator = new cd(this.services, this.options), this.translator.on("*", function(w) {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), O = 1; O < R; O++)
          M[O - 1] = arguments[O];
        r.emit(w, ...M);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, l || (l = qf), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((h) => {
      this[h] = function() {
        return r.store[h](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((h) => {
      this[h] = function() {
        return r.store[h](...arguments), r;
      };
    });
    const v = pu(), p = () => {
      const h = (b, N) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), v.resolve(N), l(b, N);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return h(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, h);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), v;
  }
  loadResources(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qf;
    const d = typeof r == "string" ? r : this.language;
    if (typeof r == "function" && (l = r), !this.options.resources || this.options.partialBundledLanguages) {
      if (d && d.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return l();
      const f = [], c = (y) => {
        if (!y || y === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(y).forEach((p) => {
          p !== "cimode" && f.indexOf(p) < 0 && f.push(p);
        });
      };
      d ? c(d) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((v) => c(v)), this.options.preload && this.options.preload.forEach((y) => c(y)), this.services.backendConnector.load(f, this.options.ns, (y) => {
        !y && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(y);
      });
    } else
      l(null);
  }
  reloadResources(r, s, l) {
    const d = pu();
    return r || (r = this.languages), s || (s = this.options.ns), l || (l = qf), this.services.backendConnector.reload(r, s, (f) => {
      d.resolve(), l(f);
    }), d;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && ES.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(["cimode", "dev"].indexOf(r) > -1))
      for (let s = 0; s < this.languages.length; s++) {
        const l = this.languages[s];
        if (!(["cimode", "dev"].indexOf(l) > -1) && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          break;
        }
      }
  }
  changeLanguage(r, s) {
    var l = this;
    this.isLanguageChangingTo = r;
    const d = pu();
    this.emit("languageChanging", r);
    const f = (v) => {
      this.language = v, this.languages = this.services.languageUtils.toResolveHierarchy(v), this.resolvedLanguage = void 0, this.setResolvedLanguage(v);
    }, c = (v, p) => {
      p ? (f(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return l.t(...arguments);
      }), s && s(v, function() {
        return l.t(...arguments);
      });
    }, y = (v) => {
      !r && !v && this.services.languageDetector && (v = []);
      const p = typeof v == "string" ? v : this.services.languageUtils.getBestMatchFromCodes(v);
      p && (this.language || f(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(p)), this.loadResources(p, (h) => {
        c(h, p);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? y(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(y) : this.services.languageDetector.detect(y) : y(r), d;
  }
  getFixedT(r, s, l) {
    var d = this;
    const f = function(c, y) {
      let v;
      if (typeof y != "object") {
        for (var p = arguments.length, h = new Array(p > 2 ? p - 2 : 0), b = 2; b < p; b++)
          h[b - 2] = arguments[b];
        v = d.options.overloadTranslationOptionHandler([c, y].concat(h));
      } else
        v = {
          ...y
        };
      v.lng = v.lng || f.lng, v.lngs = v.lngs || f.lngs, v.ns = v.ns || f.ns, v.keyPrefix !== "" && (v.keyPrefix = v.keyPrefix || l || f.keyPrefix);
      const N = d.options.keySeparator || ".";
      let w;
      return v.keyPrefix && Array.isArray(c) ? w = c.map((R) => `${v.keyPrefix}${N}${R}`) : w = v.keyPrefix ? `${v.keyPrefix}${N}${c}` : c, d.t(w, v);
    };
    return typeof r == "string" ? f.lng = r : f.lngs = r, f.ns = s, f.keyPrefix = l, f;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r;
  }
  hasLoadedNamespace(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const l = s.lng || this.resolvedLanguage || this.languages[0], d = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
    if (l.toLowerCase() === "cimode") return !0;
    const c = (y, v) => {
      const p = this.services.backendConnector.state[`${y}|${v}`];
      return p === -1 || p === 2;
    };
    if (s.precheck) {
      const y = s.precheck(this, c);
      if (y !== void 0) return y;
    }
    return !!(this.hasResourceBundle(l, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(l, r) && (!d || c(f, r)));
  }
  loadNamespaces(r, s) {
    const l = pu();
    return this.options.ns ? (typeof r == "string" && (r = [r]), r.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      l.resolve(), s && s(d);
    }), l) : (s && s(), Promise.resolve());
  }
  loadLanguages(r, s) {
    const l = pu();
    typeof r == "string" && (r = [r]);
    const d = this.options.preload || [], f = r.filter((c) => d.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return f.length ? (this.options.preload = d.concat(f), this.loadResources((c) => {
      l.resolve(), s && s(c);
    }), l) : (s && s(), Promise.resolve());
  }
  dir(r) {
    if (r || (r = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], l = this.services && this.services.languageUtils || new E0(j0());
    return s.indexOf(l.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    return new Cu(r, s);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qf;
    const l = r.forkResourceStore;
    l && delete r.forkResourceStore;
    const d = {
      ...this.options,
      ...r,
      isClone: !0
    }, f = new Cu(d);
    return (r.debug !== void 0 || r.prefix !== void 0) && (f.logger = f.logger.clone(r)), ["store", "services", "language"].forEach((y) => {
      f[y] = this[y];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, l && (f.store = new N0(this.store.data, d), f.services.resourceStore = f.store), f.translator = new cd(f.services, d), f.translator.on("*", function(y) {
      for (var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), h = 1; h < v; h++)
        p[h - 1] = arguments[h];
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
const cn = Cu.createInstance();
cn.createInstance = Cu.createInstance;
cn.createInstance;
cn.dir;
cn.init;
cn.loadResources;
cn.reloadResources;
cn.use;
cn.changeLanguage;
cn.getFixedT;
cn.t;
cn.exists;
cn.setDefaultNamespace;
cn.hasLoadedNamespace;
cn.loadNamespaces;
cn.loadLanguages;
async function Xt(o, r = {}) {
  typeof o == "object" ? r = o : typeof o == "string" && (r.url = o), r.headers || (r.headers = {}), r.body && !(r.body instanceof FormData) && (r.headers["Content-Type"] = "application/json", r.body = JSON.stringify(r.body));
  let s = window.TOKEN || sessionStorage.getItem("TOKEN");
  s || (s = localStorage.getItem("TOKEN")), s && (r.headers.Authorization = `Bearer ${s}`);
  let l = window.serverURL;
  if (!l) {
    const v = location.pathname.match(/(.*?\/)ui/);
    l = v ? v[1] : "/";
  }
  const d = r.url.includes("?") ? "&" : "?", f = await fetch(
    `${l}${r.url}${d}lang=${cn.language}`,
    r
  );
  if (!f.ok) {
    if (f.status === 401)
      throw new Error(401);
    let v;
    try {
      v = await f.json();
    } catch {
    }
    throw new Error(`${f.status}: ${(v == null ? void 0 : v.errmsg) || f.statusText}`);
  }
  const c = await f.json();
  if (c.errno !== 0)
    throw new Error(c.errmsg);
  return { __version: f.headers.get("x-waline-version"), ...c.data };
}
function CS(o) {
  const r = o ? `?email=${encodeURIComponent(o)}` : "";
  return Xt({ url: "token/2fa" + r, method: "GET" });
}
function qP(o) {
  return Xt({ url: "token/2fa", method: "POST", body: o });
}
function bu(o) {
  return Xt({ url: "user", method: "PUT", body: o });
}
function QP({ page: o }) {
  return Xt({
    url: `user?page=${o}`,
    method: "GET"
  });
}
function Rv({ id: o, ...r }) {
  return Xt({ url: `user/${o}`, method: "PUT", body: r });
}
function XP() {
  const { t: o } = $r(), r = Ru(), s = Ou(), l = Ur((A) => A.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1), [v, p] = U.useState(!1), h = NS({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), b = location.pathname.match(/(.*?\/)ui/), N = b && b[1] ? b[1] : "/";
  U.useEffect(() => {
    if (!l || !l.email)
      return;
    const A = new URLSearchParams(location.search), P = l.type === "administrator", z = P ? "/ui/profile" : "/ui", T = P && A.get("redirect") ? A.get("redirect") : z;
    console.log(T), s(T.replace(/\/+/g, "/"));
  }, [l]);
  const w = async function(A) {
    A.preventDefault(), y(!1), f(!0);
    const P = A.target.email.value, z = A.target.password.value, T = A.target.code ? A.target.code.value : "", V = A.target.remember.checked;
    if (!P)
      return y(o("please input email"));
    if (!z)
      return y(o("please input password"));
    if (A.target.code && !T)
      return y(o("please input 2fa code"));
    const I = await h("login");
    try {
      await r.user.login({
        email: P,
        password: z,
        code: T,
        remember: V,
        recaptchaV3: window.recaptchaV3Key ? I : void 0,
        turnstile: window.turnstileKey ? I : void 0
      });
    } catch {
      y(o("email or password error"));
    } finally {
      f(!1);
    }
  }, R = async (A) => {
    const P = A.target.value;
    if (!P)
      return;
    const z = await CS(P);
    p(z.enable);
  };
  let M = window.serverURL;
  if (!M) {
    const A = location.pathname.match(/(.*?\/)ui/);
    M = A ? A[1] : "/";
  }
  const O = ["qq", "weibo", "github", "twitter", "facebook"];
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ E.jsxDEV("ul", { children: c ? /* @__PURE__ */ E.jsxDEV("li", { children: c }, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: w, children: [
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100",
              onBlur: R
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
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        v && /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "code", className: "sr-only", children: o("2fa code") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ E.jsxDEV(
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
          /* @__PURE__ */ E.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/forgot", children: o("forgot password") }, void 0, !1, {
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
      /* @__PURE__ */ E.jsxDEV("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || O).map((A) => /* @__PURE__ */ E.jsxDEV(
        "a",
        {
          href: `${M}oauth${window.ALLOW_SOCIALS ? "/" + A + "?" : `?type=${A}`}&redirect=${N}ui/profile`,
          children: En.createElement(bS[A])
        },
        A,
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
      /* @__PURE__ */ E.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/register", children: o("register") }, void 0, !1, {
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
var wS = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var r = {}.hasOwnProperty;
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
        r.call(f, y) && f[y] && (c = d(c, y));
      return c;
    }
    function d(f, c) {
      return c ? f ? f + " " + c : f + c : f;
    }
    o.exports ? (s.default = s, o.exports = s) : window.classNames = s;
  })();
})(wS);
var ZP = wS.exports;
const wu = /* @__PURE__ */ dd(ZP);
var jS = { exports: {} }, RS = { exports: {} };
(function() {
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
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
        return r.rotl(s, 8) & 16711935 | r.rotl(s, 24) & 4278255360;
      for (var l = 0; l < s.length; l++)
        s[l] = r.endian(s[l]);
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
  RS.exports = r;
})();
var e5 = RS.exports, Av = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      return Av.bin.stringToBytes(unescape(encodeURIComponent(o)));
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      return decodeURIComponent(escape(Av.bin.bytesToString(o)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      for (var r = [], s = 0; s < o.length; s++)
        r.push(o.charCodeAt(s) & 255);
      return r;
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      for (var r = [], s = 0; s < o.length; s++)
        r.push(String.fromCharCode(o[s]));
      return r.join("");
    }
  }
}, T0 = Av;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var t5 = function(o) {
  return o != null && (TS(o) || n5(o) || !!o._isBuffer);
};
function TS(o) {
  return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o);
}
function n5(o) {
  return typeof o.readFloatLE == "function" && typeof o.slice == "function" && TS(o.slice(0, 0));
}
(function() {
  var o = e5, r = T0.utf8, s = t5, l = T0.bin, d = function(f, c) {
    f.constructor == String ? c && c.encoding === "binary" ? f = l.stringToBytes(f) : f = r.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
    for (var y = o.bytesToWords(f), v = f.length * 8, p = 1732584193, h = -271733879, b = -1732584194, N = 271733878, w = 0; w < y.length; w++)
      y[w] = (y[w] << 8 | y[w] >>> 24) & 16711935 | (y[w] << 24 | y[w] >>> 8) & 4278255360;
    y[v >>> 5] |= 128 << v % 32, y[(v + 64 >>> 9 << 4) + 14] = v;
    for (var R = d._ff, M = d._gg, O = d._hh, A = d._ii, w = 0; w < y.length; w += 16) {
      var P = p, z = h, T = b, V = N;
      p = R(p, h, b, N, y[w + 0], 7, -680876936), N = R(N, p, h, b, y[w + 1], 12, -389564586), b = R(b, N, p, h, y[w + 2], 17, 606105819), h = R(h, b, N, p, y[w + 3], 22, -1044525330), p = R(p, h, b, N, y[w + 4], 7, -176418897), N = R(N, p, h, b, y[w + 5], 12, 1200080426), b = R(b, N, p, h, y[w + 6], 17, -1473231341), h = R(h, b, N, p, y[w + 7], 22, -45705983), p = R(p, h, b, N, y[w + 8], 7, 1770035416), N = R(N, p, h, b, y[w + 9], 12, -1958414417), b = R(b, N, p, h, y[w + 10], 17, -42063), h = R(h, b, N, p, y[w + 11], 22, -1990404162), p = R(p, h, b, N, y[w + 12], 7, 1804603682), N = R(N, p, h, b, y[w + 13], 12, -40341101), b = R(b, N, p, h, y[w + 14], 17, -1502002290), h = R(h, b, N, p, y[w + 15], 22, 1236535329), p = M(p, h, b, N, y[w + 1], 5, -165796510), N = M(N, p, h, b, y[w + 6], 9, -1069501632), b = M(b, N, p, h, y[w + 11], 14, 643717713), h = M(h, b, N, p, y[w + 0], 20, -373897302), p = M(p, h, b, N, y[w + 5], 5, -701558691), N = M(N, p, h, b, y[w + 10], 9, 38016083), b = M(b, N, p, h, y[w + 15], 14, -660478335), h = M(h, b, N, p, y[w + 4], 20, -405537848), p = M(p, h, b, N, y[w + 9], 5, 568446438), N = M(N, p, h, b, y[w + 14], 9, -1019803690), b = M(b, N, p, h, y[w + 3], 14, -187363961), h = M(h, b, N, p, y[w + 8], 20, 1163531501), p = M(p, h, b, N, y[w + 13], 5, -1444681467), N = M(N, p, h, b, y[w + 2], 9, -51403784), b = M(b, N, p, h, y[w + 7], 14, 1735328473), h = M(h, b, N, p, y[w + 12], 20, -1926607734), p = O(p, h, b, N, y[w + 5], 4, -378558), N = O(N, p, h, b, y[w + 8], 11, -2022574463), b = O(b, N, p, h, y[w + 11], 16, 1839030562), h = O(h, b, N, p, y[w + 14], 23, -35309556), p = O(p, h, b, N, y[w + 1], 4, -1530992060), N = O(N, p, h, b, y[w + 4], 11, 1272893353), b = O(b, N, p, h, y[w + 7], 16, -155497632), h = O(h, b, N, p, y[w + 10], 23, -1094730640), p = O(p, h, b, N, y[w + 13], 4, 681279174), N = O(N, p, h, b, y[w + 0], 11, -358537222), b = O(b, N, p, h, y[w + 3], 16, -722521979), h = O(h, b, N, p, y[w + 6], 23, 76029189), p = O(p, h, b, N, y[w + 9], 4, -640364487), N = O(N, p, h, b, y[w + 12], 11, -421815835), b = O(b, N, p, h, y[w + 15], 16, 530742520), h = O(h, b, N, p, y[w + 2], 23, -995338651), p = A(p, h, b, N, y[w + 0], 6, -198630844), N = A(N, p, h, b, y[w + 7], 10, 1126891415), b = A(b, N, p, h, y[w + 14], 15, -1416354905), h = A(h, b, N, p, y[w + 5], 21, -57434055), p = A(p, h, b, N, y[w + 12], 6, 1700485571), N = A(N, p, h, b, y[w + 3], 10, -1894986606), b = A(b, N, p, h, y[w + 10], 15, -1051523), h = A(h, b, N, p, y[w + 1], 21, -2054922799), p = A(p, h, b, N, y[w + 8], 6, 1873313359), N = A(N, p, h, b, y[w + 15], 10, -30611744), b = A(b, N, p, h, y[w + 6], 15, -1560198380), h = A(h, b, N, p, y[w + 13], 21, 1309151649), p = A(p, h, b, N, y[w + 4], 6, -145523070), N = A(N, p, h, b, y[w + 11], 10, -1120210379), b = A(b, N, p, h, y[w + 2], 15, 718787259), h = A(h, b, N, p, y[w + 9], 21, -343485551), p = p + P >>> 0, h = h + z >>> 0, b = b + T >>> 0, N = N + V >>> 0;
    }
    return o.endian([p, h, b, N]);
  };
  d._ff = function(f, c, y, v, p, h, b) {
    var N = f + (c & y | ~c & v) + (p >>> 0) + b;
    return (N << h | N >>> 32 - h) + c;
  }, d._gg = function(f, c, y, v, p, h, b) {
    var N = f + (c & v | y & ~v) + (p >>> 0) + b;
    return (N << h | N >>> 32 - h) + c;
  }, d._hh = function(f, c, y, v, p, h, b) {
    var N = f + (c ^ y ^ v) + (p >>> 0) + b;
    return (N << h | N >>> 32 - h) + c;
  }, d._ii = function(f, c, y, v, p, h, b) {
    var N = f + (y ^ (c | ~v)) + (p >>> 0) + b;
    return (N << h | N >>> 32 - h) + c;
  }, d._blocksize = 16, d._digestsize = 16, jS.exports = function(f, c) {
    if (f == null)
      throw new Error("Illegal argument " + f);
    var y = o.wordsToBytes(d(f, c));
    return c && c.asBytes ? y : c && c.asString ? l.bytesToString(y) : o.bytesToHex(y);
  };
})();
var a5 = jS.exports;
const r5 = /* @__PURE__ */ dd(a5);
function DS(o = "", r = "") {
  return r || (typeof o != "string" && (o = ""), `https://sdn.geekzu.org/avatar/${r5(o)}?s=40&r=G&d=`);
}
function i5(o) {
  return window.SITE_URL ? window.SITE_URL + o : o;
}
function o5(o) {
  let r;
  typeof o == "number" ? r = new Date(o) : r = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(o) ? o.replace(/-/g, "/") : o
  );
  const s = (f) => f < 10 ? "0" + f : f, l = [r.getFullYear(), r.getMonth() + 1, r.getDate()].map(s).join("-"), d = [r.getHours(), r.getMinutes(), r.getSeconds()].map(s).join(":");
  return l + " " + d;
}
function kS({ current: o, total: r, onChange: s }) {
  return r < 1 ? null : /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-pager", children: [
    o > 1 ? /* @__PURE__ */ E.jsxDEV("li", { className: "prev", children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(o - 1), children: "«" }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    o > 4 ? /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
      /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(1), children: "1" }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("span", { children: "..." }, void 0, !1, {
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
    ].filter((l) => l > 0 && l <= r).map((l) => /* @__PURE__ */ E.jsxDEV("li", { className: wu({ current: l === o }), children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(l), children: l }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, l, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)),
    o < r - 3 ? /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
      /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(r), children: r }, void 0, !1, {
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
    o < r ? /* @__PURE__ */ E.jsxDEV("li", { className: "next", children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(o + 1), children: "»" }, void 0, !1, {
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
async function hu({ page: o = 1, filter: r }) {
  return Xt({
    url: `comment?type=list&owner=${r.owner}&status=${r.status}&keyword=${r.keyword}&page=${o}`,
    method: "GET"
  });
}
async function bi(o, r) {
  return Xt({
    url: `comment/${o}`,
    method: "PUT",
    body: r
  });
}
async function s5(o) {
  return Xt({
    url: "comment",
    method: "POST",
    body: o
  });
}
async function D0(o) {
  return Xt({
    url: `comment/${o}`,
    method: "DELETE"
  });
}
function l5() {
  const { t: o } = $r(), r = U.useRef(null), s = U.useRef(null), l = U.useRef({}), d = Ur((T) => T.user), [f, c] = U.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [y, v] = U.useReducer(
    function(T, V) {
      return { ...T, ...V };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [p, h] = U.useState({}), [b, N] = U.useState(!1), [w, R] = U.useState([]), M = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  U.useEffect(() => {
    hu({ page: f.page, filter: y }).then((T) => {
      c({ ...f, ...T }), R([]);
    });
  }, [y, f.page]);
  const O = (T) => [
    {
      key: "approved",
      name: o("approved button"),
      show: !0,
      disable: T && T.status === "approved",
      async action() {
        if (T) {
          switch (await bi(T.objectId, { status: "approved" }), f.data = f.data.filter(
            ({ objectId: V }) => V !== T.objectId
          ), T.status) {
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
            w.map(
              (V) => bi(V, { status: "approved" })
            )
          ), hu({ page: f.page, filter: y }).then((V) => {
            c({ ...f, ...V }), R([]);
          });
      }
    },
    {
      key: "waiting",
      name: o("waiting"),
      show: !0,
      disable: T && T.status === "waiting",
      async action() {
        T ? (await bi(T.objectId, { status: "waiting" }), f.data = f.data.filter(
          ({ objectId: V }) => V !== T.objectId
        ), T.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, c({ ...f })) : (await Promise.all(
          w.map(
            (V) => bi(V, { status: "waiting" })
          )
        ), hu({ page: f.page, filter: y }).then((V) => {
          c({ ...f, ...V }), R([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: o(T ? "spam" : "mark as spam"),
      disable: T && T.status === "spam",
      async action() {
        T ? (await bi(T.objectId, { status: "spam" }), f.data = f.data.filter(
          ({ objectId: V }) => V !== T.objectId
        ), f.spamCount += 1, c({ ...f })) : (await Promise.all(
          w.map(
            (V) => bi(V, { status: "spam" })
          )
        ), hu({ page: f.page, filter: y }).then((V) => {
          c({ ...f, ...V }), R([]);
        }));
      }
    },
    {
      key: "sticky",
      show: T && !T.rid && T.status === "approved",
      name: T && T.sticky ? o("disable sticky") : o("sticky"),
      async action(V) {
        V.preventDefault();
        const I = !T.sticky;
        f.data.forEach((Q) => {
          Q.objectId === T.objectId && (Q.sticky = I);
        }), await bi(T.objectId, { sticky: I ? 1 : 0 }), c({ ...f });
      }
    },
    {
      key: "edit",
      show: T,
      name: o("edit"),
      action() {
        const V = {};
        p.id !== T.objectId && p.action !== "edit" && (V.id = T.objectId, V.action = "edit"), h(V);
      }
    },
    {
      key: "reply",
      show: T && T.status === "approved",
      name: o("reply"),
      action() {
        const V = {};
        p.id !== T.objectId && p.action !== "reply" && (V.id = T.objectId, V.action = "reply"), h(V);
      }
    },
    {
      key: "delete",
      name: o("delete"),
      show: !0,
      async action() {
        const V = T ? o("delete one confirm", { nick: T.nick }) : o("delete multiple confirm");
        confirm(V) && (T ? (await D0(T.objectId), f.data = f.data.filter(
          ({ objectId: I }) => I !== T.objectId
        ), c({ ...f })) : (await Promise.all(w.map(D0)), hu({ page: f.page, filter: y }).then((I) => {
          c({ ...f, ...I }), R([]);
        })));
      }
    }
  ].filter(({ show: V }) => V), A = async ({ pid: T, rid: V, url: I, at: Q }) => {
    const Se = s.current.value;
    if (!Se)
      return null;
    const { display_name: je, email: de, url: ve } = d;
    await s5({
      nick: je,
      mail: de,
      ua: navigator.userAgent,
      link: ve,
      url: I,
      comment: Se,
      pid: T,
      rid: V || T,
      at: Q
    }), location.reload();
  }, P = async (T) => {
    const V = f.data[T];
    await bi(V.objectId, l.current), f.data[T] = { ...V, ...l.current }, c({ ...f }), h({});
  }, z = f.data.length && f.data.every(({ objectId: T }) => w.includes(T));
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV("div", { className: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ E.jsxDEV("h2", { children: o("manage comments") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ E.jsxDEV("div", { className: "clear-fix", children: M.map(([T, V]) => /* @__PURE__ */ E.jsxDEV(
          "ul",
          {
            className: wu("typecho-option-tabs", {
              right: T === "owner"
            }),
            children: V.map(({ type: I, name: Q }) => /* @__PURE__ */ E.jsxDEV(
              "li",
              {
                className: wu({ current: I === y[T] }),
                children: /* @__PURE__ */ E.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => v({ [T]: I }),
                    children: [
                      Q,
                      T === "status" && I !== "approved" && f[`${I}Count`] > 0 ? /* @__PURE__ */ E.jsxDEV("span", { className: "balloon", children: f[`${I}Count`] }, void 0, !1, {
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
          T,
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ E.jsxDEV("form", { method: "get", children: [
          /* @__PURE__ */ E.jsxDEV("div", { className: "operate", children: [
            /* @__PURE__ */ E.jsxDEV("label", { children: [
              /* @__PURE__ */ E.jsxDEV("i", { className: "sr-only", children: o("select all") }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 319,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ E.jsxDEV(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: z,
                  onChange: () => R(
                    z ? [] : f.data.map(({ objectId: T }) => T)
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
            /* @__PURE__ */ E.jsxDEV("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ E.jsxDEV(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => N(!b),
                  children: [
                    /* @__PURE__ */ E.jsxDEV("i", { className: "sr-only", children: o("action") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 339,
                      columnNumber: 25
                    }, this),
                    o("selected items"),
                    " ",
                    /* @__PURE__ */ E.jsxDEV("i", { className: "i-caret-down" }, void 0, !1, {
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
              /* @__PURE__ */ E.jsxDEV(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: b ? "block" : "none" },
                  onClick: () => N(!1),
                  children: O().map(({ key: T, name: V, action: I }) => /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("a", { href: "javascript:void(0)", onClick: I, children: V }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, T, !1, {
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
          /* @__PURE__ */ E.jsxDEV("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ E.jsxDEV(
              "input",
              {
                type: "text",
                ref: r,
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
            /* @__PURE__ */ E.jsxDEV(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (T) => {
                  T.preventDefault(), v({ keyword: r.current.value });
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
        /* @__PURE__ */ E.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ E.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ E.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ E.jsxDEV("col", { width: "3%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 392,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 393,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 394,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "71%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 395,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ E.jsxDEV("thead", { children: /* @__PURE__ */ E.jsxDEV("tr", { children: [
                /* @__PURE__ */ E.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 399,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 400,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: o("author") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 401,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: o("content") }, void 0, !1, {
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
              /* @__PURE__ */ E.jsxDEV("tbody", { children: f.data.map(
                ({
                  objectId: T,
                  nick: V,
                  mail: I,
                  avatar: Q,
                  link: Se,
                  comment: je,
                  ip: de,
                  addr: ve,
                  url: qe,
                  status: me,
                  rid: Ee,
                  pid: Ce,
                  sticky: et,
                  time: Re,
                  insertedAt: Qe
                }, Dt) => p.id === T && p.action === "edit" ? /* @__PURE__ */ E.jsxDEV("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ E.jsxDEV("td", { children: " " }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 430,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ E.jsxDEV("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ E.jsxDEV("p", { children: [
                      /* @__PURE__ */ E.jsxDEV(
                        "label",
                        {
                          htmlFor: `comment-${T}-author`,
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
                      /* @__PURE__ */ E.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${T}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: V,
                          onChange: (Ke) => l.current.nick = Ke.target.value
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
                    /* @__PURE__ */ E.jsxDEV("p", { children: [
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${T}-mail`, children: o("email") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 452,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ E.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${T}-mail`,
                          defaultValue: I,
                          onChange: (Ke) => l.current.mail = Ke.target.value
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
                    /* @__PURE__ */ E.jsxDEV("p", { children: [
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${T}-url`, children: o("homepage") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 468,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ E.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${T}-author`,
                          defaultValue: Se,
                          onChange: (Ke) => l.current.link = Ke.target.value
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
                  /* @__PURE__ */ E.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ E.jsxDEV("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ E.jsxDEV("p", { children: [
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${T}-text`, children: o("content") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ E.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${T}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: je,
                          onChange: (Ke) => l.current.comment = Ke.target.value
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
                    /* @__PURE__ */ E.jsxDEV("p", { children: [
                      /* @__PURE__ */ E.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => P(Dt),
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
                      /* @__PURE__ */ E.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => h({}),
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
                ] }, T, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 429,
                  columnNumber: 29
                }, this) : /* @__PURE__ */ E.jsxDEV("tr", { id: `comment-${T}`, children: [
                  /* @__PURE__ */ E.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ E.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: T,
                      checked: w.includes(T),
                      onChange: () => R(
                        w.includes(T) ? w.filter(
                          (Ke) => Ke !== T
                        ) : [...w, T]
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
                  /* @__PURE__ */ E.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ E.jsxDEV("div", { className: "comment-avatar", children: /* @__PURE__ */ E.jsxDEV(
                    "img",
                    {
                      className: "avatar",
                      src: DS(I, Q),
                      alt: V,
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
                  /* @__PURE__ */ E.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ E.jsxDEV("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ E.jsxDEV("strong", { className: "comment-author", children: Se ? /* @__PURE__ */ E.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(Se) ? Se : "https://" + Se,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: V
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : V }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 556,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 573,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ E.jsxDEV("span", { children: /* @__PURE__ */ E.jsxDEV(
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
                        I && /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 583,
                          columnNumber: 44
                        }, this),
                        /* @__PURE__ */ E.jsxDEV("span", { children: de }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        de && /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ E.jsxDEV("span", { children: ve }, void 0, !1, {
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
                  /* @__PURE__ */ E.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ E.jsxDEV("div", { className: "comment-date", children: [
                          o5(Qe || Re),
                          " ",
                          o("at"),
                          " ",
                          /* @__PURE__ */ E.jsxDEV(
                            "a",
                            {
                              href: i5(qe),
                              target: "_blank",
                              rel: "noreferrer",
                              children: qe
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
                        /* @__PURE__ */ E.jsxDEV(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: je }
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
                        p.id === T && p.action === "reply" ? /* @__PURE__ */ E.jsxDEV("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ E.jsxDEV("p", { children: [
                            /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "text", className: "sr-only", children: o("content") }, void 0, !1, {
                              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 611,
                              columnNumber: 39
                            }, this),
                            /* @__PURE__ */ E.jsxDEV(
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
                          /* @__PURE__ */ E.jsxDEV("p", { children: [
                            /* @__PURE__ */ E.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (Ke) => {
                                  Ke.preventDefault(), A({
                                    rid: Ee,
                                    pid: T,
                                    url: qe,
                                    at: V
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
                            /* @__PURE__ */ E.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => h({}),
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
                        /* @__PURE__ */ E.jsxDEV("div", { className: "comment-action hidden-by-mouse", children: O({
                          objectId: T,
                          nick: V,
                          status: me,
                          rid: Ee,
                          pid: Ce,
                          sticky: et
                        }).map(
                          ({ key: Ke, disable: fn, name: wt, action: dn }) => fn ? /* @__PURE__ */ E.jsxDEV("span", { className: "weak", children: wt }, Ke, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 659,
                            columnNumber: 39
                          }, this) : /* @__PURE__ */ E.jsxDEV(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${Ke}`,
                              onClick: dn,
                              children: wt
                            },
                            Ke,
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
                ] }, T, !0, {
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ E.jsxDEV("form", { method: "get", children: /* @__PURE__ */ E.jsxDEV(
          kS,
          {
            current: f.page,
            total: f.totalPages,
            onChange: (T) => c({ ...f, page: T })
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
function u5(o, r, s) {
  const l = new Blob([o], { type: s }), d = document.createElement("a"), f = URL.createObjectURL(l);
  d.href = f, d.download = r, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(f);
  }, 0);
}
function c5(o) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = (d) => r(d.target.result), l.onerror = s, l.readAsText(o);
  });
}
function f5() {
  const [o, r] = U.useState(!1), [s, l] = U.useState(!1), { t: d } = $r(), f = U.useRef(null), c = () => {
    confirm(d("import clear data confirm")) && f.current.click();
  }, y = async (p) => {
    try {
      const h = await c5(p.target.files[0]), b = JSON.parse(h);
      if (!b || b.type !== "waline")
        return alert("import data format not support!");
      const N = b.tables.reduce(
        (A, P) => {
          var z;
          return A + (((z = b.data[P]) == null ? void 0 : z.length) || 0);
        },
        0
      );
      let w = 0;
      r([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: w, maxLength: N }
      ]);
      const R = {};
      for (const A of b.tables) {
        const P = b.data[A];
        if (A !== "Users" && await Xt({
          url: "db?table=" + A,
          method: "DELETE"
        }), R[A] || (R[A] = {}), !!Array.isArray(P))
          for (const z of P) {
            let T = !1;
            if (A === "Users") {
              const je = await Xt("user?email=" + z.email);
              je.objectId && (T = je.objectId);
            }
            const I = A == "Users" && T ? "PUT" : "POST", Q = A === "Comment" ? Object.assign({}, z, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : z;
            for (const je in Q)
              (Q[je] === null || Q[je] === void 0) && delete Q[je];
            const Se = await Xt({
              url: `db?table=${A}${I === "PUT" ? `&objectId=${T}` : ""}`,
              method: I,
              body: Q
            });
            R[A][z.objectId] = Se.objectId, w += 1, r([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: w, maxLength: N }
            ]);
          }
      }
      r(["comment data index relationship reconstruction"]);
      const M = b.data.Comment, O = [];
      for (const A of M) {
        const P = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: z, field: T }) => {
          if (!A[T])
            return;
          const V = A[T], I = R[z][A[T]];
          V && I && V !== I && (P[T] = I);
        }), Object.keys(P).length && O.push([
          P,
          { objectId: R.Comment[A.objectId] }
        ]);
      }
      w = 0;
      for (const [A, P] of O)
        await Xt({
          url: `db?table=Comment&objectId=${P.objectId}`,
          method: "PUT",
          body: A
        }), w += 1, r([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: w, maxLength: O.length }
        ]);
      alert(d("import success")), location.reload();
    } catch (h) {
      throw console.log(h), alert(h.message), h;
    } finally {
      r(!1), p.target.value = null;
    }
  }, v = async () => {
    l(!0);
    try {
      const p = await Xt("db");
      u5(
        JSON.stringify(p, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV("div", { className: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ E.jsxDEV("h2", { children: d("migration") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/migration/index.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ E.jsxDEV(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: v,
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ E.jsxDEV(
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
          /* @__PURE__ */ E.jsxDEV(
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
var d5 = Object.defineProperty, fd = Object.getOwnPropertySymbols, OS = Object.prototype.hasOwnProperty, LS = Object.prototype.propertyIsEnumerable, k0 = (o, r, s) => r in o ? d5(o, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[r] = s, ju = (o, r) => {
  for (var s in r || (r = {}))
    OS.call(r, s) && k0(o, s, r[s]);
  if (fd)
    for (var s of fd(r))
      LS.call(r, s) && k0(o, s, r[s]);
  return o;
}, Hv = (o, r) => {
  var s = {};
  for (var l in o)
    OS.call(o, l) && r.indexOf(l) < 0 && (s[l] = o[l]);
  if (o != null && fd)
    for (var l of fd(o))
      r.indexOf(l) < 0 && LS.call(o, l) && (s[l] = o[l]);
  return s;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var uo;
((o) => {
  const r = class {
    constructor(v, p, h, b) {
      if (this.version = v, this.errorCorrectionLevel = p, this.modules = [], this.isFunction = [], v < r.MIN_VERSION || v > r.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (b < -1 || b > 7)
        throw new RangeError("Mask value out of range");
      this.size = v * 4 + 17;
      let N = [];
      for (let R = 0; R < this.size; R++)
        N.push(!1);
      for (let R = 0; R < this.size; R++)
        this.modules.push(N.slice()), this.isFunction.push(N.slice());
      this.drawFunctionPatterns();
      const w = this.addEccAndInterleave(h);
      if (this.drawCodewords(w), b == -1) {
        let R = 1e9;
        for (let M = 0; M < 8; M++) {
          this.applyMask(M), this.drawFormatBits(M);
          const O = this.getPenaltyScore();
          O < R && (b = M, R = O), this.applyMask(M);
        }
      }
      f(0 <= b && b <= 7), this.mask = b, this.applyMask(b), this.drawFormatBits(b), this.isFunction = [];
    }
    static encodeText(v, p) {
      const h = o.QrSegment.makeSegments(v);
      return r.encodeSegments(h, p);
    }
    static encodeBinary(v, p) {
      const h = o.QrSegment.makeBytes(v);
      return r.encodeSegments([h], p);
    }
    static encodeSegments(v, p, h = 1, b = 40, N = -1, w = !0) {
      if (!(r.MIN_VERSION <= h && h <= b && b <= r.MAX_VERSION) || N < -1 || N > 7)
        throw new RangeError("Invalid value");
      let R, M;
      for (R = h; ; R++) {
        const z = r.getNumDataCodewords(R, p) * 8, T = y.getTotalBits(v, R);
        if (T <= z) {
          M = T;
          break;
        }
        if (R >= b)
          throw new RangeError("Data too long");
      }
      for (const z of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        w && M <= r.getNumDataCodewords(R, z) * 8 && (p = z);
      let O = [];
      for (const z of v) {
        l(z.mode.modeBits, 4, O), l(z.numChars, z.mode.numCharCountBits(R), O);
        for (const T of z.getData())
          O.push(T);
      }
      f(O.length == M);
      const A = r.getNumDataCodewords(R, p) * 8;
      f(O.length <= A), l(0, Math.min(4, A - O.length), O), l(0, (8 - O.length % 8) % 8, O), f(O.length % 8 == 0);
      for (let z = 236; O.length < A; z ^= 253)
        l(z, 8, O);
      let P = [];
      for (; P.length * 8 < O.length; )
        P.push(0);
      return O.forEach((z, T) => P[T >>> 3] |= z << 7 - (T & 7)), new r(R, p, P, N);
    }
    getModule(v, p) {
      return 0 <= v && v < this.size && 0 <= p && p < this.size && this.modules[p][v];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let h = 0; h < this.size; h++)
        this.setFunctionModule(6, h, h % 2 == 0), this.setFunctionModule(h, 6, h % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const v = this.getAlignmentPatternPositions(), p = v.length;
      for (let h = 0; h < p; h++)
        for (let b = 0; b < p; b++)
          h == 0 && b == 0 || h == 0 && b == p - 1 || h == p - 1 && b == 0 || this.drawAlignmentPattern(v[h], v[b]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(v) {
      const p = this.errorCorrectionLevel.formatBits << 3 | v;
      let h = p;
      for (let N = 0; N < 10; N++)
        h = h << 1 ^ (h >>> 9) * 1335;
      const b = (p << 10 | h) ^ 21522;
      f(b >>> 15 == 0);
      for (let N = 0; N <= 5; N++)
        this.setFunctionModule(8, N, d(b, N));
      this.setFunctionModule(8, 7, d(b, 6)), this.setFunctionModule(8, 8, d(b, 7)), this.setFunctionModule(7, 8, d(b, 8));
      for (let N = 9; N < 15; N++)
        this.setFunctionModule(14 - N, 8, d(b, N));
      for (let N = 0; N < 8; N++)
        this.setFunctionModule(this.size - 1 - N, 8, d(b, N));
      for (let N = 8; N < 15; N++)
        this.setFunctionModule(8, this.size - 15 + N, d(b, N));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let v = this.version;
      for (let h = 0; h < 12; h++)
        v = v << 1 ^ (v >>> 11) * 7973;
      const p = this.version << 12 | v;
      f(p >>> 18 == 0);
      for (let h = 0; h < 18; h++) {
        const b = d(p, h), N = this.size - 11 + h % 3, w = Math.floor(h / 3);
        this.setFunctionModule(N, w, b), this.setFunctionModule(w, N, b);
      }
    }
    drawFinderPattern(v, p) {
      for (let h = -4; h <= 4; h++)
        for (let b = -4; b <= 4; b++) {
          const N = Math.max(Math.abs(b), Math.abs(h)), w = v + b, R = p + h;
          0 <= w && w < this.size && 0 <= R && R < this.size && this.setFunctionModule(w, R, N != 2 && N != 4);
        }
    }
    drawAlignmentPattern(v, p) {
      for (let h = -2; h <= 2; h++)
        for (let b = -2; b <= 2; b++)
          this.setFunctionModule(v + b, p + h, Math.max(Math.abs(b), Math.abs(h)) != 1);
    }
    setFunctionModule(v, p, h) {
      this.modules[p][v] = h, this.isFunction[p][v] = !0;
    }
    addEccAndInterleave(v) {
      const p = this.version, h = this.errorCorrectionLevel;
      if (v.length != r.getNumDataCodewords(p, h))
        throw new RangeError("Invalid argument");
      const b = r.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][p], N = r.ECC_CODEWORDS_PER_BLOCK[h.ordinal][p], w = Math.floor(r.getNumRawDataModules(p) / 8), R = b - w % b, M = Math.floor(w / b);
      let O = [];
      const A = r.reedSolomonComputeDivisor(N);
      for (let z = 0, T = 0; z < b; z++) {
        let V = v.slice(T, T + M - N + (z < R ? 0 : 1));
        T += V.length;
        const I = r.reedSolomonComputeRemainder(V, A);
        z < R && V.push(0), O.push(V.concat(I));
      }
      let P = [];
      for (let z = 0; z < O[0].length; z++)
        O.forEach((T, V) => {
          (z != M - N || V >= R) && P.push(T[z]);
        });
      return f(P.length == w), P;
    }
    drawCodewords(v) {
      if (v.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let p = 0;
      for (let h = this.size - 1; h >= 1; h -= 2) {
        h == 6 && (h = 5);
        for (let b = 0; b < this.size; b++)
          for (let N = 0; N < 2; N++) {
            const w = h - N, M = (h + 1 & 2) == 0 ? this.size - 1 - b : b;
            !this.isFunction[M][w] && p < v.length * 8 && (this.modules[M][w] = d(v[p >>> 3], 7 - (p & 7)), p++);
          }
      }
      f(p == v.length * 8);
    }
    applyMask(v) {
      if (v < 0 || v > 7)
        throw new RangeError("Mask value out of range");
      for (let p = 0; p < this.size; p++)
        for (let h = 0; h < this.size; h++) {
          let b;
          switch (v) {
            case 0:
              b = (h + p) % 2 == 0;
              break;
            case 1:
              b = p % 2 == 0;
              break;
            case 2:
              b = h % 3 == 0;
              break;
            case 3:
              b = (h + p) % 3 == 0;
              break;
            case 4:
              b = (Math.floor(h / 3) + Math.floor(p / 2)) % 2 == 0;
              break;
            case 5:
              b = h * p % 2 + h * p % 3 == 0;
              break;
            case 6:
              b = (h * p % 2 + h * p % 3) % 2 == 0;
              break;
            case 7:
              b = ((h + p) % 2 + h * p % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[p][h] && b && (this.modules[p][h] = !this.modules[p][h]);
        }
    }
    getPenaltyScore() {
      let v = 0;
      for (let N = 0; N < this.size; N++) {
        let w = !1, R = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[N][O] == w ? (R++, R == 5 ? v += r.PENALTY_N1 : R > 5 && v++) : (this.finderPenaltyAddHistory(R, M), w || (v += this.finderPenaltyCountPatterns(M) * r.PENALTY_N3), w = this.modules[N][O], R = 1);
        v += this.finderPenaltyTerminateAndCount(w, R, M) * r.PENALTY_N3;
      }
      for (let N = 0; N < this.size; N++) {
        let w = !1, R = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[O][N] == w ? (R++, R == 5 ? v += r.PENALTY_N1 : R > 5 && v++) : (this.finderPenaltyAddHistory(R, M), w || (v += this.finderPenaltyCountPatterns(M) * r.PENALTY_N3), w = this.modules[O][N], R = 1);
        v += this.finderPenaltyTerminateAndCount(w, R, M) * r.PENALTY_N3;
      }
      for (let N = 0; N < this.size - 1; N++)
        for (let w = 0; w < this.size - 1; w++) {
          const R = this.modules[N][w];
          R == this.modules[N][w + 1] && R == this.modules[N + 1][w] && R == this.modules[N + 1][w + 1] && (v += r.PENALTY_N2);
        }
      let p = 0;
      for (const N of this.modules)
        p = N.reduce((w, R) => w + (R ? 1 : 0), p);
      const h = this.size * this.size, b = Math.ceil(Math.abs(p * 20 - h * 10) / h) - 1;
      return f(0 <= b && b <= 9), v += b * r.PENALTY_N4, f(0 <= v && v <= 2568888), v;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const v = Math.floor(this.version / 7) + 2, p = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (v * 2 - 2)) * 2;
        let h = [6];
        for (let b = this.size - 7; h.length < v; b -= p)
          h.splice(1, 0, b);
        return h;
      }
    }
    static getNumRawDataModules(v) {
      if (v < r.MIN_VERSION || v > r.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let p = (16 * v + 128) * v + 64;
      if (v >= 2) {
        const h = Math.floor(v / 7) + 2;
        p -= (25 * h - 10) * h - 55, v >= 7 && (p -= 36);
      }
      return f(208 <= p && p <= 29648), p;
    }
    static getNumDataCodewords(v, p) {
      return Math.floor(r.getNumRawDataModules(v) / 8) - r.ECC_CODEWORDS_PER_BLOCK[p.ordinal][v] * r.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][v];
    }
    static reedSolomonComputeDivisor(v) {
      if (v < 1 || v > 255)
        throw new RangeError("Degree out of range");
      let p = [];
      for (let b = 0; b < v - 1; b++)
        p.push(0);
      p.push(1);
      let h = 1;
      for (let b = 0; b < v; b++) {
        for (let N = 0; N < p.length; N++)
          p[N] = r.reedSolomonMultiply(p[N], h), N + 1 < p.length && (p[N] ^= p[N + 1]);
        h = r.reedSolomonMultiply(h, 2);
      }
      return p;
    }
    static reedSolomonComputeRemainder(v, p) {
      let h = p.map((b) => 0);
      for (const b of v) {
        const N = b ^ h.shift();
        h.push(0), p.forEach((w, R) => h[R] ^= r.reedSolomonMultiply(w, N));
      }
      return h;
    }
    static reedSolomonMultiply(v, p) {
      if (v >>> 8 || p >>> 8)
        throw new RangeError("Byte out of range");
      let h = 0;
      for (let b = 7; b >= 0; b--)
        h = h << 1 ^ (h >>> 7) * 285, h ^= (p >>> b & 1) * v;
      return f(h >>> 8 == 0), h;
    }
    finderPenaltyCountPatterns(v) {
      const p = v[1];
      f(p <= this.size * 3);
      const h = p > 0 && v[2] == p && v[3] == p * 3 && v[4] == p && v[5] == p;
      return (h && v[0] >= p * 4 && v[6] >= p ? 1 : 0) + (h && v[6] >= p * 4 && v[0] >= p ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(v, p, h) {
      return v && (this.finderPenaltyAddHistory(p, h), p = 0), p += this.size, this.finderPenaltyAddHistory(p, h), this.finderPenaltyCountPatterns(h);
    }
    finderPenaltyAddHistory(v, p) {
      p[0] == 0 && (v += this.size), p.pop(), p.unshift(v);
    }
  };
  let s = r;
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
  function l(v, p, h) {
    if (p < 0 || p > 31 || v >>> p)
      throw new RangeError("Value out of range");
    for (let b = p - 1; b >= 0; b--)
      h.push(v >>> b & 1);
  }
  function d(v, p) {
    return (v >>> p & 1) != 0;
  }
  function f(v) {
    if (!v)
      throw new Error("Assertion error");
  }
  const c = class {
    constructor(v, p, h) {
      if (this.mode = v, this.numChars = p, this.bitData = h, p < 0)
        throw new RangeError("Invalid argument");
      this.bitData = h.slice();
    }
    static makeBytes(v) {
      let p = [];
      for (const h of v)
        l(h, 8, p);
      return new c(c.Mode.BYTE, v.length, p);
    }
    static makeNumeric(v) {
      if (!c.isNumeric(v))
        throw new RangeError("String contains non-numeric characters");
      let p = [];
      for (let h = 0; h < v.length; ) {
        const b = Math.min(v.length - h, 3);
        l(parseInt(v.substr(h, b), 10), b * 3 + 1, p), h += b;
      }
      return new c(c.Mode.NUMERIC, v.length, p);
    }
    static makeAlphanumeric(v) {
      if (!c.isAlphanumeric(v))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let p = [], h;
      for (h = 0; h + 2 <= v.length; h += 2) {
        let b = c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(h)) * 45;
        b += c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(h + 1)), l(b, 11, p);
      }
      return h < v.length && l(c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(h)), 6, p), new c(c.Mode.ALPHANUMERIC, v.length, p);
    }
    static makeSegments(v) {
      return v == "" ? [] : c.isNumeric(v) ? [c.makeNumeric(v)] : c.isAlphanumeric(v) ? [c.makeAlphanumeric(v)] : [c.makeBytes(c.toUtf8ByteArray(v))];
    }
    static makeEci(v) {
      let p = [];
      if (v < 0)
        throw new RangeError("ECI assignment value out of range");
      if (v < 128)
        l(v, 8, p);
      else if (v < 16384)
        l(2, 2, p), l(v, 14, p);
      else if (v < 1e6)
        l(6, 3, p), l(v, 21, p);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, p);
    }
    static isNumeric(v) {
      return c.NUMERIC_REGEX.test(v);
    }
    static isAlphanumeric(v) {
      return c.ALPHANUMERIC_REGEX.test(v);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(v, p) {
      let h = 0;
      for (const b of v) {
        const N = b.mode.numCharCountBits(p);
        if (b.numChars >= 1 << N)
          return 1 / 0;
        h += 4 + N + b.bitData.length;
      }
      return h;
    }
    static toUtf8ByteArray(v) {
      v = encodeURI(v);
      let p = [];
      for (let h = 0; h < v.length; h++)
        v.charAt(h) != "%" ? p.push(v.charCodeAt(h)) : (p.push(parseInt(v.substr(h + 1, 2), 16)), h += 2);
      return p;
    }
  };
  let y = c;
  y.NUMERIC_REGEX = /^[0-9]*$/, y.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, y.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", o.QrSegment = y;
})(uo || (uo = {}));
((o) => {
  ((r) => {
    const s = class {
      constructor(d, f) {
        this.ordinal = d, this.formatBits = f;
      }
    };
    let l = s;
    l.LOW = new s(0, 1), l.MEDIUM = new s(1, 0), l.QUARTILE = new s(2, 3), l.HIGH = new s(3, 2), r.Ecc = l;
  })(o.QrCode || (o.QrCode = {}));
})(uo || (uo = {}));
((o) => {
  ((r) => {
    const s = class {
      constructor(d, f) {
        this.modeBits = d, this.numBitsCharCount = f;
      }
      numCharCountBits(d) {
        return this.numBitsCharCount[Math.floor((d + 7) / 17)];
      }
    };
    let l = s;
    l.NUMERIC = new s(1, [10, 12, 14]), l.ALPHANUMERIC = new s(2, [9, 11, 13]), l.BYTE = new s(4, [8, 16, 16]), l.KANJI = new s(8, [8, 10, 12]), l.ECI = new s(7, [0, 0, 0]), r.Mode = l;
  })(o.QrSegment || (o.QrSegment = {}));
})(uo || (uo = {}));
var gs = uo;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var _S = {
  L: gs.QrCode.Ecc.LOW,
  M: gs.QrCode.Ecc.MEDIUM,
  Q: gs.QrCode.Ecc.QUARTILE,
  H: gs.QrCode.Ecc.HIGH
}, PS = 128, AS = "L", MS = "#FFFFFF", VS = "#000000", US = !1, Bv = 4, m5 = 0.1;
function FS(o, r = 0) {
  const s = [];
  return o.forEach(function(l, d) {
    let f = null;
    l.forEach(function(c, y) {
      if (!c && f !== null) {
        s.push(`M${f + r} ${d + r}h${y - f}v1H${f + r}z`), f = null;
        return;
      }
      if (y === l.length - 1) {
        if (!c)
          return;
        f === null ? s.push(`M${y + r},${d + r} h1v1H${y + r}z`) : s.push(`M${f + r},${d + r} h${y + 1 - f}v1H${f + r}z`);
        return;
      }
      c && f === null && (f = y);
    });
  }), s.join("");
}
function $S(o, r) {
  return o.slice().map((s, l) => l < r.y || l >= r.y + r.h ? s : s.map((d, f) => f < r.x || f >= r.x + r.w ? d : !1));
}
function zS(o, r, s, l) {
  if (l == null)
    return null;
  const d = s ? Bv : 0, f = o.length + d * 2, c = Math.floor(r * m5), y = f / r, v = (l.width || c) * y, p = (l.height || c) * y, h = l.x == null ? o.length / 2 - v / 2 : l.x * y, b = l.y == null ? o.length / 2 - p / 2 : l.y * y;
  let N = null;
  if (l.excavate) {
    let w = Math.floor(h), R = Math.floor(b), M = Math.ceil(v + h - w), O = Math.ceil(p + b - R);
    N = { x: w, y: R, w: M, h: O };
  }
  return { x: h, y: b, h: p, w: v, excavation: N };
}
var p5 = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function h5(o) {
  const r = o, {
    value: s,
    size: l = PS,
    level: d = AS,
    bgColor: f = MS,
    fgColor: c = VS,
    includeMargin: y = US,
    style: v,
    imageSettings: p
  } = r, h = Hv(r, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), b = p == null ? void 0 : p.src, N = U.useRef(null), w = U.useRef(null), [R, M] = U.useState(!1);
  U.useEffect(() => {
    if (N.current != null) {
      const P = N.current, z = P.getContext("2d");
      if (!z)
        return;
      let T = gs.QrCode.encodeText(s, _S[d]).getModules();
      const V = y ? Bv : 0, I = T.length + V * 2, Q = zS(T, l, y, p), Se = w.current, je = Q != null && Se !== null && Se.complete && Se.naturalHeight !== 0 && Se.naturalWidth !== 0;
      je && Q.excavation != null && (T = $S(T, Q.excavation));
      const de = window.devicePixelRatio || 1;
      P.height = P.width = l * de;
      const ve = l / I * de;
      z.scale(ve, ve), z.fillStyle = f, z.fillRect(0, 0, I, I), z.fillStyle = c, p5 ? z.fill(new Path2D(FS(T, V))) : T.forEach(function(qe, me) {
        qe.forEach(function(Ee, Ce) {
          Ee && z.fillRect(Ce + V, me + V, 1, 1);
        });
      }), je && z.drawImage(Se, Q.x + V, Q.y + V, Q.w, Q.h);
    }
  }), U.useEffect(() => {
    M(!1);
  }, [b]);
  const O = ju({ height: l, width: l }, v);
  let A = null;
  return b != null && (A = /* @__PURE__ */ En.createElement("img", {
    src: b,
    key: b,
    style: { display: "none" },
    onLoad: () => {
      M(!0);
    },
    ref: w
  })), /* @__PURE__ */ En.createElement(En.Fragment, null, /* @__PURE__ */ En.createElement("canvas", ju({
    style: O,
    height: l,
    width: l,
    ref: N
  }, h)), A);
}
function v5(o) {
  const r = o, {
    value: s,
    size: l = PS,
    level: d = AS,
    bgColor: f = MS,
    fgColor: c = VS,
    includeMargin: y = US,
    imageSettings: v
  } = r, p = Hv(r, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let h = gs.QrCode.encodeText(s, _S[d]).getModules();
  const b = y ? Bv : 0, N = h.length + b * 2, w = zS(h, l, y, v);
  let R = null;
  v != null && w != null && (w.excavation != null && (h = $S(h, w.excavation)), R = /* @__PURE__ */ En.createElement("image", {
    xlinkHref: v.src,
    height: w.h,
    width: w.w,
    x: w.x + b,
    y: w.y + b,
    preserveAspectRatio: "none"
  }));
  const M = FS(h, b);
  return /* @__PURE__ */ En.createElement("svg", ju({
    height: l,
    width: l,
    viewBox: `0 0 ${N} ${N}`
  }, p), /* @__PURE__ */ En.createElement("path", {
    fill: f,
    d: `M0,0 h${N}v${N}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ En.createElement("path", {
    fill: c,
    d: M,
    shapeRendering: "crispEdges"
  }), R);
}
var O0 = (o) => {
  const r = o, { renderAs: s } = r, l = Hv(r, ["renderAs"]);
  return s === "svg" ? /* @__PURE__ */ En.createElement(v5, ju({}, l)) : /* @__PURE__ */ En.createElement(h5, ju({}, l));
};
function g5() {
  const { t: o } = $r(), [r, s] = U.useState(1), [l, d] = U.useState(!1), [f, c] = U.useState({ otpauth_url: "", secret: "" }), y = Ur((h) => h.user);
  U.useEffect(() => {
    CS().then(c);
  }, []);
  const v = async (h) => {
    h.preventDefault();
    const b = h.target.code.value;
    if (!b || b.length < 6 || b.length > 6)
      return alert(o("minimum 6 characters required"));
    try {
      d(!0), await qP({ code: b, secret: f.secret });
    } catch (N) {
      alert(N);
    } finally {
      d(!1), location.reload();
    }
  }, p = async () => {
    confirm(o("close 2fa confirm")) && (d(!0), await bu({ "2fa": "" }).catch((h) => {
      alert(h), console.error(h);
    }), d(!1), location.reload());
  };
  return /* @__PURE__ */ E.jsxDEV("section", { id: "two-factor-auth", children: [
    /* @__PURE__ */ E.jsxDEV("h3", { children: o("two factor auth") }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    y["2fa"] ? /* @__PURE__ */ E.jsxDEV("div", { children: [
      /* @__PURE__ */ E.jsxDEV("p", { children: o("enable 2fa") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV(O0, { value: f.otpauth_url, size: 256 }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: p,
          disabled: l,
          children: o("disable 2fa")
        },
        void 0,
        !1,
        {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) : null,
    !y["2fa"] && r === 1 && /* @__PURE__ */ E.jsxDEV("div", { children: [
      /* @__PURE__ */ E.jsxDEV("p", { children: o("2fa description 1") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("p", { children: o("2fa description 2") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("button", { className: "btn primary", onClick: () => s(2), children: o("next step") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    !y["2fa"] && r === 2 && /* @__PURE__ */ E.jsxDEV("div", { children: [
      /* @__PURE__ */ E.jsxDEV("h4", { children: o("download 2fa app") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("ul", { className: "step2-apps", children: [
        /* @__PURE__ */ E.jsxDEV("li", { children: [
          "For Android, iOS:",
          /* @__PURE__ */ E.jsxDEV("a", { href: "https://support.google.com/accounts/answer/1066447?hl=en", children: [
            " ",
            "Google Authenticator"
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("li", { children: [
          "For Android and iOS:",
          /* @__PURE__ */ E.jsxDEV("a", { href: "http://guide.duosecurity.com/third-party-accounts", children: [
            " ",
            "Duo Mobile"
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("li", { children: [
          "For Windows Phone:",
          /* @__PURE__ */ E.jsxDEV("a", { href: "https://www.microsoft.com/en-US/store/apps/Authenticator/9WZDNCRFJ3RJ", children: [
            " ",
            "Authenticator"
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: () => s(3),
          children: o("next step")
        },
        void 0,
        !1,
        {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 107,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    !y["2fa"] && r === 3 && /* @__PURE__ */ E.jsxDEV("div", { children: [
      /* @__PURE__ */ E.jsxDEV("p", { children: o("open app and scan qrcode") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV(O0, { value: f.otpauth_url, size: 256 }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", onSubmit: v, children: [
        /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "code-0-1", children: o("input 2fa code") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ E.jsxDEV("input", { id: "code-0-1", name: "code", type: "text", className: "text" }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ E.jsxDEV("p", { className: "description" }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 127,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 122,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV(
          "button",
          {
            type: "submit",
            className: "btn primary",
            disabled: l,
            children: o("enable 2fa")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
            lineNumber: 132,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 131,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/twoFactorAuth.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function y5() {
  const [o, r] = U.useState(!1), [s, l] = U.useState(!1), d = Ru(), f = Ur((R) => R.user), { t: c } = $r(), y = async function(R) {
    R.preventDefault();
    const M = R.target.screenName.value, O = R.target.url.value, A = R.target.label.value;
    if (!M || !O)
      return alert(c("nickname and homepage are required"));
    l(!0);
    try {
      await d.user.updateProfile({ display_name: M, url: O, label: A });
    } catch (P) {
      alert(P);
    } finally {
      l(!1);
    }
  }, v = async function(R) {
    R.preventDefault();
    const M = R.target.password.value, O = R.target.confirm.value;
    if (!M || !O)
      return alert(c("please input password"));
    if (M !== O)
      return alert(c("passwords don't match"));
    r(!0), await bu({ password: M }), r(!1);
  }, p = async function(R) {
    await bu({ [R]: "" }), location.reload();
  }, h = async function(R) {
    R.preventDefault();
    const M = prompt(c("please input avatar url"));
    M && (await bu({ avatar: M }), location.reload());
  };
  let b = window.serverURL;
  if (!b) {
    const R = location.pathname.match(/(.*?\/)ui/);
    b = R ? R[1] : "/";
  }
  const N = new URLSearchParams(location.search);
  let w = window.TOKEN || sessionStorage.getItem("TOKEN") || N.get("token");
  return w || (w = localStorage.getItem("TOKEN")), /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV("div", { className: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ E.jsxDEV("h2", { children: c("setting") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ E.jsxDEV("p", { children: /* @__PURE__ */ E.jsxDEV(
            "a",
            {
              href: "javascript:void(0)",
              title: c("change avatar"),
              target: "_blank",
              rel: "noreferrer",
              onClick: h,
              children: /* @__PURE__ */ E.jsxDEV(
                "img",
                {
                  className: "profile-avatar",
                  src: f.avatar || `https://seccdn.libravatar.org/avatar/${f.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 109,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
              lineNumber: 102,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("h2", { children: f.display_name }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("p", { children: f.email }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ E.jsxDEV("section", { children: [
                /* @__PURE__ */ E.jsxDEV("h3", { children: c("profile") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 127,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ E.jsxDEV("form", { method: "post", onSubmit: y, children: [
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: c("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 131,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
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
                        lineNumber: 134,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 141,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 130,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 129,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-2", children: c("homepage") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 147,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
                      "input",
                      {
                        id: "url-0-2",
                        name: "url",
                        type: "text",
                        className: "text",
                        defaultValue: f.url
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 150,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description", children: /* @__PURE__ */ E.jsxDEV(
                      Mr,
                      {
                        i18nKey: "homepage tips",
                        defaults: "Current users' homepage. It must be start with <code>http://</code> or <code>https://</code>.",
                        components: { code: /* @__PURE__ */ E.jsxDEV("code", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 161,
                          columnNumber: 47
                        }, this) }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 158,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 157,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 146,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 145,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-2", children: c("exclusive label") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 169,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
                      "input",
                      {
                        id: "url-0-2",
                        name: "label",
                        type: "text",
                        className: "text",
                        defaultValue: f.label
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 172,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 179,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 168,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 167,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: s,
                      children: c("update my profile")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 185,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 184,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 183,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 126,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 196,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("section", { id: "social-account", children: [
                /* @__PURE__ */ E.jsxDEV("h3", { children: c("connect to social account") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 198,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ E.jsxDEV("div", { className: "account-list", children: [
                  window.ALLOW_SOCIALS && /* @__PURE__ */ E.jsxDEV(
                    "div",
                    {
                      className: wu("account-item github", {
                        bind: f.github
                      }),
                      children: /* @__PURE__ */ E.jsxDEV(
                        "a",
                        {
                          href: f.github ? `https://github.com/${f.github}` : `${b}oauth/github?state=${w}`,
                          target: f.github ? "_blank" : "_self",
                          rel: "noreferrer",
                          children: En.createElement(yS)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 207,
                          columnNumber: 23
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 202,
                      columnNumber: 21
                    },
                    this
                  ),
                  !window.ALLOW_SOCIALS && ["google"].map((R) => /* @__PURE__ */ E.jsxDEV(
                    "div",
                    {
                      className: wu("account-item", R, {
                        bind: f[R]
                      }),
                      children: [
                        /* @__PURE__ */ E.jsxDEV(
                          "a",
                          {
                            href: f[R] ? `https://${R}.com/${f[R]}` : `${b}oauth/?type=${R}&state=${w}`,
                            target: f[R] ? "_blank" : "_self",
                            rel: "noreferrer",
                            children: En.createElement(bS[R])
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                            lineNumber: 228,
                            columnNumber: 25
                          },
                          this
                        ),
                        /* @__PURE__ */ E.jsxDEV(
                          "div",
                          {
                            className: "account-unbind",
                            onClick: () => p(R),
                            children: /* @__PURE__ */ E.jsxDEV(
                              "svg",
                              {
                                className: "close-icon",
                                viewBox: "0 0 1024 1024",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                children: /* @__PURE__ */ E.jsxDEV("path", { d: "m568.569 512 170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" }, void 0, !1, {
                                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                                  lineNumber: 250,
                                  columnNumber: 29
                                }, this)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                                lineNumber: 243,
                                columnNumber: 27
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                            lineNumber: 239,
                            columnNumber: 25
                          },
                          this
                        )
                      ]
                    },
                    R,
                    !0,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 222,
                      columnNumber: 23
                    },
                    this
                  ))
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 199,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 197,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 257,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("section", { id: "change-password", children: [
                /* @__PURE__ */ E.jsxDEV("h3", { children: c("change password") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 259,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ E.jsxDEV("form", { method: "post", onSubmit: v, children: [
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "password-0-11", children: c("password") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 263,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
                      "input",
                      {
                        id: "password-0-11",
                        name: "password",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 266,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description", children: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "password tips" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 274,
                      columnNumber: 25
                    }, this) }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 273,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 262,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 261,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "confirm-0-12", children: c("password again") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 281,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
                      "input",
                      {
                        id: "confirm-0-12",
                        name: "confirm",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 284,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description", children: /* @__PURE__ */ E.jsxDEV(Mr, { i18nKey: "password again tips" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 292,
                      columnNumber: 25
                    }, this) }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 291,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 280,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 279,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: o,
                      children: c("update password")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 298,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 297,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 296,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 260,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 258,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 309,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV(g5, {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 310,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 311,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 122,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function b5() {
  const { t: o } = $r(), r = Ru(), s = Ou(), l = Ur((h) => h.user), [d, f] = U.useState(!1), [c, y] = U.useState(!1), v = NS({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  U.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const p = async function(h) {
    h.preventDefault(), f(!1);
    const b = h.target.nick.value;
    if (!b || b.length < 2)
      return f(o("nickname illegal"));
    const N = h.target.email.value;
    if (!N)
      return f(o("please input email"));
    const w = h.target.link.value, R = h.target.password.value, M = h.target["password-again"].value;
    if (!R || !M || M !== R)
      return f(o("passwords don't match"));
    try {
      y(!0);
      const O = await v("login"), A = await r.user.register({
        display_name: b,
        email: N,
        url: w,
        password: R,
        recaptchaV3: window.recaptchaV3Key ? O : void 0,
        turnstile: window.turnstileKey ? O : void 0
      });
      A && A.verify && alert(o("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (O) {
      f(O.message);
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ E.jsxDEV("ul", { children: d ? /* @__PURE__ */ E.jsxDEV("li", { children: d }, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: p, children: [
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "nick", className: "sr-only", children: o("nickname") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "link", className: "sr-only", children: o("website") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { children: [
          /* @__PURE__ */ E.jsxDEV("label", { htmlFor: "password-again", className: "sr-only", children: o("password again") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV(
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
        /* @__PURE__ */ E.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ E.jsxDEV(
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
      /* @__PURE__ */ E.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV(Jn, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
function x5() {
  const o = Ur((c) => c.user), { t: r } = $r(), [s, l] = U.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  U.useEffect(() => {
    QP({ page: s.page }).then((c) => {
      console.log(c), l({ ...s, ...c });
    });
  }, [s.page]);
  const d = (c) => [
    {
      key: "administrator",
      name: r("set administrator"),
      show: c.type === "guest",
      async action(y) {
        y.preventDefault(), await Rv({
          id: c.objectId,
          type: "administrator"
        }), c.type = "administrator", l({ ...s });
      }
    },
    {
      key: "guest",
      name: r("set guest"),
      show: c.type === "administrator",
      async action(y) {
        if (y.preventDefault(), c.objectId === o.objectId)
          return alert(r("You can't set yourself to be guest!"));
        await Rv({
          id: c.objectId,
          type: "guest"
        }), c.type = "guest", l({ ...s });
      }
    },
    {
      key: "label",
      name: r("set label"),
      show: !0,
      async action(y) {
        y.preventDefault();
        const v = prompt(r("please enter an exclusive label"));
        await Rv({
          id: c.objectId,
          label: v
        }), c.label = v, l({ ...s });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: y }) => y), f = (c) => /^verify/.test(c) ? r("verify") : r(c);
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(fo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV("div", { className: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ E.jsxDEV("h2", { children: r("manage users") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ E.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ E.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ E.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ E.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 115,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 116,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 117,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 118,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ E.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 119,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ E.jsxDEV("thead", { children: /* @__PURE__ */ E.jsxDEV("tr", { children: [
                /* @__PURE__ */ E.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 123,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: r("nickname") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 124,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: r("email") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 125,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: r("role") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 126,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: r("exclusive label") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 127,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ E.jsxDEV("th", { children: r("action") }, void 0, !1, {
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
              /* @__PURE__ */ E.jsxDEV("tbody", { children: s.data.map((c) => /* @__PURE__ */ E.jsxDEV("tr", { id: `user-${c.objectId}`, children: [
                /* @__PURE__ */ E.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ E.jsxDEV("div", { className: "user-avatar", children: /* @__PURE__ */ E.jsxDEV(
                  "img",
                  {
                    className: "avatar",
                    src: DS(c.email, c.avatar),
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
                /* @__PURE__ */ E.jsxDEV("td", { children: /* @__PURE__ */ E.jsxDEV(
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
                /* @__PURE__ */ E.jsxDEV("td", { children: /* @__PURE__ */ E.jsxDEV(
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
                /* @__PURE__ */ E.jsxDEV("td", { children: f(c.type) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 167,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ E.jsxDEV("td", { children: c.label }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 168,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ E.jsxDEV("td", { className: "comment-action", children: d(c).map(
                  ({ key: y, disable: v, name: p, action: h }) => v ? /* @__PURE__ */ E.jsxDEV("span", { className: "weak", children: p }, y, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 173,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ E.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${y}`,
                      onClick: h,
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ E.jsxDEV("form", { method: "get", children: /* @__PURE__ */ E.jsxDEV(
          kS,
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
var N5 = typeof Symbol == "function" && Symbol.observable || "@@observable", L0 = N5, Tv = () => Math.random().toString(36).substring(7).split("").join("."), S5 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Tv()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Tv()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Tv()}`
}, Ei = S5;
function hd(o) {
  if (typeof o != "object" || o === null)
    return !1;
  let r = o;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(o) === r || Object.getPrototypeOf(o) === null;
}
function E5(o) {
  if (o === void 0)
    return "undefined";
  if (o === null)
    return "null";
  const r = typeof o;
  switch (r) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return r;
  }
  if (Array.isArray(o))
    return "array";
  if (j5(o))
    return "date";
  if (w5(o))
    return "error";
  const s = C5(o);
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
function C5(o) {
  return typeof o.constructor == "function" ? o.constructor.name : null;
}
function w5(o) {
  return o instanceof Error || typeof o.message == "string" && o.constructor && typeof o.constructor.stackTraceLimit == "number";
}
function j5(o) {
  return o instanceof Date ? !0 : typeof o.toDateString == "function" && typeof o.getDate == "function" && typeof o.setDate == "function";
}
function Ar(o) {
  let r = typeof o;
  return r = E5(o), r;
}
function vd(o, r, s) {
  if (typeof o != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${Ar(o)}'`);
  if (typeof r == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof s > "u" && (s = r, r = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${Ar(s)}'`);
    return s(vd)(o, r);
  }
  let l = o, d = r, f = /* @__PURE__ */ new Map(), c = f, y = 0, v = !1;
  function p() {
    c === f && (c = /* @__PURE__ */ new Map(), f.forEach((O, A) => {
      c.set(A, O);
    }));
  }
  function h() {
    if (v)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function b(O) {
    if (typeof O != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${Ar(O)}'`);
    if (v)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let A = !0;
    p();
    const P = y++;
    return c.set(P, O), function() {
      if (A) {
        if (v)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        A = !1, p(), c.delete(P), f = null;
      }
    };
  }
  function N(O) {
    if (!hd(O))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${Ar(O)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof O.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof O.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${Ar(O.type)}'. Value was: '${O.type}' (stringified)`);
    if (v)
      throw new Error("Reducers may not dispatch actions.");
    try {
      v = !0, d = l(d, O);
    } finally {
      v = !1;
    }
    return (f = c).forEach((P) => {
      P();
    }), O;
  }
  function w(O) {
    if (typeof O != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${Ar(O)}`);
    l = O, N({
      type: Ei.REPLACE
    });
  }
  function R() {
    const O = b;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(A) {
        if (typeof A != "object" || A === null)
          throw new Error(`Expected the observer to be an object. Instead, received: '${Ar(A)}'`);
        function P() {
          const T = A;
          T.next && T.next(h());
        }
        return P(), {
          unsubscribe: O(P)
        };
      },
      [L0]() {
        return this;
      }
    };
  }
  return N({
    type: Ei.INIT
  }), {
    dispatch: N,
    subscribe: b,
    getState: h,
    replaceReducer: w,
    [L0]: R
  };
}
function R5(o, r, s) {
  return vd(o, r, s);
}
function _0(o) {
  typeof console < "u" && typeof console.error == "function" && console.error(o);
  try {
    throw new Error(o);
  } catch {
  }
}
function T5(o, r, s, l) {
  const d = Object.keys(r), f = s && s.type === Ei.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!hd(o))
    return `The ${f} has unexpected type of "${Ar(o)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const c = Object.keys(o).filter((y) => !r.hasOwnProperty(y) && !l[y]);
  if (c.forEach((y) => {
    l[y] = !0;
  }), !(s && s.type === Ei.REPLACE) && c.length > 0)
    return `Unexpected ${c.length > 1 ? "keys" : "key"} "${c.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function D5(o) {
  Object.keys(o).forEach((r) => {
    const s = o[r];
    if (typeof s(void 0, {
      type: Ei.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof s(void 0, {
      type: Ei.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined when probed with a random type. Don't try to handle '${Ei.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function JS(o) {
  const r = Object.keys(o), s = {};
  for (let c = 0; c < r.length; c++) {
    const y = r[c];
    typeof o[y] > "u" && _0(`No reducer provided for key "${y}"`), typeof o[y] == "function" && (s[y] = o[y]);
  }
  const l = Object.keys(s);
  let d;
  d = {};
  let f;
  try {
    D5(s);
  } catch (c) {
    f = c;
  }
  return function(y = {}, v) {
    if (f)
      throw f;
    {
      const b = T5(y, s, v, d);
      b && _0(b);
    }
    let p = !1;
    const h = {};
    for (let b = 0; b < l.length; b++) {
      const N = l[b], w = s[N], R = y[N], M = w(R, v);
      if (typeof M > "u") {
        const O = v && v.type;
        throw new Error(`When called with an action of type ${O ? `"${String(O)}"` : "(unknown type)"}, the slice reducer for key "${N}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      h[N] = M, p = p || M !== R;
    }
    return p = p || l.length !== Object.keys(y).length, p ? h : y;
  };
}
function P0(o, r) {
  return function(...s) {
    return r(o.apply(this, s));
  };
}
function k5(o, r) {
  if (typeof o == "function")
    return P0(o, r);
  if (typeof o != "object" || o === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${Ar(o)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const s = {};
  for (const l in o) {
    const d = o[l];
    typeof d == "function" && (s[l] = P0(d, r));
  }
  return s;
}
function Iv(...o) {
  return o.length === 0 ? (r) => r : o.length === 1 ? o[0] : o.reduce((r, s) => (...l) => r(s(...l)));
}
function HS(...o) {
  return (r) => (s, l) => {
    const d = r(s, l);
    let f = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const c = {
      getState: d.getState,
      dispatch: (v, ...p) => f(v, ...p)
    }, y = o.map((v) => v(c));
    return f = Iv(...y)(d.dispatch), {
      ...d,
      dispatch: f
    };
  };
}
function O5(o) {
  return hd(o) && "type" in o && typeof o.type == "string";
}
const L5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Ei,
  applyMiddleware: HS,
  bindActionCreators: k5,
  combineReducers: JS,
  compose: Iv,
  createStore: vd,
  isAction: O5,
  isPlainObject: hd,
  legacy_createStore: R5
}, Symbol.toStringTag, { value: "Module" }));
function co() {
  return co = Object.assign || function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, co.apply(this, arguments);
}
function _5(o) {
  var r;
  o.models.forEach(function(v) {
    return BS(o, v);
  });
  var s = IS(o), l = HS.apply(L5, o.reduxConfig.middlewares), d = o.reduxConfig.devtoolComposer ? (r = o.reduxConfig).devtoolComposer.apply(r, o.reduxConfig.enhancers.concat([l])) : A5(o.reduxConfig.devtoolOptions).apply(void 0, o.reduxConfig.enhancers.concat([l])), f = o.reduxConfig.createStore || vd, c = o.reduxConfig.initialState, y = c === void 0 ? {} : c;
  return f(s, y, d);
}
function BS(o, r) {
  var s = {}, l = Object.keys(r.reducers);
  l.forEach(function(y) {
    var v = M5(y) ? y : r.name + "/" + y;
    s[v] = r.reducers[y];
  });
  var d = function(v, p) {
    return v === void 0 && (v = r.state), p.type in s ? s[p.type](v, p.payload, p.meta) : v;
  }, f = r.baseReducer, c = f ? function(y, v) {
    return y === void 0 && (y = r.state), d(f(y, v), v);
  } : d;
  o.forEachPlugin("onReducer", function(y) {
    c = y(c, r.name, o) || c;
  }), o.reduxConfig.reducers[r.name] = c;
}
function IS(o) {
  var r = o.reduxConfig.rootReducers, s = P5(o.reduxConfig), l = s;
  return r && Object.keys(r).length && (l = function(f, c) {
    var y = r[c.type];
    return s(y ? y(f, c) : f, c);
  }), o.forEachPlugin("onRootReducer", function(d) {
    l = d(l, o) || l;
  }), l;
}
function P5(o) {
  var r = o.combineReducers || JS;
  return Object.keys(o.reducers).length ? r(o.reducers) : function(s) {
    return s;
  };
}
function A5(o) {
  return o === void 0 && (o = {}), !o.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(o) : Iv;
}
function M5(o) {
  return o.indexOf("/") > -1;
}
var A0 = function(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}, Ni = function(r) {
  return !r || typeof r == "function";
}, _u = function(r) {
  {
    var s = r(), l = [];
    if (s.forEach(function(d) {
      var f = d[0], c = d[1];
      f && l.push(c);
    }), l.length > 0)
      throw new Error(l.join(", "));
  }
}, V5 = function(r) {
  _u(function() {
    return [[!Array.isArray(r.plugins), "init config.plugins must be an array"], [!A0(r.models), "init config.models must be an object"], [!A0(r.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(r.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(r.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!Ni(r.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!Ni(r.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, YS = function(r) {
  _u(function() {
    return [[!r, "model config is required"], [typeof r.name != "string", 'model "name" [string] is required'], [r.state === void 0 && r.baseReducer === void 0, 'model "state" is required'], [!Ni(r.baseReducer), 'model "baseReducer" must be a function']];
  });
}, U5 = function(r) {
  _u(function() {
    return [[!Ni(r.onStoreCreated), "Plugin onStoreCreated must be a function"], [!Ni(r.onModel), "Plugin onModel must be a function"], [!Ni(r.onReducer), "Plugin onReducer must be a function"], [!Ni(r.onRootReducer), "Plugin onRootReducer must be a function"], [!Ni(r.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, F5 = function(r, s, l) {
  _u(function() {
    return [[!!l.match(/\/.+\//), "Invalid reducer name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid reducer (" + r + "/" + l + "). Must be a function"]];
  });
}, $5 = function(r, s, l) {
  _u(function() {
    return [[!!l.match(/\//), "Invalid effect name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid effect (" + r + "/" + l + "). Must be a function"]];
  });
}, KS = function(r, s, l, d) {
  return Object.assign(function(f, c) {
    var y = {
      type: s + "/" + l
    };
    return typeof f < "u" && (y.payload = f), typeof c < "u" && (y.meta = c), r.dispatch(y);
  }, {
    isEffect: d
  });
}, z5 = function(r, s) {
  var l = r.dispatch[s.name], d = Object.keys(s.reducers);
  d.forEach(function(f) {
    F5(s.name, s.reducers, f), l[f] = KS(r, s.name, f, !1);
  });
}, J5 = function(r, s, l) {
  var d = r.dispatch[l.name], f = {};
  l.effects && (f = typeof l.effects == "function" ? l.effects(r.dispatch) : l.effects);
  var c = Object.keys(f);
  c.forEach(function(y) {
    $5(l.name, f, y), s.effects[l.name + "/" + y] = f[y].bind(d), d[y] = KS(r, l.name, y, !0);
  });
};
function H5(o) {
  return {
    models: B5(o.models),
    reduxConfig: o.redux,
    forEachPlugin: function(s, l) {
      o.plugins.forEach(function(d) {
        d[s] && l(d[s]);
      });
    },
    effects: {}
  };
}
function B5(o) {
  return Object.keys(o).map(function(r) {
    var s = I5(r, o[r]);
    return YS(s), s;
  });
}
function I5(o, r) {
  return co({
    name: o,
    reducers: {}
  }, r);
}
function Y5(o) {
  var r = H5(o);
  r.reduxConfig.middlewares.push(K5(r)), r.forEachPlugin("createMiddleware", function(d) {
    r.reduxConfig.middlewares.push(d(r));
  });
  var s = _5(r), l = co({}, s, {
    name: o.name,
    addModel: function(f) {
      YS(f), BS(r, f), M0(l, f), V0(l, r, f), s.replaceReducer(IS(r)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return W5(l, o.plugins), r.models.forEach(function(d) {
    return M0(l, d);
  }), r.models.forEach(function(d) {
    return V0(l, r, d);
  }), r.forEachPlugin("onStoreCreated", function(d) {
    l = d(l, r) || l;
  }), l;
}
function K5(o) {
  return function(r) {
    return function(s) {
      return function(l) {
        return l.type in o.effects ? (s(l), o.effects[l.type](l.payload, r.getState(), l.meta)) : s(l);
      };
    };
  };
}
function M0(o, r) {
  var s = {};
  o.dispatch["" + r.name] = s, z5(o, r);
}
function V0(o, r, s) {
  J5(o, r, s), r.forEachPlugin("onModel", function(l) {
    l(s, o);
  });
}
function W5(o, r) {
  r.forEach(function(s) {
    if (s.exposed) {
      var l = Object.keys(s.exposed);
      l.forEach(function(d) {
        if (s.exposed) {
          var f = s.exposed[d], c = typeof f == "function";
          o[d] = c ? function() {
            for (var y = arguments.length, v = new Array(y), p = 0; p < y; p++)
              v[p] = arguments[p];
            return f.apply(void 0, [o].concat(v));
          } : Object.create(s.exposed[d]);
        }
      });
    }
  });
}
var U0 = 0;
function G5(o) {
  var r, s, l, d = (r = o.name) != null ? r : "Rematch Store " + U0;
  U0 += 1;
  var f = {
    name: d,
    models: o.models || {},
    plugins: o.plugins || [],
    redux: co({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, o.redux, {
      devtoolOptions: co({
        name: d
      }, (s = (l = o.redux) == null ? void 0 : l.devtoolOptions) != null ? s : {})
    })
  };
  return V5(f), f.plugins.forEach(function(c) {
    c.config && (f.models = Qf(f.models, c.config.models), c.config.redux && (f.redux.initialState = Qf(f.redux.initialState, c.config.redux.initialState), f.redux.reducers = Qf(f.redux.reducers, c.config.redux.reducers), f.redux.rootReducers = Qf(f.redux.rootReducers, c.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, c.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, c.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || c.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || c.config.redux.createStore)), U5(c);
  }), f;
}
function Qf(o, r) {
  return r ? co({}, r, o) : o;
}
var q5 = function(r) {
  var s = G5(r || {});
  return Y5(s);
};
async function Q5() {
  return Xt("token").catch(() => {
    WS(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function X5({ email: o, password: r, code: s, recaptchaV3: l, turnstile: d }) {
  return Xt({
    url: "token",
    method: "POST",
    body: { email: o, password: r, code: s, recaptchaV3: l, turnstile: d }
  });
}
async function WS() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function Z5(o) {
  return Xt({ url: "user", method: "POST", body: o });
}
async function eA({ email: o }) {
  return Xt({
    url: "user/password",
    method: "PUT",
    body: { email: o }
  });
}
const tA = {
  state: null,
  reducers: {
    setUser(o, r) {
      return r;
    },
    updateUser(o, r) {
      return { ...o, ...r };
    }
  },
  effects: (o) => ({
    async loadUserInfo() {
      const r = await Q5();
      if (r != null && r.email) {
        if (window.opener) {
          const s = localStorage.getItem("TOKEN"), l = !!s, d = s || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: d, remember: l, ...r } },
            "*"
          );
        }
        return o.user.setUser(r);
      }
    },
    async login({ email: r, password: s, code: l, remember: d, recaptchaV3: f, turnstile: c }) {
      const { token: y, ...v } = await X5({
        email: r,
        password: s,
        code: l,
        recaptchaV3: f,
        turnstile: c
      });
      return y && (window.TOKEN = y, sessionStorage.setItem("TOKEN", y), d && localStorage.setItem("TOKEN", y), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: y, remember: d, ...v } },
        "*"
      )), o.user.setUser(v);
    },
    logout() {
      WS(), o.user.setUser(null);
    },
    register(r) {
      return Z5(r);
    },
    forgot(r) {
      return eA(r);
    },
    async updateProfile(r) {
      return await bu(r), window.opener && window.opener.postMessage({ type: "profile", data: r }, "*"), o.user.updateUser(r);
    }
  })
}, GS = q5({ models: { user: tA } });
function Xf(o) {
  const r = Ur((s) => s.user);
  return U.useEffect(() => {
    const s = o.meta || {}, l = o.basename || "";
    if (!(r != null && r.email))
      return location.href = l + "/ui/login?redirect=" + location.pathname.replace(l, "");
    if (s.auth ? o.meta.auth !== r.type : !1)
      return location.href = l + "/ui/profile";
  }, [r, o.meta]), r ? o.children : null;
}
function nA() {
  const o = location.pathname.match(/(.*?)\/ui/), r = o ? o[1] : "/";
  return /* @__PURE__ */ E.jsxDEV(kO, { store: GS, children: /* @__PURE__ */ E.jsxDEV(M3, { basename: r, children: /* @__PURE__ */ E.jsxDEV(N3, { children: [
    /* @__PURE__ */ E.jsxDEV(
      xi,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Xf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(l5, {}, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV(
      xi,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Xf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(x5, {}, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV(
      xi,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Xf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(f5, {}, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV(xi, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ E.jsxDEV(XP, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(xi, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ E.jsxDEV(b5, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(xi, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ E.jsxDEV(gP, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(
      xi,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Xf, { children: /* @__PURE__ */ E.jsxDEV(y5, {}, void 0, !1, {
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
  slice: aA,
  forEach: rA
} = [];
function iA(o) {
  return rA.call(aA.call(arguments, 1), (r) => {
    if (r)
      for (const s in r)
        o[s] === void 0 && (o[s] = r[s]);
  }), o;
}
const F0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, oA = (o, r, s) => {
  const l = s || {};
  l.path = l.path || "/";
  const d = encodeURIComponent(r);
  let f = `${o}=${d}`;
  if (l.maxAge > 0) {
    const c = l.maxAge - 0;
    if (Number.isNaN(c)) throw new Error("maxAge should be a Number");
    f += `; Max-Age=${Math.floor(c)}`;
  }
  if (l.domain) {
    if (!F0.test(l.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${l.domain}`;
  }
  if (l.path) {
    if (!F0.test(l.path))
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
}, $0 = {
  create(o, r, s, l) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + s * 60 * 1e3)), l && (d.domain = l), document.cookie = oA(o, encodeURIComponent(r), d);
  },
  read(o) {
    const r = `${o}=`, s = document.cookie.split(";");
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      for (; d.charAt(0) === " "; ) d = d.substring(1, d.length);
      if (d.indexOf(r) === 0) return d.substring(r.length, d.length);
    }
    return null;
  },
  remove(o) {
    this.create(o, "", -1);
  }
};
var sA = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(o) {
    let {
      lookupCookie: r
    } = o;
    if (r && typeof document < "u")
      return $0.read(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(o, r) {
    let {
      lookupCookie: s,
      cookieMinutes: l,
      cookieDomain: d,
      cookieOptions: f
    } = r;
    s && typeof document < "u" && $0.create(s, o, l, d, f);
  }
}, lA = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(o) {
    var l;
    let {
      lookupQuerystring: r
    } = o, s;
    if (typeof window < "u") {
      let {
        search: d
      } = window.location;
      !window.location.search && ((l = window.location.hash) == null ? void 0 : l.indexOf("?")) > -1 && (d = window.location.hash.substring(window.location.hash.indexOf("?")));
      const c = d.substring(1).split("&");
      for (let y = 0; y < c.length; y++) {
        const v = c[y].indexOf("=");
        v > 0 && c[y].substring(0, v) === r && (s = c[y].substring(v + 1));
      }
    }
    return s;
  }
};
let vu = null;
const z0 = () => {
  if (vu !== null) return vu;
  try {
    vu = window !== "undefined" && window.localStorage !== null;
    const o = "i18next.translate.boo";
    window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o);
  } catch {
    vu = !1;
  }
  return vu;
};
var uA = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(o) {
    let {
      lookupLocalStorage: r
    } = o;
    if (r && z0())
      return window.localStorage.getItem(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(o, r) {
    let {
      lookupLocalStorage: s
    } = r;
    s && z0() && window.localStorage.setItem(s, o);
  }
};
let gu = null;
const J0 = () => {
  if (gu !== null) return gu;
  try {
    gu = window !== "undefined" && window.sessionStorage !== null;
    const o = "i18next.translate.boo";
    window.sessionStorage.setItem(o, "foo"), window.sessionStorage.removeItem(o);
  } catch {
    gu = !1;
  }
  return gu;
};
var cA = {
  name: "sessionStorage",
  lookup(o) {
    let {
      lookupSessionStorage: r
    } = o;
    if (r && J0())
      return window.sessionStorage.getItem(r) || void 0;
  },
  cacheUserLanguage(o, r) {
    let {
      lookupSessionStorage: s
    } = r;
    s && J0() && window.sessionStorage.setItem(s, o);
  }
}, fA = {
  name: "navigator",
  lookup(o) {
    const r = [];
    if (typeof navigator < "u") {
      const {
        languages: s,
        userLanguage: l,
        language: d
      } = navigator;
      if (s)
        for (let f = 0; f < s.length; f++)
          r.push(s[f]);
      l && r.push(l), d && r.push(d);
    }
    return r.length > 0 ? r : void 0;
  }
}, dA = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(o) {
    let {
      htmlTag: r
    } = o, s;
    const l = r || (typeof document < "u" ? document.documentElement : null);
    return l && typeof l.getAttribute == "function" && (s = l.getAttribute("lang")), s;
  }
}, mA = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(o) {
    var d;
    let {
      lookupFromPathIndex: r
    } = o;
    if (typeof window > "u") return;
    const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(s) ? (d = s[typeof r == "number" ? r : 0]) == null ? void 0 : d.replace("/", "") : void 0;
  }
}, pA = {
  name: "subdomain",
  lookup(o) {
    var d, f;
    let {
      lookupFromSubdomainIndex: r
    } = o;
    const s = typeof r == "number" ? r + 1 : 1, l = typeof window < "u" && ((f = (d = window.location) == null ? void 0 : d.hostname) == null ? void 0 : f.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (l)
      return l[s];
  }
};
function hA() {
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
class qS {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = r || {
      languageUtils: {}
    }, this.options = iA(s, this.options || {}, hA()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(sA), this.addDetector(lA), this.addDetector(uA), this.addDetector(cA), this.addDetector(fA), this.addDetector(dA), this.addDetector(mA), this.addDetector(pA);
  }
  addDetector(r) {
    return this.detectors[r.name] = r, this;
  }
  detect(r) {
    r || (r = this.options.order);
    let s = [];
    return r.forEach((l) => {
      if (this.detectors[l]) {
        let d = this.detectors[l].lookup(this.options);
        d && typeof d == "string" && (d = [d]), d && (s = s.concat(d));
      }
    }), s = s.map((l) => this.options.convertDetectedLanguage(l)), this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null;
  }
  cacheUserLanguage(r, s) {
    s || (s = this.options.caches), s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(r) > -1 || s.forEach((l) => {
      this.detectors[l] && this.detectors[l].cacheUserLanguage(r, this.options);
    }));
  }
}
qS.type = "languageDetector";
cn.use(qS).use(pL).init({
  // we init with resources
  resources: vP,
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
async function vA() {
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
  }), await Promise.all([GS.dispatch({ type: "user/loadUserInfo" })]).catch(
    (s) => {
      console.error(s);
    }
  );
  const o = document.createElement("div");
  o.style.height = "100%", document.body.appendChild(o), W0(o).render(
    /* @__PURE__ */ E.jsxDEV(En.StrictMode, { children: /* @__PURE__ */ E.jsxDEV(nA, {}, void 0, !1, {
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
vA();
