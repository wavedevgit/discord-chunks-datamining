/** Chunk was on web.js **/
/** chunk id: 256754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk598117 = require("./598117.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let f = async e => {
  let {
    analyticsLocation: t = null
  } = e, l = u(e, ["analyticsLocation"]);
  a.default.track(s.rMx.OPEN_MODAL, {
    type: "Emoji Studio",
    source: t
  }), await (0, i.ZDy)(async () => {
    let {
      EmojiStudioModal: e
    } = await Promise.all([n.e("63575"), n.e("2262")]).then(n.bind(n, 546200));
    return t => (0, r.jsx)(e, c({}, t, l))
  }, {
    modalKey: o.Hj
  })
}