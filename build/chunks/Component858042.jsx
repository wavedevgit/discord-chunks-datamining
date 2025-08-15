/** Chunk was on web.js **/
/** chunk id: 858042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

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

function l(e) {
  let {
    applicationId: t,
    viewId: o,
    showOutdatedInfoOption: l = true
  } = e;
  if (null == t) return null;
  let c = () => (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("46923").then(n.bind(n, 55396));
    return n => (0, r.jsx)(e, s({
      showOutdatedInfoOption: l,
      applicationId: t,
      viewId: o
    }, n))
  });
  return (0, r.jsx)(i.sNh, {
    id: "game-profile-something-wrong",
    label: a.intl.string(a.t.qP2cXV),
    action: c
  })
}