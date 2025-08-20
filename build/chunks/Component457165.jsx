/** Chunk was on web.js **/
/** chunk id: 457165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

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

function l() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("10165").then(require.bind(require, 166335));
    return t => (0, r.jsx)(e, s({
      analyticsSource: a.Sbl.VOICE_FILTERS,
      analyticsLocation: {
        section: a.jXE.VOICE_FILTERS_UPSELL_MODAL,
        object: a.qAy.BUTTON_CTA
      }
    }, t))
  })
}