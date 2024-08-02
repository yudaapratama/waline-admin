(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#373c42;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#292d33}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#373c42}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function Yk(o, r) {
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
function sd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var MS = { exports: {} }, wv = {}, US = { exports: {} }, Zf = { exports: {} };
Zf.exports;
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
    var s = "18.3.1", l = Symbol.for("react.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function A(N) {
      if (N === null || typeof N != "object")
        return null;
      var T = O && N[O] || N[P];
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
    }, M = {
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
    }, Z = {}, Oe = null;
    function ke(N) {
      Oe = N;
    }
    Z.setExtraStackFrame = function(N) {
      Oe = N;
    }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
      var N = "";
      Oe && (N += Oe);
      var T = Z.getCurrentStack;
      return T && (N += T() || ""), N;
    };
    var he = !1, be = !1, tt = !1, me = !1, Ee = !1, Ce = {
      ReactCurrentDispatcher: $,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: I
    };
    Ce.ReactDebugCurrentFrame = Z, Ce.ReactCurrentActQueue = M;
    function Ze(N) {
      {
        for (var T = arguments.length, J = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          J[Y - 1] = arguments[Y];
        qe("warn", N, J);
      }
    }
    function we(N) {
      {
        for (var T = arguments.length, J = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          J[Y - 1] = arguments[Y];
        qe("error", N, J);
      }
    }
    function qe(N, T, J) {
      {
        var Y = Ce.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (T += "%s", J = J.concat([ee]));
        var xe = J.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + T), Function.prototype.apply.call(console[N], console, xe);
      }
    }
    var Dt = {};
    function Ke(N, T) {
      {
        var J = N.constructor, Y = J && (J.displayName || J.name) || "ReactClass", ee = Y + "." + T;
        if (Dt[ee])
          return;
        we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, Y), Dt[ee] = !0;
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
      enqueueForceUpdate: function(N, T, J) {
        Ke(N, "forceUpdate");
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
      enqueueReplaceState: function(N, T, J, Y) {
        Ke(N, "replaceState");
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
      enqueueSetState: function(N, T, J, Y) {
        Ke(N, "setState");
      }
    }, wt = Object.assign, dn = {};
    Object.freeze(dn);
    function Hn(N, T, J) {
      this.props = N, this.context = T, this.refs = dn, this.updater = J || fn;
    }
    Hn.prototype.isReactComponent = {}, Hn.prototype.setState = function(N, T) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, T, "setState");
    }, Hn.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    {
      var za = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, ya = function(N, T) {
        Object.defineProperty(Hn.prototype, N, {
          get: function() {
            Ze("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
          }
        });
      };
      for (var ba in za)
        za.hasOwnProperty(ba) && ya(ba, za[ba]);
    }
    function ia() {
    }
    ia.prototype = Hn.prototype;
    function Xt(N, T, J) {
      this.props = N, this.context = T, this.refs = dn, this.updater = J || fn;
    }
    var On = Xt.prototype = new ia();
    On.constructor = Xt, wt(On, Hn.prototype), On.isPureReactComponent = !0;
    function Jn() {
      var N = {
        current: null
      };
      return Object.seal(N), N;
    }
    var Bn = Array.isArray;
    function kt(N) {
      return Bn(N);
    }
    function pn(N) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, J = T && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return J;
      }
    }
    function It(N) {
      try {
        return At(N), !1;
      } catch {
        return !0;
      }
    }
    function At(N) {
      return "" + N;
    }
    function Pt(N) {
      if (It(N))
        return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(N)), At(N);
    }
    function In(N, T, J) {
      var Y = N.displayName;
      if (Y)
        return Y;
      var ee = T.displayName || T.name || "";
      return ee !== "" ? J + "(" + ee + ")" : J;
    }
    function oa(N) {
      return N.displayName || "Context";
    }
    function Ln(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
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
        case x:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case m:
            var T = N;
            return oa(T) + ".Consumer";
          case v:
            var J = N;
            return oa(J._context) + ".Provider";
          case g:
            return In(N, N.render, "ForwardRef");
          case w:
            var Y = N.displayName || null;
            return Y !== null ? Y : Ln(N.type) || "Memo";
          case j: {
            var ee = N, xe = ee._payload, ce = ee._init;
            try {
              return Ln(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xa = Object.prototype.hasOwnProperty, sa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, En, la, mn;
    mn = {};
    function Yn(N) {
      if (xa.call(N, "ref")) {
        var T = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Rt(N) {
      if (xa.call(N, "key")) {
        var T = Object.getOwnPropertyDescriptor(N, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function ua(N, T) {
      var J = function() {
        En || (En = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      J.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: J,
        configurable: !0
      });
    }
    function ir(N, T) {
      var J = function() {
        la || (la = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      J.isReactWarning = !0, Object.defineProperty(N, "ref", {
        get: J,
        configurable: !0
      });
    }
    function or(N) {
      if (typeof N.ref == "string" && I.current && N.__self && I.current.stateNode !== N.__self) {
        var T = Ln(I.current.type);
        mn[T] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, N.ref), mn[T] = !0);
      }
    }
    var ne = function(N, T, J, Y, ee, xe, ce) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: T,
        ref: J,
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
    function de(N, T, J) {
      var Y, ee = {}, xe = null, ce = null, Re = null, $e = null;
      if (T != null) {
        Yn(T) && (ce = T.ref, or(T)), Rt(T) && (Pt(T.key), xe = "" + T.key), Re = T.__self === void 0 ? null : T.__self, $e = T.__source === void 0 ? null : T.__source;
        for (Y in T)
          xa.call(T, Y) && !sa.hasOwnProperty(Y) && (ee[Y] = T[Y]);
      }
      var rt = arguments.length - 2;
      if (rt === 1)
        ee.children = J;
      else if (rt > 1) {
        for (var ut = Array(rt), ct = 0; ct < rt; ct++)
          ut[ct] = arguments[ct + 2];
        Object.freeze && Object.freeze(ut), ee.children = ut;
      }
      if (N && N.defaultProps) {
        var ht = N.defaultProps;
        for (Y in ht)
          ee[Y] === void 0 && (ee[Y] = ht[Y]);
      }
      if (xe || ce) {
        var Nt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
        xe && ua(ee, Nt), ce && ir(ee, Nt);
      }
      return ne(N, xe, ce, Re, $e, I.current, ee);
    }
    function Me(N, T) {
      var J = ne(N.type, T, N.ref, N._self, N._source, N._owner, N.props);
      return J;
    }
    function nt(N, T, J) {
      if (N == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
      var Y, ee = wt({}, N.props), xe = N.key, ce = N.ref, Re = N._self, $e = N._source, rt = N._owner;
      if (T != null) {
        Yn(T) && (ce = T.ref, rt = I.current), Rt(T) && (Pt(T.key), xe = "" + T.key);
        var ut;
        N.type && N.type.defaultProps && (ut = N.type.defaultProps);
        for (Y in T)
          xa.call(T, Y) && !sa.hasOwnProperty(Y) && (T[Y] === void 0 && ut !== void 0 ? ee[Y] = ut[Y] : ee[Y] = T[Y]);
      }
      var ct = arguments.length - 2;
      if (ct === 1)
        ee.children = J;
      else if (ct > 1) {
        for (var ht = Array(ct), Nt = 0; Nt < ct; Nt++)
          ht[Nt] = arguments[Nt + 2];
        ee.children = ht;
      }
      return ne(N.type, xe, ce, Re, $e, rt, ee);
    }
    function at(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    var Mt = ".", jt = ":";
    function _n(N) {
      var T = /[=:]/g, J = {
        "=": "=0",
        ":": "=2"
      }, Y = N.replace(T, function(ee) {
        return J[ee];
      });
      return "$" + Y;
    }
    var lt = !1, Kn = /\/+/g;
    function pt(N) {
      return N.replace(Kn, "$&/");
    }
    function mt(N, T) {
      return typeof N == "object" && N !== null && N.key != null ? (Pt(N.key), _n("" + N.key)) : T.toString(36);
    }
    function $a(N, T, J, Y, ee) {
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
        var Re = N, $e = ee(Re), rt = Y === "" ? Mt + mt(Re, 0) : Y;
        if (kt($e)) {
          var ut = "";
          rt != null && (ut = pt(rt) + "/"), $a($e, T, ut, "", function(gd) {
            return gd;
          });
        } else $e != null && (at($e) && ($e.key && (!Re || Re.key !== $e.key) && Pt($e.key), $e = Me(
          $e,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          J + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          ($e.key && (!Re || Re.key !== $e.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            pt("" + $e.key) + "/"
          ) : "") + rt
        )), T.push($e));
        return 1;
      }
      var ct, ht, Nt = 0, Qe = Y === "" ? Mt : Y + jt;
      if (kt(N))
        for (var Ir = 0; Ir < N.length; Ir++)
          ct = N[Ir], ht = Qe + mt(ct, Ir), Nt += $a(ct, T, J, ht, ee);
      else {
        var yo = A(N);
        if (typeof yo == "function") {
          var As = N;
          yo === As.entries && (lt || Ze("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lt = !0);
          for (var vd = yo.call(As), fr, Ps = 0; !(fr = vd.next()).done; )
            ct = fr.value, ht = Qe + mt(ct, Ps++), Nt += $a(ct, T, J, ht, ee);
        } else if (xe === "object") {
          var Ms = String(N);
          throw new Error("Objects are not valid as a React child (found: " + (Ms === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : Ms) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Nt;
    }
    function Sa(N, T, J) {
      if (N == null)
        return N;
      var Y = [], ee = 0;
      return $a(N, Y, "", "", function(xe) {
        return T.call(J, xe, ee++);
      }), Y;
    }
    function Ci(N) {
      var T = 0;
      return Sa(N, function() {
        T++;
      }), T;
    }
    function co(N, T, J) {
      Sa(N, function() {
        T.apply(this, arguments);
      }, J);
    }
    function bs(N) {
      return Sa(N, function(T) {
        return T;
      }) || [];
    }
    function wi(N) {
      if (!at(N))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return N;
    }
    function Ri(N) {
      var T = {
        $$typeof: m,
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
        $$typeof: v,
        _context: T
      };
      var J = !1, Y = !1, ee = !1;
      {
        var xe = {
          $$typeof: m,
          _context: T
        };
        Object.defineProperties(xe, {
          Provider: {
            get: function() {
              return Y || (Y = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
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
              return J || (J = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
            }
          },
          displayName: {
            get: function() {
              return T.displayName;
            },
            set: function(ce) {
              ee || (Ze("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), ee = !0);
            }
          }
        }), T.Consumer = xe;
      }
      return T._currentRenderer = null, T._currentRenderer2 = null, T;
    }
    var sr = -1, Ur = 0, lr = 1, Ha = 2;
    function Na(N) {
      if (N._status === sr) {
        var T = N._result, J = T();
        if (J.then(function(xe) {
          if (N._status === Ur || N._status === sr) {
            var ce = N;
            ce._status = lr, ce._result = xe;
          }
        }, function(xe) {
          if (N._status === Ur || N._status === sr) {
            var ce = N;
            ce._status = Ha, ce._result = xe;
          }
        }), N._status === sr) {
          var Y = N;
          Y._status = Ur, Y._result = J;
        }
      }
      if (N._status === lr) {
        var ee = N._result;
        return ee === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw N._result;
    }
    function D(N) {
      var T = {
        // We use these fields to store the result.
        _status: sr,
        _result: N
      }, J = {
        $$typeof: j,
        _payload: T,
        _init: Na
      };
      {
        var Y, ee;
        Object.defineProperties(J, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(xe) {
              we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = xe, Object.defineProperty(J, "defaultProps", {
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
              we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = xe, Object.defineProperty(J, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return J;
    }
    function Q(N) {
      N != null && N.$$typeof === w ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof N != "function" ? we("forwardRef requires a render function but was given %s.", N === null ? "null" : typeof N) : N.length !== 0 && N.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", N.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), N != null && (N.defaultProps != null || N.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var T = {
        $$typeof: g,
        render: N
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
            J = Y, !N.name && !N.displayName && (N.displayName = Y);
          }
        });
      }
      return T;
    }
    var ae;
    ae = Symbol.for("react.module.reference");
    function ge(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === f || N === y || Ee || N === c || N === x || N === S || me || N === U || he || be || tt || typeof N == "object" && N !== null && (N.$$typeof === j || N.$$typeof === w || N.$$typeof === v || N.$$typeof === m || N.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === ae || N.getModuleId !== void 0));
    }
    function ze(N, T) {
      ge(N) || we("memo: The first argument must be a component. Instead received: %s", N === null ? "null" : typeof N);
      var J = {
        $$typeof: w,
        type: N,
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
            Y = ee, !N.name && !N.displayName && (N.displayName = ee);
          }
        });
      }
      return J;
    }
    function Ne() {
      var N = $.current;
      return N === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), N;
    }
    function Pe(N) {
      var T = Ne();
      if (N._context !== void 0) {
        var J = N._context;
        J.Consumer === N ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : J.Provider === N && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return T.useContext(N);
    }
    function _e(N) {
      var T = Ne();
      return T.useState(N);
    }
    function yt(N, T, J) {
      var Y = Ne();
      return Y.useReducer(N, T, J);
    }
    function Ue(N) {
      var T = Ne();
      return T.useRef(N);
    }
    function gt(N, T) {
      var J = Ne();
      return J.useEffect(N, T);
    }
    function hn(N, T) {
      var J = Ne();
      return J.useInsertionEffect(N, T);
    }
    function Ea(N, T) {
      var J = Ne();
      return J.useLayoutEffect(N, T);
    }
    function Ca(N, T) {
      var J = Ne();
      return J.useCallback(N, T);
    }
    function Yt(N, T) {
      var J = Ne();
      return J.useMemo(N, T);
    }
    function ji(N, T, J) {
      var Y = Ne();
      return Y.useImperativeHandle(N, T, J);
    }
    function fo(N, T) {
      {
        var J = Ne();
        return J.useDebugValue(N, T);
      }
    }
    function xs() {
      var N = Ne();
      return N.useTransition();
    }
    function ur(N) {
      var T = Ne();
      return T.useDeferredValue(N);
    }
    function Fe() {
      var N = Ne();
      return N.useId();
    }
    function Ti(N, T, J) {
      var Y = Ne();
      return Y.useSyncExternalStore(N, T, J);
    }
    var Vr = 0, Ss, Ns, Es, Cs, ws, Rs, js;
    function Du() {
    }
    Du.__reactDisabledLog = !0;
    function pd() {
      {
        if (Vr === 0) {
          Ss = console.log, Ns = console.info, Es = console.warn, Cs = console.error, ws = console.group, Rs = console.groupCollapsed, js = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Du,
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
        Vr++;
      }
    }
    function Ts() {
      {
        if (Vr--, Vr === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, N, {
              value: Ss
            }),
            info: wt({}, N, {
              value: Ns
            }),
            warn: wt({}, N, {
              value: Es
            }),
            error: wt({}, N, {
              value: Cs
            }),
            group: wt({}, N, {
              value: ws
            }),
            groupCollapsed: wt({}, N, {
              value: Rs
            }),
            groupEnd: wt({}, N, {
              value: js
            })
          });
        }
        Vr < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Di = Ce.ReactCurrentDispatcher, ca;
    function Fr(N, T, J) {
      {
        if (ca === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            ca = Y && Y[1] || "";
          }
        return `
` + ca + N;
      }
    }
    var zr = !1, po;
    {
      var Ds = typeof WeakMap == "function" ? WeakMap : Map;
      po = new Ds();
    }
    function ku(N, T) {
      if (!N || zr)
        return "";
      {
        var J = po.get(N);
        if (J !== void 0)
          return J;
      }
      var Y;
      zr = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = Di.current, Di.current = null, pd();
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
            } catch (Qe) {
              Y = Qe;
            }
            Reflect.construct(N, [], ce);
          } else {
            try {
              ce.call();
            } catch (Qe) {
              Y = Qe;
            }
            N.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            Y = Qe;
          }
          N();
        }
      } catch (Qe) {
        if (Qe && Y && typeof Qe.stack == "string") {
          for (var Re = Qe.stack.split(`
`), $e = Y.stack.split(`
`), rt = Re.length - 1, ut = $e.length - 1; rt >= 1 && ut >= 0 && Re[rt] !== $e[ut]; )
            ut--;
          for (; rt >= 1 && ut >= 0; rt--, ut--)
            if (Re[rt] !== $e[ut]) {
              if (rt !== 1 || ut !== 1)
                do
                  if (rt--, ut--, ut < 0 || Re[rt] !== $e[ut]) {
                    var ct = `
` + Re[rt].replace(" at new ", " at ");
                    return N.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", N.displayName)), typeof N == "function" && po.set(N, ct), ct;
                  }
                while (rt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        zr = !1, Di.current = xe, Ts(), Error.prepareStackTrace = ee;
      }
      var ht = N ? N.displayName || N.name : "", Nt = ht ? Fr(ht) : "";
      return typeof N == "function" && po.set(N, Nt), Nt;
    }
    function ks(N, T, J) {
      return ku(N, !1);
    }
    function md(N) {
      var T = N.prototype;
      return !!(T && T.isReactComponent);
    }
    function $r(N, T, J) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return ku(N, md(N));
      if (typeof N == "string")
        return Fr(N);
      switch (N) {
        case x:
          return Fr("Suspense");
        case S:
          return Fr("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case g:
            return ks(N.render);
          case w:
            return $r(N.type, T, J);
          case j: {
            var Y = N, ee = Y._payload, xe = Y._init;
            try {
              return $r(xe(ee), T, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Ou = {}, Os = Ce.ReactDebugCurrentFrame;
    function mo(N) {
      if (N) {
        var T = N._owner, J = $r(N.type, N._source, T ? T.type : null);
        Os.setExtraStackFrame(J);
      } else
        Os.setExtraStackFrame(null);
    }
    function Lu(N, T, J, Y, ee) {
      {
        var xe = Function.call.bind(xa);
        for (var ce in N)
          if (xe(N, ce)) {
            var Re = void 0;
            try {
              if (typeof N[ce] != "function") {
                var $e = Error((Y || "React class") + ": " + J + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              Re = N[ce](T, ce, Y, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Re = rt;
            }
            Re && !(Re instanceof Error) && (mo(ee), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", J, ce, typeof Re), mo(null)), Re instanceof Error && !(Re.message in Ou) && (Ou[Re.message] = !0, mo(ee), we("Failed %s type: %s", J, Re.message), mo(null));
          }
      }
    }
    function Ye(N) {
      if (N) {
        var T = N._owner, J = $r(N.type, N._source, T ? T.type : null);
        ke(J);
      } else
        ke(null);
    }
    var Ls;
    Ls = !1;
    function _s() {
      if (I.current) {
        var N = Ln(I.current.type);
        if (N)
          return `

Check the render method of \`` + N + "`.";
      }
      return "";
    }
    function Le(N) {
      if (N !== void 0) {
        var T = N.fileName.replace(/^.*[\\\/]/, ""), J = N.lineNumber;
        return `

Check your code at ` + T + ":" + J + ".";
      }
      return "";
    }
    function _u(N) {
      return N != null ? Le(N.__source) : "";
    }
    var vn = {};
    function ki(N) {
      var T = _s();
      if (!T) {
        var J = typeof N == "string" ? N : N.displayName || N.name;
        J && (T = `

Check the top-level render call using <` + J + ">.");
      }
      return T;
    }
    function Hr(N, T) {
      if (!(!N._store || N._store.validated || N.key != null)) {
        N._store.validated = !0;
        var J = ki(T);
        if (!vn[J]) {
          vn[J] = !0;
          var Y = "";
          N && N._owner && N._owner !== I.current && (Y = " It was passed a child from " + Ln(N._owner.type) + "."), Ye(N), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, Y), Ye(null);
        }
      }
    }
    function Au(N, T) {
      if (typeof N == "object") {
        if (kt(N))
          for (var J = 0; J < N.length; J++) {
            var Y = N[J];
            at(Y) && Hr(Y, T);
          }
        else if (at(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ee = A(N);
          if (typeof ee == "function" && ee !== N.entries)
            for (var xe = ee.call(N), ce; !(ce = xe.next()).done; )
              at(ce.value) && Hr(ce.value, T);
        }
      }
    }
    function Kt(N) {
      {
        var T = N.type;
        if (T == null || typeof T == "string")
          return;
        var J;
        if (typeof T == "function")
          J = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === w))
          J = T.propTypes;
        else
          return;
        if (J) {
          var Y = Ln(T);
          Lu(J, N.props, "prop", Y, N);
        } else if (T.PropTypes !== void 0 && !Ls) {
          Ls = !0;
          var ee = Ln(T);
          we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(N) {
      {
        for (var T = Object.keys(N.props), J = 0; J < T.length; J++) {
          var Y = T[J];
          if (Y !== "children" && Y !== "key") {
            Ye(N), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ye(null);
            break;
          }
        }
        N.ref !== null && (Ye(N), we("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    function Pu(N, T, J) {
      var Y = ge(N);
      if (!Y) {
        var ee = "";
        (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var xe = _u(T);
        xe ? ee += xe : ee += _s();
        var ce;
        N === null ? ce = "null" : kt(N) ? ce = "array" : N !== void 0 && N.$$typeof === l ? (ce = "<" + (Ln(N.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof N, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, ee);
      }
      var Re = de.apply(this, arguments);
      if (Re == null)
        return Re;
      if (Y)
        for (var $e = 2; $e < arguments.length; $e++)
          Au(arguments[$e], N);
      return N === f ? bt(Re) : Kt(Re), Re;
    }
    var Wn = !1;
    function An(N) {
      var T = Pu.bind(null, N);
      return T.type = N, Wn || (Wn = !0, Ze("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
        enumerable: !1,
        get: function() {
          return Ze("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: N
          }), N;
        }
      }), T;
    }
    function Ja(N, T, J) {
      for (var Y = nt.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        Au(arguments[ee], Y.type);
      return Kt(Y), Y;
    }
    function hd(N, T) {
      var J = k.transition;
      k.transition = {};
      var Y = k.transition;
      k.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        N();
      } finally {
        if (k.transition = J, J === null && Y._updatedFibers) {
          var ee = Y._updatedFibers.size;
          ee > 10 && Ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
        }
      }
    }
    var ho = !1, Oi = null;
    function Mu(N) {
      if (Oi === null)
        try {
          var T = ("require" + Math.random()).slice(0, 7), J = o && o[T];
          Oi = J.call(o, "timers").setImmediate;
        } catch {
          Oi = function(ee) {
            ho === !1 && (ho = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var xe = new MessageChannel();
            xe.port1.onmessage = ee, xe.port2.postMessage(void 0);
          };
        }
      return Oi(N);
    }
    var Jr = 0, Uu = !1;
    function Vu(N) {
      {
        var T = Jr;
        Jr++, M.current === null && (M.current = []);
        var J = M.isBatchingLegacy, Y;
        try {
          if (M.isBatchingLegacy = !0, Y = N(), !J && M.didScheduleLegacyUpdate) {
            var ee = M.current;
            ee !== null && (M.didScheduleLegacyUpdate = !1, go(ee));
          }
        } catch (ht) {
          throw cr(T), ht;
        } finally {
          M.isBatchingLegacy = J;
        }
        if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
          var xe = Y, ce = !1, Re = {
            then: function(ht, Nt) {
              ce = !0, xe.then(function(Qe) {
                cr(T), Jr === 0 ? vo(Qe, ht, Nt) : ht(Qe);
              }, function(Qe) {
                cr(T), Nt(Qe);
              });
            }
          };
          return !Uu && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            ce || (Uu = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Re;
        } else {
          var $e = Y;
          if (cr(T), Jr === 0) {
            var rt = M.current;
            rt !== null && (go(rt), M.current = null);
            var ut = {
              then: function(ht, Nt) {
                M.current === null ? (M.current = [], vo($e, ht, Nt)) : ht($e);
              }
            };
            return ut;
          } else {
            var ct = {
              then: function(ht, Nt) {
                ht($e);
              }
            };
            return ct;
          }
        }
      }
    }
    function cr(N) {
      N !== Jr - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Jr = N;
    }
    function vo(N, T, J) {
      {
        var Y = M.current;
        if (Y !== null)
          try {
            go(Y), Mu(function() {
              Y.length === 0 ? (M.current = null, T(N)) : vo(N, T, J);
            });
          } catch (ee) {
            J(ee);
          }
        else
          T(N);
      }
    }
    var Br = !1;
    function go(N) {
      if (!Br) {
        Br = !0;
        var T = 0;
        try {
          for (; T < N.length; T++) {
            var J = N[T];
            do
              J = J(!0);
            while (J !== null);
          }
          N.length = 0;
        } catch (Y) {
          throw N = N.slice(T + 1), Y;
        } finally {
          Br = !1;
        }
      }
    }
    var Fu = Pu, zu = Ja, $u = An, Hu = {
      map: Sa,
      forEach: co,
      count: Ci,
      toArray: bs,
      only: wi
    };
    r.Children = Hu, r.Component = Hn, r.Fragment = f, r.Profiler = y, r.PureComponent = Xt, r.StrictMode = c, r.Suspense = x, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, r.act = Vu, r.cloneElement = zu, r.createContext = Ri, r.createElement = Fu, r.createFactory = $u, r.createRef = Jn, r.forwardRef = Q, r.isValidElement = at, r.lazy = D, r.memo = ze, r.startTransition = hd, r.unstable_act = Vu, r.useCallback = Ca, r.useContext = Pe, r.useDebugValue = fo, r.useDeferredValue = ur, r.useEffect = gt, r.useId = Fe, r.useImperativeHandle = ji, r.useInsertionEffect = hn, r.useLayoutEffect = Ea, r.useMemo = Yt, r.useReducer = yt, r.useRef = Ue, r.useState = _e, r.useSyncExternalStore = Ti, r.useTransition = xs, r.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(Zf, Zf.exports);
var Kk = Zf.exports;
US.exports = Kk;
var V = US.exports;
const ld = /* @__PURE__ */ sd(V), Rv = /* @__PURE__ */ Yk({
  __proto__: null,
  default: ld
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
  var o = V, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), j = Symbol.iterator, U = "@@iterator";
  function O(D) {
    if (D === null || typeof D != "object")
      return null;
    var Q = j && D[j] || D[U];
    return typeof Q == "function" ? Q : null;
  }
  var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function A(D) {
    {
      for (var Q = arguments.length, ae = new Array(Q > 1 ? Q - 1 : 0), ge = 1; ge < Q; ge++)
        ae[ge - 1] = arguments[ge];
      $("error", D, ae);
    }
  }
  function $(D, Q, ae) {
    {
      var ge = P.ReactDebugCurrentFrame, ze = ge.getStackAddendum();
      ze !== "" && (Q += "%s", ae = ae.concat([ze]));
      var Ne = ae.map(function(Pe) {
        return String(Pe);
      });
      Ne.unshift("Warning: " + Q), Function.prototype.apply.call(console[D], console, Ne);
    }
  }
  var k = !1, M = !1, I = !1, Z = !1, Oe = !1, ke;
  ke = Symbol.for("react.module.reference");
  function he(D) {
    return !!(typeof D == "string" || typeof D == "function" || D === l || D === f || Oe || D === d || D === m || D === g || Z || D === w || k || M || I || typeof D == "object" && D !== null && (D.$$typeof === S || D.$$typeof === x || D.$$typeof === c || D.$$typeof === y || D.$$typeof === v || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    D.$$typeof === ke || D.getModuleId !== void 0));
  }
  function be(D, Q, ae) {
    var ge = D.displayName;
    if (ge)
      return ge;
    var ze = Q.displayName || Q.name || "";
    return ze !== "" ? ae + "(" + ze + ")" : ae;
  }
  function tt(D) {
    return D.displayName || "Context";
  }
  function me(D) {
    if (D == null)
      return null;
    if (typeof D.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
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
      case m:
        return "Suspense";
      case g:
        return "SuspenseList";
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case y:
          var Q = D;
          return tt(Q) + ".Consumer";
        case c:
          var ae = D;
          return tt(ae._context) + ".Provider";
        case v:
          return be(D, D.render, "ForwardRef");
        case x:
          var ge = D.displayName || null;
          return ge !== null ? ge : me(D.type) || "Memo";
        case S: {
          var ze = D, Ne = ze._payload, Pe = ze._init;
          try {
            return me(Pe(Ne));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Ee = Object.assign, Ce = 0, Ze, we, qe, Dt, Ke, fn, wt;
  function dn() {
  }
  dn.__reactDisabledLog = !0;
  function Hn() {
    {
      if (Ce === 0) {
        Ze = console.log, we = console.info, qe = console.warn, Dt = console.error, Ke = console.group, fn = console.groupCollapsed, wt = console.groupEnd;
        var D = {
          configurable: !0,
          enumerable: !0,
          value: dn,
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
      Ce++;
    }
  }
  function za() {
    {
      if (Ce--, Ce === 0) {
        var D = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Ee({}, D, {
            value: Ze
          }),
          info: Ee({}, D, {
            value: we
          }),
          warn: Ee({}, D, {
            value: qe
          }),
          error: Ee({}, D, {
            value: Dt
          }),
          group: Ee({}, D, {
            value: Ke
          }),
          groupCollapsed: Ee({}, D, {
            value: fn
          }),
          groupEnd: Ee({}, D, {
            value: wt
          })
        });
      }
      Ce < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ya = P.ReactCurrentDispatcher, ba;
  function ia(D, Q, ae) {
    {
      if (ba === void 0)
        try {
          throw Error();
        } catch (ze) {
          var ge = ze.stack.trim().match(/\n( *(at )?)/);
          ba = ge && ge[1] || "";
        }
      return `
` + ba + D;
    }
  }
  var Xt = !1, On;
  {
    var Jn = typeof WeakMap == "function" ? WeakMap : Map;
    On = new Jn();
  }
  function Bn(D, Q) {
    if (!D || Xt)
      return "";
    {
      var ae = On.get(D);
      if (ae !== void 0)
        return ae;
    }
    var ge;
    Xt = !0;
    var ze = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Ne;
    Ne = ya.current, ya.current = null, Hn();
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
          } catch (Yt) {
            ge = Yt;
          }
          Reflect.construct(D, [], Pe);
        } else {
          try {
            Pe.call();
          } catch (Yt) {
            ge = Yt;
          }
          D.call(Pe.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Yt) {
          ge = Yt;
        }
        D();
      }
    } catch (Yt) {
      if (Yt && ge && typeof Yt.stack == "string") {
        for (var _e = Yt.stack.split(`
`), yt = ge.stack.split(`
`), Ue = _e.length - 1, gt = yt.length - 1; Ue >= 1 && gt >= 0 && _e[Ue] !== yt[gt]; )
          gt--;
        for (; Ue >= 1 && gt >= 0; Ue--, gt--)
          if (_e[Ue] !== yt[gt]) {
            if (Ue !== 1 || gt !== 1)
              do
                if (Ue--, gt--, gt < 0 || _e[Ue] !== yt[gt]) {
                  var hn = `
` + _e[Ue].replace(" at new ", " at ");
                  return D.displayName && hn.includes("<anonymous>") && (hn = hn.replace("<anonymous>", D.displayName)), typeof D == "function" && On.set(D, hn), hn;
                }
              while (Ue >= 1 && gt >= 0);
            break;
          }
      }
    } finally {
      Xt = !1, ya.current = Ne, za(), Error.prepareStackTrace = ze;
    }
    var Ea = D ? D.displayName || D.name : "", Ca = Ea ? ia(Ea) : "";
    return typeof D == "function" && On.set(D, Ca), Ca;
  }
  function kt(D, Q, ae) {
    return Bn(D, !1);
  }
  function pn(D) {
    var Q = D.prototype;
    return !!(Q && Q.isReactComponent);
  }
  function It(D, Q, ae) {
    if (D == null)
      return "";
    if (typeof D == "function")
      return Bn(D, pn(D));
    if (typeof D == "string")
      return ia(D);
    switch (D) {
      case m:
        return ia("Suspense");
      case g:
        return ia("SuspenseList");
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case v:
          return kt(D.render);
        case x:
          return It(D.type, Q, ae);
        case S: {
          var ge = D, ze = ge._payload, Ne = ge._init;
          try {
            return It(Ne(ze), Q, ae);
          } catch {
          }
        }
      }
    return "";
  }
  var At = Object.prototype.hasOwnProperty, Pt = {}, In = P.ReactDebugCurrentFrame;
  function oa(D) {
    if (D) {
      var Q = D._owner, ae = It(D.type, D._source, Q ? Q.type : null);
      In.setExtraStackFrame(ae);
    } else
      In.setExtraStackFrame(null);
  }
  function Ln(D, Q, ae, ge, ze) {
    {
      var Ne = Function.call.bind(At);
      for (var Pe in D)
        if (Ne(D, Pe)) {
          var _e = void 0;
          try {
            if (typeof D[Pe] != "function") {
              var yt = Error((ge || "React class") + ": " + ae + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw yt.name = "Invariant Violation", yt;
            }
            _e = D[Pe](Q, Pe, ge, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ue) {
            _e = Ue;
          }
          _e && !(_e instanceof Error) && (oa(ze), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ae, Pe, typeof _e), oa(null)), _e instanceof Error && !(_e.message in Pt) && (Pt[_e.message] = !0, oa(ze), A("Failed %s type: %s", ae, _e.message), oa(null));
        }
    }
  }
  var xa = Array.isArray;
  function sa(D) {
    return xa(D);
  }
  function En(D) {
    {
      var Q = typeof Symbol == "function" && Symbol.toStringTag, ae = Q && D[Symbol.toStringTag] || D.constructor.name || "Object";
      return ae;
    }
  }
  function la(D) {
    try {
      return mn(D), !1;
    } catch {
      return !0;
    }
  }
  function mn(D) {
    return "" + D;
  }
  function Yn(D) {
    if (la(D))
      return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(D)), mn(D);
  }
  var Rt = P.ReactCurrentOwner, ua = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, ir, or, ne;
  ne = {};
  function de(D) {
    if (At.call(D, "ref")) {
      var Q = Object.getOwnPropertyDescriptor(D, "ref").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return D.ref !== void 0;
  }
  function Me(D) {
    if (At.call(D, "key")) {
      var Q = Object.getOwnPropertyDescriptor(D, "key").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return D.key !== void 0;
  }
  function nt(D, Q) {
    if (typeof D.ref == "string" && Rt.current && Q && Rt.current.stateNode !== Q) {
      var ae = me(Rt.current.type);
      ne[ae] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', me(Rt.current.type), D.ref), ne[ae] = !0);
    }
  }
  function at(D, Q) {
    {
      var ae = function() {
        ir || (ir = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      ae.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: ae,
        configurable: !0
      });
    }
  }
  function Mt(D, Q) {
    {
      var ae = function() {
        or || (or = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      ae.isReactWarning = !0, Object.defineProperty(D, "ref", {
        get: ae,
        configurable: !0
      });
    }
  }
  var jt = function(D, Q, ae, ge, ze, Ne, Pe) {
    var _e = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: r,
      // Built-in properties that belong on the element
      type: D,
      key: Q,
      ref: ae,
      props: Pe,
      // Record the component responsible for creating this element.
      _owner: Ne
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
      value: ge
    }), Object.defineProperty(_e, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: ze
    }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
  };
  function _n(D, Q, ae, ge, ze) {
    {
      var Ne, Pe = {}, _e = null, yt = null;
      ae !== void 0 && (Yn(ae), _e = "" + ae), Me(Q) && (Yn(Q.key), _e = "" + Q.key), de(Q) && (yt = Q.ref, nt(Q, ze));
      for (Ne in Q)
        At.call(Q, Ne) && !ua.hasOwnProperty(Ne) && (Pe[Ne] = Q[Ne]);
      if (D && D.defaultProps) {
        var Ue = D.defaultProps;
        for (Ne in Ue)
          Pe[Ne] === void 0 && (Pe[Ne] = Ue[Ne]);
      }
      if (_e || yt) {
        var gt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
        _e && at(Pe, gt), yt && Mt(Pe, gt);
      }
      return jt(D, _e, yt, ze, ge, Rt.current, Pe);
    }
  }
  var lt = P.ReactCurrentOwner, Kn = P.ReactDebugCurrentFrame;
  function pt(D) {
    if (D) {
      var Q = D._owner, ae = It(D.type, D._source, Q ? Q.type : null);
      Kn.setExtraStackFrame(ae);
    } else
      Kn.setExtraStackFrame(null);
  }
  var mt;
  mt = !1;
  function $a(D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  }
  function Sa() {
    {
      if (lt.current) {
        var D = me(lt.current.type);
        if (D)
          return `

Check the render method of \`` + D + "`.";
      }
      return "";
    }
  }
  function Ci(D) {
    {
      if (D !== void 0) {
        var Q = D.fileName.replace(/^.*[\\\/]/, ""), ae = D.lineNumber;
        return `

Check your code at ` + Q + ":" + ae + ".";
      }
      return "";
    }
  }
  var co = {};
  function bs(D) {
    {
      var Q = Sa();
      if (!Q) {
        var ae = typeof D == "string" ? D : D.displayName || D.name;
        ae && (Q = `

Check the top-level render call using <` + ae + ">.");
      }
      return Q;
    }
  }
  function wi(D, Q) {
    {
      if (!D._store || D._store.validated || D.key != null)
        return;
      D._store.validated = !0;
      var ae = bs(Q);
      if (co[ae])
        return;
      co[ae] = !0;
      var ge = "";
      D && D._owner && D._owner !== lt.current && (ge = " It was passed a child from " + me(D._owner.type) + "."), pt(D), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ge), pt(null);
    }
  }
  function Ri(D, Q) {
    {
      if (typeof D != "object")
        return;
      if (sa(D))
        for (var ae = 0; ae < D.length; ae++) {
          var ge = D[ae];
          $a(ge) && wi(ge, Q);
        }
      else if ($a(D))
        D._store && (D._store.validated = !0);
      else if (D) {
        var ze = O(D);
        if (typeof ze == "function" && ze !== D.entries)
          for (var Ne = ze.call(D), Pe; !(Pe = Ne.next()).done; )
            $a(Pe.value) && wi(Pe.value, Q);
      }
    }
  }
  function sr(D) {
    {
      var Q = D.type;
      if (Q == null || typeof Q == "string")
        return;
      var ae;
      if (typeof Q == "function")
        ae = Q.propTypes;
      else if (typeof Q == "object" && (Q.$$typeof === v || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      Q.$$typeof === x))
        ae = Q.propTypes;
      else
        return;
      if (ae) {
        var ge = me(Q);
        Ln(ae, D.props, "prop", ge, D);
      } else if (Q.PropTypes !== void 0 && !mt) {
        mt = !0;
        var ze = me(Q);
        A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ze || "Unknown");
      }
      typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ur(D) {
    {
      for (var Q = Object.keys(D.props), ae = 0; ae < Q.length; ae++) {
        var ge = Q[ae];
        if (ge !== "children" && ge !== "key") {
          pt(D), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), pt(null);
          break;
        }
      }
      D.ref !== null && (pt(D), A("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
    }
  }
  var lr = {};
  function Ha(D, Q, ae, ge, ze, Ne) {
    {
      var Pe = he(D);
      if (!Pe) {
        var _e = "";
        (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var yt = Ci(ze);
        yt ? _e += yt : _e += Sa();
        var Ue;
        D === null ? Ue = "null" : sa(D) ? Ue = "array" : D !== void 0 && D.$$typeof === r ? (Ue = "<" + (me(D.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof D, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, _e);
      }
      var gt = _n(D, Q, ae, ze, Ne);
      if (gt == null)
        return gt;
      if (Pe) {
        var hn = Q.children;
        if (hn !== void 0)
          if (ge)
            if (sa(hn)) {
              for (var Ea = 0; Ea < hn.length; Ea++)
                Ri(hn[Ea], D);
              Object.freeze && Object.freeze(hn);
            } else
              A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Ri(hn, D);
      }
      if (At.call(Q, "key")) {
        var Ca = me(D), Yt = Object.keys(Q).filter(function(xs) {
          return xs !== "key";
        }), ji = Yt.length > 0 ? "{key: someKey, " + Yt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!lr[Ca + ji]) {
          var fo = Yt.length > 0 ? "{" + Yt.join(": ..., ") + ": ...}" : "{}";
          A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ji, Ca, fo, Ca), lr[Ca + ji] = !0;
        }
      }
      return D === l ? Ur(gt) : sr(gt), gt;
    }
  }
  var Na = Ha;
  wv.Fragment = l, wv.jsxDEV = Na;
})();
MS.exports = wv;
var E = MS.exports, VS = { exports: {} }, aa = {}, FS = { exports: {} }, zS = {};
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
    function d(ne, de) {
      var Me = ne.length;
      ne.push(de), y(ne, de, Me);
    }
    function f(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function c(ne) {
      if (ne.length === 0)
        return null;
      var de = ne[0], Me = ne.pop();
      return Me !== de && (ne[0] = Me, v(ne, Me, 0)), de;
    }
    function y(ne, de, Me) {
      for (var nt = Me; nt > 0; ) {
        var at = nt - 1 >>> 1, Mt = ne[at];
        if (m(Mt, de) > 0)
          ne[at] = de, ne[nt] = Mt, nt = at;
        else
          return;
      }
    }
    function v(ne, de, Me) {
      for (var nt = Me, at = ne.length, Mt = at >>> 1; nt < Mt; ) {
        var jt = (nt + 1) * 2 - 1, _n = ne[jt], lt = jt + 1, Kn = ne[lt];
        if (m(_n, de) < 0)
          lt < at && m(Kn, _n) < 0 ? (ne[nt] = Kn, ne[lt] = de, nt = lt) : (ne[nt] = _n, ne[jt] = de, nt = jt);
        else if (lt < at && m(Kn, de) < 0)
          ne[nt] = Kn, ne[lt] = de, nt = lt;
        else
          return;
      }
    }
    function m(ne, de) {
      var Me = ne.sortIndex - de.sortIndex;
      return Me !== 0 ? Me : ne.id - de.id;
    }
    var g = 1, x = 2, S = 3, w = 4, j = 5;
    function U(ne, de) {
    }
    var O = typeof performance == "object" && typeof performance.now == "function";
    if (O) {
      var P = performance;
      o.unstable_now = function() {
        return P.now();
      };
    } else {
      var A = Date, $ = A.now();
      o.unstable_now = function() {
        return A.now() - $;
      };
    }
    var k = 1073741823, M = -1, I = 250, Z = 5e3, Oe = 1e4, ke = k, he = [], be = [], tt = 1, me = null, Ee = S, Ce = !1, Ze = !1, we = !1, qe = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fn(ne) {
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
    function wt(ne) {
      if (we = !1, fn(ne), !Ze)
        if (f(he) !== null)
          Ze = !0, Yn(dn);
        else {
          var de = f(be);
          de !== null && Rt(wt, de.startTime - ne);
        }
    }
    function dn(ne, de) {
      Ze = !1, we && (we = !1, ua()), Ce = !0;
      var Me = Ee;
      try {
        var nt;
        if (!s) return Hn(ne, de);
      } finally {
        me = null, Ee = Me, Ce = !1;
      }
    }
    function Hn(ne, de) {
      var Me = de;
      for (fn(Me), me = f(he); me !== null && !r && !(me.expirationTime > Me && (!ne || oa())); ) {
        var nt = me.callback;
        if (typeof nt == "function") {
          me.callback = null, Ee = me.priorityLevel;
          var at = me.expirationTime <= Me, Mt = nt(at);
          Me = o.unstable_now(), typeof Mt == "function" ? me.callback = Mt : me === f(he) && c(he), fn(Me);
        } else
          c(he);
        me = f(he);
      }
      if (me !== null)
        return !0;
      var jt = f(be);
      return jt !== null && Rt(wt, jt.startTime - Me), !1;
    }
    function za(ne, de) {
      switch (ne) {
        case g:
        case x:
        case S:
        case w:
        case j:
          break;
        default:
          ne = S;
      }
      var Me = Ee;
      Ee = ne;
      try {
        return de();
      } finally {
        Ee = Me;
      }
    }
    function ya(ne) {
      var de;
      switch (Ee) {
        case g:
        case x:
        case S:
          de = S;
          break;
        default:
          de = Ee;
          break;
      }
      var Me = Ee;
      Ee = de;
      try {
        return ne();
      } finally {
        Ee = Me;
      }
    }
    function ba(ne) {
      var de = Ee;
      return function() {
        var Me = Ee;
        Ee = de;
        try {
          return ne.apply(this, arguments);
        } finally {
          Ee = Me;
        }
      };
    }
    function ia(ne, de, Me) {
      var nt = o.unstable_now(), at;
      if (typeof Me == "object" && Me !== null) {
        var Mt = Me.delay;
        typeof Mt == "number" && Mt > 0 ? at = nt + Mt : at = nt;
      } else
        at = nt;
      var jt;
      switch (ne) {
        case g:
          jt = M;
          break;
        case x:
          jt = I;
          break;
        case j:
          jt = ke;
          break;
        case w:
          jt = Oe;
          break;
        case S:
        default:
          jt = Z;
          break;
      }
      var _n = at + jt, lt = {
        id: tt++,
        callback: de,
        priorityLevel: ne,
        startTime: at,
        expirationTime: _n,
        sortIndex: -1
      };
      return at > nt ? (lt.sortIndex = at, d(be, lt), f(he) === null && lt === f(be) && (we ? ua() : we = !0, Rt(wt, at - nt))) : (lt.sortIndex = _n, d(he, lt), !Ze && !Ce && (Ze = !0, Yn(dn))), lt;
    }
    function Xt() {
    }
    function On() {
      !Ze && !Ce && (Ze = !0, Yn(dn));
    }
    function Jn() {
      return f(he);
    }
    function Bn(ne) {
      ne.callback = null;
    }
    function kt() {
      return Ee;
    }
    var pn = !1, It = null, At = -1, Pt = l, In = -1;
    function oa() {
      var ne = o.unstable_now() - In;
      return !(ne < Pt);
    }
    function Ln() {
    }
    function xa(ne) {
      if (ne < 0 || ne > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ne > 0 ? Pt = Math.floor(1e3 / ne) : Pt = l;
    }
    var sa = function() {
      if (It !== null) {
        var ne = o.unstable_now();
        In = ne;
        var de = !0, Me = !0;
        try {
          Me = It(de, ne);
        } finally {
          Me ? En() : (pn = !1, It = null);
        }
      } else
        pn = !1;
    }, En;
    if (typeof Ke == "function")
      En = function() {
        Ke(sa);
      };
    else if (typeof MessageChannel < "u") {
      var la = new MessageChannel(), mn = la.port2;
      la.port1.onmessage = sa, En = function() {
        mn.postMessage(null);
      };
    } else
      En = function() {
        qe(sa, 0);
      };
    function Yn(ne) {
      It = ne, pn || (pn = !0, En());
    }
    function Rt(ne, de) {
      At = qe(function() {
        ne(o.unstable_now());
      }, de);
    }
    function ua() {
      Dt(At), At = -1;
    }
    var ir = Ln, or = null;
    o.unstable_IdlePriority = j, o.unstable_ImmediatePriority = g, o.unstable_LowPriority = w, o.unstable_NormalPriority = S, o.unstable_Profiling = or, o.unstable_UserBlockingPriority = x, o.unstable_cancelCallback = Bn, o.unstable_continueExecution = On, o.unstable_forceFrameRate = xa, o.unstable_getCurrentPriorityLevel = kt, o.unstable_getFirstCallbackNode = Jn, o.unstable_next = ya, o.unstable_pauseExecution = Xt, o.unstable_requestPaint = ir, o.unstable_runWithPriority = za, o.unstable_scheduleCallback = ia, o.unstable_shouldYield = oa, o.unstable_wrapCallback = ba, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(zS);
FS.exports = zS;
var Wk = FS.exports;
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
  var o = V, r = Wk, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
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
      var u = n.map(function(p) {
        return String(p);
      });
      u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var v = 0, m = 1, g = 2, x = 3, S = 4, w = 5, j = 6, U = 7, O = 8, P = 9, A = 10, $ = 11, k = 12, M = 13, I = 14, Z = 15, Oe = 16, ke = 17, he = 18, be = 19, tt = 21, me = 22, Ee = 23, Ce = 24, Ze = 25, we = !0, qe = !1, Dt = !1, Ke = !1, fn = !1, wt = !0, dn = !1, Hn = !0, za = !0, ya = !0, ba = !0, ia = /* @__PURE__ */ new Set(), Xt = {}, On = {};
  function Jn(e, t) {
    Bn(e, t), Bn(e + "Capture", t);
  }
  function Bn(e, t) {
    Xt[e] && c("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Xt[e] = t;
    {
      var n = e.toLowerCase();
      On[n] = e, e === "onDoubleClick" && (On.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++)
      ia.add(t[a]);
  }
  var kt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pn = Object.prototype.hasOwnProperty;
  function It(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function At(e) {
    try {
      return Pt(e), !1;
    } catch {
      return !0;
    }
  }
  function Pt(e) {
    return "" + e;
  }
  function In(e, t) {
    if (At(e))
      return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), Pt(e);
  }
  function oa(e) {
    if (At(e))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", It(e)), Pt(e);
  }
  function Ln(e, t) {
    if (At(e))
      return c("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), Pt(e);
  }
  function xa(e, t) {
    if (At(e))
      return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, It(e)), Pt(e);
  }
  function sa(e) {
    if (At(e))
      return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", It(e)), Pt(e);
  }
  function En(e) {
    if (At(e))
      return c("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", It(e)), Pt(e);
  }
  var la = 0, mn = 1, Yn = 2, Rt = 3, ua = 4, ir = 5, or = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + ne + "][" + de + "]*$"), nt = {}, at = {};
  function Mt(e) {
    return pn.call(at, e) ? !0 : pn.call(nt, e) ? !1 : Me.test(e) ? (at[e] = !0, !0) : (nt[e] = !0, c("Invalid attribute name: `%s`", e), !1);
  }
  function jt(e, t, n) {
    return t !== null ? t.type === la : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function _n(e, t, n, a) {
    if (n !== null && n.type === la)
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
    if (t === null || typeof t > "u" || _n(e, t, n, a))
      return !0;
    if (a)
      return !1;
    if (n !== null)
      switch (n.type) {
        case Rt:
          return !t;
        case ua:
          return t === !1;
        case ir:
          return isNaN(t);
        case or:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function Kn(e) {
    return mt.hasOwnProperty(e) ? mt[e] : null;
  }
  function pt(e, t, n, a, i, u, p) {
    this.acceptsBooleans = t === Yn || t === Rt || t === ua, this.attributeName = a, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = p;
  }
  var mt = {}, $a = [
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
  $a.forEach(function(e) {
    mt[e] = new pt(
      e,
      la,
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
    mt[t] = new pt(
      t,
      mn,
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
    mt[e] = new pt(
      e,
      Yn,
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
    mt[e] = new pt(
      e,
      Yn,
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
    mt[e] = new pt(
      e,
      Rt,
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
    mt[e] = new pt(
      e,
      Rt,
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
    mt[e] = new pt(
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
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    mt[e] = new pt(
      e,
      or,
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
    mt[e] = new pt(
      e,
      ir,
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
  var Sa = /[\-\:]([a-z])/g, Ci = function(e) {
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
    var t = e.replace(Sa, Ci);
    mt[t] = new pt(
      t,
      mn,
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
    var t = e.replace(Sa, Ci);
    mt[t] = new pt(
      t,
      mn,
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
    var t = e.replace(Sa, Ci);
    mt[t] = new pt(
      t,
      mn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    mt[e] = new pt(
      e,
      mn,
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
  var co = "xlinkHref";
  mt[co] = new pt(
    "xlinkHref",
    mn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    mt[e] = new pt(
      e,
      mn,
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
  var bs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, wi = !1;
  function Ri(e) {
    !wi && bs.test(e) && (wi = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function sr(e, t, n, a) {
    if (a.mustUseProperty) {
      var i = a.propertyName;
      return e[i];
    } else {
      In(n, t), a.sanitizeURL && Ri("" + n);
      var u = a.attributeName, p = null;
      if (a.type === ua) {
        if (e.hasAttribute(u)) {
          var h = e.getAttribute(u);
          return h === "" ? !0 : lt(t, n, a, !1) ? h : h === "" + n ? n : h;
        }
      } else if (e.hasAttribute(u)) {
        if (lt(t, n, a, !1))
          return e.getAttribute(u);
        if (a.type === Rt)
          return n;
        p = e.getAttribute(u);
      }
      return lt(t, n, a, !1) ? p === null ? n : p : p === "" + n ? n : p;
    }
  }
  function Ur(e, t, n, a) {
    {
      if (!Mt(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var i = e.getAttribute(t);
      return In(n, t), i === "" + n ? n : i;
    }
  }
  function lr(e, t, n, a) {
    var i = Kn(t);
    if (!jt(t, i, a)) {
      if (lt(t, n, i, a) && (n = null), a || i === null) {
        if (Mt(t)) {
          var u = t;
          n === null ? e.removeAttribute(u) : (In(n, t), e.setAttribute(u, "" + n));
        }
        return;
      }
      var p = i.mustUseProperty;
      if (p) {
        var h = i.propertyName;
        if (n === null) {
          var b = i.type;
          e[h] = b === Rt ? !1 : "";
        } else
          e[h] = n;
        return;
      }
      var C = i.attributeName, R = i.attributeNamespace;
      if (n === null)
        e.removeAttribute(C);
      else {
        var _ = i.type, L;
        _ === Rt || _ === ua && n === !0 ? L = "" : (In(n, C), L = "" + n, i.sanitizeURL && Ri(L.toString())), R ? e.setAttributeNS(R, C, L) : e.setAttribute(C, L);
      }
    }
  }
  var Ha = Symbol.for("react.element"), Na = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), ze = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), gt = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), Ea = Symbol.for("react.offscreen"), Ca = Symbol.for("react.legacy_hidden"), Yt = Symbol.for("react.cache"), ji = Symbol.for("react.tracing_marker"), fo = Symbol.iterator, xs = "@@iterator";
  function ur(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = fo && e[fo] || e[xs];
    return typeof t == "function" ? t : null;
  }
  var Fe = Object.assign, Ti = 0, Vr, Ss, Ns, Es, Cs, ws, Rs;
  function js() {
  }
  js.__reactDisabledLog = !0;
  function Du() {
    {
      if (Ti === 0) {
        Vr = console.log, Ss = console.info, Ns = console.warn, Es = console.error, Cs = console.group, ws = console.groupCollapsed, Rs = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: js,
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
      Ti++;
    }
  }
  function pd() {
    {
      if (Ti--, Ti === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Fe({}, e, {
            value: Vr
          }),
          info: Fe({}, e, {
            value: Ss
          }),
          warn: Fe({}, e, {
            value: Ns
          }),
          error: Fe({}, e, {
            value: Es
          }),
          group: Fe({}, e, {
            value: Cs
          }),
          groupCollapsed: Fe({}, e, {
            value: ws
          }),
          groupEnd: Fe({}, e, {
            value: Rs
          })
        });
      }
      Ti < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Ts = s.ReactCurrentDispatcher, Di;
  function ca(e, t, n) {
    {
      if (Di === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          Di = a && a[1] || "";
        }
      return `
` + Di + e;
    }
  }
  var Fr = !1, zr;
  {
    var po = typeof WeakMap == "function" ? WeakMap : Map;
    zr = new po();
  }
  function Ds(e, t) {
    if (!e || Fr)
      return "";
    {
      var n = zr.get(e);
      if (n !== void 0)
        return n;
    }
    var a;
    Fr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = Ts.current, Ts.current = null, Du();
    try {
      if (t) {
        var p = function() {
          throw Error();
        };
        if (Object.defineProperty(p.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(p, []);
          } catch (B) {
            a = B;
          }
          Reflect.construct(e, [], p);
        } else {
          try {
            p.call();
          } catch (B) {
            a = B;
          }
          e.call(p.prototype);
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
        for (var h = B.stack.split(`
`), b = a.stack.split(`
`), C = h.length - 1, R = b.length - 1; C >= 1 && R >= 0 && h[C] !== b[R]; )
          R--;
        for (; C >= 1 && R >= 0; C--, R--)
          if (h[C] !== b[R]) {
            if (C !== 1 || R !== 1)
              do
                if (C--, R--, R < 0 || h[C] !== b[R]) {
                  var _ = `
` + h[C].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && zr.set(e, _), _;
                }
              while (C >= 1 && R >= 0);
            break;
          }
      }
    } finally {
      Fr = !1, Ts.current = u, pd(), Error.prepareStackTrace = i;
    }
    var L = e ? e.displayName || e.name : "", H = L ? ca(L) : "";
    return typeof e == "function" && zr.set(e, H), H;
  }
  function ku(e, t, n) {
    return Ds(e, !0);
  }
  function ks(e, t, n) {
    return Ds(e, !1);
  }
  function md(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function $r(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Ds(e, md(e));
    if (typeof e == "string")
      return ca(e);
    switch (e) {
      case Pe:
        return ca("Suspense");
      case _e:
        return ca("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ne:
          return ks(e.render);
        case yt:
          return $r(e.type, t, n);
        case Ue: {
          var a = e, i = a._payload, u = a._init;
          try {
            return $r(u(i), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function Ou(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case w:
        return ca(e.type);
      case Oe:
        return ca("Lazy");
      case M:
        return ca("Suspense");
      case be:
        return ca("SuspenseList");
      case v:
      case g:
      case Z:
        return ks(e.type);
      case $:
        return ks(e.type.render);
      case m:
        return ku(e.type);
      default:
        return "";
    }
  }
  function Os(e) {
    try {
      var t = "", n = e;
      do
        t += Ou(n), n = n.return;
      while (n);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function mo(e, t, n) {
    var a = e.displayName;
    if (a)
      return a;
    var i = t.displayName || t.name || "";
    return i !== "" ? n + "(" + i + ")" : n;
  }
  function Lu(e) {
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
      case D:
        return "Fragment";
      case Na:
        return "Portal";
      case ae:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ze:
          var t = e;
          return Lu(t) + ".Consumer";
        case ge:
          var n = e;
          return Lu(n._context) + ".Provider";
        case Ne:
          return mo(e, e.render, "ForwardRef");
        case yt:
          var a = e.displayName || null;
          return a !== null ? a : Ye(e.type) || "Memo";
        case Ue: {
          var i = e, u = i._payload, p = i._init;
          try {
            return Ye(p(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function Ls(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function _s(e) {
    return e.displayName || "Context";
  }
  function Le(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case Ce:
        return "Cache";
      case P:
        var a = n;
        return _s(a) + ".Consumer";
      case A:
        var i = n;
        return _s(i._context) + ".Provider";
      case he:
        return "DehydratedFragment";
      case $:
        return Ls(n, n.render, "ForwardRef");
      case U:
        return "Fragment";
      case w:
        return n;
      case S:
        return "Portal";
      case x:
        return "Root";
      case j:
        return "Text";
      case Oe:
        return Ye(n);
      case O:
        return n === Q ? "StrictMode" : "Mode";
      case me:
        return "Offscreen";
      case k:
        return "Profiler";
      case tt:
        return "Scope";
      case M:
        return "Suspense";
      case be:
        return "SuspenseList";
      case Ze:
        return "TracingMarker";
      case m:
      case v:
      case ke:
      case g:
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
  var _u = s.ReactDebugCurrentFrame, vn = null, ki = !1;
  function Hr() {
    {
      if (vn === null)
        return null;
      var e = vn._debugOwner;
      if (e !== null && typeof e < "u")
        return Le(e);
    }
    return null;
  }
  function Au() {
    return vn === null ? "" : Os(vn);
  }
  function Kt() {
    _u.getCurrentStack = null, vn = null, ki = !1;
  }
  function bt(e) {
    _u.getCurrentStack = e === null ? null : Au, vn = e, ki = !1;
  }
  function Pu() {
    return vn;
  }
  function Wn(e) {
    ki = e;
  }
  function An(e) {
    return "" + e;
  }
  function Ja(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return En(e), e;
      default:
        return "";
    }
  }
  var hd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function ho(e, t) {
    hd[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Oi(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Mu(e) {
    return e._valueTracker;
  }
  function Jr(e) {
    e._valueTracker = null;
  }
  function Uu(e) {
    var t = "";
    return e && (Oi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Vu(e) {
    var t = Oi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    En(e[t]);
    var a = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var i = n.get, u = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(h) {
          En(h), a = "" + h, u.call(this, h);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var p = {
        getValue: function() {
          return a;
        },
        setValue: function(h) {
          En(h), a = "" + h;
        },
        stopTracking: function() {
          Jr(e), delete e[t];
        }
      };
      return p;
    }
  }
  function cr(e) {
    Mu(e) || (e._valueTracker = Vu(e));
  }
  function vo(e) {
    if (!e)
      return !1;
    var t = Mu(e);
    if (!t)
      return !0;
    var n = t.getValue(), a = Uu(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function Br(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var go = !1, Fu = !1, zu = !1, $u = !1;
  function Hu(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function N(e, t) {
    var n = e, a = t.checked, i = Fe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked
    });
    return i;
  }
  function T(e, t) {
    ho("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Fu && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), Fu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !go && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), go = !0);
    var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Ja(t.value != null ? t.value : a),
      controlled: Hu(t)
    };
  }
  function J(e, t) {
    var n = e, a = t.checked;
    a != null && lr(n, "checked", a, !1);
  }
  function Y(e, t) {
    var n = e;
    {
      var a = Hu(t);
      !n._wrapperState.controlled && a && !$u && (c("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $u = !0), n._wrapperState.controlled && !a && !zu && (c("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), zu = !0);
    }
    J(e, t);
    var i = Ja(t.value), u = t.type;
    if (i != null)
      u === "number" ? (i === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != i) && (n.value = An(i)) : n.value !== An(i) && (n.value = An(i));
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Re(n, t.type, i) : t.hasOwnProperty("defaultValue") && Re(n, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function ee(e, t, n) {
    var a = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type, u = i === "submit" || i === "reset";
      if (u && (t.value === void 0 || t.value === null))
        return;
      var p = An(a._wrapperState.initialValue);
      n || p !== a.value && (a.value = p), a.defaultValue = p;
    }
    var h = a.name;
    h !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, h !== "" && (a.name = h);
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
      In(n, "name");
      for (var i = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), u = 0; u < i.length; u++) {
        var p = i[u];
        if (!(p === e || p.form !== e.form)) {
          var h = Tc(p);
          if (!h)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          vo(p), Y(p, h);
        }
      }
    }
  }
  function Re(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = An(e._wrapperState.initialValue) : e.defaultValue !== An(n) && (e.defaultValue = An(n)));
  }
  var $e = !1, rt = !1, ut = !1;
  function ct(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || rt || (rt = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (ut || (ut = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !$e && (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), $e = !0);
  }
  function ht(e, t) {
    t.value != null && e.setAttribute("value", An(Ja(t.value)));
  }
  var Nt = Array.isArray;
  function Qe(e) {
    return Nt(e);
  }
  var Ir;
  Ir = !1;
  function yo() {
    var e = Hr();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var As = ["value", "defaultValue"];
  function vd(e) {
    {
      ho("select", e);
      for (var t = 0; t < As.length; t++) {
        var n = As[t];
        if (e[n] != null) {
          var a = Qe(e[n]);
          e.multiple && !a ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, yo()) : !e.multiple && a && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, yo());
        }
      }
    }
  }
  function fr(e, t, n, a) {
    var i = e.options;
    if (t) {
      for (var u = n, p = {}, h = 0; h < u.length; h++)
        p["$" + u[h]] = !0;
      for (var b = 0; b < i.length; b++) {
        var C = p.hasOwnProperty("$" + i[b].value);
        i[b].selected !== C && (i[b].selected = C), C && a && (i[b].defaultSelected = !0);
      }
    } else {
      for (var R = An(Ja(n)), _ = null, L = 0; L < i.length; L++) {
        if (i[L].value === R) {
          i[L].selected = !0, a && (i[L].defaultSelected = !0);
          return;
        }
        _ === null && !i[L].disabled && (_ = i[L]);
      }
      _ !== null && (_.selected = !0);
    }
  }
  function Ps(e, t) {
    return Fe({}, t, {
      value: void 0
    });
  }
  function Ms(e, t) {
    var n = e;
    vd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Ir && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ir = !0);
  }
  function gd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null ? fr(n, !!t.multiple, a, !1) : t.defaultValue != null && fr(n, !!t.multiple, t.defaultValue, !0);
  }
  function k1(e, t) {
    var n = e, a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var i = t.value;
    i != null ? fr(n, !!t.multiple, i, !1) : a !== !!t.multiple && (t.defaultValue != null ? fr(n, !!t.multiple, t.defaultValue, !0) : fr(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function O1(e, t) {
    var n = e, a = t.value;
    a != null && fr(n, !!t.multiple, a, !1);
  }
  var $v = !1;
  function yd(e, t) {
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
  function Hv(e, t) {
    var n = e;
    ho("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !$v && (c("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component"), $v = !0);
    var a = t.value;
    if (a == null) {
      var i = t.children, u = t.defaultValue;
      if (i != null) {
        c("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (u != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Qe(i)) {
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
      initialValue: Ja(a)
    };
  }
  function Jv(e, t) {
    var n = e, a = Ja(t.value), i = Ja(t.defaultValue);
    if (a != null) {
      var u = An(a);
      u !== n.value && (n.value = u), t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u);
    }
    i != null && (n.defaultValue = An(i));
  }
  function Bv(e, t) {
    var n = e, a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function L1(e, t) {
    Jv(e, t);
  }
  var dr = "http://www.w3.org/1999/xhtml", _1 = "http://www.w3.org/1998/Math/MathML", bd = "http://www.w3.org/2000/svg";
  function xd(e) {
    switch (e) {
      case "svg":
        return bd;
      case "math":
        return _1;
      default:
        return dr;
    }
  }
  function Sd(e, t) {
    return e == null || e === dr ? xd(t) : e === bd && t === "foreignObject" ? dr : e;
  }
  var A1 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, a, i);
      });
    } : e;
  }, Ju, Iv = A1(function(e, t) {
    if (e.namespaceURI === bd && !("innerHTML" in e)) {
      Ju = Ju || document.createElement("div"), Ju.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = Ju.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Pn = 1, pr = 3, Ot = 8, mr = 9, Nd = 11, Bu = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === pr) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, P1 = {
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
  }, Us = {
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
  function M1(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var U1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Us).forEach(function(e) {
    U1.forEach(function(t) {
      Us[M1(t, e)] = Us[e];
    });
  });
  function Ed(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a ? "" : !n && typeof t == "number" && t !== 0 && !(Us.hasOwnProperty(e) && Us[e]) ? t + "px" : (xa(t, e), ("" + t).trim());
  }
  var V1 = /([A-Z])/g, F1 = /^ms-/;
  function z1(e) {
    return e.replace(V1, "-$1").toLowerCase().replace(F1, "-ms-");
  }
  var Yv = function() {
  };
  {
    var $1 = /^(?:webkit|moz|o)[A-Z]/, H1 = /^-ms-/, J1 = /-(.)/g, Kv = /;\s*$/, bo = {}, Cd = {}, Wv = !1, Gv = !1, B1 = function(e) {
      return e.replace(J1, function(t, n) {
        return n.toUpperCase();
      });
    }, I1 = function(e) {
      bo.hasOwnProperty(e) && bo[e] || (bo[e] = !0, c(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        B1(e.replace(H1, "ms-"))
      ));
    }, Y1 = function(e) {
      bo.hasOwnProperty(e) && bo[e] || (bo[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, K1 = function(e, t) {
      Cd.hasOwnProperty(t) && Cd[t] || (Cd[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kv, "")));
    }, W1 = function(e, t) {
      Wv || (Wv = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
    }, G1 = function(e, t) {
      Gv || (Gv = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    Yv = function(e, t) {
      e.indexOf("-") > -1 ? I1(e) : $1.test(e) ? Y1(e) : Kv.test(t) && K1(e, t), typeof t == "number" && (isNaN(t) ? W1(e, t) : isFinite(t) || G1(e, t));
    };
  }
  var q1 = Yv;
  function Q1(e) {
    {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var i = e[a];
          if (i != null) {
            var u = a.indexOf("--") === 0;
            t += n + (u ? a : z1(a)) + ":", t += Ed(a, i, u), n = ";";
          }
        }
      return t || null;
    }
  }
  function qv(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var i = a.indexOf("--") === 0;
        i || q1(a, t[a]);
        var u = Ed(a, t[a], i);
        a === "float" && (a = "cssFloat"), i ? n.setProperty(a, u) : n[a] = u;
      }
  }
  function X1(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function Qv(e) {
    var t = {};
    for (var n in e)
      for (var a = P1[n] || [n], i = 0; i < a.length; i++)
        t[a[i]] = n;
    return t;
  }
  function Z1(e, t) {
    {
      if (!t)
        return;
      var n = Qv(e), a = Qv(t), i = {};
      for (var u in n) {
        var p = n[u], h = a[u];
        if (h && p !== h) {
          var b = p + "," + h;
          if (i[b])
            continue;
          i[b] = !0, c("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", X1(e[p]) ? "Removing" : "Updating", p, h);
        }
      }
    }
  }
  var eN = {
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
  }, tN = Fe({
    menuitem: !0
  }, eN), nN = "__html";
  function wd(e, t) {
    if (t) {
      if (tN[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(nN in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Li(e, t) {
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
  var Iu = {
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
  }, Xv = {
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
  }, xo = {}, aN = new RegExp("^(aria)-[" + de + "]*$"), rN = new RegExp("^(aria)[A-Z][" + de + "]*$");
  function iN(e, t) {
    {
      if (pn.call(xo, t) && xo[t])
        return !0;
      if (rN.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), a = Xv.hasOwnProperty(n) ? n : null;
        if (a == null)
          return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xo[t] = !0, !0;
        if (t !== a)
          return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), xo[t] = !0, !0;
      }
      if (aN.test(t)) {
        var i = t.toLowerCase(), u = Xv.hasOwnProperty(i) ? i : null;
        if (u == null)
          return xo[t] = !0, !1;
        if (t !== u)
          return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), xo[t] = !0, !0;
      }
    }
    return !0;
  }
  function oN(e, t) {
    {
      var n = [];
      for (var a in t) {
        var i = iN(e, a);
        i || n.push(a);
      }
      var u = n.map(function(p) {
        return "`" + p + "`";
      }).join(", ");
      n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function sN(e, t) {
    Li(e, t) || oN(e, t);
  }
  var Zv = !1;
  function lN(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Zv && (Zv = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var eg = function() {
  };
  {
    var Cn = {}, tg = /^on./, uN = /^on[^A-Z]/, cN = new RegExp("^(aria)-[" + de + "]*$"), fN = new RegExp("^(aria)[A-Z][" + de + "]*$");
    eg = function(e, t, n, a) {
      if (pn.call(Cn, t) && Cn[t])
        return !0;
      var i = t.toLowerCase();
      if (i === "onfocusin" || i === "onfocusout")
        return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Cn[t] = !0, !0;
      if (a != null) {
        var u = a.registrationNameDependencies, p = a.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var h = p.hasOwnProperty(i) ? p[i] : null;
        if (h != null)
          return c("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Cn[t] = !0, !0;
        if (tg.test(t))
          return c("Unknown event handler property `%s`. It will be ignored.", t), Cn[t] = !0, !0;
      } else if (tg.test(t))
        return uN.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Cn[t] = !0, !0;
      if (cN.test(t) || fN.test(t))
        return !0;
      if (i === "innerhtml")
        return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Cn[t] = !0, !0;
      if (i === "aria")
        return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Cn[t] = !0, !0;
      if (i === "is" && n !== null && n !== void 0 && typeof n != "string")
        return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Cn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Cn[t] = !0, !0;
      var b = Kn(t), C = b !== null && b.type === la;
      if (Iu.hasOwnProperty(i)) {
        var R = Iu[i];
        if (R !== t)
          return c("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Cn[t] = !0, !0;
      } else if (!C && t !== i)
        return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Cn[t] = !0, !0;
      return typeof n == "boolean" && _n(t, n, b, !1) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Cn[t] = !0, !0) : C ? !0 : _n(t, n, b, !1) ? (Cn[t] = !0, !1) : ((n === "false" || n === "true") && b !== null && b.type === Rt && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Cn[t] = !0), !0);
    };
  }
  var dN = function(e, t, n) {
    {
      var a = [];
      for (var i in t) {
        var u = eg(e, i, t[i], n);
        u || a.push(i);
      }
      var p = a.map(function(h) {
        return "`" + h + "`";
      }).join(", ");
      a.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : a.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
    }
  };
  function pN(e, t, n) {
    Li(e, t) || dN(e, t, n);
  }
  var ng = 1, Rd = 2, Vs = 4, mN = ng | Rd | Vs, Fs = null;
  function hN(e) {
    Fs !== null && c("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Fs = e;
  }
  function vN() {
    Fs === null && c("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Fs = null;
  }
  function gN(e) {
    return e === Fs;
  }
  function jd(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === pr ? t.parentNode : t;
  }
  var Td = null, So = null, No = null;
  function ag(e) {
    var t = Zr(e);
    if (t) {
      if (typeof Td != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var a = Tc(n);
        Td(t.stateNode, t.type, a);
      }
    }
  }
  function yN(e) {
    Td = e;
  }
  function rg(e) {
    So ? No ? No.push(e) : No = [e] : So = e;
  }
  function bN() {
    return So !== null || No !== null;
  }
  function ig() {
    if (So) {
      var e = So, t = No;
      if (So = null, No = null, ag(e), t)
        for (var n = 0; n < t.length; n++)
          ag(t[n]);
    }
  }
  var og = function(e, t) {
    return e(t);
  }, sg = function() {
  }, Dd = !1;
  function xN() {
    var e = bN();
    e && (sg(), ig());
  }
  function lg(e, t, n) {
    if (Dd)
      return e(t, n);
    Dd = !0;
    try {
      return og(e, t, n);
    } finally {
      Dd = !1, xN();
    }
  }
  function SN(e, t, n) {
    og = e, sg = n;
  }
  function NN(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function EN(e, t, n) {
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
        return !!(n.disabled && NN(t));
      default:
        return !1;
    }
  }
  function zs(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var a = Tc(n);
    if (a === null)
      return null;
    var i = a[t];
    if (EN(t, e.type, a))
      return null;
    if (i && typeof i != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
    return i;
  }
  var kd = !1;
  if (kt)
    try {
      var $s = {};
      Object.defineProperty($s, "passive", {
        get: function() {
          kd = !0;
        }
      }), window.addEventListener("test", $s, $s), window.removeEventListener("test", $s, $s);
    } catch {
      kd = !1;
    }
  function ug(e, t, n, a, i, u, p, h, b) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (R) {
      this.onError(R);
    }
  }
  var cg = ug;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Od = document.createElement("react");
    cg = function(t, n, a, i, u, p, h, b, C) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var R = document.createEvent("Event"), _ = !1, L = !0, H = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
      function K() {
        Od.removeEventListener(W, pe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
      }
      var re = Array.prototype.slice.call(arguments, 3);
      function pe() {
        _ = !0, K(), n.apply(a, re), L = !1;
      }
      var fe, Be = !1, Ve = !1;
      function F(z) {
        if (fe = z.error, Be = !0, fe === null && z.colno === 0 && z.lineno === 0 && (Ve = !0), z.defaultPrevented && fe != null && typeof fe == "object")
          try {
            fe._suppressLogging = !0;
          } catch {
          }
      }
      var W = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", F), Od.addEventListener(W, pe, !1), R.initEvent(W, !1, !1), Od.dispatchEvent(R), B && Object.defineProperty(window, "event", B), _ && L && (Be ? Ve && (fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(fe)), window.removeEventListener("error", F), !_)
        return K(), ug.apply(this, arguments);
    };
  }
  var CN = cg, Eo = !1, Yu = null, Ku = !1, Ld = null, wN = {
    onError: function(e) {
      Eo = !0, Yu = e;
    }
  };
  function _d(e, t, n, a, i, u, p, h, b) {
    Eo = !1, Yu = null, CN.apply(wN, arguments);
  }
  function RN(e, t, n, a, i, u, p, h, b) {
    if (_d.apply(this, arguments), Eo) {
      var C = Ad();
      Ku || (Ku = !0, Ld = C);
    }
  }
  function jN() {
    if (Ku) {
      var e = Ld;
      throw Ku = !1, Ld = null, e;
    }
  }
  function TN() {
    return Eo;
  }
  function Ad() {
    if (Eo) {
      var e = Yu;
      return Eo = !1, Yu = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Co(e) {
    return e._reactInternals;
  }
  function DN(e) {
    return e._reactInternals !== void 0;
  }
  function kN(e, t) {
    e._reactInternals = t;
  }
  var ye = (
    /*                      */
    0
  ), wo = (
    /*                */
    1
  ), Lt = (
    /*                    */
    2
  ), Ie = (
    /*                       */
    4
  ), _i = (
    /*                */
    16
  ), Hs = (
    /*                 */
    32
  ), Pd = (
    /*                     */
    64
  ), Xe = (
    /*                   */
    128
  ), hr = (
    /*            */
    256
  ), Yr = (
    /*                          */
    512
  ), Ai = (
    /*                     */
    1024
  ), wa = (
    /*                      */
    2048
  ), vr = (
    /*                    */
    4096
  ), Pi = (
    /*                   */
    8192
  ), Wu = (
    /*             */
    16384
  ), ON = wa | Ie | Pd | Yr | Ai | Wu, LN = (
    /*               */
    32767
  ), Js = (
    /*                   */
    32768
  ), wn = (
    /*                */
    65536
  ), Md = (
    /* */
    131072
  ), fg = (
    /*                       */
    1048576
  ), Ud = (
    /*                    */
    2097152
  ), Mi = (
    /*                 */
    4194304
  ), Vd = (
    /*                */
    8388608
  ), gr = (
    /*               */
    16777216
  ), Gu = (
    /*              */
    33554432
  ), Fd = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ie | Ai | 0
  ), zd = Lt | Ie | _i | Hs | Yr | vr | Pi, Bs = Ie | Pd | Yr | Pi, Ro = wa | _i, yr = Mi | Vd | Ud, _N = s.ReactCurrentOwner;
  function Ui(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var a = t;
      do
        t = a, (t.flags & (Lt | vr)) !== ye && (n = t.return), a = t.return;
      while (a);
    }
    return t.tag === x ? n : null;
  }
  function dg(e) {
    if (e.tag === M) {
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
  function pg(e) {
    return e.tag === x ? e.stateNode.containerInfo : null;
  }
  function AN(e) {
    return Ui(e) === e;
  }
  function PN(e) {
    {
      var t = _N.current;
      if (t !== null && t.tag === m) {
        var n = t, a = n.stateNode;
        a._warnedAboutRefsInRender || c("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(n) || "A component"), a._warnedAboutRefsInRender = !0;
      }
    }
    var i = Co(e);
    return i ? Ui(i) === i : !1;
  }
  function mg(e) {
    if (Ui(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function hg(e) {
    var t = e.alternate;
    if (!t) {
      var n = Ui(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, i = t; ; ) {
      var u = a.return;
      if (u === null)
        break;
      var p = u.alternate;
      if (p === null) {
        var h = u.return;
        if (h !== null) {
          a = i = h;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (var b = u.child; b; ) {
          if (b === a)
            return mg(u), e;
          if (b === i)
            return mg(u), t;
          b = b.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== i.return)
        a = u, i = p;
      else {
        for (var C = !1, R = u.child; R; ) {
          if (R === a) {
            C = !0, a = u, i = p;
            break;
          }
          if (R === i) {
            C = !0, i = u, a = p;
            break;
          }
          R = R.sibling;
        }
        if (!C) {
          for (R = p.child; R; ) {
            if (R === a) {
              C = !0, a = p, i = u;
              break;
            }
            if (R === i) {
              C = !0, i = p, a = u;
              break;
            }
            R = R.sibling;
          }
          if (!C)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (a.alternate !== i)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (a.tag !== x)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function vg(e) {
    var t = hg(e);
    return t !== null ? gg(t) : null;
  }
  function gg(e) {
    if (e.tag === w || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = gg(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function MN(e) {
    var t = hg(e);
    return t !== null ? yg(t) : null;
  }
  function yg(e) {
    if (e.tag === w || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== S) {
        var n = yg(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var bg = r.unstable_scheduleCallback, UN = r.unstable_cancelCallback, VN = r.unstable_shouldYield, FN = r.unstable_requestPaint, Wt = r.unstable_now, zN = r.unstable_getCurrentPriorityLevel, qu = r.unstable_ImmediatePriority, $d = r.unstable_UserBlockingPriority, Vi = r.unstable_NormalPriority, $N = r.unstable_LowPriority, Hd = r.unstable_IdlePriority, HN = r.unstable_yieldValue, JN = r.unstable_setDisableYieldValue, jo = null, gn = null, oe = null, Ba = !1, Ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function BN(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return c("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      za && (e = Fe({}, e, {
        getLaneLabelMap: qN,
        injectProfilingHooks: GN
      })), jo = t.inject(e), gn = t;
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function IN(e, t) {
    if (gn && typeof gn.onScheduleFiberRoot == "function")
      try {
        gn.onScheduleFiberRoot(jo, e, t);
      } catch (n) {
        Ba || (Ba = !0, c("React instrumentation encountered an error: %s", n));
      }
  }
  function YN(e, t) {
    if (gn && typeof gn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Xe) === Xe;
        if (ya) {
          var a;
          switch (t) {
            case Qn:
              a = qu;
              break;
            case xr:
              a = $d;
              break;
            case Sr:
              a = Vi;
              break;
            case ac:
              a = Hd;
              break;
            default:
              a = Vi;
              break;
          }
          gn.onCommitFiberRoot(jo, e, a, n);
        }
      } catch (i) {
        Ba || (Ba = !0, c("React instrumentation encountered an error: %s", i));
      }
  }
  function KN(e) {
    if (gn && typeof gn.onPostCommitFiberRoot == "function")
      try {
        gn.onPostCommitFiberRoot(jo, e);
      } catch (t) {
        Ba || (Ba = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function WN(e) {
    if (gn && typeof gn.onCommitFiberUnmount == "function")
      try {
        gn.onCommitFiberUnmount(jo, e);
      } catch (t) {
        Ba || (Ba = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Gt(e) {
    if (typeof HN == "function" && (JN(e), d(e)), gn && typeof gn.setStrictMode == "function")
      try {
        gn.setStrictMode(jo, e);
      } catch (t) {
        Ba || (Ba = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function GN(e) {
    oe = e;
  }
  function qN() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < Bd; n++) {
        var a = vE(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
  }
  function QN(e) {
    oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
  }
  function xg() {
    oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
  }
  function Is(e) {
    oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
  }
  function To() {
    oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
  }
  function XN(e) {
    oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
  }
  function ZN() {
    oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
  }
  function eE(e) {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
  }
  function tE() {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
  }
  function nE(e) {
    oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
  }
  function aE() {
    oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
  }
  function Sg(e) {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
  }
  function Ng() {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
  }
  function rE(e, t, n) {
    oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, n);
  }
  function iE(e, t, n) {
    oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, n);
  }
  function oE(e) {
    oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
  }
  function sE() {
    oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
  }
  function lE(e) {
    oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
  }
  function uE() {
    oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
  }
  function Eg(e) {
    oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
  }
  function cE() {
    oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
  }
  function Cg() {
    oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
  }
  function fE(e) {
    oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
  }
  function dE(e, t) {
    oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
  }
  function Jd(e, t) {
    oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
  }
  var ve = (
    /*                         */
    0
  ), He = (
    /*                 */
    1
  ), it = (
    /*                    */
    2
  ), Et = (
    /*               */
    8
  ), Ia = (
    /*              */
    16
  ), wg = Math.clz32 ? Math.clz32 : hE, pE = Math.log, mE = Math.LN2;
  function hE(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (pE(t) / mE | 0) | 0;
  }
  var Bd = 31, q = (
    /*                        */
    0
  ), qt = (
    /*                          */
    0
  ), je = (
    /*                        */
    1
  ), Do = (
    /*    */
    2
  ), br = (
    /*             */
    4
  ), Fi = (
    /*            */
    8
  ), Ya = (
    /*                     */
    16
  ), Ys = (
    /*                */
    32
  ), ko = (
    /*                       */
    4194240
  ), Ks = (
    /*                        */
    64
  ), Id = (
    /*                        */
    128
  ), Yd = (
    /*                        */
    256
  ), Kd = (
    /*                        */
    512
  ), Wd = (
    /*                        */
    1024
  ), Gd = (
    /*                        */
    2048
  ), qd = (
    /*                        */
    4096
  ), Qd = (
    /*                        */
    8192
  ), Xd = (
    /*                        */
    16384
  ), Zd = (
    /*                       */
    32768
  ), ep = (
    /*                       */
    65536
  ), tp = (
    /*                       */
    131072
  ), np = (
    /*                       */
    262144
  ), ap = (
    /*                       */
    524288
  ), rp = (
    /*                       */
    1048576
  ), ip = (
    /*                       */
    2097152
  ), Qu = (
    /*                            */
    130023424
  ), Oo = (
    /*                             */
    4194304
  ), op = (
    /*                             */
    8388608
  ), sp = (
    /*                             */
    16777216
  ), lp = (
    /*                             */
    33554432
  ), up = (
    /*                             */
    67108864
  ), Rg = Oo, Ws = (
    /*          */
    134217728
  ), jg = (
    /*                          */
    268435455
  ), Gs = (
    /*               */
    268435456
  ), zi = (
    /*                        */
    536870912
  ), Gn = (
    /*                   */
    1073741824
  );
  function vE(e) {
    {
      if (e & je)
        return "Sync";
      if (e & Do)
        return "InputContinuousHydration";
      if (e & br)
        return "InputContinuous";
      if (e & Fi)
        return "DefaultHydration";
      if (e & Ya)
        return "Default";
      if (e & Ys)
        return "TransitionHydration";
      if (e & ko)
        return "Transition";
      if (e & Qu)
        return "Retry";
      if (e & Ws)
        return "SelectiveHydration";
      if (e & Gs)
        return "IdleHydration";
      if (e & zi)
        return "Idle";
      if (e & Gn)
        return "Offscreen";
    }
  }
  var dt = -1, Xu = Ks, Zu = Oo;
  function qs(e) {
    switch ($i(e)) {
      case je:
        return je;
      case Do:
        return Do;
      case br:
        return br;
      case Fi:
        return Fi;
      case Ya:
        return Ya;
      case Ys:
        return Ys;
      case Ks:
      case Id:
      case Yd:
      case Kd:
      case Wd:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case ep:
      case tp:
      case np:
      case ap:
      case rp:
      case ip:
        return e & ko;
      case Oo:
      case op:
      case sp:
      case lp:
      case up:
        return e & Qu;
      case Ws:
        return Ws;
      case Gs:
        return Gs;
      case zi:
        return zi;
      case Gn:
        return Gn;
      default:
        return c("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function ec(e, t) {
    var n = e.pendingLanes;
    if (n === q)
      return q;
    var a = q, i = e.suspendedLanes, u = e.pingedLanes, p = n & jg;
    if (p !== q) {
      var h = p & ~i;
      if (h !== q)
        a = qs(h);
      else {
        var b = p & u;
        b !== q && (a = qs(b));
      }
    } else {
      var C = n & ~i;
      C !== q ? a = qs(C) : u !== q && (a = qs(u));
    }
    if (a === q)
      return q;
    if (t !== q && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & i) === q) {
      var R = $i(a), _ = $i(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        R >= _ || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        R === Ya && (_ & ko) !== q
      )
        return t;
    }
    (a & br) !== q && (a |= n & Ya);
    var L = e.entangledLanes;
    if (L !== q)
      for (var H = e.entanglements, B = a & L; B > 0; ) {
        var K = Hi(B), re = 1 << K;
        a |= H[K], B &= ~re;
      }
    return a;
  }
  function gE(e, t) {
    for (var n = e.eventTimes, a = dt; t > 0; ) {
      var i = Hi(t), u = 1 << i, p = n[i];
      p > a && (a = p), t &= ~u;
    }
    return a;
  }
  function yE(e, t) {
    switch (e) {
      case je:
      case Do:
      case br:
        return t + 250;
      case Fi:
      case Ya:
      case Ys:
      case Ks:
      case Id:
      case Yd:
      case Kd:
      case Wd:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case ep:
      case tp:
      case np:
      case ap:
      case rp:
      case ip:
        return t + 5e3;
      case Oo:
      case op:
      case sp:
      case lp:
      case up:
        return dt;
      case Ws:
      case Gs:
      case zi:
      case Gn:
        return dt;
      default:
        return c("Should have found matching lanes. This is a bug in React."), dt;
    }
  }
  function bE(e, t) {
    for (var n = e.pendingLanes, a = e.suspendedLanes, i = e.pingedLanes, u = e.expirationTimes, p = n; p > 0; ) {
      var h = Hi(p), b = 1 << h, C = u[h];
      C === dt ? ((b & a) === q || (b & i) !== q) && (u[h] = yE(b, t)) : C <= t && (e.expiredLanes |= b), p &= ~b;
    }
  }
  function xE(e) {
    return qs(e.pendingLanes);
  }
  function cp(e) {
    var t = e.pendingLanes & ~Gn;
    return t !== q ? t : t & Gn ? Gn : q;
  }
  function SE(e) {
    return (e & je) !== q;
  }
  function fp(e) {
    return (e & jg) !== q;
  }
  function Tg(e) {
    return (e & Qu) === e;
  }
  function NE(e) {
    var t = je | br | Ya;
    return (e & t) === q;
  }
  function EE(e) {
    return (e & ko) === e;
  }
  function tc(e, t) {
    var n = Do | br | Fi | Ya;
    return (t & n) !== q;
  }
  function CE(e, t) {
    return (t & e.expiredLanes) !== q;
  }
  function Dg(e) {
    return (e & ko) !== q;
  }
  function kg() {
    var e = Xu;
    return Xu <<= 1, (Xu & ko) === q && (Xu = Ks), e;
  }
  function wE() {
    var e = Zu;
    return Zu <<= 1, (Zu & Qu) === q && (Zu = Oo), e;
  }
  function $i(e) {
    return e & -e;
  }
  function Qs(e) {
    return $i(e);
  }
  function Hi(e) {
    return 31 - wg(e);
  }
  function dp(e) {
    return Hi(e);
  }
  function qn(e, t) {
    return (e & t) !== q;
  }
  function Lo(e, t) {
    return (e & t) === t;
  }
  function Ae(e, t) {
    return e | t;
  }
  function nc(e, t) {
    return e & ~t;
  }
  function Og(e, t) {
    return e & t;
  }
  function KP(e) {
    return e;
  }
  function RE(e, t) {
    return e !== qt && e < t ? e : t;
  }
  function pp(e) {
    for (var t = [], n = 0; n < Bd; n++)
      t.push(e);
    return t;
  }
  function Xs(e, t, n) {
    e.pendingLanes |= t, t !== zi && (e.suspendedLanes = q, e.pingedLanes = q);
    var a = e.eventTimes, i = dp(t);
    a[i] = n;
  }
  function jE(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var i = Hi(a), u = 1 << i;
      n[i] = dt, a &= ~u;
    }
  }
  function Lg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function TE(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var a = e.entanglements, i = e.eventTimes, u = e.expirationTimes, p = n; p > 0; ) {
      var h = Hi(p), b = 1 << h;
      a[h] = q, i[h] = dt, u[h] = dt, p &= ~b;
    }
  }
  function mp(e, t) {
    for (var n = e.entangledLanes |= t, a = e.entanglements, i = n; i; ) {
      var u = Hi(i), p = 1 << u;
      // Is this one of the newly entangled lanes?
      p & t | // Is this lane transitively entangled with the newly entangled lanes?
      a[u] & t && (a[u] |= t), i &= ~p;
    }
  }
  function DE(e, t) {
    var n = $i(t), a;
    switch (n) {
      case br:
        a = Do;
        break;
      case Ya:
        a = Fi;
        break;
      case Ks:
      case Id:
      case Yd:
      case Kd:
      case Wd:
      case Gd:
      case qd:
      case Qd:
      case Xd:
      case Zd:
      case ep:
      case tp:
      case np:
      case ap:
      case rp:
      case ip:
      case Oo:
      case op:
      case sp:
      case lp:
      case up:
        a = Ys;
        break;
      case zi:
        a = Gs;
        break;
      default:
        a = qt;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== qt ? qt : a;
  }
  function _g(e, t, n) {
    if (Ra)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var i = dp(n), u = 1 << i, p = a[i];
        p.add(t), n &= ~u;
      }
  }
  function Ag(e, t) {
    if (Ra)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var i = dp(t), u = 1 << i, p = n[i];
        p.size > 0 && (p.forEach(function(h) {
          var b = h.alternate;
          (b === null || !a.has(b)) && a.add(h);
        }), p.clear()), t &= ~u;
      }
  }
  function Pg(e, t) {
    return null;
  }
  var Qn = je, xr = br, Sr = Ya, ac = zi, Zs = qt;
  function ja() {
    return Zs;
  }
  function Qt(e) {
    Zs = e;
  }
  function kE(e, t) {
    var n = Zs;
    try {
      return Zs = e, t();
    } finally {
      Zs = n;
    }
  }
  function OE(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function LE(e, t) {
    return e > t ? e : t;
  }
  function hp(e, t) {
    return e !== 0 && e < t;
  }
  function Mg(e) {
    var t = $i(e);
    return hp(Qn, t) ? hp(xr, t) ? fp(t) ? Sr : ac : xr : Qn;
  }
  function rc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var Ug;
  function _E(e) {
    Ug = e;
  }
  function AE(e) {
    Ug(e);
  }
  var vp;
  function PE(e) {
    vp = e;
  }
  var Vg;
  function ME(e) {
    Vg = e;
  }
  var Fg;
  function UE(e) {
    Fg = e;
  }
  var zg;
  function VE(e) {
    zg = e;
  }
  var gp = !1, ic = [], Kr = null, Wr = null, Gr = null, el = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Map(), qr = [], FE = [
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
  function zE(e) {
    return FE.indexOf(e) > -1;
  }
  function $E(e, t, n, a, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    };
  }
  function $g(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Gr = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        el.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        tl.delete(a);
        break;
      }
    }
  }
  function nl(e, t, n, a, i, u) {
    if (e === null || e.nativeEvent !== u) {
      var p = $E(t, n, a, i, u);
      if (t !== null) {
        var h = Zr(t);
        h !== null && vp(h);
      }
      return p;
    }
    e.eventSystemFlags |= a;
    var b = e.targetContainers;
    return i !== null && b.indexOf(i) === -1 && b.push(i), e;
  }
  function HE(e, t, n, a, i) {
    switch (t) {
      case "focusin": {
        var u = i;
        return Kr = nl(Kr, e, t, n, a, u), !0;
      }
      case "dragenter": {
        var p = i;
        return Wr = nl(Wr, e, t, n, a, p), !0;
      }
      case "mouseover": {
        var h = i;
        return Gr = nl(Gr, e, t, n, a, h), !0;
      }
      case "pointerover": {
        var b = i, C = b.pointerId;
        return el.set(C, nl(el.get(C) || null, e, t, n, a, b)), !0;
      }
      case "gotpointercapture": {
        var R = i, _ = R.pointerId;
        return tl.set(_, nl(tl.get(_) || null, e, t, n, a, R)), !0;
      }
    }
    return !1;
  }
  function Hg(e) {
    var t = Ii(e.target);
    if (t !== null) {
      var n = Ui(t);
      if (n !== null) {
        var a = n.tag;
        if (a === M) {
          var i = dg(n);
          if (i !== null) {
            e.blockedOn = i, zg(e.priority, function() {
              Vg(n);
            });
            return;
          }
        } else if (a === x) {
          var u = n.stateNode;
          if (rc(u)) {
            e.blockedOn = pg(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function JE(e) {
    for (var t = Fg(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, a = 0; a < qr.length && hp(t, qr[a].priority); a++)
      ;
    qr.splice(a, 0, n), a === 0 && Hg(n);
  }
  function oc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], a = xp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var i = e.nativeEvent, u = new i.constructor(i.type, i);
        hN(u), i.target.dispatchEvent(u), vN();
      } else {
        var p = Zr(a);
        return p !== null && vp(p), e.blockedOn = a, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Jg(e, t, n) {
    oc(e) && n.delete(t);
  }
  function BE() {
    gp = !1, Kr !== null && oc(Kr) && (Kr = null), Wr !== null && oc(Wr) && (Wr = null), Gr !== null && oc(Gr) && (Gr = null), el.forEach(Jg), tl.forEach(Jg);
  }
  function al(e, t) {
    e.blockedOn === t && (e.blockedOn = null, gp || (gp = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, BE)));
  }
  function rl(e) {
    if (ic.length > 0) {
      al(ic[0], e);
      for (var t = 1; t < ic.length; t++) {
        var n = ic[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Kr !== null && al(Kr, e), Wr !== null && al(Wr, e), Gr !== null && al(Gr, e);
    var a = function(h) {
      return al(h, e);
    };
    el.forEach(a), tl.forEach(a);
    for (var i = 0; i < qr.length; i++) {
      var u = qr[i];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; qr.length > 0; ) {
      var p = qr[0];
      if (p.blockedOn !== null)
        break;
      Hg(p), p.blockedOn === null && qr.shift();
    }
  }
  var _o = s.ReactCurrentBatchConfig, yp = !0;
  function Bg(e) {
    yp = !!e;
  }
  function IE() {
    return yp;
  }
  function YE(e, t, n) {
    var a = Ig(t), i;
    switch (a) {
      case Qn:
        i = KE;
        break;
      case xr:
        i = WE;
        break;
      case Sr:
      default:
        i = bp;
        break;
    }
    return i.bind(null, t, n, e);
  }
  function KE(e, t, n, a) {
    var i = ja(), u = _o.transition;
    _o.transition = null;
    try {
      Qt(Qn), bp(e, t, n, a);
    } finally {
      Qt(i), _o.transition = u;
    }
  }
  function WE(e, t, n, a) {
    var i = ja(), u = _o.transition;
    _o.transition = null;
    try {
      Qt(xr), bp(e, t, n, a);
    } finally {
      Qt(i), _o.transition = u;
    }
  }
  function bp(e, t, n, a) {
    yp && GE(e, t, n, a);
  }
  function GE(e, t, n, a) {
    var i = xp(e, t, n, a);
    if (i === null) {
      Ap(e, t, a, sc, n), $g(e, a);
      return;
    }
    if (HE(i, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if ($g(e, a), t & Vs && zE(e)) {
      for (; i !== null; ) {
        var u = Zr(i);
        u !== null && AE(u);
        var p = xp(e, t, n, a);
        if (p === null && Ap(e, t, a, sc, n), p === i)
          break;
        i = p;
      }
      i !== null && a.stopPropagation();
      return;
    }
    Ap(e, t, a, null, n);
  }
  var sc = null;
  function xp(e, t, n, a) {
    sc = null;
    var i = jd(a), u = Ii(i);
    if (u !== null) {
      var p = Ui(u);
      if (p === null)
        u = null;
      else {
        var h = p.tag;
        if (h === M) {
          var b = dg(p);
          if (b !== null)
            return b;
          u = null;
        } else if (h === x) {
          var C = p.stateNode;
          if (rc(C))
            return pg(p);
          u = null;
        } else p !== u && (u = null);
      }
    }
    return sc = u, null;
  }
  function Ig(e) {
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
        return Qn;
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
        return xr;
      case "message": {
        var t = zN();
        switch (t) {
          case qu:
            return Qn;
          case $d:
            return xr;
          case Vi:
          case $N:
            return Sr;
          case Hd:
            return ac;
          default:
            return Sr;
        }
      }
      default:
        return Sr;
    }
  }
  function qE(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function QE(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function XE(e, t, n, a) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }), n;
  }
  function ZE(e, t, n, a) {
    return e.addEventListener(t, n, {
      passive: a
    }), n;
  }
  var il = null, Sp = null, ol = null;
  function eC(e) {
    return il = e, Sp = Kg(), !0;
  }
  function tC() {
    il = null, Sp = null, ol = null;
  }
  function Yg() {
    if (ol)
      return ol;
    var e, t = Sp, n = t.length, a, i = Kg(), u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === i[u - a]; a++)
      ;
    var h = a > 1 ? 1 - a : void 0;
    return ol = i.slice(e, h), ol;
  }
  function Kg() {
    return "value" in il ? il.value : il.textContent;
  }
  function lc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function uc() {
    return !0;
  }
  function Wg() {
    return !1;
  }
  function Xn(e) {
    function t(n, a, i, u, p) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var h in e)
        if (e.hasOwnProperty(h)) {
          var b = e[h];
          b ? this[h] = b(u) : this[h] = u[h];
        }
      var C = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return C ? this.isDefaultPrevented = uc : this.isDefaultPrevented = Wg, this.isPropagationStopped = Wg, this;
    }
    return Fe(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = uc);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = uc);
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
      isPersistent: uc
    }), t;
  }
  var Ao = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Np = Xn(Ao), sl = Fe({}, Ao, {
    view: 0,
    detail: 0
  }), nC = Xn(sl), Ep, Cp, ll;
  function aC(e) {
    e !== ll && (ll && e.type === "mousemove" ? (Ep = e.screenX - ll.screenX, Cp = e.screenY - ll.screenY) : (Ep = 0, Cp = 0), ll = e);
  }
  var cc = Fe({}, sl, {
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
    getModifierState: Rp,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (aC(e), Ep);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Cp;
    }
  }), Gg = Xn(cc), rC = Fe({}, cc, {
    dataTransfer: 0
  }), iC = Xn(rC), oC = Fe({}, sl, {
    relatedTarget: 0
  }), wp = Xn(oC), sC = Fe({}, Ao, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lC = Xn(sC), uC = Fe({}, Ao, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), cC = Xn(uC), fC = Fe({}, Ao, {
    data: 0
  }), qg = Xn(fC), dC = qg, pC = {
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
  }, mC = {
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
  function hC(e) {
    if (e.key) {
      var t = pC[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = lc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? mC[e.keyCode] || "Unidentified" : "";
  }
  var vC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gC(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var a = vC[e];
    return a ? !!n[a] : !1;
  }
  function Rp(e) {
    return gC;
  }
  var yC = Fe({}, sl, {
    key: hC,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rp,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? lc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? lc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), bC = Xn(yC), xC = Fe({}, cc, {
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
  }), Qg = Xn(xC), SC = Fe({}, sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rp
  }), NC = Xn(SC), EC = Fe({}, Ao, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), CC = Xn(EC), wC = Fe({}, cc, {
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
  }), RC = Xn(wC), jC = [9, 13, 27, 32], Xg = 229, jp = kt && "CompositionEvent" in window, ul = null;
  kt && "documentMode" in document && (ul = document.documentMode);
  var TC = kt && "TextEvent" in window && !ul, Zg = kt && (!jp || ul && ul > 8 && ul <= 11), ey = 32, ty = String.fromCharCode(ey);
  function DC() {
    Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Jn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Jn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Jn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var ny = !1;
  function kC(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function OC(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function LC(e, t) {
    return e === "keydown" && t.keyCode === Xg;
  }
  function ay(e, t) {
    switch (e) {
      case "keyup":
        return jC.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== Xg;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ry(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function iy(e) {
    return e.locale === "ko";
  }
  var Po = !1;
  function _C(e, t, n, a, i) {
    var u, p;
    if (jp ? u = OC(t) : Po ? ay(t, a) && (u = "onCompositionEnd") : LC(t, a) && (u = "onCompositionStart"), !u)
      return null;
    Zg && !iy(a) && (!Po && u === "onCompositionStart" ? Po = eC(i) : u === "onCompositionEnd" && Po && (p = Yg()));
    var h = hc(n, u);
    if (h.length > 0) {
      var b = new qg(u, t, null, a, i);
      if (e.push({
        event: b,
        listeners: h
      }), p)
        b.data = p;
      else {
        var C = ry(a);
        C !== null && (b.data = C);
      }
    }
  }
  function AC(e, t) {
    switch (e) {
      case "compositionend":
        return ry(t);
      case "keypress":
        var n = t.which;
        return n !== ey ? null : (ny = !0, ty);
      case "textInput":
        var a = t.data;
        return a === ty && ny ? null : a;
      default:
        return null;
    }
  }
  function PC(e, t) {
    if (Po) {
      if (e === "compositionend" || !jp && ay(e, t)) {
        var n = Yg();
        return tC(), Po = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!kC(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zg && !iy(t) ? null : t.data;
      default:
        return null;
    }
  }
  function MC(e, t, n, a, i) {
    var u;
    if (TC ? u = AC(t, a) : u = PC(t, a), !u)
      return null;
    var p = hc(n, "onBeforeInput");
    if (p.length > 0) {
      var h = new dC("onBeforeInput", "beforeinput", null, a, i);
      e.push({
        event: h,
        listeners: p
      }), h.data = u;
    }
  }
  function UC(e, t, n, a, i, u, p) {
    _C(e, t, n, a, i), MC(e, t, n, a, i);
  }
  var VC = {
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
  function oy(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!VC[e.type] : t === "textarea";
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
  function FC(e) {
    if (!kt)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    }
    return n;
  }
  function zC() {
    Jn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function sy(e, t, n, a) {
    rg(a);
    var i = hc(t, "onChange");
    if (i.length > 0) {
      var u = new Np("onChange", "change", null, n, a);
      e.push({
        event: u,
        listeners: i
      });
    }
  }
  var cl = null, fl = null;
  function $C(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function HC(e) {
    var t = [];
    sy(t, fl, e, jd(e)), lg(JC, t);
  }
  function JC(e) {
    wy(e, 0);
  }
  function fc(e) {
    var t = $o(e);
    if (vo(t))
      return e;
  }
  function BC(e, t) {
    if (e === "change")
      return t;
  }
  var ly = !1;
  kt && (ly = FC("input") && (!document.documentMode || document.documentMode > 9));
  function IC(e, t) {
    cl = e, fl = t, cl.attachEvent("onpropertychange", cy);
  }
  function uy() {
    cl && (cl.detachEvent("onpropertychange", cy), cl = null, fl = null);
  }
  function cy(e) {
    e.propertyName === "value" && fc(fl) && HC(e);
  }
  function YC(e, t, n) {
    e === "focusin" ? (uy(), IC(t, n)) : e === "focusout" && uy();
  }
  function KC(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return fc(fl);
  }
  function WC(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function GC(e, t) {
    if (e === "click")
      return fc(t);
  }
  function qC(e, t) {
    if (e === "input" || e === "change")
      return fc(t);
  }
  function QC(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Re(e, "number", e.value);
  }
  function XC(e, t, n, a, i, u, p) {
    var h = n ? $o(n) : window, b, C;
    if ($C(h) ? b = BC : oy(h) ? ly ? b = qC : (b = KC, C = YC) : WC(h) && (b = GC), b) {
      var R = b(t, n);
      if (R) {
        sy(e, R, a, i);
        return;
      }
    }
    C && C(t, h, n), t === "focusout" && QC(h);
  }
  function ZC() {
    Bn("onMouseEnter", ["mouseout", "mouseover"]), Bn("onMouseLeave", ["mouseout", "mouseover"]), Bn("onPointerEnter", ["pointerout", "pointerover"]), Bn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function ew(e, t, n, a, i, u, p) {
    var h = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
    if (h && !gN(a)) {
      var C = a.relatedTarget || a.fromElement;
      if (C && (Ii(C) || Rl(C)))
        return;
    }
    if (!(!b && !h)) {
      var R;
      if (i.window === i)
        R = i;
      else {
        var _ = i.ownerDocument;
        _ ? R = _.defaultView || _.parentWindow : R = window;
      }
      var L, H;
      if (b) {
        var B = a.relatedTarget || a.toElement;
        if (L = n, H = B ? Ii(B) : null, H !== null) {
          var K = Ui(H);
          (H !== K || H.tag !== w && H.tag !== j) && (H = null);
        }
      } else
        L = null, H = n;
      if (L !== H) {
        var re = Gg, pe = "onMouseLeave", fe = "onMouseEnter", Be = "mouse";
        (t === "pointerout" || t === "pointerover") && (re = Qg, pe = "onPointerLeave", fe = "onPointerEnter", Be = "pointer");
        var Ve = L == null ? R : $o(L), F = H == null ? R : $o(H), W = new re(pe, Be + "leave", L, a, i);
        W.target = Ve, W.relatedTarget = F;
        var z = null, X = Ii(i);
        if (X === n) {
          var le = new re(fe, Be + "enter", H, a, i);
          le.target = F, le.relatedTarget = Ve, z = le;
        }
        Cw(e, W, z, L, H);
      }
    }
  }
  function tw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Zn = typeof Object.is == "function" ? Object.is : tw;
  function dl(e, t) {
    if (Zn(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length)
      return !1;
    for (var i = 0; i < n.length; i++) {
      var u = n[i];
      if (!pn.call(t, u) || !Zn(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function fy(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function nw(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function dy(e, t) {
    for (var n = fy(e), a = 0, i = 0; n; ) {
      if (n.nodeType === pr) {
        if (i = a + n.textContent.length, a <= t && i >= t)
          return {
            node: n,
            offset: t - a
          };
        a = i;
      }
      n = fy(nw(n));
    }
  }
  function aw(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0)
      return null;
    var i = a.anchorNode, u = a.anchorOffset, p = a.focusNode, h = a.focusOffset;
    try {
      i.nodeType, p.nodeType;
    } catch {
      return null;
    }
    return rw(e, i, u, p, h);
  }
  function rw(e, t, n, a, i) {
    var u = 0, p = -1, h = -1, b = 0, C = 0, R = e, _ = null;
    e: for (; ; ) {
      for (var L = null; R === t && (n === 0 || R.nodeType === pr) && (p = u + n), R === a && (i === 0 || R.nodeType === pr) && (h = u + i), R.nodeType === pr && (u += R.nodeValue.length), (L = R.firstChild) !== null; )
        _ = R, R = L;
      for (; ; ) {
        if (R === e)
          break e;
        if (_ === t && ++b === n && (p = u), _ === a && ++C === i && (h = u), (L = R.nextSibling) !== null)
          break;
        R = _, _ = R.parentNode;
      }
      R = L;
    }
    return p === -1 || h === -1 ? null : {
      start: p,
      end: h
    };
  }
  function iw(e, t) {
    var n = e.ownerDocument || document, a = n && n.defaultView || window;
    if (a.getSelection) {
      var i = a.getSelection(), u = e.textContent.length, p = Math.min(t.start, u), h = t.end === void 0 ? p : Math.min(t.end, u);
      if (!i.extend && p > h) {
        var b = h;
        h = p, p = b;
      }
      var C = dy(e, p), R = dy(e, h);
      if (C && R) {
        if (i.rangeCount === 1 && i.anchorNode === C.node && i.anchorOffset === C.offset && i.focusNode === R.node && i.focusOffset === R.offset)
          return;
        var _ = n.createRange();
        _.setStart(C.node, C.offset), i.removeAllRanges(), p > h ? (i.addRange(_), i.extend(R.node, R.offset)) : (_.setEnd(R.node, R.offset), i.addRange(_));
      }
    }
  }
  function py(e) {
    return e && e.nodeType === pr;
  }
  function my(e, t) {
    return !e || !t ? !1 : e === t ? !0 : py(e) ? !1 : py(t) ? my(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function ow(e) {
    return e && e.ownerDocument && my(e.ownerDocument.documentElement, e);
  }
  function sw(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function hy() {
    for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
      if (sw(t))
        e = t.contentWindow;
      else
        return t;
      t = Br(e.document);
    }
    return t;
  }
  function Tp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function lw() {
    var e = hy();
    return {
      focusedElem: e,
      selectionRange: Tp(e) ? cw(e) : null
    };
  }
  function uw(e) {
    var t = hy(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && ow(n)) {
      a !== null && Tp(n) && fw(n, a);
      for (var i = [], u = n; u = u.parentNode; )
        u.nodeType === Pn && i.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var p = 0; p < i.length; p++) {
        var h = i[p];
        h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
      }
    }
  }
  function cw(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = aw(e), t || {
      start: 0,
      end: 0
    };
  }
  function fw(e, t) {
    var n = t.start, a = t.end;
    a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : iw(e, t);
  }
  var dw = kt && "documentMode" in document && document.documentMode <= 11;
  function pw() {
    Jn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var Mo = null, Dp = null, pl = null, kp = !1;
  function mw(e) {
    if ("selectionStart" in e && Tp(e))
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
  function hw(e) {
    return e.window === e ? e.document : e.nodeType === mr ? e : e.ownerDocument;
  }
  function vy(e, t, n) {
    var a = hw(n);
    if (!(kp || Mo == null || Mo !== Br(a))) {
      var i = mw(Mo);
      if (!pl || !dl(pl, i)) {
        pl = i;
        var u = hc(Dp, "onSelect");
        if (u.length > 0) {
          var p = new Np("onSelect", "select", null, t, n);
          e.push({
            event: p,
            listeners: u
          }), p.target = Mo;
        }
      }
    }
  }
  function vw(e, t, n, a, i, u, p) {
    var h = n ? $o(n) : window;
    switch (t) {
      case "focusin":
        (oy(h) || h.contentEditable === "true") && (Mo = h, Dp = n, pl = null);
        break;
      case "focusout":
        Mo = null, Dp = null, pl = null;
        break;
      case "mousedown":
        kp = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        kp = !1, vy(e, a, i);
        break;
      case "selectionchange":
        if (dw)
          break;
      case "keydown":
      case "keyup":
        vy(e, a, i);
    }
  }
  function dc(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Uo = {
    animationend: dc("Animation", "AnimationEnd"),
    animationiteration: dc("Animation", "AnimationIteration"),
    animationstart: dc("Animation", "AnimationStart"),
    transitionend: dc("Transition", "TransitionEnd")
  }, Op = {}, gy = {};
  kt && (gy = document.createElement("div").style, "AnimationEvent" in window || (delete Uo.animationend.animation, delete Uo.animationiteration.animation, delete Uo.animationstart.animation), "TransitionEvent" in window || delete Uo.transitionend.transition);
  function pc(e) {
    if (Op[e])
      return Op[e];
    if (!Uo[e])
      return e;
    var t = Uo[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in gy)
        return Op[e] = t[n];
    return e;
  }
  var yy = pc("animationend"), by = pc("animationiteration"), xy = pc("animationstart"), Sy = pc("transitionend"), Ny = /* @__PURE__ */ new Map(), Ey = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function Qr(e, t) {
    Ny.set(e, t), Jn(t, [e]);
  }
  function gw() {
    for (var e = 0; e < Ey.length; e++) {
      var t = Ey[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
      Qr(n, "on" + a);
    }
    Qr(yy, "onAnimationEnd"), Qr(by, "onAnimationIteration"), Qr(xy, "onAnimationStart"), Qr("dblclick", "onDoubleClick"), Qr("focusin", "onFocus"), Qr("focusout", "onBlur"), Qr(Sy, "onTransitionEnd");
  }
  function yw(e, t, n, a, i, u, p) {
    var h = Ny.get(t);
    if (h !== void 0) {
      var b = Np, C = t;
      switch (t) {
        case "keypress":
          if (lc(a) === 0)
            return;
        case "keydown":
        case "keyup":
          b = bC;
          break;
        case "focusin":
          C = "focus", b = wp;
          break;
        case "focusout":
          C = "blur", b = wp;
          break;
        case "beforeblur":
        case "afterblur":
          b = wp;
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
          b = Gg;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          b = iC;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          b = NC;
          break;
        case yy:
        case by:
        case xy:
          b = lC;
          break;
        case Sy:
          b = CC;
          break;
        case "scroll":
          b = nC;
          break;
        case "wheel":
          b = RC;
          break;
        case "copy":
        case "cut":
        case "paste":
          b = cC;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          b = Qg;
          break;
      }
      var R = (u & Vs) !== 0;
      {
        var _ = !R && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", L = Nw(n, h, a.type, R, _);
        if (L.length > 0) {
          var H = new b(h, C, null, a, i);
          e.push({
            event: H,
            listeners: L
          });
        }
      }
    }
  }
  gw(), ZC(), zC(), pw(), DC();
  function bw(e, t, n, a, i, u, p) {
    yw(e, t, n, a, i, u);
    var h = (u & mN) === 0;
    h && (ew(e, t, n, a, i), XC(e, t, n, a, i), vw(e, t, n, a, i), UC(e, t, n, a, i));
  }
  var ml = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Lp = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ml));
  function Cy(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, RN(a, t, void 0, e), e.currentTarget = null;
  }
  function xw(e, t, n) {
    var a;
    if (n)
      for (var i = t.length - 1; i >= 0; i--) {
        var u = t[i], p = u.instance, h = u.currentTarget, b = u.listener;
        if (p !== a && e.isPropagationStopped())
          return;
        Cy(e, b, h), a = p;
      }
    else
      for (var C = 0; C < t.length; C++) {
        var R = t[C], _ = R.instance, L = R.currentTarget, H = R.listener;
        if (_ !== a && e.isPropagationStopped())
          return;
        Cy(e, H, L), a = _;
      }
  }
  function wy(e, t) {
    for (var n = (t & Vs) !== 0, a = 0; a < e.length; a++) {
      var i = e[a], u = i.event, p = i.listeners;
      xw(u, p, n);
    }
    jN();
  }
  function Sw(e, t, n, a, i) {
    var u = jd(n), p = [];
    bw(p, e, a, n, u, t), wy(p, t);
  }
  function vt(e, t) {
    Lp.has(e) || c('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, a = QR(t), i = ww(e);
    a.has(i) || (Ry(t, e, Rd, n), a.add(i));
  }
  function _p(e, t, n) {
    Lp.has(e) && !t && c('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var a = 0;
    t && (a |= Vs), Ry(n, e, a, t);
  }
  var mc = "_reactListening" + Math.random().toString(36).slice(2);
  function hl(e) {
    if (!e[mc]) {
      e[mc] = !0, ia.forEach(function(n) {
        n !== "selectionchange" && (Lp.has(n) || _p(n, !1, e), _p(n, !0, e));
      });
      var t = e.nodeType === mr ? e : e.ownerDocument;
      t !== null && (t[mc] || (t[mc] = !0, _p("selectionchange", !1, t)));
    }
  }
  function Ry(e, t, n, a, i) {
    var u = YE(e, t, n), p = void 0;
    kd && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, a ? p !== void 0 ? XE(e, t, u, p) : QE(e, t, u) : p !== void 0 ? ZE(e, t, u, p) : qE(e, t, u);
  }
  function jy(e, t) {
    return e === t || e.nodeType === Ot && e.parentNode === t;
  }
  function Ap(e, t, n, a, i) {
    var u = a;
    if (!(t & ng) && !(t & Rd)) {
      var p = i;
      if (a !== null) {
        var h = a;
        e: for (; ; ) {
          if (h === null)
            return;
          var b = h.tag;
          if (b === x || b === S) {
            var C = h.stateNode.containerInfo;
            if (jy(C, p))
              break;
            if (b === S)
              for (var R = h.return; R !== null; ) {
                var _ = R.tag;
                if (_ === x || _ === S) {
                  var L = R.stateNode.containerInfo;
                  if (jy(L, p))
                    return;
                }
                R = R.return;
              }
            for (; C !== null; ) {
              var H = Ii(C);
              if (H === null)
                return;
              var B = H.tag;
              if (B === w || B === j) {
                h = u = H;
                continue e;
              }
              C = C.parentNode;
            }
          }
          h = h.return;
        }
      }
    }
    lg(function() {
      return Sw(e, t, n, u);
    });
  }
  function vl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Nw(e, t, n, a, i, u) {
    for (var p = t !== null ? t + "Capture" : null, h = a ? p : t, b = [], C = e, R = null; C !== null; ) {
      var _ = C, L = _.stateNode, H = _.tag;
      if (H === w && L !== null && (R = L, h !== null)) {
        var B = zs(C, h);
        B != null && b.push(vl(C, B, R));
      }
      if (i)
        break;
      C = C.return;
    }
    return b;
  }
  function hc(e, t) {
    for (var n = t + "Capture", a = [], i = e; i !== null; ) {
      var u = i, p = u.stateNode, h = u.tag;
      if (h === w && p !== null) {
        var b = p, C = zs(i, n);
        C != null && a.unshift(vl(i, C, b));
        var R = zs(i, t);
        R != null && a.push(vl(i, R, b));
      }
      i = i.return;
    }
    return a;
  }
  function Vo(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== w);
    return e || null;
  }
  function Ew(e, t) {
    for (var n = e, a = t, i = 0, u = n; u; u = Vo(u))
      i++;
    for (var p = 0, h = a; h; h = Vo(h))
      p++;
    for (; i - p > 0; )
      n = Vo(n), i--;
    for (; p - i > 0; )
      a = Vo(a), p--;
    for (var b = i; b--; ) {
      if (n === a || a !== null && n === a.alternate)
        return n;
      n = Vo(n), a = Vo(a);
    }
    return null;
  }
  function Ty(e, t, n, a, i) {
    for (var u = t._reactName, p = [], h = n; h !== null && h !== a; ) {
      var b = h, C = b.alternate, R = b.stateNode, _ = b.tag;
      if (C !== null && C === a)
        break;
      if (_ === w && R !== null) {
        var L = R;
        if (i) {
          var H = zs(h, u);
          H != null && p.unshift(vl(h, H, L));
        } else if (!i) {
          var B = zs(h, u);
          B != null && p.push(vl(h, B, L));
        }
      }
      h = h.return;
    }
    p.length !== 0 && e.push({
      event: t,
      listeners: p
    });
  }
  function Cw(e, t, n, a, i) {
    var u = a && i ? Ew(a, i) : null;
    a !== null && Ty(e, t, a, u, !1), i !== null && n !== null && Ty(e, n, i, u, !0);
  }
  function ww(e, t) {
    return e + "__bubble";
  }
  var Mn = !1, gl = "dangerouslySetInnerHTML", vc = "suppressContentEditableWarning", Xr = "suppressHydrationWarning", Dy = "autoFocus", Ji = "children", Bi = "style", gc = "__html", Pp, yc, yl, ky, bc, Oy, Ly;
  Pp = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, yc = function(e, t) {
    sN(e, t), lN(e, t), pN(e, t, {
      registrationNameDependencies: Xt,
      possibleRegistrationNames: On
    });
  }, Oy = kt && !document.documentMode, yl = function(e, t, n) {
    if (!Mn) {
      var a = xc(n), i = xc(t);
      i !== a && (Mn = !0, c("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(i), JSON.stringify(a)));
    }
  }, ky = function(e) {
    if (!Mn) {
      Mn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), c("Extra attributes from the server: %s", t);
    }
  }, bc = function(e, t) {
    t === !1 ? c("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : c("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Ly = function(e, t) {
    var n = e.namespaceURI === dr ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var Rw = /\r\n?/g, jw = /\u0000|\uFFFD/g;
  function xc(e) {
    sa(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(Rw, `
`).replace(jw, "");
  }
  function Sc(e, t, n, a) {
    var i = xc(t), u = xc(e);
    if (u !== i && (a && (Mn || (Mn = !0, c('Text content did not match. Server: "%s" Client: "%s"', u, i))), n && we))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function _y(e) {
    return e.nodeType === mr ? e : e.ownerDocument;
  }
  function Tw() {
  }
  function Nc(e) {
    e.onclick = Tw;
  }
  function Dw(e, t, n, a, i) {
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var p = a[u];
        if (u === Bi)
          p && Object.freeze(p), qv(t, p);
        else if (u === gl) {
          var h = p ? p[gc] : void 0;
          h != null && Iv(t, h);
        } else if (u === Ji)
          if (typeof p == "string") {
            var b = e !== "textarea" || p !== "";
            b && Bu(t, p);
          } else typeof p == "number" && Bu(t, "" + p);
        else u === vc || u === Xr || u === Dy || (Xt.hasOwnProperty(u) ? p != null && (typeof p != "function" && bc(u, p), u === "onScroll" && vt("scroll", t)) : p != null && lr(t, u, p, i));
      }
  }
  function kw(e, t, n, a) {
    for (var i = 0; i < t.length; i += 2) {
      var u = t[i], p = t[i + 1];
      u === Bi ? qv(e, p) : u === gl ? Iv(e, p) : u === Ji ? Bu(e, p) : lr(e, u, p, a);
    }
  }
  function Ow(e, t, n, a) {
    var i, u = _y(n), p, h = a;
    if (h === dr && (h = xd(e)), h === dr) {
      if (i = Li(e, t), !i && e !== e.toLowerCase() && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var b = u.createElement("div");
        b.innerHTML = "<script><\/script>";
        var C = b.firstChild;
        p = b.removeChild(C);
      } else if (typeof t.is == "string")
        p = u.createElement(e, {
          is: t.is
        });
      else if (p = u.createElement(e), e === "select") {
        var R = p;
        t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
      }
    } else
      p = u.createElementNS(h, e);
    return h === dr && !i && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !pn.call(Pp, e) && (Pp[e] = !0, c("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
  }
  function Lw(e, t) {
    return _y(t).createTextNode(e);
  }
  function _w(e, t, n, a) {
    var i = Li(t, n);
    yc(t, n);
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
        for (var p = 0; p < ml.length; p++)
          vt(ml[p], e);
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
        T(e, n), u = N(e, n), vt("invalid", e);
        break;
      case "option":
        ct(e, n), u = n;
        break;
      case "select":
        Ms(e, n), u = Ps(e, n), vt("invalid", e);
        break;
      case "textarea":
        Hv(e, n), u = yd(e, n), vt("invalid", e);
        break;
      default:
        u = n;
    }
    switch (wd(t, u), Dw(t, e, a, u, i), t) {
      case "input":
        cr(e), ee(e, n, !1);
        break;
      case "textarea":
        cr(e), Bv(e);
        break;
      case "option":
        ht(e, n);
        break;
      case "select":
        gd(e, n);
        break;
      default:
        typeof u.onClick == "function" && Nc(e);
        break;
    }
  }
  function Aw(e, t, n, a, i) {
    yc(t, a);
    var u = null, p, h;
    switch (t) {
      case "input":
        p = N(e, n), h = N(e, a), u = [];
        break;
      case "select":
        p = Ps(e, n), h = Ps(e, a), u = [];
        break;
      case "textarea":
        p = yd(e, n), h = yd(e, a), u = [];
        break;
      default:
        p = n, h = a, typeof p.onClick != "function" && typeof h.onClick == "function" && Nc(e);
        break;
    }
    wd(t, h);
    var b, C, R = null;
    for (b in p)
      if (!(h.hasOwnProperty(b) || !p.hasOwnProperty(b) || p[b] == null))
        if (b === Bi) {
          var _ = p[b];
          for (C in _)
            _.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
        } else b === gl || b === Ji || b === vc || b === Xr || b === Dy || (Xt.hasOwnProperty(b) ? u || (u = []) : (u = u || []).push(b, null));
    for (b in h) {
      var L = h[b], H = p != null ? p[b] : void 0;
      if (!(!h.hasOwnProperty(b) || L === H || L == null && H == null))
        if (b === Bi)
          if (L && Object.freeze(L), H) {
            for (C in H)
              H.hasOwnProperty(C) && (!L || !L.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
            for (C in L)
              L.hasOwnProperty(C) && H[C] !== L[C] && (R || (R = {}), R[C] = L[C]);
          } else
            R || (u || (u = []), u.push(b, R)), R = L;
        else if (b === gl) {
          var B = L ? L[gc] : void 0, K = H ? H[gc] : void 0;
          B != null && K !== B && (u = u || []).push(b, B);
        } else b === Ji ? (typeof L == "string" || typeof L == "number") && (u = u || []).push(b, "" + L) : b === vc || b === Xr || (Xt.hasOwnProperty(b) ? (L != null && (typeof L != "function" && bc(b, L), b === "onScroll" && vt("scroll", e)), !u && H !== L && (u = [])) : (u = u || []).push(b, L));
    }
    return R && (Z1(R, h[Bi]), (u = u || []).push(Bi, R)), u;
  }
  function Pw(e, t, n, a, i) {
    n === "input" && i.type === "radio" && i.name != null && J(e, i);
    var u = Li(n, a), p = Li(n, i);
    switch (kw(e, t, u, p), n) {
      case "input":
        Y(e, i);
        break;
      case "textarea":
        Jv(e, i);
        break;
      case "select":
        k1(e, i);
        break;
    }
  }
  function Mw(e) {
    {
      var t = e.toLowerCase();
      return Iu.hasOwnProperty(t) && Iu[t] || null;
    }
  }
  function Uw(e, t, n, a, i, u, p) {
    var h, b;
    switch (h = Li(t, n), yc(t, n), t) {
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
        for (var C = 0; C < ml.length; C++)
          vt(ml[C], e);
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
        T(e, n), vt("invalid", e);
        break;
      case "option":
        ct(e, n);
        break;
      case "select":
        Ms(e, n), vt("invalid", e);
        break;
      case "textarea":
        Hv(e, n), vt("invalid", e);
        break;
    }
    wd(t, n);
    {
      b = /* @__PURE__ */ new Set();
      for (var R = e.attributes, _ = 0; _ < R.length; _++) {
        var L = R[_].name.toLowerCase();
        switch (L) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            b.add(R[_].name);
        }
      }
    }
    var H = null;
    for (var B in n)
      if (n.hasOwnProperty(B)) {
        var K = n[B];
        if (B === Ji)
          typeof K == "string" ? e.textContent !== K && (n[Xr] !== !0 && Sc(e.textContent, K, u, p), H = [Ji, K]) : typeof K == "number" && e.textContent !== "" + K && (n[Xr] !== !0 && Sc(e.textContent, K, u, p), H = [Ji, "" + K]);
        else if (Xt.hasOwnProperty(B))
          K != null && (typeof K != "function" && bc(B, K), B === "onScroll" && vt("scroll", e));
        else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof h == "boolean") {
          var re = void 0, pe = h && dn ? null : Kn(B);
          if (n[Xr] !== !0) {
            if (!(B === vc || B === Xr || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            B === "value" || B === "checked" || B === "selected")) {
              if (B === gl) {
                var fe = e.innerHTML, Be = K ? K[gc] : void 0;
                if (Be != null) {
                  var Ve = Ly(e, Be);
                  Ve !== fe && yl(B, fe, Ve);
                }
              } else if (B === Bi) {
                if (b.delete(B), Oy) {
                  var F = Q1(K);
                  re = e.getAttribute("style"), F !== re && yl(B, re, F);
                }
              } else if (h && !dn)
                b.delete(B.toLowerCase()), re = Ur(e, B, K), K !== re && yl(B, re, K);
              else if (!jt(B, pe, h) && !lt(B, K, pe, h)) {
                var W = !1;
                if (pe !== null)
                  b.delete(pe.attributeName), re = sr(e, B, K, pe);
                else {
                  var z = a;
                  if (z === dr && (z = xd(t)), z === dr)
                    b.delete(B.toLowerCase());
                  else {
                    var X = Mw(B);
                    X !== null && X !== B && (W = !0, b.delete(X)), b.delete(B);
                  }
                  re = Ur(e, B, K);
                }
                var le = dn;
                !le && K !== re && !W && yl(B, re, K);
              }
            }
          }
        }
      }
    switch (p && // $FlowFixMe - Should be inferred as not undefined.
    b.size > 0 && n[Xr] !== !0 && ky(b), t) {
      case "input":
        cr(e), ee(e, n, !0);
        break;
      case "textarea":
        cr(e), Bv(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && Nc(e);
        break;
    }
    return H;
  }
  function Vw(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function Mp(e, t) {
    {
      if (Mn)
        return;
      Mn = !0, c("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Up(e, t) {
    {
      if (Mn)
        return;
      Mn = !0, c('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Vp(e, t, n) {
    {
      if (Mn)
        return;
      Mn = !0, c("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Fp(e, t) {
    {
      if (t === "" || Mn)
        return;
      Mn = !0, c('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function Fw(e, t, n) {
    switch (t) {
      case "input":
        xe(e, n);
        return;
      case "textarea":
        L1(e, n);
        return;
      case "select":
        O1(e, n);
        return;
    }
  }
  var bl = function() {
  }, xl = function() {
  };
  {
    var zw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Ay = [
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
    ], $w = Ay.concat(["button"]), Hw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Py = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    xl = function(e, t) {
      var n = Fe({}, e || Py), a = {
        tag: t
      };
      return Ay.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), $w.indexOf(t) !== -1 && (n.pTagInButtonScope = null), zw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
    };
    var Jw = function(e, t) {
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
          return Hw.indexOf(t) === -1;
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
    }, Bw = function(e, t) {
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
    }, My = {};
    bl = function(e, t, n) {
      n = n || Py;
      var a = n.current, i = a && a.tag;
      t != null && (e != null && c("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = Jw(e, i) ? null : a, p = u ? null : Bw(e, n), h = u || p;
      if (h) {
        var b = h.tag, C = !!u + "|" + e + "|" + b;
        if (!My[C]) {
          My[C] = !0;
          var R = e, _ = "";
          if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", u) {
            var L = "";
            b === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), c("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, b, _, L);
          } else
            c("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, b);
        }
      }
    };
  }
  var Ec = "suppressHydrationWarning", Cc = "$", wc = "/$", Sl = "$?", Nl = "$!", Iw = "style", zp = null, $p = null;
  function Yw(e) {
    var t, n, a = e.nodeType;
    switch (a) {
      case mr:
      case Nd: {
        t = a === mr ? "#document" : "#fragment";
        var i = e.documentElement;
        n = i ? i.namespaceURI : Sd(null, "");
        break;
      }
      default: {
        var u = a === Ot ? e.parentNode : e, p = u.namespaceURI || null;
        t = u.tagName, n = Sd(p, t);
        break;
      }
    }
    {
      var h = t.toLowerCase(), b = xl(null, h);
      return {
        namespace: n,
        ancestorInfo: b
      };
    }
  }
  function Kw(e, t, n) {
    {
      var a = e, i = Sd(a.namespace, t), u = xl(a.ancestorInfo, t);
      return {
        namespace: i,
        ancestorInfo: u
      };
    }
  }
  function WP(e) {
    return e;
  }
  function Ww(e) {
    zp = IE(), $p = lw();
    var t = null;
    return Bg(!1), t;
  }
  function Gw(e) {
    uw($p), Bg(zp), zp = null, $p = null;
  }
  function qw(e, t, n, a, i) {
    var u;
    {
      var p = a;
      if (bl(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var h = "" + t.children, b = xl(p.ancestorInfo, e);
        bl(null, h, b);
      }
      u = p.namespace;
    }
    var C = Ow(e, t, n, u);
    return wl(i, C), Gp(C, t), C;
  }
  function Qw(e, t) {
    e.appendChild(t);
  }
  function Xw(e, t, n, a, i) {
    switch (_w(e, t, n, a), t) {
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
  function Zw(e, t, n, a, i, u) {
    {
      var p = u;
      if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
        var h = "" + a.children, b = xl(p.ancestorInfo, t);
        bl(null, h, b);
      }
    }
    return Aw(e, t, n, a);
  }
  function Hp(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function eR(e, t, n, a) {
    {
      var i = n;
      bl(null, e, i.ancestorInfo);
    }
    var u = Lw(e, t);
    return wl(a, u), u;
  }
  function tR() {
    var e = window.event;
    return e === void 0 ? Sr : Ig(e.type);
  }
  var Jp = typeof setTimeout == "function" ? setTimeout : void 0, nR = typeof clearTimeout == "function" ? clearTimeout : void 0, Bp = -1, Uy = typeof Promise == "function" ? Promise : void 0, aR = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uy < "u" ? function(e) {
    return Uy.resolve(null).then(e).catch(rR);
  } : Jp;
  function rR(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function iR(e, t, n, a) {
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
  function oR(e, t, n, a, i, u) {
    Pw(e, t, n, a, i), Gp(e, i);
  }
  function Vy(e) {
    Bu(e, "");
  }
  function sR(e, t, n) {
    e.nodeValue = n;
  }
  function lR(e, t) {
    e.appendChild(t);
  }
  function uR(e, t) {
    var n;
    e.nodeType === Ot ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && Nc(n);
  }
  function cR(e, t, n) {
    e.insertBefore(t, n);
  }
  function fR(e, t, n) {
    e.nodeType === Ot ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function dR(e, t) {
    e.removeChild(t);
  }
  function pR(e, t) {
    e.nodeType === Ot ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Ip(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === Ot) {
        var u = i.data;
        if (u === wc)
          if (a === 0) {
            e.removeChild(i), rl(t);
            return;
          } else
            a--;
        else (u === Cc || u === Sl || u === Nl) && a++;
      }
      n = i;
    } while (n);
    rl(t);
  }
  function mR(e, t) {
    e.nodeType === Ot ? Ip(e.parentNode, t) : e.nodeType === Pn && Ip(e, t), rl(e);
  }
  function hR(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function vR(e) {
    e.nodeValue = "";
  }
  function gR(e, t) {
    e = e;
    var n = t[Iw], a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Ed("display", a);
  }
  function yR(e, t) {
    e.nodeValue = t;
  }
  function bR(e) {
    e.nodeType === Pn ? e.textContent = "" : e.nodeType === mr && e.documentElement && e.removeChild(e.documentElement);
  }
  function xR(e, t, n) {
    return e.nodeType !== Pn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function SR(e, t) {
    return t === "" || e.nodeType !== pr ? null : e;
  }
  function NR(e) {
    return e.nodeType !== Ot ? null : e;
  }
  function Fy(e) {
    return e.data === Sl;
  }
  function Yp(e) {
    return e.data === Nl;
  }
  function ER(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, a, i;
    return t && (n = t.dgst, a = t.msg, i = t.stck), {
      message: a,
      digest: n,
      stack: i
    };
  }
  function CR(e, t) {
    e._reactRetry = t;
  }
  function Rc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Pn || t === pr)
        break;
      if (t === Ot) {
        var n = e.data;
        if (n === Cc || n === Nl || n === Sl)
          break;
        if (n === wc)
          return null;
      }
    }
    return e;
  }
  function El(e) {
    return Rc(e.nextSibling);
  }
  function wR(e) {
    return Rc(e.firstChild);
  }
  function RR(e) {
    return Rc(e.firstChild);
  }
  function jR(e) {
    return Rc(e.nextSibling);
  }
  function TR(e, t, n, a, i, u, p) {
    wl(u, e), Gp(e, n);
    var h;
    {
      var b = i;
      h = b.namespace;
    }
    var C = (u.mode & He) !== ve;
    return Uw(e, t, n, h, a, C, p);
  }
  function DR(e, t, n, a) {
    return wl(n, e), n.mode & He, Vw(e, t);
  }
  function kR(e, t) {
    wl(t, e);
  }
  function OR(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === wc) {
          if (n === 0)
            return El(t);
          n--;
        } else (a === Cc || a === Nl || a === Sl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function zy(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === Cc || a === Nl || a === Sl) {
          if (n === 0)
            return t;
          n--;
        } else a === wc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function LR(e) {
    rl(e);
  }
  function _R(e) {
    rl(e);
  }
  function AR(e) {
    return e !== "head" && e !== "body";
  }
  function PR(e, t, n, a) {
    var i = !0;
    Sc(t.nodeValue, n, a, i);
  }
  function MR(e, t, n, a, i, u) {
    if (t[Ec] !== !0) {
      var p = !0;
      Sc(a.nodeValue, i, u, p);
    }
  }
  function UR(e, t) {
    t.nodeType === Pn ? Mp(e, t) : t.nodeType === Ot || Up(e, t);
  }
  function VR(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Pn ? Mp(n, t) : t.nodeType === Ot || Up(n, t));
    }
  }
  function FR(e, t, n, a, i) {
    (i || t[Ec] !== !0) && (a.nodeType === Pn ? Mp(n, a) : a.nodeType === Ot || Up(n, a));
  }
  function zR(e, t, n) {
    Vp(e, t);
  }
  function $R(e, t) {
    Fp(e, t);
  }
  function HR(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && Vp(a, t);
    }
  }
  function JR(e, t) {
    {
      var n = e.parentNode;
      n !== null && Fp(n, t);
    }
  }
  function BR(e, t, n, a, i, u) {
    (u || t[Ec] !== !0) && Vp(n, a);
  }
  function IR(e, t, n, a, i) {
    (i || t[Ec] !== !0) && Fp(n, a);
  }
  function YR(e) {
    c("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function KR(e) {
    hl(e);
  }
  var Fo = Math.random().toString(36).slice(2), zo = "__reactFiber$" + Fo, Kp = "__reactProps$" + Fo, Cl = "__reactContainer$" + Fo, Wp = "__reactEvents$" + Fo, WR = "__reactListeners$" + Fo, GR = "__reactHandles$" + Fo;
  function qR(e) {
    delete e[zo], delete e[Kp], delete e[Wp], delete e[WR], delete e[GR];
  }
  function wl(e, t) {
    t[zo] = e;
  }
  function jc(e, t) {
    t[Cl] = e;
  }
  function $y(e) {
    e[Cl] = null;
  }
  function Rl(e) {
    return !!e[Cl];
  }
  function Ii(e) {
    var t = e[zo];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Cl] || n[zo], t) {
        var a = t.alternate;
        if (t.child !== null || a !== null && a.child !== null)
          for (var i = zy(e); i !== null; ) {
            var u = i[zo];
            if (u)
              return u;
            i = zy(i);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Zr(e) {
    var t = e[zo] || e[Cl];
    return t && (t.tag === w || t.tag === j || t.tag === M || t.tag === x) ? t : null;
  }
  function $o(e) {
    if (e.tag === w || e.tag === j)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Tc(e) {
    return e[Kp] || null;
  }
  function Gp(e, t) {
    e[Kp] = t;
  }
  function QR(e) {
    var t = e[Wp];
    return t === void 0 && (t = e[Wp] = /* @__PURE__ */ new Set()), t;
  }
  var Hy = {}, Jy = s.ReactDebugCurrentFrame;
  function Dc(e) {
    if (e) {
      var t = e._owner, n = $r(e.type, e._source, t ? t.type : null);
      Jy.setExtraStackFrame(n);
    } else
      Jy.setExtraStackFrame(null);
  }
  function Ta(e, t, n, a, i) {
    {
      var u = Function.call.bind(pn);
      for (var p in e)
        if (u(e, p)) {
          var h = void 0;
          try {
            if (typeof e[p] != "function") {
              var b = Error((a || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw b.name = "Invariant Violation", b;
            }
            h = e[p](t, p, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (C) {
            h = C;
          }
          h && !(h instanceof Error) && (Dc(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, p, typeof h), Dc(null)), h instanceof Error && !(h.message in Hy) && (Hy[h.message] = !0, Dc(i), c("Failed %s type: %s", n, h.message), Dc(null));
        }
    }
  }
  var qp = [], kc;
  kc = [];
  var Nr = -1;
  function ei(e) {
    return {
      current: e
    };
  }
  function yn(e, t) {
    if (Nr < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== kc[Nr] && c("Unexpected Fiber popped."), e.current = qp[Nr], qp[Nr] = null, kc[Nr] = null, Nr--;
  }
  function bn(e, t, n) {
    Nr++, qp[Nr] = e.current, kc[Nr] = n, e.current = t;
  }
  var Qp;
  Qp = {};
  var ea = {};
  Object.freeze(ea);
  var Er = ei(ea), Ka = ei(!1), Xp = ea;
  function Ho(e, t, n) {
    return n && Wa(t) ? Xp : Er.current;
  }
  function By(e, t, n) {
    {
      var a = e.stateNode;
      a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Jo(e, t) {
    {
      var n = e.type, a = n.contextTypes;
      if (!a)
        return ea;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var p in a)
        u[p] = t[p];
      {
        var h = Le(e) || "Unknown";
        Ta(a, u, "context", h);
      }
      return i && By(e, t, u), u;
    }
  }
  function Oc() {
    return Ka.current;
  }
  function Wa(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Lc(e) {
    yn(Ka, e), yn(Er, e);
  }
  function Zp(e) {
    yn(Ka, e), yn(Er, e);
  }
  function Iy(e, t, n) {
    {
      if (Er.current !== ea)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      bn(Er, t, e), bn(Ka, n, e);
    }
  }
  function Yy(e, t, n) {
    {
      var a = e.stateNode, i = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var u = Le(e) || "Unknown";
          Qp[u] || (Qp[u] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return n;
      }
      var p = a.getChildContext();
      for (var h in p)
        if (!(h in i))
          throw new Error((Le(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
      {
        var b = Le(e) || "Unknown";
        Ta(i, p, "child context", b);
      }
      return Fe({}, n, p);
    }
  }
  function _c(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || ea;
      return Xp = Er.current, bn(Er, n, e), bn(Ka, Ka.current, e), !0;
    }
  }
  function Ky(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var i = Yy(e, t, Xp);
        a.__reactInternalMemoizedMergedChildContext = i, yn(Ka, e), yn(Er, e), bn(Er, i, e), bn(Ka, n, e);
      } else
        yn(Ka, e), bn(Ka, n, e);
    }
  }
  function XR(e) {
    {
      if (!AN(e) || e.tag !== m)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case x:
            return t.stateNode.context;
          case m: {
            var n = t.type;
            if (Wa(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var ti = 0, Ac = 1, Cr = null, em = !1, tm = !1;
  function Wy(e) {
    Cr === null ? Cr = [e] : Cr.push(e);
  }
  function ZR(e) {
    em = !0, Wy(e);
  }
  function Gy() {
    em && ni();
  }
  function ni() {
    if (!tm && Cr !== null) {
      tm = !0;
      var e = 0, t = ja();
      try {
        var n = !0, a = Cr;
        for (Qt(Qn); e < a.length; e++) {
          var i = a[e];
          do
            i = i(n);
          while (i !== null);
        }
        Cr = null, em = !1;
      } catch (u) {
        throw Cr !== null && (Cr = Cr.slice(e + 1)), bg(qu, ni), u;
      } finally {
        Qt(t), tm = !1;
      }
    }
    return null;
  }
  var Bo = [], Io = 0, Pc = null, Mc = 0, fa = [], da = 0, Yi = null, wr = 1, Rr = "";
  function ej(e) {
    return Wi(), (e.flags & fg) !== ye;
  }
  function tj(e) {
    return Wi(), Mc;
  }
  function nj() {
    var e = Rr, t = wr, n = t & ~aj(t);
    return n.toString(32) + e;
  }
  function Ki(e, t) {
    Wi(), Bo[Io++] = Mc, Bo[Io++] = Pc, Pc = e, Mc = t;
  }
  function qy(e, t, n) {
    Wi(), fa[da++] = wr, fa[da++] = Rr, fa[da++] = Yi, Yi = e;
    var a = wr, i = Rr, u = Uc(a) - 1, p = a & ~(1 << u), h = n + 1, b = Uc(t) + u;
    if (b > 30) {
      var C = u - u % 5, R = (1 << C) - 1, _ = (p & R).toString(32), L = p >> C, H = u - C, B = Uc(t) + H, K = h << H, re = K | L, pe = _ + i;
      wr = 1 << B | re, Rr = pe;
    } else {
      var fe = h << u, Be = fe | p, Ve = i;
      wr = 1 << b | Be, Rr = Ve;
    }
  }
  function nm(e) {
    Wi();
    var t = e.return;
    if (t !== null) {
      var n = 1, a = 0;
      Ki(e, n), qy(e, n, a);
    }
  }
  function Uc(e) {
    return 32 - wg(e);
  }
  function aj(e) {
    return 1 << Uc(e) - 1;
  }
  function am(e) {
    for (; e === Pc; )
      Pc = Bo[--Io], Bo[Io] = null, Mc = Bo[--Io], Bo[Io] = null;
    for (; e === Yi; )
      Yi = fa[--da], fa[da] = null, Rr = fa[--da], fa[da] = null, wr = fa[--da], fa[da] = null;
  }
  function rj() {
    return Wi(), Yi !== null ? {
      id: wr,
      overflow: Rr
    } : null;
  }
  function ij(e, t) {
    Wi(), fa[da++] = wr, fa[da++] = Rr, fa[da++] = Yi, wr = t.id, Rr = t.overflow, Yi = e;
  }
  function Wi() {
    en() || c("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var Zt = null, pa = null, Da = !1, Gi = !1, ai = null;
  function oj() {
    Da && c("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function Qy() {
    Gi = !0;
  }
  function sj() {
    return Gi;
  }
  function lj(e) {
    var t = e.stateNode.containerInfo;
    return pa = RR(t), Zt = e, Da = !0, ai = null, Gi = !1, !0;
  }
  function uj(e, t, n) {
    return pa = jR(t), Zt = e, Da = !0, ai = null, Gi = !1, n !== null && ij(e, n), !0;
  }
  function Xy(e, t) {
    switch (e.tag) {
      case x: {
        UR(e.stateNode.containerInfo, t);
        break;
      }
      case w: {
        var n = (e.mode & He) !== ve;
        FR(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case M: {
        var a = e.memoizedState;
        a.dehydrated !== null && VR(a.dehydrated, t);
        break;
      }
    }
  }
  function Zy(e, t) {
    Xy(e, t);
    var n = pk();
    n.stateNode = t, n.return = e;
    var a = e.deletions;
    a === null ? (e.deletions = [n], e.flags |= _i) : a.push(n);
  }
  function rm(e, t) {
    {
      if (Gi)
        return;
      switch (e.tag) {
        case x: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case w:
              var a = t.type;
              t.pendingProps, zR(n, a);
              break;
            case j:
              var i = t.pendingProps;
              $R(n, i);
              break;
          }
          break;
        }
        case w: {
          var u = e.type, p = e.memoizedProps, h = e.stateNode;
          switch (t.tag) {
            case w: {
              var b = t.type, C = t.pendingProps, R = (e.mode & He) !== ve;
              BR(
                u,
                p,
                h,
                b,
                C,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
            case j: {
              var _ = t.pendingProps, L = (e.mode & He) !== ve;
              IR(
                u,
                p,
                h,
                _,
                // TODO: Delete this argument when we remove the legacy root API.
                L
              );
              break;
            }
          }
          break;
        }
        case M: {
          var H = e.memoizedState, B = H.dehydrated;
          if (B !== null) switch (t.tag) {
            case w:
              var K = t.type;
              t.pendingProps, HR(B, K);
              break;
            case j:
              var re = t.pendingProps;
              JR(B, re);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function eb(e, t) {
    t.flags = t.flags & ~vr | Lt, rm(e, t);
  }
  function tb(e, t) {
    switch (e.tag) {
      case w: {
        var n = e.type;
        e.pendingProps;
        var a = xR(t, n);
        return a !== null ? (e.stateNode = a, Zt = e, pa = wR(a), !0) : !1;
      }
      case j: {
        var i = e.pendingProps, u = SR(t, i);
        return u !== null ? (e.stateNode = u, Zt = e, pa = null, !0) : !1;
      }
      case M: {
        var p = NR(t);
        if (p !== null) {
          var h = {
            dehydrated: p,
            treeContext: rj(),
            retryLane: Gn
          };
          e.memoizedState = h;
          var b = mk(p);
          return b.return = e, e.child = b, Zt = e, pa = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function im(e) {
    return (e.mode & He) !== ve && (e.flags & Xe) === ye;
  }
  function om(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function sm(e) {
    if (Da) {
      var t = pa;
      if (!t) {
        im(e) && (rm(Zt, e), om()), eb(Zt, e), Da = !1, Zt = e;
        return;
      }
      var n = t;
      if (!tb(e, t)) {
        im(e) && (rm(Zt, e), om()), t = El(n);
        var a = Zt;
        if (!t || !tb(e, t)) {
          eb(Zt, e), Da = !1, Zt = e;
          return;
        }
        Zy(a, n);
      }
    }
  }
  function cj(e, t, n) {
    var a = e.stateNode, i = !Gi, u = TR(a, e.type, e.memoizedProps, t, n, e, i);
    return e.updateQueue = u, u !== null;
  }
  function fj(e) {
    var t = e.stateNode, n = e.memoizedProps, a = DR(t, n, e);
    if (a) {
      var i = Zt;
      if (i !== null)
        switch (i.tag) {
          case x: {
            var u = i.stateNode.containerInfo, p = (i.mode & He) !== ve;
            PR(
              u,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              p
            );
            break;
          }
          case w: {
            var h = i.type, b = i.memoizedProps, C = i.stateNode, R = (i.mode & He) !== ve;
            MR(
              h,
              b,
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
    return a;
  }
  function dj(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    kR(n, e);
  }
  function pj(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return OR(n);
  }
  function nb(e) {
    for (var t = e.return; t !== null && t.tag !== w && t.tag !== x && t.tag !== M; )
      t = t.return;
    Zt = t;
  }
  function Vc(e) {
    if (e !== Zt)
      return !1;
    if (!Da)
      return nb(e), Da = !0, !1;
    if (e.tag !== x && (e.tag !== w || AR(e.type) && !Hp(e.type, e.memoizedProps))) {
      var t = pa;
      if (t)
        if (im(e))
          ab(e), om();
        else
          for (; t; )
            Zy(e, t), t = El(t);
    }
    return nb(e), e.tag === M ? pa = pj(e) : pa = Zt ? El(e.stateNode) : null, !0;
  }
  function mj() {
    return Da && pa !== null;
  }
  function ab(e) {
    for (var t = pa; t; )
      Xy(e, t), t = El(t);
  }
  function Yo() {
    Zt = null, pa = null, Da = !1, Gi = !1;
  }
  function rb() {
    ai !== null && (Qx(ai), ai = null);
  }
  function en() {
    return Da;
  }
  function lm(e) {
    ai === null ? ai = [e] : ai.push(e);
  }
  var hj = s.ReactCurrentBatchConfig, vj = null;
  function gj() {
    return hj.transition;
  }
  var ka = {
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
    var yj = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Et && (t = n), n = n.return;
      return t;
    }, qi = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, jl = [], Tl = [], Dl = [], kl = [], Ol = [], Ll = [], Qi = /* @__PURE__ */ new Set();
    ka.recordUnsafeLifecycleWarnings = function(e, t) {
      Qi.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && jl.push(e), e.mode & Et && typeof t.UNSAFE_componentWillMount == "function" && Tl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dl.push(e), e.mode & Et && typeof t.UNSAFE_componentWillReceiveProps == "function" && kl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ol.push(e), e.mode & Et && typeof t.UNSAFE_componentWillUpdate == "function" && Ll.push(e));
    }, ka.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      jl.length > 0 && (jl.forEach(function(L) {
        e.add(Le(L) || "Component"), Qi.add(L.type);
      }), jl = []);
      var t = /* @__PURE__ */ new Set();
      Tl.length > 0 && (Tl.forEach(function(L) {
        t.add(Le(L) || "Component"), Qi.add(L.type);
      }), Tl = []);
      var n = /* @__PURE__ */ new Set();
      Dl.length > 0 && (Dl.forEach(function(L) {
        n.add(Le(L) || "Component"), Qi.add(L.type);
      }), Dl = []);
      var a = /* @__PURE__ */ new Set();
      kl.length > 0 && (kl.forEach(function(L) {
        a.add(Le(L) || "Component"), Qi.add(L.type);
      }), kl = []);
      var i = /* @__PURE__ */ new Set();
      Ol.length > 0 && (Ol.forEach(function(L) {
        i.add(Le(L) || "Component"), Qi.add(L.type);
      }), Ol = []);
      var u = /* @__PURE__ */ new Set();
      if (Ll.length > 0 && (Ll.forEach(function(L) {
        u.add(Le(L) || "Component"), Qi.add(L.type);
      }), Ll = []), t.size > 0) {
        var p = qi(t);
        c(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
      }
      if (a.size > 0) {
        var h = qi(a);
        c(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
      }
      if (u.size > 0) {
        var b = qi(u);
        c(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
      }
      if (e.size > 0) {
        var C = qi(e);
        f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
      }
      if (n.size > 0) {
        var R = qi(n);
        f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
      }
      if (i.size > 0) {
        var _ = qi(i);
        f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
      }
    };
    var Fc = /* @__PURE__ */ new Map(), ib = /* @__PURE__ */ new Set();
    ka.recordLegacyContextWarning = function(e, t) {
      var n = yj(e);
      if (n === null) {
        c("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!ib.has(e.type)) {
        var a = Fc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Fc.set(n, a)), a.push(e));
      }
    }, ka.flushLegacyContextWarning = function() {
      Fc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            a.add(Le(u) || "Component"), ib.add(u.type);
          });
          var i = qi(a);
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
    }, ka.discardPendingWarnings = function() {
      jl = [], Tl = [], Dl = [], kl = [], Ol = [], Ll = [], Fc = /* @__PURE__ */ new Map();
    };
  }
  var um, cm, fm, dm, pm, ob = function(e, t) {
  };
  um = !1, cm = !1, fm = {}, dm = {}, pm = {}, ob = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = Le(t) || "Component";
      dm[n] || (dm[n] = !0, c('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function bj(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function _l(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if ((e.mode & Et || Hn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== m) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !bj(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var i = Le(e) || "Component";
        fm[i] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, a), fm[i] = !0);
      }
      if (n._owner) {
        var u = n._owner, p;
        if (u) {
          var h = u;
          if (h.tag !== m)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          p = h.stateNode;
        }
        if (!p)
          throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
        var b = p;
        Ln(a, "ref");
        var C = "" + a;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
          return t.ref;
        var R = function(_) {
          var L = b.refs;
          _ === null ? delete L[C] : L[C] = _;
        };
        return R._stringRef = C, R;
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
  function zc(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function $c(e) {
    {
      var t = Le(e) || "Component";
      if (pm[t])
        return;
      pm[t] = !0, c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function sb(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function lb(e) {
    function t(F, W) {
      if (e) {
        var z = F.deletions;
        z === null ? (F.deletions = [W], F.flags |= _i) : z.push(W);
      }
    }
    function n(F, W) {
      if (!e)
        return null;
      for (var z = W; z !== null; )
        t(F, z), z = z.sibling;
      return null;
    }
    function a(F, W) {
      for (var z = /* @__PURE__ */ new Map(), X = W; X !== null; )
        X.key !== null ? z.set(X.key, X) : z.set(X.index, X), X = X.sibling;
      return z;
    }
    function i(F, W) {
      var z = oo(F, W);
      return z.index = 0, z.sibling = null, z;
    }
    function u(F, W, z) {
      if (F.index = z, !e)
        return F.flags |= fg, W;
      var X = F.alternate;
      if (X !== null) {
        var le = X.index;
        return le < W ? (F.flags |= Lt, W) : le;
      } else
        return F.flags |= Lt, W;
    }
    function p(F) {
      return e && F.alternate === null && (F.flags |= Lt), F;
    }
    function h(F, W, z, X) {
      if (W === null || W.tag !== j) {
        var le = lv(z, F.mode, X);
        return le.return = F, le;
      } else {
        var ie = i(W, z);
        return ie.return = F, ie;
      }
    }
    function b(F, W, z, X) {
      var le = z.type;
      if (le === D)
        return R(F, W, z.props.children, X, z.key);
      if (W !== null && (W.elementType === le || // Keep this check inline so it only runs on the false path:
      p0(W, z) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof le == "object" && le !== null && le.$$typeof === Ue && sb(le) === W.type)) {
        var ie = i(W, z.props);
        return ie.ref = _l(F, W, z), ie.return = F, ie._debugSource = z._source, ie._debugOwner = z._owner, ie;
      }
      var Se = sv(z, F.mode, X);
      return Se.ref = _l(F, W, z), Se.return = F, Se;
    }
    function C(F, W, z, X) {
      if (W === null || W.tag !== S || W.stateNode.containerInfo !== z.containerInfo || W.stateNode.implementation !== z.implementation) {
        var le = uv(z, F.mode, X);
        return le.return = F, le;
      } else {
        var ie = i(W, z.children || []);
        return ie.return = F, ie;
      }
    }
    function R(F, W, z, X, le) {
      if (W === null || W.tag !== U) {
        var ie = mi(z, F.mode, X, le);
        return ie.return = F, ie;
      } else {
        var Se = i(W, z);
        return Se.return = F, Se;
      }
    }
    function _(F, W, z) {
      if (typeof W == "string" && W !== "" || typeof W == "number") {
        var X = lv("" + W, F.mode, z);
        return X.return = F, X;
      }
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Ha: {
            var le = sv(W, F.mode, z);
            return le.ref = _l(F, null, W), le.return = F, le;
          }
          case Na: {
            var ie = uv(W, F.mode, z);
            return ie.return = F, ie;
          }
          case Ue: {
            var Se = W._payload, De = W._init;
            return _(F, De(Se), z);
          }
        }
        if (Qe(W) || ur(W)) {
          var st = mi(W, F.mode, z, null);
          return st.return = F, st;
        }
        zc(F, W);
      }
      return typeof W == "function" && $c(F), null;
    }
    function L(F, W, z, X) {
      var le = W !== null ? W.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return le !== null ? null : h(F, W, "" + z, X);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ha:
            return z.key === le ? b(F, W, z, X) : null;
          case Na:
            return z.key === le ? C(F, W, z, X) : null;
          case Ue: {
            var ie = z._payload, Se = z._init;
            return L(F, W, Se(ie), X);
          }
        }
        if (Qe(z) || ur(z))
          return le !== null ? null : R(F, W, z, X, null);
        zc(F, z);
      }
      return typeof z == "function" && $c(F), null;
    }
    function H(F, W, z, X, le) {
      if (typeof X == "string" && X !== "" || typeof X == "number") {
        var ie = F.get(z) || null;
        return h(W, ie, "" + X, le);
      }
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Ha: {
            var Se = F.get(X.key === null ? z : X.key) || null;
            return b(W, Se, X, le);
          }
          case Na: {
            var De = F.get(X.key === null ? z : X.key) || null;
            return C(W, De, X, le);
          }
          case Ue:
            var st = X._payload, We = X._init;
            return H(F, W, z, We(st), le);
        }
        if (Qe(X) || ur(X)) {
          var Tt = F.get(z) || null;
          return R(W, Tt, X, le, null);
        }
        zc(W, X);
      }
      return typeof X == "function" && $c(W), null;
    }
    function B(F, W, z) {
      {
        if (typeof F != "object" || F === null)
          return W;
        switch (F.$$typeof) {
          case Ha:
          case Na:
            ob(F, z);
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
          case Ue:
            var le = F._payload, ie = F._init;
            B(ie(le), W, z);
            break;
        }
      }
      return W;
    }
    function K(F, W, z, X) {
      for (var le = null, ie = 0; ie < z.length; ie++) {
        var Se = z[ie];
        le = B(Se, le, F);
      }
      for (var De = null, st = null, We = W, Tt = 0, Ge = 0, Ct = null; We !== null && Ge < z.length; Ge++) {
        We.index > Ge ? (Ct = We, We = null) : Ct = We.sibling;
        var Sn = L(F, We, z[Ge], X);
        if (Sn === null) {
          We === null && (We = Ct);
          break;
        }
        e && We && Sn.alternate === null && t(F, We), Tt = u(Sn, Tt, Ge), st === null ? De = Sn : st.sibling = Sn, st = Sn, We = Ct;
      }
      if (Ge === z.length) {
        if (n(F, We), en()) {
          var ln = Ge;
          Ki(F, ln);
        }
        return De;
      }
      if (We === null) {
        for (; Ge < z.length; Ge++) {
          var na = _(F, z[Ge], X);
          na !== null && (Tt = u(na, Tt, Ge), st === null ? De = na : st.sibling = na, st = na);
        }
        if (en()) {
          var Dn = Ge;
          Ki(F, Dn);
        }
        return De;
      }
      for (var kn = a(F, We); Ge < z.length; Ge++) {
        var Nn = H(kn, F, Ge, z[Ge], X);
        Nn !== null && (e && Nn.alternate !== null && kn.delete(Nn.key === null ? Ge : Nn.key), Tt = u(Nn, Tt, Ge), st === null ? De = Nn : st.sibling = Nn, st = Nn);
      }
      if (e && kn.forEach(function(fs) {
        return t(F, fs);
      }), en()) {
        var _r = Ge;
        Ki(F, _r);
      }
      return De;
    }
    function re(F, W, z, X) {
      var le = ur(z);
      if (typeof le != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        z[Symbol.toStringTag] === "Generator" && (cm || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cm = !0), z.entries === le && (um || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), um = !0);
        var ie = le.call(z);
        if (ie)
          for (var Se = null, De = ie.next(); !De.done; De = ie.next()) {
            var st = De.value;
            Se = B(st, Se, F);
          }
      }
      var We = le.call(z);
      if (We == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Tt = null, Ge = null, Ct = W, Sn = 0, ln = 0, na = null, Dn = We.next(); Ct !== null && !Dn.done; ln++, Dn = We.next()) {
        Ct.index > ln ? (na = Ct, Ct = null) : na = Ct.sibling;
        var kn = L(F, Ct, Dn.value, X);
        if (kn === null) {
          Ct === null && (Ct = na);
          break;
        }
        e && Ct && kn.alternate === null && t(F, Ct), Sn = u(kn, Sn, ln), Ge === null ? Tt = kn : Ge.sibling = kn, Ge = kn, Ct = na;
      }
      if (Dn.done) {
        if (n(F, Ct), en()) {
          var Nn = ln;
          Ki(F, Nn);
        }
        return Tt;
      }
      if (Ct === null) {
        for (; !Dn.done; ln++, Dn = We.next()) {
          var _r = _(F, Dn.value, X);
          _r !== null && (Sn = u(_r, Sn, ln), Ge === null ? Tt = _r : Ge.sibling = _r, Ge = _r);
        }
        if (en()) {
          var fs = ln;
          Ki(F, fs);
        }
        return Tt;
      }
      for (var fu = a(F, Ct); !Dn.done; ln++, Dn = We.next()) {
        var nr = H(fu, F, ln, Dn.value, X);
        nr !== null && (e && nr.alternate !== null && fu.delete(nr.key === null ? ln : nr.key), Sn = u(nr, Sn, ln), Ge === null ? Tt = nr : Ge.sibling = nr, Ge = nr);
      }
      if (e && fu.forEach(function(Ik) {
        return t(F, Ik);
      }), en()) {
        var Bk = ln;
        Ki(F, Bk);
      }
      return Tt;
    }
    function pe(F, W, z, X) {
      if (W !== null && W.tag === j) {
        n(F, W.sibling);
        var le = i(W, z);
        return le.return = F, le;
      }
      n(F, W);
      var ie = lv(z, F.mode, X);
      return ie.return = F, ie;
    }
    function fe(F, W, z, X) {
      for (var le = z.key, ie = W; ie !== null; ) {
        if (ie.key === le) {
          var Se = z.type;
          if (Se === D) {
            if (ie.tag === U) {
              n(F, ie.sibling);
              var De = i(ie, z.props.children);
              return De.return = F, De._debugSource = z._source, De._debugOwner = z._owner, De;
            }
          } else if (ie.elementType === Se || // Keep this check inline so it only runs on the false path:
          p0(ie, z) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Se == "object" && Se !== null && Se.$$typeof === Ue && sb(Se) === ie.type) {
            n(F, ie.sibling);
            var st = i(ie, z.props);
            return st.ref = _l(F, ie, z), st.return = F, st._debugSource = z._source, st._debugOwner = z._owner, st;
          }
          n(F, ie);
          break;
        } else
          t(F, ie);
        ie = ie.sibling;
      }
      if (z.type === D) {
        var We = mi(z.props.children, F.mode, X, z.key);
        return We.return = F, We;
      } else {
        var Tt = sv(z, F.mode, X);
        return Tt.ref = _l(F, W, z), Tt.return = F, Tt;
      }
    }
    function Be(F, W, z, X) {
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
      var De = uv(z, F.mode, X);
      return De.return = F, De;
    }
    function Ve(F, W, z, X) {
      var le = typeof z == "object" && z !== null && z.type === D && z.key === null;
      if (le && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ha:
            return p(fe(F, W, z, X));
          case Na:
            return p(Be(F, W, z, X));
          case Ue:
            var ie = z._payload, Se = z._init;
            return Ve(F, W, Se(ie), X);
        }
        if (Qe(z))
          return K(F, W, z, X);
        if (ur(z))
          return re(F, W, z, X);
        zc(F, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? p(pe(F, W, "" + z, X)) : (typeof z == "function" && $c(F), n(F, W));
    }
    return Ve;
  }
  var Ko = lb(!0), ub = lb(!1);
  function xj(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, a = oo(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        n = n.sibling, a = a.sibling = oo(n, n.pendingProps), a.return = t;
      a.sibling = null;
    }
  }
  function Sj(e, t) {
    for (var n = e.child; n !== null; )
      lk(n, t), n = n.sibling;
  }
  var mm = ei(null), hm;
  hm = {};
  var Hc = null, Wo = null, vm = null, Jc = !1;
  function Bc() {
    Hc = null, Wo = null, vm = null, Jc = !1;
  }
  function cb() {
    Jc = !0;
  }
  function fb() {
    Jc = !1;
  }
  function db(e, t, n) {
    bn(mm, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hm && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hm;
  }
  function gm(e, t) {
    var n = mm.current;
    yn(mm, t), e._currentValue = n;
  }
  function ym(e, t, n) {
    for (var a = e; a !== null; ) {
      var i = a.alternate;
      if (Lo(a.childLanes, t) ? i !== null && !Lo(i.childLanes, t) && (i.childLanes = Ae(i.childLanes, t)) : (a.childLanes = Ae(a.childLanes, t), i !== null && (i.childLanes = Ae(i.childLanes, t))), a === n)
        break;
      a = a.return;
    }
    a !== n && c("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Nj(e, t, n) {
    Ej(e, t, n);
  }
  function Ej(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = void 0, u = a.dependencies;
      if (u !== null) {
        i = a.child;
        for (var p = u.firstContext; p !== null; ) {
          if (p.context === t) {
            if (a.tag === m) {
              var h = Qs(n), b = jr(dt, h);
              b.tag = Yc;
              var C = a.updateQueue;
              if (C !== null) {
                var R = C.shared, _ = R.pending;
                _ === null ? b.next = b : (b.next = _.next, _.next = b), R.pending = b;
              }
            }
            a.lanes = Ae(a.lanes, n);
            var L = a.alternate;
            L !== null && (L.lanes = Ae(L.lanes, n)), ym(a.return, n, e), u.lanes = Ae(u.lanes, n);
            break;
          }
          p = p.next;
        }
      } else if (a.tag === A)
        i = a.type === e.type ? null : a.child;
      else if (a.tag === he) {
        var H = a.return;
        if (H === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        H.lanes = Ae(H.lanes, n);
        var B = H.alternate;
        B !== null && (B.lanes = Ae(B.lanes, n)), ym(H, n, e), i = a.sibling;
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
  function Go(e, t) {
    Hc = e, Wo = null, vm = null;
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (qn(n.lanes, t) && Wl(), n.firstContext = null);
    }
  }
  function _t(e) {
    Jc && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (vm !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Wo === null) {
        if (Hc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Wo = n, Hc.dependencies = {
          lanes: q,
          firstContext: n
        };
      } else
        Wo = Wo.next = n;
    }
    return t;
  }
  var Xi = null;
  function bm(e) {
    Xi === null ? Xi = [e] : Xi.push(e);
  }
  function Cj() {
    if (Xi !== null) {
      for (var e = 0; e < Xi.length; e++) {
        var t = Xi[e], n = t.interleaved;
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
      Xi = null;
    }
  }
  function pb(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, bm(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ic(e, a);
  }
  function wj(e, t, n, a) {
    var i = t.interleaved;
    i === null ? (n.next = n, bm(t)) : (n.next = i.next, i.next = n), t.interleaved = n;
  }
  function Rj(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, bm(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ic(e, a);
  }
  function Un(e, t) {
    return Ic(e, t);
  }
  var jj = Ic;
  function Ic(e, t) {
    e.lanes = Ae(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Ae(n.lanes, t)), n === null && (e.flags & (Lt | vr)) !== ye && u0(e);
    for (var a = e, i = e.return; i !== null; )
      i.childLanes = Ae(i.childLanes, t), n = i.alternate, n !== null ? n.childLanes = Ae(n.childLanes, t) : (i.flags & (Lt | vr)) !== ye && u0(e), a = i, i = i.return;
    if (a.tag === x) {
      var u = a.stateNode;
      return u;
    } else
      return null;
  }
  var mb = 0, hb = 1, Yc = 2, xm = 3, Kc = !1, Sm, Wc;
  Sm = !1, Wc = null;
  function Nm(e) {
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
  function vb(e, t) {
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
  function jr(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: mb,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function ri(e, t, n) {
    var a = e.updateQueue;
    if (a === null)
      return null;
    var i = a.shared;
    if (Wc === i && !Sm && (c("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Sm = !0), wD()) {
      var u = i.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, jj(e, n);
    } else
      return Rj(e, i, t, n);
  }
  function Gc(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var i = a.shared;
      if (Dg(n)) {
        var u = i.lanes;
        u = Og(u, e.pendingLanes);
        var p = Ae(u, n);
        i.lanes = p, mp(e, p);
      }
    }
  }
  function Em(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null) {
      var i = a.updateQueue;
      if (n === i) {
        var u = null, p = null, h = n.firstBaseUpdate;
        if (h !== null) {
          var b = h;
          do {
            var C = {
              eventTime: b.eventTime,
              lane: b.lane,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null
            };
            p === null ? u = p = C : (p.next = C, p = C), b = b.next;
          } while (b !== null);
          p === null ? u = p = t : (p.next = t, p = t);
        } else
          u = p = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: p,
          shared: i.shared,
          effects: i.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var R = n.lastBaseUpdate;
    R === null ? n.firstBaseUpdate = t : R.next = t, n.lastBaseUpdate = t;
  }
  function Tj(e, t, n, a, i, u) {
    switch (n.tag) {
      case hb: {
        var p = n.payload;
        if (typeof p == "function") {
          cb();
          var h = p.call(u, a, i);
          {
            if (e.mode & Et) {
              Gt(!0);
              try {
                p.call(u, a, i);
              } finally {
                Gt(!1);
              }
            }
            fb();
          }
          return h;
        }
        return p;
      }
      case xm:
        e.flags = e.flags & ~wn | Xe;
      case mb: {
        var b = n.payload, C;
        if (typeof b == "function") {
          cb(), C = b.call(u, a, i);
          {
            if (e.mode & Et) {
              Gt(!0);
              try {
                b.call(u, a, i);
              } finally {
                Gt(!1);
              }
            }
            fb();
          }
        } else
          C = b;
        return C == null ? a : Fe({}, a, C);
      }
      case Yc:
        return Kc = !0, a;
    }
    return a;
  }
  function qc(e, t, n, a) {
    var i = e.updateQueue;
    Kc = !1, Wc = i.shared;
    var u = i.firstBaseUpdate, p = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var b = h, C = b.next;
      b.next = null, p === null ? u = C : p.next = C, p = b;
      var R = e.alternate;
      if (R !== null) {
        var _ = R.updateQueue, L = _.lastBaseUpdate;
        L !== p && (L === null ? _.firstBaseUpdate = C : L.next = C, _.lastBaseUpdate = b);
      }
    }
    if (u !== null) {
      var H = i.baseState, B = q, K = null, re = null, pe = null, fe = u;
      do {
        var Be = fe.lane, Ve = fe.eventTime;
        if (Lo(a, Be)) {
          if (pe !== null) {
            var W = {
              eventTime: Ve,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: qt,
              tag: fe.tag,
              payload: fe.payload,
              callback: fe.callback,
              next: null
            };
            pe = pe.next = W;
          }
          H = Tj(e, i, fe, H, t, n);
          var z = fe.callback;
          if (z !== null && // If the update was already committed, we should not queue its
          // callback again.
          fe.lane !== qt) {
            e.flags |= Pd;
            var X = i.effects;
            X === null ? i.effects = [fe] : X.push(fe);
          }
        } else {
          var F = {
            eventTime: Ve,
            lane: Be,
            tag: fe.tag,
            payload: fe.payload,
            callback: fe.callback,
            next: null
          };
          pe === null ? (re = pe = F, K = H) : pe = pe.next = F, B = Ae(B, Be);
        }
        if (fe = fe.next, fe === null) {
          if (h = i.shared.pending, h === null)
            break;
          var le = h, ie = le.next;
          le.next = null, fe = ie, i.lastBaseUpdate = le, i.shared.pending = null;
        }
      } while (!0);
      pe === null && (K = H), i.baseState = K, i.firstBaseUpdate = re, i.lastBaseUpdate = pe;
      var Se = i.shared.interleaved;
      if (Se !== null) {
        var De = Se;
        do
          B = Ae(B, De.lane), De = De.next;
        while (De !== Se);
      } else u === null && (i.shared.lanes = q);
      ou(B), e.lanes = B, e.memoizedState = H;
    }
    Wc = null;
  }
  function Dj(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function gb() {
    Kc = !1;
  }
  function Qc() {
    return Kc;
  }
  function yb(e, t, n) {
    var a = t.effects;
    if (t.effects = null, a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i], p = u.callback;
        p !== null && (u.callback = null, Dj(p, n));
      }
  }
  var Al = {}, ii = ei(Al), Pl = ei(Al), Xc = ei(Al);
  function Zc(e) {
    if (e === Al)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function bb() {
    var e = Zc(Xc.current);
    return e;
  }
  function Cm(e, t) {
    bn(Xc, t, e), bn(Pl, e, e), bn(ii, Al, e);
    var n = Yw(t);
    yn(ii, e), bn(ii, n, e);
  }
  function qo(e) {
    yn(ii, e), yn(Pl, e), yn(Xc, e);
  }
  function wm() {
    var e = Zc(ii.current);
    return e;
  }
  function xb(e) {
    Zc(Xc.current);
    var t = Zc(ii.current), n = Kw(t, e.type);
    t !== n && (bn(Pl, e, e), bn(ii, n, e));
  }
  function Rm(e) {
    Pl.current === e && (yn(ii, e), yn(Pl, e));
  }
  var kj = 0, Sb = 1, Nb = 1, Ml = 2, Oa = ei(kj);
  function jm(e, t) {
    return (e & t) !== 0;
  }
  function Qo(e) {
    return e & Sb;
  }
  function Tm(e, t) {
    return e & Sb | t;
  }
  function Oj(e, t) {
    return e | t;
  }
  function oi(e, t) {
    bn(Oa, t, e);
  }
  function Xo(e) {
    yn(Oa, e);
  }
  function Lj(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function ef(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === M) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || Fy(a) || Yp(a))
            return t;
        }
      } else if (t.tag === be && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var i = (t.flags & Xe) !== ye;
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
  var Vn = (
    /*   */
    0
  ), Ut = (
    /* */
    1
  ), Ga = (
    /*  */
    2
  ), Vt = (
    /*    */
    4
  ), tn = (
    /*   */
    8
  ), Dm = [];
  function km() {
    for (var e = 0; e < Dm.length; e++) {
      var t = Dm[e];
      t._workInProgressVersionPrimary = null;
    }
    Dm.length = 0;
  }
  function _j(e, t) {
    var n = t._getVersion, a = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var se = s.ReactCurrentDispatcher, Ul = s.ReactCurrentBatchConfig, Om, Zo;
  Om = /* @__PURE__ */ new Set();
  var Zi = q, ot = null, Ft = null, zt = null, tf = !1, Vl = !1, Fl = 0, Aj = 0, Pj = 25, G = null, ma = null, si = -1, Lm = !1;
  function et() {
    {
      var e = G;
      ma === null ? ma = [e] : ma.push(e);
    }
  }
  function te() {
    {
      var e = G;
      ma !== null && (si++, ma[si] !== e && Mj(e));
    }
  }
  function es(e) {
    e != null && !Qe(e) && c("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
  }
  function Mj(e) {
    {
      var t = Le(ot);
      if (!Om.has(t) && (Om.add(t), ma !== null)) {
        for (var n = "", a = 30, i = 0; i <= si; i++) {
          for (var u = ma[i], p = i === si ? e : u, h = i + 1 + ". " + u; h.length < a; )
            h += " ";
          h += p + `
`, n += h;
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
  function _m(e, t) {
    if (Lm)
      return !1;
    if (t === null)
      return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
    e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Zn(e[n], t[n]))
        return !1;
    return !0;
  }
  function ts(e, t, n, a, i, u) {
    Zi = u, ot = t, ma = e !== null ? e._debugHookTypes : null, si = -1, Lm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? se.current = Bb : ma !== null ? se.current = Jb : se.current = Hb;
    var p = n(a, i);
    if (Vl) {
      var h = 0;
      do {
        if (Vl = !1, Fl = 0, h >= Pj)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        h += 1, Lm = !1, Ft = null, zt = null, t.updateQueue = null, si = -1, se.current = Ib, p = n(a, i);
      } while (Vl);
    }
    se.current = hf, t._debugHookTypes = ma;
    var b = Ft !== null && Ft.next !== null;
    if (Zi = q, ot = null, Ft = null, zt = null, G = null, ma = null, si = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & He) !== ve && c("Internal React error: Expected static flag was missing. Please notify the React team."), tf = !1, b)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return p;
  }
  function ns() {
    var e = Fl !== 0;
    return Fl = 0, e;
  }
  function Eb(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Ia) !== ve ? t.flags &= ~(Gu | gr | wa | Ie) : t.flags &= ~(wa | Ie), e.lanes = nc(e.lanes, n);
  }
  function Cb() {
    if (se.current = hf, tf) {
      for (var e = ot.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      tf = !1;
    }
    Zi = q, ot = null, Ft = null, zt = null, ma = null, si = -1, G = null, Ub = !1, Vl = !1, Fl = 0;
  }
  function qa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zt === null ? ot.memoizedState = zt = e : zt = zt.next = e, zt;
  }
  function ha() {
    var e;
    if (Ft === null) {
      var t = ot.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = Ft.next;
    var n;
    if (zt === null ? n = ot.memoizedState : n = zt.next, n !== null)
      zt = n, n = zt.next, Ft = e;
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
      zt === null ? ot.memoizedState = zt = a : zt = zt.next = a;
    }
    return zt;
  }
  function wb() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Am(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pm(e, t, n) {
    var a = qa(), i;
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
    var p = u.dispatch = zj.bind(null, ot, u);
    return [a.memoizedState, p];
  }
  function Mm(e, t, n) {
    var a = ha(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = Ft, p = u.baseQueue, h = i.pending;
    if (h !== null) {
      if (p !== null) {
        var b = p.next, C = h.next;
        p.next = C, h.next = b;
      }
      u.baseQueue !== p && c("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = p = h, i.pending = null;
    }
    if (p !== null) {
      var R = p.next, _ = u.baseState, L = null, H = null, B = null, K = R;
      do {
        var re = K.lane;
        if (Lo(Zi, re)) {
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
          var pe = {
            lane: re,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          B === null ? (H = B = pe, L = _) : B = B.next = pe, ot.lanes = Ae(ot.lanes, re), ou(re);
        }
        K = K.next;
      } while (K !== null && K !== R);
      B === null ? L = _ : B.next = H, Zn(_, a.memoizedState) || Wl(), a.memoizedState = _, a.baseState = L, a.baseQueue = B, i.lastRenderedState = _;
    }
    var Ve = i.interleaved;
    if (Ve !== null) {
      var F = Ve;
      do {
        var W = F.lane;
        ot.lanes = Ae(ot.lanes, W), ou(W), F = F.next;
      } while (F !== Ve);
    } else p === null && (i.lanes = q);
    var z = i.dispatch;
    return [a.memoizedState, z];
  }
  function Um(e, t, n) {
    var a = ha(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = i.dispatch, p = i.pending, h = a.memoizedState;
    if (p !== null) {
      i.pending = null;
      var b = p.next, C = b;
      do {
        var R = C.action;
        h = e(h, R), C = C.next;
      } while (C !== b);
      Zn(h, a.memoizedState) || Wl(), a.memoizedState = h, a.baseQueue === null && (a.baseState = h), i.lastRenderedState = h;
    }
    return [h, u];
  }
  function GP(e, t, n) {
  }
  function qP(e, t, n) {
  }
  function Vm(e, t, n) {
    var a = ot, i = qa(), u, p = en();
    if (p) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      u = n(), Zo || u !== n() && (c("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zo = !0);
    } else {
      if (u = t(), !Zo) {
        var h = t();
        Zn(u, h) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), Zo = !0);
      }
      var b = Af();
      if (b === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      tc(b, Zi) || Rb(a, t, u);
    }
    i.memoizedState = u;
    var C = {
      value: u,
      getSnapshot: t
    };
    return i.queue = C, sf(Tb.bind(null, a, C, e), [e]), a.flags |= wa, zl(Ut | tn, jb.bind(null, a, C, u, t), void 0, null), u;
  }
  function nf(e, t, n) {
    var a = ot, i = ha(), u = t();
    if (!Zo) {
      var p = t();
      Zn(u, p) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), Zo = !0);
    }
    var h = i.memoizedState, b = !Zn(h, u);
    b && (i.memoizedState = u, Wl());
    var C = i.queue;
    if (Hl(Tb.bind(null, a, C, e), [e]), C.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    zt !== null && zt.memoizedState.tag & Ut) {
      a.flags |= wa, zl(Ut | tn, jb.bind(null, a, C, u, t), void 0, null);
      var R = Af();
      if (R === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      tc(R, Zi) || Rb(a, t, u);
    }
    return u;
  }
  function Rb(e, t, n) {
    e.flags |= Wu;
    var a = {
      getSnapshot: t,
      value: n
    }, i = ot.updateQueue;
    if (i === null)
      i = wb(), ot.updateQueue = i, i.stores = [a];
    else {
      var u = i.stores;
      u === null ? i.stores = [a] : u.push(a);
    }
  }
  function jb(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Db(t) && kb(e);
  }
  function Tb(e, t, n) {
    var a = function() {
      Db(t) && kb(e);
    };
    return n(a);
  }
  function Db(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var a = t();
      return !Zn(n, a);
    } catch {
      return !0;
    }
  }
  function kb(e) {
    var t = Un(e, je);
    t !== null && Bt(t, e, je, dt);
  }
  function af(e) {
    var t = qa();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: Am,
      lastRenderedState: e
    };
    t.queue = n;
    var a = n.dispatch = $j.bind(null, ot, n);
    return [t.memoizedState, a];
  }
  function Fm(e) {
    return Mm(Am);
  }
  function zm(e) {
    return Um(Am);
  }
  function zl(e, t, n, a) {
    var i = {
      tag: e,
      create: t,
      destroy: n,
      deps: a,
      // Circular
      next: null
    }, u = ot.updateQueue;
    if (u === null)
      u = wb(), ot.updateQueue = u, u.lastEffect = i.next = i;
    else {
      var p = u.lastEffect;
      if (p === null)
        u.lastEffect = i.next = i;
      else {
        var h = p.next;
        p.next = i, i.next = h, u.lastEffect = i;
      }
    }
    return i;
  }
  function $m(e) {
    var t = qa();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function rf(e) {
    var t = ha();
    return t.memoizedState;
  }
  function $l(e, t, n, a) {
    var i = qa(), u = a === void 0 ? null : a;
    ot.flags |= e, i.memoizedState = zl(Ut | t, n, void 0, u);
  }
  function of(e, t, n, a) {
    var i = ha(), u = a === void 0 ? null : a, p = void 0;
    if (Ft !== null) {
      var h = Ft.memoizedState;
      if (p = h.destroy, u !== null) {
        var b = h.deps;
        if (_m(u, b)) {
          i.memoizedState = zl(t, n, p, u);
          return;
        }
      }
    }
    ot.flags |= e, i.memoizedState = zl(Ut | t, n, p, u);
  }
  function sf(e, t) {
    return (ot.mode & Ia) !== ve ? $l(Gu | wa | Vd, tn, e, t) : $l(wa | Vd, tn, e, t);
  }
  function Hl(e, t) {
    return of(wa, tn, e, t);
  }
  function Hm(e, t) {
    return $l(Ie, Ga, e, t);
  }
  function lf(e, t) {
    return of(Ie, Ga, e, t);
  }
  function Jm(e, t) {
    var n = Ie;
    return n |= Mi, (ot.mode & Ia) !== ve && (n |= gr), $l(n, Vt, e, t);
  }
  function uf(e, t) {
    return of(Ie, Vt, e, t);
  }
  function Ob(e, t) {
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
  function Bm(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null, i = Ie;
    return i |= Mi, (ot.mode & Ia) !== ve && (i |= gr), $l(i, Vt, Ob.bind(null, t, e), a);
  }
  function cf(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null;
    return of(Ie, Vt, Ob.bind(null, t, e), a);
  }
  function Uj(e, t) {
  }
  var ff = Uj;
  function Im(e, t) {
    var n = qa(), a = t === void 0 ? null : t;
    return n.memoizedState = [e, a], e;
  }
  function df(e, t) {
    var n = ha(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (_m(a, u))
        return i[0];
    }
    return n.memoizedState = [e, a], e;
  }
  function Ym(e, t) {
    var n = qa(), a = t === void 0 ? null : t, i = e();
    return n.memoizedState = [i, a], i;
  }
  function pf(e, t) {
    var n = ha(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (_m(a, u))
        return i[0];
    }
    var p = e();
    return n.memoizedState = [p, a], p;
  }
  function Km(e) {
    var t = qa();
    return t.memoizedState = e, e;
  }
  function Lb(e) {
    var t = ha(), n = Ft, a = n.memoizedState;
    return Ab(t, a, e);
  }
  function _b(e) {
    var t = ha();
    if (Ft === null)
      return t.memoizedState = e, e;
    var n = Ft.memoizedState;
    return Ab(t, n, e);
  }
  function Ab(e, t, n) {
    var a = !NE(Zi);
    if (a) {
      if (!Zn(n, t)) {
        var i = kg();
        ot.lanes = Ae(ot.lanes, i), ou(i), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, Wl()), e.memoizedState = n, n;
  }
  function Vj(e, t, n) {
    var a = ja();
    Qt(OE(a, xr)), e(!0);
    var i = Ul.transition;
    Ul.transition = {};
    var u = Ul.transition;
    Ul.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (Qt(a), Ul.transition = i, i === null && u._updatedFibers) {
        var p = u._updatedFibers.size;
        p > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function Wm() {
    var e = af(!1), t = e[0], n = e[1], a = Vj.bind(null, n), i = qa();
    return i.memoizedState = a, [t, a];
  }
  function Pb() {
    var e = Fm(), t = e[0], n = ha(), a = n.memoizedState;
    return [t, a];
  }
  function Mb() {
    var e = zm(), t = e[0], n = ha(), a = n.memoizedState;
    return [t, a];
  }
  var Ub = !1;
  function Fj() {
    return Ub;
  }
  function Gm() {
    var e = qa(), t = Af(), n = t.identifierPrefix, a;
    if (en()) {
      var i = nj();
      a = ":" + n + "R" + i;
      var u = Fl++;
      u > 0 && (a += "H" + u.toString(32)), a += ":";
    } else {
      var p = Aj++;
      a = ":" + n + "r" + p.toString(32) + ":";
    }
    return e.memoizedState = a, a;
  }
  function mf() {
    var e = ha(), t = e.memoizedState;
    return t;
  }
  function zj(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = di(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vb(e))
      Fb(t, i);
    else {
      var u = pb(e, t, i, a);
      if (u !== null) {
        var p = Tn();
        Bt(u, e, a, p), zb(u, t, a);
      }
    }
    $b(e, a);
  }
  function $j(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = di(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vb(e))
      Fb(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === q && (u === null || u.lanes === q)) {
        var p = t.lastRenderedReducer;
        if (p !== null) {
          var h;
          h = se.current, se.current = La;
          try {
            var b = t.lastRenderedState, C = p(b, n);
            if (i.hasEagerState = !0, i.eagerState = C, Zn(C, b)) {
              wj(e, t, i, a);
              return;
            }
          } catch {
          } finally {
            se.current = h;
          }
        }
      }
      var R = pb(e, t, i, a);
      if (R !== null) {
        var _ = Tn();
        Bt(R, e, a, _), zb(R, t, a);
      }
    }
    $b(e, a);
  }
  function Vb(e) {
    var t = e.alternate;
    return e === ot || t !== null && t === ot;
  }
  function Fb(e, t) {
    Vl = tf = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function zb(e, t, n) {
    if (Dg(n)) {
      var a = t.lanes;
      a = Og(a, e.pendingLanes);
      var i = Ae(a, n);
      t.lanes = i, mp(e, i);
    }
  }
  function $b(e, t, n) {
    Jd(e, t);
  }
  var hf = {
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
    unstable_isNewReconciler: qe
  }, Hb = null, Jb = null, Bb = null, Ib = null, Qa = null, La = null, vf = null;
  {
    var qm = function() {
      c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, Te = function() {
      c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Hb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", et(), es(t), Im(e, t);
      },
      useContext: function(e) {
        return G = "useContext", et(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", et(), es(t), sf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", et(), es(n), Bm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", et(), es(t), Hm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", et(), es(t), Jm(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", et(), es(t);
        var n = se.current;
        se.current = Qa;
        try {
          return Ym(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", et();
        var a = se.current;
        se.current = Qa;
        try {
          return Pm(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", et(), $m(e);
      },
      useState: function(e) {
        G = "useState", et();
        var t = se.current;
        se.current = Qa;
        try {
          return af(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", et(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", et(), Km(e);
      },
      useTransition: function() {
        return G = "useTransition", et(), Wm();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", et(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", et(), Vm(e, t, n);
      },
      useId: function() {
        return G = "useId", et(), Gm();
      },
      unstable_isNewReconciler: qe
    }, Jb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), Im(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), sf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), Bm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), Hm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), Jm(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = Qa;
        try {
          return Ym(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = Qa;
        try {
          return Pm(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), $m(e);
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = Qa;
        try {
          return af(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Km(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), Wm();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), Vm(e, t, n);
      },
      useId: function() {
        return G = "useId", te(), Gm();
      },
      unstable_isNewReconciler: qe
    }, Bb = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), df(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Hl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), cf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), uf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = La;
        try {
          return pf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = La;
        try {
          return Mm(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), rf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = La;
        try {
          return Fm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), ff();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), Lb(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), Pb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), nf(e, t);
      },
      useId: function() {
        return G = "useId", te(), mf();
      },
      unstable_isNewReconciler: qe
    }, Ib = {
      readContext: function(e) {
        return _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", te(), df(e, t);
      },
      useContext: function(e) {
        return G = "useContext", te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", te(), Hl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", te(), cf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", te(), lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", te(), uf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", te();
        var n = se.current;
        se.current = vf;
        try {
          return pf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", te();
        var a = se.current;
        se.current = vf;
        try {
          return Um(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", te(), rf();
      },
      useState: function(e) {
        G = "useState", te();
        var t = se.current;
        se.current = vf;
        try {
          return zm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", te(), ff();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", te(), _b(e);
      },
      useTransition: function() {
        return G = "useTransition", te(), Mb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", te(), nf(e, t);
      },
      useId: function() {
        return G = "useId", te(), mf();
      },
      unstable_isNewReconciler: qe
    }, Qa = {
      readContext: function(e) {
        return qm(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), et(), Im(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), et(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), et(), sf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), et(), Bm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), et(), Hm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), et(), Jm(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), et();
        var n = se.current;
        se.current = Qa;
        try {
          return Ym(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), et();
        var a = se.current;
        se.current = Qa;
        try {
          return Pm(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), et(), $m(e);
      },
      useState: function(e) {
        G = "useState", Te(), et();
        var t = se.current;
        se.current = Qa;
        try {
          return af(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), et(), void 0;
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), et(), Km(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), et(), Wm();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), et(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), et(), Vm(e, t, n);
      },
      useId: function() {
        return G = "useId", Te(), et(), Gm();
      },
      unstable_isNewReconciler: qe
    }, La = {
      readContext: function(e) {
        return qm(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), te(), df(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), te(), Hl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), te(), cf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), te(), lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), te(), uf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), te();
        var n = se.current;
        se.current = La;
        try {
          return pf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), te();
        var a = se.current;
        se.current = La;
        try {
          return Mm(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), te(), rf();
      },
      useState: function(e) {
        G = "useState", Te(), te();
        var t = se.current;
        se.current = La;
        try {
          return Fm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), te(), ff();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), te(), Lb(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), te(), Pb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), te(), nf(e, t);
      },
      useId: function() {
        return G = "useId", Te(), te(), mf();
      },
      unstable_isNewReconciler: qe
    }, vf = {
      readContext: function(e) {
        return qm(), _t(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Te(), te(), df(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Te(), te(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Te(), te(), Hl(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return G = "useImperativeHandle", Te(), te(), cf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Te(), te(), lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Te(), te(), uf(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Te(), te();
        var n = se.current;
        se.current = La;
        try {
          return pf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        G = "useReducer", Te(), te();
        var a = se.current;
        se.current = La;
        try {
          return Um(e, t, n);
        } finally {
          se.current = a;
        }
      },
      useRef: function(e) {
        return G = "useRef", Te(), te(), rf();
      },
      useState: function(e) {
        G = "useState", Te(), te();
        var t = se.current;
        se.current = La;
        try {
          return zm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return G = "useDebugValue", Te(), te(), ff();
      },
      useDeferredValue: function(e) {
        return G = "useDeferredValue", Te(), te(), _b(e);
      },
      useTransition: function() {
        return G = "useTransition", Te(), te(), Mb();
      },
      useMutableSource: function(e, t, n) {
        return G = "useMutableSource", Te(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return G = "useSyncExternalStore", Te(), te(), nf(e, t);
      },
      useId: function() {
        return G = "useId", Te(), te(), mf();
      },
      unstable_isNewReconciler: qe
    };
  }
  var li = r.unstable_now, Yb = 0, gf = -1, Jl = -1, yf = -1, Qm = !1, bf = !1;
  function Kb() {
    return Qm;
  }
  function Hj() {
    bf = !0;
  }
  function Jj() {
    Qm = !1, bf = !1;
  }
  function Bj() {
    Qm = bf, bf = !1;
  }
  function Wb() {
    return Yb;
  }
  function Gb() {
    Yb = li();
  }
  function Xm(e) {
    Jl = li(), e.actualStartTime < 0 && (e.actualStartTime = li());
  }
  function qb(e) {
    Jl = -1;
  }
  function xf(e, t) {
    if (Jl >= 0) {
      var n = li() - Jl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Jl = -1;
    }
  }
  function Xa(e) {
    if (gf >= 0) {
      var t = li() - gf;
      gf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case x:
            var a = n.stateNode;
            a.effectDuration += t;
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
  function Zm(e) {
    if (yf >= 0) {
      var t = li() - yf;
      yf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case x:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
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
  function Za() {
    gf = li();
  }
  function eh() {
    yf = li();
  }
  function th(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function _a(e, t) {
    if (e && e.defaultProps) {
      var n = Fe({}, t), a = e.defaultProps;
      for (var i in a)
        n[i] === void 0 && (n[i] = a[i]);
      return n;
    }
    return t;
  }
  var nh = {}, ah, rh, ih, oh, sh, Qb, Sf, lh, uh, ch, Bl;
  {
    ah = /* @__PURE__ */ new Set(), rh = /* @__PURE__ */ new Set(), ih = /* @__PURE__ */ new Set(), oh = /* @__PURE__ */ new Set(), lh = /* @__PURE__ */ new Set(), sh = /* @__PURE__ */ new Set(), uh = /* @__PURE__ */ new Set(), ch = /* @__PURE__ */ new Set(), Bl = /* @__PURE__ */ new Set();
    var Xb = /* @__PURE__ */ new Set();
    Sf = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Xb.has(n) || (Xb.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, Qb = function(e, t) {
      if (t === void 0) {
        var n = Ye(e) || "Component";
        sh.has(n) || (sh.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(nh, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(nh);
  }
  function fh(e, t, n, a) {
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
      Qb(t, u);
    }
    var p = u == null ? i : Fe({}, i, u);
    if (e.memoizedState = p, e.lanes === q) {
      var h = e.updateQueue;
      h.baseState = p;
    }
  }
  var dh = {
    isMounted: PN,
    enqueueSetState: function(e, t, n) {
      var a = Co(e), i = Tn(), u = di(a), p = jr(i, u);
      p.payload = t, n != null && (Sf(n, "setState"), p.callback = n);
      var h = ri(a, p, u);
      h !== null && (Bt(h, a, u, i), Gc(h, a, u)), Jd(a, u);
    },
    enqueueReplaceState: function(e, t, n) {
      var a = Co(e), i = Tn(), u = di(a), p = jr(i, u);
      p.tag = hb, p.payload = t, n != null && (Sf(n, "replaceState"), p.callback = n);
      var h = ri(a, p, u);
      h !== null && (Bt(h, a, u, i), Gc(h, a, u)), Jd(a, u);
    },
    enqueueForceUpdate: function(e, t) {
      var n = Co(e), a = Tn(), i = di(n), u = jr(a, i);
      u.tag = Yc, t != null && (Sf(t, "forceUpdate"), u.callback = t);
      var p = ri(n, u, i);
      p !== null && (Bt(p, n, i, a), Gc(p, n, i)), dE(n, i);
    }
  };
  function Zb(e, t, n, a, i, u, p) {
    var h = e.stateNode;
    if (typeof h.shouldComponentUpdate == "function") {
      var b = h.shouldComponentUpdate(a, u, p);
      {
        if (e.mode & Et) {
          Gt(!0);
          try {
            b = h.shouldComponentUpdate(a, u, p);
          } finally {
            Gt(!1);
          }
        }
        b === void 0 && c("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ye(t) || "Component");
      }
      return b;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !dl(n, a) || !dl(i, u) : !0;
  }
  function Ij(e, t, n) {
    var a = e.stateNode;
    {
      var i = Ye(t) || "Component", u = a.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), a.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), a.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), t.childContextTypes && !Bl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ve && (Bl.add(t), c(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), t.contextTypes && !Bl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Et) === ve && (Bl.add(t), c(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), a.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !uh.has(t) && (uh.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof a.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ye(t) || "A pure component"), typeof a.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof a.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof a.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof a.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
      var p = a.props !== n;
      a.props !== void 0 && p && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), a.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !ih.has(t) && (ih.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ye(t))), typeof a.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof a.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
      var h = a.state;
      h && (typeof h != "object" || Qe(h)) && c("%s.state: must be set to an object or null", i), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
    }
  }
  function ex(e, t) {
    t.updater = dh, e.stateNode = t, kN(t, e), t._reactInternalInstance = nh;
  }
  function tx(e, t, n) {
    var a = !1, i = ea, u = ea, p = t.contextType;
    if ("contextType" in t) {
      var h = (
        // Allow null for conditional declaration
        p === null || p !== void 0 && p.$$typeof === ze && p._context === void 0
      );
      if (!h && !ch.has(t)) {
        ch.add(t);
        var b = "";
        p === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? b = " However, it is set to a " + typeof p + "." : p.$$typeof === ge ? b = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ye(t) || "Component", b);
      }
    }
    if (typeof p == "object" && p !== null)
      u = _t(p);
    else {
      i = Ho(e, t, !0);
      var C = t.contextTypes;
      a = C != null, u = a ? Jo(e, i) : ea;
    }
    var R = new t(n, u);
    if (e.mode & Et) {
      Gt(!0);
      try {
        R = new t(n, u);
      } finally {
        Gt(!1);
      }
    }
    var _ = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
    ex(e, R);
    {
      if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
        var L = Ye(t) || "Component";
        rh.has(L) || (rh.add(L), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, R.state === null ? "null" : "undefined", L));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
        var H = null, B = null, K = null;
        if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), H !== null || B !== null || K !== null) {
          var re = Ye(t) || "Component", pe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          oh.has(re) || (oh.add(re), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, re, pe, H !== null ? `
  ` + H : "", B !== null ? `
  ` + B : "", K !== null ? `
  ` + K : ""));
        }
      }
    }
    return a && By(e, i, u), R;
  }
  function Yj(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e) || "Component"), dh.enqueueReplaceState(t, t.state, null));
  }
  function nx(e, t, n, a) {
    var i = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== i) {
      {
        var u = Le(e) || "Component";
        ah.has(u) || (ah.add(u), c("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      dh.enqueueReplaceState(t, t.state, null);
    }
  }
  function ph(e, t, n, a) {
    Ij(e, t, n);
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Nm(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      i.context = _t(u);
    else {
      var p = Ho(e, t, !0);
      i.context = Jo(e, p);
    }
    {
      if (i.state === n) {
        var h = Ye(t) || "Component";
        lh.has(h) || (lh.add(h), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
      }
      e.mode & Et && ka.recordLegacyContextWarning(e, i), ka.recordUnsafeLifecycleWarnings(e, i);
    }
    i.state = e.memoizedState;
    var b = t.getDerivedStateFromProps;
    if (typeof b == "function" && (fh(e, t, b, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (Yj(e, i), qc(e, n, i, a), i.state = e.memoizedState), typeof i.componentDidMount == "function") {
      var C = Ie;
      C |= Mi, (e.mode & Ia) !== ve && (C |= gr), e.flags |= C;
    }
  }
  function Kj(e, t, n, a) {
    var i = e.stateNode, u = e.memoizedProps;
    i.props = u;
    var p = i.context, h = t.contextType, b = ea;
    if (typeof h == "object" && h !== null)
      b = _t(h);
    else {
      var C = Ho(e, t, !0);
      b = Jo(e, C);
    }
    var R = t.getDerivedStateFromProps, _ = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !_ && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== n || p !== b) && nx(e, i, n, b), gb();
    var L = e.memoizedState, H = i.state = L;
    if (qc(e, n, i, a), H = e.memoizedState, u === n && L === H && !Oc() && !Qc()) {
      if (typeof i.componentDidMount == "function") {
        var B = Ie;
        B |= Mi, (e.mode & Ia) !== ve && (B |= gr), e.flags |= B;
      }
      return !1;
    }
    typeof R == "function" && (fh(e, t, R, n), H = e.memoizedState);
    var K = Qc() || Zb(e, t, u, n, L, H, b);
    if (K) {
      if (!_ && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function") {
        var re = Ie;
        re |= Mi, (e.mode & Ia) !== ve && (re |= gr), e.flags |= re;
      }
    } else {
      if (typeof i.componentDidMount == "function") {
        var pe = Ie;
        pe |= Mi, (e.mode & Ia) !== ve && (pe |= gr), e.flags |= pe;
      }
      e.memoizedProps = n, e.memoizedState = H;
    }
    return i.props = n, i.state = H, i.context = b, K;
  }
  function Wj(e, t, n, a, i) {
    var u = t.stateNode;
    vb(e, t);
    var p = t.memoizedProps, h = t.type === t.elementType ? p : _a(t.type, p);
    u.props = h;
    var b = t.pendingProps, C = u.context, R = n.contextType, _ = ea;
    if (typeof R == "object" && R !== null)
      _ = _t(R);
    else {
      var L = Ho(t, n, !0);
      _ = Jo(t, L);
    }
    var H = n.getDerivedStateFromProps, B = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !B && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (p !== b || C !== _) && nx(t, u, a, _), gb();
    var K = t.memoizedState, re = u.state = K;
    if (qc(t, a, u, i), re = t.memoizedState, p === b && K === re && !Oc() && !Qc() && !Dt)
      return typeof u.componentDidUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ai), !1;
    typeof H == "function" && (fh(t, n, H, a), re = t.memoizedState);
    var pe = Qc() || Zb(t, n, h, a, K, re, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    Dt;
    return pe ? (!B && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, re, _), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, re, _)), typeof u.componentDidUpdate == "function" && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= Ai)) : (typeof u.componentDidUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ie), typeof u.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Ai), t.memoizedProps = a, t.memoizedState = re), u.props = a, u.state = re, u.context = _, pe;
  }
  function eo(e, t) {
    return {
      value: e,
      source: t,
      stack: Os(t),
      digest: null
    };
  }
  function mh(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function Gj(e, t) {
    return !0;
  }
  function hh(e, t) {
    try {
      var n = Gj(e, t);
      if (n === !1)
        return;
      var a = t.value, i = t.source, u = t.stack, p = u !== null ? u : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === m)
          return;
        console.error(a);
      }
      var h = i ? Le(i) : null, b = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", C;
      if (e.tag === x)
        C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var R = Le(e) || "Anonymous";
        C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
      }
      var _ = b + `
` + p + `

` + ("" + C);
      console.error(_);
    } catch (L) {
      setTimeout(function() {
        throw L;
      });
    }
  }
  var qj = typeof WeakMap == "function" ? WeakMap : Map;
  function ax(e, t, n) {
    var a = jr(dt, n);
    a.tag = xm, a.payload = {
      element: null
    };
    var i = t.value;
    return a.callback = function() {
      HD(i), hh(e, t);
    }, a;
  }
  function vh(e, t, n) {
    var a = jr(dt, n);
    a.tag = xm;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = t.value;
      a.payload = function() {
        return i(u);
      }, a.callback = function() {
        m0(e), hh(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (a.callback = function() {
      m0(e), hh(e, t), typeof i != "function" && zD(this);
      var b = t.value, C = t.stack;
      this.componentDidCatch(b, {
        componentStack: C !== null ? C : ""
      }), typeof i != "function" && (qn(e.lanes, je) || c("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e) || "Unknown"));
    }), a;
  }
  function rx(e, t, n) {
    var a = e.pingCache, i;
    if (a === null ? (a = e.pingCache = new qj(), i = /* @__PURE__ */ new Set(), a.set(t, i)) : (i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i))), !i.has(n)) {
      i.add(n);
      var u = JD.bind(null, e, t, n);
      Ra && su(e, n), t.then(u, u);
    }
  }
  function Qj(e, t, n, a) {
    var i = e.updateQueue;
    if (i === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(n), e.updateQueue = u;
    } else
      i.add(n);
  }
  function Xj(e, t) {
    var n = e.tag;
    if ((e.mode & He) === ve && (n === v || n === $ || n === Z)) {
      var a = e.alternate;
      a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function ix(e) {
    var t = e;
    do {
      if (t.tag === M && Lj(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function ox(e, t, n, a, i) {
    if ((e.mode & He) === ve) {
      if (e === t)
        e.flags |= wn;
      else {
        if (e.flags |= Xe, n.flags |= Md, n.flags &= ~(ON | Js), n.tag === m) {
          var u = n.alternate;
          if (u === null)
            n.tag = ke;
          else {
            var p = jr(dt, je);
            p.tag = Yc, ri(n, p, je);
          }
        }
        n.lanes = Ae(n.lanes, je);
      }
      return e;
    }
    return e.flags |= wn, e.lanes = i, e;
  }
  function Zj(e, t, n, a, i) {
    if (n.flags |= Js, Ra && su(e, i), a !== null && typeof a == "object" && typeof a.then == "function") {
      var u = a;
      Xj(n), en() && n.mode & He && Qy();
      var p = ix(t);
      if (p !== null) {
        p.flags &= ~hr, ox(p, t, n, e, i), p.mode & He && rx(e, u, i), Qj(p, e, u);
        return;
      } else {
        if (!SE(i)) {
          rx(e, u, i), Gh();
          return;
        }
        var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        a = h;
      }
    } else if (en() && n.mode & He) {
      Qy();
      var b = ix(t);
      if (b !== null) {
        (b.flags & wn) === ye && (b.flags |= hr), ox(b, t, n, e, i), lm(eo(a, n));
        return;
      }
    }
    a = eo(a, n), LD(a);
    var C = t;
    do {
      switch (C.tag) {
        case x: {
          var R = a;
          C.flags |= wn;
          var _ = Qs(i);
          C.lanes = Ae(C.lanes, _);
          var L = ax(C, R, _);
          Em(C, L);
          return;
        }
        case m:
          var H = a, B = C.type, K = C.stateNode;
          if ((C.flags & Xe) === ye && (typeof B.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !i0(K))) {
            C.flags |= wn;
            var re = Qs(i);
            C.lanes = Ae(C.lanes, re);
            var pe = vh(C, H, re);
            Em(C, pe);
            return;
          }
          break;
      }
      C = C.return;
    } while (C !== null);
  }
  function eT() {
    return null;
  }
  var Il = s.ReactCurrentOwner, Aa = !1, gh, Yl, yh, bh, xh, to, Sh, Nf, Kl;
  gh = {}, Yl = {}, yh = {}, bh = {}, xh = {}, to = !1, Sh = {}, Nf = {}, Kl = {};
  function Rn(e, t, n, a) {
    e === null ? t.child = ub(t, null, n, a) : t.child = Ko(t, e.child, n, a);
  }
  function tT(e, t, n, a) {
    t.child = Ko(t, e.child, null, a), t.child = Ko(t, null, n, a);
  }
  function sx(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Ta(
        u,
        a,
        // Resolved props
        "prop",
        Ye(n)
      );
    }
    var p = n.render, h = t.ref, b, C;
    Go(t, i), Is(t);
    {
      if (Il.current = t, Wn(!0), b = ts(e, t, p, a, h, i), C = ns(), t.mode & Et) {
        Gt(!0);
        try {
          b = ts(e, t, p, a, h, i), C = ns();
        } finally {
          Gt(!1);
        }
      }
      Wn(!1);
    }
    return To(), e !== null && !Aa ? (Eb(e, t, i), Tr(e, t, i)) : (en() && C && nm(t), t.flags |= wo, Rn(e, t, b, i), t.child);
  }
  function lx(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      if (ok(u) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var p = u;
        return p = cs(u), t.tag = Z, t.type = p, Ch(t, u), ux(e, t, p, a, i);
      }
      {
        var h = u.propTypes;
        if (h && Ta(
          h,
          a,
          // Resolved props
          "prop",
          Ye(u)
        ), n.defaultProps !== void 0) {
          var b = Ye(u) || "Unknown";
          Kl[b] || (c("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), Kl[b] = !0);
        }
      }
      var C = ov(n.type, null, a, t, t.mode, i);
      return C.ref = t.ref, C.return = t, t.child = C, C;
    }
    {
      var R = n.type, _ = R.propTypes;
      _ && Ta(
        _,
        a,
        // Resolved props
        "prop",
        Ye(R)
      );
    }
    var L = e.child, H = kh(e, i);
    if (!H) {
      var B = L.memoizedProps, K = n.compare;
      if (K = K !== null ? K : dl, K(B, a) && e.ref === t.ref)
        return Tr(e, t, i);
    }
    t.flags |= wo;
    var re = oo(L, a);
    return re.ref = t.ref, re.return = t, t.child = re, re;
  }
  function ux(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ue) {
        var p = u, h = p._payload, b = p._init;
        try {
          u = b(h);
        } catch {
          u = null;
        }
        var C = u && u.propTypes;
        C && Ta(
          C,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Ye(u)
        );
      }
    }
    if (e !== null) {
      var R = e.memoizedProps;
      if (dl(R, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Aa = !1, t.pendingProps = a = R, kh(e, i))
          (e.flags & Md) !== ye && (Aa = !0);
        else return t.lanes = e.lanes, Tr(e, t, i);
    }
    return Nh(e, t, n, a, i);
  }
  function cx(e, t, n) {
    var a = t.pendingProps, i = a.children, u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || Ke)
      if ((t.mode & He) === ve) {
        var p = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = p, Pf(t, n);
      } else if (qn(n, Gn)) {
        var _ = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = _;
        var L = u !== null ? u.baseLanes : n;
        Pf(t, L);
      } else {
        var h = null, b;
        if (u !== null) {
          var C = u.baseLanes;
          b = Ae(C, n);
        } else
          b = n;
        t.lanes = t.childLanes = Gn;
        var R = {
          baseLanes: b,
          cachePool: h,
          transitions: null
        };
        return t.memoizedState = R, t.updateQueue = null, Pf(t, b), null;
      }
    else {
      var H;
      u !== null ? (H = Ae(u.baseLanes, n), t.memoizedState = null) : H = n, Pf(t, H);
    }
    return Rn(e, t, i, n), t.child;
  }
  function nT(e, t, n) {
    var a = t.pendingProps;
    return Rn(e, t, a, n), t.child;
  }
  function aT(e, t, n) {
    var a = t.pendingProps.children;
    return Rn(e, t, a, n), t.child;
  }
  function rT(e, t, n) {
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
  function fx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Yr, t.flags |= Ud);
  }
  function Nh(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Ta(
        u,
        a,
        // Resolved props
        "prop",
        Ye(n)
      );
    }
    var p;
    {
      var h = Ho(t, n, !0);
      p = Jo(t, h);
    }
    var b, C;
    Go(t, i), Is(t);
    {
      if (Il.current = t, Wn(!0), b = ts(e, t, n, a, p, i), C = ns(), t.mode & Et) {
        Gt(!0);
        try {
          b = ts(e, t, n, a, p, i), C = ns();
        } finally {
          Gt(!1);
        }
      }
      Wn(!1);
    }
    return To(), e !== null && !Aa ? (Eb(e, t, i), Tr(e, t, i)) : (en() && C && nm(t), t.flags |= wo, Rn(e, t, b, i), t.child);
  }
  function dx(e, t, n, a, i) {
    {
      switch (Sk(t)) {
        case !1: {
          var u = t.stateNode, p = t.type, h = new p(t.memoizedProps, u.context), b = h.state;
          u.updater.enqueueSetState(u, b, null);
          break;
        }
        case !0: {
          t.flags |= Xe, t.flags |= wn;
          var C = new Error("Simulated error coming from DevTools"), R = Qs(i);
          t.lanes = Ae(t.lanes, R);
          var _ = vh(t, eo(C, t), R);
          Em(t, _);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var L = n.propTypes;
        L && Ta(
          L,
          a,
          // Resolved props
          "prop",
          Ye(n)
        );
      }
    }
    var H;
    Wa(n) ? (H = !0, _c(t)) : H = !1, Go(t, i);
    var B = t.stateNode, K;
    B === null ? (Cf(e, t), tx(t, n, a), ph(t, n, a, i), K = !0) : e === null ? K = Kj(t, n, a, i) : K = Wj(e, t, n, a, i);
    var re = Eh(e, t, n, K, H, i);
    {
      var pe = t.stateNode;
      K && pe.props !== a && (to || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t) || "a component"), to = !0);
    }
    return re;
  }
  function Eh(e, t, n, a, i, u) {
    fx(e, t);
    var p = (t.flags & Xe) !== ye;
    if (!a && !p)
      return i && Ky(t, n, !1), Tr(e, t, u);
    var h = t.stateNode;
    Il.current = t;
    var b;
    if (p && typeof n.getDerivedStateFromError != "function")
      b = null, qb();
    else {
      Is(t);
      {
        if (Wn(!0), b = h.render(), t.mode & Et) {
          Gt(!0);
          try {
            h.render();
          } finally {
            Gt(!1);
          }
        }
        Wn(!1);
      }
      To();
    }
    return t.flags |= wo, e !== null && p ? tT(e, t, b, u) : Rn(e, t, b, u), t.memoizedState = h.state, i && Ky(t, n, !0), t.child;
  }
  function px(e) {
    var t = e.stateNode;
    t.pendingContext ? Iy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iy(e, t.context, !1), Cm(e, t.containerInfo);
  }
  function iT(e, t, n) {
    if (px(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps, i = t.memoizedState, u = i.element;
    vb(e, t), qc(t, a, null, n);
    var p = t.memoizedState;
    t.stateNode;
    var h = p.element;
    if (i.isDehydrated) {
      var b = {
        element: h,
        isDehydrated: !1,
        cache: p.cache,
        pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
        transitions: p.transitions
      }, C = t.updateQueue;
      if (C.baseState = b, t.memoizedState = b, t.flags & hr) {
        var R = eo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return mx(e, t, h, n, R);
      } else if (h !== u) {
        var _ = eo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return mx(e, t, h, n, _);
      } else {
        lj(t);
        var L = ub(t, null, h, n);
        t.child = L;
        for (var H = L; H; )
          H.flags = H.flags & ~Lt | vr, H = H.sibling;
      }
    } else {
      if (Yo(), h === u)
        return Tr(e, t, n);
      Rn(e, t, h, n);
    }
    return t.child;
  }
  function mx(e, t, n, a, i) {
    return Yo(), lm(i), t.flags |= hr, Rn(e, t, n, a), t.child;
  }
  function oT(e, t, n) {
    xb(t), e === null && sm(t);
    var a = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, p = i.children, h = Hp(a, i);
    return h ? p = null : u !== null && Hp(a, u) && (t.flags |= Hs), fx(e, t), Rn(e, t, p, n), t.child;
  }
  function sT(e, t) {
    return e === null && sm(t), null;
  }
  function lT(e, t, n, a) {
    Cf(e, t);
    var i = t.pendingProps, u = n, p = u._payload, h = u._init, b = h(p);
    t.type = b;
    var C = t.tag = sk(b), R = _a(b, i), _;
    switch (C) {
      case v:
        return Ch(t, b), t.type = b = cs(b), _ = Nh(null, t, b, R, a), _;
      case m:
        return t.type = b = ev(b), _ = dx(null, t, b, R, a), _;
      case $:
        return t.type = b = tv(b), _ = sx(null, t, b, R, a), _;
      case I: {
        if (t.type !== t.elementType) {
          var L = b.propTypes;
          L && Ta(
            L,
            R,
            // Resolved for outer only
            "prop",
            Ye(b)
          );
        }
        return _ = lx(
          null,
          t,
          b,
          _a(b.type, R),
          // The inner type can have defaults too
          a
        ), _;
      }
    }
    var H = "";
    throw b !== null && typeof b == "object" && b.$$typeof === Ue && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + H));
  }
  function uT(e, t, n, a, i) {
    Cf(e, t), t.tag = m;
    var u;
    return Wa(n) ? (u = !0, _c(t)) : u = !1, Go(t, i), tx(t, n, a), ph(t, n, a, i), Eh(null, t, n, !0, u, i);
  }
  function cT(e, t, n, a) {
    Cf(e, t);
    var i = t.pendingProps, u;
    {
      var p = Ho(t, n, !1);
      u = Jo(t, p);
    }
    Go(t, a);
    var h, b;
    Is(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var C = Ye(n) || "Unknown";
        gh[C] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), gh[C] = !0);
      }
      t.mode & Et && ka.recordLegacyContextWarning(t, null), Wn(!0), Il.current = t, h = ts(null, t, n, i, u, a), b = ns(), Wn(!1);
    }
    if (To(), t.flags |= wo, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
      var R = Ye(n) || "Unknown";
      Yl[R] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Yl[R] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
    ) {
      {
        var _ = Ye(n) || "Unknown";
        Yl[_] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Yl[_] = !0);
      }
      t.tag = m, t.memoizedState = null, t.updateQueue = null;
      var L = !1;
      return Wa(n) ? (L = !0, _c(t)) : L = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Nm(t), ex(t, h), ph(t, n, i, a), Eh(null, t, n, !0, L, a);
    } else {
      if (t.tag = v, t.mode & Et) {
        Gt(!0);
        try {
          h = ts(null, t, n, i, u, a), b = ns();
        } finally {
          Gt(!1);
        }
      }
      return en() && b && nm(t), Rn(null, t, h, a), Ch(t, n), t.child;
    }
  }
  function Ch(e, t) {
    {
      if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", a = Hr();
        a && (n += `

Check the render method of \`` + a + "`.");
        var i = a || "", u = e._debugSource;
        u && (i = u.fileName + ":" + u.lineNumber), xh[i] || (xh[i] = !0, c("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var p = Ye(t) || "Unknown";
        Kl[p] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", p), Kl[p] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var h = Ye(t) || "Unknown";
        bh[h] || (c("%s: Function components do not support getDerivedStateFromProps.", h), bh[h] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var b = Ye(t) || "Unknown";
        yh[b] || (c("%s: Function components do not support contextType.", b), yh[b] = !0);
      }
    }
  }
  var wh = {
    dehydrated: null,
    treeContext: null,
    retryLane: qt
  };
  function Rh(e) {
    return {
      baseLanes: e,
      cachePool: eT(),
      transitions: null
    };
  }
  function fT(e, t) {
    var n = null;
    return {
      baseLanes: Ae(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function dT(e, t, n, a) {
    if (t !== null) {
      var i = t.memoizedState;
      if (i === null)
        return !1;
    }
    return jm(e, Ml);
  }
  function pT(e, t) {
    return nc(e.childLanes, t);
  }
  function hx(e, t, n) {
    var a = t.pendingProps;
    Nk(t) && (t.flags |= Xe);
    var i = Oa.current, u = !1, p = (t.flags & Xe) !== ye;
    if (p || dT(i, e) ? (u = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (i = Oj(i, Nb)), i = Qo(i), oi(t, i), e === null) {
      sm(t);
      var h = t.memoizedState;
      if (h !== null) {
        var b = h.dehydrated;
        if (b !== null)
          return yT(t, b);
      }
      var C = a.children, R = a.fallback;
      if (u) {
        var _ = mT(t, C, R, n), L = t.child;
        return L.memoizedState = Rh(n), t.memoizedState = wh, _;
      } else
        return jh(t, C);
    } else {
      var H = e.memoizedState;
      if (H !== null) {
        var B = H.dehydrated;
        if (B !== null)
          return bT(e, t, p, a, B, H, n);
      }
      if (u) {
        var K = a.fallback, re = a.children, pe = vT(e, t, re, K, n), fe = t.child, Be = e.child.memoizedState;
        return fe.memoizedState = Be === null ? Rh(n) : fT(Be, n), fe.childLanes = pT(e, n), t.memoizedState = wh, pe;
      } else {
        var Ve = a.children, F = hT(e, t, Ve, n);
        return t.memoizedState = null, F;
      }
    }
  }
  function jh(e, t, n) {
    var a = e.mode, i = {
      mode: "visible",
      children: t
    }, u = Th(i, a);
    return u.return = e, e.child = u, u;
  }
  function mT(e, t, n, a) {
    var i = e.mode, u = e.child, p = {
      mode: "hidden",
      children: t
    }, h, b;
    return (i & He) === ve && u !== null ? (h = u, h.childLanes = q, h.pendingProps = p, e.mode & it && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), b = mi(n, i, a, null)) : (h = Th(p, i), b = mi(n, i, a, null)), h.return = e, b.return = e, h.sibling = b, e.child = h, b;
  }
  function Th(e, t, n) {
    return v0(e, t, q, null);
  }
  function vx(e, t) {
    return oo(e, t);
  }
  function hT(e, t, n, a) {
    var i = e.child, u = i.sibling, p = vx(i, {
      mode: "visible",
      children: n
    });
    if ((t.mode & He) === ve && (p.lanes = a), p.return = t, p.sibling = null, u !== null) {
      var h = t.deletions;
      h === null ? (t.deletions = [u], t.flags |= _i) : h.push(u);
    }
    return t.child = p, p;
  }
  function vT(e, t, n, a, i) {
    var u = t.mode, p = e.child, h = p.sibling, b = {
      mode: "hidden",
      children: n
    }, C;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & He) === ve && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== p
    ) {
      var R = t.child;
      C = R, C.childLanes = q, C.pendingProps = b, t.mode & it && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = p.selfBaseDuration, C.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
    } else
      C = vx(p, b), C.subtreeFlags = p.subtreeFlags & yr;
    var _;
    return h !== null ? _ = oo(h, a) : (_ = mi(a, u, i, null), _.flags |= Lt), _.return = t, C.return = t, C.sibling = _, t.child = C, _;
  }
  function Ef(e, t, n, a) {
    a !== null && lm(a), Ko(t, e.child, null, n);
    var i = t.pendingProps, u = i.children, p = jh(t, u);
    return p.flags |= Lt, t.memoizedState = null, p;
  }
  function gT(e, t, n, a, i) {
    var u = t.mode, p = {
      mode: "visible",
      children: n
    }, h = Th(p, u), b = mi(a, u, i, null);
    return b.flags |= Lt, h.return = t, b.return = t, h.sibling = b, t.child = h, (t.mode & He) !== ve && Ko(t, e.child, null, i), b;
  }
  function yT(e, t, n) {
    return (e.mode & He) === ve ? (c("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Yp(t) ? e.lanes = Fi : e.lanes = Gn, null;
  }
  function bT(e, t, n, a, i, u, p) {
    if (n)
      if (t.flags & hr) {
        t.flags &= ~hr;
        var F = mh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Ef(e, t, p, F);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Xe, null;
        var W = a.children, z = a.fallback, X = gT(e, t, W, z, p), le = t.child;
        return le.memoizedState = Rh(p), t.memoizedState = wh, X;
      }
    else {
      if (oj(), (t.mode & He) === ve)
        return Ef(
          e,
          t,
          p,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Yp(i)) {
        var h, b, C;
        {
          var R = ER(i);
          h = R.digest, b = R.message, C = R.stack;
        }
        var _;
        b ? _ = new Error(b) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var L = mh(_, h, C);
        return Ef(e, t, p, L);
      }
      var H = qn(p, e.childLanes);
      if (Aa || H) {
        var B = Af();
        if (B !== null) {
          var K = DE(B, p);
          if (K !== qt && K !== u.retryLane) {
            u.retryLane = K;
            var re = dt;
            Un(e, K), Bt(B, e, K, re);
          }
        }
        Gh();
        var pe = mh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return Ef(e, t, p, pe);
      } else if (Fy(i)) {
        t.flags |= Xe, t.child = e.child;
        var fe = BD.bind(null, e);
        return CR(i, fe), null;
      } else {
        uj(t, i, u.treeContext);
        var Be = a.children, Ve = jh(t, Be);
        return Ve.flags |= vr, Ve;
      }
    }
  }
  function gx(e, t, n) {
    e.lanes = Ae(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = Ae(a.lanes, t)), ym(e.return, t, n);
  }
  function xT(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === M) {
        var i = a.memoizedState;
        i !== null && gx(a, n, e);
      } else if (a.tag === be)
        gx(a, n, e);
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
  function ST(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      a !== null && ef(a) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function NT(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Sh[e])
      if (Sh[e] = !0, typeof e == "string")
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
  function ET(e, t) {
    e !== void 0 && !Nf[e] && (e !== "collapsed" && e !== "hidden" ? (Nf[e] = !0, c('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Nf[e] = !0, c('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function yx(e, t) {
    {
      var n = Qe(e), a = !n && typeof ur(e) == "function";
      if (n || a) {
        var i = n ? "array" : "iterable";
        return c("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", i, t, i), !1;
      }
    }
    return !0;
  }
  function CT(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Qe(e)) {
        for (var n = 0; n < e.length; n++)
          if (!yx(e[n], n))
            return;
      } else {
        var a = ur(e);
        if (typeof a == "function") {
          var i = a.call(e);
          if (i)
            for (var u = i.next(), p = 0; !u.done; u = i.next()) {
              if (!yx(u.value, p))
                return;
              p++;
            }
        } else
          c('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Dh(e, t, n, a, i) {
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
  function bx(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail, p = a.children;
    NT(i), ET(u, i), CT(p, i), Rn(e, t, p, n);
    var h = Oa.current, b = jm(h, Ml);
    if (b)
      h = Tm(h, Ml), t.flags |= Xe;
    else {
      var C = e !== null && (e.flags & Xe) !== ye;
      C && xT(t, t.child, n), h = Qo(h);
    }
    if (oi(t, h), (t.mode & He) === ve)
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards": {
          var R = ST(t.child), _;
          R === null ? (_ = t.child, t.child = null) : (_ = R.sibling, R.sibling = null), Dh(
            t,
            !1,
            // isBackwards
            _,
            R,
            u
          );
          break;
        }
        case "backwards": {
          var L = null, H = t.child;
          for (t.child = null; H !== null; ) {
            var B = H.alternate;
            if (B !== null && ef(B) === null) {
              t.child = H;
              break;
            }
            var K = H.sibling;
            H.sibling = L, L = H, H = K;
          }
          Dh(
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
          Dh(
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
  function wT(e, t, n) {
    Cm(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? t.child = Ko(t, null, a, n) : Rn(e, t, a, n), t.child;
  }
  var xx = !1;
  function RT(e, t, n) {
    var a = t.type, i = a._context, u = t.pendingProps, p = t.memoizedProps, h = u.value;
    {
      "value" in u || xx || (xx = !0, c("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var b = t.type.propTypes;
      b && Ta(b, u, "prop", "Context.Provider");
    }
    if (db(t, i, h), p !== null) {
      var C = p.value;
      if (Zn(C, h)) {
        if (p.children === u.children && !Oc())
          return Tr(e, t, n);
      } else
        Nj(t, i, n);
    }
    var R = u.children;
    return Rn(e, t, R, n), t.child;
  }
  var Sx = !1;
  function jT(e, t, n) {
    var a = t.type;
    a._context === void 0 ? a !== a.Consumer && (Sx || (Sx = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
    var i = t.pendingProps, u = i.children;
    typeof u != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Go(t, n);
    var p = _t(a);
    Is(t);
    var h;
    return Il.current = t, Wn(!0), h = u(p), Wn(!1), To(), t.flags |= wo, Rn(e, t, h, n), t.child;
  }
  function Wl() {
    Aa = !0;
  }
  function Cf(e, t) {
    (t.mode & He) === ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Lt);
  }
  function Tr(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), qb(), ou(t.lanes), qn(n, t.childLanes) ? (xj(e, t), t.child) : null;
  }
  function TT(e, t, n) {
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
      return u === null ? (a.deletions = [e], a.flags |= _i) : u.push(e), n.flags |= Lt, n;
    }
  }
  function kh(e, t) {
    var n = e.lanes;
    return !!qn(n, t);
  }
  function DT(e, t, n) {
    switch (t.tag) {
      case x:
        px(t), t.stateNode, Yo();
        break;
      case w:
        xb(t);
        break;
      case m: {
        var a = t.type;
        Wa(a) && _c(t);
        break;
      }
      case S:
        Cm(t, t.stateNode.containerInfo);
        break;
      case A: {
        var i = t.memoizedProps.value, u = t.type._context;
        db(t, u, i);
        break;
      }
      case k:
        {
          var p = qn(n, t.childLanes);
          p && (t.flags |= Ie);
          {
            var h = t.stateNode;
            h.effectDuration = 0, h.passiveEffectDuration = 0;
          }
        }
        break;
      case M: {
        var b = t.memoizedState;
        if (b !== null) {
          if (b.dehydrated !== null)
            return oi(t, Qo(Oa.current)), t.flags |= Xe, null;
          var C = t.child, R = C.childLanes;
          if (qn(n, R))
            return hx(e, t, n);
          oi(t, Qo(Oa.current));
          var _ = Tr(e, t, n);
          return _ !== null ? _.sibling : null;
        } else
          oi(t, Qo(Oa.current));
        break;
      }
      case be: {
        var L = (e.flags & Xe) !== ye, H = qn(n, t.childLanes);
        if (L) {
          if (H)
            return bx(e, t, n);
          t.flags |= Xe;
        }
        var B = t.memoizedState;
        if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), oi(t, Oa.current), H)
          break;
        return null;
      }
      case me:
      case Ee:
        return t.lanes = q, cx(e, t, n);
    }
    return Tr(e, t, n);
  }
  function Nx(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return TT(e, t, ov(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var a = e.memoizedProps, i = t.pendingProps;
      if (a !== i || Oc() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Aa = !0;
      else {
        var u = kh(e, n);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & Xe) === ye)
          return Aa = !1, DT(e, t, n);
        (e.flags & Md) !== ye ? Aa = !0 : Aa = !1;
      }
    } else if (Aa = !1, en() && ej(t)) {
      var p = t.index, h = tj();
      qy(t, h, p);
    }
    switch (t.lanes = q, t.tag) {
      case g:
        return cT(e, t, t.type, n);
      case Oe: {
        var b = t.elementType;
        return lT(e, t, b, n);
      }
      case v: {
        var C = t.type, R = t.pendingProps, _ = t.elementType === C ? R : _a(C, R);
        return Nh(e, t, C, _, n);
      }
      case m: {
        var L = t.type, H = t.pendingProps, B = t.elementType === L ? H : _a(L, H);
        return dx(e, t, L, B, n);
      }
      case x:
        return iT(e, t, n);
      case w:
        return oT(e, t, n);
      case j:
        return sT(e, t);
      case M:
        return hx(e, t, n);
      case S:
        return wT(e, t, n);
      case $: {
        var K = t.type, re = t.pendingProps, pe = t.elementType === K ? re : _a(K, re);
        return sx(e, t, K, pe, n);
      }
      case U:
        return nT(e, t, n);
      case O:
        return aT(e, t, n);
      case k:
        return rT(e, t, n);
      case A:
        return RT(e, t, n);
      case P:
        return jT(e, t, n);
      case I: {
        var fe = t.type, Be = t.pendingProps, Ve = _a(fe, Be);
        if (t.type !== t.elementType) {
          var F = fe.propTypes;
          F && Ta(
            F,
            Ve,
            // Resolved for outer only
            "prop",
            Ye(fe)
          );
        }
        return Ve = _a(fe.type, Ve), lx(e, t, fe, Ve, n);
      }
      case Z:
        return ux(e, t, t.type, t.pendingProps, n);
      case ke: {
        var W = t.type, z = t.pendingProps, X = t.elementType === W ? z : _a(W, z);
        return uT(e, t, W, X, n);
      }
      case be:
        return bx(e, t, n);
      case tt:
        break;
      case me:
        return cx(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function as(e) {
    e.flags |= Ie;
  }
  function Ex(e) {
    e.flags |= Yr, e.flags |= Ud;
  }
  var Cx, Oh, wx, Rx;
  Cx = function(e, t, n, a) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === w || i.tag === j)
        Qw(e, i.stateNode);
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
  }, Oh = function(e, t) {
  }, wx = function(e, t, n, a, i) {
    var u = e.memoizedProps;
    if (u !== a) {
      var p = t.stateNode, h = wm(), b = Zw(p, n, u, a, i, h);
      t.updateQueue = b, b && as(t);
    }
  }, Rx = function(e, t, n, a) {
    n !== a && as(t);
  };
  function Gl(e, t) {
    if (!en())
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
  function nn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = q, a = ye;
    if (t) {
      if ((e.mode & it) !== ve) {
        for (var b = e.selfBaseDuration, C = e.child; C !== null; )
          n = Ae(n, Ae(C.lanes, C.childLanes)), a |= C.subtreeFlags & yr, a |= C.flags & yr, b += C.treeBaseDuration, C = C.sibling;
        e.treeBaseDuration = b;
      } else
        for (var R = e.child; R !== null; )
          n = Ae(n, Ae(R.lanes, R.childLanes)), a |= R.subtreeFlags & yr, a |= R.flags & yr, R.return = e, R = R.sibling;
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & it) !== ve) {
        for (var i = e.actualDuration, u = e.selfBaseDuration, p = e.child; p !== null; )
          n = Ae(n, Ae(p.lanes, p.childLanes)), a |= p.subtreeFlags, a |= p.flags, i += p.actualDuration, u += p.treeBaseDuration, p = p.sibling;
        e.actualDuration = i, e.treeBaseDuration = u;
      } else
        for (var h = e.child; h !== null; )
          n = Ae(n, Ae(h.lanes, h.childLanes)), a |= h.subtreeFlags, a |= h.flags, h.return = e, h = h.sibling;
      e.subtreeFlags |= a;
    }
    return e.childLanes = n, t;
  }
  function kT(e, t, n) {
    if (mj() && (t.mode & He) !== ve && (t.flags & Xe) === ye)
      return ab(t), Yo(), t.flags |= hr | Js | wn, !1;
    var a = Vc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (dj(t), nn(t), (t.mode & it) !== ve) {
          var i = n !== null;
          if (i) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Yo(), (t.flags & Xe) === ye && (t.memoizedState = null), t.flags |= Ie, nn(t), (t.mode & it) !== ve) {
          var p = n !== null;
          if (p) {
            var h = t.child;
            h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return rb(), !0;
  }
  function jx(e, t, n) {
    var a = t.pendingProps;
    switch (am(t), t.tag) {
      case g:
      case Oe:
      case Z:
      case v:
      case $:
      case U:
      case O:
      case k:
      case P:
      case I:
        return nn(t), null;
      case m: {
        var i = t.type;
        return Wa(i) && Lc(t), nn(t), null;
      }
      case x: {
        var u = t.stateNode;
        if (qo(t), Zp(t), km(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var p = Vc(t);
          if (p)
            as(t);
          else if (e !== null) {
            var h = e.memoizedState;
            // Check if this is a client root
            (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & hr) !== ye) && (t.flags |= Ai, rb());
          }
        }
        return Oh(e, t), nn(t), null;
      }
      case w: {
        Rm(t);
        var b = bb(), C = t.type;
        if (e !== null && t.stateNode != null)
          wx(e, t, C, a, b), e.ref !== t.ref && Ex(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return nn(t), null;
          }
          var R = wm(), _ = Vc(t);
          if (_)
            cj(t, b, R) && as(t);
          else {
            var L = qw(C, a, b, R, t);
            Cx(L, t, !1, !1), t.stateNode = L, Xw(L, C, a, b) && as(t);
          }
          t.ref !== null && Ex(t);
        }
        return nn(t), null;
      }
      case j: {
        var H = a;
        if (e && t.stateNode != null) {
          var B = e.memoizedProps;
          Rx(e, t, B, H);
        } else {
          if (typeof H != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var K = bb(), re = wm(), pe = Vc(t);
          pe ? fj(t) && as(t) : t.stateNode = eR(H, K, re, t);
        }
        return nn(t), null;
      }
      case M: {
        Xo(t);
        var fe = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Be = kT(e, t, fe);
          if (!Be)
            return t.flags & wn ? t : null;
        }
        if ((t.flags & Xe) !== ye)
          return t.lanes = n, (t.mode & it) !== ve && th(t), t;
        var Ve = fe !== null, F = e !== null && e.memoizedState !== null;
        if (Ve !== F && Ve) {
          var W = t.child;
          if (W.flags |= Pi, (t.mode & He) !== ve) {
            var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fn);
            z || jm(Oa.current, Nb) ? OD() : Gh();
          }
        }
        var X = t.updateQueue;
        if (X !== null && (t.flags |= Ie), nn(t), (t.mode & it) !== ve && Ve) {
          var le = t.child;
          le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
        }
        return null;
      }
      case S:
        return qo(t), Oh(e, t), e === null && KR(t.stateNode.containerInfo), nn(t), null;
      case A:
        var ie = t.type._context;
        return gm(ie, t), nn(t), null;
      case ke: {
        var Se = t.type;
        return Wa(Se) && Lc(t), nn(t), null;
      }
      case be: {
        Xo(t);
        var De = t.memoizedState;
        if (De === null)
          return nn(t), null;
        var st = (t.flags & Xe) !== ye, We = De.rendering;
        if (We === null)
          if (st)
            Gl(De, !1);
          else {
            var Tt = _D() && (e === null || (e.flags & Xe) === ye);
            if (!Tt)
              for (var Ge = t.child; Ge !== null; ) {
                var Ct = ef(Ge);
                if (Ct !== null) {
                  st = !0, t.flags |= Xe, Gl(De, !1);
                  var Sn = Ct.updateQueue;
                  return Sn !== null && (t.updateQueue = Sn, t.flags |= Ie), t.subtreeFlags = ye, Sj(t, n), oi(t, Tm(Oa.current, Ml)), t.child;
                }
                Ge = Ge.sibling;
              }
            De.tail !== null && Wt() > Wx() && (t.flags |= Xe, st = !0, Gl(De, !1), t.lanes = Rg);
          }
        else {
          if (!st) {
            var ln = ef(We);
            if (ln !== null) {
              t.flags |= Xe, st = !0;
              var na = ln.updateQueue;
              if (na !== null && (t.updateQueue = na, t.flags |= Ie), Gl(De, !0), De.tail === null && De.tailMode === "hidden" && !We.alternate && !en())
                return nn(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Wt() * 2 - De.renderingStartTime > Wx() && n !== Gn && (t.flags |= Xe, st = !0, Gl(De, !1), t.lanes = Rg);
          }
          if (De.isBackwards)
            We.sibling = t.child, t.child = We;
          else {
            var Dn = De.last;
            Dn !== null ? Dn.sibling = We : t.child = We, De.last = We;
          }
        }
        if (De.tail !== null) {
          var kn = De.tail;
          De.rendering = kn, De.tail = kn.sibling, De.renderingStartTime = Wt(), kn.sibling = null;
          var Nn = Oa.current;
          return st ? Nn = Tm(Nn, Ml) : Nn = Qo(Nn), oi(t, Nn), kn;
        }
        return nn(t), null;
      }
      case tt:
        break;
      case me:
      case Ee: {
        Wh(t);
        var _r = t.memoizedState, fs = _r !== null;
        if (e !== null) {
          var fu = e.memoizedState, nr = fu !== null;
          nr !== fs && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !Ke && (t.flags |= Pi);
        }
        return !fs || (t.mode & He) === ve ? nn(t) : qn(tr, Gn) && (nn(t), t.subtreeFlags & (Lt | Ie) && (t.flags |= Pi)), null;
      }
      case Ce:
        return null;
      case Ze:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function OT(e, t, n) {
    switch (am(t), t.tag) {
      case m: {
        var a = t.type;
        Wa(a) && Lc(t);
        var i = t.flags;
        return i & wn ? (t.flags = i & ~wn | Xe, (t.mode & it) !== ve && th(t), t) : null;
      }
      case x: {
        t.stateNode, qo(t), Zp(t), km();
        var u = t.flags;
        return (u & wn) !== ye && (u & Xe) === ye ? (t.flags = u & ~wn | Xe, t) : null;
      }
      case w:
        return Rm(t), null;
      case M: {
        Xo(t);
        var p = t.memoizedState;
        if (p !== null && p.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Yo();
        }
        var h = t.flags;
        return h & wn ? (t.flags = h & ~wn | Xe, (t.mode & it) !== ve && th(t), t) : null;
      }
      case be:
        return Xo(t), null;
      case S:
        return qo(t), null;
      case A:
        var b = t.type._context;
        return gm(b, t), null;
      case me:
      case Ee:
        return Wh(t), null;
      case Ce:
        return null;
      default:
        return null;
    }
  }
  function Tx(e, t, n) {
    switch (am(t), t.tag) {
      case m: {
        var a = t.type.childContextTypes;
        a != null && Lc(t);
        break;
      }
      case x: {
        t.stateNode, qo(t), Zp(t), km();
        break;
      }
      case w: {
        Rm(t);
        break;
      }
      case S:
        qo(t);
        break;
      case M:
        Xo(t);
        break;
      case be:
        Xo(t);
        break;
      case A:
        var i = t.type._context;
        gm(i, t);
        break;
      case me:
      case Ee:
        Wh(t);
        break;
    }
  }
  var Dx = null;
  Dx = /* @__PURE__ */ new Set();
  var wf = !1, an = !1, LT = typeof WeakSet == "function" ? WeakSet : Set, ue = null, rs = null, is = null;
  function _T(e) {
    _d(null, function() {
      throw e;
    }), Ad();
  }
  var AT = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & it)
      try {
        Za(), t.componentWillUnmount();
      } finally {
        Xa(e);
      }
    else
      t.componentWillUnmount();
  };
  function kx(e, t) {
    try {
      ui(Vt, e);
    } catch (n) {
      ft(e, t, n);
    }
  }
  function Lh(e, t, n) {
    try {
      AT(e, n);
    } catch (a) {
      ft(e, t, a);
    }
  }
  function PT(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      ft(e, t, a);
    }
  }
  function Ox(e, t) {
    try {
      _x(e);
    } catch (n) {
      ft(e, t, n);
    }
  }
  function os(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (ya && ba && e.mode & it)
            try {
              Za(), a = n(null);
            } finally {
              Xa(e);
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
  function Rf(e, t, n) {
    try {
      n();
    } catch (a) {
      ft(e, t, a);
    }
  }
  var Lx = !1;
  function MT(e, t) {
    Ww(e.containerInfo), ue = t, UT();
    var n = Lx;
    return Lx = !1, n;
  }
  function UT() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      (e.subtreeFlags & Fd) !== ye && t !== null ? (t.return = e, ue = t) : VT();
    }
  }
  function VT() {
    for (; ue !== null; ) {
      var e = ue;
      bt(e);
      try {
        FT(e);
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
  function FT(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Ai) !== ye) {
      switch (bt(e), e.tag) {
        case v:
        case $:
        case Z:
          break;
        case m: {
          if (t !== null) {
            var a = t.memoizedProps, i = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !to && (u.props !== e.memoizedProps && c("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(e) || "instance"), u.state !== e.memoizedState && c("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(e) || "instance"));
            var p = u.getSnapshotBeforeUpdate(e.elementType === e.type ? a : _a(e.type, a), i);
            {
              var h = Dx;
              p === void 0 && !h.has(e.type) && (h.add(e.type), c("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        }
        case x: {
          {
            var b = e.stateNode;
            bR(b.containerInfo);
          }
          break;
        }
        case w:
        case j:
        case S:
        case ke:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Kt();
    }
  }
  function Pa(e, t, n) {
    var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
    if (i !== null) {
      var u = i.next, p = u;
      do {
        if ((p.tag & e) === e) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && ((e & tn) !== Vn ? eE(t) : (e & Vt) !== Vn && Sg(t), (e & Ga) !== Vn && lu(!0), Rf(t, n, h), (e & Ga) !== Vn && lu(!1), (e & tn) !== Vn ? tE() : (e & Vt) !== Vn && Ng());
        }
        p = p.next;
      } while (p !== u);
    }
  }
  function ui(e, t) {
    var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var i = a.next, u = i;
      do {
        if ((u.tag & e) === e) {
          (e & tn) !== Vn ? XN(t) : (e & Vt) !== Vn && nE(t);
          var p = u.create;
          (e & Ga) !== Vn && lu(!0), u.destroy = p(), (e & Ga) !== Vn && lu(!1), (e & tn) !== Vn ? ZN() : (e & Vt) !== Vn && aE();
          {
            var h = u.destroy;
            if (h !== void 0 && typeof h != "function") {
              var b = void 0;
              (u.tag & Vt) !== ye ? b = "useLayoutEffect" : (u.tag & Ga) !== ye ? b = "useInsertionEffect" : b = "useEffect";
              var C = void 0;
              h === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? C = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + h, c("%s must not return anything besides a function, which is used for clean-up.%s", b, C);
            }
          }
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function zT(e, t) {
    if ((t.flags & Ie) !== ye)
      switch (t.tag) {
        case k: {
          var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, i = a.id, u = a.onPostCommit, p = Wb(), h = t.alternate === null ? "mount" : "update";
          Kb() && (h = "nested-update"), typeof u == "function" && u(i, h, n, p);
          var b = t.return;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case x:
                var C = b.stateNode;
                C.passiveEffectDuration += n;
                break e;
              case k:
                var R = b.stateNode;
                R.passiveEffectDuration += n;
                break e;
            }
            b = b.return;
          }
          break;
        }
      }
  }
  function $T(e, t, n, a) {
    if ((n.flags & Bs) !== ye)
      switch (n.tag) {
        case v:
        case $:
        case Z: {
          if (!an)
            if (n.mode & it)
              try {
                Za(), ui(Vt | Ut, n);
              } finally {
                Xa(n);
              }
            else
              ui(Vt | Ut, n);
          break;
        }
        case m: {
          var i = n.stateNode;
          if (n.flags & Ie && !an)
            if (t === null)
              if (n.type === n.elementType && !to && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & it)
                try {
                  Za(), i.componentDidMount();
                } finally {
                  Xa(n);
                }
              else
                i.componentDidMount();
            else {
              var u = n.elementType === n.type ? t.memoizedProps : _a(n.type, t.memoizedProps), p = t.memoizedState;
              if (n.type === n.elementType && !to && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & it)
                try {
                  Za(), i.componentDidUpdate(u, p, i.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  Xa(n);
                }
              else
                i.componentDidUpdate(u, p, i.__reactInternalSnapshotBeforeUpdate);
            }
          var h = n.updateQueue;
          h !== null && (n.type === n.elementType && !to && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), yb(n, h, i));
          break;
        }
        case x: {
          var b = n.updateQueue;
          if (b !== null) {
            var C = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case w:
                  C = n.child.stateNode;
                  break;
                case m:
                  C = n.child.stateNode;
                  break;
              }
            yb(n, b, C);
          }
          break;
        }
        case w: {
          var R = n.stateNode;
          if (t === null && n.flags & Ie) {
            var _ = n.type, L = n.memoizedProps;
            iR(R, _, L);
          }
          break;
        }
        case j:
          break;
        case S:
          break;
        case k: {
          {
            var H = n.memoizedProps, B = H.onCommit, K = H.onRender, re = n.stateNode.effectDuration, pe = Wb(), fe = t === null ? "mount" : "update";
            Kb() && (fe = "nested-update"), typeof K == "function" && K(n.memoizedProps.id, fe, n.actualDuration, n.treeBaseDuration, n.actualStartTime, pe);
            {
              typeof B == "function" && B(n.memoizedProps.id, fe, re, pe), VD(n);
              var Be = n.return;
              e: for (; Be !== null; ) {
                switch (Be.tag) {
                  case x:
                    var Ve = Be.stateNode;
                    Ve.effectDuration += re;
                    break e;
                  case k:
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
        case M: {
          GT(e, n);
          break;
        }
        case be:
        case ke:
        case tt:
        case me:
        case Ee:
        case Ze:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    an || n.flags & Yr && _x(n);
  }
  function HT(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        if (e.mode & it)
          try {
            Za(), kx(e, e.return);
          } finally {
            Xa(e);
          }
        else
          kx(e, e.return);
        break;
      }
      case m: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && PT(e, e.return, t), Ox(e, e.return);
        break;
      }
      case w: {
        Ox(e, e.return);
        break;
      }
    }
  }
  function JT(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === w) {
        if (n === null) {
          n = a;
          try {
            var i = a.stateNode;
            t ? hR(i) : gR(a.stateNode, a.memoizedProps);
          } catch (p) {
            ft(e, e.return, p);
          }
        }
      } else if (a.tag === j) {
        if (n === null)
          try {
            var u = a.stateNode;
            t ? vR(u) : yR(u, a.memoizedProps);
          } catch (p) {
            ft(e, e.return, p);
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
  function _x(e) {
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
            Za(), i = t(a);
          } finally {
            Xa(e);
          }
        else
          i = t(a);
        typeof i == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
      } else
        t.hasOwnProperty("current") || c("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e)), t.current = a;
    }
  }
  function BT(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function Ax(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ax(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === w) {
        var n = e.stateNode;
        n !== null && qR(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function IT(e) {
    for (var t = e.return; t !== null; ) {
      if (Px(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Px(e) {
    return e.tag === w || e.tag === x || e.tag === S;
  }
  function Mx(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Px(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== w && t.tag !== j && t.tag !== he; ) {
        if (t.flags & Lt || t.child === null || t.tag === S)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & Lt))
        return t.stateNode;
    }
  }
  function YT(e) {
    var t = IT(e);
    switch (t.tag) {
      case w: {
        var n = t.stateNode;
        t.flags & Hs && (Vy(n), t.flags &= ~Hs);
        var a = Mx(e);
        Ah(e, a, n);
        break;
      }
      case x:
      case S: {
        var i = t.stateNode.containerInfo, u = Mx(e);
        _h(e, u, i);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function _h(e, t, n) {
    var a = e.tag, i = a === w || a === j;
    if (i) {
      var u = e.stateNode;
      t ? fR(n, u, t) : uR(n, u);
    } else if (a !== S) {
      var p = e.child;
      if (p !== null) {
        _h(p, t, n);
        for (var h = p.sibling; h !== null; )
          _h(h, t, n), h = h.sibling;
      }
    }
  }
  function Ah(e, t, n) {
    var a = e.tag, i = a === w || a === j;
    if (i) {
      var u = e.stateNode;
      t ? cR(n, u, t) : lR(n, u);
    } else if (a !== S) {
      var p = e.child;
      if (p !== null) {
        Ah(p, t, n);
        for (var h = p.sibling; h !== null; )
          Ah(h, t, n), h = h.sibling;
      }
    }
  }
  var rn = null, Ma = !1;
  function KT(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case w: {
            rn = a.stateNode, Ma = !1;
            break e;
          }
          case x: {
            rn = a.stateNode.containerInfo, Ma = !0;
            break e;
          }
          case S: {
            rn = a.stateNode.containerInfo, Ma = !0;
            break e;
          }
        }
        a = a.return;
      }
      if (rn === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      Ux(e, t, n), rn = null, Ma = !1;
    }
    BT(n);
  }
  function ci(e, t, n) {
    for (var a = n.child; a !== null; )
      Ux(e, t, a), a = a.sibling;
  }
  function Ux(e, t, n) {
    switch (WN(n), n.tag) {
      case w:
        an || os(n, t);
      case j: {
        {
          var a = rn, i = Ma;
          rn = null, ci(e, t, n), rn = a, Ma = i, rn !== null && (Ma ? pR(rn, n.stateNode) : dR(rn, n.stateNode));
        }
        return;
      }
      case he: {
        rn !== null && (Ma ? mR(rn, n.stateNode) : Ip(rn, n.stateNode));
        return;
      }
      case S: {
        {
          var u = rn, p = Ma;
          rn = n.stateNode.containerInfo, Ma = !0, ci(e, t, n), rn = u, Ma = p;
        }
        return;
      }
      case v:
      case $:
      case I:
      case Z: {
        if (!an) {
          var h = n.updateQueue;
          if (h !== null) {
            var b = h.lastEffect;
            if (b !== null) {
              var C = b.next, R = C;
              do {
                var _ = R, L = _.destroy, H = _.tag;
                L !== void 0 && ((H & Ga) !== Vn ? Rf(n, t, L) : (H & Vt) !== Vn && (Sg(n), n.mode & it ? (Za(), Rf(n, t, L), Xa(n)) : Rf(n, t, L), Ng())), R = R.next;
              } while (R !== C);
            }
          }
        }
        ci(e, t, n);
        return;
      }
      case m: {
        if (!an) {
          os(n, t);
          var B = n.stateNode;
          typeof B.componentWillUnmount == "function" && Lh(n, t, B);
        }
        ci(e, t, n);
        return;
      }
      case tt: {
        ci(e, t, n);
        return;
      }
      case me: {
        if (
          // TODO: Remove this dead flag
          n.mode & He
        ) {
          var K = an;
          an = K || n.memoizedState !== null, ci(e, t, n), an = K;
        } else
          ci(e, t, n);
        break;
      }
      default: {
        ci(e, t, n);
        return;
      }
    }
  }
  function WT(e) {
    e.memoizedState;
  }
  function GT(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var i = a.memoizedState;
        if (i !== null) {
          var u = i.dehydrated;
          u !== null && _R(u);
        }
      }
    }
  }
  function Vx(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new LT()), t.forEach(function(a) {
        var i = ID.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), Ra)
            if (rs !== null && is !== null)
              su(is, rs);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          a.then(i, i);
        }
      });
    }
  }
  function qT(e, t, n) {
    rs = n, is = e, bt(t), Fx(t, e), bt(t), rs = null, is = null;
  }
  function Ua(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i];
        try {
          KT(e, t, u);
        } catch (b) {
          ft(u, t, b);
        }
      }
    var p = Pu();
    if (t.subtreeFlags & zd)
      for (var h = t.child; h !== null; )
        bt(h), Fx(h, e), h = h.sibling;
    bt(p);
  }
  function Fx(e, t, n) {
    var a = e.alternate, i = e.flags;
    switch (e.tag) {
      case v:
      case $:
      case I:
      case Z: {
        if (Ua(t, e), er(e), i & Ie) {
          try {
            Pa(Ga | Ut, e, e.return), ui(Ga | Ut, e);
          } catch (Se) {
            ft(e, e.return, Se);
          }
          if (e.mode & it) {
            try {
              Za(), Pa(Vt | Ut, e, e.return);
            } catch (Se) {
              ft(e, e.return, Se);
            }
            Xa(e);
          } else
            try {
              Pa(Vt | Ut, e, e.return);
            } catch (Se) {
              ft(e, e.return, Se);
            }
        }
        return;
      }
      case m: {
        Ua(t, e), er(e), i & Yr && a !== null && os(a, a.return);
        return;
      }
      case w: {
        Ua(t, e), er(e), i & Yr && a !== null && os(a, a.return);
        {
          if (e.flags & Hs) {
            var u = e.stateNode;
            try {
              Vy(u);
            } catch (Se) {
              ft(e, e.return, Se);
            }
          }
          if (i & Ie) {
            var p = e.stateNode;
            if (p != null) {
              var h = e.memoizedProps, b = a !== null ? a.memoizedProps : h, C = e.type, R = e.updateQueue;
              if (e.updateQueue = null, R !== null)
                try {
                  oR(p, R, C, b, h, e);
                } catch (Se) {
                  ft(e, e.return, Se);
                }
            }
          }
        }
        return;
      }
      case j: {
        if (Ua(t, e), er(e), i & Ie) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var _ = e.stateNode, L = e.memoizedProps, H = a !== null ? a.memoizedProps : L;
          try {
            sR(_, H, L);
          } catch (Se) {
            ft(e, e.return, Se);
          }
        }
        return;
      }
      case x: {
        if (Ua(t, e), er(e), i & Ie && a !== null) {
          var B = a.memoizedState;
          if (B.isDehydrated)
            try {
              LR(t.containerInfo);
            } catch (Se) {
              ft(e, e.return, Se);
            }
        }
        return;
      }
      case S: {
        Ua(t, e), er(e);
        return;
      }
      case M: {
        Ua(t, e), er(e);
        var K = e.child;
        if (K.flags & Pi) {
          var re = K.stateNode, pe = K.memoizedState, fe = pe !== null;
          if (re.isHidden = fe, fe) {
            var Be = K.alternate !== null && K.alternate.memoizedState !== null;
            Be || kD();
          }
        }
        if (i & Ie) {
          try {
            WT(e);
          } catch (Se) {
            ft(e, e.return, Se);
          }
          Vx(e);
        }
        return;
      }
      case me: {
        var Ve = a !== null && a.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & He
        ) {
          var F = an;
          an = F || Ve, Ua(t, e), an = F;
        } else
          Ua(t, e);
        if (er(e), i & Pi) {
          var W = e.stateNode, z = e.memoizedState, X = z !== null, le = e;
          if (W.isHidden = X, X && !Ve && (le.mode & He) !== ve) {
            ue = le;
            for (var ie = le.child; ie !== null; )
              ue = ie, XT(ie), ie = ie.sibling;
          }
          JT(le, X);
        }
        return;
      }
      case be: {
        Ua(t, e), er(e), i & Ie && Vx(e);
        return;
      }
      case tt:
        return;
      default: {
        Ua(t, e), er(e);
        return;
      }
    }
  }
  function er(e) {
    var t = e.flags;
    if (t & Lt) {
      try {
        YT(e);
      } catch (n) {
        ft(e, e.return, n);
      }
      e.flags &= ~Lt;
    }
    t & vr && (e.flags &= ~vr);
  }
  function QT(e, t, n) {
    rs = n, is = t, ue = e, zx(e, t, n), rs = null, is = null;
  }
  function zx(e, t, n) {
    for (var a = (e.mode & He) !== ve; ue !== null; ) {
      var i = ue, u = i.child;
      if (i.tag === me && a) {
        var p = i.memoizedState !== null, h = p || wf;
        if (h) {
          Ph(e, t, n);
          continue;
        } else {
          var b = i.alternate, C = b !== null && b.memoizedState !== null, R = C || an, _ = wf, L = an;
          wf = h, an = R, an && !L && (ue = i, ZT(i));
          for (var H = u; H !== null; )
            ue = H, zx(
              H,
              // New root; bubble back up to here and stop.
              t,
              n
            ), H = H.sibling;
          ue = i, wf = _, an = L, Ph(e, t, n);
          continue;
        }
      }
      (i.subtreeFlags & Bs) !== ye && u !== null ? (u.return = i, ue = u) : Ph(e, t, n);
    }
  }
  function Ph(e, t, n) {
    for (; ue !== null; ) {
      var a = ue;
      if ((a.flags & Bs) !== ye) {
        var i = a.alternate;
        bt(a);
        try {
          $T(t, i, a, n);
        } catch (p) {
          ft(a, a.return, p);
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
  function XT(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      switch (t.tag) {
        case v:
        case $:
        case I:
        case Z: {
          if (t.mode & it)
            try {
              Za(), Pa(Vt, t, t.return);
            } finally {
              Xa(t);
            }
          else
            Pa(Vt, t, t.return);
          break;
        }
        case m: {
          os(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Lh(t, t.return, a);
          break;
        }
        case w: {
          os(t, t.return);
          break;
        }
        case me: {
          var i = t.memoizedState !== null;
          if (i) {
            $x(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, ue = n) : $x(e);
    }
  }
  function $x(e) {
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
  function ZT(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      if (t.tag === me) {
        var a = t.memoizedState !== null;
        if (a) {
          Hx(e);
          continue;
        }
      }
      n !== null ? (n.return = t, ue = n) : Hx(e);
    }
  }
  function Hx(e) {
    for (; ue !== null; ) {
      var t = ue;
      bt(t);
      try {
        HT(t);
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
  function eD(e, t, n, a) {
    ue = t, tD(t, e, n, a);
  }
  function tD(e, t, n, a) {
    for (; ue !== null; ) {
      var i = ue, u = i.child;
      (i.subtreeFlags & Ro) !== ye && u !== null ? (u.return = i, ue = u) : nD(e, t, n, a);
    }
  }
  function nD(e, t, n, a) {
    for (; ue !== null; ) {
      var i = ue;
      if ((i.flags & wa) !== ye) {
        bt(i);
        try {
          aD(t, i, n, a);
        } catch (p) {
          ft(i, i.return, p);
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
  function aD(e, t, n, a) {
    switch (t.tag) {
      case v:
      case $:
      case Z: {
        if (t.mode & it) {
          eh();
          try {
            ui(tn | Ut, t);
          } finally {
            Zm(t);
          }
        } else
          ui(tn | Ut, t);
        break;
      }
    }
  }
  function rD(e) {
    ue = e, iD();
  }
  function iD() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      if ((ue.flags & _i) !== ye) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var i = n[a];
            ue = i, lD(i, e);
          }
          {
            var u = e.alternate;
            if (u !== null) {
              var p = u.child;
              if (p !== null) {
                u.child = null;
                do {
                  var h = p.sibling;
                  p.sibling = null, p = h;
                } while (p !== null);
              }
            }
          }
          ue = e;
        }
      }
      (e.subtreeFlags & Ro) !== ye && t !== null ? (t.return = e, ue = t) : oD();
    }
  }
  function oD() {
    for (; ue !== null; ) {
      var e = ue;
      (e.flags & wa) !== ye && (bt(e), sD(e), Kt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function sD(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        e.mode & it ? (eh(), Pa(tn | Ut, e, e.return), Zm(e)) : Pa(tn | Ut, e, e.return);
        break;
      }
    }
  }
  function lD(e, t) {
    for (; ue !== null; ) {
      var n = ue;
      bt(n), cD(n, t), Kt();
      var a = n.child;
      a !== null ? (a.return = n, ue = a) : uD(e);
    }
  }
  function uD(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.sibling, a = t.return;
      if (Ax(t), t === e) {
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
  function cD(e, t) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        e.mode & it ? (eh(), Pa(tn, e, t), Zm(e)) : Pa(tn, e, t);
        break;
      }
    }
  }
  function fD(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        try {
          ui(Vt | Ut, e);
        } catch (n) {
          ft(e, e.return, n);
        }
        break;
      }
      case m: {
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
  function dD(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        try {
          ui(tn | Ut, e);
        } catch (t) {
          ft(e, e.return, t);
        }
        break;
      }
    }
  }
  function pD(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z: {
        try {
          Pa(Vt | Ut, e, e.return);
        } catch (n) {
          ft(e, e.return, n);
        }
        break;
      }
      case m: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Lh(e, e.return, t);
        break;
      }
    }
  }
  function mD(e) {
    switch (e.tag) {
      case v:
      case $:
      case Z:
        try {
          Pa(tn | Ut, e, e.return);
        } catch (t) {
          ft(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var ql = Symbol.for;
    ql("selector.component"), ql("selector.has_pseudo_class"), ql("selector.role"), ql("selector.test_id"), ql("selector.text");
  }
  var hD = [];
  function vD() {
    hD.forEach(function(e) {
      return e();
    });
  }
  var gD = s.ReactCurrentActQueue;
  function yD(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function Jx() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && gD.current !== null && c("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var bD = Math.ceil, Mh = s.ReactCurrentDispatcher, Uh = s.ReactCurrentOwner, on = s.ReactCurrentBatchConfig, Va = s.ReactCurrentActQueue, $t = (
    /*             */
    0
  ), Bx = (
    /*               */
    1
  ), sn = (
    /*                */
    2
  ), va = (
    /*                */
    4
  ), Dr = 0, Ql = 1, no = 2, jf = 3, Xl = 4, Ix = 5, Vh = 6, Je = $t, jn = null, xt = null, Ht = q, tr = q, Fh = ei(q), Jt = Dr, Zl = null, Tf = q, eu = q, Df = q, tu = null, Fn = null, zh = 0, Yx = 500, Kx = 1 / 0, xD = 500, kr = null;
  function nu() {
    Kx = Wt() + xD;
  }
  function Wx() {
    return Kx;
  }
  var kf = !1, $h = null, ss = null, ao = !1, fi = null, au = q, Hh = [], Jh = null, SD = 50, ru = 0, Bh = null, Ih = !1, Of = !1, ND = 50, ls = 0, Lf = null, iu = dt, _f = q, Gx = !1;
  function Af() {
    return jn;
  }
  function Tn() {
    return (Je & (sn | va)) !== $t ? Wt() : (iu !== dt || (iu = Wt()), iu);
  }
  function di(e) {
    var t = e.mode;
    if ((t & He) === ve)
      return je;
    if ((Je & sn) !== $t && Ht !== q)
      return Qs(Ht);
    var n = gj() !== vj;
    if (n) {
      if (on.transition !== null) {
        var a = on.transition;
        a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
      }
      return _f === qt && (_f = kg()), _f;
    }
    var i = ja();
    if (i !== qt)
      return i;
    var u = tR();
    return u;
  }
  function ED(e) {
    var t = e.mode;
    return (t & He) === ve ? je : wE();
  }
  function Bt(e, t, n, a) {
    KD(), Gx && c("useInsertionEffect must not schedule updates."), Ih && (Of = !0), Xs(e, n, a), (Je & sn) !== q && e === jn ? qD(t) : (Ra && _g(e, t, n), QD(t), e === jn && ((Je & sn) === $t && (eu = Ae(eu, n)), Jt === Xl && pi(e, Ht)), zn(e, a), n === je && Je === $t && (t.mode & He) === ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Va.isBatchingLegacy && (nu(), Gy()));
  }
  function CD(e, t, n) {
    var a = e.current;
    a.lanes = t, Xs(e, t, n), zn(e, n);
  }
  function wD(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Je & sn) !== $t
    );
  }
  function zn(e, t) {
    var n = e.callbackNode;
    bE(e, t);
    var a = ec(e, e === jn ? Ht : q);
    if (a === q) {
      n !== null && f0(n), e.callbackNode = null, e.callbackPriority = qt;
      return;
    }
    var i = $i(a), u = e.callbackPriority;
    if (u === i && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Va.current !== null && n !== Xh)) {
      n == null && u !== je && c("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && f0(n);
    var p;
    if (i === je)
      e.tag === ti ? (Va.isBatchingLegacy !== null && (Va.didScheduleLegacyUpdate = !0), ZR(Xx.bind(null, e))) : Wy(Xx.bind(null, e)), Va.current !== null ? Va.current.push(ni) : aR(function() {
        (Je & (sn | va)) === $t && ni();
      }), p = null;
    else {
      var h;
      switch (Mg(a)) {
        case Qn:
          h = qu;
          break;
        case xr:
          h = $d;
          break;
        case Sr:
          h = Vi;
          break;
        case ac:
          h = Hd;
          break;
        default:
          h = Vi;
          break;
      }
      p = Zh(h, qx.bind(null, e));
    }
    e.callbackPriority = i, e.callbackNode = p;
  }
  function qx(e, t) {
    if (Jj(), iu = dt, _f = q, (Je & (sn | va)) !== $t)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, a = Lr();
    if (a && e.callbackNode !== n)
      return null;
    var i = ec(e, e === jn ? Ht : q);
    if (i === q)
      return null;
    var u = !tc(e, i) && !CE(e, i) && !t, p = u ? PD(e, i) : Mf(e, i);
    if (p !== Dr) {
      if (p === no) {
        var h = cp(e);
        h !== q && (i = h, p = Yh(e, h));
      }
      if (p === Ql) {
        var b = Zl;
        throw ro(e, q), pi(e, i), zn(e, Wt()), b;
      }
      if (p === Vh)
        pi(e, i);
      else {
        var C = !tc(e, i), R = e.current.alternate;
        if (C && !jD(R)) {
          if (p = Mf(e, i), p === no) {
            var _ = cp(e);
            _ !== q && (i = _, p = Yh(e, _));
          }
          if (p === Ql) {
            var L = Zl;
            throw ro(e, q), pi(e, i), zn(e, Wt()), L;
          }
        }
        e.finishedWork = R, e.finishedLanes = i, RD(e, p, i);
      }
    }
    return zn(e, Wt()), e.callbackNode === n ? qx.bind(null, e) : null;
  }
  function Yh(e, t) {
    var n = tu;
    if (rc(e)) {
      var a = ro(e, t);
      a.flags |= hr, YR(e.containerInfo);
    }
    var i = Mf(e, t);
    if (i !== no) {
      var u = Fn;
      Fn = n, u !== null && Qx(u);
    }
    return i;
  }
  function Qx(e) {
    Fn === null ? Fn = e : Fn.push.apply(Fn, e);
  }
  function RD(e, t, n) {
    switch (t) {
      case Dr:
      case Ql:
        throw new Error("Root did not complete. This is a bug in React.");
      case no: {
        io(e, Fn, kr);
        break;
      }
      case jf: {
        if (pi(e, n), Tg(n) && // do not delay if we're inside an act() scope
        !d0()) {
          var a = zh + Yx - Wt();
          if (a > 10) {
            var i = ec(e, q);
            if (i !== q)
              break;
            var u = e.suspendedLanes;
            if (!Lo(u, n)) {
              Tn(), Lg(e, u);
              break;
            }
            e.timeoutHandle = Jp(io.bind(null, e, Fn, kr), a);
            break;
          }
        }
        io(e, Fn, kr);
        break;
      }
      case Xl: {
        if (pi(e, n), EE(n))
          break;
        if (!d0()) {
          var p = gE(e, n), h = p, b = Wt() - h, C = YD(b) - b;
          if (C > 10) {
            e.timeoutHandle = Jp(io.bind(null, e, Fn, kr), C);
            break;
          }
        }
        io(e, Fn, kr);
        break;
      }
      case Ix: {
        io(e, Fn, kr);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function jD(e) {
    for (var t = e; ; ) {
      if (t.flags & Wu) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var i = 0; i < a.length; i++) {
              var u = a[i], p = u.getSnapshot, h = u.value;
              try {
                if (!Zn(p(), h))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var b = t.child;
      if (t.subtreeFlags & Wu && b !== null) {
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
  function pi(e, t) {
    t = nc(t, Df), t = nc(t, eu), jE(e, t);
  }
  function Xx(e) {
    if (Bj(), (Je & (sn | va)) !== $t)
      throw new Error("Should not already be working.");
    Lr();
    var t = ec(e, q);
    if (!qn(t, je))
      return zn(e, Wt()), null;
    var n = Mf(e, t);
    if (e.tag !== ti && n === no) {
      var a = cp(e);
      a !== q && (t = a, n = Yh(e, a));
    }
    if (n === Ql) {
      var i = Zl;
      throw ro(e, q), pi(e, t), zn(e, Wt()), i;
    }
    if (n === Vh)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, io(e, Fn, kr), zn(e, Wt()), null;
  }
  function TD(e, t) {
    t !== q && (mp(e, Ae(t, je)), zn(e, Wt()), (Je & (sn | va)) === $t && (nu(), ni()));
  }
  function Kh(e, t) {
    var n = Je;
    Je |= Bx;
    try {
      return e(t);
    } finally {
      Je = n, Je === $t && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Va.isBatchingLegacy && (nu(), Gy());
    }
  }
  function DD(e, t, n, a, i) {
    var u = ja(), p = on.transition;
    try {
      return on.transition = null, Qt(Qn), e(t, n, a, i);
    } finally {
      Qt(u), on.transition = p, Je === $t && nu();
    }
  }
  function Or(e) {
    fi !== null && fi.tag === ti && (Je & (sn | va)) === $t && Lr();
    var t = Je;
    Je |= Bx;
    var n = on.transition, a = ja();
    try {
      return on.transition = null, Qt(Qn), e ? e() : void 0;
    } finally {
      Qt(a), on.transition = n, Je = t, (Je & (sn | va)) === $t && ni();
    }
  }
  function Zx() {
    return (Je & (sn | va)) !== $t;
  }
  function Pf(e, t) {
    bn(Fh, tr, e), tr = Ae(tr, t);
  }
  function Wh(e) {
    tr = Fh.current, yn(Fh, e);
  }
  function ro(e, t) {
    e.finishedWork = null, e.finishedLanes = q;
    var n = e.timeoutHandle;
    if (n !== Bp && (e.timeoutHandle = Bp, nR(n)), xt !== null)
      for (var a = xt.return; a !== null; ) {
        var i = a.alternate;
        Tx(i, a), a = a.return;
      }
    jn = e;
    var u = oo(e.current, null);
    return xt = u, Ht = tr = t, Jt = Dr, Zl = null, Tf = q, eu = q, Df = q, tu = null, Fn = null, Cj(), ka.discardPendingWarnings(), u;
  }
  function e0(e, t) {
    do {
      var n = xt;
      try {
        if (Bc(), Cb(), Kt(), Uh.current = null, n === null || n.return === null) {
          Jt = Ql, Zl = t, xt = null;
          return;
        }
        if (ya && n.mode & it && xf(n, !0), za)
          if (To(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var a = t;
            iE(n, a, Ht);
          } else
            rE(n, t, Ht);
        Zj(e, n.return, n, t, Ht), r0(n);
      } catch (i) {
        t = i, xt === n && n !== null ? (n = n.return, xt = n) : n = xt;
        continue;
      }
      return;
    } while (!0);
  }
  function t0() {
    var e = Mh.current;
    return Mh.current = hf, e === null ? hf : e;
  }
  function n0(e) {
    Mh.current = e;
  }
  function kD() {
    zh = Wt();
  }
  function ou(e) {
    Tf = Ae(e, Tf);
  }
  function OD() {
    Jt === Dr && (Jt = jf);
  }
  function Gh() {
    (Jt === Dr || Jt === jf || Jt === no) && (Jt = Xl), jn !== null && (fp(Tf) || fp(eu)) && pi(jn, Ht);
  }
  function LD(e) {
    Jt !== Xl && (Jt = no), tu === null ? tu = [e] : tu.push(e);
  }
  function _D() {
    return Jt === Dr;
  }
  function Mf(e, t) {
    var n = Je;
    Je |= sn;
    var a = t0();
    if (jn !== e || Ht !== t) {
      if (Ra) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (su(e, Ht), i.clear()), Ag(e, t);
      }
      kr = Pg(), ro(e, t);
    }
    Eg(t);
    do
      try {
        AD();
        break;
      } catch (u) {
        e0(e, u);
      }
    while (!0);
    if (Bc(), Je = n, n0(a), xt !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return Cg(), jn = null, Ht = q, Jt;
  }
  function AD() {
    for (; xt !== null; )
      a0(xt);
  }
  function PD(e, t) {
    var n = Je;
    Je |= sn;
    var a = t0();
    if (jn !== e || Ht !== t) {
      if (Ra) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (su(e, Ht), i.clear()), Ag(e, t);
      }
      kr = Pg(), nu(), ro(e, t);
    }
    Eg(t);
    do
      try {
        MD();
        break;
      } catch (u) {
        e0(e, u);
      }
    while (!0);
    return Bc(), n0(a), Je = n, xt !== null ? (cE(), Dr) : (Cg(), jn = null, Ht = q, Jt);
  }
  function MD() {
    for (; xt !== null && !VN(); )
      a0(xt);
  }
  function a0(e) {
    var t = e.alternate;
    bt(e);
    var n;
    (e.mode & it) !== ve ? (Xm(e), n = qh(t, e, tr), xf(e, !0)) : n = qh(t, e, tr), Kt(), e.memoizedProps = e.pendingProps, n === null ? r0(e) : xt = n, Uh.current = null;
  }
  function r0(e) {
    var t = e;
    do {
      var n = t.alternate, a = t.return;
      if ((t.flags & Js) === ye) {
        bt(t);
        var i = void 0;
        if ((t.mode & it) === ve ? i = jx(n, t, tr) : (Xm(t), i = jx(n, t, tr), xf(t, !1)), Kt(), i !== null) {
          xt = i;
          return;
        }
      } else {
        var u = OT(n, t);
        if (u !== null) {
          u.flags &= LN, xt = u;
          return;
        }
        if ((t.mode & it) !== ve) {
          xf(t, !1);
          for (var p = t.actualDuration, h = t.child; h !== null; )
            p += h.actualDuration, h = h.sibling;
          t.actualDuration = p;
        }
        if (a !== null)
          a.flags |= Js, a.subtreeFlags = ye, a.deletions = null;
        else {
          Jt = Vh, xt = null;
          return;
        }
      }
      var b = t.sibling;
      if (b !== null) {
        xt = b;
        return;
      }
      t = a, xt = t;
    } while (t !== null);
    Jt === Dr && (Jt = Ix);
  }
  function io(e, t, n) {
    var a = ja(), i = on.transition;
    try {
      on.transition = null, Qt(Qn), UD(e, t, n, a);
    } finally {
      on.transition = i, Qt(a);
    }
    return null;
  }
  function UD(e, t, n, a) {
    do
      Lr();
    while (fi !== null);
    if (WD(), (Je & (sn | va)) !== $t)
      throw new Error("Should not already be working.");
    var i = e.finishedWork, u = e.finishedLanes;
    if (QN(u), i === null)
      return xg(), null;
    if (u === q && c("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, i === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = qt;
    var p = Ae(i.lanes, i.childLanes);
    TE(e, p), e === jn && (jn = null, xt = null, Ht = q), ((i.subtreeFlags & Ro) !== ye || (i.flags & Ro) !== ye) && (ao || (ao = !0, Jh = n, Zh(Vi, function() {
      return Lr(), null;
    })));
    var h = (i.subtreeFlags & (Fd | zd | Bs | Ro)) !== ye, b = (i.flags & (Fd | zd | Bs | Ro)) !== ye;
    if (h || b) {
      var C = on.transition;
      on.transition = null;
      var R = ja();
      Qt(Qn);
      var _ = Je;
      Je |= va, Uh.current = null, MT(e, i), Gb(), qT(e, i, u), Gw(e.containerInfo), e.current = i, oE(u), QT(i, e, u), sE(), FN(), Je = _, Qt(R), on.transition = C;
    } else
      e.current = i, Gb();
    var L = ao;
    if (ao ? (ao = !1, fi = e, au = u) : (ls = 0, Lf = null), p = e.pendingLanes, p === q && (ss = null), L || l0(e.current, !1), YN(i.stateNode, a), Ra && e.memoizedUpdaters.clear(), vD(), zn(e, Wt()), t !== null)
      for (var H = e.onRecoverableError, B = 0; B < t.length; B++) {
        var K = t[B], re = K.stack, pe = K.digest;
        H(K.value, {
          componentStack: re,
          digest: pe
        });
      }
    if (kf) {
      kf = !1;
      var fe = $h;
      throw $h = null, fe;
    }
    return qn(au, je) && e.tag !== ti && Lr(), p = e.pendingLanes, qn(p, je) ? (Hj(), e === Bh ? ru++ : (ru = 0, Bh = e)) : ru = 0, ni(), xg(), null;
  }
  function Lr() {
    if (fi !== null) {
      var e = Mg(au), t = LE(Sr, e), n = on.transition, a = ja();
      try {
        return on.transition = null, Qt(t), FD();
      } finally {
        Qt(a), on.transition = n;
      }
    }
    return !1;
  }
  function VD(e) {
    Hh.push(e), ao || (ao = !0, Zh(Vi, function() {
      return Lr(), null;
    }));
  }
  function FD() {
    if (fi === null)
      return !1;
    var e = Jh;
    Jh = null;
    var t = fi, n = au;
    if (fi = null, au = q, (Je & (sn | va)) !== $t)
      throw new Error("Cannot flush passive effects while already rendering.");
    Ih = !0, Of = !1, lE(n);
    var a = Je;
    Je |= va, rD(t.current), eD(t, t.current, n, e);
    {
      var i = Hh;
      Hh = [];
      for (var u = 0; u < i.length; u++) {
        var p = i[u];
        zT(t, p);
      }
    }
    uE(), l0(t.current, !0), Je = a, ni(), Of ? t === Lf ? ls++ : (ls = 0, Lf = t) : ls = 0, Ih = !1, Of = !1, KN(t);
    {
      var h = t.current.stateNode;
      h.effectDuration = 0, h.passiveEffectDuration = 0;
    }
    return !0;
  }
  function i0(e) {
    return ss !== null && ss.has(e);
  }
  function zD(e) {
    ss === null ? ss = /* @__PURE__ */ new Set([e]) : ss.add(e);
  }
  function $D(e) {
    kf || (kf = !0, $h = e);
  }
  var HD = $D;
  function o0(e, t, n) {
    var a = eo(n, t), i = ax(e, a, je), u = ri(e, i, je), p = Tn();
    u !== null && (Xs(u, je, p), zn(u, p));
  }
  function ft(e, t, n) {
    if (_T(n), lu(!1), e.tag === x) {
      o0(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === x) {
        o0(a, e, n);
        return;
      } else if (a.tag === m) {
        var i = a.type, u = a.stateNode;
        if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !i0(u)) {
          var p = eo(n, e), h = vh(a, p, je), b = ri(a, h, je), C = Tn();
          b !== null && (Xs(b, je, C), zn(b, C));
          return;
        }
      }
      a = a.return;
    }
    c(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function JD(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var i = Tn();
    Lg(e, n), XD(e), jn === e && Lo(Ht, n) && (Jt === Xl || Jt === jf && Tg(Ht) && Wt() - zh < Yx ? ro(e, q) : Df = Ae(Df, n)), zn(e, i);
  }
  function s0(e, t) {
    t === qt && (t = ED(e));
    var n = Tn(), a = Un(e, t);
    a !== null && (Xs(a, t, n), zn(a, n));
  }
  function BD(e) {
    var t = e.memoizedState, n = qt;
    t !== null && (n = t.retryLane), s0(e, n);
  }
  function ID(e, t) {
    var n = qt, a;
    switch (e.tag) {
      case M:
        a = e.stateNode;
        var i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case be:
        a = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    a !== null && a.delete(t), s0(e, n);
  }
  function YD(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bD(e / 1960) * 1960;
  }
  function KD() {
    if (ru > SD)
      throw ru = 0, Bh = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    ls > ND && (ls = 0, Lf = null, c("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function WD() {
    ka.flushLegacyContextWarning(), ka.flushPendingUnsafeLifecycleWarnings();
  }
  function l0(e, t) {
    bt(e), Uf(e, gr, pD), t && Uf(e, Gu, mD), Uf(e, gr, fD), t && Uf(e, Gu, dD), Kt();
  }
  function Uf(e, t, n) {
    for (var a = e, i = null; a !== null; ) {
      var u = a.subtreeFlags & t;
      a !== i && a.child !== null && u !== ye ? a = a.child : ((a.flags & t) !== ye && n(a), a.sibling !== null ? a = a.sibling : a = i = a.return);
    }
  }
  var Vf = null;
  function u0(e) {
    {
      if ((Je & sn) !== $t || !(e.mode & He))
        return;
      var t = e.tag;
      if (t !== g && t !== x && t !== m && t !== v && t !== $ && t !== I && t !== Z)
        return;
      var n = Le(e) || "ReactComponent";
      if (Vf !== null) {
        if (Vf.has(n))
          return;
        Vf.add(n);
      } else
        Vf = /* @__PURE__ */ new Set([n]);
      var a = vn;
      try {
        bt(e), c("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        a ? bt(e) : Kt();
      }
    }
  }
  var qh;
  {
    var GD = null;
    qh = function(e, t, n) {
      var a = g0(GD, t);
      try {
        return Nx(e, t, n);
      } catch (u) {
        if (sj() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (Bc(), Cb(), Tx(e, t), g0(t, a), t.mode & it && Xm(t), _d(null, Nx, null, e, t, n), TN()) {
          var i = Ad();
          typeof i == "object" && i !== null && i._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var c0 = !1, Qh;
  Qh = /* @__PURE__ */ new Set();
  function qD(e) {
    if (ki && !Fj())
      switch (e.tag) {
        case v:
        case $:
        case Z: {
          var t = xt && Le(xt) || "Unknown", n = t;
          if (!Qh.has(n)) {
            Qh.add(n);
            var a = Le(e) || "Unknown";
            c("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
          }
          break;
        }
        case m: {
          c0 || (c("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), c0 = !0);
          break;
        }
      }
  }
  function su(e, t) {
    if (Ra) {
      var n = e.memoizedUpdaters;
      n.forEach(function(a) {
        _g(e, a, t);
      });
    }
  }
  var Xh = {};
  function Zh(e, t) {
    {
      var n = Va.current;
      return n !== null ? (n.push(t), Xh) : bg(e, t);
    }
  }
  function f0(e) {
    if (e !== Xh)
      return UN(e);
  }
  function d0() {
    return Va.current !== null;
  }
  function QD(e) {
    {
      if (e.mode & He) {
        if (!Jx())
          return;
      } else if (!yD() || Je !== $t || e.tag !== v && e.tag !== $ && e.tag !== Z)
        return;
      if (Va.current === null) {
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
  function XD(e) {
    e.tag !== ti && Jx() && Va.current === null && c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function lu(e) {
    Gx = e;
  }
  var ga = null, us = null, ZD = function(e) {
    ga = e;
  };
  function cs(e) {
    {
      if (ga === null)
        return e;
      var t = ga(e);
      return t === void 0 ? e : t.current;
    }
  }
  function ev(e) {
    return cs(e);
  }
  function tv(e) {
    {
      if (ga === null)
        return e;
      var t = ga(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = cs(e.render);
          if (e.render !== n) {
            var a = {
              $$typeof: Ne,
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
  function p0(e, t) {
    {
      if (ga === null)
        return !1;
      var n = e.elementType, a = t.type, i = !1, u = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case m: {
          typeof a == "function" && (i = !0);
          break;
        }
        case v: {
          (typeof a == "function" || u === Ue) && (i = !0);
          break;
        }
        case $: {
          (u === Ne || u === Ue) && (i = !0);
          break;
        }
        case I:
        case Z: {
          (u === yt || u === Ue) && (i = !0);
          break;
        }
        default:
          return !1;
      }
      if (i) {
        var p = ga(n);
        if (p !== void 0 && p === ga(a))
          return !0;
      }
      return !1;
    }
  }
  function m0(e) {
    {
      if (ga === null || typeof WeakSet != "function")
        return;
      us === null && (us = /* @__PURE__ */ new WeakSet()), us.add(e);
    }
  }
  var ek = function(e, t) {
    {
      if (ga === null)
        return;
      var n = t.staleFamilies, a = t.updatedFamilies;
      Lr(), Or(function() {
        nv(e.current, a, n);
      });
    }
  }, tk = function(e, t) {
    {
      if (e.context !== ea)
        return;
      Lr(), Or(function() {
        uu(t, e, null, null);
      });
    }
  };
  function nv(e, t, n) {
    {
      var a = e.alternate, i = e.child, u = e.sibling, p = e.tag, h = e.type, b = null;
      switch (p) {
        case v:
        case Z:
        case m:
          b = h;
          break;
        case $:
          b = h.render;
          break;
      }
      if (ga === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var C = !1, R = !1;
      if (b !== null) {
        var _ = ga(b);
        _ !== void 0 && (n.has(_) ? R = !0 : t.has(_) && (p === m ? R = !0 : C = !0));
      }
      if (us !== null && (us.has(e) || a !== null && us.has(a)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
        var L = Un(e, je);
        L !== null && Bt(L, e, je, dt);
      }
      i !== null && !R && nv(i, t, n), u !== null && nv(u, t, n);
    }
  }
  var nk = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function(i) {
        return i.current;
      }));
      return av(e.current, a, n), n;
    }
  };
  function av(e, t, n) {
    {
      var a = e.child, i = e.sibling, u = e.tag, p = e.type, h = null;
      switch (u) {
        case v:
        case Z:
        case m:
          h = p;
          break;
        case $:
          h = p.render;
          break;
      }
      var b = !1;
      h !== null && t.has(h) && (b = !0), b ? ak(e, n) : a !== null && av(a, t, n), i !== null && av(i, t, n);
    }
  }
  function ak(e, t) {
    {
      var n = rk(e, t);
      if (n)
        return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case w:
            t.add(a.stateNode);
            return;
          case S:
            t.add(a.stateNode.containerInfo);
            return;
          case x:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null)
          throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function rk(e, t) {
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
  var rv;
  {
    rv = !1;
    try {
      var h0 = Object.preventExtensions({});
    } catch {
      rv = !0;
    }
  }
  function ik(e, t, n, a) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = ye, this.subtreeFlags = ye, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !rv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var ta = function(e, t, n, a) {
    return new ik(e, t, n, a);
  };
  function iv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function ok(e) {
    return typeof e == "function" && !iv(e) && e.defaultProps === void 0;
  }
  function sk(e) {
    if (typeof e == "function")
      return iv(e) ? m : v;
    if (e != null) {
      var t = e.$$typeof;
      if (t === Ne)
        return $;
      if (t === yt)
        return I;
    }
    return g;
  }
  function oo(e, t) {
    var n = e.alternate;
    n === null ? (n = ta(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = ye, n.subtreeFlags = ye, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & yr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var a = e.dependencies;
    switch (n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case g:
      case v:
      case Z:
        n.type = cs(e.type);
        break;
      case m:
        n.type = ev(e.type);
        break;
      case $:
        n.type = tv(e.type);
        break;
    }
    return n;
  }
  function lk(e, t) {
    e.flags &= yr | Lt;
    var n = e.alternate;
    if (n === null)
      e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = ye, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var a = n.dependencies;
      e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function uk(e, t, n) {
    var a;
    return e === Ac ? (a = He, t === !0 && (a |= Et, a |= Ia)) : a = ve, Ra && (a |= it), ta(x, null, null, a);
  }
  function ov(e, t, n, a, i, u) {
    var p = g, h = e;
    if (typeof e == "function")
      iv(e) ? (p = m, h = ev(h)) : h = cs(h);
    else if (typeof e == "string")
      p = w;
    else
      e: switch (e) {
        case D:
          return mi(n.children, i, u, t);
        case Q:
          p = O, i |= Et, (i & He) !== ve && (i |= Ia);
          break;
        case ae:
          return ck(n, i, u, t);
        case Pe:
          return fk(n, i, u, t);
        case _e:
          return dk(n, i, u, t);
        case Ea:
          return v0(n, i, u, t);
        case Ca:
        case gt:
        case Yt:
        case ji:
        case hn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                p = A;
                break e;
              case ze:
                p = P;
                break e;
              case Ne:
                p = $, h = tv(h);
                break e;
              case yt:
                p = I;
                break e;
              case Ue:
                p = Oe, h = null;
                break e;
            }
          var b = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var C = a ? Le(a) : null;
            C && (b += `

Check the render method of \`` + C + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
        }
      }
    var R = ta(p, n, t, i);
    return R.elementType = e, R.type = h, R.lanes = u, R._debugOwner = a, R;
  }
  function sv(e, t, n) {
    var a = null;
    a = e._owner;
    var i = e.type, u = e.key, p = e.props, h = ov(i, u, p, a, t, n);
    return h._debugSource = e._source, h._debugOwner = e._owner, h;
  }
  function mi(e, t, n, a) {
    var i = ta(U, e, a, t);
    return i.lanes = n, i;
  }
  function ck(e, t, n, a) {
    typeof e.id != "string" && c('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var i = ta(k, e, a, t | it);
    return i.elementType = ae, i.lanes = n, i.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, i;
  }
  function fk(e, t, n, a) {
    var i = ta(M, e, a, t);
    return i.elementType = Pe, i.lanes = n, i;
  }
  function dk(e, t, n, a) {
    var i = ta(be, e, a, t);
    return i.elementType = _e, i.lanes = n, i;
  }
  function v0(e, t, n, a) {
    var i = ta(me, e, a, t);
    i.elementType = Ea, i.lanes = n;
    var u = {
      isHidden: !1
    };
    return i.stateNode = u, i;
  }
  function lv(e, t, n) {
    var a = ta(j, e, null, t);
    return a.lanes = n, a;
  }
  function pk() {
    var e = ta(w, null, null, ve);
    return e.elementType = "DELETED", e;
  }
  function mk(e) {
    var t = ta(he, null, null, ve);
    return t.stateNode = e, t;
  }
  function uv(e, t, n) {
    var a = e.children !== null ? e.children : [], i = ta(S, a, e.key, t);
    return i.lanes = n, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, i;
  }
  function g0(e, t) {
    return e === null && (e = ta(g, null, null, ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function hk(e, t, n, a, i) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Bp, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = qt, this.eventTimes = pp(q), this.expirationTimes = pp(dt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = pp(q), this.identifierPrefix = a, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], p = 0; p < Bd; p++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Ac:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case ti:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function y0(e, t, n, a, i, u, p, h, b, C) {
    var R = new hk(e, t, n, h, b), _ = uk(t, u);
    R.current = _, _.stateNode = R;
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
    return Nm(_), R;
  }
  var cv = "18.3.1";
  function vk(e, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return oa(a), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Na,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var fv, dv;
  fv = !1, dv = {};
  function b0(e) {
    if (!e)
      return ea;
    var t = Co(e), n = XR(t);
    if (t.tag === m) {
      var a = t.type;
      if (Wa(a))
        return Yy(t, a, n);
    }
    return n;
  }
  function gk(e, t) {
    {
      var n = Co(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var i = vg(n);
      if (i === null)
        return null;
      if (i.mode & Et) {
        var u = Le(n) || "Component";
        if (!dv[u]) {
          dv[u] = !0;
          var p = vn;
          try {
            bt(i), n.mode & Et ? c("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : c("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            p ? bt(p) : Kt();
          }
        }
      }
      return i.stateNode;
    }
  }
  function x0(e, t, n, a, i, u, p, h) {
    var b = !1, C = null;
    return y0(e, t, b, C, n, a, i, u, p);
  }
  function S0(e, t, n, a, i, u, p, h, b, C) {
    var R = !0, _ = y0(n, a, R, e, i, u, p, h, b);
    _.context = b0(null);
    var L = _.current, H = Tn(), B = di(L), K = jr(H, B);
    return K.callback = t ?? null, ri(L, K, B), CD(_, B, H), _;
  }
  function uu(e, t, n, a) {
    IN(t, e);
    var i = t.current, u = Tn(), p = di(i);
    fE(p);
    var h = b0(n);
    t.context === null ? t.context = h : t.pendingContext = h, ki && vn !== null && !fv && (fv = !0, c(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(vn) || "Unknown"));
    var b = jr(u, p);
    b.payload = {
      element: e
    }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && c("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), b.callback = a);
    var C = ri(i, b, p);
    return C !== null && (Bt(C, i, p, u), Gc(C, i, p)), p;
  }
  function Ff(e) {
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
  function yk(e) {
    switch (e.tag) {
      case x: {
        var t = e.stateNode;
        if (rc(t)) {
          var n = xE(t);
          TD(t, n);
        }
        break;
      }
      case M: {
        Or(function() {
          var i = Un(e, je);
          if (i !== null) {
            var u = Tn();
            Bt(i, e, je, u);
          }
        });
        var a = je;
        pv(e, a);
        break;
      }
    }
  }
  function N0(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = RE(n.retryLane, t));
  }
  function pv(e, t) {
    N0(e, t);
    var n = e.alternate;
    n && N0(n, t);
  }
  function bk(e) {
    if (e.tag === M) {
      var t = Ws, n = Un(e, t);
      if (n !== null) {
        var a = Tn();
        Bt(n, e, t, a);
      }
      pv(e, t);
    }
  }
  function xk(e) {
    if (e.tag === M) {
      var t = di(e), n = Un(e, t);
      if (n !== null) {
        var a = Tn();
        Bt(n, e, t, a);
      }
      pv(e, t);
    }
  }
  function E0(e) {
    var t = MN(e);
    return t === null ? null : t.stateNode;
  }
  var C0 = function(e) {
    return null;
  };
  function Sk(e) {
    return C0(e);
  }
  var w0 = function(e) {
    return !1;
  };
  function Nk(e) {
    return w0(e);
  }
  var R0 = null, j0 = null, T0 = null, D0 = null, k0 = null, O0 = null, L0 = null, _0 = null, A0 = null;
  {
    var P0 = function(e, t, n) {
      var a = t[n], i = Qe(e) ? e.slice() : Fe({}, e);
      return n + 1 === t.length ? (Qe(i) ? i.splice(a, 1) : delete i[a], i) : (i[a] = P0(e[a], t, n + 1), i);
    }, M0 = function(e, t) {
      return P0(e, t, 0);
    }, U0 = function(e, t, n, a) {
      var i = t[a], u = Qe(e) ? e.slice() : Fe({}, e);
      if (a + 1 === t.length) {
        var p = n[a];
        u[p] = u[i], Qe(u) ? u.splice(i, 1) : delete u[i];
      } else
        u[i] = U0(
          // $FlowFixMe number or string is fine here
          e[i],
          t,
          n,
          a + 1
        );
      return u;
    }, V0 = function(e, t, n) {
      if (t.length !== n.length) {
        f("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            f("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return U0(e, t, n, 0);
    }, F0 = function(e, t, n, a) {
      if (n >= t.length)
        return a;
      var i = t[n], u = Qe(e) ? e.slice() : Fe({}, e);
      return u[i] = F0(e[i], t, n + 1, a), u;
    }, z0 = function(e, t, n) {
      return F0(e, t, 0, n);
    }, mv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    R0 = function(e, t, n, a) {
      var i = mv(e, t);
      if (i !== null) {
        var u = z0(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = Fe({}, e.memoizedProps);
        var p = Un(e, je);
        p !== null && Bt(p, e, je, dt);
      }
    }, j0 = function(e, t, n) {
      var a = mv(e, t);
      if (a !== null) {
        var i = M0(a.memoizedState, n);
        a.memoizedState = i, a.baseState = i, e.memoizedProps = Fe({}, e.memoizedProps);
        var u = Un(e, je);
        u !== null && Bt(u, e, je, dt);
      }
    }, T0 = function(e, t, n, a) {
      var i = mv(e, t);
      if (i !== null) {
        var u = V0(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = Fe({}, e.memoizedProps);
        var p = Un(e, je);
        p !== null && Bt(p, e, je, dt);
      }
    }, D0 = function(e, t, n) {
      e.pendingProps = z0(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = Un(e, je);
      a !== null && Bt(a, e, je, dt);
    }, k0 = function(e, t) {
      e.pendingProps = M0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = Un(e, je);
      n !== null && Bt(n, e, je, dt);
    }, O0 = function(e, t, n) {
      e.pendingProps = V0(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = Un(e, je);
      a !== null && Bt(a, e, je, dt);
    }, L0 = function(e) {
      var t = Un(e, je);
      t !== null && Bt(t, e, je, dt);
    }, _0 = function(e) {
      C0 = e;
    }, A0 = function(e) {
      w0 = e;
    };
  }
  function Ek(e) {
    var t = vg(e);
    return t === null ? null : t.stateNode;
  }
  function Ck(e) {
    return null;
  }
  function wk() {
    return vn;
  }
  function Rk(e) {
    var t = e.findFiberByHostInstance, n = s.ReactCurrentDispatcher;
    return BN({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: R0,
      overrideHookStateDeletePath: j0,
      overrideHookStateRenamePath: T0,
      overrideProps: D0,
      overridePropsDeletePath: k0,
      overridePropsRenamePath: O0,
      setErrorHandler: _0,
      setSuspenseHandler: A0,
      scheduleUpdate: L0,
      currentDispatcherRef: n,
      findHostInstanceByFiber: Ek,
      findFiberByHostInstance: t || Ck,
      // React Refresh
      findHostInstancesForRefresh: nk,
      scheduleRefresh: ek,
      scheduleRoot: tk,
      setRefreshHandler: ZD,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: wk,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: cv
    });
  }
  var $0 = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function hv(e) {
    this._internalRoot = e;
  }
  zf.prototype.render = hv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? c("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : $f(arguments[1]) ? c("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && c("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== Ot) {
        var a = E0(t.current);
        a && a.parentNode !== n && c("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    uu(e, t, null, null);
  }, zf.prototype.unmount = hv.prototype.unmount = function() {
    typeof arguments[0] == "function" && c("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zx() && c("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Or(function() {
        uu(null, e, null, null);
      }), $y(t);
    }
  };
  function jk(e, t) {
    if (!$f(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    H0(e);
    var n = !1, a = !1, i = "", u = $0;
    t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ha && c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var p = x0(e, Ac, null, n, a, i, u);
    jc(p.current, e);
    var h = e.nodeType === Ot ? e.parentNode : e;
    return hl(h), new hv(p);
  }
  function zf(e) {
    this._internalRoot = e;
  }
  function Tk(e) {
    e && JE(e);
  }
  zf.prototype.unstable_scheduleHydration = Tk;
  function Dk(e, t, n) {
    if (!$f(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    H0(e), t === void 0 && c("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var a = n ?? null, i = n != null && n.hydratedSources || null, u = !1, p = !1, h = "", b = $0;
    n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (h = n.identifierPrefix), n.onRecoverableError !== void 0 && (b = n.onRecoverableError));
    var C = S0(t, null, e, Ac, a, u, p, h, b);
    if (jc(C.current, e), hl(e), i)
      for (var R = 0; R < i.length; R++) {
        var _ = i[R];
        _j(C, _);
      }
    return new zf(C);
  }
  function $f(e) {
    return !!(e && (e.nodeType === Pn || e.nodeType === mr || e.nodeType === Nd || !wt));
  }
  function cu(e) {
    return !!(e && (e.nodeType === Pn || e.nodeType === mr || e.nodeType === Nd || e.nodeType === Ot && e.nodeValue === " react-mount-point-unstable "));
  }
  function H0(e) {
    e.nodeType === Pn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Rl(e) && (e._reactRootContainer ? c("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : c("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var kk = s.ReactCurrentOwner, J0;
  J0 = function(e) {
    if (e._reactRootContainer && e.nodeType !== Ot) {
      var t = E0(e._reactRootContainer.current);
      t && t.parentNode !== e && c("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, a = vv(e), i = !!(a && Zr(a));
    i && !n && c("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Pn && e.tagName && e.tagName.toUpperCase() === "BODY" && c("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function vv(e) {
    return e ? e.nodeType === mr ? e.documentElement : e.firstChild : null;
  }
  function B0() {
  }
  function Ok(e, t, n, a, i) {
    if (i) {
      if (typeof a == "function") {
        var u = a;
        a = function() {
          var L = Ff(p);
          u.call(L);
        };
      }
      var p = S0(
        t,
        a,
        e,
        ti,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        B0
      );
      e._reactRootContainer = p, jc(p.current, e);
      var h = e.nodeType === Ot ? e.parentNode : e;
      return hl(h), Or(), p;
    } else {
      for (var b; b = e.lastChild; )
        e.removeChild(b);
      if (typeof a == "function") {
        var C = a;
        a = function() {
          var L = Ff(R);
          C.call(L);
        };
      }
      var R = x0(
        e,
        ti,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        B0
      );
      e._reactRootContainer = R, jc(R.current, e);
      var _ = e.nodeType === Ot ? e.parentNode : e;
      return hl(_), Or(function() {
        uu(t, R, n, a);
      }), R;
    }
  }
  function Lk(e, t) {
    e !== null && typeof e != "function" && c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Hf(e, t, n, a, i) {
    J0(n), Lk(i === void 0 ? null : i, "render");
    var u = n._reactRootContainer, p;
    if (!u)
      p = Ok(n, t, e, i, a);
    else {
      if (p = u, typeof i == "function") {
        var h = i;
        i = function() {
          var b = Ff(p);
          h.call(b);
        };
      }
      uu(t, p, e, i);
    }
    return Ff(p);
  }
  var I0 = !1;
  function _k(e) {
    {
      I0 || (I0 = !0, c("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = kk.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || c("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Pn ? e : gk(e, "findDOMNode");
  }
  function Ak(e, t, n) {
    if (c("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Rl(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Hf(null, e, t, !0, n);
  }
  function Pk(e, t, n) {
    if (c("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Rl(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Hf(null, e, t, !1, n);
  }
  function Mk(e, t, n, a) {
    if (c("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cu(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !DN(e))
      throw new Error("parentComponent must be a valid React Component");
    return Hf(e, t, n, !1, a);
  }
  var Y0 = !1;
  function Uk(e) {
    if (Y0 || (Y0 = !0, c("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !cu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Rl(e) && e._reactRootContainer === void 0;
      t && c("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = vv(e), a = n && !Zr(n);
        a && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Or(function() {
        Hf(null, null, e, !1, function() {
          e._reactRootContainer = null, $y(e);
        });
      }), !0;
    } else {
      {
        var i = vv(e), u = !!(i && Zr(i)), p = e.nodeType === Pn && cu(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  _E(yk), PE(bk), ME(xk), UE(ja), VE(kE), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && c("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yN(Fw), SN(Kh, DD, Or);
  function Vk(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$f(t))
      throw new Error("Target container is not a DOM element.");
    return vk(e, t, null, n);
  }
  function Fk(e, t, n, a) {
    return Mk(e, t, n, a);
  }
  var gv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [Zr, $o, Tc, rg, ig, Kh]
  };
  function zk(e, t) {
    return gv.usingClientEntryPoint || c('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t);
  }
  function $k(e, t, n) {
    return gv.usingClientEntryPoint || c('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Dk(e, t, n);
  }
  function Hk(e) {
    return Zx() && c("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Or(e);
  }
  var Jk = Rk({
    findFiberByHostInstance: Ii,
    bundleType: 1,
    version: cv,
    rendererPackageName: "react-dom"
  });
  if (!Jk && kt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var K0 = window.location.protocol;
    /^(https?|file):$/.test(K0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (K0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv, aa.createPortal = Vk, aa.createRoot = zk, aa.findDOMNode = _k, aa.flushSync = Hk, aa.hydrate = Ak, aa.hydrateRoot = $k, aa.render = Pk, aa.unmountComponentAtNode = Uk, aa.unstable_batchedUpdates = Kh, aa.unstable_renderSubtreeIntoContainer = Fk, aa.version = cv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
VS.exports = aa;
var Gk = VS.exports, $S, W0 = Gk;
{
  var G0 = W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  $S = function(o, r) {
    G0.usingClientEntryPoint = !0;
    try {
      return W0.createRoot(o, r);
    } finally {
      G0.usingClientEntryPoint = !1;
    }
  };
}
var HS = { exports: {} }, JS = {};
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
  function r(m, g) {
    return m === g && (m !== 0 || 1 / m === 1 / g) || m !== m && g !== g;
  }
  var s = typeof Object.is == "function" ? Object.is : r, l = o.useSyncExternalStore, d = o.useRef, f = o.useEffect, c = o.useMemo, y = o.useDebugValue;
  function v(m, g, x, S, w) {
    var j = d(null), U;
    j.current === null ? (U = {
      hasValue: !1,
      value: null
    }, j.current = U) : U = j.current;
    var O = c(function() {
      var k = !1, M, I, Z = function(be) {
        if (!k) {
          k = !0, M = be;
          var tt = S(be);
          if (w !== void 0 && U.hasValue) {
            var me = U.value;
            if (w(me, tt))
              return I = me, me;
          }
          return I = tt, tt;
        }
        var Ee = M, Ce = I;
        if (s(Ee, be))
          return Ce;
        var Ze = S(be);
        return w !== void 0 && w(Ce, Ze) ? Ce : (M = be, I = Ze, Ze);
      }, Oe = x === void 0 ? null : x, ke = function() {
        return Z(g());
      }, he = Oe === null ? void 0 : function() {
        return Z(Oe());
      };
      return [ke, he];
    }, [g, x, S, w]), P = O[0], A = O[1], $ = l(m, P, A);
    return f(function() {
      U.hasValue = !0, U.value = $;
    }, [$]), y($), $;
  }
  JS.useSyncExternalStoreWithSelector = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
HS.exports = JS;
var qk = HS.exports, ra = (
  // prettier-ignore
  // @ts-ignore
  "default" in Rv ? ld : Rv
), q0 = Symbol.for("react-redux-context"), Q0 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Qk() {
  if (!ra.createContext)
    return {};
  const o = Q0[q0] ?? (Q0[q0] = /* @__PURE__ */ new Map());
  let r = o.get(ra.createContext);
  return r || (r = ra.createContext(
    null
  ), r.displayName = "ReactRedux", o.set(ra.createContext, r)), r;
}
var xi = /* @__PURE__ */ Qk(), Xk = () => {
  throw new Error("uSES not initialized!");
};
function _v(o = xi) {
  return function() {
    const s = ra.useContext(o);
    if (!s)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return s;
  };
}
var BS = /* @__PURE__ */ _v(), IS = Xk, Zk = (o) => {
  IS = o;
}, eO = (o, r) => o === r;
function tO(o = xi) {
  const r = o === xi ? BS : _v(o), s = (l, d = {}) => {
    const { equalityFn: f = eO, devModeChecks: c = {} } = typeof d == "function" ? { equalityFn: d } : d;
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
      getServerState: m,
      stabilityCheck: g,
      identityFunctionCheck: x
    } = r(), S = ra.useRef(!0), w = ra.useCallback(
      {
        [l.name](U) {
          const O = l(U);
          {
            const {
              identityFunctionCheck: P,
              stabilityCheck: A
            } = {
              stabilityCheck: g,
              identityFunctionCheck: x,
              ...c
            };
            if (A === "always" || A === "once" && S.current) {
              const $ = l(U);
              if (!f(O, $)) {
                let k;
                try {
                  throw new Error();
                } catch (M) {
                  ({ stack: k } = M);
                }
                console.warn(
                  "Selector " + (l.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: U,
                    selected: O,
                    selected2: $,
                    stack: k
                  }
                );
              }
            }
            if ((P === "always" || P === "once" && S.current) && O === U) {
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
          return O;
        }
      }[l.name],
      [l, g, c.stabilityCheck]
    ), j = IS(
      v.addNestedSub,
      y.getState,
      m || y.getState,
      w,
      f
    );
    return ra.useDebugValue(j), j;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ni = /* @__PURE__ */ tO();
function nO(o) {
  o();
}
function aO() {
  let o = null, r = null;
  return {
    clear() {
      o = null, r = null;
    },
    notify() {
      nO(() => {
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
var X0 = {
  notify() {
  },
  get: () => []
};
function rO(o, r) {
  let s, l = X0, d = 0, f = !1;
  function c(U) {
    g();
    const O = l.subscribe(U);
    let P = !1;
    return () => {
      P || (P = !0, O(), x());
    };
  }
  function y() {
    l.notify();
  }
  function v() {
    j.onStateChange && j.onStateChange();
  }
  function m() {
    return f;
  }
  function g() {
    d++, s || (s = o.subscribe(v), l = aO());
  }
  function x() {
    d--, s && d === 0 && (s(), s = void 0, l.clear(), l = X0);
  }
  function S() {
    f || (f = !0, g());
  }
  function w() {
    f && (f = !1, x());
  }
  const j = {
    addNestedSub: c,
    notifyNestedSubs: y,
    handleChangeWrapper: v,
    isSubscribed: m,
    trySubscribe: S,
    tryUnsubscribe: w,
    getListeners: () => l
  };
  return j;
}
var iO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", oO = typeof navigator < "u" && navigator.product === "ReactNative", sO = iO || oO ? ra.useLayoutEffect : ra.useEffect;
function lO({
  store: o,
  context: r,
  children: s,
  serverState: l,
  stabilityCheck: d = "once",
  identityFunctionCheck: f = "once"
}) {
  const c = ra.useMemo(() => {
    const m = rO(o);
    return {
      store: o,
      subscription: m,
      getServerState: l ? () => l : void 0,
      stabilityCheck: d,
      identityFunctionCheck: f
    };
  }, [o, l, d, f]), y = ra.useMemo(() => o.getState(), [o]);
  sO(() => {
    const { subscription: m } = c;
    return m.onStateChange = m.notifyNestedSubs, m.trySubscribe(), y !== o.getState() && m.notifyNestedSubs(), () => {
      m.tryUnsubscribe(), m.onStateChange = void 0;
    };
  }, [c, y]);
  const v = r || xi;
  return /* @__PURE__ */ ra.createElement(v.Provider, { value: c }, s);
}
var uO = lO;
function YS(o = xi) {
  const r = o === xi ? BS : (
    // @ts-ignore
    _v(o)
  ), s = () => {
    const { store: l } = r();
    return l;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var cO = /* @__PURE__ */ YS();
function fO(o = xi) {
  const r = o === xi ? cO : YS(o), s = () => r().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Nu = /* @__PURE__ */ fO();
Zk(qk.useSyncExternalStoreWithSelector);
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
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, gu.apply(this, arguments);
}
var yi;
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(yi || (yi = {}));
const Z0 = "popstate";
function dO(o) {
  o === void 0 && (o = {});
  function r(l, d) {
    let {
      pathname: f,
      search: c,
      hash: y
    } = l.location;
    return jv(
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
    return typeof d == "string" ? d : yu(d);
  }
  return mO(r, s, null, o);
}
function St(o, r) {
  if (o === !1 || o === null || typeof o > "u")
    throw new Error(r);
}
function rr(o, r) {
  if (!o) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function pO() {
  return Math.random().toString(36).substr(2, 8);
}
function eS(o, r) {
  return {
    usr: o.state,
    key: o.key,
    idx: r
  };
}
function jv(o, r, s, l) {
  return s === void 0 && (s = null), gu({
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: ""
  }, typeof r == "string" ? gs(r) : r, {
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || l || pO()
  });
}
function yu(o) {
  let {
    pathname: r = "/",
    search: s = "",
    hash: l = ""
  } = o;
  return s && s !== "?" && (r += s.charAt(0) === "?" ? s : "?" + s), l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l), r;
}
function gs(o) {
  let r = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && (r.hash = o.substr(s), o = o.substr(0, s));
    let l = o.indexOf("?");
    l >= 0 && (r.search = o.substr(l), o = o.substr(0, l)), o && (r.pathname = o);
  }
  return r;
}
function mO(o, r, s, l) {
  l === void 0 && (l = {});
  let {
    window: d = document.defaultView,
    v5Compat: f = !1
  } = l, c = d.history, y = yi.Pop, v = null, m = g();
  m == null && (m = 0, c.replaceState(gu({}, c.state, {
    idx: m
  }), ""));
  function g() {
    return (c.state || {
      idx: null
    }).idx;
  }
  function x() {
    y = yi.Pop;
    let O = g(), P = O == null ? null : O - m;
    m = O, v && v({
      action: y,
      location: U.location,
      delta: P
    });
  }
  function S(O, P) {
    y = yi.Push;
    let A = jv(U.location, O, P);
    m = g() + 1;
    let $ = eS(A, m), k = U.createHref(A);
    try {
      c.pushState($, "", k);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      d.location.assign(k);
    }
    f && v && v({
      action: y,
      location: U.location,
      delta: 1
    });
  }
  function w(O, P) {
    y = yi.Replace;
    let A = jv(U.location, O, P);
    m = g();
    let $ = eS(A, m), k = U.createHref(A);
    c.replaceState($, "", k), f && v && v({
      action: y,
      location: U.location,
      delta: 0
    });
  }
  function j(O) {
    let P = d.location.origin !== "null" ? d.location.origin : d.location.href, A = typeof O == "string" ? O : yu(O);
    return A = A.replace(/ $/, "%20"), St(P, "No window.location.(origin|href) available to create URL for href: " + A), new URL(A, P);
  }
  let U = {
    get action() {
      return y;
    },
    get location() {
      return o(d, c);
    },
    listen(O) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(Z0, x), v = O, () => {
        d.removeEventListener(Z0, x), v = null;
      };
    },
    createHref(O) {
      return r(d, O);
    },
    createURL: j,
    encodeLocation(O) {
      let P = j(O);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: S,
    replace: w,
    go(O) {
      return c.go(O);
    }
  };
  return U;
}
var tS;
(function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
})(tS || (tS = {}));
function hO(o, r, s) {
  return s === void 0 && (s = "/"), vO(o, r, s, !1);
}
function vO(o, r, s, l) {
  let d = typeof r == "string" ? gs(r) : r, f = Si(d.pathname || "/", s);
  if (f == null)
    return null;
  let c = KS(o);
  gO(c);
  let y = null;
  for (let v = 0; y == null && v < c.length; ++v) {
    let m = TO(f);
    y = RO(c[v], m, l);
  }
  return y;
}
function KS(o, r, s, l) {
  r === void 0 && (r = []), s === void 0 && (s = []), l === void 0 && (l = "");
  let d = (f, c, y) => {
    let v = {
      relativePath: y === void 0 ? f.path || "" : y,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: c,
      route: f
    };
    v.relativePath.startsWith("/") && (St(v.relativePath.startsWith(l), 'Absolute route path "' + v.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), v.relativePath = v.relativePath.slice(l.length));
    let m = Pr([l, v.relativePath]), g = s.concat(v);
    f.children && f.children.length > 0 && (St(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')
    ), KS(f.children, r, g, m)), !(f.path == null && !f.index) && r.push({
      path: m,
      score: CO(m, f.index),
      routesMeta: g
    });
  };
  return o.forEach((f, c) => {
    var y;
    if (f.path === "" || !((y = f.path) != null && y.includes("?")))
      d(f, c);
    else
      for (let v of WS(f.path))
        d(f, c, v);
  }), r;
}
function WS(o) {
  let r = o.split("/");
  if (r.length === 0) return [];
  let [s, ...l] = r, d = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (l.length === 0)
    return d ? [f, ""] : [f];
  let c = WS(l.join("/")), y = [];
  return y.push(...c.map((v) => v === "" ? f : [f, v].join("/"))), d && y.push(...c), y.map((v) => o.startsWith("/") && v === "" ? "/" : v);
}
function gO(o) {
  o.sort((r, s) => r.score !== s.score ? s.score - r.score : wO(r.routesMeta.map((l) => l.childrenIndex), s.routesMeta.map((l) => l.childrenIndex)));
}
const yO = /^:[\w-]+$/, bO = 3, xO = 2, SO = 1, NO = 10, EO = -2, nS = (o) => o === "*";
function CO(o, r) {
  let s = o.split("/"), l = s.length;
  return s.some(nS) && (l += EO), r && (l += xO), s.filter((d) => !nS(d)).reduce((d, f) => d + (yO.test(f) ? bO : f === "" ? SO : NO), l);
}
function wO(o, r) {
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
function RO(o, r, s) {
  let {
    routesMeta: l
  } = o, d = {}, f = "/", c = [];
  for (let y = 0; y < l.length; ++y) {
    let v = l[y], m = y === l.length - 1, g = f === "/" ? r : r.slice(f.length) || "/", x = ed({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: m
    }, g), S = v.route;
    if (!x && m && s && !l[l.length - 1].route.index && (x = ed({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: !1
    }, g)), !x)
      return null;
    Object.assign(d, x.params), c.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Pr([f, x.pathname]),
      pathnameBase: LO(Pr([f, x.pathnameBase])),
      route: S
    }), x.pathnameBase !== "/" && (f = Pr([f, x.pathnameBase]));
  }
  return c;
}
function ed(o, r) {
  typeof o == "string" && (o = {
    path: o,
    caseSensitive: !1,
    end: !0
  });
  let [s, l] = jO(o.path, o.caseSensitive, o.end), d = r.match(s);
  if (!d) return null;
  let f = d[0], c = f.replace(/(.)\/+$/, "$1"), y = d.slice(1);
  return {
    params: l.reduce((m, g, x) => {
      let {
        paramName: S,
        isOptional: w
      } = g;
      if (S === "*") {
        let U = y[x] || "";
        c = f.slice(0, f.length - U.length).replace(/(.)\/+$/, "$1");
      }
      const j = y[x];
      return w && !j ? m[S] = void 0 : m[S] = (j || "").replace(/%2F/g, "/"), m;
    }, {}),
    pathname: f,
    pathnameBase: c,
    pattern: o
  };
}
function jO(o, r, s) {
  r === void 0 && (r = !1), s === void 0 && (s = !0), rr(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were ' + ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'));
  let l = [], d = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, y, v) => (l.push({
    paramName: y,
    isOptional: v != null
  }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (l.push({
    paramName: "*"
  }), d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, r ? void 0 : "i"), l];
}
function TO(o) {
  try {
    return o.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return rr(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")), o;
  }
}
function Si(o, r) {
  if (r === "/") return o;
  if (!o.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, l = o.charAt(s);
  return l && l !== "/" ? null : o.slice(s) || "/";
}
function DO(o, r) {
  r === void 0 && (r = "/");
  let {
    pathname: s,
    search: l = "",
    hash: d = ""
  } = typeof o == "string" ? gs(o) : o;
  return {
    pathname: s ? s.startsWith("/") ? s : kO(s, r) : r,
    search: _O(l),
    hash: AO(d)
  };
}
function kO(o, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function yv(o, r, s, l) {
  return "Cannot include a '" + o + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function OO(o) {
  return o.filter((r, s) => s === 0 || r.route.path && r.route.path.length > 0);
}
function GS(o, r) {
  let s = OO(o);
  return r ? s.map((l, d) => d === s.length - 1 ? l.pathname : l.pathnameBase) : s.map((l) => l.pathnameBase);
}
function qS(o, r, s, l) {
  l === void 0 && (l = !1);
  let d;
  typeof o == "string" ? d = gs(o) : (d = gu({}, o), St(!d.pathname || !d.pathname.includes("?"), yv("?", "pathname", "search", d)), St(!d.pathname || !d.pathname.includes("#"), yv("#", "pathname", "hash", d)), St(!d.search || !d.search.includes("#"), yv("#", "search", "hash", d)));
  let f = o === "" || d.pathname === "", c = f ? "/" : d.pathname, y;
  if (c == null)
    y = s;
  else {
    let x = r.length - 1;
    if (!l && c.startsWith("..")) {
      let S = c.split("/");
      for (; S[0] === ".."; )
        S.shift(), x -= 1;
      d.pathname = S.join("/");
    }
    y = x >= 0 ? r[x] : "/";
  }
  let v = DO(d, y), m = c && c !== "/" && c.endsWith("/"), g = (f || c === ".") && s.endsWith("/");
  return !v.pathname.endsWith("/") && (m || g) && (v.pathname += "/"), v;
}
const Pr = (o) => o.join("/").replace(/\/\/+/g, "/"), LO = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), _O = (o) => !o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o, AO = (o) => !o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o;
function PO(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const QS = ["post", "put", "patch", "delete"];
new Set(QS);
const MO = ["get", ...QS];
new Set(MO);
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
function bu() {
  return bu = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, bu.apply(this, arguments);
}
const Eu = /* @__PURE__ */ V.createContext(null);
Eu.displayName = "DataRouter";
const Av = /* @__PURE__ */ V.createContext(null);
Av.displayName = "DataRouterState";
const UO = /* @__PURE__ */ V.createContext(null);
UO.displayName = "Await";
const Fa = /* @__PURE__ */ V.createContext(null);
Fa.displayName = "Navigation";
const Cu = /* @__PURE__ */ V.createContext(null);
Cu.displayName = "Location";
const Mr = /* @__PURE__ */ V.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Mr.displayName = "Route";
const Pv = /* @__PURE__ */ V.createContext(null);
Pv.displayName = "RouteError";
function VO(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r;
  wu() || St(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: l,
    navigator: d
  } = V.useContext(Fa), {
    hash: f,
    pathname: c,
    search: y
  } = ju(o, {
    relative: s
  }), v = c;
  return l !== "/" && (v = c === "/" ? l : Pr([l, c])), d.createHref({
    pathname: v,
    search: y,
    hash: f
  });
}
function wu() {
  return V.useContext(Cu) != null;
}
function ys() {
  return wu() || St(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), V.useContext(Cu).location;
}
const XS = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ZS(o) {
  V.useContext(Fa).static || V.useLayoutEffect(o);
}
function Ru() {
  let {
    isDataRoute: o
  } = V.useContext(Mr);
  return o ? XO() : FO();
}
function FO() {
  wu() || St(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = V.useContext(Eu), {
    basename: r,
    future: s,
    navigator: l
  } = V.useContext(Fa), {
    matches: d
  } = V.useContext(Mr), {
    pathname: f
  } = ys(), c = JSON.stringify(GS(d, s.v7_relativeSplatPath)), y = V.useRef(!1);
  return ZS(() => {
    y.current = !0;
  }), V.useCallback(function(m, g) {
    if (g === void 0 && (g = {}), rr(y.current, XS), !y.current) return;
    if (typeof m == "number") {
      l.go(m);
      return;
    }
    let x = qS(m, JSON.parse(c), f, g.relative === "path");
    o == null && r !== "/" && (x.pathname = x.pathname === "/" ? r : Pr([r, x.pathname])), (g.replace ? l.replace : l.push)(x, g.state, g);
  }, [r, l, c, f, o]);
}
function ju(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    future: l
  } = V.useContext(Fa), {
    matches: d
  } = V.useContext(Mr), {
    pathname: f
  } = ys(), c = JSON.stringify(GS(d, l.v7_relativeSplatPath));
  return V.useMemo(() => qS(o, JSON.parse(c), f, s === "path"), [o, c, f, s]);
}
function zO(o, r) {
  return $O(o, r);
}
function $O(o, r, s, l) {
  wu() || St(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = V.useContext(Fa), {
    matches: f
  } = V.useContext(Mr), c = f[f.length - 1], y = c ? c.params : {}, v = c ? c.pathname : "/", m = c ? c.pathnameBase : "/", g = c && c.route;
  {
    let A = g && g.path || "";
    t1(v, !g || A.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + v + '" (under <Route path="' + A + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + A + '"> to <Route ') + ('path="' + (A === "/" ? "*" : A + "/*") + '">.'));
  }
  let x = ys(), S;
  if (r) {
    var w;
    let A = typeof r == "string" ? gs(r) : r;
    m === "/" || (w = A.pathname) != null && w.startsWith(m) || St(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + m + '" ') + ('but pathname "' + A.pathname + '" was given in the `location` prop.')), S = A;
  } else
    S = x;
  let j = S.pathname || "/", U = j;
  if (m !== "/") {
    let A = m.replace(/^\//, "").split("/");
    U = "/" + j.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let O = hO(o, {
    pathname: U
  });
  rr(g || O != null, 'No routes matched location "' + S.pathname + S.search + S.hash + '" '), rr(O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + S.pathname + S.search + S.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let P = YO(O && O.map((A) => Object.assign({}, A, {
    params: Object.assign({}, y, A.params),
    pathname: Pr([
      m,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(A.pathname).pathname : A.pathname
    ]),
    pathnameBase: A.pathnameBase === "/" ? m : Pr([
      m,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(A.pathnameBase).pathname : A.pathnameBase
    ])
  })), f, s, l);
  return r && P ? /* @__PURE__ */ V.createElement(Cu.Provider, {
    value: {
      location: bu({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, S),
      navigationType: yi.Pop
    }
  }, P) : P;
}
function HO() {
  let o = QO(), r = PO(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), s = o instanceof Error ? o.stack : null, l = "rgba(200,200,200, 0.5)", d = {
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
  }, r), s ? /* @__PURE__ */ V.createElement("pre", {
    style: d
  }, s) : null, c);
}
const JO = /* @__PURE__ */ V.createElement(HO, null);
class BO extends V.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ V.createElement(Mr.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ V.createElement(Pv.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function IO(o) {
  let {
    routeContext: r,
    match: s,
    children: l
  } = o, d = V.useContext(Eu);
  return d && d.static && d.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = s.route.id), /* @__PURE__ */ V.createElement(Mr.Provider, {
    value: r
  }, l);
}
function YO(o, r, s, l) {
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
    let g = c.findIndex((x) => x.route.id && (y == null ? void 0 : y[x.route.id]) !== void 0);
    g >= 0 || St(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")), c = c.slice(0, Math.min(c.length, g + 1));
  }
  let v = !1, m = -1;
  if (s && l && l.v7_partialHydration)
    for (let g = 0; g < c.length; g++) {
      let x = c[g];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = g), x.route.id) {
        let {
          loaderData: S,
          errors: w
        } = s, j = x.route.loader && S[x.route.id] === void 0 && (!w || w[x.route.id] === void 0);
        if (x.route.lazy || j) {
          v = !0, m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((g, x, S) => {
    let w, j = !1, U = null, O = null;
    s && (w = y && x.route.id ? y[x.route.id] : void 0, U = x.route.errorElement || JO, v && (m < 0 && S === 0 ? (t1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, O = null) : m === S && (j = !0, O = x.route.hydrateFallbackElement || null)));
    let P = r.concat(c.slice(0, S + 1)), A = () => {
      let $;
      return w ? $ = U : j ? $ = O : x.route.Component ? $ = /* @__PURE__ */ V.createElement(x.route.Component, null) : x.route.element ? $ = x.route.element : $ = g, /* @__PURE__ */ V.createElement(IO, {
        match: x,
        routeContext: {
          outlet: g,
          matches: P,
          isDataRoute: s != null
        },
        children: $
      });
    };
    return s && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? /* @__PURE__ */ V.createElement(BO, {
      location: s.location,
      revalidation: s.revalidation,
      component: U,
      error: w,
      children: A(),
      routeContext: {
        outlet: null,
        matches: P,
        isDataRoute: !0
      }
    }) : A();
  }, null);
}
var e1 = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(e1 || {}), xu = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(xu || {});
function Mv(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function KO(o) {
  let r = V.useContext(Eu);
  return r || St(!1, Mv(o)), r;
}
function WO(o) {
  let r = V.useContext(Av);
  return r || St(!1, Mv(o)), r;
}
function GO(o) {
  let r = V.useContext(Mr);
  return r || St(!1, Mv(o)), r;
}
function Uv(o) {
  let r = GO(o), s = r.matches[r.matches.length - 1];
  return s.route.id || St(!1, o + ' can only be used on routes that contain a unique "id"'), s.route.id;
}
function qO() {
  return Uv(xu.UseRouteId);
}
function QO() {
  var o;
  let r = V.useContext(Pv), s = WO(xu.UseRouteError), l = Uv(xu.UseRouteError);
  return r !== void 0 ? r : (o = s.errors) == null ? void 0 : o[l];
}
function XO() {
  let {
    router: o
  } = KO(e1.UseNavigateStable), r = Uv(xu.UseNavigateStable), s = V.useRef(!1);
  return ZS(() => {
    s.current = !0;
  }), V.useCallback(function(d, f) {
    f === void 0 && (f = {}), rr(s.current, XS), s.current && (typeof d == "number" ? o.navigate(d) : o.navigate(d, bu({
      fromRouteId: r
    }, f)));
  }, [o, r]);
}
const aS = {};
function t1(o, r, s) {
  !r && !aS[o] && (aS[o] = !0, rr(!1, s));
}
function vi(o) {
  St(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function ZO(o) {
  let {
    basename: r = "/",
    children: s = null,
    location: l,
    navigationType: d = yi.Pop,
    navigator: f,
    static: c = !1,
    future: y
  } = o;
  wu() && St(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let v = r.replace(/^\/*/, "/"), m = V.useMemo(() => ({
    basename: v,
    navigator: f,
    static: c,
    future: bu({
      v7_relativeSplatPath: !1
    }, y)
  }), [v, y, f, c]);
  typeof l == "string" && (l = gs(l));
  let {
    pathname: g = "/",
    search: x = "",
    hash: S = "",
    state: w = null,
    key: j = "default"
  } = l, U = V.useMemo(() => {
    let O = Si(g, v);
    return O == null ? null : {
      location: {
        pathname: O,
        search: x,
        hash: S,
        state: w,
        key: j
      },
      navigationType: d
    };
  }, [v, g, x, S, w, j, d]);
  return rr(U != null, '<Router basename="' + v + '"> is not able to match the URL ' + ('"' + g + x + S + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), U == null ? null : /* @__PURE__ */ V.createElement(Fa.Provider, {
    value: m
  }, /* @__PURE__ */ V.createElement(Cu.Provider, {
    children: s,
    value: U
  }));
}
function e3(o) {
  let {
    children: r,
    location: s
  } = o;
  return zO(Tv(r), s);
}
new Promise(() => {
});
function Tv(o, r) {
  r === void 0 && (r = []);
  let s = [];
  return V.Children.forEach(o, (l, d) => {
    if (!/* @__PURE__ */ V.isValidElement(l))
      return;
    let f = [...r, d];
    if (l.type === V.Fragment) {
      s.push.apply(s, Tv(l.props.children, f));
      return;
    }
    l.type !== vi && St(!1, "[" + (typeof l.type == "string" ? l.type : l.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !l.props.index || !l.props.children || St(!1, "An index route cannot have child routes.");
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
    l.props.children && (c.children = Tv(l.props.children, f)), s.push(c);
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
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, vs.apply(this, arguments);
}
function Vv(o, r) {
  if (o == null) return {};
  var s = {}, l = Object.keys(o), d, f;
  for (f = 0; f < l.length; f++)
    d = l[f], !(r.indexOf(d) >= 0) && (s[d] = o[d]);
  return s;
}
const Gf = "get", qf = "application/x-www-form-urlencoded";
function ud(o) {
  return o != null && typeof o.tagName == "string";
}
function t3(o) {
  return ud(o) && o.tagName.toLowerCase() === "button";
}
function n3(o) {
  return ud(o) && o.tagName.toLowerCase() === "form";
}
function a3(o) {
  return ud(o) && o.tagName.toLowerCase() === "input";
}
function r3(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function i3(o, r) {
  return o.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !r3(o);
}
let Jf = null;
function o3() {
  if (Jf === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Jf = !1;
    } catch {
      Jf = !0;
    }
  return Jf;
}
const s3 = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function bv(o) {
  return o != null && !s3.has(o) ? (rr(!1, '"' + o + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + qf + '"')), null) : o;
}
function l3(o, r) {
  let s, l, d, f, c;
  if (n3(o)) {
    let y = o.getAttribute("action");
    l = y ? Si(y, r) : null, s = o.getAttribute("method") || Gf, d = bv(o.getAttribute("enctype")) || qf, f = new FormData(o);
  } else if (t3(o) || a3(o) && (o.type === "submit" || o.type === "image")) {
    let y = o.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let v = o.getAttribute("formaction") || y.getAttribute("action");
    if (l = v ? Si(v, r) : null, s = o.getAttribute("formmethod") || y.getAttribute("method") || Gf, d = bv(o.getAttribute("formenctype")) || bv(y.getAttribute("enctype")) || qf, f = new FormData(y, o), !o3()) {
      let {
        name: m,
        type: g,
        value: x
      } = o;
      if (g === "image") {
        let S = m ? m + "." : "";
        f.append(S + "x", "0"), f.append(S + "y", "0");
      } else m && f.append(m, x);
    }
  } else {
    if (ud(o))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = Gf, l = null, d = qf, c = o;
  }
  return f && d === "text/plain" && (c = f, f = void 0), {
    action: l,
    method: s.toLowerCase(),
    encType: d,
    formData: f,
    body: c
  };
}
const u3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], c3 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], f3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], d3 = "6";
try {
  window.__reactRouterVersion = d3;
} catch {
}
const n1 = /* @__PURE__ */ V.createContext({
  isTransitioning: !1
});
n1.displayName = "ViewTransition";
const p3 = /* @__PURE__ */ V.createContext(/* @__PURE__ */ new Map());
p3.displayName = "Fetchers";
const m3 = "startTransition", rS = Rv[m3];
function h3(o) {
  let {
    basename: r,
    children: s,
    future: l,
    window: d
  } = o, f = V.useRef();
  f.current == null && (f.current = dO({
    window: d,
    v5Compat: !0
  }));
  let c = f.current, [y, v] = V.useState({
    action: c.action,
    location: c.location
  }), {
    v7_startTransition: m
  } = l || {}, g = V.useCallback((x) => {
    m && rS ? rS(() => v(x)) : v(x);
  }, [v, m]);
  return V.useLayoutEffect(() => c.listen(g), [c, g]), /* @__PURE__ */ V.createElement(ZO, {
    basename: r,
    children: s,
    location: y.location,
    navigationType: y.action,
    navigator: c,
    future: l
  });
}
const v3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $n = /* @__PURE__ */ V.forwardRef(function(r, s) {
  let {
    onClick: l,
    relative: d,
    reloadDocument: f,
    replace: c,
    state: y,
    target: v,
    to: m,
    preventScrollReset: g,
    unstable_viewTransition: x
  } = r, S = Vv(r, u3), {
    basename: w
  } = V.useContext(Fa), j, U = !1;
  if (typeof m == "string" && g3.test(m) && (j = m, v3))
    try {
      let $ = new URL(window.location.href), k = m.startsWith("//") ? new URL($.protocol + m) : new URL(m), M = Si(k.pathname, w);
      k.origin === $.origin && M != null ? m = M + k.search + k.hash : U = !0;
    } catch {
      rr(!1, '<Link to="' + m + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let O = VO(m, {
    relative: d
  }), P = S3(m, {
    replace: c,
    state: y,
    target: v,
    preventScrollReset: g,
    relative: d,
    unstable_viewTransition: x
  });
  function A($) {
    l && l($), $.defaultPrevented || P($);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ V.createElement("a", vs({}, S, {
      href: j || O,
      onClick: U || f ? l : A,
      ref: s,
      target: v
    }))
  );
});
$n.displayName = "Link";
const y3 = /* @__PURE__ */ V.forwardRef(function(r, s) {
  let {
    "aria-current": l = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: c = !1,
    style: y,
    to: v,
    unstable_viewTransition: m,
    children: g
  } = r, x = Vv(r, c3), S = ju(v, {
    relative: x.relative
  }), w = ys(), j = V.useContext(Av), {
    navigator: U,
    basename: O
  } = V.useContext(Fa), P = j != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  j3(S) && m === !0, A = U.encodeLocation ? U.encodeLocation(S).pathname : S.pathname, $ = w.pathname, k = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  d || ($ = $.toLowerCase(), k = k ? k.toLowerCase() : null, A = A.toLowerCase()), k && O && (k = Si(k, O) || k);
  const M = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let I = $ === A || !c && $.startsWith(A) && $.charAt(M) === "/", Z = k != null && (k === A || !c && k.startsWith(A) && k.charAt(A.length) === "/"), Oe = {
    isActive: I,
    isPending: Z,
    isTransitioning: P
  }, ke = I ? l : void 0, he;
  typeof f == "function" ? he = f(Oe) : he = [f, I ? "active" : null, Z ? "pending" : null, P ? "transitioning" : null].filter(Boolean).join(" ");
  let be = typeof y == "function" ? y(Oe) : y;
  return /* @__PURE__ */ V.createElement($n, vs({}, x, {
    "aria-current": ke,
    className: he,
    ref: s,
    style: be,
    to: v,
    unstable_viewTransition: m
  }), typeof g == "function" ? g(Oe) : g);
});
y3.displayName = "NavLink";
const b3 = /* @__PURE__ */ V.forwardRef((o, r) => {
  let {
    fetcherKey: s,
    navigate: l,
    reloadDocument: d,
    replace: f,
    state: c,
    method: y = Gf,
    action: v,
    onSubmit: m,
    relative: g,
    preventScrollReset: x,
    unstable_viewTransition: S
  } = o, w = Vv(o, f3), j = w3(), U = R3(v, {
    relative: g
  }), O = y.toLowerCase() === "get" ? "get" : "post", P = (A) => {
    if (m && m(A), A.defaultPrevented) return;
    A.preventDefault();
    let $ = A.nativeEvent.submitter, k = ($ == null ? void 0 : $.getAttribute("formmethod")) || y;
    j($ || A.currentTarget, {
      fetcherKey: s,
      method: k,
      navigate: l,
      replace: f,
      state: c,
      relative: g,
      preventScrollReset: x,
      unstable_viewTransition: S
    });
  };
  return /* @__PURE__ */ V.createElement("form", vs({
    ref: r,
    method: O,
    action: U,
    onSubmit: d ? m : P
  }, w));
});
b3.displayName = "Form";
var td;
(function(o) {
  o.UseScrollRestoration = "useScrollRestoration", o.UseSubmit = "useSubmit", o.UseSubmitFetcher = "useSubmitFetcher", o.UseFetcher = "useFetcher", o.useViewTransitionState = "useViewTransitionState";
})(td || (td = {}));
var iS;
(function(o) {
  o.UseFetcher = "useFetcher", o.UseFetchers = "useFetchers", o.UseScrollRestoration = "useScrollRestoration";
})(iS || (iS = {}));
function x3(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function a1(o) {
  let r = V.useContext(Eu);
  return r || St(!1, x3(o)), r;
}
function S3(o, r) {
  let {
    target: s,
    replace: l,
    state: d,
    preventScrollReset: f,
    relative: c,
    unstable_viewTransition: y
  } = r === void 0 ? {} : r, v = Ru(), m = ys(), g = ju(o, {
    relative: c
  });
  return V.useCallback((x) => {
    if (i3(x, s)) {
      x.preventDefault();
      let S = l !== void 0 ? l : yu(m) === yu(g);
      v(o, {
        replace: S,
        state: d,
        preventScrollReset: f,
        relative: c,
        unstable_viewTransition: y
      });
    }
  }, [m, v, g, l, d, s, o, f, c, y]);
}
function N3() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let E3 = 0, C3 = () => "__" + String(++E3) + "__";
function w3() {
  let {
    router: o
  } = a1(td.UseSubmit), {
    basename: r
  } = V.useContext(Fa), s = qO();
  return V.useCallback(function(l, d) {
    d === void 0 && (d = {}), N3();
    let {
      action: f,
      method: c,
      encType: y,
      formData: v,
      body: m
    } = l3(l, r);
    if (d.navigate === !1) {
      let g = d.fetcherKey || C3();
      o.fetch(g, s, d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: m,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        unstable_flushSync: d.unstable_flushSync
      });
    } else
      o.navigate(d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: m,
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
function R3(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    basename: l
  } = V.useContext(Fa), d = V.useContext(Mr);
  d || St(!1, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1), c = vs({}, ju(o || ".", {
    relative: s
  })), y = ys();
  if (o == null) {
    c.search = y.search;
    let v = new URLSearchParams(c.search);
    v.has("index") && v.get("index") === "" && (v.delete("index"), c.search = v.toString() ? "?" + v.toString() : "");
  }
  return (!o || o === ".") && f.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (c.pathname = c.pathname === "/" ? l : Pr([l, c.pathname])), yu(c);
}
function j3(o, r) {
  r === void 0 && (r = {});
  let s = V.useContext(n1);
  s == null && St(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: l
  } = a1(td.useViewTransitionState), d = ju(o, {
    relative: r.relative
  });
  if (!s.isTransitioning)
    return !1;
  let f = Si(s.currentLocation.pathname, l) || s.currentLocation.pathname, c = Si(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return ed(d.pathname, c) != null || ed(d.pathname, f) != null;
}
var T3 = {
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
const D3 = /* @__PURE__ */ sd(T3);
var k3 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function oS(o) {
  var r = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (r.name = s[1], (D3[s[1]] || o.charAt(o.length - 2) === "/") && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var l = o.indexOf("-->");
    return { type: "comment", comment: l !== -1 ? o.slice(4, l) : "" };
  }
  for (var d = new RegExp(k3), f = null; (f = d.exec(o)) !== null; ) if (f[0].trim()) if (f[1]) {
    var c = f[1].trim(), y = [c, ""];
    c.indexOf("=") > -1 && (y = c.split("=")), r.attrs[y[0]] = y[1], d.lastIndex--;
  } else f[2] && (r.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return r;
}
var O3 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, L3 = /^\s*$/, _3 = /* @__PURE__ */ Object.create(null);
function r1(o, r) {
  switch (r.type) {
    case "text":
      return o + r.content;
    case "tag":
      return o += "<" + r.name + (r.attrs ? function(s) {
        var l = [];
        for (var d in s) l.push(d + '="' + s[d] + '"');
        return l.length ? " " + l.join(" ") : "";
      }(r.attrs) : "") + (r.voidElement ? "/>" : ">"), r.voidElement ? o : o + r.children.reduce(r1, "") + "</" + r.name + ">";
    case "comment":
      return o + "<!--" + r.comment + "-->";
  }
}
var A3 = { parse: function(o, r) {
  r || (r = {}), r.components || (r.components = _3);
  var s, l = [], d = [], f = -1, c = !1;
  if (o.indexOf("<") !== 0) {
    var y = o.indexOf("<");
    l.push({ type: "text", content: y === -1 ? o : o.substring(0, y) });
  }
  return o.replace(O3, function(v, m) {
    if (c) {
      if (v !== "</" + s.name + ">") return;
      c = !1;
    }
    var g, x = v.charAt(1) !== "/", S = v.startsWith("<!--"), w = m + v.length, j = o.charAt(w);
    if (S) {
      var U = oS(v);
      return f < 0 ? (l.push(U), l) : ((g = d[f]).children.push(U), l);
    }
    if (x && (f++, (s = oS(v)).type === "tag" && r.components[s.name] && (s.type = "component", c = !0), s.voidElement || c || !j || j === "<" || s.children.push({ type: "text", content: o.slice(w, o.indexOf("<", w)) }), f === 0 && l.push(s), (g = d[f - 1]) && g.children.push(s), d[f] = s), (!x || s.voidElement) && (f > -1 && (s.voidElement || s.name === v.slice(2, -1)) && (f--, s = f === -1 ? l : d[f]), !c && j !== "<" && j)) {
      g = f === -1 ? l : d[f].children;
      var O = o.indexOf("<", w), P = o.slice(w, O === -1 ? void 0 : O);
      L3.test(P) && (P = " "), (O > -1 && f + g.length >= 0 || P !== " ") && g.push({ type: "text", content: P });
    }
  }), l;
}, stringify: function(o) {
  return o.reduce(function(r, s) {
    return r + r1("", s);
  }, "");
} };
function Qf() {
  if (console && console.warn) {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    typeof r[0] == "string" && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r);
  }
}
const sS = {};
function nd() {
  for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
    r[s] = arguments[s];
  typeof r[0] == "string" && sS[r[0]] || (typeof r[0] == "string" && (sS[r[0]] = /* @__PURE__ */ new Date()), Qf(...r));
}
const i1 = (o, r) => () => {
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
function lS(o, r, s) {
  o.loadNamespaces(r, i1(o, s));
}
function uS(o, r, s, l) {
  typeof s == "string" && (s = [s]), s.forEach((d) => {
    o.options.ns.indexOf(d) < 0 && o.options.ns.push(d);
  }), o.loadLanguages(r, i1(o, l));
}
function P3(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const l = r.languages[0], d = r.options ? r.options.fallbackLng : !1, f = r.languages[r.languages.length - 1];
  if (l.toLowerCase() === "cimode") return !0;
  const c = (y, v) => {
    const m = r.services.backendConnector.state[`${y}|${v}`];
    return m === -1 || m === 2;
  };
  return s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !c(r.isLanguageChangingTo, o) ? !1 : !!(r.hasResourceBundle(l, o) || !r.services.backendConnector.backend || r.options.resources && !r.options.partialBundledLanguages || c(l, o) && (!d || c(f, o)));
}
function M3(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !r.languages || !r.languages.length ? (nd("i18n.languages were undefined or empty", r.languages), !0) : r.options.ignoreJSONStructure !== void 0 ? r.hasLoadedNamespace(o, {
    lng: s.lng,
    precheck: (d, f) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !f(d.isLanguageChangingTo, o)) return !1;
    }
  }) : P3(o, r, s);
}
const U3 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, V3 = {
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
}, F3 = (o) => V3[o], z3 = (o) => o.replace(U3, F3);
let Dv = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: z3
};
function $3() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Dv = {
    ...Dv,
    ...o
  };
}
function o1() {
  return Dv;
}
let s1;
function H3(o) {
  s1 = o;
}
function Fv() {
  return s1;
}
function xv(o, r) {
  if (!o) return !1;
  const s = o.props ? o.props.children : o.children;
  return r ? s.length > 0 : !!s;
}
function Sv(o) {
  if (!o) return [];
  const r = o.props ? o.props.children : o.children;
  return o.props && o.props.i18nIsDynamicList ? hs(r) : r;
}
function J3(o) {
  return Object.prototype.toString.call(o) !== "[object Array]" ? !1 : o.every((r) => V.isValidElement(r));
}
function hs(o) {
  return Array.isArray(o) ? o : [o];
}
function B3(o, r) {
  const s = {
    ...r
  };
  return s.props = Object.assign(o.props, r.props), s;
}
function l1(o, r) {
  if (!o) return "";
  let s = "";
  const l = hs(o), d = r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor ? r.transKeepBasicHtmlNodesFor : [];
  return l.forEach((f, c) => {
    if (typeof f == "string")
      s += `${f}`;
    else if (V.isValidElement(f)) {
      const y = Object.keys(f.props).length, v = d.indexOf(f.type) > -1, m = f.props.children;
      if (!m && v && y === 0)
        s += `<${f.type}/>`;
      else if (!m && (!v || y !== 0))
        s += `<${c}></${c}>`;
      else if (f.props.i18nIsDynamicList)
        s += `<${c}></${c}>`;
      else if (v && y === 1 && typeof m == "string")
        s += `<${f.type}>${m}</${f.type}>`;
      else {
        const g = l1(m, r);
        s += `<${c}>${g}</${c}>`;
      }
    } else if (f === null)
      Qf("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof f == "object") {
      const {
        format: y,
        ...v
      } = f, m = Object.keys(v);
      if (m.length === 1) {
        const g = y ? `${m[0]}, ${y}` : m[0];
        s += `{{${g}}}`;
      } else
        Qf("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", f);
    } else
      Qf("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", f);
  }), s;
}
function I3(o, r, s, l, d, f) {
  if (r === "") return [];
  const c = l.transKeepBasicHtmlNodesFor || [], y = r && new RegExp(c.map((O) => `<${O}`).join("|")).test(r);
  if (!o && !y && !f) return [r];
  const v = {};
  function m(O) {
    hs(O).forEach((A) => {
      typeof A != "string" && (xv(A) ? m(Sv(A)) : typeof A == "object" && !V.isValidElement(A) && Object.assign(v, A));
    });
  }
  m(o);
  const g = A3.parse(`<0>${r}</0>`), x = {
    ...v,
    ...d
  };
  function S(O, P, A) {
    const $ = Sv(O), k = j($, P.children, A);
    return J3($) && k.length === 0 || O.props && O.props.i18nIsDynamicList ? $ : k;
  }
  function w(O, P, A, $, k) {
    O.dummy ? (O.children = P, A.push(V.cloneElement(O, {
      key: $
    }, k ? void 0 : P))) : A.push(...V.Children.map([O], (M) => {
      const I = {
        ...M.props
      };
      return delete I.i18nIsDynamicList, V.createElement(M.type, {
        ...I,
        key: $,
        ref: M.ref
      }, k ? null : P);
    }));
  }
  function j(O, P, A) {
    const $ = hs(O);
    return hs(P).reduce((M, I, Z) => {
      const Oe = I.children && I.children[0] && I.children[0].content && s.services.interpolator.interpolate(I.children[0].content, x, s.language);
      if (I.type === "tag") {
        let ke = $[parseInt(I.name, 10)];
        A.length === 1 && !ke && (ke = A[0][I.name]), ke || (ke = {});
        const he = Object.keys(I.attrs).length !== 0 ? B3({
          props: I.attrs
        }, ke) : ke, be = V.isValidElement(he), tt = be && xv(I, !0) && !I.voidElement, me = y && typeof he == "object" && he.dummy && !be, Ee = typeof o == "object" && o !== null && Object.hasOwnProperty.call(o, I.name);
        if (typeof he == "string") {
          const Ce = s.services.interpolator.interpolate(he, x, s.language);
          M.push(Ce);
        } else if (xv(he) || tt) {
          const Ce = S(he, I, A);
          w(he, Ce, M, Z);
        } else if (me) {
          const Ce = j($, I.children, A);
          w(he, Ce, M, Z);
        } else if (Number.isNaN(parseFloat(I.name)))
          if (Ee) {
            const Ce = S(he, I, A);
            w(he, Ce, M, Z, I.voidElement);
          } else if (l.transSupportBasicHtmlNodes && c.indexOf(I.name) > -1)
            if (I.voidElement)
              M.push(V.createElement(I.name, {
                key: `${I.name}-${Z}`
              }));
            else {
              const Ce = j($, I.children, A);
              M.push(V.createElement(I.name, {
                key: `${I.name}-${Z}`
              }, Ce));
            }
          else if (I.voidElement)
            M.push(`<${I.name} />`);
          else {
            const Ce = j($, I.children, A);
            M.push(`<${I.name}>${Ce}</${I.name}>`);
          }
        else if (typeof he == "object" && !be) {
          const Ce = I.children[0] ? Oe : null;
          Ce && M.push(Ce);
        } else
          w(he, Oe, M, Z, I.children.length !== 1 || !Oe);
      } else if (I.type === "text") {
        const ke = l.transWrapTextNodes, he = f ? l.unescape(s.services.interpolator.interpolate(I.content, x, s.language)) : s.services.interpolator.interpolate(I.content, x, s.language);
        ke ? M.push(V.createElement(ke, {
          key: `${I.name}-${Z}`
        }, he)) : M.push(he);
      }
      return M;
    }, []);
  }
  const U = j([{
    dummy: !0,
    children: o || []
  }], g, hs(o || []));
  return Sv(U[0]);
}
function Y3(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: v,
    components: m,
    ns: g,
    i18n: x,
    t: S,
    shouldUnescape: w,
    ...j
  } = o;
  const U = x || Fv();
  if (!U)
    return nd("You will need to pass in an i18next instance by using i18nextReactModule"), r;
  const O = S || U.t.bind(U) || ((tt) => tt), P = {
    ...o1(),
    ...U.options && U.options.react
  };
  let A = g || O.ns || U.options && U.options.defaultNS;
  A = typeof A == "string" ? [A] : A || ["translation"];
  const $ = l1(r, P), k = v || $ || P.transEmptyNodeValue || d, {
    hashTransKey: M
  } = P, I = d || (M ? M($ || k) : $ || k);
  U.options && U.options.interpolation && U.options.interpolation.defaultVariables && (y = y && Object.keys(y).length > 0 ? {
    ...y,
    ...U.options.interpolation.defaultVariables
  } : {
    ...U.options.interpolation.defaultVariables
  });
  const Z = y || s !== void 0 || !r ? c.interpolation : {
    interpolation: {
      ...c.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, Oe = {
    ...c,
    context: f || c.context,
    count: s,
    ...y,
    ...Z,
    defaultValue: k,
    ns: A
  }, ke = I ? O(I, Oe) : k;
  m && Object.keys(m).forEach((tt) => {
    const me = m[tt];
    if (typeof me.type == "function" || !me.props || !me.props.children || ke.indexOf(`${tt}/>`) < 0 && ke.indexOf(`${tt} />`) < 0) return;
    function Ee() {
      return V.createElement(V.Fragment, null, me);
    }
    m[tt] = V.createElement(Ee);
  });
  const he = I3(m || r, ke, U, P, Oe, w), be = l !== void 0 ? l : P.defaultTransParent;
  return be ? V.createElement(be, j, he) : he;
}
const K3 = {
  type: "3rdParty",
  init(o) {
    $3(o.options.react), H3(o);
  }
}, u1 = V.createContext();
class W3 {
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
function ms(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: v,
    components: m,
    ns: g,
    i18n: x,
    t: S,
    shouldUnescape: w,
    ...j
  } = o;
  const {
    i18n: U,
    defaultNS: O
  } = V.useContext(u1) || {}, P = x || U || Fv(), A = S || P && P.t.bind(P);
  return Y3({
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c,
    values: y,
    defaults: v,
    components: m,
    ns: g || A && A.ns || O || P && P.options && P.options.defaultNS,
    i18n: P,
    t: S,
    shouldUnescape: w,
    ...j
  });
}
const G3 = (o, r) => {
  const s = V.useRef();
  return V.useEffect(() => {
    s.current = o;
  }, [o, r]), s.current;
};
function c1(o, r, s, l) {
  return o.getFixedT(r, s, l);
}
function q3(o, r, s, l) {
  return V.useCallback(c1(o, r, s, l), [o, r, s, l]);
}
function Ei(o) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: s
  } = r, {
    i18n: l,
    defaultNS: d
  } = V.useContext(u1) || {}, f = s || l || Fv();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new W3()), !f) {
    nd("You will need to pass in an i18next instance by using initReactI18next");
    const k = (I, Z) => typeof Z == "string" ? Z : Z && typeof Z == "object" && typeof Z.defaultValue == "string" ? Z.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, M = [k, {}, !1];
    return M.t = k, M.i18n = {}, M.ready = !1, M;
  }
  f.options.react && f.options.react.wait !== void 0 && nd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...o1(),
    ...f.options.react,
    ...r
  }, {
    useSuspense: y,
    keyPrefix: v
  } = c;
  let m = d || f.options && f.options.defaultNS;
  m = typeof m == "string" ? [m] : m || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(m);
  const g = (f.isInitialized || f.initializedStoreOnce) && m.every((k) => M3(k, f, c)), x = q3(f, r.lng || null, c.nsMode === "fallback" ? m : m[0], v), S = () => x, w = () => c1(f, r.lng || null, c.nsMode === "fallback" ? m : m[0], v), [j, U] = V.useState(S);
  let O = m.join();
  r.lng && (O = `${r.lng}${O}`);
  const P = G3(O), A = V.useRef(!0);
  V.useEffect(() => {
    const {
      bindI18n: k,
      bindI18nStore: M
    } = c;
    A.current = !0, !g && !y && (r.lng ? uS(f, r.lng, m, () => {
      A.current && U(w);
    }) : lS(f, m, () => {
      A.current && U(w);
    })), g && P && P !== O && A.current && U(w);
    function I() {
      A.current && U(w);
    }
    return k && f && f.on(k, I), M && f && f.store.on(M, I), () => {
      A.current = !1, k && f && k.split(" ").forEach((Z) => f.off(Z, I)), M && f && M.split(" ").forEach((Z) => f.store.off(Z, I));
    };
  }, [f, O]), V.useEffect(() => {
    A.current && g && U(S);
  }, [f, v, g]);
  const $ = [j, f, g];
  if ($.t = j, $.i18n = f, $.ready = g, g || !g && !y) return $;
  throw new Promise((k) => {
    r.lng ? uS(f, r.lng, m, () => k()) : lS(f, m, () => k());
  });
}
const Q3 = "Management", X3 = "Comment", Z3 = "Login", eL = "Logout", tL = "Register", nL = "Email", aL = "Password", rL = "Nickname", iL = "Personal Website", oL = "Setting", sL = "Profile", lL = "Homepage", uL = "All", cL = "Mine", fL = "Approved", dL = "Waiting", pL = "Spam", mL = "Sticky", hL = "Edit", vL = "Reply", gL = "Action", yL = "Filter", bL = "Author", xL = "Content", SL = "Username", NL = "Submit", EL = "Cancel", CL = "At", wL = "Migration", RL = "Exporting…", jL = "Under verification", TL = "Administrator", DL = "Guest", kL = "User", OL = "Role", Bf = {
  management: Q3,
  comment: X3,
  login: Z3,
  logout: eL,
  register: tL,
  email: nL,
  password: aL,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: rL,
  website: iL,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: oL,
  profile: sL,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: lL,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: uL,
  mine: cL,
  approved: fL,
  "approved button": "Approved",
  waiting: dL,
  spam: pL,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: mL,
  edit: hL,
  reply: vL,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: gL,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: yL,
  author: bL,
  content: xL,
  username: SL,
  submit: NL,
  cancel: EL,
  at: CL,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: wL,
  exporting: RL,
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
  verify: jL,
  administrator: TL,
  guest: DL,
  user: kL,
  "manage users": "Manage Users",
  role: OL,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, LL = "管理", _L = "评论", AL = "登录", PL = "登出", ML = "用户注册", UL = "邮箱", VL = "密码", FL = "昵称", zL = "个人网站", $L = "个人设置", HL = "个人资料", JL = "个人主页地址", BL = "所有", IL = "我的", YL = "已通过", KL = "待审核", WL = "垃圾", GL = "置顶评论", qL = "编辑", QL = "回复", XL = "操作", ZL = "筛选", e_ = "作者", t_ = "内容", n_ = "用户名", a_ = "提交", r_ = "取消", i_ = "于", o_ = "导入导出", s_ = "导出中...", l_ = "待认证", u_ = "管理员", c_ = "普通用户", f_ = "用户", d_ = "角色", cS = {
  management: LL,
  comment: _L,
  login: AL,
  logout: PL,
  register: ML,
  email: UL,
  password: VL,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: FL,
  website: zL,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: $L,
  profile: HL,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: JL,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: BL,
  mine: IL,
  approved: YL,
  "approved button": "通过",
  waiting: KL,
  spam: WL,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: GL,
  edit: qL,
  reply: QL,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: XL,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: ZL,
  author: e_,
  content: t_,
  username: n_,
  submit: a_,
  cancel: r_,
  at: i_,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: o_,
  exporting: s_,
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
  verify: l_,
  administrator: u_,
  guest: c_,
  user: f_,
  "manage users": "管理用户",
  role: d_,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, p_ = "管理", m_ = "留言", h_ = "登入", v_ = "登出", g_ = "使用者註冊", y_ = "信箱", b_ = "密碼", x_ = "暱稱", S_ = "個人網站", N_ = "個人設定", E_ = "個人資料", C_ = "個人首頁網址", w_ = "所有", R_ = "我的", j_ = "已通過", T_ = "待審核", D_ = "垃圾", k_ = "置頂留言", O_ = "編輯", L_ = "回覆", __ = "動作", A_ = "篩選", P_ = "作者", M_ = "內容", U_ = "使用者名稱", V_ = "送出", F_ = "取消", z_ = "於", $_ = "匯入匯出", H_ = "匯出中...", J_ = "待認證", B_ = "管理員", I_ = "使用者", Y_ = "使用者", K_ = "角色", W_ = {
  management: p_,
  comment: m_,
  login: h_,
  logout: v_,
  register: g_,
  email: y_,
  password: b_,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: x_,
  website: S_,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: N_,
  profile: E_,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: C_,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: w_,
  mine: R_,
  approved: j_,
  "approved button": "通過",
  waiting: T_,
  spam: D_,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: k_,
  edit: O_,
  reply: L_,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: __,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: A_,
  author: P_,
  content: M_,
  username: U_,
  submit: V_,
  cancel: F_,
  at: z_,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: $_,
  exporting: H_,
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
  verify: J_,
  administrator: B_,
  guest: I_,
  user: Y_,
  "manage users": "使用者管理",
  role: K_,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, fS = [
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
], G_ = {
  "zh-cn": { translations: cS },
  "zh-CN": { translations: cS },
  en: { translations: Bf },
  "en-US": { translations: Bf },
  "zh-TW": { translations: W_ },
  jp: { translations: Bf },
  "jp-JP": { translations: Bf }
};
function uo() {
  const o = Nu(), r = Ru(), s = Ni((g) => g.user), { t: l, i18n: d } = Ei(), [f, c] = V.useState(null), y = V.useMemo(() => {
    const g = fS.find(
      (x) => x.alias.includes(d.language)
    );
    return (g == null ? void 0 : g.value) ?? "";
  }, [d.language]);
  V.useEffect(() => {
    !(s != null && s.email) || !(s != null && s.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((g) => g.json()).then((g) => {
      s.__version !== g.version && c(g.version);
    });
  }, [s == null ? void 0 : s.email]);
  const v = function(g) {
    d.changeLanguage(g.target.value);
  }, m = function(g) {
    g.preventDefault(), o.user.logout(), r("/ui/login");
  };
  return [
    /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (s == null ? void 0 : s.type) === "administrator" ? /* @__PURE__ */ E.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ E.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ E.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ E.jsxDEV($n, { to: "/ui", children: l("management") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV($n, { to: "/ui", children: l("comment") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/user", children: l("user") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("li", { className: "last", children: /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/migration", children: l("migration") }, void 0, !1, {
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
            children: fS.map((g) => /* @__PURE__ */ E.jsxDEV("option", { value: g.value, children: g.label }, g.value, !1, {
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
        s != null && s.type ? /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/profile", className: "author", children: s.display_name }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this) : null,
        s != null && s.type ? /* @__PURE__ */ E.jsxDEV("a", { className: "exit", href: "#", onClick: m, children: l("logout") }, void 0, !1, {
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
      ms,
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
function q_() {
  const { t: o } = Ei(), r = Nu(), s = Ru(), l = Ni((m) => m.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1);
  V.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const v = async function(m) {
    m.preventDefault(), f(!1);
    const g = m.target.email.value;
    if (!g)
      return f(o("please input email"));
    try {
      y(!0), await r.user.forgot({
        email: g
      }), alert(o("find password success! please go to your mailbox to reset it!")), s("/ui/login");
    } catch {
      f(o("find password error! try again later"));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
const Q_ = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), X_ = (o) => /* @__PURE__ */ V.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...o }, /* @__PURE__ */ V.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ V.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), Z_ = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), eA = (o) => /* @__PURE__ */ V.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...o }, /* @__PURE__ */ V.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ V.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), tA = (o) => /* @__PURE__ */ V.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ V.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), nA = (o) => /* @__PURE__ */ V.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...o }, /* @__PURE__ */ V.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ V.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), aA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: Z_,
  github: Q_,
  google: nA,
  qq: tA,
  twitter: X_,
  weibo: eA
}, Symbol.toStringTag, { value: "Module" })), Xf = {}, dS = (o) => {
  const r = document.querySelector(`script[src="${o}"]`);
  if (r)
    return Xf[o] = {
      loading: !1,
      error: null,
      scriptEl: r
    };
};
function f1({
  src: o,
  checkForExisting: r = !1,
  ...s
}) {
  let l = o ? Xf[o] : void 0;
  !l && r && o && pS && (l = dS(o));
  const [d, f] = V.useState(
    l ? l.loading : !!o
  ), [c, y] = V.useState(l ? l.error : null), [v, m] = V.useState(!1);
  return V.useEffect(() => {
    if (!pS || !o || v || c) return;
    l = Xf[o], !l && r && (l = dS(o));
    let g;
    l ? g = l.scriptEl : (g = document.createElement("script"), g.src = o, Object.keys(s).forEach((w) => {
      g[w] === void 0 ? g.setAttribute(w, s[w]) : g[w] = s[w];
    }), l = Xf[o] = {
      loading: !0,
      error: null,
      scriptEl: g
    });
    const x = () => {
      l && (l.loading = !1), f(!1), m(!0);
    }, S = (w) => {
      l && (l.error = w), y(w);
    };
    return g.addEventListener("load", x), g.addEventListener("error", S), document.body.appendChild(g), () => {
      g.removeEventListener("load", x), g.removeEventListener("error", S);
    };
  }, [o]), [d, c];
}
const pS = typeof window < "u" && typeof window.document < "u";
function rA({
  sitekey: o,
  hideDefaultBadge: r = !1,
  checkForExisting: s = !0
}) {
  const [l, d] = V.useState();
  return V.useEffect(() => {
    iA && r && oA(".grecaptcha-badge { visibility: hidden; }");
  }, [r]), f1({
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
const iA = typeof window < "u" && typeof window.document < "u", oA = (o) => {
  const r = document.createElement("style");
  document.head.appendChild(r);
  const s = r.sheet;
  s && s.insertRule(o, s.cssRules.length);
};
function sA({ sitekey: o, checkForExisting: r = !0 }) {
  const [s, l] = V.useState();
  return f1({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      l(window.turnstile);
    }),
    async: !1,
    checkForExisting: r
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
function d1(o) {
  const r = rA(o), s = sA(o);
  return window.turnstileKey ? s : window.recaptchaV3Key ? r : () => {
  };
}
const lA = {
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
class ad {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = s.prefix || "i18next:", this.logger = r || lA, this.options = s, this.debug = s.debug;
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
    return new ad(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new ad(this.logger, r);
  }
}
var ar = new ad();
class cd {
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
      for (let m = 0; m < v; m++)
        y(...l);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [y, v] = c;
      for (let m = 0; m < v; m++)
        y.apply(y, [r, ...l]);
    });
  }
}
function du() {
  let o, r;
  const s = new Promise((l, d) => {
    o = l, r = d;
  });
  return s.resolve = o, s.reject = r, s;
}
function mS(o) {
  return o == null ? "" : "" + o;
}
function uA(o, r, s) {
  o.forEach((l) => {
    r[l] && (s[l] = r[l]);
  });
}
const cA = /###/g;
function vu(o, r, s) {
  function l(y) {
    return y && y.indexOf("###") > -1 ? y.replace(cA, ".") : y;
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
function hS(o, r, s) {
  const {
    obj: l,
    k: d
  } = vu(o, r, Object);
  if (l !== void 0 || r.length === 1) {
    l[d] = s;
    return;
  }
  let f = r[r.length - 1], c = r.slice(0, r.length - 1), y = vu(o, c, Object);
  for (; y.obj === void 0 && c.length; )
    f = `${c[c.length - 1]}.${f}`, c = c.slice(0, c.length - 1), y = vu(o, c, Object), y && y.obj && typeof y.obj[`${y.k}.${f}`] < "u" && (y.obj = void 0);
  y.obj[`${y.k}.${f}`] = s;
}
function fA(o, r, s, l) {
  const {
    obj: d,
    k: f
  } = vu(o, r, Object);
  d[f] = d[f] || [], d[f].push(s);
}
function rd(o, r) {
  const {
    obj: s,
    k: l
  } = vu(o, r);
  if (s)
    return s[l];
}
function dA(o, r, s) {
  const l = rd(o, s);
  return l !== void 0 ? l : rd(r, s);
}
function p1(o, r, s) {
  for (const l in r)
    l !== "__proto__" && l !== "constructor" && (l in o ? typeof o[l] == "string" || o[l] instanceof String || typeof r[l] == "string" || r[l] instanceof String ? s && (o[l] = r[l]) : p1(o[l], r[l], s) : o[l] = r[l]);
  return o;
}
function ds(o) {
  return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var pA = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function mA(o) {
  return typeof o == "string" ? o.replace(/[&<>"'\/]/g, (r) => pA[r]) : o;
}
class hA {
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
const vA = [" ", ",", "?", "!", ";"], gA = new hA(20);
function yA(o, r, s) {
  r = r || "", s = s || "";
  const l = vA.filter((c) => r.indexOf(c) < 0 && s.indexOf(c) < 0);
  if (l.length === 0) return !0;
  const d = gA.getRegExp(`(${l.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let f = !d.test(o);
  if (!f) {
    const c = o.indexOf(s);
    c > 0 && !d.test(o.substring(0, c)) && (f = !0);
  }
  return f;
}
function kv(o, r) {
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
function id(o) {
  return o && o.indexOf("_") > 0 ? o.replace("_", "-") : o;
}
class vS extends cd {
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
    const v = rd(this.data, y);
    return !v && !s && !l && r.indexOf(".") > -1 && (r = y[0], s = y[1], l = y.slice(2).join(".")), v || !c || typeof l != "string" ? v : kv(this.data && this.data[r] && this.data[r][s], l, f);
  }
  addResource(r, s, l, d) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let y = [r, s];
    l && (y = y.concat(c ? l.split(c) : l)), r.indexOf(".") > -1 && (y = r.split("."), d = s, s = y[1]), this.addNamespaces(s), hS(this.data, y, d), f.silent || this.emit("added", r, s, l, d);
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
    let v = rd(this.data, y) || {};
    c.skipCopy || (l = JSON.parse(JSON.stringify(l))), d ? p1(v, l, f) : v = {
      ...v,
      ...l
    }, hS(this.data, y, v), c.silent || this.emit("added", r, s, l);
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
var m1 = {
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
const gS = {};
class od extends cd {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), uA(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ar.create("translator");
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
    const c = l && r.indexOf(l) > -1, y = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !yA(r, l, d);
    if (c && !y) {
      const v = r.match(this.interpolator.nestingRegexp);
      if (v && v.length > 0)
        return {
          key: r,
          namespaces: f
        };
      const m = r.split(l);
      (l !== d || l === d && this.options.ns.indexOf(m[0]) > -1) && (f = m.shift()), r = m.join(d);
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
    } = this.extractFromKey(r[r.length - 1], s), v = y[y.length - 1], m = s.lng || this.language, g = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (m && m.toLowerCase() === "cimode") {
      if (g) {
        const k = s.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${v}${k}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: m,
          usedNS: v,
          usedParams: this.getUsedParamsDetails(s)
        } : `${v}${k}${c}`;
      }
      return d ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: m,
        usedNS: v,
        usedParams: this.getUsedParamsDetails(s)
      } : c;
    }
    const x = this.resolve(r, s);
    let S = x && x.res;
    const w = x && x.usedKey || c, j = x && x.exactUsedKey || c, U = Object.prototype.toString.apply(S), O = ["[object Number]", "[object Function]", "[object RegExp]"], P = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (A && S && (typeof S != "string" && typeof S != "boolean" && typeof S != "number") && O.indexOf(U) < 0 && !(typeof P == "string" && Array.isArray(S))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const k = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, S, {
          ...s,
          ns: y
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return d ? (x.res = k, x.usedParams = this.getUsedParamsDetails(s), x) : k;
      }
      if (f) {
        const k = Array.isArray(S), M = k ? [] : {}, I = k ? j : w;
        for (const Z in S)
          if (Object.prototype.hasOwnProperty.call(S, Z)) {
            const Oe = `${I}${f}${Z}`;
            M[Z] = this.translate(Oe, {
              ...s,
              joinArrays: !1,
              ns: y
            }), M[Z] === Oe && (M[Z] = S[Z]);
          }
        S = M;
      }
    } else if (A && typeof P == "string" && Array.isArray(S))
      S = S.join(P), S && (S = this.extendTranslation(S, r, s, l));
    else {
      let k = !1, M = !1;
      const I = s.count !== void 0 && typeof s.count != "string", Z = od.hasDefaultValue(s), Oe = I ? this.pluralResolver.getSuffix(m, s.count, s) : "", ke = s.ordinal && I ? this.pluralResolver.getSuffix(m, s.count, {
        ordinal: !1
      }) : "", he = I && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), be = he && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${Oe}`] || s[`defaultValue${ke}`] || s.defaultValue;
      !this.isValidLookup(S) && Z && (k = !0, S = be), this.isValidLookup(S) || (M = !0, S = c);
      const me = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && M ? void 0 : S, Ee = Z && be !== S && this.options.updateMissing;
      if (M || k || Ee) {
        if (this.logger.log(Ee ? "updateKey" : "missingKey", m, v, c, Ee ? be : S), f) {
          const qe = this.resolve(c, {
            ...s,
            keySeparator: !1
          });
          qe && qe.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ce = [];
        const Ze = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Ze && Ze[0])
          for (let qe = 0; qe < Ze.length; qe++)
            Ce.push(Ze[qe]);
        else this.options.saveMissingTo === "all" ? Ce = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Ce.push(s.lng || this.language);
        const we = (qe, Dt, Ke) => {
          const fn = Z && Ke !== S ? Ke : me;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(qe, v, Dt, fn, Ee, s) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(qe, v, Dt, fn, Ee, s), this.emit("missingKey", qe, v, Dt, S);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && I ? Ce.forEach((qe) => {
          const Dt = this.pluralResolver.getSuffixes(qe, s);
          he && s[`defaultValue${this.options.pluralSeparator}zero`] && Dt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Dt.push(`${this.options.pluralSeparator}zero`), Dt.forEach((Ke) => {
            we([qe], c + Ke, s[`defaultValue${Ke}`] || be);
          });
        }) : we(Ce, c, be));
      }
      S = this.extendTranslation(S, r, s, x, l), M && S === c && this.options.appendNamespaceToMissingKey && (S = `${v}:${c}`), (M || k) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? S = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${v}:${c}` : c, k ? S : void 0) : S = this.options.parseMissingKeyHandler(S));
    }
    return d ? (x.res = S, x.usedParams = this.getUsedParamsDetails(s), x) : S;
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
      const m = typeof r == "string" && (l && l.interpolation && l.interpolation.skipOnVariables !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let g;
      if (m) {
        const S = r.match(this.interpolator.nestingRegexp);
        g = S && S.length;
      }
      let x = l.replace && typeof l.replace != "string" ? l.replace : l;
      if (this.options.interpolation.defaultVariables && (x = {
        ...this.options.interpolation.defaultVariables,
        ...x
      }), r = this.interpolator.interpolate(r, x, l.lng || this.language, l), m) {
        const S = r.match(this.interpolator.nestingRegexp), w = S && S.length;
        g < w && (l.nest = !1);
      }
      !l.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (l.lng = d.usedLng), l.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var S = arguments.length, w = new Array(S), j = 0; j < S; j++)
          w[j] = arguments[j];
        return f && f[0] === w[0] && !l.context ? (c.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${s[0]}`), null) : c.translate(...w, s);
      }, l)), l.interpolation && this.interpolator.reset();
    }
    const y = l.postProcess || this.options.postProcess, v = typeof y == "string" ? [y] : y;
    return r != null && v && v.length && l.applyPostProcessor !== !1 && (r = m1.handle(v, r, s, this.options && this.options.postProcessPassResolved ? {
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
      const m = this.extractFromKey(v, s), g = m.key;
      d = g;
      let x = m.namespaces;
      this.options.fallbackNS && (x = x.concat(this.options.fallbackNS));
      const S = s.count !== void 0 && typeof s.count != "string", w = S && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", U = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      x.forEach((O) => {
        this.isValidLookup(l) || (y = O, !gS[`${U[0]}-${O}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(y) && (gS[`${U[0]}-${O}`] = !0, this.logger.warn(`key "${d}" for languages "${U.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), U.forEach((P) => {
          if (this.isValidLookup(l)) return;
          c = P;
          const A = [g];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, g, P, O, s);
          else {
            let k;
            S && (k = this.pluralResolver.getSuffix(P, s.count, s));
            const M = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (S && (A.push(g + k), s.ordinal && k.indexOf(I) === 0 && A.push(g + k.replace(I, this.options.pluralSeparator)), w && A.push(g + M)), j) {
              const Z = `${g}${this.options.contextSeparator}${s.context}`;
              A.push(Z), S && (A.push(Z + k), s.ordinal && k.indexOf(I) === 0 && A.push(Z + k.replace(I, this.options.pluralSeparator)), w && A.push(Z + M));
            }
          }
          let $;
          for (; $ = A.pop(); )
            this.isValidLookup(l) || (f = $, l = this.getResource(P, O, $, s));
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
function Nv(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
class yS {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ar.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = id(r), !r || r.indexOf("-") < 0) return null;
    const s = r.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = id(r), !r || r.indexOf("-") < 0) return r;
    const s = r.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(r) {
    if (typeof r == "string" && r.indexOf("-") > -1) {
      const s = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let l = r.split("-");
      return this.options.lowerCaseLng ? l = l.map((d) => d.toLowerCase()) : l.length === 2 ? (l[0] = l[0].toLowerCase(), l[1] = l[1].toUpperCase(), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Nv(l[1].toLowerCase()))) : l.length === 3 && (l[0] = l[0].toLowerCase(), l[1].length === 2 && (l[1] = l[1].toUpperCase()), l[0] !== "sgn" && l[2].length === 2 && (l[2] = l[2].toUpperCase()), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Nv(l[1].toLowerCase())), s.indexOf(l[2].toLowerCase()) > -1 && (l[2] = Nv(l[2].toLowerCase()))), l.join("-");
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
let bA = [{
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
}], xA = {
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
const SA = ["v1", "v2", "v3"], NA = ["v4"], bS = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function EA() {
  const o = {};
  return bA.forEach((r) => {
    r.lngs.forEach((s) => {
      o[s] = {
        numbers: r.nr,
        plurals: xA[r.fc]
      };
    });
  }), o;
}
class CA {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = r, this.options = s, this.logger = ar.create("pluralResolver"), (!this.options.compatibilityJSON || NA.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = EA();
  }
  addRule(r, s) {
    this.rules[r] = s;
  }
  getRule(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(id(r === "dev" ? "en" : r), {
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
    return l ? this.shouldUseIntlApi() ? l.resolvedOptions().pluralCategories.sort((d, f) => bS[d] - bS[f]).map((d) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : l.numbers.map((d) => this.getSuffix(r, d, s)) : [];
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
    return !SA.includes(this.options.compatibilityJSON);
  }
}
function xS(o, r, s) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = dA(o, r, s);
  return !f && d && typeof s == "string" && (f = kv(o, s, l), f === void 0 && (f = kv(r, s, l))), f;
}
class wA {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ar.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || ((s) => s), this.init(r);
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
      formatSeparator: m,
      unescapeSuffix: g,
      unescapePrefix: x,
      nestingPrefix: S,
      nestingPrefixEscaped: w,
      nestingSuffix: j,
      nestingSuffixEscaped: U,
      nestingOptionsSeparator: O,
      maxReplaces: P,
      alwaysFormat: A
    } = r.interpolation;
    this.escape = s !== void 0 ? s : mA, this.escapeValue = l !== void 0 ? l : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = f ? ds(f) : c || "{{", this.suffix = y ? ds(y) : v || "}}", this.formatSeparator = m || ",", this.unescapePrefix = g ? "" : x || "-", this.unescapeSuffix = this.unescapePrefix ? "" : g || "", this.nestingPrefix = S ? ds(S) : w || ds("$t("), this.nestingSuffix = j ? ds(j) : U || ds(")"), this.nestingOptionsSeparator = O || ",", this.maxReplaces = P || 1e3, this.alwaysFormat = A !== void 0 ? A : !1, this.resetRegExp();
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
    function m(j) {
      return j.replace(/\$/g, "$$$$");
    }
    const g = (j) => {
      if (j.indexOf(this.formatSeparator) < 0) {
        const A = xS(s, v, j, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(A, void 0, l, {
          ...d,
          ...s,
          interpolationkey: j
        }) : A;
      }
      const U = j.split(this.formatSeparator), O = U.shift().trim(), P = U.join(this.formatSeparator).trim();
      return this.format(xS(s, v, O, this.options.keySeparator, this.options.ignoreJSONStructure), P, l, {
        ...d,
        ...s,
        interpolationkey: O
      });
    };
    this.resetRegExp();
    const x = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, S = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (j) => m(j)
    }, {
      regex: this.regexp,
      safeValue: (j) => this.escapeValue ? m(this.escape(j)) : m(j)
    }].forEach((j) => {
      for (y = 0; f = j.regex.exec(r); ) {
        const U = f[1].trim();
        if (c = g(U), c === void 0)
          if (typeof x == "function") {
            const P = x(r, f, d);
            c = typeof P == "string" ? P : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, U))
            c = "";
          else if (S) {
            c = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${U} for interpolating ${r}`), c = "";
        else typeof c != "string" && !this.useRawValueToEscape && (c = mS(c));
        const O = j.safeValue(c);
        if (r = r.replace(f[0], O), S ? (j.regex.lastIndex += c.length, j.regex.lastIndex -= f[0].length) : j.regex.lastIndex = 0, y++, y >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, f, c;
    function y(v, m) {
      const g = this.nestingOptionsSeparator;
      if (v.indexOf(g) < 0) return v;
      const x = v.split(new RegExp(`${g}[ ]*{`));
      let S = `{${x[1]}`;
      v = x[0], S = this.interpolate(S, c);
      const w = S.match(/'/g), j = S.match(/"/g);
      (w && w.length % 2 === 0 && !j || j.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
      try {
        c = JSON.parse(S), m && (c = {
          ...m,
          ...c
        });
      } catch (U) {
        return this.logger.warn(`failed parsing options string in nesting for key ${v}`, U), `${v}${g}${S}`;
      }
      return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, v;
    }
    for (; d = this.nestingRegexp.exec(r); ) {
      let v = [];
      c = {
        ...l
      }, c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let m = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const g = d[1].split(this.formatSeparator).map((x) => x.trim());
        d[1] = g.shift(), v = g, m = !0;
      }
      if (f = s(y.call(this, d[1].trim(), c), c), f && d[0] === r && typeof f != "string") return f;
      typeof f != "string" && (f = mS(f)), f || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${r}`), f = ""), m && (f = v.reduce((g, x) => this.format(g, x, l.lng, {
        ...l,
        interpolationkey: d[1].trim()
      }), f.trim())), r = r.replace(d[0], f), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
function RA(o) {
  let r = o.toLowerCase().trim();
  const s = {};
  if (o.indexOf("(") > -1) {
    const l = o.split("(");
    r = l[0].toLowerCase().trim();
    const d = l[1].substring(0, l[1].length - 1);
    r === "currency" && d.indexOf(":") < 0 ? s.currency || (s.currency = d.trim()) : r === "relativetime" && d.indexOf(":") < 0 ? s.range || (s.range = d.trim()) : d.split(";").forEach((c) => {
      if (c) {
        const [y, ...v] = c.split(":"), m = v.join(":").trim().replace(/^'+|'+$/g, ""), g = y.trim();
        s[g] || (s[g] = m), m === "false" && (s[g] = !1), m === "true" && (s[g] = !0), isNaN(m) || (s[g] = parseInt(m, 10));
      }
    });
  }
  return {
    formatName: r,
    formatOptions: s
  };
}
function ps(o) {
  const r = {};
  return function(l, d, f) {
    const c = d + JSON.stringify(f);
    let y = r[c];
    return y || (y = o(id(d), f), r[c] = y), y(l);
  };
}
class jA {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ar.create("formatter"), this.options = r, this.formats = {
      number: ps((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      currency: ps((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l,
          style: "currency"
        });
        return (f) => d.format(f);
      }),
      datetime: ps((s, l) => {
        const d = new Intl.DateTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      relativetime: ps((s, l) => {
        const d = new Intl.RelativeTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f, l.range || "day");
      }),
      list: ps((s, l) => {
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
    this.formats[r.toLowerCase().trim()] = ps(s);
  }
  format(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return s.split(this.formatSeparator).reduce((y, v) => {
      const {
        formatName: m,
        formatOptions: g
      } = RA(v);
      if (this.formats[m]) {
        let x = y;
        try {
          const S = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, w = S.locale || S.lng || d.locale || d.lng || l;
          x = this.formats[m](y, w, {
            ...g,
            ...d,
            ...S
          });
        } catch (S) {
          this.logger.warn(S);
        }
        return x;
      } else
        this.logger.warn(`there was no format function for ${m}`);
      return y;
    }, r);
  }
}
function TA(o, r) {
  o.pending[r] !== void 0 && (delete o.pending[r], o.pendingCount--);
}
class DA extends cd {
  constructor(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = s, this.services = l, this.languageUtils = l.languageUtils, this.options = d, this.logger = ar.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(l, d.backend, d);
  }
  queueLoad(r, s, l, d) {
    const f = {}, c = {}, y = {}, v = {};
    return r.forEach((m) => {
      let g = !0;
      s.forEach((x) => {
        const S = `${m}|${x}`;
        !l.reload && this.store.hasResourceBundle(m, x) ? this.state[S] = 2 : this.state[S] < 0 || (this.state[S] === 1 ? c[S] === void 0 && (c[S] = !0) : (this.state[S] = 1, g = !1, c[S] === void 0 && (c[S] = !0), f[S] === void 0 && (f[S] = !0), v[x] === void 0 && (v[x] = !0)));
      }), g || (y[m] = !0);
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
      fA(v.loaded, [f], c), TA(v, r), s && v.errors.push(s), v.pendingCount === 0 && !v.done && (Object.keys(v.loaded).forEach((m) => {
        y[m] || (y[m] = {});
        const g = v.loaded[m];
        g.length && g.forEach((x) => {
          y[m][x] === void 0 && (y[m][x] = !0);
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
    const y = (m, g) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const x = this.waitingReads.shift();
        this.read(x.lng, x.ns, x.fcName, x.tried, x.wait, x.callback);
      }
      if (m && g && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, s, l, d + 1, f * 2, c);
        }, f);
        return;
      }
      c(m, g);
    }, v = this.backend[l].bind(this.backend);
    if (v.length === 2) {
      try {
        const m = v(r, s);
        m && typeof m.then == "function" ? m.then((g) => y(null, g)).catch(y) : y(null, m);
      } catch (m) {
        y(m);
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
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let g;
            m.length === 5 ? g = m(r, s, l, d, v) : g = m(r, s, l, d), g && typeof g.then == "function" ? g.then((x) => y(null, x)).catch(y) : y(null, g);
          } catch (g) {
            y(g);
          }
        else
          m(r, s, l, d, y, v);
      }
      !r || !r[0] || this.store.addResource(r[0], s, l, d);
    }
  }
}
function SS() {
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
function NS(o) {
  return typeof o.ns == "string" && (o.ns = [o.ns]), typeof o.fallbackLng == "string" && (o.fallbackLng = [o.fallbackLng]), typeof o.fallbackNS == "string" && (o.fallbackNS = [o.fallbackNS]), o.supportedLngs && o.supportedLngs.indexOf("cimode") < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), o;
}
function If() {
}
function kA(o) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((s) => {
    typeof o[s] == "function" && (o[s] = o[s].bind(o));
  });
}
class Su extends cd {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = NS(r), this.services = {}, this.logger = ar, this.modules = {
      external: []
    }, kA(this), s && !this.isInitialized && !r.isClone) {
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
    const d = SS();
    this.options = {
      ...d,
      ...this.options,
      ...NS(s)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
    function f(g) {
      return g ? typeof g == "function" ? new g() : g : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? ar.init(f(this.modules.logger), this.options) : ar.init(null, this.options);
      let g;
      this.modules.formatter ? g = this.modules.formatter : typeof Intl < "u" && (g = jA);
      const x = new yS(this.options);
      this.store = new vS(this.options.resources, this.options);
      const S = this.services;
      S.logger = ar, S.resourceStore = this.store, S.languageUtils = x, S.pluralResolver = new CA(x, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), g && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (S.formatter = f(g), S.formatter.init(S, this.options), this.options.interpolation.format = S.formatter.format.bind(S.formatter)), S.interpolator = new wA(this.options), S.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, S.backendConnector = new DA(f(this.modules.backend), S.resourceStore, S, this.options), S.backendConnector.on("*", function(w) {
        for (var j = arguments.length, U = new Array(j > 1 ? j - 1 : 0), O = 1; O < j; O++)
          U[O - 1] = arguments[O];
        r.emit(w, ...U);
      }), this.modules.languageDetector && (S.languageDetector = f(this.modules.languageDetector), S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)), this.modules.i18nFormat && (S.i18nFormat = f(this.modules.i18nFormat), S.i18nFormat.init && S.i18nFormat.init(this)), this.translator = new od(this.services, this.options), this.translator.on("*", function(w) {
        for (var j = arguments.length, U = new Array(j > 1 ? j - 1 : 0), O = 1; O < j; O++)
          U[O - 1] = arguments[O];
        r.emit(w, ...U);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, l || (l = If), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((g) => {
      this[g] = function() {
        return r.store[g](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((g) => {
      this[g] = function() {
        return r.store[g](...arguments), r;
      };
    });
    const v = du(), m = () => {
      const g = (x, S) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), v.resolve(S), l(x, S);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return g(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, g);
    };
    return this.options.resources || !this.options.initImmediate ? m() : setTimeout(m, 0), v;
  }
  loadResources(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : If;
    const d = typeof r == "string" ? r : this.language;
    if (typeof r == "function" && (l = r), !this.options.resources || this.options.partialBundledLanguages) {
      if (d && d.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return l();
      const f = [], c = (y) => {
        if (!y || y === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(y).forEach((m) => {
          m !== "cimode" && f.indexOf(m) < 0 && f.push(m);
        });
      };
      d ? c(d) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((v) => c(v)), this.options.preload && this.options.preload.forEach((y) => c(y)), this.services.backendConnector.load(f, this.options.ns, (y) => {
        !y && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(y);
      });
    } else
      l(null);
  }
  reloadResources(r, s, l) {
    const d = du();
    return r || (r = this.languages), s || (s = this.options.ns), l || (l = If), this.services.backendConnector.reload(r, s, (f) => {
      d.resolve(), l(f);
    }), d;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && m1.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
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
    const d = du();
    this.emit("languageChanging", r);
    const f = (v) => {
      this.language = v, this.languages = this.services.languageUtils.toResolveHierarchy(v), this.resolvedLanguage = void 0, this.setResolvedLanguage(v);
    }, c = (v, m) => {
      m ? (f(m), this.translator.changeLanguage(m), this.isLanguageChangingTo = void 0, this.emit("languageChanged", m), this.logger.log("languageChanged", m)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return l.t(...arguments);
      }), s && s(v, function() {
        return l.t(...arguments);
      });
    }, y = (v) => {
      !r && !v && this.services.languageDetector && (v = []);
      const m = typeof v == "string" ? v : this.services.languageUtils.getBestMatchFromCodes(v);
      m && (this.language || f(m), this.translator.language || this.translator.changeLanguage(m), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(m)), this.loadResources(m, (g) => {
        c(g, m);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? y(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(y) : this.services.languageDetector.detect(y) : y(r), d;
  }
  getFixedT(r, s, l) {
    var d = this;
    const f = function(c, y) {
      let v;
      if (typeof y != "object") {
        for (var m = arguments.length, g = new Array(m > 2 ? m - 2 : 0), x = 2; x < m; x++)
          g[x - 2] = arguments[x];
        v = d.options.overloadTranslationOptionHandler([c, y].concat(g));
      } else
        v = {
          ...y
        };
      v.lng = v.lng || f.lng, v.lngs = v.lngs || f.lngs, v.ns = v.ns || f.ns, v.keyPrefix !== "" && (v.keyPrefix = v.keyPrefix || l || f.keyPrefix);
      const S = d.options.keySeparator || ".";
      let w;
      return v.keyPrefix && Array.isArray(c) ? w = c.map((j) => `${v.keyPrefix}${S}${j}`) : w = v.keyPrefix ? `${v.keyPrefix}${S}${c}` : c, d.t(w, v);
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
      const m = this.services.backendConnector.state[`${y}|${v}`];
      return m === -1 || m === 2;
    };
    if (s.precheck) {
      const y = s.precheck(this, c);
      if (y !== void 0) return y;
    }
    return !!(this.hasResourceBundle(l, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(l, r) && (!d || c(f, r)));
  }
  loadNamespaces(r, s) {
    const l = du();
    return this.options.ns ? (typeof r == "string" && (r = [r]), r.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      l.resolve(), s && s(d);
    }), l) : (s && s(), Promise.resolve());
  }
  loadLanguages(r, s) {
    const l = du();
    typeof r == "string" && (r = [r]);
    const d = this.options.preload || [], f = r.filter((c) => d.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return f.length ? (this.options.preload = d.concat(f), this.loadResources((c) => {
      l.resolve(), s && s(c);
    }), l) : (s && s(), Promise.resolve());
  }
  dir(r) {
    if (r || (r = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], l = this.services && this.services.languageUtils || new yS(SS());
    return s.indexOf(l.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    return new Su(r, s);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : If;
    const l = r.forkResourceStore;
    l && delete r.forkResourceStore;
    const d = {
      ...this.options,
      ...r,
      isClone: !0
    }, f = new Su(d);
    return (r.debug !== void 0 || r.prefix !== void 0) && (f.logger = f.logger.clone(r)), ["store", "services", "language"].forEach((y) => {
      f[y] = this[y];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, l && (f.store = new vS(this.store.data, d), f.services.resourceStore = f.store), f.translator = new od(f.services, d), f.translator.on("*", function(y) {
      for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), g = 1; g < v; g++)
        m[g - 1] = arguments[g];
      f.emit(y, ...m);
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
const cn = Su.createInstance();
cn.createInstance = Su.createInstance;
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
async function un(o, r = {}) {
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
function OA(o) {
  const r = o ? `?email=${encodeURIComponent(o)}` : "";
  return un({ url: "token/2fa" + r, method: "GET" });
}
function LA(o) {
  return un({ url: "user", method: "PUT", body: o });
}
function _A({ page: o }) {
  return un({
    url: `user?page=${o}`,
    method: "GET"
  });
}
function Ev({ id: o, ...r }) {
  return un({ url: `user/${o}`, method: "PUT", body: r });
}
function AA() {
  const { t: o } = Ei(), r = Nu(), s = Ru(), l = Ni((P) => P.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1), [v, m] = V.useState(!1), g = d1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), x = location.pathname.match(/(.*?\/)ui/), S = x && x[1] ? x[1] : "/";
  V.useEffect(() => {
    if (!l || !l.email)
      return;
    const P = new URLSearchParams(location.search), A = l.type === "administrator", $ = A ? "/ui/profile" : "/ui", k = A && P.get("redirect") ? P.get("redirect") : $;
    console.log(k), s(k.replace(/\/+/g, "/"));
  }, [l]);
  const w = async function(P) {
    P.preventDefault(), y(!1), f(!0);
    const A = P.target.email.value, $ = P.target.password.value, k = P.target.code ? P.target.code.value : "", M = P.target.remember.checked;
    if (!A)
      return y(o("please input email"));
    if (!$)
      return y(o("please input password"));
    if (P.target.code && !k)
      return y(o("please input 2fa code"));
    const I = await g("login");
    try {
      await r.user.login({
        email: A,
        password: $,
        code: k,
        remember: M,
        recaptchaV3: window.recaptchaV3Key ? I : void 0,
        turnstile: window.turnstileKey ? I : void 0
      });
    } catch {
      y(o("email or password error"));
    } finally {
      f(!1);
    }
  }, j = async (P) => {
    const A = P.target.value;
    if (!A)
      return;
    const $ = await OA(A);
    m($.enable);
  };
  let U = window.serverURL;
  if (!U) {
    const P = location.pathname.match(/(.*?\/)ui/);
    U = P ? P[1] : "/";
  }
  const O = ["google"];
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: w, style: { minWidth: "300px" }, children: [
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
          /* @__PURE__ */ E.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/forgot", children: o("forgot password") }, void 0, !1, {
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
      /* @__PURE__ */ E.jsxDEV("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || O).map((P) => /* @__PURE__ */ E.jsxDEV(
        "a",
        {
          href: `${U}oauth${window.ALLOW_SOCIALS ? "/" + P + "?" : `?type=${P}`}&redirect=${S}ui/profile`,
          children: ld.createElement(aA[P])
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
      /* @__PURE__ */ E.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/register", children: o("register") }, void 0, !1, {
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
var h1 = { exports: {} };
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
})(h1);
var PA = h1.exports;
const Ov = /* @__PURE__ */ sd(PA);
var v1 = { exports: {} }, g1 = { exports: {} };
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
  g1.exports = r;
})();
var MA = g1.exports, Lv = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      return Lv.bin.stringToBytes(unescape(encodeURIComponent(o)));
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      return decodeURIComponent(escape(Lv.bin.bytesToString(o)));
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
}, ES = Lv;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var UA = function(o) {
  return o != null && (y1(o) || VA(o) || !!o._isBuffer);
};
function y1(o) {
  return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o);
}
function VA(o) {
  return typeof o.readFloatLE == "function" && typeof o.slice == "function" && y1(o.slice(0, 0));
}
(function() {
  var o = MA, r = ES.utf8, s = UA, l = ES.bin, d = function(f, c) {
    f.constructor == String ? c && c.encoding === "binary" ? f = l.stringToBytes(f) : f = r.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
    for (var y = o.bytesToWords(f), v = f.length * 8, m = 1732584193, g = -271733879, x = -1732584194, S = 271733878, w = 0; w < y.length; w++)
      y[w] = (y[w] << 8 | y[w] >>> 24) & 16711935 | (y[w] << 24 | y[w] >>> 8) & 4278255360;
    y[v >>> 5] |= 128 << v % 32, y[(v + 64 >>> 9 << 4) + 14] = v;
    for (var j = d._ff, U = d._gg, O = d._hh, P = d._ii, w = 0; w < y.length; w += 16) {
      var A = m, $ = g, k = x, M = S;
      m = j(m, g, x, S, y[w + 0], 7, -680876936), S = j(S, m, g, x, y[w + 1], 12, -389564586), x = j(x, S, m, g, y[w + 2], 17, 606105819), g = j(g, x, S, m, y[w + 3], 22, -1044525330), m = j(m, g, x, S, y[w + 4], 7, -176418897), S = j(S, m, g, x, y[w + 5], 12, 1200080426), x = j(x, S, m, g, y[w + 6], 17, -1473231341), g = j(g, x, S, m, y[w + 7], 22, -45705983), m = j(m, g, x, S, y[w + 8], 7, 1770035416), S = j(S, m, g, x, y[w + 9], 12, -1958414417), x = j(x, S, m, g, y[w + 10], 17, -42063), g = j(g, x, S, m, y[w + 11], 22, -1990404162), m = j(m, g, x, S, y[w + 12], 7, 1804603682), S = j(S, m, g, x, y[w + 13], 12, -40341101), x = j(x, S, m, g, y[w + 14], 17, -1502002290), g = j(g, x, S, m, y[w + 15], 22, 1236535329), m = U(m, g, x, S, y[w + 1], 5, -165796510), S = U(S, m, g, x, y[w + 6], 9, -1069501632), x = U(x, S, m, g, y[w + 11], 14, 643717713), g = U(g, x, S, m, y[w + 0], 20, -373897302), m = U(m, g, x, S, y[w + 5], 5, -701558691), S = U(S, m, g, x, y[w + 10], 9, 38016083), x = U(x, S, m, g, y[w + 15], 14, -660478335), g = U(g, x, S, m, y[w + 4], 20, -405537848), m = U(m, g, x, S, y[w + 9], 5, 568446438), S = U(S, m, g, x, y[w + 14], 9, -1019803690), x = U(x, S, m, g, y[w + 3], 14, -187363961), g = U(g, x, S, m, y[w + 8], 20, 1163531501), m = U(m, g, x, S, y[w + 13], 5, -1444681467), S = U(S, m, g, x, y[w + 2], 9, -51403784), x = U(x, S, m, g, y[w + 7], 14, 1735328473), g = U(g, x, S, m, y[w + 12], 20, -1926607734), m = O(m, g, x, S, y[w + 5], 4, -378558), S = O(S, m, g, x, y[w + 8], 11, -2022574463), x = O(x, S, m, g, y[w + 11], 16, 1839030562), g = O(g, x, S, m, y[w + 14], 23, -35309556), m = O(m, g, x, S, y[w + 1], 4, -1530992060), S = O(S, m, g, x, y[w + 4], 11, 1272893353), x = O(x, S, m, g, y[w + 7], 16, -155497632), g = O(g, x, S, m, y[w + 10], 23, -1094730640), m = O(m, g, x, S, y[w + 13], 4, 681279174), S = O(S, m, g, x, y[w + 0], 11, -358537222), x = O(x, S, m, g, y[w + 3], 16, -722521979), g = O(g, x, S, m, y[w + 6], 23, 76029189), m = O(m, g, x, S, y[w + 9], 4, -640364487), S = O(S, m, g, x, y[w + 12], 11, -421815835), x = O(x, S, m, g, y[w + 15], 16, 530742520), g = O(g, x, S, m, y[w + 2], 23, -995338651), m = P(m, g, x, S, y[w + 0], 6, -198630844), S = P(S, m, g, x, y[w + 7], 10, 1126891415), x = P(x, S, m, g, y[w + 14], 15, -1416354905), g = P(g, x, S, m, y[w + 5], 21, -57434055), m = P(m, g, x, S, y[w + 12], 6, 1700485571), S = P(S, m, g, x, y[w + 3], 10, -1894986606), x = P(x, S, m, g, y[w + 10], 15, -1051523), g = P(g, x, S, m, y[w + 1], 21, -2054922799), m = P(m, g, x, S, y[w + 8], 6, 1873313359), S = P(S, m, g, x, y[w + 15], 10, -30611744), x = P(x, S, m, g, y[w + 6], 15, -1560198380), g = P(g, x, S, m, y[w + 13], 21, 1309151649), m = P(m, g, x, S, y[w + 4], 6, -145523070), S = P(S, m, g, x, y[w + 11], 10, -1120210379), x = P(x, S, m, g, y[w + 2], 15, 718787259), g = P(g, x, S, m, y[w + 9], 21, -343485551), m = m + A >>> 0, g = g + $ >>> 0, x = x + k >>> 0, S = S + M >>> 0;
    }
    return o.endian([m, g, x, S]);
  };
  d._ff = function(f, c, y, v, m, g, x) {
    var S = f + (c & y | ~c & v) + (m >>> 0) + x;
    return (S << g | S >>> 32 - g) + c;
  }, d._gg = function(f, c, y, v, m, g, x) {
    var S = f + (c & v | y & ~v) + (m >>> 0) + x;
    return (S << g | S >>> 32 - g) + c;
  }, d._hh = function(f, c, y, v, m, g, x) {
    var S = f + (c ^ y ^ v) + (m >>> 0) + x;
    return (S << g | S >>> 32 - g) + c;
  }, d._ii = function(f, c, y, v, m, g, x) {
    var S = f + (y ^ (c | ~v)) + (m >>> 0) + x;
    return (S << g | S >>> 32 - g) + c;
  }, d._blocksize = 16, d._digestsize = 16, v1.exports = function(f, c) {
    if (f == null)
      throw new Error("Illegal argument " + f);
    var y = o.wordsToBytes(d(f, c));
    return c && c.asBytes ? y : c && c.asString ? l.bytesToString(y) : o.bytesToHex(y);
  };
})();
var FA = v1.exports;
const zA = /* @__PURE__ */ sd(FA);
function b1(o = "", r = "") {
  return r || (typeof o != "string" && (o = ""), `https://sdn.geekzu.org/avatar/${zA(o)}?s=40&r=G&d=`);
}
function $A(o) {
  return window.SITE_URL ? window.SITE_URL + o : o;
}
function HA(o) {
  let r;
  typeof o == "number" ? r = new Date(o) : r = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(o) ? o.replace(/-/g, "/") : o
  );
  const s = (f) => f < 10 ? "0" + f : f, l = [r.getFullYear(), r.getMonth() + 1, r.getDate()].map(s).join("-"), d = [r.getHours(), r.getMinutes(), r.getSeconds()].map(s).join(":");
  return l + " " + d;
}
function x1({ current: o, total: r, onChange: s }) {
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
    ].filter((l) => l > 0 && l <= r).map((l) => /* @__PURE__ */ E.jsxDEV("li", { className: Ov({ current: l === o }), children: /* @__PURE__ */ E.jsxDEV("a", { href: "#", onClick: () => s(l), children: l }, void 0, !1, {
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
async function pu({ page: o = 1, filter: r }) {
  return un({
    url: `comment?type=list&owner=${r.owner}&status=${r.status}&keyword=${r.keyword}&page=${o}`,
    method: "GET"
  });
}
async function hi(o, r) {
  return un({
    url: `comment/${o}`,
    method: "PUT",
    body: r
  });
}
async function JA(o) {
  return un({
    url: "comment",
    method: "POST",
    body: o
  });
}
async function CS(o) {
  return un({
    url: `comment/${o}`,
    method: "DELETE"
  });
}
function BA() {
  const { t: o } = Ei(), r = V.useRef(null), s = V.useRef(null), l = V.useRef({}), d = Ni((k) => k.user), [f, c] = V.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [y, v] = V.useReducer(
    function(k, M) {
      return { ...k, ...M };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [m, g] = V.useState({}), [x, S] = V.useState(!1), [w, j] = V.useState([]), U = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ E.jsxDEV(ms, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ E.jsxDEV(ms, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ E.jsxDEV(ms, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ E.jsxDEV(ms, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ E.jsxDEV(ms, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  V.useEffect(() => {
    pu({ page: f.page, filter: y }).then((k) => {
      c({ ...f, ...k }), j([]);
    });
  }, [y, f.page]);
  const O = (k) => [
    {
      key: "approved",
      name: o("approved button"),
      show: !0,
      disable: k && k.status === "approved",
      async action() {
        if (k) {
          switch (await hi(k.objectId, { status: "approved" }), f.data = f.data.filter(
            ({ objectId: M }) => M !== k.objectId
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
            w.map(
              (M) => hi(M, { status: "approved" })
            )
          ), pu({ page: f.page, filter: y }).then((M) => {
            c({ ...f, ...M }), j([]);
          });
      }
    },
    {
      key: "waiting",
      name: o("waiting"),
      show: !0,
      disable: k && k.status === "waiting",
      async action() {
        k ? (await hi(k.objectId, { status: "waiting" }), f.data = f.data.filter(
          ({ objectId: M }) => M !== k.objectId
        ), k.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, c({ ...f })) : (await Promise.all(
          w.map(
            (M) => hi(M, { status: "waiting" })
          )
        ), pu({ page: f.page, filter: y }).then((M) => {
          c({ ...f, ...M }), j([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: o(k ? "spam" : "mark as spam"),
      disable: k && k.status === "spam",
      async action() {
        k ? (await hi(k.objectId, { status: "spam" }), f.data = f.data.filter(
          ({ objectId: M }) => M !== k.objectId
        ), f.spamCount += 1, c({ ...f })) : (await Promise.all(
          w.map(
            (M) => hi(M, { status: "spam" })
          )
        ), pu({ page: f.page, filter: y }).then((M) => {
          c({ ...f, ...M }), j([]);
        }));
      }
    },
    {
      key: "sticky",
      show: k && !k.rid && k.status === "approved",
      name: k && k.sticky ? o("disable sticky") : o("sticky"),
      async action(M) {
        M.preventDefault();
        const I = !k.sticky;
        f.data.forEach((Z) => {
          Z.objectId === k.objectId && (Z.sticky = I);
        }), await hi(k.objectId, { sticky: I ? 1 : 0 }), c({ ...f });
      }
    },
    {
      key: "edit",
      show: k,
      name: o("edit"),
      action() {
        const M = {};
        m.id !== k.objectId && m.action !== "edit" && (M.id = k.objectId, M.action = "edit"), g(M);
      }
    },
    {
      key: "reply",
      show: k && k.status === "approved",
      name: o("reply"),
      action() {
        const M = {};
        m.id !== k.objectId && m.action !== "reply" && (M.id = k.objectId, M.action = "reply"), g(M);
      }
    },
    {
      key: "delete",
      name: o("delete"),
      show: !0,
      async action() {
        const M = k ? o("delete one confirm", { nick: k.nick }) : o("delete multiple confirm");
        confirm(M) && (k ? (await CS(k.objectId), f.data = f.data.filter(
          ({ objectId: I }) => I !== k.objectId
        ), c({ ...f })) : (await Promise.all(w.map(CS)), pu({ page: f.page, filter: y }).then((I) => {
          c({ ...f, ...I }), j([]);
        })));
      }
    }
  ].filter(({ show: M }) => M), P = async ({ pid: k, rid: M, url: I, at: Z }) => {
    const Oe = s.current.value;
    if (!Oe)
      return null;
    const { display_name: ke, email: he, url: be } = d;
    await JA({
      nick: ke,
      mail: he,
      ua: navigator.userAgent,
      link: be,
      url: I,
      comment: Oe,
      pid: k,
      rid: M || k,
      at: Z
    }), location.reload();
  }, A = async (k) => {
    const M = f.data[k];
    await hi(M.objectId, l.current), f.data[k] = { ...M, ...l.current }, c({ ...f }), g({});
  }, $ = f.data.length && f.data.every(({ objectId: k }) => w.includes(k));
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "clear-fix", children: U.map(([k, M]) => /* @__PURE__ */ E.jsxDEV(
          "ul",
          {
            className: Ov("typecho-option-tabs", {
              right: k === "owner"
            }),
            children: M.map(({ type: I, name: Z }) => /* @__PURE__ */ E.jsxDEV(
              "li",
              {
                className: Ov({ current: I === y[k] }),
                children: /* @__PURE__ */ E.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => v({ [k]: I }),
                    children: [
                      Z,
                      k === "status" && I !== "approved" && f[`${I}Count`] > 0 ? /* @__PURE__ */ E.jsxDEV("span", { className: "balloon", children: f[`${I}Count`] }, void 0, !1, {
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
            /* @__PURE__ */ E.jsxDEV("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ E.jsxDEV(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => S(!x),
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
                  style: { display: x ? "block" : "none" },
                  onClick: () => S(!1),
                  children: O().map(({ key: k, name: M, action: I }) => /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV("a", { href: "javascript:void(0)", onClick: I, children: M }, void 0, !1, {
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
                onClick: (k) => {
                  k.preventDefault(), v({ keyword: r.current.value });
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
                  objectId: k,
                  nick: M,
                  mail: I,
                  avatar: Z,
                  link: Oe,
                  comment: ke,
                  ip: he,
                  addr: be,
                  url: tt,
                  status: me,
                  rid: Ee,
                  pid: Ce,
                  sticky: Ze,
                  time: we,
                  insertedAt: qe
                }, Dt) => m.id === k && m.action === "edit" ? /* @__PURE__ */ E.jsxDEV("tr", { className: "comment-edit", children: [
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
                      /* @__PURE__ */ E.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${k}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: M,
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
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${k}-mail`, children: o("email") }, void 0, !1, {
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
                          id: `comment-${k}-mail`,
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
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${k}-url`, children: o("homepage") }, void 0, !1, {
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
                          id: `comment-${k}-author`,
                          defaultValue: Oe,
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
                      /* @__PURE__ */ E.jsxDEV("label", { htmlFor: `comment-${k}-text`, children: o("content") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ E.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${k}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: ke,
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
                          onClick: () => A(Dt),
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
                          onClick: () => g({}),
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
                }, this) : /* @__PURE__ */ E.jsxDEV("tr", { id: `comment-${k}`, children: [
                  /* @__PURE__ */ E.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ E.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: k,
                      checked: w.includes(k),
                      onChange: () => j(
                        w.includes(k) ? w.filter(
                          (Ke) => Ke !== k
                        ) : [...w, k]
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
                      src: b1(I, Z),
                      alt: M,
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
                        /* @__PURE__ */ E.jsxDEV("strong", { className: "comment-author", children: Oe ? /* @__PURE__ */ E.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(Oe) ? Oe : "https://" + Oe,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: M
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : M }, void 0, !1, {
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
                        /* @__PURE__ */ E.jsxDEV("span", { children: he }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        he && /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ E.jsxDEV("span", { children: be }, void 0, !1, {
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
                          HA(qe || we),
                          " ",
                          o("at"),
                          " ",
                          /* @__PURE__ */ E.jsxDEV(
                            "a",
                            {
                              href: $A(tt),
                              target: "_blank",
                              rel: "noreferrer",
                              children: tt
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
                        m.id === k && m.action === "reply" ? /* @__PURE__ */ E.jsxDEV("form", { className: "comment-reply", children: [
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
                                  Ke.preventDefault(), P({
                                    rid: Ee,
                                    pid: k,
                                    url: tt,
                                    at: M
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
                                onClick: () => g({}),
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
                          objectId: k,
                          nick: M,
                          status: me,
                          rid: Ee,
                          pid: Ce,
                          sticky: Ze
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
        /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ E.jsxDEV("form", { method: "get", children: /* @__PURE__ */ E.jsxDEV(
          x1,
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
function IA(o, r, s) {
  const l = new Blob([o], { type: s }), d = document.createElement("a"), f = URL.createObjectURL(l);
  d.href = f, d.download = r, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(f);
  }, 0);
}
function YA(o) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = (d) => r(d.target.result), l.onerror = s, l.readAsText(o);
  });
}
function KA() {
  const [o, r] = V.useState(!1), [s, l] = V.useState(!1), { t: d } = Ei(), f = V.useRef(null), c = () => {
    confirm(d("import clear data confirm")) && f.current.click();
  }, y = async (m) => {
    try {
      const g = await YA(m.target.files[0]), x = JSON.parse(g);
      if (!x || x.type !== "waline")
        return alert("import data format not support!");
      const S = x.tables.reduce(
        (P, A) => {
          var $;
          return P + ((($ = x.data[A]) == null ? void 0 : $.length) || 0);
        },
        0
      );
      let w = 0;
      r([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: w, maxLength: S }
      ]);
      const j = {};
      for (const P of x.tables) {
        const A = x.data[P];
        if (P !== "Users" && await un({
          url: "db?table=" + P,
          method: "DELETE"
        }), j[P] || (j[P] = {}), !!Array.isArray(A))
          for (const $ of A) {
            let k = !1;
            if (P === "Users") {
              const ke = await un("user?email=" + $.email);
              ke.objectId && (k = ke.objectId);
            }
            const I = P == "Users" && k ? "PUT" : "POST", Z = P === "Comment" ? Object.assign({}, $, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : $;
            for (const ke in Z)
              (Z[ke] === null || Z[ke] === void 0) && delete Z[ke];
            const Oe = await un({
              url: `db?table=${P}${I === "PUT" ? `&objectId=${k}` : ""}`,
              method: I,
              body: Z
            });
            j[P][$.objectId] = Oe.objectId, w += 1, r([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: w, maxLength: S }
            ]);
          }
      }
      r(["comment data index relationship reconstruction"]);
      const U = x.data.Comment, O = [];
      for (const P of U) {
        const A = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: $, field: k }) => {
          if (!P[k])
            return;
          const M = P[k], I = j[$][P[k]];
          M && I && M !== I && (A[k] = I);
        }), Object.keys(A).length && O.push([
          A,
          { objectId: j.Comment[P.objectId] }
        ]);
      }
      w = 0;
      for (const [P, A] of O)
        await un({
          url: `db?table=Comment&objectId=${A.objectId}`,
          method: "PUT",
          body: P
        }), w += 1, r([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: w, maxLength: O.length }
        ]);
      alert(d("import success")), location.reload();
    } catch (g) {
      throw console.log(g), alert(g.message), g;
    } finally {
      r(!1), m.target.value = null;
    }
  }, v = async () => {
    l(!0);
    try {
      const m = await un("db");
      IA(
        JSON.stringify(m, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var so;
((o) => {
  const r = class {
    constructor(v, m, g, x) {
      if (this.version = v, this.errorCorrectionLevel = m, this.modules = [], this.isFunction = [], v < r.MIN_VERSION || v > r.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (x < -1 || x > 7)
        throw new RangeError("Mask value out of range");
      this.size = v * 4 + 17;
      let S = [];
      for (let j = 0; j < this.size; j++)
        S.push(!1);
      for (let j = 0; j < this.size; j++)
        this.modules.push(S.slice()), this.isFunction.push(S.slice());
      this.drawFunctionPatterns();
      const w = this.addEccAndInterleave(g);
      if (this.drawCodewords(w), x == -1) {
        let j = 1e9;
        for (let U = 0; U < 8; U++) {
          this.applyMask(U), this.drawFormatBits(U);
          const O = this.getPenaltyScore();
          O < j && (x = U, j = O), this.applyMask(U);
        }
      }
      f(0 <= x && x <= 7), this.mask = x, this.applyMask(x), this.drawFormatBits(x), this.isFunction = [];
    }
    static encodeText(v, m) {
      const g = o.QrSegment.makeSegments(v);
      return r.encodeSegments(g, m);
    }
    static encodeBinary(v, m) {
      const g = o.QrSegment.makeBytes(v);
      return r.encodeSegments([g], m);
    }
    static encodeSegments(v, m, g = 1, x = 40, S = -1, w = !0) {
      if (!(r.MIN_VERSION <= g && g <= x && x <= r.MAX_VERSION) || S < -1 || S > 7)
        throw new RangeError("Invalid value");
      let j, U;
      for (j = g; ; j++) {
        const $ = r.getNumDataCodewords(j, m) * 8, k = y.getTotalBits(v, j);
        if (k <= $) {
          U = k;
          break;
        }
        if (j >= x)
          throw new RangeError("Data too long");
      }
      for (const $ of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        w && U <= r.getNumDataCodewords(j, $) * 8 && (m = $);
      let O = [];
      for (const $ of v) {
        l($.mode.modeBits, 4, O), l($.numChars, $.mode.numCharCountBits(j), O);
        for (const k of $.getData())
          O.push(k);
      }
      f(O.length == U);
      const P = r.getNumDataCodewords(j, m) * 8;
      f(O.length <= P), l(0, Math.min(4, P - O.length), O), l(0, (8 - O.length % 8) % 8, O), f(O.length % 8 == 0);
      for (let $ = 236; O.length < P; $ ^= 253)
        l($, 8, O);
      let A = [];
      for (; A.length * 8 < O.length; )
        A.push(0);
      return O.forEach(($, k) => A[k >>> 3] |= $ << 7 - (k & 7)), new r(j, m, A, S);
    }
    getModule(v, m) {
      return 0 <= v && v < this.size && 0 <= m && m < this.size && this.modules[m][v];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let g = 0; g < this.size; g++)
        this.setFunctionModule(6, g, g % 2 == 0), this.setFunctionModule(g, 6, g % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const v = this.getAlignmentPatternPositions(), m = v.length;
      for (let g = 0; g < m; g++)
        for (let x = 0; x < m; x++)
          g == 0 && x == 0 || g == 0 && x == m - 1 || g == m - 1 && x == 0 || this.drawAlignmentPattern(v[g], v[x]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(v) {
      const m = this.errorCorrectionLevel.formatBits << 3 | v;
      let g = m;
      for (let S = 0; S < 10; S++)
        g = g << 1 ^ (g >>> 9) * 1335;
      const x = (m << 10 | g) ^ 21522;
      f(x >>> 15 == 0);
      for (let S = 0; S <= 5; S++)
        this.setFunctionModule(8, S, d(x, S));
      this.setFunctionModule(8, 7, d(x, 6)), this.setFunctionModule(8, 8, d(x, 7)), this.setFunctionModule(7, 8, d(x, 8));
      for (let S = 9; S < 15; S++)
        this.setFunctionModule(14 - S, 8, d(x, S));
      for (let S = 0; S < 8; S++)
        this.setFunctionModule(this.size - 1 - S, 8, d(x, S));
      for (let S = 8; S < 15; S++)
        this.setFunctionModule(8, this.size - 15 + S, d(x, S));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let v = this.version;
      for (let g = 0; g < 12; g++)
        v = v << 1 ^ (v >>> 11) * 7973;
      const m = this.version << 12 | v;
      f(m >>> 18 == 0);
      for (let g = 0; g < 18; g++) {
        const x = d(m, g), S = this.size - 11 + g % 3, w = Math.floor(g / 3);
        this.setFunctionModule(S, w, x), this.setFunctionModule(w, S, x);
      }
    }
    drawFinderPattern(v, m) {
      for (let g = -4; g <= 4; g++)
        for (let x = -4; x <= 4; x++) {
          const S = Math.max(Math.abs(x), Math.abs(g)), w = v + x, j = m + g;
          0 <= w && w < this.size && 0 <= j && j < this.size && this.setFunctionModule(w, j, S != 2 && S != 4);
        }
    }
    drawAlignmentPattern(v, m) {
      for (let g = -2; g <= 2; g++)
        for (let x = -2; x <= 2; x++)
          this.setFunctionModule(v + x, m + g, Math.max(Math.abs(x), Math.abs(g)) != 1);
    }
    setFunctionModule(v, m, g) {
      this.modules[m][v] = g, this.isFunction[m][v] = !0;
    }
    addEccAndInterleave(v) {
      const m = this.version, g = this.errorCorrectionLevel;
      if (v.length != r.getNumDataCodewords(m, g))
        throw new RangeError("Invalid argument");
      const x = r.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][m], S = r.ECC_CODEWORDS_PER_BLOCK[g.ordinal][m], w = Math.floor(r.getNumRawDataModules(m) / 8), j = x - w % x, U = Math.floor(w / x);
      let O = [];
      const P = r.reedSolomonComputeDivisor(S);
      for (let $ = 0, k = 0; $ < x; $++) {
        let M = v.slice(k, k + U - S + ($ < j ? 0 : 1));
        k += M.length;
        const I = r.reedSolomonComputeRemainder(M, P);
        $ < j && M.push(0), O.push(M.concat(I));
      }
      let A = [];
      for (let $ = 0; $ < O[0].length; $++)
        O.forEach((k, M) => {
          ($ != U - S || M >= j) && A.push(k[$]);
        });
      return f(A.length == w), A;
    }
    drawCodewords(v) {
      if (v.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let m = 0;
      for (let g = this.size - 1; g >= 1; g -= 2) {
        g == 6 && (g = 5);
        for (let x = 0; x < this.size; x++)
          for (let S = 0; S < 2; S++) {
            const w = g - S, U = (g + 1 & 2) == 0 ? this.size - 1 - x : x;
            !this.isFunction[U][w] && m < v.length * 8 && (this.modules[U][w] = d(v[m >>> 3], 7 - (m & 7)), m++);
          }
      }
      f(m == v.length * 8);
    }
    applyMask(v) {
      if (v < 0 || v > 7)
        throw new RangeError("Mask value out of range");
      for (let m = 0; m < this.size; m++)
        for (let g = 0; g < this.size; g++) {
          let x;
          switch (v) {
            case 0:
              x = (g + m) % 2 == 0;
              break;
            case 1:
              x = m % 2 == 0;
              break;
            case 2:
              x = g % 3 == 0;
              break;
            case 3:
              x = (g + m) % 3 == 0;
              break;
            case 4:
              x = (Math.floor(g / 3) + Math.floor(m / 2)) % 2 == 0;
              break;
            case 5:
              x = g * m % 2 + g * m % 3 == 0;
              break;
            case 6:
              x = (g * m % 2 + g * m % 3) % 2 == 0;
              break;
            case 7:
              x = ((g + m) % 2 + g * m % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[m][g] && x && (this.modules[m][g] = !this.modules[m][g]);
        }
    }
    getPenaltyScore() {
      let v = 0;
      for (let S = 0; S < this.size; S++) {
        let w = !1, j = 0, U = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[S][O] == w ? (j++, j == 5 ? v += r.PENALTY_N1 : j > 5 && v++) : (this.finderPenaltyAddHistory(j, U), w || (v += this.finderPenaltyCountPatterns(U) * r.PENALTY_N3), w = this.modules[S][O], j = 1);
        v += this.finderPenaltyTerminateAndCount(w, j, U) * r.PENALTY_N3;
      }
      for (let S = 0; S < this.size; S++) {
        let w = !1, j = 0, U = [0, 0, 0, 0, 0, 0, 0];
        for (let O = 0; O < this.size; O++)
          this.modules[O][S] == w ? (j++, j == 5 ? v += r.PENALTY_N1 : j > 5 && v++) : (this.finderPenaltyAddHistory(j, U), w || (v += this.finderPenaltyCountPatterns(U) * r.PENALTY_N3), w = this.modules[O][S], j = 1);
        v += this.finderPenaltyTerminateAndCount(w, j, U) * r.PENALTY_N3;
      }
      for (let S = 0; S < this.size - 1; S++)
        for (let w = 0; w < this.size - 1; w++) {
          const j = this.modules[S][w];
          j == this.modules[S][w + 1] && j == this.modules[S + 1][w] && j == this.modules[S + 1][w + 1] && (v += r.PENALTY_N2);
        }
      let m = 0;
      for (const S of this.modules)
        m = S.reduce((w, j) => w + (j ? 1 : 0), m);
      const g = this.size * this.size, x = Math.ceil(Math.abs(m * 20 - g * 10) / g) - 1;
      return f(0 <= x && x <= 9), v += x * r.PENALTY_N4, f(0 <= v && v <= 2568888), v;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const v = Math.floor(this.version / 7) + 2, m = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (v * 2 - 2)) * 2;
        let g = [6];
        for (let x = this.size - 7; g.length < v; x -= m)
          g.splice(1, 0, x);
        return g;
      }
    }
    static getNumRawDataModules(v) {
      if (v < r.MIN_VERSION || v > r.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let m = (16 * v + 128) * v + 64;
      if (v >= 2) {
        const g = Math.floor(v / 7) + 2;
        m -= (25 * g - 10) * g - 55, v >= 7 && (m -= 36);
      }
      return f(208 <= m && m <= 29648), m;
    }
    static getNumDataCodewords(v, m) {
      return Math.floor(r.getNumRawDataModules(v) / 8) - r.ECC_CODEWORDS_PER_BLOCK[m.ordinal][v] * r.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][v];
    }
    static reedSolomonComputeDivisor(v) {
      if (v < 1 || v > 255)
        throw new RangeError("Degree out of range");
      let m = [];
      for (let x = 0; x < v - 1; x++)
        m.push(0);
      m.push(1);
      let g = 1;
      for (let x = 0; x < v; x++) {
        for (let S = 0; S < m.length; S++)
          m[S] = r.reedSolomonMultiply(m[S], g), S + 1 < m.length && (m[S] ^= m[S + 1]);
        g = r.reedSolomonMultiply(g, 2);
      }
      return m;
    }
    static reedSolomonComputeRemainder(v, m) {
      let g = m.map((x) => 0);
      for (const x of v) {
        const S = x ^ g.shift();
        g.push(0), m.forEach((w, j) => g[j] ^= r.reedSolomonMultiply(w, S));
      }
      return g;
    }
    static reedSolomonMultiply(v, m) {
      if (v >>> 8 || m >>> 8)
        throw new RangeError("Byte out of range");
      let g = 0;
      for (let x = 7; x >= 0; x--)
        g = g << 1 ^ (g >>> 7) * 285, g ^= (m >>> x & 1) * v;
      return f(g >>> 8 == 0), g;
    }
    finderPenaltyCountPatterns(v) {
      const m = v[1];
      f(m <= this.size * 3);
      const g = m > 0 && v[2] == m && v[3] == m * 3 && v[4] == m && v[5] == m;
      return (g && v[0] >= m * 4 && v[6] >= m ? 1 : 0) + (g && v[6] >= m * 4 && v[0] >= m ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(v, m, g) {
      return v && (this.finderPenaltyAddHistory(m, g), m = 0), m += this.size, this.finderPenaltyAddHistory(m, g), this.finderPenaltyCountPatterns(g);
    }
    finderPenaltyAddHistory(v, m) {
      m[0] == 0 && (v += this.size), m.pop(), m.unshift(v);
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
  function l(v, m, g) {
    if (m < 0 || m > 31 || v >>> m)
      throw new RangeError("Value out of range");
    for (let x = m - 1; x >= 0; x--)
      g.push(v >>> x & 1);
  }
  function d(v, m) {
    return (v >>> m & 1) != 0;
  }
  function f(v) {
    if (!v)
      throw new Error("Assertion error");
  }
  const c = class {
    constructor(v, m, g) {
      if (this.mode = v, this.numChars = m, this.bitData = g, m < 0)
        throw new RangeError("Invalid argument");
      this.bitData = g.slice();
    }
    static makeBytes(v) {
      let m = [];
      for (const g of v)
        l(g, 8, m);
      return new c(c.Mode.BYTE, v.length, m);
    }
    static makeNumeric(v) {
      if (!c.isNumeric(v))
        throw new RangeError("String contains non-numeric characters");
      let m = [];
      for (let g = 0; g < v.length; ) {
        const x = Math.min(v.length - g, 3);
        l(parseInt(v.substr(g, x), 10), x * 3 + 1, m), g += x;
      }
      return new c(c.Mode.NUMERIC, v.length, m);
    }
    static makeAlphanumeric(v) {
      if (!c.isAlphanumeric(v))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let m = [], g;
      for (g = 0; g + 2 <= v.length; g += 2) {
        let x = c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(g)) * 45;
        x += c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(g + 1)), l(x, 11, m);
      }
      return g < v.length && l(c.ALPHANUMERIC_CHARSET.indexOf(v.charAt(g)), 6, m), new c(c.Mode.ALPHANUMERIC, v.length, m);
    }
    static makeSegments(v) {
      return v == "" ? [] : c.isNumeric(v) ? [c.makeNumeric(v)] : c.isAlphanumeric(v) ? [c.makeAlphanumeric(v)] : [c.makeBytes(c.toUtf8ByteArray(v))];
    }
    static makeEci(v) {
      let m = [];
      if (v < 0)
        throw new RangeError("ECI assignment value out of range");
      if (v < 128)
        l(v, 8, m);
      else if (v < 16384)
        l(2, 2, m), l(v, 14, m);
      else if (v < 1e6)
        l(6, 3, m), l(v, 21, m);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, m);
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
    static getTotalBits(v, m) {
      let g = 0;
      for (const x of v) {
        const S = x.mode.numCharCountBits(m);
        if (x.numChars >= 1 << S)
          return 1 / 0;
        g += 4 + S + x.bitData.length;
      }
      return g;
    }
    static toUtf8ByteArray(v) {
      v = encodeURI(v);
      let m = [];
      for (let g = 0; g < v.length; g++)
        v.charAt(g) != "%" ? m.push(v.charCodeAt(g)) : (m.push(parseInt(v.substr(g + 1, 2), 16)), g += 2);
      return m;
    }
  };
  let y = c;
  y.NUMERIC_REGEX = /^[0-9]*$/, y.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, y.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", o.QrSegment = y;
})(so || (so = {}));
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
})(so || (so = {}));
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
})(so || (so = {}));
var Yf = so;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
Yf.QrCode.Ecc.LOW, Yf.QrCode.Ecc.MEDIUM, Yf.QrCode.Ecc.QUARTILE, Yf.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function WA() {
  V.useState(!1);
  const [o, r] = V.useState(!1), s = Nu(), l = Ni((x) => x.user), { t: d } = Ei(), f = async function(x) {
    x.preventDefault();
    const S = x.target.screenName.value, w = x.target.avatar.files[0];
    let j = l.avatar;
    w && (j = await y(w)), r(!0);
    try {
      await s.user.updateProfile({ display_name: S, avatar: j });
    } catch (U) {
      alert(U);
    } finally {
      r(!1), location.reload();
    }
  }, c = (x) => {
    const S = x.target.files[0].size;
    parseInt(S) > 31 * 1024 * 1024 && (alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "");
  }, y = async function(x) {
    let S = new FormData();
    return S.append("image", x), S.append("key", "d8dc5b96ed210c8360b48acb0fa5ee32"), (await (await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: S
    })).json()).data.url;
  };
  let v = window.serverURL;
  if (!v) {
    const x = location.pathname.match(/(.*?\/)ui/);
    v = x ? x[1] : "/";
  }
  const m = new URLSearchParams(location.search);
  let g = window.TOKEN || sessionStorage.getItem("TOKEN") || m.get("token");
  return g || (g = localStorage.getItem("TOKEN")), /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ E.jsxDEV("div", { className: "main", children: /* @__PURE__ */ E.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ E.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ E.jsxDEV("h2", { children: d("setting") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 125,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ E.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ E.jsxDEV("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ E.jsxDEV("p", { children: /* @__PURE__ */ E.jsxDEV(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ E.jsxDEV(
                "img",
                {
                  className: "profile-avatar",
                  src: l.avatar || `https://seccdn.libravatar.org/avatar/${l.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 133,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
              lineNumber: 130,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("h2", { children: l.display_name }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ E.jsxDEV("p", { children: l.email }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ E.jsxDEV(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ E.jsxDEV("section", { children: [
                /* @__PURE__ */ E.jsxDEV("h3", { children: d("profile") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 151,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ E.jsxDEV("form", { method: "post", onSubmit: f, children: [
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: d("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 155,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
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
                        lineNumber: 158,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 165,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 154,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 153,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ E.jsxDEV("li", { children: [
                    /* @__PURE__ */ E.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-3", children: d("change avatar") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 173,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ E.jsxDEV(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: c,
                        accept: "image/*"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 176,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ E.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 184,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 172,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 171,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ E.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ E.jsxDEV("li", { children: /* @__PURE__ */ E.jsxDEV(
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
                      lineNumber: 190,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 189,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 188,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 152,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 150,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 201,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ E.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 204,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 146,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
function GA() {
  const { t: o } = Ei(), r = Nu(), s = Ru(), l = Ni((g) => g.user), [d, f] = V.useState(!1), [c, y] = V.useState(!1), v = d1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  V.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const m = async function(g) {
    g.preventDefault(), f(!1);
    const x = g.target.nick.value;
    if (!x || x.length < 2)
      return f(o("nickname illegal"));
    const S = g.target.email.value;
    if (!S)
      return f(o("please input email"));
    const w = g.target.link.value, j = g.target.password.value, U = g.target["password-again"].value;
    if (!j || !U || U !== j)
      return f(o("passwords don't match"));
    try {
      y(!0);
      const O = await v("login"), P = await r.user.register({
        display_name: x,
        email: S,
        url: w,
        password: j,
        recaptchaV3: window.recaptchaV3Key ? O : void 0,
        turnstile: window.turnstileKey ? O : void 0
      });
      P && P.verify && alert(o("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (O) {
      f(O.message);
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
      /* @__PURE__ */ E.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: m, children: [
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
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ E.jsxDEV($n, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
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
function qA() {
  const o = Ni((c) => c.user), { t: r } = Ei(), [s, l] = V.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  V.useEffect(() => {
    _A({ page: s.page }).then((c) => {
      console.log(c), l({ ...s, ...c });
    });
  }, [s.page]);
  const d = (c) => [
    {
      key: "administrator",
      name: r("set administrator"),
      show: c.type === "guest",
      async action(y) {
        y.preventDefault(), await Ev({
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
        await Ev({
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
        await Ev({
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
    /* @__PURE__ */ E.jsxDEV(uo, {}, void 0, !1, {
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
                    src: b1(c.email, c.avatar),
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
                  ({ key: y, disable: v, name: m, action: g }) => v ? /* @__PURE__ */ E.jsxDEV("span", { className: "weak", children: m }, y, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 173,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ E.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${y}`,
                      onClick: g,
                      children: m
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
          x1,
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
var QA = typeof Symbol == "function" && Symbol.observable || "@@observable", wS = QA, Cv = () => Math.random().toString(36).substring(7).split("").join("."), XA = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Cv()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Cv()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Cv()}`
}, bi = XA;
function fd(o) {
  if (typeof o != "object" || o === null)
    return !1;
  let r = o;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(o) === r || Object.getPrototypeOf(o) === null;
}
function ZA(o) {
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
  if (nP(o))
    return "date";
  if (tP(o))
    return "error";
  const s = eP(o);
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
function eP(o) {
  return typeof o.constructor == "function" ? o.constructor.name : null;
}
function tP(o) {
  return o instanceof Error || typeof o.message == "string" && o.constructor && typeof o.constructor.stackTraceLimit == "number";
}
function nP(o) {
  return o instanceof Date ? !0 : typeof o.toDateString == "function" && typeof o.getDate == "function" && typeof o.setDate == "function";
}
function Ar(o) {
  let r = typeof o;
  return r = ZA(o), r;
}
function dd(o, r, s) {
  if (typeof o != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${Ar(o)}'`);
  if (typeof r == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof s > "u" && (s = r, r = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${Ar(s)}'`);
    return s(dd)(o, r);
  }
  let l = o, d = r, f = /* @__PURE__ */ new Map(), c = f, y = 0, v = !1;
  function m() {
    c === f && (c = /* @__PURE__ */ new Map(), f.forEach((O, P) => {
      c.set(P, O);
    }));
  }
  function g() {
    if (v)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function x(O) {
    if (typeof O != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${Ar(O)}'`);
    if (v)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let P = !0;
    m();
    const A = y++;
    return c.set(A, O), function() {
      if (P) {
        if (v)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        P = !1, m(), c.delete(A), f = null;
      }
    };
  }
  function S(O) {
    if (!fd(O))
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
    return (f = c).forEach((A) => {
      A();
    }), O;
  }
  function w(O) {
    if (typeof O != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${Ar(O)}`);
    l = O, S({
      type: bi.REPLACE
    });
  }
  function j() {
    const O = x;
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
          throw new Error(`Expected the observer to be an object. Instead, received: '${Ar(P)}'`);
        function A() {
          const k = P;
          k.next && k.next(g());
        }
        return A(), {
          unsubscribe: O(A)
        };
      },
      [wS]() {
        return this;
      }
    };
  }
  return S({
    type: bi.INIT
  }), {
    dispatch: S,
    subscribe: x,
    getState: g,
    replaceReducer: w,
    [wS]: j
  };
}
function aP(o, r, s) {
  return dd(o, r, s);
}
function RS(o) {
  typeof console < "u" && typeof console.error == "function" && console.error(o);
  try {
    throw new Error(o);
  } catch {
  }
}
function rP(o, r, s, l) {
  const d = Object.keys(r), f = s && s.type === bi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!fd(o))
    return `The ${f} has unexpected type of "${Ar(o)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const c = Object.keys(o).filter((y) => !r.hasOwnProperty(y) && !l[y]);
  if (c.forEach((y) => {
    l[y] = !0;
  }), !(s && s.type === bi.REPLACE) && c.length > 0)
    return `Unexpected ${c.length > 1 ? "keys" : "key"} "${c.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function iP(o) {
  Object.keys(o).forEach((r) => {
    const s = o[r];
    if (typeof s(void 0, {
      type: bi.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof s(void 0, {
      type: bi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined when probed with a random type. Don't try to handle '${bi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function S1(o) {
  const r = Object.keys(o), s = {};
  for (let c = 0; c < r.length; c++) {
    const y = r[c];
    typeof o[y] > "u" && RS(`No reducer provided for key "${y}"`), typeof o[y] == "function" && (s[y] = o[y]);
  }
  const l = Object.keys(s);
  let d;
  d = {};
  let f;
  try {
    iP(s);
  } catch (c) {
    f = c;
  }
  return function(y = {}, v) {
    if (f)
      throw f;
    {
      const x = rP(y, s, v, d);
      x && RS(x);
    }
    let m = !1;
    const g = {};
    for (let x = 0; x < l.length; x++) {
      const S = l[x], w = s[S], j = y[S], U = w(j, v);
      if (typeof U > "u") {
        const O = v && v.type;
        throw new Error(`When called with an action of type ${O ? `"${String(O)}"` : "(unknown type)"}, the slice reducer for key "${S}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      g[S] = U, m = m || U !== j;
    }
    return m = m || l.length !== Object.keys(y).length, m ? g : y;
  };
}
function jS(o, r) {
  return function(...s) {
    return r(o.apply(this, s));
  };
}
function oP(o, r) {
  if (typeof o == "function")
    return jS(o, r);
  if (typeof o != "object" || o === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${Ar(o)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const s = {};
  for (const l in o) {
    const d = o[l];
    typeof d == "function" && (s[l] = jS(d, r));
  }
  return s;
}
function zv(...o) {
  return o.length === 0 ? (r) => r : o.length === 1 ? o[0] : o.reduce((r, s) => (...l) => r(s(...l)));
}
function N1(...o) {
  return (r) => (s, l) => {
    const d = r(s, l);
    let f = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const c = {
      getState: d.getState,
      dispatch: (v, ...m) => f(v, ...m)
    }, y = o.map((v) => v(c));
    return f = zv(...y)(d.dispatch), {
      ...d,
      dispatch: f
    };
  };
}
function sP(o) {
  return fd(o) && "type" in o && typeof o.type == "string";
}
const lP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: bi,
  applyMiddleware: N1,
  bindActionCreators: oP,
  combineReducers: S1,
  compose: zv,
  createStore: dd,
  isAction: sP,
  isPlainObject: fd,
  legacy_createStore: aP
}, Symbol.toStringTag, { value: "Module" }));
function lo() {
  return lo = Object.assign || function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, lo.apply(this, arguments);
}
function uP(o) {
  var r;
  o.models.forEach(function(v) {
    return E1(o, v);
  });
  var s = C1(o), l = N1.apply(lP, o.reduxConfig.middlewares), d = o.reduxConfig.devtoolComposer ? (r = o.reduxConfig).devtoolComposer.apply(r, o.reduxConfig.enhancers.concat([l])) : fP(o.reduxConfig.devtoolOptions).apply(void 0, o.reduxConfig.enhancers.concat([l])), f = o.reduxConfig.createStore || dd, c = o.reduxConfig.initialState, y = c === void 0 ? {} : c;
  return f(s, y, d);
}
function E1(o, r) {
  var s = {}, l = Object.keys(r.reducers);
  l.forEach(function(y) {
    var v = dP(y) ? y : r.name + "/" + y;
    s[v] = r.reducers[y];
  });
  var d = function(v, m) {
    return v === void 0 && (v = r.state), m.type in s ? s[m.type](v, m.payload, m.meta) : v;
  }, f = r.baseReducer, c = f ? function(y, v) {
    return y === void 0 && (y = r.state), d(f(y, v), v);
  } : d;
  o.forEachPlugin("onReducer", function(y) {
    c = y(c, r.name, o) || c;
  }), o.reduxConfig.reducers[r.name] = c;
}
function C1(o) {
  var r = o.reduxConfig.rootReducers, s = cP(o.reduxConfig), l = s;
  return r && Object.keys(r).length && (l = function(f, c) {
    var y = r[c.type];
    return s(y ? y(f, c) : f, c);
  }), o.forEachPlugin("onRootReducer", function(d) {
    l = d(l, o) || l;
  }), l;
}
function cP(o) {
  var r = o.combineReducers || S1;
  return Object.keys(o.reducers).length ? r(o.reducers) : function(s) {
    return s;
  };
}
function fP(o) {
  return o === void 0 && (o = {}), !o.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(o) : zv;
}
function dP(o) {
  return o.indexOf("/") > -1;
}
var TS = function(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}, gi = function(r) {
  return !r || typeof r == "function";
}, Tu = function(r) {
  {
    var s = r(), l = [];
    if (s.forEach(function(d) {
      var f = d[0], c = d[1];
      f && l.push(c);
    }), l.length > 0)
      throw new Error(l.join(", "));
  }
}, pP = function(r) {
  Tu(function() {
    return [[!Array.isArray(r.plugins), "init config.plugins must be an array"], [!TS(r.models), "init config.models must be an object"], [!TS(r.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(r.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(r.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!gi(r.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!gi(r.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, w1 = function(r) {
  Tu(function() {
    return [[!r, "model config is required"], [typeof r.name != "string", 'model "name" [string] is required'], [r.state === void 0 && r.baseReducer === void 0, 'model "state" is required'], [!gi(r.baseReducer), 'model "baseReducer" must be a function']];
  });
}, mP = function(r) {
  Tu(function() {
    return [[!gi(r.onStoreCreated), "Plugin onStoreCreated must be a function"], [!gi(r.onModel), "Plugin onModel must be a function"], [!gi(r.onReducer), "Plugin onReducer must be a function"], [!gi(r.onRootReducer), "Plugin onRootReducer must be a function"], [!gi(r.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, hP = function(r, s, l) {
  Tu(function() {
    return [[!!l.match(/\/.+\//), "Invalid reducer name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid reducer (" + r + "/" + l + "). Must be a function"]];
  });
}, vP = function(r, s, l) {
  Tu(function() {
    return [[!!l.match(/\//), "Invalid effect name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid effect (" + r + "/" + l + "). Must be a function"]];
  });
}, R1 = function(r, s, l, d) {
  return Object.assign(function(f, c) {
    var y = {
      type: s + "/" + l
    };
    return typeof f < "u" && (y.payload = f), typeof c < "u" && (y.meta = c), r.dispatch(y);
  }, {
    isEffect: d
  });
}, gP = function(r, s) {
  var l = r.dispatch[s.name], d = Object.keys(s.reducers);
  d.forEach(function(f) {
    hP(s.name, s.reducers, f), l[f] = R1(r, s.name, f, !1);
  });
}, yP = function(r, s, l) {
  var d = r.dispatch[l.name], f = {};
  l.effects && (f = typeof l.effects == "function" ? l.effects(r.dispatch) : l.effects);
  var c = Object.keys(f);
  c.forEach(function(y) {
    vP(l.name, f, y), s.effects[l.name + "/" + y] = f[y].bind(d), d[y] = R1(r, l.name, y, !0);
  });
};
function bP(o) {
  return {
    models: xP(o.models),
    reduxConfig: o.redux,
    forEachPlugin: function(s, l) {
      o.plugins.forEach(function(d) {
        d[s] && l(d[s]);
      });
    },
    effects: {}
  };
}
function xP(o) {
  return Object.keys(o).map(function(r) {
    var s = SP(r, o[r]);
    return w1(s), s;
  });
}
function SP(o, r) {
  return lo({
    name: o,
    reducers: {}
  }, r);
}
function NP(o) {
  var r = bP(o);
  r.reduxConfig.middlewares.push(EP(r)), r.forEachPlugin("createMiddleware", function(d) {
    r.reduxConfig.middlewares.push(d(r));
  });
  var s = uP(r), l = lo({}, s, {
    name: o.name,
    addModel: function(f) {
      w1(f), E1(r, f), DS(l, f), kS(l, r, f), s.replaceReducer(C1(r)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return CP(l, o.plugins), r.models.forEach(function(d) {
    return DS(l, d);
  }), r.models.forEach(function(d) {
    return kS(l, r, d);
  }), r.forEachPlugin("onStoreCreated", function(d) {
    l = d(l, r) || l;
  }), l;
}
function EP(o) {
  return function(r) {
    return function(s) {
      return function(l) {
        return l.type in o.effects ? (s(l), o.effects[l.type](l.payload, r.getState(), l.meta)) : s(l);
      };
    };
  };
}
function DS(o, r) {
  var s = {};
  o.dispatch["" + r.name] = s, gP(o, r);
}
function kS(o, r, s) {
  yP(o, r, s), r.forEachPlugin("onModel", function(l) {
    l(s, o);
  });
}
function CP(o, r) {
  r.forEach(function(s) {
    if (s.exposed) {
      var l = Object.keys(s.exposed);
      l.forEach(function(d) {
        if (s.exposed) {
          var f = s.exposed[d], c = typeof f == "function";
          o[d] = c ? function() {
            for (var y = arguments.length, v = new Array(y), m = 0; m < y; m++)
              v[m] = arguments[m];
            return f.apply(void 0, [o].concat(v));
          } : Object.create(s.exposed[d]);
        }
      });
    }
  });
}
var OS = 0;
function wP(o) {
  var r, s, l, d = (r = o.name) != null ? r : "Rematch Store " + OS;
  OS += 1;
  var f = {
    name: d,
    models: o.models || {},
    plugins: o.plugins || [],
    redux: lo({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, o.redux, {
      devtoolOptions: lo({
        name: d
      }, (s = (l = o.redux) == null ? void 0 : l.devtoolOptions) != null ? s : {})
    })
  };
  return pP(f), f.plugins.forEach(function(c) {
    c.config && (f.models = Kf(f.models, c.config.models), c.config.redux && (f.redux.initialState = Kf(f.redux.initialState, c.config.redux.initialState), f.redux.reducers = Kf(f.redux.reducers, c.config.redux.reducers), f.redux.rootReducers = Kf(f.redux.rootReducers, c.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, c.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, c.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || c.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || c.config.redux.createStore)), mP(c);
  }), f;
}
function Kf(o, r) {
  return r ? lo({}, r, o) : o;
}
var RP = function(r) {
  var s = wP(r || {});
  return NP(s);
};
async function jP() {
  return un("token").catch(() => {
    j1(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function TP({ email: o, password: r, code: s, recaptchaV3: l, turnstile: d }) {
  return un({
    url: "token",
    method: "POST",
    body: { email: o, password: r, code: s, recaptchaV3: l, turnstile: d }
  });
}
async function j1() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function DP(o) {
  return un({ url: "user", method: "POST", body: o });
}
async function kP({ email: o }) {
  return un({
    url: "user/password",
    method: "PUT",
    body: { email: o }
  });
}
const OP = {
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
      const r = await jP();
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
      const { token: y, ...v } = await TP({
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
      j1(), o.user.setUser(null);
    },
    register(r) {
      return DP(r);
    },
    forgot(r) {
      return kP(r);
    },
    async updateProfile(r) {
      return await LA(r), window.opener && window.opener.postMessage({ type: "profile", data: r }, "*"), o.user.updateUser(r);
    }
  })
}, T1 = RP({ models: { user: OP } });
function Wf(o) {
  const r = Ni((s) => s.user);
  return V.useEffect(() => {
    const s = o.meta || {}, l = o.basename || "";
    if (!(r != null && r.email))
      return location.href = l + "/ui/login?redirect=" + location.pathname.replace(l, "");
    if (s.auth ? o.meta.auth !== r.type : !1)
      return location.href = l + "/ui/profile";
  }, [r, o.meta]), r ? o.children : null;
}
function LP() {
  const o = location.pathname.match(/(.*?)\/ui/), r = o ? o[1] : "/";
  return /* @__PURE__ */ E.jsxDEV(uO, { store: T1, children: /* @__PURE__ */ E.jsxDEV(h3, { basename: r, children: /* @__PURE__ */ E.jsxDEV(e3, { children: [
    /* @__PURE__ */ E.jsxDEV(
      vi,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Wf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(BA, {}, void 0, !1, {
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
      vi,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Wf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(qA, {}, void 0, !1, {
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
      vi,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Wf, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ E.jsxDEV(KA, {}, void 0, !1, {
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
    /* @__PURE__ */ E.jsxDEV(vi, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ E.jsxDEV(AA, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(vi, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ E.jsxDEV(GA, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(vi, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ E.jsxDEV(q_, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ E.jsxDEV(
      vi,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ E.jsxDEV(Wf, { children: /* @__PURE__ */ E.jsxDEV(WA, {}, void 0, !1, {
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
  slice: _P,
  forEach: AP
} = [];
function PP(o) {
  return AP.call(_P.call(arguments, 1), (r) => {
    if (r)
      for (const s in r)
        o[s] === void 0 && (o[s] = r[s]);
  }), o;
}
const LS = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, MP = (o, r, s) => {
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
    if (!LS.test(l.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${l.domain}`;
  }
  if (l.path) {
    if (!LS.test(l.path))
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
}, _S = {
  create(o, r, s, l) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + s * 60 * 1e3)), l && (d.domain = l), document.cookie = MP(o, encodeURIComponent(r), d);
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
var UP = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(o) {
    let {
      lookupCookie: r
    } = o;
    if (r && typeof document < "u")
      return _S.read(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(o, r) {
    let {
      lookupCookie: s,
      cookieMinutes: l,
      cookieDomain: d,
      cookieOptions: f
    } = r;
    s && typeof document < "u" && _S.create(s, o, l, d, f);
  }
}, VP = {
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
let mu = null;
const AS = () => {
  if (mu !== null) return mu;
  try {
    mu = window !== "undefined" && window.localStorage !== null;
    const o = "i18next.translate.boo";
    window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o);
  } catch {
    mu = !1;
  }
  return mu;
};
var FP = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(o) {
    let {
      lookupLocalStorage: r
    } = o;
    if (r && AS())
      return window.localStorage.getItem(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(o, r) {
    let {
      lookupLocalStorage: s
    } = r;
    s && AS() && window.localStorage.setItem(s, o);
  }
};
let hu = null;
const PS = () => {
  if (hu !== null) return hu;
  try {
    hu = window !== "undefined" && window.sessionStorage !== null;
    const o = "i18next.translate.boo";
    window.sessionStorage.setItem(o, "foo"), window.sessionStorage.removeItem(o);
  } catch {
    hu = !1;
  }
  return hu;
};
var zP = {
  name: "sessionStorage",
  lookup(o) {
    let {
      lookupSessionStorage: r
    } = o;
    if (r && PS())
      return window.sessionStorage.getItem(r) || void 0;
  },
  cacheUserLanguage(o, r) {
    let {
      lookupSessionStorage: s
    } = r;
    s && PS() && window.sessionStorage.setItem(s, o);
  }
}, $P = {
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
}, HP = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(o) {
    let {
      htmlTag: r
    } = o, s;
    const l = r || (typeof document < "u" ? document.documentElement : null);
    return l && typeof l.getAttribute == "function" && (s = l.getAttribute("lang")), s;
  }
}, JP = {
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
}, BP = {
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
function IP() {
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
class D1 {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = r || {
      languageUtils: {}
    }, this.options = PP(s, this.options || {}, IP()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(UP), this.addDetector(VP), this.addDetector(FP), this.addDetector(zP), this.addDetector($P), this.addDetector(HP), this.addDetector(JP), this.addDetector(BP);
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
D1.type = "languageDetector";
cn.use(D1).use(K3).init({
  // we init with resources
  resources: G_,
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
async function YP() {
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
  }), await Promise.all([T1.dispatch({ type: "user/loadUserInfo" })]).catch(
    (s) => {
      console.error(s);
    }
  );
  const o = document.createElement("div");
  o.style.height = "100%", document.body.appendChild(o), $S(o).render(
    /* @__PURE__ */ E.jsxDEV(ld.StrictMode, { children: /* @__PURE__ */ E.jsxDEV(LP, {}, void 0, !1, {
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
YP();
