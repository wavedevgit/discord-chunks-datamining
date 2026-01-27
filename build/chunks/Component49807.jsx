/** Chunk was on web.js **/
/** chunk id: 49807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js");

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
  let t = await (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("28936"), n.e("18687")]).then(n.bind(n, 144482));
    return n => (0, r.jsx)(t, s({}, n, e))
  }, {
    onCloseCallback: () => {
      a.h.dispatch({
        type: "INTERACTION_IFRAME_MODAL_CLOSE",
        applicationId: e.application.id
      })
    }
  });
  a.h.dispatch({
    type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
    modalKey: t
  })
}