/** Chunk was on web.js **/
/** chunk id: 783878, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk389723 = require("./389723.jsx"),
  Chunk332661 = require("./332661.jsx"),
  Chunk700713 = require("./700713.js"),
  Chunk526008 = require("./526008.js");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    hideTags: t,
    wrapTags: n,
    maxOptionsVisible: c = 5
  } = e, d = p(e, ["hideTags", "wrapTags", "maxOptionsVisible"]), {
    fieldProps: _
  } = (0, i.ndh)(d), {
    disabled: h,
    required: m,
    onQueryChange: g,
    onKeyDown: E,
    onFocus: y,
    onBlur: b,
    placeholder: O,
    closeOnSelect: v,
    selectionMode: A
  } = d, {
    isOpen: I,
    setIsOpen: S,
    refs: T,
    floatingStyles: C,
    getFloatingProps: N,
    getReferenceProps: R,
    transitionStyles: w
  } = (0, o.G)();
  return (0, r.jsxs)(a.iS, f(u({}, d), {
    isCollapsible: true,
    isOpen: I,
    setIsOpen: S,
    closeOnSelect: null != v ? v : "single" === A,
    children: [(0, r.jsx)(a.a3, f(u({
      hideTags: t,
      required: m,
      disabled: h,
      wrapTags: n,
      showChevronButton: true,
      ref: T.setReference,
      placeholder: O
    }, _, R()), {
      onKeyDown: E,
      onBlur: b,
      onQueryChange: g,
      onFocus: y
    })), I && (0, r.jsx)("div", f(u({
      ref: T.setFloating,
      className: l.S_,
      style: u({}, C, w)
    }, N()), {
      children: (0, r.jsx)(a.X2, {
        renderListItem: e => (0, r.jsx)(s.c, u({}, e)),
        maxVisibleItems: c
      })
    }))]
  }))
}