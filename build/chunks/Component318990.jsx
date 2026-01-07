/** Chunk was on web.js **/
/** chunk id: 318990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk357355 = require("./357355.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk264247 = require("./264247.js");

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

function p() {
  let e = (0, a.e7)([l.Z], () => l.Z.affinities.slice(0, 3)),
    t = e[0],
    {
      avatarSrc: n,
      eventHandlers: d
    } = (0, s.Z)({
      userId: null == t ? true : t.id,
      size: o.EFr.SIZE_24,
      animateOnHover: true
    }),
    p = e => null != e.globalName ? e.globalName : e.username,
    _ = i.useMemo(() => e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJH, {
      username: p(e[0])
    }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPL, {
      username: p(e[0])
    }) : "", [e]);
  return 0 === e.length ? null : (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(o.qEK, f({
      className: u.__invalid_icon,
      src: n,
      "aria-label": t.username,
      size: o.EFr.SIZE_24
    }, d)), (0, r.jsx)(o.Text, {
      className: u.text,
      variant: "text-sm/normal",
      color: "always-white",
      children: _
    })]
  })
}