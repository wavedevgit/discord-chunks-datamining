/** Chunk was on web.js **/
/** chunk id: 799592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => r
});
let r = {
  binds: ["shift+f10"],
  comboKeysBindGlobal: true,
  action() {
    let e = document.activeElement;
    return null != e && e !== document.body && (e.dispatchEvent(new MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: 0,
      clientY: 0
    })), false)
  }
}