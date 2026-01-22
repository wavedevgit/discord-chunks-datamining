/** Chunk was on web.js **/
/** chunk id: 914427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk305866 = require("./305866.jsx"),
  Chunk103552 = require("./103552.jsx"),
  Chunk291611 = require("./291611.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    children: t,
    placeholder: n,
    value: a,
    onChange: u,
    onClose: f,
    className: h,
    multiSelect: m,
    emptyStateText: g,
    emptyStateHeader: E,
    onQueryChange: b
  } = e, y = _(e, ["children", "placeholder", "value", "onChange", "onClose", "className", "multiSelect", "emptyStateText", "emptyStateHeader", "onQueryChange"]), O = i.useCallback(e => {
    u(e), m || null == f || f()
  }, [u, f, m]);
  return (0, r.jsx)(o.l, {
    className: s()(c.kL, c.XG, h),
    children: (0, r.jsx)(l.G3, p(d({}, y), {
      value: a,
      multiSelect: m,
      onChange: O,
      placeholder: n,
      children: t,
      listClassName: c.p_,
      emptyStateText: g,
      emptyStateHeader: E,
      onQueryChange: b
    }))
  })
}