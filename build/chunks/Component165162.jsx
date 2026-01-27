/** Chunk was on web.js **/
/** chunk id: 165162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk735991 = require("./735991.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk342384 = require("./342384.js"),
  Chunk652215 = require("./652215.js");

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

function p(e) {
  let {
    application: t,
    label: n,
    onSuccess: d,
    showIconFirst: p,
    focusedClassName: _
  } = e;
  if (__OVERLAY__ || !l.p5 || null == t) return null;
  let h = s.default.getCurrentUser(),
    m = (0, o.EF)(t);

  function g() {
    var e;
    if (null == t) return;
    let n = (0, i.Lt)(null != (e = t.flags) ? e : 0, u.gfo.EMBEDDED) ? (0, c.W)({
      applicationId: t.id,
      referrerId: null == h ? true : h.id
    }) : (0, c.V)(f({
      id: t.id
    }, m));
    null != n && (0, l.C)(n, d)
  }
  let E = "copy-app-link-".concat(t.id);
  return (0, r.jsx)(a.Drp, {
    id: E,
    label: n,
    action: g,
    icon: p ? true : a.qYV,
    iconLeft: p ? a.qYV : true,
    focusedClassName: _
  }, E)
}