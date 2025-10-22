/** Chunk was on web.js **/
/** chunk id: 318990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk357355 = require("./357355.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591315 = require("./591315.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _() {
  let e = (0, Chunk442837.e7)([Chunk357355.Z], () => Chunk357355.Z.affinities.slice(0, 3)),
    t = module[0],
    {
      avatarSrc: n,
      eventHandlers: d
    } = (0, Chunk518950.Z)({
      userId: null == exports ? true : exports.id,
      size: Chunk481060.EFr.SIZE_24,
      animateOnHover: true
    }),
    _ = e => null != e.globalName ? e.globalName : e.username,
    p = Chunk647438.useMemo(() => module.length >= 2 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.c7ETJH, {
      username: _(module[0])
    }) : 1 === module.length ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dpjXPL, {
      username: _(module[0])
    }) : "", [module]);
  return 0 === module.length ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk591315.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.qEK, f({
      className: Chunk591315.__invalid_icon,
      src: require,
      "aria-label": exports.username,
      size: Chunk481060.EFr.SIZE_24
    }, d)), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk591315.text,
      variant: "text-sm/normal",
      color: "always-white",
      children: p
    })]
  })
}