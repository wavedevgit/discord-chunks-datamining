/** Chunk was on web.js **/
/** chunk id: 458034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => m,
  ZP: () => h,
  s$: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk275759 = require("./275759.js"),
  Chunk388032 = require("./388032.jsx");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = "guild-connection-roles";

function _() {
  return {
    modalKey: p,
    contextKey: a.z1l,
    onCloseRequest: () => {
      (0, a.Mr3)(p, a.z1l)
    }
  }
}

function m(e) {
  (0, a.ZDy)(async () => {
    let {
      default: t
    } = await n.e("40897").then(n.bind(n, 507294));
    return n => (0, r.jsx)(t, f(u({}, n), {
      guildId: e
    }))
  }, _())
}

function h(e) {
  return (0, i.e7)([o.Z], () => (0, s.kQ)(o.Z.getSortedRoles(e.id)), [e]) ? (0, r.jsx)(a.sNh, {
    id: "guild-connection-roles",
    label: l.intl.string(l.t.ghtnss),
    icon: a.xPt,
    action: () => m(e.id)
  }) : null
}