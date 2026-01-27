/** Chunk was on web.js **/
/** chunk id: 634788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GM: () => f,
  wZ: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk580424 = require("./580424.jsx");
require("./148355.jsx");
var Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  let {
    titleWithQuery: t,
    titleWithoutQuery: n,
    query: i,
    getQuery: s,
    headerClassName: l,
    headerTrailingContent: c
  } = e, u = i.length > 0 ? o.intl.formatToPlainString(t, {
    prefix: s(i)
  }) : n;
  return (0, r.jsx)(a.Ay.Title, {
    className: l,
    title: u,
    children: c
  }, "autocomplete-title-".concat(u))
}

function f(e) {
  let {
    query: t,
    selectedIndex: n,
    autocompletes: a,
    onHover: o,
    onClick: s,
    titleWithQuery: c,
    titleWithoutQuery: f,
    Component: p,
    getProps: _,
    getQuery: h,
    key: m,
    indexOffset: g = 0,
    headerClassName: E,
    headerTrailingContent: y,
    footer: b
  } = e;
  if (null == b && (null == a || 0 === a.length)) return null;
  let O = null == a ? true : a.map((e, t) => {
    let r = t + g,
      a = _(e, r);
    return (0, i.createElement)(p, u(l({
      onClick: s,
      onHover: o,
      selected: n === r,
      index: r
    }, a), {
      key: a.key
    }))
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [null != c && null != f ? d({
      titleWithQuery: c,
      titleWithoutQuery: f,
      query: t,
      getQuery: h,
      headerClassName: E,
      headerTrailingContent: y
    }) : null, O, b]
  }, m)
}