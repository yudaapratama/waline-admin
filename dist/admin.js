(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`@charset "UTF-8";/*!
* Cropper.js v1.6.2
* https://fengyuanchen.github.io/cropperjs
*
* Copyright 2015-present Chen Fengyuan
* Released under the MIT license
*
* Date: 2024-04-21T07:43:02.731Z
*/.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#373c42;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#292d33}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#373c42}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}`)),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function x3(i, a) {
  for (var o = 0; o < a.length; o++) {
    const s = a[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const d in s)
        if (d !== "default" && !(d in i)) {
          const c = Object.getOwnPropertyDescriptor(s, d);
          c && Object.defineProperty(i, d, c.get ? c : {
            enumerable: !0,
            get: () => s[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function Fd(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var KN = { exports: {} }, og = {}, GN = { exports: {} }, kd = { exports: {} };
kd.exports;
(function(i, a) {
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
    var o = "18.3.1", s = Symbol.for("react.element"), d = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), T = Symbol.iterator, A = "@@iterator";
    function M(N) {
      if (N === null || typeof N != "object")
        return null;
      var k = T && N[T] || N[A];
      return typeof k == "function" ? k : null;
    }
    var V = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, D = {
      transition: null
    }, F = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, L = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, G = {}, ce = null;
    function ve(N) {
      ce = N;
    }
    G.setExtraStackFrame = function(N) {
      ce = N;
    }, G.getCurrentStack = null, G.getStackAddendum = function() {
      var N = "";
      ce && (N += ce);
      var k = G.getCurrentStack;
      return k && (N += k() || ""), N;
    };
    var fe = !1, ge = !1, Ve = !1, de = !1, ye = !1, he = {
      ReactCurrentDispatcher: V,
      ReactCurrentBatchConfig: D,
      ReactCurrentOwner: L
    };
    he.ReactDebugCurrentFrame = G, he.ReactCurrentActQueue = F;
    function Pe(N) {
      {
        for (var k = arguments.length, I = new Array(k > 1 ? k - 1 : 0), Y = 1; Y < k; Y++)
          I[Y - 1] = arguments[Y];
        He("warn", N, I);
      }
    }
    function Ne(N) {
      {
        for (var k = arguments.length, I = new Array(k > 1 ? k - 1 : 0), Y = 1; Y < k; Y++)
          I[Y - 1] = arguments[Y];
        He("error", N, I);
      }
    }
    function He(N, k, I) {
      {
        var Y = he.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (k += "%s", I = I.concat([ee]));
        var Ce = I.map(function(pe) {
          return String(pe);
        });
        Ce.unshift("Warning: " + k), Function.prototype.apply.call(console[N], console, Ce);
      }
    }
    var yt = {};
    function Be(N, k) {
      {
        var I = N.constructor, Y = I && (I.displayName || I.name) || "ReactClass", ee = Y + "." + k;
        if (yt[ee])
          return;
        Ne("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", k, Y), yt[ee] = !0;
      }
    }
    var Vt = {
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
      enqueueForceUpdate: function(N, k, I) {
        Be(N, "forceUpdate");
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
      enqueueReplaceState: function(N, k, I, Y) {
        Be(N, "replaceState");
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
      enqueueSetState: function(N, k, I, Y) {
        Be(N, "setState");
      }
    }, bt = Object.assign, Ft = {};
    Object.freeze(Ft);
    function Tn(N, k, I) {
      this.props = N, this.context = k, this.refs = Ft, this.updater = I || Vt;
    }
    Tn.prototype.isReactComponent = {}, Tn.prototype.setState = function(N, k) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, k, "setState");
    }, Tn.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    {
      var da = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, ja = function(N, k) {
        Object.defineProperty(Tn.prototype, N, {
          get: function() {
            Pe("%s(...) is deprecated in plain JavaScript React classes. %s", k[0], k[1]);
          }
        });
      };
      for (var Ta in da)
        da.hasOwnProperty(Ta) && ja(Ta, da[Ta]);
    }
    function pa() {
    }
    pa.prototype = Tn.prototype;
    function on(N, k, I) {
      this.props = N, this.context = k, this.refs = Ft, this.updater = I || Vt;
    }
    var Un = on.prototype = new pa();
    Un.constructor = on, bt(Un, Tn.prototype), Un.isPureReactComponent = !0;
    function Xn() {
      var N = {
        current: null
      };
      return Object.seal(N), N;
    }
    var qn = Array.isArray;
    function Mt(N) {
      return qn(N);
    }
    function yn(N) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, I = k && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return I;
      }
    }
    function qt(N) {
      try {
        return zt(N), !1;
      } catch {
        return !0;
      }
    }
    function zt(N) {
      return "" + N;
    }
    function $t(N) {
      if (qt(N))
        return Ne("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(N)), zt(N);
    }
    function Qn(N, k, I) {
      var Y = N.displayName;
      if (Y)
        return Y;
      var ee = k.displayName || k.name || "";
      return ee !== "" ? I + "(" + ee + ")" : I;
    }
    function ha(N) {
      return N.displayName || "Context";
    }
    function Vn(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && Ne("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case c:
          return "Fragment";
        case d:
          return "Portal";
        case g:
          return "Profiler";
        case u:
          return "StrictMode";
        case y:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case p:
            var k = N;
            return ha(k) + ".Consumer";
          case v:
            var I = N;
            return ha(I._context) + ".Provider";
          case m:
            return Qn(N, N.render, "ForwardRef");
          case C:
            var Y = N.displayName || null;
            return Y !== null ? Y : Vn(N.type) || "Memo";
          case j: {
            var ee = N, Ce = ee._payload, pe = ee._init;
            try {
              return Vn(pe(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Da = Object.prototype.hasOwnProperty, ma = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dn, va, bn;
    bn = {};
    function Zn(N) {
      if (Da.call(N, "ref")) {
        var k = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function kt(N) {
      if (Da.call(N, "key")) {
        var k = Object.getOwnPropertyDescriptor(N, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function ga(N, k) {
      var I = function() {
        Dn || (Dn = !0, Ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
      };
      I.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: I,
        configurable: !0
      });
    }
    function vr(N, k) {
      var I = function() {
        va || (va = !0, Ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
      };
      I.isReactWarning = !0, Object.defineProperty(N, "ref", {
        get: I,
        configurable: !0
      });
    }
    function gr(N) {
      if (typeof N.ref == "string" && L.current && N.__self && L.current.stateNode !== N.__self) {
        var k = Vn(L.current.type);
        bn[k] || (Ne('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k, N.ref), bn[k] = !0);
      }
    }
    var ne = function(N, k, I, Y, ee, Ce, pe) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: N,
        key: k,
        ref: I,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Ce
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
    function be(N, k, I) {
      var Y, ee = {}, Ce = null, pe = null, Te = null, Je = null;
      if (k != null) {
        Zn(k) && (pe = k.ref, gr(k)), kt(k) && ($t(k.key), Ce = "" + k.key), Te = k.__self === void 0 ? null : k.__self, Je = k.__source === void 0 ? null : k.__source;
        for (Y in k)
          Da.call(k, Y) && !ma.hasOwnProperty(Y) && (ee[Y] = k[Y]);
      }
      var it = arguments.length - 2;
      if (it === 1)
        ee.children = I;
      else if (it > 1) {
        for (var ct = Array(it), ft = 0; ft < it; ft++)
          ct[ft] = arguments[ft + 2];
        Object.freeze && Object.freeze(ct), ee.children = ct;
      }
      if (N && N.defaultProps) {
        var vt = N.defaultProps;
        for (Y in vt)
          ee[Y] === void 0 && (ee[Y] = vt[Y]);
      }
      if (Ce || pe) {
        var jt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
        Ce && ga(ee, jt), pe && vr(ee, jt);
      }
      return ne(N, Ce, pe, Te, Je, L.current, ee);
    }
    function Ue(N, k) {
      var I = ne(N.type, k, N.ref, N._self, N._source, N._owner, N.props);
      return I;
    }
    function at(N, k, I) {
      if (N == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
      var Y, ee = bt({}, N.props), Ce = N.key, pe = N.ref, Te = N._self, Je = N._source, it = N._owner;
      if (k != null) {
        Zn(k) && (pe = k.ref, it = L.current), kt(k) && ($t(k.key), Ce = "" + k.key);
        var ct;
        N.type && N.type.defaultProps && (ct = N.type.defaultProps);
        for (Y in k)
          Da.call(k, Y) && !ma.hasOwnProperty(Y) && (k[Y] === void 0 && ct !== void 0 ? ee[Y] = ct[Y] : ee[Y] = k[Y]);
      }
      var ft = arguments.length - 2;
      if (ft === 1)
        ee.children = I;
      else if (ft > 1) {
        for (var vt = Array(ft), jt = 0; jt < ft; jt++)
          vt[jt] = arguments[jt + 2];
        ee.children = vt;
      }
      return ne(N.type, Ce, pe, Te, Je, it, ee);
    }
    function rt(N) {
      return typeof N == "object" && N !== null && N.$$typeof === s;
    }
    var Ht = ".", Ot = ":";
    function Fn(N) {
      var k = /[=:]/g, I = {
        "=": "=0",
        ":": "=2"
      }, Y = N.replace(k, function(ee) {
        return I[ee];
      });
      return "$" + Y;
    }
    var ut = !1, ea = /\/+/g;
    function ht(N) {
      return N.replace(ea, "$&/");
    }
    function mt(N, k) {
      return typeof N == "object" && N !== null && N.key != null ? ($t(N.key), Fn("" + N.key)) : k.toString(36);
    }
    function Xa(N, k, I, Y, ee) {
      var Ce = typeof N;
      (Ce === "undefined" || Ce === "boolean") && (N = null);
      var pe = !1;
      if (N === null)
        pe = !0;
      else
        switch (Ce) {
          case "string":
          case "number":
            pe = !0;
            break;
          case "object":
            switch (N.$$typeof) {
              case s:
              case d:
                pe = !0;
            }
        }
      if (pe) {
        var Te = N, Je = ee(Te), it = Y === "" ? Ht + mt(Te, 0) : Y;
        if (Mt(Je)) {
          var ct = "";
          it != null && (ct = ht(it) + "/"), Xa(Je, k, ct, "", function(Xd) {
            return Xd;
          });
        } else Je != null && (rt(Je) && (Je.key && (!Te || Te.key !== Je.key) && $t(Je.key), Je = Ue(
          Je,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          I + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (Je.key && (!Te || Te.key !== Je.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            ht("" + Je.key) + "/"
          ) : "") + it
        )), k.push(Je));
        return 1;
      }
      var ft, vt, jt = 0, et = Y === "" ? Ht : Y + Ot;
      if (Mt(N))
        for (var ni = 0; ni < N.length; ni++)
          ft = N[ni], vt = et + mt(ft, ni), jt += Xa(ft, k, I, vt, ee);
      else {
        var _o = M(N);
        if (typeof _o == "function") {
          var nl = N;
          _o === nl.entries && (ut || Pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ut = !0);
          for (var Gd = _o.call(nl), Nr, al = 0; !(Nr = Gd.next()).done; )
            ft = Nr.value, vt = et + mt(ft, al++), jt += Xa(ft, k, I, vt, ee);
        } else if (Ce === "object") {
          var rl = String(N);
          throw new Error("Objects are not valid as a React child (found: " + (rl === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : rl) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return jt;
    }
    function ka(N, k, I) {
      if (N == null)
        return N;
      var Y = [], ee = 0;
      return Xa(N, Y, "", "", function(Ce) {
        return k.call(I, Ce, ee++);
      }), Y;
    }
    function Vi(N) {
      var k = 0;
      return ka(N, function() {
        k++;
      }), k;
    }
    function To(N, k, I) {
      ka(N, function() {
        k.apply(this, arguments);
      }, I);
    }
    function $s(N) {
      return ka(N, function(k) {
        return k;
      }) || [];
    }
    function Fi(N) {
      if (!rt(N))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return N;
    }
    function zi(N) {
      var k = {
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
      k.Provider = {
        $$typeof: v,
        _context: k
      };
      var I = !1, Y = !1, ee = !1;
      {
        var Ce = {
          $$typeof: p,
          _context: k
        };
        Object.defineProperties(Ce, {
          Provider: {
            get: function() {
              return Y || (Y = !0, Ne("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), k.Provider;
            },
            set: function(pe) {
              k.Provider = pe;
            }
          },
          _currentValue: {
            get: function() {
              return k._currentValue;
            },
            set: function(pe) {
              k._currentValue = pe;
            }
          },
          _currentValue2: {
            get: function() {
              return k._currentValue2;
            },
            set: function(pe) {
              k._currentValue2 = pe;
            }
          },
          _threadCount: {
            get: function() {
              return k._threadCount;
            },
            set: function(pe) {
              k._threadCount = pe;
            }
          },
          Consumer: {
            get: function() {
              return I || (I = !0, Ne("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), k.Consumer;
            }
          },
          displayName: {
            get: function() {
              return k.displayName;
            },
            set: function(pe) {
              ee || (Pe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", pe), ee = !0);
            }
          }
        }), k.Consumer = Ce;
      }
      return k._currentRenderer = null, k._currentRenderer2 = null, k;
    }
    var yr = -1, Kr = 0, br = 1, qa = 2;
    function Oa(N) {
      if (N._status === yr) {
        var k = N._result, I = k();
        if (I.then(function(Ce) {
          if (N._status === Kr || N._status === yr) {
            var pe = N;
            pe._status = br, pe._result = Ce;
          }
        }, function(Ce) {
          if (N._status === Kr || N._status === yr) {
            var pe = N;
            pe._status = qa, pe._result = Ce;
          }
        }), N._status === yr) {
          var Y = N;
          Y._status = Kr, Y._result = I;
        }
      }
      if (N._status === br) {
        var ee = N._result;
        return ee === void 0 && Ne(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || Ne(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw N._result;
    }
    function O(N) {
      var k = {
        // We use these fields to store the result.
        _status: yr,
        _result: N
      }, I = {
        $$typeof: j,
        _payload: k,
        _init: Oa
      };
      {
        var Y, ee;
        Object.defineProperties(I, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(Ce) {
              Ne("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = Ce, Object.defineProperty(I, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(Ce) {
              Ne("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = Ce, Object.defineProperty(I, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return I;
    }
    function Q(N) {
      N != null && N.$$typeof === C ? Ne("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof N != "function" ? Ne("forwardRef requires a render function but was given %s.", N === null ? "null" : typeof N) : N.length !== 0 && N.length !== 2 && Ne("forwardRef render functions accept exactly two parameters: props and ref. %s", N.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), N != null && (N.defaultProps != null || N.propTypes != null) && Ne("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var k = {
        $$typeof: m,
        render: N
      };
      {
        var I;
        Object.defineProperty(k, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(Y) {
            I = Y, !N.name && !N.displayName && (N.displayName = Y);
          }
        });
      }
      return k;
    }
    var ae;
    ae = Symbol.for("react.module.reference");
    function we(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === c || N === g || ye || N === u || N === y || N === x || de || N === U || fe || ge || Ve || typeof N == "object" && N !== null && (N.$$typeof === j || N.$$typeof === C || N.$$typeof === v || N.$$typeof === p || N.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === ae || N.getModuleId !== void 0));
    }
    function Ie(N, k) {
      we(N) || Ne("memo: The first argument must be a component. Instead received: %s", N === null ? "null" : typeof N);
      var I = {
        $$typeof: C,
        type: N,
        compare: k === void 0 ? null : k
      };
      {
        var Y;
        Object.defineProperty(I, "displayName", {
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
      return I;
    }
    function je() {
      var N = V.current;
      return N === null && Ne(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), N;
    }
    function _e(N) {
      var k = je();
      if (N._context !== void 0) {
        var I = N._context;
        I.Consumer === N ? Ne("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : I.Provider === N && Ne("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return k.useContext(N);
    }
    function Me(N) {
      var k = je();
      return k.useState(N);
    }
    function wt(N, k, I) {
      var Y = je();
      return Y.useReducer(N, k, I);
    }
    function Fe(N) {
      var k = je();
      return k.useRef(N);
    }
    function xt(N, k) {
      var I = je();
      return I.useEffect(N, k);
    }
    function xn(N, k) {
      var I = je();
      return I.useInsertionEffect(N, k);
    }
    function La(N, k) {
      var I = je();
      return I.useLayoutEffect(N, k);
    }
    function Ma(N, k) {
      var I = je();
      return I.useCallback(N, k);
    }
    function Qt(N, k) {
      var I = je();
      return I.useMemo(N, k);
    }
    function $i(N, k, I) {
      var Y = je();
      return Y.useImperativeHandle(N, k, I);
    }
    function Do(N, k) {
      {
        var I = je();
        return I.useDebugValue(N, k);
      }
    }
    function Hs() {
      var N = je();
      return N.useTransition();
    }
    function xr(N) {
      var k = je();
      return k.useDeferredValue(N);
    }
    function $e() {
      var N = je();
      return N.useId();
    }
    function Hi(N, k, I) {
      var Y = je();
      return Y.useSyncExternalStore(N, k, I);
    }
    var Gr = 0, Bs, Is, Js, Ys, Ws, Ks, Gs;
    function rc() {
    }
    rc.__reactDisabledLog = !0;
    function Yd() {
      {
        if (Gr === 0) {
          Bs = console.log, Is = console.info, Js = console.warn, Ys = console.error, Ws = console.group, Ks = console.groupCollapsed, Gs = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: rc,
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
        Gr++;
      }
    }
    function Xs() {
      {
        if (Gr--, Gr === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, N, {
              value: Bs
            }),
            info: bt({}, N, {
              value: Is
            }),
            warn: bt({}, N, {
              value: Js
            }),
            error: bt({}, N, {
              value: Ys
            }),
            group: bt({}, N, {
              value: Ws
            }),
            groupCollapsed: bt({}, N, {
              value: Ks
            }),
            groupEnd: bt({}, N, {
              value: Gs
            })
          });
        }
        Gr < 0 && Ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Bi = he.ReactCurrentDispatcher, ya;
    function Xr(N, k, I) {
      {
        if (ya === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            ya = Y && Y[1] || "";
          }
        return `
` + ya + N;
      }
    }
    var qr = !1, ko;
    {
      var qs = typeof WeakMap == "function" ? WeakMap : Map;
      ko = new qs();
    }
    function ic(N, k) {
      if (!N || qr)
        return "";
      {
        var I = ko.get(N);
        if (I !== void 0)
          return I;
      }
      var Y;
      qr = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = Bi.current, Bi.current = null, Yd();
      try {
        if (k) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (et) {
              Y = et;
            }
            Reflect.construct(N, [], pe);
          } else {
            try {
              pe.call();
            } catch (et) {
              Y = et;
            }
            N.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            Y = et;
          }
          N();
        }
      } catch (et) {
        if (et && Y && typeof et.stack == "string") {
          for (var Te = et.stack.split(`
`), Je = Y.stack.split(`
`), it = Te.length - 1, ct = Je.length - 1; it >= 1 && ct >= 0 && Te[it] !== Je[ct]; )
            ct--;
          for (; it >= 1 && ct >= 0; it--, ct--)
            if (Te[it] !== Je[ct]) {
              if (it !== 1 || ct !== 1)
                do
                  if (it--, ct--, ct < 0 || Te[it] !== Je[ct]) {
                    var ft = `
` + Te[it].replace(" at new ", " at ");
                    return N.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", N.displayName)), typeof N == "function" && ko.set(N, ft), ft;
                  }
                while (it >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        qr = !1, Bi.current = Ce, Xs(), Error.prepareStackTrace = ee;
      }
      var vt = N ? N.displayName || N.name : "", jt = vt ? Xr(vt) : "";
      return typeof N == "function" && ko.set(N, jt), jt;
    }
    function Qs(N, k, I) {
      return ic(N, !1);
    }
    function Wd(N) {
      var k = N.prototype;
      return !!(k && k.isReactComponent);
    }
    function Qr(N, k, I) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return ic(N, Wd(N));
      if (typeof N == "string")
        return Xr(N);
      switch (N) {
        case y:
          return Xr("Suspense");
        case x:
          return Xr("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case m:
            return Qs(N.render);
          case C:
            return Qr(N.type, k, I);
          case j: {
            var Y = N, ee = Y._payload, Ce = Y._init;
            try {
              return Qr(Ce(ee), k, I);
            } catch {
            }
          }
        }
      return "";
    }
    var oc = {}, Zs = he.ReactDebugCurrentFrame;
    function Oo(N) {
      if (N) {
        var k = N._owner, I = Qr(N.type, N._source, k ? k.type : null);
        Zs.setExtraStackFrame(I);
      } else
        Zs.setExtraStackFrame(null);
    }
    function sc(N, k, I, Y, ee) {
      {
        var Ce = Function.call.bind(Da);
        for (var pe in N)
          if (Ce(N, pe)) {
            var Te = void 0;
            try {
              if (typeof N[pe] != "function") {
                var Je = Error((Y || "React class") + ": " + I + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              Te = N[pe](k, pe, Y, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              Te = it;
            }
            Te && !(Te instanceof Error) && (Oo(ee), Ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", I, pe, typeof Te), Oo(null)), Te instanceof Error && !(Te.message in oc) && (oc[Te.message] = !0, Oo(ee), Ne("Failed %s type: %s", I, Te.message), Oo(null));
          }
      }
    }
    function qe(N) {
      if (N) {
        var k = N._owner, I = Qr(N.type, N._source, k ? k.type : null);
        ve(I);
      } else
        ve(null);
    }
    var el;
    el = !1;
    function tl() {
      if (L.current) {
        var N = Vn(L.current.type);
        if (N)
          return `

Check the render method of \`` + N + "`.";
      }
      return "";
    }
    function Le(N) {
      if (N !== void 0) {
        var k = N.fileName.replace(/^.*[\\\/]/, ""), I = N.lineNumber;
        return `

Check your code at ` + k + ":" + I + ".";
      }
      return "";
    }
    function lc(N) {
      return N != null ? Le(N.__source) : "";
    }
    var Sn = {};
    function Ii(N) {
      var k = tl();
      if (!k) {
        var I = typeof N == "string" ? N : N.displayName || N.name;
        I && (k = `

Check the top-level render call using <` + I + ">.");
      }
      return k;
    }
    function Zr(N, k) {
      if (!(!N._store || N._store.validated || N.key != null)) {
        N._store.validated = !0;
        var I = Ii(k);
        if (!Sn[I]) {
          Sn[I] = !0;
          var Y = "";
          N && N._owner && N._owner !== L.current && (Y = " It was passed a child from " + Vn(N._owner.type) + "."), qe(N), Ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, Y), qe(null);
        }
      }
    }
    function uc(N, k) {
      if (typeof N == "object") {
        if (Mt(N))
          for (var I = 0; I < N.length; I++) {
            var Y = N[I];
            rt(Y) && Zr(Y, k);
          }
        else if (rt(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ee = M(N);
          if (typeof ee == "function" && ee !== N.entries)
            for (var Ce = ee.call(N), pe; !(pe = Ce.next()).done; )
              rt(pe.value) && Zr(pe.value, k);
        }
      }
    }
    function Zt(N) {
      {
        var k = N.type;
        if (k == null || typeof k == "string")
          return;
        var I;
        if (typeof k == "function")
          I = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === C))
          I = k.propTypes;
        else
          return;
        if (I) {
          var Y = Vn(k);
          sc(I, N.props, "prop", Y, N);
        } else if (k.PropTypes !== void 0 && !el) {
          el = !0;
          var ee = Vn(k);
          Ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && Ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(N) {
      {
        for (var k = Object.keys(N.props), I = 0; I < k.length; I++) {
          var Y = k[I];
          if (Y !== "children" && Y !== "key") {
            qe(N), Ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), qe(null);
            break;
          }
        }
        N.ref !== null && (qe(N), Ne("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    function cc(N, k, I) {
      var Y = we(N);
      if (!Y) {
        var ee = "";
        (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Ce = lc(k);
        Ce ? ee += Ce : ee += tl();
        var pe;
        N === null ? pe = "null" : Mt(N) ? pe = "array" : N !== void 0 && N.$$typeof === s ? (pe = "<" + (Vn(N.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof N, Ne("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, ee);
      }
      var Te = be.apply(this, arguments);
      if (Te == null)
        return Te;
      if (Y)
        for (var Je = 2; Je < arguments.length; Je++)
          uc(arguments[Je], N);
      return N === c ? Et(Te) : Zt(Te), Te;
    }
    var ta = !1;
    function zn(N) {
      var k = cc.bind(null, N);
      return k.type = N, ta || (ta = !0, Pe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(k, "type", {
        enumerable: !1,
        get: function() {
          return Pe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: N
          }), N;
        }
      }), k;
    }
    function Qa(N, k, I) {
      for (var Y = at.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        uc(arguments[ee], Y.type);
      return Zt(Y), Y;
    }
    function Kd(N, k) {
      var I = D.transition;
      D.transition = {};
      var Y = D.transition;
      D.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        N();
      } finally {
        if (D.transition = I, I === null && Y._updatedFibers) {
          var ee = Y._updatedFibers.size;
          ee > 10 && Pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
        }
      }
    }
    var Lo = !1, Ji = null;
    function fc(N) {
      if (Ji === null)
        try {
          var k = ("require" + Math.random()).slice(0, 7), I = i && i[k];
          Ji = I.call(i, "timers").setImmediate;
        } catch {
          Ji = function(ee) {
            Lo === !1 && (Lo = !0, typeof MessageChannel > "u" && Ne("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var Ce = new MessageChannel();
            Ce.port1.onmessage = ee, Ce.port2.postMessage(void 0);
          };
        }
      return Ji(N);
    }
    var ei = 0, dc = !1;
    function pc(N) {
      {
        var k = ei;
        ei++, F.current === null && (F.current = []);
        var I = F.isBatchingLegacy, Y;
        try {
          if (F.isBatchingLegacy = !0, Y = N(), !I && F.didScheduleLegacyUpdate) {
            var ee = F.current;
            ee !== null && (F.didScheduleLegacyUpdate = !1, Ao(ee));
          }
        } catch (vt) {
          throw Sr(k), vt;
        } finally {
          F.isBatchingLegacy = I;
        }
        if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
          var Ce = Y, pe = !1, Te = {
            then: function(vt, jt) {
              pe = !0, Ce.then(function(et) {
                Sr(k), ei === 0 ? Mo(et, vt, jt) : vt(et);
              }, function(et) {
                Sr(k), jt(et);
              });
            }
          };
          return !dc && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            pe || (dc = !0, Ne("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Te;
        } else {
          var Je = Y;
          if (Sr(k), ei === 0) {
            var it = F.current;
            it !== null && (Ao(it), F.current = null);
            var ct = {
              then: function(vt, jt) {
                F.current === null ? (F.current = [], Mo(Je, vt, jt)) : vt(Je);
              }
            };
            return ct;
          } else {
            var ft = {
              then: function(vt, jt) {
                vt(Je);
              }
            };
            return ft;
          }
        }
      }
    }
    function Sr(N) {
      N !== ei - 1 && Ne("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ei = N;
    }
    function Mo(N, k, I) {
      {
        var Y = F.current;
        if (Y !== null)
          try {
            Ao(Y), fc(function() {
              Y.length === 0 ? (F.current = null, k(N)) : Mo(N, k, I);
            });
          } catch (ee) {
            I(ee);
          }
        else
          k(N);
      }
    }
    var ti = !1;
    function Ao(N) {
      if (!ti) {
        ti = !0;
        var k = 0;
        try {
          for (; k < N.length; k++) {
            var I = N[k];
            do
              I = I(!0);
            while (I !== null);
          }
          N.length = 0;
        } catch (Y) {
          throw N = N.slice(k + 1), Y;
        } finally {
          ti = !1;
        }
      }
    }
    var hc = cc, mc = Qa, vc = zn, gc = {
      map: ka,
      forEach: To,
      count: Vi,
      toArray: $s,
      only: Fi
    };
    a.Children = gc, a.Component = Tn, a.Fragment = c, a.Profiler = g, a.PureComponent = on, a.StrictMode = u, a.Suspense = y, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, a.act = pc, a.cloneElement = mc, a.createContext = zi, a.createElement = hc, a.createFactory = vc, a.createRef = Xn, a.forwardRef = Q, a.isValidElement = rt, a.lazy = O, a.memo = Ie, a.startTransition = Kd, a.unstable_act = pc, a.useCallback = Ma, a.useContext = _e, a.useDebugValue = Do, a.useDeferredValue = xr, a.useEffect = xt, a.useId = $e, a.useImperativeHandle = $i, a.useInsertionEffect = xn, a.useLayoutEffect = La, a.useMemo = Qt, a.useReducer = wt, a.useRef = Fe, a.useState = Me, a.useSyncExternalStore = Hi, a.useTransition = Hs, a.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(kd, kd.exports);
var S3 = kd.exports;
GN.exports = S3;
var z = GN.exports;
const zd = /* @__PURE__ */ Fd(z), sg = /* @__PURE__ */ x3({
  __proto__: null,
  default: zd
}, [z]);
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
  var i = z, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), j = Symbol.iterator, U = "@@iterator";
  function T(O) {
    if (O === null || typeof O != "object")
      return null;
    var Q = j && O[j] || O[U];
    return typeof Q == "function" ? Q : null;
  }
  var A = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function M(O) {
    {
      for (var Q = arguments.length, ae = new Array(Q > 1 ? Q - 1 : 0), we = 1; we < Q; we++)
        ae[we - 1] = arguments[we];
      V("error", O, ae);
    }
  }
  function V(O, Q, ae) {
    {
      var we = A.ReactDebugCurrentFrame, Ie = we.getStackAddendum();
      Ie !== "" && (Q += "%s", ae = ae.concat([Ie]));
      var je = ae.map(function(_e) {
        return String(_e);
      });
      je.unshift("Warning: " + Q), Function.prototype.apply.call(console[O], console, je);
    }
  }
  var D = !1, F = !1, L = !1, G = !1, ce = !1, ve;
  ve = Symbol.for("react.module.reference");
  function fe(O) {
    return !!(typeof O == "string" || typeof O == "function" || O === s || O === c || ce || O === d || O === p || O === m || G || O === C || D || F || L || typeof O == "object" && O !== null && (O.$$typeof === x || O.$$typeof === y || O.$$typeof === u || O.$$typeof === g || O.$$typeof === v || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    O.$$typeof === ve || O.getModuleId !== void 0));
  }
  function ge(O, Q, ae) {
    var we = O.displayName;
    if (we)
      return we;
    var Ie = Q.displayName || Q.name || "";
    return Ie !== "" ? ae + "(" + Ie + ")" : ae;
  }
  function Ve(O) {
    return O.displayName || "Context";
  }
  function de(O) {
    if (O == null)
      return null;
    if (typeof O.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
      return O.displayName || O.name || null;
    if (typeof O == "string")
      return O;
    switch (O) {
      case s:
        return "Fragment";
      case o:
        return "Portal";
      case c:
        return "Profiler";
      case d:
        return "StrictMode";
      case p:
        return "Suspense";
      case m:
        return "SuspenseList";
    }
    if (typeof O == "object")
      switch (O.$$typeof) {
        case g:
          var Q = O;
          return Ve(Q) + ".Consumer";
        case u:
          var ae = O;
          return Ve(ae._context) + ".Provider";
        case v:
          return ge(O, O.render, "ForwardRef");
        case y:
          var we = O.displayName || null;
          return we !== null ? we : de(O.type) || "Memo";
        case x: {
          var Ie = O, je = Ie._payload, _e = Ie._init;
          try {
            return de(_e(je));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var ye = Object.assign, he = 0, Pe, Ne, He, yt, Be, Vt, bt;
  function Ft() {
  }
  Ft.__reactDisabledLog = !0;
  function Tn() {
    {
      if (he === 0) {
        Pe = console.log, Ne = console.info, He = console.warn, yt = console.error, Be = console.group, Vt = console.groupCollapsed, bt = console.groupEnd;
        var O = {
          configurable: !0,
          enumerable: !0,
          value: Ft,
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
      he++;
    }
  }
  function da() {
    {
      if (he--, he === 0) {
        var O = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: ye({}, O, {
            value: Pe
          }),
          info: ye({}, O, {
            value: Ne
          }),
          warn: ye({}, O, {
            value: He
          }),
          error: ye({}, O, {
            value: yt
          }),
          group: ye({}, O, {
            value: Be
          }),
          groupCollapsed: ye({}, O, {
            value: Vt
          }),
          groupEnd: ye({}, O, {
            value: bt
          })
        });
      }
      he < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ja = A.ReactCurrentDispatcher, Ta;
  function pa(O, Q, ae) {
    {
      if (Ta === void 0)
        try {
          throw Error();
        } catch (Ie) {
          var we = Ie.stack.trim().match(/\n( *(at )?)/);
          Ta = we && we[1] || "";
        }
      return `
` + Ta + O;
    }
  }
  var on = !1, Un;
  {
    var Xn = typeof WeakMap == "function" ? WeakMap : Map;
    Un = new Xn();
  }
  function qn(O, Q) {
    if (!O || on)
      return "";
    {
      var ae = Un.get(O);
      if (ae !== void 0)
        return ae;
    }
    var we;
    on = !0;
    var Ie = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var je;
    je = ja.current, ja.current = null, Tn();
    try {
      if (Q) {
        var _e = function() {
          throw Error();
        };
        if (Object.defineProperty(_e.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(_e, []);
          } catch (Qt) {
            we = Qt;
          }
          Reflect.construct(O, [], _e);
        } else {
          try {
            _e.call();
          } catch (Qt) {
            we = Qt;
          }
          O.call(_e.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Qt) {
          we = Qt;
        }
        O();
      }
    } catch (Qt) {
      if (Qt && we && typeof Qt.stack == "string") {
        for (var Me = Qt.stack.split(`
`), wt = we.stack.split(`
`), Fe = Me.length - 1, xt = wt.length - 1; Fe >= 1 && xt >= 0 && Me[Fe] !== wt[xt]; )
          xt--;
        for (; Fe >= 1 && xt >= 0; Fe--, xt--)
          if (Me[Fe] !== wt[xt]) {
            if (Fe !== 1 || xt !== 1)
              do
                if (Fe--, xt--, xt < 0 || Me[Fe] !== wt[xt]) {
                  var xn = `
` + Me[Fe].replace(" at new ", " at ");
                  return O.displayName && xn.includes("<anonymous>") && (xn = xn.replace("<anonymous>", O.displayName)), typeof O == "function" && Un.set(O, xn), xn;
                }
              while (Fe >= 1 && xt >= 0);
            break;
          }
      }
    } finally {
      on = !1, ja.current = je, da(), Error.prepareStackTrace = Ie;
    }
    var La = O ? O.displayName || O.name : "", Ma = La ? pa(La) : "";
    return typeof O == "function" && Un.set(O, Ma), Ma;
  }
  function Mt(O, Q, ae) {
    return qn(O, !1);
  }
  function yn(O) {
    var Q = O.prototype;
    return !!(Q && Q.isReactComponent);
  }
  function qt(O, Q, ae) {
    if (O == null)
      return "";
    if (typeof O == "function")
      return qn(O, yn(O));
    if (typeof O == "string")
      return pa(O);
    switch (O) {
      case p:
        return pa("Suspense");
      case m:
        return pa("SuspenseList");
    }
    if (typeof O == "object")
      switch (O.$$typeof) {
        case v:
          return Mt(O.render);
        case y:
          return qt(O.type, Q, ae);
        case x: {
          var we = O, Ie = we._payload, je = we._init;
          try {
            return qt(je(Ie), Q, ae);
          } catch {
          }
        }
      }
    return "";
  }
  var zt = Object.prototype.hasOwnProperty, $t = {}, Qn = A.ReactDebugCurrentFrame;
  function ha(O) {
    if (O) {
      var Q = O._owner, ae = qt(O.type, O._source, Q ? Q.type : null);
      Qn.setExtraStackFrame(ae);
    } else
      Qn.setExtraStackFrame(null);
  }
  function Vn(O, Q, ae, we, Ie) {
    {
      var je = Function.call.bind(zt);
      for (var _e in O)
        if (je(O, _e)) {
          var Me = void 0;
          try {
            if (typeof O[_e] != "function") {
              var wt = Error((we || "React class") + ": " + ae + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw wt.name = "Invariant Violation", wt;
            }
            Me = O[_e](Q, _e, we, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Fe) {
            Me = Fe;
          }
          Me && !(Me instanceof Error) && (ha(Ie), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", ae, _e, typeof Me), ha(null)), Me instanceof Error && !(Me.message in $t) && ($t[Me.message] = !0, ha(Ie), M("Failed %s type: %s", ae, Me.message), ha(null));
        }
    }
  }
  var Da = Array.isArray;
  function ma(O) {
    return Da(O);
  }
  function Dn(O) {
    {
      var Q = typeof Symbol == "function" && Symbol.toStringTag, ae = Q && O[Symbol.toStringTag] || O.constructor.name || "Object";
      return ae;
    }
  }
  function va(O) {
    try {
      return bn(O), !1;
    } catch {
      return !0;
    }
  }
  function bn(O) {
    return "" + O;
  }
  function Zn(O) {
    if (va(O))
      return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(O)), bn(O);
  }
  var kt = A.ReactCurrentOwner, ga = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, vr, gr, ne;
  ne = {};
  function be(O) {
    if (zt.call(O, "ref")) {
      var Q = Object.getOwnPropertyDescriptor(O, "ref").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return O.ref !== void 0;
  }
  function Ue(O) {
    if (zt.call(O, "key")) {
      var Q = Object.getOwnPropertyDescriptor(O, "key").get;
      if (Q && Q.isReactWarning)
        return !1;
    }
    return O.key !== void 0;
  }
  function at(O, Q) {
    if (typeof O.ref == "string" && kt.current && Q && kt.current.stateNode !== Q) {
      var ae = de(kt.current.type);
      ne[ae] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(kt.current.type), O.ref), ne[ae] = !0);
    }
  }
  function rt(O, Q) {
    {
      var ae = function() {
        vr || (vr = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      ae.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: ae,
        configurable: !0
      });
    }
  }
  function Ht(O, Q) {
    {
      var ae = function() {
        gr || (gr = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
      };
      ae.isReactWarning = !0, Object.defineProperty(O, "ref", {
        get: ae,
        configurable: !0
      });
    }
  }
  var Ot = function(O, Q, ae, we, Ie, je, _e) {
    var Me = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: a,
      // Built-in properties that belong on the element
      type: O,
      key: Q,
      ref: ae,
      props: _e,
      // Record the component responsible for creating this element.
      _owner: je
    };
    return Me._store = {}, Object.defineProperty(Me._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(Me, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: we
    }), Object.defineProperty(Me, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Ie
    }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
  };
  function Fn(O, Q, ae, we, Ie) {
    {
      var je, _e = {}, Me = null, wt = null;
      ae !== void 0 && (Zn(ae), Me = "" + ae), Ue(Q) && (Zn(Q.key), Me = "" + Q.key), be(Q) && (wt = Q.ref, at(Q, Ie));
      for (je in Q)
        zt.call(Q, je) && !ga.hasOwnProperty(je) && (_e[je] = Q[je]);
      if (O && O.defaultProps) {
        var Fe = O.defaultProps;
        for (je in Fe)
          _e[je] === void 0 && (_e[je] = Fe[je]);
      }
      if (Me || wt) {
        var xt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
        Me && rt(_e, xt), wt && Ht(_e, xt);
      }
      return Ot(O, Me, wt, Ie, we, kt.current, _e);
    }
  }
  var ut = A.ReactCurrentOwner, ea = A.ReactDebugCurrentFrame;
  function ht(O) {
    if (O) {
      var Q = O._owner, ae = qt(O.type, O._source, Q ? Q.type : null);
      ea.setExtraStackFrame(ae);
    } else
      ea.setExtraStackFrame(null);
  }
  var mt;
  mt = !1;
  function Xa(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }
  function ka() {
    {
      if (ut.current) {
        var O = de(ut.current.type);
        if (O)
          return `

Check the render method of \`` + O + "`.";
      }
      return "";
    }
  }
  function Vi(O) {
    {
      if (O !== void 0) {
        var Q = O.fileName.replace(/^.*[\\\/]/, ""), ae = O.lineNumber;
        return `

Check your code at ` + Q + ":" + ae + ".";
      }
      return "";
    }
  }
  var To = {};
  function $s(O) {
    {
      var Q = ka();
      if (!Q) {
        var ae = typeof O == "string" ? O : O.displayName || O.name;
        ae && (Q = `

Check the top-level render call using <` + ae + ">.");
      }
      return Q;
    }
  }
  function Fi(O, Q) {
    {
      if (!O._store || O._store.validated || O.key != null)
        return;
      O._store.validated = !0;
      var ae = $s(Q);
      if (To[ae])
        return;
      To[ae] = !0;
      var we = "";
      O && O._owner && O._owner !== ut.current && (we = " It was passed a child from " + de(O._owner.type) + "."), ht(O), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, we), ht(null);
    }
  }
  function zi(O, Q) {
    {
      if (typeof O != "object")
        return;
      if (ma(O))
        for (var ae = 0; ae < O.length; ae++) {
          var we = O[ae];
          Xa(we) && Fi(we, Q);
        }
      else if (Xa(O))
        O._store && (O._store.validated = !0);
      else if (O) {
        var Ie = T(O);
        if (typeof Ie == "function" && Ie !== O.entries)
          for (var je = Ie.call(O), _e; !(_e = je.next()).done; )
            Xa(_e.value) && Fi(_e.value, Q);
      }
    }
  }
  function yr(O) {
    {
      var Q = O.type;
      if (Q == null || typeof Q == "string")
        return;
      var ae;
      if (typeof Q == "function")
        ae = Q.propTypes;
      else if (typeof Q == "object" && (Q.$$typeof === v || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      Q.$$typeof === y))
        ae = Q.propTypes;
      else
        return;
      if (ae) {
        var we = de(Q);
        Vn(ae, O.props, "prop", we, O);
      } else if (Q.PropTypes !== void 0 && !mt) {
        mt = !0;
        var Ie = de(Q);
        M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
      }
      typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Kr(O) {
    {
      for (var Q = Object.keys(O.props), ae = 0; ae < Q.length; ae++) {
        var we = Q[ae];
        if (we !== "children" && we !== "key") {
          ht(O), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), ht(null);
          break;
        }
      }
      O.ref !== null && (ht(O), M("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
    }
  }
  var br = {};
  function qa(O, Q, ae, we, Ie, je) {
    {
      var _e = fe(O);
      if (!_e) {
        var Me = "";
        (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var wt = Vi(Ie);
        wt ? Me += wt : Me += ka();
        var Fe;
        O === null ? Fe = "null" : ma(O) ? Fe = "array" : O !== void 0 && O.$$typeof === a ? (Fe = "<" + (de(O.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof O, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, Me);
      }
      var xt = Fn(O, Q, ae, Ie, je);
      if (xt == null)
        return xt;
      if (_e) {
        var xn = Q.children;
        if (xn !== void 0)
          if (we)
            if (ma(xn)) {
              for (var La = 0; La < xn.length; La++)
                zi(xn[La], O);
              Object.freeze && Object.freeze(xn);
            } else
              M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            zi(xn, O);
      }
      if (zt.call(Q, "key")) {
        var Ma = de(O), Qt = Object.keys(Q).filter(function(Hs) {
          return Hs !== "key";
        }), $i = Qt.length > 0 ? "{key: someKey, " + Qt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!br[Ma + $i]) {
          var Do = Qt.length > 0 ? "{" + Qt.join(": ..., ") + ": ...}" : "{}";
          M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $i, Ma, Do, Ma), br[Ma + $i] = !0;
        }
      }
      return O === s ? Kr(xt) : yr(xt), xt;
    }
  }
  var Oa = qa;
  og.Fragment = s, og.jsxDEV = Oa;
})();
KN.exports = og;
var w = KN.exports, XN = { exports: {} }, ca = {}, qN = { exports: {} }, QN = {};
(function(i) {
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
    var a = !1, o = !1, s = 5;
    function d(ne, be) {
      var Ue = ne.length;
      ne.push(be), g(ne, be, Ue);
    }
    function c(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function u(ne) {
      if (ne.length === 0)
        return null;
      var be = ne[0], Ue = ne.pop();
      return Ue !== be && (ne[0] = Ue, v(ne, Ue, 0)), be;
    }
    function g(ne, be, Ue) {
      for (var at = Ue; at > 0; ) {
        var rt = at - 1 >>> 1, Ht = ne[rt];
        if (p(Ht, be) > 0)
          ne[rt] = be, ne[at] = Ht, at = rt;
        else
          return;
      }
    }
    function v(ne, be, Ue) {
      for (var at = Ue, rt = ne.length, Ht = rt >>> 1; at < Ht; ) {
        var Ot = (at + 1) * 2 - 1, Fn = ne[Ot], ut = Ot + 1, ea = ne[ut];
        if (p(Fn, be) < 0)
          ut < rt && p(ea, Fn) < 0 ? (ne[at] = ea, ne[ut] = be, at = ut) : (ne[at] = Fn, ne[Ot] = be, at = Ot);
        else if (ut < rt && p(ea, be) < 0)
          ne[at] = ea, ne[ut] = be, at = ut;
        else
          return;
      }
    }
    function p(ne, be) {
      var Ue = ne.sortIndex - be.sortIndex;
      return Ue !== 0 ? Ue : ne.id - be.id;
    }
    var m = 1, y = 2, x = 3, C = 4, j = 5;
    function U(ne, be) {
    }
    var T = typeof performance == "object" && typeof performance.now == "function";
    if (T) {
      var A = performance;
      i.unstable_now = function() {
        return A.now();
      };
    } else {
      var M = Date, V = M.now();
      i.unstable_now = function() {
        return M.now() - V;
      };
    }
    var D = 1073741823, F = -1, L = 250, G = 5e3, ce = 1e4, ve = D, fe = [], ge = [], Ve = 1, de = null, ye = x, he = !1, Pe = !1, Ne = !1, He = typeof setTimeout == "function" ? setTimeout : null, yt = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Vt(ne) {
      for (var be = c(ge); be !== null; ) {
        if (be.callback === null)
          u(ge);
        else if (be.startTime <= ne)
          u(ge), be.sortIndex = be.expirationTime, d(fe, be);
        else
          return;
        be = c(ge);
      }
    }
    function bt(ne) {
      if (Ne = !1, Vt(ne), !Pe)
        if (c(fe) !== null)
          Pe = !0, Zn(Ft);
        else {
          var be = c(ge);
          be !== null && kt(bt, be.startTime - ne);
        }
    }
    function Ft(ne, be) {
      Pe = !1, Ne && (Ne = !1, ga()), he = !0;
      var Ue = ye;
      try {
        var at;
        if (!o) return Tn(ne, be);
      } finally {
        de = null, ye = Ue, he = !1;
      }
    }
    function Tn(ne, be) {
      var Ue = be;
      for (Vt(Ue), de = c(fe); de !== null && !a && !(de.expirationTime > Ue && (!ne || ha())); ) {
        var at = de.callback;
        if (typeof at == "function") {
          de.callback = null, ye = de.priorityLevel;
          var rt = de.expirationTime <= Ue, Ht = at(rt);
          Ue = i.unstable_now(), typeof Ht == "function" ? de.callback = Ht : de === c(fe) && u(fe), Vt(Ue);
        } else
          u(fe);
        de = c(fe);
      }
      if (de !== null)
        return !0;
      var Ot = c(ge);
      return Ot !== null && kt(bt, Ot.startTime - Ue), !1;
    }
    function da(ne, be) {
      switch (ne) {
        case m:
        case y:
        case x:
        case C:
        case j:
          break;
        default:
          ne = x;
      }
      var Ue = ye;
      ye = ne;
      try {
        return be();
      } finally {
        ye = Ue;
      }
    }
    function ja(ne) {
      var be;
      switch (ye) {
        case m:
        case y:
        case x:
          be = x;
          break;
        default:
          be = ye;
          break;
      }
      var Ue = ye;
      ye = be;
      try {
        return ne();
      } finally {
        ye = Ue;
      }
    }
    function Ta(ne) {
      var be = ye;
      return function() {
        var Ue = ye;
        ye = be;
        try {
          return ne.apply(this, arguments);
        } finally {
          ye = Ue;
        }
      };
    }
    function pa(ne, be, Ue) {
      var at = i.unstable_now(), rt;
      if (typeof Ue == "object" && Ue !== null) {
        var Ht = Ue.delay;
        typeof Ht == "number" && Ht > 0 ? rt = at + Ht : rt = at;
      } else
        rt = at;
      var Ot;
      switch (ne) {
        case m:
          Ot = F;
          break;
        case y:
          Ot = L;
          break;
        case j:
          Ot = ve;
          break;
        case C:
          Ot = ce;
          break;
        case x:
        default:
          Ot = G;
          break;
      }
      var Fn = rt + Ot, ut = {
        id: Ve++,
        callback: be,
        priorityLevel: ne,
        startTime: rt,
        expirationTime: Fn,
        sortIndex: -1
      };
      return rt > at ? (ut.sortIndex = rt, d(ge, ut), c(fe) === null && ut === c(ge) && (Ne ? ga() : Ne = !0, kt(bt, rt - at))) : (ut.sortIndex = Fn, d(fe, ut), !Pe && !he && (Pe = !0, Zn(Ft))), ut;
    }
    function on() {
    }
    function Un() {
      !Pe && !he && (Pe = !0, Zn(Ft));
    }
    function Xn() {
      return c(fe);
    }
    function qn(ne) {
      ne.callback = null;
    }
    function Mt() {
      return ye;
    }
    var yn = !1, qt = null, zt = -1, $t = s, Qn = -1;
    function ha() {
      var ne = i.unstable_now() - Qn;
      return !(ne < $t);
    }
    function Vn() {
    }
    function Da(ne) {
      if (ne < 0 || ne > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ne > 0 ? $t = Math.floor(1e3 / ne) : $t = s;
    }
    var ma = function() {
      if (qt !== null) {
        var ne = i.unstable_now();
        Qn = ne;
        var be = !0, Ue = !0;
        try {
          Ue = qt(be, ne);
        } finally {
          Ue ? Dn() : (yn = !1, qt = null);
        }
      } else
        yn = !1;
    }, Dn;
    if (typeof Be == "function")
      Dn = function() {
        Be(ma);
      };
    else if (typeof MessageChannel < "u") {
      var va = new MessageChannel(), bn = va.port2;
      va.port1.onmessage = ma, Dn = function() {
        bn.postMessage(null);
      };
    } else
      Dn = function() {
        He(ma, 0);
      };
    function Zn(ne) {
      qt = ne, yn || (yn = !0, Dn());
    }
    function kt(ne, be) {
      zt = He(function() {
        ne(i.unstable_now());
      }, be);
    }
    function ga() {
      yt(zt), zt = -1;
    }
    var vr = Vn, gr = null;
    i.unstable_IdlePriority = j, i.unstable_ImmediatePriority = m, i.unstable_LowPriority = C, i.unstable_NormalPriority = x, i.unstable_Profiling = gr, i.unstable_UserBlockingPriority = y, i.unstable_cancelCallback = qn, i.unstable_continueExecution = Un, i.unstable_forceFrameRate = Da, i.unstable_getCurrentPriorityLevel = Mt, i.unstable_getFirstCallbackNode = Xn, i.unstable_next = ja, i.unstable_pauseExecution = on, i.unstable_requestPaint = vr, i.unstable_runWithPriority = da, i.unstable_scheduleCallback = pa, i.unstable_shouldYield = ha, i.unstable_wrapCallback = Ta, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(QN);
qN.exports = QN;
var N3 = qN.exports;
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
  var i = z, a = N3, o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, s = !1;
  function d(e) {
    s = e;
  }
  function c(e) {
    if (!s) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      g("warn", e, n);
    }
  }
  function u(e) {
    if (!s) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      g("error", e, n);
    }
  }
  function g(e, t, n) {
    {
      var r = o.ReactDebugCurrentFrame, l = r.getStackAddendum();
      l !== "" && (t += "%s", n = n.concat([l]));
      var f = n.map(function(h) {
        return String(h);
      });
      f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
    }
  }
  var v = 0, p = 1, m = 2, y = 3, x = 4, C = 5, j = 6, U = 7, T = 8, A = 9, M = 10, V = 11, D = 12, F = 13, L = 14, G = 15, ce = 16, ve = 17, fe = 18, ge = 19, Ve = 21, de = 22, ye = 23, he = 24, Pe = 25, Ne = !0, He = !1, yt = !1, Be = !1, Vt = !1, bt = !0, Ft = !1, Tn = !0, da = !0, ja = !0, Ta = !0, pa = /* @__PURE__ */ new Set(), on = {}, Un = {};
  function Xn(e, t) {
    qn(e, t), qn(e + "Capture", t);
  }
  function qn(e, t) {
    on[e] && u("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), on[e] = t;
    {
      var n = e.toLowerCase();
      Un[n] = e, e === "onDoubleClick" && (Un.ondblclick = e);
    }
    for (var r = 0; r < t.length; r++)
      pa.add(t[r]);
  }
  var Mt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yn = Object.prototype.hasOwnProperty;
  function qt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function zt(e) {
    try {
      return $t(e), !1;
    } catch {
      return !0;
    }
  }
  function $t(e) {
    return "" + e;
  }
  function Qn(e, t) {
    if (zt(e))
      return u("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), $t(e);
  }
  function ha(e) {
    if (zt(e))
      return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qt(e)), $t(e);
  }
  function Vn(e, t) {
    if (zt(e))
      return u("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), $t(e);
  }
  function Da(e, t) {
    if (zt(e))
      return u("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), $t(e);
  }
  function ma(e) {
    if (zt(e))
      return u("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", qt(e)), $t(e);
  }
  function Dn(e) {
    if (zt(e))
      return u("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", qt(e)), $t(e);
  }
  var va = 0, bn = 1, Zn = 2, kt = 3, ga = 4, vr = 5, gr = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + ne + "][" + be + "]*$"), at = {}, rt = {};
  function Ht(e) {
    return yn.call(rt, e) ? !0 : yn.call(at, e) ? !1 : Ue.test(e) ? (rt[e] = !0, !0) : (at[e] = !0, u("Invalid attribute name: `%s`", e), !1);
  }
  function Ot(e, t, n) {
    return t !== null ? t.type === va : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Fn(e, t, n, r) {
    if (n !== null && n.type === va)
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
        var l = e.toLowerCase().slice(0, 5);
        return l !== "data-" && l !== "aria-";
      }
      default:
        return !1;
    }
  }
  function ut(e, t, n, r) {
    if (t === null || typeof t > "u" || Fn(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case kt:
          return !t;
        case ga:
          return t === !1;
        case vr:
          return isNaN(t);
        case gr:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function ea(e) {
    return mt.hasOwnProperty(e) ? mt[e] : null;
  }
  function ht(e, t, n, r, l, f, h) {
    this.acceptsBooleans = t === Zn || t === kt || t === ga, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = h;
  }
  var mt = {}, Xa = [
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
  Xa.forEach(function(e) {
    mt[e] = new ht(
      e,
      va,
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
    mt[t] = new ht(
      t,
      bn,
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
    mt[e] = new ht(
      e,
      Zn,
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
    mt[e] = new ht(
      e,
      Zn,
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
    mt[e] = new ht(
      e,
      kt,
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
    mt[e] = new ht(
      e,
      kt,
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
    mt[e] = new ht(
      e,
      ga,
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
    mt[e] = new ht(
      e,
      gr,
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
    mt[e] = new ht(
      e,
      vr,
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
  var ka = /[\-\:]([a-z])/g, Vi = function(e) {
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
    var t = e.replace(ka, Vi);
    mt[t] = new ht(
      t,
      bn,
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
    var t = e.replace(ka, Vi);
    mt[t] = new ht(
      t,
      bn,
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
    var t = e.replace(ka, Vi);
    mt[t] = new ht(
      t,
      bn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    mt[e] = new ht(
      e,
      bn,
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
  var To = "xlinkHref";
  mt[To] = new ht(
    "xlinkHref",
    bn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    mt[e] = new ht(
      e,
      bn,
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
  var $s = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Fi = !1;
  function zi(e) {
    !Fi && $s.test(e) && (Fi = !0, u("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function yr(e, t, n, r) {
    if (r.mustUseProperty) {
      var l = r.propertyName;
      return e[l];
    } else {
      Qn(n, t), r.sanitizeURL && zi("" + n);
      var f = r.attributeName, h = null;
      if (r.type === ga) {
        if (e.hasAttribute(f)) {
          var b = e.getAttribute(f);
          return b === "" ? !0 : ut(t, n, r, !1) ? b : b === "" + n ? n : b;
        }
      } else if (e.hasAttribute(f)) {
        if (ut(t, n, r, !1))
          return e.getAttribute(f);
        if (r.type === kt)
          return n;
        h = e.getAttribute(f);
      }
      return ut(t, n, r, !1) ? h === null ? n : h : h === "" + n ? n : h;
    }
  }
  function Kr(e, t, n, r) {
    {
      if (!Ht(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var l = e.getAttribute(t);
      return Qn(n, t), l === "" + n ? n : l;
    }
  }
  function br(e, t, n, r) {
    var l = ea(t);
    if (!Ot(t, l, r)) {
      if (ut(t, n, l, r) && (n = null), r || l === null) {
        if (Ht(t)) {
          var f = t;
          n === null ? e.removeAttribute(f) : (Qn(n, t), e.setAttribute(f, "" + n));
        }
        return;
      }
      var h = l.mustUseProperty;
      if (h) {
        var b = l.propertyName;
        if (n === null) {
          var S = l.type;
          e[b] = S === kt ? !1 : "";
        } else
          e[b] = n;
        return;
      }
      var E = l.attributeName, R = l.attributeNamespace;
      if (n === null)
        e.removeAttribute(E);
      else {
        var P = l.type, _;
        P === kt || P === ga && n === !0 ? _ = "" : (Qn(n, E), _ = "" + n, l.sanitizeURL && zi(_.toString())), R ? e.setAttributeNS(R, E, _) : e.setAttribute(E, _);
      }
    }
  }
  var qa = Symbol.for("react.element"), Oa = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), xn = Symbol.for("react.debug_trace_mode"), La = Symbol.for("react.offscreen"), Ma = Symbol.for("react.legacy_hidden"), Qt = Symbol.for("react.cache"), $i = Symbol.for("react.tracing_marker"), Do = Symbol.iterator, Hs = "@@iterator";
  function xr(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = Do && e[Do] || e[Hs];
    return typeof t == "function" ? t : null;
  }
  var $e = Object.assign, Hi = 0, Gr, Bs, Is, Js, Ys, Ws, Ks;
  function Gs() {
  }
  Gs.__reactDisabledLog = !0;
  function rc() {
    {
      if (Hi === 0) {
        Gr = console.log, Bs = console.info, Is = console.warn, Js = console.error, Ys = console.group, Ws = console.groupCollapsed, Ks = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Gs,
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
      Hi++;
    }
  }
  function Yd() {
    {
      if (Hi--, Hi === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: $e({}, e, {
            value: Gr
          }),
          info: $e({}, e, {
            value: Bs
          }),
          warn: $e({}, e, {
            value: Is
          }),
          error: $e({}, e, {
            value: Js
          }),
          group: $e({}, e, {
            value: Ys
          }),
          groupCollapsed: $e({}, e, {
            value: Ws
          }),
          groupEnd: $e({}, e, {
            value: Ks
          })
        });
      }
      Hi < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Xs = o.ReactCurrentDispatcher, Bi;
  function ya(e, t, n) {
    {
      if (Bi === void 0)
        try {
          throw Error();
        } catch (l) {
          var r = l.stack.trim().match(/\n( *(at )?)/);
          Bi = r && r[1] || "";
        }
      return `
` + Bi + e;
    }
  }
  var Xr = !1, qr;
  {
    var ko = typeof WeakMap == "function" ? WeakMap : Map;
    qr = new ko();
  }
  function qs(e, t) {
    if (!e || Xr)
      return "";
    {
      var n = qr.get(e);
      if (n !== void 0)
        return n;
    }
    var r;
    Xr = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var f;
    f = Xs.current, Xs.current = null, rc();
    try {
      if (t) {
        var h = function() {
          throw Error();
        };
        if (Object.defineProperty(h.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(h, []);
          } catch (J) {
            r = J;
          }
          Reflect.construct(e, [], h);
        } else {
          try {
            h.call();
          } catch (J) {
            r = J;
          }
          e.call(h.prototype);
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
        for (var b = J.stack.split(`
`), S = r.stack.split(`
`), E = b.length - 1, R = S.length - 1; E >= 1 && R >= 0 && b[E] !== S[R]; )
          R--;
        for (; E >= 1 && R >= 0; E--, R--)
          if (b[E] !== S[R]) {
            if (E !== 1 || R !== 1)
              do
                if (E--, R--, R < 0 || b[E] !== S[R]) {
                  var P = `
` + b[E].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && qr.set(e, P), P;
                }
              while (E >= 1 && R >= 0);
            break;
          }
      }
    } finally {
      Xr = !1, Xs.current = f, Yd(), Error.prepareStackTrace = l;
    }
    var _ = e ? e.displayName || e.name : "", B = _ ? ya(_) : "";
    return typeof e == "function" && qr.set(e, B), B;
  }
  function ic(e, t, n) {
    return qs(e, !0);
  }
  function Qs(e, t, n) {
    return qs(e, !1);
  }
  function Wd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Qr(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return qs(e, Wd(e));
    if (typeof e == "string")
      return ya(e);
    switch (e) {
      case _e:
        return ya("Suspense");
      case Me:
        return ya("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case je:
          return Qs(e.render);
        case wt:
          return Qr(e.type, t, n);
        case Fe: {
          var r = e, l = r._payload, f = r._init;
          try {
            return Qr(f(l), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function oc(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case C:
        return ya(e.type);
      case ce:
        return ya("Lazy");
      case F:
        return ya("Suspense");
      case ge:
        return ya("SuspenseList");
      case v:
      case m:
      case G:
        return Qs(e.type);
      case V:
        return Qs(e.type.render);
      case p:
        return ic(e.type);
      default:
        return "";
    }
  }
  function Zs(e) {
    try {
      var t = "", n = e;
      do
        t += oc(n), n = n.return;
      while (n);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  function Oo(e, t, n) {
    var r = e.displayName;
    if (r)
      return r;
    var l = t.displayName || t.name || "";
    return l !== "" ? n + "(" + l + ")" : n;
  }
  function sc(e) {
    return e.displayName || "Context";
  }
  function qe(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case O:
        return "Fragment";
      case Oa:
        return "Portal";
      case ae:
        return "Profiler";
      case Q:
        return "StrictMode";
      case _e:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ie:
          var t = e;
          return sc(t) + ".Consumer";
        case we:
          var n = e;
          return sc(n._context) + ".Provider";
        case je:
          return Oo(e, e.render, "ForwardRef");
        case wt:
          var r = e.displayName || null;
          return r !== null ? r : qe(e.type) || "Memo";
        case Fe: {
          var l = e, f = l._payload, h = l._init;
          try {
            return qe(h(f));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function el(e, t, n) {
    var r = t.displayName || t.name || "";
    return e.displayName || (r !== "" ? n + "(" + r + ")" : n);
  }
  function tl(e) {
    return e.displayName || "Context";
  }
  function Le(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case he:
        return "Cache";
      case A:
        var r = n;
        return tl(r) + ".Consumer";
      case M:
        var l = n;
        return tl(l._context) + ".Provider";
      case fe:
        return "DehydratedFragment";
      case V:
        return el(n, n.render, "ForwardRef");
      case U:
        return "Fragment";
      case C:
        return n;
      case x:
        return "Portal";
      case y:
        return "Root";
      case j:
        return "Text";
      case ce:
        return qe(n);
      case T:
        return n === Q ? "StrictMode" : "Mode";
      case de:
        return "Offscreen";
      case D:
        return "Profiler";
      case Ve:
        return "Scope";
      case F:
        return "Suspense";
      case ge:
        return "SuspenseList";
      case Pe:
        return "TracingMarker";
      case p:
      case v:
      case ve:
      case m:
      case L:
      case G:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var lc = o.ReactDebugCurrentFrame, Sn = null, Ii = !1;
  function Zr() {
    {
      if (Sn === null)
        return null;
      var e = Sn._debugOwner;
      if (e !== null && typeof e < "u")
        return Le(e);
    }
    return null;
  }
  function uc() {
    return Sn === null ? "" : Zs(Sn);
  }
  function Zt() {
    lc.getCurrentStack = null, Sn = null, Ii = !1;
  }
  function Et(e) {
    lc.getCurrentStack = e === null ? null : uc, Sn = e, Ii = !1;
  }
  function cc() {
    return Sn;
  }
  function ta(e) {
    Ii = e;
  }
  function zn(e) {
    return "" + e;
  }
  function Qa(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return Dn(e), e;
      default:
        return "";
    }
  }
  var Kd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function Lo(e, t) {
    Kd[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || u("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || u("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Ji(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function fc(e) {
    return e._valueTracker;
  }
  function ei(e) {
    e._valueTracker = null;
  }
  function dc(e) {
    var t = "";
    return e && (Ji(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function pc(e) {
    var t = Ji(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    Dn(e[t]);
    var r = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var l = n.get, f = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(b) {
          Dn(b), r = "" + b, f.call(this, b);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var h = {
        getValue: function() {
          return r;
        },
        setValue: function(b) {
          Dn(b), r = "" + b;
        },
        stopTracking: function() {
          ei(e), delete e[t];
        }
      };
      return h;
    }
  }
  function Sr(e) {
    fc(e) || (e._valueTracker = pc(e));
  }
  function Mo(e) {
    if (!e)
      return !1;
    var t = fc(e);
    if (!t)
      return !0;
    var n = t.getValue(), r = dc(e);
    return r !== n ? (t.setValue(r), !0) : !1;
  }
  function ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ao = !1, hc = !1, mc = !1, vc = !1;
  function gc(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function N(e, t) {
    var n = e, r = t.checked, l = $e({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? n._wrapperState.initialChecked
    });
    return l;
  }
  function k(e, t) {
    Lo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hc && (u("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component", t.type), hc = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ao && (u("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component", t.type), Ao = !0);
    var n = e, r = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Qa(t.value != null ? t.value : r),
      controlled: gc(t)
    };
  }
  function I(e, t) {
    var n = e, r = t.checked;
    r != null && br(n, "checked", r, !1);
  }
  function Y(e, t) {
    var n = e;
    {
      var r = gc(t);
      !n._wrapperState.controlled && r && !vc && (u("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vc = !0), n._wrapperState.controlled && !r && !mc && (u("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), mc = !0);
    }
    I(e, t);
    var l = Qa(t.value), f = t.type;
    if (l != null)
      f === "number" ? (l === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != l) && (n.value = zn(l)) : n.value !== zn(l) && (n.value = zn(l));
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Te(n, t.type, l) : t.hasOwnProperty("defaultValue") && Te(n, t.type, Qa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function ee(e, t, n) {
    var r = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type, f = l === "submit" || l === "reset";
      if (f && (t.value === void 0 || t.value === null))
        return;
      var h = zn(r._wrapperState.initialValue);
      n || h !== r.value && (r.value = h), r.defaultValue = h;
    }
    var b = r.name;
    b !== "" && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !!r._wrapperState.initialChecked, b !== "" && (r.name = b);
  }
  function Ce(e, t) {
    var n = e;
    Y(n, t), pe(n, t);
  }
  function pe(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var r = e; r.parentNode; )
        r = r.parentNode;
      Qn(n, "name");
      for (var l = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), f = 0; f < l.length; f++) {
        var h = l[f];
        if (!(h === e || h.form !== e.form)) {
          var b = af(h);
          if (!b)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          Mo(h), Y(h, b);
        }
      }
    }
  }
  function Te(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = zn(e._wrapperState.initialValue) : e.defaultValue !== zn(n) && (e.defaultValue = zn(n)));
  }
  var Je = !1, it = !1, ct = !1;
  function ft(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || it || (it = !0, u("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (ct || (ct = !0, u("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Je && (u("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Je = !0);
  }
  function vt(e, t) {
    t.value != null && e.setAttribute("value", zn(Qa(t.value)));
  }
  var jt = Array.isArray;
  function et(e) {
    return jt(e);
  }
  var ni;
  ni = !1;
  function _o() {
    var e = Zr();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var nl = ["value", "defaultValue"];
  function Gd(e) {
    {
      Lo("select", e);
      for (var t = 0; t < nl.length; t++) {
        var n = nl[t];
        if (e[n] != null) {
          var r = et(e[n]);
          e.multiple && !r ? u("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, _o()) : !e.multiple && r && u("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, _o());
        }
      }
    }
  }
  function Nr(e, t, n, r) {
    var l = e.options;
    if (t) {
      for (var f = n, h = {}, b = 0; b < f.length; b++)
        h["$" + f[b]] = !0;
      for (var S = 0; S < l.length; S++) {
        var E = h.hasOwnProperty("$" + l[S].value);
        l[S].selected !== E && (l[S].selected = E), E && r && (l[S].defaultSelected = !0);
      }
    } else {
      for (var R = zn(Qa(n)), P = null, _ = 0; _ < l.length; _++) {
        if (l[_].value === R) {
          l[_].selected = !0, r && (l[_].defaultSelected = !0);
          return;
        }
        P === null && !l[_].disabled && (P = l[_]);
      }
      P !== null && (P.selected = !0);
    }
  }
  function al(e, t) {
    return $e({}, t, {
      value: void 0
    });
  }
  function rl(e, t) {
    var n = e;
    Gd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !ni && (u("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ni = !0);
  }
  function Xd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var r = t.value;
    r != null ? Nr(n, !!t.multiple, r, !1) : t.defaultValue != null && Nr(n, !!t.multiple, t.defaultValue, !0);
  }
  function rw(e, t) {
    var n = e, r = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var l = t.value;
    l != null ? Nr(n, !!t.multiple, l, !1) : r !== !!t.multiple && (t.defaultValue != null ? Nr(n, !!t.multiple, t.defaultValue, !0) : Nr(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function iw(e, t) {
    var n = e, r = t.value;
    r != null && Nr(n, !!t.multiple, r, !1);
  }
  var Ug = !1;
  function qd(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var r = $e({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: zn(n._wrapperState.initialValue)
    });
    return r;
  }
  function Vg(e, t) {
    var n = e;
    Lo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ug && (u("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component"), Ug = !0);
    var r = t.value;
    if (r == null) {
      var l = t.children, f = t.defaultValue;
      if (l != null) {
        u("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (f != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (et(l)) {
            if (l.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            l = l[0];
          }
          f = l;
        }
      }
      f == null && (f = ""), r = f;
    }
    n._wrapperState = {
      initialValue: Qa(r)
    };
  }
  function Fg(e, t) {
    var n = e, r = Qa(t.value), l = Qa(t.defaultValue);
    if (r != null) {
      var f = zn(r);
      f !== n.value && (n.value = f), t.defaultValue == null && n.defaultValue !== f && (n.defaultValue = f);
    }
    l != null && (n.defaultValue = zn(l));
  }
  function zg(e, t) {
    var n = e, r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ow(e, t) {
    Fg(e, t);
  }
  var wr = "http://www.w3.org/1999/xhtml", sw = "http://www.w3.org/1998/Math/MathML", Qd = "http://www.w3.org/2000/svg";
  function Zd(e) {
    switch (e) {
      case "svg":
        return Qd;
      case "math":
        return sw;
      default:
        return wr;
    }
  }
  function ep(e, t) {
    return e == null || e === wr ? Zd(t) : e === Qd && t === "foreignObject" ? wr : e;
  }
  var lw = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }, yc, $g = lw(function(e, t) {
    if (e.namespaceURI === Qd && !("innerHTML" in e)) {
      yc = yc || document.createElement("div"), yc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = yc.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), $n = 1, Er = 3, At = 8, Cr = 9, tp = 11, bc = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === Er) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, uw = {
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
  }, il = {
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
  function cw(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var fw = ["Webkit", "ms", "Moz", "O"];
  Object.keys(il).forEach(function(e) {
    fw.forEach(function(t) {
      il[cw(t, e)] = il[e];
    });
  });
  function np(e, t, n) {
    var r = t == null || typeof t == "boolean" || t === "";
    return r ? "" : !n && typeof t == "number" && t !== 0 && !(il.hasOwnProperty(e) && il[e]) ? t + "px" : (Da(t, e), ("" + t).trim());
  }
  var dw = /([A-Z])/g, pw = /^ms-/;
  function hw(e) {
    return e.replace(dw, "-$1").toLowerCase().replace(pw, "-ms-");
  }
  var Hg = function() {
  };
  {
    var mw = /^(?:webkit|moz|o)[A-Z]/, vw = /^-ms-/, gw = /-(.)/g, Bg = /;\s*$/, Po = {}, ap = {}, Ig = !1, Jg = !1, yw = function(e) {
      return e.replace(gw, function(t, n) {
        return n.toUpperCase();
      });
    }, bw = function(e) {
      Po.hasOwnProperty(e) && Po[e] || (Po[e] = !0, u(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        yw(e.replace(vw, "ms-"))
      ));
    }, xw = function(e) {
      Po.hasOwnProperty(e) && Po[e] || (Po[e] = !0, u("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, Sw = function(e, t) {
      ap.hasOwnProperty(t) && ap[t] || (ap[t] = !0, u(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Bg, "")));
    }, Nw = function(e, t) {
      Ig || (Ig = !0, u("`NaN` is an invalid value for the `%s` css style property.", e));
    }, ww = function(e, t) {
      Jg || (Jg = !0, u("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    Hg = function(e, t) {
      e.indexOf("-") > -1 ? bw(e) : mw.test(e) ? xw(e) : Bg.test(t) && Sw(e, t), typeof t == "number" && (isNaN(t) ? Nw(e, t) : isFinite(t) || ww(e, t));
    };
  }
  var Ew = Hg;
  function Cw(e) {
    {
      var t = "", n = "";
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var l = e[r];
          if (l != null) {
            var f = r.indexOf("--") === 0;
            t += n + (f ? r : hw(r)) + ":", t += np(r, l, f), n = ";";
          }
        }
      return t || null;
    }
  }
  function Yg(e, t) {
    var n = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var l = r.indexOf("--") === 0;
        l || Ew(r, t[r]);
        var f = np(r, t[r], l);
        r === "float" && (r = "cssFloat"), l ? n.setProperty(r, f) : n[r] = f;
      }
  }
  function Rw(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function Wg(e) {
    var t = {};
    for (var n in e)
      for (var r = uw[n] || [n], l = 0; l < r.length; l++)
        t[r[l]] = n;
    return t;
  }
  function jw(e, t) {
    {
      if (!t)
        return;
      var n = Wg(e), r = Wg(t), l = {};
      for (var f in n) {
        var h = n[f], b = r[f];
        if (b && h !== b) {
          var S = h + "," + b;
          if (l[S])
            continue;
          l[S] = !0, u("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Rw(e[h]) ? "Removing" : "Updating", h, b);
        }
      }
    }
  }
  var Tw = {
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
  }, Dw = $e({
    menuitem: !0
  }, Tw), kw = "__html";
  function rp(e, t) {
    if (t) {
      if (Dw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(kw in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && u("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Yi(e, t) {
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
  var xc = {
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
  }, Kg = {
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
  }, Uo = {}, Ow = new RegExp("^(aria)-[" + be + "]*$"), Lw = new RegExp("^(aria)[A-Z][" + be + "]*$");
  function Mw(e, t) {
    {
      if (yn.call(Uo, t) && Uo[t])
        return !0;
      if (Lw.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), r = Kg.hasOwnProperty(n) ? n : null;
        if (r == null)
          return u("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Uo[t] = !0, !0;
        if (t !== r)
          return u("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), Uo[t] = !0, !0;
      }
      if (Ow.test(t)) {
        var l = t.toLowerCase(), f = Kg.hasOwnProperty(l) ? l : null;
        if (f == null)
          return Uo[t] = !0, !1;
        if (t !== f)
          return u("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), Uo[t] = !0, !0;
      }
    }
    return !0;
  }
  function Aw(e, t) {
    {
      var n = [];
      for (var r in t) {
        var l = Mw(e, r);
        l || n.push(r);
      }
      var f = n.map(function(h) {
        return "`" + h + "`";
      }).join(", ");
      n.length === 1 ? u("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : n.length > 1 && u("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
    }
  }
  function _w(e, t) {
    Yi(e, t) || Aw(e, t);
  }
  var Gg = !1;
  function Pw(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Gg && (Gg = !0, e === "select" && t.multiple ? u("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : u("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var Xg = function() {
  };
  {
    var kn = {}, qg = /^on./, Uw = /^on[^A-Z]/, Vw = new RegExp("^(aria)-[" + be + "]*$"), Fw = new RegExp("^(aria)[A-Z][" + be + "]*$");
    Xg = function(e, t, n, r) {
      if (yn.call(kn, t) && kn[t])
        return !0;
      var l = t.toLowerCase();
      if (l === "onfocusin" || l === "onfocusout")
        return u("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kn[t] = !0, !0;
      if (r != null) {
        var f = r.registrationNameDependencies, h = r.possibleRegistrationNames;
        if (f.hasOwnProperty(t))
          return !0;
        var b = h.hasOwnProperty(l) ? h[l] : null;
        if (b != null)
          return u("Invalid event handler property `%s`. Did you mean `%s`?", t, b), kn[t] = !0, !0;
        if (qg.test(t))
          return u("Unknown event handler property `%s`. It will be ignored.", t), kn[t] = !0, !0;
      } else if (qg.test(t))
        return Uw.test(t) && u("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kn[t] = !0, !0;
      if (Vw.test(t) || Fw.test(t))
        return !0;
      if (l === "innerhtml")
        return u("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kn[t] = !0, !0;
      if (l === "aria")
        return u("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kn[t] = !0, !0;
      if (l === "is" && n !== null && n !== void 0 && typeof n != "string")
        return u("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), kn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return u("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kn[t] = !0, !0;
      var S = ea(t), E = S !== null && S.type === va;
      if (xc.hasOwnProperty(l)) {
        var R = xc[l];
        if (R !== t)
          return u("Invalid DOM property `%s`. Did you mean `%s`?", t, R), kn[t] = !0, !0;
      } else if (!E && t !== l)
        return u("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), kn[t] = !0, !0;
      return typeof n == "boolean" && Fn(t, n, S, !1) ? (n ? u('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : u('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), kn[t] = !0, !0) : E ? !0 : Fn(t, n, S, !1) ? (kn[t] = !0, !1) : ((n === "false" || n === "true") && S !== null && S.type === kt && (u("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), kn[t] = !0), !0);
    };
  }
  var zw = function(e, t, n) {
    {
      var r = [];
      for (var l in t) {
        var f = Xg(e, l, t[l], n);
        f || r.push(l);
      }
      var h = r.map(function(b) {
        return "`" + b + "`";
      }).join(", ");
      r.length === 1 ? u("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : r.length > 1 && u("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
    }
  };
  function $w(e, t, n) {
    Yi(e, t) || zw(e, t, n);
  }
  var Qg = 1, ip = 2, ol = 4, Hw = Qg | ip | ol, sl = null;
  function Bw(e) {
    sl !== null && u("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), sl = e;
  }
  function Iw() {
    sl === null && u("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), sl = null;
  }
  function Jw(e) {
    return e === sl;
  }
  function op(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Er ? t.parentNode : t;
  }
  var sp = null, Vo = null, Fo = null;
  function Zg(e) {
    var t = ci(e);
    if (t) {
      if (typeof sp != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var r = af(n);
        sp(t.stateNode, t.type, r);
      }
    }
  }
  function Yw(e) {
    sp = e;
  }
  function ey(e) {
    Vo ? Fo ? Fo.push(e) : Fo = [e] : Vo = e;
  }
  function Ww() {
    return Vo !== null || Fo !== null;
  }
  function ty() {
    if (Vo) {
      var e = Vo, t = Fo;
      if (Vo = null, Fo = null, Zg(e), t)
        for (var n = 0; n < t.length; n++)
          Zg(t[n]);
    }
  }
  var ny = function(e, t) {
    return e(t);
  }, ay = function() {
  }, lp = !1;
  function Kw() {
    var e = Ww();
    e && (ay(), ty());
  }
  function ry(e, t, n) {
    if (lp)
      return e(t, n);
    lp = !0;
    try {
      return ny(e, t, n);
    } finally {
      lp = !1, Kw();
    }
  }
  function Gw(e, t, n) {
    ny = e, ay = n;
  }
  function Xw(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function qw(e, t, n) {
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
        return !!(n.disabled && Xw(t));
      default:
        return !1;
    }
  }
  function ll(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = af(n);
    if (r === null)
      return null;
    var l = r[t];
    if (qw(t, e.type, r))
      return null;
    if (l && typeof l != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
    return l;
  }
  var up = !1;
  if (Mt)
    try {
      var ul = {};
      Object.defineProperty(ul, "passive", {
        get: function() {
          up = !0;
        }
      }), window.addEventListener("test", ul, ul), window.removeEventListener("test", ul, ul);
    } catch {
      up = !1;
    }
  function iy(e, t, n, r, l, f, h, b, S) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (R) {
      this.onError(R);
    }
  }
  var oy = iy;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var cp = document.createElement("react");
    oy = function(t, n, r, l, f, h, b, S, E) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var R = document.createEvent("Event"), P = !1, _ = !0, B = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
      function W() {
        cp.removeEventListener(K, xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
      }
      var re = Array.prototype.slice.call(arguments, 3);
      function xe() {
        P = !0, W(), n.apply(r, re), _ = !1;
      }
      var me, Ke = !1, ze = !1;
      function $(H) {
        if (me = H.error, Ke = !0, me === null && H.colno === 0 && H.lineno === 0 && (ze = !0), H.defaultPrevented && me != null && typeof me == "object")
          try {
            me._suppressLogging = !0;
          } catch {
          }
      }
      var K = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", $), cp.addEventListener(K, xe, !1), R.initEvent(K, !1, !1), cp.dispatchEvent(R), J && Object.defineProperty(window, "event", J), P && _ && (Ke ? ze && (me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(me)), window.removeEventListener("error", $), !P)
        return W(), iy.apply(this, arguments);
    };
  }
  var Qw = oy, zo = !1, Sc = null, Nc = !1, fp = null, Zw = {
    onError: function(e) {
      zo = !0, Sc = e;
    }
  };
  function dp(e, t, n, r, l, f, h, b, S) {
    zo = !1, Sc = null, Qw.apply(Zw, arguments);
  }
  function eE(e, t, n, r, l, f, h, b, S) {
    if (dp.apply(this, arguments), zo) {
      var E = pp();
      Nc || (Nc = !0, fp = E);
    }
  }
  function tE() {
    if (Nc) {
      var e = fp;
      throw Nc = !1, fp = null, e;
    }
  }
  function nE() {
    return zo;
  }
  function pp() {
    if (zo) {
      var e = Sc;
      return zo = !1, Sc = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function $o(e) {
    return e._reactInternals;
  }
  function aE(e) {
    return e._reactInternals !== void 0;
  }
  function rE(e, t) {
    e._reactInternals = t;
  }
  var Ee = (
    /*                      */
    0
  ), Ho = (
    /*                */
    1
  ), _t = (
    /*                    */
    2
  ), Ge = (
    /*                       */
    4
  ), Wi = (
    /*                */
    16
  ), cl = (
    /*                 */
    32
  ), hp = (
    /*                     */
    64
  ), tt = (
    /*                   */
    128
  ), Rr = (
    /*            */
    256
  ), ai = (
    /*                          */
    512
  ), Ki = (
    /*                     */
    1024
  ), Aa = (
    /*                      */
    2048
  ), jr = (
    /*                    */
    4096
  ), Gi = (
    /*                   */
    8192
  ), wc = (
    /*             */
    16384
  ), iE = Aa | Ge | hp | ai | Ki | wc, oE = (
    /*               */
    32767
  ), fl = (
    /*                   */
    32768
  ), On = (
    /*                */
    65536
  ), mp = (
    /* */
    131072
  ), sy = (
    /*                       */
    1048576
  ), vp = (
    /*                    */
    2097152
  ), Xi = (
    /*                 */
    4194304
  ), gp = (
    /*                */
    8388608
  ), Tr = (
    /*               */
    16777216
  ), Ec = (
    /*              */
    33554432
  ), yp = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ge | Ki | 0
  ), bp = _t | Ge | Wi | cl | ai | jr | Gi, dl = Ge | hp | ai | Gi, Bo = Aa | Wi, Dr = Xi | gp | vp, sE = o.ReactCurrentOwner;
  function qi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var r = t;
      do
        t = r, (t.flags & (_t | jr)) !== Ee && (n = t.return), r = t.return;
      while (r);
    }
    return t.tag === y ? n : null;
  }
  function ly(e) {
    if (e.tag === F) {
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
  function uy(e) {
    return e.tag === y ? e.stateNode.containerInfo : null;
  }
  function lE(e) {
    return qi(e) === e;
  }
  function uE(e) {
    {
      var t = sE.current;
      if (t !== null && t.tag === p) {
        var n = t, r = n.stateNode;
        r._warnedAboutRefsInRender || u("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(n) || "A component"), r._warnedAboutRefsInRender = !0;
      }
    }
    var l = $o(e);
    return l ? qi(l) === l : !1;
  }
  function cy(e) {
    if (qi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function fy(e) {
    var t = e.alternate;
    if (!t) {
      var n = qi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var f = r.return;
      if (f === null)
        break;
      var h = f.alternate;
      if (h === null) {
        var b = f.return;
        if (b !== null) {
          r = l = b;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (var S = f.child; S; ) {
          if (S === r)
            return cy(f), e;
          if (S === l)
            return cy(f), t;
          S = S.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (r.return !== l.return)
        r = f, l = h;
      else {
        for (var E = !1, R = f.child; R; ) {
          if (R === r) {
            E = !0, r = f, l = h;
            break;
          }
          if (R === l) {
            E = !0, l = f, r = h;
            break;
          }
          R = R.sibling;
        }
        if (!E) {
          for (R = h.child; R; ) {
            if (R === r) {
              E = !0, r = h, l = f;
              break;
            }
            if (R === l) {
              E = !0, l = h, r = f;
              break;
            }
            R = R.sibling;
          }
          if (!E)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (r.alternate !== l)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (r.tag !== y)
      throw new Error("Unable to find node on an unmounted component.");
    return r.stateNode.current === r ? e : t;
  }
  function dy(e) {
    var t = fy(e);
    return t !== null ? py(t) : null;
  }
  function py(e) {
    if (e.tag === C || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = py(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function cE(e) {
    var t = fy(e);
    return t !== null ? hy(t) : null;
  }
  function hy(e) {
    if (e.tag === C || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== x) {
        var n = hy(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var my = a.unstable_scheduleCallback, fE = a.unstable_cancelCallback, dE = a.unstable_shouldYield, pE = a.unstable_requestPaint, en = a.unstable_now, hE = a.unstable_getCurrentPriorityLevel, Cc = a.unstable_ImmediatePriority, xp = a.unstable_UserBlockingPriority, Qi = a.unstable_NormalPriority, mE = a.unstable_LowPriority, Sp = a.unstable_IdlePriority, vE = a.unstable_yieldValue, gE = a.unstable_setDisableYieldValue, Io = null, Nn = null, oe = null, Za = !1, _a = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function yE(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return u("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      da && (e = $e({}, e, {
        getLaneLabelMap: EE,
        injectProfilingHooks: wE
      })), Io = t.inject(e), Nn = t;
    } catch (n) {
      u("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function bE(e, t) {
    if (Nn && typeof Nn.onScheduleFiberRoot == "function")
      try {
        Nn.onScheduleFiberRoot(Io, e, t);
      } catch (n) {
        Za || (Za = !0, u("React instrumentation encountered an error: %s", n));
      }
  }
  function xE(e, t) {
    if (Nn && typeof Nn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & tt) === tt;
        if (ja) {
          var r;
          switch (t) {
            case ra:
              r = Cc;
              break;
            case Or:
              r = xp;
              break;
            case Lr:
              r = Qi;
              break;
            case Lc:
              r = Sp;
              break;
            default:
              r = Qi;
              break;
          }
          Nn.onCommitFiberRoot(Io, e, r, n);
        }
      } catch (l) {
        Za || (Za = !0, u("React instrumentation encountered an error: %s", l));
      }
  }
  function SE(e) {
    if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
      try {
        Nn.onPostCommitFiberRoot(Io, e);
      } catch (t) {
        Za || (Za = !0, u("React instrumentation encountered an error: %s", t));
      }
  }
  function NE(e) {
    if (Nn && typeof Nn.onCommitFiberUnmount == "function")
      try {
        Nn.onCommitFiberUnmount(Io, e);
      } catch (t) {
        Za || (Za = !0, u("React instrumentation encountered an error: %s", t));
      }
  }
  function tn(e) {
    if (typeof vE == "function" && (gE(e), d(e)), Nn && typeof Nn.setStrictMode == "function")
      try {
        Nn.setStrictMode(Io, e);
      } catch (t) {
        Za || (Za = !0, u("React instrumentation encountered an error: %s", t));
      }
  }
  function wE(e) {
    oe = e;
  }
  function EE() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < wp; n++) {
        var r = IE(t);
        e.set(t, r), t *= 2;
      }
      return e;
    }
  }
  function CE(e) {
    oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
  }
  function vy() {
    oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
  }
  function pl(e) {
    oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
  }
  function Jo() {
    oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
  }
  function RE(e) {
    oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
  }
  function jE() {
    oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
  }
  function TE(e) {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
  }
  function DE() {
    oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
  }
  function kE(e) {
    oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
  }
  function OE() {
    oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
  }
  function gy(e) {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
  }
  function yy() {
    oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
  }
  function LE(e, t, n) {
    oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, n);
  }
  function ME(e, t, n) {
    oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, n);
  }
  function AE(e) {
    oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
  }
  function _E() {
    oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
  }
  function PE(e) {
    oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
  }
  function UE() {
    oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
  }
  function by(e) {
    oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
  }
  function VE() {
    oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
  }
  function xy() {
    oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
  }
  function FE(e) {
    oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
  }
  function zE(e, t) {
    oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
  }
  function Np(e, t) {
    oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
  }
  var Se = (
    /*                         */
    0
  ), Ye = (
    /*                 */
    1
  ), ot = (
    /*                    */
    2
  ), Tt = (
    /*               */
    8
  ), er = (
    /*              */
    16
  ), Sy = Math.clz32 ? Math.clz32 : BE, $E = Math.log, HE = Math.LN2;
  function BE(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - ($E(t) / HE | 0) | 0;
  }
  var wp = 31, q = (
    /*                        */
    0
  ), nn = (
    /*                          */
    0
  ), De = (
    /*                        */
    1
  ), Yo = (
    /*    */
    2
  ), kr = (
    /*             */
    4
  ), Zi = (
    /*            */
    8
  ), tr = (
    /*                     */
    16
  ), hl = (
    /*                */
    32
  ), Wo = (
    /*                       */
    4194240
  ), ml = (
    /*                        */
    64
  ), Ep = (
    /*                        */
    128
  ), Cp = (
    /*                        */
    256
  ), Rp = (
    /*                        */
    512
  ), jp = (
    /*                        */
    1024
  ), Tp = (
    /*                        */
    2048
  ), Dp = (
    /*                        */
    4096
  ), kp = (
    /*                        */
    8192
  ), Op = (
    /*                        */
    16384
  ), Lp = (
    /*                       */
    32768
  ), Mp = (
    /*                       */
    65536
  ), Ap = (
    /*                       */
    131072
  ), _p = (
    /*                       */
    262144
  ), Pp = (
    /*                       */
    524288
  ), Up = (
    /*                       */
    1048576
  ), Vp = (
    /*                       */
    2097152
  ), Rc = (
    /*                            */
    130023424
  ), Ko = (
    /*                             */
    4194304
  ), Fp = (
    /*                             */
    8388608
  ), zp = (
    /*                             */
    16777216
  ), $p = (
    /*                             */
    33554432
  ), Hp = (
    /*                             */
    67108864
  ), Ny = Ko, vl = (
    /*          */
    134217728
  ), wy = (
    /*                          */
    268435455
  ), gl = (
    /*               */
    268435456
  ), eo = (
    /*                        */
    536870912
  ), na = (
    /*                   */
    1073741824
  );
  function IE(e) {
    {
      if (e & De)
        return "Sync";
      if (e & Yo)
        return "InputContinuousHydration";
      if (e & kr)
        return "InputContinuous";
      if (e & Zi)
        return "DefaultHydration";
      if (e & tr)
        return "Default";
      if (e & hl)
        return "TransitionHydration";
      if (e & Wo)
        return "Transition";
      if (e & Rc)
        return "Retry";
      if (e & vl)
        return "SelectiveHydration";
      if (e & gl)
        return "IdleHydration";
      if (e & eo)
        return "Idle";
      if (e & na)
        return "Offscreen";
    }
  }
  var pt = -1, jc = ml, Tc = Ko;
  function yl(e) {
    switch (to(e)) {
      case De:
        return De;
      case Yo:
        return Yo;
      case kr:
        return kr;
      case Zi:
        return Zi;
      case tr:
        return tr;
      case hl:
        return hl;
      case ml:
      case Ep:
      case Cp:
      case Rp:
      case jp:
      case Tp:
      case Dp:
      case kp:
      case Op:
      case Lp:
      case Mp:
      case Ap:
      case _p:
      case Pp:
      case Up:
      case Vp:
        return e & Wo;
      case Ko:
      case Fp:
      case zp:
      case $p:
      case Hp:
        return e & Rc;
      case vl:
        return vl;
      case gl:
        return gl;
      case eo:
        return eo;
      case na:
        return na;
      default:
        return u("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function Dc(e, t) {
    var n = e.pendingLanes;
    if (n === q)
      return q;
    var r = q, l = e.suspendedLanes, f = e.pingedLanes, h = n & wy;
    if (h !== q) {
      var b = h & ~l;
      if (b !== q)
        r = yl(b);
      else {
        var S = h & f;
        S !== q && (r = yl(S));
      }
    } else {
      var E = n & ~l;
      E !== q ? r = yl(E) : f !== q && (r = yl(f));
    }
    if (r === q)
      return q;
    if (t !== q && t !== r && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & l) === q) {
      var R = to(r), P = to(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        R >= P || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        R === tr && (P & Wo) !== q
      )
        return t;
    }
    (r & kr) !== q && (r |= n & tr);
    var _ = e.entangledLanes;
    if (_ !== q)
      for (var B = e.entanglements, J = r & _; J > 0; ) {
        var W = no(J), re = 1 << W;
        r |= B[W], J &= ~re;
      }
    return r;
  }
  function JE(e, t) {
    for (var n = e.eventTimes, r = pt; t > 0; ) {
      var l = no(t), f = 1 << l, h = n[l];
      h > r && (r = h), t &= ~f;
    }
    return r;
  }
  function YE(e, t) {
    switch (e) {
      case De:
      case Yo:
      case kr:
        return t + 250;
      case Zi:
      case tr:
      case hl:
      case ml:
      case Ep:
      case Cp:
      case Rp:
      case jp:
      case Tp:
      case Dp:
      case kp:
      case Op:
      case Lp:
      case Mp:
      case Ap:
      case _p:
      case Pp:
      case Up:
      case Vp:
        return t + 5e3;
      case Ko:
      case Fp:
      case zp:
      case $p:
      case Hp:
        return pt;
      case vl:
      case gl:
      case eo:
      case na:
        return pt;
      default:
        return u("Should have found matching lanes. This is a bug in React."), pt;
    }
  }
  function WE(e, t) {
    for (var n = e.pendingLanes, r = e.suspendedLanes, l = e.pingedLanes, f = e.expirationTimes, h = n; h > 0; ) {
      var b = no(h), S = 1 << b, E = f[b];
      E === pt ? ((S & r) === q || (S & l) !== q) && (f[b] = YE(S, t)) : E <= t && (e.expiredLanes |= S), h &= ~S;
    }
  }
  function KE(e) {
    return yl(e.pendingLanes);
  }
  function Bp(e) {
    var t = e.pendingLanes & ~na;
    return t !== q ? t : t & na ? na : q;
  }
  function GE(e) {
    return (e & De) !== q;
  }
  function Ip(e) {
    return (e & wy) !== q;
  }
  function Ey(e) {
    return (e & Rc) === e;
  }
  function XE(e) {
    var t = De | kr | tr;
    return (e & t) === q;
  }
  function qE(e) {
    return (e & Wo) === e;
  }
  function kc(e, t) {
    var n = Yo | kr | Zi | tr;
    return (t & n) !== q;
  }
  function QE(e, t) {
    return (t & e.expiredLanes) !== q;
  }
  function Cy(e) {
    return (e & Wo) !== q;
  }
  function Ry() {
    var e = jc;
    return jc <<= 1, (jc & Wo) === q && (jc = ml), e;
  }
  function ZE() {
    var e = Tc;
    return Tc <<= 1, (Tc & Rc) === q && (Tc = Ko), e;
  }
  function to(e) {
    return e & -e;
  }
  function bl(e) {
    return to(e);
  }
  function no(e) {
    return 31 - Sy(e);
  }
  function Jp(e) {
    return no(e);
  }
  function aa(e, t) {
    return (e & t) !== q;
  }
  function Go(e, t) {
    return (e & t) === t;
  }
  function Ae(e, t) {
    return e | t;
  }
  function Oc(e, t) {
    return e & ~t;
  }
  function jy(e, t) {
    return e & t;
  }
  function c4(e) {
    return e;
  }
  function eC(e, t) {
    return e !== nn && e < t ? e : t;
  }
  function Yp(e) {
    for (var t = [], n = 0; n < wp; n++)
      t.push(e);
    return t;
  }
  function xl(e, t, n) {
    e.pendingLanes |= t, t !== eo && (e.suspendedLanes = q, e.pingedLanes = q);
    var r = e.eventTimes, l = Jp(t);
    r[l] = n;
  }
  function tC(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var l = no(r), f = 1 << l;
      n[l] = pt, r &= ~f;
    }
  }
  function Ty(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function nC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var r = e.entanglements, l = e.eventTimes, f = e.expirationTimes, h = n; h > 0; ) {
      var b = no(h), S = 1 << b;
      r[b] = q, l[b] = pt, f[b] = pt, h &= ~S;
    }
  }
  function Wp(e, t) {
    for (var n = e.entangledLanes |= t, r = e.entanglements, l = n; l; ) {
      var f = no(l), h = 1 << f;
      // Is this one of the newly entangled lanes?
      h & t | // Is this lane transitively entangled with the newly entangled lanes?
      r[f] & t && (r[f] |= t), l &= ~h;
    }
  }
  function aC(e, t) {
    var n = to(t), r;
    switch (n) {
      case kr:
        r = Yo;
        break;
      case tr:
        r = Zi;
        break;
      case ml:
      case Ep:
      case Cp:
      case Rp:
      case jp:
      case Tp:
      case Dp:
      case kp:
      case Op:
      case Lp:
      case Mp:
      case Ap:
      case _p:
      case Pp:
      case Up:
      case Vp:
      case Ko:
      case Fp:
      case zp:
      case $p:
      case Hp:
        r = hl;
        break;
      case eo:
        r = gl;
        break;
      default:
        r = nn;
        break;
    }
    return (r & (e.suspendedLanes | t)) !== nn ? nn : r;
  }
  function Dy(e, t, n) {
    if (_a)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var l = Jp(n), f = 1 << l, h = r[l];
        h.add(t), n &= ~f;
      }
  }
  function ky(e, t) {
    if (_a)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var l = Jp(t), f = 1 << l, h = n[l];
        h.size > 0 && (h.forEach(function(b) {
          var S = b.alternate;
          (S === null || !r.has(S)) && r.add(b);
        }), h.clear()), t &= ~f;
      }
  }
  function Oy(e, t) {
    return null;
  }
  var ra = De, Or = kr, Lr = tr, Lc = eo, Sl = nn;
  function Pa() {
    return Sl;
  }
  function an(e) {
    Sl = e;
  }
  function rC(e, t) {
    var n = Sl;
    try {
      return Sl = e, t();
    } finally {
      Sl = n;
    }
  }
  function iC(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function oC(e, t) {
    return e > t ? e : t;
  }
  function Kp(e, t) {
    return e !== 0 && e < t;
  }
  function Ly(e) {
    var t = to(e);
    return Kp(ra, t) ? Kp(Or, t) ? Ip(t) ? Lr : Lc : Or : ra;
  }
  function Mc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var My;
  function sC(e) {
    My = e;
  }
  function lC(e) {
    My(e);
  }
  var Gp;
  function uC(e) {
    Gp = e;
  }
  var Ay;
  function cC(e) {
    Ay = e;
  }
  var _y;
  function fC(e) {
    _y = e;
  }
  var Py;
  function dC(e) {
    Py = e;
  }
  var Xp = !1, Ac = [], ri = null, ii = null, oi = null, Nl = /* @__PURE__ */ new Map(), wl = /* @__PURE__ */ new Map(), si = [], pC = [
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
  function hC(e) {
    return pC.indexOf(e) > -1;
  }
  function mC(e, t, n, r, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [r]
    };
  }
  function Uy(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ri = null;
        break;
      case "dragenter":
      case "dragleave":
        ii = null;
        break;
      case "mouseover":
      case "mouseout":
        oi = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        Nl.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var r = t.pointerId;
        wl.delete(r);
        break;
      }
    }
  }
  function El(e, t, n, r, l, f) {
    if (e === null || e.nativeEvent !== f) {
      var h = mC(t, n, r, l, f);
      if (t !== null) {
        var b = ci(t);
        b !== null && Gp(b);
      }
      return h;
    }
    e.eventSystemFlags |= r;
    var S = e.targetContainers;
    return l !== null && S.indexOf(l) === -1 && S.push(l), e;
  }
  function vC(e, t, n, r, l) {
    switch (t) {
      case "focusin": {
        var f = l;
        return ri = El(ri, e, t, n, r, f), !0;
      }
      case "dragenter": {
        var h = l;
        return ii = El(ii, e, t, n, r, h), !0;
      }
      case "mouseover": {
        var b = l;
        return oi = El(oi, e, t, n, r, b), !0;
      }
      case "pointerover": {
        var S = l, E = S.pointerId;
        return Nl.set(E, El(Nl.get(E) || null, e, t, n, r, S)), !0;
      }
      case "gotpointercapture": {
        var R = l, P = R.pointerId;
        return wl.set(P, El(wl.get(P) || null, e, t, n, r, R)), !0;
      }
    }
    return !1;
  }
  function Vy(e) {
    var t = io(e.target);
    if (t !== null) {
      var n = qi(t);
      if (n !== null) {
        var r = n.tag;
        if (r === F) {
          var l = ly(n);
          if (l !== null) {
            e.blockedOn = l, Py(e.priority, function() {
              Ay(n);
            });
            return;
          }
        } else if (r === y) {
          var f = n.stateNode;
          if (Mc(f)) {
            e.blockedOn = uy(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function gC(e) {
    for (var t = _y(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, r = 0; r < si.length && Kp(t, si[r].priority); r++)
      ;
    si.splice(r, 0, n), r === 0 && Vy(n);
  }
  function _c(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], r = Zp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (r === null) {
        var l = e.nativeEvent, f = new l.constructor(l.type, l);
        Bw(f), l.target.dispatchEvent(f), Iw();
      } else {
        var h = ci(r);
        return h !== null && Gp(h), e.blockedOn = r, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Fy(e, t, n) {
    _c(e) && n.delete(t);
  }
  function yC() {
    Xp = !1, ri !== null && _c(ri) && (ri = null), ii !== null && _c(ii) && (ii = null), oi !== null && _c(oi) && (oi = null), Nl.forEach(Fy), wl.forEach(Fy);
  }
  function Cl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xp || (Xp = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, yC)));
  }
  function Rl(e) {
    if (Ac.length > 0) {
      Cl(Ac[0], e);
      for (var t = 1; t < Ac.length; t++) {
        var n = Ac[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    ri !== null && Cl(ri, e), ii !== null && Cl(ii, e), oi !== null && Cl(oi, e);
    var r = function(b) {
      return Cl(b, e);
    };
    Nl.forEach(r), wl.forEach(r);
    for (var l = 0; l < si.length; l++) {
      var f = si[l];
      f.blockedOn === e && (f.blockedOn = null);
    }
    for (; si.length > 0; ) {
      var h = si[0];
      if (h.blockedOn !== null)
        break;
      Vy(h), h.blockedOn === null && si.shift();
    }
  }
  var Xo = o.ReactCurrentBatchConfig, qp = !0;
  function zy(e) {
    qp = !!e;
  }
  function bC() {
    return qp;
  }
  function xC(e, t, n) {
    var r = $y(t), l;
    switch (r) {
      case ra:
        l = SC;
        break;
      case Or:
        l = NC;
        break;
      case Lr:
      default:
        l = Qp;
        break;
    }
    return l.bind(null, t, n, e);
  }
  function SC(e, t, n, r) {
    var l = Pa(), f = Xo.transition;
    Xo.transition = null;
    try {
      an(ra), Qp(e, t, n, r);
    } finally {
      an(l), Xo.transition = f;
    }
  }
  function NC(e, t, n, r) {
    var l = Pa(), f = Xo.transition;
    Xo.transition = null;
    try {
      an(Or), Qp(e, t, n, r);
    } finally {
      an(l), Xo.transition = f;
    }
  }
  function Qp(e, t, n, r) {
    qp && wC(e, t, n, r);
  }
  function wC(e, t, n, r) {
    var l = Zp(e, t, n, r);
    if (l === null) {
      ph(e, t, r, Pc, n), Uy(e, r);
      return;
    }
    if (vC(l, e, t, n, r)) {
      r.stopPropagation();
      return;
    }
    if (Uy(e, r), t & ol && hC(e)) {
      for (; l !== null; ) {
        var f = ci(l);
        f !== null && lC(f);
        var h = Zp(e, t, n, r);
        if (h === null && ph(e, t, r, Pc, n), h === l)
          break;
        l = h;
      }
      l !== null && r.stopPropagation();
      return;
    }
    ph(e, t, r, null, n);
  }
  var Pc = null;
  function Zp(e, t, n, r) {
    Pc = null;
    var l = op(r), f = io(l);
    if (f !== null) {
      var h = qi(f);
      if (h === null)
        f = null;
      else {
        var b = h.tag;
        if (b === F) {
          var S = ly(h);
          if (S !== null)
            return S;
          f = null;
        } else if (b === y) {
          var E = h.stateNode;
          if (Mc(E))
            return uy(h);
          f = null;
        } else h !== f && (f = null);
      }
    }
    return Pc = f, null;
  }
  function $y(e) {
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
        return ra;
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
        return Or;
      case "message": {
        var t = hE();
        switch (t) {
          case Cc:
            return ra;
          case xp:
            return Or;
          case Qi:
          case mE:
            return Lr;
          case Sp:
            return Lc;
          default:
            return Lr;
        }
      }
      default:
        return Lr;
    }
  }
  function EC(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function CC(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function RC(e, t, n, r) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: r
    }), n;
  }
  function jC(e, t, n, r) {
    return e.addEventListener(t, n, {
      passive: r
    }), n;
  }
  var jl = null, eh = null, Tl = null;
  function TC(e) {
    return jl = e, eh = By(), !0;
  }
  function DC() {
    jl = null, eh = null, Tl = null;
  }
  function Hy() {
    if (Tl)
      return Tl;
    var e, t = eh, n = t.length, r, l = By(), f = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
      ;
    var h = n - e;
    for (r = 1; r <= h && t[n - r] === l[f - r]; r++)
      ;
    var b = r > 1 ? 1 - r : void 0;
    return Tl = l.slice(e, b), Tl;
  }
  function By() {
    return "value" in jl ? jl.value : jl.textContent;
  }
  function Uc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function Vc() {
    return !0;
  }
  function Iy() {
    return !1;
  }
  function ia(e) {
    function t(n, r, l, f, h) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = f, this.target = h, this.currentTarget = null;
      for (var b in e)
        if (e.hasOwnProperty(b)) {
          var S = e[b];
          S ? this[b] = S(f) : this[b] = f[b];
        }
      var E = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
      return E ? this.isDefaultPrevented = Vc : this.isDefaultPrevented = Iy, this.isPropagationStopped = Iy, this;
    }
    return $e(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vc);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vc);
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
      isPersistent: Vc
    }), t;
  }
  var qo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, th = ia(qo), Dl = $e({}, qo, {
    view: 0,
    detail: 0
  }), kC = ia(Dl), nh, ah, kl;
  function OC(e) {
    e !== kl && (kl && e.type === "mousemove" ? (nh = e.screenX - kl.screenX, ah = e.screenY - kl.screenY) : (nh = 0, ah = 0), kl = e);
  }
  var Fc = $e({}, Dl, {
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
    getModifierState: ih,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (OC(e), nh);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ah;
    }
  }), Jy = ia(Fc), LC = $e({}, Fc, {
    dataTransfer: 0
  }), MC = ia(LC), AC = $e({}, Dl, {
    relatedTarget: 0
  }), rh = ia(AC), _C = $e({}, qo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), PC = ia(_C), UC = $e({}, qo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), VC = ia(UC), FC = $e({}, qo, {
    data: 0
  }), Yy = ia(FC), zC = Yy, $C = {
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
  }, HC = {
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
  function BC(e) {
    if (e.key) {
      var t = $C[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = Uc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? HC[e.keyCode] || "Unidentified" : "";
  }
  var IC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function JC(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var r = IC[e];
    return r ? !!n[r] : !1;
  }
  function ih(e) {
    return JC;
  }
  var YC = $e({}, Dl, {
    key: BC,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ih,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Uc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Uc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), WC = ia(YC), KC = $e({}, Fc, {
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
  }), Wy = ia(KC), GC = $e({}, Dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ih
  }), XC = ia(GC), qC = $e({}, qo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), QC = ia(qC), ZC = $e({}, Fc, {
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
  }), eR = ia(ZC), tR = [9, 13, 27, 32], Ky = 229, oh = Mt && "CompositionEvent" in window, Ol = null;
  Mt && "documentMode" in document && (Ol = document.documentMode);
  var nR = Mt && "TextEvent" in window && !Ol, Gy = Mt && (!oh || Ol && Ol > 8 && Ol <= 11), Xy = 32, qy = String.fromCharCode(Xy);
  function aR() {
    Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Xn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Xn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Xn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var Qy = !1;
  function rR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function iR(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function oR(e, t) {
    return e === "keydown" && t.keyCode === Ky;
  }
  function Zy(e, t) {
    switch (e) {
      case "keyup":
        return tR.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== Ky;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function eb(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function tb(e) {
    return e.locale === "ko";
  }
  var Qo = !1;
  function sR(e, t, n, r, l) {
    var f, h;
    if (oh ? f = iR(t) : Qo ? Zy(t, r) && (f = "onCompositionEnd") : oR(t, r) && (f = "onCompositionStart"), !f)
      return null;
    Gy && !tb(r) && (!Qo && f === "onCompositionStart" ? Qo = TC(l) : f === "onCompositionEnd" && Qo && (h = Hy()));
    var b = Ic(n, f);
    if (b.length > 0) {
      var S = new Yy(f, t, null, r, l);
      if (e.push({
        event: S,
        listeners: b
      }), h)
        S.data = h;
      else {
        var E = eb(r);
        E !== null && (S.data = E);
      }
    }
  }
  function lR(e, t) {
    switch (e) {
      case "compositionend":
        return eb(t);
      case "keypress":
        var n = t.which;
        return n !== Xy ? null : (Qy = !0, qy);
      case "textInput":
        var r = t.data;
        return r === qy && Qy ? null : r;
      default:
        return null;
    }
  }
  function uR(e, t) {
    if (Qo) {
      if (e === "compositionend" || !oh && Zy(e, t)) {
        var n = Hy();
        return DC(), Qo = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!rR(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gy && !tb(t) ? null : t.data;
      default:
        return null;
    }
  }
  function cR(e, t, n, r, l) {
    var f;
    if (nR ? f = lR(t, r) : f = uR(t, r), !f)
      return null;
    var h = Ic(n, "onBeforeInput");
    if (h.length > 0) {
      var b = new zC("onBeforeInput", "beforeinput", null, r, l);
      e.push({
        event: b,
        listeners: h
      }), b.data = f;
    }
  }
  function fR(e, t, n, r, l, f, h) {
    sR(e, t, n, r, l), cR(e, t, n, r, l);
  }
  var dR = {
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
  function nb(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dR[e.type] : t === "textarea";
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
  function pR(e) {
    if (!Mt)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
  function hR() {
    Xn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function ab(e, t, n, r) {
    ey(r);
    var l = Ic(t, "onChange");
    if (l.length > 0) {
      var f = new th("onChange", "change", null, n, r);
      e.push({
        event: f,
        listeners: l
      });
    }
  }
  var Ll = null, Ml = null;
  function mR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function vR(e) {
    var t = [];
    ab(t, Ml, e, op(e)), ry(gR, t);
  }
  function gR(e) {
    Sb(e, 0);
  }
  function zc(e) {
    var t = rs(e);
    if (Mo(t))
      return e;
  }
  function yR(e, t) {
    if (e === "change")
      return t;
  }
  var rb = !1;
  Mt && (rb = pR("input") && (!document.documentMode || document.documentMode > 9));
  function bR(e, t) {
    Ll = e, Ml = t, Ll.attachEvent("onpropertychange", ob);
  }
  function ib() {
    Ll && (Ll.detachEvent("onpropertychange", ob), Ll = null, Ml = null);
  }
  function ob(e) {
    e.propertyName === "value" && zc(Ml) && vR(e);
  }
  function xR(e, t, n) {
    e === "focusin" ? (ib(), bR(t, n)) : e === "focusout" && ib();
  }
  function SR(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zc(Ml);
  }
  function NR(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function wR(e, t) {
    if (e === "click")
      return zc(t);
  }
  function ER(e, t) {
    if (e === "input" || e === "change")
      return zc(t);
  }
  function CR(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Te(e, "number", e.value);
  }
  function RR(e, t, n, r, l, f, h) {
    var b = n ? rs(n) : window, S, E;
    if (mR(b) ? S = yR : nb(b) ? rb ? S = ER : (S = SR, E = xR) : NR(b) && (S = wR), S) {
      var R = S(t, n);
      if (R) {
        ab(e, R, r, l);
        return;
      }
    }
    E && E(t, b, n), t === "focusout" && CR(b);
  }
  function jR() {
    qn("onMouseEnter", ["mouseout", "mouseover"]), qn("onMouseLeave", ["mouseout", "mouseover"]), qn("onPointerEnter", ["pointerout", "pointerover"]), qn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function TR(e, t, n, r, l, f, h) {
    var b = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
    if (b && !Jw(r)) {
      var E = r.relatedTarget || r.fromElement;
      if (E && (io(E) || Kl(E)))
        return;
    }
    if (!(!S && !b)) {
      var R;
      if (l.window === l)
        R = l;
      else {
        var P = l.ownerDocument;
        P ? R = P.defaultView || P.parentWindow : R = window;
      }
      var _, B;
      if (S) {
        var J = r.relatedTarget || r.toElement;
        if (_ = n, B = J ? io(J) : null, B !== null) {
          var W = qi(B);
          (B !== W || B.tag !== C && B.tag !== j) && (B = null);
        }
      } else
        _ = null, B = n;
      if (_ !== B) {
        var re = Jy, xe = "onMouseLeave", me = "onMouseEnter", Ke = "mouse";
        (t === "pointerout" || t === "pointerover") && (re = Wy, xe = "onPointerLeave", me = "onPointerEnter", Ke = "pointer");
        var ze = _ == null ? R : rs(_), $ = B == null ? R : rs(B), K = new re(xe, Ke + "leave", _, r, l);
        K.target = ze, K.relatedTarget = $;
        var H = null, Z = io(l);
        if (Z === n) {
          var le = new re(me, Ke + "enter", B, r, l);
          le.target = $, le.relatedTarget = ze, H = le;
        }
        QR(e, K, H, _, B);
      }
    }
  }
  function DR(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var oa = typeof Object.is == "function" ? Object.is : DR;
  function Al(e, t) {
    if (oa(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (var l = 0; l < n.length; l++) {
      var f = n[l];
      if (!yn.call(t, f) || !oa(e[f], t[f]))
        return !1;
    }
    return !0;
  }
  function sb(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function kR(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function lb(e, t) {
    for (var n = sb(e), r = 0, l = 0; n; ) {
      if (n.nodeType === Er) {
        if (l = r + n.textContent.length, r <= t && l >= t)
          return {
            node: n,
            offset: t - r
          };
        r = l;
      }
      n = sb(kR(n));
    }
  }
  function OR(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
    if (!r || r.rangeCount === 0)
      return null;
    var l = r.anchorNode, f = r.anchorOffset, h = r.focusNode, b = r.focusOffset;
    try {
      l.nodeType, h.nodeType;
    } catch {
      return null;
    }
    return LR(e, l, f, h, b);
  }
  function LR(e, t, n, r, l) {
    var f = 0, h = -1, b = -1, S = 0, E = 0, R = e, P = null;
    e: for (; ; ) {
      for (var _ = null; R === t && (n === 0 || R.nodeType === Er) && (h = f + n), R === r && (l === 0 || R.nodeType === Er) && (b = f + l), R.nodeType === Er && (f += R.nodeValue.length), (_ = R.firstChild) !== null; )
        P = R, R = _;
      for (; ; ) {
        if (R === e)
          break e;
        if (P === t && ++S === n && (h = f), P === r && ++E === l && (b = f), (_ = R.nextSibling) !== null)
          break;
        R = P, P = R.parentNode;
      }
      R = _;
    }
    return h === -1 || b === -1 ? null : {
      start: h,
      end: b
    };
  }
  function MR(e, t) {
    var n = e.ownerDocument || document, r = n && n.defaultView || window;
    if (r.getSelection) {
      var l = r.getSelection(), f = e.textContent.length, h = Math.min(t.start, f), b = t.end === void 0 ? h : Math.min(t.end, f);
      if (!l.extend && h > b) {
        var S = b;
        b = h, h = S;
      }
      var E = lb(e, h), R = lb(e, b);
      if (E && R) {
        if (l.rangeCount === 1 && l.anchorNode === E.node && l.anchorOffset === E.offset && l.focusNode === R.node && l.focusOffset === R.offset)
          return;
        var P = n.createRange();
        P.setStart(E.node, E.offset), l.removeAllRanges(), h > b ? (l.addRange(P), l.extend(R.node, R.offset)) : (P.setEnd(R.node, R.offset), l.addRange(P));
      }
    }
  }
  function ub(e) {
    return e && e.nodeType === Er;
  }
  function cb(e, t) {
    return !e || !t ? !1 : e === t ? !0 : ub(e) ? !1 : ub(t) ? cb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function AR(e) {
    return e && e.ownerDocument && cb(e.ownerDocument.documentElement, e);
  }
  function _R(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function fb() {
    for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
      if (_R(t))
        e = t.contentWindow;
      else
        return t;
      t = ti(e.document);
    }
    return t;
  }
  function sh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function PR() {
    var e = fb();
    return {
      focusedElem: e,
      selectionRange: sh(e) ? VR(e) : null
    };
  }
  function UR(e) {
    var t = fb(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && AR(n)) {
      r !== null && sh(n) && FR(n, r);
      for (var l = [], f = n; f = f.parentNode; )
        f.nodeType === $n && l.push({
          element: f,
          left: f.scrollLeft,
          top: f.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var h = 0; h < l.length; h++) {
        var b = l[h];
        b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
      }
    }
  }
  function VR(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = OR(e), t || {
      start: 0,
      end: 0
    };
  }
  function FR(e, t) {
    var n = t.start, r = t.end;
    r === void 0 && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : MR(e, t);
  }
  var zR = Mt && "documentMode" in document && document.documentMode <= 11;
  function $R() {
    Xn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var Zo = null, lh = null, _l = null, uh = !1;
  function HR(e) {
    if ("selectionStart" in e && sh(e))
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
  function BR(e) {
    return e.window === e ? e.document : e.nodeType === Cr ? e : e.ownerDocument;
  }
  function db(e, t, n) {
    var r = BR(n);
    if (!(uh || Zo == null || Zo !== ti(r))) {
      var l = HR(Zo);
      if (!_l || !Al(_l, l)) {
        _l = l;
        var f = Ic(lh, "onSelect");
        if (f.length > 0) {
          var h = new th("onSelect", "select", null, t, n);
          e.push({
            event: h,
            listeners: f
          }), h.target = Zo;
        }
      }
    }
  }
  function IR(e, t, n, r, l, f, h) {
    var b = n ? rs(n) : window;
    switch (t) {
      case "focusin":
        (nb(b) || b.contentEditable === "true") && (Zo = b, lh = n, _l = null);
        break;
      case "focusout":
        Zo = null, lh = null, _l = null;
        break;
      case "mousedown":
        uh = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        uh = !1, db(e, r, l);
        break;
      case "selectionchange":
        if (zR)
          break;
      case "keydown":
      case "keyup":
        db(e, r, l);
    }
  }
  function $c(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var es = {
    animationend: $c("Animation", "AnimationEnd"),
    animationiteration: $c("Animation", "AnimationIteration"),
    animationstart: $c("Animation", "AnimationStart"),
    transitionend: $c("Transition", "TransitionEnd")
  }, ch = {}, pb = {};
  Mt && (pb = document.createElement("div").style, "AnimationEvent" in window || (delete es.animationend.animation, delete es.animationiteration.animation, delete es.animationstart.animation), "TransitionEvent" in window || delete es.transitionend.transition);
  function Hc(e) {
    if (ch[e])
      return ch[e];
    if (!es[e])
      return e;
    var t = es[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in pb)
        return ch[e] = t[n];
    return e;
  }
  var hb = Hc("animationend"), mb = Hc("animationiteration"), vb = Hc("animationstart"), gb = Hc("transitionend"), yb = /* @__PURE__ */ new Map(), bb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function li(e, t) {
    yb.set(e, t), Xn(t, [e]);
  }
  function JR() {
    for (var e = 0; e < bb.length; e++) {
      var t = bb[e], n = t.toLowerCase(), r = t[0].toUpperCase() + t.slice(1);
      li(n, "on" + r);
    }
    li(hb, "onAnimationEnd"), li(mb, "onAnimationIteration"), li(vb, "onAnimationStart"), li("dblclick", "onDoubleClick"), li("focusin", "onFocus"), li("focusout", "onBlur"), li(gb, "onTransitionEnd");
  }
  function YR(e, t, n, r, l, f, h) {
    var b = yb.get(t);
    if (b !== void 0) {
      var S = th, E = t;
      switch (t) {
        case "keypress":
          if (Uc(r) === 0)
            return;
        case "keydown":
        case "keyup":
          S = WC;
          break;
        case "focusin":
          E = "focus", S = rh;
          break;
        case "focusout":
          E = "blur", S = rh;
          break;
        case "beforeblur":
        case "afterblur":
          S = rh;
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
          S = Jy;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          S = MC;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          S = XC;
          break;
        case hb:
        case mb:
        case vb:
          S = PC;
          break;
        case gb:
          S = QC;
          break;
        case "scroll":
          S = kC;
          break;
        case "wheel":
          S = eR;
          break;
        case "copy":
        case "cut":
        case "paste":
          S = VC;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          S = Wy;
          break;
      }
      var R = (f & ol) !== 0;
      {
        var P = !R && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", _ = XR(n, b, r.type, R, P);
        if (_.length > 0) {
          var B = new S(b, E, null, r, l);
          e.push({
            event: B,
            listeners: _
          });
        }
      }
    }
  }
  JR(), jR(), hR(), $R(), aR();
  function WR(e, t, n, r, l, f, h) {
    YR(e, t, n, r, l, f);
    var b = (f & Hw) === 0;
    b && (TR(e, t, n, r, l), RR(e, t, n, r, l), IR(e, t, n, r, l), fR(e, t, n, r, l));
  }
  var Pl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], fh = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Pl));
  function xb(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, eE(r, t, void 0, e), e.currentTarget = null;
  }
  function KR(e, t, n) {
    var r;
    if (n)
      for (var l = t.length - 1; l >= 0; l--) {
        var f = t[l], h = f.instance, b = f.currentTarget, S = f.listener;
        if (h !== r && e.isPropagationStopped())
          return;
        xb(e, S, b), r = h;
      }
    else
      for (var E = 0; E < t.length; E++) {
        var R = t[E], P = R.instance, _ = R.currentTarget, B = R.listener;
        if (P !== r && e.isPropagationStopped())
          return;
        xb(e, B, _), r = P;
      }
  }
  function Sb(e, t) {
    for (var n = (t & ol) !== 0, r = 0; r < e.length; r++) {
      var l = e[r], f = l.event, h = l.listeners;
      KR(f, h, n);
    }
    tE();
  }
  function GR(e, t, n, r, l) {
    var f = op(n), h = [];
    WR(h, e, r, n, f, t), Sb(h, t);
  }
  function gt(e, t) {
    fh.has(e) || u('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, r = CT(t), l = ZR(e);
    r.has(l) || (Nb(t, e, ip, n), r.add(l));
  }
  function dh(e, t, n) {
    fh.has(e) && !t && u('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var r = 0;
    t && (r |= ol), Nb(n, e, r, t);
  }
  var Bc = "_reactListening" + Math.random().toString(36).slice(2);
  function Ul(e) {
    if (!e[Bc]) {
      e[Bc] = !0, pa.forEach(function(n) {
        n !== "selectionchange" && (fh.has(n) || dh(n, !1, e), dh(n, !0, e));
      });
      var t = e.nodeType === Cr ? e : e.ownerDocument;
      t !== null && (t[Bc] || (t[Bc] = !0, dh("selectionchange", !1, t)));
    }
  }
  function Nb(e, t, n, r, l) {
    var f = xC(e, t, n), h = void 0;
    up && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, r ? h !== void 0 ? RC(e, t, f, h) : CC(e, t, f) : h !== void 0 ? jC(e, t, f, h) : EC(e, t, f);
  }
  function wb(e, t) {
    return e === t || e.nodeType === At && e.parentNode === t;
  }
  function ph(e, t, n, r, l) {
    var f = r;
    if (!(t & Qg) && !(t & ip)) {
      var h = l;
      if (r !== null) {
        var b = r;
        e: for (; ; ) {
          if (b === null)
            return;
          var S = b.tag;
          if (S === y || S === x) {
            var E = b.stateNode.containerInfo;
            if (wb(E, h))
              break;
            if (S === x)
              for (var R = b.return; R !== null; ) {
                var P = R.tag;
                if (P === y || P === x) {
                  var _ = R.stateNode.containerInfo;
                  if (wb(_, h))
                    return;
                }
                R = R.return;
              }
            for (; E !== null; ) {
              var B = io(E);
              if (B === null)
                return;
              var J = B.tag;
              if (J === C || J === j) {
                b = f = B;
                continue e;
              }
              E = E.parentNode;
            }
          }
          b = b.return;
        }
      }
    }
    ry(function() {
      return GR(e, t, n, f);
    });
  }
  function Vl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function XR(e, t, n, r, l, f) {
    for (var h = t !== null ? t + "Capture" : null, b = r ? h : t, S = [], E = e, R = null; E !== null; ) {
      var P = E, _ = P.stateNode, B = P.tag;
      if (B === C && _ !== null && (R = _, b !== null)) {
        var J = ll(E, b);
        J != null && S.push(Vl(E, J, R));
      }
      if (l)
        break;
      E = E.return;
    }
    return S;
  }
  function Ic(e, t) {
    for (var n = t + "Capture", r = [], l = e; l !== null; ) {
      var f = l, h = f.stateNode, b = f.tag;
      if (b === C && h !== null) {
        var S = h, E = ll(l, n);
        E != null && r.unshift(Vl(l, E, S));
        var R = ll(l, t);
        R != null && r.push(Vl(l, R, S));
      }
      l = l.return;
    }
    return r;
  }
  function ts(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== C);
    return e || null;
  }
  function qR(e, t) {
    for (var n = e, r = t, l = 0, f = n; f; f = ts(f))
      l++;
    for (var h = 0, b = r; b; b = ts(b))
      h++;
    for (; l - h > 0; )
      n = ts(n), l--;
    for (; h - l > 0; )
      r = ts(r), h--;
    for (var S = l; S--; ) {
      if (n === r || r !== null && n === r.alternate)
        return n;
      n = ts(n), r = ts(r);
    }
    return null;
  }
  function Eb(e, t, n, r, l) {
    for (var f = t._reactName, h = [], b = n; b !== null && b !== r; ) {
      var S = b, E = S.alternate, R = S.stateNode, P = S.tag;
      if (E !== null && E === r)
        break;
      if (P === C && R !== null) {
        var _ = R;
        if (l) {
          var B = ll(b, f);
          B != null && h.unshift(Vl(b, B, _));
        } else if (!l) {
          var J = ll(b, f);
          J != null && h.push(Vl(b, J, _));
        }
      }
      b = b.return;
    }
    h.length !== 0 && e.push({
      event: t,
      listeners: h
    });
  }
  function QR(e, t, n, r, l) {
    var f = r && l ? qR(r, l) : null;
    r !== null && Eb(e, t, r, f, !1), l !== null && n !== null && Eb(e, n, l, f, !0);
  }
  function ZR(e, t) {
    return e + "__bubble";
  }
  var Hn = !1, Fl = "dangerouslySetInnerHTML", Jc = "suppressContentEditableWarning", ui = "suppressHydrationWarning", Cb = "autoFocus", ao = "children", ro = "style", Yc = "__html", hh, Wc, zl, Rb, Kc, jb, Tb;
  hh = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Wc = function(e, t) {
    _w(e, t), Pw(e, t), $w(e, t, {
      registrationNameDependencies: on,
      possibleRegistrationNames: Un
    });
  }, jb = Mt && !document.documentMode, zl = function(e, t, n) {
    if (!Hn) {
      var r = Gc(n), l = Gc(t);
      l !== r && (Hn = !0, u("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(r)));
    }
  }, Rb = function(e) {
    if (!Hn) {
      Hn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), u("Extra attributes from the server: %s", t);
    }
  }, Kc = function(e, t) {
    t === !1 ? u("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : u("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Tb = function(e, t) {
    var n = e.namespaceURI === wr ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var ej = /\r\n?/g, tj = /\u0000|\uFFFD/g;
  function Gc(e) {
    ma(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(ej, `
`).replace(tj, "");
  }
  function Xc(e, t, n, r) {
    var l = Gc(t), f = Gc(e);
    if (f !== l && (r && (Hn || (Hn = !0, u('Text content did not match. Server: "%s" Client: "%s"', f, l))), n && Ne))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function Db(e) {
    return e.nodeType === Cr ? e : e.ownerDocument;
  }
  function nj() {
  }
  function qc(e) {
    e.onclick = nj;
  }
  function aj(e, t, n, r, l) {
    for (var f in r)
      if (r.hasOwnProperty(f)) {
        var h = r[f];
        if (f === ro)
          h && Object.freeze(h), Yg(t, h);
        else if (f === Fl) {
          var b = h ? h[Yc] : void 0;
          b != null && $g(t, b);
        } else if (f === ao)
          if (typeof h == "string") {
            var S = e !== "textarea" || h !== "";
            S && bc(t, h);
          } else typeof h == "number" && bc(t, "" + h);
        else f === Jc || f === ui || f === Cb || (on.hasOwnProperty(f) ? h != null && (typeof h != "function" && Kc(f, h), f === "onScroll" && gt("scroll", t)) : h != null && br(t, f, h, l));
      }
  }
  function rj(e, t, n, r) {
    for (var l = 0; l < t.length; l += 2) {
      var f = t[l], h = t[l + 1];
      f === ro ? Yg(e, h) : f === Fl ? $g(e, h) : f === ao ? bc(e, h) : br(e, f, h, r);
    }
  }
  function ij(e, t, n, r) {
    var l, f = Db(n), h, b = r;
    if (b === wr && (b = Zd(e)), b === wr) {
      if (l = Yi(e, t), !l && e !== e.toLowerCase() && u("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var S = f.createElement("div");
        S.innerHTML = "<script><\/script>";
        var E = S.firstChild;
        h = S.removeChild(E);
      } else if (typeof t.is == "string")
        h = f.createElement(e, {
          is: t.is
        });
      else if (h = f.createElement(e), e === "select") {
        var R = h;
        t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
      }
    } else
      h = f.createElementNS(b, e);
    return b === wr && !l && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !yn.call(hh, e) && (hh[e] = !0, u("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
  }
  function oj(e, t) {
    return Db(t).createTextNode(e);
  }
  function sj(e, t, n, r) {
    var l = Yi(t, n);
    Wc(t, n);
    var f;
    switch (t) {
      case "dialog":
        gt("cancel", e), gt("close", e), f = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e), f = n;
        break;
      case "video":
      case "audio":
        for (var h = 0; h < Pl.length; h++)
          gt(Pl[h], e);
        f = n;
        break;
      case "source":
        gt("error", e), f = n;
        break;
      case "img":
      case "image":
      case "link":
        gt("error", e), gt("load", e), f = n;
        break;
      case "details":
        gt("toggle", e), f = n;
        break;
      case "input":
        k(e, n), f = N(e, n), gt("invalid", e);
        break;
      case "option":
        ft(e, n), f = n;
        break;
      case "select":
        rl(e, n), f = al(e, n), gt("invalid", e);
        break;
      case "textarea":
        Vg(e, n), f = qd(e, n), gt("invalid", e);
        break;
      default:
        f = n;
    }
    switch (rp(t, f), aj(t, e, r, f, l), t) {
      case "input":
        Sr(e), ee(e, n, !1);
        break;
      case "textarea":
        Sr(e), zg(e);
        break;
      case "option":
        vt(e, n);
        break;
      case "select":
        Xd(e, n);
        break;
      default:
        typeof f.onClick == "function" && qc(e);
        break;
    }
  }
  function lj(e, t, n, r, l) {
    Wc(t, r);
    var f = null, h, b;
    switch (t) {
      case "input":
        h = N(e, n), b = N(e, r), f = [];
        break;
      case "select":
        h = al(e, n), b = al(e, r), f = [];
        break;
      case "textarea":
        h = qd(e, n), b = qd(e, r), f = [];
        break;
      default:
        h = n, b = r, typeof h.onClick != "function" && typeof b.onClick == "function" && qc(e);
        break;
    }
    rp(t, b);
    var S, E, R = null;
    for (S in h)
      if (!(b.hasOwnProperty(S) || !h.hasOwnProperty(S) || h[S] == null))
        if (S === ro) {
          var P = h[S];
          for (E in P)
            P.hasOwnProperty(E) && (R || (R = {}), R[E] = "");
        } else S === Fl || S === ao || S === Jc || S === ui || S === Cb || (on.hasOwnProperty(S) ? f || (f = []) : (f = f || []).push(S, null));
    for (S in b) {
      var _ = b[S], B = h != null ? h[S] : void 0;
      if (!(!b.hasOwnProperty(S) || _ === B || _ == null && B == null))
        if (S === ro)
          if (_ && Object.freeze(_), B) {
            for (E in B)
              B.hasOwnProperty(E) && (!_ || !_.hasOwnProperty(E)) && (R || (R = {}), R[E] = "");
            for (E in _)
              _.hasOwnProperty(E) && B[E] !== _[E] && (R || (R = {}), R[E] = _[E]);
          } else
            R || (f || (f = []), f.push(S, R)), R = _;
        else if (S === Fl) {
          var J = _ ? _[Yc] : void 0, W = B ? B[Yc] : void 0;
          J != null && W !== J && (f = f || []).push(S, J);
        } else S === ao ? (typeof _ == "string" || typeof _ == "number") && (f = f || []).push(S, "" + _) : S === Jc || S === ui || (on.hasOwnProperty(S) ? (_ != null && (typeof _ != "function" && Kc(S, _), S === "onScroll" && gt("scroll", e)), !f && B !== _ && (f = [])) : (f = f || []).push(S, _));
    }
    return R && (jw(R, b[ro]), (f = f || []).push(ro, R)), f;
  }
  function uj(e, t, n, r, l) {
    n === "input" && l.type === "radio" && l.name != null && I(e, l);
    var f = Yi(n, r), h = Yi(n, l);
    switch (rj(e, t, f, h), n) {
      case "input":
        Y(e, l);
        break;
      case "textarea":
        Fg(e, l);
        break;
      case "select":
        rw(e, l);
        break;
    }
  }
  function cj(e) {
    {
      var t = e.toLowerCase();
      return xc.hasOwnProperty(t) && xc[t] || null;
    }
  }
  function fj(e, t, n, r, l, f, h) {
    var b, S;
    switch (b = Yi(t, n), Wc(t, n), t) {
      case "dialog":
        gt("cancel", e), gt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e);
        break;
      case "video":
      case "audio":
        for (var E = 0; E < Pl.length; E++)
          gt(Pl[E], e);
        break;
      case "source":
        gt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        gt("error", e), gt("load", e);
        break;
      case "details":
        gt("toggle", e);
        break;
      case "input":
        k(e, n), gt("invalid", e);
        break;
      case "option":
        ft(e, n);
        break;
      case "select":
        rl(e, n), gt("invalid", e);
        break;
      case "textarea":
        Vg(e, n), gt("invalid", e);
        break;
    }
    rp(t, n);
    {
      S = /* @__PURE__ */ new Set();
      for (var R = e.attributes, P = 0; P < R.length; P++) {
        var _ = R[P].name.toLowerCase();
        switch (_) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            S.add(R[P].name);
        }
      }
    }
    var B = null;
    for (var J in n)
      if (n.hasOwnProperty(J)) {
        var W = n[J];
        if (J === ao)
          typeof W == "string" ? e.textContent !== W && (n[ui] !== !0 && Xc(e.textContent, W, f, h), B = [ao, W]) : typeof W == "number" && e.textContent !== "" + W && (n[ui] !== !0 && Xc(e.textContent, W, f, h), B = [ao, "" + W]);
        else if (on.hasOwnProperty(J))
          W != null && (typeof W != "function" && Kc(J, W), J === "onScroll" && gt("scroll", e));
        else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof b == "boolean") {
          var re = void 0, xe = b && Ft ? null : ea(J);
          if (n[ui] !== !0) {
            if (!(J === Jc || J === ui || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            J === "value" || J === "checked" || J === "selected")) {
              if (J === Fl) {
                var me = e.innerHTML, Ke = W ? W[Yc] : void 0;
                if (Ke != null) {
                  var ze = Tb(e, Ke);
                  ze !== me && zl(J, me, ze);
                }
              } else if (J === ro) {
                if (S.delete(J), jb) {
                  var $ = Cw(W);
                  re = e.getAttribute("style"), $ !== re && zl(J, re, $);
                }
              } else if (b && !Ft)
                S.delete(J.toLowerCase()), re = Kr(e, J, W), W !== re && zl(J, re, W);
              else if (!Ot(J, xe, b) && !ut(J, W, xe, b)) {
                var K = !1;
                if (xe !== null)
                  S.delete(xe.attributeName), re = yr(e, J, W, xe);
                else {
                  var H = r;
                  if (H === wr && (H = Zd(t)), H === wr)
                    S.delete(J.toLowerCase());
                  else {
                    var Z = cj(J);
                    Z !== null && Z !== J && (K = !0, S.delete(Z)), S.delete(J);
                  }
                  re = Kr(e, J, W);
                }
                var le = Ft;
                !le && W !== re && !K && zl(J, re, W);
              }
            }
          }
        }
      }
    switch (h && // $FlowFixMe - Should be inferred as not undefined.
    S.size > 0 && n[ui] !== !0 && Rb(S), t) {
      case "input":
        Sr(e), ee(e, n, !0);
        break;
      case "textarea":
        Sr(e), zg(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && qc(e);
        break;
    }
    return B;
  }
  function dj(e, t, n) {
    var r = e.nodeValue !== t;
    return r;
  }
  function mh(e, t) {
    {
      if (Hn)
        return;
      Hn = !0, u("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function vh(e, t) {
    {
      if (Hn)
        return;
      Hn = !0, u('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function gh(e, t, n) {
    {
      if (Hn)
        return;
      Hn = !0, u("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function yh(e, t) {
    {
      if (t === "" || Hn)
        return;
      Hn = !0, u('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function pj(e, t, n) {
    switch (t) {
      case "input":
        Ce(e, n);
        return;
      case "textarea":
        ow(e, n);
        return;
      case "select":
        iw(e, n);
        return;
    }
  }
  var $l = function() {
  }, Hl = function() {
  };
  {
    var hj = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], kb = [
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
    ], mj = kb.concat(["button"]), vj = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Ob = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Hl = function(e, t) {
      var n = $e({}, e || Ob), r = {
        tag: t
      };
      return kb.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), mj.indexOf(t) !== -1 && (n.pTagInButtonScope = null), hj.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), n;
    };
    var gj = function(e, t) {
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
          return vj.indexOf(t) === -1;
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
    }, yj = function(e, t) {
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
    }, Lb = {};
    $l = function(e, t, n) {
      n = n || Ob;
      var r = n.current, l = r && r.tag;
      t != null && (e != null && u("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var f = gj(e, l) ? null : r, h = f ? null : yj(e, n), b = f || h;
      if (b) {
        var S = b.tag, E = !!f + "|" + e + "|" + S;
        if (!Lb[E]) {
          Lb[E] = !0;
          var R = e, P = "";
          if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", P = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", f) {
            var _ = "";
            S === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), u("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, S, P, _);
          } else
            u("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, S);
        }
      }
    };
  }
  var Qc = "suppressHydrationWarning", Zc = "$", ef = "/$", Bl = "$?", Il = "$!", bj = "style", bh = null, xh = null;
  function xj(e) {
    var t, n, r = e.nodeType;
    switch (r) {
      case Cr:
      case tp: {
        t = r === Cr ? "#document" : "#fragment";
        var l = e.documentElement;
        n = l ? l.namespaceURI : ep(null, "");
        break;
      }
      default: {
        var f = r === At ? e.parentNode : e, h = f.namespaceURI || null;
        t = f.tagName, n = ep(h, t);
        break;
      }
    }
    {
      var b = t.toLowerCase(), S = Hl(null, b);
      return {
        namespace: n,
        ancestorInfo: S
      };
    }
  }
  function Sj(e, t, n) {
    {
      var r = e, l = ep(r.namespace, t), f = Hl(r.ancestorInfo, t);
      return {
        namespace: l,
        ancestorInfo: f
      };
    }
  }
  function f4(e) {
    return e;
  }
  function Nj(e) {
    bh = bC(), xh = PR();
    var t = null;
    return zy(!1), t;
  }
  function wj(e) {
    UR(xh), zy(bh), bh = null, xh = null;
  }
  function Ej(e, t, n, r, l) {
    var f;
    {
      var h = r;
      if ($l(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var b = "" + t.children, S = Hl(h.ancestorInfo, e);
        $l(null, b, S);
      }
      f = h.namespace;
    }
    var E = ij(e, t, n, f);
    return Wl(l, E), Th(E, t), E;
  }
  function Cj(e, t) {
    e.appendChild(t);
  }
  function Rj(e, t, n, r, l) {
    switch (sj(e, t, n, r), t) {
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
  function jj(e, t, n, r, l, f) {
    {
      var h = f;
      if (typeof r.children != typeof n.children && (typeof r.children == "string" || typeof r.children == "number")) {
        var b = "" + r.children, S = Hl(h.ancestorInfo, t);
        $l(null, b, S);
      }
    }
    return lj(e, t, n, r);
  }
  function Sh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function Tj(e, t, n, r) {
    {
      var l = n;
      $l(null, e, l.ancestorInfo);
    }
    var f = oj(e, t);
    return Wl(r, f), f;
  }
  function Dj() {
    var e = window.event;
    return e === void 0 ? Lr : $y(e.type);
  }
  var Nh = typeof setTimeout == "function" ? setTimeout : void 0, kj = typeof clearTimeout == "function" ? clearTimeout : void 0, wh = -1, Mb = typeof Promise == "function" ? Promise : void 0, Oj = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mb < "u" ? function(e) {
    return Mb.resolve(null).then(e).catch(Lj);
  } : Nh;
  function Lj(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Mj(e, t, n, r) {
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
  function Aj(e, t, n, r, l, f) {
    uj(e, t, n, r, l), Th(e, l);
  }
  function Ab(e) {
    bc(e, "");
  }
  function _j(e, t, n) {
    e.nodeValue = n;
  }
  function Pj(e, t) {
    e.appendChild(t);
  }
  function Uj(e, t) {
    var n;
    e.nodeType === At ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var r = e._reactRootContainer;
    r == null && n.onclick === null && qc(n);
  }
  function Vj(e, t, n) {
    e.insertBefore(t, n);
  }
  function Fj(e, t, n) {
    e.nodeType === At ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function zj(e, t) {
    e.removeChild(t);
  }
  function $j(e, t) {
    e.nodeType === At ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Eh(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === At) {
        var f = l.data;
        if (f === ef)
          if (r === 0) {
            e.removeChild(l), Rl(t);
            return;
          } else
            r--;
        else (f === Zc || f === Bl || f === Il) && r++;
      }
      n = l;
    } while (n);
    Rl(t);
  }
  function Hj(e, t) {
    e.nodeType === At ? Eh(e.parentNode, t) : e.nodeType === $n && Eh(e, t), Rl(e);
  }
  function Bj(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function Ij(e) {
    e.nodeValue = "";
  }
  function Jj(e, t) {
    e = e;
    var n = t[bj], r = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = np("display", r);
  }
  function Yj(e, t) {
    e.nodeValue = t;
  }
  function Wj(e) {
    e.nodeType === $n ? e.textContent = "" : e.nodeType === Cr && e.documentElement && e.removeChild(e.documentElement);
  }
  function Kj(e, t, n) {
    return e.nodeType !== $n || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function Gj(e, t) {
    return t === "" || e.nodeType !== Er ? null : e;
  }
  function Xj(e) {
    return e.nodeType !== At ? null : e;
  }
  function _b(e) {
    return e.data === Bl;
  }
  function Ch(e) {
    return e.data === Il;
  }
  function qj(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, r, l;
    return t && (n = t.dgst, r = t.msg, l = t.stck), {
      message: r,
      digest: n,
      stack: l
    };
  }
  function Qj(e, t) {
    e._reactRetry = t;
  }
  function tf(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === $n || t === Er)
        break;
      if (t === At) {
        var n = e.data;
        if (n === Zc || n === Il || n === Bl)
          break;
        if (n === ef)
          return null;
      }
    }
    return e;
  }
  function Jl(e) {
    return tf(e.nextSibling);
  }
  function Zj(e) {
    return tf(e.firstChild);
  }
  function eT(e) {
    return tf(e.firstChild);
  }
  function tT(e) {
    return tf(e.nextSibling);
  }
  function nT(e, t, n, r, l, f, h) {
    Wl(f, e), Th(e, n);
    var b;
    {
      var S = l;
      b = S.namespace;
    }
    var E = (f.mode & Ye) !== Se;
    return fj(e, t, n, b, r, E, h);
  }
  function aT(e, t, n, r) {
    return Wl(n, e), n.mode & Ye, dj(e, t);
  }
  function rT(e, t) {
    Wl(t, e);
  }
  function iT(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === At) {
        var r = t.data;
        if (r === ef) {
          if (n === 0)
            return Jl(t);
          n--;
        } else (r === Zc || r === Il || r === Bl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Pb(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === At) {
        var r = t.data;
        if (r === Zc || r === Il || r === Bl) {
          if (n === 0)
            return t;
          n--;
        } else r === ef && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function oT(e) {
    Rl(e);
  }
  function sT(e) {
    Rl(e);
  }
  function lT(e) {
    return e !== "head" && e !== "body";
  }
  function uT(e, t, n, r) {
    var l = !0;
    Xc(t.nodeValue, n, r, l);
  }
  function cT(e, t, n, r, l, f) {
    if (t[Qc] !== !0) {
      var h = !0;
      Xc(r.nodeValue, l, f, h);
    }
  }
  function fT(e, t) {
    t.nodeType === $n ? mh(e, t) : t.nodeType === At || vh(e, t);
  }
  function dT(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === $n ? mh(n, t) : t.nodeType === At || vh(n, t));
    }
  }
  function pT(e, t, n, r, l) {
    (l || t[Qc] !== !0) && (r.nodeType === $n ? mh(n, r) : r.nodeType === At || vh(n, r));
  }
  function hT(e, t, n) {
    gh(e, t);
  }
  function mT(e, t) {
    yh(e, t);
  }
  function vT(e, t, n) {
    {
      var r = e.parentNode;
      r !== null && gh(r, t);
    }
  }
  function gT(e, t) {
    {
      var n = e.parentNode;
      n !== null && yh(n, t);
    }
  }
  function yT(e, t, n, r, l, f) {
    (f || t[Qc] !== !0) && gh(n, r);
  }
  function bT(e, t, n, r, l) {
    (l || t[Qc] !== !0) && yh(n, r);
  }
  function xT(e) {
    u("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function ST(e) {
    Ul(e);
  }
  var ns = Math.random().toString(36).slice(2), as = "__reactFiber$" + ns, Rh = "__reactProps$" + ns, Yl = "__reactContainer$" + ns, jh = "__reactEvents$" + ns, NT = "__reactListeners$" + ns, wT = "__reactHandles$" + ns;
  function ET(e) {
    delete e[as], delete e[Rh], delete e[jh], delete e[NT], delete e[wT];
  }
  function Wl(e, t) {
    t[as] = e;
  }
  function nf(e, t) {
    t[Yl] = e;
  }
  function Ub(e) {
    e[Yl] = null;
  }
  function Kl(e) {
    return !!e[Yl];
  }
  function io(e) {
    var t = e[as];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Yl] || n[as], t) {
        var r = t.alternate;
        if (t.child !== null || r !== null && r.child !== null)
          for (var l = Pb(e); l !== null; ) {
            var f = l[as];
            if (f)
              return f;
            l = Pb(l);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ci(e) {
    var t = e[as] || e[Yl];
    return t && (t.tag === C || t.tag === j || t.tag === F || t.tag === y) ? t : null;
  }
  function rs(e) {
    if (e.tag === C || e.tag === j)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function af(e) {
    return e[Rh] || null;
  }
  function Th(e, t) {
    e[Rh] = t;
  }
  function CT(e) {
    var t = e[jh];
    return t === void 0 && (t = e[jh] = /* @__PURE__ */ new Set()), t;
  }
  var Vb = {}, Fb = o.ReactDebugCurrentFrame;
  function rf(e) {
    if (e) {
      var t = e._owner, n = Qr(e.type, e._source, t ? t.type : null);
      Fb.setExtraStackFrame(n);
    } else
      Fb.setExtraStackFrame(null);
  }
  function Ua(e, t, n, r, l) {
    {
      var f = Function.call.bind(yn);
      for (var h in e)
        if (f(e, h)) {
          var b = void 0;
          try {
            if (typeof e[h] != "function") {
              var S = Error((r || "React class") + ": " + n + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw S.name = "Invariant Violation", S;
            }
            b = e[h](t, h, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (E) {
            b = E;
          }
          b && !(b instanceof Error) && (rf(l), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, h, typeof b), rf(null)), b instanceof Error && !(b.message in Vb) && (Vb[b.message] = !0, rf(l), u("Failed %s type: %s", n, b.message), rf(null));
        }
    }
  }
  var Dh = [], of;
  of = [];
  var Mr = -1;
  function fi(e) {
    return {
      current: e
    };
  }
  function wn(e, t) {
    if (Mr < 0) {
      u("Unexpected pop.");
      return;
    }
    t !== of[Mr] && u("Unexpected Fiber popped."), e.current = Dh[Mr], Dh[Mr] = null, of[Mr] = null, Mr--;
  }
  function En(e, t, n) {
    Mr++, Dh[Mr] = e.current, of[Mr] = n, e.current = t;
  }
  var kh;
  kh = {};
  var sa = {};
  Object.freeze(sa);
  var Ar = fi(sa), nr = fi(!1), Oh = sa;
  function is(e, t, n) {
    return n && ar(t) ? Oh : Ar.current;
  }
  function zb(e, t, n) {
    {
      var r = e.stateNode;
      r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function os(e, t) {
    {
      var n = e.type, r = n.contextTypes;
      if (!r)
        return sa;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
      var f = {};
      for (var h in r)
        f[h] = t[h];
      {
        var b = Le(e) || "Unknown";
        Ua(r, f, "context", b);
      }
      return l && zb(e, t, f), f;
    }
  }
  function sf() {
    return nr.current;
  }
  function ar(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function lf(e) {
    wn(nr, e), wn(Ar, e);
  }
  function Lh(e) {
    wn(nr, e), wn(Ar, e);
  }
  function $b(e, t, n) {
    {
      if (Ar.current !== sa)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      En(Ar, t, e), En(nr, n, e);
    }
  }
  function Hb(e, t, n) {
    {
      var r = e.stateNode, l = t.childContextTypes;
      if (typeof r.getChildContext != "function") {
        {
          var f = Le(e) || "Unknown";
          kh[f] || (kh[f] = !0, u("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
        }
        return n;
      }
      var h = r.getChildContext();
      for (var b in h)
        if (!(b in l))
          throw new Error((Le(e) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
      {
        var S = Le(e) || "Unknown";
        Ua(l, h, "child context", S);
      }
      return $e({}, n, h);
    }
  }
  function uf(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || sa;
      return Oh = Ar.current, En(Ar, n, e), En(nr, nr.current, e), !0;
    }
  }
  function Bb(e, t, n) {
    {
      var r = e.stateNode;
      if (!r)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var l = Hb(e, t, Oh);
        r.__reactInternalMemoizedMergedChildContext = l, wn(nr, e), wn(Ar, e), En(Ar, l, e), En(nr, n, e);
      } else
        wn(nr, e), En(nr, n, e);
    }
  }
  function RT(e) {
    {
      if (!lE(e) || e.tag !== p)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case y:
            return t.stateNode.context;
          case p: {
            var n = t.type;
            if (ar(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var di = 0, cf = 1, _r = null, Mh = !1, Ah = !1;
  function Ib(e) {
    _r === null ? _r = [e] : _r.push(e);
  }
  function jT(e) {
    Mh = !0, Ib(e);
  }
  function Jb() {
    Mh && pi();
  }
  function pi() {
    if (!Ah && _r !== null) {
      Ah = !0;
      var e = 0, t = Pa();
      try {
        var n = !0, r = _r;
        for (an(ra); e < r.length; e++) {
          var l = r[e];
          do
            l = l(n);
          while (l !== null);
        }
        _r = null, Mh = !1;
      } catch (f) {
        throw _r !== null && (_r = _r.slice(e + 1)), my(Cc, pi), f;
      } finally {
        an(t), Ah = !1;
      }
    }
    return null;
  }
  var ss = [], ls = 0, ff = null, df = 0, ba = [], xa = 0, oo = null, Pr = 1, Ur = "";
  function TT(e) {
    return lo(), (e.flags & sy) !== Ee;
  }
  function DT(e) {
    return lo(), df;
  }
  function kT() {
    var e = Ur, t = Pr, n = t & ~OT(t);
    return n.toString(32) + e;
  }
  function so(e, t) {
    lo(), ss[ls++] = df, ss[ls++] = ff, ff = e, df = t;
  }
  function Yb(e, t, n) {
    lo(), ba[xa++] = Pr, ba[xa++] = Ur, ba[xa++] = oo, oo = e;
    var r = Pr, l = Ur, f = pf(r) - 1, h = r & ~(1 << f), b = n + 1, S = pf(t) + f;
    if (S > 30) {
      var E = f - f % 5, R = (1 << E) - 1, P = (h & R).toString(32), _ = h >> E, B = f - E, J = pf(t) + B, W = b << B, re = W | _, xe = P + l;
      Pr = 1 << J | re, Ur = xe;
    } else {
      var me = b << f, Ke = me | h, ze = l;
      Pr = 1 << S | Ke, Ur = ze;
    }
  }
  function _h(e) {
    lo();
    var t = e.return;
    if (t !== null) {
      var n = 1, r = 0;
      so(e, n), Yb(e, n, r);
    }
  }
  function pf(e) {
    return 32 - Sy(e);
  }
  function OT(e) {
    return 1 << pf(e) - 1;
  }
  function Ph(e) {
    for (; e === ff; )
      ff = ss[--ls], ss[ls] = null, df = ss[--ls], ss[ls] = null;
    for (; e === oo; )
      oo = ba[--xa], ba[xa] = null, Ur = ba[--xa], ba[xa] = null, Pr = ba[--xa], ba[xa] = null;
  }
  function LT() {
    return lo(), oo !== null ? {
      id: Pr,
      overflow: Ur
    } : null;
  }
  function MT(e, t) {
    lo(), ba[xa++] = Pr, ba[xa++] = Ur, ba[xa++] = oo, Pr = t.id, Ur = t.overflow, oo = e;
  }
  function lo() {
    ln() || u("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var sn = null, Sa = null, Va = !1, uo = !1, hi = null;
  function AT() {
    Va && u("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function Wb() {
    uo = !0;
  }
  function _T() {
    return uo;
  }
  function PT(e) {
    var t = e.stateNode.containerInfo;
    return Sa = eT(t), sn = e, Va = !0, hi = null, uo = !1, !0;
  }
  function UT(e, t, n) {
    return Sa = tT(t), sn = e, Va = !0, hi = null, uo = !1, n !== null && MT(e, n), !0;
  }
  function Kb(e, t) {
    switch (e.tag) {
      case y: {
        fT(e.stateNode.containerInfo, t);
        break;
      }
      case C: {
        var n = (e.mode & Ye) !== Se;
        pT(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case F: {
        var r = e.memoizedState;
        r.dehydrated !== null && dT(r.dehydrated, t);
        break;
      }
    }
  }
  function Gb(e, t) {
    Kb(e, t);
    var n = $O();
    n.stateNode = t, n.return = e;
    var r = e.deletions;
    r === null ? (e.deletions = [n], e.flags |= Wi) : r.push(n);
  }
  function Uh(e, t) {
    {
      if (uo)
        return;
      switch (e.tag) {
        case y: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case C:
              var r = t.type;
              t.pendingProps, hT(n, r);
              break;
            case j:
              var l = t.pendingProps;
              mT(n, l);
              break;
          }
          break;
        }
        case C: {
          var f = e.type, h = e.memoizedProps, b = e.stateNode;
          switch (t.tag) {
            case C: {
              var S = t.type, E = t.pendingProps, R = (e.mode & Ye) !== Se;
              yT(
                f,
                h,
                b,
                S,
                E,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
            case j: {
              var P = t.pendingProps, _ = (e.mode & Ye) !== Se;
              bT(
                f,
                h,
                b,
                P,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
          break;
        }
        case F: {
          var B = e.memoizedState, J = B.dehydrated;
          if (J !== null) switch (t.tag) {
            case C:
              var W = t.type;
              t.pendingProps, vT(J, W);
              break;
            case j:
              var re = t.pendingProps;
              gT(J, re);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function Xb(e, t) {
    t.flags = t.flags & ~jr | _t, Uh(e, t);
  }
  function qb(e, t) {
    switch (e.tag) {
      case C: {
        var n = e.type;
        e.pendingProps;
        var r = Kj(t, n);
        return r !== null ? (e.stateNode = r, sn = e, Sa = Zj(r), !0) : !1;
      }
      case j: {
        var l = e.pendingProps, f = Gj(t, l);
        return f !== null ? (e.stateNode = f, sn = e, Sa = null, !0) : !1;
      }
      case F: {
        var h = Xj(t);
        if (h !== null) {
          var b = {
            dehydrated: h,
            treeContext: LT(),
            retryLane: na
          };
          e.memoizedState = b;
          var S = HO(h);
          return S.return = e, e.child = S, sn = e, Sa = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Vh(e) {
    return (e.mode & Ye) !== Se && (e.flags & tt) === Ee;
  }
  function Fh(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function zh(e) {
    if (Va) {
      var t = Sa;
      if (!t) {
        Vh(e) && (Uh(sn, e), Fh()), Xb(sn, e), Va = !1, sn = e;
        return;
      }
      var n = t;
      if (!qb(e, t)) {
        Vh(e) && (Uh(sn, e), Fh()), t = Jl(n);
        var r = sn;
        if (!t || !qb(e, t)) {
          Xb(sn, e), Va = !1, sn = e;
          return;
        }
        Gb(r, n);
      }
    }
  }
  function VT(e, t, n) {
    var r = e.stateNode, l = !uo, f = nT(r, e.type, e.memoizedProps, t, n, e, l);
    return e.updateQueue = f, f !== null;
  }
  function FT(e) {
    var t = e.stateNode, n = e.memoizedProps, r = aT(t, n, e);
    if (r) {
      var l = sn;
      if (l !== null)
        switch (l.tag) {
          case y: {
            var f = l.stateNode.containerInfo, h = (l.mode & Ye) !== Se;
            uT(
              f,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              h
            );
            break;
          }
          case C: {
            var b = l.type, S = l.memoizedProps, E = l.stateNode, R = (l.mode & Ye) !== Se;
            cT(
              b,
              S,
              E,
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
  function zT(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    rT(n, e);
  }
  function $T(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return iT(n);
  }
  function Qb(e) {
    for (var t = e.return; t !== null && t.tag !== C && t.tag !== y && t.tag !== F; )
      t = t.return;
    sn = t;
  }
  function hf(e) {
    if (e !== sn)
      return !1;
    if (!Va)
      return Qb(e), Va = !0, !1;
    if (e.tag !== y && (e.tag !== C || lT(e.type) && !Sh(e.type, e.memoizedProps))) {
      var t = Sa;
      if (t)
        if (Vh(e))
          Zb(e), Fh();
        else
          for (; t; )
            Gb(e, t), t = Jl(t);
    }
    return Qb(e), e.tag === F ? Sa = $T(e) : Sa = sn ? Jl(e.stateNode) : null, !0;
  }
  function HT() {
    return Va && Sa !== null;
  }
  function Zb(e) {
    for (var t = Sa; t; )
      Kb(e, t), t = Jl(t);
  }
  function us() {
    sn = null, Sa = null, Va = !1, uo = !1;
  }
  function ex() {
    hi !== null && (W0(hi), hi = null);
  }
  function ln() {
    return Va;
  }
  function $h(e) {
    hi === null ? hi = [e] : hi.push(e);
  }
  var BT = o.ReactCurrentBatchConfig, IT = null;
  function JT() {
    return BT.transition;
  }
  var Fa = {
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
    var YT = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Tt && (t = n), n = n.return;
      return t;
    }, co = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Gl = [], Xl = [], ql = [], Ql = [], Zl = [], eu = [], fo = /* @__PURE__ */ new Set();
    Fa.recordUnsafeLifecycleWarnings = function(e, t) {
      fo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && Gl.push(e), e.mode & Tt && typeof t.UNSAFE_componentWillMount == "function" && Xl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ql.push(e), e.mode & Tt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ql.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Zl.push(e), e.mode & Tt && typeof t.UNSAFE_componentWillUpdate == "function" && eu.push(e));
    }, Fa.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Gl.length > 0 && (Gl.forEach(function(_) {
        e.add(Le(_) || "Component"), fo.add(_.type);
      }), Gl = []);
      var t = /* @__PURE__ */ new Set();
      Xl.length > 0 && (Xl.forEach(function(_) {
        t.add(Le(_) || "Component"), fo.add(_.type);
      }), Xl = []);
      var n = /* @__PURE__ */ new Set();
      ql.length > 0 && (ql.forEach(function(_) {
        n.add(Le(_) || "Component"), fo.add(_.type);
      }), ql = []);
      var r = /* @__PURE__ */ new Set();
      Ql.length > 0 && (Ql.forEach(function(_) {
        r.add(Le(_) || "Component"), fo.add(_.type);
      }), Ql = []);
      var l = /* @__PURE__ */ new Set();
      Zl.length > 0 && (Zl.forEach(function(_) {
        l.add(Le(_) || "Component"), fo.add(_.type);
      }), Zl = []);
      var f = /* @__PURE__ */ new Set();
      if (eu.length > 0 && (eu.forEach(function(_) {
        f.add(Le(_) || "Component"), fo.add(_.type);
      }), eu = []), t.size > 0) {
        var h = co(t);
        u(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
      }
      if (r.size > 0) {
        var b = co(r);
        u(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, b);
      }
      if (f.size > 0) {
        var S = co(f);
        u(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
      }
      if (e.size > 0) {
        var E = co(e);
        c(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
      }
      if (n.size > 0) {
        var R = co(n);
        c(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
      }
      if (l.size > 0) {
        var P = co(l);
        c(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
      }
    };
    var mf = /* @__PURE__ */ new Map(), tx = /* @__PURE__ */ new Set();
    Fa.recordLegacyContextWarning = function(e, t) {
      var n = YT(e);
      if (n === null) {
        u("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!tx.has(e.type)) {
        var r = mf.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], mf.set(n, r)), r.push(e));
      }
    }, Fa.flushLegacyContextWarning = function() {
      mf.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], r = /* @__PURE__ */ new Set();
          e.forEach(function(f) {
            r.add(Le(f) || "Component"), tx.add(f.type);
          });
          var l = co(r);
          try {
            Et(n), u(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
          } finally {
            Zt();
          }
        }
      });
    }, Fa.discardPendingWarnings = function() {
      Gl = [], Xl = [], ql = [], Ql = [], Zl = [], eu = [], mf = /* @__PURE__ */ new Map();
    };
  }
  var Hh, Bh, Ih, Jh, Yh, nx = function(e, t) {
  };
  Hh = !1, Bh = !1, Ih = {}, Jh = {}, Yh = {}, nx = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = Le(t) || "Component";
      Jh[n] || (Jh[n] = !0, u('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function WT(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function tu(e, t, n) {
    var r = n.ref;
    if (r !== null && typeof r != "function" && typeof r != "object") {
      if ((e.mode & Tt || Tn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== p) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !WT(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var l = Le(e) || "Component";
        Ih[l] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, r), Ih[l] = !0);
      }
      if (n._owner) {
        var f = n._owner, h;
        if (f) {
          var b = f;
          if (b.tag !== p)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          h = b.stateNode;
        }
        if (!h)
          throw new Error("Missing owner for string ref " + r + ". This error is likely caused by a bug in React. Please file an issue.");
        var S = h;
        Vn(r, "ref");
        var E = "" + r;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
          return t.ref;
        var R = function(P) {
          var _ = S.refs;
          P === null ? delete _[E] : _[E] = P;
        };
        return R._stringRef = E, R;
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
  function vf(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function gf(e) {
    {
      var t = Le(e) || "Component";
      if (Yh[t])
        return;
      Yh[t] = !0, u("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function ax(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function rx(e) {
    function t($, K) {
      if (e) {
        var H = $.deletions;
        H === null ? ($.deletions = [K], $.flags |= Wi) : H.push(K);
      }
    }
    function n($, K) {
      if (!e)
        return null;
      for (var H = K; H !== null; )
        t($, H), H = H.sibling;
      return null;
    }
    function r($, K) {
      for (var H = /* @__PURE__ */ new Map(), Z = K; Z !== null; )
        Z.key !== null ? H.set(Z.key, Z) : H.set(Z.index, Z), Z = Z.sibling;
      return H;
    }
    function l($, K) {
      var H = So($, K);
      return H.index = 0, H.sibling = null, H;
    }
    function f($, K, H) {
      if ($.index = H, !e)
        return $.flags |= sy, K;
      var Z = $.alternate;
      if (Z !== null) {
        var le = Z.index;
        return le < K ? ($.flags |= _t, K) : le;
      } else
        return $.flags |= _t, K;
    }
    function h($) {
      return e && $.alternate === null && ($.flags |= _t), $;
    }
    function b($, K, H, Z) {
      if (K === null || K.tag !== j) {
        var le = $v(H, $.mode, Z);
        return le.return = $, le;
      } else {
        var ie = l(K, H);
        return ie.return = $, ie;
      }
    }
    function S($, K, H, Z) {
      var le = H.type;
      if (le === O)
        return R($, K, H.props.children, Z, H.key);
      if (K !== null && (K.elementType === le || // Keep this check inline so it only runs on the false path:
      uS(K, H) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof le == "object" && le !== null && le.$$typeof === Fe && ax(le) === K.type)) {
        var ie = l(K, H.props);
        return ie.ref = tu($, K, H), ie.return = $, ie._debugSource = H._source, ie._debugOwner = H._owner, ie;
      }
      var Re = zv(H, $.mode, Z);
      return Re.ref = tu($, K, H), Re.return = $, Re;
    }
    function E($, K, H, Z) {
      if (K === null || K.tag !== x || K.stateNode.containerInfo !== H.containerInfo || K.stateNode.implementation !== H.implementation) {
        var le = Hv(H, $.mode, Z);
        return le.return = $, le;
      } else {
        var ie = l(K, H.children || []);
        return ie.return = $, ie;
      }
    }
    function R($, K, H, Z, le) {
      if (K === null || K.tag !== U) {
        var ie = Ci(H, $.mode, Z, le);
        return ie.return = $, ie;
      } else {
        var Re = l(K, H);
        return Re.return = $, Re;
      }
    }
    function P($, K, H) {
      if (typeof K == "string" && K !== "" || typeof K == "number") {
        var Z = $v("" + K, $.mode, H);
        return Z.return = $, Z;
      }
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case qa: {
            var le = zv(K, $.mode, H);
            return le.ref = tu($, null, K), le.return = $, le;
          }
          case Oa: {
            var ie = Hv(K, $.mode, H);
            return ie.return = $, ie;
          }
          case Fe: {
            var Re = K._payload, Oe = K._init;
            return P($, Oe(Re), H);
          }
        }
        if (et(K) || xr(K)) {
          var lt = Ci(K, $.mode, H, null);
          return lt.return = $, lt;
        }
        vf($, K);
      }
      return typeof K == "function" && gf($), null;
    }
    function _($, K, H, Z) {
      var le = K !== null ? K.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return le !== null ? null : b($, K, "" + H, Z);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case qa:
            return H.key === le ? S($, K, H, Z) : null;
          case Oa:
            return H.key === le ? E($, K, H, Z) : null;
          case Fe: {
            var ie = H._payload, Re = H._init;
            return _($, K, Re(ie), Z);
          }
        }
        if (et(H) || xr(H))
          return le !== null ? null : R($, K, H, Z, null);
        vf($, H);
      }
      return typeof H == "function" && gf($), null;
    }
    function B($, K, H, Z, le) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
        var ie = $.get(H) || null;
        return b(K, ie, "" + Z, le);
      }
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case qa: {
            var Re = $.get(Z.key === null ? H : Z.key) || null;
            return S(K, Re, Z, le);
          }
          case Oa: {
            var Oe = $.get(Z.key === null ? H : Z.key) || null;
            return E(K, Oe, Z, le);
          }
          case Fe:
            var lt = Z._payload, Qe = Z._init;
            return B($, K, H, Qe(lt), le);
        }
        if (et(Z) || xr(Z)) {
          var Lt = $.get(H) || null;
          return R(K, Lt, Z, le, null);
        }
        vf(K, Z);
      }
      return typeof Z == "function" && gf(K), null;
    }
    function J($, K, H) {
      {
        if (typeof $ != "object" || $ === null)
          return K;
        switch ($.$$typeof) {
          case qa:
          case Oa:
            nx($, H);
            var Z = $.key;
            if (typeof Z != "string")
              break;
            if (K === null) {
              K = /* @__PURE__ */ new Set(), K.add(Z);
              break;
            }
            if (!K.has(Z)) {
              K.add(Z);
              break;
            }
            u("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
            break;
          case Fe:
            var le = $._payload, ie = $._init;
            J(ie(le), K, H);
            break;
        }
      }
      return K;
    }
    function W($, K, H, Z) {
      for (var le = null, ie = 0; ie < H.length; ie++) {
        var Re = H[ie];
        le = J(Re, le, $);
      }
      for (var Oe = null, lt = null, Qe = K, Lt = 0, Ze = 0, Dt = null; Qe !== null && Ze < H.length; Ze++) {
        Qe.index > Ze ? (Dt = Qe, Qe = null) : Dt = Qe.sibling;
        var Rn = _($, Qe, H[Ze], Z);
        if (Rn === null) {
          Qe === null && (Qe = Dt);
          break;
        }
        e && Qe && Rn.alternate === null && t($, Qe), Lt = f(Rn, Lt, Ze), lt === null ? Oe = Rn : lt.sibling = Rn, lt = Rn, Qe = Dt;
      }
      if (Ze === H.length) {
        if (n($, Qe), ln()) {
          var mn = Ze;
          so($, mn);
        }
        return Oe;
      }
      if (Qe === null) {
        for (; Ze < H.length; Ze++) {
          var ua = P($, H[Ze], Z);
          ua !== null && (Lt = f(ua, Lt, Ze), lt === null ? Oe = ua : lt.sibling = ua, lt = ua);
        }
        if (ln()) {
          var _n = Ze;
          so($, _n);
        }
        return Oe;
      }
      for (var Pn = r($, Qe); Ze < H.length; Ze++) {
        var jn = B(Pn, $, Ze, H[Ze], Z);
        jn !== null && (e && jn.alternate !== null && Pn.delete(jn.key === null ? Ze : jn.key), Lt = f(jn, Lt, Ze), lt === null ? Oe = jn : lt.sibling = jn, lt = jn);
      }
      if (e && Pn.forEach(function(Ts) {
        return t($, Ts);
      }), ln()) {
        var Ir = Ze;
        so($, Ir);
      }
      return Oe;
    }
    function re($, K, H, Z) {
      var le = xr(H);
      if (typeof le != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        H[Symbol.toStringTag] === "Generator" && (Bh || u("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bh = !0), H.entries === le && (Hh || u("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hh = !0);
        var ie = le.call(H);
        if (ie)
          for (var Re = null, Oe = ie.next(); !Oe.done; Oe = ie.next()) {
            var lt = Oe.value;
            Re = J(lt, Re, $);
          }
      }
      var Qe = le.call(H);
      if (Qe == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Lt = null, Ze = null, Dt = K, Rn = 0, mn = 0, ua = null, _n = Qe.next(); Dt !== null && !_n.done; mn++, _n = Qe.next()) {
        Dt.index > mn ? (ua = Dt, Dt = null) : ua = Dt.sibling;
        var Pn = _($, Dt, _n.value, Z);
        if (Pn === null) {
          Dt === null && (Dt = ua);
          break;
        }
        e && Dt && Pn.alternate === null && t($, Dt), Rn = f(Pn, Rn, mn), Ze === null ? Lt = Pn : Ze.sibling = Pn, Ze = Pn, Dt = ua;
      }
      if (_n.done) {
        if (n($, Dt), ln()) {
          var jn = mn;
          so($, jn);
        }
        return Lt;
      }
      if (Dt === null) {
        for (; !_n.done; mn++, _n = Qe.next()) {
          var Ir = P($, _n.value, Z);
          Ir !== null && (Rn = f(Ir, Rn, mn), Ze === null ? Lt = Ir : Ze.sibling = Ir, Ze = Ir);
        }
        if (ln()) {
          var Ts = mn;
          so($, Ts);
        }
        return Lt;
      }
      for (var Mu = r($, Dt); !_n.done; mn++, _n = Qe.next()) {
        var fr = B(Mu, $, mn, _n.value, Z);
        fr !== null && (e && fr.alternate !== null && Mu.delete(fr.key === null ? mn : fr.key), Rn = f(fr, Rn, mn), Ze === null ? Lt = fr : Ze.sibling = fr, Ze = fr);
      }
      if (e && Mu.forEach(function(b3) {
        return t($, b3);
      }), ln()) {
        var y3 = mn;
        so($, y3);
      }
      return Lt;
    }
    function xe($, K, H, Z) {
      if (K !== null && K.tag === j) {
        n($, K.sibling);
        var le = l(K, H);
        return le.return = $, le;
      }
      n($, K);
      var ie = $v(H, $.mode, Z);
      return ie.return = $, ie;
    }
    function me($, K, H, Z) {
      for (var le = H.key, ie = K; ie !== null; ) {
        if (ie.key === le) {
          var Re = H.type;
          if (Re === O) {
            if (ie.tag === U) {
              n($, ie.sibling);
              var Oe = l(ie, H.props.children);
              return Oe.return = $, Oe._debugSource = H._source, Oe._debugOwner = H._owner, Oe;
            }
          } else if (ie.elementType === Re || // Keep this check inline so it only runs on the false path:
          uS(ie, H) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Re == "object" && Re !== null && Re.$$typeof === Fe && ax(Re) === ie.type) {
            n($, ie.sibling);
            var lt = l(ie, H.props);
            return lt.ref = tu($, ie, H), lt.return = $, lt._debugSource = H._source, lt._debugOwner = H._owner, lt;
          }
          n($, ie);
          break;
        } else
          t($, ie);
        ie = ie.sibling;
      }
      if (H.type === O) {
        var Qe = Ci(H.props.children, $.mode, Z, H.key);
        return Qe.return = $, Qe;
      } else {
        var Lt = zv(H, $.mode, Z);
        return Lt.ref = tu($, K, H), Lt.return = $, Lt;
      }
    }
    function Ke($, K, H, Z) {
      for (var le = H.key, ie = K; ie !== null; ) {
        if (ie.key === le)
          if (ie.tag === x && ie.stateNode.containerInfo === H.containerInfo && ie.stateNode.implementation === H.implementation) {
            n($, ie.sibling);
            var Re = l(ie, H.children || []);
            return Re.return = $, Re;
          } else {
            n($, ie);
            break;
          }
        else
          t($, ie);
        ie = ie.sibling;
      }
      var Oe = Hv(H, $.mode, Z);
      return Oe.return = $, Oe;
    }
    function ze($, K, H, Z) {
      var le = typeof H == "object" && H !== null && H.type === O && H.key === null;
      if (le && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case qa:
            return h(me($, K, H, Z));
          case Oa:
            return h(Ke($, K, H, Z));
          case Fe:
            var ie = H._payload, Re = H._init;
            return ze($, K, Re(ie), Z);
        }
        if (et(H))
          return W($, K, H, Z);
        if (xr(H))
          return re($, K, H, Z);
        vf($, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? h(xe($, K, "" + H, Z)) : (typeof H == "function" && gf($), n($, K));
    }
    return ze;
  }
  var cs = rx(!0), ix = rx(!1);
  function KT(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, r = So(n, n.pendingProps);
      for (t.child = r, r.return = t; n.sibling !== null; )
        n = n.sibling, r = r.sibling = So(n, n.pendingProps), r.return = t;
      r.sibling = null;
    }
  }
  function GT(e, t) {
    for (var n = e.child; n !== null; )
      PO(n, t), n = n.sibling;
  }
  var Wh = fi(null), Kh;
  Kh = {};
  var yf = null, fs = null, Gh = null, bf = !1;
  function xf() {
    yf = null, fs = null, Gh = null, bf = !1;
  }
  function ox() {
    bf = !0;
  }
  function sx() {
    bf = !1;
  }
  function lx(e, t, n) {
    En(Wh, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Kh && u("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Kh;
  }
  function Xh(e, t) {
    var n = Wh.current;
    wn(Wh, t), e._currentValue = n;
  }
  function qh(e, t, n) {
    for (var r = e; r !== null; ) {
      var l = r.alternate;
      if (Go(r.childLanes, t) ? l !== null && !Go(l.childLanes, t) && (l.childLanes = Ae(l.childLanes, t)) : (r.childLanes = Ae(r.childLanes, t), l !== null && (l.childLanes = Ae(l.childLanes, t))), r === n)
        break;
      r = r.return;
    }
    r !== n && u("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function XT(e, t, n) {
    qT(e, t, n);
  }
  function qT(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var l = void 0, f = r.dependencies;
      if (f !== null) {
        l = r.child;
        for (var h = f.firstContext; h !== null; ) {
          if (h.context === t) {
            if (r.tag === p) {
              var b = bl(n), S = Vr(pt, b);
              S.tag = Nf;
              var E = r.updateQueue;
              if (E !== null) {
                var R = E.shared, P = R.pending;
                P === null ? S.next = S : (S.next = P.next, P.next = S), R.pending = S;
              }
            }
            r.lanes = Ae(r.lanes, n);
            var _ = r.alternate;
            _ !== null && (_.lanes = Ae(_.lanes, n)), qh(r.return, n, e), f.lanes = Ae(f.lanes, n);
            break;
          }
          h = h.next;
        }
      } else if (r.tag === M)
        l = r.type === e.type ? null : r.child;
      else if (r.tag === fe) {
        var B = r.return;
        if (B === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        B.lanes = Ae(B.lanes, n);
        var J = B.alternate;
        J !== null && (J.lanes = Ae(J.lanes, n)), qh(B, n, e), l = r.sibling;
      } else
        l = r.child;
      if (l !== null)
        l.return = r;
      else
        for (l = r; l !== null; ) {
          if (l === e) {
            l = null;
            break;
          }
          var W = l.sibling;
          if (W !== null) {
            W.return = l.return, l = W;
            break;
          }
          l = l.return;
        }
      r = l;
    }
  }
  function ds(e, t) {
    yf = e, fs = null, Gh = null;
    var n = e.dependencies;
    if (n !== null) {
      var r = n.firstContext;
      r !== null && (aa(n.lanes, t) && vu(), n.firstContext = null);
    }
  }
  function Pt(e) {
    bf && u("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Gh !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (fs === null) {
        if (yf === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        fs = n, yf.dependencies = {
          lanes: q,
          firstContext: n
        };
      } else
        fs = fs.next = n;
    }
    return t;
  }
  var po = null;
  function Qh(e) {
    po === null ? po = [e] : po.push(e);
  }
  function QT() {
    if (po !== null) {
      for (var e = 0; e < po.length; e++) {
        var t = po[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var r = n.next, l = t.pending;
          if (l !== null) {
            var f = l.next;
            l.next = r, n.next = f;
          }
          t.pending = n;
        }
      }
      po = null;
    }
  }
  function ux(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Qh(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Sf(e, r);
  }
  function ZT(e, t, n, r) {
    var l = t.interleaved;
    l === null ? (n.next = n, Qh(t)) : (n.next = l.next, l.next = n), t.interleaved = n;
  }
  function eD(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Qh(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Sf(e, r);
  }
  function Bn(e, t) {
    return Sf(e, t);
  }
  var tD = Sf;
  function Sf(e, t) {
    e.lanes = Ae(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Ae(n.lanes, t)), n === null && (e.flags & (_t | jr)) !== Ee && iS(e);
    for (var r = e, l = e.return; l !== null; )
      l.childLanes = Ae(l.childLanes, t), n = l.alternate, n !== null ? n.childLanes = Ae(n.childLanes, t) : (l.flags & (_t | jr)) !== Ee && iS(e), r = l, l = l.return;
    if (r.tag === y) {
      var f = r.stateNode;
      return f;
    } else
      return null;
  }
  var cx = 0, fx = 1, Nf = 2, Zh = 3, wf = !1, em, Ef;
  em = !1, Ef = null;
  function tm(e) {
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
  function dx(e, t) {
    var n = t.updateQueue, r = e.updateQueue;
    if (n === r) {
      var l = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        effects: r.effects
      };
      t.updateQueue = l;
    }
  }
  function Vr(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: cx,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function mi(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    var l = r.shared;
    if (Ef === l && !em && (u("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), em = !0), Zk()) {
      var f = l.pending;
      return f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, tD(e, n);
    } else
      return eD(e, l, t, n);
  }
  function Cf(e, t, n) {
    var r = t.updateQueue;
    if (r !== null) {
      var l = r.shared;
      if (Cy(n)) {
        var f = l.lanes;
        f = jy(f, e.pendingLanes);
        var h = Ae(f, n);
        l.lanes = h, Wp(e, h);
      }
    }
  }
  function nm(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null) {
      var l = r.updateQueue;
      if (n === l) {
        var f = null, h = null, b = n.firstBaseUpdate;
        if (b !== null) {
          var S = b;
          do {
            var E = {
              eventTime: S.eventTime,
              lane: S.lane,
              tag: S.tag,
              payload: S.payload,
              callback: S.callback,
              next: null
            };
            h === null ? f = h = E : (h.next = E, h = E), S = S.next;
          } while (S !== null);
          h === null ? f = h = t : (h.next = t, h = t);
        } else
          f = h = t;
        n = {
          baseState: l.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: h,
          shared: l.shared,
          effects: l.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var R = n.lastBaseUpdate;
    R === null ? n.firstBaseUpdate = t : R.next = t, n.lastBaseUpdate = t;
  }
  function nD(e, t, n, r, l, f) {
    switch (n.tag) {
      case fx: {
        var h = n.payload;
        if (typeof h == "function") {
          ox();
          var b = h.call(f, r, l);
          {
            if (e.mode & Tt) {
              tn(!0);
              try {
                h.call(f, r, l);
              } finally {
                tn(!1);
              }
            }
            sx();
          }
          return b;
        }
        return h;
      }
      case Zh:
        e.flags = e.flags & ~On | tt;
      case cx: {
        var S = n.payload, E;
        if (typeof S == "function") {
          ox(), E = S.call(f, r, l);
          {
            if (e.mode & Tt) {
              tn(!0);
              try {
                S.call(f, r, l);
              } finally {
                tn(!1);
              }
            }
            sx();
          }
        } else
          E = S;
        return E == null ? r : $e({}, r, E);
      }
      case Nf:
        return wf = !0, r;
    }
    return r;
  }
  function Rf(e, t, n, r) {
    var l = e.updateQueue;
    wf = !1, Ef = l.shared;
    var f = l.firstBaseUpdate, h = l.lastBaseUpdate, b = l.shared.pending;
    if (b !== null) {
      l.shared.pending = null;
      var S = b, E = S.next;
      S.next = null, h === null ? f = E : h.next = E, h = S;
      var R = e.alternate;
      if (R !== null) {
        var P = R.updateQueue, _ = P.lastBaseUpdate;
        _ !== h && (_ === null ? P.firstBaseUpdate = E : _.next = E, P.lastBaseUpdate = S);
      }
    }
    if (f !== null) {
      var B = l.baseState, J = q, W = null, re = null, xe = null, me = f;
      do {
        var Ke = me.lane, ze = me.eventTime;
        if (Go(r, Ke)) {
          if (xe !== null) {
            var K = {
              eventTime: ze,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: nn,
              tag: me.tag,
              payload: me.payload,
              callback: me.callback,
              next: null
            };
            xe = xe.next = K;
          }
          B = nD(e, l, me, B, t, n);
          var H = me.callback;
          if (H !== null && // If the update was already committed, we should not queue its
          // callback again.
          me.lane !== nn) {
            e.flags |= hp;
            var Z = l.effects;
            Z === null ? l.effects = [me] : Z.push(me);
          }
        } else {
          var $ = {
            eventTime: ze,
            lane: Ke,
            tag: me.tag,
            payload: me.payload,
            callback: me.callback,
            next: null
          };
          xe === null ? (re = xe = $, W = B) : xe = xe.next = $, J = Ae(J, Ke);
        }
        if (me = me.next, me === null) {
          if (b = l.shared.pending, b === null)
            break;
          var le = b, ie = le.next;
          le.next = null, me = ie, l.lastBaseUpdate = le, l.shared.pending = null;
        }
      } while (!0);
      xe === null && (W = B), l.baseState = W, l.firstBaseUpdate = re, l.lastBaseUpdate = xe;
      var Re = l.shared.interleaved;
      if (Re !== null) {
        var Oe = Re;
        do
          J = Ae(J, Oe.lane), Oe = Oe.next;
        while (Oe !== Re);
      } else f === null && (l.shared.lanes = q);
      Tu(J), e.lanes = J, e.memoizedState = B;
    }
    Ef = null;
  }
  function aD(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function px() {
    wf = !1;
  }
  function jf() {
    return wf;
  }
  function hx(e, t, n) {
    var r = t.effects;
    if (t.effects = null, r !== null)
      for (var l = 0; l < r.length; l++) {
        var f = r[l], h = f.callback;
        h !== null && (f.callback = null, aD(h, n));
      }
  }
  var nu = {}, vi = fi(nu), au = fi(nu), Tf = fi(nu);
  function Df(e) {
    if (e === nu)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function mx() {
    var e = Df(Tf.current);
    return e;
  }
  function am(e, t) {
    En(Tf, t, e), En(au, e, e), En(vi, nu, e);
    var n = xj(t);
    wn(vi, e), En(vi, n, e);
  }
  function ps(e) {
    wn(vi, e), wn(au, e), wn(Tf, e);
  }
  function rm() {
    var e = Df(vi.current);
    return e;
  }
  function vx(e) {
    Df(Tf.current);
    var t = Df(vi.current), n = Sj(t, e.type);
    t !== n && (En(au, e, e), En(vi, n, e));
  }
  function im(e) {
    au.current === e && (wn(vi, e), wn(au, e));
  }
  var rD = 0, gx = 1, yx = 1, ru = 2, za = fi(rD);
  function om(e, t) {
    return (e & t) !== 0;
  }
  function hs(e) {
    return e & gx;
  }
  function sm(e, t) {
    return e & gx | t;
  }
  function iD(e, t) {
    return e | t;
  }
  function gi(e, t) {
    En(za, t, e);
  }
  function ms(e) {
    wn(za, e);
  }
  function oD(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function kf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === F) {
        var n = t.memoizedState;
        if (n !== null) {
          var r = n.dehydrated;
          if (r === null || _b(r) || Ch(r))
            return t;
        }
      } else if (t.tag === ge && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var l = (t.flags & tt) !== Ee;
        if (l)
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
  var In = (
    /*   */
    0
  ), Bt = (
    /* */
    1
  ), rr = (
    /*  */
    2
  ), It = (
    /*    */
    4
  ), un = (
    /*   */
    8
  ), lm = [];
  function um() {
    for (var e = 0; e < lm.length; e++) {
      var t = lm[e];
      t._workInProgressVersionPrimary = null;
    }
    lm.length = 0;
  }
  function sD(e, t) {
    var n = t._getVersion, r = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
  }
  var se = o.ReactCurrentDispatcher, iu = o.ReactCurrentBatchConfig, cm, vs;
  cm = /* @__PURE__ */ new Set();
  var ho = q, st = null, Jt = null, Yt = null, Of = !1, ou = !1, su = 0, lD = 0, uD = 25, X = null, Na = null, yi = -1, fm = !1;
  function nt() {
    {
      var e = X;
      Na === null ? Na = [e] : Na.push(e);
    }
  }
  function te() {
    {
      var e = X;
      Na !== null && (yi++, Na[yi] !== e && cD(e));
    }
  }
  function gs(e) {
    e != null && !et(e) && u("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
  }
  function cD(e) {
    {
      var t = Le(st);
      if (!cm.has(t) && (cm.add(t), Na !== null)) {
        for (var n = "", r = 30, l = 0; l <= yi; l++) {
          for (var f = Na[l], h = l === yi ? e : f, b = l + 1 + ". " + f; b.length < r; )
            b += " ";
          b += h + `
`, n += b;
        }
        u(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
      }
    }
  }
  function Cn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function dm(e, t) {
    if (fm)
      return !1;
    if (t === null)
      return u("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
    e.length !== t.length && u(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!oa(e[n], t[n]))
        return !1;
    return !0;
  }
  function ys(e, t, n, r, l, f) {
    ho = f, st = t, Na = e !== null ? e._debugHookTypes : null, yi = -1, fm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? se.current = zx : Na !== null ? se.current = Fx : se.current = Vx;
    var h = n(r, l);
    if (ou) {
      var b = 0;
      do {
        if (ou = !1, su = 0, b >= uD)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        b += 1, fm = !1, Jt = null, Yt = null, t.updateQueue = null, yi = -1, se.current = $x, h = n(r, l);
      } while (ou);
    }
    se.current = If, t._debugHookTypes = Na;
    var S = Jt !== null && Jt.next !== null;
    if (ho = q, st = null, Jt = null, Yt = null, X = null, Na = null, yi = -1, e !== null && (e.flags & Dr) !== (t.flags & Dr) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Ye) !== Se && u("Internal React error: Expected static flag was missing. Please notify the React team."), Of = !1, S)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return h;
  }
  function bs() {
    var e = su !== 0;
    return su = 0, e;
  }
  function bx(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & er) !== Se ? t.flags &= ~(Ec | Tr | Aa | Ge) : t.flags &= ~(Aa | Ge), e.lanes = Oc(e.lanes, n);
  }
  function xx() {
    if (se.current = If, Of) {
      for (var e = st.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Of = !1;
    }
    ho = q, st = null, Jt = null, Yt = null, Na = null, yi = -1, X = null, Mx = !1, ou = !1, su = 0;
  }
  function ir() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? st.memoizedState = Yt = e : Yt = Yt.next = e, Yt;
  }
  function wa() {
    var e;
    if (Jt === null) {
      var t = st.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = Jt.next;
    var n;
    if (Yt === null ? n = st.memoizedState : n = Yt.next, n !== null)
      Yt = n, n = Yt.next, Jt = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      Jt = e;
      var r = {
        memoizedState: Jt.memoizedState,
        baseState: Jt.baseState,
        baseQueue: Jt.baseQueue,
        queue: Jt.queue,
        next: null
      };
      Yt === null ? st.memoizedState = Yt = r : Yt = Yt.next = r;
    }
    return Yt;
  }
  function Sx() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function pm(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hm(e, t, n) {
    var r = ir(), l;
    n !== void 0 ? l = n(t) : l = t, r.memoizedState = r.baseState = l;
    var f = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: l
    };
    r.queue = f;
    var h = f.dispatch = hD.bind(null, st, f);
    return [r.memoizedState, h];
  }
  function mm(e, t, n) {
    var r = wa(), l = r.queue;
    if (l === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    l.lastRenderedReducer = e;
    var f = Jt, h = f.baseQueue, b = l.pending;
    if (b !== null) {
      if (h !== null) {
        var S = h.next, E = b.next;
        h.next = E, b.next = S;
      }
      f.baseQueue !== h && u("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = h = b, l.pending = null;
    }
    if (h !== null) {
      var R = h.next, P = f.baseState, _ = null, B = null, J = null, W = R;
      do {
        var re = W.lane;
        if (Go(ho, re)) {
          if (J !== null) {
            var me = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: nn,
              action: W.action,
              hasEagerState: W.hasEagerState,
              eagerState: W.eagerState,
              next: null
            };
            J = J.next = me;
          }
          if (W.hasEagerState)
            P = W.eagerState;
          else {
            var Ke = W.action;
            P = e(P, Ke);
          }
        } else {
          var xe = {
            lane: re,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          J === null ? (B = J = xe, _ = P) : J = J.next = xe, st.lanes = Ae(st.lanes, re), Tu(re);
        }
        W = W.next;
      } while (W !== null && W !== R);
      J === null ? _ = P : J.next = B, oa(P, r.memoizedState) || vu(), r.memoizedState = P, r.baseState = _, r.baseQueue = J, l.lastRenderedState = P;
    }
    var ze = l.interleaved;
    if (ze !== null) {
      var $ = ze;
      do {
        var K = $.lane;
        st.lanes = Ae(st.lanes, K), Tu(K), $ = $.next;
      } while ($ !== ze);
    } else h === null && (l.lanes = q);
    var H = l.dispatch;
    return [r.memoizedState, H];
  }
  function vm(e, t, n) {
    var r = wa(), l = r.queue;
    if (l === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    l.lastRenderedReducer = e;
    var f = l.dispatch, h = l.pending, b = r.memoizedState;
    if (h !== null) {
      l.pending = null;
      var S = h.next, E = S;
      do {
        var R = E.action;
        b = e(b, R), E = E.next;
      } while (E !== S);
      oa(b, r.memoizedState) || vu(), r.memoizedState = b, r.baseQueue === null && (r.baseState = b), l.lastRenderedState = b;
    }
    return [b, f];
  }
  function d4(e, t, n) {
  }
  function p4(e, t, n) {
  }
  function gm(e, t, n) {
    var r = st, l = ir(), f, h = ln();
    if (h) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      f = n(), vs || f !== n() && (u("The result of getServerSnapshot should be cached to avoid an infinite loop"), vs = !0);
    } else {
      if (f = t(), !vs) {
        var b = t();
        oa(f, b) || (u("The result of getSnapshot should be cached to avoid an infinite loop"), vs = !0);
      }
      var S = ud();
      if (S === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      kc(S, ho) || Nx(r, t, f);
    }
    l.memoizedState = f;
    var E = {
      value: f,
      getSnapshot: t
    };
    return l.queue = E, Pf(Ex.bind(null, r, E, e), [e]), r.flags |= Aa, lu(Bt | un, wx.bind(null, r, E, f, t), void 0, null), f;
  }
  function Lf(e, t, n) {
    var r = st, l = wa(), f = t();
    if (!vs) {
      var h = t();
      oa(f, h) || (u("The result of getSnapshot should be cached to avoid an infinite loop"), vs = !0);
    }
    var b = l.memoizedState, S = !oa(b, f);
    S && (l.memoizedState = f, vu());
    var E = l.queue;
    if (cu(Ex.bind(null, r, E, e), [e]), E.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Yt !== null && Yt.memoizedState.tag & Bt) {
      r.flags |= Aa, lu(Bt | un, wx.bind(null, r, E, f, t), void 0, null);
      var R = ud();
      if (R === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      kc(R, ho) || Nx(r, t, f);
    }
    return f;
  }
  function Nx(e, t, n) {
    e.flags |= wc;
    var r = {
      getSnapshot: t,
      value: n
    }, l = st.updateQueue;
    if (l === null)
      l = Sx(), st.updateQueue = l, l.stores = [r];
    else {
      var f = l.stores;
      f === null ? l.stores = [r] : f.push(r);
    }
  }
  function wx(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Cx(t) && Rx(e);
  }
  function Ex(e, t, n) {
    var r = function() {
      Cx(t) && Rx(e);
    };
    return n(r);
  }
  function Cx(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var r = t();
      return !oa(n, r);
    } catch {
      return !0;
    }
  }
  function Rx(e) {
    var t = Bn(e, De);
    t !== null && Xt(t, e, De, pt);
  }
  function Mf(e) {
    var t = ir();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: q,
      dispatch: null,
      lastRenderedReducer: pm,
      lastRenderedState: e
    };
    t.queue = n;
    var r = n.dispatch = mD.bind(null, st, n);
    return [t.memoizedState, r];
  }
  function ym(e) {
    return mm(pm);
  }
  function bm(e) {
    return vm(pm);
  }
  function lu(e, t, n, r) {
    var l = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      // Circular
      next: null
    }, f = st.updateQueue;
    if (f === null)
      f = Sx(), st.updateQueue = f, f.lastEffect = l.next = l;
    else {
      var h = f.lastEffect;
      if (h === null)
        f.lastEffect = l.next = l;
      else {
        var b = h.next;
        h.next = l, l.next = b, f.lastEffect = l;
      }
    }
    return l;
  }
  function xm(e) {
    var t = ir();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function Af(e) {
    var t = wa();
    return t.memoizedState;
  }
  function uu(e, t, n, r) {
    var l = ir(), f = r === void 0 ? null : r;
    st.flags |= e, l.memoizedState = lu(Bt | t, n, void 0, f);
  }
  function _f(e, t, n, r) {
    var l = wa(), f = r === void 0 ? null : r, h = void 0;
    if (Jt !== null) {
      var b = Jt.memoizedState;
      if (h = b.destroy, f !== null) {
        var S = b.deps;
        if (dm(f, S)) {
          l.memoizedState = lu(t, n, h, f);
          return;
        }
      }
    }
    st.flags |= e, l.memoizedState = lu(Bt | t, n, h, f);
  }
  function Pf(e, t) {
    return (st.mode & er) !== Se ? uu(Ec | Aa | gp, un, e, t) : uu(Aa | gp, un, e, t);
  }
  function cu(e, t) {
    return _f(Aa, un, e, t);
  }
  function Sm(e, t) {
    return uu(Ge, rr, e, t);
  }
  function Uf(e, t) {
    return _f(Ge, rr, e, t);
  }
  function Nm(e, t) {
    var n = Ge;
    return n |= Xi, (st.mode & er) !== Se && (n |= Tr), uu(n, It, e, t);
  }
  function Vf(e, t) {
    return _f(Ge, It, e, t);
  }
  function jx(e, t) {
    if (typeof t == "function") {
      var n = t, r = e();
      return n(r), function() {
        n(null);
      };
    } else if (t != null) {
      var l = t;
      l.hasOwnProperty("current") || u("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
      var f = e();
      return l.current = f, function() {
        l.current = null;
      };
    }
  }
  function wm(e, t, n) {
    typeof t != "function" && u("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null, l = Ge;
    return l |= Xi, (st.mode & er) !== Se && (l |= Tr), uu(l, It, jx.bind(null, t, e), r);
  }
  function Ff(e, t, n) {
    typeof t != "function" && u("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var r = n != null ? n.concat([e]) : null;
    return _f(Ge, It, jx.bind(null, t, e), r);
  }
  function fD(e, t) {
  }
  var zf = fD;
  function Em(e, t) {
    var n = ir(), r = t === void 0 ? null : t;
    return n.memoizedState = [e, r], e;
  }
  function $f(e, t) {
    var n = wa(), r = t === void 0 ? null : t, l = n.memoizedState;
    if (l !== null && r !== null) {
      var f = l[1];
      if (dm(r, f))
        return l[0];
    }
    return n.memoizedState = [e, r], e;
  }
  function Cm(e, t) {
    var n = ir(), r = t === void 0 ? null : t, l = e();
    return n.memoizedState = [l, r], l;
  }
  function Hf(e, t) {
    var n = wa(), r = t === void 0 ? null : t, l = n.memoizedState;
    if (l !== null && r !== null) {
      var f = l[1];
      if (dm(r, f))
        return l[0];
    }
    var h = e();
    return n.memoizedState = [h, r], h;
  }
  function Rm(e) {
    var t = ir();
    return t.memoizedState = e, e;
  }
  function Tx(e) {
    var t = wa(), n = Jt, r = n.memoizedState;
    return kx(t, r, e);
  }
  function Dx(e) {
    var t = wa();
    if (Jt === null)
      return t.memoizedState = e, e;
    var n = Jt.memoizedState;
    return kx(t, n, e);
  }
  function kx(e, t, n) {
    var r = !XE(ho);
    if (r) {
      if (!oa(n, t)) {
        var l = Ry();
        st.lanes = Ae(st.lanes, l), Tu(l), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, vu()), e.memoizedState = n, n;
  }
  function dD(e, t, n) {
    var r = Pa();
    an(iC(r, Or)), e(!0);
    var l = iu.transition;
    iu.transition = {};
    var f = iu.transition;
    iu.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (an(r), iu.transition = l, l === null && f._updatedFibers) {
        var h = f._updatedFibers.size;
        h > 10 && c("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
      }
    }
  }
  function jm() {
    var e = Mf(!1), t = e[0], n = e[1], r = dD.bind(null, n), l = ir();
    return l.memoizedState = r, [t, r];
  }
  function Ox() {
    var e = ym(), t = e[0], n = wa(), r = n.memoizedState;
    return [t, r];
  }
  function Lx() {
    var e = bm(), t = e[0], n = wa(), r = n.memoizedState;
    return [t, r];
  }
  var Mx = !1;
  function pD() {
    return Mx;
  }
  function Tm() {
    var e = ir(), t = ud(), n = t.identifierPrefix, r;
    if (ln()) {
      var l = kT();
      r = ":" + n + "R" + l;
      var f = su++;
      f > 0 && (r += "H" + f.toString(32)), r += ":";
    } else {
      var h = lD++;
      r = ":" + n + "r" + h.toString(32) + ":";
    }
    return e.memoizedState = r, r;
  }
  function Bf() {
    var e = wa(), t = e.memoizedState;
    return t;
  }
  function hD(e, t, n) {
    typeof arguments[3] == "function" && u("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = wi(e), l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ax(e))
      _x(t, l);
    else {
      var f = ux(e, t, l, r);
      if (f !== null) {
        var h = An();
        Xt(f, e, r, h), Px(f, t, r);
      }
    }
    Ux(e, r);
  }
  function mD(e, t, n) {
    typeof arguments[3] == "function" && u("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var r = wi(e), l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ax(e))
      _x(t, l);
    else {
      var f = e.alternate;
      if (e.lanes === q && (f === null || f.lanes === q)) {
        var h = t.lastRenderedReducer;
        if (h !== null) {
          var b;
          b = se.current, se.current = $a;
          try {
            var S = t.lastRenderedState, E = h(S, n);
            if (l.hasEagerState = !0, l.eagerState = E, oa(E, S)) {
              ZT(e, t, l, r);
              return;
            }
          } catch {
          } finally {
            se.current = b;
          }
        }
      }
      var R = ux(e, t, l, r);
      if (R !== null) {
        var P = An();
        Xt(R, e, r, P), Px(R, t, r);
      }
    }
    Ux(e, r);
  }
  function Ax(e) {
    var t = e.alternate;
    return e === st || t !== null && t === st;
  }
  function _x(e, t) {
    ou = Of = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Px(e, t, n) {
    if (Cy(n)) {
      var r = t.lanes;
      r = jy(r, e.pendingLanes);
      var l = Ae(r, n);
      t.lanes = l, Wp(e, l);
    }
  }
  function Ux(e, t, n) {
    Np(e, t);
  }
  var If = {
    readContext: Pt,
    useCallback: Cn,
    useContext: Cn,
    useEffect: Cn,
    useImperativeHandle: Cn,
    useInsertionEffect: Cn,
    useLayoutEffect: Cn,
    useMemo: Cn,
    useReducer: Cn,
    useRef: Cn,
    useState: Cn,
    useDebugValue: Cn,
    useDeferredValue: Cn,
    useTransition: Cn,
    useMutableSource: Cn,
    useSyncExternalStore: Cn,
    useId: Cn,
    unstable_isNewReconciler: He
  }, Vx = null, Fx = null, zx = null, $x = null, or = null, $a = null, Jf = null;
  {
    var Dm = function() {
      u("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, ke = function() {
      u("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Vx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", nt(), gs(t), Em(e, t);
      },
      useContext: function(e) {
        return X = "useContext", nt(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", nt(), gs(t), Pf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", nt(), gs(n), wm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", nt(), gs(t), Sm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", nt(), gs(t), Nm(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", nt(), gs(t);
        var n = se.current;
        se.current = or;
        try {
          return Cm(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", nt();
        var r = se.current;
        se.current = or;
        try {
          return hm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", nt(), xm(e);
      },
      useState: function(e) {
        X = "useState", nt();
        var t = se.current;
        se.current = or;
        try {
          return Mf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", nt(), void 0;
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", nt(), Rm(e);
      },
      useTransition: function() {
        return X = "useTransition", nt(), jm();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", nt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", nt(), gm(e, t, n);
      },
      useId: function() {
        return X = "useId", nt(), Tm();
      },
      unstable_isNewReconciler: He
    }, Fx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", te(), Em(e, t);
      },
      useContext: function(e) {
        return X = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", te(), Pf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", te(), wm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", te(), Sm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", te(), Nm(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", te();
        var n = se.current;
        se.current = or;
        try {
          return Cm(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", te();
        var r = se.current;
        se.current = or;
        try {
          return hm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", te(), xm(e);
      },
      useState: function(e) {
        X = "useState", te();
        var t = se.current;
        se.current = or;
        try {
          return Mf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", te(), Rm(e);
      },
      useTransition: function() {
        return X = "useTransition", te(), jm();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", te(), gm(e, t, n);
      },
      useId: function() {
        return X = "useId", te(), Tm();
      },
      unstable_isNewReconciler: He
    }, zx = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", te(), $f(e, t);
      },
      useContext: function(e) {
        return X = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", te(), cu(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", te(), Ff(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", te(), Uf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", te(), Vf(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", te();
        var n = se.current;
        se.current = $a;
        try {
          return Hf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", te();
        var r = se.current;
        se.current = $a;
        try {
          return mm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", te(), Af();
      },
      useState: function(e) {
        X = "useState", te();
        var t = se.current;
        se.current = $a;
        try {
          return ym(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", te(), zf();
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", te(), Tx(e);
      },
      useTransition: function() {
        return X = "useTransition", te(), Ox();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", te(), Lf(e, t);
      },
      useId: function() {
        return X = "useId", te(), Bf();
      },
      unstable_isNewReconciler: He
    }, $x = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", te(), $f(e, t);
      },
      useContext: function(e) {
        return X = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", te(), cu(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", te(), Ff(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", te(), Uf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", te(), Vf(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", te();
        var n = se.current;
        se.current = Jf;
        try {
          return Hf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", te();
        var r = se.current;
        se.current = Jf;
        try {
          return vm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", te(), Af();
      },
      useState: function(e) {
        X = "useState", te();
        var t = se.current;
        se.current = Jf;
        try {
          return bm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", te(), zf();
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", te(), Dx(e);
      },
      useTransition: function() {
        return X = "useTransition", te(), Lx();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", te(), Lf(e, t);
      },
      useId: function() {
        return X = "useId", te(), Bf();
      },
      unstable_isNewReconciler: He
    }, or = {
      readContext: function(e) {
        return Dm(), Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", ke(), nt(), Em(e, t);
      },
      useContext: function(e) {
        return X = "useContext", ke(), nt(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", ke(), nt(), Pf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", ke(), nt(), wm(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", ke(), nt(), Sm(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", ke(), nt(), Nm(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", ke(), nt();
        var n = se.current;
        se.current = or;
        try {
          return Cm(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", ke(), nt();
        var r = se.current;
        se.current = or;
        try {
          return hm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", ke(), nt(), xm(e);
      },
      useState: function(e) {
        X = "useState", ke(), nt();
        var t = se.current;
        se.current = or;
        try {
          return Mf(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", ke(), nt(), void 0;
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", ke(), nt(), Rm(e);
      },
      useTransition: function() {
        return X = "useTransition", ke(), nt(), jm();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", ke(), nt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", ke(), nt(), gm(e, t, n);
      },
      useId: function() {
        return X = "useId", ke(), nt(), Tm();
      },
      unstable_isNewReconciler: He
    }, $a = {
      readContext: function(e) {
        return Dm(), Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", ke(), te(), $f(e, t);
      },
      useContext: function(e) {
        return X = "useContext", ke(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", ke(), te(), cu(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", ke(), te(), Ff(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", ke(), te(), Uf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", ke(), te(), Vf(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", ke(), te();
        var n = se.current;
        se.current = $a;
        try {
          return Hf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", ke(), te();
        var r = se.current;
        se.current = $a;
        try {
          return mm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", ke(), te(), Af();
      },
      useState: function(e) {
        X = "useState", ke(), te();
        var t = se.current;
        se.current = $a;
        try {
          return ym(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", ke(), te(), zf();
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", ke(), te(), Tx(e);
      },
      useTransition: function() {
        return X = "useTransition", ke(), te(), Ox();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", ke(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", ke(), te(), Lf(e, t);
      },
      useId: function() {
        return X = "useId", ke(), te(), Bf();
      },
      unstable_isNewReconciler: He
    }, Jf = {
      readContext: function(e) {
        return Dm(), Pt(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", ke(), te(), $f(e, t);
      },
      useContext: function(e) {
        return X = "useContext", ke(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", ke(), te(), cu(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return X = "useImperativeHandle", ke(), te(), Ff(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", ke(), te(), Uf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", ke(), te(), Vf(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", ke(), te();
        var n = se.current;
        se.current = $a;
        try {
          return Hf(e, t);
        } finally {
          se.current = n;
        }
      },
      useReducer: function(e, t, n) {
        X = "useReducer", ke(), te();
        var r = se.current;
        se.current = $a;
        try {
          return vm(e, t, n);
        } finally {
          se.current = r;
        }
      },
      useRef: function(e) {
        return X = "useRef", ke(), te(), Af();
      },
      useState: function(e) {
        X = "useState", ke(), te();
        var t = se.current;
        se.current = $a;
        try {
          return bm(e);
        } finally {
          se.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return X = "useDebugValue", ke(), te(), zf();
      },
      useDeferredValue: function(e) {
        return X = "useDeferredValue", ke(), te(), Dx(e);
      },
      useTransition: function() {
        return X = "useTransition", ke(), te(), Lx();
      },
      useMutableSource: function(e, t, n) {
        return X = "useMutableSource", ke(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return X = "useSyncExternalStore", ke(), te(), Lf(e, t);
      },
      useId: function() {
        return X = "useId", ke(), te(), Bf();
      },
      unstable_isNewReconciler: He
    };
  }
  var bi = a.unstable_now, Hx = 0, Yf = -1, fu = -1, Wf = -1, km = !1, Kf = !1;
  function Bx() {
    return km;
  }
  function vD() {
    Kf = !0;
  }
  function gD() {
    km = !1, Kf = !1;
  }
  function yD() {
    km = Kf, Kf = !1;
  }
  function Ix() {
    return Hx;
  }
  function Jx() {
    Hx = bi();
  }
  function Om(e) {
    fu = bi(), e.actualStartTime < 0 && (e.actualStartTime = bi());
  }
  function Yx(e) {
    fu = -1;
  }
  function Gf(e, t) {
    if (fu >= 0) {
      var n = bi() - fu;
      e.actualDuration += n, t && (e.selfBaseDuration = n), fu = -1;
    }
  }
  function sr(e) {
    if (Yf >= 0) {
      var t = bi() - Yf;
      Yf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case y:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
          case D:
            var l = n.stateNode;
            l.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function Lm(e) {
    if (Wf >= 0) {
      var t = bi() - Wf;
      Wf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case y:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
          case D:
            var l = n.stateNode;
            l !== null && (l.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function lr() {
    Yf = bi();
  }
  function Mm() {
    Wf = bi();
  }
  function Am(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Ha(e, t) {
    if (e && e.defaultProps) {
      var n = $e({}, t), r = e.defaultProps;
      for (var l in r)
        n[l] === void 0 && (n[l] = r[l]);
      return n;
    }
    return t;
  }
  var _m = {}, Pm, Um, Vm, Fm, zm, Wx, Xf, $m, Hm, Bm, du;
  {
    Pm = /* @__PURE__ */ new Set(), Um = /* @__PURE__ */ new Set(), Vm = /* @__PURE__ */ new Set(), Fm = /* @__PURE__ */ new Set(), $m = /* @__PURE__ */ new Set(), zm = /* @__PURE__ */ new Set(), Hm = /* @__PURE__ */ new Set(), Bm = /* @__PURE__ */ new Set(), du = /* @__PURE__ */ new Set();
    var Kx = /* @__PURE__ */ new Set();
    Xf = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Kx.has(n) || (Kx.add(n), u("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, Wx = function(e, t) {
      if (t === void 0) {
        var n = qe(e) || "Component";
        zm.has(n) || (zm.add(n), u("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(_m, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(_m);
  }
  function Im(e, t, n, r) {
    var l = e.memoizedState, f = n(r, l);
    {
      if (e.mode & Tt) {
        tn(!0);
        try {
          f = n(r, l);
        } finally {
          tn(!1);
        }
      }
      Wx(t, f);
    }
    var h = f == null ? l : $e({}, l, f);
    if (e.memoizedState = h, e.lanes === q) {
      var b = e.updateQueue;
      b.baseState = h;
    }
  }
  var Jm = {
    isMounted: uE,
    enqueueSetState: function(e, t, n) {
      var r = $o(e), l = An(), f = wi(r), h = Vr(l, f);
      h.payload = t, n != null && (Xf(n, "setState"), h.callback = n);
      var b = mi(r, h, f);
      b !== null && (Xt(b, r, f, l), Cf(b, r, f)), Np(r, f);
    },
    enqueueReplaceState: function(e, t, n) {
      var r = $o(e), l = An(), f = wi(r), h = Vr(l, f);
      h.tag = fx, h.payload = t, n != null && (Xf(n, "replaceState"), h.callback = n);
      var b = mi(r, h, f);
      b !== null && (Xt(b, r, f, l), Cf(b, r, f)), Np(r, f);
    },
    enqueueForceUpdate: function(e, t) {
      var n = $o(e), r = An(), l = wi(n), f = Vr(r, l);
      f.tag = Nf, t != null && (Xf(t, "forceUpdate"), f.callback = t);
      var h = mi(n, f, l);
      h !== null && (Xt(h, n, l, r), Cf(h, n, l)), zE(n, l);
    }
  };
  function Gx(e, t, n, r, l, f, h) {
    var b = e.stateNode;
    if (typeof b.shouldComponentUpdate == "function") {
      var S = b.shouldComponentUpdate(r, f, h);
      {
        if (e.mode & Tt) {
          tn(!0);
          try {
            S = b.shouldComponentUpdate(r, f, h);
          } finally {
            tn(!1);
          }
        }
        S === void 0 && u("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", qe(t) || "Component");
      }
      return S;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !Al(n, r) || !Al(l, f) : !0;
  }
  function bD(e, t, n) {
    var r = e.stateNode;
    {
      var l = qe(t) || "Component", f = r.render;
      f || (t.prototype && typeof t.prototype.render == "function" ? u("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : u("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && u("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), r.propTypes && u("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), r.contextType && u("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !du.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Tt) === Se && (du.add(t), u(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !du.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Tt) === Se && (du.add(t), u(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), r.contextTypes && u("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Hm.has(t) && (Hm.add(t), u("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof r.componentShouldUpdate == "function" && u("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && u("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(t) || "A pure component"), typeof r.componentDidUnmount == "function" && u("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof r.componentDidReceiveProps == "function" && u("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof r.componentWillRecieveProps == "function" && u("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof r.UNSAFE_componentWillRecieveProps == "function" && u("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
      var h = r.props !== n;
      r.props !== void 0 && h && u("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), r.defaultProps && u("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Vm.has(t) && (Vm.add(t), u("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(t))), typeof r.getDerivedStateFromProps == "function" && u("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof r.getDerivedStateFromError == "function" && u("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && u("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
      var b = r.state;
      b && (typeof b != "object" || et(b)) && u("%s.state: must be set to an object or null", l), typeof r.getChildContext == "function" && typeof t.childContextTypes != "object" && u("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
    }
  }
  function Xx(e, t) {
    t.updater = Jm, e.stateNode = t, rE(t, e), t._reactInternalInstance = _m;
  }
  function qx(e, t, n) {
    var r = !1, l = sa, f = sa, h = t.contextType;
    if ("contextType" in t) {
      var b = (
        // Allow null for conditional declaration
        h === null || h !== void 0 && h.$$typeof === Ie && h._context === void 0
      );
      if (!b && !Bm.has(t)) {
        Bm.add(t);
        var S = "";
        h === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? S = " However, it is set to a " + typeof h + "." : h.$$typeof === we ? S = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", u("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(t) || "Component", S);
      }
    }
    if (typeof h == "object" && h !== null)
      f = Pt(h);
    else {
      l = is(e, t, !0);
      var E = t.contextTypes;
      r = E != null, f = r ? os(e, l) : sa;
    }
    var R = new t(n, f);
    if (e.mode & Tt) {
      tn(!0);
      try {
        R = new t(n, f);
      } finally {
        tn(!1);
      }
    }
    var P = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
    Xx(e, R);
    {
      if (typeof t.getDerivedStateFromProps == "function" && P === null) {
        var _ = qe(t) || "Component";
        Um.has(_) || (Um.add(_), u("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, R.state === null ? "null" : "undefined", _));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
        var B = null, J = null, W = null;
        if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), B !== null || J !== null || W !== null) {
          var re = qe(t) || "Component", xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          Fm.has(re) || (Fm.add(re), u(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, re, xe, B !== null ? `
  ` + B : "", J !== null ? `
  ` + J : "", W !== null ? `
  ` + W : ""));
        }
      }
    }
    return r && zb(e, l, f), R;
  }
  function xD(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (u("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e) || "Component"), Jm.enqueueReplaceState(t, t.state, null));
  }
  function Qx(e, t, n, r) {
    var l = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== l) {
      {
        var f = Le(e) || "Component";
        Pm.has(f) || (Pm.add(f), u("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
      }
      Jm.enqueueReplaceState(t, t.state, null);
    }
  }
  function Ym(e, t, n, r) {
    bD(e, t, n);
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, tm(e);
    var f = t.contextType;
    if (typeof f == "object" && f !== null)
      l.context = Pt(f);
    else {
      var h = is(e, t, !0);
      l.context = os(e, h);
    }
    {
      if (l.state === n) {
        var b = qe(t) || "Component";
        $m.has(b) || ($m.add(b), u("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
      }
      e.mode & Tt && Fa.recordLegacyContextWarning(e, l), Fa.recordUnsafeLifecycleWarnings(e, l);
    }
    l.state = e.memoizedState;
    var S = t.getDerivedStateFromProps;
    if (typeof S == "function" && (Im(e, t, S, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (xD(e, l), Rf(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
      var E = Ge;
      E |= Xi, (e.mode & er) !== Se && (E |= Tr), e.flags |= E;
    }
  }
  function SD(e, t, n, r) {
    var l = e.stateNode, f = e.memoizedProps;
    l.props = f;
    var h = l.context, b = t.contextType, S = sa;
    if (typeof b == "object" && b !== null)
      S = Pt(b);
    else {
      var E = is(e, t, !0);
      S = os(e, E);
    }
    var R = t.getDerivedStateFromProps, P = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    !P && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (f !== n || h !== S) && Qx(e, l, n, S), px();
    var _ = e.memoizedState, B = l.state = _;
    if (Rf(e, n, l, r), B = e.memoizedState, f === n && _ === B && !sf() && !jf()) {
      if (typeof l.componentDidMount == "function") {
        var J = Ge;
        J |= Xi, (e.mode & er) !== Se && (J |= Tr), e.flags |= J;
      }
      return !1;
    }
    typeof R == "function" && (Im(e, t, R, n), B = e.memoizedState);
    var W = jf() || Gx(e, t, f, n, _, B, S);
    if (W) {
      if (!P && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
        var re = Ge;
        re |= Xi, (e.mode & er) !== Se && (re |= Tr), e.flags |= re;
      }
    } else {
      if (typeof l.componentDidMount == "function") {
        var xe = Ge;
        xe |= Xi, (e.mode & er) !== Se && (xe |= Tr), e.flags |= xe;
      }
      e.memoizedProps = n, e.memoizedState = B;
    }
    return l.props = n, l.state = B, l.context = S, W;
  }
  function ND(e, t, n, r, l) {
    var f = t.stateNode;
    dx(e, t);
    var h = t.memoizedProps, b = t.type === t.elementType ? h : Ha(t.type, h);
    f.props = b;
    var S = t.pendingProps, E = f.context, R = n.contextType, P = sa;
    if (typeof R == "object" && R !== null)
      P = Pt(R);
    else {
      var _ = is(t, n, !0);
      P = os(t, _);
    }
    var B = n.getDerivedStateFromProps, J = typeof B == "function" || typeof f.getSnapshotBeforeUpdate == "function";
    !J && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== S || E !== P) && Qx(t, f, r, P), px();
    var W = t.memoizedState, re = f.state = W;
    if (Rf(t, r, f, l), re = t.memoizedState, h === S && W === re && !sf() && !jf() && !yt)
      return typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ge), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ki), !1;
    typeof B == "function" && (Im(t, n, B, r), re = t.memoizedState);
    var xe = jf() || Gx(t, n, b, r, W, re, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    yt;
    return xe ? (!J && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, re, P), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, re, P)), typeof f.componentDidUpdate == "function" && (t.flags |= Ge), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= Ki)) : (typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ge), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ki), t.memoizedProps = r, t.memoizedState = re), f.props = r, f.state = re, f.context = P, xe;
  }
  function mo(e, t) {
    return {
      value: e,
      source: t,
      stack: Zs(t),
      digest: null
    };
  }
  function Wm(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function wD(e, t) {
    return !0;
  }
  function Km(e, t) {
    try {
      var n = wD(e, t);
      if (n === !1)
        return;
      var r = t.value, l = t.source, f = t.stack, h = f !== null ? f : "";
      if (r != null && r._suppressLogging) {
        if (e.tag === p)
          return;
        console.error(r);
      }
      var b = l ? Le(l) : null, S = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", E;
      if (e.tag === y)
        E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var R = Le(e) || "Anonymous";
        E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
      }
      var P = S + `
` + h + `

` + ("" + E);
      console.error(P);
    } catch (_) {
      setTimeout(function() {
        throw _;
      });
    }
  }
  var ED = typeof WeakMap == "function" ? WeakMap : Map;
  function Zx(e, t, n) {
    var r = Vr(pt, n);
    r.tag = Zh, r.payload = {
      element: null
    };
    var l = t.value;
    return r.callback = function() {
      vO(l), Km(e, t);
    }, r;
  }
  function Gm(e, t, n) {
    var r = Vr(pt, n);
    r.tag = Zh;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = t.value;
      r.payload = function() {
        return l(f);
      }, r.callback = function() {
        cS(e), Km(e, t);
      };
    }
    var h = e.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (r.callback = function() {
      cS(e), Km(e, t), typeof l != "function" && hO(this);
      var S = t.value, E = t.stack;
      this.componentDidCatch(S, {
        componentStack: E !== null ? E : ""
      }), typeof l != "function" && (aa(e.lanes, De) || u("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e) || "Unknown"));
    }), r;
  }
  function e0(e, t, n) {
    var r = e.pingCache, l;
    if (r === null ? (r = e.pingCache = new ED(), l = /* @__PURE__ */ new Set(), r.set(t, l)) : (l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l))), !l.has(n)) {
      l.add(n);
      var f = gO.bind(null, e, t, n);
      _a && Du(e, n), t.then(f, f);
    }
  }
  function CD(e, t, n, r) {
    var l = e.updateQueue;
    if (l === null) {
      var f = /* @__PURE__ */ new Set();
      f.add(n), e.updateQueue = f;
    } else
      l.add(n);
  }
  function RD(e, t) {
    var n = e.tag;
    if ((e.mode & Ye) === Se && (n === v || n === V || n === G)) {
      var r = e.alternate;
      r ? (e.updateQueue = r.updateQueue, e.memoizedState = r.memoizedState, e.lanes = r.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function t0(e) {
    var t = e;
    do {
      if (t.tag === F && oD(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function n0(e, t, n, r, l) {
    if ((e.mode & Ye) === Se) {
      if (e === t)
        e.flags |= On;
      else {
        if (e.flags |= tt, n.flags |= mp, n.flags &= ~(iE | fl), n.tag === p) {
          var f = n.alternate;
          if (f === null)
            n.tag = ve;
          else {
            var h = Vr(pt, De);
            h.tag = Nf, mi(n, h, De);
          }
        }
        n.lanes = Ae(n.lanes, De);
      }
      return e;
    }
    return e.flags |= On, e.lanes = l, e;
  }
  function jD(e, t, n, r, l) {
    if (n.flags |= fl, _a && Du(e, l), r !== null && typeof r == "object" && typeof r.then == "function") {
      var f = r;
      RD(n), ln() && n.mode & Ye && Wb();
      var h = t0(t);
      if (h !== null) {
        h.flags &= ~Rr, n0(h, t, n, e, l), h.mode & Ye && e0(e, f, l), CD(h, e, f);
        return;
      } else {
        if (!GE(l)) {
          e0(e, f, l), Tv();
          return;
        }
        var b = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        r = b;
      }
    } else if (ln() && n.mode & Ye) {
      Wb();
      var S = t0(t);
      if (S !== null) {
        (S.flags & On) === Ee && (S.flags |= Rr), n0(S, t, n, e, l), $h(mo(r, n));
        return;
      }
    }
    r = mo(r, n), oO(r);
    var E = t;
    do {
      switch (E.tag) {
        case y: {
          var R = r;
          E.flags |= On;
          var P = bl(l);
          E.lanes = Ae(E.lanes, P);
          var _ = Zx(E, R, P);
          nm(E, _);
          return;
        }
        case p:
          var B = r, J = E.type, W = E.stateNode;
          if ((E.flags & tt) === Ee && (typeof J.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && !tS(W))) {
            E.flags |= On;
            var re = bl(l);
            E.lanes = Ae(E.lanes, re);
            var xe = Gm(E, B, re);
            nm(E, xe);
            return;
          }
          break;
      }
      E = E.return;
    } while (E !== null);
  }
  function TD() {
    return null;
  }
  var pu = o.ReactCurrentOwner, Ba = !1, Xm, hu, qm, Qm, Zm, vo, ev, qf, mu;
  Xm = {}, hu = {}, qm = {}, Qm = {}, Zm = {}, vo = !1, ev = {}, qf = {}, mu = {};
  function Ln(e, t, n, r) {
    e === null ? t.child = ix(t, null, n, r) : t.child = cs(t, e.child, n, r);
  }
  function DD(e, t, n, r) {
    t.child = cs(t, e.child, null, r), t.child = cs(t, null, n, r);
  }
  function a0(e, t, n, r, l) {
    if (t.type !== t.elementType) {
      var f = n.propTypes;
      f && Ua(
        f,
        r,
        // Resolved props
        "prop",
        qe(n)
      );
    }
    var h = n.render, b = t.ref, S, E;
    ds(t, l), pl(t);
    {
      if (pu.current = t, ta(!0), S = ys(e, t, h, r, b, l), E = bs(), t.mode & Tt) {
        tn(!0);
        try {
          S = ys(e, t, h, r, b, l), E = bs();
        } finally {
          tn(!1);
        }
      }
      ta(!1);
    }
    return Jo(), e !== null && !Ba ? (bx(e, t, l), Fr(e, t, l)) : (ln() && E && _h(t), t.flags |= Ho, Ln(e, t, S, l), t.child);
  }
  function r0(e, t, n, r, l) {
    if (e === null) {
      var f = n.type;
      if (AO(f) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var h = f;
        return h = js(f), t.tag = G, t.type = h, av(t, f), i0(e, t, h, r, l);
      }
      {
        var b = f.propTypes;
        if (b && Ua(
          b,
          r,
          // Resolved props
          "prop",
          qe(f)
        ), n.defaultProps !== void 0) {
          var S = qe(f) || "Unknown";
          mu[S] || (u("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", S), mu[S] = !0);
        }
      }
      var E = Fv(n.type, null, r, t, t.mode, l);
      return E.ref = t.ref, E.return = t, t.child = E, E;
    }
    {
      var R = n.type, P = R.propTypes;
      P && Ua(
        P,
        r,
        // Resolved props
        "prop",
        qe(R)
      );
    }
    var _ = e.child, B = uv(e, l);
    if (!B) {
      var J = _.memoizedProps, W = n.compare;
      if (W = W !== null ? W : Al, W(J, r) && e.ref === t.ref)
        return Fr(e, t, l);
    }
    t.flags |= Ho;
    var re = So(_, r);
    return re.ref = t.ref, re.return = t, t.child = re, re;
  }
  function i0(e, t, n, r, l) {
    if (t.type !== t.elementType) {
      var f = t.elementType;
      if (f.$$typeof === Fe) {
        var h = f, b = h._payload, S = h._init;
        try {
          f = S(b);
        } catch {
          f = null;
        }
        var E = f && f.propTypes;
        E && Ua(
          E,
          r,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          qe(f)
        );
      }
    }
    if (e !== null) {
      var R = e.memoizedProps;
      if (Al(R, r) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Ba = !1, t.pendingProps = r = R, uv(e, l))
          (e.flags & mp) !== Ee && (Ba = !0);
        else return t.lanes = e.lanes, Fr(e, t, l);
    }
    return tv(e, t, n, r, l);
  }
  function o0(e, t, n) {
    var r = t.pendingProps, l = r.children, f = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || Be)
      if ((t.mode & Ye) === Se) {
        var h = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = h, cd(t, n);
      } else if (aa(n, na)) {
        var P = {
          baseLanes: q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = P;
        var _ = f !== null ? f.baseLanes : n;
        cd(t, _);
      } else {
        var b = null, S;
        if (f !== null) {
          var E = f.baseLanes;
          S = Ae(E, n);
        } else
          S = n;
        t.lanes = t.childLanes = na;
        var R = {
          baseLanes: S,
          cachePool: b,
          transitions: null
        };
        return t.memoizedState = R, t.updateQueue = null, cd(t, S), null;
      }
    else {
      var B;
      f !== null ? (B = Ae(f.baseLanes, n), t.memoizedState = null) : B = n, cd(t, B);
    }
    return Ln(e, t, l, n), t.child;
  }
  function kD(e, t, n) {
    var r = t.pendingProps;
    return Ln(e, t, r, n), t.child;
  }
  function OD(e, t, n) {
    var r = t.pendingProps.children;
    return Ln(e, t, r, n), t.child;
  }
  function LD(e, t, n) {
    {
      t.flags |= Ge;
      {
        var r = t.stateNode;
        r.effectDuration = 0, r.passiveEffectDuration = 0;
      }
    }
    var l = t.pendingProps, f = l.children;
    return Ln(e, t, f, n), t.child;
  }
  function s0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= ai, t.flags |= vp);
  }
  function tv(e, t, n, r, l) {
    if (t.type !== t.elementType) {
      var f = n.propTypes;
      f && Ua(
        f,
        r,
        // Resolved props
        "prop",
        qe(n)
      );
    }
    var h;
    {
      var b = is(t, n, !0);
      h = os(t, b);
    }
    var S, E;
    ds(t, l), pl(t);
    {
      if (pu.current = t, ta(!0), S = ys(e, t, n, r, h, l), E = bs(), t.mode & Tt) {
        tn(!0);
        try {
          S = ys(e, t, n, r, h, l), E = bs();
        } finally {
          tn(!1);
        }
      }
      ta(!1);
    }
    return Jo(), e !== null && !Ba ? (bx(e, t, l), Fr(e, t, l)) : (ln() && E && _h(t), t.flags |= Ho, Ln(e, t, S, l), t.child);
  }
  function l0(e, t, n, r, l) {
    {
      switch (GO(t)) {
        case !1: {
          var f = t.stateNode, h = t.type, b = new h(t.memoizedProps, f.context), S = b.state;
          f.updater.enqueueSetState(f, S, null);
          break;
        }
        case !0: {
          t.flags |= tt, t.flags |= On;
          var E = new Error("Simulated error coming from DevTools"), R = bl(l);
          t.lanes = Ae(t.lanes, R);
          var P = Gm(t, mo(E, t), R);
          nm(t, P);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var _ = n.propTypes;
        _ && Ua(
          _,
          r,
          // Resolved props
          "prop",
          qe(n)
        );
      }
    }
    var B;
    ar(n) ? (B = !0, uf(t)) : B = !1, ds(t, l);
    var J = t.stateNode, W;
    J === null ? (Zf(e, t), qx(t, n, r), Ym(t, n, r, l), W = !0) : e === null ? W = SD(t, n, r, l) : W = ND(e, t, n, r, l);
    var re = nv(e, t, n, W, B, l);
    {
      var xe = t.stateNode;
      W && xe.props !== r && (vo || u("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t) || "a component"), vo = !0);
    }
    return re;
  }
  function nv(e, t, n, r, l, f) {
    s0(e, t);
    var h = (t.flags & tt) !== Ee;
    if (!r && !h)
      return l && Bb(t, n, !1), Fr(e, t, f);
    var b = t.stateNode;
    pu.current = t;
    var S;
    if (h && typeof n.getDerivedStateFromError != "function")
      S = null, Yx();
    else {
      pl(t);
      {
        if (ta(!0), S = b.render(), t.mode & Tt) {
          tn(!0);
          try {
            b.render();
          } finally {
            tn(!1);
          }
        }
        ta(!1);
      }
      Jo();
    }
    return t.flags |= Ho, e !== null && h ? DD(e, t, S, f) : Ln(e, t, S, f), t.memoizedState = b.state, l && Bb(t, n, !0), t.child;
  }
  function u0(e) {
    var t = e.stateNode;
    t.pendingContext ? $b(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $b(e, t.context, !1), am(e, t.containerInfo);
  }
  function MD(e, t, n) {
    if (u0(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var r = t.pendingProps, l = t.memoizedState, f = l.element;
    dx(e, t), Rf(t, r, null, n);
    var h = t.memoizedState;
    t.stateNode;
    var b = h.element;
    if (l.isDehydrated) {
      var S = {
        element: b,
        isDehydrated: !1,
        cache: h.cache,
        pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
        transitions: h.transitions
      }, E = t.updateQueue;
      if (E.baseState = S, t.memoizedState = S, t.flags & Rr) {
        var R = mo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return c0(e, t, b, n, R);
      } else if (b !== f) {
        var P = mo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return c0(e, t, b, n, P);
      } else {
        PT(t);
        var _ = ix(t, null, b, n);
        t.child = _;
        for (var B = _; B; )
          B.flags = B.flags & ~_t | jr, B = B.sibling;
      }
    } else {
      if (us(), b === f)
        return Fr(e, t, n);
      Ln(e, t, b, n);
    }
    return t.child;
  }
  function c0(e, t, n, r, l) {
    return us(), $h(l), t.flags |= Rr, Ln(e, t, n, r), t.child;
  }
  function AD(e, t, n) {
    vx(t), e === null && zh(t);
    var r = t.type, l = t.pendingProps, f = e !== null ? e.memoizedProps : null, h = l.children, b = Sh(r, l);
    return b ? h = null : f !== null && Sh(r, f) && (t.flags |= cl), s0(e, t), Ln(e, t, h, n), t.child;
  }
  function _D(e, t) {
    return e === null && zh(t), null;
  }
  function PD(e, t, n, r) {
    Zf(e, t);
    var l = t.pendingProps, f = n, h = f._payload, b = f._init, S = b(h);
    t.type = S;
    var E = t.tag = _O(S), R = Ha(S, l), P;
    switch (E) {
      case v:
        return av(t, S), t.type = S = js(S), P = tv(null, t, S, R, r), P;
      case p:
        return t.type = S = Mv(S), P = l0(null, t, S, R, r), P;
      case V:
        return t.type = S = Av(S), P = a0(null, t, S, R, r), P;
      case L: {
        if (t.type !== t.elementType) {
          var _ = S.propTypes;
          _ && Ua(
            _,
            R,
            // Resolved for outer only
            "prop",
            qe(S)
          );
        }
        return P = r0(
          null,
          t,
          S,
          Ha(S.type, R),
          // The inner type can have defaults too
          r
        ), P;
      }
    }
    var B = "";
    throw S !== null && typeof S == "object" && S.$$typeof === Fe && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + B));
  }
  function UD(e, t, n, r, l) {
    Zf(e, t), t.tag = p;
    var f;
    return ar(n) ? (f = !0, uf(t)) : f = !1, ds(t, l), qx(t, n, r), Ym(t, n, r, l), nv(null, t, n, !0, f, l);
  }
  function VD(e, t, n, r) {
    Zf(e, t);
    var l = t.pendingProps, f;
    {
      var h = is(t, n, !1);
      f = os(t, h);
    }
    ds(t, r);
    var b, S;
    pl(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var E = qe(n) || "Unknown";
        Xm[E] || (u("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), Xm[E] = !0);
      }
      t.mode & Tt && Fa.recordLegacyContextWarning(t, null), ta(!0), pu.current = t, b = ys(null, t, n, l, f, r), S = bs(), ta(!1);
    }
    if (Jo(), t.flags |= Ho, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
      var R = qe(n) || "Unknown";
      hu[R] || (u("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), hu[R] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
    ) {
      {
        var P = qe(n) || "Unknown";
        hu[P] || (u("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), hu[P] = !0);
      }
      t.tag = p, t.memoizedState = null, t.updateQueue = null;
      var _ = !1;
      return ar(n) ? (_ = !0, uf(t)) : _ = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, tm(t), Xx(t, b), Ym(t, n, l, r), nv(null, t, n, !0, _, r);
    } else {
      if (t.tag = v, t.mode & Tt) {
        tn(!0);
        try {
          b = ys(null, t, n, l, f, r), S = bs();
        } finally {
          tn(!1);
        }
      }
      return ln() && S && _h(t), Ln(null, t, b, r), av(t, n), t.child;
    }
  }
  function av(e, t) {
    {
      if (t && t.childContextTypes && u("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", r = Zr();
        r && (n += `

Check the render method of \`` + r + "`.");
        var l = r || "", f = e._debugSource;
        f && (l = f.fileName + ":" + f.lineNumber), Zm[l] || (Zm[l] = !0, u("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var h = qe(t) || "Unknown";
        mu[h] || (u("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", h), mu[h] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var b = qe(t) || "Unknown";
        Qm[b] || (u("%s: Function components do not support getDerivedStateFromProps.", b), Qm[b] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var S = qe(t) || "Unknown";
        qm[S] || (u("%s: Function components do not support contextType.", S), qm[S] = !0);
      }
    }
  }
  var rv = {
    dehydrated: null,
    treeContext: null,
    retryLane: nn
  };
  function iv(e) {
    return {
      baseLanes: e,
      cachePool: TD(),
      transitions: null
    };
  }
  function FD(e, t) {
    var n = null;
    return {
      baseLanes: Ae(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function zD(e, t, n, r) {
    if (t !== null) {
      var l = t.memoizedState;
      if (l === null)
        return !1;
    }
    return om(e, ru);
  }
  function $D(e, t) {
    return Oc(e.childLanes, t);
  }
  function f0(e, t, n) {
    var r = t.pendingProps;
    XO(t) && (t.flags |= tt);
    var l = za.current, f = !1, h = (t.flags & tt) !== Ee;
    if (h || zD(l, e) ? (f = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (l = iD(l, yx)), l = hs(l), gi(t, l), e === null) {
      zh(t);
      var b = t.memoizedState;
      if (b !== null) {
        var S = b.dehydrated;
        if (S !== null)
          return YD(t, S);
      }
      var E = r.children, R = r.fallback;
      if (f) {
        var P = HD(t, E, R, n), _ = t.child;
        return _.memoizedState = iv(n), t.memoizedState = rv, P;
      } else
        return ov(t, E);
    } else {
      var B = e.memoizedState;
      if (B !== null) {
        var J = B.dehydrated;
        if (J !== null)
          return WD(e, t, h, r, J, B, n);
      }
      if (f) {
        var W = r.fallback, re = r.children, xe = ID(e, t, re, W, n), me = t.child, Ke = e.child.memoizedState;
        return me.memoizedState = Ke === null ? iv(n) : FD(Ke, n), me.childLanes = $D(e, n), t.memoizedState = rv, xe;
      } else {
        var ze = r.children, $ = BD(e, t, ze, n);
        return t.memoizedState = null, $;
      }
    }
  }
  function ov(e, t, n) {
    var r = e.mode, l = {
      mode: "visible",
      children: t
    }, f = sv(l, r);
    return f.return = e, e.child = f, f;
  }
  function HD(e, t, n, r) {
    var l = e.mode, f = e.child, h = {
      mode: "hidden",
      children: t
    }, b, S;
    return (l & Ye) === Se && f !== null ? (b = f, b.childLanes = q, b.pendingProps = h, e.mode & ot && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), S = Ci(n, l, r, null)) : (b = sv(h, l), S = Ci(n, l, r, null)), b.return = e, S.return = e, b.sibling = S, e.child = b, S;
  }
  function sv(e, t, n) {
    return dS(e, t, q, null);
  }
  function d0(e, t) {
    return So(e, t);
  }
  function BD(e, t, n, r) {
    var l = e.child, f = l.sibling, h = d0(l, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Ye) === Se && (h.lanes = r), h.return = t, h.sibling = null, f !== null) {
      var b = t.deletions;
      b === null ? (t.deletions = [f], t.flags |= Wi) : b.push(f);
    }
    return t.child = h, h;
  }
  function ID(e, t, n, r, l) {
    var f = t.mode, h = e.child, b = h.sibling, S = {
      mode: "hidden",
      children: n
    }, E;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (f & Ye) === Se && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== h
    ) {
      var R = t.child;
      E = R, E.childLanes = q, E.pendingProps = S, t.mode & ot && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = h.selfBaseDuration, E.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
    } else
      E = d0(h, S), E.subtreeFlags = h.subtreeFlags & Dr;
    var P;
    return b !== null ? P = So(b, r) : (P = Ci(r, f, l, null), P.flags |= _t), P.return = t, E.return = t, E.sibling = P, t.child = E, P;
  }
  function Qf(e, t, n, r) {
    r !== null && $h(r), cs(t, e.child, null, n);
    var l = t.pendingProps, f = l.children, h = ov(t, f);
    return h.flags |= _t, t.memoizedState = null, h;
  }
  function JD(e, t, n, r, l) {
    var f = t.mode, h = {
      mode: "visible",
      children: n
    }, b = sv(h, f), S = Ci(r, f, l, null);
    return S.flags |= _t, b.return = t, S.return = t, b.sibling = S, t.child = b, (t.mode & Ye) !== Se && cs(t, e.child, null, l), S;
  }
  function YD(e, t, n) {
    return (e.mode & Ye) === Se ? (u("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : Ch(t) ? e.lanes = Zi : e.lanes = na, null;
  }
  function WD(e, t, n, r, l, f, h) {
    if (n)
      if (t.flags & Rr) {
        t.flags &= ~Rr;
        var $ = Wm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Qf(e, t, h, $);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= tt, null;
        var K = r.children, H = r.fallback, Z = JD(e, t, K, H, h), le = t.child;
        return le.memoizedState = iv(h), t.memoizedState = rv, Z;
      }
    else {
      if (AT(), (t.mode & Ye) === Se)
        return Qf(
          e,
          t,
          h,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Ch(l)) {
        var b, S, E;
        {
          var R = qj(l);
          b = R.digest, S = R.message, E = R.stack;
        }
        var P;
        S ? P = new Error(S) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var _ = Wm(P, b, E);
        return Qf(e, t, h, _);
      }
      var B = aa(h, e.childLanes);
      if (Ba || B) {
        var J = ud();
        if (J !== null) {
          var W = aC(J, h);
          if (W !== nn && W !== f.retryLane) {
            f.retryLane = W;
            var re = pt;
            Bn(e, W), Xt(J, e, W, re);
          }
        }
        Tv();
        var xe = Wm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return Qf(e, t, h, xe);
      } else if (_b(l)) {
        t.flags |= tt, t.child = e.child;
        var me = yO.bind(null, e);
        return Qj(l, me), null;
      } else {
        UT(t, l, f.treeContext);
        var Ke = r.children, ze = ov(t, Ke);
        return ze.flags |= jr, ze;
      }
    }
  }
  function p0(e, t, n) {
    e.lanes = Ae(e.lanes, t);
    var r = e.alternate;
    r !== null && (r.lanes = Ae(r.lanes, t)), qh(e.return, t, n);
  }
  function KD(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === F) {
        var l = r.memoizedState;
        l !== null && p0(r, n, e);
      } else if (r.tag === ge)
        p0(r, n, e);
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
  function GD(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate;
      r !== null && kf(r) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function XD(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ev[e])
      if (ev[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            u('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            u('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            u('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        u('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function qD(e, t) {
    e !== void 0 && !qf[e] && (e !== "collapsed" && e !== "hidden" ? (qf[e] = !0, u('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qf[e] = !0, u('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function h0(e, t) {
    {
      var n = et(e), r = !n && typeof xr(e) == "function";
      if (n || r) {
        var l = n ? "array" : "iterable";
        return u("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
      }
    }
    return !0;
  }
  function QD(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (et(e)) {
        for (var n = 0; n < e.length; n++)
          if (!h0(e[n], n))
            return;
      } else {
        var r = xr(e);
        if (typeof r == "function") {
          var l = r.call(e);
          if (l)
            for (var f = l.next(), h = 0; !f.done; f = l.next()) {
              if (!h0(f.value, h))
                return;
              h++;
            }
        } else
          u('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function lv(e, t, n, r, l) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = r, f.tail = n, f.tailMode = l);
  }
  function m0(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, f = r.tail, h = r.children;
    XD(l), qD(f, l), QD(h, l), Ln(e, t, h, n);
    var b = za.current, S = om(b, ru);
    if (S)
      b = sm(b, ru), t.flags |= tt;
    else {
      var E = e !== null && (e.flags & tt) !== Ee;
      E && KD(t, t.child, n), b = hs(b);
    }
    if (gi(t, b), (t.mode & Ye) === Se)
      t.memoizedState = null;
    else
      switch (l) {
        case "forwards": {
          var R = GD(t.child), P;
          R === null ? (P = t.child, t.child = null) : (P = R.sibling, R.sibling = null), lv(
            t,
            !1,
            // isBackwards
            P,
            R,
            f
          );
          break;
        }
        case "backwards": {
          var _ = null, B = t.child;
          for (t.child = null; B !== null; ) {
            var J = B.alternate;
            if (J !== null && kf(J) === null) {
              t.child = B;
              break;
            }
            var W = B.sibling;
            B.sibling = _, _ = B, B = W;
          }
          lv(
            t,
            !0,
            // isBackwards
            _,
            null,
            // last
            f
          );
          break;
        }
        case "together": {
          lv(
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
  function ZD(e, t, n) {
    am(t, t.stateNode.containerInfo);
    var r = t.pendingProps;
    return e === null ? t.child = cs(t, null, r, n) : Ln(e, t, r, n), t.child;
  }
  var v0 = !1;
  function ek(e, t, n) {
    var r = t.type, l = r._context, f = t.pendingProps, h = t.memoizedProps, b = f.value;
    {
      "value" in f || v0 || (v0 = !0, u("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var S = t.type.propTypes;
      S && Ua(S, f, "prop", "Context.Provider");
    }
    if (lx(t, l, b), h !== null) {
      var E = h.value;
      if (oa(E, b)) {
        if (h.children === f.children && !sf())
          return Fr(e, t, n);
      } else
        XT(t, l, n);
    }
    var R = f.children;
    return Ln(e, t, R, n), t.child;
  }
  var g0 = !1;
  function tk(e, t, n) {
    var r = t.type;
    r._context === void 0 ? r !== r.Consumer && (g0 || (g0 = !0, u("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
    var l = t.pendingProps, f = l.children;
    typeof f != "function" && u("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ds(t, n);
    var h = Pt(r);
    pl(t);
    var b;
    return pu.current = t, ta(!0), b = f(h), ta(!1), Jo(), t.flags |= Ho, Ln(e, t, b, n), t.child;
  }
  function vu() {
    Ba = !0;
  }
  function Zf(e, t) {
    (t.mode & Ye) === Se && e !== null && (e.alternate = null, t.alternate = null, t.flags |= _t);
  }
  function Fr(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), Yx(), Tu(t.lanes), aa(n, t.childLanes) ? (KT(e, t), t.child) : null;
  }
  function nk(e, t, n) {
    {
      var r = t.return;
      if (r === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === r.child)
        r.child = n;
      else {
        var l = r.child;
        if (l === null)
          throw new Error("Expected parent to have a child.");
        for (; l.sibling !== t; )
          if (l = l.sibling, l === null)
            throw new Error("Expected to find the previous sibling.");
        l.sibling = n;
      }
      var f = r.deletions;
      return f === null ? (r.deletions = [e], r.flags |= Wi) : f.push(e), n.flags |= _t, n;
    }
  }
  function uv(e, t) {
    var n = e.lanes;
    return !!aa(n, t);
  }
  function ak(e, t, n) {
    switch (t.tag) {
      case y:
        u0(t), t.stateNode, us();
        break;
      case C:
        vx(t);
        break;
      case p: {
        var r = t.type;
        ar(r) && uf(t);
        break;
      }
      case x:
        am(t, t.stateNode.containerInfo);
        break;
      case M: {
        var l = t.memoizedProps.value, f = t.type._context;
        lx(t, f, l);
        break;
      }
      case D:
        {
          var h = aa(n, t.childLanes);
          h && (t.flags |= Ge);
          {
            var b = t.stateNode;
            b.effectDuration = 0, b.passiveEffectDuration = 0;
          }
        }
        break;
      case F: {
        var S = t.memoizedState;
        if (S !== null) {
          if (S.dehydrated !== null)
            return gi(t, hs(za.current)), t.flags |= tt, null;
          var E = t.child, R = E.childLanes;
          if (aa(n, R))
            return f0(e, t, n);
          gi(t, hs(za.current));
          var P = Fr(e, t, n);
          return P !== null ? P.sibling : null;
        } else
          gi(t, hs(za.current));
        break;
      }
      case ge: {
        var _ = (e.flags & tt) !== Ee, B = aa(n, t.childLanes);
        if (_) {
          if (B)
            return m0(e, t, n);
          t.flags |= tt;
        }
        var J = t.memoizedState;
        if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), gi(t, za.current), B)
          break;
        return null;
      }
      case de:
      case ye:
        return t.lanes = q, o0(e, t, n);
    }
    return Fr(e, t, n);
  }
  function y0(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return nk(e, t, Fv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var r = e.memoizedProps, l = t.pendingProps;
      if (r !== l || sf() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Ba = !0;
      else {
        var f = uv(e, n);
        if (!f && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & tt) === Ee)
          return Ba = !1, ak(e, t, n);
        (e.flags & mp) !== Ee ? Ba = !0 : Ba = !1;
      }
    } else if (Ba = !1, ln() && TT(t)) {
      var h = t.index, b = DT();
      Yb(t, b, h);
    }
    switch (t.lanes = q, t.tag) {
      case m:
        return VD(e, t, t.type, n);
      case ce: {
        var S = t.elementType;
        return PD(e, t, S, n);
      }
      case v: {
        var E = t.type, R = t.pendingProps, P = t.elementType === E ? R : Ha(E, R);
        return tv(e, t, E, P, n);
      }
      case p: {
        var _ = t.type, B = t.pendingProps, J = t.elementType === _ ? B : Ha(_, B);
        return l0(e, t, _, J, n);
      }
      case y:
        return MD(e, t, n);
      case C:
        return AD(e, t, n);
      case j:
        return _D(e, t);
      case F:
        return f0(e, t, n);
      case x:
        return ZD(e, t, n);
      case V: {
        var W = t.type, re = t.pendingProps, xe = t.elementType === W ? re : Ha(W, re);
        return a0(e, t, W, xe, n);
      }
      case U:
        return kD(e, t, n);
      case T:
        return OD(e, t, n);
      case D:
        return LD(e, t, n);
      case M:
        return ek(e, t, n);
      case A:
        return tk(e, t, n);
      case L: {
        var me = t.type, Ke = t.pendingProps, ze = Ha(me, Ke);
        if (t.type !== t.elementType) {
          var $ = me.propTypes;
          $ && Ua(
            $,
            ze,
            // Resolved for outer only
            "prop",
            qe(me)
          );
        }
        return ze = Ha(me.type, ze), r0(e, t, me, ze, n);
      }
      case G:
        return i0(e, t, t.type, t.pendingProps, n);
      case ve: {
        var K = t.type, H = t.pendingProps, Z = t.elementType === K ? H : Ha(K, H);
        return UD(e, t, K, Z, n);
      }
      case ge:
        return m0(e, t, n);
      case Ve:
        break;
      case de:
        return o0(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function xs(e) {
    e.flags |= Ge;
  }
  function b0(e) {
    e.flags |= ai, e.flags |= vp;
  }
  var x0, cv, S0, N0;
  x0 = function(e, t, n, r) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === C || l.tag === j)
        Cj(e, l.stateNode);
      else if (l.tag !== x) {
        if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
      }
      if (l === t)
        return;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, cv = function(e, t) {
  }, S0 = function(e, t, n, r, l) {
    var f = e.memoizedProps;
    if (f !== r) {
      var h = t.stateNode, b = rm(), S = jj(h, n, f, r, l, b);
      t.updateQueue = S, S && xs(t);
    }
  }, N0 = function(e, t, n, r) {
    n !== r && xs(t);
  };
  function gu(e, t) {
    if (!ln())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        }
        case "collapsed": {
          for (var l = e.tail, f = null; l !== null; )
            l.alternate !== null && (f = l), l = l.sibling;
          f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
          break;
        }
      }
  }
  function cn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = q, r = Ee;
    if (t) {
      if ((e.mode & ot) !== Se) {
        for (var S = e.selfBaseDuration, E = e.child; E !== null; )
          n = Ae(n, Ae(E.lanes, E.childLanes)), r |= E.subtreeFlags & Dr, r |= E.flags & Dr, S += E.treeBaseDuration, E = E.sibling;
        e.treeBaseDuration = S;
      } else
        for (var R = e.child; R !== null; )
          n = Ae(n, Ae(R.lanes, R.childLanes)), r |= R.subtreeFlags & Dr, r |= R.flags & Dr, R.return = e, R = R.sibling;
      e.subtreeFlags |= r;
    } else {
      if ((e.mode & ot) !== Se) {
        for (var l = e.actualDuration, f = e.selfBaseDuration, h = e.child; h !== null; )
          n = Ae(n, Ae(h.lanes, h.childLanes)), r |= h.subtreeFlags, r |= h.flags, l += h.actualDuration, f += h.treeBaseDuration, h = h.sibling;
        e.actualDuration = l, e.treeBaseDuration = f;
      } else
        for (var b = e.child; b !== null; )
          n = Ae(n, Ae(b.lanes, b.childLanes)), r |= b.subtreeFlags, r |= b.flags, b.return = e, b = b.sibling;
      e.subtreeFlags |= r;
    }
    return e.childLanes = n, t;
  }
  function rk(e, t, n) {
    if (HT() && (t.mode & Ye) !== Se && (t.flags & tt) === Ee)
      return Zb(t), us(), t.flags |= Rr | fl | On, !1;
    var r = hf(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (zT(t), cn(t), (t.mode & ot) !== Se) {
          var l = n !== null;
          if (l) {
            var f = t.child;
            f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (us(), (t.flags & tt) === Ee && (t.memoizedState = null), t.flags |= Ge, cn(t), (t.mode & ot) !== Se) {
          var h = n !== null;
          if (h) {
            var b = t.child;
            b !== null && (t.treeBaseDuration -= b.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return ex(), !0;
  }
  function w0(e, t, n) {
    var r = t.pendingProps;
    switch (Ph(t), t.tag) {
      case m:
      case ce:
      case G:
      case v:
      case V:
      case U:
      case T:
      case D:
      case A:
      case L:
        return cn(t), null;
      case p: {
        var l = t.type;
        return ar(l) && lf(t), cn(t), null;
      }
      case y: {
        var f = t.stateNode;
        if (ps(t), Lh(t), um(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
          var h = hf(t);
          if (h)
            xs(t);
          else if (e !== null) {
            var b = e.memoizedState;
            // Check if this is a client root
            (!b.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & Rr) !== Ee) && (t.flags |= Ki, ex());
          }
        }
        return cv(e, t), cn(t), null;
      }
      case C: {
        im(t);
        var S = mx(), E = t.type;
        if (e !== null && t.stateNode != null)
          S0(e, t, E, r, S), e.ref !== t.ref && b0(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return cn(t), null;
          }
          var R = rm(), P = hf(t);
          if (P)
            VT(t, S, R) && xs(t);
          else {
            var _ = Ej(E, r, S, R, t);
            x0(_, t, !1, !1), t.stateNode = _, Rj(_, E, r, S) && xs(t);
          }
          t.ref !== null && b0(t);
        }
        return cn(t), null;
      }
      case j: {
        var B = r;
        if (e && t.stateNode != null) {
          var J = e.memoizedProps;
          N0(e, t, J, B);
        } else {
          if (typeof B != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var W = mx(), re = rm(), xe = hf(t);
          xe ? FT(t) && xs(t) : t.stateNode = Tj(B, W, re, t);
        }
        return cn(t), null;
      }
      case F: {
        ms(t);
        var me = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ke = rk(e, t, me);
          if (!Ke)
            return t.flags & On ? t : null;
        }
        if ((t.flags & tt) !== Ee)
          return t.lanes = n, (t.mode & ot) !== Se && Am(t), t;
        var ze = me !== null, $ = e !== null && e.memoizedState !== null;
        if (ze !== $ && ze) {
          var K = t.child;
          if (K.flags |= Gi, (t.mode & Ye) !== Se) {
            var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Vt);
            H || om(za.current, yx) ? iO() : Tv();
          }
        }
        var Z = t.updateQueue;
        if (Z !== null && (t.flags |= Ge), cn(t), (t.mode & ot) !== Se && ze) {
          var le = t.child;
          le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
        }
        return null;
      }
      case x:
        return ps(t), cv(e, t), e === null && ST(t.stateNode.containerInfo), cn(t), null;
      case M:
        var ie = t.type._context;
        return Xh(ie, t), cn(t), null;
      case ve: {
        var Re = t.type;
        return ar(Re) && lf(t), cn(t), null;
      }
      case ge: {
        ms(t);
        var Oe = t.memoizedState;
        if (Oe === null)
          return cn(t), null;
        var lt = (t.flags & tt) !== Ee, Qe = Oe.rendering;
        if (Qe === null)
          if (lt)
            gu(Oe, !1);
          else {
            var Lt = sO() && (e === null || (e.flags & tt) === Ee);
            if (!Lt)
              for (var Ze = t.child; Ze !== null; ) {
                var Dt = kf(Ze);
                if (Dt !== null) {
                  lt = !0, t.flags |= tt, gu(Oe, !1);
                  var Rn = Dt.updateQueue;
                  return Rn !== null && (t.updateQueue = Rn, t.flags |= Ge), t.subtreeFlags = Ee, GT(t, n), gi(t, sm(za.current, ru)), t.child;
                }
                Ze = Ze.sibling;
              }
            Oe.tail !== null && en() > I0() && (t.flags |= tt, lt = !0, gu(Oe, !1), t.lanes = Ny);
          }
        else {
          if (!lt) {
            var mn = kf(Qe);
            if (mn !== null) {
              t.flags |= tt, lt = !0;
              var ua = mn.updateQueue;
              if (ua !== null && (t.updateQueue = ua, t.flags |= Ge), gu(Oe, !0), Oe.tail === null && Oe.tailMode === "hidden" && !Qe.alternate && !ln())
                return cn(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            en() * 2 - Oe.renderingStartTime > I0() && n !== na && (t.flags |= tt, lt = !0, gu(Oe, !1), t.lanes = Ny);
          }
          if (Oe.isBackwards)
            Qe.sibling = t.child, t.child = Qe;
          else {
            var _n = Oe.last;
            _n !== null ? _n.sibling = Qe : t.child = Qe, Oe.last = Qe;
          }
        }
        if (Oe.tail !== null) {
          var Pn = Oe.tail;
          Oe.rendering = Pn, Oe.tail = Pn.sibling, Oe.renderingStartTime = en(), Pn.sibling = null;
          var jn = za.current;
          return lt ? jn = sm(jn, ru) : jn = hs(jn), gi(t, jn), Pn;
        }
        return cn(t), null;
      }
      case Ve:
        break;
      case de:
      case ye: {
        jv(t);
        var Ir = t.memoizedState, Ts = Ir !== null;
        if (e !== null) {
          var Mu = e.memoizedState, fr = Mu !== null;
          fr !== Ts && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !Be && (t.flags |= Gi);
        }
        return !Ts || (t.mode & Ye) === Se ? cn(t) : aa(cr, na) && (cn(t), t.subtreeFlags & (_t | Ge) && (t.flags |= Gi)), null;
      }
      case he:
        return null;
      case Pe:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function ik(e, t, n) {
    switch (Ph(t), t.tag) {
      case p: {
        var r = t.type;
        ar(r) && lf(t);
        var l = t.flags;
        return l & On ? (t.flags = l & ~On | tt, (t.mode & ot) !== Se && Am(t), t) : null;
      }
      case y: {
        t.stateNode, ps(t), Lh(t), um();
        var f = t.flags;
        return (f & On) !== Ee && (f & tt) === Ee ? (t.flags = f & ~On | tt, t) : null;
      }
      case C:
        return im(t), null;
      case F: {
        ms(t);
        var h = t.memoizedState;
        if (h !== null && h.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          us();
        }
        var b = t.flags;
        return b & On ? (t.flags = b & ~On | tt, (t.mode & ot) !== Se && Am(t), t) : null;
      }
      case ge:
        return ms(t), null;
      case x:
        return ps(t), null;
      case M:
        var S = t.type._context;
        return Xh(S, t), null;
      case de:
      case ye:
        return jv(t), null;
      case he:
        return null;
      default:
        return null;
    }
  }
  function E0(e, t, n) {
    switch (Ph(t), t.tag) {
      case p: {
        var r = t.type.childContextTypes;
        r != null && lf(t);
        break;
      }
      case y: {
        t.stateNode, ps(t), Lh(t), um();
        break;
      }
      case C: {
        im(t);
        break;
      }
      case x:
        ps(t);
        break;
      case F:
        ms(t);
        break;
      case ge:
        ms(t);
        break;
      case M:
        var l = t.type._context;
        Xh(l, t);
        break;
      case de:
      case ye:
        jv(t);
        break;
    }
  }
  var C0 = null;
  C0 = /* @__PURE__ */ new Set();
  var ed = !1, fn = !1, ok = typeof WeakSet == "function" ? WeakSet : Set, ue = null, Ss = null, Ns = null;
  function sk(e) {
    dp(null, function() {
      throw e;
    }), pp();
  }
  var lk = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ot)
      try {
        lr(), t.componentWillUnmount();
      } finally {
        sr(e);
      }
    else
      t.componentWillUnmount();
  };
  function R0(e, t) {
    try {
      xi(It, e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function fv(e, t, n) {
    try {
      lk(e, n);
    } catch (r) {
      dt(e, t, r);
    }
  }
  function uk(e, t, n) {
    try {
      n.componentDidMount();
    } catch (r) {
      dt(e, t, r);
    }
  }
  function j0(e, t) {
    try {
      D0(e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function ws(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var r;
        try {
          if (ja && Ta && e.mode & ot)
            try {
              lr(), r = n(null);
            } finally {
              sr(e);
            }
          else
            r = n(null);
        } catch (l) {
          dt(e, t, l);
        }
        typeof r == "function" && u("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
      } else
        n.current = null;
  }
  function td(e, t, n) {
    try {
      n();
    } catch (r) {
      dt(e, t, r);
    }
  }
  var T0 = !1;
  function ck(e, t) {
    Nj(e.containerInfo), ue = t, fk();
    var n = T0;
    return T0 = !1, n;
  }
  function fk() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      (e.subtreeFlags & yp) !== Ee && t !== null ? (t.return = e, ue = t) : dk();
    }
  }
  function dk() {
    for (; ue !== null; ) {
      var e = ue;
      Et(e);
      try {
        pk(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      Zt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function pk(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Ki) !== Ee) {
      switch (Et(e), e.tag) {
        case v:
        case V:
        case G:
          break;
        case p: {
          if (t !== null) {
            var r = t.memoizedProps, l = t.memoizedState, f = e.stateNode;
            e.type === e.elementType && !vo && (f.props !== e.memoizedProps && u("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(e) || "instance"), f.state !== e.memoizedState && u("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(e) || "instance"));
            var h = f.getSnapshotBeforeUpdate(e.elementType === e.type ? r : Ha(e.type, r), l);
            {
              var b = C0;
              h === void 0 && !b.has(e.type) && (b.add(e.type), u("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(e)));
            }
            f.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        }
        case y: {
          {
            var S = e.stateNode;
            Wj(S.containerInfo);
          }
          break;
        }
        case C:
        case j:
        case x:
        case ve:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Zt();
    }
  }
  function Ia(e, t, n) {
    var r = t.updateQueue, l = r !== null ? r.lastEffect : null;
    if (l !== null) {
      var f = l.next, h = f;
      do {
        if ((h.tag & e) === e) {
          var b = h.destroy;
          h.destroy = void 0, b !== void 0 && ((e & un) !== In ? TE(t) : (e & It) !== In && gy(t), (e & rr) !== In && ku(!0), td(t, n, b), (e & rr) !== In && ku(!1), (e & un) !== In ? DE() : (e & It) !== In && yy());
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function xi(e, t) {
    var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
    if (r !== null) {
      var l = r.next, f = l;
      do {
        if ((f.tag & e) === e) {
          (e & un) !== In ? RE(t) : (e & It) !== In && kE(t);
          var h = f.create;
          (e & rr) !== In && ku(!0), f.destroy = h(), (e & rr) !== In && ku(!1), (e & un) !== In ? jE() : (e & It) !== In && OE();
          {
            var b = f.destroy;
            if (b !== void 0 && typeof b != "function") {
              var S = void 0;
              (f.tag & It) !== Ee ? S = "useLayoutEffect" : (f.tag & rr) !== Ee ? S = "useInsertionEffect" : S = "useEffect";
              var E = void 0;
              b === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof b.then == "function" ? E = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + b, u("%s must not return anything besides a function, which is used for clean-up.%s", S, E);
            }
          }
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function hk(e, t) {
    if ((t.flags & Ge) !== Ee)
      switch (t.tag) {
        case D: {
          var n = t.stateNode.passiveEffectDuration, r = t.memoizedProps, l = r.id, f = r.onPostCommit, h = Ix(), b = t.alternate === null ? "mount" : "update";
          Bx() && (b = "nested-update"), typeof f == "function" && f(l, b, n, h);
          var S = t.return;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case y:
                var E = S.stateNode;
                E.passiveEffectDuration += n;
                break e;
              case D:
                var R = S.stateNode;
                R.passiveEffectDuration += n;
                break e;
            }
            S = S.return;
          }
          break;
        }
      }
  }
  function mk(e, t, n, r) {
    if ((n.flags & dl) !== Ee)
      switch (n.tag) {
        case v:
        case V:
        case G: {
          if (!fn)
            if (n.mode & ot)
              try {
                lr(), xi(It | Bt, n);
              } finally {
                sr(n);
              }
            else
              xi(It | Bt, n);
          break;
        }
        case p: {
          var l = n.stateNode;
          if (n.flags & Ge && !fn)
            if (t === null)
              if (n.type === n.elementType && !vo && (l.props !== n.memoizedProps && u("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), l.state !== n.memoizedState && u("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & ot)
                try {
                  lr(), l.componentDidMount();
                } finally {
                  sr(n);
                }
              else
                l.componentDidMount();
            else {
              var f = n.elementType === n.type ? t.memoizedProps : Ha(n.type, t.memoizedProps), h = t.memoizedState;
              if (n.type === n.elementType && !vo && (l.props !== n.memoizedProps && u("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), l.state !== n.memoizedState && u("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), n.mode & ot)
                try {
                  lr(), l.componentDidUpdate(f, h, l.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  sr(n);
                }
              else
                l.componentDidUpdate(f, h, l.__reactInternalSnapshotBeforeUpdate);
            }
          var b = n.updateQueue;
          b !== null && (n.type === n.elementType && !vo && (l.props !== n.memoizedProps && u("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(n) || "instance"), l.state !== n.memoizedState && u("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(n) || "instance")), hx(n, b, l));
          break;
        }
        case y: {
          var S = n.updateQueue;
          if (S !== null) {
            var E = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case C:
                  E = n.child.stateNode;
                  break;
                case p:
                  E = n.child.stateNode;
                  break;
              }
            hx(n, S, E);
          }
          break;
        }
        case C: {
          var R = n.stateNode;
          if (t === null && n.flags & Ge) {
            var P = n.type, _ = n.memoizedProps;
            Mj(R, P, _);
          }
          break;
        }
        case j:
          break;
        case x:
          break;
        case D: {
          {
            var B = n.memoizedProps, J = B.onCommit, W = B.onRender, re = n.stateNode.effectDuration, xe = Ix(), me = t === null ? "mount" : "update";
            Bx() && (me = "nested-update"), typeof W == "function" && W(n.memoizedProps.id, me, n.actualDuration, n.treeBaseDuration, n.actualStartTime, xe);
            {
              typeof J == "function" && J(n.memoizedProps.id, me, re, xe), dO(n);
              var Ke = n.return;
              e: for (; Ke !== null; ) {
                switch (Ke.tag) {
                  case y:
                    var ze = Ke.stateNode;
                    ze.effectDuration += re;
                    break e;
                  case D:
                    var $ = Ke.stateNode;
                    $.effectDuration += re;
                    break e;
                }
                Ke = Ke.return;
              }
            }
          }
          break;
        }
        case F: {
          wk(e, n);
          break;
        }
        case ge:
        case ve:
        case Ve:
        case de:
        case ye:
        case Pe:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    fn || n.flags & ai && D0(n);
  }
  function vk(e) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        if (e.mode & ot)
          try {
            lr(), R0(e, e.return);
          } finally {
            sr(e);
          }
        else
          R0(e, e.return);
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && uk(e, e.return, t), j0(e, e.return);
        break;
      }
      case C: {
        j0(e, e.return);
        break;
      }
    }
  }
  function gk(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === C) {
        if (n === null) {
          n = r;
          try {
            var l = r.stateNode;
            t ? Bj(l) : Jj(r.stateNode, r.memoizedProps);
          } catch (h) {
            dt(e, e.return, h);
          }
        }
      } else if (r.tag === j) {
        if (n === null)
          try {
            var f = r.stateNode;
            t ? Ij(f) : Yj(f, r.memoizedProps);
          } catch (h) {
            dt(e, e.return, h);
          }
      } else if (!((r.tag === de || r.tag === ye) && r.memoizedState !== null && r !== e)) {
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
  function D0(e) {
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
        var l;
        if (e.mode & ot)
          try {
            lr(), l = t(r);
          } finally {
            sr(e);
          }
        else
          l = t(r);
        typeof l == "function" && u("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
      } else
        t.hasOwnProperty("current") || u("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e)), t.current = r;
    }
  }
  function yk(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function k0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, k0(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === C) {
        var n = e.stateNode;
        n !== null && ET(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function bk(e) {
    for (var t = e.return; t !== null; ) {
      if (O0(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function O0(e) {
    return e.tag === C || e.tag === y || e.tag === x;
  }
  function L0(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || O0(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== C && t.tag !== j && t.tag !== fe; ) {
        if (t.flags & _t || t.child === null || t.tag === x)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & _t))
        return t.stateNode;
    }
  }
  function xk(e) {
    var t = bk(e);
    switch (t.tag) {
      case C: {
        var n = t.stateNode;
        t.flags & cl && (Ab(n), t.flags &= ~cl);
        var r = L0(e);
        pv(e, r, n);
        break;
      }
      case y:
      case x: {
        var l = t.stateNode.containerInfo, f = L0(e);
        dv(e, f, l);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function dv(e, t, n) {
    var r = e.tag, l = r === C || r === j;
    if (l) {
      var f = e.stateNode;
      t ? Fj(n, f, t) : Uj(n, f);
    } else if (r !== x) {
      var h = e.child;
      if (h !== null) {
        dv(h, t, n);
        for (var b = h.sibling; b !== null; )
          dv(b, t, n), b = b.sibling;
      }
    }
  }
  function pv(e, t, n) {
    var r = e.tag, l = r === C || r === j;
    if (l) {
      var f = e.stateNode;
      t ? Vj(n, f, t) : Pj(n, f);
    } else if (r !== x) {
      var h = e.child;
      if (h !== null) {
        pv(h, t, n);
        for (var b = h.sibling; b !== null; )
          pv(b, t, n), b = b.sibling;
      }
    }
  }
  var dn = null, Ja = !1;
  function Sk(e, t, n) {
    {
      var r = t;
      e: for (; r !== null; ) {
        switch (r.tag) {
          case C: {
            dn = r.stateNode, Ja = !1;
            break e;
          }
          case y: {
            dn = r.stateNode.containerInfo, Ja = !0;
            break e;
          }
          case x: {
            dn = r.stateNode.containerInfo, Ja = !0;
            break e;
          }
        }
        r = r.return;
      }
      if (dn === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      M0(e, t, n), dn = null, Ja = !1;
    }
    yk(n);
  }
  function Si(e, t, n) {
    for (var r = n.child; r !== null; )
      M0(e, t, r), r = r.sibling;
  }
  function M0(e, t, n) {
    switch (NE(n), n.tag) {
      case C:
        fn || ws(n, t);
      case j: {
        {
          var r = dn, l = Ja;
          dn = null, Si(e, t, n), dn = r, Ja = l, dn !== null && (Ja ? $j(dn, n.stateNode) : zj(dn, n.stateNode));
        }
        return;
      }
      case fe: {
        dn !== null && (Ja ? Hj(dn, n.stateNode) : Eh(dn, n.stateNode));
        return;
      }
      case x: {
        {
          var f = dn, h = Ja;
          dn = n.stateNode.containerInfo, Ja = !0, Si(e, t, n), dn = f, Ja = h;
        }
        return;
      }
      case v:
      case V:
      case L:
      case G: {
        if (!fn) {
          var b = n.updateQueue;
          if (b !== null) {
            var S = b.lastEffect;
            if (S !== null) {
              var E = S.next, R = E;
              do {
                var P = R, _ = P.destroy, B = P.tag;
                _ !== void 0 && ((B & rr) !== In ? td(n, t, _) : (B & It) !== In && (gy(n), n.mode & ot ? (lr(), td(n, t, _), sr(n)) : td(n, t, _), yy())), R = R.next;
              } while (R !== E);
            }
          }
        }
        Si(e, t, n);
        return;
      }
      case p: {
        if (!fn) {
          ws(n, t);
          var J = n.stateNode;
          typeof J.componentWillUnmount == "function" && fv(n, t, J);
        }
        Si(e, t, n);
        return;
      }
      case Ve: {
        Si(e, t, n);
        return;
      }
      case de: {
        if (
          // TODO: Remove this dead flag
          n.mode & Ye
        ) {
          var W = fn;
          fn = W || n.memoizedState !== null, Si(e, t, n), fn = W;
        } else
          Si(e, t, n);
        break;
      }
      default: {
        Si(e, t, n);
        return;
      }
    }
  }
  function Nk(e) {
    e.memoizedState;
  }
  function wk(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var r = t.alternate;
      if (r !== null) {
        var l = r.memoizedState;
        if (l !== null) {
          var f = l.dehydrated;
          f !== null && sT(f);
        }
      }
    }
  }
  function A0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ok()), t.forEach(function(r) {
        var l = bO.bind(null, e, r);
        if (!n.has(r)) {
          if (n.add(r), _a)
            if (Ss !== null && Ns !== null)
              Du(Ns, Ss);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          r.then(l, l);
        }
      });
    }
  }
  function Ek(e, t, n) {
    Ss = n, Ns = e, Et(t), _0(t, e), Et(t), Ss = null, Ns = null;
  }
  function Ya(e, t, n) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var f = r[l];
        try {
          Sk(e, t, f);
        } catch (S) {
          dt(f, t, S);
        }
      }
    var h = cc();
    if (t.subtreeFlags & bp)
      for (var b = t.child; b !== null; )
        Et(b), _0(b, e), b = b.sibling;
    Et(h);
  }
  function _0(e, t, n) {
    var r = e.alternate, l = e.flags;
    switch (e.tag) {
      case v:
      case V:
      case L:
      case G: {
        if (Ya(t, e), ur(e), l & Ge) {
          try {
            Ia(rr | Bt, e, e.return), xi(rr | Bt, e);
          } catch (Re) {
            dt(e, e.return, Re);
          }
          if (e.mode & ot) {
            try {
              lr(), Ia(It | Bt, e, e.return);
            } catch (Re) {
              dt(e, e.return, Re);
            }
            sr(e);
          } else
            try {
              Ia(It | Bt, e, e.return);
            } catch (Re) {
              dt(e, e.return, Re);
            }
        }
        return;
      }
      case p: {
        Ya(t, e), ur(e), l & ai && r !== null && ws(r, r.return);
        return;
      }
      case C: {
        Ya(t, e), ur(e), l & ai && r !== null && ws(r, r.return);
        {
          if (e.flags & cl) {
            var f = e.stateNode;
            try {
              Ab(f);
            } catch (Re) {
              dt(e, e.return, Re);
            }
          }
          if (l & Ge) {
            var h = e.stateNode;
            if (h != null) {
              var b = e.memoizedProps, S = r !== null ? r.memoizedProps : b, E = e.type, R = e.updateQueue;
              if (e.updateQueue = null, R !== null)
                try {
                  Aj(h, R, E, S, b, e);
                } catch (Re) {
                  dt(e, e.return, Re);
                }
            }
          }
        }
        return;
      }
      case j: {
        if (Ya(t, e), ur(e), l & Ge) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var P = e.stateNode, _ = e.memoizedProps, B = r !== null ? r.memoizedProps : _;
          try {
            _j(P, B, _);
          } catch (Re) {
            dt(e, e.return, Re);
          }
        }
        return;
      }
      case y: {
        if (Ya(t, e), ur(e), l & Ge && r !== null) {
          var J = r.memoizedState;
          if (J.isDehydrated)
            try {
              oT(t.containerInfo);
            } catch (Re) {
              dt(e, e.return, Re);
            }
        }
        return;
      }
      case x: {
        Ya(t, e), ur(e);
        return;
      }
      case F: {
        Ya(t, e), ur(e);
        var W = e.child;
        if (W.flags & Gi) {
          var re = W.stateNode, xe = W.memoizedState, me = xe !== null;
          if (re.isHidden = me, me) {
            var Ke = W.alternate !== null && W.alternate.memoizedState !== null;
            Ke || rO();
          }
        }
        if (l & Ge) {
          try {
            Nk(e);
          } catch (Re) {
            dt(e, e.return, Re);
          }
          A0(e);
        }
        return;
      }
      case de: {
        var ze = r !== null && r.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Ye
        ) {
          var $ = fn;
          fn = $ || ze, Ya(t, e), fn = $;
        } else
          Ya(t, e);
        if (ur(e), l & Gi) {
          var K = e.stateNode, H = e.memoizedState, Z = H !== null, le = e;
          if (K.isHidden = Z, Z && !ze && (le.mode & Ye) !== Se) {
            ue = le;
            for (var ie = le.child; ie !== null; )
              ue = ie, Rk(ie), ie = ie.sibling;
          }
          gk(le, Z);
        }
        return;
      }
      case ge: {
        Ya(t, e), ur(e), l & Ge && A0(e);
        return;
      }
      case Ve:
        return;
      default: {
        Ya(t, e), ur(e);
        return;
      }
    }
  }
  function ur(e) {
    var t = e.flags;
    if (t & _t) {
      try {
        xk(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      e.flags &= ~_t;
    }
    t & jr && (e.flags &= ~jr);
  }
  function Ck(e, t, n) {
    Ss = n, Ns = t, ue = e, P0(e, t, n), Ss = null, Ns = null;
  }
  function P0(e, t, n) {
    for (var r = (e.mode & Ye) !== Se; ue !== null; ) {
      var l = ue, f = l.child;
      if (l.tag === de && r) {
        var h = l.memoizedState !== null, b = h || ed;
        if (b) {
          hv(e, t, n);
          continue;
        } else {
          var S = l.alternate, E = S !== null && S.memoizedState !== null, R = E || fn, P = ed, _ = fn;
          ed = b, fn = R, fn && !_ && (ue = l, jk(l));
          for (var B = f; B !== null; )
            ue = B, P0(
              B,
              // New root; bubble back up to here and stop.
              t,
              n
            ), B = B.sibling;
          ue = l, ed = P, fn = _, hv(e, t, n);
          continue;
        }
      }
      (l.subtreeFlags & dl) !== Ee && f !== null ? (f.return = l, ue = f) : hv(e, t, n);
    }
  }
  function hv(e, t, n) {
    for (; ue !== null; ) {
      var r = ue;
      if ((r.flags & dl) !== Ee) {
        var l = r.alternate;
        Et(r);
        try {
          mk(t, l, r, n);
        } catch (h) {
          dt(r, r.return, h);
        }
        Zt();
      }
      if (r === e) {
        ue = null;
        return;
      }
      var f = r.sibling;
      if (f !== null) {
        f.return = r.return, ue = f;
        return;
      }
      ue = r.return;
    }
  }
  function Rk(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      switch (t.tag) {
        case v:
        case V:
        case L:
        case G: {
          if (t.mode & ot)
            try {
              lr(), Ia(It, t, t.return);
            } finally {
              sr(t);
            }
          else
            Ia(It, t, t.return);
          break;
        }
        case p: {
          ws(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && fv(t, t.return, r);
          break;
        }
        case C: {
          ws(t, t.return);
          break;
        }
        case de: {
          var l = t.memoizedState !== null;
          if (l) {
            U0(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, ue = n) : U0(e);
    }
  }
  function U0(e) {
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
  function jk(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.child;
      if (t.tag === de) {
        var r = t.memoizedState !== null;
        if (r) {
          V0(e);
          continue;
        }
      }
      n !== null ? (n.return = t, ue = n) : V0(e);
    }
  }
  function V0(e) {
    for (; ue !== null; ) {
      var t = ue;
      Et(t);
      try {
        vk(t);
      } catch (r) {
        dt(t, t.return, r);
      }
      if (Zt(), t === e) {
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
  function Tk(e, t, n, r) {
    ue = t, Dk(t, e, n, r);
  }
  function Dk(e, t, n, r) {
    for (; ue !== null; ) {
      var l = ue, f = l.child;
      (l.subtreeFlags & Bo) !== Ee && f !== null ? (f.return = l, ue = f) : kk(e, t, n, r);
    }
  }
  function kk(e, t, n, r) {
    for (; ue !== null; ) {
      var l = ue;
      if ((l.flags & Aa) !== Ee) {
        Et(l);
        try {
          Ok(t, l, n, r);
        } catch (h) {
          dt(l, l.return, h);
        }
        Zt();
      }
      if (l === e) {
        ue = null;
        return;
      }
      var f = l.sibling;
      if (f !== null) {
        f.return = l.return, ue = f;
        return;
      }
      ue = l.return;
    }
  }
  function Ok(e, t, n, r) {
    switch (t.tag) {
      case v:
      case V:
      case G: {
        if (t.mode & ot) {
          Mm();
          try {
            xi(un | Bt, t);
          } finally {
            Lm(t);
          }
        } else
          xi(un | Bt, t);
        break;
      }
    }
  }
  function Lk(e) {
    ue = e, Mk();
  }
  function Mk() {
    for (; ue !== null; ) {
      var e = ue, t = e.child;
      if ((ue.flags & Wi) !== Ee) {
        var n = e.deletions;
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var l = n[r];
            ue = l, Pk(l, e);
          }
          {
            var f = e.alternate;
            if (f !== null) {
              var h = f.child;
              if (h !== null) {
                f.child = null;
                do {
                  var b = h.sibling;
                  h.sibling = null, h = b;
                } while (h !== null);
              }
            }
          }
          ue = e;
        }
      }
      (e.subtreeFlags & Bo) !== Ee && t !== null ? (t.return = e, ue = t) : Ak();
    }
  }
  function Ak() {
    for (; ue !== null; ) {
      var e = ue;
      (e.flags & Aa) !== Ee && (Et(e), _k(e), Zt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ue = t;
        return;
      }
      ue = e.return;
    }
  }
  function _k(e) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        e.mode & ot ? (Mm(), Ia(un | Bt, e, e.return), Lm(e)) : Ia(un | Bt, e, e.return);
        break;
      }
    }
  }
  function Pk(e, t) {
    for (; ue !== null; ) {
      var n = ue;
      Et(n), Vk(n, t), Zt();
      var r = n.child;
      r !== null ? (r.return = n, ue = r) : Uk(e);
    }
  }
  function Uk(e) {
    for (; ue !== null; ) {
      var t = ue, n = t.sibling, r = t.return;
      if (k0(t), t === e) {
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
  function Vk(e, t) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        e.mode & ot ? (Mm(), Ia(un, e, t), Lm(e)) : Ia(un, e, t);
        break;
      }
    }
  }
  function Fk(e) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        try {
          xi(It | Bt, e);
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
  function zk(e) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        try {
          xi(un | Bt, e);
        } catch (t) {
          dt(e, e.return, t);
        }
        break;
      }
    }
  }
  function $k(e) {
    switch (e.tag) {
      case v:
      case V:
      case G: {
        try {
          Ia(It | Bt, e, e.return);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && fv(e, e.return, t);
        break;
      }
    }
  }
  function Hk(e) {
    switch (e.tag) {
      case v:
      case V:
      case G:
        try {
          Ia(un | Bt, e, e.return);
        } catch (t) {
          dt(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var yu = Symbol.for;
    yu("selector.component"), yu("selector.has_pseudo_class"), yu("selector.role"), yu("selector.test_id"), yu("selector.text");
  }
  var Bk = [];
  function Ik() {
    Bk.forEach(function(e) {
      return e();
    });
  }
  var Jk = o.ReactCurrentActQueue;
  function Yk(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function F0() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && Jk.current !== null && u("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var Wk = Math.ceil, mv = o.ReactCurrentDispatcher, vv = o.ReactCurrentOwner, pn = o.ReactCurrentBatchConfig, Wa = o.ReactCurrentActQueue, Wt = (
    /*             */
    0
  ), z0 = (
    /*               */
    1
  ), hn = (
    /*                */
    2
  ), Ea = (
    /*                */
    4
  ), zr = 0, bu = 1, go = 2, nd = 3, xu = 4, $0 = 5, gv = 6, We = Wt, Mn = null, Ct = null, Kt = q, cr = q, yv = fi(q), Gt = zr, Su = null, ad = q, Nu = q, rd = q, wu = null, Jn = null, bv = 0, H0 = 500, B0 = 1 / 0, Kk = 500, $r = null;
  function Eu() {
    B0 = en() + Kk;
  }
  function I0() {
    return B0;
  }
  var id = !1, xv = null, Es = null, yo = !1, Ni = null, Cu = q, Sv = [], Nv = null, Gk = 50, Ru = 0, wv = null, Ev = !1, od = !1, Xk = 50, Cs = 0, sd = null, ju = pt, ld = q, J0 = !1;
  function ud() {
    return Mn;
  }
  function An() {
    return (We & (hn | Ea)) !== Wt ? en() : (ju !== pt || (ju = en()), ju);
  }
  function wi(e) {
    var t = e.mode;
    if ((t & Ye) === Se)
      return De;
    if ((We & hn) !== Wt && Kt !== q)
      return bl(Kt);
    var n = JT() !== IT;
    if (n) {
      if (pn.transition !== null) {
        var r = pn.transition;
        r._updatedFibers || (r._updatedFibers = /* @__PURE__ */ new Set()), r._updatedFibers.add(e);
      }
      return ld === nn && (ld = Ry()), ld;
    }
    var l = Pa();
    if (l !== nn)
      return l;
    var f = Dj();
    return f;
  }
  function qk(e) {
    var t = e.mode;
    return (t & Ye) === Se ? De : ZE();
  }
  function Xt(e, t, n, r) {
    SO(), J0 && u("useInsertionEffect must not schedule updates."), Ev && (od = !0), xl(e, n, r), (We & hn) !== q && e === Mn ? EO(t) : (_a && Dy(e, t, n), CO(t), e === Mn && ((We & hn) === Wt && (Nu = Ae(Nu, n)), Gt === xu && Ei(e, Kt)), Yn(e, r), n === De && We === Wt && (t.mode & Ye) === Se && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Wa.isBatchingLegacy && (Eu(), Jb()));
  }
  function Qk(e, t, n) {
    var r = e.current;
    r.lanes = t, xl(e, t, n), Yn(e, n);
  }
  function Zk(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (We & hn) !== Wt
    );
  }
  function Yn(e, t) {
    var n = e.callbackNode;
    WE(e, t);
    var r = Dc(e, e === Mn ? Kt : q);
    if (r === q) {
      n !== null && sS(n), e.callbackNode = null, e.callbackPriority = nn;
      return;
    }
    var l = to(r), f = e.callbackPriority;
    if (f === l && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Wa.current !== null && n !== Ov)) {
      n == null && f !== De && u("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && sS(n);
    var h;
    if (l === De)
      e.tag === di ? (Wa.isBatchingLegacy !== null && (Wa.didScheduleLegacyUpdate = !0), jT(K0.bind(null, e))) : Ib(K0.bind(null, e)), Wa.current !== null ? Wa.current.push(pi) : Oj(function() {
        (We & (hn | Ea)) === Wt && pi();
      }), h = null;
    else {
      var b;
      switch (Ly(r)) {
        case ra:
          b = Cc;
          break;
        case Or:
          b = xp;
          break;
        case Lr:
          b = Qi;
          break;
        case Lc:
          b = Sp;
          break;
        default:
          b = Qi;
          break;
      }
      h = Lv(b, Y0.bind(null, e));
    }
    e.callbackPriority = l, e.callbackNode = h;
  }
  function Y0(e, t) {
    if (gD(), ju = pt, ld = q, (We & (hn | Ea)) !== Wt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, r = Br();
    if (r && e.callbackNode !== n)
      return null;
    var l = Dc(e, e === Mn ? Kt : q);
    if (l === q)
      return null;
    var f = !kc(e, l) && !QE(e, l) && !t, h = f ? uO(e, l) : fd(e, l);
    if (h !== zr) {
      if (h === go) {
        var b = Bp(e);
        b !== q && (l = b, h = Cv(e, b));
      }
      if (h === bu) {
        var S = Su;
        throw bo(e, q), Ei(e, l), Yn(e, en()), S;
      }
      if (h === gv)
        Ei(e, l);
      else {
        var E = !kc(e, l), R = e.current.alternate;
        if (E && !tO(R)) {
          if (h = fd(e, l), h === go) {
            var P = Bp(e);
            P !== q && (l = P, h = Cv(e, P));
          }
          if (h === bu) {
            var _ = Su;
            throw bo(e, q), Ei(e, l), Yn(e, en()), _;
          }
        }
        e.finishedWork = R, e.finishedLanes = l, eO(e, h, l);
      }
    }
    return Yn(e, en()), e.callbackNode === n ? Y0.bind(null, e) : null;
  }
  function Cv(e, t) {
    var n = wu;
    if (Mc(e)) {
      var r = bo(e, t);
      r.flags |= Rr, xT(e.containerInfo);
    }
    var l = fd(e, t);
    if (l !== go) {
      var f = Jn;
      Jn = n, f !== null && W0(f);
    }
    return l;
  }
  function W0(e) {
    Jn === null ? Jn = e : Jn.push.apply(Jn, e);
  }
  function eO(e, t, n) {
    switch (t) {
      case zr:
      case bu:
        throw new Error("Root did not complete. This is a bug in React.");
      case go: {
        xo(e, Jn, $r);
        break;
      }
      case nd: {
        if (Ei(e, n), Ey(n) && // do not delay if we're inside an act() scope
        !lS()) {
          var r = bv + H0 - en();
          if (r > 10) {
            var l = Dc(e, q);
            if (l !== q)
              break;
            var f = e.suspendedLanes;
            if (!Go(f, n)) {
              An(), Ty(e, f);
              break;
            }
            e.timeoutHandle = Nh(xo.bind(null, e, Jn, $r), r);
            break;
          }
        }
        xo(e, Jn, $r);
        break;
      }
      case xu: {
        if (Ei(e, n), qE(n))
          break;
        if (!lS()) {
          var h = JE(e, n), b = h, S = en() - b, E = xO(S) - S;
          if (E > 10) {
            e.timeoutHandle = Nh(xo.bind(null, e, Jn, $r), E);
            break;
          }
        }
        xo(e, Jn, $r);
        break;
      }
      case $0: {
        xo(e, Jn, $r);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function tO(e) {
    for (var t = e; ; ) {
      if (t.flags & wc) {
        var n = t.updateQueue;
        if (n !== null) {
          var r = n.stores;
          if (r !== null)
            for (var l = 0; l < r.length; l++) {
              var f = r[l], h = f.getSnapshot, b = f.value;
              try {
                if (!oa(h(), b))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var S = t.child;
      if (t.subtreeFlags & wc && S !== null) {
        S.return = t, t = S;
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
  function Ei(e, t) {
    t = Oc(t, rd), t = Oc(t, Nu), tC(e, t);
  }
  function K0(e) {
    if (yD(), (We & (hn | Ea)) !== Wt)
      throw new Error("Should not already be working.");
    Br();
    var t = Dc(e, q);
    if (!aa(t, De))
      return Yn(e, en()), null;
    var n = fd(e, t);
    if (e.tag !== di && n === go) {
      var r = Bp(e);
      r !== q && (t = r, n = Cv(e, r));
    }
    if (n === bu) {
      var l = Su;
      throw bo(e, q), Ei(e, t), Yn(e, en()), l;
    }
    if (n === gv)
      throw new Error("Root did not complete. This is a bug in React.");
    var f = e.current.alternate;
    return e.finishedWork = f, e.finishedLanes = t, xo(e, Jn, $r), Yn(e, en()), null;
  }
  function nO(e, t) {
    t !== q && (Wp(e, Ae(t, De)), Yn(e, en()), (We & (hn | Ea)) === Wt && (Eu(), pi()));
  }
  function Rv(e, t) {
    var n = We;
    We |= z0;
    try {
      return e(t);
    } finally {
      We = n, We === Wt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Wa.isBatchingLegacy && (Eu(), Jb());
    }
  }
  function aO(e, t, n, r, l) {
    var f = Pa(), h = pn.transition;
    try {
      return pn.transition = null, an(ra), e(t, n, r, l);
    } finally {
      an(f), pn.transition = h, We === Wt && Eu();
    }
  }
  function Hr(e) {
    Ni !== null && Ni.tag === di && (We & (hn | Ea)) === Wt && Br();
    var t = We;
    We |= z0;
    var n = pn.transition, r = Pa();
    try {
      return pn.transition = null, an(ra), e ? e() : void 0;
    } finally {
      an(r), pn.transition = n, We = t, (We & (hn | Ea)) === Wt && pi();
    }
  }
  function G0() {
    return (We & (hn | Ea)) !== Wt;
  }
  function cd(e, t) {
    En(yv, cr, e), cr = Ae(cr, t);
  }
  function jv(e) {
    cr = yv.current, wn(yv, e);
  }
  function bo(e, t) {
    e.finishedWork = null, e.finishedLanes = q;
    var n = e.timeoutHandle;
    if (n !== wh && (e.timeoutHandle = wh, kj(n)), Ct !== null)
      for (var r = Ct.return; r !== null; ) {
        var l = r.alternate;
        E0(l, r), r = r.return;
      }
    Mn = e;
    var f = So(e.current, null);
    return Ct = f, Kt = cr = t, Gt = zr, Su = null, ad = q, Nu = q, rd = q, wu = null, Jn = null, QT(), Fa.discardPendingWarnings(), f;
  }
  function X0(e, t) {
    do {
      var n = Ct;
      try {
        if (xf(), xx(), Zt(), vv.current = null, n === null || n.return === null) {
          Gt = bu, Su = t, Ct = null;
          return;
        }
        if (ja && n.mode & ot && Gf(n, !0), da)
          if (Jo(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var r = t;
            ME(n, r, Kt);
          } else
            LE(n, t, Kt);
        jD(e, n.return, n, t, Kt), eS(n);
      } catch (l) {
        t = l, Ct === n && n !== null ? (n = n.return, Ct = n) : n = Ct;
        continue;
      }
      return;
    } while (!0);
  }
  function q0() {
    var e = mv.current;
    return mv.current = If, e === null ? If : e;
  }
  function Q0(e) {
    mv.current = e;
  }
  function rO() {
    bv = en();
  }
  function Tu(e) {
    ad = Ae(e, ad);
  }
  function iO() {
    Gt === zr && (Gt = nd);
  }
  function Tv() {
    (Gt === zr || Gt === nd || Gt === go) && (Gt = xu), Mn !== null && (Ip(ad) || Ip(Nu)) && Ei(Mn, Kt);
  }
  function oO(e) {
    Gt !== xu && (Gt = go), wu === null ? wu = [e] : wu.push(e);
  }
  function sO() {
    return Gt === zr;
  }
  function fd(e, t) {
    var n = We;
    We |= hn;
    var r = q0();
    if (Mn !== e || Kt !== t) {
      if (_a) {
        var l = e.memoizedUpdaters;
        l.size > 0 && (Du(e, Kt), l.clear()), ky(e, t);
      }
      $r = Oy(), bo(e, t);
    }
    by(t);
    do
      try {
        lO();
        break;
      } catch (f) {
        X0(e, f);
      }
    while (!0);
    if (xf(), We = n, Q0(r), Ct !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return xy(), Mn = null, Kt = q, Gt;
  }
  function lO() {
    for (; Ct !== null; )
      Z0(Ct);
  }
  function uO(e, t) {
    var n = We;
    We |= hn;
    var r = q0();
    if (Mn !== e || Kt !== t) {
      if (_a) {
        var l = e.memoizedUpdaters;
        l.size > 0 && (Du(e, Kt), l.clear()), ky(e, t);
      }
      $r = Oy(), Eu(), bo(e, t);
    }
    by(t);
    do
      try {
        cO();
        break;
      } catch (f) {
        X0(e, f);
      }
    while (!0);
    return xf(), Q0(r), We = n, Ct !== null ? (VE(), zr) : (xy(), Mn = null, Kt = q, Gt);
  }
  function cO() {
    for (; Ct !== null && !dE(); )
      Z0(Ct);
  }
  function Z0(e) {
    var t = e.alternate;
    Et(e);
    var n;
    (e.mode & ot) !== Se ? (Om(e), n = Dv(t, e, cr), Gf(e, !0)) : n = Dv(t, e, cr), Zt(), e.memoizedProps = e.pendingProps, n === null ? eS(e) : Ct = n, vv.current = null;
  }
  function eS(e) {
    var t = e;
    do {
      var n = t.alternate, r = t.return;
      if ((t.flags & fl) === Ee) {
        Et(t);
        var l = void 0;
        if ((t.mode & ot) === Se ? l = w0(n, t, cr) : (Om(t), l = w0(n, t, cr), Gf(t, !1)), Zt(), l !== null) {
          Ct = l;
          return;
        }
      } else {
        var f = ik(n, t);
        if (f !== null) {
          f.flags &= oE, Ct = f;
          return;
        }
        if ((t.mode & ot) !== Se) {
          Gf(t, !1);
          for (var h = t.actualDuration, b = t.child; b !== null; )
            h += b.actualDuration, b = b.sibling;
          t.actualDuration = h;
        }
        if (r !== null)
          r.flags |= fl, r.subtreeFlags = Ee, r.deletions = null;
        else {
          Gt = gv, Ct = null;
          return;
        }
      }
      var S = t.sibling;
      if (S !== null) {
        Ct = S;
        return;
      }
      t = r, Ct = t;
    } while (t !== null);
    Gt === zr && (Gt = $0);
  }
  function xo(e, t, n) {
    var r = Pa(), l = pn.transition;
    try {
      pn.transition = null, an(ra), fO(e, t, n, r);
    } finally {
      pn.transition = l, an(r);
    }
    return null;
  }
  function fO(e, t, n, r) {
    do
      Br();
    while (Ni !== null);
    if (NO(), (We & (hn | Ea)) !== Wt)
      throw new Error("Should not already be working.");
    var l = e.finishedWork, f = e.finishedLanes;
    if (CE(f), l === null)
      return vy(), null;
    if (f === q && u("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, l === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = nn;
    var h = Ae(l.lanes, l.childLanes);
    nC(e, h), e === Mn && (Mn = null, Ct = null, Kt = q), ((l.subtreeFlags & Bo) !== Ee || (l.flags & Bo) !== Ee) && (yo || (yo = !0, Nv = n, Lv(Qi, function() {
      return Br(), null;
    })));
    var b = (l.subtreeFlags & (yp | bp | dl | Bo)) !== Ee, S = (l.flags & (yp | bp | dl | Bo)) !== Ee;
    if (b || S) {
      var E = pn.transition;
      pn.transition = null;
      var R = Pa();
      an(ra);
      var P = We;
      We |= Ea, vv.current = null, ck(e, l), Jx(), Ek(e, l, f), wj(e.containerInfo), e.current = l, AE(f), Ck(l, e, f), _E(), pE(), We = P, an(R), pn.transition = E;
    } else
      e.current = l, Jx();
    var _ = yo;
    if (yo ? (yo = !1, Ni = e, Cu = f) : (Cs = 0, sd = null), h = e.pendingLanes, h === q && (Es = null), _ || rS(e.current, !1), xE(l.stateNode, r), _a && e.memoizedUpdaters.clear(), Ik(), Yn(e, en()), t !== null)
      for (var B = e.onRecoverableError, J = 0; J < t.length; J++) {
        var W = t[J], re = W.stack, xe = W.digest;
        B(W.value, {
          componentStack: re,
          digest: xe
        });
      }
    if (id) {
      id = !1;
      var me = xv;
      throw xv = null, me;
    }
    return aa(Cu, De) && e.tag !== di && Br(), h = e.pendingLanes, aa(h, De) ? (vD(), e === wv ? Ru++ : (Ru = 0, wv = e)) : Ru = 0, pi(), vy(), null;
  }
  function Br() {
    if (Ni !== null) {
      var e = Ly(Cu), t = oC(Lr, e), n = pn.transition, r = Pa();
      try {
        return pn.transition = null, an(t), pO();
      } finally {
        an(r), pn.transition = n;
      }
    }
    return !1;
  }
  function dO(e) {
    Sv.push(e), yo || (yo = !0, Lv(Qi, function() {
      return Br(), null;
    }));
  }
  function pO() {
    if (Ni === null)
      return !1;
    var e = Nv;
    Nv = null;
    var t = Ni, n = Cu;
    if (Ni = null, Cu = q, (We & (hn | Ea)) !== Wt)
      throw new Error("Cannot flush passive effects while already rendering.");
    Ev = !0, od = !1, PE(n);
    var r = We;
    We |= Ea, Lk(t.current), Tk(t, t.current, n, e);
    {
      var l = Sv;
      Sv = [];
      for (var f = 0; f < l.length; f++) {
        var h = l[f];
        hk(t, h);
      }
    }
    UE(), rS(t.current, !0), We = r, pi(), od ? t === sd ? Cs++ : (Cs = 0, sd = t) : Cs = 0, Ev = !1, od = !1, SE(t);
    {
      var b = t.current.stateNode;
      b.effectDuration = 0, b.passiveEffectDuration = 0;
    }
    return !0;
  }
  function tS(e) {
    return Es !== null && Es.has(e);
  }
  function hO(e) {
    Es === null ? Es = /* @__PURE__ */ new Set([e]) : Es.add(e);
  }
  function mO(e) {
    id || (id = !0, xv = e);
  }
  var vO = mO;
  function nS(e, t, n) {
    var r = mo(n, t), l = Zx(e, r, De), f = mi(e, l, De), h = An();
    f !== null && (xl(f, De, h), Yn(f, h));
  }
  function dt(e, t, n) {
    if (sk(n), ku(!1), e.tag === y) {
      nS(e, e, n);
      return;
    }
    var r = null;
    for (r = t; r !== null; ) {
      if (r.tag === y) {
        nS(r, e, n);
        return;
      } else if (r.tag === p) {
        var l = r.type, f = r.stateNode;
        if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !tS(f)) {
          var h = mo(n, e), b = Gm(r, h, De), S = mi(r, b, De), E = An();
          S !== null && (xl(S, De, E), Yn(S, E));
          return;
        }
      }
      r = r.return;
    }
    u(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function gO(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t);
    var l = An();
    Ty(e, n), RO(e), Mn === e && Go(Kt, n) && (Gt === xu || Gt === nd && Ey(Kt) && en() - bv < H0 ? bo(e, q) : rd = Ae(rd, n)), Yn(e, l);
  }
  function aS(e, t) {
    t === nn && (t = qk(e));
    var n = An(), r = Bn(e, t);
    r !== null && (xl(r, t, n), Yn(r, n));
  }
  function yO(e) {
    var t = e.memoizedState, n = nn;
    t !== null && (n = t.retryLane), aS(e, n);
  }
  function bO(e, t) {
    var n = nn, r;
    switch (e.tag) {
      case F:
        r = e.stateNode;
        var l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case ge:
        r = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    r !== null && r.delete(t), aS(e, n);
  }
  function xO(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Wk(e / 1960) * 1960;
  }
  function SO() {
    if (Ru > Gk)
      throw Ru = 0, wv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    Cs > Xk && (Cs = 0, sd = null, u("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function NO() {
    Fa.flushLegacyContextWarning(), Fa.flushPendingUnsafeLifecycleWarnings();
  }
  function rS(e, t) {
    Et(e), dd(e, Tr, $k), t && dd(e, Ec, Hk), dd(e, Tr, Fk), t && dd(e, Ec, zk), Zt();
  }
  function dd(e, t, n) {
    for (var r = e, l = null; r !== null; ) {
      var f = r.subtreeFlags & t;
      r !== l && r.child !== null && f !== Ee ? r = r.child : ((r.flags & t) !== Ee && n(r), r.sibling !== null ? r = r.sibling : r = l = r.return);
    }
  }
  var pd = null;
  function iS(e) {
    {
      if ((We & hn) !== Wt || !(e.mode & Ye))
        return;
      var t = e.tag;
      if (t !== m && t !== y && t !== p && t !== v && t !== V && t !== L && t !== G)
        return;
      var n = Le(e) || "ReactComponent";
      if (pd !== null) {
        if (pd.has(n))
          return;
        pd.add(n);
      } else
        pd = /* @__PURE__ */ new Set([n]);
      var r = Sn;
      try {
        Et(e), u("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        r ? Et(e) : Zt();
      }
    }
  }
  var Dv;
  {
    var wO = null;
    Dv = function(e, t, n) {
      var r = pS(wO, t);
      try {
        return y0(e, t, n);
      } catch (f) {
        if (_T() || f !== null && typeof f == "object" && typeof f.then == "function")
          throw f;
        if (xf(), xx(), E0(e, t), pS(t, r), t.mode & ot && Om(t), dp(null, y0, null, e, t, n), nE()) {
          var l = pp();
          typeof l == "object" && l !== null && l._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
        }
        throw f;
      }
    };
  }
  var oS = !1, kv;
  kv = /* @__PURE__ */ new Set();
  function EO(e) {
    if (Ii && !pD())
      switch (e.tag) {
        case v:
        case V:
        case G: {
          var t = Ct && Le(Ct) || "Unknown", n = t;
          if (!kv.has(n)) {
            kv.add(n);
            var r = Le(e) || "Unknown";
            u("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", r, t, t);
          }
          break;
        }
        case p: {
          oS || (u("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), oS = !0);
          break;
        }
      }
  }
  function Du(e, t) {
    if (_a) {
      var n = e.memoizedUpdaters;
      n.forEach(function(r) {
        Dy(e, r, t);
      });
    }
  }
  var Ov = {};
  function Lv(e, t) {
    {
      var n = Wa.current;
      return n !== null ? (n.push(t), Ov) : my(e, t);
    }
  }
  function sS(e) {
    if (e !== Ov)
      return fE(e);
  }
  function lS() {
    return Wa.current !== null;
  }
  function CO(e) {
    {
      if (e.mode & Ye) {
        if (!F0())
          return;
      } else if (!Yk() || We !== Wt || e.tag !== v && e.tag !== V && e.tag !== G)
        return;
      if (Wa.current === null) {
        var t = Sn;
        try {
          Et(e), u(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e));
        } finally {
          t ? Et(e) : Zt();
        }
      }
    }
  }
  function RO(e) {
    e.tag !== di && F0() && Wa.current === null && u(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function ku(e) {
    J0 = e;
  }
  var Ca = null, Rs = null, jO = function(e) {
    Ca = e;
  };
  function js(e) {
    {
      if (Ca === null)
        return e;
      var t = Ca(e);
      return t === void 0 ? e : t.current;
    }
  }
  function Mv(e) {
    return js(e);
  }
  function Av(e) {
    {
      if (Ca === null)
        return e;
      var t = Ca(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = js(e.render);
          if (e.render !== n) {
            var r = {
              $$typeof: je,
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
  function uS(e, t) {
    {
      if (Ca === null)
        return !1;
      var n = e.elementType, r = t.type, l = !1, f = typeof r == "object" && r !== null ? r.$$typeof : null;
      switch (e.tag) {
        case p: {
          typeof r == "function" && (l = !0);
          break;
        }
        case v: {
          (typeof r == "function" || f === Fe) && (l = !0);
          break;
        }
        case V: {
          (f === je || f === Fe) && (l = !0);
          break;
        }
        case L:
        case G: {
          (f === wt || f === Fe) && (l = !0);
          break;
        }
        default:
          return !1;
      }
      if (l) {
        var h = Ca(n);
        if (h !== void 0 && h === Ca(r))
          return !0;
      }
      return !1;
    }
  }
  function cS(e) {
    {
      if (Ca === null || typeof WeakSet != "function")
        return;
      Rs === null && (Rs = /* @__PURE__ */ new WeakSet()), Rs.add(e);
    }
  }
  var TO = function(e, t) {
    {
      if (Ca === null)
        return;
      var n = t.staleFamilies, r = t.updatedFamilies;
      Br(), Hr(function() {
        _v(e.current, r, n);
      });
    }
  }, DO = function(e, t) {
    {
      if (e.context !== sa)
        return;
      Br(), Hr(function() {
        Ou(t, e, null, null);
      });
    }
  };
  function _v(e, t, n) {
    {
      var r = e.alternate, l = e.child, f = e.sibling, h = e.tag, b = e.type, S = null;
      switch (h) {
        case v:
        case G:
        case p:
          S = b;
          break;
        case V:
          S = b.render;
          break;
      }
      if (Ca === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var E = !1, R = !1;
      if (S !== null) {
        var P = Ca(S);
        P !== void 0 && (n.has(P) ? R = !0 : t.has(P) && (h === p ? R = !0 : E = !0));
      }
      if (Rs !== null && (Rs.has(e) || r !== null && Rs.has(r)) && (R = !0), R && (e._debugNeedsRemount = !0), R || E) {
        var _ = Bn(e, De);
        _ !== null && Xt(_, e, De, pt);
      }
      l !== null && !R && _v(l, t, n), f !== null && _v(f, t, n);
    }
  }
  var kO = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), r = new Set(t.map(function(l) {
        return l.current;
      }));
      return Pv(e.current, r, n), n;
    }
  };
  function Pv(e, t, n) {
    {
      var r = e.child, l = e.sibling, f = e.tag, h = e.type, b = null;
      switch (f) {
        case v:
        case G:
        case p:
          b = h;
          break;
        case V:
          b = h.render;
          break;
      }
      var S = !1;
      b !== null && t.has(b) && (S = !0), S ? OO(e, n) : r !== null && Pv(r, t, n), l !== null && Pv(l, t, n);
    }
  }
  function OO(e, t) {
    {
      var n = LO(e, t);
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
          case y:
            t.add(r.stateNode.containerInfo);
            return;
        }
        if (r.return === null)
          throw new Error("Expected to reach root first.");
        r = r.return;
      }
    }
  }
  function LO(e, t) {
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
  var Uv;
  {
    Uv = !1;
    try {
      var fS = Object.preventExtensions({});
    } catch {
      Uv = !0;
    }
  }
  function MO(e, t, n, r) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.flags = Ee, this.subtreeFlags = Ee, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Uv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var la = function(e, t, n, r) {
    return new MO(e, t, n, r);
  };
  function Vv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function AO(e) {
    return typeof e == "function" && !Vv(e) && e.defaultProps === void 0;
  }
  function _O(e) {
    if (typeof e == "function")
      return Vv(e) ? p : v;
    if (e != null) {
      var t = e.$$typeof;
      if (t === je)
        return V;
      if (t === wt)
        return L;
    }
    return m;
  }
  function So(e, t) {
    var n = e.alternate;
    n === null ? (n = la(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = Ee, n.subtreeFlags = Ee, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & Dr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var r = e.dependencies;
    switch (n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case m:
      case v:
      case G:
        n.type = js(e.type);
        break;
      case p:
        n.type = Mv(e.type);
        break;
      case V:
        n.type = Av(e.type);
        break;
    }
    return n;
  }
  function PO(e, t) {
    e.flags &= Dr | _t;
    var n = e.alternate;
    if (n === null)
      e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = Ee, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = Ee, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var r = n.dependencies;
      e.dependencies = r === null ? null : {
        lanes: r.lanes,
        firstContext: r.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function UO(e, t, n) {
    var r;
    return e === cf ? (r = Ye, t === !0 && (r |= Tt, r |= er)) : r = Se, _a && (r |= ot), la(y, null, null, r);
  }
  function Fv(e, t, n, r, l, f) {
    var h = m, b = e;
    if (typeof e == "function")
      Vv(e) ? (h = p, b = Mv(b)) : b = js(b);
    else if (typeof e == "string")
      h = C;
    else
      e: switch (e) {
        case O:
          return Ci(n.children, l, f, t);
        case Q:
          h = T, l |= Tt, (l & Ye) !== Se && (l |= er);
          break;
        case ae:
          return VO(n, l, f, t);
        case _e:
          return FO(n, l, f, t);
        case Me:
          return zO(n, l, f, t);
        case La:
          return dS(n, l, f, t);
        case Ma:
        case xt:
        case Qt:
        case $i:
        case xn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case we:
                h = M;
                break e;
              case Ie:
                h = A;
                break e;
              case je:
                h = V, b = Av(b);
                break e;
              case wt:
                h = L;
                break e;
              case Fe:
                h = ce, b = null;
                break e;
            }
          var S = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = r ? Le(r) : null;
            E && (S += `

Check the render method of \`` + E + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
        }
      }
    var R = la(h, n, t, l);
    return R.elementType = e, R.type = b, R.lanes = f, R._debugOwner = r, R;
  }
  function zv(e, t, n) {
    var r = null;
    r = e._owner;
    var l = e.type, f = e.key, h = e.props, b = Fv(l, f, h, r, t, n);
    return b._debugSource = e._source, b._debugOwner = e._owner, b;
  }
  function Ci(e, t, n, r) {
    var l = la(U, e, r, t);
    return l.lanes = n, l;
  }
  function VO(e, t, n, r) {
    typeof e.id != "string" && u('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var l = la(D, e, r, t | ot);
    return l.elementType = ae, l.lanes = n, l.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, l;
  }
  function FO(e, t, n, r) {
    var l = la(F, e, r, t);
    return l.elementType = _e, l.lanes = n, l;
  }
  function zO(e, t, n, r) {
    var l = la(ge, e, r, t);
    return l.elementType = Me, l.lanes = n, l;
  }
  function dS(e, t, n, r) {
    var l = la(de, e, r, t);
    l.elementType = La, l.lanes = n;
    var f = {
      isHidden: !1
    };
    return l.stateNode = f, l;
  }
  function $v(e, t, n) {
    var r = la(j, e, null, t);
    return r.lanes = n, r;
  }
  function $O() {
    var e = la(C, null, null, Se);
    return e.elementType = "DELETED", e;
  }
  function HO(e) {
    var t = la(fe, null, null, Se);
    return t.stateNode = e, t;
  }
  function Hv(e, t, n) {
    var r = e.children !== null ? e.children : [], l = la(x, r, e.key, t);
    return l.lanes = n, l.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, l;
  }
  function pS(e, t) {
    return e === null && (e = la(m, null, null, Se)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function BO(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = wh, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = nn, this.eventTimes = Yp(q), this.expirationTimes = Yp(pt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = Yp(q), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var f = this.pendingUpdatersLaneMap = [], h = 0; h < wp; h++)
        f.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case cf:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case di:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function hS(e, t, n, r, l, f, h, b, S, E) {
    var R = new BO(e, t, n, b, S), P = UO(t, f);
    R.current = P, P.stateNode = R;
    {
      var _ = {
        element: r,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      P.memoizedState = _;
    }
    return tm(P), R;
  }
  var Bv = "18.3.1";
  function IO(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return ha(r), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Oa,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var Iv, Jv;
  Iv = !1, Jv = {};
  function mS(e) {
    if (!e)
      return sa;
    var t = $o(e), n = RT(t);
    if (t.tag === p) {
      var r = t.type;
      if (ar(r))
        return Hb(t, r, n);
    }
    return n;
  }
  function JO(e, t) {
    {
      var n = $o(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var r = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + r);
      }
      var l = dy(n);
      if (l === null)
        return null;
      if (l.mode & Tt) {
        var f = Le(n) || "Component";
        if (!Jv[f]) {
          Jv[f] = !0;
          var h = Sn;
          try {
            Et(l), n.mode & Tt ? u("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : u("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
          } finally {
            h ? Et(h) : Zt();
          }
        }
      }
      return l.stateNode;
    }
  }
  function vS(e, t, n, r, l, f, h, b) {
    var S = !1, E = null;
    return hS(e, t, S, E, n, r, l, f, h);
  }
  function gS(e, t, n, r, l, f, h, b, S, E) {
    var R = !0, P = hS(n, r, R, e, l, f, h, b, S);
    P.context = mS(null);
    var _ = P.current, B = An(), J = wi(_), W = Vr(B, J);
    return W.callback = t ?? null, mi(_, W, J), Qk(P, J, B), P;
  }
  function Ou(e, t, n, r) {
    bE(t, e);
    var l = t.current, f = An(), h = wi(l);
    FE(h);
    var b = mS(n);
    t.context === null ? t.context = b : t.pendingContext = b, Ii && Sn !== null && !Iv && (Iv = !0, u(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(Sn) || "Unknown"));
    var S = Vr(f, h);
    S.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && u("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r), S.callback = r);
    var E = mi(l, S, h);
    return E !== null && (Xt(E, l, h, f), Cf(E, l, h)), h;
  }
  function hd(e) {
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
  function YO(e) {
    switch (e.tag) {
      case y: {
        var t = e.stateNode;
        if (Mc(t)) {
          var n = KE(t);
          nO(t, n);
        }
        break;
      }
      case F: {
        Hr(function() {
          var l = Bn(e, De);
          if (l !== null) {
            var f = An();
            Xt(l, e, De, f);
          }
        });
        var r = De;
        Yv(e, r);
        break;
      }
    }
  }
  function yS(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = eC(n.retryLane, t));
  }
  function Yv(e, t) {
    yS(e, t);
    var n = e.alternate;
    n && yS(n, t);
  }
  function WO(e) {
    if (e.tag === F) {
      var t = vl, n = Bn(e, t);
      if (n !== null) {
        var r = An();
        Xt(n, e, t, r);
      }
      Yv(e, t);
    }
  }
  function KO(e) {
    if (e.tag === F) {
      var t = wi(e), n = Bn(e, t);
      if (n !== null) {
        var r = An();
        Xt(n, e, t, r);
      }
      Yv(e, t);
    }
  }
  function bS(e) {
    var t = cE(e);
    return t === null ? null : t.stateNode;
  }
  var xS = function(e) {
    return null;
  };
  function GO(e) {
    return xS(e);
  }
  var SS = function(e) {
    return !1;
  };
  function XO(e) {
    return SS(e);
  }
  var NS = null, wS = null, ES = null, CS = null, RS = null, jS = null, TS = null, DS = null, kS = null;
  {
    var OS = function(e, t, n) {
      var r = t[n], l = et(e) ? e.slice() : $e({}, e);
      return n + 1 === t.length ? (et(l) ? l.splice(r, 1) : delete l[r], l) : (l[r] = OS(e[r], t, n + 1), l);
    }, LS = function(e, t) {
      return OS(e, t, 0);
    }, MS = function(e, t, n, r) {
      var l = t[r], f = et(e) ? e.slice() : $e({}, e);
      if (r + 1 === t.length) {
        var h = n[r];
        f[h] = f[l], et(f) ? f.splice(l, 1) : delete f[l];
      } else
        f[l] = MS(
          // $FlowFixMe number or string is fine here
          e[l],
          t,
          n,
          r + 1
        );
      return f;
    }, AS = function(e, t, n) {
      if (t.length !== n.length) {
        c("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var r = 0; r < n.length - 1; r++)
          if (t[r] !== n[r]) {
            c("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return MS(e, t, n, 0);
    }, _S = function(e, t, n, r) {
      if (n >= t.length)
        return r;
      var l = t[n], f = et(e) ? e.slice() : $e({}, e);
      return f[l] = _S(e[l], t, n + 1, r), f;
    }, PS = function(e, t, n) {
      return _S(e, t, 0, n);
    }, Wv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    NS = function(e, t, n, r) {
      var l = Wv(e, t);
      if (l !== null) {
        var f = PS(l.memoizedState, n, r);
        l.memoizedState = f, l.baseState = f, e.memoizedProps = $e({}, e.memoizedProps);
        var h = Bn(e, De);
        h !== null && Xt(h, e, De, pt);
      }
    }, wS = function(e, t, n) {
      var r = Wv(e, t);
      if (r !== null) {
        var l = LS(r.memoizedState, n);
        r.memoizedState = l, r.baseState = l, e.memoizedProps = $e({}, e.memoizedProps);
        var f = Bn(e, De);
        f !== null && Xt(f, e, De, pt);
      }
    }, ES = function(e, t, n, r) {
      var l = Wv(e, t);
      if (l !== null) {
        var f = AS(l.memoizedState, n, r);
        l.memoizedState = f, l.baseState = f, e.memoizedProps = $e({}, e.memoizedProps);
        var h = Bn(e, De);
        h !== null && Xt(h, e, De, pt);
      }
    }, CS = function(e, t, n) {
      e.pendingProps = PS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = Bn(e, De);
      r !== null && Xt(r, e, De, pt);
    }, RS = function(e, t) {
      e.pendingProps = LS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = Bn(e, De);
      n !== null && Xt(n, e, De, pt);
    }, jS = function(e, t, n) {
      e.pendingProps = AS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = Bn(e, De);
      r !== null && Xt(r, e, De, pt);
    }, TS = function(e) {
      var t = Bn(e, De);
      t !== null && Xt(t, e, De, pt);
    }, DS = function(e) {
      xS = e;
    }, kS = function(e) {
      SS = e;
    };
  }
  function qO(e) {
    var t = dy(e);
    return t === null ? null : t.stateNode;
  }
  function QO(e) {
    return null;
  }
  function ZO() {
    return Sn;
  }
  function e3(e) {
    var t = e.findFiberByHostInstance, n = o.ReactCurrentDispatcher;
    return yE({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: NS,
      overrideHookStateDeletePath: wS,
      overrideHookStateRenamePath: ES,
      overrideProps: CS,
      overridePropsDeletePath: RS,
      overridePropsRenamePath: jS,
      setErrorHandler: DS,
      setSuspenseHandler: kS,
      scheduleUpdate: TS,
      currentDispatcherRef: n,
      findHostInstanceByFiber: qO,
      findFiberByHostInstance: t || QO,
      // React Refresh
      findHostInstancesForRefresh: kO,
      scheduleRefresh: TO,
      scheduleRoot: DO,
      setRefreshHandler: jO,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: ZO,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: Bv
    });
  }
  var US = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function Kv(e) {
    this._internalRoot = e;
  }
  md.prototype.render = Kv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? u("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vd(arguments[1]) ? u("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && u("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== At) {
        var r = bS(t.current);
        r && r.parentNode !== n && u("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    Ou(e, t, null, null);
  }, md.prototype.unmount = Kv.prototype.unmount = function() {
    typeof arguments[0] == "function" && u("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      G0() && u("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Hr(function() {
        Ou(null, e, null, null);
      }), Ub(t);
    }
  };
  function t3(e, t) {
    if (!vd(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    VS(e);
    var n = !1, r = !1, l = "", f = US;
    t != null && (t.hydrate ? c("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === qa && u(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var h = vS(e, cf, null, n, r, l, f);
    nf(h.current, e);
    var b = e.nodeType === At ? e.parentNode : e;
    return Ul(b), new Kv(h);
  }
  function md(e) {
    this._internalRoot = e;
  }
  function n3(e) {
    e && gC(e);
  }
  md.prototype.unstable_scheduleHydration = n3;
  function a3(e, t, n) {
    if (!vd(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    VS(e), t === void 0 && u("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var r = n ?? null, l = n != null && n.hydratedSources || null, f = !1, h = !1, b = "", S = US;
    n != null && (n.unstable_strictMode === !0 && (f = !0), n.identifierPrefix !== void 0 && (b = n.identifierPrefix), n.onRecoverableError !== void 0 && (S = n.onRecoverableError));
    var E = gS(t, null, e, cf, r, f, h, b, S);
    if (nf(E.current, e), Ul(e), l)
      for (var R = 0; R < l.length; R++) {
        var P = l[R];
        sD(E, P);
      }
    return new md(E);
  }
  function vd(e) {
    return !!(e && (e.nodeType === $n || e.nodeType === Cr || e.nodeType === tp || !bt));
  }
  function Lu(e) {
    return !!(e && (e.nodeType === $n || e.nodeType === Cr || e.nodeType === tp || e.nodeType === At && e.nodeValue === " react-mount-point-unstable "));
  }
  function VS(e) {
    e.nodeType === $n && e.tagName && e.tagName.toUpperCase() === "BODY" && u("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kl(e) && (e._reactRootContainer ? u("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : u("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var r3 = o.ReactCurrentOwner, FS;
  FS = function(e) {
    if (e._reactRootContainer && e.nodeType !== At) {
      var t = bS(e._reactRootContainer.current);
      t && t.parentNode !== e && u("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, r = Gv(e), l = !!(r && ci(r));
    l && !n && u("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $n && e.tagName && e.tagName.toUpperCase() === "BODY" && u("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function Gv(e) {
    return e ? e.nodeType === Cr ? e.documentElement : e.firstChild : null;
  }
  function zS() {
  }
  function i3(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var f = r;
        r = function() {
          var _ = hd(h);
          f.call(_);
        };
      }
      var h = gS(
        t,
        r,
        e,
        di,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        zS
      );
      e._reactRootContainer = h, nf(h.current, e);
      var b = e.nodeType === At ? e.parentNode : e;
      return Ul(b), Hr(), h;
    } else {
      for (var S; S = e.lastChild; )
        e.removeChild(S);
      if (typeof r == "function") {
        var E = r;
        r = function() {
          var _ = hd(R);
          E.call(_);
        };
      }
      var R = vS(
        e,
        di,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        zS
      );
      e._reactRootContainer = R, nf(R.current, e);
      var P = e.nodeType === At ? e.parentNode : e;
      return Ul(P), Hr(function() {
        Ou(t, R, n, r);
      }), R;
    }
  }
  function o3(e, t) {
    e !== null && typeof e != "function" && u("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function gd(e, t, n, r, l) {
    FS(n), o3(l === void 0 ? null : l, "render");
    var f = n._reactRootContainer, h;
    if (!f)
      h = i3(n, t, e, l, r);
    else {
      if (h = f, typeof l == "function") {
        var b = l;
        l = function() {
          var S = hd(h);
          b.call(S);
        };
      }
      Ou(t, h, e, l);
    }
    return hd(h);
  }
  var $S = !1;
  function s3(e) {
    {
      $S || ($S = !0, u("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = r3.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || u("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === $n ? e : JO(e, "findDOMNode");
  }
  function l3(e, t, n) {
    if (u("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Kl(t) && t._reactRootContainer === void 0;
      r && u("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return gd(null, e, t, !0, n);
  }
  function u3(e, t, n) {
    if (u("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var r = Kl(t) && t._reactRootContainer === void 0;
      r && u("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return gd(null, e, t, !1, n);
  }
  function c3(e, t, n, r) {
    if (u("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lu(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !aE(e))
      throw new Error("parentComponent must be a valid React Component");
    return gd(e, t, n, !1, r);
  }
  var HS = !1;
  function f3(e) {
    if (HS || (HS = !0, u("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Lu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Kl(e) && e._reactRootContainer === void 0;
      t && u("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = Gv(e), r = n && !ci(n);
        r && u("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Hr(function() {
        gd(null, null, e, !1, function() {
          e._reactRootContainer = null, Ub(e);
        });
      }), !0;
    } else {
      {
        var l = Gv(e), f = !!(l && ci(l)), h = e.nodeType === $n && Lu(e.parentNode) && !!e.parentNode._reactRootContainer;
        f && u("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  sC(YO), uC(WO), cC(KO), fC(Pa), dC(rC), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && u("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Yw(pj), Gw(Rv, aO, Hr);
  function d3(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vd(t))
      throw new Error("Target container is not a DOM element.");
    return IO(e, t, null, n);
  }
  function p3(e, t, n, r) {
    return c3(e, t, n, r);
  }
  var Xv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [ci, rs, af, ey, ty, Rv]
  };
  function h3(e, t) {
    return Xv.usingClientEntryPoint || u('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), t3(e, t);
  }
  function m3(e, t, n) {
    return Xv.usingClientEntryPoint || u('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), a3(e, t, n);
  }
  function v3(e) {
    return G0() && u("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Hr(e);
  }
  var g3 = e3({
    findFiberByHostInstance: io,
    bundleType: 1,
    version: Bv,
    rendererPackageName: "react-dom"
  });
  if (!g3 && Mt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var BS = window.location.protocol;
    /^(https?|file):$/.test(BS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (BS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv, ca.createPortal = d3, ca.createRoot = h3, ca.findDOMNode = s3, ca.flushSync = v3, ca.hydrate = l3, ca.hydrateRoot = m3, ca.render = u3, ca.unmountComponentAtNode = f3, ca.unstable_batchedUpdates = Rv, ca.unstable_renderSubtreeIntoContainer = p3, ca.version = Bv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
XN.exports = ca;
var w3 = XN.exports, ZN, IS = w3;
{
  var JS = IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ZN = function(i, a) {
    JS.usingClientEntryPoint = !0;
    try {
      return IS.createRoot(i, a);
    } finally {
      JS.usingClientEntryPoint = !1;
    }
  };
}
var e1 = { exports: {} }, t1 = {};
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
  var i = z;
  function a(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : a, s = i.useSyncExternalStore, d = i.useRef, c = i.useEffect, u = i.useMemo, g = i.useDebugValue;
  function v(p, m, y, x, C) {
    var j = d(null), U;
    j.current === null ? (U = {
      hasValue: !1,
      value: null
    }, j.current = U) : U = j.current;
    var T = u(function() {
      var D = !1, F, L, G = function(ge) {
        if (!D) {
          D = !0, F = ge;
          var Ve = x(ge);
          if (C !== void 0 && U.hasValue) {
            var de = U.value;
            if (C(de, Ve))
              return L = de, de;
          }
          return L = Ve, Ve;
        }
        var ye = F, he = L;
        if (o(ye, ge))
          return he;
        var Pe = x(ge);
        return C !== void 0 && C(he, Pe) ? he : (F = ge, L = Pe, Pe);
      }, ce = y === void 0 ? null : y, ve = function() {
        return G(m());
      }, fe = ce === null ? void 0 : function() {
        return G(ce());
      };
      return [ve, fe];
    }, [m, y, x, C]), A = T[0], M = T[1], V = s(p, A, M);
    return c(function() {
      U.hasValue = !0, U.value = V;
    }, [V]), g(V), V;
  }
  t1.useSyncExternalStoreWithSelector = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
e1.exports = t1;
var E3 = e1.exports, fa = (
  // prettier-ignore
  // @ts-ignore
  "default" in sg ? zd : sg
), YS = Symbol.for("react-redux-context"), WS = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function C3() {
  if (!fa.createContext)
    return {};
  const i = WS[YS] ?? (WS[YS] = /* @__PURE__ */ new Map());
  let a = i.get(fa.createContext);
  return a || (a = fa.createContext(
    null
  ), a.displayName = "ReactRedux", i.set(fa.createContext, a)), a;
}
var Ai = /* @__PURE__ */ C3(), R3 = () => {
  throw new Error("uSES not initialized!");
};
function Eg(i = Ai) {
  return function() {
    const o = fa.useContext(i);
    if (!o)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return o;
  };
}
var n1 = /* @__PURE__ */ Eg(), a1 = R3, j3 = (i) => {
  a1 = i;
}, T3 = (i, a) => i === a;
function D3(i = Ai) {
  const a = i === Ai ? n1 : Eg(i), o = (s, d = {}) => {
    const { equalityFn: c = T3, devModeChecks: u = {} } = typeof d == "function" ? { equalityFn: d } : d;
    {
      if (!s)
        throw new Error("You must pass a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof c != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: g,
      subscription: v,
      getServerState: p,
      stabilityCheck: m,
      identityFunctionCheck: y
    } = a(), x = fa.useRef(!0), C = fa.useCallback(
      {
        [s.name](U) {
          const T = s(U);
          {
            const {
              identityFunctionCheck: A,
              stabilityCheck: M
            } = {
              stabilityCheck: m,
              identityFunctionCheck: y,
              ...u
            };
            if (M === "always" || M === "once" && x.current) {
              const V = s(U);
              if (!c(T, V)) {
                let D;
                try {
                  throw new Error();
                } catch (F) {
                  ({ stack: D } = F);
                }
                console.warn(
                  "Selector " + (s.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: U,
                    selected: T,
                    selected2: V,
                    stack: D
                  }
                );
              }
            }
            if ((A === "always" || A === "once" && x.current) && T === U) {
              let V;
              try {
                throw new Error();
              } catch (D) {
                ({ stack: V } = D);
              }
              console.warn(
                "Selector " + (s.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: V }
              );
            }
            x.current && (x.current = !1);
          }
          return T;
        }
      }[s.name],
      [s, m, u.stabilityCheck]
    ), j = a1(
      v.addNestedSub,
      g.getState,
      p || g.getState,
      C,
      c
    );
    return fa.useDebugValue(j), j;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var Pi = /* @__PURE__ */ D3();
function k3(i) {
  i();
}
function O3() {
  let i = null, a = null;
  return {
    clear() {
      i = null, a = null;
    },
    notify() {
      k3(() => {
        let o = i;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      const o = [];
      let s = i;
      for (; s; )
        o.push(s), s = s.next;
      return o;
    },
    subscribe(o) {
      let s = !0;
      const d = a = {
        callback: o,
        next: null,
        prev: a
      };
      return d.prev ? d.prev.next = d : i = d, function() {
        !s || i === null || (s = !1, d.next ? d.next.prev = d.prev : a = d.prev, d.prev ? d.prev.next = d.next : i = d.next);
      };
    }
  };
}
var KS = {
  notify() {
  },
  get: () => []
};
function L3(i, a) {
  let o, s = KS, d = 0, c = !1;
  function u(U) {
    m();
    const T = s.subscribe(U);
    let A = !1;
    return () => {
      A || (A = !0, T(), y());
    };
  }
  function g() {
    s.notify();
  }
  function v() {
    j.onStateChange && j.onStateChange();
  }
  function p() {
    return c;
  }
  function m() {
    d++, o || (o = i.subscribe(v), s = O3());
  }
  function y() {
    d--, o && d === 0 && (o(), o = void 0, s.clear(), s = KS);
  }
  function x() {
    c || (c = !0, m());
  }
  function C() {
    c && (c = !1, y());
  }
  const j = {
    addNestedSub: u,
    notifyNestedSubs: g,
    handleChangeWrapper: v,
    isSubscribed: p,
    trySubscribe: x,
    tryUnsubscribe: C,
    getListeners: () => s
  };
  return j;
}
var M3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", A3 = typeof navigator < "u" && navigator.product === "ReactNative", _3 = M3 || A3 ? fa.useLayoutEffect : fa.useEffect;
function P3({
  store: i,
  context: a,
  children: o,
  serverState: s,
  stabilityCheck: d = "once",
  identityFunctionCheck: c = "once"
}) {
  const u = fa.useMemo(() => {
    const p = L3(i);
    return {
      store: i,
      subscription: p,
      getServerState: s ? () => s : void 0,
      stabilityCheck: d,
      identityFunctionCheck: c
    };
  }, [i, s, d, c]), g = fa.useMemo(() => i.getState(), [i]);
  _3(() => {
    const { subscription: p } = u;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), g !== i.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [u, g]);
  const v = a || Ai;
  return /* @__PURE__ */ fa.createElement(v.Provider, { value: u }, o);
}
var U3 = P3;
function r1(i = Ai) {
  const a = i === Ai ? n1 : (
    // @ts-ignore
    Eg(i)
  ), o = () => {
    const { store: s } = a();
    return s;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var V3 = /* @__PURE__ */ r1();
function F3(i = Ai) {
  const a = i === Ai ? V3 : r1(i), o = () => a().dispatch;
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var qu = /* @__PURE__ */ F3();
j3(E3.useSyncExternalStoreWithSelector);
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
function Iu() {
  return Iu = Object.assign ? Object.assign.bind() : function(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    }
    return i;
  }, Iu.apply(this, arguments);
}
var ki;
(function(i) {
  i.Pop = "POP", i.Push = "PUSH", i.Replace = "REPLACE";
})(ki || (ki = {}));
const GS = "popstate";
function z3(i) {
  i === void 0 && (i = {});
  function a(s, d) {
    let {
      pathname: c,
      search: u,
      hash: g
    } = s.location;
    return lg(
      "",
      {
        pathname: c,
        search: u,
        hash: g
      },
      // state defaults to `null` because `window.history.state` does
      d.state && d.state.usr || null,
      d.state && d.state.key || "default"
    );
  }
  function o(s, d) {
    return typeof d == "string" ? d : Ju(d);
  }
  return H3(a, o, null, i);
}
function Rt(i, a) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(a);
}
function hr(i, a) {
  if (!i) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function $3() {
  return Math.random().toString(36).substr(2, 8);
}
function XS(i, a) {
  return {
    usr: i.state,
    key: i.key,
    idx: a
  };
}
function lg(i, a, o, s) {
  return o === void 0 && (o = null), Iu({
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: ""
  }, typeof a == "string" ? Fs(a) : a, {
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || s || $3()
  });
}
function Ju(i) {
  let {
    pathname: a = "/",
    search: o = "",
    hash: s = ""
  } = i;
  return o && o !== "?" && (a += o.charAt(0) === "?" ? o : "?" + o), s && s !== "#" && (a += s.charAt(0) === "#" ? s : "#" + s), a;
}
function Fs(i) {
  let a = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && (a.hash = i.substr(o), i = i.substr(0, o));
    let s = i.indexOf("?");
    s >= 0 && (a.search = i.substr(s), i = i.substr(0, s)), i && (a.pathname = i);
  }
  return a;
}
function H3(i, a, o, s) {
  s === void 0 && (s = {});
  let {
    window: d = document.defaultView,
    v5Compat: c = !1
  } = s, u = d.history, g = ki.Pop, v = null, p = m();
  p == null && (p = 0, u.replaceState(Iu({}, u.state, {
    idx: p
  }), ""));
  function m() {
    return (u.state || {
      idx: null
    }).idx;
  }
  function y() {
    g = ki.Pop;
    let T = m(), A = T == null ? null : T - p;
    p = T, v && v({
      action: g,
      location: U.location,
      delta: A
    });
  }
  function x(T, A) {
    g = ki.Push;
    let M = lg(U.location, T, A);
    p = m() + 1;
    let V = XS(M, p), D = U.createHref(M);
    try {
      u.pushState(V, "", D);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      d.location.assign(D);
    }
    c && v && v({
      action: g,
      location: U.location,
      delta: 1
    });
  }
  function C(T, A) {
    g = ki.Replace;
    let M = lg(U.location, T, A);
    p = m();
    let V = XS(M, p), D = U.createHref(M);
    u.replaceState(V, "", D), c && v && v({
      action: g,
      location: U.location,
      delta: 0
    });
  }
  function j(T) {
    let A = d.location.origin !== "null" ? d.location.origin : d.location.href, M = typeof T == "string" ? T : Ju(T);
    return M = M.replace(/ $/, "%20"), Rt(A, "No window.location.(origin|href) available to create URL for href: " + M), new URL(M, A);
  }
  let U = {
    get action() {
      return g;
    },
    get location() {
      return i(d, u);
    },
    listen(T) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(GS, y), v = T, () => {
        d.removeEventListener(GS, y), v = null;
      };
    },
    createHref(T) {
      return a(d, T);
    },
    createURL: j,
    encodeLocation(T) {
      let A = j(T);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: x,
    replace: C,
    go(T) {
      return u.go(T);
    }
  };
  return U;
}
var qS;
(function(i) {
  i.data = "data", i.deferred = "deferred", i.redirect = "redirect", i.error = "error";
})(qS || (qS = {}));
function B3(i, a, o) {
  return o === void 0 && (o = "/"), I3(i, a, o, !1);
}
function I3(i, a, o, s) {
  let d = typeof a == "string" ? Fs(a) : a, c = _i(d.pathname || "/", o);
  if (c == null)
    return null;
  let u = i1(i);
  J3(u);
  let g = null;
  for (let v = 0; g == null && v < u.length; ++v) {
    let p = nL(c);
    g = eL(u[v], p, s);
  }
  return g;
}
function i1(i, a, o, s) {
  a === void 0 && (a = []), o === void 0 && (o = []), s === void 0 && (s = "");
  let d = (c, u, g) => {
    let v = {
      relativePath: g === void 0 ? c.path || "" : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: u,
      route: c
    };
    v.relativePath.startsWith("/") && (Rt(v.relativePath.startsWith(s), 'Absolute route path "' + v.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), v.relativePath = v.relativePath.slice(s.length));
    let p = Yr([s, v.relativePath]), m = o.concat(v);
    c.children && c.children.length > 0 && (Rt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      c.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), i1(c.children, a, m, p)), !(c.path == null && !c.index) && a.push({
      path: p,
      score: Q3(p, c.index),
      routesMeta: m
    });
  };
  return i.forEach((c, u) => {
    var g;
    if (c.path === "" || !((g = c.path) != null && g.includes("?")))
      d(c, u);
    else
      for (let v of o1(c.path))
        d(c, u, v);
  }), a;
}
function o1(i) {
  let a = i.split("/");
  if (a.length === 0) return [];
  let [o, ...s] = a, d = o.endsWith("?"), c = o.replace(/\?$/, "");
  if (s.length === 0)
    return d ? [c, ""] : [c];
  let u = o1(s.join("/")), g = [];
  return g.push(...u.map((v) => v === "" ? c : [c, v].join("/"))), d && g.push(...u), g.map((v) => i.startsWith("/") && v === "" ? "/" : v);
}
function J3(i) {
  i.sort((a, o) => a.score !== o.score ? o.score - a.score : Z3(a.routesMeta.map((s) => s.childrenIndex), o.routesMeta.map((s) => s.childrenIndex)));
}
const Y3 = /^:[\w-]+$/, W3 = 3, K3 = 2, G3 = 1, X3 = 10, q3 = -2, QS = (i) => i === "*";
function Q3(i, a) {
  let o = i.split("/"), s = o.length;
  return o.some(QS) && (s += q3), a && (s += K3), o.filter((d) => !QS(d)).reduce((d, c) => d + (Y3.test(c) ? W3 : c === "" ? G3 : X3), s);
}
function Z3(i, a) {
  return i.length === a.length && i.slice(0, -1).every((s, d) => s === a[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    i[i.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function eL(i, a, o) {
  let {
    routesMeta: s
  } = i, d = {}, c = "/", u = [];
  for (let g = 0; g < s.length; ++g) {
    let v = s[g], p = g === s.length - 1, m = c === "/" ? a : a.slice(c.length) || "/", y = Od({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: p
    }, m), x = v.route;
    if (!y && p && o && !s[s.length - 1].route.index && (y = Od({
      path: v.relativePath,
      caseSensitive: v.caseSensitive,
      end: !1
    }, m)), !y)
      return null;
    Object.assign(d, y.params), u.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Yr([c, y.pathname]),
      pathnameBase: oL(Yr([c, y.pathnameBase])),
      route: x
    }), y.pathnameBase !== "/" && (c = Yr([c, y.pathnameBase]));
  }
  return u;
}
function Od(i, a) {
  typeof i == "string" && (i = {
    path: i,
    caseSensitive: !1,
    end: !0
  });
  let [o, s] = tL(i.path, i.caseSensitive, i.end), d = a.match(o);
  if (!d) return null;
  let c = d[0], u = c.replace(/(.)\/+$/, "$1"), g = d.slice(1);
  return {
    params: s.reduce((p, m, y) => {
      let {
        paramName: x,
        isOptional: C
      } = m;
      if (x === "*") {
        let U = g[y] || "";
        u = c.slice(0, c.length - U.length).replace(/(.)\/+$/, "$1");
      }
      const j = g[y];
      return C && !j ? p[x] = void 0 : p[x] = (j || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: c,
    pathnameBase: u,
    pattern: i
  };
}
function tL(i, a, o) {
  a === void 0 && (a = !1), o === void 0 && (o = !0), hr(i === "*" || !i.endsWith("*") || i.endsWith("/*"), 'Route path "' + i + '" will be treated as if it were ' + ('"' + i.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + i.replace(/\*$/, "/*") + '".'));
  let s = [], d = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, g, v) => (s.push({
    paramName: g,
    isOptional: v != null
  }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return i.endsWith("*") ? (s.push({
    paramName: "*"
  }), d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? d += "\\/*$" : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), s];
}
function nL(i) {
  try {
    return i.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return hr(!1, 'The URL path "' + i + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + a + ").")), i;
  }
}
function _i(i, a) {
  if (a === "/") return i;
  if (!i.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length, s = i.charAt(o);
  return s && s !== "/" ? null : i.slice(o) || "/";
}
function aL(i, a) {
  a === void 0 && (a = "/");
  let {
    pathname: o,
    search: s = "",
    hash: d = ""
  } = typeof i == "string" ? Fs(i) : i;
  return {
    pathname: o ? o.startsWith("/") ? o : rL(o, a) : a,
    search: sL(s),
    hash: lL(d)
  };
}
function rL(i, a) {
  let o = a.replace(/\/+$/, "").split("/");
  return i.split("/").forEach((d) => {
    d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
  }), o.length > 1 ? o.join("/") : "/";
}
function qv(i, a, o, s) {
  return "Cannot include a '" + i + "' character in a manually specified " + ("`to." + a + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + o + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function iL(i) {
  return i.filter((a, o) => o === 0 || a.route.path && a.route.path.length > 0);
}
function s1(i, a) {
  let o = iL(i);
  return a ? o.map((s, d) => d === o.length - 1 ? s.pathname : s.pathnameBase) : o.map((s) => s.pathnameBase);
}
function l1(i, a, o, s) {
  s === void 0 && (s = !1);
  let d;
  typeof i == "string" ? d = Fs(i) : (d = Iu({}, i), Rt(!d.pathname || !d.pathname.includes("?"), qv("?", "pathname", "search", d)), Rt(!d.pathname || !d.pathname.includes("#"), qv("#", "pathname", "hash", d)), Rt(!d.search || !d.search.includes("#"), qv("#", "search", "hash", d)));
  let c = i === "" || d.pathname === "", u = c ? "/" : d.pathname, g;
  if (u == null)
    g = o;
  else {
    let y = a.length - 1;
    if (!s && u.startsWith("..")) {
      let x = u.split("/");
      for (; x[0] === ".."; )
        x.shift(), y -= 1;
      d.pathname = x.join("/");
    }
    g = y >= 0 ? a[y] : "/";
  }
  let v = aL(d, g), p = u && u !== "/" && u.endsWith("/"), m = (c || u === ".") && o.endsWith("/");
  return !v.pathname.endsWith("/") && (p || m) && (v.pathname += "/"), v;
}
const Yr = (i) => i.join("/").replace(/\/\/+/g, "/"), oL = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"), sL = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, lL = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
function uL(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
const u1 = ["post", "put", "patch", "delete"];
new Set(u1);
const cL = ["get", ...u1];
new Set(cL);
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
function Yu() {
  return Yu = Object.assign ? Object.assign.bind() : function(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    }
    return i;
  }, Yu.apply(this, arguments);
}
const Qu = /* @__PURE__ */ z.createContext(null);
Qu.displayName = "DataRouter";
const Cg = /* @__PURE__ */ z.createContext(null);
Cg.displayName = "DataRouterState";
const fL = /* @__PURE__ */ z.createContext(null);
fL.displayName = "Await";
const Ga = /* @__PURE__ */ z.createContext(null);
Ga.displayName = "Navigation";
const Zu = /* @__PURE__ */ z.createContext(null);
Zu.displayName = "Location";
const Wr = /* @__PURE__ */ z.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Wr.displayName = "Route";
const Rg = /* @__PURE__ */ z.createContext(null);
Rg.displayName = "RouteError";
function dL(i, a) {
  let {
    relative: o
  } = a === void 0 ? {} : a;
  ec() || Rt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: s,
    navigator: d
  } = z.useContext(Ga), {
    hash: c,
    pathname: u,
    search: g
  } = nc(i, {
    relative: o
  }), v = u;
  return s !== "/" && (v = u === "/" ? s : Yr([s, u])), d.createHref({
    pathname: v,
    search: g,
    hash: c
  });
}
function ec() {
  return z.useContext(Zu) != null;
}
function zs() {
  return ec() || Rt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), z.useContext(Zu).location;
}
const c1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function f1(i) {
  z.useContext(Ga).static || z.useLayoutEffect(i);
}
function tc() {
  let {
    isDataRoute: i
  } = z.useContext(Wr);
  return i ? RL() : pL();
}
function pL() {
  ec() || Rt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = z.useContext(Qu), {
    basename: a,
    future: o,
    navigator: s
  } = z.useContext(Ga), {
    matches: d
  } = z.useContext(Wr), {
    pathname: c
  } = zs(), u = JSON.stringify(s1(d, o.v7_relativeSplatPath)), g = z.useRef(!1);
  return f1(() => {
    g.current = !0;
  }), z.useCallback(function(p, m) {
    if (m === void 0 && (m = {}), hr(g.current, c1), !g.current) return;
    if (typeof p == "number") {
      s.go(p);
      return;
    }
    let y = l1(p, JSON.parse(u), c, m.relative === "path");
    i == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Yr([a, y.pathname])), (m.replace ? s.replace : s.push)(y, m.state, m);
  }, [a, s, u, c, i]);
}
function nc(i, a) {
  let {
    relative: o
  } = a === void 0 ? {} : a, {
    future: s
  } = z.useContext(Ga), {
    matches: d
  } = z.useContext(Wr), {
    pathname: c
  } = zs(), u = JSON.stringify(s1(d, s.v7_relativeSplatPath));
  return z.useMemo(() => l1(i, JSON.parse(u), c, o === "path"), [i, u, c, o]);
}
function hL(i, a) {
  return mL(i, a);
}
function mL(i, a, o, s) {
  ec() || Rt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = z.useContext(Ga), {
    matches: c
  } = z.useContext(Wr), u = c[c.length - 1], g = u ? u.params : {}, v = u ? u.pathname : "/", p = u ? u.pathnameBase : "/", m = u && u.route;
  {
    let M = m && m.path || "";
    p1(v, !m || M.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + v + '" (under <Route path="' + M + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + M + '"> to <Route ') + ('path="' + (M === "/" ? "*" : M + "/*") + '">.'));
  }
  let y = zs(), x;
  if (a) {
    var C;
    let M = typeof a == "string" ? Fs(a) : a;
    p === "/" || (C = M.pathname) != null && C.startsWith(p) || Rt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + M.pathname + '" was given in the `location` prop.')), x = M;
  } else
    x = y;
  let j = x.pathname || "/", U = j;
  if (p !== "/") {
    let M = p.replace(/^\//, "").split("/");
    U = "/" + j.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let T = B3(i, {
    pathname: U
  });
  hr(m || T != null, 'No routes matched location "' + x.pathname + x.search + x.hash + '" '), hr(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + x.pathname + x.search + x.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let A = xL(T && T.map((M) => Object.assign({}, M, {
    params: Object.assign({}, g, M.params),
    pathname: Yr([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(M.pathname).pathname : M.pathname
    ]),
    pathnameBase: M.pathnameBase === "/" ? p : Yr([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(M.pathnameBase).pathname : M.pathnameBase
    ])
  })), c, o, s);
  return a && A ? /* @__PURE__ */ z.createElement(Zu.Provider, {
    value: {
      location: Yu({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, x),
      navigationType: ki.Pop
    }
  }, A) : A;
}
function vL() {
  let i = CL(), a = uL(i) ? i.status + " " + i.statusText : i instanceof Error ? i.message : JSON.stringify(i), o = i instanceof Error ? i.stack : null, s = "rgba(200,200,200, 0.5)", d = {
    padding: "0.5rem",
    backgroundColor: s
  }, c = {
    padding: "2px 4px",
    backgroundColor: s
  }, u = null;
  return console.error("Error handled by React Router default ErrorBoundary:", i), u = /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ z.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ z.createElement("code", {
    style: c
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ z.createElement("code", {
    style: c
  }, "errorElement"), " prop on your route.")), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ z.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, a), o ? /* @__PURE__ */ z.createElement("pre", {
    style: d
  }, o) : null, u);
}
const gL = /* @__PURE__ */ z.createElement(vL, null);
class yL extends z.Component {
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
  static getDerivedStateFromProps(a, o) {
    return o.location !== a.location || o.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : o.error,
      location: o.location,
      revalidation: a.revalidation || o.revalidation
    };
  }
  componentDidCatch(a, o) {
    console.error("React Router caught the following error during render", a, o);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ z.createElement(Wr.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ z.createElement(Rg.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function bL(i) {
  let {
    routeContext: a,
    match: o,
    children: s
  } = i, d = z.useContext(Qu);
  return d && d.static && d.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ z.createElement(Wr.Provider, {
    value: a
  }, s);
}
function xL(i, a, o, s) {
  var d;
  if (a === void 0 && (a = []), o === void 0 && (o = null), s === void 0 && (s = null), i == null) {
    var c;
    if ((c = o) != null && c.errors)
      i = o.matches;
    else
      return null;
  }
  let u = i, g = (d = o) == null ? void 0 : d.errors;
  if (g != null) {
    let m = u.findIndex((y) => y.route.id && (g == null ? void 0 : g[y.route.id]) !== void 0);
    m >= 0 || Rt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(g).join(",")), u = u.slice(0, Math.min(u.length, m + 1));
  }
  let v = !1, p = -1;
  if (o && s && s.v7_partialHydration)
    for (let m = 0; m < u.length; m++) {
      let y = u[m];
      if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = m), y.route.id) {
        let {
          loaderData: x,
          errors: C
        } = o, j = y.route.loader && x[y.route.id] === void 0 && (!C || C[y.route.id] === void 0);
        if (y.route.lazy || j) {
          v = !0, p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
          break;
        }
      }
    }
  return u.reduceRight((m, y, x) => {
    let C, j = !1, U = null, T = null;
    o && (C = g && y.route.id ? g[y.route.id] : void 0, U = y.route.errorElement || gL, v && (p < 0 && x === 0 ? (p1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, T = null) : p === x && (j = !0, T = y.route.hydrateFallbackElement || null)));
    let A = a.concat(u.slice(0, x + 1)), M = () => {
      let V;
      return C ? V = U : j ? V = T : y.route.Component ? V = /* @__PURE__ */ z.createElement(y.route.Component, null) : y.route.element ? V = y.route.element : V = m, /* @__PURE__ */ z.createElement(bL, {
        match: y,
        routeContext: {
          outlet: m,
          matches: A,
          isDataRoute: o != null
        },
        children: V
      });
    };
    return o && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? /* @__PURE__ */ z.createElement(yL, {
      location: o.location,
      revalidation: o.revalidation,
      component: U,
      error: C,
      children: M(),
      routeContext: {
        outlet: null,
        matches: A,
        isDataRoute: !0
      }
    }) : M();
  }, null);
}
var d1 = /* @__PURE__ */ function(i) {
  return i.UseBlocker = "useBlocker", i.UseRevalidator = "useRevalidator", i.UseNavigateStable = "useNavigate", i;
}(d1 || {}), Wu = /* @__PURE__ */ function(i) {
  return i.UseBlocker = "useBlocker", i.UseLoaderData = "useLoaderData", i.UseActionData = "useActionData", i.UseRouteError = "useRouteError", i.UseNavigation = "useNavigation", i.UseRouteLoaderData = "useRouteLoaderData", i.UseMatches = "useMatches", i.UseRevalidator = "useRevalidator", i.UseNavigateStable = "useNavigate", i.UseRouteId = "useRouteId", i;
}(Wu || {});
function jg(i) {
  return i + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function SL(i) {
  let a = z.useContext(Qu);
  return a || Rt(!1, jg(i)), a;
}
function NL(i) {
  let a = z.useContext(Cg);
  return a || Rt(!1, jg(i)), a;
}
function wL(i) {
  let a = z.useContext(Wr);
  return a || Rt(!1, jg(i)), a;
}
function Tg(i) {
  let a = wL(i), o = a.matches[a.matches.length - 1];
  return o.route.id || Rt(!1, i + ' can only be used on routes that contain a unique "id"'), o.route.id;
}
function EL() {
  return Tg(Wu.UseRouteId);
}
function CL() {
  var i;
  let a = z.useContext(Rg), o = NL(Wu.UseRouteError), s = Tg(Wu.UseRouteError);
  return a !== void 0 ? a : (i = o.errors) == null ? void 0 : i[s];
}
function RL() {
  let {
    router: i
  } = SL(d1.UseNavigateStable), a = Tg(Wu.UseNavigateStable), o = z.useRef(!1);
  return f1(() => {
    o.current = !0;
  }), z.useCallback(function(d, c) {
    c === void 0 && (c = {}), hr(o.current, c1), o.current && (typeof d == "number" ? i.navigate(d) : i.navigate(d, Yu({
      fromRouteId: a
    }, c)));
  }, [i, a]);
}
const ZS = {};
function p1(i, a, o) {
  !a && !ZS[i] && (ZS[i] = !0, hr(!1, o));
}
function Ti(i) {
  Rt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function jL(i) {
  let {
    basename: a = "/",
    children: o = null,
    location: s,
    navigationType: d = ki.Pop,
    navigator: c,
    static: u = !1,
    future: g
  } = i;
  ec() && Rt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let v = a.replace(/^\/*/, "/"), p = z.useMemo(() => ({
    basename: v,
    navigator: c,
    static: u,
    future: Yu({
      v7_relativeSplatPath: !1
    }, g)
  }), [v, g, c, u]);
  typeof s == "string" && (s = Fs(s));
  let {
    pathname: m = "/",
    search: y = "",
    hash: x = "",
    state: C = null,
    key: j = "default"
  } = s, U = z.useMemo(() => {
    let T = _i(m, v);
    return T == null ? null : {
      location: {
        pathname: T,
        search: y,
        hash: x,
        state: C,
        key: j
      },
      navigationType: d
    };
  }, [v, m, y, x, C, j, d]);
  return hr(U != null, '<Router basename="' + v + '"> is not able to match the URL ' + ('"' + m + y + x + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), U == null ? null : /* @__PURE__ */ z.createElement(Ga.Provider, {
    value: p
  }, /* @__PURE__ */ z.createElement(Zu.Provider, {
    children: o,
    value: U
  }));
}
function TL(i) {
  let {
    children: a,
    location: o
  } = i;
  return hL(ug(a), o);
}
new Promise(() => {
});
function ug(i, a) {
  a === void 0 && (a = []);
  let o = [];
  return z.Children.forEach(i, (s, d) => {
    if (!/* @__PURE__ */ z.isValidElement(s))
      return;
    let c = [...a, d];
    if (s.type === z.Fragment) {
      o.push.apply(o, ug(s.props.children, c));
      return;
    }
    s.type !== Ti && Rt(!1, "[" + (typeof s.type == "string" ? s.type : s.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !s.props.index || !s.props.children || Rt(!1, "An index route cannot have child routes.");
    let u = {
      id: s.props.id || c.join("-"),
      caseSensitive: s.props.caseSensitive,
      element: s.props.element,
      Component: s.props.Component,
      index: s.props.index,
      path: s.props.path,
      loader: s.props.loader,
      action: s.props.action,
      errorElement: s.props.errorElement,
      ErrorBoundary: s.props.ErrorBoundary,
      hasErrorBoundary: s.props.ErrorBoundary != null || s.props.errorElement != null,
      shouldRevalidate: s.props.shouldRevalidate,
      handle: s.props.handle,
      lazy: s.props.lazy
    };
    s.props.children && (u.children = ug(s.props.children, c)), o.push(u);
  }), o;
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
function Vs() {
  return Vs = Object.assign ? Object.assign.bind() : function(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    }
    return i;
  }, Vs.apply(this, arguments);
}
function Dg(i, a) {
  if (i == null) return {};
  var o = {}, s = Object.keys(i), d, c;
  for (c = 0; c < s.length; c++)
    d = s[c], !(a.indexOf(d) >= 0) && (o[d] = i[d]);
  return o;
}
const Rd = "get", jd = "application/x-www-form-urlencoded";
function $d(i) {
  return i != null && typeof i.tagName == "string";
}
function DL(i) {
  return $d(i) && i.tagName.toLowerCase() === "button";
}
function kL(i) {
  return $d(i) && i.tagName.toLowerCase() === "form";
}
function OL(i) {
  return $d(i) && i.tagName.toLowerCase() === "input";
}
function LL(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function ML(i, a) {
  return i.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !LL(i);
}
let yd = null;
function AL() {
  if (yd === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), yd = !1;
    } catch {
      yd = !0;
    }
  return yd;
}
const _L = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Qv(i) {
  return i != null && !_L.has(i) ? (hr(!1, '"' + i + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + jd + '"')), null) : i;
}
function PL(i, a) {
  let o, s, d, c, u;
  if (kL(i)) {
    let g = i.getAttribute("action");
    s = g ? _i(g, a) : null, o = i.getAttribute("method") || Rd, d = Qv(i.getAttribute("enctype")) || jd, c = new FormData(i);
  } else if (DL(i) || OL(i) && (i.type === "submit" || i.type === "image")) {
    let g = i.form;
    if (g == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let v = i.getAttribute("formaction") || g.getAttribute("action");
    if (s = v ? _i(v, a) : null, o = i.getAttribute("formmethod") || g.getAttribute("method") || Rd, d = Qv(i.getAttribute("formenctype")) || Qv(g.getAttribute("enctype")) || jd, c = new FormData(g, i), !AL()) {
      let {
        name: p,
        type: m,
        value: y
      } = i;
      if (m === "image") {
        let x = p ? p + "." : "";
        c.append(x + "x", "0"), c.append(x + "y", "0");
      } else p && c.append(p, y);
    }
  } else {
    if ($d(i))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    o = Rd, s = null, d = jd, u = i;
  }
  return c && d === "text/plain" && (u = c, c = void 0), {
    action: s,
    method: o.toLowerCase(),
    encType: d,
    formData: c,
    body: u
  };
}
const UL = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], VL = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], FL = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], zL = "6";
try {
  window.__reactRouterVersion = zL;
} catch {
}
const h1 = /* @__PURE__ */ z.createContext({
  isTransitioning: !1
});
h1.displayName = "ViewTransition";
const $L = /* @__PURE__ */ z.createContext(/* @__PURE__ */ new Map());
$L.displayName = "Fetchers";
const HL = "startTransition", eN = sg[HL];
function BL(i) {
  let {
    basename: a,
    children: o,
    future: s,
    window: d
  } = i, c = z.useRef();
  c.current == null && (c.current = z3({
    window: d,
    v5Compat: !0
  }));
  let u = c.current, [g, v] = z.useState({
    action: u.action,
    location: u.location
  }), {
    v7_startTransition: p
  } = s || {}, m = z.useCallback((y) => {
    p && eN ? eN(() => v(y)) : v(y);
  }, [v, p]);
  return z.useLayoutEffect(() => u.listen(m), [u, m]), /* @__PURE__ */ z.createElement(jL, {
    basename: a,
    children: o,
    location: g.location,
    navigationType: g.action,
    navigator: u,
    future: s
  });
}
const IL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", JL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gn = /* @__PURE__ */ z.forwardRef(function(a, o) {
  let {
    onClick: s,
    relative: d,
    reloadDocument: c,
    replace: u,
    state: g,
    target: v,
    to: p,
    preventScrollReset: m,
    unstable_viewTransition: y
  } = a, x = Dg(a, UL), {
    basename: C
  } = z.useContext(Ga), j, U = !1;
  if (typeof p == "string" && JL.test(p) && (j = p, IL))
    try {
      let V = new URL(window.location.href), D = p.startsWith("//") ? new URL(V.protocol + p) : new URL(p), F = _i(D.pathname, C);
      D.origin === V.origin && F != null ? p = F + D.search + D.hash : U = !0;
    } catch {
      hr(!1, '<Link to="' + p + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let T = dL(p, {
    relative: d
  }), A = GL(p, {
    replace: u,
    state: g,
    target: v,
    preventScrollReset: m,
    relative: d,
    unstable_viewTransition: y
  });
  function M(V) {
    s && s(V), V.defaultPrevented || A(V);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ z.createElement("a", Vs({}, x, {
      href: j || T,
      onClick: U || c ? s : M,
      ref: o,
      target: v
    }))
  );
});
Gn.displayName = "Link";
const YL = /* @__PURE__ */ z.forwardRef(function(a, o) {
  let {
    "aria-current": s = "page",
    caseSensitive: d = !1,
    className: c = "",
    end: u = !1,
    style: g,
    to: v,
    unstable_viewTransition: p,
    children: m
  } = a, y = Dg(a, VL), x = nc(v, {
    relative: y.relative
  }), C = zs(), j = z.useContext(Cg), {
    navigator: U,
    basename: T
  } = z.useContext(Ga), A = j != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  tM(x) && p === !0, M = U.encodeLocation ? U.encodeLocation(x).pathname : x.pathname, V = C.pathname, D = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  d || (V = V.toLowerCase(), D = D ? D.toLowerCase() : null, M = M.toLowerCase()), D && T && (D = _i(D, T) || D);
  const F = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
  let L = V === M || !u && V.startsWith(M) && V.charAt(F) === "/", G = D != null && (D === M || !u && D.startsWith(M) && D.charAt(M.length) === "/"), ce = {
    isActive: L,
    isPending: G,
    isTransitioning: A
  }, ve = L ? s : void 0, fe;
  typeof c == "function" ? fe = c(ce) : fe = [c, L ? "active" : null, G ? "pending" : null, A ? "transitioning" : null].filter(Boolean).join(" ");
  let ge = typeof g == "function" ? g(ce) : g;
  return /* @__PURE__ */ z.createElement(Gn, Vs({}, y, {
    "aria-current": ve,
    className: fe,
    ref: o,
    style: ge,
    to: v,
    unstable_viewTransition: p
  }), typeof m == "function" ? m(ce) : m);
});
YL.displayName = "NavLink";
const WL = /* @__PURE__ */ z.forwardRef((i, a) => {
  let {
    fetcherKey: o,
    navigate: s,
    reloadDocument: d,
    replace: c,
    state: u,
    method: g = Rd,
    action: v,
    onSubmit: p,
    relative: m,
    preventScrollReset: y,
    unstable_viewTransition: x
  } = i, C = Dg(i, FL), j = ZL(), U = eM(v, {
    relative: m
  }), T = g.toLowerCase() === "get" ? "get" : "post", A = (M) => {
    if (p && p(M), M.defaultPrevented) return;
    M.preventDefault();
    let V = M.nativeEvent.submitter, D = (V == null ? void 0 : V.getAttribute("formmethod")) || g;
    j(V || M.currentTarget, {
      fetcherKey: o,
      method: D,
      navigate: s,
      replace: c,
      state: u,
      relative: m,
      preventScrollReset: y,
      unstable_viewTransition: x
    });
  };
  return /* @__PURE__ */ z.createElement("form", Vs({
    ref: a,
    method: T,
    action: U,
    onSubmit: d ? p : A
  }, C));
});
WL.displayName = "Form";
var Ld;
(function(i) {
  i.UseScrollRestoration = "useScrollRestoration", i.UseSubmit = "useSubmit", i.UseSubmitFetcher = "useSubmitFetcher", i.UseFetcher = "useFetcher", i.useViewTransitionState = "useViewTransitionState";
})(Ld || (Ld = {}));
var tN;
(function(i) {
  i.UseFetcher = "useFetcher", i.UseFetchers = "useFetchers", i.UseScrollRestoration = "useScrollRestoration";
})(tN || (tN = {}));
function KL(i) {
  return i + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function m1(i) {
  let a = z.useContext(Qu);
  return a || Rt(!1, KL(i)), a;
}
function GL(i, a) {
  let {
    target: o,
    replace: s,
    state: d,
    preventScrollReset: c,
    relative: u,
    unstable_viewTransition: g
  } = a === void 0 ? {} : a, v = tc(), p = zs(), m = nc(i, {
    relative: u
  });
  return z.useCallback((y) => {
    if (ML(y, o)) {
      y.preventDefault();
      let x = s !== void 0 ? s : Ju(p) === Ju(m);
      v(i, {
        replace: x,
        state: d,
        preventScrollReset: c,
        relative: u,
        unstable_viewTransition: g
      });
    }
  }, [p, v, m, s, d, o, i, c, u, g]);
}
function XL() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let qL = 0, QL = () => "__" + String(++qL) + "__";
function ZL() {
  let {
    router: i
  } = m1(Ld.UseSubmit), {
    basename: a
  } = z.useContext(Ga), o = EL();
  return z.useCallback(function(s, d) {
    d === void 0 && (d = {}), XL();
    let {
      action: c,
      method: u,
      encType: g,
      formData: v,
      body: p
    } = PL(s, a);
    if (d.navigate === !1) {
      let m = d.fetcherKey || QL();
      i.fetch(m, o, d.action || c, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: p,
        formMethod: d.method || u,
        formEncType: d.encType || g,
        unstable_flushSync: d.unstable_flushSync
      });
    } else
      i.navigate(d.action || c, {
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: p,
        formMethod: d.method || u,
        formEncType: d.encType || g,
        replace: d.replace,
        state: d.state,
        fromRouteId: o,
        unstable_flushSync: d.unstable_flushSync,
        unstable_viewTransition: d.unstable_viewTransition
      });
  }, [i, a, o]);
}
function eM(i, a) {
  let {
    relative: o
  } = a === void 0 ? {} : a, {
    basename: s
  } = z.useContext(Ga), d = z.useContext(Wr);
  d || Rt(!1, "useFormAction must be used inside a RouteContext");
  let [c] = d.matches.slice(-1), u = Vs({}, nc(i || ".", {
    relative: o
  })), g = zs();
  if (i == null) {
    u.search = g.search;
    let v = new URLSearchParams(u.search);
    v.has("index") && v.get("index") === "" && (v.delete("index"), u.search = v.toString() ? "?" + v.toString() : "");
  }
  return (!i || i === ".") && c.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (u.pathname = u.pathname === "/" ? s : Yr([s, u.pathname])), Ju(u);
}
function tM(i, a) {
  a === void 0 && (a = {});
  let o = z.useContext(h1);
  o == null && Rt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: s
  } = m1(Ld.useViewTransitionState), d = nc(i, {
    relative: a.relative
  });
  if (!o.isTransitioning)
    return !1;
  let c = _i(o.currentLocation.pathname, s) || o.currentLocation.pathname, u = _i(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return Od(d.pathname, u) != null || Od(d.pathname, c) != null;
}
var nM = {
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
const aM = /* @__PURE__ */ Fd(nM);
var rM = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function nN(i) {
  var a = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, o = i.match(/<\/?([^\s]+?)[/\s>]/);
  if (o && (a.name = o[1], (aM[o[1]] || i.charAt(i.length - 2) === "/") && (a.voidElement = !0), a.name.startsWith("!--"))) {
    var s = i.indexOf("-->");
    return { type: "comment", comment: s !== -1 ? i.slice(4, s) : "" };
  }
  for (var d = new RegExp(rM), c = null; (c = d.exec(i)) !== null; ) if (c[0].trim()) if (c[1]) {
    var u = c[1].trim(), g = [u, ""];
    u.indexOf("=") > -1 && (g = u.split("=")), a.attrs[g[0]] = g[1], d.lastIndex--;
  } else c[2] && (a.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
  return a;
}
var iM = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, oM = /^\s*$/, sM = /* @__PURE__ */ Object.create(null);
function v1(i, a) {
  switch (a.type) {
    case "text":
      return i + a.content;
    case "tag":
      return i += "<" + a.name + (a.attrs ? function(o) {
        var s = [];
        for (var d in o) s.push(d + '="' + o[d] + '"');
        return s.length ? " " + s.join(" ") : "";
      }(a.attrs) : "") + (a.voidElement ? "/>" : ">"), a.voidElement ? i : i + a.children.reduce(v1, "") + "</" + a.name + ">";
    case "comment":
      return i + "<!--" + a.comment + "-->";
  }
}
var lM = { parse: function(i, a) {
  a || (a = {}), a.components || (a.components = sM);
  var o, s = [], d = [], c = -1, u = !1;
  if (i.indexOf("<") !== 0) {
    var g = i.indexOf("<");
    s.push({ type: "text", content: g === -1 ? i : i.substring(0, g) });
  }
  return i.replace(iM, function(v, p) {
    if (u) {
      if (v !== "</" + o.name + ">") return;
      u = !1;
    }
    var m, y = v.charAt(1) !== "/", x = v.startsWith("<!--"), C = p + v.length, j = i.charAt(C);
    if (x) {
      var U = nN(v);
      return c < 0 ? (s.push(U), s) : ((m = d[c]).children.push(U), s);
    }
    if (y && (c++, (o = nN(v)).type === "tag" && a.components[o.name] && (o.type = "component", u = !0), o.voidElement || u || !j || j === "<" || o.children.push({ type: "text", content: i.slice(C, i.indexOf("<", C)) }), c === 0 && s.push(o), (m = d[c - 1]) && m.children.push(o), d[c] = o), (!y || o.voidElement) && (c > -1 && (o.voidElement || o.name === v.slice(2, -1)) && (c--, o = c === -1 ? s : d[c]), !u && j !== "<" && j)) {
      m = c === -1 ? s : d[c].children;
      var T = i.indexOf("<", C), A = i.slice(C, T === -1 ? void 0 : T);
      oM.test(A) && (A = " "), (T > -1 && c + m.length >= 0 || A !== " ") && m.push({ type: "text", content: A });
    }
  }), s;
}, stringify: function(i) {
  return i.reduce(function(a, o) {
    return a + v1("", o);
  }, "");
} };
function Td() {
  if (console && console.warn) {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    typeof a[0] == "string" && (a[0] = `react-i18next:: ${a[0]}`), console.warn(...a);
  }
}
const aN = {};
function Md() {
  for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
    a[o] = arguments[o];
  typeof a[0] == "string" && aN[a[0]] || (typeof a[0] == "string" && (aN[a[0]] = /* @__PURE__ */ new Date()), Td(...a));
}
const g1 = (i, a) => () => {
  if (i.isInitialized)
    a();
  else {
    const o = () => {
      setTimeout(() => {
        i.off("initialized", o);
      }, 0), a();
    };
    i.on("initialized", o);
  }
};
function rN(i, a, o) {
  i.loadNamespaces(a, g1(i, o));
}
function iN(i, a, o, s) {
  typeof o == "string" && (o = [o]), o.forEach((d) => {
    i.options.ns.indexOf(d) < 0 && i.options.ns.push(d);
  }), i.loadLanguages(a, g1(i, s));
}
function uM(i, a) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = a.languages[0], d = a.options ? a.options.fallbackLng : !1, c = a.languages[a.languages.length - 1];
  if (s.toLowerCase() === "cimode") return !0;
  const u = (g, v) => {
    const p = a.services.backendConnector.state[`${g}|${v}`];
    return p === -1 || p === 2;
  };
  return o.bindI18n && o.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !u(a.isLanguageChangingTo, i) ? !1 : !!(a.hasResourceBundle(s, i) || !a.services.backendConnector.backend || a.options.resources && !a.options.partialBundledLanguages || u(s, i) && (!d || u(c, i)));
}
function cM(i, a) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !a.languages || !a.languages.length ? (Md("i18n.languages were undefined or empty", a.languages), !0) : a.options.ignoreJSONStructure !== void 0 ? a.hasLoadedNamespace(i, {
    lng: o.lng,
    precheck: (d, c) => {
      if (o.bindI18n && o.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !c(d.isLanguageChangingTo, i)) return !1;
    }
  }) : uM(i, a, o);
}
const fM = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, dM = {
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
}, pM = (i) => dM[i], hM = (i) => i.replace(fM, pM);
let cg = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: hM
};
function mM() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  cg = {
    ...cg,
    ...i
  };
}
function y1() {
  return cg;
}
let b1;
function vM(i) {
  b1 = i;
}
function kg() {
  return b1;
}
function Zv(i, a) {
  if (!i) return !1;
  const o = i.props ? i.props.children : i.children;
  return a ? o.length > 0 : !!o;
}
function eg(i) {
  if (!i) return [];
  const a = i.props ? i.props.children : i.children;
  return i.props && i.props.i18nIsDynamicList ? Ms(a) : a;
}
function gM(i) {
  return Object.prototype.toString.call(i) !== "[object Array]" ? !1 : i.every((a) => z.isValidElement(a));
}
function Ms(i) {
  return Array.isArray(i) ? i : [i];
}
function yM(i, a) {
  const o = {
    ...a
  };
  return o.props = Object.assign(i.props, a.props), o;
}
function x1(i, a) {
  if (!i) return "";
  let o = "";
  const s = Ms(i), d = a.transSupportBasicHtmlNodes && a.transKeepBasicHtmlNodesFor ? a.transKeepBasicHtmlNodesFor : [];
  return s.forEach((c, u) => {
    if (typeof c == "string")
      o += `${c}`;
    else if (z.isValidElement(c)) {
      const g = Object.keys(c.props).length, v = d.indexOf(c.type) > -1, p = c.props.children;
      if (!p && v && g === 0)
        o += `<${c.type}/>`;
      else if (!p && (!v || g !== 0))
        o += `<${u}></${u}>`;
      else if (c.props.i18nIsDynamicList)
        o += `<${u}></${u}>`;
      else if (v && g === 1 && typeof p == "string")
        o += `<${c.type}>${p}</${c.type}>`;
      else {
        const m = x1(p, a);
        o += `<${u}>${m}</${u}>`;
      }
    } else if (c === null)
      Td("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof c == "object") {
      const {
        format: g,
        ...v
      } = c, p = Object.keys(v);
      if (p.length === 1) {
        const m = g ? `${p[0]}, ${g}` : p[0];
        o += `{{${m}}}`;
      } else
        Td("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", c);
    } else
      Td("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", c);
  }), o;
}
function bM(i, a, o, s, d, c) {
  if (a === "") return [];
  const u = s.transKeepBasicHtmlNodesFor || [], g = a && new RegExp(u.map((T) => `<${T}`).join("|")).test(a);
  if (!i && !g && !c) return [a];
  const v = {};
  function p(T) {
    Ms(T).forEach((M) => {
      typeof M != "string" && (Zv(M) ? p(eg(M)) : typeof M == "object" && !z.isValidElement(M) && Object.assign(v, M));
    });
  }
  p(i);
  const m = lM.parse(`<0>${a}</0>`), y = {
    ...v,
    ...d
  };
  function x(T, A, M) {
    const V = eg(T), D = j(V, A.children, M);
    return gM(V) && D.length === 0 || T.props && T.props.i18nIsDynamicList ? V : D;
  }
  function C(T, A, M, V, D) {
    T.dummy ? (T.children = A, M.push(z.cloneElement(T, {
      key: V
    }, D ? void 0 : A))) : M.push(...z.Children.map([T], (F) => {
      const L = {
        ...F.props
      };
      return delete L.i18nIsDynamicList, z.createElement(F.type, {
        ...L,
        key: V,
        ref: F.ref
      }, D ? null : A);
    }));
  }
  function j(T, A, M) {
    const V = Ms(T);
    return Ms(A).reduce((F, L, G) => {
      const ce = L.children && L.children[0] && L.children[0].content && o.services.interpolator.interpolate(L.children[0].content, y, o.language);
      if (L.type === "tag") {
        let ve = V[parseInt(L.name, 10)];
        M.length === 1 && !ve && (ve = M[0][L.name]), ve || (ve = {});
        const fe = Object.keys(L.attrs).length !== 0 ? yM({
          props: L.attrs
        }, ve) : ve, ge = z.isValidElement(fe), Ve = ge && Zv(L, !0) && !L.voidElement, de = g && typeof fe == "object" && fe.dummy && !ge, ye = typeof i == "object" && i !== null && Object.hasOwnProperty.call(i, L.name);
        if (typeof fe == "string") {
          const he = o.services.interpolator.interpolate(fe, y, o.language);
          F.push(he);
        } else if (Zv(fe) || Ve) {
          const he = x(fe, L, M);
          C(fe, he, F, G);
        } else if (de) {
          const he = j(V, L.children, M);
          C(fe, he, F, G);
        } else if (Number.isNaN(parseFloat(L.name)))
          if (ye) {
            const he = x(fe, L, M);
            C(fe, he, F, G, L.voidElement);
          } else if (s.transSupportBasicHtmlNodes && u.indexOf(L.name) > -1)
            if (L.voidElement)
              F.push(z.createElement(L.name, {
                key: `${L.name}-${G}`
              }));
            else {
              const he = j(V, L.children, M);
              F.push(z.createElement(L.name, {
                key: `${L.name}-${G}`
              }, he));
            }
          else if (L.voidElement)
            F.push(`<${L.name} />`);
          else {
            const he = j(V, L.children, M);
            F.push(`<${L.name}>${he}</${L.name}>`);
          }
        else if (typeof fe == "object" && !ge) {
          const he = L.children[0] ? ce : null;
          he && F.push(he);
        } else
          C(fe, ce, F, G, L.children.length !== 1 || !ce);
      } else if (L.type === "text") {
        const ve = s.transWrapTextNodes, fe = c ? s.unescape(o.services.interpolator.interpolate(L.content, y, o.language)) : o.services.interpolator.interpolate(L.content, y, o.language);
        ve ? F.push(z.createElement(ve, {
          key: `${L.name}-${G}`
        }, fe)) : F.push(fe);
      }
      return F;
    }, []);
  }
  const U = j([{
    dummy: !0,
    children: i || []
  }], m, Ms(i || []));
  return eg(U[0]);
}
function xM(i) {
  let {
    children: a,
    count: o,
    parent: s,
    i18nKey: d,
    context: c,
    tOptions: u = {},
    values: g,
    defaults: v,
    components: p,
    ns: m,
    i18n: y,
    t: x,
    shouldUnescape: C,
    ...j
  } = i;
  const U = y || kg();
  if (!U)
    return Md("You will need to pass in an i18next instance by using i18nextReactModule"), a;
  const T = x || U.t.bind(U) || ((Ve) => Ve), A = {
    ...y1(),
    ...U.options && U.options.react
  };
  let M = m || T.ns || U.options && U.options.defaultNS;
  M = typeof M == "string" ? [M] : M || ["translation"];
  const V = x1(a, A), D = v || V || A.transEmptyNodeValue || d, {
    hashTransKey: F
  } = A, L = d || (F ? F(V || D) : V || D);
  U.options && U.options.interpolation && U.options.interpolation.defaultVariables && (g = g && Object.keys(g).length > 0 ? {
    ...g,
    ...U.options.interpolation.defaultVariables
  } : {
    ...U.options.interpolation.defaultVariables
  });
  const G = g || o !== void 0 || !a ? u.interpolation : {
    interpolation: {
      ...u.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, ce = {
    ...u,
    context: c || u.context,
    count: o,
    ...g,
    ...G,
    defaultValue: D,
    ns: M
  }, ve = L ? T(L, ce) : D;
  p && Object.keys(p).forEach((Ve) => {
    const de = p[Ve];
    if (typeof de.type == "function" || !de.props || !de.props.children || ve.indexOf(`${Ve}/>`) < 0 && ve.indexOf(`${Ve} />`) < 0) return;
    function ye() {
      return z.createElement(z.Fragment, null, de);
    }
    p[Ve] = z.createElement(ye);
  });
  const fe = bM(p || a, ve, U, A, ce, C), ge = s !== void 0 ? s : A.defaultTransParent;
  return ge ? z.createElement(ge, j, fe) : fe;
}
const SM = {
  type: "3rdParty",
  init(i) {
    mM(i.options.react), vM(i);
  }
}, S1 = z.createContext();
class NM {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(a) {
    a.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Ls(i) {
  let {
    children: a,
    count: o,
    parent: s,
    i18nKey: d,
    context: c,
    tOptions: u = {},
    values: g,
    defaults: v,
    components: p,
    ns: m,
    i18n: y,
    t: x,
    shouldUnescape: C,
    ...j
  } = i;
  const {
    i18n: U,
    defaultNS: T
  } = z.useContext(S1) || {}, A = y || U || kg(), M = x || A && A.t.bind(A);
  return xM({
    children: a,
    count: o,
    parent: s,
    i18nKey: d,
    context: c,
    tOptions: u,
    values: g,
    defaults: v,
    components: p,
    ns: m || M && M.ns || T || A && A.options && A.options.defaultNS,
    i18n: A,
    t: x,
    shouldUnescape: C,
    ...j
  });
}
const wM = (i, a) => {
  const o = z.useRef();
  return z.useEffect(() => {
    o.current = i;
  }, [i, a]), o.current;
};
function N1(i, a, o, s) {
  return i.getFixedT(a, o, s);
}
function EM(i, a, o, s) {
  return z.useCallback(N1(i, a, o, s), [i, a, o, s]);
}
function Ui(i) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: o
  } = a, {
    i18n: s,
    defaultNS: d
  } = z.useContext(S1) || {}, c = o || s || kg();
  if (c && !c.reportNamespaces && (c.reportNamespaces = new NM()), !c) {
    Md("You will need to pass in an i18next instance by using initReactI18next");
    const D = (L, G) => typeof G == "string" ? G : G && typeof G == "object" && typeof G.defaultValue == "string" ? G.defaultValue : Array.isArray(L) ? L[L.length - 1] : L, F = [D, {}, !1];
    return F.t = D, F.i18n = {}, F.ready = !1, F;
  }
  c.options.react && c.options.react.wait !== void 0 && Md("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...y1(),
    ...c.options.react,
    ...a
  }, {
    useSuspense: g,
    keyPrefix: v
  } = u;
  let p = d || c.options && c.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], c.reportNamespaces.addUsedNamespaces && c.reportNamespaces.addUsedNamespaces(p);
  const m = (c.isInitialized || c.initializedStoreOnce) && p.every((D) => cM(D, c, u)), y = EM(c, a.lng || null, u.nsMode === "fallback" ? p : p[0], v), x = () => y, C = () => N1(c, a.lng || null, u.nsMode === "fallback" ? p : p[0], v), [j, U] = z.useState(x);
  let T = p.join();
  a.lng && (T = `${a.lng}${T}`);
  const A = wM(T), M = z.useRef(!0);
  z.useEffect(() => {
    const {
      bindI18n: D,
      bindI18nStore: F
    } = u;
    M.current = !0, !m && !g && (a.lng ? iN(c, a.lng, p, () => {
      M.current && U(C);
    }) : rN(c, p, () => {
      M.current && U(C);
    })), m && A && A !== T && M.current && U(C);
    function L() {
      M.current && U(C);
    }
    return D && c && c.on(D, L), F && c && c.store.on(F, L), () => {
      M.current = !1, D && c && D.split(" ").forEach((G) => c.off(G, L)), F && c && F.split(" ").forEach((G) => c.store.off(G, L));
    };
  }, [c, T]), z.useEffect(() => {
    M.current && m && U(x);
  }, [c, v, m]);
  const V = [j, c, m];
  if (V.t = j, V.i18n = c, V.ready = m, m || !m && !g) return V;
  throw new Promise((D) => {
    a.lng ? iN(c, a.lng, p, () => D()) : rN(c, p, () => D());
  });
}
const CM = "Management", RM = "Comment", jM = "Login", TM = "Logout", DM = "Register", kM = "Email", OM = "Password", LM = "Nickname", MM = "Personal Website", AM = "Setting", _M = "Profile", PM = "Homepage", UM = "All", VM = "Mine", FM = "Approved", zM = "Waiting", $M = "Spam", HM = "Sticky", BM = "Edit", IM = "Reply", JM = "Action", YM = "Filter", WM = "Author", KM = "Content", GM = "Username", XM = "Submit", qM = "Cancel", QM = "At", ZM = "Migration", eA = "Exporting…", tA = "Under verification", nA = "Administrator", aA = "Guest", rA = "User", iA = "Role", bd = {
  management: CM,
  comment: RM,
  login: jM,
  logout: TM,
  register: DM,
  email: kM,
  password: OM,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: LM,
  website: MM,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: AM,
  profile: _M,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: PM,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: UM,
  mine: VM,
  approved: FM,
  "approved button": "Approved",
  waiting: zM,
  spam: $M,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: HM,
  edit: BM,
  reply: IM,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: JM,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: YM,
  author: WM,
  content: KM,
  username: GM,
  submit: XM,
  cancel: qM,
  at: QM,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: ZM,
  exporting: eA,
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
  verify: tA,
  administrator: nA,
  guest: aA,
  user: rA,
  "manage users": "Manage Users",
  role: iA,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, oA = "管理", sA = "评论", lA = "登录", uA = "登出", cA = "用户注册", fA = "邮箱", dA = "密码", pA = "昵称", hA = "个人网站", mA = "个人设置", vA = "个人资料", gA = "个人主页地址", yA = "所有", bA = "我的", xA = "已通过", SA = "待审核", NA = "垃圾", wA = "置顶评论", EA = "编辑", CA = "回复", RA = "操作", jA = "筛选", TA = "作者", DA = "内容", kA = "用户名", OA = "提交", LA = "取消", MA = "于", AA = "导入导出", _A = "导出中...", PA = "待认证", UA = "管理员", VA = "普通用户", FA = "用户", zA = "角色", oN = {
  management: oA,
  comment: sA,
  login: lA,
  logout: uA,
  register: cA,
  email: fA,
  password: dA,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: pA,
  website: hA,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: mA,
  profile: vA,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: gA,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: yA,
  mine: bA,
  approved: xA,
  "approved button": "通过",
  waiting: SA,
  spam: NA,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: wA,
  edit: EA,
  reply: CA,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: RA,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: jA,
  author: TA,
  content: DA,
  username: kA,
  submit: OA,
  cancel: LA,
  at: MA,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: AA,
  exporting: _A,
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
  verify: PA,
  administrator: UA,
  guest: VA,
  user: FA,
  "manage users": "管理用户",
  role: zA,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, $A = "管理", HA = "留言", BA = "登入", IA = "登出", JA = "使用者註冊", YA = "信箱", WA = "密碼", KA = "暱稱", GA = "個人網站", XA = "個人設定", qA = "個人資料", QA = "個人首頁網址", ZA = "所有", e_ = "我的", t_ = "已通過", n_ = "待審核", a_ = "垃圾", r_ = "置頂留言", i_ = "編輯", o_ = "回覆", s_ = "動作", l_ = "篩選", u_ = "作者", c_ = "內容", f_ = "使用者名稱", d_ = "送出", p_ = "取消", h_ = "於", m_ = "匯入匯出", v_ = "匯出中...", g_ = "待認證", y_ = "管理員", b_ = "使用者", x_ = "使用者", S_ = "角色", N_ = {
  management: $A,
  comment: HA,
  login: BA,
  logout: IA,
  register: JA,
  email: YA,
  password: WA,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: KA,
  website: GA,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: XA,
  profile: qA,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: QA,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: ZA,
  mine: e_,
  approved: t_,
  "approved button": "通過",
  waiting: n_,
  spam: a_,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: r_,
  edit: i_,
  reply: o_,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: s_,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: l_,
  author: u_,
  content: c_,
  username: f_,
  submit: d_,
  cancel: p_,
  at: h_,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: m_,
  exporting: v_,
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
  verify: g_,
  administrator: y_,
  guest: b_,
  user: x_,
  "manage users": "使用者管理",
  role: S_,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, sN = [
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
], w_ = {
  "zh-cn": { translations: oN },
  "zh-CN": { translations: oN },
  en: { translations: bd },
  "en-US": { translations: bd },
  "zh-TW": { translations: N_ },
  jp: { translations: bd },
  "jp-JP": { translations: bd }
};
function jo() {
  const i = qu(), a = tc(), o = Pi((m) => m.user), { t: s, i18n: d } = Ui(), [c, u] = z.useState(null), g = z.useMemo(() => {
    const m = sN.find(
      (y) => y.alias.includes(d.language)
    );
    return (m == null ? void 0 : m.value) ?? "";
  }, [d.language]);
  z.useEffect(() => {
    !(o != null && o.email) || !(o != null && o.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((m) => m.json()).then((m) => {
      o.__version !== m.version && u(m.version);
    });
  }, [o == null ? void 0 : o.email]);
  const v = function(m) {
    d.changeLanguage(m.target.value);
  }, p = function(m) {
    m.preventDefault(), i.user.logout(), a("/ui/login");
  };
  return [
    /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (o == null ? void 0 : o.type) === "administrator" ? /* @__PURE__ */ w.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ w.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ w.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui", children: s("management") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ w.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui", children: s("comment") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/user", children: s("user") }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("li", { className: "last", children: /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/migration", children: s("migration") }, void 0, !1, {
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
            defaultValue: g,
            onChange: v,
            style: { width: 120 },
            children: sN.map((m) => /* @__PURE__ */ w.jsxDEV("option", { value: m.value, children: m.label }, m.value, !1, {
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
        o != null && o.type ? /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/profile", className: "author", children: o.display_name }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/components/Header.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this) : null,
        o != null && o.type ? /* @__PURE__ */ w.jsxDEV("a", { className: "exit", href: "#", onClick: p, children: s("logout") }, void 0, !1, {
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
    c ? /* @__PURE__ */ w.jsxDEV("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ w.jsxDEV(
      Ls,
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
          version: c
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
function E_() {
  const { t: i } = Ui(), a = qu(), o = tc(), s = Pi((p) => p.user), [d, c] = z.useState(!1), [u, g] = z.useState(!1);
  z.useEffect(() => {
    s && s.email && o("/ui", { replace: !0 });
  }, [o]);
  const v = async function(p) {
    p.preventDefault(), c(!1);
    const m = p.target.email.value;
    if (!m)
      return c(i("please input email"));
    try {
      g(!0), await a.user.forgot({
        email: m
      }), alert(i("find password success! please go to your mailbox to reset it!")), o("/ui/login");
    } catch {
      c(i("find password error! try again later"));
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
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
      /* @__PURE__ */ w.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: v, children: [
        /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: i("email") }, void 0, !1, {
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
              placeholder: i("email"),
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
          /* @__PURE__ */ w.jsxDEV("p", { className: "description", style: { textAlign: "left" }, children: i(
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
            disabled: u,
            className: "btn btn-l w-100 primary",
            children: i("get new password")
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
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui", children: i("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/login", children: i("register.login") }, void 0, !1, {
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
const C_ = (i) => /* @__PURE__ */ z.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), R_ = (i) => /* @__PURE__ */ z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...i }, /* @__PURE__ */ z.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ z.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), j_ = (i) => /* @__PURE__ */ z.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), T_ = (i) => /* @__PURE__ */ z.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...i }, /* @__PURE__ */ z.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ z.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), D_ = (i) => /* @__PURE__ */ z.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), k_ = (i) => /* @__PURE__ */ z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...i }, /* @__PURE__ */ z.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ z.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ z.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ z.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), O_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: j_,
  github: C_,
  google: k_,
  qq: D_,
  twitter: R_,
  weibo: T_
}, Symbol.toStringTag, { value: "Module" })), Dd = {}, lN = (i) => {
  const a = document.querySelector(`script[src="${i}"]`);
  if (a)
    return Dd[i] = {
      loading: !1,
      error: null,
      scriptEl: a
    };
};
function w1({
  src: i,
  checkForExisting: a = !1,
  ...o
}) {
  let s = i ? Dd[i] : void 0;
  !s && a && i && uN && (s = lN(i));
  const [d, c] = z.useState(
    s ? s.loading : !!i
  ), [u, g] = z.useState(s ? s.error : null), [v, p] = z.useState(!1);
  return z.useEffect(() => {
    if (!uN || !i || v || u) return;
    s = Dd[i], !s && a && (s = lN(i));
    let m;
    s ? m = s.scriptEl : (m = document.createElement("script"), m.src = i, Object.keys(o).forEach((C) => {
      m[C] === void 0 ? m.setAttribute(C, o[C]) : m[C] = o[C];
    }), s = Dd[i] = {
      loading: !0,
      error: null,
      scriptEl: m
    });
    const y = () => {
      s && (s.loading = !1), c(!1), p(!0);
    }, x = (C) => {
      s && (s.error = C), g(C);
    };
    return m.addEventListener("load", y), m.addEventListener("error", x), document.body.appendChild(m), () => {
      m.removeEventListener("load", y), m.removeEventListener("error", x);
    };
  }, [i]), [d, u];
}
const uN = typeof window < "u" && typeof window.document < "u";
function L_({
  sitekey: i,
  hideDefaultBadge: a = !1,
  checkForExisting: o = !0
}) {
  const [s, d] = z.useState();
  return z.useEffect(() => {
    M_ && a && A_(".grecaptcha-badge { visibility: hidden; }");
  }, [a]), w1({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${i}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    }),
    checkForExisting: o
  }), z.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    });
  }, []), (c) => new Promise((u, g) => {
    s ? u(s.execute(i, { action: c })) : g(new Error("Recaptcha script not available"));
  });
}
const M_ = typeof window < "u" && typeof window.document < "u", A_ = (i) => {
  const a = document.createElement("style");
  document.head.appendChild(a);
  const o = a.sheet;
  o && o.insertRule(i, o.cssRules.length);
};
function __({ sitekey: i, checkForExisting: a = !0 }) {
  const [o, s] = z.useState();
  return w1({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      s(window.turnstile);
    }),
    async: !1,
    checkForExisting: a
  }), z.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      s(window.turnstile);
    });
  }, []), (d) => new Promise((c, u) => {
    if (!o)
      return u(new Error("Turnstile script not available"));
    o.render(".captcha-container", {
      sitekey: i,
      action: d,
      callback: c
    });
  });
}
function E1(i) {
  const a = L_(i), o = __(i);
  return window.turnstileKey ? o : window.recaptchaV3Key ? a : () => {
  };
}
const P_ = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, a) {
    console && console[i] && console[i].apply(console, a);
  }
};
class Ad {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(a, o);
  }
  init(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = a || P_, this.options = o, this.debug = o.debug;
  }
  log() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return this.forward(o, "log", "", !0);
  }
  warn() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return this.forward(o, "warn", "", !0);
  }
  error() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return this.forward(o, "error", "");
  }
  deprecate() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return this.forward(o, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(a, o, s, d) {
    return d && !this.debug ? null : (typeof a[0] == "string" && (a[0] = `${s}${this.prefix} ${a[0]}`), this.logger[o](a));
  }
  create(a) {
    return new Ad(this.logger, {
      prefix: `${this.prefix}:${a}:`,
      ...this.options
    });
  }
  clone(a) {
    return a = a || this.options, a.prefix = a.prefix || this.prefix, new Ad(this.logger, a);
  }
}
var dr = new Ad();
class Hd {
  constructor() {
    this.observers = {};
  }
  on(a, o) {
    return a.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const d = this.observers[s].get(o) || 0;
      this.observers[s].set(o, d + 1);
    }), this;
  }
  off(a, o) {
    if (this.observers[a]) {
      if (!o) {
        delete this.observers[a];
        return;
      }
      this.observers[a].delete(o);
    }
  }
  emit(a) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
      s[d - 1] = arguments[d];
    this.observers[a] && Array.from(this.observers[a].entries()).forEach((u) => {
      let [g, v] = u;
      for (let p = 0; p < v; p++)
        g(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [g, v] = u;
      for (let p = 0; p < v; p++)
        g.apply(g, [a, ...s]);
    });
  }
}
function Au() {
  let i, a;
  const o = new Promise((s, d) => {
    i = s, a = d;
  });
  return o.resolve = i, o.reject = a, o;
}
function cN(i) {
  return i == null ? "" : "" + i;
}
function U_(i, a, o) {
  i.forEach((s) => {
    a[s] && (o[s] = a[s]);
  });
}
const V_ = /###/g;
function Hu(i, a, o) {
  function s(g) {
    return g && g.indexOf("###") > -1 ? g.replace(V_, ".") : g;
  }
  function d() {
    return !i || typeof i == "string";
  }
  const c = typeof a != "string" ? a : a.split(".");
  let u = 0;
  for (; u < c.length - 1; ) {
    if (d()) return {};
    const g = s(c[u]);
    !i[g] && o && (i[g] = new o()), Object.prototype.hasOwnProperty.call(i, g) ? i = i[g] : i = {}, ++u;
  }
  return d() ? {} : {
    obj: i,
    k: s(c[u])
  };
}
function fN(i, a, o) {
  const {
    obj: s,
    k: d
  } = Hu(i, a, Object);
  if (s !== void 0 || a.length === 1) {
    s[d] = o;
    return;
  }
  let c = a[a.length - 1], u = a.slice(0, a.length - 1), g = Hu(i, u, Object);
  for (; g.obj === void 0 && u.length; )
    c = `${u[u.length - 1]}.${c}`, u = u.slice(0, u.length - 1), g = Hu(i, u, Object), g && g.obj && typeof g.obj[`${g.k}.${c}`] < "u" && (g.obj = void 0);
  g.obj[`${g.k}.${c}`] = o;
}
function F_(i, a, o, s) {
  const {
    obj: d,
    k: c
  } = Hu(i, a, Object);
  d[c] = d[c] || [], d[c].push(o);
}
function _d(i, a) {
  const {
    obj: o,
    k: s
  } = Hu(i, a);
  if (o)
    return o[s];
}
function z_(i, a, o) {
  const s = _d(i, o);
  return s !== void 0 ? s : _d(a, o);
}
function C1(i, a, o) {
  for (const s in a)
    s !== "__proto__" && s !== "constructor" && (s in i ? typeof i[s] == "string" || i[s] instanceof String || typeof a[s] == "string" || a[s] instanceof String ? o && (i[s] = a[s]) : C1(i[s], a[s], o) : i[s] = a[s]);
  return i;
}
function Ds(i) {
  return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var $_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function H_(i) {
  return typeof i == "string" ? i.replace(/[&<>"'\/]/g, (a) => $_[a]) : i;
}
class B_ {
  constructor(a) {
    this.capacity = a, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(a) {
    const o = this.regExpMap.get(a);
    if (o !== void 0)
      return o;
    const s = new RegExp(a);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(a, s), this.regExpQueue.push(a), s;
  }
}
const I_ = [" ", ",", "?", "!", ";"], J_ = new B_(20);
function Y_(i, a, o) {
  a = a || "", o = o || "";
  const s = I_.filter((u) => a.indexOf(u) < 0 && o.indexOf(u) < 0);
  if (s.length === 0) return !0;
  const d = J_.getRegExp(`(${s.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let c = !d.test(i);
  if (!c) {
    const u = i.indexOf(o);
    u > 0 && !d.test(i.substring(0, u)) && (c = !0);
  }
  return c;
}
function fg(i, a) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i) return;
  if (i[a]) return i[a];
  const s = a.split(o);
  let d = i;
  for (let c = 0; c < s.length; ) {
    if (!d || typeof d != "object")
      return;
    let u, g = "";
    for (let v = c; v < s.length; ++v)
      if (v !== c && (g += o), g += s[v], u = d[g], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && v < s.length - 1)
          continue;
        c += v - c + 1;
        break;
      }
    d = u;
  }
  return d;
}
function Pd(i) {
  return i && i.indexOf("_") > 0 ? i.replace("_", "-") : i;
}
class dN extends Hd {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = a || {}, this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(a) {
    this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
  }
  removeNamespaces(a) {
    const o = this.options.ns.indexOf(a);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator, u = d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let g;
    a.indexOf(".") > -1 ? g = a.split(".") : (g = [a, o], s && (Array.isArray(s) ? g.push(...s) : typeof s == "string" && c ? g.push(...s.split(c)) : g.push(s)));
    const v = _d(this.data, g);
    return !v && !o && !s && a.indexOf(".") > -1 && (a = g[0], o = g[1], s = g.slice(2).join(".")), v || !u || typeof s != "string" ? v : fg(this.data && this.data[a] && this.data[a][o], s, c);
  }
  addResource(a, o, s, d) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let g = [a, o];
    s && (g = g.concat(u ? s.split(u) : s)), a.indexOf(".") > -1 && (g = a.split("."), d = o, o = g[1]), this.addNamespaces(o), fN(this.data, g, d), c.silent || this.emit("added", a, o, s, d);
  }
  addResources(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const c in s)
      (typeof s[c] == "string" || Array.isArray(s[c])) && this.addResource(a, o, c, s[c], {
        silent: !0
      });
    d.silent || this.emit("added", a, o, s);
  }
  addResourceBundle(a, o, s, d, c) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, g = [a, o];
    a.indexOf(".") > -1 && (g = a.split("."), d = s, s = o, o = g[1]), this.addNamespaces(o);
    let v = _d(this.data, g) || {};
    u.skipCopy || (s = JSON.parse(JSON.stringify(s))), d ? C1(v, s, c) : v = {
      ...v,
      ...s
    }, fN(this.data, g, v), u.silent || this.emit("added", a, o, s);
  }
  removeResourceBundle(a, o) {
    this.hasResourceBundle(a, o) && delete this.data[a][o], this.removeNamespaces(o), this.emit("removed", a, o);
  }
  hasResourceBundle(a, o) {
    return this.getResource(a, o) !== void 0;
  }
  getResourceBundle(a, o) {
    return o || (o = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(a, o)
    } : this.getResource(a, o);
  }
  getDataByLanguage(a) {
    return this.data[a];
  }
  hasLanguageSomeTranslations(a) {
    const o = this.getDataByLanguage(a);
    return !!(o && Object.keys(o) || []).find((d) => o[d] && Object.keys(o[d]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var R1 = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, a, o, s, d) {
    return i.forEach((c) => {
      this.processors[c] && (a = this.processors[c].process(a, o, s, d));
    }), a;
  }
};
const pN = {};
class Ud extends Hd {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), U_(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = dr.create("translator");
  }
  changeLanguage(a) {
    a && (this.language = a);
  }
  exists(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (a == null)
      return !1;
    const s = this.resolve(a, o);
    return s && s.res !== void 0;
  }
  extractFromKey(a, o) {
    let s = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = o.ns || this.options.defaultNS || [];
    const u = s && a.indexOf(s) > -1, g = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !Y_(a, s, d);
    if (u && !g) {
      const v = a.match(this.interpolator.nestingRegexp);
      if (v && v.length > 0)
        return {
          key: a,
          namespaces: c
        };
      const p = a.split(s);
      (s !== d || s === d && this.options.ns.indexOf(p[0]) > -1) && (c = p.shift()), a = p.join(d);
    }
    return typeof c == "string" && (c = [c]), {
      key: a,
      namespaces: c
    };
  }
  translate(a, o, s) {
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), a == null) return "";
    Array.isArray(a) || (a = [String(a)]);
    const d = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: g
    } = this.extractFromKey(a[a.length - 1], o), v = g[g.length - 1], p = o.lng || this.language, m = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (m) {
        const D = o.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${v}${D}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: p,
          usedNS: v,
          usedParams: this.getUsedParamsDetails(o)
        } : `${v}${D}${u}`;
      }
      return d ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: p,
        usedNS: v,
        usedParams: this.getUsedParamsDetails(o)
      } : u;
    }
    const y = this.resolve(a, o);
    let x = y && y.res;
    const C = y && y.usedKey || u, j = y && y.exactUsedKey || u, U = Object.prototype.toString.apply(x), T = ["[object Number]", "[object Function]", "[object RegExp]"], A = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, M = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (M && x && (typeof x != "string" && typeof x != "boolean" && typeof x != "number") && T.indexOf(U) < 0 && !(typeof A == "string" && Array.isArray(x))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const D = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(C, x, {
          ...o,
          ns: g
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return d ? (y.res = D, y.usedParams = this.getUsedParamsDetails(o), y) : D;
      }
      if (c) {
        const D = Array.isArray(x), F = D ? [] : {}, L = D ? j : C;
        for (const G in x)
          if (Object.prototype.hasOwnProperty.call(x, G)) {
            const ce = `${L}${c}${G}`;
            F[G] = this.translate(ce, {
              ...o,
              joinArrays: !1,
              ns: g
            }), F[G] === ce && (F[G] = x[G]);
          }
        x = F;
      }
    } else if (M && typeof A == "string" && Array.isArray(x))
      x = x.join(A), x && (x = this.extendTranslation(x, a, o, s));
    else {
      let D = !1, F = !1;
      const L = o.count !== void 0 && typeof o.count != "string", G = Ud.hasDefaultValue(o), ce = L ? this.pluralResolver.getSuffix(p, o.count, o) : "", ve = o.ordinal && L ? this.pluralResolver.getSuffix(p, o.count, {
        ordinal: !1
      }) : "", fe = L && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(), ge = fe && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${ce}`] || o[`defaultValue${ve}`] || o.defaultValue;
      !this.isValidLookup(x) && G && (D = !0, x = ge), this.isValidLookup(x) || (F = !0, x = u);
      const de = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && F ? void 0 : x, ye = G && ge !== x && this.options.updateMissing;
      if (F || D || ye) {
        if (this.logger.log(ye ? "updateKey" : "missingKey", p, v, u, ye ? ge : x), c) {
          const He = this.resolve(u, {
            ...o,
            keySeparator: !1
          });
          He && He.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let he = [];
        const Pe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Pe && Pe[0])
          for (let He = 0; He < Pe.length; He++)
            he.push(Pe[He]);
        else this.options.saveMissingTo === "all" ? he = this.languageUtils.toResolveHierarchy(o.lng || this.language) : he.push(o.lng || this.language);
        const Ne = (He, yt, Be) => {
          const Vt = G && Be !== x ? Be : de;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(He, v, yt, Vt, ye, o) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(He, v, yt, Vt, ye, o), this.emit("missingKey", He, v, yt, x);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? he.forEach((He) => {
          const yt = this.pluralResolver.getSuffixes(He, o);
          fe && o[`defaultValue${this.options.pluralSeparator}zero`] && yt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && yt.push(`${this.options.pluralSeparator}zero`), yt.forEach((Be) => {
            Ne([He], u + Be, o[`defaultValue${Be}`] || ge);
          });
        }) : Ne(he, u, ge));
      }
      x = this.extendTranslation(x, a, o, y, s), F && x === u && this.options.appendNamespaceToMissingKey && (x = `${v}:${u}`), (F || D) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? x = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${v}:${u}` : u, D ? x : void 0) : x = this.options.parseMissingKeyHandler(x));
    }
    return d ? (y.res = x, y.usedParams = this.getUsedParamsDetails(o), y) : x;
  }
  extendTranslation(a, o, s, d, c) {
    var u = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      a = this.i18nFormat.parse(a, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || d.usedLng, d.usedNS, d.usedKey, {
        resolved: d
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const p = typeof a == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let m;
      if (p) {
        const x = a.match(this.interpolator.nestingRegexp);
        m = x && x.length;
      }
      let y = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (y = {
        ...this.options.interpolation.defaultVariables,
        ...y
      }), a = this.interpolator.interpolate(a, y, s.lng || this.language, s), p) {
        const x = a.match(this.interpolator.nestingRegexp), C = x && x.length;
        m < C && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (s.lng = d.usedLng), s.nest !== !1 && (a = this.interpolator.nest(a, function() {
        for (var x = arguments.length, C = new Array(x), j = 0; j < x; j++)
          C[j] = arguments[j];
        return c && c[0] === C[0] && !s.context ? (u.logger.warn(`It seems you are nesting recursively key: ${C[0]} in key: ${o[0]}`), null) : u.translate(...C, o);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const g = s.postProcess || this.options.postProcess, v = typeof g == "string" ? [g] : g;
    return a != null && v && v.length && s.applyPostProcessor !== !1 && (a = R1.handle(v, a, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...d,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), a;
  }
  resolve(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, d, c, u, g;
    return typeof a == "string" && (a = [a]), a.forEach((v) => {
      if (this.isValidLookup(s)) return;
      const p = this.extractFromKey(v, o), m = p.key;
      d = m;
      let y = p.namespaces;
      this.options.fallbackNS && (y = y.concat(this.options.fallbackNS));
      const x = o.count !== void 0 && typeof o.count != "string", C = x && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", U = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      y.forEach((T) => {
        this.isValidLookup(s) || (g = T, !pN[`${U[0]}-${T}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(g) && (pN[`${U[0]}-${T}`] = !0, this.logger.warn(`key "${d}" for languages "${U.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), U.forEach((A) => {
          if (this.isValidLookup(s)) return;
          u = A;
          const M = [m];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(M, m, A, T, o);
          else {
            let D;
            x && (D = this.pluralResolver.getSuffix(A, o.count, o));
            const F = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (x && (M.push(m + D), o.ordinal && D.indexOf(L) === 0 && M.push(m + D.replace(L, this.options.pluralSeparator)), C && M.push(m + F)), j) {
              const G = `${m}${this.options.contextSeparator}${o.context}`;
              M.push(G), x && (M.push(G + D), o.ordinal && D.indexOf(L) === 0 && M.push(G + D.replace(L, this.options.pluralSeparator)), C && M.push(G + F));
            }
          }
          let V;
          for (; V = M.pop(); )
            this.isValidLookup(s) || (c = V, s = this.getResource(A, T, V, o));
        }));
      });
    }), {
      res: s,
      usedKey: d,
      exactUsedKey: c,
      usedLng: u,
      usedNS: g
    };
  }
  isValidLookup(a) {
    return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === "");
  }
  getResource(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(a, o, s, d) : this.resourceStore.getResource(a, o, s, d);
  }
  getUsedParamsDetails() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = a.replace && typeof a.replace != "string";
    let d = s ? a.replace : a;
    if (s && typeof a.count < "u" && (d.count = a.count), this.options.interpolation.defaultVariables && (d = {
      ...this.options.interpolation.defaultVariables,
      ...d
    }), !s) {
      d = {
        ...d
      };
      for (const c of o)
        delete d[c];
    }
    return d;
  }
  static hasDefaultValue(a) {
    const o = "defaultValue";
    for (const s in a)
      if (Object.prototype.hasOwnProperty.call(a, s) && o === s.substring(0, o.length) && a[s] !== void 0)
        return !0;
    return !1;
  }
}
function tg(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
class hN {
  constructor(a) {
    this.options = a, this.supportedLngs = this.options.supportedLngs || !1, this.logger = dr.create("languageUtils");
  }
  getScriptPartFromCode(a) {
    if (a = Pd(a), !a || a.indexOf("-") < 0) return null;
    const o = a.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(a) {
    if (a = Pd(a), !a || a.indexOf("-") < 0) return a;
    const o = a.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(a) {
    if (typeof a == "string" && a.indexOf("-") > -1) {
      const o = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = a.split("-");
      return this.options.lowerCaseLng ? s = s.map((d) => d.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), o.indexOf(s[1].toLowerCase()) > -1 && (s[1] = tg(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), o.indexOf(s[1].toLowerCase()) > -1 && (s[1] = tg(s[1].toLowerCase())), o.indexOf(s[2].toLowerCase()) > -1 && (s[2] = tg(s[2].toLowerCase()))), s.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? a.toLowerCase() : a;
  }
  isSupportedCode(a) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (a = this.getLanguagePartFromCode(a)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(a) > -1;
  }
  getBestMatchFromCodes(a) {
    if (!a) return null;
    let o;
    return a.forEach((s) => {
      if (o) return;
      const d = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(d)) && (o = d);
    }), !o && this.options.supportedLngs && a.forEach((s) => {
      if (o) return;
      const d = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(d)) return o = d;
      o = this.options.supportedLngs.find((c) => {
        if (c === d) return c;
        if (!(c.indexOf("-") < 0 && d.indexOf("-") < 0) && (c.indexOf("-") > 0 && d.indexOf("-") < 0 && c.substring(0, c.indexOf("-")) === d || c.indexOf(d) === 0 && d.length > 1))
          return c;
      });
    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o;
  }
  getFallbackCodes(a, o) {
    if (!a) return [];
    if (typeof a == "function" && (a = a(o)), typeof a == "string" && (a = [a]), Array.isArray(a)) return a;
    if (!o) return a.default || [];
    let s = a[o];
    return s || (s = a[this.getScriptPartFromCode(o)]), s || (s = a[this.formatLanguageCode(o)]), s || (s = a[this.getLanguagePartFromCode(o)]), s || (s = a.default), s || [];
  }
  toResolveHierarchy(a, o) {
    const s = this.getFallbackCodes(o || this.options.fallbackLng || [], a), d = [], c = (u) => {
      u && (this.isSupportedCode(u) ? d.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return typeof a == "string" && (a.indexOf("-") > -1 || a.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(a)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && c(this.getScriptPartFromCode(a)), this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(a))) : typeof a == "string" && c(this.formatLanguageCode(a)), s.forEach((u) => {
      d.indexOf(u) < 0 && c(this.formatLanguageCode(u));
    }), d;
  }
}
let W_ = [{
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
}], K_ = {
  1: function(i) {
    return +(i > 1);
  },
  2: function(i) {
    return +(i != 1);
  },
  3: function(i) {
    return 0;
  },
  4: function(i) {
    return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
  },
  5: function(i) {
    return i == 0 ? 0 : i == 1 ? 1 : i == 2 ? 2 : i % 100 >= 3 && i % 100 <= 10 ? 3 : i % 100 >= 11 ? 4 : 5;
  },
  6: function(i) {
    return i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2;
  },
  7: function(i) {
    return i == 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
  },
  8: function(i) {
    return i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3;
  },
  9: function(i) {
    return +(i >= 2);
  },
  10: function(i) {
    return i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4;
  },
  11: function(i) {
    return i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3;
  },
  12: function(i) {
    return +(i % 10 != 1 || i % 100 == 11);
  },
  13: function(i) {
    return +(i !== 0);
  },
  14: function(i) {
    return i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3;
  },
  15: function(i) {
    return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
  },
  16: function(i) {
    return i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2;
  },
  17: function(i) {
    return i == 1 || i % 10 == 1 && i % 100 != 11 ? 0 : 1;
  },
  18: function(i) {
    return i == 0 ? 0 : i == 1 ? 1 : 2;
  },
  19: function(i) {
    return i == 1 ? 0 : i == 0 || i % 100 > 1 && i % 100 < 11 ? 1 : i % 100 > 10 && i % 100 < 20 ? 2 : 3;
  },
  20: function(i) {
    return i == 1 ? 0 : i == 0 || i % 100 > 0 && i % 100 < 20 ? 1 : 2;
  },
  21: function(i) {
    return i % 100 == 1 ? 1 : i % 100 == 2 ? 2 : i % 100 == 3 || i % 100 == 4 ? 3 : 0;
  },
  22: function(i) {
    return i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3;
  }
};
const G_ = ["v1", "v2", "v3"], X_ = ["v4"], mN = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function q_() {
  const i = {};
  return W_.forEach((a) => {
    a.lngs.forEach((o) => {
      i[o] = {
        numbers: a.nr,
        plurals: K_[a.fc]
      };
    });
  }), i;
}
class Q_ {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = a, this.options = o, this.logger = dr.create("pluralResolver"), (!this.options.compatibilityJSON || X_.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = q_();
  }
  addRule(a, o) {
    this.rules[a] = o;
  }
  getRule(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Pd(a === "dev" ? "en" : a), {
          type: o.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[a] || this.rules[this.languageUtils.getLanguagePartFromCode(a)];
  }
  needsPlural(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(a, o);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(a, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(a, s).map((d) => `${o}${d}`);
  }
  getSuffixes(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(a, o);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((d, c) => mN[d] - mN[c]).map((d) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : s.numbers.map((d) => this.getSuffix(a, d, o)) : [];
  }
  getSuffix(a, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const d = this.getRule(a, s);
    return d ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d.select(o)}` : this.getSuffixRetroCompatible(d, o) : (this.logger.warn(`no plural rule found for: ${a}`), "");
  }
  getSuffixRetroCompatible(a, o) {
    const s = a.noAbs ? a.plurals(o) : a.plurals(Math.abs(o));
    let d = a.numbers[s];
    this.options.simplifyPluralSuffix && a.numbers.length === 2 && a.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
    const c = () => this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
    return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? `_plural_${d.toString()}` : c() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && a.numbers.length === 2 && a.numbers[0] === 1 ? c() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !G_.includes(this.options.compatibilityJSON);
  }
}
function vN(i, a, o) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = z_(i, a, o);
  return !c && d && typeof o == "string" && (c = fg(i, o, s), c === void 0 && (c = fg(a, o, s))), c;
}
class Z_ {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = dr.create("interpolator"), this.options = a, this.format = a.interpolation && a.interpolation.format || ((o) => o), this.init(a);
  }
  init() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    a.interpolation || (a.interpolation = {
      escapeValue: !0
    });
    const {
      escape: o,
      escapeValue: s,
      useRawValueToEscape: d,
      prefix: c,
      prefixEscaped: u,
      suffix: g,
      suffixEscaped: v,
      formatSeparator: p,
      unescapeSuffix: m,
      unescapePrefix: y,
      nestingPrefix: x,
      nestingPrefixEscaped: C,
      nestingSuffix: j,
      nestingSuffixEscaped: U,
      nestingOptionsSeparator: T,
      maxReplaces: A,
      alwaysFormat: M
    } = a.interpolation;
    this.escape = o !== void 0 ? o : H_, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = c ? Ds(c) : u || "{{", this.suffix = g ? Ds(g) : v || "}}", this.formatSeparator = p || ",", this.unescapePrefix = m ? "" : y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : m || "", this.nestingPrefix = x ? Ds(x) : C || Ds("$t("), this.nestingSuffix = j ? Ds(j) : U || Ds(")"), this.nestingOptionsSeparator = T || ",", this.maxReplaces = A || 1e3, this.alwaysFormat = M !== void 0 ? M : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const a = (o, s) => o && o.source === s ? (o.lastIndex = 0, o) : new RegExp(s, "g");
    this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = a(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = a(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(a, o, s, d) {
    let c, u, g;
    const v = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function p(j) {
      return j.replace(/\$/g, "$$$$");
    }
    const m = (j) => {
      if (j.indexOf(this.formatSeparator) < 0) {
        const M = vN(o, v, j, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(M, void 0, s, {
          ...d,
          ...o,
          interpolationkey: j
        }) : M;
      }
      const U = j.split(this.formatSeparator), T = U.shift().trim(), A = U.join(this.formatSeparator).trim();
      return this.format(vN(o, v, T, this.options.keySeparator, this.options.ignoreJSONStructure), A, s, {
        ...d,
        ...o,
        interpolationkey: T
      });
    };
    this.resetRegExp();
    const y = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, x = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (j) => p(j)
    }, {
      regex: this.regexp,
      safeValue: (j) => this.escapeValue ? p(this.escape(j)) : p(j)
    }].forEach((j) => {
      for (g = 0; c = j.regex.exec(a); ) {
        const U = c[1].trim();
        if (u = m(U), u === void 0)
          if (typeof y == "function") {
            const A = y(a, c, d);
            u = typeof A == "string" ? A : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, U))
            u = "";
          else if (x) {
            u = c[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${U} for interpolating ${a}`), u = "";
        else typeof u != "string" && !this.useRawValueToEscape && (u = cN(u));
        const T = j.safeValue(u);
        if (a = a.replace(c[0], T), x ? (j.regex.lastIndex += u.length, j.regex.lastIndex -= c[0].length) : j.regex.lastIndex = 0, g++, g >= this.maxReplaces)
          break;
      }
    }), a;
  }
  nest(a, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, c, u;
    function g(v, p) {
      const m = this.nestingOptionsSeparator;
      if (v.indexOf(m) < 0) return v;
      const y = v.split(new RegExp(`${m}[ ]*{`));
      let x = `{${y[1]}`;
      v = y[0], x = this.interpolate(x, u);
      const C = x.match(/'/g), j = x.match(/"/g);
      (C && C.length % 2 === 0 && !j || j.length % 2 !== 0) && (x = x.replace(/'/g, '"'));
      try {
        u = JSON.parse(x), p && (u = {
          ...p,
          ...u
        });
      } catch (U) {
        return this.logger.warn(`failed parsing options string in nesting for key ${v}`, U), `${v}${m}${x}`;
      }
      return u.defaultValue && u.defaultValue.indexOf(this.prefix) > -1 && delete u.defaultValue, v;
    }
    for (; d = this.nestingRegexp.exec(a); ) {
      let v = [];
      u = {
        ...s
      }, u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let p = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const m = d[1].split(this.formatSeparator).map((y) => y.trim());
        d[1] = m.shift(), v = m, p = !0;
      }
      if (c = o(g.call(this, d[1].trim(), u), u), c && d[0] === a && typeof c != "string") return c;
      typeof c != "string" && (c = cN(c)), c || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${a}`), c = ""), p && (c = v.reduce((m, y) => this.format(m, y, s.lng, {
        ...s,
        interpolationkey: d[1].trim()
      }), c.trim())), a = a.replace(d[0], c), this.regexp.lastIndex = 0;
    }
    return a;
  }
}
function eP(i) {
  let a = i.toLowerCase().trim();
  const o = {};
  if (i.indexOf("(") > -1) {
    const s = i.split("(");
    a = s[0].toLowerCase().trim();
    const d = s[1].substring(0, s[1].length - 1);
    a === "currency" && d.indexOf(":") < 0 ? o.currency || (o.currency = d.trim()) : a === "relativetime" && d.indexOf(":") < 0 ? o.range || (o.range = d.trim()) : d.split(";").forEach((u) => {
      if (u) {
        const [g, ...v] = u.split(":"), p = v.join(":").trim().replace(/^'+|'+$/g, ""), m = g.trim();
        o[m] || (o[m] = p), p === "false" && (o[m] = !1), p === "true" && (o[m] = !0), isNaN(p) || (o[m] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: a,
    formatOptions: o
  };
}
function ks(i) {
  const a = {};
  return function(s, d, c) {
    const u = d + JSON.stringify(c);
    let g = a[u];
    return g || (g = i(Pd(d), c), a[u] = g), g(s);
  };
}
class tP {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = dr.create("formatter"), this.options = a, this.formats = {
      number: ks((o, s) => {
        const d = new Intl.NumberFormat(o, {
          ...s
        });
        return (c) => d.format(c);
      }),
      currency: ks((o, s) => {
        const d = new Intl.NumberFormat(o, {
          ...s,
          style: "currency"
        });
        return (c) => d.format(c);
      }),
      datetime: ks((o, s) => {
        const d = new Intl.DateTimeFormat(o, {
          ...s
        });
        return (c) => d.format(c);
      }),
      relativetime: ks((o, s) => {
        const d = new Intl.RelativeTimeFormat(o, {
          ...s
        });
        return (c) => d.format(c, s.range || "day");
      }),
      list: ks((o, s) => {
        const d = new Intl.ListFormat(o, {
          ...s
        });
        return (c) => d.format(c);
      })
    }, this.init(a);
  }
  init(a) {
    const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ",";
  }
  add(a, o) {
    this.formats[a.toLowerCase().trim()] = o;
  }
  addCached(a, o) {
    this.formats[a.toLowerCase().trim()] = ks(o);
  }
  format(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return o.split(this.formatSeparator).reduce((g, v) => {
      const {
        formatName: p,
        formatOptions: m
      } = eP(v);
      if (this.formats[p]) {
        let y = g;
        try {
          const x = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, C = x.locale || x.lng || d.locale || d.lng || s;
          y = this.formats[p](g, C, {
            ...m,
            ...d,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return y;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return g;
    }, a);
  }
}
function nP(i, a) {
  i.pending[a] !== void 0 && (delete i.pending[a], i.pendingCount--);
}
class aP extends Hd {
  constructor(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = a, this.store = o, this.services = s, this.languageUtils = s.languageUtils, this.options = d, this.logger = dr.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, d.backend, d);
  }
  queueLoad(a, o, s, d) {
    const c = {}, u = {}, g = {}, v = {};
    return a.forEach((p) => {
      let m = !0;
      o.forEach((y) => {
        const x = `${p}|${y}`;
        !s.reload && this.store.hasResourceBundle(p, y) ? this.state[x] = 2 : this.state[x] < 0 || (this.state[x] === 1 ? u[x] === void 0 && (u[x] = !0) : (this.state[x] = 1, m = !1, u[x] === void 0 && (u[x] = !0), c[x] === void 0 && (c[x] = !0), v[y] === void 0 && (v[y] = !0)));
      }), m || (g[p] = !0);
    }), (Object.keys(c).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: d
    }), {
      toLoad: Object.keys(c),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(g),
      toLoadNamespaces: Object.keys(v)
    };
  }
  loaded(a, o, s) {
    const d = a.split("|"), c = d[0], u = d[1];
    o && this.emit("failedLoading", c, u, o), s && this.store.addResourceBundle(c, u, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[a] = o ? -1 : 2;
    const g = {};
    this.queue.forEach((v) => {
      F_(v.loaded, [c], u), nP(v, a), o && v.errors.push(o), v.pendingCount === 0 && !v.done && (Object.keys(v.loaded).forEach((p) => {
        g[p] || (g[p] = {});
        const m = v.loaded[p];
        m.length && m.forEach((y) => {
          g[p][y] === void 0 && (g[p][y] = !0);
        });
      }), v.done = !0, v.errors.length ? v.callback(v.errors) : v.callback());
    }), this.emit("loaded", g), this.queue = this.queue.filter((v) => !v.done);
  }
  read(a, o, s) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!a.length) return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: a,
        ns: o,
        fcName: s,
        tried: d,
        wait: c,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const g = (p, m) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const y = this.waitingReads.shift();
        this.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
      }
      if (p && m && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, a, o, s, d + 1, c * 2, u);
        }, c);
        return;
      }
      u(p, m);
    }, v = this.backend[s].bind(this.backend);
    if (v.length === 2) {
      try {
        const p = v(a, o);
        p && typeof p.then == "function" ? p.then((m) => g(null, m)).catch(g) : g(null, p);
      } catch (p) {
        g(p);
      }
      return;
    }
    return v(a, o, g);
  }
  prepareLoading(a, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
    typeof a == "string" && (a = this.languageUtils.toResolveHierarchy(a)), typeof o == "string" && (o = [o]);
    const c = this.queueLoad(a, o, s, d);
    if (!c.toLoad.length)
      return c.pending.length || d(), null;
    c.toLoad.forEach((u) => {
      this.loadOne(u);
    });
  }
  load(a, o, s) {
    this.prepareLoading(a, o, {}, s);
  }
  reload(a, o, s) {
    this.prepareLoading(a, o, {
      reload: !0
    }, s);
  }
  loadOne(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = a.split("|"), d = s[0], c = s[1];
    this.read(d, c, "read", void 0, void 0, (u, g) => {
      u && this.logger.warn(`${o}loading namespace ${c} for language ${d} failed`, u), !u && g && this.logger.log(`${o}loaded namespace ${c} for language ${d}`, g), this.loaded(a, u, g);
    });
  }
  saveMissing(a, o, s, d, c) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(o)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const v = {
          ...u,
          isUpdate: c
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let m;
            p.length === 5 ? m = p(a, o, s, d, v) : m = p(a, o, s, d), m && typeof m.then == "function" ? m.then((y) => g(null, y)).catch(g) : g(null, m);
          } catch (m) {
            g(m);
          }
        else
          p(a, o, s, d, g, v);
      }
      !a || !a[0] || this.store.addResource(a[0], o, s, d);
    }
  }
}
function gN() {
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
      let o = {};
      if (typeof a[1] == "object" && (o = a[1]), typeof a[1] == "string" && (o.defaultValue = a[1]), typeof a[2] == "string" && (o.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
        const s = a[3] || a[2];
        Object.keys(s).forEach((d) => {
          o[d] = s[d];
        });
      }
      return o;
    },
    interpolation: {
      escapeValue: !0,
      format: (i) => i,
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
function yN(i) {
  return typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i;
}
function xd() {
}
function rP(i) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((o) => {
    typeof i[o] == "function" && (i[o] = i[o].bind(i));
  });
}
class Ku extends Hd {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = yN(a), this.services = {}, this.logger = dr, this.modules = {
      external: []
    }, rP(this), o && !this.isInitialized && !a.isClone) {
      if (!this.options.initImmediate)
        return this.init(a, o), this;
      setTimeout(() => {
        this.init(a, o);
      }, 0);
    }
  }
  init() {
    var a = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof o == "function" && (s = o, o = {}), !o.defaultNS && o.defaultNS !== !1 && o.ns && (typeof o.ns == "string" ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
    const d = gN();
    this.options = {
      ...d,
      ...this.options,
      ...yN(o)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    function c(m) {
      return m ? typeof m == "function" ? new m() : m : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? dr.init(c(this.modules.logger), this.options) : dr.init(null, this.options);
      let m;
      this.modules.formatter ? m = this.modules.formatter : typeof Intl < "u" && (m = tP);
      const y = new hN(this.options);
      this.store = new dN(this.options.resources, this.options);
      const x = this.services;
      x.logger = dr, x.resourceStore = this.store, x.languageUtils = y, x.pluralResolver = new Q_(y, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), m && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (x.formatter = c(m), x.formatter.init(x, this.options), this.options.interpolation.format = x.formatter.format.bind(x.formatter)), x.interpolator = new Z_(this.options), x.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, x.backendConnector = new aP(c(this.modules.backend), x.resourceStore, x, this.options), x.backendConnector.on("*", function(C) {
        for (var j = arguments.length, U = new Array(j > 1 ? j - 1 : 0), T = 1; T < j; T++)
          U[T - 1] = arguments[T];
        a.emit(C, ...U);
      }), this.modules.languageDetector && (x.languageDetector = c(this.modules.languageDetector), x.languageDetector.init && x.languageDetector.init(x, this.options.detection, this.options)), this.modules.i18nFormat && (x.i18nFormat = c(this.modules.i18nFormat), x.i18nFormat.init && x.i18nFormat.init(this)), this.translator = new Ud(this.services, this.options), this.translator.on("*", function(C) {
        for (var j = arguments.length, U = new Array(j > 1 ? j - 1 : 0), T = 1; T < j; T++)
          U[T - 1] = arguments[T];
        a.emit(C, ...U);
      }), this.modules.external.forEach((C) => {
        C.init && C.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = xd), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const m = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      m.length > 0 && m[0] !== "dev" && (this.options.lng = m[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((m) => {
      this[m] = function() {
        return a.store[m](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((m) => {
      this[m] = function() {
        return a.store[m](...arguments), a;
      };
    });
    const v = Au(), p = () => {
      const m = (y, x) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), v.resolve(x), s(y, x);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return m(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, m);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), v;
  }
  loadResources(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xd;
    const d = typeof a == "string" ? a : this.language;
    if (typeof a == "function" && (s = a), !this.options.resources || this.options.partialBundledLanguages) {
      if (d && d.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const c = [], u = (g) => {
        if (!g || g === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(g).forEach((p) => {
          p !== "cimode" && c.indexOf(p) < 0 && c.push(p);
        });
      };
      d ? u(d) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((v) => u(v)), this.options.preload && this.options.preload.forEach((g) => u(g)), this.services.backendConnector.load(c, this.options.ns, (g) => {
        !g && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(g);
      });
    } else
      s(null);
  }
  reloadResources(a, o, s) {
    const d = Au();
    return a || (a = this.languages), o || (o = this.options.ns), s || (s = xd), this.services.backendConnector.reload(a, o, (c) => {
      d.resolve(), s(c);
    }), d;
  }
  use(a) {
    if (!a) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!a.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return a.type === "backend" && (this.modules.backend = a), (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a), a.type === "languageDetector" && (this.modules.languageDetector = a), a.type === "i18nFormat" && (this.modules.i18nFormat = a), a.type === "postProcessor" && R1.addPostProcessor(a), a.type === "formatter" && (this.modules.formatter = a), a.type === "3rdParty" && this.modules.external.push(a), this;
  }
  setResolvedLanguage(a) {
    if (!(!a || !this.languages) && !(["cimode", "dev"].indexOf(a) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const s = this.languages[o];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(a, o) {
    var s = this;
    this.isLanguageChangingTo = a;
    const d = Au();
    this.emit("languageChanging", a);
    const c = (v) => {
      this.language = v, this.languages = this.services.languageUtils.toResolveHierarchy(v), this.resolvedLanguage = void 0, this.setResolvedLanguage(v);
    }, u = (v, p) => {
      p ? (c(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return s.t(...arguments);
      }), o && o(v, function() {
        return s.t(...arguments);
      });
    }, g = (v) => {
      !a && !v && this.services.languageDetector && (v = []);
      const p = typeof v == "string" ? v : this.services.languageUtils.getBestMatchFromCodes(v);
      p && (this.language || c(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(p)), this.loadResources(p, (m) => {
        u(m, p);
      });
    };
    return !a && this.services.languageDetector && !this.services.languageDetector.async ? g(this.services.languageDetector.detect()) : !a && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(g) : this.services.languageDetector.detect(g) : g(a), d;
  }
  getFixedT(a, o, s) {
    var d = this;
    const c = function(u, g) {
      let v;
      if (typeof g != "object") {
        for (var p = arguments.length, m = new Array(p > 2 ? p - 2 : 0), y = 2; y < p; y++)
          m[y - 2] = arguments[y];
        v = d.options.overloadTranslationOptionHandler([u, g].concat(m));
      } else
        v = {
          ...g
        };
      v.lng = v.lng || c.lng, v.lngs = v.lngs || c.lngs, v.ns = v.ns || c.ns, v.keyPrefix !== "" && (v.keyPrefix = v.keyPrefix || s || c.keyPrefix);
      const x = d.options.keySeparator || ".";
      let C;
      return v.keyPrefix && Array.isArray(u) ? C = u.map((j) => `${v.keyPrefix}${x}${j}`) : C = v.keyPrefix ? `${v.keyPrefix}${x}${u}` : u, d.t(C, v);
    };
    return typeof a == "string" ? c.lng = a : c.lngs = a, c.ns = o, c.keyPrefix = s, c;
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
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = o.lng || this.resolvedLanguage || this.languages[0], d = this.options ? this.options.fallbackLng : !1, c = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const u = (g, v) => {
      const p = this.services.backendConnector.state[`${g}|${v}`];
      return p === -1 || p === 2;
    };
    if (o.precheck) {
      const g = o.precheck(this, u);
      if (g !== void 0) return g;
    }
    return !!(this.hasResourceBundle(s, a) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(s, a) && (!d || u(c, a)));
  }
  loadNamespaces(a, o) {
    const s = Au();
    return this.options.ns ? (typeof a == "string" && (a = [a]), a.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      s.resolve(), o && o(d);
    }), s) : (o && o(), Promise.resolve());
  }
  loadLanguages(a, o) {
    const s = Au();
    typeof a == "string" && (a = [a]);
    const d = this.options.preload || [], c = a.filter((u) => d.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u));
    return c.length ? (this.options.preload = d.concat(c), this.loadResources((u) => {
      s.resolve(), o && o(u);
    }), s) : (o && o(), Promise.resolve());
  }
  dir(a) {
    if (a || (a = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !a) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new hN(gN());
    return o.indexOf(s.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new Ku(a, o);
  }
  cloneInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xd;
    const s = a.forkResourceStore;
    s && delete a.forkResourceStore;
    const d = {
      ...this.options,
      ...a,
      isClone: !0
    }, c = new Ku(d);
    return (a.debug !== void 0 || a.prefix !== void 0) && (c.logger = c.logger.clone(a)), ["store", "services", "language"].forEach((g) => {
      c[g] = this[g];
    }), c.services = {
      ...this.services
    }, c.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, s && (c.store = new dN(this.store.data, d), c.services.resourceStore = c.store), c.translator = new Ud(c.services, d), c.translator.on("*", function(g) {
      for (var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), m = 1; m < v; m++)
        p[m - 1] = arguments[m];
      c.emit(g, ...p);
    }), c.init(d, o), c.translator.options = d, c.translator.backendConnector.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, c;
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
const gn = Ku.createInstance();
gn.createInstance = Ku.createInstance;
gn.createInstance;
gn.dir;
gn.init;
gn.loadResources;
gn.reloadResources;
gn.use;
gn.changeLanguage;
gn.getFixedT;
gn.t;
gn.exists;
gn.setDefaultNamespace;
gn.hasLoadedNamespace;
gn.loadNamespaces;
gn.loadLanguages;
async function vn(i, a = {}) {
  typeof i == "object" ? a = i : typeof i == "string" && (a.url = i), a.headers || (a.headers = {}), a.body && !(a.body instanceof FormData) && (a.headers["Content-Type"] = "application/json", a.body = JSON.stringify(a.body));
  let o = window.TOKEN || sessionStorage.getItem("TOKEN");
  o || (o = localStorage.getItem("TOKEN")), o && (a.headers.Authorization = `Bearer ${o}`);
  let s = window.serverURL;
  if (!s) {
    const v = location.pathname.match(/(.*?\/)ui/);
    s = v ? v[1] : "/";
  }
  const d = a.url.includes("?") ? "&" : "?", c = await fetch(
    `${s}${a.url}${d}lang=${gn.language}`,
    a
  );
  if (!c.ok) {
    if (c.status === 401)
      throw new Error(401);
    let v;
    try {
      v = await c.json();
    } catch {
    }
    throw new Error(`${c.status}: ${(v == null ? void 0 : v.errmsg) || c.statusText}`);
  }
  const u = await c.json();
  if (u.errno !== 0)
    throw new Error(u.errmsg);
  return { __version: c.headers.get("x-waline-version"), ...u.data };
}
function iP(i) {
  const a = i ? `?email=${encodeURIComponent(i)}` : "";
  return vn({ url: "token/2fa" + a, method: "GET" });
}
function oP(i) {
  return vn({ url: "user", method: "PUT", body: i });
}
function sP({ page: i }) {
  return vn({
    url: `user?page=${i}`,
    method: "GET"
  });
}
function ng({ id: i, ...a }) {
  return vn({ url: `user/${i}`, method: "PUT", body: a });
}
function lP() {
  const { t: i } = Ui(), a = qu(), o = tc(), s = Pi((A) => A.user), [d, c] = z.useState(!1), [u, g] = z.useState(!1), [v, p] = z.useState(!1), m = E1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), y = location.pathname.match(/(.*?\/)ui/), x = y && y[1] ? y[1] : "/";
  z.useEffect(() => {
    if (!s || !s.email)
      return;
    const A = new URLSearchParams(location.search), M = s.type === "administrator", V = M ? "/ui/profile" : "/ui", D = M && A.get("redirect") ? A.get("redirect") : V;
    console.log(D), o(D.replace(/\/+/g, "/"));
  }, [s]);
  const C = async function(A) {
    A.preventDefault(), g(!1), c(!0);
    const M = A.target.email.value, V = A.target.password.value, D = A.target.code ? A.target.code.value : "", F = A.target.remember.checked;
    if (!M)
      return g(i("please input email"));
    if (!V)
      return g(i("please input password"));
    if (A.target.code && !D)
      return g(i("please input 2fa code"));
    const L = await m("login");
    try {
      await a.user.login({
        email: M,
        password: V,
        code: D,
        remember: F,
        recaptchaV3: window.recaptchaV3Key ? L : void 0,
        turnstile: window.turnstileKey ? L : void 0
      });
    } catch {
      g(i("email or password error"));
    } finally {
      c(!1);
    }
  }, j = async (A) => {
    const M = A.target.value;
    if (!M)
      return;
    const V = await iP(M);
    p(V.enable);
  };
  let U = window.serverURL;
  if (!U) {
    const A = location.pathname.match(/(.*?\/)ui/);
    U = A ? A[1] : "/";
  }
  const T = ["google"];
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
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
          display: u ? "block" : "none"
        },
        children: /* @__PURE__ */ w.jsxDEV("ul", { children: u ? /* @__PURE__ */ w.jsxDEV("li", { children: u }, void 0, !1, {
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
      /* @__PURE__ */ w.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: C, style: { minWidth: "300px" }, children: [
        /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: i("email") }, void 0, !1, {
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
              placeholder: i("email"),
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: i("password") }, void 0, !1, {
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
              placeholder: i("password")
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
        v && /* @__PURE__ */ w.jsxDEV("p", { children: [
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "code", className: "sr-only", children: i("2fa code") }, void 0, !1, {
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
              placeholder: i("2fa code")
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
            children: i("login")
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
            i("remember me")
          ] }, void 0, !0, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/forgot", children: i("forgot password") }, void 0, !1, {
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
      /* @__PURE__ */ w.jsxDEV("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || T).map((A) => /* @__PURE__ */ w.jsxDEV(
        "a",
        {
          href: `${U}oauth${window.ALLOW_SOCIALS ? "/" + A + "?" : `?type=${A}`}&redirect=${x}ui/profile`,
          children: zd.createElement(O_[A])
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
      /* @__PURE__ */ w.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui", children: i("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/login/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/register", children: i("register") }, void 0, !1, {
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
var j1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var a = {}.hasOwnProperty;
    function o() {
      for (var c = "", u = 0; u < arguments.length; u++) {
        var g = arguments[u];
        g && (c = d(c, s(g)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number")
        return c;
      if (typeof c != "object")
        return "";
      if (Array.isArray(c))
        return o.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
        return c.toString();
      var u = "";
      for (var g in c)
        a.call(c, g) && c[g] && (u = d(u, g));
      return u;
    }
    function d(c, u) {
      return u ? c ? c + " " + u : c + u : c;
    }
    i.exports ? (o.default = o, i.exports = o) : window.classNames = o;
  })();
})(j1);
var uP = j1.exports;
const dg = /* @__PURE__ */ Fd(uP);
var T1 = { exports: {} }, D1 = { exports: {} };
(function() {
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = {
    // Bit-wise rotation left
    rotl: function(o, s) {
      return o << s | o >>> 32 - s;
    },
    // Bit-wise rotation right
    rotr: function(o, s) {
      return o << 32 - s | o >>> s;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(o) {
      if (o.constructor == Number)
        return a.rotl(o, 8) & 16711935 | a.rotl(o, 24) & 4278255360;
      for (var s = 0; s < o.length; s++)
        o[s] = a.endian(o[s]);
      return o;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(o) {
      for (var s = []; o > 0; o--)
        s.push(Math.floor(Math.random() * 256));
      return s;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(o) {
      for (var s = [], d = 0, c = 0; d < o.length; d++, c += 8)
        s[c >>> 5] |= o[d] << 24 - c % 32;
      return s;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(o) {
      for (var s = [], d = 0; d < o.length * 32; d += 8)
        s.push(o[d >>> 5] >>> 24 - d % 32 & 255);
      return s;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(o) {
      for (var s = [], d = 0; d < o.length; d++)
        s.push((o[d] >>> 4).toString(16)), s.push((o[d] & 15).toString(16));
      return s.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(o) {
      for (var s = [], d = 0; d < o.length; d += 2)
        s.push(parseInt(o.substr(d, 2), 16));
      return s;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(o) {
      for (var s = [], d = 0; d < o.length; d += 3)
        for (var c = o[d] << 16 | o[d + 1] << 8 | o[d + 2], u = 0; u < 4; u++)
          d * 8 + u * 6 <= o.length * 8 ? s.push(i.charAt(c >>> 6 * (3 - u) & 63)) : s.push("=");
      return s.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(o) {
      o = o.replace(/[^A-Z0-9+\/]/ig, "");
      for (var s = [], d = 0, c = 0; d < o.length; c = ++d % 4)
        c != 0 && s.push((i.indexOf(o.charAt(d - 1)) & Math.pow(2, -2 * c + 8) - 1) << c * 2 | i.indexOf(o.charAt(d)) >>> 6 - c * 2);
      return s;
    }
  };
  D1.exports = a;
})();
var cP = D1.exports, pg = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(i) {
      return pg.bin.stringToBytes(unescape(encodeURIComponent(i)));
    },
    // Convert a byte array to a string
    bytesToString: function(i) {
      return decodeURIComponent(escape(pg.bin.bytesToString(i)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(i) {
      for (var a = [], o = 0; o < i.length; o++)
        a.push(i.charCodeAt(o) & 255);
      return a;
    },
    // Convert a byte array to a string
    bytesToString: function(i) {
      for (var a = [], o = 0; o < i.length; o++)
        a.push(String.fromCharCode(i[o]));
      return a.join("");
    }
  }
}, bN = pg;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var fP = function(i) {
  return i != null && (k1(i) || dP(i) || !!i._isBuffer);
};
function k1(i) {
  return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
}
function dP(i) {
  return typeof i.readFloatLE == "function" && typeof i.slice == "function" && k1(i.slice(0, 0));
}
(function() {
  var i = cP, a = bN.utf8, o = fP, s = bN.bin, d = function(c, u) {
    c.constructor == String ? u && u.encoding === "binary" ? c = s.stringToBytes(c) : c = a.stringToBytes(c) : o(c) ? c = Array.prototype.slice.call(c, 0) : !Array.isArray(c) && c.constructor !== Uint8Array && (c = c.toString());
    for (var g = i.bytesToWords(c), v = c.length * 8, p = 1732584193, m = -271733879, y = -1732584194, x = 271733878, C = 0; C < g.length; C++)
      g[C] = (g[C] << 8 | g[C] >>> 24) & 16711935 | (g[C] << 24 | g[C] >>> 8) & 4278255360;
    g[v >>> 5] |= 128 << v % 32, g[(v + 64 >>> 9 << 4) + 14] = v;
    for (var j = d._ff, U = d._gg, T = d._hh, A = d._ii, C = 0; C < g.length; C += 16) {
      var M = p, V = m, D = y, F = x;
      p = j(p, m, y, x, g[C + 0], 7, -680876936), x = j(x, p, m, y, g[C + 1], 12, -389564586), y = j(y, x, p, m, g[C + 2], 17, 606105819), m = j(m, y, x, p, g[C + 3], 22, -1044525330), p = j(p, m, y, x, g[C + 4], 7, -176418897), x = j(x, p, m, y, g[C + 5], 12, 1200080426), y = j(y, x, p, m, g[C + 6], 17, -1473231341), m = j(m, y, x, p, g[C + 7], 22, -45705983), p = j(p, m, y, x, g[C + 8], 7, 1770035416), x = j(x, p, m, y, g[C + 9], 12, -1958414417), y = j(y, x, p, m, g[C + 10], 17, -42063), m = j(m, y, x, p, g[C + 11], 22, -1990404162), p = j(p, m, y, x, g[C + 12], 7, 1804603682), x = j(x, p, m, y, g[C + 13], 12, -40341101), y = j(y, x, p, m, g[C + 14], 17, -1502002290), m = j(m, y, x, p, g[C + 15], 22, 1236535329), p = U(p, m, y, x, g[C + 1], 5, -165796510), x = U(x, p, m, y, g[C + 6], 9, -1069501632), y = U(y, x, p, m, g[C + 11], 14, 643717713), m = U(m, y, x, p, g[C + 0], 20, -373897302), p = U(p, m, y, x, g[C + 5], 5, -701558691), x = U(x, p, m, y, g[C + 10], 9, 38016083), y = U(y, x, p, m, g[C + 15], 14, -660478335), m = U(m, y, x, p, g[C + 4], 20, -405537848), p = U(p, m, y, x, g[C + 9], 5, 568446438), x = U(x, p, m, y, g[C + 14], 9, -1019803690), y = U(y, x, p, m, g[C + 3], 14, -187363961), m = U(m, y, x, p, g[C + 8], 20, 1163531501), p = U(p, m, y, x, g[C + 13], 5, -1444681467), x = U(x, p, m, y, g[C + 2], 9, -51403784), y = U(y, x, p, m, g[C + 7], 14, 1735328473), m = U(m, y, x, p, g[C + 12], 20, -1926607734), p = T(p, m, y, x, g[C + 5], 4, -378558), x = T(x, p, m, y, g[C + 8], 11, -2022574463), y = T(y, x, p, m, g[C + 11], 16, 1839030562), m = T(m, y, x, p, g[C + 14], 23, -35309556), p = T(p, m, y, x, g[C + 1], 4, -1530992060), x = T(x, p, m, y, g[C + 4], 11, 1272893353), y = T(y, x, p, m, g[C + 7], 16, -155497632), m = T(m, y, x, p, g[C + 10], 23, -1094730640), p = T(p, m, y, x, g[C + 13], 4, 681279174), x = T(x, p, m, y, g[C + 0], 11, -358537222), y = T(y, x, p, m, g[C + 3], 16, -722521979), m = T(m, y, x, p, g[C + 6], 23, 76029189), p = T(p, m, y, x, g[C + 9], 4, -640364487), x = T(x, p, m, y, g[C + 12], 11, -421815835), y = T(y, x, p, m, g[C + 15], 16, 530742520), m = T(m, y, x, p, g[C + 2], 23, -995338651), p = A(p, m, y, x, g[C + 0], 6, -198630844), x = A(x, p, m, y, g[C + 7], 10, 1126891415), y = A(y, x, p, m, g[C + 14], 15, -1416354905), m = A(m, y, x, p, g[C + 5], 21, -57434055), p = A(p, m, y, x, g[C + 12], 6, 1700485571), x = A(x, p, m, y, g[C + 3], 10, -1894986606), y = A(y, x, p, m, g[C + 10], 15, -1051523), m = A(m, y, x, p, g[C + 1], 21, -2054922799), p = A(p, m, y, x, g[C + 8], 6, 1873313359), x = A(x, p, m, y, g[C + 15], 10, -30611744), y = A(y, x, p, m, g[C + 6], 15, -1560198380), m = A(m, y, x, p, g[C + 13], 21, 1309151649), p = A(p, m, y, x, g[C + 4], 6, -145523070), x = A(x, p, m, y, g[C + 11], 10, -1120210379), y = A(y, x, p, m, g[C + 2], 15, 718787259), m = A(m, y, x, p, g[C + 9], 21, -343485551), p = p + M >>> 0, m = m + V >>> 0, y = y + D >>> 0, x = x + F >>> 0;
    }
    return i.endian([p, m, y, x]);
  };
  d._ff = function(c, u, g, v, p, m, y) {
    var x = c + (u & g | ~u & v) + (p >>> 0) + y;
    return (x << m | x >>> 32 - m) + u;
  }, d._gg = function(c, u, g, v, p, m, y) {
    var x = c + (u & v | g & ~v) + (p >>> 0) + y;
    return (x << m | x >>> 32 - m) + u;
  }, d._hh = function(c, u, g, v, p, m, y) {
    var x = c + (u ^ g ^ v) + (p >>> 0) + y;
    return (x << m | x >>> 32 - m) + u;
  }, d._ii = function(c, u, g, v, p, m, y) {
    var x = c + (g ^ (u | ~v)) + (p >>> 0) + y;
    return (x << m | x >>> 32 - m) + u;
  }, d._blocksize = 16, d._digestsize = 16, T1.exports = function(c, u) {
    if (c == null)
      throw new Error("Illegal argument " + c);
    var g = i.wordsToBytes(d(c, u));
    return u && u.asBytes ? g : u && u.asString ? s.bytesToString(g) : i.bytesToHex(g);
  };
})();
var pP = T1.exports;
const hP = /* @__PURE__ */ Fd(pP);
function O1(i = "", a = "") {
  return a || (typeof i != "string" && (i = ""), `https://sdn.geekzu.org/avatar/${hP(i)}?s=40&r=G&d=`);
}
function mP(i) {
  return window.SITE_URL ? window.SITE_URL + i : i;
}
function vP(i) {
  let a;
  typeof i == "number" ? a = new Date(i) : a = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(i) ? i.replace(/-/g, "/") : i
  );
  const o = (c) => c < 10 ? "0" + c : c, s = [a.getFullYear(), a.getMonth() + 1, a.getDate()].map(o).join("-"), d = [a.getHours(), a.getMinutes(), a.getSeconds()].map(o).join(":");
  return s + " " + d;
}
function L1({ current: i, total: a, onChange: o }) {
  return a < 1 ? null : /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-pager", children: [
    i > 1 ? /* @__PURE__ */ w.jsxDEV("li", { className: "prev", children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => o(i - 1), children: "«" }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    i > 4 ? /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => o(1), children: "1" }, void 0, !1, {
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
      i - 3,
      i - 2,
      i - 1,
      i,
      i + 1,
      i + 2,
      i + 3
    ].filter((s) => s > 0 && s <= a).map((s) => /* @__PURE__ */ w.jsxDEV("li", { className: dg({ current: s === i }), children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => o(s), children: s }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, s, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)),
    i < a - 3 ? /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/components/Paginator.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => o(a), children: a }, void 0, !1, {
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
    i < a ? /* @__PURE__ */ w.jsxDEV("li", { className: "next", children: /* @__PURE__ */ w.jsxDEV("a", { href: "#", onClick: () => o(i + 1), children: "»" }, void 0, !1, {
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
async function _u({ page: i = 1, filter: a }) {
  return vn({
    url: `comment?type=list&owner=${a.owner}&status=${a.status}&keyword=${a.keyword}&page=${i}`,
    method: "GET"
  });
}
async function Ri(i, a) {
  return vn({
    url: `comment/${i}`,
    method: "PUT",
    body: a
  });
}
async function gP(i) {
  return vn({
    url: "comment",
    method: "POST",
    body: i
  });
}
async function xN(i) {
  return vn({
    url: `comment/${i}`,
    method: "DELETE"
  });
}
function yP() {
  const { t: i } = Ui(), a = z.useRef(null), o = z.useRef(null), s = z.useRef({}), d = Pi((D) => D.user), [c, u] = z.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [g, v] = z.useReducer(
    function(D, F) {
      return { ...D, ...F };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [p, m] = z.useState({}), [y, x] = z.useState(!1), [C, j] = z.useState([]), U = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ w.jsxDEV(Ls, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ w.jsxDEV(Ls, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ w.jsxDEV(Ls, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ w.jsxDEV(Ls, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ w.jsxDEV(Ls, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  z.useEffect(() => {
    _u({ page: c.page, filter: g }).then((D) => {
      u({ ...c, ...D }), j([]);
    });
  }, [g, c.page]);
  const T = (D) => [
    {
      key: "approved",
      name: i("approved button"),
      show: !0,
      disable: D && D.status === "approved",
      async action() {
        if (D) {
          switch (await Ri(D.objectId, { status: "approved" }), c.data = c.data.filter(
            ({ objectId: F }) => F !== D.objectId
          ), D.status) {
            case "waiting":
              c.waitingCount -= 1;
              break;
            case "spam":
              c.spamCount -= 1;
              break;
          }
          u({ ...c });
        } else
          await Promise.all(
            C.map(
              (F) => Ri(F, { status: "approved" })
            )
          ), _u({ page: c.page, filter: g }).then((F) => {
            u({ ...c, ...F }), j([]);
          });
      }
    },
    {
      key: "waiting",
      name: i("waiting"),
      show: !0,
      disable: D && D.status === "waiting",
      async action() {
        D ? (await Ri(D.objectId, { status: "waiting" }), c.data = c.data.filter(
          ({ objectId: F }) => F !== D.objectId
        ), D.status === "spam" && (c.spamCount -= 1), c.waitingCount += 1, u({ ...c })) : (await Promise.all(
          C.map(
            (F) => Ri(F, { status: "waiting" })
          )
        ), _u({ page: c.page, filter: g }).then((F) => {
          u({ ...c, ...F }), j([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: i(D ? "spam" : "mark as spam"),
      disable: D && D.status === "spam",
      async action() {
        D ? (await Ri(D.objectId, { status: "spam" }), c.data = c.data.filter(
          ({ objectId: F }) => F !== D.objectId
        ), c.spamCount += 1, u({ ...c })) : (await Promise.all(
          C.map(
            (F) => Ri(F, { status: "spam" })
          )
        ), _u({ page: c.page, filter: g }).then((F) => {
          u({ ...c, ...F }), j([]);
        }));
      }
    },
    {
      key: "sticky",
      show: D && !D.rid && D.status === "approved",
      name: D && D.sticky ? i("disable sticky") : i("sticky"),
      async action(F) {
        F.preventDefault();
        const L = !D.sticky;
        c.data.forEach((G) => {
          G.objectId === D.objectId && (G.sticky = L);
        }), await Ri(D.objectId, { sticky: L ? 1 : 0 }), u({ ...c });
      }
    },
    {
      key: "edit",
      show: D,
      name: i("edit"),
      action() {
        const F = {};
        p.id !== D.objectId && p.action !== "edit" && (F.id = D.objectId, F.action = "edit"), m(F);
      }
    },
    {
      key: "reply",
      show: D && D.status === "approved",
      name: i("reply"),
      action() {
        const F = {};
        p.id !== D.objectId && p.action !== "reply" && (F.id = D.objectId, F.action = "reply"), m(F);
      }
    },
    {
      key: "delete",
      name: i("delete"),
      show: !0,
      async action() {
        const F = D ? i("delete one confirm", { nick: D.nick }) : i("delete multiple confirm");
        confirm(F) && (D ? (await xN(D.objectId), c.data = c.data.filter(
          ({ objectId: L }) => L !== D.objectId
        ), u({ ...c })) : (await Promise.all(C.map(xN)), _u({ page: c.page, filter: g }).then((L) => {
          u({ ...c, ...L }), j([]);
        })));
      }
    }
  ].filter(({ show: F }) => F), A = async ({ pid: D, rid: F, url: L, at: G }) => {
    const ce = o.current.value;
    if (!ce)
      return null;
    const { display_name: ve, email: fe, url: ge } = d;
    await gP({
      nick: ve,
      mail: fe,
      ua: navigator.userAgent,
      link: ge,
      url: L,
      comment: ce,
      pid: D,
      rid: F || D,
      at: G
    }), location.reload();
  }, M = async (D) => {
    const F = c.data[D];
    await Ri(F.objectId, s.current), c.data[D] = { ...F, ...s.current }, u({ ...c }), m({});
  }, V = c.data.length && c.data.every(({ objectId: D }) => C.includes(D));
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: i("manage comments") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ w.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ w.jsxDEV("div", { className: "clear-fix", children: U.map(([D, F]) => /* @__PURE__ */ w.jsxDEV(
          "ul",
          {
            className: dg("typecho-option-tabs", {
              right: D === "owner"
            }),
            children: F.map(({ type: L, name: G }) => /* @__PURE__ */ w.jsxDEV(
              "li",
              {
                className: dg({ current: L === g[D] }),
                children: /* @__PURE__ */ w.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => v({ [D]: L }),
                    children: [
                      G,
                      D === "status" && L !== "approved" && c[`${L}Count`] > 0 ? /* @__PURE__ */ w.jsxDEV("span", { className: "balloon", children: c[`${L}Count`] }, void 0, !1, {
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
              L,
              !1,
              {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 292,
                columnNumber: 23
              },
              this
            ))
          },
          D,
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
              /* @__PURE__ */ w.jsxDEV("i", { className: "sr-only", children: i("select all") }, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                lineNumber: 319,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ w.jsxDEV(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: V,
                  onChange: () => j(
                    V ? [] : c.data.map(({ objectId: D }) => D)
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
                  onClick: () => x(!y),
                  children: [
                    /* @__PURE__ */ w.jsxDEV("i", { className: "sr-only", children: i("action") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 339,
                      columnNumber: 25
                    }, this),
                    i("selected items"),
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
                  style: { display: y ? "block" : "none" },
                  onClick: () => x(!1),
                  children: T().map(({ key: D, name: F, action: L }) => /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV("a", { href: "javascript:void(0)", onClick: L, children: F }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, D, !1, {
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
                placeholder: i("please input keywords")
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
                onClick: (D) => {
                  D.preventDefault(), v({ keyword: a.current.value });
                },
                children: i("filter")
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
                /* @__PURE__ */ w.jsxDEV("th", { children: i("author") }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 401,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ w.jsxDEV("th", { children: i("content") }, void 0, !1, {
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
              /* @__PURE__ */ w.jsxDEV("tbody", { children: c.data.map(
                ({
                  objectId: D,
                  nick: F,
                  mail: L,
                  avatar: G,
                  link: ce,
                  comment: ve,
                  ip: fe,
                  addr: ge,
                  url: Ve,
                  status: de,
                  rid: ye,
                  pid: he,
                  sticky: Pe,
                  time: Ne,
                  insertedAt: He
                }, yt) => p.id === D && p.action === "edit" ? /* @__PURE__ */ w.jsxDEV("tr", { className: "comment-edit", children: [
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
                          htmlFor: `comment-${D}-author`,
                          children: i("username")
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
                          id: `comment-${D}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: F,
                          onChange: (Be) => s.current.nick = Be.target.value
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
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${D}-mail`, children: i("email") }, void 0, !1, {
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
                          id: `comment-${D}-mail`,
                          defaultValue: L,
                          onChange: (Be) => s.current.mail = Be.target.value
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
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${D}-url`, children: i("homepage") }, void 0, !1, {
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
                          id: `comment-${D}-author`,
                          defaultValue: ce,
                          onChange: (Be) => s.current.link = Be.target.value
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
                      /* @__PURE__ */ w.jsxDEV("label", { htmlFor: `comment-${D}-text`, children: i("content") }, void 0, !1, {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ w.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${D}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: ve,
                          onChange: (Be) => s.current.comment = Be.target.value
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
                          onClick: () => M(yt),
                          children: i("submit")
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
                          onClick: () => m({}),
                          children: i("cancel")
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
                ] }, D, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 429,
                  columnNumber: 29
                }, this) : /* @__PURE__ */ w.jsxDEV("tr", { id: `comment-${D}`, children: [
                  /* @__PURE__ */ w.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ w.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: D,
                      checked: C.includes(D),
                      onChange: () => j(
                        C.includes(D) ? C.filter(
                          (Be) => Be !== D
                        ) : [...C, D]
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
                      src: O1(L, G),
                      alt: F,
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
                        /* @__PURE__ */ w.jsxDEV("strong", { className: "comment-author", children: ce ? /* @__PURE__ */ w.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(ce) ? ce : "https://" + ce,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: F
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : F }, void 0, !1, {
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
                            href: `mailto:${L}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: L
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
                        L && /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 583,
                          columnNumber: 44
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("span", { children: fe }, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        fe && /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ w.jsxDEV("span", { children: ge }, void 0, !1, {
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
                          vP(He || Ne),
                          " ",
                          i("at"),
                          " ",
                          /* @__PURE__ */ w.jsxDEV(
                            "a",
                            {
                              href: mP(Ve),
                              target: "_blank",
                              rel: "noreferrer",
                              children: Ve
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
                            dangerouslySetInnerHTML: { __html: ve }
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
                        p.id === D && p.action === "reply" ? /* @__PURE__ */ w.jsxDEV("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ w.jsxDEV("p", { children: [
                            /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "text", className: "sr-only", children: i("content") }, void 0, !1, {
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
                                ref: o
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
                                onClick: (Be) => {
                                  Be.preventDefault(), A({
                                    rid: ye,
                                    pid: D,
                                    url: Ve,
                                    at: F
                                  });
                                },
                                children: i("reply")
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
                                onClick: () => m({}),
                                children: i("cancel")
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
                        /* @__PURE__ */ w.jsxDEV("div", { className: "comment-action hidden-by-mouse", children: T({
                          objectId: D,
                          nick: F,
                          status: de,
                          rid: ye,
                          pid: he,
                          sticky: Pe
                        }).map(
                          ({ key: Be, disable: Vt, name: bt, action: Ft }) => Vt ? /* @__PURE__ */ w.jsxDEV("span", { className: "weak", children: bt }, Be, !1, {
                            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 659,
                            columnNumber: 39
                          }, this) : /* @__PURE__ */ w.jsxDEV(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${Be}`,
                              onClick: Ft,
                              children: bt
                            },
                            Be,
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
                ] }, D, !0, {
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
          L1,
          {
            current: c.page,
            total: c.totalPages,
            onChange: (D) => u({ ...c, page: D })
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
function bP(i, a, o) {
  const s = new Blob([i], { type: o }), d = document.createElement("a"), c = URL.createObjectURL(s);
  d.href = c, d.download = a, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(c);
  }, 0);
}
function xP(i) {
  return new Promise((a, o) => {
    const s = new FileReader();
    s.onload = (d) => a(d.target.result), s.onerror = o, s.readAsText(i);
  });
}
function SP() {
  const [i, a] = z.useState(!1), [o, s] = z.useState(!1), { t: d } = Ui(), c = z.useRef(null), u = () => {
    confirm(d("import clear data confirm")) && c.current.click();
  }, g = async (p) => {
    try {
      const m = await xP(p.target.files[0]), y = JSON.parse(m);
      if (!y || y.type !== "waline")
        return alert("import data format not support!");
      const x = y.tables.reduce(
        (A, M) => {
          var V;
          return A + (((V = y.data[M]) == null ? void 0 : V.length) || 0);
        },
        0
      );
      let C = 0;
      a([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: C, maxLength: x }
      ]);
      const j = {};
      for (const A of y.tables) {
        const M = y.data[A];
        if (A !== "Users" && await vn({
          url: "db?table=" + A,
          method: "DELETE"
        }), j[A] || (j[A] = {}), !!Array.isArray(M))
          for (const V of M) {
            let D = !1;
            if (A === "Users") {
              const ve = await vn("user?email=" + V.email);
              ve.objectId && (D = ve.objectId);
            }
            const L = A == "Users" && D ? "PUT" : "POST", G = A === "Comment" ? Object.assign({}, V, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : V;
            for (const ve in G)
              (G[ve] === null || G[ve] === void 0) && delete G[ve];
            const ce = await vn({
              url: `db?table=${A}${L === "PUT" ? `&objectId=${D}` : ""}`,
              method: L,
              body: G
            });
            j[A][V.objectId] = ce.objectId, C += 1, a([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: C, maxLength: x }
            ]);
          }
      }
      a(["comment data index relationship reconstruction"]);
      const U = y.data.Comment, T = [];
      for (const A of U) {
        const M = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: V, field: D }) => {
          if (!A[D])
            return;
          const F = A[D], L = j[V][A[D]];
          F && L && F !== L && (M[D] = L);
        }), Object.keys(M).length && T.push([
          M,
          { objectId: j.Comment[A.objectId] }
        ]);
      }
      C = 0;
      for (const [A, M] of T)
        await vn({
          url: `db?table=Comment&objectId=${M.objectId}`,
          method: "PUT",
          body: A
        }), C += 1, a([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: C, maxLength: T.length }
        ]);
      alert(d("import success")), location.reload();
    } catch (m) {
      throw console.log(m), alert(m.message), m;
    } finally {
      a(!1), p.target.value = null;
    }
  }, v = async () => {
    s(!0);
    try {
      const p = await vn("db");
      bP(
        JSON.stringify(p, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      s(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
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
            onClick: v,
            disabled: o,
            children: d(o ? "exporting" : "export")
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
              onClick: u,
              disabled: i,
              children: Array.isArray(i) ? d(...i) : d("import")
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
              ref: c,
              onChange: g,
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
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
function SN(i, a) {
  var o = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    a && (s = s.filter(function(d) {
      return Object.getOwnPropertyDescriptor(i, d).enumerable;
    })), o.push.apply(o, s);
  }
  return o;
}
function M1(i) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? SN(Object(o), !0).forEach(function(s) {
      CP(i, s, o[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : SN(Object(o)).forEach(function(s) {
      Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(o, s));
    });
  }
  return i;
}
function NP(i, a) {
  if (typeof i != "object" || !i) return i;
  var o = i[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(i, a || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(i);
}
function A1(i) {
  var a = NP(i, "string");
  return typeof a == "symbol" ? a : a + "";
}
function hg(i) {
  "@babel/helpers - typeof";
  return hg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, hg(i);
}
function wP(i, a) {
  if (!(i instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function NN(i, a) {
  for (var o = 0; o < a.length; o++) {
    var s = a[o];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, A1(s.key), s);
  }
}
function EP(i, a, o) {
  return a && NN(i.prototype, a), o && NN(i, o), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function CP(i, a, o) {
  return a = A1(a), a in i ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[a] = o, i;
}
function _1(i) {
  return RP(i) || jP(i) || TP(i) || DP();
}
function RP(i) {
  if (Array.isArray(i)) return mg(i);
}
function jP(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i);
}
function TP(i, a) {
  if (i) {
    if (typeof i == "string") return mg(i, a);
    var o = Object.prototype.toString.call(i).slice(8, -1);
    if (o === "Object" && i.constructor && (o = i.constructor.name), o === "Map" || o === "Set") return Array.from(i);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return mg(i, a);
  }
}
function mg(i, a) {
  (a == null || a > i.length) && (a = i.length);
  for (var o = 0, s = new Array(a); o < a; o++) s[o] = i[o];
  return s;
}
function DP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Bd = typeof window < "u" && typeof window.document < "u", mr = Bd ? window : {}, Og = Bd && mr.document.documentElement ? "ontouchstart" in mr.document.documentElement : !1, Lg = Bd ? "PointerEvent" in mr : !1, St = "cropper", Mg = "all", P1 = "crop", U1 = "move", V1 = "zoom", No = "e", wo = "w", Os = "s", ji = "n", Pu = "ne", Uu = "nw", Vu = "se", Fu = "sw", vg = "".concat(St, "-crop"), wN = "".concat(St, "-disabled"), Kn = "".concat(St, "-hidden"), EN = "".concat(St, "-hide"), kP = "".concat(St, "-invisible"), Vd = "".concat(St, "-modal"), gg = "".concat(St, "-move"), Gu = "".concat(St, "Action"), Sd = "".concat(St, "Preview"), Ag = "crop", F1 = "move", z1 = "none", yg = "crop", bg = "cropend", xg = "cropmove", Sg = "cropstart", CN = "dblclick", OP = Og ? "touchstart" : "mousedown", LP = Og ? "touchmove" : "mousemove", MP = Og ? "touchend touchcancel" : "mouseup", RN = Lg ? "pointerdown" : OP, jN = Lg ? "pointermove" : LP, TN = Lg ? "pointerup pointercancel" : MP, DN = "ready", kN = "resize", ON = "wheel", Ng = "zoom", LN = "image/jpeg", AP = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, _P = /^data:/, PP = /^data:image\/jpeg;base64,/, UP = /^img|canvas$/i, $1 = 200, H1 = 100, MN = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Ag,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: $1,
  minContainerHeight: H1,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, VP = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', FP = Number.isNaN || mr.isNaN;
function Xe(i) {
  return typeof i == "number" && !FP(i);
}
var AN = function(a) {
  return a > 0 && a < 1 / 0;
};
function ag(i) {
  return typeof i > "u";
}
function Eo(i) {
  return hg(i) === "object" && i !== null;
}
var zP = Object.prototype.hasOwnProperty;
function As(i) {
  if (!Eo(i))
    return !1;
  try {
    var a = i.constructor, o = a.prototype;
    return a && o && zP.call(o, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function Wn(i) {
  return typeof i == "function";
}
var $P = Array.prototype.slice;
function B1(i) {
  return Array.from ? Array.from(i) : $P.call(i);
}
function Ut(i, a) {
  return i && Wn(a) && (Array.isArray(i) || Xe(i.length) ? B1(i).forEach(function(o, s) {
    a.call(i, o, s, i);
  }) : Eo(i) && Object.keys(i).forEach(function(o) {
    a.call(i, i[o], o, i);
  })), i;
}
var Nt = Object.assign || function(a) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
    s[d - 1] = arguments[d];
  return Eo(a) && s.length > 0 && s.forEach(function(c) {
    Eo(c) && Object.keys(c).forEach(function(u) {
      a[u] = c[u];
    });
  }), a;
}, HP = /\.\d*(?:0|9){12}\d*$/;
function Ps(i) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return HP.test(i) ? Math.round(i * a) / a : i;
}
var BP = /^width|height|left|top|marginLeft|marginTop$/;
function Oi(i, a) {
  var o = i.style;
  Ut(a, function(s, d) {
    BP.test(d) && Xe(s) && (s = "".concat(s, "px")), o[d] = s;
  });
}
function IP(i, a) {
  return i.classList ? i.classList.contains(a) : i.className.indexOf(a) > -1;
}
function rn(i, a) {
  if (a) {
    if (Xe(i.length)) {
      Ut(i, function(s) {
        rn(s, a);
      });
      return;
    }
    if (i.classList) {
      i.classList.add(a);
      return;
    }
    var o = i.className.trim();
    o ? o.indexOf(a) < 0 && (i.className = "".concat(o, " ").concat(a)) : i.className = a;
  }
}
function pr(i, a) {
  if (a) {
    if (Xe(i.length)) {
      Ut(i, function(o) {
        pr(o, a);
      });
      return;
    }
    if (i.classList) {
      i.classList.remove(a);
      return;
    }
    i.className.indexOf(a) >= 0 && (i.className = i.className.replace(a, ""));
  }
}
function _s(i, a, o) {
  if (a) {
    if (Xe(i.length)) {
      Ut(i, function(s) {
        _s(s, a, o);
      });
      return;
    }
    o ? rn(i, a) : pr(i, a);
  }
}
var JP = /([a-z\d])([A-Z])/g;
function _g(i) {
  return i.replace(JP, "$1-$2").toLowerCase();
}
function wg(i, a) {
  return Eo(i[a]) ? i[a] : i.dataset ? i.dataset[a] : i.getAttribute("data-".concat(_g(a)));
}
function Xu(i, a, o) {
  Eo(o) ? i[a] = o : i.dataset ? i.dataset[a] = o : i.setAttribute("data-".concat(_g(a)), o);
}
function YP(i, a) {
  if (Eo(i[a]))
    try {
      delete i[a];
    } catch {
      i[a] = void 0;
    }
  else if (i.dataset)
    try {
      delete i.dataset[a];
    } catch {
      i.dataset[a] = void 0;
    }
  else
    i.removeAttribute("data-".concat(_g(a)));
}
var I1 = /\s\s*/, J1 = function() {
  var i = !1;
  if (Bd) {
    var a = !1, o = function() {
    }, s = Object.defineProperty({}, "once", {
      get: function() {
        return i = !0, a;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(c) {
        a = c;
      }
    });
    mr.addEventListener("test", o, s), mr.removeEventListener("test", o, s);
  }
  return i;
}();
function Ka(i, a, o) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = o;
  a.trim().split(I1).forEach(function(c) {
    if (!J1) {
      var u = i.listeners;
      u && u[c] && u[c][o] && (d = u[c][o], delete u[c][o], Object.keys(u[c]).length === 0 && delete u[c], Object.keys(u).length === 0 && delete i.listeners);
    }
    i.removeEventListener(c, d, s);
  });
}
function Ra(i, a, o) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = o;
  a.trim().split(I1).forEach(function(c) {
    if (s.once && !J1) {
      var u = i.listeners, g = u === void 0 ? {} : u;
      d = function() {
        delete g[c][o], i.removeEventListener(c, d, s);
        for (var p = arguments.length, m = new Array(p), y = 0; y < p; y++)
          m[y] = arguments[y];
        o.apply(i, m);
      }, g[c] || (g[c] = {}), g[c][o] && i.removeEventListener(c, g[c][o], s), g[c][o] = d, i.listeners = g;
    }
    i.addEventListener(c, d, s);
  });
}
function Us(i, a, o) {
  var s;
  return Wn(Event) && Wn(CustomEvent) ? s = new CustomEvent(a, {
    detail: o,
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(a, !0, !0, o)), i.dispatchEvent(s);
}
function Y1(i) {
  var a = i.getBoundingClientRect();
  return {
    left: a.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: a.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var rg = mr.location, WP = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function _N(i) {
  var a = i.match(WP);
  return a !== null && (a[1] !== rg.protocol || a[2] !== rg.hostname || a[3] !== rg.port);
}
function PN(i) {
  var a = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return i + (i.indexOf("?") === -1 ? "?" : "&") + a;
}
function Bu(i) {
  var a = i.rotate, o = i.scaleX, s = i.scaleY, d = i.translateX, c = i.translateY, u = [];
  Xe(d) && d !== 0 && u.push("translateX(".concat(d, "px)")), Xe(c) && c !== 0 && u.push("translateY(".concat(c, "px)")), Xe(a) && a !== 0 && u.push("rotate(".concat(a, "deg)")), Xe(o) && o !== 1 && u.push("scaleX(".concat(o, ")")), Xe(s) && s !== 1 && u.push("scaleY(".concat(s, ")"));
  var g = u.length ? u.join(" ") : "none";
  return {
    WebkitTransform: g,
    msTransform: g,
    transform: g
  };
}
function KP(i) {
  var a = M1({}, i), o = 0;
  return Ut(i, function(s, d) {
    delete a[d], Ut(a, function(c) {
      var u = Math.abs(s.startX - c.startX), g = Math.abs(s.startY - c.startY), v = Math.abs(s.endX - c.endX), p = Math.abs(s.endY - c.endY), m = Math.sqrt(u * u + g * g), y = Math.sqrt(v * v + p * p), x = (y - m) / m;
      Math.abs(x) > Math.abs(o) && (o = x);
    });
  }), o;
}
function Nd(i, a) {
  var o = i.pageX, s = i.pageY, d = {
    endX: o,
    endY: s
  };
  return a ? d : M1({
    startX: o,
    startY: s
  }, d);
}
function GP(i) {
  var a = 0, o = 0, s = 0;
  return Ut(i, function(d) {
    var c = d.startX, u = d.startY;
    a += c, o += u, s += 1;
  }), a /= s, o /= s, {
    pageX: a,
    pageY: o
  };
}
function Li(i) {
  var a = i.aspectRatio, o = i.height, s = i.width, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", c = AN(s), u = AN(o);
  if (c && u) {
    var g = o * a;
    d === "contain" && g > s || d === "cover" && g < s ? o = s / a : s = o * a;
  } else c ? o = s / a : u && (s = o * a);
  return {
    width: s,
    height: o
  };
}
function XP(i) {
  var a = i.width, o = i.height, s = i.degree;
  if (s = Math.abs(s) % 180, s === 90)
    return {
      width: o,
      height: a
    };
  var d = s % 90 * Math.PI / 180, c = Math.sin(d), u = Math.cos(d), g = a * u + o * c, v = a * c + o * u;
  return s > 90 ? {
    width: v,
    height: g
  } : {
    width: g,
    height: v
  };
}
function qP(i, a, o, s) {
  var d = a.aspectRatio, c = a.naturalWidth, u = a.naturalHeight, g = a.rotate, v = g === void 0 ? 0 : g, p = a.scaleX, m = p === void 0 ? 1 : p, y = a.scaleY, x = y === void 0 ? 1 : y, C = o.aspectRatio, j = o.naturalWidth, U = o.naturalHeight, T = s.fillColor, A = T === void 0 ? "transparent" : T, M = s.imageSmoothingEnabled, V = M === void 0 ? !0 : M, D = s.imageSmoothingQuality, F = D === void 0 ? "low" : D, L = s.maxWidth, G = L === void 0 ? 1 / 0 : L, ce = s.maxHeight, ve = ce === void 0 ? 1 / 0 : ce, fe = s.minWidth, ge = fe === void 0 ? 0 : fe, Ve = s.minHeight, de = Ve === void 0 ? 0 : Ve, ye = document.createElement("canvas"), he = ye.getContext("2d"), Pe = Li({
    aspectRatio: C,
    width: G,
    height: ve
  }), Ne = Li({
    aspectRatio: C,
    width: ge,
    height: de
  }, "cover"), He = Math.min(Pe.width, Math.max(Ne.width, j)), yt = Math.min(Pe.height, Math.max(Ne.height, U)), Be = Li({
    aspectRatio: d,
    width: G,
    height: ve
  }), Vt = Li({
    aspectRatio: d,
    width: ge,
    height: de
  }, "cover"), bt = Math.min(Be.width, Math.max(Vt.width, c)), Ft = Math.min(Be.height, Math.max(Vt.height, u)), Tn = [-bt / 2, -Ft / 2, bt, Ft];
  return ye.width = Ps(He), ye.height = Ps(yt), he.fillStyle = A, he.fillRect(0, 0, He, yt), he.save(), he.translate(He / 2, yt / 2), he.rotate(v * Math.PI / 180), he.scale(m, x), he.imageSmoothingEnabled = V, he.imageSmoothingQuality = F, he.drawImage.apply(he, [i].concat(_1(Tn.map(function(da) {
    return Math.floor(Ps(da));
  })))), he.restore(), ye;
}
var W1 = String.fromCharCode;
function QP(i, a, o) {
  var s = "";
  o += a;
  for (var d = a; d < o; d += 1)
    s += W1(i.getUint8(d));
  return s;
}
var ZP = /^data:.*,/;
function e5(i) {
  var a = i.replace(ZP, ""), o = atob(a), s = new ArrayBuffer(o.length), d = new Uint8Array(s);
  return Ut(d, function(c, u) {
    d[u] = o.charCodeAt(u);
  }), s;
}
function t5(i, a) {
  for (var o = [], s = 8192, d = new Uint8Array(i); d.length > 0; )
    o.push(W1.apply(null, B1(d.subarray(0, s)))), d = d.subarray(s);
  return "data:".concat(a, ";base64,").concat(btoa(o.join("")));
}
function n5(i) {
  var a = new DataView(i), o;
  try {
    var s, d, c;
    if (a.getUint8(0) === 255 && a.getUint8(1) === 216)
      for (var u = a.byteLength, g = 2; g + 1 < u; ) {
        if (a.getUint8(g) === 255 && a.getUint8(g + 1) === 225) {
          d = g;
          break;
        }
        g += 1;
      }
    if (d) {
      var v = d + 4, p = d + 10;
      if (QP(a, v, 4) === "Exif") {
        var m = a.getUint16(p);
        if (s = m === 18761, (s || m === 19789) && a.getUint16(p + 2, s) === 42) {
          var y = a.getUint32(p + 4, s);
          y >= 8 && (c = p + y);
        }
      }
    }
    if (c) {
      var x = a.getUint16(c, s), C, j;
      for (j = 0; j < x; j += 1)
        if (C = c + j * 12 + 2, a.getUint16(C, s) === 274) {
          C += 8, o = a.getUint16(C, s), a.setUint16(C, 1, s);
          break;
        }
    }
  } catch {
    o = 1;
  }
  return o;
}
function a5(i) {
  var a = 0, o = 1, s = 1;
  switch (i) {
    case 2:
      o = -1;
      break;
    case 3:
      a = -180;
      break;
    case 4:
      s = -1;
      break;
    case 5:
      a = 90, s = -1;
      break;
    case 6:
      a = 90;
      break;
    case 7:
      a = 90, o = -1;
      break;
    case 8:
      a = -90;
      break;
  }
  return {
    rotate: a,
    scaleX: o,
    scaleY: s
  };
}
var r5 = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var a = this.element, o = this.options, s = this.container, d = this.cropper, c = Number(o.minContainerWidth), u = Number(o.minContainerHeight);
    rn(d, Kn), pr(a, Kn);
    var g = {
      width: Math.max(s.offsetWidth, c >= 0 ? c : $1),
      height: Math.max(s.offsetHeight, u >= 0 ? u : H1)
    };
    this.containerData = g, Oi(d, {
      width: g.width,
      height: g.height
    }), rn(a, Kn), pr(d, Kn);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var a = this.containerData, o = this.imageData, s = this.options.viewMode, d = Math.abs(o.rotate) % 180 === 90, c = d ? o.naturalHeight : o.naturalWidth, u = d ? o.naturalWidth : o.naturalHeight, g = c / u, v = a.width, p = a.height;
    a.height * g > a.width ? s === 3 ? v = a.height * g : p = a.width / g : s === 3 ? p = a.width / g : v = a.height * g;
    var m = {
      aspectRatio: g,
      naturalWidth: c,
      naturalHeight: u,
      width: v,
      height: p
    };
    this.canvasData = m, this.limited = s === 1 || s === 2, this.limitCanvas(!0, !0), m.width = Math.min(Math.max(m.width, m.minWidth), m.maxWidth), m.height = Math.min(Math.max(m.height, m.minHeight), m.maxHeight), m.left = (a.width - m.width) / 2, m.top = (a.height - m.height) / 2, m.oldLeft = m.left, m.oldTop = m.top, this.initialCanvasData = Nt({}, m);
  },
  limitCanvas: function(a, o) {
    var s = this.options, d = this.containerData, c = this.canvasData, u = this.cropBoxData, g = s.viewMode, v = c.aspectRatio, p = this.cropped && u;
    if (a) {
      var m = Number(s.minCanvasWidth) || 0, y = Number(s.minCanvasHeight) || 0;
      g > 1 ? (m = Math.max(m, d.width), y = Math.max(y, d.height), g === 3 && (y * v > m ? m = y * v : y = m / v)) : g > 0 && (m ? m = Math.max(m, p ? u.width : 0) : y ? y = Math.max(y, p ? u.height : 0) : p && (m = u.width, y = u.height, y * v > m ? m = y * v : y = m / v));
      var x = Li({
        aspectRatio: v,
        width: m,
        height: y
      });
      m = x.width, y = x.height, c.minWidth = m, c.minHeight = y, c.maxWidth = 1 / 0, c.maxHeight = 1 / 0;
    }
    if (o)
      if (g > (p ? 0 : 1)) {
        var C = d.width - c.width, j = d.height - c.height;
        c.minLeft = Math.min(0, C), c.minTop = Math.min(0, j), c.maxLeft = Math.max(0, C), c.maxTop = Math.max(0, j), p && this.limited && (c.minLeft = Math.min(u.left, u.left + (u.width - c.width)), c.minTop = Math.min(u.top, u.top + (u.height - c.height)), c.maxLeft = u.left, c.maxTop = u.top, g === 2 && (c.width >= d.width && (c.minLeft = Math.min(0, C), c.maxLeft = Math.max(0, C)), c.height >= d.height && (c.minTop = Math.min(0, j), c.maxTop = Math.max(0, j))));
      } else
        c.minLeft = -c.width, c.minTop = -c.height, c.maxLeft = d.width, c.maxTop = d.height;
  },
  renderCanvas: function(a, o) {
    var s = this.canvasData, d = this.imageData;
    if (o) {
      var c = XP({
        width: d.naturalWidth * Math.abs(d.scaleX || 1),
        height: d.naturalHeight * Math.abs(d.scaleY || 1),
        degree: d.rotate || 0
      }), u = c.width, g = c.height, v = s.width * (u / s.naturalWidth), p = s.height * (g / s.naturalHeight);
      s.left -= (v - s.width) / 2, s.top -= (p - s.height) / 2, s.width = v, s.height = p, s.aspectRatio = u / g, s.naturalWidth = u, s.naturalHeight = g, this.limitCanvas(!0, !1);
    }
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCanvas(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, Oi(this.canvas, Nt({
      width: s.width,
      height: s.height
    }, Bu({
      translateX: s.left,
      translateY: s.top
    }))), this.renderImage(a), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(a) {
    var o = this.canvasData, s = this.imageData, d = s.naturalWidth * (o.width / o.naturalWidth), c = s.naturalHeight * (o.height / o.naturalHeight);
    Nt(s, {
      width: d,
      height: c,
      left: (o.width - d) / 2,
      top: (o.height - c) / 2
    }), Oi(this.image, Nt({
      width: s.width,
      height: s.height
    }, Bu(Nt({
      translateX: s.left,
      translateY: s.top
    }, s)))), a && this.output();
  },
  initCropBox: function() {
    var a = this.options, o = this.canvasData, s = a.aspectRatio || a.initialAspectRatio, d = Number(a.autoCropArea) || 0.8, c = {
      width: o.width,
      height: o.height
    };
    s && (o.height * s > o.width ? c.height = c.width / s : c.width = c.height * s), this.cropBoxData = c, this.limitCropBox(!0, !0), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), c.width = Math.max(c.minWidth, c.width * d), c.height = Math.max(c.minHeight, c.height * d), c.left = o.left + (o.width - c.width) / 2, c.top = o.top + (o.height - c.height) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.initialCropBoxData = Nt({}, c);
  },
  limitCropBox: function(a, o) {
    var s = this.options, d = this.containerData, c = this.canvasData, u = this.cropBoxData, g = this.limited, v = s.aspectRatio;
    if (a) {
      var p = Number(s.minCropBoxWidth) || 0, m = Number(s.minCropBoxHeight) || 0, y = g ? Math.min(d.width, c.width, c.width + c.left, d.width - c.left) : d.width, x = g ? Math.min(d.height, c.height, c.height + c.top, d.height - c.top) : d.height;
      p = Math.min(p, d.width), m = Math.min(m, d.height), v && (p && m ? m * v > p ? m = p / v : p = m * v : p ? m = p / v : m && (p = m * v), x * v > y ? x = y / v : y = x * v), u.minWidth = Math.min(p, y), u.minHeight = Math.min(m, x), u.maxWidth = y, u.maxHeight = x;
    }
    o && (g ? (u.minLeft = Math.max(0, c.left), u.minTop = Math.max(0, c.top), u.maxLeft = Math.min(d.width, c.left + c.width) - u.width, u.maxTop = Math.min(d.height, c.top + c.height) - u.height) : (u.minLeft = 0, u.minTop = 0, u.maxLeft = d.width - u.width, u.maxTop = d.height - u.height));
  },
  renderCropBox: function() {
    var a = this.options, o = this.containerData, s = this.cropBoxData;
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCropBox(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, a.movable && a.cropBoxMovable && Xu(this.face, Gu, s.width >= o.width && s.height >= o.height ? U1 : Mg), Oi(this.cropBox, Nt({
      width: s.width,
      height: s.height
    }, Bu({
      translateX: s.left,
      translateY: s.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), Us(this.element, yg, this.getData());
  }
}, i5 = {
  initPreview: function() {
    var a = this.element, o = this.crossOrigin, s = this.options.preview, d = o ? this.crossOriginUrl : this.url, c = a.alt || "The image to preview", u = document.createElement("img");
    if (o && (u.crossOrigin = o), u.src = d, u.alt = c, this.viewBox.appendChild(u), this.viewBoxImage = u, !!s) {
      var g = s;
      typeof s == "string" ? g = a.ownerDocument.querySelectorAll(s) : s.querySelector && (g = [s]), this.previews = g, Ut(g, function(v) {
        var p = document.createElement("img");
        Xu(v, Sd, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), o && (p.crossOrigin = o), p.src = d, p.alt = c, p.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(p);
      });
    }
  },
  resetPreview: function() {
    Ut(this.previews, function(a) {
      var o = wg(a, Sd);
      Oi(a, {
        width: o.width,
        height: o.height
      }), a.innerHTML = o.html, YP(a, Sd);
    });
  },
  preview: function() {
    var a = this.imageData, o = this.canvasData, s = this.cropBoxData, d = s.width, c = s.height, u = a.width, g = a.height, v = s.left - o.left - a.left, p = s.top - o.top - a.top;
    !this.cropped || this.disabled || (Oi(this.viewBoxImage, Nt({
      width: u,
      height: g
    }, Bu(Nt({
      translateX: -v,
      translateY: -p
    }, a)))), Ut(this.previews, function(m) {
      var y = wg(m, Sd), x = y.width, C = y.height, j = x, U = C, T = 1;
      d && (T = x / d, U = c * T), c && U > C && (T = C / c, j = d * T, U = C), Oi(m, {
        width: j,
        height: U
      }), Oi(m.getElementsByTagName("img")[0], Nt({
        width: u * T,
        height: g * T
      }, Bu(Nt({
        translateX: -v * T,
        translateY: -p * T
      }, a))));
    }));
  }
}, o5 = {
  bind: function() {
    var a = this.element, o = this.options, s = this.cropper;
    Wn(o.cropstart) && Ra(a, Sg, o.cropstart), Wn(o.cropmove) && Ra(a, xg, o.cropmove), Wn(o.cropend) && Ra(a, bg, o.cropend), Wn(o.crop) && Ra(a, yg, o.crop), Wn(o.zoom) && Ra(a, Ng, o.zoom), Ra(s, RN, this.onCropStart = this.cropStart.bind(this)), o.zoomable && o.zoomOnWheel && Ra(s, ON, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), o.toggleDragModeOnDblclick && Ra(s, CN, this.onDblclick = this.dblclick.bind(this)), Ra(a.ownerDocument, jN, this.onCropMove = this.cropMove.bind(this)), Ra(a.ownerDocument, TN, this.onCropEnd = this.cropEnd.bind(this)), o.responsive && Ra(window, kN, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var a = this.element, o = this.options, s = this.cropper;
    Wn(o.cropstart) && Ka(a, Sg, o.cropstart), Wn(o.cropmove) && Ka(a, xg, o.cropmove), Wn(o.cropend) && Ka(a, bg, o.cropend), Wn(o.crop) && Ka(a, yg, o.crop), Wn(o.zoom) && Ka(a, Ng, o.zoom), Ka(s, RN, this.onCropStart), o.zoomable && o.zoomOnWheel && Ka(s, ON, this.onWheel, {
      passive: !1,
      capture: !0
    }), o.toggleDragModeOnDblclick && Ka(s, CN, this.onDblclick), Ka(a.ownerDocument, jN, this.onCropMove), Ka(a.ownerDocument, TN, this.onCropEnd), o.responsive && Ka(window, kN, this.onResize);
  }
}, s5 = {
  resize: function() {
    if (!this.disabled) {
      var a = this.options, o = this.container, s = this.containerData, d = o.offsetWidth / s.width, c = o.offsetHeight / s.height, u = Math.abs(d - 1) > Math.abs(c - 1) ? d : c;
      if (u !== 1) {
        var g, v;
        a.restore && (g = this.getCanvasData(), v = this.getCropBoxData()), this.render(), a.restore && (this.setCanvasData(Ut(g, function(p, m) {
          g[m] = p * u;
        })), this.setCropBoxData(Ut(v, function(p, m) {
          v[m] = p * u;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === z1 || this.setDragMode(IP(this.dragBox, vg) ? F1 : Ag);
  },
  wheel: function(a) {
    var o = this, s = Number(this.options.wheelZoomRatio) || 0.1, d = 1;
    this.disabled || (a.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      o.wheeling = !1;
    }, 50), a.deltaY ? d = a.deltaY > 0 ? 1 : -1 : a.wheelDelta ? d = -a.wheelDelta / 120 : a.detail && (d = a.detail > 0 ? 1 : -1), this.zoom(-d * s, a)));
  },
  cropStart: function(a) {
    var o = a.buttons, s = a.button;
    if (!(this.disabled || (a.type === "mousedown" || a.type === "pointerdown" && a.pointerType === "mouse") && // No primary button (Usually the left button)
    (Xe(o) && o !== 1 || Xe(s) && s !== 0 || a.ctrlKey))) {
      var d = this.options, c = this.pointers, u;
      a.changedTouches ? Ut(a.changedTouches, function(g) {
        c[g.identifier] = Nd(g);
      }) : c[a.pointerId || 0] = Nd(a), Object.keys(c).length > 1 && d.zoomable && d.zoomOnTouch ? u = V1 : u = wg(a.target, Gu), AP.test(u) && Us(this.element, Sg, {
        originalEvent: a,
        action: u
      }) !== !1 && (a.preventDefault(), this.action = u, this.cropping = !1, u === P1 && (this.cropping = !0, rn(this.dragBox, Vd)));
    }
  },
  cropMove: function(a) {
    var o = this.action;
    if (!(this.disabled || !o)) {
      var s = this.pointers;
      a.preventDefault(), Us(this.element, xg, {
        originalEvent: a,
        action: o
      }) !== !1 && (a.changedTouches ? Ut(a.changedTouches, function(d) {
        Nt(s[d.identifier] || {}, Nd(d, !0));
      }) : Nt(s[a.pointerId || 0] || {}, Nd(a, !0)), this.change(a));
    }
  },
  cropEnd: function(a) {
    if (!this.disabled) {
      var o = this.action, s = this.pointers;
      a.changedTouches ? Ut(a.changedTouches, function(d) {
        delete s[d.identifier];
      }) : delete s[a.pointerId || 0], o && (a.preventDefault(), Object.keys(s).length || (this.action = ""), this.cropping && (this.cropping = !1, _s(this.dragBox, Vd, this.cropped && this.options.modal)), Us(this.element, bg, {
        originalEvent: a,
        action: o
      }));
    }
  }
}, l5 = {
  change: function(a) {
    var o = this.options, s = this.canvasData, d = this.containerData, c = this.cropBoxData, u = this.pointers, g = this.action, v = o.aspectRatio, p = c.left, m = c.top, y = c.width, x = c.height, C = p + y, j = m + x, U = 0, T = 0, A = d.width, M = d.height, V = !0, D;
    !v && a.shiftKey && (v = y && x ? y / x : 1), this.limited && (U = c.minLeft, T = c.minTop, A = U + Math.min(d.width, s.width, s.left + s.width), M = T + Math.min(d.height, s.height, s.top + s.height));
    var F = u[Object.keys(u)[0]], L = {
      x: F.endX - F.startX,
      y: F.endY - F.startY
    }, G = function(ve) {
      switch (ve) {
        case No:
          C + L.x > A && (L.x = A - C);
          break;
        case wo:
          p + L.x < U && (L.x = U - p);
          break;
        case ji:
          m + L.y < T && (L.y = T - m);
          break;
        case Os:
          j + L.y > M && (L.y = M - j);
          break;
      }
    };
    switch (g) {
      case Mg:
        p += L.x, m += L.y;
        break;
      case No:
        if (L.x >= 0 && (C >= A || v && (m <= T || j >= M))) {
          V = !1;
          break;
        }
        G(No), y += L.x, y < 0 && (g = wo, y = -y, p -= y), v && (x = y / v, m += (c.height - x) / 2);
        break;
      case ji:
        if (L.y <= 0 && (m <= T || v && (p <= U || C >= A))) {
          V = !1;
          break;
        }
        G(ji), x -= L.y, m += L.y, x < 0 && (g = Os, x = -x, m -= x), v && (y = x * v, p += (c.width - y) / 2);
        break;
      case wo:
        if (L.x <= 0 && (p <= U || v && (m <= T || j >= M))) {
          V = !1;
          break;
        }
        G(wo), y -= L.x, p += L.x, y < 0 && (g = No, y = -y, p -= y), v && (x = y / v, m += (c.height - x) / 2);
        break;
      case Os:
        if (L.y >= 0 && (j >= M || v && (p <= U || C >= A))) {
          V = !1;
          break;
        }
        G(Os), x += L.y, x < 0 && (g = ji, x = -x, m -= x), v && (y = x * v, p += (c.width - y) / 2);
        break;
      case Pu:
        if (v) {
          if (L.y <= 0 && (m <= T || C >= A)) {
            V = !1;
            break;
          }
          G(ji), x -= L.y, m += L.y, y = x * v;
        } else
          G(ji), G(No), L.x >= 0 ? C < A ? y += L.x : L.y <= 0 && m <= T && (V = !1) : y += L.x, L.y <= 0 ? m > T && (x -= L.y, m += L.y) : (x -= L.y, m += L.y);
        y < 0 && x < 0 ? (g = Fu, x = -x, y = -y, m -= x, p -= y) : y < 0 ? (g = Uu, y = -y, p -= y) : x < 0 && (g = Vu, x = -x, m -= x);
        break;
      case Uu:
        if (v) {
          if (L.y <= 0 && (m <= T || p <= U)) {
            V = !1;
            break;
          }
          G(ji), x -= L.y, m += L.y, y = x * v, p += c.width - y;
        } else
          G(ji), G(wo), L.x <= 0 ? p > U ? (y -= L.x, p += L.x) : L.y <= 0 && m <= T && (V = !1) : (y -= L.x, p += L.x), L.y <= 0 ? m > T && (x -= L.y, m += L.y) : (x -= L.y, m += L.y);
        y < 0 && x < 0 ? (g = Vu, x = -x, y = -y, m -= x, p -= y) : y < 0 ? (g = Pu, y = -y, p -= y) : x < 0 && (g = Fu, x = -x, m -= x);
        break;
      case Fu:
        if (v) {
          if (L.x <= 0 && (p <= U || j >= M)) {
            V = !1;
            break;
          }
          G(wo), y -= L.x, p += L.x, x = y / v;
        } else
          G(Os), G(wo), L.x <= 0 ? p > U ? (y -= L.x, p += L.x) : L.y >= 0 && j >= M && (V = !1) : (y -= L.x, p += L.x), L.y >= 0 ? j < M && (x += L.y) : x += L.y;
        y < 0 && x < 0 ? (g = Pu, x = -x, y = -y, m -= x, p -= y) : y < 0 ? (g = Vu, y = -y, p -= y) : x < 0 && (g = Uu, x = -x, m -= x);
        break;
      case Vu:
        if (v) {
          if (L.x >= 0 && (C >= A || j >= M)) {
            V = !1;
            break;
          }
          G(No), y += L.x, x = y / v;
        } else
          G(Os), G(No), L.x >= 0 ? C < A ? y += L.x : L.y >= 0 && j >= M && (V = !1) : y += L.x, L.y >= 0 ? j < M && (x += L.y) : x += L.y;
        y < 0 && x < 0 ? (g = Uu, x = -x, y = -y, m -= x, p -= y) : y < 0 ? (g = Fu, y = -y, p -= y) : x < 0 && (g = Pu, x = -x, m -= x);
        break;
      case U1:
        this.move(L.x, L.y), V = !1;
        break;
      case V1:
        this.zoom(KP(u), a), V = !1;
        break;
      case P1:
        if (!L.x || !L.y) {
          V = !1;
          break;
        }
        D = Y1(this.cropper), p = F.startX - D.left, m = F.startY - D.top, y = c.minWidth, x = c.minHeight, L.x > 0 ? g = L.y > 0 ? Vu : Pu : L.x < 0 && (p -= y, g = L.y > 0 ? Fu : Uu), L.y < 0 && (m -= x), this.cropped || (pr(this.cropBox, Kn), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    V && (c.width = y, c.height = x, c.left = p, c.top = m, this.action = g, this.renderCropBox()), Ut(u, function(ce) {
      ce.startX = ce.endX, ce.startY = ce.endY;
    });
  }
}, u5 = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && rn(this.dragBox, Vd), pr(this.cropBox, Kn), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Nt({}, this.initialImageData), this.canvasData = Nt({}, this.initialCanvasData), this.cropBoxData = Nt({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Nt(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), pr(this.dragBox, Vd), rn(this.cropBox, Kn)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && a && (this.isImg && (this.element.src = a), o ? (this.url = a, this.image.src = a, this.ready && (this.viewBoxImage.src = a, Ut(this.previews, function(s) {
      s.getElementsByTagName("img")[0].src = a;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(a))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, pr(this.cropper, wN)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, rn(this.cropper, wN)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var a = this.element;
    return a[St] ? (a[St] = void 0, this.isImg && this.replaced && (a.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, s = this.canvasData, d = s.left, c = s.top;
    return this.moveTo(ag(a) ? a : d + Number(a), ag(o) ? o : c + Number(o));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, s = this.canvasData, d = !1;
    return a = Number(a), o = Number(o), this.ready && !this.disabled && this.options.movable && (Xe(a) && (s.left = a, d = !0), Xe(o) && (s.top = o, d = !0), d && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(a, o) {
    var s = this.canvasData;
    return a = Number(a), a < 0 ? a = 1 / (1 - a) : a = 1 + a, this.zoomTo(s.width * a / s.naturalWidth, null, o);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(a, o, s) {
    var d = this.options, c = this.canvasData, u = c.width, g = c.height, v = c.naturalWidth, p = c.naturalHeight;
    if (a = Number(a), a >= 0 && this.ready && !this.disabled && d.zoomable) {
      var m = v * a, y = p * a;
      if (Us(this.element, Ng, {
        ratio: a,
        oldRatio: u / v,
        originalEvent: s
      }) === !1)
        return this;
      if (s) {
        var x = this.pointers, C = Y1(this.cropper), j = x && Object.keys(x).length ? GP(x) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        c.left -= (m - u) * ((j.pageX - C.left - c.left) / u), c.top -= (y - g) * ((j.pageY - C.top - c.top) / g);
      } else As(o) && Xe(o.x) && Xe(o.y) ? (c.left -= (m - u) * ((o.x - c.left) / u), c.top -= (y - g) * ((o.y - c.top) / g)) : (c.left -= (m - u) / 2, c.top -= (y - g) / 2);
      c.width = m, c.height = y, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(a) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(a));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(a) {
    return a = Number(a), Xe(a) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = a % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(a) {
    var o = this.imageData.scaleY;
    return this.scale(a, Xe(o) ? o : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(a) {
    var o = this.imageData.scaleX;
    return this.scale(Xe(o) ? o : 1, a);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, s = this.imageData, d = !1;
    return a = Number(a), o = Number(o), this.ready && !this.disabled && this.options.scalable && (Xe(a) && (s.scaleX = a, d = !0), Xe(o) && (s.scaleY = o, d = !0), d && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = this.options, s = this.imageData, d = this.canvasData, c = this.cropBoxData, u;
    if (this.ready && this.cropped) {
      u = {
        x: c.left - d.left,
        y: c.top - d.top,
        width: c.width,
        height: c.height
      };
      var g = s.width / s.naturalWidth;
      if (Ut(u, function(m, y) {
        u[y] = m / g;
      }), a) {
        var v = Math.round(u.y + u.height), p = Math.round(u.x + u.width);
        u.x = Math.round(u.x), u.y = Math.round(u.y), u.width = p - u.x, u.height = v - u.y;
      }
    } else
      u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return o.rotatable && (u.rotate = s.rotate || 0), o.scalable && (u.scaleX = s.scaleX || 1, u.scaleY = s.scaleY || 1), u;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(a) {
    var o = this.options, s = this.imageData, d = this.canvasData, c = {};
    if (this.ready && !this.disabled && As(a)) {
      var u = !1;
      o.rotatable && Xe(a.rotate) && a.rotate !== s.rotate && (s.rotate = a.rotate, u = !0), o.scalable && (Xe(a.scaleX) && a.scaleX !== s.scaleX && (s.scaleX = a.scaleX, u = !0), Xe(a.scaleY) && a.scaleY !== s.scaleY && (s.scaleY = a.scaleY, u = !0)), u && this.renderCanvas(!0, !0);
      var g = s.width / s.naturalWidth;
      Xe(a.x) && (c.left = a.x * g + d.left), Xe(a.y) && (c.top = a.y * g + d.top), Xe(a.width) && (c.width = a.width * g), Xe(a.height) && (c.height = a.height * g), this.setCropBoxData(c);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Nt({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Nt({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var a = this.canvasData, o = {};
    return this.ready && Ut(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(s) {
      o[s] = a[s];
    }), o;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(a) {
    var o = this.canvasData, s = o.aspectRatio;
    return this.ready && !this.disabled && As(a) && (Xe(a.left) && (o.left = a.left), Xe(a.top) && (o.top = a.top), Xe(a.width) ? (o.width = a.width, o.height = a.width / s) : Xe(a.height) && (o.height = a.height, o.width = a.height * s), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var a = this.cropBoxData, o;
    return this.ready && this.cropped && (o = {
      left: a.left,
      top: a.top,
      width: a.width,
      height: a.height
    }), o || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(a) {
    var o = this.cropBoxData, s = this.options.aspectRatio, d, c;
    return this.ready && this.cropped && !this.disabled && As(a) && (Xe(a.left) && (o.left = a.left), Xe(a.top) && (o.top = a.top), Xe(a.width) && a.width !== o.width && (d = !0, o.width = a.width), Xe(a.height) && a.height !== o.height && (c = !0, o.height = a.height), s && (d ? o.height = o.width / s : c && (o.width = o.height * s)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var o = this.canvasData, s = qP(this.image, this.imageData, o, a);
    if (!this.cropped)
      return s;
    var d = this.getData(a.rounded), c = d.x, u = d.y, g = d.width, v = d.height, p = s.width / Math.floor(o.naturalWidth);
    p !== 1 && (c *= p, u *= p, g *= p, v *= p);
    var m = g / v, y = Li({
      aspectRatio: m,
      width: a.maxWidth || 1 / 0,
      height: a.maxHeight || 1 / 0
    }), x = Li({
      aspectRatio: m,
      width: a.minWidth || 0,
      height: a.minHeight || 0
    }, "cover"), C = Li({
      aspectRatio: m,
      width: a.width || (p !== 1 ? s.width : g),
      height: a.height || (p !== 1 ? s.height : v)
    }), j = C.width, U = C.height;
    j = Math.min(y.width, Math.max(x.width, j)), U = Math.min(y.height, Math.max(x.height, U));
    var T = document.createElement("canvas"), A = T.getContext("2d");
    T.width = Ps(j), T.height = Ps(U), A.fillStyle = a.fillColor || "transparent", A.fillRect(0, 0, j, U);
    var M = a.imageSmoothingEnabled, V = M === void 0 ? !0 : M, D = a.imageSmoothingQuality;
    A.imageSmoothingEnabled = V, D && (A.imageSmoothingQuality = D);
    var F = s.width, L = s.height, G = c, ce = u, ve, fe, ge, Ve, de, ye;
    G <= -g || G > F ? (G = 0, ve = 0, ge = 0, de = 0) : G <= 0 ? (ge = -G, G = 0, ve = Math.min(F, g + G), de = ve) : G <= F && (ge = 0, ve = Math.min(g, F - G), de = ve), ve <= 0 || ce <= -v || ce > L ? (ce = 0, fe = 0, Ve = 0, ye = 0) : ce <= 0 ? (Ve = -ce, ce = 0, fe = Math.min(L, v + ce), ye = fe) : ce <= L && (Ve = 0, fe = Math.min(v, L - ce), ye = fe);
    var he = [G, ce, ve, fe];
    if (de > 0 && ye > 0) {
      var Pe = j / g;
      he.push(ge * Pe, Ve * Pe, de * Pe, ye * Pe);
    }
    return A.drawImage.apply(A, [s].concat(_1(he.map(function(Ne) {
      return Math.floor(Ps(Ne));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(a) {
    var o = this.options;
    return !this.disabled && !ag(a) && (o.aspectRatio = Math.max(0, a) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(a) {
    var o = this.options, s = this.dragBox, d = this.face;
    if (this.ready && !this.disabled) {
      var c = a === Ag, u = o.movable && a === F1;
      a = c || u ? a : z1, o.dragMode = a, Xu(s, Gu, a), _s(s, vg, c), _s(s, gg, u), o.cropBoxMovable || (Xu(d, Gu, a), _s(d, vg, c), _s(d, gg, u));
    }
    return this;
  }
}, c5 = mr.Cropper, K1 = /* @__PURE__ */ function() {
  function i(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (wP(this, i), !a || !UP.test(a.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = a, this.options = Nt({}, MN, As(o) && o), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return EP(i, [{
    key: "init",
    value: function() {
      var o = this.element, s = o.tagName.toLowerCase(), d;
      if (!o[St]) {
        if (o[St] = this, s === "img") {
          if (this.isImg = !0, d = o.getAttribute("src") || "", this.originalUrl = d, !d)
            return;
          d = o.src;
        } else s === "canvas" && window.HTMLCanvasElement && (d = o.toDataURL());
        this.load(d);
      }
    }
  }, {
    key: "load",
    value: function(o) {
      var s = this;
      if (o) {
        this.url = o, this.imageData = {};
        var d = this.element, c = this.options;
        if (!c.rotatable && !c.scalable && (c.checkOrientation = !1), !c.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (_P.test(o)) {
          PP.test(o) ? this.read(e5(o)) : this.clone();
          return;
        }
        var u = new XMLHttpRequest(), g = this.clone.bind(this);
        this.reloading = !0, this.xhr = u, u.onabort = g, u.onerror = g, u.ontimeout = g, u.onprogress = function() {
          u.getResponseHeader("content-type") !== LN && u.abort();
        }, u.onload = function() {
          s.read(u.response);
        }, u.onloadend = function() {
          s.reloading = !1, s.xhr = null;
        }, c.checkCrossOrigin && _N(o) && d.crossOrigin && (o = PN(o)), u.open("GET", o, !0), u.responseType = "arraybuffer", u.withCredentials = d.crossOrigin === "use-credentials", u.send();
      }
    }
  }, {
    key: "read",
    value: function(o) {
      var s = this.options, d = this.imageData, c = n5(o), u = 0, g = 1, v = 1;
      if (c > 1) {
        this.url = t5(o, LN);
        var p = a5(c);
        u = p.rotate, g = p.scaleX, v = p.scaleY;
      }
      s.rotatable && (d.rotate = u), s.scalable && (d.scaleX = g, d.scaleY = v), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var o = this.element, s = this.url, d = o.crossOrigin, c = s;
      this.options.checkCrossOrigin && _N(s) && (d || (d = "anonymous"), c = PN(s)), this.crossOrigin = d, this.crossOriginUrl = c;
      var u = document.createElement("img");
      d && (u.crossOrigin = d), u.src = c || s, u.alt = o.alt || "The image to crop", this.image = u, u.onload = this.start.bind(this), u.onerror = this.stop.bind(this), rn(u, EN), o.parentNode.insertBefore(u, o.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var o = this, s = this.image;
      s.onload = null, s.onerror = null, this.sizing = !0;
      var d = mr.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(mr.navigator.userAgent), c = function(p, m) {
        Nt(o.imageData, {
          naturalWidth: p,
          naturalHeight: m,
          aspectRatio: p / m
        }), o.initialImageData = Nt({}, o.imageData), o.sizing = !1, o.sized = !0, o.build();
      };
      if (s.naturalWidth && !d) {
        c(s.naturalWidth, s.naturalHeight);
        return;
      }
      var u = document.createElement("img"), g = document.body || document.documentElement;
      this.sizingImage = u, u.onload = function() {
        c(u.width, u.height), d || g.removeChild(u);
      }, u.src = s.src, d || (u.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", g.appendChild(u));
    }
  }, {
    key: "stop",
    value: function() {
      var o = this.image;
      o.onload = null, o.onerror = null, o.parentNode.removeChild(o), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var o = this.element, s = this.options, d = this.image, c = o.parentNode, u = document.createElement("div");
        u.innerHTML = VP;
        var g = u.querySelector(".".concat(St, "-container")), v = g.querySelector(".".concat(St, "-canvas")), p = g.querySelector(".".concat(St, "-drag-box")), m = g.querySelector(".".concat(St, "-crop-box")), y = m.querySelector(".".concat(St, "-face"));
        this.container = c, this.cropper = g, this.canvas = v, this.dragBox = p, this.cropBox = m, this.viewBox = g.querySelector(".".concat(St, "-view-box")), this.face = y, v.appendChild(d), rn(o, Kn), c.insertBefore(g, o.nextSibling), pr(d, EN), this.initPreview(), this.bind(), s.initialAspectRatio = Math.max(0, s.initialAspectRatio) || NaN, s.aspectRatio = Math.max(0, s.aspectRatio) || NaN, s.viewMode = Math.max(0, Math.min(3, Math.round(s.viewMode))) || 0, rn(m, Kn), s.guides || rn(m.getElementsByClassName("".concat(St, "-dashed")), Kn), s.center || rn(m.getElementsByClassName("".concat(St, "-center")), Kn), s.background && rn(g, "".concat(St, "-bg")), s.highlight || rn(y, kP), s.cropBoxMovable && (rn(y, gg), Xu(y, Gu, Mg)), s.cropBoxResizable || (rn(m.getElementsByClassName("".concat(St, "-line")), Kn), rn(m.getElementsByClassName("".concat(St, "-point")), Kn)), this.render(), this.ready = !0, this.setDragMode(s.dragMode), s.autoCrop && this.crop(), this.setData(s.data), Wn(s.ready) && Ra(o, DN, s.ready, {
          once: !0
        }), Us(o, DN);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var o = this.cropper.parentNode;
        o && o.removeChild(this.cropper), pr(this.element, Kn);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = c5, i;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(o) {
      Nt(MN, As(o) && o);
    }
  }]);
}();
Nt(K1.prototype, r5, i5, o5, s5, l5, u5);
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var Co;
((i) => {
  const a = class {
    constructor(v, p, m, y) {
      if (this.version = v, this.errorCorrectionLevel = p, this.modules = [], this.isFunction = [], v < a.MIN_VERSION || v > a.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (y < -1 || y > 7)
        throw new RangeError("Mask value out of range");
      this.size = v * 4 + 17;
      let x = [];
      for (let j = 0; j < this.size; j++)
        x.push(!1);
      for (let j = 0; j < this.size; j++)
        this.modules.push(x.slice()), this.isFunction.push(x.slice());
      this.drawFunctionPatterns();
      const C = this.addEccAndInterleave(m);
      if (this.drawCodewords(C), y == -1) {
        let j = 1e9;
        for (let U = 0; U < 8; U++) {
          this.applyMask(U), this.drawFormatBits(U);
          const T = this.getPenaltyScore();
          T < j && (y = U, j = T), this.applyMask(U);
        }
      }
      c(0 <= y && y <= 7), this.mask = y, this.applyMask(y), this.drawFormatBits(y), this.isFunction = [];
    }
    static encodeText(v, p) {
      const m = i.QrSegment.makeSegments(v);
      return a.encodeSegments(m, p);
    }
    static encodeBinary(v, p) {
      const m = i.QrSegment.makeBytes(v);
      return a.encodeSegments([m], p);
    }
    static encodeSegments(v, p, m = 1, y = 40, x = -1, C = !0) {
      if (!(a.MIN_VERSION <= m && m <= y && y <= a.MAX_VERSION) || x < -1 || x > 7)
        throw new RangeError("Invalid value");
      let j, U;
      for (j = m; ; j++) {
        const V = a.getNumDataCodewords(j, p) * 8, D = g.getTotalBits(v, j);
        if (D <= V) {
          U = D;
          break;
        }
        if (j >= y)
          throw new RangeError("Data too long");
      }
      for (const V of [a.Ecc.MEDIUM, a.Ecc.QUARTILE, a.Ecc.HIGH])
        C && U <= a.getNumDataCodewords(j, V) * 8 && (p = V);
      let T = [];
      for (const V of v) {
        s(V.mode.modeBits, 4, T), s(V.numChars, V.mode.numCharCountBits(j), T);
        for (const D of V.getData())
          T.push(D);
      }
      c(T.length == U);
      const A = a.getNumDataCodewords(j, p) * 8;
      c(T.length <= A), s(0, Math.min(4, A - T.length), T), s(0, (8 - T.length % 8) % 8, T), c(T.length % 8 == 0);
      for (let V = 236; T.length < A; V ^= 253)
        s(V, 8, T);
      let M = [];
      for (; M.length * 8 < T.length; )
        M.push(0);
      return T.forEach((V, D) => M[D >>> 3] |= V << 7 - (D & 7)), new a(j, p, M, x);
    }
    getModule(v, p) {
      return 0 <= v && v < this.size && 0 <= p && p < this.size && this.modules[p][v];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let m = 0; m < this.size; m++)
        this.setFunctionModule(6, m, m % 2 == 0), this.setFunctionModule(m, 6, m % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const v = this.getAlignmentPatternPositions(), p = v.length;
      for (let m = 0; m < p; m++)
        for (let y = 0; y < p; y++)
          m == 0 && y == 0 || m == 0 && y == p - 1 || m == p - 1 && y == 0 || this.drawAlignmentPattern(v[m], v[y]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(v) {
      const p = this.errorCorrectionLevel.formatBits << 3 | v;
      let m = p;
      for (let x = 0; x < 10; x++)
        m = m << 1 ^ (m >>> 9) * 1335;
      const y = (p << 10 | m) ^ 21522;
      c(y >>> 15 == 0);
      for (let x = 0; x <= 5; x++)
        this.setFunctionModule(8, x, d(y, x));
      this.setFunctionModule(8, 7, d(y, 6)), this.setFunctionModule(8, 8, d(y, 7)), this.setFunctionModule(7, 8, d(y, 8));
      for (let x = 9; x < 15; x++)
        this.setFunctionModule(14 - x, 8, d(y, x));
      for (let x = 0; x < 8; x++)
        this.setFunctionModule(this.size - 1 - x, 8, d(y, x));
      for (let x = 8; x < 15; x++)
        this.setFunctionModule(8, this.size - 15 + x, d(y, x));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let v = this.version;
      for (let m = 0; m < 12; m++)
        v = v << 1 ^ (v >>> 11) * 7973;
      const p = this.version << 12 | v;
      c(p >>> 18 == 0);
      for (let m = 0; m < 18; m++) {
        const y = d(p, m), x = this.size - 11 + m % 3, C = Math.floor(m / 3);
        this.setFunctionModule(x, C, y), this.setFunctionModule(C, x, y);
      }
    }
    drawFinderPattern(v, p) {
      for (let m = -4; m <= 4; m++)
        for (let y = -4; y <= 4; y++) {
          const x = Math.max(Math.abs(y), Math.abs(m)), C = v + y, j = p + m;
          0 <= C && C < this.size && 0 <= j && j < this.size && this.setFunctionModule(C, j, x != 2 && x != 4);
        }
    }
    drawAlignmentPattern(v, p) {
      for (let m = -2; m <= 2; m++)
        for (let y = -2; y <= 2; y++)
          this.setFunctionModule(v + y, p + m, Math.max(Math.abs(y), Math.abs(m)) != 1);
    }
    setFunctionModule(v, p, m) {
      this.modules[p][v] = m, this.isFunction[p][v] = !0;
    }
    addEccAndInterleave(v) {
      const p = this.version, m = this.errorCorrectionLevel;
      if (v.length != a.getNumDataCodewords(p, m))
        throw new RangeError("Invalid argument");
      const y = a.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][p], x = a.ECC_CODEWORDS_PER_BLOCK[m.ordinal][p], C = Math.floor(a.getNumRawDataModules(p) / 8), j = y - C % y, U = Math.floor(C / y);
      let T = [];
      const A = a.reedSolomonComputeDivisor(x);
      for (let V = 0, D = 0; V < y; V++) {
        let F = v.slice(D, D + U - x + (V < j ? 0 : 1));
        D += F.length;
        const L = a.reedSolomonComputeRemainder(F, A);
        V < j && F.push(0), T.push(F.concat(L));
      }
      let M = [];
      for (let V = 0; V < T[0].length; V++)
        T.forEach((D, F) => {
          (V != U - x || F >= j) && M.push(D[V]);
        });
      return c(M.length == C), M;
    }
    drawCodewords(v) {
      if (v.length != Math.floor(a.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let p = 0;
      for (let m = this.size - 1; m >= 1; m -= 2) {
        m == 6 && (m = 5);
        for (let y = 0; y < this.size; y++)
          for (let x = 0; x < 2; x++) {
            const C = m - x, U = (m + 1 & 2) == 0 ? this.size - 1 - y : y;
            !this.isFunction[U][C] && p < v.length * 8 && (this.modules[U][C] = d(v[p >>> 3], 7 - (p & 7)), p++);
          }
      }
      c(p == v.length * 8);
    }
    applyMask(v) {
      if (v < 0 || v > 7)
        throw new RangeError("Mask value out of range");
      for (let p = 0; p < this.size; p++)
        for (let m = 0; m < this.size; m++) {
          let y;
          switch (v) {
            case 0:
              y = (m + p) % 2 == 0;
              break;
            case 1:
              y = p % 2 == 0;
              break;
            case 2:
              y = m % 3 == 0;
              break;
            case 3:
              y = (m + p) % 3 == 0;
              break;
            case 4:
              y = (Math.floor(m / 3) + Math.floor(p / 2)) % 2 == 0;
              break;
            case 5:
              y = m * p % 2 + m * p % 3 == 0;
              break;
            case 6:
              y = (m * p % 2 + m * p % 3) % 2 == 0;
              break;
            case 7:
              y = ((m + p) % 2 + m * p % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[p][m] && y && (this.modules[p][m] = !this.modules[p][m]);
        }
    }
    getPenaltyScore() {
      let v = 0;
      for (let x = 0; x < this.size; x++) {
        let C = !1, j = 0, U = [0, 0, 0, 0, 0, 0, 0];
        for (let T = 0; T < this.size; T++)
          this.modules[x][T] == C ? (j++, j == 5 ? v += a.PENALTY_N1 : j > 5 && v++) : (this.finderPenaltyAddHistory(j, U), C || (v += this.finderPenaltyCountPatterns(U) * a.PENALTY_N3), C = this.modules[x][T], j = 1);
        v += this.finderPenaltyTerminateAndCount(C, j, U) * a.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let C = !1, j = 0, U = [0, 0, 0, 0, 0, 0, 0];
        for (let T = 0; T < this.size; T++)
          this.modules[T][x] == C ? (j++, j == 5 ? v += a.PENALTY_N1 : j > 5 && v++) : (this.finderPenaltyAddHistory(j, U), C || (v += this.finderPenaltyCountPatterns(U) * a.PENALTY_N3), C = this.modules[T][x], j = 1);
        v += this.finderPenaltyTerminateAndCount(C, j, U) * a.PENALTY_N3;
      }
      for (let x = 0; x < this.size - 1; x++)
        for (let C = 0; C < this.size - 1; C++) {
          const j = this.modules[x][C];
          j == this.modules[x][C + 1] && j == this.modules[x + 1][C] && j == this.modules[x + 1][C + 1] && (v += a.PENALTY_N2);
        }
      let p = 0;
      for (const x of this.modules)
        p = x.reduce((C, j) => C + (j ? 1 : 0), p);
      const m = this.size * this.size, y = Math.ceil(Math.abs(p * 20 - m * 10) / m) - 1;
      return c(0 <= y && y <= 9), v += y * a.PENALTY_N4, c(0 <= v && v <= 2568888), v;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const v = Math.floor(this.version / 7) + 2, p = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (v * 2 - 2)) * 2;
        let m = [6];
        for (let y = this.size - 7; m.length < v; y -= p)
          m.splice(1, 0, y);
        return m;
      }
    }
    static getNumRawDataModules(v) {
      if (v < a.MIN_VERSION || v > a.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let p = (16 * v + 128) * v + 64;
      if (v >= 2) {
        const m = Math.floor(v / 7) + 2;
        p -= (25 * m - 10) * m - 55, v >= 7 && (p -= 36);
      }
      return c(208 <= p && p <= 29648), p;
    }
    static getNumDataCodewords(v, p) {
      return Math.floor(a.getNumRawDataModules(v) / 8) - a.ECC_CODEWORDS_PER_BLOCK[p.ordinal][v] * a.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][v];
    }
    static reedSolomonComputeDivisor(v) {
      if (v < 1 || v > 255)
        throw new RangeError("Degree out of range");
      let p = [];
      for (let y = 0; y < v - 1; y++)
        p.push(0);
      p.push(1);
      let m = 1;
      for (let y = 0; y < v; y++) {
        for (let x = 0; x < p.length; x++)
          p[x] = a.reedSolomonMultiply(p[x], m), x + 1 < p.length && (p[x] ^= p[x + 1]);
        m = a.reedSolomonMultiply(m, 2);
      }
      return p;
    }
    static reedSolomonComputeRemainder(v, p) {
      let m = p.map((y) => 0);
      for (const y of v) {
        const x = y ^ m.shift();
        m.push(0), p.forEach((C, j) => m[j] ^= a.reedSolomonMultiply(C, x));
      }
      return m;
    }
    static reedSolomonMultiply(v, p) {
      if (v >>> 8 || p >>> 8)
        throw new RangeError("Byte out of range");
      let m = 0;
      for (let y = 7; y >= 0; y--)
        m = m << 1 ^ (m >>> 7) * 285, m ^= (p >>> y & 1) * v;
      return c(m >>> 8 == 0), m;
    }
    finderPenaltyCountPatterns(v) {
      const p = v[1];
      c(p <= this.size * 3);
      const m = p > 0 && v[2] == p && v[3] == p * 3 && v[4] == p && v[5] == p;
      return (m && v[0] >= p * 4 && v[6] >= p ? 1 : 0) + (m && v[6] >= p * 4 && v[0] >= p ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(v, p, m) {
      return v && (this.finderPenaltyAddHistory(p, m), p = 0), p += this.size, this.finderPenaltyAddHistory(p, m), this.finderPenaltyCountPatterns(m);
    }
    finderPenaltyAddHistory(v, p) {
      p[0] == 0 && (v += this.size), p.pop(), p.unshift(v);
    }
  };
  let o = a;
  o.MIN_VERSION = 1, o.MAX_VERSION = 40, o.PENALTY_N1 = 3, o.PENALTY_N2 = 3, o.PENALTY_N3 = 40, o.PENALTY_N4 = 10, o.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], o.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], i.QrCode = o;
  function s(v, p, m) {
    if (p < 0 || p > 31 || v >>> p)
      throw new RangeError("Value out of range");
    for (let y = p - 1; y >= 0; y--)
      m.push(v >>> y & 1);
  }
  function d(v, p) {
    return (v >>> p & 1) != 0;
  }
  function c(v) {
    if (!v)
      throw new Error("Assertion error");
  }
  const u = class {
    constructor(v, p, m) {
      if (this.mode = v, this.numChars = p, this.bitData = m, p < 0)
        throw new RangeError("Invalid argument");
      this.bitData = m.slice();
    }
    static makeBytes(v) {
      let p = [];
      for (const m of v)
        s(m, 8, p);
      return new u(u.Mode.BYTE, v.length, p);
    }
    static makeNumeric(v) {
      if (!u.isNumeric(v))
        throw new RangeError("String contains non-numeric characters");
      let p = [];
      for (let m = 0; m < v.length; ) {
        const y = Math.min(v.length - m, 3);
        s(parseInt(v.substr(m, y), 10), y * 3 + 1, p), m += y;
      }
      return new u(u.Mode.NUMERIC, v.length, p);
    }
    static makeAlphanumeric(v) {
      if (!u.isAlphanumeric(v))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let p = [], m;
      for (m = 0; m + 2 <= v.length; m += 2) {
        let y = u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(m)) * 45;
        y += u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(m + 1)), s(y, 11, p);
      }
      return m < v.length && s(u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(m)), 6, p), new u(u.Mode.ALPHANUMERIC, v.length, p);
    }
    static makeSegments(v) {
      return v == "" ? [] : u.isNumeric(v) ? [u.makeNumeric(v)] : u.isAlphanumeric(v) ? [u.makeAlphanumeric(v)] : [u.makeBytes(u.toUtf8ByteArray(v))];
    }
    static makeEci(v) {
      let p = [];
      if (v < 0)
        throw new RangeError("ECI assignment value out of range");
      if (v < 128)
        s(v, 8, p);
      else if (v < 16384)
        s(2, 2, p), s(v, 14, p);
      else if (v < 1e6)
        s(6, 3, p), s(v, 21, p);
      else
        throw new RangeError("ECI assignment value out of range");
      return new u(u.Mode.ECI, 0, p);
    }
    static isNumeric(v) {
      return u.NUMERIC_REGEX.test(v);
    }
    static isAlphanumeric(v) {
      return u.ALPHANUMERIC_REGEX.test(v);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(v, p) {
      let m = 0;
      for (const y of v) {
        const x = y.mode.numCharCountBits(p);
        if (y.numChars >= 1 << x)
          return 1 / 0;
        m += 4 + x + y.bitData.length;
      }
      return m;
    }
    static toUtf8ByteArray(v) {
      v = encodeURI(v);
      let p = [];
      for (let m = 0; m < v.length; m++)
        v.charAt(m) != "%" ? p.push(v.charCodeAt(m)) : (p.push(parseInt(v.substr(m + 1, 2), 16)), m += 2);
      return p;
    }
  };
  let g = u;
  g.NUMERIC_REGEX = /^[0-9]*$/, g.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, g.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", i.QrSegment = g;
})(Co || (Co = {}));
((i) => {
  ((a) => {
    const o = class {
      constructor(d, c) {
        this.ordinal = d, this.formatBits = c;
      }
    };
    let s = o;
    s.LOW = new o(0, 1), s.MEDIUM = new o(1, 0), s.QUARTILE = new o(2, 3), s.HIGH = new o(3, 2), a.Ecc = s;
  })(i.QrCode || (i.QrCode = {}));
})(Co || (Co = {}));
((i) => {
  ((a) => {
    const o = class {
      constructor(d, c) {
        this.modeBits = d, this.numBitsCharCount = c;
      }
      numCharCountBits(d) {
        return this.numBitsCharCount[Math.floor((d + 7) / 17)];
      }
    };
    let s = o;
    s.NUMERIC = new o(1, [10, 12, 14]), s.ALPHANUMERIC = new o(2, [9, 11, 13]), s.BYTE = new o(4, [8, 16, 16]), s.KANJI = new o(8, [8, 10, 12]), s.ECI = new o(7, [0, 0, 0]), a.Mode = s;
  })(i.QrSegment || (i.QrSegment = {}));
})(Co || (Co = {}));
var wd = Co;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
wd.QrCode.Ecc.LOW, wd.QrCode.Ecc.MEDIUM, wd.QrCode.Ecc.QUARTILE, wd.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function f5() {
  z.useState(!1);
  const [i, a] = z.useState(!1), o = qu(), s = Pi((T) => T.user), { t: d } = Ui();
  let c = null, u = null, g = null;
  const v = async function(T) {
    T.preventDefault();
    const A = T.target.screenName.value;
    let M;
    g ? M = g : M = T.target.avatar.files[0];
    let V = s.avatar;
    M && (V = await x(M)), a(!0);
    try {
      await o.user.updateProfile({ display_name: A, avatar: V });
    } catch (D) {
      alert(D);
    } finally {
      a(!1), location.reload();
    }
  }, p = (T) => {
    T.preventDefault();
    const A = document.getElementById("canvas-container");
    let M = document.getElementById("canvas");
    const V = document.getElementById("images");
    if (c && (c.destroy(), c = null), T.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", V.removeAttribute("src"), A.setAttribute("style", "display: none;");
      return;
    }
    const D = T.target.files[0].size;
    if (parseInt(D) > 31 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    V.src = URL.createObjectURL(T.target.files[0]), u = URL.createObjectURL(T.target.files[0]);
    const F = M.getContext("2d"), L = new Image();
    L.src = URL.createObjectURL(T.target.files[0]), L.onload = function() {
      M.width = V.offsetWidth, M.height = V.offsetHeight, F.drawImage(
        L,
        0,
        0,
        V.naturalWidth,
        V.naturalHeight,
        0,
        0,
        V.offsetWidth,
        V.offsetHeight
      ), c = new K1(M);
    }, A.setAttribute("style", "display: grid; grid-template-rows: auto auto; gap: 10px;");
  }, m = (T) => {
    T.preventDefault();
    const A = c.getCroppedCanvas().toDataURL("image/png"), M = document.getElementById("images");
    M.src = A, g = c.getCroppedCanvas().toDataURL().replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
  }, y = (T) => {
    T.preventDefault(), c.reset();
    const A = document.getElementById("images");
    A.src = u;
  }, x = async function(T) {
    try {
      let A = new FormData();
      return A.append("image", T), A.append("key", "d8dc5b96ed210c8360b48acb0fa5ee32"), (await (await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        // headers: {
        // 	'Content-Type': 'multipart/form-data',
        // },
        body: A
      })).json()).data.url;
    } catch (A) {
      throw console.error(A), A;
    }
  };
  let C = window.serverURL;
  if (!C) {
    const T = location.pathname.match(/(.*?\/)ui/);
    C = T ? T[1] : "/";
  }
  const j = new URLSearchParams(location.search);
  let U = window.TOKEN || sessionStorage.getItem("TOKEN") || j.get("token");
  return U || (U = localStorage.getItem("TOKEN")), /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ w.jsxDEV("div", { className: "main", children: /* @__PURE__ */ w.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ w.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ w.jsxDEV("h2", { children: d("setting") }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 205,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 204,
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
                  src: s.avatar || `https://seccdn.libravatar.org/avatar/${s.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 213,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
              lineNumber: 210,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("h2", { children: s.display_name }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ w.jsxDEV("p", { children: s.email }, void 0, !1, {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
          lineNumber: 208,
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
                  lineNumber: 231,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ w.jsxDEV("form", { method: "post", onSubmit: v, children: [
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
                    /* @__PURE__ */ w.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: d("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 235,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ w.jsxDEV(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: s.display_name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 238,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ w.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 245,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 234,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 233,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ w.jsxDEV("li", { children: [
                    /* @__PURE__ */ w.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-3", children: d("change avatar") }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 253,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ w.jsxDEV(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: p,
                        accept: "image/*"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                        lineNumber: 256,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ w.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 264,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 252,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 251,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("div", { id: "canvas-container", style: { display: "none" }, children: [
                    /* @__PURE__ */ w.jsxDEV("canvas", { id: "canvas", style: { maxWidth: "220px", height: "220px" }, children: "Your browser does not support the HTML5 canvas element." }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 270,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ w.jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "auto auto", gap: "10px" }, children: [
                      /* @__PURE__ */ w.jsxDEV(
                        "button",
                        {
                          onClick: m,
                          type: "button",
                          className: "btn primary",
                          children: "Crop"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 275,
                          columnNumber: 12
                        },
                        this
                      ),
                      /* @__PURE__ */ w.jsxDEV(
                        "button",
                        {
                          onClick: y,
                          type: "button",
                          className: "btn",
                          children: "Reset"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                          lineNumber: 282,
                          columnNumber: 12
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 274,
                      columnNumber: 11
                    }, this),
                    /* @__PURE__ */ w.jsxDEV("img", { id: "images", style: { maxwidth: "220px", height: "220px" } }, void 0, !1, {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 290,
                      columnNumber: 11
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 268,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ w.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ w.jsxDEV("li", { children: /* @__PURE__ */ w.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: i,
                      children: d("update my profile")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                      lineNumber: 295,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 294,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                    lineNumber: 293,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                  lineNumber: 232,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 230,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 306,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ w.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
                lineNumber: 309,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
            lineNumber: 226,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
        lineNumber: 207,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/profile/index.jsx",
    lineNumber: 200,
    columnNumber: 5
  }, this);
}
function d5() {
  const { t: i } = Ui(), a = qu(), o = tc(), s = Pi((m) => m.user), [d, c] = z.useState(!1), [u, g] = z.useState(!1), v = E1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  z.useEffect(() => {
    s && s.email && o("/ui", { replace: !0 });
  }, [o]);
  const p = async function(m) {
    m.preventDefault(), c(!1);
    const y = m.target.nick.value;
    if (!y || y.length < 2)
      return c(i("nickname illegal"));
    const x = m.target.email.value;
    if (!x)
      return c(i("please input email"));
    const C = m.target.link.value, j = m.target.password.value, U = m.target["password-again"].value;
    if (!j || !U || U !== j)
      return c(i("passwords don't match"));
    try {
      g(!0);
      const T = await v("login"), A = await a.user.register({
        display_name: y,
        email: x,
        url: C,
        password: j,
        recaptchaV3: window.recaptchaV3Key ? T : void 0,
        turnstile: window.turnstileKey ? T : void 0
      });
      A && A.verify && alert(i("register success! please go to your mailbox to verify it!")), o("/ui/login");
    } catch (T) {
      c(T.message);
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "nick", className: "sr-only", children: i("nickname") }, void 0, !1, {
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
              placeholder: i("nickname"),
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: i("email") }, void 0, !1, {
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
              placeholder: i("email"),
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "link", className: "sr-only", children: i("website") }, void 0, !1, {
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
              placeholder: i("website"),
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: i("password") }, void 0, !1, {
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
              placeholder: i("password")
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
          /* @__PURE__ */ w.jsxDEV("label", { htmlFor: "password-again", className: "sr-only", children: i("password again") }, void 0, !1, {
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
              placeholder: i("password again")
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
            disabled: u,
            className: "btn btn-l w-100 primary",
            children: i("register")
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
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui", children: i("back to home") }, void 0, !1, {
          fileName: "C:/Projek/NodeJS/waline-admin/src/pages/register/index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ w.jsxDEV(Gn, { to: "/ui/login", children: i("register.login") }, void 0, !1, {
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
function p5() {
  const i = Pi((u) => u.user), { t: a } = Ui(), [o, s] = z.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  z.useEffect(() => {
    sP({ page: o.page }).then((u) => {
      console.log(u), s({ ...o, ...u });
    });
  }, [o.page]);
  const d = (u) => [
    {
      key: "administrator",
      name: a("set administrator"),
      show: u.type === "guest",
      async action(g) {
        g.preventDefault(), await ng({
          id: u.objectId,
          type: "administrator"
        }), u.type = "administrator", s({ ...o });
      }
    },
    {
      key: "guest",
      name: a("set guest"),
      show: u.type === "administrator",
      async action(g) {
        if (g.preventDefault(), u.objectId === i.objectId)
          return alert(a("You can't set yourself to be guest!"));
        await ng({
          id: u.objectId,
          type: "guest"
        }), u.type = "guest", s({ ...o });
      }
    },
    {
      key: "label",
      name: a("set label"),
      show: !0,
      async action(g) {
        g.preventDefault();
        const v = prompt(a("please enter an exclusive label"));
        await ng({
          id: u.objectId,
          label: v
        }), u.label = v, s({ ...o });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: g }) => g), c = (u) => /^verify/.test(u) ? a("verify") : a(u);
  return /* @__PURE__ */ w.jsxDEV(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxDEV(jo, {}, void 0, !1, {
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
              /* @__PURE__ */ w.jsxDEV("tbody", { children: o.data.map((u) => /* @__PURE__ */ w.jsxDEV("tr", { id: `user-${u.objectId}`, children: [
                /* @__PURE__ */ w.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ w.jsxDEV("div", { className: "user-avatar", children: /* @__PURE__ */ w.jsxDEV(
                  "img",
                  {
                    className: "avatar",
                    src: O1(u.email, u.avatar),
                    alt: u.display_name,
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
                    href: /^https:\/\//.test(u.url) ? u.url : "https://" + u.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: u.display_name
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
                    href: `mailto:${u.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: u.email
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
                /* @__PURE__ */ w.jsxDEV("td", { children: c(u.type) }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 167,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { children: u.label }, void 0, !1, {
                  fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                  lineNumber: 168,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ w.jsxDEV("td", { className: "comment-action", children: d(u).map(
                  ({ key: g, disable: v, name: p, action: m }) => v ? /* @__PURE__ */ w.jsxDEV("span", { className: "weak", children: p }, g, !1, {
                    fileName: "C:/Projek/NodeJS/waline-admin/src/pages/user/index.jsx",
                    lineNumber: 173,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ w.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${g}`,
                      onClick: m,
                      children: p
                    },
                    g,
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
              ] }, u.objectId, !0, {
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
          L1,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (u) => s({ ...o, page: u })
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
var h5 = typeof Symbol == "function" && Symbol.observable || "@@observable", UN = h5, ig = () => Math.random().toString(36).substring(7).split("").join("."), m5 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ig()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ig()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ig()}`
}, Mi = m5;
function Id(i) {
  if (typeof i != "object" || i === null)
    return !1;
  let a = i;
  for (; Object.getPrototypeOf(a) !== null; )
    a = Object.getPrototypeOf(a);
  return Object.getPrototypeOf(i) === a || Object.getPrototypeOf(i) === null;
}
function v5(i) {
  if (i === void 0)
    return "undefined";
  if (i === null)
    return "null";
  const a = typeof i;
  switch (a) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return a;
  }
  if (Array.isArray(i))
    return "array";
  if (b5(i))
    return "date";
  if (y5(i))
    return "error";
  const o = g5(i);
  switch (o) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return o;
  }
  return Object.prototype.toString.call(i).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function g5(i) {
  return typeof i.constructor == "function" ? i.constructor.name : null;
}
function y5(i) {
  return i instanceof Error || typeof i.message == "string" && i.constructor && typeof i.constructor.stackTraceLimit == "number";
}
function b5(i) {
  return i instanceof Date ? !0 : typeof i.toDateString == "function" && typeof i.getDate == "function" && typeof i.setDate == "function";
}
function Jr(i) {
  let a = typeof i;
  return a = v5(i), a;
}
function Jd(i, a, o) {
  if (typeof i != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${Jr(i)}'`);
  if (typeof a == "function" && typeof o == "function" || typeof o == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof a == "function" && typeof o > "u" && (o = a, a = void 0), typeof o < "u") {
    if (typeof o != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${Jr(o)}'`);
    return o(Jd)(i, a);
  }
  let s = i, d = a, c = /* @__PURE__ */ new Map(), u = c, g = 0, v = !1;
  function p() {
    u === c && (u = /* @__PURE__ */ new Map(), c.forEach((T, A) => {
      u.set(A, T);
    }));
  }
  function m() {
    if (v)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function y(T) {
    if (typeof T != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${Jr(T)}'`);
    if (v)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let A = !0;
    p();
    const M = g++;
    return u.set(M, T), function() {
      if (A) {
        if (v)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        A = !1, p(), u.delete(M), c = null;
      }
    };
  }
  function x(T) {
    if (!Id(T))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${Jr(T)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof T.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof T.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${Jr(T.type)}'. Value was: '${T.type}' (stringified)`);
    if (v)
      throw new Error("Reducers may not dispatch actions.");
    try {
      v = !0, d = s(d, T);
    } finally {
      v = !1;
    }
    return (c = u).forEach((M) => {
      M();
    }), T;
  }
  function C(T) {
    if (typeof T != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${Jr(T)}`);
    s = T, x({
      type: Mi.REPLACE
    });
  }
  function j() {
    const T = y;
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
          throw new Error(`Expected the observer to be an object. Instead, received: '${Jr(A)}'`);
        function M() {
          const D = A;
          D.next && D.next(m());
        }
        return M(), {
          unsubscribe: T(M)
        };
      },
      [UN]() {
        return this;
      }
    };
  }
  return x({
    type: Mi.INIT
  }), {
    dispatch: x,
    subscribe: y,
    getState: m,
    replaceReducer: C,
    [UN]: j
  };
}
function x5(i, a, o) {
  return Jd(i, a, o);
}
function VN(i) {
  typeof console < "u" && typeof console.error == "function" && console.error(i);
  try {
    throw new Error(i);
  } catch {
  }
}
function S5(i, a, o, s) {
  const d = Object.keys(a), c = o && o.type === Mi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Id(i))
    return `The ${c} has unexpected type of "${Jr(i)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const u = Object.keys(i).filter((g) => !a.hasOwnProperty(g) && !s[g]);
  if (u.forEach((g) => {
    s[g] = !0;
  }), !(o && o.type === Mi.REPLACE) && u.length > 0)
    return `Unexpected ${u.length > 1 ? "keys" : "key"} "${u.join('", "')}" found in ${c}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function N5(i) {
  Object.keys(i).forEach((a) => {
    const o = i[a];
    if (typeof o(void 0, {
      type: Mi.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof o(void 0, {
      type: Mi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${a}" returned undefined when probed with a random type. Don't try to handle '${Mi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function G1(i) {
  const a = Object.keys(i), o = {};
  for (let u = 0; u < a.length; u++) {
    const g = a[u];
    typeof i[g] > "u" && VN(`No reducer provided for key "${g}"`), typeof i[g] == "function" && (o[g] = i[g]);
  }
  const s = Object.keys(o);
  let d;
  d = {};
  let c;
  try {
    N5(o);
  } catch (u) {
    c = u;
  }
  return function(g = {}, v) {
    if (c)
      throw c;
    {
      const y = S5(g, o, v, d);
      y && VN(y);
    }
    let p = !1;
    const m = {};
    for (let y = 0; y < s.length; y++) {
      const x = s[y], C = o[x], j = g[x], U = C(j, v);
      if (typeof U > "u") {
        const T = v && v.type;
        throw new Error(`When called with an action of type ${T ? `"${String(T)}"` : "(unknown type)"}, the slice reducer for key "${x}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      m[x] = U, p = p || U !== j;
    }
    return p = p || s.length !== Object.keys(g).length, p ? m : g;
  };
}
function FN(i, a) {
  return function(...o) {
    return a(i.apply(this, o));
  };
}
function w5(i, a) {
  if (typeof i == "function")
    return FN(i, a);
  if (typeof i != "object" || i === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${Jr(i)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const o = {};
  for (const s in i) {
    const d = i[s];
    typeof d == "function" && (o[s] = FN(d, a));
  }
  return o;
}
function Pg(...i) {
  return i.length === 0 ? (a) => a : i.length === 1 ? i[0] : i.reduce((a, o) => (...s) => a(o(...s)));
}
function X1(...i) {
  return (a) => (o, s) => {
    const d = a(o, s);
    let c = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const u = {
      getState: d.getState,
      dispatch: (v, ...p) => c(v, ...p)
    }, g = i.map((v) => v(u));
    return c = Pg(...g)(d.dispatch), {
      ...d,
      dispatch: c
    };
  };
}
function E5(i) {
  return Id(i) && "type" in i && typeof i.type == "string";
}
const C5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Mi,
  applyMiddleware: X1,
  bindActionCreators: w5,
  combineReducers: G1,
  compose: Pg,
  createStore: Jd,
  isAction: E5,
  isPlainObject: Id,
  legacy_createStore: x5
}, Symbol.toStringTag, { value: "Module" }));
function Ro() {
  return Ro = Object.assign || function(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    }
    return i;
  }, Ro.apply(this, arguments);
}
function R5(i) {
  var a;
  i.models.forEach(function(v) {
    return q1(i, v);
  });
  var o = Q1(i), s = X1.apply(C5, i.reduxConfig.middlewares), d = i.reduxConfig.devtoolComposer ? (a = i.reduxConfig).devtoolComposer.apply(a, i.reduxConfig.enhancers.concat([s])) : T5(i.reduxConfig.devtoolOptions).apply(void 0, i.reduxConfig.enhancers.concat([s])), c = i.reduxConfig.createStore || Jd, u = i.reduxConfig.initialState, g = u === void 0 ? {} : u;
  return c(o, g, d);
}
function q1(i, a) {
  var o = {}, s = Object.keys(a.reducers);
  s.forEach(function(g) {
    var v = D5(g) ? g : a.name + "/" + g;
    o[v] = a.reducers[g];
  });
  var d = function(v, p) {
    return v === void 0 && (v = a.state), p.type in o ? o[p.type](v, p.payload, p.meta) : v;
  }, c = a.baseReducer, u = c ? function(g, v) {
    return g === void 0 && (g = a.state), d(c(g, v), v);
  } : d;
  i.forEachPlugin("onReducer", function(g) {
    u = g(u, a.name, i) || u;
  }), i.reduxConfig.reducers[a.name] = u;
}
function Q1(i) {
  var a = i.reduxConfig.rootReducers, o = j5(i.reduxConfig), s = o;
  return a && Object.keys(a).length && (s = function(c, u) {
    var g = a[u.type];
    return o(g ? g(c, u) : c, u);
  }), i.forEachPlugin("onRootReducer", function(d) {
    s = d(s, i) || s;
  }), s;
}
function j5(i) {
  var a = i.combineReducers || G1;
  return Object.keys(i.reducers).length ? a(i.reducers) : function(o) {
    return o;
  };
}
function T5(i) {
  return i === void 0 && (i = {}), !i.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(i) : Pg;
}
function D5(i) {
  return i.indexOf("/") > -1;
}
var zN = function(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}, Di = function(a) {
  return !a || typeof a == "function";
}, ac = function(a) {
  {
    var o = a(), s = [];
    if (o.forEach(function(d) {
      var c = d[0], u = d[1];
      c && s.push(u);
    }), s.length > 0)
      throw new Error(s.join(", "));
  }
}, k5 = function(a) {
  ac(function() {
    return [[!Array.isArray(a.plugins), "init config.plugins must be an array"], [!zN(a.models), "init config.models must be an object"], [!zN(a.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(a.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(a.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!Di(a.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!Di(a.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, Z1 = function(a) {
  ac(function() {
    return [[!a, "model config is required"], [typeof a.name != "string", 'model "name" [string] is required'], [a.state === void 0 && a.baseReducer === void 0, 'model "state" is required'], [!Di(a.baseReducer), 'model "baseReducer" must be a function']];
  });
}, O5 = function(a) {
  ac(function() {
    return [[!Di(a.onStoreCreated), "Plugin onStoreCreated must be a function"], [!Di(a.onModel), "Plugin onModel must be a function"], [!Di(a.onReducer), "Plugin onReducer must be a function"], [!Di(a.onRootReducer), "Plugin onRootReducer must be a function"], [!Di(a.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, L5 = function(a, o, s) {
  ac(function() {
    return [[!!s.match(/\/.+\//), "Invalid reducer name (" + a + "/" + s + ")"], [typeof o[s] != "function", "Invalid reducer (" + a + "/" + s + "). Must be a function"]];
  });
}, M5 = function(a, o, s) {
  ac(function() {
    return [[!!s.match(/\//), "Invalid effect name (" + a + "/" + s + ")"], [typeof o[s] != "function", "Invalid effect (" + a + "/" + s + "). Must be a function"]];
  });
}, ew = function(a, o, s, d) {
  return Object.assign(function(c, u) {
    var g = {
      type: o + "/" + s
    };
    return typeof c < "u" && (g.payload = c), typeof u < "u" && (g.meta = u), a.dispatch(g);
  }, {
    isEffect: d
  });
}, A5 = function(a, o) {
  var s = a.dispatch[o.name], d = Object.keys(o.reducers);
  d.forEach(function(c) {
    L5(o.name, o.reducers, c), s[c] = ew(a, o.name, c, !1);
  });
}, _5 = function(a, o, s) {
  var d = a.dispatch[s.name], c = {};
  s.effects && (c = typeof s.effects == "function" ? s.effects(a.dispatch) : s.effects);
  var u = Object.keys(c);
  u.forEach(function(g) {
    M5(s.name, c, g), o.effects[s.name + "/" + g] = c[g].bind(d), d[g] = ew(a, s.name, g, !0);
  });
};
function P5(i) {
  return {
    models: U5(i.models),
    reduxConfig: i.redux,
    forEachPlugin: function(o, s) {
      i.plugins.forEach(function(d) {
        d[o] && s(d[o]);
      });
    },
    effects: {}
  };
}
function U5(i) {
  return Object.keys(i).map(function(a) {
    var o = V5(a, i[a]);
    return Z1(o), o;
  });
}
function V5(i, a) {
  return Ro({
    name: i,
    reducers: {}
  }, a);
}
function F5(i) {
  var a = P5(i);
  a.reduxConfig.middlewares.push(z5(a)), a.forEachPlugin("createMiddleware", function(d) {
    a.reduxConfig.middlewares.push(d(a));
  });
  var o = R5(a), s = Ro({}, o, {
    name: i.name,
    addModel: function(c) {
      Z1(c), q1(a, c), $N(s, c), HN(s, a, c), o.replaceReducer(Q1(a)), o.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return $5(s, i.plugins), a.models.forEach(function(d) {
    return $N(s, d);
  }), a.models.forEach(function(d) {
    return HN(s, a, d);
  }), a.forEachPlugin("onStoreCreated", function(d) {
    s = d(s, a) || s;
  }), s;
}
function z5(i) {
  return function(a) {
    return function(o) {
      return function(s) {
        return s.type in i.effects ? (o(s), i.effects[s.type](s.payload, a.getState(), s.meta)) : o(s);
      };
    };
  };
}
function $N(i, a) {
  var o = {};
  i.dispatch["" + a.name] = o, A5(i, a);
}
function HN(i, a, o) {
  _5(i, a, o), a.forEachPlugin("onModel", function(s) {
    s(o, i);
  });
}
function $5(i, a) {
  a.forEach(function(o) {
    if (o.exposed) {
      var s = Object.keys(o.exposed);
      s.forEach(function(d) {
        if (o.exposed) {
          var c = o.exposed[d], u = typeof c == "function";
          i[d] = u ? function() {
            for (var g = arguments.length, v = new Array(g), p = 0; p < g; p++)
              v[p] = arguments[p];
            return c.apply(void 0, [i].concat(v));
          } : Object.create(o.exposed[d]);
        }
      });
    }
  });
}
var BN = 0;
function H5(i) {
  var a, o, s, d = (a = i.name) != null ? a : "Rematch Store " + BN;
  BN += 1;
  var c = {
    name: d,
    models: i.models || {},
    plugins: i.plugins || [],
    redux: Ro({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, i.redux, {
      devtoolOptions: Ro({
        name: d
      }, (o = (s = i.redux) == null ? void 0 : s.devtoolOptions) != null ? o : {})
    })
  };
  return k5(c), c.plugins.forEach(function(u) {
    u.config && (c.models = Ed(c.models, u.config.models), u.config.redux && (c.redux.initialState = Ed(c.redux.initialState, u.config.redux.initialState), c.redux.reducers = Ed(c.redux.reducers, u.config.redux.reducers), c.redux.rootReducers = Ed(c.redux.rootReducers, u.config.redux.reducers), c.redux.enhancers = [].concat(c.redux.enhancers, u.config.redux.enhancers || []), c.redux.middlewares = [].concat(c.redux.middlewares, u.config.redux.middlewares || []), c.redux.combineReducers = c.redux.combineReducers || u.config.redux.combineReducers, c.redux.createStore = c.redux.createStore || u.config.redux.createStore)), O5(u);
  }), c;
}
function Ed(i, a) {
  return a ? Ro({}, a, i) : i;
}
var B5 = function(a) {
  var o = H5(a || {});
  return F5(o);
};
async function I5() {
  return vn("token").catch(() => {
    tw(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function J5({ email: i, password: a, code: o, recaptchaV3: s, turnstile: d }) {
  return vn({
    url: "token",
    method: "POST",
    body: { email: i, password: a, code: o, recaptchaV3: s, turnstile: d }
  });
}
async function tw() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function Y5(i) {
  return vn({ url: "user", method: "POST", body: i });
}
async function W5({ email: i }) {
  return vn({
    url: "user/password",
    method: "PUT",
    body: { email: i }
  });
}
const K5 = {
  state: null,
  reducers: {
    setUser(i, a) {
      return a;
    },
    updateUser(i, a) {
      return { ...i, ...a };
    }
  },
  effects: (i) => ({
    async loadUserInfo() {
      const a = await I5();
      if (a != null && a.email) {
        if (window.opener) {
          const o = localStorage.getItem("TOKEN"), s = !!o, d = o || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: d, remember: s, ...a } },
            "*"
          );
        }
        return i.user.setUser(a);
      }
    },
    async login({ email: a, password: o, code: s, remember: d, recaptchaV3: c, turnstile: u }) {
      const { token: g, ...v } = await J5({
        email: a,
        password: o,
        code: s,
        recaptchaV3: c,
        turnstile: u
      });
      return g && (window.TOKEN = g, sessionStorage.setItem("TOKEN", g), d && localStorage.setItem("TOKEN", g), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: g, remember: d, ...v } },
        "*"
      )), i.user.setUser(v);
    },
    logout() {
      tw(), i.user.setUser(null);
    },
    register(a) {
      return Y5(a);
    },
    forgot(a) {
      return W5(a);
    },
    async updateProfile(a) {
      return await oP(a), window.opener && window.opener.postMessage({ type: "profile", data: a }, "*"), i.user.updateUser(a);
    }
  })
}, nw = B5({ models: { user: K5 } });
function Cd(i) {
  const a = Pi((o) => o.user);
  return z.useEffect(() => {
    const o = i.meta || {}, s = i.basename || "";
    if (!(a != null && a.email))
      return location.href = s + "/ui/login?redirect=" + location.pathname.replace(s, "");
    if (o.auth ? i.meta.auth !== a.type : !1)
      return location.href = s + "/ui/profile";
  }, [a, i.meta]), a ? i.children : null;
}
function G5() {
  const i = location.pathname.match(/(.*?)\/ui/), a = i ? i[1] : "/";
  return /* @__PURE__ */ w.jsxDEV(U3, { store: nw, children: /* @__PURE__ */ w.jsxDEV(BL, { basename: a, children: /* @__PURE__ */ w.jsxDEV(TL, { children: [
    /* @__PURE__ */ w.jsxDEV(
      Ti,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(Cd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(yP, {}, void 0, !1, {
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
      Ti,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(Cd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(p5, {}, void 0, !1, {
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
      Ti,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(Cd, { meta: { auth: "administrator" }, basename: a, children: /* @__PURE__ */ w.jsxDEV(SP, {}, void 0, !1, {
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
    /* @__PURE__ */ w.jsxDEV(Ti, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ w.jsxDEV(lP, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(Ti, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ w.jsxDEV(d5, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(Ti, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ w.jsxDEV(E_, {}, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/NodeJS/waline-admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ w.jsxDEV(
      Ti,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ w.jsxDEV(Cd, { children: /* @__PURE__ */ w.jsxDEV(f5, {}, void 0, !1, {
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
  slice: X5,
  forEach: q5
} = [];
function Q5(i) {
  return q5.call(X5.call(arguments, 1), (a) => {
    if (a)
      for (const o in a)
        i[o] === void 0 && (i[o] = a[o]);
  }), i;
}
const IN = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Z5 = (i, a, o) => {
  const s = o || {};
  s.path = s.path || "/";
  const d = encodeURIComponent(a);
  let c = `${i}=${d}`;
  if (s.maxAge > 0) {
    const u = s.maxAge - 0;
    if (Number.isNaN(u)) throw new Error("maxAge should be a Number");
    c += `; Max-Age=${Math.floor(u)}`;
  }
  if (s.domain) {
    if (!IN.test(s.domain))
      throw new TypeError("option domain is invalid");
    c += `; Domain=${s.domain}`;
  }
  if (s.path) {
    if (!IN.test(s.path))
      throw new TypeError("option path is invalid");
    c += `; Path=${s.path}`;
  }
  if (s.expires) {
    if (typeof s.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    c += `; Expires=${s.expires.toUTCString()}`;
  }
  if (s.httpOnly && (c += "; HttpOnly"), s.secure && (c += "; Secure"), s.sameSite)
    switch (typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite) {
      case !0:
        c += "; SameSite=Strict";
        break;
      case "lax":
        c += "; SameSite=Lax";
        break;
      case "strict":
        c += "; SameSite=Strict";
        break;
      case "none":
        c += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return c;
}, JN = {
  create(i, a, o, s) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    o && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + o * 60 * 1e3)), s && (d.domain = s), document.cookie = Z5(i, encodeURIComponent(a), d);
  },
  read(i) {
    const a = `${i}=`, o = document.cookie.split(";");
    for (let s = 0; s < o.length; s++) {
      let d = o[s];
      for (; d.charAt(0) === " "; ) d = d.substring(1, d.length);
      if (d.indexOf(a) === 0) return d.substring(a.length, d.length);
    }
    return null;
  },
  remove(i) {
    this.create(i, "", -1);
  }
};
var e4 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: a
    } = i;
    if (a && typeof document < "u")
      return JN.read(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, a) {
    let {
      lookupCookie: o,
      cookieMinutes: s,
      cookieDomain: d,
      cookieOptions: c
    } = a;
    o && typeof document < "u" && JN.create(o, i, s, d, c);
  }
}, t4 = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(i) {
    var s;
    let {
      lookupQuerystring: a
    } = i, o;
    if (typeof window < "u") {
      let {
        search: d
      } = window.location;
      !window.location.search && ((s = window.location.hash) == null ? void 0 : s.indexOf("?")) > -1 && (d = window.location.hash.substring(window.location.hash.indexOf("?")));
      const u = d.substring(1).split("&");
      for (let g = 0; g < u.length; g++) {
        const v = u[g].indexOf("=");
        v > 0 && u[g].substring(0, v) === a && (o = u[g].substring(v + 1));
      }
    }
    return o;
  }
};
let zu = null;
const YN = () => {
  if (zu !== null) return zu;
  try {
    zu = window !== "undefined" && window.localStorage !== null;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    zu = !1;
  }
  return zu;
};
var n4 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: a
    } = i;
    if (a && YN())
      return window.localStorage.getItem(a) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, a) {
    let {
      lookupLocalStorage: o
    } = a;
    o && YN() && window.localStorage.setItem(o, i);
  }
};
let $u = null;
const WN = () => {
  if ($u !== null) return $u;
  try {
    $u = window !== "undefined" && window.sessionStorage !== null;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    $u = !1;
  }
  return $u;
};
var a4 = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: a
    } = i;
    if (a && WN())
      return window.sessionStorage.getItem(a) || void 0;
  },
  cacheUserLanguage(i, a) {
    let {
      lookupSessionStorage: o
    } = a;
    o && WN() && window.sessionStorage.setItem(o, i);
  }
}, r4 = {
  name: "navigator",
  lookup(i) {
    const a = [];
    if (typeof navigator < "u") {
      const {
        languages: o,
        userLanguage: s,
        language: d
      } = navigator;
      if (o)
        for (let c = 0; c < o.length; c++)
          a.push(o[c]);
      s && a.push(s), d && a.push(d);
    }
    return a.length > 0 ? a : void 0;
  }
}, i4 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: a
    } = i, o;
    const s = a || (typeof document < "u" ? document.documentElement : null);
    return s && typeof s.getAttribute == "function" && (o = s.getAttribute("lang")), o;
  }
}, o4 = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(i) {
    var d;
    let {
      lookupFromPathIndex: a
    } = i;
    if (typeof window > "u") return;
    const o = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(o) ? (d = o[typeof a == "number" ? a : 0]) == null ? void 0 : d.replace("/", "") : void 0;
  }
}, s4 = {
  name: "subdomain",
  lookup(i) {
    var d, c;
    let {
      lookupFromSubdomainIndex: a
    } = i;
    const o = typeof a == "number" ? a + 1 : 1, s = typeof window < "u" && ((c = (d = window.location) == null ? void 0 : d.hostname) == null ? void 0 : c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (s)
      return s[o];
  }
};
function l4() {
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
    convertDetectedLanguage: (i) => i
  };
}
class aw {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(a, o);
  }
  init(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = a || {
      languageUtils: {}
    }, this.options = Q5(o, this.options || {}, l4()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = s, this.addDetector(e4), this.addDetector(t4), this.addDetector(n4), this.addDetector(a4), this.addDetector(r4), this.addDetector(i4), this.addDetector(o4), this.addDetector(s4);
  }
  addDetector(a) {
    return this.detectors[a.name] = a, this;
  }
  detect(a) {
    a || (a = this.options.order);
    let o = [];
    return a.forEach((s) => {
      if (this.detectors[s]) {
        let d = this.detectors[s].lookup(this.options);
        d && typeof d == "string" && (d = [d]), d && (o = o.concat(d));
      }
    }), o = o.map((s) => this.options.convertDetectedLanguage(s)), this.services.languageUtils.getBestMatchFromCodes ? o : o.length > 0 ? o[0] : null;
  }
  cacheUserLanguage(a, o) {
    o || (o = this.options.caches), o && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(a) > -1 || o.forEach((s) => {
      this.detectors[s] && this.detectors[s].cacheUserLanguage(a, this.options);
    }));
  }
}
aw.type = "languageDetector";
gn.use(aw).use(SM).init({
  // we init with resources
  resources: w_,
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
async function u4() {
  await Promise.race([
    new Promise((o) => setTimeout(o, 50)),
    new Promise((o) => {
      window.addEventListener("message", (s) => {
        s && s.type === "TOKEN" && s.data && o(s);
      });
    }),
    new Promise((o) => {
      const d = new URLSearchParams(location.search).get("token");
      d && o(d);
    })
  ]).then((o) => {
    o && (window.TOKEN = o, sessionStorage.setItem("TOKEN", o));
  }), await Promise.all([nw.dispatch({ type: "user/loadUserInfo" })]).catch(
    (o) => {
      console.error(o);
    }
  );
  const i = document.createElement("div");
  i.style.height = "100%", document.body.appendChild(i), ZN(i).render(
    /* @__PURE__ */ w.jsxDEV(zd.StrictMode, { children: /* @__PURE__ */ w.jsxDEV(G5, {}, void 0, !1, {
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
u4();
