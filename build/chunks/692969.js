/** Chunk was on web.js **/
/** chunk id: 692969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk858177 = require("./858177.js"),
  Chunk227309 = require("./227309.js"),
  Chunk847521 = require("./847521.js"),
  Chunk60465 = require("./60465.jsx"),
  Chunk611656 = require("./611656.js");

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

function p(e) {
  let {
    onOpened: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    applicationId: n
  } = e, c = (0, i.O)(n), d = r.useMemo(() => null == c ? n : (0, o.bB)(c) ? a.a7 : n, [c, n]), p = (0, l.Ay)(f(u({}, e), {
    applicationId: d
  }));
  return p.shouldOpenGameProfile && null != d ? n => {
    n.stopPropagation(), n.preventDefault(), s.A.openGameProfileModal(f(u({}, e), {
      applicationId: d,
      gameProfileModalChecks: p
    })), null == t || t()
  } : true
}