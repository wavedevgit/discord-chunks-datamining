/** Chunk was on web.js **/
/** chunk id: 6745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk507274 = require("./507274.jsx"),
  Chunk838331 = require("./838331.jsx"),
  Chunk938922 = require("./938922.js");

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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    children: t,
    placeholder: n,
    value: o,
    onChange: u,
    onClose: f,
    className: m,
    multiSelect: h,
    emptyStateText: g,
    emptyStateHeader: E,
    onQueryChange: b
  } = e, y = _(e, ["children", "placeholder", "value", "onChange", "onClose", "className", "multiSelect", "emptyStateText", "emptyStateHeader", "onQueryChange"]);
  let O = i.useCallback(e => {
    u(e), h || null == f || f()
  }, [u, f, h]);
  return (0, r.jsx)(s.V, {
    className: a()(c.container, c.scroller, m),
    children: (0, r.jsx)(l.hQ, p(d({}, y), {
      value: o,
      multiSelect: h,
      onChange: O,
      placeholder: n,
      children: t,
      listClassName: c.list,
      emptyStateText: g,
      emptyStateHeader: E,
      onQueryChange: b
    }))
  })
}