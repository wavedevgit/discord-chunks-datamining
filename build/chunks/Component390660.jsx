/** Chunk was on web.js **/
/** chunk id: 390660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => u,
  u: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk80556 = require("./80556.js");

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
let l = "RESTRICTED_HOURS_MODAL_KEY";
async function c() {
  await (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("55764").then(n.bind(n, 295615));
    return t => (0, r.jsx)(e, s({}, t))
  }, {
    modalKey: l,
    dismissable: false,
    backdropStyle: i.F2Z.LIGHTBOX,
    Layer: a.Ay
  })
}

function u() {
  (0, i.OoC)(l)
}