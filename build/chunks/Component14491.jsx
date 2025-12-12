/** Chunk was on web.js **/
/** chunk id: 14491, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk311819 = require("./311819.js"),
  Chunk981631 = require("./981631.js");

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
  if (__OVERLAY__ || !l.wS || null == t) return null;
  let m = s.default.getCurrentUser(),
    h = (0, a.Ow)(t);

  function g() {
    var e;
    if (null == t) return;
    let n = (0, i.yE)(null != (e = t.flags) ? e : 0, u.udG.EMBEDDED) ? (0, c.H)({
      applicationId: t.id,
      referrerId: null == m ? true : m.id
    }) : (0, c.J)(f({
      id: t.id
    }, h));
    null != n && (0, l.JG)(n, d)
  }
  let E = "copy-app-link-".concat(t.id);
  return (0, r.jsx)(o.sNh, {
    id: E,
    label: n,
    action: g,
    icon: p ? true : o.xPt,
    iconLeft: p ? o.xPt : true,
    focusedClassName: _
  }, E)
}