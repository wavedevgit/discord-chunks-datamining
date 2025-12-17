/** Chunk was on web.js **/
/** chunk id: 726033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk788111 = require("./788111.js"),
  Chunk601665 = require("./601665.jsx"),
  Chunk103113 = require("./103113.jsx"),
  Chunk862077 = require("./862077.jsx"),
  Chunk738953 = require("./738953.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    user: t,
    onClickContainer: n
  } = e, u = i.useCallback(e => {
    null == n || n(e), e.stopPropagation()
  }, [n]), [f, _] = (0, a.Z)(t.id);
  return f ? (0, r.jsx)(l.Z, p(d({}, e), {
    onHide: _,
    onClickContainer: u
  })) : t.isNonUserBot() ? (0, r.jsx)(s.Z, p(d({}, e), {
    onClickContainer: u
  })) : t.bot ? (0, r.jsx)(o.Z, p(d({}, e), {
    onClickContainer: u
  })) : (0, r.jsx)(c.Z, p(d({}, e), {
    onClickContainer: u
  }))
}