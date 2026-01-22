/** Chunk was on web.js **/
/** chunk id: 197111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk73153 = require("./73153.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}
require("./436317.js");
let s = {
  openNativeAppModal(e, t) {
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    r.h.dispatch({
      type: "NATIVE_APP_MODAL_OPENING",
      code: e
    }), Promise.resolve().then(n.bind(n, 129014)).then(n => {
      let {
        default: r
      } = n;
      r.request(t, a({
        code: e
      }, i)).then(t => {
        var n;
        this.nativeModalOpened(null != (n = null == t ? true : t.code) ? n : e)
      }).catch(() => this.nativeModalOpenFailed(e)).then(() => r.disconnect())
    })
  },
  nativeModalOpened(e) {
    r.h.dispatch({
      type: "NATIVE_APP_MODAL_OPENED",
      code: e
    })
  },
  nativeModalOpenFailed(e) {
    r.h.dispatch({
      type: "NATIVE_APP_MODAL_OPEN_FAILED",
      code: e
    })
  }
}