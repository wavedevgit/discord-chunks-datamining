/** Chunk was on web.js **/
/** chunk id: 475774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
async function l(e) {
  let t = await (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("57650").then(n.bind(n, 677012));
    return n => (0, r.jsx)(t, s({}, n, e))
  }, {
    onCloseCallback: () => {
      a.Z.dispatch({
        type: "INTERACTION_IFRAME_MODAL_CLOSE",
        applicationId: e.application.id
      })
    }
  });
  a.Z.dispatch({
    type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
    modalKey: t
  })
}