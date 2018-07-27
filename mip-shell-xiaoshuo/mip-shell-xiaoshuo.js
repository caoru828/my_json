require.config({paths:{mipComponentsWepackHelpers:"https://c.mipcdn.com/static/v2/mip-components-webpack-helpers"}}),require(["mipComponentsWepackHelpers"],function(e){var n=function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=143)}({1:function(e,n){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},123:function(e,n,t){var o=t(124);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,t(3).default)("770df392",o,!1,{})},124:function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'/**\n * file: 小说shell（阅读器）通用样式文件;\n * author: liangjiaying <jiaojiaomao220@163.com>\n * TODO:\n * 1. 通用样式抽象\n * 2. 代码分块整理\n * 3. less嵌套方法修改\n */\n/* 控制栏-底bar元素*/\n.mip-shell-footer-wrapper {\n  z-index: 20002 !important;\n  height: 150px;\n  -webkit-transition: -webkit-transform 0.35s ease;\n  transition: -webkit-transform 0.35s ease;\n  transition: transform 0.35s ease;\n  transition: transform 0.35s ease, -webkit-transform 0.35s ease;\n  -webkit-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n  font-size: 16px;\n}\n.mip-shell-footer-wrapper .button p {\n  font-size: 16px;\n}\n.mip-shell-header-wrapper {\n  z-index: 20002 !important;\n  -webkit-transition: -webkit-transform 0.35s ease;\n  transition: -webkit-transform 0.35s ease;\n  transition: transform 0.35s ease;\n  transition: transform 0.35s ease, -webkit-transform 0.35s ease;\n  -webkit-transform: translateY(-100%);\n      -ms-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.mip-shell-header-wrapper.show {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.click-cursor {\n  cursor: pointer;\n}\n.mip-shell-footer-wrapper.show {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.mip-shell-footer {\n  height: 150px;\n  background: white;\n}\n.mip-shell-footer .upper {\n  /* overflow: hidden;*/\n  height: 50px;\n}\n.mip-shell-footer .page-button.disabled {\n  opacity: 0.5;\n}\n.mip-shell-footer .page-button {\n  float: left;\n  margin: 0 20px;\n  line-height: 50px;\n}\n.mip-shell-footer .page-button.page-next {\n  float: right;\n}\n.mip-shell-footer .button-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100px;\n}\n.mip-shell-footer .button-wrapper i p {\n  margin-top: 10px;\n}\n.mip-shell-footer .button-wrapper .button {\n  height: 99px;\n  line-height: 99px;\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.mip-shell-footer .bg-button {\n  display: block;\n}\n/* 业务样式 - 侧边栏*/\nmip-fixed.mip-shell-catalog-wrapper {\n  z-index: 20002 !important;\n  bottom: 0;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  width: 90%;\n  min-width: 200px;\n  height: 100%;\n  background: white;\n  -webkit-transition: -webkit-transform 0.35s ease;\n  transition: -webkit-transform 0.35s ease;\n  transition: transform 0.35s ease;\n  transition: transform 0.35s ease, -webkit-transform 0.35s ease;\n  -webkit-transform: translateX(-100%);\n      -ms-transform: translateX(-100%);\n          transform: translateX(-100%);\n  font-size: 16px;\n  /*\n  ::-webkit-scrollbar {\n    width:15px;\n    background-color:black;\n  }\n*/\n  /* 自己的滚动条设置不可见 */\n}\nmip-fixed.mip-shell-catalog-wrapper.show {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\nmip-fixed.mip-shell-catalog-wrapper .mip-shell-catalog {\n  height: calc(100% - 10em);\n  margin-top: 10em;\n  padding: 0 0;\n  position: relative;\n  top: 0;\n  bottom: 20px;\n}\nmip-fixed.mip-shell-catalog-wrapper .novel-catalog-content-wrapper::-webkit-scrollbar {\n  display: none;\n}\nmip-fixed.mip-shell-catalog-wrapper .mip-shell-catalog::-webkit-scrollbar,\nmip-fixed.mip-shell-catalog-wrapper .novel-catalog-content-wrapper::-webkit-scrollbar {\n  display: none;\n}\nmip-fixed.mip-shell-catalog-wrapper .catalog-reserve {\n  color: #555555;\n}\nmip-fixed.mip-shell-catalog-wrapper .mip-catalog-btn {\n  top: 0;\n  padding: 0.93em 1.06em;\n}\nmip-fixed.mip-shell-catalog-wrapper .width-50 {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: 50%;\n  display: inline-block;\n}\nmip-fixed.mip-shell-catalog-wrapper .text-left {\n  text-align: left;\n}\nmip-fixed.mip-shell-catalog-wrapper .text-right {\n  text-align: right;\n}\nmip-fixed.mip-shell-catalog-wrapper .catalog-scroll {\n  display: block!important;\n  position: absolute;\n  width: 1.54em;\n  height: 2.25em;\n  right: 20px;\n  top: 0;\n  background-color: #F5F5F5;\n  border-radius: 100px;\n  transition: opacity 120ms;\n  -webkit-transition: opacity 120ms;\n}\n#catalog-scroll-btn {\n  width: 1.54em;\n  height: 2.25em;\n  background-color: #F5F5F5;\n  border-radius: 2em;\n}\n.scroll-btn {\n  width: 0.75em;\n  height: 0.125em;\n  background: #C1C1C1;\n  position: absolute;\n  display: inline-block;\n  top: 0.75em;\n  left: 0.376em;\n  text-align: center;\n}\n.scroll-btn:nth-child(2) {\n  top: 1.055em;\n}\n.scroll-btn:nth-child(3) {\n  top: 1.375em;\n}\n/*原小说shell*/\n/* flex布局 */\n.mip-shell-xiaoshuo-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: auto;\n  -webkit-align-content: flex-start;\n  -webkit-align-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-box-direction: normal;\n  -webkit-box-lines: single;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: justify;\n  -webkit-flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n}\n/* 左右填充 */\n.mip-shell-xiaoshuo-padding {\n  padding-right: 17px;\n  padding-left: 17px;\n}\n.optoggle1 {\n  opacity: 1;\n}\n.optoggle0 {\n  opacity: 0;\n}\n.transiton-init {\n  -webkit-transition: all ease 240ms;\n  transition: all ease 240ms;\n}\n/* 底部控制条 */\n.mip-shell-xiaoshuo-control {\n  position: fixed;\n  z-index: 200;\n  bottom: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  background-color: #fff;\n  -webkit-box-shadow: 0 -6px 9px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 -6px 9px 0 rgba(0, 0, 0, 0.1);\n}\n/* 分页浮层 */\n.mip-shell-xiaoshuo-control-page {\n  height: 54px;\n  border-bottom: 1px solid;\n  border-bottom-color: #f1f1f1;\n  line-height: 54px;\n  -webkit-transition: all ease 240ms;\n  transition: all ease 240ms;\n  display: -webkit-box;\n  display: -webkit-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: auto;\n  -webkit-align-content: flex-start;\n  -webkit-align-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-box-direction: normal;\n  -webkit-box-lines: single;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: justify;\n  -webkit-flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n  padding-right: 17px;\n  padding-left: 17px;\n}\n.mip-shell-xiaoshuo-control-page .disabled {\n  color: #a0a0a0;\n  -webkit-transition: all ease 240ms;\n  transition: all ease 240ms;\n  cursor: not-allowed;\n}\n.mip-shell-xiaoshuo-control-page.page-end {\n  margin: 0 -17px;\n  border-bottom: 0;\n}\n/* 异步按钮浮层 */\n.mip-shell-xiaoshuo-control-nav ul {\n  padding: 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: auto;\n  -webkit-align-content: flex-start;\n  -webkit-align-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-box-direction: normal;\n  -webkit-box-lines: single;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: justify;\n  -webkit-flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n  padding-right: 17px;\n  padding-left: 17px;\n}\n/* 主题浮层 */\n.mip-shell-xiaoshuo-control-theme {\n  padding-bottom: 30px;\n  padding-right: 17px;\n  padding-left: 17px;\n}\n.mip-shell-xiaoshuo-control-theme ul {\n  margin-right: -1.03092784%;\n  margin-left: -1.03092784%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: auto;\n  -webkit-align-content: flex-start;\n  -webkit-align-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-box-direction: normal;\n  -webkit-box-lines: single;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: justify;\n  -webkit-flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n}\n.mip-shell-xiaoshuo-control-theme li {\n  position: relative;\n  width: 33.33333333%;\n  padding-right: 1.03092784%;\n  padding-left: 1.03092784%;\n  -webkit-box-flex: 4;\n  -webkit-flex: 4 4 auto;\n}\n.mip-shell-xiaoshuo-control-theme span {\n  display: block;\n  width: 100%;\n  height: 38px;\n  border-radius: 3px;\n}\n.mip-shell-xiaoshuo-control-theme .theme-default {\n  background-color: #eee;\n}\n.mip-shell-xiaoshuo-control-theme .theme-green {\n  background-color: #d7e0cb;\n}\n.mip-shell-xiaoshuo-control-theme .theme-paper {\n  background-color: #ecdabb;\n}\n/* 更多设置 */\n.mip-xiaoshuo-settings {\n  position: relative;\n  height: 100%;\n  background: white;\n  -webkit-transition: -webkit-transform 240ms;\n  transition: -webkit-transform 240ms;\n  transition: transform 240ms;\n  transition: transform 240ms, -webkit-transform 240ms;\n}\n.mip-xiaoshuo-settings.show {\n  -webkit-transform: translateY(-100%);\n      -ms-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.mip-shell-xiaoshuo-control-fontsize {\n  padding: 20px 30px;\n  padding-right: 17px;\n  padding-left: 17px;\n}\n.mip-shell-xiaoshuo-control-fontsize ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: auto;\n  -webkit-align-content: flex-start;\n  -webkit-align-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-box-direction: normal;\n  -webkit-box-lines: single;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: justify;\n  -webkit-flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n}\n.mip-shell-xiaoshuo-control-fontsize li {\n  padding: 10px 0;\n  cursor: pointer;\n}\n.mip-shell-xiaoshuo-control-fontsize input[type=range] {\n  display: block;\n  width: 100%;\n  outline: none;\n  -webkit-appearance: none;\n}\n.mip-shell-xiaoshuo-control-fontsize input[type=range]::-webkit-slider-runnable-track {\n  height: 2px;\n  line-height: 2px;\n  background-color: #f1f1f1;\n}\n.mip-shell-xiaoshuo-control-fontsize input[type=range]::-webkit-slider-thumb {\n  width: 14px;\n  height: 14px;\n  margin-top: -7px;\n  border-radius: 50%;\n  background-color: #000;\n  -webkit-appearance: none;\n}\n.mip-shell-xiaoshuo-control-fontsize .progress {\n  margin-top: 15px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n}\n.mip-shell-xiaoshuo-control-fontsize .reduce {\n  padding-right: 20px;\n  font-size: 26px;\n  cursor: none;\n}\n.mip-shell-xiaoshuo-control-fontsize .increase {\n  padding-left: 20px;\n  font-size: 26px;\n  cursor: none;\n}\n/* 内容 */\n/* 换色和变字号 */\nhtml[mip-shell-xiaoshuo-font-size="1"] body,\nhtml[mip-shell-xiaoshuo-font-size="1"] body p {\n  font-size: 12px;\n}\nhtml[mip-shell-xiaoshuo-font-size="1.5"] body,\nhtml[mip-shell-xiaoshuo-font-size="1.5"] body p {\n  font-size: 13px;\n}\nhtml[mip-shell-xiaoshuo-font-size="2"] body,\nhtml[mip-shell-xiaoshuo-font-size="2"] body p {\n  font-size: 14px;\n}\nhtml[mip-shell-xiaoshuo-font-size="2.5"] body,\nhtml[mip-shell-xiaoshuo-font-size="2.5"] body p {\n  font-size: 15px;\n}\nhtml[mip-shell-xiaoshuo-font-size="3"] body,\nhtml[mip-shell-xiaoshuo-font-size="3"] body p {\n  font-size: 16px;\n}\nhtml[mip-shell-xiaoshuo-font-size="3.5"] body,\nhtml[mip-shell-xiaoshuo-font-size="3.5"] body p {\n  font-size: 18px;\n}\nhtml[mip-shell-xiaoshuo-font-size="4"] body,\nhtml[mip-shell-xiaoshuo-font-size="4"] body p {\n  font-size: 19px;\n}\nhtml[mip-shell-xiaoshuo-font-size="4.5"] body,\nhtml[mip-shell-xiaoshuo-font-size="4.5"] body p {\n  font-size: 20px;\n}\nhtml[mip-shell-xiaoshuo-font-size="5"] body,\nhtml[mip-shell-xiaoshuo-font-size="5"] body p {\n  font-size: 22px;\n}\nhtml[mip-shell-xiaoshuo-font-size="5.5"] body,\nhtml[mip-shell-xiaoshuo-font-size="5.5"] body p {\n  font-size: 26px;\n}\nhtml[mip-shell-xiaoshuo-font-size="6"] body,\nhtml[mip-shell-xiaoshuo-font-size="6"] body p {\n  font-size: 30px;\n}\n/* 换主题 */\nhtml body,\nhtml .mip-shell-footer,\nhtml .mip-shell-footer a {\n  -webkit-transition: background-color ease 350ms;\n  transition: background-color ease 350ms;\n}\nhtml .mip-border,\nhtml .mip-border:after {\n  -webkit-transition: all ease 350ms;\n  transition: all ease 350ms;\n}\nhtml .light-mode {\n  display: none;\n}\nhtml[mip-shell-xiaoshuo-theme="green"] {\n  color: #3b3f2f;\n  background-color: #d7e0cb;\n}\nhtml[mip-shell-xiaoshuo-theme="default"] {\n  color: #333;\n  background-color: #eee;\n}\nhtml[mip-shell-xiaoshuo-theme="paper"] {\n  color: #412b1a;\n  background-color: #ecdabb;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] {\n  /*#mip-page-loading-wrapper shell加载中效果*/\n}\nhtml[mip-shell-xiaoshuo-theme="night"] #mip-page-loading-wrapper,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-page-fade-header-wrapper {\n  background: #191919 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] #mip-page-loading-wrapper .mip-shell-header,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-page-fade-header-wrapper .mip-shell-header {\n  background: #191919 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-header-wrapper .mip-shell-header {\n  background: #191919 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-header-wrapper .icon path {\n  fill: #666 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-header-wrapper .mip-shell-header-title {\n  color: #666 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] body,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-catalog-wrapper,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-catalog-wrapper a {\n  color: #333;\n  background-color: #000;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-footer,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-xiaoshuo-settings {\n  color: #333;\n  background-color: #191919;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-footer input[type=range],\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-xiaoshuo-settings input[type=range] {\n  opacity: 0.2;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-shell-footer a,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-xiaoshuo-settings a {\n  color: #333;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-border,\nhtml[mip-shell-xiaoshuo-theme="night"] .mip-border:after {\n  border-color: #333 !important;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .disabled {\n  color: #333;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .night-mode {\n  display: none;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] .light-mode {\n  display: block;\n}\nhtml[mip-shell-xiaoshuo-theme="night"] input[type=range]::-webkit-slider-thumb {\n  background-color: #999;\n}\ninput[type=range]:focus::-ms-fill-lower {\n  background: linear-gradient(to right, #059cfa, white 100%, white);\n  background: linear-gradient(#059cfa, #059cfa) no-repeat;\n}\ninput[type=range]:focus::-ms-fill-upper {\n  background: #fff;\n  background: linear-gradient(#059cfa, #059cfa) no-repeat;\n}\n@-webkit-keyframes anim {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n  }\n  100% {\n    opacity: 0.1;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";\n  }\n}\n@-webkit-keyframes control {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes themechange {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes controlre {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n/* 主题按钮高亮*/\nhtml[mip-shell-xiaoshuo-theme="green"] .mip-shell-xiaoshuo-control-theme .theme-green,\nhtml[mip-shell-xiaoshuo-theme="default"] .mip-shell-xiaoshuo-control-theme .theme-default,\nhtml[mip-shell-xiaoshuo-theme="paper"] .mip-shell-xiaoshuo-control-theme .theme-paper {\n  border: 1px solid #000;\n}\nhtml[mip-shell-xiaoshuo-theme=default] footer {\n  color: #333;\n  background-color: #eee;\n}\nhtml[mip-shell-xiaoshuo-theme=night] footer {\n  color: #333;\n  background-color: #000;\n}\nhtml[mip-shell-xiaoshuo-theme=paper] footer {\n  color: #412b1a;\n  background-color: #ecdabb;\n}\nhtml[mip-shell-xiaoshuo-theme=green] li[mode-default] {\n  display: none;\n}\nhtml[mip-shell-xiaoshuo-theme=green] footer {\n  color: #3b3f2f;\n  background-color: #d7e0cb;\n}\nbody.with-header {\n  padding-top: 0;\n}\n.mip-page__iframe {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border: 0;\n  width: 1px;\n  min-width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.3);\n  z-index: 10000;\n  display: none;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.mip-page-loading-wrapper {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  z-index: 20001 !important;\n  display: none;\n}\n.mip-page-loading-wrapper,\n.mip-page__iframe {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.mip-page-loading-wrapper.slide-enter,\n.mip-page__iframe.slide-enter,\n.mip-page-loading-wrapper.slide-leave-to,\n.mip-page__iframe.slide-leave-to {\n  -webkit-transform: translate3d(0, 1px, 0);\n          transform: translate3d(0, 1px, 0);\n}\n.mip-page-loading-wrapper.slide-enter-active,\n.mip-page__iframe.slide-enter-active,\n.mip-page-loading-wrapper.slide-leave-active,\n.mip-page__iframe.slide-leave-active {\n  -webkit-transition: -webkit-transform 0.1s ease;\n  transition: -webkit-transform 0.1s ease;\n  transition: transform 0.1s ease;\n  transition: transform 0.1s ease, -webkit-transform 0.1s ease;\n}\n.mip-page-loading-wrapper.slide-enter-to,\n.mip-page__iframe.slide-enter-to,\n.mip-page-loading-wrapper.slide-leave,\n.mip-page__iframe.slide-leave {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.mip-page-loading-wrapper.transition-without-header,\n.mip-page__iframe.transition-without-header {\n  top: 0;\n}\n.mip-page-fade-header-wrapper {\n  top: 0;\n  left: 0;\n  right: 95px;\n  background: #fff;\n  z-index: 20001 !important;\n  display: none !important;\n}\n.mip-page-fade-header-wrapper.fade-enter {\n  opacity: 0;\n}\n.mip-page-fade-header-wrapper.fade-enter-active {\n  -webkit-transition: opacity 0.35s ease;\n  transition: opacity 0.35s ease;\n}\n.mip-page-fade-header-wrapper.fade-enter-to {\n  opacity: 0.0001;\n}\n.mip-page-fade-header-wrapper .mip-shell-header {\n  padding-left: 95px;\n  padding-right: 0;\n}\n',""])},143:function(e,n,t){"use strict";t.r(n);var o=t(22),i=t.n(o),a=t(17),r=t.n(a),l=t(21),s=t.n(l),p=t(49),h=t.n(p),c=t(47),d=t.n(c),m=t(50),u=t.n(m),f=(t(123),t(20)),g=t.n(f),b=MIP.util.rect,x=function(){function e(n){r()(this,e),this.$catalogSidebar=this._renderCatalog(n),this.propagationStopped=this._stopPropagation()}return s()(e,[{key:"_renderCatalog",value:function(e){var n=void 0,t=void 0,o=void 0,i=void 0,a=void 0,r=void 0,l=void 0,s=void 0;e&&("string"==typeof e||(n=function(e){return e.map(function(e){return'\n        <div><a class="mip-catalog-btn" mip-catalog-btn mip-link data-button-name="'+e.name+'" href="'+e.link+'">'+e.name+"</a></div>"}).join("\n")}));var p=document.querySelector(".mip-shell-catalog-wrapper"),h=!!p;return h||((p=document.createElement("mip-fixed")).setAttribute("type","left"),p.setAttribute("top","0"),p.setAttribute("mip-shell",""),p.classList.add("mip-shell-catalog-wrapper"),p.addEventListener("touchmove",function(e){e.stopPropagation()})),p.innerHTML='\n    <div class="mip-catalog-btn" style="position:absolute;top:0;width:100%; padding-top:0">\n      <div style="display:flex;flex-direction:column;font-size:16px">\n        <div>\n           <p style="font-size:1.2em;padding-top:1.27em" class="catalog-title">将夜</p>\n           <p style="font-size:1em;padding-top: 0.6em;font-family: PingFangSC-Regular;color: #999999;letter-spacing: 0;\n           text-align: justify;" class="content-total">已完结 共1342章</p>\n        </div>\n        <div style="display:flex;flex-grow:100%;padding:1.89em 0" >\n          <div class="width-50 text-left" >目录</div>\n          <div class="width-50 text-right">\n            <a href="#" class="catalog-reserve" style="z-index:9999">\n              <i class="icon icon-order"></i>\n              <span class="reverse-name">倒序</span>\n            </a>\n          </div>\n          </div>\n      </div>\n    </div>\n    <div class="mip-shell-catalog mip-border mip-border-right" style="">\n      <div class="novel-catalog-content-wrapper" style="position:absolute; top=0;width:87%; overflow-y: scroll;height:100% ">\n        <div class="novel-catalog-content">\n        </div>\n        </div>\n      </div>\n      <div style="position:absolute;top:10em;right:0;z-index:8888">\n          <div class="catalog-scroll" >\n            <div id="catalog-scroll-btn">\n              <div class="scroll-btn"></div>\n              <div class="scroll-btn"></div>\n              <div class="scroll-btn"></div>\n            </div>\n          </div>\n      </div>    \n    </div> \n    ',o=p.querySelector(".mip-shell-catalog"),r=p.querySelector(".catalog-scroll"),l=p.querySelector("#catalog-scroll-btn"),a=p.querySelector(".mip-catalog-btn"),i=p.querySelector(".novel-catalog-content-wrapper"),(s=p.querySelector(".novel-catalog-content")).innerHTML=n(e),function(e){var n=!0,s=void 0,p=void 0,h=void 0,c=null,d=void 0;r.style.opacity=1;var m=function(i){clearTimeout(c),c=setTimeout(function(){n||(s=-(b.getElementOffset(e).top-b.getElementOffset(a).height),p=b.getElementOffset(o).height-1.5*b.getElementOffset(l).height,h=b.getElementOffset(e).height-b.getElementOffset(o).height,t=p*s/h,r.style.transform="translateY( "+t+"px)",r.style.opacity=i)},10)};e.addEventListener("touchstart",function(){r.style.opacity=0}),e.addEventListener("touchend",function(){var t=Math.abs(d)-Math.abs(b.getElementOffset(e).top-b.getElementOffset(a).height);n=!1,m(0),d=s,t<=5&&t>=-5&&m(1)}),e.addEventListener("touchmove",function(){n=!0,r.style.opacity=0,d=b.getElementOffset(e).top-b.getElementOffset(a).height}),i.addEventListener("scroll",function(){m(1)})}(s),function(e,n){var i=void 0,r=void 0,s=void 0,p=void 0;e.parentNode.addEventListener("touchstart",function(h){h.stopPropagation(),h.preventDefault(),e.style.transition="all ease 0",e.style.webkitTransition="all ease 0",window.onresize=function(){p=-(b.getElementOffset(n).top-b.getElementOffset(a).height),r=b.getElementOffset(o).height-1.5*b.getElementOffset(l).height,s=b.getElementOffset(n).height-b.getElementOffset(o).height,t=r*p/s};var c=h||window.event,d=c.targetTouches[0];i=d.clientY-b.getElementOffset(e).top}),e.parentNode.addEventListener("touchmove",function(t){e.style.transition="all ease 0",t.stopPropagation(),t.preventDefault();var r=b.getElementOffset(o).height-1.5*b.getElementOffset(l).height,s=t||window.event,p=s.targetTouches[0],h=p.clientY-i,c=b.getElementOffset(n).height-b.getElementOffset(o).height,d=c*(h-b.getElementOffset(a).height)/r;if(h<a.offsetHeight)h=b.getElementOffset(a).height;else if(h-a.offsetHeight>=r)return t.stopPropagation(),t.preventDefault(),window.event?window.event.returnValue=!1:t.preventDefault(),t&&t.stopPropagation?t.stopPropagation():window.event.cancelBubble=!0,void(e.style.transform="translateY( "+r+"px)");e.style.transform="translateY( "+(h-a.offsetHeight)+"px)",n.parentNode.scrollTop=d})}(r,s),a.querySelector(".catalog-reserve").addEventListener("click",function(){var e=[].concat(g()(s.querySelectorAll("div"))),n=a.querySelector(".reverse-name");"正序"===n.innerHTML?n.innerHTML="倒序":n.innerHTML="正序";for(var t=[],o=0;o<e.length;o++)t[o]=e[o].innerHTML;for(var i=0;i<t.length;i++)e[i].innerHTML=t[t.length-1-i]}),h?(p.removeChild(p.querySelector(".mip-shell-catalog")),p.appendChild(o)):(p.appendChild(o),document.body.appendChild(p)),p}},{key:"show",value:function(e){this.$catalogSidebar.classList.add("show"),e.toggleDOM(e.$buttonMask,!0)}},{key:"hide",value:function(){this.$catalogSidebar.classList.remove("show")}},{key:"_stopPropagation",value:function(){if(!this.propagationStopped)return this.$catalogSidebar.addEventListener("scroll",function(e){return e&&e.stopPropagation(),!1}),!0}}]),e}(),w=t(9),v=t.n(w),k={theme:"default",fontSize:3},y="mip-shell-xiaoshuo-mode",z=new(0,MIP.util.customStorage)(0),_=MIP.util.fn.extend;function E(){var e=k;try{e=_(e,JSON.parse(z.get(y)))}catch(e){}return e}function S(e){e=_(E(),e),z.set(y,v()(e)),e.theme&&document.documentElement.setAttribute("mip-shell-xiaoshuo-theme",e.theme),e.fontSize&&document.documentElement.setAttribute("mip-shell-xiaoshuo-font-size",e.fontSize)}var M=function(){function e(){r()(this,e),this.elementSelector=".mip-shell-footer-wrapper .mip-shell-xiaoshuo-control-fontsize"}return s()(e,[{key:"_getInputValue",value:function(){var e=document.querySelector(this.elementSelector+' input[type="range"]');return parseFloat(e.value)}},{key:"_setInputValue",value:function(e){var n=document.querySelector(this.elementSelector+' input[type="range"]');this.min=parseInt(n.getAttribute("min")),this.max=parseInt(n.getAttribute("max")),e>this.max||e<this.min||(n.value=e,window.MIP.viewer.page.broadcastCustomEvent({name:"changePageStyle",data:{fontSize:e}}))}},{key:"changeFont",value:function(e){"bigger"===e?this._setInputValue(this._getInputValue()+.5):"smaller"===e&&this._setInputValue(this._getInputValue()-.5)}},{key:"bindDragEvent",value:function(){var e=this,n=window.MIP.util.event;n.delegate(document.body,this.elementSelector+' input[type="range"]',"touchmove",function(){e._setInputValue(e._getInputValue())}),n.delegate(document.body,this.elementSelector+' input[type="range"]',"click",function(){e._setInputValue(e._getInputValue())})}},{key:"showFontBar",value:function(e){document.querySelector(".mip-xiaoshuo-settings").classList.add("show")}},{key:"hideFontBar",value:function(e){document.querySelector(".mip-xiaoshuo-settings").classList.remove("show")}}]),e}(),P=function(){function e(n){r()(this,e),this.config=n,this.$footerWrapper=this._render(),this.propagationStopped=this._stopPropagation()}return s()(e,[{key:"_render",value:function(e){e&&(this.config=e);var n=document.querySelector(".mip-shell-footer-wrapper"),t=!!n;t||((n=document.createElement("mip-fixed")).setAttribute("type","bottom"),n.setAttribute("mip-shell",""),n.classList.add("mip-shell-footer-wrapper"));var o=document.createElement("div");return o.classList.add("mip-shell-footer","mip-border","mip-border-top"),o.innerHTML=this._createFooterDom(),t?(n.removeChild(n.querySelector(".mip-shell-footer")),n.appendChild(o)):(n.appendChild(o),document.body.appendChild(n)),n}},{key:"_createFooterDom",value:function(){var e=this.config.hrefButton["previous-href"],n=this.config.hrefButton["next-href"],t=e?"":"disabled",o=n?"":"disabled",i=e?'mip-link href="'+this.config.hrefButton["previous-href"]+'"':"",a=n?'mip-link href="'+this.config.hrefButton["next-href"]+'"':"";return'\n        <div class="upper mip-border mip-border-bottom">\n            <a class="page-button page-previous '+t+'" '+i+'>\n                <i class="icon gap-right-small icon-left"></i>\n                '+this.config.hrefButton.previous+'\n            </a>\n            <a class="page-button page-next '+o+'" '+a+">\n                "+this.config.hrefButton.next+'\n                <i class="icon gap-left-small icon-right"></i>\n            </a>\n        </div>\n        <div class="button-wrapper">\n            '+function(e){return e.map(function(e){return"catalog"===e.name?'<div class="button click-cursor" on="click:xiaoshuo-shell.showShellCatalog"> <i class="icon icon-menulist"><p>'+e.text+"</p></i> </div>":"darkmode"===e.name?'<div class="button click-cursor" data-current-bg="default" data-hidden-bg="night">\n          <span class="bg-button night-mode" on="click:xiaoshuo-shell.changeMode(night)" > <i class="icon icon-night"><p>'+e.text+'</p></i>  </span>\n          <span class="bg-button light-mode click-cursor" on="click:xiaoshuo-shell.changeMode(default)" > <i class="icon icon-day"><p>'+e.text2+"</p></i> </span>\n        </div>":"settings"===e.name?'<div class="button click-cursor" on="click:xiaoshuo-shell.showFontAdjust"> <i class="icon icon-font"><p>'+e.text+"</p></i></div>":void 0}).join("")}(this.config.actionGroup)+'\n        </div>\n        <div class="mip-xiaoshuo-settings">\n    <div class="mip-shell-xiaoshuo-control-fontsize">\n        <ul>\n            <li class="reduce click-cursor" on="click:xiaoshuo-shell.changeFont(smaller)">A-</li>\n            <li class="progress">\n                <input type="range" step="0.5" min="1" max="6" value="'+E().fontSize+'">\n            </li>\n            <li class="increase click-cursor" on="click:xiaoshuo-shell.changeFont(bigger)">A+</li>\n        </ul>\n    </div>\n    <div class="mip-shell-xiaoshuo-control-theme">\n        <ul>\n            <li><span class="theme-default click-cursor" on="click:xiaoshuo-shell.changeMode(default)"></span></li>\n            <li><span class="theme-green click-cursor" on="click:xiaoshuo-shell.changeMode(green)"></span></li>\n            <li><span class="theme-paper click-cursor" on="click:xiaoshuo-shell.changeMode(paper)"></span></li>\n        </ul>\n    </div></div>\n        '}},{key:"show",value:function(e){this.$footerWrapper.classList.add("show"),e&&e.toggleDOM(e.$buttonMask,!0)}},{key:"hide",value:function(){this.$footerWrapper.classList.remove("show")}},{key:"_stopPropagation",value:function(){if(!this.propagationStopped)return this.$footerWrapper.addEventListener("scroll",function(e){e&&e.stopPropagation()}),this.$footerWrapper.addEventListener("touchmove",function(e){if("INPUT"!==e.target.tagName)return e&&e.stopPropagation(),e&&e.preventDefault(),!1}),!0}}]),e}(),O=function(e){function n(){var e;r()(this,n);for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];var l=h()(this,(e=n.__proto__||i()(n)).call.apply(e,[this].concat(o)));return l.transitionContainsHeader=!1,l}return u()(n,e),s()(n,[{key:"bindAllEvents",value:function(){var e=this;d()(n.prototype.__proto__||i()(n.prototype),"bindAllEvents",this).call(this),this.pageStyle=new function e(){r()(this,e),this.update=function(e,n){S(n||E())}};var t=MIP.viewer.page.isRootPage;this.addEventAction("showShellFooter",function(){window.MIP.viewer.page.emitCustomEvent(t?window:window.parent,!0,{name:"showShellFooter"})}),this.addEventAction("showShellCatalog",function(){window.MIP.viewer.page.emitCustomEvent(t?window:window.parent,!0,{name:"showShellCatalog"})}),this.addEventAction("changeMode",function(e,n){window.MIP.viewer.page.broadcastCustomEvent({name:"changePageStyle",data:{theme:n}})}),this.addEventAction("showFontAdjust",function(n){return e.fontSize.showFontBar(n)}),this.addEventAction("changeFont",function(n,t){e.fontSize.changeFont(t)}),this.$buttonMask&&(this.$buttonMask.onclick=this._closeEverything.bind(this)),window.addEventListener("changePageStyle",function(n,t){n.detail[0]&&n.detail[0].theme?e.pageStyle.update(n,{theme:n.detail[0].theme}):n.detail[0]&&n.detail[0].fontSize?e.pageStyle.update(n,{fontSize:n.detail[0].fontSize}):e.pageStyle.update(n)}),window.MIP.viewer.page.emitCustomEvent(window,!0,{name:"changePageStyle"})}},{key:"bindRootEvents",value:function(){var e=this;d()(n.prototype.__proto__||i()(n.prototype),"bindRootEvents",this).call(this),window.addEventListener("showShellFooter",function(n,t){e.footer.show(e)}),window.addEventListener("showShellCatalog",function(n,t){e.catalog.show(e),e.footer.hide()})}},{key:"renderOtherParts",value:function(){d()(n.prototype.__proto__||i()(n.prototype),"renderOtherParts",this).call(this),this._initAllObjects()}},{key:"_closeEverything",value:function(e){this.toggleDOM(this.$buttonWrapper,!1),this.footer.hide(),this.catalog.hide(),this.fontSize.hideFontBar(),this.toggleDOM(this.$buttonMask,!1)}},{key:"_initAllObjects",value:function(){var e=this.currentPageMeta;this.footer=new P(e.footer),this.catalog=new x(e.catalog),this.fontSize=new M(document.querySelector(".mip-shell-footer-wrapper .mip-shell-xiaoshuo-control-fontsize")),this.fontSize.bindDragEvent()}},{key:"unbindHeaderEvents",value:function(){d()(n.prototype.__proto__||i()(n.prototype),"unbindHeaderEvents",this).call(this),this.jumpHandler&&(this.jumpHandler(),this.jumpHandler=void 0)}},{key:"bindHeaderEvents",value:function(){d()(n.prototype.__proto__||i()(n.prototype),"bindHeaderEvents",this).call(this);var e=window.MIP.util.event,t=this;this.jumpHandler=e.delegate(document,"[mip-link]","click",function(e){t._closeEverything()})}},{key:"updateOtherParts",value:function(){d()(n.prototype.__proto__||i()(n.prototype),"updateOtherParts",this).call(this),this.footer._render(this.currentPageMeta.footer)}},{key:"_scrollBoundary",value:function(){var e=this,n=void 0,t=MIP.util,o=t.rect,i=t.css,a=document.createElement("div"),r=void 0,l=void 0,s=document.body,p=void 0,h=function(e){return e.stopPropagation()};a.setAttribute("mip-shell-scrollboundary",!0),[].slice.call(s.children).forEach(function(e){/^(SCRIPT|IFRAME|MIP-SHELL-INSERVICE|MIP-DATA)/.test(e.nodeName)||a.appendChild(e)}),s.appendChild(a),a.addEventListener("touchstart",function(t){n=t,(p=e.getClosestScrollElement(t.target))&&p.addEventListener("touchmove",h)}),a.addEventListener("touchmove",function(e){var t=e.targetTouches[0],p=n.targetTouches[0];r="BackCompat"===document.compatMode?document.body.clientHeight:document.documentElement.clientHeight,l=l||parseInt(i(s,"paddingTop"),10);var h=s.scrollTop||o.getScrollTop(),c=o.getElementRect(a).height+l;(t.pageY>=p.pageY&&t.clientY>p.clientY&&h<5||t.pageY<p.pageY&&h+r>=c)&&e.preventDefault(),e.stopPropagation()}),a.addEventListener("touchend",function(){p&&p.removeEventListener("touchmove",h)})}}]),n}(window.MIP.builtinComponents.MipShell);n.default=O},17:function(n,t){n.exports=e["babel-runtime/helpers/classCallCheck"]},2:function(n,t){n.exports=e["css-loader/lib/css-base"]},20:function(n,t){n.exports=e["babel-runtime/helpers/toConsumableArray"]},21:function(n,t){n.exports=e["babel-runtime/helpers/createClass"]},22:function(e,n){e.exports=Object.getPrototypeOf},3:function(n,t){n.exports=e["vue-style-loader/lib/addStylesClient"]},42:function(e,n,t){var o=t(1),i=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},47:function(n,t){n.exports=e["babel-runtime/helpers/get"]},49:function(n,t){n.exports=e["babel-runtime/helpers/possibleConstructorReturn"]},50:function(n,t){n.exports=e["babel-runtime/helpers/inherits"]},9:function(e,n,t){e.exports={default:t(42),__esModule:!0}}});n=n.default||n,MIP["function"==typeof n?"registerCustomElement":"registerVueCustomElement"]("mip-shell-xiaoshuo",n)});