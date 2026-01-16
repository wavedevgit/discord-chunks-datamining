/** Chunk was on web.js **/
/** chunk id: 625128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk188785 = require("./188785.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let s = {
  openNativeAppModal(e, t) {
    let a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    i.aA || (r.Z.dispatch({
      type: "NATIVE_APP_MODAL_OPENING",
      code: e
    }), Promise.resolve().then(n.bind(n, 536285)).then(n => {
      let {
        default: r
      } = n;
      r.request(t, o({
        code: e
      }, a)).then(t => {
        var n;
        this.nativeModalOpened(null != (n = null == t ? true : t.code) ? n : e)
      }).catch(() => this.nativeModalOpenFailed(e)).then(() => r.disconnect())
    }))
  },
  nativeModalOpened(e) {
    r.Z.dispatch({
      type: "NATIVE_APP_MODAL_OPENED",
      code: e
    })
  },
  nativeModalOpenFailed(e) {
    r.Z.dispatch({
      type: "NATIVE_APP_MODAL_OPEN_FAILED",
      code: e
    })
  }
}