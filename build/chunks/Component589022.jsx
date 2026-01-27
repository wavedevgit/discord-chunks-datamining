/** Chunk was on web.js **/
/** chunk id: 589022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk215530 = require("./215530.js"),
  Chunk697668 = require("./697668.jsx"),
  Chunk634409 = require("./634409.jsx"),
  Chunk650218 = require("./650218.jsx"),
  Chunk39407 = require("./39407.jsx");

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
  }, [n]), [f, _] = (0, a.A)(t.id);
  return f ? (0, r.jsx)(l.A, p(d({}, e), {
    onHide: _,
    onClickContainer: u
  })) : t.isNonUserBot() ? (0, r.jsx)(s.A, p(d({}, e), {
    onClickContainer: u
  })) : t.bot ? (0, r.jsx)(o.A, p(d({}, e), {
    onClickContainer: u
  })) : (0, r.jsx)(c.A, p(d({}, e), {
    onClickContainer: u
  }))
}