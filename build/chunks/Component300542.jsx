/** Chunk was on web.js **/
/** chunk id: 300542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk560138 = require("./560138.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk521512 = require("./521512.js");

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
  let e = (0, a.bG)([l.A], () => l.A.affinities.slice(0, 3)),
    t = e[0],
    {
      avatarSrc: n,
      eventHandlers: d
    } = (0, o.A)({
      userId: null == t ? true : t.id,
      size: s._3J.SIZE_24,
      animateOnHover: true
    }),
    p = e => null != e.globalName ? e.globalName : e.username,
    _ = i.useMemo(() => e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJH, {
      username: p(e[0])
    }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPL, {
      username: p(e[0])
    }) : "", [e]);
  return 0 === e.length ? null : (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsx)(s.euF, f({
      className: u.__invalid_icon,
      src: n,
      "aria-label": t.username,
      size: s._3J.SIZE_24
    }, d)), (0, r.jsx)(s.Text, {
      className: u.Qq,
      variant: "text-sm/normal",
      color: "always-white",
      children: _
    })]
  })
}