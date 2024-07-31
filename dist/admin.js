(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#f6f6f3;color:#444;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;max-width:100%}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#fff}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td{background-color:#f6f6f3}.typecho-list-table tbody tr.checked td{background-color:#fff9e8}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function wp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function so(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ic = { exports: {} }, lo = {}, oc = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), xp = Symbol.for("react.portal"), Sp = Symbol.for("react.fragment"), Ep = Symbol.for("react.strict_mode"), kp = Symbol.for("react.profiler"), Cp = Symbol.for("react.provider"), Np = Symbol.for("react.context"), jp = Symbol.for("react.forward_ref"), Pp = Symbol.for("react.suspense"), Lp = Symbol.for("react.memo"), Rp = Symbol.for("react.lazy"), aa = Symbol.iterator;
function Op(e) {
  return e === null || typeof e != "object" ? null : (e = aa && e[aa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lc = Object.assign, ac = {};
function An(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
An.prototype.isReactComponent = {};
An.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uc() {
}
uc.prototype = An.prototype;
function sl(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
var ll = sl.prototype = new uc();
ll.constructor = sl;
lc(ll, An.prototype);
ll.isPureReactComponent = !0;
var ua = Array.isArray, cc = Object.prototype.hasOwnProperty, al = { current: null }, fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) cc.call(t, r) && !fc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Ar, type: e, key: o, ref: s, props: i, _owner: al.current };
}
function Tp(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function _p(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ca = /\/+/g;
function Ro(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _p("" + e.key) : t.toString(36);
}
function hi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ar:
        case xp:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + Ro(s, 0) : r, ua(i) ? (n = "", e != null && (n = e.replace(ca, "$&/") + "/"), hi(i, t, n, "", function(u) {
    return u;
  })) : i != null && (ul(i) && (i = Tp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ca, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ua(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var a = r + Ro(o, l);
    s += hi(o, t, n, a, i);
  }
  else if (a = Op(e), typeof a == "function") for (e = a.call(e), l = 0; !(o = e.next()).done; ) o = o.value, a = r + Ro(o, l++), s += hi(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return hi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function $p(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null }, mi = { transition: null }, Ip = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: mi, ReactCurrentOwner: al };
function pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ul(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = An;
I.Fragment = Sp;
I.Profiler = kp;
I.PureComponent = sl;
I.StrictMode = Ep;
I.Suspense = Pp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
I.act = pc;
I.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = al.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) cc.call(t, a) && !fc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ar, type: e.type, key: i, ref: o, props: r, _owner: s };
};
I.createContext = function(e) {
  return e = { $$typeof: Np, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cp, _context: e }, e.Consumer = e;
};
I.createElement = dc;
I.createFactory = function(e) {
  var t = dc.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: jp, render: e };
};
I.isValidElement = ul;
I.lazy = function(e) {
  return { $$typeof: Rp, _payload: { _status: -1, _result: e }, _init: $p };
};
I.memo = function(e, t) {
  return { $$typeof: Lp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = mi.transition;
  mi.transition = {};
  try {
    e();
  } finally {
    mi.transition = t;
  }
};
I.unstable_act = pc;
I.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
I.useContext = function(e) {
  return ye.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
I.useId = function() {
  return ye.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return ye.current.useRef(e);
};
I.useState = function(e) {
  return ye.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return ye.current.useTransition();
};
I.version = "18.3.1";
oc.exports = I;
var C = oc.exports;
const he = /* @__PURE__ */ so(C), ls = /* @__PURE__ */ wp({
  __proto__: null,
  default: he
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp = C, Mp = Symbol.for("react.element"), Ap = Symbol.for("react.fragment"), bp = Object.prototype.hasOwnProperty, zp = Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Up = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) bp.call(t, r) && !Up.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Mp, type: e, key: o, ref: s, props: i, _owner: zp.current };
}
lo.Fragment = Ap;
lo.jsx = hc;
lo.jsxs = hc;
ic.exports = lo;
var p = ic.exports, mc = { exports: {} }, Oe = {}, gc = { exports: {} }, vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(L, $) {
    var T = L.length;
    L.push($);
    e: for (; 0 < T; ) {
      var z = T - 1 >>> 1, G = L[z];
      if (0 < i(G, $)) L[z] = $, L[T] = G, T = z;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var $ = L[0], T = L.pop();
    if (T !== $) {
      L[0] = T;
      e: for (var z = 0, G = L.length, sn = G >>> 1; z < sn; ) {
        var bt = 2 * (z + 1) - 1, Lo = L[bt], zt = bt + 1, Wr = L[zt];
        if (0 > i(Lo, T)) zt < G && 0 > i(Wr, Lo) ? (L[z] = Wr, L[zt] = T, z = zt) : (L[z] = Lo, L[bt] = T, z = bt);
        else if (zt < G && 0 > i(Wr, T)) L[z] = Wr, L[zt] = T, z = zt;
        else break e;
      }
    }
    return $;
  }
  function i(L, $) {
    var T = L.sortIndex - $.sortIndex;
    return T !== 0 ? T : L.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, h = !1, v = !1, x = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(L) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= L) r(u), $.sortIndex = $.expirationTime, t(a, $);
      else break;
      $ = n(u);
    }
  }
  function y(L) {
    if (x = !1, w(L), !v) if (n(a) !== null) v = !0, We(E);
    else {
      var $ = n(u);
      $ !== null && dt(y, $.startTime - L);
    }
  }
  function E(L, $) {
    v = !1, x && (x = !1, m(P), P = -1), h = !0;
    var T = d;
    try {
      for (w($), f = n(a); f !== null && (!(f.expirationTime > $) || L && !M()); ) {
        var z = f.callback;
        if (typeof z == "function") {
          f.callback = null, d = f.priorityLevel;
          var G = z(f.expirationTime <= $);
          $ = e.unstable_now(), typeof G == "function" ? f.callback = G : f === n(a) && r(a), w($);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var sn = !0;
      else {
        var bt = n(u);
        bt !== null && dt(y, bt.startTime - $), sn = !1;
      }
      return sn;
    } finally {
      f = null, d = T, h = !1;
    }
  }
  var k = !1, N = null, P = -1, _ = 5, R = -1;
  function M() {
    return !(e.unstable_now() - R < _);
  }
  function Y() {
    if (N !== null) {
      var L = e.unstable_now();
      R = L;
      var $ = !0;
      try {
        $ = N(!0, L);
      } finally {
        $ ? te() : (k = !1, N = null);
      }
    } else k = !1;
  }
  var te;
  if (typeof g == "function") te = function() {
    g(Y);
  };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(), b = se.port2;
    se.port1.onmessage = Y, te = function() {
      b.postMessage(null);
    };
  } else te = function() {
    S(Y, 0);
  };
  function We(L) {
    N = L, k || (k = !0, te());
  }
  function dt(L, $) {
    P = S(function() {
      L(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    v || h || (v = !0, We(E));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(L) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = d;
    }
    var T = d;
    d = $;
    try {
      return L();
    } finally {
      d = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, $) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var T = d;
    d = L;
    try {
      return $();
    } finally {
      d = T;
    }
  }, e.unstable_scheduleCallback = function(L, $, T) {
    var z = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? z + T : z) : T = z, L) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = T + G, L = { id: c++, callback: $, priorityLevel: L, startTime: T, expirationTime: G, sortIndex: -1 }, T > z ? (L.sortIndex = T, t(u, L), n(a) === null && L === n(u) && (x ? (m(P), P = -1) : x = !0, dt(y, T - z))) : (L.sortIndex = G, t(a, L), v || h || (v = !0, We(E))), L;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(L) {
    var $ = d;
    return function() {
      var T = d;
      d = $;
      try {
        return L.apply(this, arguments);
      } finally {
        d = T;
      }
    };
  };
})(vc);
gc.exports = vc;
var Dp = gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bp = C, Re = Dp;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yc = /* @__PURE__ */ new Set(), hr = {};
function en(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (hr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), as = Object.prototype.hasOwnProperty, Vp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fa = {}, da = {};
function Hp(e) {
  return as.call(da, e) ? !0 : as.call(fa, e) ? !1 : Vp.test(e) ? da[e] = !0 : (fa[e] = !0, !1);
}
function Kp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wp(e, t, n, r) {
  if (t === null || typeof t > "u" || Kp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cl = /[\-:]([a-z])/g;
function fl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cl,
    fl
  );
  ue[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cl, fl);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cl, fl);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dl(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wp(t, n, i, r) && (n = null), r || i === null ? Hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), cn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), pl = Symbol.for("react.strict_mode"), us = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), xc = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), cs = Symbol.for("react.suspense"), fs = Symbol.for("react.suspense_list"), ml = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), Sc = Symbol.for("react.offscreen"), pa = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object" ? null : (e = pa && e[pa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Oo;
function qn(e) {
  if (Oo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Oo = t && t[1] || "";
  }
  return `
` + Oo + e;
}
var To = !1;
function _o(e, t) {
  if (!e || To) return "";
  To = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (i[s] !== o[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || i[s] !== o[l]) {
              var a = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    To = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Qp(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _o(e.type, !1), e;
    case 11:
      return e = _o(e.type.render, !1), e;
    case 1:
      return e = _o(e.type, !0), e;
    default:
      return "";
  }
}
function ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case cn:
      return "Portal";
    case us:
      return "Profiler";
    case pl:
      return "StrictMode";
    case cs:
      return "Suspense";
    case fs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case xc:
      return (e.displayName || "Context") + ".Consumer";
    case wc:
      return (e._context.displayName || "Context") + ".Provider";
    case hl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ml:
      return t = e.displayName || null, t !== null ? t : ds(e.type) || "Memo";
    case gt:
      t = e._payload, e = e._init;
      try {
        return ds(e(t));
      } catch {
      }
  }
  return null;
}
function Yp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ds(t);
    case 8:
      return t === pl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ec(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gp(e) {
  var t = Ec(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Gr(e) {
  e._valueTracker || (e._valueTracker = Gp(e));
}
function kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ec(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Li(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ps(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ha(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cc(e, t) {
  t = t.checked, t != null && dl(e, "checked", t, !1);
}
function hs(e, t) {
  Cc(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ms(e, t.type, n) : t.hasOwnProperty("defaultValue") && ms(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ma(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ms(e, t, n) {
  (t !== "number" || Li(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Cn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function gs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (er(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Nc(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? jc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, Pc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  Jp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function Lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function Rc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Lc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Xp = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ys(e, t) {
  if (t) {
    if (Xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ws(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var xs = null;
function gl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ss = null, Nn = null, jn = null;
function ya(e) {
  if (e = Ur(e)) {
    if (typeof Ss != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = po(t), Ss(e.stateNode, e.type, t));
  }
}
function Oc(e) {
  Nn ? jn ? jn.push(e) : jn = [e] : Nn = e;
}
function Tc() {
  if (Nn) {
    var e = Nn, t = jn;
    if (jn = Nn = null, ya(e), t) for (e = 0; e < t.length; e++) ya(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function $c() {
}
var $o = !1;
function Ic(e, t, n) {
  if ($o) return e(t, n);
  $o = !0;
  try {
    return _c(e, t, n);
  } finally {
    $o = !1, (Nn !== null || jn !== null) && ($c(), Tc());
  }
}
function gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = po(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Es = !1;
if (ot) try {
  var Bn = {};
  Object.defineProperty(Bn, "passive", { get: function() {
    Es = !0;
  } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
} catch {
  Es = !1;
}
function Zp(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ir = !1, Ri = null, Oi = !1, ks = null, qp = { onError: function(e) {
  ir = !0, Ri = e;
} };
function eh(e, t, n, r, i, o, s, l, a) {
  ir = !1, Ri = null, Zp.apply(qp, arguments);
}
function th(e, t, n, r, i, o, s, l, a) {
  if (eh.apply(this, arguments), ir) {
    if (ir) {
      var u = Ri;
      ir = !1, Ri = null;
    } else throw Error(j(198));
    Oi || (Oi = !0, ks = u);
  }
}
function tn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wa(e) {
  if (tn(e) !== e) throw Error(j(188));
}
function nh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wa(i), e;
        if (o === r) return wa(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (l === r) {
          s = !0, r = i, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (l === r) {
            s = !0, r = o, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Mc(e) {
  return e = nh(e), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bc = Re.unstable_scheduleCallback, xa = Re.unstable_cancelCallback, rh = Re.unstable_shouldYield, ih = Re.unstable_requestPaint, J = Re.unstable_now, oh = Re.unstable_getCurrentPriorityLevel, vl = Re.unstable_ImmediatePriority, zc = Re.unstable_UserBlockingPriority, Ti = Re.unstable_NormalPriority, sh = Re.unstable_LowPriority, Uc = Re.unstable_IdlePriority, ao = null, Xe = null;
function lh(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
    Xe.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ve = Math.clz32 ? Math.clz32 : ch, ah = Math.log, uh = Math.LN2;
function ch(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ah(e) / uh | 0) | 0;
}
var Xr = 64, Zr = 4194304;
function tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? r = tr(l) : (o &= s, o !== 0 && (r = tr(o)));
  } else s = n & ~i, s !== 0 ? r = tr(s) : o !== 0 && (r = tr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ve(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function fh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Ve(o), l = 1 << s, a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = fh(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function Cs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dc() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function Io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ve(t), e[t] = n;
}
function ph(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function yl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var A = 0;
function Bc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vc, wl, Hc, Kc, Wc, Ns = !1, qr = [], kt = null, Ct = null, Nt = null, vr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), yt = [], hh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ur(t), t !== null && wl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function mh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return kt = Vn(kt, e, t, n, r, i), !0;
    case "dragenter":
      return Ct = Vn(Ct, e, t, n, r, i), !0;
    case "mouseover":
      return Nt = Vn(Nt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return vr.set(o, Vn(vr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, yr.set(o, Vn(yr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Qc(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fc(n), t !== null) {
          e.blockedOn = t, Wc(e.priority, function() {
            Hc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xs = r, n.target.dispatchEvent(r), xs = null;
    } else return t = Ur(n), t !== null && wl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ea(e, t, n) {
  gi(e) && n.delete(t);
}
function gh() {
  Ns = !1, kt !== null && gi(kt) && (kt = null), Ct !== null && gi(Ct) && (Ct = null), Nt !== null && gi(Nt) && (Nt = null), vr.forEach(Ea), yr.forEach(Ea);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ns || (Ns = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, gh)));
}
function wr(e) {
  function t(i) {
    return Hn(i, e);
  }
  if (0 < qr.length) {
    Hn(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kt !== null && Hn(kt, e), Ct !== null && Hn(Ct, e), Nt !== null && Hn(Nt, e), vr.forEach(t), yr.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) Qc(n), n.blockedOn === null && yt.shift();
}
var Pn = ut.ReactCurrentBatchConfig, $i = !0;
function vh(e, t, n, r) {
  var i = A, o = Pn.transition;
  Pn.transition = null;
  try {
    A = 1, xl(e, t, n, r);
  } finally {
    A = i, Pn.transition = o;
  }
}
function yh(e, t, n, r) {
  var i = A, o = Pn.transition;
  Pn.transition = null;
  try {
    A = 4, xl(e, t, n, r);
  } finally {
    A = i, Pn.transition = o;
  }
}
function xl(e, t, n, r) {
  if ($i) {
    var i = js(e, t, n, r);
    if (i === null) Ho(e, t, r, Ii, n), Sa(e, r);
    else if (mh(i, e, t, n, r)) r.stopPropagation();
    else if (Sa(e, r), t & 4 && -1 < hh.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ur(i);
        if (o !== null && Vc(o), o = js(e, t, n, r), o === null && Ho(e, t, r, Ii, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ho(e, t, r, null, n);
  }
}
var Ii = null;
function js(e, t, n, r) {
  if (Ii = null, e = gl(r), e = Bt(e), e !== null) if (t = tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ii = e, null;
}
function Yc(e) {
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
      return 1;
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
      return 4;
    case "message":
      switch (oh()) {
        case vl:
          return 1;
        case zc:
          return 4;
        case Ti:
        case sh:
          return 16;
        case Uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null, Sl = null, vi = null;
function Gc() {
  if (vi) return vi;
  var e, t = Sl, n = t.length, r, i = "value" in xt ? xt.value : xt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return vi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function yi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ei() {
  return !0;
}
function ka() {
  return !1;
}
function Te(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ei : ka, this.isPropagationStopped = ka, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ei);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ei);
  }, persist: function() {
  }, isPersistent: ei }), t;
}
var bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, El = Te(bn), zr = W({}, bn, { view: 0, detail: 0 }), wh = Te(zr), Fo, Mo, Kn, uo = W({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Fo = e.screenX - Kn.screenX, Mo = e.screenY - Kn.screenY) : Mo = Fo = 0, Kn = e), Fo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Mo;
} }), Ca = Te(uo), xh = W({}, uo, { dataTransfer: 0 }), Sh = Te(xh), Eh = W({}, zr, { relatedTarget: 0 }), Ao = Te(Eh), kh = W({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ch = Te(kh), Nh = W({}, bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jh = Te(Nh), Ph = W({}, bn, { data: 0 }), Na = Te(Ph), Lh = {
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
}, Rh = {
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
}, Oh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Th(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Oh[e]) ? !!t[e] : !1;
}
function kl() {
  return Th;
}
var _h = W({}, zr, { key: function(e) {
  if (e.key) {
    var t = Lh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kl, charCode: function(e) {
  return e.type === "keypress" ? yi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $h = Te(_h), Ih = W({}, uo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ja = Te(Ih), Fh = W({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kl }), Mh = Te(Fh), Ah = W({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bh = Te(Ah), zh = W({}, uo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uh = Te(zh), Dh = [9, 13, 27, 32], Cl = ot && "CompositionEvent" in window, or = null;
ot && "documentMode" in document && (or = document.documentMode);
var Bh = ot && "TextEvent" in window && !or, Jc = ot && (!Cl || or && 8 < or && 11 >= or), Pa = " ", La = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return Dh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function Vh(e, t) {
  switch (e) {
    case "compositionend":
      return Zc(t);
    case "keypress":
      return t.which !== 32 ? null : (La = !0, Pa);
    case "textInput":
      return e = t.data, e === Pa && La ? null : e;
    default:
      return null;
  }
}
function Hh(e, t) {
  if (dn) return e === "compositionend" || !Cl && Xc(e, t) ? (e = Gc(), vi = Sl = xt = null, dn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kh[e.type] : t === "textarea";
}
function qc(e, t, n, r) {
  Oc(r), t = Fi(t, "onChange"), 0 < t.length && (n = new El("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var sr = null, xr = null;
function Wh(e) {
  ff(e, 0);
}
function co(e) {
  var t = mn(e);
  if (kc(t)) return e;
}
function Qh(e, t) {
  if (e === "change") return t;
}
var ef = !1;
if (ot) {
  var bo;
  if (ot) {
    var zo = "oninput" in document;
    if (!zo) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"), zo = typeof Oa.oninput == "function";
    }
    bo = zo;
  } else bo = !1;
  ef = bo && (!document.documentMode || 9 < document.documentMode);
}
function Ta() {
  sr && (sr.detachEvent("onpropertychange", tf), xr = sr = null);
}
function tf(e) {
  if (e.propertyName === "value" && co(xr)) {
    var t = [];
    qc(t, xr, e, gl(e)), Ic(Wh, t);
  }
}
function Yh(e, t, n) {
  e === "focusin" ? (Ta(), sr = t, xr = n, sr.attachEvent("onpropertychange", tf)) : e === "focusout" && Ta();
}
function Gh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return co(xr);
}
function Jh(e, t) {
  if (e === "click") return co(t);
}
function Xh(e, t) {
  if (e === "input" || e === "change") return co(t);
}
function Zh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ke = typeof Object.is == "function" ? Object.is : Zh;
function Sr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!as.call(t, i) || !Ke(e[i], t[i])) return !1;
  }
  return !0;
}
function _a(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $a(e, t) {
  var n = _a(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _a(n);
  }
}
function nf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rf() {
  for (var e = window, t = Li(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Li(e.document);
  }
  return t;
}
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qh(e) {
  var t = rf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = $a(n, o);
        var s = $a(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var em = ot && "documentMode" in document && 11 >= document.documentMode, pn = null, Ps = null, lr = null, Ls = !1;
function Ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ls || pn == null || pn !== Li(r) || (r = pn, "selectionStart" in r && Nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && Sr(lr, r) || (lr = r, r = Fi(Ps, "onSelect"), 0 < r.length && (t = new El("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
}
function ti(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: ti("Animation", "AnimationEnd"), animationiteration: ti("Animation", "AnimationIteration"), animationstart: ti("Animation", "AnimationStart"), transitionend: ti("Transition", "TransitionEnd") }, Uo = {}, of = {};
ot && (of = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function fo(e) {
  if (Uo[e]) return Uo[e];
  if (!hn[e]) return e;
  var t = hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in of) return Uo[e] = t[n];
  return e;
}
var sf = fo("animationend"), lf = fo("animationiteration"), af = fo("animationstart"), uf = fo("transitionend"), cf = /* @__PURE__ */ new Map(), Fa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  cf.set(e, t), en(t, [e]);
}
for (var Do = 0; Do < Fa.length; Do++) {
  var Bo = Fa[Do], tm = Bo.toLowerCase(), nm = Bo[0].toUpperCase() + Bo.slice(1);
  Ft(tm, "on" + nm);
}
Ft(sf, "onAnimationEnd");
Ft(lf, "onAnimationIteration");
Ft(af, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(uf, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rm = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function Ma(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, th(r, t, void 0, e), e.currentTarget = null;
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
        Ma(i, l, u), o = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
        Ma(i, l, u), o = a;
      }
    }
  }
  if (Oi) throw e = ks, Oi = !1, ks = null, e;
}
function D(e, t) {
  var n = t[$s];
  n === void 0 && (n = t[$s] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function Vo(e, t, n) {
  var r = 0;
  t && (r |= 4), df(n, e, r, t);
}
var ni = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[ni]) {
    e[ni] = !0, yc.forEach(function(n) {
      n !== "selectionchange" && (rm.has(n) || Vo(n, !1, e), Vo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ni] || (t[ni] = !0, Vo("selectionchange", !1, t));
  }
}
function df(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var i = vh;
      break;
    case 4:
      i = yh;
      break;
    default:
      i = xl;
  }
  n = i.bind(null, t, n, e), i = void 0, !Es || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Ho(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = Bt(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = o = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ic(function() {
    var u = o, c = gl(n), f = [];
    e: {
      var d = cf.get(e);
      if (d !== void 0) {
        var h = El, v = e;
        switch (e) {
          case "keypress":
            if (yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = $h;
            break;
          case "focusin":
            v = "focus", h = Ao;
            break;
          case "focusout":
            v = "blur", h = Ao;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Ca;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Sh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Mh;
            break;
          case sf:
          case lf:
          case af:
            h = Ch;
            break;
          case uf:
            h = bh;
            break;
          case "scroll":
            h = wh;
            break;
          case "wheel":
            h = Uh;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = jh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ja;
        }
        var x = (t & 4) !== 0, S = !x && e === "scroll", m = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var g = u, w; g !== null; ) {
          w = g;
          var y = w.stateNode;
          if (w.tag === 5 && y !== null && (w = y, m !== null && (y = gr(g, m), y != null && x.push(kr(g, y, w)))), S) break;
          g = g.return;
        }
        0 < x.length && (d = new h(d, v, null, n, c), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", d && n !== xs && (v = n.relatedTarget || n.fromElement) && (Bt(v) || v[st])) break e;
        if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = u, v = v ? Bt(v) : null, v !== null && (S = tn(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
          if (x = Ca, y = "onMouseLeave", m = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (x = ja, y = "onPointerLeave", m = "onPointerEnter", g = "pointer"), S = h == null ? d : mn(h), w = v == null ? d : mn(v), d = new x(y, g + "leave", h, n, c), d.target = S, d.relatedTarget = w, y = null, Bt(c) === u && (x = new x(m, g + "enter", v, n, c), x.target = w, x.relatedTarget = S, y = x), S = y, h && v) t: {
            for (x = h, m = v, g = 0, w = x; w; w = ln(w)) g++;
            for (w = 0, y = m; y; y = ln(y)) w++;
            for (; 0 < g - w; ) x = ln(x), g--;
            for (; 0 < w - g; ) m = ln(m), w--;
            for (; g--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = ln(x), m = ln(m);
            }
            x = null;
          }
          else x = null;
          h !== null && Aa(f, d, h, x, !1), v !== null && S !== null && Aa(f, S, v, x, !0);
        }
      }
      e: {
        if (d = u ? mn(u) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var E = Qh;
        else if (Ra(d)) if (ef) E = Xh;
        else {
          E = Gh;
          var k = Yh;
        }
        else (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = Jh);
        if (E && (E = E(e, u))) {
          qc(f, E, n, c);
          break e;
        }
        k && k(e, d, u), e === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && ms(d, "number", d.value);
      }
      switch (k = u ? mn(u) : window, e) {
        case "focusin":
          (Ra(k) || k.contentEditable === "true") && (pn = k, Ps = u, lr = null);
          break;
        case "focusout":
          lr = Ps = pn = null;
          break;
        case "mousedown":
          Ls = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ls = !1, Ia(f, n, c);
          break;
        case "selectionchange":
          if (em) break;
        case "keydown":
        case "keyup":
          Ia(f, n, c);
      }
      var N;
      if (Cl) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else dn ? Xc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Jc && n.locale !== "ko" && (dn || P !== "onCompositionStart" ? P === "onCompositionEnd" && dn && (N = Gc()) : (xt = c, Sl = "value" in xt ? xt.value : xt.textContent, dn = !0)), k = Fi(u, P), 0 < k.length && (P = new Na(P, e, null, n, c), f.push({ event: P, listeners: k }), N ? P.data = N : (N = Zc(n), N !== null && (P.data = N)))), (N = Bh ? Vh(e, n) : Hh(e, n)) && (u = Fi(u, "onBeforeInput"), 0 < u.length && (c = new Na("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = N));
    }
    ff(f, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = gr(e, n), o != null && r.unshift(kr(e, o, i)), o = gr(e, t), o != null && r.push(kr(e, o, i))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Aa(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = gr(n, o), a != null && s.unshift(kr(n, a, l))) : i || (a = gr(n, o), a != null && s.push(kr(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var im = /\r\n?/g, om = /\u0000|\uFFFD/g;
function ba(e) {
  return (typeof e == "string" ? e : "" + e).replace(im, `
`).replace(om, "");
}
function ri(e, t, n) {
  if (t = ba(t), ba(e) !== t && n) throw Error(j(425));
}
function Mi() {
}
var Rs = null, Os = null;
function Ts(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0, sm = typeof clearTimeout == "function" ? clearTimeout : void 0, za = typeof Promise == "function" ? Promise : void 0, lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof za < "u" ? function(e) {
  return za.resolve(null).then(e).catch(am);
} : _s;
function am(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ko(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), wr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  wr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ua(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + zn, Cr = "__reactProps$" + zn, st = "__reactContainer$" + zn, $s = "__reactEvents$" + zn, um = "__reactListeners$" + zn, cm = "__reactHandles$" + zn;
function Bt(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[st] || n[Ge]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ua(e); e !== null; ) {
        if (n = e[Ge]) return n;
        e = Ua(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ur(e) {
  return e = e[Ge] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function po(e) {
  return e[Cr] || null;
}
var Is = [], gn = -1;
function Mt(e) {
  return { current: e };
}
function B(e) {
  0 > gn || (e.current = Is[gn], Is[gn] = null, gn--);
}
function U(e, t) {
  gn++, Is[gn] = e.current, e.current = t;
}
var $t = {}, me = Mt($t), Ee = Mt(!1), Qt = $t;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function Ai() {
  B(Ee), B(me);
}
function Da(e, t, n) {
  if (me.current !== $t) throw Error(j(168));
  U(me, t), U(Ee, n);
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, Yp(e) || "Unknown", i));
  return W({}, n, r);
}
function bi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, Qt = me.current, U(me, e), U(Ee, Ee.current), !0;
}
function Ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = pf(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, B(Ee), B(me), U(me, e)) : B(Ee), U(Ee, n);
}
var et = null, ho = !1, Wo = !1;
function hf(e) {
  et === null ? et = [e] : et.push(e);
}
function fm(e) {
  ho = !0, hf(e);
}
function At() {
  if (!Wo && et !== null) {
    Wo = !0;
    var e = 0, t = A;
    try {
      var n = et;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      et = null, ho = !1;
    } catch (i) {
      throw et !== null && (et = et.slice(e + 1)), bc(vl, At), i;
    } finally {
      A = t, Wo = !1;
    }
  }
  return null;
}
var vn = [], yn = 0, zi = null, Ui = 0, _e = [], $e = 0, Yt = null, nt = 1, rt = "";
function Ut(e, t) {
  vn[yn++] = Ui, vn[yn++] = zi, zi = e, Ui = t;
}
function mf(e, t, n) {
  _e[$e++] = nt, _e[$e++] = rt, _e[$e++] = Yt, Yt = e;
  var r = nt;
  e = rt;
  var i = 32 - Ve(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Ve(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, nt = 1 << 32 - Ve(t) + i | n << i | r, rt = o + e;
  } else nt = 1 << o | n << i | r, rt = e;
}
function jl(e) {
  e.return !== null && (Ut(e, 1), mf(e, 1, 0));
}
function Pl(e) {
  for (; e === zi; ) zi = vn[--yn], vn[yn] = null, Ui = vn[--yn], vn[yn] = null;
  for (; e === Yt; ) Yt = _e[--$e], _e[$e] = null, rt = _e[--$e], _e[$e] = null, nt = _e[--$e], _e[$e] = null;
}
var Le = null, je = null, V = !1, Be = null;
function gf(e, t) {
  var n = Fe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, je = jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: nt, overflow: rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Fs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ms(e) {
  if (V) {
    var t = je;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (Fs(e)) throw Error(j(418));
        t = jt(n.nextSibling);
        var r = Le;
        t && Va(e, t) ? gf(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Le = e);
      }
    } else {
      if (Fs(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, V = !1, Le = e;
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function ii(e) {
  if (e !== Le) return !1;
  if (!V) return Ha(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ts(e.type, e.memoizedProps)), t && (t = je)) {
    if (Fs(e)) throw vf(), Error(j(418));
    for (; t; ) gf(e, t), t = jt(t.nextSibling);
  }
  if (Ha(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Le ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function vf() {
  for (var e = je; e; ) e = jt(e.nextSibling);
}
function _n() {
  je = Le = null, V = !1;
}
function Ll(e) {
  Be === null ? Be = [e] : Be.push(e);
}
var dm = ut.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var l = i.refs;
        s === null ? delete l[o] : l[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function oi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ka(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
  function t(m, g) {
    if (e) {
      var w = m.deletions;
      w === null ? (m.deletions = [g], m.flags |= 16) : w.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), g = g.sibling;
    return null;
  }
  function r(m, g) {
    for (m = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
    return m;
  }
  function i(m, g) {
    return m = Ot(m, g), m.index = 0, m.sibling = null, m;
  }
  function o(m, g, w) {
    return m.index = w, e ? (w = m.alternate, w !== null ? (w = w.index, w < g ? (m.flags |= 2, g) : w) : (m.flags |= 2, g)) : (m.flags |= 1048576, g);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, w, y) {
    return g === null || g.tag !== 6 ? (g = qo(w, m.mode, y), g.return = m, g) : (g = i(g, w), g.return = m, g);
  }
  function a(m, g, w, y) {
    var E = w.type;
    return E === fn ? c(m, g, w.props.children, y, w.key) : g !== null && (g.elementType === E || typeof E == "object" && E !== null && E.$$typeof === gt && Ka(E) === g.type) ? (y = i(g, w.props), y.ref = Wn(m, g, w), y.return = m, y) : (y = Ni(w.type, w.key, w.props, null, m.mode, y), y.ref = Wn(m, g, w), y.return = m, y);
  }
  function u(m, g, w, y) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w.containerInfo || g.stateNode.implementation !== w.implementation ? (g = es(w, m.mode, y), g.return = m, g) : (g = i(g, w.children || []), g.return = m, g);
  }
  function c(m, g, w, y, E) {
    return g === null || g.tag !== 7 ? (g = Wt(w, m.mode, y, E), g.return = m, g) : (g = i(g, w), g.return = m, g);
  }
  function f(m, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = qo("" + g, m.mode, w), g.return = m, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Yr:
          return w = Ni(g.type, g.key, g.props, null, m.mode, w), w.ref = Wn(m, null, g), w.return = m, w;
        case cn:
          return g = es(g, m.mode, w), g.return = m, g;
        case gt:
          var y = g._init;
          return f(m, y(g._payload), w);
      }
      if (er(g) || Dn(g)) return g = Wt(g, m.mode, w, null), g.return = m, g;
      oi(m, g);
    }
    return null;
  }
  function d(m, g, w, y) {
    var E = g !== null ? g.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : l(m, g, "" + w, y);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Yr:
          return w.key === E ? a(m, g, w, y) : null;
        case cn:
          return w.key === E ? u(m, g, w, y) : null;
        case gt:
          return E = w._init, d(
            m,
            g,
            E(w._payload),
            y
          );
      }
      if (er(w) || Dn(w)) return E !== null ? null : c(m, g, w, y, null);
      oi(m, w);
    }
    return null;
  }
  function h(m, g, w, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return m = m.get(w) || null, l(g, m, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Yr:
          return m = m.get(y.key === null ? w : y.key) || null, a(g, m, y, E);
        case cn:
          return m = m.get(y.key === null ? w : y.key) || null, u(g, m, y, E);
        case gt:
          var k = y._init;
          return h(m, g, w, k(y._payload), E);
      }
      if (er(y) || Dn(y)) return m = m.get(w) || null, c(g, m, y, E, null);
      oi(g, y);
    }
    return null;
  }
  function v(m, g, w, y) {
    for (var E = null, k = null, N = g, P = g = 0, _ = null; N !== null && P < w.length; P++) {
      N.index > P ? (_ = N, N = null) : _ = N.sibling;
      var R = d(m, N, w[P], y);
      if (R === null) {
        N === null && (N = _);
        break;
      }
      e && N && R.alternate === null && t(m, N), g = o(R, g, P), k === null ? E = R : k.sibling = R, k = R, N = _;
    }
    if (P === w.length) return n(m, N), V && Ut(m, P), E;
    if (N === null) {
      for (; P < w.length; P++) N = f(m, w[P], y), N !== null && (g = o(N, g, P), k === null ? E = N : k.sibling = N, k = N);
      return V && Ut(m, P), E;
    }
    for (N = r(m, N); P < w.length; P++) _ = h(N, m, P, w[P], y), _ !== null && (e && _.alternate !== null && N.delete(_.key === null ? P : _.key), g = o(_, g, P), k === null ? E = _ : k.sibling = _, k = _);
    return e && N.forEach(function(M) {
      return t(m, M);
    }), V && Ut(m, P), E;
  }
  function x(m, g, w, y) {
    var E = Dn(w);
    if (typeof E != "function") throw Error(j(150));
    if (w = E.call(w), w == null) throw Error(j(151));
    for (var k = E = null, N = g, P = g = 0, _ = null, R = w.next(); N !== null && !R.done; P++, R = w.next()) {
      N.index > P ? (_ = N, N = null) : _ = N.sibling;
      var M = d(m, N, R.value, y);
      if (M === null) {
        N === null && (N = _);
        break;
      }
      e && N && M.alternate === null && t(m, N), g = o(M, g, P), k === null ? E = M : k.sibling = M, k = M, N = _;
    }
    if (R.done) return n(
      m,
      N
    ), V && Ut(m, P), E;
    if (N === null) {
      for (; !R.done; P++, R = w.next()) R = f(m, R.value, y), R !== null && (g = o(R, g, P), k === null ? E = R : k.sibling = R, k = R);
      return V && Ut(m, P), E;
    }
    for (N = r(m, N); !R.done; P++, R = w.next()) R = h(N, m, P, R.value, y), R !== null && (e && R.alternate !== null && N.delete(R.key === null ? P : R.key), g = o(R, g, P), k === null ? E = R : k.sibling = R, k = R);
    return e && N.forEach(function(Y) {
      return t(m, Y);
    }), V && Ut(m, P), E;
  }
  function S(m, g, w, y) {
    if (typeof w == "object" && w !== null && w.type === fn && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Yr:
          e: {
            for (var E = w.key, k = g; k !== null; ) {
              if (k.key === E) {
                if (E = w.type, E === fn) {
                  if (k.tag === 7) {
                    n(m, k.sibling), g = i(k, w.props.children), g.return = m, m = g;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === gt && Ka(E) === k.type) {
                  n(m, k.sibling), g = i(k, w.props), g.ref = Wn(m, k, w), g.return = m, m = g;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            w.type === fn ? (g = Wt(w.props.children, m.mode, y, w.key), g.return = m, m = g) : (y = Ni(w.type, w.key, w.props, null, m.mode, y), y.ref = Wn(m, g, w), y.return = m, m = y);
          }
          return s(m);
        case cn:
          e: {
            for (k = w.key; g !== null; ) {
              if (g.key === k) if (g.tag === 4 && g.stateNode.containerInfo === w.containerInfo && g.stateNode.implementation === w.implementation) {
                n(m, g.sibling), g = i(g, w.children || []), g.return = m, m = g;
                break e;
              } else {
                n(m, g);
                break;
              }
              else t(m, g);
              g = g.sibling;
            }
            g = es(w, m.mode, y), g.return = m, m = g;
          }
          return s(m);
        case gt:
          return k = w._init, S(m, g, k(w._payload), y);
      }
      if (er(w)) return v(m, g, w, y);
      if (Dn(w)) return x(m, g, w, y);
      oi(m, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, g !== null && g.tag === 6 ? (n(m, g.sibling), g = i(g, w), g.return = m, m = g) : (n(m, g), g = qo(w, m.mode, y), g.return = m, m = g), s(m)) : n(m, g);
  }
  return S;
}
var $n = yf(!0), wf = yf(!1), Di = Mt(null), Bi = null, wn = null, Rl = null;
function Ol() {
  Rl = wn = Bi = null;
}
function Tl(e) {
  var t = Di.current;
  B(Di), e._currentValue = t;
}
function As(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ln(e, t) {
  Bi = e, Rl = wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Ae(e) {
  var t = e._currentValue;
  if (Rl !== e) if (e = { context: e, memoizedValue: t, next: null }, wn === null) {
    if (Bi === null) throw Error(j(308));
    wn = e, Bi.dependencies = { lanes: 0, firstContext: e };
  } else wn = wn.next = e;
  return t;
}
var Vt = null;
function _l(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
function xf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, _l(t)) : (n.next = i.next, i.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function $l(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function it(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, lt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, _l(r)) : (t.next = i.next, i.next = t), r.interleaved = t, lt(e, n);
}
function wi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yl(e, n);
  }
}
function Wa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Vi(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? o = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (o !== null) {
    var f = i.baseState;
    s = 0, c = u = a = null, l = o;
    do {
      var d = l.lane, h = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, x = l;
          switch (d = t, h = n, x.tag) {
            case 1:
              if (v = x.payload, typeof v == "function") {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload, d = typeof v == "function" ? v.call(h, f, d) : v, d == null) break e;
              f = W({}, f, d);
              break e;
            case 2:
              vt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l));
      } else h = { eventTime: h, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = h, a = f) : c = c.next = h, s |= d;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    Jt |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Qa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
      i.call(r);
    }
  }
}
var Dr = {}, Ze = Mt(Dr), Nr = Mt(Dr), jr = Mt(Dr);
function Ht(e) {
  if (e === Dr) throw Error(j(174));
  return e;
}
function Il(e, t) {
  switch (U(jr, t), U(Nr, e), U(Ze, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vs(t, e);
  }
  B(Ze), U(Ze, t);
}
function In() {
  B(Ze), B(Nr), B(jr);
}
function Ef(e) {
  Ht(jr.current);
  var t = Ht(Ze.current), n = vs(t, e.type);
  t !== n && (U(Nr, e), U(Ze, n));
}
function Fl(e) {
  Nr.current === e && (B(Ze), B(Nr));
}
var H = Mt(0);
function Hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Qo = [];
function Ml() {
  for (var e = 0; e < Qo.length; e++) Qo[e]._workInProgressVersionPrimary = null;
  Qo.length = 0;
}
var xi = ut.ReactCurrentDispatcher, Yo = ut.ReactCurrentBatchConfig, Gt = 0, K = null, q = null, re = null, Ki = !1, ar = !1, Pr = 0, pm = 0;
function fe() {
  throw Error(j(321));
}
function Al(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function bl(e, t, n, r, i, o) {
  if (Gt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xi.current = e === null || e.memoizedState === null ? vm : ym, e = n(r, i), ar) {
    o = 0;
    do {
      if (ar = !1, Pr = 0, 25 <= o) throw Error(j(301));
      o += 1, re = q = null, t.updateQueue = null, xi.current = wm, e = n(r, i);
    } while (ar);
  }
  if (xi.current = Wi, t = q !== null && q.next !== null, Gt = 0, re = q = K = null, Ki = !1, t) throw Error(j(300));
  return e;
}
function zl() {
  var e = Pr !== 0;
  return Pr = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? K.memoizedState = re = e : re = re.next = e, re;
}
function be() {
  if (q === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) re = t, q = e;
  else {
    if (e === null) throw Error(j(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, re === null ? K.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Go(e) {
  var t = be(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = q, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var l = s = null, a = null, u = o;
    do {
      var c = u.lane;
      if ((Gt & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, K.lanes |= c, Jt |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? s = r : a.next = l, Ke(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, Jt |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jo(e) {
  var t = be(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Ke(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function kf() {
}
function Cf(e, t) {
  var n = K, r = be(), i = t(), o = !Ke(r.memoizedState, i);
  if (o && (r.memoizedState = i, Se = !0), r = r.queue, Ul(Pf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, jf.bind(null, n, r, i, t), void 0, null), oe === null) throw Error(j(349));
    Gt & 30 || Nf(n, t, i);
  }
  return i;
}
function Nf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Lf(t) && Rf(e);
}
function Pf(e, t, n) {
  return n(function() {
    Lf(t) && Rf(e);
  });
}
function Lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Rf(e) {
  var t = lt(e, 1);
  t !== null && He(t, e, 1, -1);
}
function Ya(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gm.bind(null, K, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Of() {
  return be().memoizedState;
}
function Si(e, t, n, r) {
  var i = Ye();
  K.flags |= e, i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function mo(e, t, n, r) {
  var i = be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var s = q.memoizedState;
    if (o = s.destroy, r !== null && Al(r, s.deps)) {
      i.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Rr(1 | t, n, o, r);
}
function Ga(e, t) {
  return Si(8390656, 8, e, t);
}
function Ul(e, t) {
  return mo(2048, 8, e, t);
}
function Tf(e, t) {
  return mo(4, 2, e, t);
}
function _f(e, t) {
  return mo(4, 4, e, t);
}
function $f(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function If(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mo(4, 4, $f.bind(null, t, e), n);
}
function Dl() {
}
function Ff(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Mf(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Af(e, t, n) {
  return Gt & 21 ? (Ke(n, t) || (n = Dc(), K.lanes |= n, Jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function hm(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Yo.transition;
  Yo.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, Yo.transition = r;
  }
}
function bf() {
  return be().memoizedState;
}
function mm(e, t, n) {
  var r = Rt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zf(e)) Uf(t, n);
  else if (n = xf(e, t, n, r), n !== null) {
    var i = ve();
    He(n, e, r, i), Df(n, t, r);
  }
}
function gm(e, t, n) {
  var r = Rt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e)) Uf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = l, Ke(l, s)) {
        var a = t.interleaved;
        a === null ? (i.next = i, _l(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = xf(e, t, i, r), n !== null && (i = ve(), He(n, e, r, i), Df(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Uf(e, t) {
  ar = Ki = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yl(e, n);
  }
}
var Wi = { readContext: Ae, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, vm = { readContext: Ae, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ae, useEffect: Ga, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Si(
    4194308,
    4,
    $f.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Si(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Si(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ya, useDebugValue: Dl, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = Ya(!1), t = e[0];
  return e = hm.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = Ye();
  if (V) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(j(349));
    Gt & 30 || Nf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Ga(Pf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Rr(9, jf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = oe.identifierPrefix;
  if (V) {
    var n = rt, r = nt;
    n = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ym = {
  readContext: Ae,
  useCallback: Ff,
  useContext: Ae,
  useEffect: Ul,
  useImperativeHandle: If,
  useInsertionEffect: Tf,
  useLayoutEffect: _f,
  useMemo: Mf,
  useReducer: Go,
  useRef: Of,
  useState: function() {
    return Go(Lr);
  },
  useDebugValue: Dl,
  useDeferredValue: function(e) {
    var t = be();
    return Af(t, q.memoizedState, e);
  },
  useTransition: function() {
    var e = Go(Lr)[0], t = be().memoizedState;
    return [e, t];
  },
  useMutableSource: kf,
  useSyncExternalStore: Cf,
  useId: bf,
  unstable_isNewReconciler: !1
}, wm = { readContext: Ae, useCallback: Ff, useContext: Ae, useEffect: Ul, useImperativeHandle: If, useInsertionEffect: Tf, useLayoutEffect: _f, useMemo: Mf, useReducer: Jo, useRef: Of, useState: function() {
  return Jo(Lr);
}, useDebugValue: Dl, useDeferredValue: function(e) {
  var t = be();
  return q === null ? t.memoizedState = e : Af(t, q.memoizedState, e);
}, useTransition: function() {
  var e = Jo(Lr)[0], t = be().memoizedState;
  return [e, t];
}, useMutableSource: kf, useSyncExternalStore: Cf, useId: bf, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var go = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), i = Rt(e), o = it(r, i);
  o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (He(t, e, i, r), wi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), i = Rt(e), o = it(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (He(t, e, i, r), wi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Rt(e), i = it(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Pt(e, i, r), t !== null && (He(t, e, r, n), wi(t, e, r));
} };
function Ja(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, r) || !Sr(i, o) : !0;
}
function Bf(e, t, n) {
  var r = !1, i = $t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ae(o) : (i = ke(t) ? Qt : me.current, r = t.contextTypes, o = (r = r != null) ? Tn(e, i) : $t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = go, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Xa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && go.enqueueReplaceState(t, t.state, null);
}
function zs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, $l(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ae(o) : (o = ke(t) ? Qt : me.current, i.context = Tn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (bs(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && go.enqueueReplaceState(i, i.state, null), Vi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Qp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Xo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Us(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xm = typeof WeakMap == "function" ? WeakMap : Map;
function Vf(e, t, n) {
  n = it(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yi || (Yi = !0, Js = r), Us(e, t);
  }, n;
}
function Hf(e, t, n) {
  n = it(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Us(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Us(e, t), typeof r != "function" && (Lt === null ? Lt = /* @__PURE__ */ new Set([this]) : Lt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Za(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Im.bind(null, e, t, n), t.then(e, e));
}
function qa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = it(-1, 1), t.tag = 2, Pt(n, t, 1))), n.lanes |= 1), e);
}
var Sm = ut.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? wf(t, null, n, r) : $n(t, e.child, n, r);
}
function tu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Ln(t, i), r = bl(e, t, n, r, o, i), n = zl(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, at(e, t, i)) : (V && n && jl(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function nu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Gl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Kf(e, t, o, r, i)) : (e = Ni(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Sr, n(s, r) && e.ref === t.ref) return at(e, t, i);
  }
  return t.flags |= 1, e = Ot(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Kf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Sr(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, at(e, t, i);
  }
  return Ds(e, t, n, r, i);
}
function Wf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Sn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Sn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Sn, Ne), Ne |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Sn, Ne), Ne |= r;
  return ge(e, t, i, n), t.child;
}
function Qf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ds(e, t, n, r, i) {
  var o = ke(n) ? Qt : me.current;
  return o = Tn(t, o), Ln(t, i), n = bl(e, t, n, r, o, i), r = zl(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, at(e, t, i)) : (V && r && jl(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function ru(e, t, n, r, i) {
  if (ke(n)) {
    var o = !0;
    bi(t);
  } else o = !1;
  if (Ln(t, i), t.stateNode === null) Ei(e, t), Bf(t, n, r), zs(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ae(u) : (u = ke(n) ? Qt : me.current, u = Tn(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Xa(t, s, r, u), vt = !1;
    var d = t.memoizedState;
    s.state = d, Vi(t, r, s, i), a = t.memoizedState, l !== r || d !== a || Ee.current || vt ? (typeof c == "function" && (bs(t, n, c, r), a = t.memoizedState), (l = vt || Ja(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sf(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Ue(t.type, l), s.props = u, f = t.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ae(a) : (a = ke(n) ? Qt : me.current, a = Tn(t, a));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && Xa(t, s, r, a), vt = !1, d = t.memoizedState, s.state = d, Vi(t, r, s, i);
    var v = t.memoizedState;
    l !== f || d !== v || Ee.current || vt ? (typeof h == "function" && (bs(t, n, h, r), v = t.memoizedState), (u = vt || Ja(t, n, u, r, d, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bs(e, t, n, r, o, i);
}
function Bs(e, t, n, r, i, o) {
  Qf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ba(t, n, !1), at(e, t, o);
  r = t.stateNode, Sm.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = $n(t, e.child, null, o), t.child = $n(t, null, l, o)) : ge(e, t, l, o), t.memoizedState = r.state, i && Ba(t, n, !0), t.child;
}
function Yf(e) {
  var t = e.stateNode;
  t.pendingContext ? Da(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Da(e, t.context, !1), Il(e, t.containerInfo);
}
function iu(e, t, n, r, i) {
  return _n(), Ll(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gf(e, t, n) {
  var r = t.pendingProps, i = H.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(H, i & 1), e === null)
    return Ms(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = wo(s, r, 0, null), e = Wt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Hs(n), t.memoizedState = Vs, e) : Bl(t, s));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Em(e, t, s, r, l, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ot(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = Ot(l, o) : (o = Wt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Hs(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Vs, r;
  }
  return o = e.child, e = o.sibling, r = Ot(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bl(e, t) {
  return t = wo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function si(e, t, n, r) {
  return r !== null && Ll(r), $n(t, e.child, null, n), e = Bl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Em(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Xo(Error(j(422))), si(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = wo({ mode: "visible", children: r.children }, i, 0, null), o = Wt(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $n(t, e.child, null, s), t.child.memoizedState = Hs(s), t.memoizedState = Vs, o);
  if (!(t.mode & 1)) return si(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(j(419)), r = Xo(o, r, void 0), si(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Se || l) {
    if (r = oe, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, lt(e, i), He(r, e, i, -1));
    }
    return Yl(), r = Xo(Error(j(421))), si(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fm.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, je = jt(i.nextSibling), Le = t, V = !0, Be = null, e !== null && (_e[$e++] = nt, _e[$e++] = rt, _e[$e++] = Yt, nt = e.id, rt = e.overflow, Yt = t), t = Bl(t, r.children), t.flags |= 4096, t);
}
function ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), As(e.return, t, n);
}
function Zo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Jf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ge(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ou(e, n, t);
      else if (e.tag === 19) ou(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Hi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zo(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Hi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Zo(t, !0, n, null, o);
      break;
    case "together":
      Zo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ei(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function at(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Jt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ot(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function km(e, t, n) {
  switch (t.tag) {
    case 3:
      Yf(t), _n();
      break;
    case 5:
      Ef(t);
      break;
    case 1:
      ke(t.type) && bi(t);
      break;
    case 4:
      Il(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Di, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gf(e, t, n) : (U(H, H.current & 1), e = at(e, t, n), e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Jf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wf(e, t, n);
  }
  return at(e, t, n);
}
var Xf, Ks, Zf, qf;
Xf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ks = function() {
};
Zf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Ht(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        i = ps(e, i), r = ps(e, r), o = [];
        break;
      case "select":
        i = W({}, i, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = gs(e, i), r = gs(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mi);
    }
    ys(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (hr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (hr.hasOwnProperty(u) ? (a != null && u === "onScroll" && D("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!V) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Cm(e, t, n) {
  var r = t.pendingProps;
  switch (Pl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return ke(t.type) && Ai(), de(t), null;
    case 3:
      return r = t.stateNode, In(), B(Ee), B(me), Ml(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ii(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Be !== null && (qs(Be), Be = null))), Ks(e, t), de(t), null;
    case 5:
      Fl(t);
      var i = Ht(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Zf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return de(t), null;
        }
        if (e = Ht(Ze.current), ii(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ge] = t, r[Cr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < nr.length; i++) D(nr[i], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              ha(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              ga(r, o), D("invalid", r);
          }
          ys(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var l = o[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && ri(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ri(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : hr.hasOwnProperty(s) && l != null && s === "onScroll" && D("scroll", r);
          }
          switch (n) {
            case "input":
              Gr(r), ma(r, o, !0);
              break;
            case "textarea":
              Gr(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ge] = t, e[Cr] = r, Xf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ws(n, r), n) {
              case "dialog":
                D("cancel", e), D("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < nr.length; i++) D(nr[i], e);
                i = r;
                break;
              case "source":
                D("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), i = r;
                break;
              case "details":
                D("toggle", e), i = r;
                break;
              case "input":
                ha(e, r), i = ps(e, r), D("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = W({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                ga(e, r), i = gs(e, r), D("invalid", e);
                break;
              default:
                i = r;
            }
            ys(n, i), l = i;
            for (o in l) if (l.hasOwnProperty(o)) {
              var a = l[o];
              o === "style" ? Rc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Pc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && mr(e, a) : typeof a == "number" && mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (hr.hasOwnProperty(o) ? a != null && o === "onScroll" && D("scroll", e) : a != null && dl(e, o, a, s));
            }
            switch (n) {
              case "input":
                Gr(e), ma(e, r, !1);
                break;
              case "textarea":
                Gr(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Cn(e, !!r.multiple, o, !1) : r.defaultValue != null && Cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) qf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Ht(jr.current), Ht(Ze.current), ii(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ge] = t, (o = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
            case 3:
              ri(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ri(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ge] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (B(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && je !== null && t.mode & 1 && !(t.flags & 128)) vf(), _n(), t.flags |= 98560, o = !1;
        else if (o = ii(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
            o[Ge] = t;
          } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), o = !1;
        } else Be !== null && (qs(Be), Be = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Yl())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return In(), Ks(e, t), e === null && Er(t.stateNode.containerInfo), de(t), null;
    case 10:
      return Tl(t.type._context), de(t), null;
    case 17:
      return ke(t.type) && Ai(), de(t), null;
    case 19:
      if (B(H), o = t.memoizedState, o === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Qn(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Hi(e), s !== null) {
            for (t.flags |= 128, Qn(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > Mn && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Hi(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !V) return de(t), null;
        } else 2 * J() - o.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = H.current, U(H, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ql(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Nm(e, t) {
  switch (Pl(t), t.tag) {
    case 1:
      return ke(t.type) && Ai(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return In(), B(Ee), B(me), Ml(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fl(t), null;
    case 13:
      if (B(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(H), null;
    case 4:
      return In(), null;
    case 10:
      return Tl(t.type._context), null;
    case 22:
    case 23:
      return Ql(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var li = !1, pe = !1, jm = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function Ws(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var su = !1;
function Pm(e, t) {
  if (Rs = $i, e = rf(), Nl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (h = f.firstChild) !== null; )
            d = f, f = h;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (h = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = h;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Os = { focusedElem: e, selectionRange: n }, $i = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var x = v.memoizedProps, S = v.memoizedState, m = t.stateNode, g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ue(t.type, x), S);
            m.__reactInternalSnapshotBeforeUpdate = g;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (y) {
      Q(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return v = su, su = !1, v;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ws(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function vo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function ed(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[Cr], delete t[$s], delete t[um], delete t[cm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ys(e, t, n), e = e.sibling; e !== null; ) Ys(e, t, n), e = e.sibling;
}
function Gs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Gs(e, t, n), e = e.sibling; e !== null; ) Gs(e, t, n), e = e.sibling;
}
var le = null, De = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), n = n.sibling;
}
function nd(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
    Xe.onCommitFiberUnmount(ao, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || xn(n, t);
    case 6:
      var r = le, i = De;
      le = null, pt(e, t, n), le = r, De = i, le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? Ko(e.parentNode, n) : e.nodeType === 1 && Ko(e, n), wr(e)) : Ko(le, n.stateNode));
      break;
    case 4:
      r = le, i = De, le = n.stateNode.containerInfo, De = !0, pt(e, t, n), le = r, De = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ws(n, t, s), i = i.next;
        } while (i !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (!pe && (xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Q(n, t, l);
      }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, pt(e, t, n), pe = r) : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jm()), t.forEach(function(r) {
      var i = Mm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            le = l.stateNode, De = !1;
            break e;
          case 3:
            le = l.stateNode.containerInfo, De = !0;
            break e;
          case 4:
            le = l.stateNode.containerInfo, De = !0;
            break e;
        }
        l = l.return;
      }
      if (le === null) throw Error(j(160));
      nd(o, s, i), le = null, De = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      Q(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rd(t, e), t = t.sibling;
}
function rd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Qe(e), r & 4) {
        try {
          ur(3, e, e.return), vo(3, e);
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          ur(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), Qe(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (ze(t, e), Qe(e), r & 512 && n !== null && xn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          mr(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && o.type === "radio" && o.name != null && Cc(i, o), ws(l, s);
          var u = ws(l, o);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], f = a[s + 1];
            c === "style" ? Rc(i, f) : c === "dangerouslySetInnerHTML" ? Pc(i, f) : c === "children" ? mr(i, f) : dl(i, c, f, u);
          }
          switch (l) {
            case "input":
              hs(i, o);
              break;
            case "textarea":
              Nc(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var h = o.value;
              h != null ? Cn(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? Cn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Cn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Cr] = o;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ze(t, e), Qe(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ze(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        wr(t.containerInfo);
      } catch (x) {
        Q(e, e.return, x);
      }
      break;
    case 4:
      ze(t, e), Qe(e);
      break;
    case 13:
      ze(t, e), Qe(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Kl = J())), r & 4 && au(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || c, ze(t, e), pe = u) : ze(t, e), Qe(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (O = e, c = e.child; c !== null; ) {
          for (f = O = c; O !== null; ) {
            switch (d = O, h = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ur(4, d, d.return);
                break;
              case 1:
                xn(d, d.return);
                var v = d.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (x) {
                    Q(r, n, x);
                  }
                }
                break;
              case 5:
                xn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  cu(f);
                  continue;
                }
            }
            h !== null ? (h.return = d, O = h) : cu(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Lc("display", s));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (x) {
              Q(e, e.return, x);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), Qe(e), r & 4 && au(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mr(i, ""), r.flags &= -33);
          var o = lu(e);
          Gs(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = lu(e);
          Ys(e, l, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lm(e, t, n) {
  O = e, id(e);
}
function id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || li;
      if (!s) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || pe;
        l = li;
        var u = pe;
        if (li = s, (pe = a) && !u) for (O = i; O !== null; ) s = O, a = s.child, s.tag === 22 && s.memoizedState !== null ? fu(i) : a !== null ? (a.return = s, O = a) : fu(i);
        for (; o !== null; ) O = o, id(o), o = o.sibling;
        O = i, li = l, pe = u;
      }
      uu(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, O = o) : uu(e);
  }
}
function uu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || vo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Qa(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Qa(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && wr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(j(163));
        }
        pe || t.flags & 512 && Qs(t);
      } catch (d) {
        Q(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function cu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function fu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vo(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var o = t.return;
          try {
            Qs(t);
          } catch (a) {
            Q(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qs(t);
          } catch (a) {
            Q(t, s, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, O = l;
      break;
    }
    O = t.return;
  }
}
var Rm = Math.ceil, Qi = ut.ReactCurrentDispatcher, Vl = ut.ReactCurrentOwner, Me = ut.ReactCurrentBatchConfig, F = 0, oe = null, X = null, ae = 0, Ne = 0, Sn = Mt(0), ee = 0, Or = null, Jt = 0, yo = 0, Hl = 0, cr = null, xe = null, Kl = 0, Mn = 1 / 0, qe = null, Yi = !1, Js = null, Lt = null, ai = !1, St = null, Gi = 0, fr = 0, Xs = null, ki = -1, Ci = 0;
function ve() {
  return F & 6 ? J() : ki !== -1 ? ki : ki = J();
}
function Rt(e) {
  return e.mode & 1 ? F & 2 && ae !== 0 ? ae & -ae : dm.transition !== null ? (Ci === 0 && (Ci = Dc()), Ci) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yc(e.type)), e) : 1;
}
function He(e, t, n, r) {
  if (50 < fr) throw fr = 0, Xs = null, Error(j(185));
  br(e, n, r), (!(F & 2) || e !== oe) && (e === oe && (!(F & 2) && (yo |= n), ee === 4 && wt(e, ae)), Ce(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Mn = J() + 500, ho && At()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  dh(e, t);
  var r = _i(e, e === oe ? ae : 0);
  if (r === 0) n !== null && xa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xa(n), t === 1) e.tag === 0 ? fm(du.bind(null, e)) : hf(du.bind(null, e)), lm(function() {
      !(F & 6) && At();
    }), n = null;
    else {
      switch (Bc(r)) {
        case 1:
          n = vl;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Ti;
          break;
        case 536870912:
          n = Uc;
          break;
        default:
          n = Ti;
      }
      n = dd(n, od.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function od(e, t) {
  if (ki = -1, Ci = 0, F & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = _i(e, e === oe ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ji(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = ld();
    (oe !== e || ae !== t) && (qe = null, Mn = J() + 500, Kt(e, t));
    do
      try {
        _m();
        break;
      } catch (l) {
        sd(e, l);
      }
    while (!0);
    Ol(), Qi.current = o, F = i, X !== null ? t = 0 : (oe = null, ae = 0, t = ee);
  }
  if (t !== 0) {
    if (t === 2 && (i = Cs(e), i !== 0 && (r = i, t = Zs(e, i))), t === 1) throw n = Or, Kt(e, 0), wt(e, r), Ce(e, J()), n;
    if (t === 6) wt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Om(i) && (t = Ji(e, r), t === 2 && (o = Cs(e), o !== 0 && (r = o, t = Zs(e, o))), t === 1)) throw n = Or, Kt(e, 0), wt(e, r), Ce(e, J()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Dt(e, xe, qe);
          break;
        case 3:
          if (wt(e, r), (r & 130023424) === r && (t = Kl + 500 - J(), 10 < t)) {
            if (_i(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = _s(Dt.bind(null, e, xe, qe), t);
            break;
          }
          Dt(e, xe, qe);
          break;
        case 4:
          if (wt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ve(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _s(Dt.bind(null, e, xe, qe), r);
            break;
          }
          Dt(e, xe, qe);
          break;
        case 5:
          Dt(e, xe, qe);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Ce(e, J()), e.callbackNode === n ? od.bind(null, e) : null;
}
function Zs(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Ji(e, t), e !== 2 && (t = xe, xe = n, t !== null && qs(t)), e;
}
function qs(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Om(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Ke(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function wt(e, t) {
  for (t &= ~Hl, t &= ~yo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ve(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function du(e) {
  if (F & 6) throw Error(j(327));
  Rn();
  var t = _i(e, 0);
  if (!(t & 1)) return Ce(e, J()), null;
  var n = Ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cs(e);
    r !== 0 && (t = r, n = Zs(e, r));
  }
  if (n === 1) throw n = Or, Kt(e, 0), wt(e, t), Ce(e, J()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, xe, qe), Ce(e, J()), null;
}
function Wl(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Mn = J() + 500, ho && At());
  }
}
function Xt(e) {
  St !== null && St.tag === 0 && !(F & 6) && Rn();
  var t = F;
  F |= 1;
  var n = Me.transition, r = A;
  try {
    if (Me.transition = null, A = 1, e) return e();
  } finally {
    A = r, Me.transition = n, F = t, !(F & 6) && At();
  }
}
function Ql() {
  Ne = Sn.current, B(Sn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sm(n)), X !== null) for (n = X.return; n !== null; ) {
    var r = n;
    switch (Pl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ai();
        break;
      case 3:
        In(), B(Ee), B(me), Ml();
        break;
      case 5:
        Fl(r);
        break;
      case 4:
        In();
        break;
      case 13:
        B(H);
        break;
      case 19:
        B(H);
        break;
      case 10:
        Tl(r.type._context);
        break;
      case 22:
      case 23:
        Ql();
    }
    n = n.return;
  }
  if (oe = e, X = e = Ot(e.current, null), ae = Ne = t, ee = 0, Or = null, Hl = yo = Jt = 0, xe = cr = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++) if (n = Vt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Vt = null;
  }
  return e;
}
function sd(e, t) {
  do {
    var n = X;
    try {
      if (Ol(), xi.current = Wi, Ki) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Ki = !1;
      }
      if (Gt = 0, re = q = K = null, ar = !1, Pr = 0, Vl.current = null, n === null || n.return === null) {
        ee = 1, Or = t, X = null;
        break;
      }
      e: {
        var o = e, s = n.return, l = n, a = t;
        if (t = ae, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = qa(s);
          if (h !== null) {
            h.flags &= -257, eu(h, s, l, o, t), h.mode & 1 && Za(o, u, t), t = h, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Za(o, u, t), Yl();
              break e;
            }
            a = Error(j(426));
          }
        } else if (V && l.mode & 1) {
          var S = qa(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), eu(S, s, l, o, t), Ll(Fn(a, l));
            break e;
          }
        }
        o = a = Fn(a, l), ee !== 4 && (ee = 2), cr === null ? cr = [o] : cr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Vf(o, a, t);
              Wa(o, m);
              break e;
            case 1:
              l = a;
              var g = o.type, w = o.stateNode;
              if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Lt === null || !Lt.has(w)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Hf(o, l, t);
                Wa(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ud(n);
    } catch (E) {
      t = E, X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ld() {
  var e = Qi.current;
  return Qi.current = Wi, e === null ? Wi : e;
}
function Yl() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), oe === null || !(Jt & 268435455) && !(yo & 268435455) || wt(oe, ae);
}
function Ji(e, t) {
  var n = F;
  F |= 2;
  var r = ld();
  (oe !== e || ae !== t) && (qe = null, Kt(e, t));
  do
    try {
      Tm();
      break;
    } catch (i) {
      sd(e, i);
    }
  while (!0);
  if (Ol(), F = n, Qi.current = r, X !== null) throw Error(j(261));
  return oe = null, ae = 0, ee;
}
function Tm() {
  for (; X !== null; ) ad(X);
}
function _m() {
  for (; X !== null && !rh(); ) ad(X);
}
function ad(e) {
  var t = fd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? ud(e) : X = t, Vl.current = null;
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Nm(n, t), n !== null) {
        n.flags &= 32767, X = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, X = null;
        return;
      }
    } else if (n = Cm(n, t, Ne), n !== null) {
      X = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Dt(e, t, n) {
  var r = A, i = Me.transition;
  try {
    Me.transition = null, A = 1, $m(e, t, n, r);
  } finally {
    Me.transition = i, A = r;
  }
  return null;
}
function $m(e, t, n, r) {
  do
    Rn();
  while (St !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (ph(e, o), e === oe && (X = oe = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ai || (ai = !0, dd(Ti, function() {
    return Rn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Me.transition, Me.transition = null;
    var s = A;
    A = 1;
    var l = F;
    F |= 4, Vl.current = null, Pm(e, n), rd(n, e), qh(Os), $i = !!Rs, Os = Rs = null, e.current = n, Lm(n), ih(), F = l, A = s, Me.transition = o;
  } else e.current = n;
  if (ai && (ai = !1, St = e, Gi = i), o = e.pendingLanes, o === 0 && (Lt = null), lh(n.stateNode), Ce(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Yi) throw Yi = !1, e = Js, Js = null, e;
  return Gi & 1 && e.tag !== 0 && Rn(), o = e.pendingLanes, o & 1 ? e === Xs ? fr++ : (fr = 0, Xs = e) : fr = 0, At(), null;
}
function Rn() {
  if (St !== null) {
    var e = Bc(Gi), t = Me.transition, n = A;
    try {
      if (Me.transition = null, A = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, Gi = 0, F & 6) throw Error(j(331));
        var i = F;
        for (F |= 4, O = e.current; O !== null; ) {
          var o = O, s = o.child;
          if (O.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, O = f;
                  else for (; O !== null; ) {
                    c = O;
                    var d = c.sibling, h = c.return;
                    if (ed(c), c === u) {
                      O = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = h, O = d;
                      break;
                    }
                    O = h;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    x.sibling = null, x = S;
                  } while (x !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, O = s;
          else e: for (; O !== null; ) {
            if (o = O, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ur(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, O = m;
              break e;
            }
            O = o.return;
          }
        }
        var g = e.current;
        for (O = g; O !== null; ) {
          s = O;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) w.return = s, O = w;
          else e: for (s = g; O !== null; ) {
            if (l = O, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  vo(9, l);
              }
            } catch (E) {
              Q(l, l.return, E);
            }
            if (l === s) {
              O = null;
              break e;
            }
            var y = l.sibling;
            if (y !== null) {
              y.return = l.return, O = y;
              break e;
            }
            O = l.return;
          }
        }
        if (F = i, At(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
          Xe.onPostCommitFiberRoot(ao, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Me.transition = t;
    }
  }
  return !1;
}
function pu(e, t, n) {
  t = Fn(n, t), t = Vf(e, t, 1), e = Pt(e, t, 1), t = ve(), e !== null && (br(e, 1, t), Ce(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) pu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
        e = Fn(n, e), e = Hf(t, e, 1), t = Pt(t, e, 1), e = ve(), t !== null && (br(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ae & n) === n && (ee === 4 || ee === 3 && (ae & 130023424) === ae && 500 > J() - Kl ? Kt(e, 0) : Hl |= n), Ce(e, t);
}
function cd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = ve();
  e = lt(e, t), e !== null && (br(e, t, n), Ce(e, n));
}
function Fm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function Mm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, km(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, V && t.flags & 1048576 && mf(t, Ui, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ei(e, t), e = t.pendingProps;
      var i = Tn(t, me.current);
      Ln(t, n), i = bl(null, t, r, e, i, n);
      var o = zl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, bi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $l(t), i.updater = go, t.stateNode = i, i._reactInternals = t, zs(t, r, e, n), t = Bs(null, t, r, !0, o, n)) : (t.tag = 0, V && o && jl(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ei(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = bm(r), e = Ue(r, e), i) {
          case 0:
            t = Ds(null, t, r, e, n);
            break e;
          case 1:
            t = ru(null, t, r, e, n);
            break e;
          case 11:
            t = tu(null, t, r, e, n);
            break e;
          case 14:
            t = nu(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ue(r, i), Ds(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ue(r, i), ru(e, t, r, i, n);
    case 3:
      e: {
        if (Yf(t), e === null) throw Error(j(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Sf(e, t), Vi(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Fn(Error(j(423)), t), t = iu(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Fn(Error(j(424)), t), t = iu(e, t, r, n, i);
          break e;
        } else for (je = jt(t.stateNode.containerInfo.firstChild), Le = t, V = !0, Be = null, n = wf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === i) {
            t = at(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ef(t), e === null && Ms(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Ts(r, i) ? s = null : o !== null && Ts(r, o) && (t.flags |= 32), Qf(e, t), ge(e, t, s, n), t.child;
    case 6:
      return e === null && Ms(t), null;
    case 13:
      return Gf(e, t, n);
    case 4:
      return Il(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ue(r, i), tu(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, U(Di, r._currentValue), r._currentValue = s, o !== null) if (Ke(o.value, s)) {
          if (o.children === i.children && !Ee.current) {
            t = at(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            s = o.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = it(-1, n & -n), a.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), As(
                  o.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(j(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), As(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        ge(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Ln(t, n), i = Ae(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ue(r, t.pendingProps), i = Ue(r.type, i), nu(e, t, r, i, n);
    case 15:
      return Kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ue(r, i), Ei(e, t), t.tag = 1, ke(r) ? (e = !0, bi(t)) : e = !1, Ln(t, n), Bf(t, r, i), zs(t, r, i, n), Bs(null, t, r, !0, e, n);
    case 19:
      return Jf(e, t, n);
    case 22:
      return Wf(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function dd(e, t) {
  return bc(e, t);
}
function Am(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Fe(e, t, n, r) {
  return new Am(e, t, n, r);
}
function Gl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return Gl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hl) return 11;
    if (e === ml) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ni(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") Gl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case fn:
      return Wt(n.children, i, o, t);
    case pl:
      s = 8, i |= 8;
      break;
    case us:
      return e = Fe(12, n, t, i | 2), e.elementType = us, e.lanes = o, e;
    case cs:
      return e = Fe(13, n, t, i), e.elementType = cs, e.lanes = o, e;
    case fs:
      return e = Fe(19, n, t, i), e.elementType = fs, e.lanes = o, e;
    case Sc:
      return wo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case wc:
          s = 10;
          break e;
        case xc:
          s = 9;
          break e;
        case hl:
          s = 11;
          break e;
        case ml:
          s = 14;
          break e;
        case gt:
          s = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = Fe(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Wt(e, t, n, r) {
  return e = Fe(7, e, r, t), e.lanes = n, e;
}
function wo(e, t, n, r) {
  return e = Fe(22, e, r, t), e.elementType = Sc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function qo(e, t, n) {
  return e = Fe(6, e, null, t), e.lanes = n, e;
}
function es(e, t, n) {
  return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Io(0), this.expirationTimes = Io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Io(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Jl(e, t, n, r, i, o, s, l, a) {
  return e = new zm(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Fe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(o), e;
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pd(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return pf(e, n, t);
  }
  return t;
}
function hd(e, t, n, r, i, o, s, l, a) {
  return e = Jl(n, r, !0, e, i, o, s, l, a), e.context = pd(null), n = e.current, r = ve(), i = Rt(n), o = it(r, i), o.callback = t ?? null, Pt(n, o, i), e.current.lanes = i, br(e, i, r), Ce(e, r), e;
}
function xo(e, t, n, r) {
  var i = t.current, o = ve(), s = Rt(i);
  return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = it(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pt(i, t, s), e !== null && (He(e, i, s, o), wi(e, i, s)), s;
}
function Xi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xl(e, t) {
  hu(e, t), (e = e.alternate) && hu(e, t);
}
function Dm() {
  return null;
}
var md = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zl(e) {
  this._internalRoot = e;
}
So.prototype.render = Zl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  xo(e, t, null, null);
};
So.prototype.unmount = Zl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function() {
      xo(null, e, null, null);
    }), t[st] = null;
  }
};
function So(e) {
  this._internalRoot = e;
}
So.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
    yt.splice(n, 0, e), n === 0 && Qc(e);
  }
};
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Eo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mu() {
}
function Bm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Xi(s);
        o.call(u);
      };
    }
    var s = hd(t, r, e, 0, null, !1, !1, "", mu);
    return e._reactRootContainer = s, e[st] = s.current, Er(e.nodeType === 8 ? e.parentNode : e), Xt(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Xi(a);
      l.call(u);
    };
  }
  var a = Jl(e, 0, !1, null, null, !1, !1, "", mu);
  return e._reactRootContainer = a, e[st] = a.current, Er(e.nodeType === 8 ? e.parentNode : e), Xt(function() {
    xo(t, a, n, r);
  }), a;
}
function ko(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = Xi(s);
        l.call(a);
      };
    }
    xo(t, s, e, i);
  } else s = Bm(n, t, e, i, r);
  return Xi(s);
}
Vc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (yl(t, n | 1), Ce(t, J()), !(F & 6) && (Mn = J() + 500, At()));
      }
      break;
    case 13:
      Xt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var i = ve();
          He(r, e, 1, i);
        }
      }), Xl(e, 1);
  }
};
wl = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = ve();
      He(t, e, 134217728, n);
    }
    Xl(e, 134217728);
  }
};
Hc = function(e) {
  if (e.tag === 13) {
    var t = Rt(e), n = lt(e, t);
    if (n !== null) {
      var r = ve();
      He(n, e, t, r);
    }
    Xl(e, t);
  }
};
Kc = function() {
  return A;
};
Wc = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Ss = function(e, t, n) {
  switch (t) {
    case "input":
      if (hs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = po(r);
            if (!i) throw Error(j(90));
            kc(r), hs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      t = n.value, t != null && Cn(e, !!n.multiple, t, !1);
  }
};
_c = Wl;
$c = Xt;
var Vm = { usingClientEntryPoint: !1, Events: [Ur, mn, po, Oc, Tc, Wl] }, Yn = { findFiberByHostInstance: Bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hm = { bundleType: Yn.bundleType, version: Yn.version, rendererPackageName: Yn.rendererPackageName, rendererConfig: Yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yn.findFiberByHostInstance || Dm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber) try {
    ao = ui.inject(Hm), Xe = ui;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ql(t)) throw Error(j(200));
  return Um(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!ql(e)) throw Error(j(299));
  var n = !1, r = "", i = md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Jl(e, 1, !1, null, null, n, !1, r, i), e[st] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new Zl(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Mc(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return Xt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!Eo(t)) throw Error(j(200));
  return ko(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!ql(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = md;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = hd(t, null, e, 1, n ?? null, i, !1, o, s), e[st] = t.current, Er(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new So(t);
};
Oe.render = function(e, t, n) {
  if (!Eo(t)) throw Error(j(200));
  return ko(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!Eo(e)) throw Error(j(40));
  return e._reactRootContainer ? (Xt(function() {
    ko(null, null, e, !1, function() {
      e._reactRootContainer = null, e[st] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = Wl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Eo(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return ko(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function gd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd);
    } catch (e) {
      console.error(e);
    }
}
gd(), mc.exports = Oe;
var Km = mc.exports, vd, gu = Km;
vd = gu.createRoot, gu.hydrateRoot;
var yd = { exports: {} }, wd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = C;
function Wm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qm = typeof Object.is == "function" ? Object.is : Wm, Ym = Br.useSyncExternalStore, Gm = Br.useRef, Jm = Br.useEffect, Xm = Br.useMemo, Zm = Br.useDebugValue;
wd.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = Gm(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = Xm(function() {
    function a(h) {
      if (!u) {
        if (u = !0, c = h, h = r(h), i !== void 0 && s.hasValue) {
          var v = s.value;
          if (i(v, h)) return f = v;
        }
        return f = h;
      }
      if (v = f, Qm(c, h)) return v;
      var x = r(h);
      return i !== void 0 && i(v, x) ? v : (c = h, f = x);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, d === null ? void 0 : function() {
      return a(d());
    }];
  }, [t, n, r, i]);
  var l = Ym(e, o[0], o[1]);
  return Jm(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), Zm(l), l;
};
yd.exports = wd;
var qm = yd.exports, Pe = (
  // prettier-ignore
  // @ts-ignore
  "default" in ls ? he : ls
), vu = Symbol.for("react-redux-context"), yu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function eg() {
  if (!Pe.createContext)
    return {};
  const e = yu[vu] ?? (yu[vu] = /* @__PURE__ */ new Map());
  let t = e.get(Pe.createContext);
  return t || (t = Pe.createContext(
    null
  ), e.set(Pe.createContext, t)), t;
}
var It = /* @__PURE__ */ eg(), tg = () => {
  throw new Error("uSES not initialized!");
};
function ea(e = It) {
  return function() {
    return Pe.useContext(e);
  };
}
var xd = /* @__PURE__ */ ea(), Sd = tg, ng = (e) => {
  Sd = e;
}, rg = (e, t) => e === t;
function ig(e = It) {
  const t = e === It ? xd : ea(e), n = (r, i = {}) => {
    const { equalityFn: o = rg, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i, {
      store: l,
      subscription: a,
      getServerState: u,
      stabilityCheck: c,
      identityFunctionCheck: f
    } = t();
    Pe.useRef(!0);
    const d = Pe.useCallback(
      {
        [r.name](v) {
          return r(v);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), h = Sd(
      a.addNestedSub,
      l.getState,
      u || l.getState,
      d,
      o
    );
    return Pe.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ct = /* @__PURE__ */ ig();
function og(e) {
  e();
}
function sg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      og(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var wu = {
  notify() {
  },
  get: () => []
};
function lg(e, t) {
  let n, r = wu, i = 0, o = !1;
  function s(x) {
    c();
    const S = r.subscribe(x);
    let m = !1;
    return () => {
      m || (m = !0, S(), f());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || (n = e.subscribe(a), r = sg());
  }
  function f() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = wu);
  }
  function d() {
    o || (o = !0, c());
  }
  function h() {
    o && (o = !1, f());
  }
  const v = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return v;
}
var ag = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ug = typeof navigator < "u" && navigator.product === "ReactNative", cg = ag || ug ? Pe.useLayoutEffect : Pe.useEffect;
function fg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = Pe.useMemo(() => {
    const u = lg(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), l = Pe.useMemo(() => e.getState(), [e]);
  cg(() => {
    const { subscription: u } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), l !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, l]);
  const a = t || It;
  return /* @__PURE__ */ Pe.createElement(a.Provider, { value: s }, n);
}
var dg = fg;
function Ed(e = It) {
  const t = e === It ? xd : (
    // @ts-ignore
    ea(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var pg = /* @__PURE__ */ Ed();
function hg(e = It) {
  const t = e === It ? pg : Ed(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Vr = /* @__PURE__ */ hg();
ng(qm.useSyncExternalStoreWithSelector);
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
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
var Et;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Et || (Et = {}));
const xu = "popstate";
function mg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: l
    } = r.location;
    return el(
      "",
      {
        pathname: o,
        search: s,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Zi(i);
  }
  return vg(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function kd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function gg() {
  return Math.random().toString(36).substr(2, 8);
}
function Su(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function el(e, t, n, r) {
  return n === void 0 && (n = null), Tr({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Un(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || gg()
  });
}
function Zi(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function vg(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, l = Et.Pop, a = null, u = c();
  u == null && (u = 0, s.replaceState(Tr({}, s.state, {
    idx: u
  }), ""));
  function c() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function f() {
    l = Et.Pop;
    let S = c(), m = S == null ? null : S - u;
    u = S, a && a({
      action: l,
      location: x.location,
      delta: m
    });
  }
  function d(S, m) {
    l = Et.Push;
    let g = el(x.location, S, m);
    u = c() + 1;
    let w = Su(g, u), y = x.createHref(g);
    try {
      s.pushState(w, "", y);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError")
        throw E;
      i.location.assign(y);
    }
    o && a && a({
      action: l,
      location: x.location,
      delta: 1
    });
  }
  function h(S, m) {
    l = Et.Replace;
    let g = el(x.location, S, m);
    u = c();
    let w = Su(g, u), y = x.createHref(g);
    s.replaceState(w, "", y), o && a && a({
      action: l,
      location: x.location,
      delta: 0
    });
  }
  function v(S) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href, g = typeof S == "string" ? S : Zi(S);
    return g = g.replace(/ $/, "%20"), Z(m, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, m);
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(xu, f), a = S, () => {
        i.removeEventListener(xu, f), a = null;
      };
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: v,
    encodeLocation(S) {
      let m = v(S);
      return {
        pathname: m.pathname,
        search: m.search,
        hash: m.hash
      };
    },
    push: d,
    replace: h,
    go(S) {
      return s.go(S);
    }
  };
  return x;
}
var Eu;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Eu || (Eu = {}));
function yg(e, t, n) {
  return n === void 0 && (n = "/"), wg(e, t, n, !1);
}
function wg(e, t, n, r) {
  let i = typeof t == "string" ? Un(t) : t, o = ta(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = Cd(e);
  xg(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = Tg(o);
    l = Rg(s[a], u, r);
  }
  return l;
}
function Cd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    a.relativePath.startsWith("/") && (Z(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let u = Tt([r, a.relativePath]), c = n.concat(a);
    o.children && o.children.length > 0 && (Z(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), Cd(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: Pg(u, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, s) => {
    var l;
    if (o.path === "" || !((l = o.path) != null && l.includes("?")))
      i(o, s);
    else
      for (let a of Nd(o.path))
        i(o, s, a);
  }), t;
}
function Nd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = Nd(r.join("/")), l = [];
  return l.push(...s.map((a) => a === "" ? o : [o, a].join("/"))), i && l.push(...s), l.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function xg(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Lg(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Sg = /^:[\w-]+$/, Eg = 3, kg = 2, Cg = 1, Ng = 10, jg = -2, ku = (e) => e === "*";
function Pg(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ku) && (r += jg), t && (r += kg), n.filter((i) => !ku(i)).reduce((i, o) => i + (Sg.test(o) ? Eg : o === "" ? Cg : Ng), r);
}
function Lg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Rg(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l], u = l === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", f = Cu({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: u
    }, c), d = a.route;
    if (!f && u && n && !r[r.length - 1].route.index && (f = Cu({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: !1
    }, c)), !f)
      return null;
    Object.assign(i, f.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Tt([o, f.pathname]),
      pathnameBase: Fg(Tt([o, f.pathnameBase])),
      route: d
    }), f.pathnameBase !== "/" && (o = Tt([o, f.pathnameBase]));
  }
  return s;
}
function Cu(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Og(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let {
        paramName: d,
        isOptional: h
      } = c;
      if (d === "*") {
        let x = l[f] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[f];
      return h && !v ? u[d] = void 0 : u[d] = (v || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function Og(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), kd(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
    paramName: l,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Tg(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return kd(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ta(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function _g(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Un(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : $g(n, t) : t,
    search: Mg(r),
    hash: Ag(i)
  };
}
function $g(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function ts(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ig(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function jd(e, t) {
  let n = Ig(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Pd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Un(e) : (i = Tr({}, e), Z(!i.pathname || !i.pathname.includes("?"), ts("?", "pathname", "search", i)), Z(!i.pathname || !i.pathname.includes("#"), ts("#", "pathname", "hash", i)), Z(!i.search || !i.search.includes("#"), ts("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, l;
  if (s == null)
    l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = _g(i, l), u = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Tt = (e) => e.join("/").replace(/\/\/+/g, "/"), Fg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Mg = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ag = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function bg(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Ld = ["post", "put", "patch", "delete"];
new Set(Ld);
const zg = ["get", ...Ld];
new Set(zg);
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
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(this, arguments);
}
const na = /* @__PURE__ */ C.createContext(null), Ug = /* @__PURE__ */ C.createContext(null), nn = /* @__PURE__ */ C.createContext(null), Co = /* @__PURE__ */ C.createContext(null), rn = /* @__PURE__ */ C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Rd = /* @__PURE__ */ C.createContext(null);
function Dg(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Hr() || Z(!1);
  let {
    basename: r,
    navigator: i
  } = C.useContext(nn), {
    hash: o,
    pathname: s,
    search: l
  } = Td(e, {
    relative: n
  }), a = s;
  return r !== "/" && (a = s === "/" ? r : Tt([r, s])), i.createHref({
    pathname: a,
    search: l,
    hash: o
  });
}
function Hr() {
  return C.useContext(Co) != null;
}
function No() {
  return Hr() || Z(!1), C.useContext(Co).location;
}
function Od(e) {
  C.useContext(nn).static || C.useLayoutEffect(e);
}
function Kr() {
  let {
    isDataRoute: e
  } = C.useContext(rn);
  return e ? e1() : Bg();
}
function Bg() {
  Hr() || Z(!1);
  let e = C.useContext(na), {
    basename: t,
    future: n,
    navigator: r
  } = C.useContext(nn), {
    matches: i
  } = C.useContext(rn), {
    pathname: o
  } = No(), s = JSON.stringify(jd(i, n.v7_relativeSplatPath)), l = C.useRef(!1);
  return Od(() => {
    l.current = !0;
  }), C.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), !l.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let f = Pd(u, JSON.parse(s), o, c.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Tt([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c);
  }, [t, r, s, o, e]);
}
function Td(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = C.useContext(nn), {
    matches: i
  } = C.useContext(rn), {
    pathname: o
  } = No(), s = JSON.stringify(jd(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Pd(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Vg(e, t) {
  return Hg(e, t);
}
function Hg(e, t, n, r) {
  Hr() || Z(!1);
  let {
    navigator: i
  } = C.useContext(nn), {
    matches: o
  } = C.useContext(rn), s = o[o.length - 1], l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = No(), c;
  if (t) {
    var f;
    let S = typeof t == "string" ? Un(t) : t;
    a === "/" || (f = S.pathname) != null && f.startsWith(a) || Z(!1), c = S;
  } else
    c = u;
  let d = c.pathname || "/", h = d;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let v = yg(e, {
    pathname: h
  }), x = Gg(v && v.map((S) => Object.assign({}, S, {
    params: Object.assign({}, l, S.params),
    pathname: Tt([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname
    ]),
    pathnameBase: S.pathnameBase === "/" ? a : Tt([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase
    ])
  })), o, n, r);
  return t && x ? /* @__PURE__ */ C.createElement(Co.Provider, {
    value: {
      location: _r({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: Et.Pop
    }
  }, x) : x;
}
function Kg() {
  let e = qg(), t = bg(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ C.createElement("pre", {
    style: i
  }, n) : null, null);
}
const Wg = /* @__PURE__ */ C.createElement(Kg, null);
class Qg extends C.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ C.createElement(rn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ C.createElement(Rd.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Yg(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = C.useContext(na);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ C.createElement(rn.Provider, {
    value: t
  }, r);
}
function Gg(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let s = e, l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    c >= 0 || Z(!1), s = s.slice(0, Math.min(s.length, c + 1));
  }
  let a = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let {
          loaderData: d,
          errors: h
        } = n, v = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
        if (f.route.lazy || v) {
          a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let h, v = !1, x = null, S = null;
    n && (h = l && f.route.id ? l[f.route.id] : void 0, x = f.route.errorElement || Wg, a && (u < 0 && d === 0 ? (v = !0, S = null) : u === d && (v = !0, S = f.route.hydrateFallbackElement || null)));
    let m = t.concat(s.slice(0, d + 1)), g = () => {
      let w;
      return h ? w = x : v ? w = S : f.route.Component ? w = /* @__PURE__ */ C.createElement(f.route.Component, null) : f.route.element ? w = f.route.element : w = c, /* @__PURE__ */ C.createElement(Yg, {
        match: f,
        routeContext: {
          outlet: c,
          matches: m,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? /* @__PURE__ */ C.createElement(Qg, {
      location: n.location,
      revalidation: n.revalidation,
      component: x,
      error: h,
      children: g(),
      routeContext: {
        outlet: null,
        matches: m,
        isDataRoute: !0
      }
    }) : g();
  }, null);
}
var _d = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(_d || {}), qi = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(qi || {});
function Jg(e) {
  let t = C.useContext(na);
  return t || Z(!1), t;
}
function Xg(e) {
  let t = C.useContext(Ug);
  return t || Z(!1), t;
}
function Zg(e) {
  let t = C.useContext(rn);
  return t || Z(!1), t;
}
function $d(e) {
  let t = Zg(), n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function qg() {
  var e;
  let t = C.useContext(Rd), n = Xg(qi.UseRouteError), r = $d(qi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function e1() {
  let {
    router: e
  } = Jg(_d.UseNavigateStable), t = $d(qi.UseNavigateStable), n = C.useRef(!1);
  return Od(() => {
    n.current = !0;
  }), C.useCallback(function(i, o) {
    o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, _r({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function mt(e) {
  Z(!1);
}
function t1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Et.Pop,
    navigator: o,
    static: s = !1,
    future: l
  } = e;
  Hr() && Z(!1);
  let a = t.replace(/^\/*/, "/"), u = C.useMemo(() => ({
    basename: a,
    navigator: o,
    static: s,
    future: _r({
      v7_relativeSplatPath: !1
    }, l)
  }), [a, l, o, s]);
  typeof r == "string" && (r = Un(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: d = "",
    state: h = null,
    key: v = "default"
  } = r, x = C.useMemo(() => {
    let S = ta(c, a);
    return S == null ? null : {
      location: {
        pathname: S,
        search: f,
        hash: d,
        state: h,
        key: v
      },
      navigationType: i
    };
  }, [a, c, f, d, h, v, i]);
  return x == null ? null : /* @__PURE__ */ C.createElement(nn.Provider, {
    value: u
  }, /* @__PURE__ */ C.createElement(Co.Provider, {
    children: n,
    value: x
  }));
}
function n1(e) {
  let {
    children: t,
    location: n
  } = e;
  return Vg(tl(t), n);
}
new Promise(() => {
});
function tl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return C.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ C.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === C.Fragment) {
      n.push.apply(n, tl(r.props.children, o));
      return;
    }
    r.type !== mt && Z(!1), !r.props.index || !r.props.children || Z(!1);
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = tl(r.props.children, o)), n.push(s);
  }), n;
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
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nl.apply(this, arguments);
}
function r1(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function i1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function o1(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !i1(e);
}
const s1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], l1 = "6";
try {
  window.__reactRouterVersion = l1;
} catch {
}
const a1 = "startTransition", Nu = ls[a1];
function u1(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = C.useRef();
  o.current == null && (o.current = mg({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [l, a] = C.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: u
  } = r || {}, c = C.useCallback((f) => {
    u && Nu ? Nu(() => a(f)) : a(f);
  }, [a, u]);
  return C.useLayoutEffect(() => s.listen(c), [s, c]), /* @__PURE__ */ C.createElement(t1, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: s,
    future: r
  });
}
const c1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ie = /* @__PURE__ */ C.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: l,
    target: a,
    to: u,
    preventScrollReset: c,
    unstable_viewTransition: f
  } = t, d = r1(t, s1), {
    basename: h
  } = C.useContext(nn), v, x = !1;
  if (typeof u == "string" && f1.test(u) && (v = u, c1))
    try {
      let w = new URL(window.location.href), y = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u), E = ta(y.pathname, h);
      y.origin === w.origin && E != null ? u = E + y.search + y.hash : x = !0;
    } catch {
    }
  let S = Dg(u, {
    relative: i
  }), m = d1(u, {
    replace: s,
    state: l,
    target: a,
    preventScrollReset: c,
    relative: i,
    unstable_viewTransition: f
  });
  function g(w) {
    r && r(w), w.defaultPrevented || m(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ C.createElement("a", nl({}, d, {
      href: v || S,
      onClick: x || o ? r : g,
      ref: n,
      target: a
    }))
  );
});
var ju;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ju || (ju = {}));
var Pu;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Pu || (Pu = {}));
function d1(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, a = Kr(), u = No(), c = Td(e, {
    relative: s
  });
  return C.useCallback((f) => {
    if (o1(f, n)) {
      f.preventDefault();
      let d = r !== void 0 ? r : Zi(u) === Zi(c);
      a(e, {
        replace: d,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: l
      });
    }
  }, [u, a, c, r, i, n, e, o, s, l]);
}
var p1 = {
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
const h1 = /* @__PURE__ */ so(p1);
var m1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Lu(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (h1[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var i = new RegExp(m1), o = null; (o = i.exec(e)) !== null; ) if (o[0].trim()) if (o[1]) {
    var s = o[1].trim(), l = [s, ""];
    s.indexOf("=") > -1 && (l = s.split("=")), t.attrs[l[0]] = l[1], i.lastIndex--;
  } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
  return t;
}
var g1 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, v1 = /^\s*$/, y1 = /* @__PURE__ */ Object.create(null);
function Id(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var r = [];
        for (var i in n) r.push(i + '="' + n[i] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Id, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var w1 = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = y1);
  var n, r = [], i = [], o = -1, s = !1;
  if (e.indexOf("<") !== 0) {
    var l = e.indexOf("<");
    r.push({ type: "text", content: l === -1 ? e : e.substring(0, l) });
  }
  return e.replace(g1, function(a, u) {
    if (s) {
      if (a !== "</" + n.name + ">") return;
      s = !1;
    }
    var c, f = a.charAt(1) !== "/", d = a.startsWith("<!--"), h = u + a.length, v = e.charAt(h);
    if (d) {
      var x = Lu(a);
      return o < 0 ? (r.push(x), r) : ((c = i[o]).children.push(x), r);
    }
    if (f && (o++, (n = Lu(a)).type === "tag" && t.components[n.name] && (n.type = "component", s = !0), n.voidElement || s || !v || v === "<" || n.children.push({ type: "text", content: e.slice(h, e.indexOf("<", h)) }), o === 0 && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!f || n.voidElement) && (o > -1 && (n.voidElement || n.name === a.slice(2, -1)) && (o--, n = o === -1 ? r : i[o]), !s && v !== "<" && v)) {
      c = o === -1 ? r : i[o].children;
      var S = e.indexOf("<", h), m = e.slice(h, S === -1 ? void 0 : S);
      v1.test(m) && (m = " "), (S > -1 && o + c.length >= 0 || m !== " ") && c.push({ type: "text", content: m });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Id("", n);
  }, "");
} };
function ji() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ru = {};
function eo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Ru[t[0]] || (typeof t[0] == "string" && (Ru[t[0]] = /* @__PURE__ */ new Date()), ji(...t));
}
const Fd = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Ou(e, t, n) {
  e.loadNamespaces(t, Fd(e, n));
}
function Tu(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Fd(e, r));
}
function x1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (l, a) => {
    const u = t.services.backendConnector.state[`${l}|${a}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function S1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (eo("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e)) return !1;
    }
  }) : x1(e, t, n);
}
const E1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, k1 = {
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
}, C1 = (e) => k1[e], N1 = (e) => e.replace(E1, C1);
let rl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: N1
};
function j1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  rl = {
    ...rl,
    ...e
  };
}
function Md() {
  return rl;
}
let Ad;
function P1(e) {
  Ad = e;
}
function ra() {
  return Ad;
}
function ns(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function rs(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? En(t) : t;
}
function L1(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every((t) => C.isValidElement(t));
}
function En(e) {
  return Array.isArray(e) ? e : [e];
}
function R1(e, t) {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}
function bd(e, t) {
  if (!e) return "";
  let n = "";
  const r = En(e), i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return r.forEach((o, s) => {
    if (typeof o == "string")
      n += `${o}`;
    else if (C.isValidElement(o)) {
      const l = Object.keys(o.props).length, a = i.indexOf(o.type) > -1, u = o.props.children;
      if (!u && a && l === 0)
        n += `<${o.type}/>`;
      else if (!u && (!a || l !== 0))
        n += `<${s}></${s}>`;
      else if (o.props.i18nIsDynamicList)
        n += `<${s}></${s}>`;
      else if (a && l === 1 && typeof u == "string")
        n += `<${o.type}>${u}</${o.type}>`;
      else {
        const c = bd(u, t);
        n += `<${s}>${c}</${s}>`;
      }
    } else if (o === null)
      ji("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof o == "object") {
      const {
        format: l,
        ...a
      } = o, u = Object.keys(a);
      if (u.length === 1) {
        const c = l ? `${u[0]}, ${l}` : u[0];
        n += `{{${c}}}`;
      } else
        ji("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o);
    } else
      ji("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o);
  }), n;
}
function O1(e, t, n, r, i, o) {
  if (t === "") return [];
  const s = r.transKeepBasicHtmlNodesFor || [], l = t && new RegExp(s.map((S) => `<${S}`).join("|")).test(t);
  if (!e && !l && !o) return [t];
  const a = {};
  function u(S) {
    En(S).forEach((g) => {
      typeof g != "string" && (ns(g) ? u(rs(g)) : typeof g == "object" && !C.isValidElement(g) && Object.assign(a, g));
    });
  }
  u(e);
  const c = w1.parse(`<0>${t}</0>`), f = {
    ...a,
    ...i
  };
  function d(S, m, g) {
    const w = rs(S), y = v(w, m.children, g);
    return L1(w) && y.length === 0 || S.props && S.props.i18nIsDynamicList ? w : y;
  }
  function h(S, m, g, w, y) {
    S.dummy ? (S.children = m, g.push(C.cloneElement(S, {
      key: w
    }, y ? void 0 : m))) : g.push(...C.Children.map([S], (E) => {
      const k = {
        ...E.props
      };
      return delete k.i18nIsDynamicList, C.createElement(E.type, {
        ...k,
        key: w,
        ref: E.ref
      }, y ? null : m);
    }));
  }
  function v(S, m, g) {
    const w = En(S);
    return En(m).reduce((E, k, N) => {
      const P = k.children && k.children[0] && k.children[0].content && n.services.interpolator.interpolate(k.children[0].content, f, n.language);
      if (k.type === "tag") {
        let _ = w[parseInt(k.name, 10)];
        g.length === 1 && !_ && (_ = g[0][k.name]), _ || (_ = {});
        const R = Object.keys(k.attrs).length !== 0 ? R1({
          props: k.attrs
        }, _) : _, M = C.isValidElement(R), Y = M && ns(k, !0) && !k.voidElement, te = l && typeof R == "object" && R.dummy && !M, se = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, k.name);
        if (typeof R == "string") {
          const b = n.services.interpolator.interpolate(R, f, n.language);
          E.push(b);
        } else if (ns(R) || Y) {
          const b = d(R, k, g);
          h(R, b, E, N);
        } else if (te) {
          const b = v(w, k.children, g);
          h(R, b, E, N);
        } else if (Number.isNaN(parseFloat(k.name)))
          if (se) {
            const b = d(R, k, g);
            h(R, b, E, N, k.voidElement);
          } else if (r.transSupportBasicHtmlNodes && s.indexOf(k.name) > -1)
            if (k.voidElement)
              E.push(C.createElement(k.name, {
                key: `${k.name}-${N}`
              }));
            else {
              const b = v(w, k.children, g);
              E.push(C.createElement(k.name, {
                key: `${k.name}-${N}`
              }, b));
            }
          else if (k.voidElement)
            E.push(`<${k.name} />`);
          else {
            const b = v(w, k.children, g);
            E.push(`<${k.name}>${b}</${k.name}>`);
          }
        else if (typeof R == "object" && !M) {
          const b = k.children[0] ? P : null;
          b && E.push(b);
        } else
          h(R, P, E, N, k.children.length !== 1 || !P);
      } else if (k.type === "text") {
        const _ = r.transWrapTextNodes, R = o ? r.unescape(n.services.interpolator.interpolate(k.content, f, n.language)) : n.services.interpolator.interpolate(k.content, f, n.language);
        _ ? E.push(C.createElement(_, {
          key: `${k.name}-${N}`
        }, R)) : E.push(R);
      }
      return E;
    }, []);
  }
  const x = v([{
    dummy: !0,
    children: e || []
  }], c, En(e || []));
  return rs(x[0]);
}
function T1(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: l,
    defaults: a,
    components: u,
    ns: c,
    i18n: f,
    t: d,
    shouldUnescape: h,
    ...v
  } = e;
  const x = f || ra();
  if (!x)
    return eo("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const S = d || x.t.bind(x) || ((Y) => Y), m = {
    ...Md(),
    ...x.options && x.options.react
  };
  let g = c || S.ns || x.options && x.options.defaultNS;
  g = typeof g == "string" ? [g] : g || ["translation"];
  const w = bd(t, m), y = a || w || m.transEmptyNodeValue || i, {
    hashTransKey: E
  } = m, k = i || (E ? E(w || y) : w || y);
  x.options && x.options.interpolation && x.options.interpolation.defaultVariables && (l = l && Object.keys(l).length > 0 ? {
    ...l,
    ...x.options.interpolation.defaultVariables
  } : {
    ...x.options.interpolation.defaultVariables
  });
  const N = l || n !== void 0 || !t ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, P = {
    ...s,
    context: o || s.context,
    count: n,
    ...l,
    ...N,
    defaultValue: y,
    ns: g
  }, _ = k ? S(k, P) : y;
  u && Object.keys(u).forEach((Y) => {
    const te = u[Y];
    if (typeof te.type == "function" || !te.props || !te.props.children || _.indexOf(`${Y}/>`) < 0 && _.indexOf(`${Y} />`) < 0) return;
    function se() {
      return C.createElement(C.Fragment, null, te);
    }
    u[Y] = C.createElement(se);
  });
  const R = O1(u || t, _, x, m, P, h), M = r !== void 0 ? r : m.defaultTransParent;
  return M ? C.createElement(M, v, R) : R;
}
const _1 = {
  type: "3rdParty",
  init(e) {
    j1(e.options.react), P1(e);
  }
}, zd = C.createContext();
class $1 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function tt(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: l,
    defaults: a,
    components: u,
    ns: c,
    i18n: f,
    t: d,
    shouldUnescape: h,
    ...v
  } = e;
  const {
    i18n: x,
    defaultNS: S
  } = C.useContext(zd) || {}, m = f || x || ra(), g = d || m && m.t.bind(m);
  return T1({
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s,
    values: l,
    defaults: a,
    components: u,
    ns: c || g && g.ns || S || m && m.options && m.options.defaultNS,
    i18n: m,
    t: d,
    shouldUnescape: h,
    ...v
  });
}
const I1 = (e, t) => {
  const n = C.useRef();
  return C.useEffect(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function Ud(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function F1(e, t, n, r) {
  return C.useCallback(Ud(e, t, n, r), [e, t, n, r]);
}
function ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = C.useContext(zd) || {}, o = n || r || ra();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new $1()), !o) {
    eo("You will need to pass in an i18next instance by using initReactI18next");
    const y = (k, N) => typeof N == "string" ? N : N && typeof N == "object" && typeof N.defaultValue == "string" ? N.defaultValue : Array.isArray(k) ? k[k.length - 1] : k, E = [y, {}, !1];
    return E.t = y, E.i18n = {}, E.ready = !1, E;
  }
  o.options.react && o.options.react.wait !== void 0 && eo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Md(),
    ...o.options.react,
    ...t
  }, {
    useSuspense: l,
    keyPrefix: a
  } = s;
  let u = i || o.options && o.options.defaultNS;
  u = typeof u == "string" ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(u);
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((y) => S1(y, o, s)), f = F1(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], a), d = () => f, h = () => Ud(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], a), [v, x] = C.useState(d);
  let S = u.join();
  t.lng && (S = `${t.lng}${S}`);
  const m = I1(S), g = C.useRef(!0);
  C.useEffect(() => {
    const {
      bindI18n: y,
      bindI18nStore: E
    } = s;
    g.current = !0, !c && !l && (t.lng ? Tu(o, t.lng, u, () => {
      g.current && x(h);
    }) : Ou(o, u, () => {
      g.current && x(h);
    })), c && m && m !== S && g.current && x(h);
    function k() {
      g.current && x(h);
    }
    return y && o && o.on(y, k), E && o && o.store.on(E, k), () => {
      g.current = !1, y && o && y.split(" ").forEach((N) => o.off(N, k)), E && o && E.split(" ").forEach((N) => o.store.off(N, k));
    };
  }, [o, S]), C.useEffect(() => {
    g.current && c && x(d);
  }, [o, a, c]);
  const w = [v, o, c];
  if (w.t = v, w.i18n = o, w.ready = c, c || !c && !l) return w;
  throw new Promise((y) => {
    t.lng ? Tu(o, t.lng, u, () => y()) : Ou(o, u, () => y());
  });
}
const M1 = "Management", A1 = "Comment", b1 = "Login", z1 = "Logout", U1 = "Register", D1 = "Email", B1 = "Password", V1 = "Nickname", H1 = "Personal Website", K1 = "Setting", W1 = "Profile", Q1 = "Homepage", Y1 = "All", G1 = "Mine", J1 = "Approved", X1 = "Waiting", Z1 = "Spam", q1 = "Sticky", e0 = "Edit", t0 = "Reply", n0 = "Action", r0 = "Filter", i0 = "Author", o0 = "Content", s0 = "Username", l0 = "Submit", a0 = "Cancel", u0 = "At", c0 = "Migration", f0 = "Exporting…", d0 = "Under verification", p0 = "Administrator", h0 = "Guest", m0 = "User", g0 = "Role", ci = {
  management: M1,
  comment: A1,
  login: b1,
  logout: z1,
  register: U1,
  email: D1,
  password: B1,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: V1,
  website: H1,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: K1,
  profile: W1,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: Q1,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: Y1,
  mine: G1,
  approved: J1,
  "approved button": "Approved",
  waiting: X1,
  spam: Z1,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: q1,
  edit: e0,
  reply: t0,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: n0,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: r0,
  author: i0,
  content: o0,
  username: s0,
  submit: l0,
  cancel: a0,
  at: u0,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: c0,
  exporting: f0,
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
  verify: d0,
  administrator: p0,
  guest: h0,
  user: m0,
  "manage users": "Manage Users",
  role: g0,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, v0 = "管理", y0 = "评论", w0 = "登录", x0 = "登出", S0 = "用户注册", E0 = "邮箱", k0 = "密码", C0 = "昵称", N0 = "个人网站", j0 = "个人设置", P0 = "个人资料", L0 = "个人主页地址", R0 = "所有", O0 = "我的", T0 = "已通过", _0 = "待审核", $0 = "垃圾", I0 = "置顶评论", F0 = "编辑", M0 = "回复", A0 = "操作", b0 = "筛选", z0 = "作者", U0 = "内容", D0 = "用户名", B0 = "提交", V0 = "取消", H0 = "于", K0 = "导入导出", W0 = "导出中...", Q0 = "待认证", Y0 = "管理员", G0 = "普通用户", J0 = "用户", X0 = "角色", _u = {
  management: v0,
  comment: y0,
  login: w0,
  logout: x0,
  register: S0,
  email: E0,
  password: k0,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: C0,
  website: N0,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: j0,
  profile: P0,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: L0,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: R0,
  mine: O0,
  approved: T0,
  "approved button": "通过",
  waiting: _0,
  spam: $0,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: I0,
  edit: F0,
  reply: M0,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: A0,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: b0,
  author: z0,
  content: U0,
  username: D0,
  submit: B0,
  cancel: V0,
  at: H0,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: K0,
  exporting: W0,
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
  verify: Q0,
  administrator: Y0,
  guest: G0,
  user: J0,
  "manage users": "管理用户",
  role: X0,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, Z0 = "管理", q0 = "留言", ev = "登入", tv = "登出", nv = "使用者註冊", rv = "信箱", iv = "密碼", ov = "暱稱", sv = "個人網站", lv = "個人設定", av = "個人資料", uv = "個人首頁網址", cv = "所有", fv = "我的", dv = "已通過", pv = "待審核", hv = "垃圾", mv = "置頂留言", gv = "編輯", vv = "回覆", yv = "動作", wv = "篩選", xv = "作者", Sv = "內容", Ev = "使用者名稱", kv = "送出", Cv = "取消", Nv = "於", jv = "匯入匯出", Pv = "匯出中...", Lv = "待認證", Rv = "管理員", Ov = "使用者", Tv = "使用者", _v = "角色", $v = {
  management: Z0,
  comment: q0,
  login: ev,
  logout: tv,
  register: nv,
  email: rv,
  password: iv,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: ov,
  website: sv,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: lv,
  profile: av,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: uv,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: cv,
  mine: fv,
  approved: dv,
  "approved button": "通過",
  waiting: pv,
  spam: hv,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: mv,
  edit: gv,
  reply: vv,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: yv,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: wv,
  author: xv,
  content: Sv,
  username: Ev,
  submit: kv,
  cancel: Cv,
  at: Nv,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: jv,
  exporting: Pv,
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
  verify: Lv,
  administrator: Rv,
  guest: Ov,
  user: Tv,
  "manage users": "使用者管理",
  role: _v,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, $u = [
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
], Iv = {
  "zh-cn": { translations: _u },
  "zh-CN": { translations: _u },
  en: { translations: ci },
  "en-US": { translations: ci },
  "zh-TW": { translations: $v },
  jp: { translations: ci },
  "jp-JP": { translations: ci }
};
function on() {
  const e = Vr(), t = Kr(), n = ct((c) => c.user), { t: r, i18n: i } = ft(), [o, s] = C.useState(null), l = C.useMemo(() => {
    const c = $u.find(
      (f) => f.alias.includes(i.language)
    );
    return (c == null ? void 0 : c.value) ?? "";
  }, [i.language]);
  C.useEffect(() => {
    !(n != null && n.email) || !(n != null && n.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((c) => c.json()).then((c) => {
      n.__version !== c.version && s(c.version);
    });
  }, [n == null ? void 0 : n.email]);
  const a = function(c) {
    i.changeLanguage(c.target.value);
  }, u = function(c) {
    c.preventDefault(), e.user.logout(), t("/ui/login");
  };
  return [
    /* @__PURE__ */ p.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (n == null ? void 0 : n.type) === "administrator" ? /* @__PURE__ */ p.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ p.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ p.jsx("li", { className: "parent", children: /* @__PURE__ */ p.jsx(Ie, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ p.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ie, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ie, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ie, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
        /* @__PURE__ */ p.jsx("div", { className: "language-select", children: /* @__PURE__ */ p.jsx(
          "select",
          {
            defaultValue: l,
            onChange: a,
            style: { width: 120 },
            children: $u.map((c) => /* @__PURE__ */ p.jsx("option", { value: c.value, children: c.label }, c.value))
          }
        ) }),
        n != null && n.type ? /* @__PURE__ */ p.jsx(Ie, { to: "/ui/profile", className: "author", children: n.display_name }) : null,
        n != null && n.type ? /* @__PURE__ */ p.jsx("a", { className: "exit", href: "#", onClick: u, children: r("logout") }) : null
      ] })
    ] }, "header"),
    o ? /* @__PURE__ */ p.jsx("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ p.jsx(
      tt,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ p.jsx("a", {})
        },
        values: {
          version: o
        },
        transKeepBasicHtmlNodesFor: ["a"]
      }
    ) }, "upgrade") : null
  ];
}
function Fv() {
  const { t: e } = ft(), t = Vr(), n = Kr(), r = ct((u) => u.user), [i, o] = C.useState(!1), [s, l] = C.useState(!1);
  C.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const a = async function(u) {
    u.preventDefault(), o(!1);
    const c = u.target.email.value;
    if (!c)
      return o(e("please input email"));
    try {
      l(!0), await t.user.forgot({
        email: c
      }), alert(e("find password success! please go to your mailbox to reset it!")), n("/ui/login");
    } catch {
      o(e("find password error! try again later"));
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: a, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ p.jsx("p", { className: "description", style: { textAlign: "left" }, children: e(
            "you will receive an email which contains a link to create new password"
          ) })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("get new password")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
const Dd = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), Mv = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...e }, /* @__PURE__ */ C.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ C.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), Av = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), bv = (e) => /* @__PURE__ */ C.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ C.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ C.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), zv = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: Av,
  github: Dd,
  qq: zv,
  twitter: Mv,
  weibo: bv
}, Symbol.toStringTag, { value: "Module" })), Pi = {}, Iu = (e) => {
  const t = document.querySelector(`script[src="${e}"]`);
  if (t)
    return Pi[e] = {
      loading: !1,
      error: null,
      scriptEl: t
    };
};
function Vd({
  src: e,
  checkForExisting: t = !1,
  ...n
}) {
  let r = e ? Pi[e] : void 0;
  !r && t && e && Fu && (r = Iu(e));
  const [i, o] = C.useState(
    r ? r.loading : !!e
  ), [s, l] = C.useState(r ? r.error : null), [a, u] = C.useState(!1);
  return C.useEffect(() => {
    if (!Fu || !e || a || s) return;
    r = Pi[e], !r && t && (r = Iu(e));
    let c;
    r ? c = r.scriptEl : (c = document.createElement("script"), c.src = e, Object.keys(n).forEach((h) => {
      c[h] === void 0 ? c.setAttribute(h, n[h]) : c[h] = n[h];
    }), r = Pi[e] = {
      loading: !0,
      error: null,
      scriptEl: c
    });
    const f = () => {
      r && (r.loading = !1), o(!1), u(!0);
    }, d = (h) => {
      r && (r.error = h), l(h);
    };
    return c.addEventListener("load", f), c.addEventListener("error", d), document.body.appendChild(c), () => {
      c.removeEventListener("load", f), c.removeEventListener("error", d);
    };
  }, [e]), [i, s];
}
const Fu = typeof window < "u" && typeof window.document < "u";
function Uv({
  sitekey: e,
  hideDefaultBadge: t = !1,
  checkForExisting: n = !0
}) {
  const [r, i] = C.useState();
  return C.useEffect(() => {
    Dv && t && Bv(".grecaptcha-badge { visibility: hidden; }");
  }, [t]), Vd({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${e}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    }),
    checkForExisting: n
  }), C.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    });
  }, []), (o) => new Promise((s, l) => {
    r ? s(r.execute(e, { action: o })) : l(new Error("Recaptcha script not available"));
  });
}
const Dv = typeof window < "u" && typeof window.document < "u", Bv = (e) => {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const n = t.sheet;
  n && n.insertRule(e, n.cssRules.length);
};
function Vv({ sitekey: e, checkForExisting: t = !0 }) {
  const [n, r] = C.useState();
  return Vd({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: t
  }), C.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (i) => new Promise((o, s) => {
    if (!n)
      return s(new Error("Turnstile script not available"));
    n.render(".captcha-container", {
      sitekey: e,
      action: i,
      callback: o
    });
  });
}
function Hd(e) {
  const t = Uv(e), n = Vv(e);
  return window.turnstileKey ? n : window.recaptchaV3Key ? t : () => {
  };
}
const Hv = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class to {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || Hv, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new to(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new to(this.logger, t);
  }
}
var Je = new to();
class jo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [l, a] = s;
      for (let u = 0; u < a; u++)
        l(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [l, a] = s;
      for (let u = 0; u < a; u++)
        l.apply(l, [t, ...r]);
    });
  }
}
function Gn() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Mu(e) {
  return e == null ? "" : "" + e;
}
function Kv(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const Wv = /###/g;
function dr(e, t, n) {
  function r(l) {
    return l && l.indexOf("###") > -1 ? l.replace(Wv, ".") : l;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const l = r(o[s]);
    !e[l] && n && (e[l] = new n()), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++s;
  }
  return i() ? {} : {
    obj: e,
    k: r(o[s])
  };
}
function Au(e, t, n) {
  const {
    obj: r,
    k: i
  } = dr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), l = dr(e, s, Object);
  for (; l.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), l = dr(e, s, Object), l && l.obj && typeof l.obj[`${l.k}.${o}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${o}`] = n;
}
function Qv(e, t, n, r) {
  const {
    obj: i,
    k: o
  } = dr(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}
function no(e, t) {
  const {
    obj: n,
    k: r
  } = dr(e, t);
  if (n)
    return n[r];
}
function Yv(e, t, n) {
  const r = no(e, n);
  return r !== void 0 ? r : no(t, n);
}
function Kd(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Kd(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function an(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Gv = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Jv(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Gv[t]) : e;
}
class Xv {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const Zv = [" ", ",", "?", "!", ";"], qv = new Xv(20);
function ey(e, t, n) {
  t = t || "", n = n || "";
  const r = Zv.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = qv.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function il(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, l = "";
    for (let a = o; a < r.length; ++a)
      if (a !== o && (l += n), l += r[a], s = i[l], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && a < r.length - 1)
          continue;
        o += a - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function ro(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class bu extends jo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    t.indexOf(".") > -1 ? l = t.split(".") : (l = [t, n], r && (Array.isArray(r) ? l.push(...r) : typeof r == "string" && o ? l.push(...r.split(o)) : l.push(r)));
    const a = no(this.data, l);
    return !a && !n && !r && t.indexOf(".") > -1 && (t = l[0], n = l[1], r = l.slice(2).join(".")), a || !s || typeof r != "string" ? a : il(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [t, n];
    r && (l = l.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (l = t.split("."), i = n, n = l[1]), this.addNamespaces(n), Au(this.data, l, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [t, n];
    t.indexOf(".") > -1 && (l = t.split("."), i = r, r = n, n = l[1]), this.addNamespaces(n);
    let a = no(this.data, l) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? Kd(a, r, o) : a = {
      ...a,
      ...r
    }, Au(this.data, l, a), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Wd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, i));
    }), t;
  }
};
const zu = {};
class io extends jo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Kv(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Je.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, l = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !ey(t, r, i);
    if (s && !l) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const u = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), t = u.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], n), a = l[l.length - 1], u = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${a}${y}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: u,
          usedNS: a,
          usedParams: this.getUsedParamsDetails(n)
        } : `${a}${y}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: u,
        usedNS: a,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const h = f && f.usedKey || s, v = f && f.exactUsedKey || s, x = Object.prototype.toString.apply(d), S = ["[object Number]", "[object Function]", "[object RegExp]"], m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, g = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (g && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && S.indexOf(x) < 0 && !(typeof m == "string" && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, {
          ...n,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (f.res = y, f.usedParams = this.getUsedParamsDetails(n), f) : y;
      }
      if (o) {
        const y = Array.isArray(d), E = y ? [] : {}, k = y ? v : h;
        for (const N in d)
          if (Object.prototype.hasOwnProperty.call(d, N)) {
            const P = `${k}${o}${N}`;
            E[N] = this.translate(P, {
              ...n,
              joinArrays: !1,
              ns: l
            }), E[N] === P && (E[N] = d[N]);
          }
        d = E;
      }
    } else if (g && typeof m == "string" && Array.isArray(d))
      d = d.join(m), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let y = !1, E = !1;
      const k = n.count !== void 0 && typeof n.count != "string", N = io.hasDefaultValue(n), P = k ? this.pluralResolver.getSuffix(u, n.count, n) : "", _ = n.ordinal && k ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", R = k && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), M = R && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${P}`] || n[`defaultValue${_}`] || n.defaultValue;
      !this.isValidLookup(d) && N && (y = !0, d = M), this.isValidLookup(d) || (E = !0, d = s);
      const te = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : d, se = N && M !== d && this.options.updateMissing;
      if (E || y || se) {
        if (this.logger.log(se ? "updateKey" : "missingKey", u, a, s, se ? M : d), o) {
          const L = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let b = [];
        const We = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && We && We[0])
          for (let L = 0; L < We.length; L++)
            b.push(We[L]);
        else this.options.saveMissingTo === "all" ? b = this.languageUtils.toResolveHierarchy(n.lng || this.language) : b.push(n.lng || this.language);
        const dt = (L, $, T) => {
          const z = N && T !== d ? T : te;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(L, a, $, z, se, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, a, $, z, se, n), this.emit("missingKey", L, a, $, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && k ? b.forEach((L) => {
          const $ = this.pluralResolver.getSuffixes(L, n);
          R && n[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((T) => {
            dt([L], s + T, n[`defaultValue${T}`] || M);
          });
        }) : dt(b, s, M));
      }
      d = this.extendTranslation(d, t, n, f, r), E && d === s && this.options.appendNamespaceToMissingKey && (d = `${a}:${s}`), (E || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s, y ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return i ? (f.res = d, f.usedParams = this.getUsedParamsDetails(n), f) : d;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), t = this.interpolator.interpolate(t, f, r.lng || this.language, r), u) {
        const d = t.match(this.interpolator.nestingRegexp), h = d && d.length;
        c < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var d = arguments.length, h = new Array(d), v = 0; v < d; v++)
          h[v] = arguments[v];
        return o && o[0] === h[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`), null) : s.translate(...h, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const l = r.postProcess || this.options.postProcess, a = typeof l == "string" ? [l] : l;
    return t != null && a && a.length && r.applyPostProcessor !== !1 && (t = Wd.handle(a, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, l;
    return typeof t == "string" && (t = [t]), t.forEach((a) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(a, n), c = u.key;
      i = c;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const d = n.count !== void 0 && typeof n.count != "string", h = d && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), v = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", x = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((S) => {
        this.isValidLookup(r) || (l = S, !zu[`${x[0]}-${S}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (zu[`${x[0]}-${S}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((m) => {
          if (this.isValidLookup(r)) return;
          s = m;
          const g = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(g, c, m, S, n);
          else {
            let y;
            d && (y = this.pluralResolver.getSuffix(m, n.count, n));
            const E = `${this.options.pluralSeparator}zero`, k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (g.push(c + y), n.ordinal && y.indexOf(k) === 0 && g.push(c + y.replace(k, this.options.pluralSeparator)), h && g.push(c + E)), v) {
              const N = `${c}${this.options.contextSeparator}${n.context}`;
              g.push(N), d && (g.push(N + y), n.ordinal && y.indexOf(k) === 0 && g.push(N + y.replace(k, this.options.pluralSeparator)), h && g.push(N + E));
            }
          }
          let w;
          for (; w = g.pop(); )
            this.isValidLookup(r) || (o = w, r = this.getResource(m, S, w, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: l
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function is(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Uu {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Je.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = ro(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = ro(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((i) => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = is(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = is(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = is(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
let ty = [{
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
}], ny = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const ry = ["v1", "v2", "v3"], iy = ["v4"], Du = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function oy() {
  const e = {};
  return ty.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: ny[t.fc]
      };
    });
  }), e;
}
class sy {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Je.create("pluralResolver"), (!this.options.compatibilityJSON || iy.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = oy();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ro(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, o) => Du[i] - Du[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map((i) => this.getSuffix(t, i, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !ry.includes(this.options.compatibilityJSON);
  }
}
function Bu(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Yv(e, t, n);
  return !o && i && typeof n == "string" && (o = il(e, n, r), o === void 0 && (o = il(t, n, r))), o;
}
class ly {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Je.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: l,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: h,
      nestingSuffix: v,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: S,
      maxReplaces: m,
      alwaysFormat: g
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Jv, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? an(o) : s || "{{", this.suffix = l ? an(l) : a || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = d ? an(d) : h || an("$t("), this.nestingSuffix = v ? an(v) : x || an(")"), this.nestingOptionsSeparator = S || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, l;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(v) {
      return v.replace(/\$/g, "$$$$");
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const g = Bu(n, a, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(g, void 0, r, {
          ...i,
          ...n,
          interpolationkey: v
        }) : g;
      }
      const x = v.split(this.formatSeparator), S = x.shift().trim(), m = x.join(this.formatSeparator).trim();
      return this.format(Bu(n, a, S, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, {
        ...i,
        ...n,
        interpolationkey: S
      });
    };
    this.resetRegExp();
    const f = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, d = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => u(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? u(this.escape(v)) : u(v)
    }].forEach((v) => {
      for (l = 0; o = v.regex.exec(t); ) {
        const x = o[1].trim();
        if (s = c(x), s === void 0)
          if (typeof f == "function") {
            const m = f(t, o, i);
            s = typeof m == "string" ? m : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, x))
            s = "";
          else if (d) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = Mu(s));
        const S = v.safeValue(s);
        if (t = t.replace(o[0], S), d ? (v.regex.lastIndex += s.length, v.regex.lastIndex -= o[0].length) : v.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    function l(a, u) {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const f = a.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      a = f[0], d = this.interpolate(d, s);
      const h = d.match(/'/g), v = d.match(/"/g);
      (h && h.length % 2 === 0 && !v || v.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        s = JSON.parse(d), u && (s = {
          ...u,
          ...s
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, x), `${a}${c}${d}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, a;
    }
    for (; i = this.nestingRegexp.exec(t); ) {
      let a = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim());
        i[1] = c.shift(), a = c, u = !0;
      }
      if (o = n(l.call(this, i[1].trim(), s), s), o && i[0] === t && typeof o != "string") return o;
      typeof o != "string" && (o = Mu(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), u && (o = a.reduce((c, f) => this.format(c, f, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function ay(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [l, ...a] = s.split(":"), u = a.join(":").trim().replace(/^'+|'+$/g, ""), c = l.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function un(e) {
  const t = {};
  return function(r, i, o) {
    const s = i + JSON.stringify(o);
    let l = t[s];
    return l || (l = e(ro(i), o), t[s] = l), l(r);
  };
}
class uy {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Je.create("formatter"), this.options = t, this.formats = {
      number: un((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: un((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: un((n, r) => {
        const i = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: un((n, r) => {
        const i = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: un((n, r) => {
        const i = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = un(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((l, a) => {
      const {
        formatName: u,
        formatOptions: c
      } = ay(a);
      if (this.formats[u]) {
        let f = l;
        try {
          const d = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, h = d.locale || d.lng || i.locale || i.lng || r;
          f = this.formats[u](l, h, {
            ...c,
            ...i,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, t);
  }
}
function cy(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class fy extends jo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Je.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, l = {}, a = {};
    return t.forEach((u) => {
      let c = !0;
      n.forEach((f) => {
        const d = `${u}|${f}`;
        !r.reload && this.store.hasResourceBundle(u, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, c = !1, s[d] === void 0 && (s[d] = !0), o[d] === void 0 && (o[d] = !0), a[f] === void 0 && (a[f] = !0)));
      }), c || (l[u] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(a)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const l = {};
    this.queue.forEach((a) => {
      Qv(a.loaded, [o], s), cy(a, t), n && a.errors.push(n), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const c = a.loaded[u];
        c.length && c.forEach((f) => {
          l[u][f] === void 0 && (l[u][f] = !0);
        });
      }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((a) => !a.done);
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const l = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(u, c);
    }, a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function" ? u.then((c) => l(null, c)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return a(t, n, l);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, l) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && l && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, l), this.loaded(t, s, l);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = {
          ...s,
          isUpdate: o
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(t, n, r, i, a) : c = u(t, n, r, i), c && typeof c.then == "function" ? c.then((f) => l(null, f)).catch(l) : l(null, c);
          } catch (c) {
            l(c);
          }
        else
          u(t, n, r, i, l, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function Vu() {
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
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
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
function Hu(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function fi() {
}
function dy(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class $r extends jo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Hu(t), this.services = {}, this.logger = Je, this.modules = {
      external: []
    }, dy(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = Vu();
    this.options = {
      ...i,
      ...this.options,
      ...Hu(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Je.init(o(this.modules.logger), this.options) : Je.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = uy);
      const f = new Uu(this.options);
      this.store = new bu(this.options.resources, this.options);
      const d = this.services;
      d.logger = Je, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new sy(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(c), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new ly(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new fy(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(h) {
        for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
          x[S - 1] = arguments[S];
        t.emit(h, ...x);
      }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new io(this.services, this.options), this.translator.on("*", function(h) {
        for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
          x[S - 1] = arguments[S];
        t.emit(h, ...x);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = fi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments), t;
      };
    });
    const a = Gn(), u = () => {
      const c = (f, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), r(f, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), a;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fi;
    const i = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (l) => {
        if (!l || l === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
          u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => s(a)), this.options.preload && this.options.preload.forEach((l) => s(l)), this.services.backendConnector.load(o, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(l);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = Gn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = fi), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Wd.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Gn();
    this.emit("languageChanging", t);
    const o = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, u) => {
      u ? (o(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), n && n(a, function() {
        return r.t(...arguments);
      });
    }, l = (a) => {
      !t && !a && this.services.languageDetector && (a = []);
      const u = typeof a == "string" ? a : this.services.languageUtils.getBestMatchFromCodes(a);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        s(c, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(t), i;
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function(s, l) {
      let a;
      if (typeof l != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++)
          c[f - 2] = arguments[f];
        a = i.options.overloadTranslationOptionHandler([s, l].concat(c));
      } else
        a = {
          ...l
        };
      a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const d = i.options.keySeparator || ".";
      let h;
      return a.keyPrefix && Array.isArray(s) ? h = s.map((v) => `${a.keyPrefix}${d}${v}`) : h = a.keyPrefix ? `${a.keyPrefix}${d}${s}` : s, i.t(h, a);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (l, a) => {
      const u = this.services.backendConnector.state[`${l}|${a}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const l = n.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = Gn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Gn();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Uu(Vu());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new $r(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new $r(i);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((l) => {
      o[l] = this[l];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new bu(this.store.data, i), o.services.resourceStore = o.store), o.translator = new io(o.services, i), o.translator.on("*", function(l) {
      for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
        u[c - 1] = arguments[c];
      o.emit(l, ...u);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
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
const ce = $r.createInstance();
ce.createInstance = $r.createInstance;
ce.createInstance;
ce.dir;
ce.init;
ce.loadResources;
ce.reloadResources;
ce.use;
ce.changeLanguage;
ce.getFixedT;
ce.t;
ce.exists;
ce.setDefaultNamespace;
ce.hasLoadedNamespace;
ce.loadNamespaces;
ce.loadLanguages;
async function ie(e, t = {}) {
  typeof e == "object" ? t = e : typeof e == "string" && (t.url = e), t.headers || (t.headers = {}), t.body && !(t.body instanceof FormData) && (t.headers["Content-Type"] = "application/json", t.body = JSON.stringify(t.body));
  let n = window.TOKEN || sessionStorage.getItem("TOKEN");
  n || (n = localStorage.getItem("TOKEN")), n && (t.headers.Authorization = `Bearer ${n}`);
  let r = window.serverURL;
  if (!r) {
    const a = location.pathname.match(/(.*?\/)ui/);
    r = a ? a[1] : "/";
  }
  const i = t.url.includes("?") ? "&" : "?", o = await fetch(
    `${r}${t.url}${i}lang=${ce.language}`,
    t
  );
  if (!o.ok) {
    if (o.status === 401)
      throw new Error(401);
    let a;
    try {
      a = await o.json();
    } catch {
    }
    throw new Error(`${o.status}: ${(a == null ? void 0 : a.errmsg) || o.statusText}`);
  }
  const s = await o.json();
  if (s.errno !== 0)
    throw new Error(s.errmsg);
  return { __version: o.headers.get("x-waline-version"), ...s.data };
}
function Qd(e) {
  const t = e ? `?email=${encodeURIComponent(e)}` : "";
  return ie({ url: "token/2fa" + t, method: "GET" });
}
function py(e) {
  return ie({ url: "token/2fa", method: "POST", body: e });
}
function pr(e) {
  return ie({ url: "user", method: "PUT", body: e });
}
function hy({ page: e }) {
  return ie({
    url: `user?page=${e}`,
    method: "GET"
  });
}
function os({ id: e, ...t }) {
  return ie({ url: `user/${e}`, method: "PUT", body: t });
}
function my() {
  const { t: e } = ft(), t = Vr(), n = Kr(), r = ct((m) => m.user), [i, o] = C.useState(!1), [s, l] = C.useState(!1), [a, u] = C.useState(!1), c = Hd({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), f = location.pathname.match(/(.*?\/)ui/), d = f && f[1] ? f[1] : "/";
  C.useEffect(() => {
    if (!r || !r.email)
      return;
    const m = new URLSearchParams(location.search), g = r.type === "administrator", w = g ? "/ui/profile" : "/ui", y = g && m.get("redirect") ? m.get("redirect") : w;
    console.log(y), n(y.replace(/\/+/g, "/"));
  }, [r]);
  const h = async function(m) {
    m.preventDefault(), l(!1), o(!0);
    const g = m.target.email.value, w = m.target.password.value, y = m.target.code ? m.target.code.value : "", E = m.target.remember.checked;
    if (!g)
      return l(e("please input email"));
    if (!w)
      return l(e("please input password"));
    if (m.target.code && !y)
      return l(e("please input 2fa code"));
    const k = await c("login");
    try {
      await t.user.login({
        email: g,
        password: w,
        code: y,
        remember: E,
        recaptchaV3: window.recaptchaV3Key ? k : void 0,
        turnstile: window.turnstileKey ? k : void 0
      });
    } catch {
      l(e("email or password error"));
    } finally {
      o(!1);
    }
  }, v = async (m) => {
    const g = m.target.value;
    if (!g)
      return;
    const w = await Qd(g);
    u(w.enable);
  };
  let x = window.serverURL;
  if (!x) {
    const m = location.pathname.match(/(.*?\/)ui/);
    x = m ? m[1] : "/";
  }
  const S = ["qq", "weibo", "github", "twitter", "facebook"];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: s ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: s ? /* @__PURE__ */ p.jsx("li", { children: s }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: h, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100",
              onBlur: v
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        a && /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "code", className: "sr-only", children: e("2fa code") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "code",
              name: "code",
              className: "text-l w-100",
              placeholder: e("2fa code")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "btn btn-l w-100 primary",
            disabled: i,
            children: e("login")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ p.jsxs("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "checkbox",
                name: "remember",
                className: "checkbox",
                id: "remember"
              }
            ),
            " ",
            e("remember me")
          ] }),
          /* @__PURE__ */ p.jsx("span", { className: "right forgot-password", children: /* @__PURE__ */ p.jsx(Ie, { to: "/ui/forgot", children: e("forgot password") }) })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || S).map((m) => /* @__PURE__ */ p.jsx(
        "a",
        {
          href: `${x}oauth${window.ALLOW_SOCIALS ? "/" + m + "?" : `?type=${m}`}&redirect=${d}ui/profile`,
          children: he.createElement(Bd[m])
        },
        m
      )) }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui/register", children: e("register") })
      ] })
    ] }) })
  ] });
}
var Yd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
        l && (o = i(o, r(l)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var l in o)
        t.call(o, l) && o[l] && (s = i(s, l));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Yd);
var gy = Yd.exports;
const Ir = /* @__PURE__ */ so(gy);
var Gd = { exports: {} }, Jd = { exports: {} };
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(n, r) {
      return n << r | n >>> 32 - r;
    },
    // Bit-wise rotation right
    rotr: function(n, r) {
      return n << 32 - r | n >>> r;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number)
        return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
      for (var r = 0; r < n.length; r++)
        n[r] = t.endian(n[r]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var r = []; n > 0; n--)
        r.push(Math.floor(Math.random() * 256));
      return r;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(n) {
      for (var r = [], i = 0, o = 0; i < n.length; i++, o += 8)
        r[o >>> 5] |= n[i] << 24 - o % 32;
      return r;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(n) {
      for (var r = [], i = 0; i < n.length * 32; i += 8)
        r.push(n[i >>> 5] >>> 24 - i % 32 & 255);
      return r;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(n) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push((n[i] >>> 4).toString(16)), r.push((n[i] & 15).toString(16));
      return r.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(n) {
      for (var r = [], i = 0; i < n.length; i += 2)
        r.push(parseInt(n.substr(i, 2), 16));
      return r;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(n) {
      for (var r = [], i = 0; i < n.length; i += 3)
        for (var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2], s = 0; s < 4; s++)
          i * 8 + s * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - s) & 63)) : r.push("=");
      return r.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(n) {
      n = n.replace(/[^A-Z0-9+\/]/ig, "");
      for (var r = [], i = 0, o = 0; i < n.length; o = ++i % 4)
        o != 0 && r.push((e.indexOf(n.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(i)) >>> 6 - o * 2);
      return r;
    }
  };
  Jd.exports = t;
})();
var vy = Jd.exports, ol = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return ol.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(ol.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(e.charCodeAt(n) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
      return t.join("");
    }
  }
}, Ku = ol;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var yy = function(e) {
  return e != null && (Xd(e) || wy(e) || !!e._isBuffer);
};
function Xd(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function wy(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Xd(e.slice(0, 0));
}
(function() {
  var e = vy, t = Ku.utf8, n = yy, r = Ku.bin, i = function(o, s) {
    o.constructor == String ? s && s.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var l = e.bytesToWords(o), a = o.length * 8, u = 1732584193, c = -271733879, f = -1732584194, d = 271733878, h = 0; h < l.length; h++)
      l[h] = (l[h] << 8 | l[h] >>> 24) & 16711935 | (l[h] << 24 | l[h] >>> 8) & 4278255360;
    l[a >>> 5] |= 128 << a % 32, l[(a + 64 >>> 9 << 4) + 14] = a;
    for (var v = i._ff, x = i._gg, S = i._hh, m = i._ii, h = 0; h < l.length; h += 16) {
      var g = u, w = c, y = f, E = d;
      u = v(u, c, f, d, l[h + 0], 7, -680876936), d = v(d, u, c, f, l[h + 1], 12, -389564586), f = v(f, d, u, c, l[h + 2], 17, 606105819), c = v(c, f, d, u, l[h + 3], 22, -1044525330), u = v(u, c, f, d, l[h + 4], 7, -176418897), d = v(d, u, c, f, l[h + 5], 12, 1200080426), f = v(f, d, u, c, l[h + 6], 17, -1473231341), c = v(c, f, d, u, l[h + 7], 22, -45705983), u = v(u, c, f, d, l[h + 8], 7, 1770035416), d = v(d, u, c, f, l[h + 9], 12, -1958414417), f = v(f, d, u, c, l[h + 10], 17, -42063), c = v(c, f, d, u, l[h + 11], 22, -1990404162), u = v(u, c, f, d, l[h + 12], 7, 1804603682), d = v(d, u, c, f, l[h + 13], 12, -40341101), f = v(f, d, u, c, l[h + 14], 17, -1502002290), c = v(c, f, d, u, l[h + 15], 22, 1236535329), u = x(u, c, f, d, l[h + 1], 5, -165796510), d = x(d, u, c, f, l[h + 6], 9, -1069501632), f = x(f, d, u, c, l[h + 11], 14, 643717713), c = x(c, f, d, u, l[h + 0], 20, -373897302), u = x(u, c, f, d, l[h + 5], 5, -701558691), d = x(d, u, c, f, l[h + 10], 9, 38016083), f = x(f, d, u, c, l[h + 15], 14, -660478335), c = x(c, f, d, u, l[h + 4], 20, -405537848), u = x(u, c, f, d, l[h + 9], 5, 568446438), d = x(d, u, c, f, l[h + 14], 9, -1019803690), f = x(f, d, u, c, l[h + 3], 14, -187363961), c = x(c, f, d, u, l[h + 8], 20, 1163531501), u = x(u, c, f, d, l[h + 13], 5, -1444681467), d = x(d, u, c, f, l[h + 2], 9, -51403784), f = x(f, d, u, c, l[h + 7], 14, 1735328473), c = x(c, f, d, u, l[h + 12], 20, -1926607734), u = S(u, c, f, d, l[h + 5], 4, -378558), d = S(d, u, c, f, l[h + 8], 11, -2022574463), f = S(f, d, u, c, l[h + 11], 16, 1839030562), c = S(c, f, d, u, l[h + 14], 23, -35309556), u = S(u, c, f, d, l[h + 1], 4, -1530992060), d = S(d, u, c, f, l[h + 4], 11, 1272893353), f = S(f, d, u, c, l[h + 7], 16, -155497632), c = S(c, f, d, u, l[h + 10], 23, -1094730640), u = S(u, c, f, d, l[h + 13], 4, 681279174), d = S(d, u, c, f, l[h + 0], 11, -358537222), f = S(f, d, u, c, l[h + 3], 16, -722521979), c = S(c, f, d, u, l[h + 6], 23, 76029189), u = S(u, c, f, d, l[h + 9], 4, -640364487), d = S(d, u, c, f, l[h + 12], 11, -421815835), f = S(f, d, u, c, l[h + 15], 16, 530742520), c = S(c, f, d, u, l[h + 2], 23, -995338651), u = m(u, c, f, d, l[h + 0], 6, -198630844), d = m(d, u, c, f, l[h + 7], 10, 1126891415), f = m(f, d, u, c, l[h + 14], 15, -1416354905), c = m(c, f, d, u, l[h + 5], 21, -57434055), u = m(u, c, f, d, l[h + 12], 6, 1700485571), d = m(d, u, c, f, l[h + 3], 10, -1894986606), f = m(f, d, u, c, l[h + 10], 15, -1051523), c = m(c, f, d, u, l[h + 1], 21, -2054922799), u = m(u, c, f, d, l[h + 8], 6, 1873313359), d = m(d, u, c, f, l[h + 15], 10, -30611744), f = m(f, d, u, c, l[h + 6], 15, -1560198380), c = m(c, f, d, u, l[h + 13], 21, 1309151649), u = m(u, c, f, d, l[h + 4], 6, -145523070), d = m(d, u, c, f, l[h + 11], 10, -1120210379), f = m(f, d, u, c, l[h + 2], 15, 718787259), c = m(c, f, d, u, l[h + 9], 21, -343485551), u = u + g >>> 0, c = c + w >>> 0, f = f + y >>> 0, d = d + E >>> 0;
    }
    return e.endian([u, c, f, d]);
  };
  i._ff = function(o, s, l, a, u, c, f) {
    var d = o + (s & l | ~s & a) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._gg = function(o, s, l, a, u, c, f) {
    var d = o + (s & a | l & ~a) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._hh = function(o, s, l, a, u, c, f) {
    var d = o + (s ^ l ^ a) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._ii = function(o, s, l, a, u, c, f) {
    var d = o + (l ^ (s | ~a)) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._blocksize = 16, i._digestsize = 16, Gd.exports = function(o, s) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var l = e.wordsToBytes(i(o, s));
    return s && s.asBytes ? l : s && s.asString ? r.bytesToString(l) : e.bytesToHex(l);
  };
})();
var xy = Gd.exports;
const Sy = /* @__PURE__ */ so(xy);
function Zd(e = "", t = "") {
  return t || (typeof e != "string" && (e = ""), `https://sdn.geekzu.org/avatar/${Sy(e)}?s=40&r=G&d=`);
}
function Ey(e) {
  return window.SITE_URL ? window.SITE_URL + e : e;
}
function ky(e) {
  let t;
  typeof e == "number" ? t = new Date(e) : t = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(e) ? e.replace(/-/g, "/") : e
  );
  const n = (o) => o < 10 ? "0" + o : o, r = [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-"), i = [t.getHours(), t.getMinutes(), t.getSeconds()].map(n).join(":");
  return r + " " + i;
}
function qd({ current: e, total: t, onChange: n }) {
  return t < 1 ? null : /* @__PURE__ */ p.jsxs("ul", { className: "typecho-pager", children: [
    e > 1 ? /* @__PURE__ */ p.jsx("li", { className: "prev", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e - 1), children: "«" }) }) : null,
    e > 4 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(1), children: "1" }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) })
    ] }) : null,
    [
      e - 3,
      e - 2,
      e - 1,
      e,
      e + 1,
      e + 2,
      e + 3
    ].filter((r) => r > 0 && r <= t).map((r) => /* @__PURE__ */ p.jsx("li", { className: Ir({ current: r === e }), children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(r), children: r }) }, r)),
    e < t - 3 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(t), children: t }) })
    ] }) : null,
    e < t ? /* @__PURE__ */ p.jsx("li", { className: "next", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e + 1), children: "»" }) }) : null
  ] });
}
async function Jn({ page: e = 1, filter: t }) {
  return ie({
    url: `comment?type=list&owner=${t.owner}&status=${t.status}&keyword=${t.keyword}&page=${e}`,
    method: "GET"
  });
}
async function ht(e, t) {
  return ie({
    url: `comment/${e}`,
    method: "PUT",
    body: t
  });
}
async function Cy(e) {
  return ie({
    url: "comment",
    method: "POST",
    body: e
  });
}
async function Wu(e) {
  return ie({
    url: `comment/${e}`,
    method: "DELETE"
  });
}
function Ny() {
  const { t: e } = ft(), t = C.useRef(null), n = C.useRef(null), r = C.useRef({}), i = ct((y) => y.user), [o, s] = C.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [l, a] = C.useReducer(
    function(y, E) {
      return { ...y, ...E };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [u, c] = C.useState({}), [f, d] = C.useState(!1), [h, v] = C.useState([]), x = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "spam" }) }
      ]
    ]
  ];
  C.useEffect(() => {
    Jn({ page: o.page, filter: l }).then((y) => {
      s({ ...o, ...y }), v([]);
    });
  }, [l, o.page]);
  const S = (y) => [
    {
      key: "approved",
      name: e("approved button"),
      show: !0,
      disable: y && y.status === "approved",
      async action() {
        if (y) {
          switch (await ht(y.objectId, { status: "approved" }), o.data = o.data.filter(
            ({ objectId: E }) => E !== y.objectId
          ), y.status) {
            case "waiting":
              o.waitingCount -= 1;
              break;
            case "spam":
              o.spamCount -= 1;
              break;
          }
          s({ ...o });
        } else
          await Promise.all(
            h.map(
              (E) => ht(E, { status: "approved" })
            )
          ), Jn({ page: o.page, filter: l }).then((E) => {
            s({ ...o, ...E }), v([]);
          });
      }
    },
    {
      key: "waiting",
      name: e("waiting"),
      show: !0,
      disable: y && y.status === "waiting",
      async action() {
        y ? (await ht(y.objectId, { status: "waiting" }), o.data = o.data.filter(
          ({ objectId: E }) => E !== y.objectId
        ), y.status === "spam" && (o.spamCount -= 1), o.waitingCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (E) => ht(E, { status: "waiting" })
          )
        ), Jn({ page: o.page, filter: l }).then((E) => {
          s({ ...o, ...E }), v([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: e(y ? "spam" : "mark as spam"),
      disable: y && y.status === "spam",
      async action() {
        y ? (await ht(y.objectId, { status: "spam" }), o.data = o.data.filter(
          ({ objectId: E }) => E !== y.objectId
        ), o.spamCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (E) => ht(E, { status: "spam" })
          )
        ), Jn({ page: o.page, filter: l }).then((E) => {
          s({ ...o, ...E }), v([]);
        }));
      }
    },
    {
      key: "sticky",
      show: y && !y.rid && y.status === "approved",
      name: y && y.sticky ? e("disable sticky") : e("sticky"),
      async action(E) {
        E.preventDefault();
        const k = !y.sticky;
        o.data.forEach((N) => {
          N.objectId === y.objectId && (N.sticky = k);
        }), await ht(y.objectId, { sticky: k ? 1 : 0 }), s({ ...o });
      }
    },
    {
      key: "edit",
      show: y,
      name: e("edit"),
      action() {
        const E = {};
        u.id !== y.objectId && u.action !== "edit" && (E.id = y.objectId, E.action = "edit"), c(E);
      }
    },
    {
      key: "reply",
      show: y && y.status === "approved",
      name: e("reply"),
      action() {
        const E = {};
        u.id !== y.objectId && u.action !== "reply" && (E.id = y.objectId, E.action = "reply"), c(E);
      }
    },
    {
      key: "delete",
      name: e("delete"),
      show: !0,
      async action() {
        const E = y ? e("delete one confirm", { nick: y.nick }) : e("delete multiple confirm");
        confirm(E) && (y ? (await Wu(y.objectId), o.data = o.data.filter(
          ({ objectId: k }) => k !== y.objectId
        ), s({ ...o })) : (await Promise.all(h.map(Wu)), Jn({ page: o.page, filter: l }).then((k) => {
          s({ ...o, ...k }), v([]);
        })));
      }
    }
  ].filter(({ show: E }) => E), m = async ({ pid: y, rid: E, url: k, at: N }) => {
    const P = n.current.value;
    if (!P)
      return null;
    const { display_name: _, email: R, url: M } = i;
    await Cy({
      nick: _,
      mail: R,
      ua: navigator.userAgent,
      link: M,
      url: k,
      comment: P,
      pid: y,
      rid: E || y,
      at: N
    }), location.reload();
  }, g = async (y) => {
    const E = o.data[y];
    await ht(E.objectId, r.current), o.data[y] = { ...E, ...r.current }, s({ ...o }), c({});
  }, w = o.data.length && o.data.every(({ objectId: y }) => h.includes(y));
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: e("manage comments") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "clear-fix", children: x.map(([y, E]) => /* @__PURE__ */ p.jsx(
          "ul",
          {
            className: Ir("typecho-option-tabs", {
              right: y === "owner"
            }),
            children: E.map(({ type: k, name: N }) => /* @__PURE__ */ p.jsx(
              "li",
              {
                className: Ir({ current: k === l[y] }),
                children: /* @__PURE__ */ p.jsxs(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => a({ [y]: k }),
                    children: [
                      N,
                      y === "status" && k !== "approved" && o[`${k}Count`] > 0 ? /* @__PURE__ */ p.jsx("span", { className: "balloon", children: o[`${k}Count`] }) : null
                    ]
                  }
                )
              },
              k
            ))
          },
          y
        )) }),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ p.jsxs("label", { children: [
              /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("select all") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: w,
                  onChange: () => v(
                    w ? [] : o.data.map(({ objectId: y }) => y)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => d(!f),
                  children: [
                    /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("action") }),
                    e("selected items"),
                    " ",
                    /* @__PURE__ */ p.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ p.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: f ? "block" : "none" },
                  onClick: () => d(!1),
                  children: S().map(({ key: y, name: E, action: k }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "javascript:void(0)", onClick: k, children: E }) }, y))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                ref: t,
                className: "text-s",
                placeholder: e("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (y) => {
                  y.preventDefault(), a({ keyword: t.current.value });
                },
                children: e("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "3%" }),
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "71%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: e("author") }),
                /* @__PURE__ */ p.jsx("th", { children: e("content") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: o.data.map(
                ({
                  objectId: y,
                  nick: E,
                  mail: k,
                  avatar: N,
                  link: P,
                  comment: _,
                  ip: R,
                  addr: M,
                  url: Y,
                  status: te,
                  rid: se,
                  pid: b,
                  sticky: We,
                  time: dt,
                  insertedAt: L
                }, $) => u.id === y && u.action === "edit" ? /* @__PURE__ */ p.jsxs("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ p.jsx("td", { children: " " }),
                  /* @__PURE__ */ p.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "label",
                        {
                          htmlFor: `comment-${y}-author`,
                          children: e("username")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${y}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: E,
                          onChange: (T) => r.current.nick = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-mail`, children: e("email") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${y}-mail`,
                          defaultValue: k,
                          onChange: (T) => r.current.mail = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-url`, children: e("homepage") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${y}-author`,
                          defaultValue: P,
                          onChange: (T) => r.current.link = T.target.value
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-text`, children: e("content") }),
                      /* @__PURE__ */ p.jsx(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${y}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: _,
                          onChange: (T) => r.current.comment = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => g($),
                          children: e("submit")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => c({}),
                          children: e("cancel")
                        }
                      )
                    ] })
                  ] }) })
                ] }, y) : /* @__PURE__ */ p.jsxs("tr", { id: `comment-${y}`, children: [
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: y,
                      checked: h.includes(y),
                      onChange: () => v(
                        h.includes(y) ? h.filter(
                          (T) => T !== y
                        ) : [...h, y]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      className: "avatar",
                      src: Zd(k, N),
                      alt: E,
                      width: "40",
                      height: "40"
                    }
                  ) }) }),
                  /* @__PURE__ */ p.jsx(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ p.jsxs("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ p.jsx("strong", { className: "comment-author", children: P ? /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: /^https:\/\//.test(P) ? P : "https://" + P,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: E
                          }
                        ) : E }),
                        /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: `mailto:${k}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: k
                          }
                        ) }),
                        k && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: R }),
                        R && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: M })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "comment-date", children: [
                          ky(L || dt),
                          " ",
                          e("at"),
                          " ",
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: Ey(Y),
                              target: "_blank",
                              rel: "noreferrer",
                              children: Y
                            }
                          )
                        ] }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: _ }
                          }
                        ),
                        u.id === y && u.action === "reply" ? /* @__PURE__ */ p.jsxs("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx("label", { htmlFor: "text", className: "sr-only", children: e("content") }),
                            /* @__PURE__ */ p.jsx(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: n
                              }
                            )
                          ] }),
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (T) => {
                                  T.preventDefault(), m({
                                    rid: se,
                                    pid: y,
                                    url: Y,
                                    at: E
                                  });
                                },
                                children: e("reply")
                              }
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => c({}),
                                children: e("cancel")
                              }
                            )
                          ] })
                        ] }) : null,
                        /* @__PURE__ */ p.jsx("div", { className: "comment-action hidden-by-mouse", children: S({
                          objectId: y,
                          nick: E,
                          status: te,
                          rid: se,
                          pid: b,
                          sticky: We
                        }).map(
                          ({ key: T, disable: z, name: G, action: sn }) => z ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: G }, T) : /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${T}`,
                              onClick: sn,
                              children: G
                            },
                            T
                          )
                        ) })
                      ]
                    }
                  )
                ] }, y)
              ) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          qd,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (y) => s({ ...o, page: y })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function jy(e, t, n) {
  const r = new Blob([e], { type: n }), i = document.createElement("a"), o = URL.createObjectURL(r);
  i.href = o, i.download = t, document.body.appendChild(i), i.click(), setTimeout(() => {
    document.body.removeChild(i), window.URL.revokeObjectURL(o);
  }, 0);
}
function Py(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = n, r.readAsText(e);
  });
}
function Ly() {
  const [e, t] = C.useState(!1), [n, r] = C.useState(!1), { t: i } = ft(), o = C.useRef(null), s = () => {
    confirm(i("import clear data confirm")) && o.current.click();
  }, l = async (u) => {
    try {
      const c = await Py(u.target.files[0]), f = JSON.parse(c);
      if (!f || f.type !== "waline")
        return alert("import data format not support!");
      const d = f.tables.reduce(
        (m, g) => {
          var w;
          return m + (((w = f.data[g]) == null ? void 0 : w.length) || 0);
        },
        0
      );
      let h = 0;
      t([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: h, maxLength: d }
      ]);
      const v = {};
      for (const m of f.tables) {
        const g = f.data[m];
        if (m !== "Users" && await ie({
          url: "db?table=" + m,
          method: "DELETE"
        }), v[m] || (v[m] = {}), !!Array.isArray(g))
          for (const w of g) {
            let y = !1;
            if (m === "Users") {
              const _ = await ie("user?email=" + w.email);
              _.objectId && (y = _.objectId);
            }
            const k = m == "Users" && y ? "PUT" : "POST", N = m === "Comment" ? Object.assign({}, w, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : w;
            for (const _ in N)
              (N[_] === null || N[_] === void 0) && delete N[_];
            const P = await ie({
              url: `db?table=${m}${k === "PUT" ? `&objectId=${y}` : ""}`,
              method: k,
              body: N
            });
            v[m][w.objectId] = P.objectId, h += 1, t([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: h, maxLength: d }
            ]);
          }
      }
      t(["comment data index relationship reconstruction"]);
      const x = f.data.Comment, S = [];
      for (const m of x) {
        const g = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: w, field: y }) => {
          if (!m[y])
            return;
          const E = m[y], k = v[w][m[y]];
          E && k && E !== k && (g[y] = k);
        }), Object.keys(g).length && S.push([
          g,
          { objectId: v.Comment[m.objectId] }
        ]);
      }
      h = 0;
      for (const [m, g] of S)
        await ie({
          url: `db?table=Comment&objectId=${g.objectId}`,
          method: "PUT",
          body: m
        }), h += 1, t([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: h, maxLength: S.length }
        ]);
      alert(i("import success")), location.reload();
    } catch (c) {
      throw console.log(c), alert(c.message), c;
    } finally {
      t(!1), u.target.value = null;
    }
  }, a = async () => {
    r(!0);
    try {
      const u = await ie("db");
      jy(
        JSON.stringify(u, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("migration") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ p.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: a,
            disabled: n,
            children: i(n ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: s,
              disabled: e,
              children: Array.isArray(e) ? i(...e) : i("import")
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              ref: o,
              onChange: l,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
var Ry = Object.defineProperty, oo = Object.getOwnPropertySymbols, ep = Object.prototype.hasOwnProperty, tp = Object.prototype.propertyIsEnumerable, Qu = (e, t, n) => t in e ? Ry(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fr = (e, t) => {
  for (var n in t || (t = {}))
    ep.call(t, n) && Qu(e, n, t[n]);
  if (oo)
    for (var n of oo(t))
      tp.call(t, n) && Qu(e, n, t[n]);
  return e;
}, ia = (e, t) => {
  var n = {};
  for (var r in e)
    ep.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && oo)
    for (var r of oo(e))
      t.indexOf(r) < 0 && tp.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var Zt;
((e) => {
  const t = class {
    constructor(a, u, c, f) {
      if (this.version = a, this.errorCorrectionLevel = u, this.modules = [], this.isFunction = [], a < t.MIN_VERSION || a > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let d = [];
      for (let v = 0; v < this.size; v++)
        d.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(c);
      if (this.drawCodewords(h), f == -1) {
        let v = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const S = this.getPenaltyScore();
          S < v && (f = x, v = S), this.applyMask(x);
        }
      }
      o(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    static encodeText(a, u) {
      const c = e.QrSegment.makeSegments(a);
      return t.encodeSegments(c, u);
    }
    static encodeBinary(a, u) {
      const c = e.QrSegment.makeBytes(a);
      return t.encodeSegments([c], u);
    }
    static encodeSegments(a, u, c = 1, f = 40, d = -1, h = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let v, x;
      for (v = c; ; v++) {
        const w = t.getNumDataCodewords(v, u) * 8, y = l.getTotalBits(a, v);
        if (y <= w) {
          x = y;
          break;
        }
        if (v >= f)
          throw new RangeError("Data too long");
      }
      for (const w of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        h && x <= t.getNumDataCodewords(v, w) * 8 && (u = w);
      let S = [];
      for (const w of a) {
        r(w.mode.modeBits, 4, S), r(w.numChars, w.mode.numCharCountBits(v), S);
        for (const y of w.getData())
          S.push(y);
      }
      o(S.length == x);
      const m = t.getNumDataCodewords(v, u) * 8;
      o(S.length <= m), r(0, Math.min(4, m - S.length), S), r(0, (8 - S.length % 8) % 8, S), o(S.length % 8 == 0);
      for (let w = 236; S.length < m; w ^= 253)
        r(w, 8, S);
      let g = [];
      for (; g.length * 8 < S.length; )
        g.push(0);
      return S.forEach((w, y) => g[y >>> 3] |= w << 7 - (y & 7)), new t(v, u, g, d);
    }
    getModule(a, u) {
      return 0 <= a && a < this.size && 0 <= u && u < this.size && this.modules[u][a];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const a = this.getAlignmentPatternPositions(), u = a.length;
      for (let c = 0; c < u; c++)
        for (let f = 0; f < u; f++)
          c == 0 && f == 0 || c == 0 && f == u - 1 || c == u - 1 && f == 0 || this.drawAlignmentPattern(a[c], a[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(a) {
      const u = this.errorCorrectionLevel.formatBits << 3 | a;
      let c = u;
      for (let d = 0; d < 10; d++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const f = (u << 10 | c) ^ 21522;
      o(f >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, i(f, d));
      this.setFunctionModule(8, 7, i(f, 6)), this.setFunctionModule(8, 8, i(f, 7)), this.setFunctionModule(7, 8, i(f, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, i(f, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, i(f, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, i(f, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let a = this.version;
      for (let c = 0; c < 12; c++)
        a = a << 1 ^ (a >>> 11) * 7973;
      const u = this.version << 12 | a;
      o(u >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = i(u, c), d = this.size - 11 + c % 3, h = Math.floor(c / 3);
        this.setFunctionModule(d, h, f), this.setFunctionModule(h, d, f);
      }
    }
    drawFinderPattern(a, u) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const d = Math.max(Math.abs(f), Math.abs(c)), h = a + f, v = u + c;
          0 <= h && h < this.size && 0 <= v && v < this.size && this.setFunctionModule(h, v, d != 2 && d != 4);
        }
    }
    drawAlignmentPattern(a, u) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(a + f, u + c, Math.max(Math.abs(f), Math.abs(c)) != 1);
    }
    setFunctionModule(a, u, c) {
      this.modules[u][a] = c, this.isFunction[u][a] = !0;
    }
    addEccAndInterleave(a) {
      const u = this.version, c = this.errorCorrectionLevel;
      if (a.length != t.getNumDataCodewords(u, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u], d = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u], h = Math.floor(t.getNumRawDataModules(u) / 8), v = f - h % f, x = Math.floor(h / f);
      let S = [];
      const m = t.reedSolomonComputeDivisor(d);
      for (let w = 0, y = 0; w < f; w++) {
        let E = a.slice(y, y + x - d + (w < v ? 0 : 1));
        y += E.length;
        const k = t.reedSolomonComputeRemainder(E, m);
        w < v && E.push(0), S.push(E.concat(k));
      }
      let g = [];
      for (let w = 0; w < S[0].length; w++)
        S.forEach((y, E) => {
          (w != x - d || E >= v) && g.push(y[w]);
        });
      return o(g.length == h), g;
    }
    drawCodewords(a) {
      if (a.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let u = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let d = 0; d < 2; d++) {
            const h = c - d, x = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[x][h] && u < a.length * 8 && (this.modules[x][h] = i(a[u >>> 3], 7 - (u & 7)), u++);
          }
      }
      o(u == a.length * 8);
    }
    applyMask(a) {
      if (a < 0 || a > 7)
        throw new RangeError("Mask value out of range");
      for (let u = 0; u < this.size; u++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (a) {
            case 0:
              f = (c + u) % 2 == 0;
              break;
            case 1:
              f = u % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + u) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(u / 2)) % 2 == 0;
              break;
            case 5:
              f = c * u % 2 + c * u % 3 == 0;
              break;
            case 6:
              f = (c * u % 2 + c * u % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + u) % 2 + c * u % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[u][c] && f && (this.modules[u][c] = !this.modules[u][c]);
        }
    }
    getPenaltyScore() {
      let a = 0;
      for (let d = 0; d < this.size; d++) {
        let h = !1, v = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[d][S] == h ? (v++, v == 5 ? a += t.PENALTY_N1 : v > 5 && a++) : (this.finderPenaltyAddHistory(v, x), h || (a += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), h = this.modules[d][S], v = 1);
        a += this.finderPenaltyTerminateAndCount(h, v, x) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let h = !1, v = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[S][d] == h ? (v++, v == 5 ? a += t.PENALTY_N1 : v > 5 && a++) : (this.finderPenaltyAddHistory(v, x), h || (a += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), h = this.modules[S][d], v = 1);
        a += this.finderPenaltyTerminateAndCount(h, v, x) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let h = 0; h < this.size - 1; h++) {
          const v = this.modules[d][h];
          v == this.modules[d][h + 1] && v == this.modules[d + 1][h] && v == this.modules[d + 1][h + 1] && (a += t.PENALTY_N2);
        }
      let u = 0;
      for (const d of this.modules)
        u = d.reduce((h, v) => h + (v ? 1 : 0), u);
      const c = this.size * this.size, f = Math.ceil(Math.abs(u * 20 - c * 10) / c) - 1;
      return o(0 <= f && f <= 9), a += f * t.PENALTY_N4, o(0 <= a && a <= 2568888), a;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const a = Math.floor(this.version / 7) + 2, u = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (a * 2 - 2)) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < a; f -= u)
          c.splice(1, 0, f);
        return c;
      }
    }
    static getNumRawDataModules(a) {
      if (a < t.MIN_VERSION || a > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let u = (16 * a + 128) * a + 64;
      if (a >= 2) {
        const c = Math.floor(a / 7) + 2;
        u -= (25 * c - 10) * c - 55, a >= 7 && (u -= 36);
      }
      return o(208 <= u && u <= 29648), u;
    }
    static getNumDataCodewords(a, u) {
      return Math.floor(t.getNumRawDataModules(a) / 8) - t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][a] * t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][a];
    }
    static reedSolomonComputeDivisor(a) {
      if (a < 1 || a > 255)
        throw new RangeError("Degree out of range");
      let u = [];
      for (let f = 0; f < a - 1; f++)
        u.push(0);
      u.push(1);
      let c = 1;
      for (let f = 0; f < a; f++) {
        for (let d = 0; d < u.length; d++)
          u[d] = t.reedSolomonMultiply(u[d], c), d + 1 < u.length && (u[d] ^= u[d + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return u;
    }
    static reedSolomonComputeRemainder(a, u) {
      let c = u.map((f) => 0);
      for (const f of a) {
        const d = f ^ c.shift();
        c.push(0), u.forEach((h, v) => c[v] ^= t.reedSolomonMultiply(h, d));
      }
      return c;
    }
    static reedSolomonMultiply(a, u) {
      if (a >>> 8 || u >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (u >>> f & 1) * a;
      return o(c >>> 8 == 0), c;
    }
    finderPenaltyCountPatterns(a) {
      const u = a[1];
      o(u <= this.size * 3);
      const c = u > 0 && a[2] == u && a[3] == u * 3 && a[4] == u && a[5] == u;
      return (c && a[0] >= u * 4 && a[6] >= u ? 1 : 0) + (c && a[6] >= u * 4 && a[0] >= u ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(a, u, c) {
      return a && (this.finderPenaltyAddHistory(u, c), u = 0), u += this.size, this.finderPenaltyAddHistory(u, c), this.finderPenaltyCountPatterns(c);
    }
    finderPenaltyAddHistory(a, u) {
      u[0] == 0 && (a += this.size), u.pop(), u.unshift(a);
    }
  };
  let n = t;
  n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], n.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], e.QrCode = n;
  function r(a, u, c) {
    if (u < 0 || u > 31 || a >>> u)
      throw new RangeError("Value out of range");
    for (let f = u - 1; f >= 0; f--)
      c.push(a >>> f & 1);
  }
  function i(a, u) {
    return (a >>> u & 1) != 0;
  }
  function o(a) {
    if (!a)
      throw new Error("Assertion error");
  }
  const s = class {
    constructor(a, u, c) {
      if (this.mode = a, this.numChars = u, this.bitData = c, u < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    static makeBytes(a) {
      let u = [];
      for (const c of a)
        r(c, 8, u);
      return new s(s.Mode.BYTE, a.length, u);
    }
    static makeNumeric(a) {
      if (!s.isNumeric(a))
        throw new RangeError("String contains non-numeric characters");
      let u = [];
      for (let c = 0; c < a.length; ) {
        const f = Math.min(a.length - c, 3);
        r(parseInt(a.substr(c, f), 10), f * 3 + 1, u), c += f;
      }
      return new s(s.Mode.NUMERIC, a.length, u);
    }
    static makeAlphanumeric(a) {
      if (!s.isAlphanumeric(a))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let u = [], c;
      for (c = 0; c + 2 <= a.length; c += 2) {
        let f = s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)) * 45;
        f += s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c + 1)), r(f, 11, u);
      }
      return c < a.length && r(s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)), 6, u), new s(s.Mode.ALPHANUMERIC, a.length, u);
    }
    static makeSegments(a) {
      return a == "" ? [] : s.isNumeric(a) ? [s.makeNumeric(a)] : s.isAlphanumeric(a) ? [s.makeAlphanumeric(a)] : [s.makeBytes(s.toUtf8ByteArray(a))];
    }
    static makeEci(a) {
      let u = [];
      if (a < 0)
        throw new RangeError("ECI assignment value out of range");
      if (a < 128)
        r(a, 8, u);
      else if (a < 16384)
        r(2, 2, u), r(a, 14, u);
      else if (a < 1e6)
        r(6, 3, u), r(a, 21, u);
      else
        throw new RangeError("ECI assignment value out of range");
      return new s(s.Mode.ECI, 0, u);
    }
    static isNumeric(a) {
      return s.NUMERIC_REGEX.test(a);
    }
    static isAlphanumeric(a) {
      return s.ALPHANUMERIC_REGEX.test(a);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(a, u) {
      let c = 0;
      for (const f of a) {
        const d = f.mode.numCharCountBits(u);
        if (f.numChars >= 1 << d)
          return 1 / 0;
        c += 4 + d + f.bitData.length;
      }
      return c;
    }
    static toUtf8ByteArray(a) {
      a = encodeURI(a);
      let u = [];
      for (let c = 0; c < a.length; c++)
        a.charAt(c) != "%" ? u.push(a.charCodeAt(c)) : (u.push(parseInt(a.substr(c + 1, 2), 16)), c += 2);
      return u;
    }
  };
  let l = s;
  l.NUMERIC_REGEX = /^[0-9]*$/, l.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, l.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = l;
})(Zt || (Zt = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let r = n;
    r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(Zt || (Zt = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let r = n;
    r.NUMERIC = new n(1, [10, 12, 14]), r.ALPHANUMERIC = new n(2, [9, 11, 13]), r.BYTE = new n(4, [8, 16, 16]), r.KANJI = new n(8, [8, 10, 12]), r.ECI = new n(7, [0, 0, 0]), t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(Zt || (Zt = {}));
var kn = Zt;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var np = {
  L: kn.QrCode.Ecc.LOW,
  M: kn.QrCode.Ecc.MEDIUM,
  Q: kn.QrCode.Ecc.QUARTILE,
  H: kn.QrCode.Ecc.HIGH
}, rp = 128, ip = "L", op = "#FFFFFF", sp = "#000000", lp = !1, oa = 4, Oy = 0.1;
function ap(e, t = 0) {
  const n = [];
  return e.forEach(function(r, i) {
    let o = null;
    r.forEach(function(s, l) {
      if (!s && o !== null) {
        n.push(`M${o + t} ${i + t}h${l - o}v1H${o + t}z`), o = null;
        return;
      }
      if (l === r.length - 1) {
        if (!s)
          return;
        o === null ? n.push(`M${l + t},${i + t} h1v1H${l + t}z`) : n.push(`M${o + t},${i + t} h${l + 1 - o}v1H${o + t}z`);
        return;
      }
      s && o === null && (o = l);
    });
  }), n.join("");
}
function up(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((i, o) => o < t.x || o >= t.x + t.w ? i : !1));
}
function cp(e, t, n, r) {
  if (r == null)
    return null;
  const i = n ? oa : 0, o = e.length + i * 2, s = Math.floor(t * Oy), l = o / t, a = (r.width || s) * l, u = (r.height || s) * l, c = r.x == null ? e.length / 2 - a / 2 : r.x * l, f = r.y == null ? e.length / 2 - u / 2 : r.y * l;
  let d = null;
  if (r.excavate) {
    let h = Math.floor(c), v = Math.floor(f), x = Math.ceil(a + c - h), S = Math.ceil(u + f - v);
    d = { x: h, y: v, w: x, h: S };
  }
  return { x: c, y: f, h: u, w: a, excavation: d };
}
var Ty = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function _y(e) {
  const t = e, {
    value: n,
    size: r = rp,
    level: i = ip,
    bgColor: o = op,
    fgColor: s = sp,
    includeMargin: l = lp,
    style: a,
    imageSettings: u
  } = t, c = ia(t, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), f = u == null ? void 0 : u.src, d = C.useRef(null), h = C.useRef(null), [v, x] = C.useState(!1);
  C.useEffect(() => {
    if (d.current != null) {
      const g = d.current, w = g.getContext("2d");
      if (!w)
        return;
      let y = kn.QrCode.encodeText(n, np[i]).getModules();
      const E = l ? oa : 0, k = y.length + E * 2, N = cp(y, r, l, u), P = h.current, _ = N != null && P !== null && P.complete && P.naturalHeight !== 0 && P.naturalWidth !== 0;
      _ && N.excavation != null && (y = up(y, N.excavation));
      const R = window.devicePixelRatio || 1;
      g.height = g.width = r * R;
      const M = r / k * R;
      w.scale(M, M), w.fillStyle = o, w.fillRect(0, 0, k, k), w.fillStyle = s, Ty ? w.fill(new Path2D(ap(y, E))) : y.forEach(function(Y, te) {
        Y.forEach(function(se, b) {
          se && w.fillRect(b + E, te + E, 1, 1);
        });
      }), _ && w.drawImage(P, N.x + E, N.y + E, N.w, N.h);
    }
  }), C.useEffect(() => {
    x(!1);
  }, [f]);
  const S = Fr({ height: r, width: r }, a);
  let m = null;
  return f != null && (m = /* @__PURE__ */ he.createElement("img", {
    src: f,
    key: f,
    style: { display: "none" },
    onLoad: () => {
      x(!0);
    },
    ref: h
  })), /* @__PURE__ */ he.createElement(he.Fragment, null, /* @__PURE__ */ he.createElement("canvas", Fr({
    style: S,
    height: r,
    width: r,
    ref: d
  }, c)), m);
}
function $y(e) {
  const t = e, {
    value: n,
    size: r = rp,
    level: i = ip,
    bgColor: o = op,
    fgColor: s = sp,
    includeMargin: l = lp,
    imageSettings: a
  } = t, u = ia(t, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let c = kn.QrCode.encodeText(n, np[i]).getModules();
  const f = l ? oa : 0, d = c.length + f * 2, h = cp(c, r, l, a);
  let v = null;
  a != null && h != null && (h.excavation != null && (c = up(c, h.excavation)), v = /* @__PURE__ */ he.createElement("image", {
    xlinkHref: a.src,
    height: h.h,
    width: h.w,
    x: h.x + f,
    y: h.y + f,
    preserveAspectRatio: "none"
  }));
  const x = ap(c, f);
  return /* @__PURE__ */ he.createElement("svg", Fr({
    height: r,
    width: r,
    viewBox: `0 0 ${d} ${d}`
  }, u), /* @__PURE__ */ he.createElement("path", {
    fill: o,
    d: `M0,0 h${d}v${d}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ he.createElement("path", {
    fill: s,
    d: x,
    shapeRendering: "crispEdges"
  }), v);
}
var Yu = (e) => {
  const t = e, { renderAs: n } = t, r = ia(t, ["renderAs"]);
  return n === "svg" ? /* @__PURE__ */ he.createElement($y, Fr({}, r)) : /* @__PURE__ */ he.createElement(_y, Fr({}, r));
};
function Iy() {
  const { t: e } = ft(), [t, n] = C.useState(1), [r, i] = C.useState(!1), [o, s] = C.useState({ otpauth_url: "", secret: "" }), l = ct((c) => c.user);
  C.useEffect(() => {
    Qd().then(s);
  }, []);
  const a = async (c) => {
    c.preventDefault();
    const f = c.target.code.value;
    if (!f || f.length < 6 || f.length > 6)
      return alert(e("minimum 6 characters required"));
    try {
      i(!0), await py({ code: f, secret: o.secret });
    } catch (d) {
      alert(d);
    } finally {
      i(!1), location.reload();
    }
  }, u = async () => {
    confirm(e("close 2fa confirm")) && (i(!0), await pr({ "2fa": "" }).catch((c) => {
      alert(c), console.error(c);
    }), i(!1), location.reload());
  };
  return /* @__PURE__ */ p.jsxs("section", { id: "two-factor-auth", children: [
    /* @__PURE__ */ p.jsx("h3", { children: e("two factor auth") }),
    l["2fa"] ? /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("enable 2fa") }),
      /* @__PURE__ */ p.jsx(Yu, { value: o.otpauth_url, size: 256 }),
      /* @__PURE__ */ p.jsx("br", {}),
      /* @__PURE__ */ p.jsx("br", {}),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: u,
          disabled: r,
          children: e("disable 2fa")
        }
      )
    ] }) : null,
    !l["2fa"] && t === 1 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("2fa description 1") }),
      /* @__PURE__ */ p.jsx("p", { children: e("2fa description 2") }),
      /* @__PURE__ */ p.jsx("button", { className: "btn primary", onClick: () => n(2), children: e("next step") })
    ] }),
    !l["2fa"] && t === 2 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("h4", { children: e("download 2fa app") }),
      /* @__PURE__ */ p.jsxs("ul", { className: "step2-apps", children: [
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Android, iOS:",
          /* @__PURE__ */ p.jsxs("a", { href: "https://support.google.com/accounts/answer/1066447?hl=en", children: [
            " ",
            "Google Authenticator"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Android and iOS:",
          /* @__PURE__ */ p.jsxs("a", { href: "http://guide.duosecurity.com/third-party-accounts", children: [
            " ",
            "Duo Mobile"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Windows Phone:",
          /* @__PURE__ */ p.jsxs("a", { href: "https://www.microsoft.com/en-US/store/apps/Authenticator/9WZDNCRFJ3RJ", children: [
            " ",
            "Authenticator"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: () => n(3),
          children: e("next step")
        }
      )
    ] }),
    !l["2fa"] && t === 3 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("open app and scan qrcode") }),
      /* @__PURE__ */ p.jsx(Yu, { value: o.otpauth_url, size: 256 }),
      /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: a, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "code-0-1", children: e("input 2fa code") }),
          /* @__PURE__ */ p.jsx("input", { id: "code-0-1", name: "code", type: "text", className: "text" }),
          /* @__PURE__ */ p.jsx("p", { className: "description" })
        ] }) }),
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "btn primary",
            disabled: r,
            children: e("enable 2fa")
          }
        ) }) })
      ] })
    ] })
  ] });
}
function Fy() {
  const [e, t] = C.useState(!1), [n, r] = C.useState(!1), i = Vr(), o = ct((v) => v.user), { t: s } = ft(), l = async function(v) {
    v.preventDefault();
    const x = v.target.screenName.value, S = v.target.url.value, m = v.target.label.value;
    if (!x || !S)
      return alert(s("nickname and homepage are required"));
    r(!0);
    try {
      await i.user.updateProfile({ display_name: x, url: S, label: m });
    } catch (g) {
      alert(g);
    } finally {
      r(!1);
    }
  }, a = async function(v) {
    v.preventDefault();
    const x = v.target.password.value, S = v.target.confirm.value;
    if (!x || !S)
      return alert(s("please input password"));
    if (x !== S)
      return alert(s("passwords don't match"));
    t(!0), await pr({ password: x }), t(!1);
  }, u = async function(v) {
    await pr({ [v]: "" }), location.reload();
  }, c = async function(v) {
    v.preventDefault();
    const x = prompt(s("please input avatar url"));
    x && (await pr({ avatar: x }), location.reload());
  };
  let f = window.serverURL;
  if (!f) {
    const v = location.pathname.match(/(.*?\/)ui/);
    f = v ? v[1] : "/";
  }
  const d = new URLSearchParams(location.search);
  let h = window.TOKEN || sessionStorage.getItem("TOKEN") || d.get("token");
  return h || (h = localStorage.getItem("TOKEN")), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: s("setting") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx(
            "a",
            {
              href: "javascript:void(0)",
              title: s("change avatar"),
              target: "_blank",
              rel: "noreferrer",
              onClick: c,
              children: /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "profile-avatar",
                  src: o.avatar || `https://seccdn.libravatar.org/avatar/${o.mailMd5}?s=220&amp;r=X&amp;d=mm`
                }
              )
            }
          ) }),
          /* @__PURE__ */ p.jsx("h2", { children: o.display_name }),
          /* @__PURE__ */ p.jsx("p", { children: o.email })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ p.jsxs("section", { children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("profile") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: l, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: s("nickname") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: o.display_name
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-2", children: s("homepage") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-2",
                        name: "url",
                        type: "text",
                        className: "text",
                        defaultValue: o.url
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(
                      tt,
                      {
                        i18nKey: "homepage tips",
                        defaults: "Current users' homepage. It must be start with <code>http://</code> or <code>https://</code>.",
                        components: { code: /* @__PURE__ */ p.jsx("code", {}) }
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-2", children: s("exclusive label") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-2",
                        name: "label",
                        type: "text",
                        className: "text",
                        defaultValue: o.label
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: n,
                      children: s("update my profile")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "social-account", children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("connect to social account") }),
                /* @__PURE__ */ p.jsxs("div", { className: "account-list", children: [
                  window.ALLOW_SOCIALS && /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: Ir("account-item github", {
                        bind: o.github
                      }),
                      children: /* @__PURE__ */ p.jsx(
                        "a",
                        {
                          href: o.github ? `https://github.com/${o.github}` : `${f}oauth/github?state=${h}`,
                          target: o.github ? "_blank" : "_self",
                          rel: "noreferrer",
                          children: he.createElement(Dd)
                        }
                      )
                    }
                  ),
                  !window.ALLOW_SOCIALS && ["google"].map((v) => /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: Ir("account-item", v, {
                        bind: o[v]
                      }),
                      children: [
                        /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: o[v] ? `https://${v}.com/${o[v]}` : `${f}oauth/?type=${v}&state=${h}`,
                            target: o[v] ? "_blank" : "_self",
                            rel: "noreferrer",
                            children: he.createElement(Bd[v])
                          }
                        ),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "account-unbind",
                            onClick: () => u(v),
                            children: /* @__PURE__ */ p.jsx(
                              "svg",
                              {
                                className: "close-icon",
                                viewBox: "0 0 1024 1024",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                children: /* @__PURE__ */ p.jsx("path", { d: "m568.569 512 170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" })
                              }
                            )
                          }
                        )
                      ]
                    },
                    v
                  ))
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "change-password", children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("change password") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: a, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "password-0-11", children: s("password") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "password-0-11",
                        name: "password",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(tt, { i18nKey: "password tips" }) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "confirm-0-12", children: s("password again") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "confirm-0-12",
                        name: "confirm",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(tt, { i18nKey: "password again tips" }) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: e,
                      children: s("update password")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsx(Iy, {}),
              /* @__PURE__ */ p.jsx("br", {})
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function My() {
  const { t: e } = ft(), t = Vr(), n = Kr(), r = ct((c) => c.user), [i, o] = C.useState(!1), [s, l] = C.useState(!1), a = Hd({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  C.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const u = async function(c) {
    c.preventDefault(), o(!1);
    const f = c.target.nick.value;
    if (!f || f.length < 2)
      return o(e("nickname illegal"));
    const d = c.target.email.value;
    if (!d)
      return o(e("please input email"));
    const h = c.target.link.value, v = c.target.password.value, x = c.target["password-again"].value;
    if (!v || !x || x !== v)
      return o(e("passwords don't match"));
    try {
      l(!0);
      const S = await a("login"), m = await t.user.register({
        display_name: f,
        email: d,
        url: h,
        password: v,
        recaptchaV3: window.recaptchaV3Key ? S : void 0,
        turnstile: window.turnstileKey ? S : void 0
      });
      m && m.verify && alert(e("register success! please go to your mailbox to verify it!")), n("/ui/login");
    } catch (S) {
      o(S.message);
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: u, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "nick", className: "sr-only", children: e("nickname") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: e("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "link", className: "sr-only", children: e("website") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: e("website"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password-again", className: "sr-only", children: e("password again") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: e("password again")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("register")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(Ie, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
function Ay() {
  const e = ct((s) => s.user), { t } = ft(), [n, r] = C.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  C.useEffect(() => {
    hy({ page: n.page }).then((s) => {
      console.log(s), r({ ...n, ...s });
    });
  }, [n.page]);
  const i = (s) => [
    {
      key: "administrator",
      name: t("set administrator"),
      show: s.type === "guest",
      async action(l) {
        l.preventDefault(), await os({
          id: s.objectId,
          type: "administrator"
        }), s.type = "administrator", r({ ...n });
      }
    },
    {
      key: "guest",
      name: t("set guest"),
      show: s.type === "administrator",
      async action(l) {
        if (l.preventDefault(), s.objectId === e.objectId)
          return alert(t("You can't set yourself to be guest!"));
        await os({
          id: s.objectId,
          type: "guest"
        }), s.type = "guest", r({ ...n });
      }
    },
    {
      key: "label",
      name: t("set label"),
      show: !0,
      async action(l) {
        l.preventDefault();
        const a = prompt(t("please enter an exclusive label"));
        await os({
          id: s.objectId,
          label: a
        }), s.label = a, r({ ...n });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: l }) => l), o = (s) => /^verify/.test(s) ? t("verify") : t(s);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: t("manage users") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: t("nickname") }),
                /* @__PURE__ */ p.jsx("th", { children: t("email") }),
                /* @__PURE__ */ p.jsx("th", { children: t("role") }),
                /* @__PURE__ */ p.jsx("th", { children: t("exclusive label") }),
                /* @__PURE__ */ p.jsx("th", { children: t("action") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: n.data.map((s) => /* @__PURE__ */ p.jsxs("tr", { id: `user-${s.objectId}`, children: [
                /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    className: "avatar",
                    src: Zd(s.email, s.avatar),
                    alt: s.display_name,
                    width: "40",
                    height: "40"
                  }
                ) }) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: /^https:\/\//.test(s.url) ? s.url : "https://" + s.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: s.display_name
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: `mailto:${s.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: s.email
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: o(s.type) }),
                /* @__PURE__ */ p.jsx("td", { children: s.label }),
                /* @__PURE__ */ p.jsx("td", { className: "comment-action", children: i(s).map(
                  ({ key: l, disable: a, name: u, action: c }) => a ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: u }, l) : /* @__PURE__ */ p.jsx(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${l}`,
                      onClick: c,
                      children: u
                    },
                    l
                  )
                ) })
              ] }, s.objectId)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          qd,
          {
            current: n.page,
            total: n.totalPages,
            onChange: (s) => r({ ...n, page: s })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function ne(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var by = typeof Symbol == "function" && Symbol.observable || "@@observable", Gu = by, ss = () => Math.random().toString(36).substring(7).split("").join("."), zy = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ss()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ss()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ss()}`
}, Mr = zy;
function sa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Po(e, t, n) {
  if (typeof e != "function")
    throw new Error(ne(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ne(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ne(1));
    return n(Po)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), s = o, l = 0, a = !1;
  function u() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((S, m) => {
      s.set(m, S);
    }));
  }
  function c() {
    if (a)
      throw new Error(ne(3));
    return i;
  }
  function f(S) {
    if (typeof S != "function")
      throw new Error(ne(4));
    if (a)
      throw new Error(ne(5));
    let m = !0;
    u();
    const g = l++;
    return s.set(g, S), function() {
      if (m) {
        if (a)
          throw new Error(ne(6));
        m = !1, u(), s.delete(g), o = null;
      }
    };
  }
  function d(S) {
    if (!sa(S))
      throw new Error(ne(7));
    if (typeof S.type > "u")
      throw new Error(ne(8));
    if (typeof S.type != "string")
      throw new Error(ne(17));
    if (a)
      throw new Error(ne(9));
    try {
      a = !0, i = r(i, S);
    } finally {
      a = !1;
    }
    return (o = s).forEach((g) => {
      g();
    }), S;
  }
  function h(S) {
    if (typeof S != "function")
      throw new Error(ne(10));
    r = S, d({
      type: Mr.REPLACE
    });
  }
  function v() {
    const S = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(m) {
        if (typeof m != "object" || m === null)
          throw new Error(ne(11));
        function g() {
          const y = m;
          y.next && y.next(c());
        }
        return g(), {
          unsubscribe: S(g)
        };
      },
      [Gu]() {
        return this;
      }
    };
  }
  return d({
    type: Mr.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: c,
    replaceReducer: h,
    [Gu]: v
  };
}
function Uy(e, t, n) {
  return Po(e, t, n);
}
function Dy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Mr.INIT
    }) > "u")
      throw new Error(ne(12));
    if (typeof n(void 0, {
      type: Mr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ne(13));
  });
}
function fp(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    Dy(n);
  } catch (o) {
    i = o;
  }
  return function(s = {}, l) {
    if (i)
      throw i;
    let a = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c], d = n[f], h = s[f], v = d(h, l);
      if (typeof v > "u")
        throw l && l.type, new Error(ne(14));
      u[f] = v, a = a || v !== h;
    }
    return a = a || r.length !== Object.keys(s).length, a ? u : s;
  };
}
function Ju(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function By(e, t) {
  if (typeof e == "function")
    return Ju(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(ne(16));
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = Ju(i, t));
  }
  return n;
}
function la(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function dp(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(ne(15));
    };
    const s = {
      getState: i.getState,
      dispatch: (a, ...u) => o(a, ...u)
    }, l = e.map((a) => a(s));
    return o = la(...l)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Vy(e) {
  return sa(e) && "type" in e && typeof e.type == "string";
}
const Hy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Mr,
  applyMiddleware: dp,
  bindActionCreators: By,
  combineReducers: fp,
  compose: la,
  createStore: Po,
  isAction: Vy,
  isPlainObject: sa,
  legacy_createStore: Uy
}, Symbol.toStringTag, { value: "Module" }));
function qt() {
  return qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function Ky(e) {
  var t;
  e.models.forEach(function(a) {
    return pp(e, a);
  });
  var n = hp(e), r = dp.apply(Hy, e.reduxConfig.middlewares), i = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([r])) : Qy(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([r])), o = e.reduxConfig.createStore || Po, s = e.reduxConfig.initialState, l = s === void 0 ? {} : s;
  return o(n, l, i);
}
function pp(e, t) {
  var n = {}, r = Object.keys(t.reducers);
  r.forEach(function(l) {
    var a = Yy(l) ? l : t.name + "/" + l;
    n[a] = t.reducers[l];
  });
  var i = function(a, u) {
    return a === void 0 && (a = t.state), u.type in n ? n[u.type](a, u.payload, u.meta) : a;
  }, o = t.baseReducer, s = o ? function(l, a) {
    return l === void 0 && (l = t.state), i(o(l, a), a);
  } : i;
  e.forEachPlugin("onReducer", function(l) {
    s = l(s, t.name, e) || s;
  }), e.reduxConfig.reducers[t.name] = s;
}
function hp(e) {
  var t = e.reduxConfig.rootReducers, n = Wy(e.reduxConfig), r = n;
  return t && Object.keys(t).length && (r = function(o, s) {
    var l = t[s.type];
    return n(l ? l(o, s) : o, s);
  }), e.forEachPlugin("onRootReducer", function(i) {
    r = i(r, e) || r;
  }), r;
}
function Wy(e) {
  var t = e.combineReducers || fp;
  return Object.keys(e.reducers).length ? t(e.reducers) : function(n) {
    return n;
  };
}
function Qy(e) {
  return e === void 0 && (e = {}), !e.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : la;
}
function Yy(e) {
  return e.indexOf("/") > -1;
}
var Gy = function(t, n, r) {
}, Jy = function(t, n, r) {
}, mp = function(t, n, r, i) {
  return Object.assign(function(o, s) {
    var l = {
      type: n + "/" + r
    };
    return typeof o < "u" && (l.payload = o), typeof s < "u" && (l.meta = s), t.dispatch(l);
  }, {
    isEffect: i
  });
}, Xy = function(t, n) {
  var r = t.dispatch[n.name], i = Object.keys(n.reducers);
  i.forEach(function(o) {
    Gy(n.name, n.reducers), r[o] = mp(t, n.name, o, !1);
  });
}, Zy = function(t, n, r) {
  var i = t.dispatch[r.name], o = {};
  r.effects && (o = typeof r.effects == "function" ? r.effects(t.dispatch) : r.effects);
  var s = Object.keys(o);
  s.forEach(function(l) {
    Jy(r.name), n.effects[r.name + "/" + l] = o[l].bind(i), i[l] = mp(t, r.name, l, !0);
  });
};
function qy(e) {
  return {
    models: ew(e.models),
    reduxConfig: e.redux,
    forEachPlugin: function(n, r) {
      e.plugins.forEach(function(i) {
        i[n] && r(i[n]);
      });
    },
    effects: {}
  };
}
function ew(e) {
  return Object.keys(e).map(function(t) {
    var n = tw(t, e[t]);
    return n;
  });
}
function tw(e, t) {
  return qt({
    name: e,
    reducers: {}
  }, t);
}
function nw(e) {
  var t = qy(e);
  t.reduxConfig.middlewares.push(rw(t)), t.forEachPlugin("createMiddleware", function(i) {
    t.reduxConfig.middlewares.push(i(t));
  });
  var n = Ky(t), r = qt({}, n, {
    name: e.name,
    addModel: function(o) {
      pp(t, o), Xu(r, o), Zu(r, t, o), n.replaceReducer(hp(t)), n.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return iw(r, e.plugins), t.models.forEach(function(i) {
    return Xu(r, i);
  }), t.models.forEach(function(i) {
    return Zu(r, t, i);
  }), t.forEachPlugin("onStoreCreated", function(i) {
    r = i(r, t) || r;
  }), r;
}
function rw(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        return r.type in e.effects ? (n(r), e.effects[r.type](r.payload, t.getState(), r.meta)) : n(r);
      };
    };
  };
}
function Xu(e, t) {
  var n = {};
  e.dispatch["" + t.name] = n, Xy(e, t);
}
function Zu(e, t, n) {
  Zy(e, t, n), t.forEachPlugin("onModel", function(r) {
    r(n, e);
  });
}
function iw(e, t) {
  t.forEach(function(n) {
    if (n.exposed) {
      var r = Object.keys(n.exposed);
      r.forEach(function(i) {
        if (n.exposed) {
          var o = n.exposed[i], s = typeof o == "function";
          e[i] = s ? function() {
            for (var l = arguments.length, a = new Array(l), u = 0; u < l; u++)
              a[u] = arguments[u];
            return o.apply(void 0, [e].concat(a));
          } : Object.create(n.exposed[i]);
        }
      });
    }
  });
}
var qu = 0;
function ow(e) {
  var t, n, r, i = (t = e.name) != null ? t : "Rematch Store " + qu;
  qu += 1;
  var o = {
    name: i,
    models: e.models || {},
    plugins: e.plugins || [],
    redux: qt({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, e.redux, {
      devtoolOptions: qt({
        name: i
      }, (n = (r = e.redux) == null ? void 0 : r.devtoolOptions) != null ? n : {})
    })
  };
  return o.plugins.forEach(function(s) {
    s.config && (o.models = di(o.models, s.config.models), s.config.redux && (o.redux.initialState = di(o.redux.initialState, s.config.redux.initialState), o.redux.reducers = di(o.redux.reducers, s.config.redux.reducers), o.redux.rootReducers = di(o.redux.rootReducers, s.config.redux.reducers), o.redux.enhancers = [].concat(o.redux.enhancers, s.config.redux.enhancers || []), o.redux.middlewares = [].concat(o.redux.middlewares, s.config.redux.middlewares || []), o.redux.combineReducers = o.redux.combineReducers || s.config.redux.combineReducers, o.redux.createStore = o.redux.createStore || s.config.redux.createStore));
  }), o;
}
function di(e, t) {
  return t ? qt({}, t, e) : e;
}
var sw = function(t) {
  var n = ow(t || {});
  return nw(n);
};
async function lw() {
  return ie("token").catch(() => {
    gp(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function aw({ email: e, password: t, code: n, recaptchaV3: r, turnstile: i }) {
  return ie({
    url: "token",
    method: "POST",
    body: { email: e, password: t, code: n, recaptchaV3: r, turnstile: i }
  });
}
async function gp() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function uw(e) {
  return ie({ url: "user", method: "POST", body: e });
}
async function cw({ email: e }) {
  return ie({
    url: "user/password",
    method: "PUT",
    body: { email: e }
  });
}
const fw = {
  state: null,
  reducers: {
    setUser(e, t) {
      return t;
    },
    updateUser(e, t) {
      return { ...e, ...t };
    }
  },
  effects: (e) => ({
    async loadUserInfo() {
      const t = await lw();
      if (t != null && t.email) {
        if (window.opener) {
          const n = localStorage.getItem("TOKEN"), r = !!n, i = n || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: i, remember: r, ...t } },
            "*"
          );
        }
        return e.user.setUser(t);
      }
    },
    async login({ email: t, password: n, code: r, remember: i, recaptchaV3: o, turnstile: s }) {
      const { token: l, ...a } = await aw({
        email: t,
        password: n,
        code: r,
        recaptchaV3: o,
        turnstile: s
      });
      return l && (window.TOKEN = l, sessionStorage.setItem("TOKEN", l), i && localStorage.setItem("TOKEN", l), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: l, remember: i, ...a } },
        "*"
      )), e.user.setUser(a);
    },
    logout() {
      gp(), e.user.setUser(null);
    },
    register(t) {
      return uw(t);
    },
    forgot(t) {
      return cw(t);
    },
    async updateProfile(t) {
      return await pr(t), window.opener && window.opener.postMessage({ type: "profile", data: t }, "*"), e.user.updateUser(t);
    }
  })
}, vp = sw({ models: { user: fw } });
function pi(e) {
  const t = ct((n) => n.user);
  return C.useEffect(() => {
    const n = e.meta || {}, r = e.basename || "";
    if (!(t != null && t.email))
      return location.href = r + "/ui/login?redirect=" + location.pathname.replace(r, "");
    if (n.auth ? e.meta.auth !== t.type : !1)
      return location.href = r + "/ui/profile";
  }, [t, e.meta]), t ? e.children : null;
}
function dw() {
  const e = location.pathname.match(/(.*?)\/ui/), t = e ? e[1] : "/";
  return /* @__PURE__ */ p.jsx(dg, { store: vp, children: /* @__PURE__ */ p.jsx(u1, { basename: t, children: /* @__PURE__ */ p.jsxs(n1, { children: [
    /* @__PURE__ */ p.jsx(
      mt,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(pi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Ny, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      mt,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(pi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Ay, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      mt,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(pi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Ly, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(mt, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ p.jsx(my, {}) }),
    /* @__PURE__ */ p.jsx(mt, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ p.jsx(My, {}) }),
    /* @__PURE__ */ p.jsx(mt, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ p.jsx(Fv, {}) }),
    /* @__PURE__ */ p.jsx(
      mt,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(pi, { children: /* @__PURE__ */ p.jsx(Fy, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: pw,
  forEach: hw
} = [];
function mw(e) {
  return hw.call(pw.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const ec = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, gw = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!ec.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!ec.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, tc = {
  create(e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = gw(e, encodeURIComponent(t), i);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var vw = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return tc.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && tc.create(n, e, r, i, o);
  }
}, yw = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let l = 0; l < s.length; l++) {
        const a = s[l].indexOf("=");
        a > 0 && s[l].substring(0, a) === t && (n = s[l].substring(a + 1));
      }
    }
    return n;
  }
};
let Xn = null;
const nc = () => {
  if (Xn !== null) return Xn;
  try {
    Xn = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    Xn = !1;
  }
  return Xn;
};
var ww = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && nc())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && nc() && window.localStorage.setItem(n, e);
  }
};
let Zn = null;
const rc = () => {
  if (Zn !== null) return Zn;
  try {
    Zn = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Zn = !1;
  }
  return Zn;
};
var xw = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && rc())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && rc() && window.sessionStorage.setItem(n, e);
  }
}, Sw = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: i
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), i && t.push(i);
    }
    return t.length > 0 ? t : void 0;
  }
}, Ew = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, kw = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var i;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (i = n[typeof t == "number" ? t : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, Cw = {
  name: "subdomain",
  lookup(e) {
    var i, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function Nw() {
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
    convertDetectedLanguage: (e) => e
  };
}
class yp {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = mw(n, this.options || {}, Nw()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(vw), this.addDetector(yw), this.addDetector(ww), this.addDetector(xw), this.addDetector(Sw), this.addDetector(Ew), this.addDetector(kw), this.addDetector(Cw);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
yp.type = "languageDetector";
ce.use(yp).use(_1).init({
  // we init with resources
  resources: Iv,
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
async function jw() {
  await Promise.race([
    new Promise((n) => setTimeout(n, 50)),
    new Promise((n) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && n(r);
      });
    }),
    new Promise((n) => {
      const i = new URLSearchParams(location.search).get("token");
      i && n(i);
    })
  ]).then((n) => {
    n && (window.TOKEN = n, sessionStorage.setItem("TOKEN", n));
  }), await Promise.all([vp.dispatch({ type: "user/loadUserInfo" })]).catch(
    (n) => {
      console.error(n);
    }
  );
  const e = document.createElement("div");
  e.style.height = "100%", document.body.appendChild(e), vd(e).render(
    /* @__PURE__ */ p.jsx(he.StrictMode, { children: /* @__PURE__ */ p.jsx(dw, {}) })
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
jw();
