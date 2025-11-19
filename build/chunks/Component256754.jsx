/** Chunk was on web.js **/
/** chunk id: 256754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk598117 = require("./598117.js"),
  Chunk457574 = require("./457574.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = async e => {
  let {
    analyticsLocation: t = null
  } = e, c = d(e, ["analyticsLocation"]);
  a.default.track(l.rMx.OPEN_MODAL, {
    type: "Emoji Studio",
    source: t
  }), await (0, i.ZDy)(async () => {
    let {
      EmojiStudioModal: e
    } = await n.e("43491").then(n.bind(n, 546200));
    return t => (0, r.jsx)(e, u({}, t, c))
  }, {
    modalKey: o.Hj,
    onCloseRequest: () => {
      (0, s.E)()
    }
  })
}