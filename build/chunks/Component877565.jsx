/** Chunk was on web.js **/
/** chunk id: 877565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HI: () => f,
  gm: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk588468 = require("./588468.jsx");
require("./419922.jsx");
var Chunk388032 = require("./388032.jsx");

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
  } = e, u = i.length > 0 ? a.intl.formatToPlainString(t, {
    prefix: s(i)
  }) : n;
  return (0, r.jsx)(o.ZP.Title, {
    className: l,
    title: u,
    children: c
  }, "autocomplete-title-".concat(u))
}

function f(e) {
  let {
    query: t,
    selectedIndex: n,
    autocompletes: o,
    onHover: a,
    onClick: s,
    titleWithQuery: c,
    titleWithoutQuery: f,
    Component: p,
    getProps: _,
    getQuery: m,
    key: h,
    indexOffset: g = 0,
    headerClassName: E,
    headerTrailingContent: b,
    footer: y
  } = e;
  if (null == y && (null == o || 0 === o.length)) return null;
  let O = null == o ? true : o.map((e, t) => {
    let r = t + g,
      o = _(e, r);
    return (0, i.createElement)(p, u(l({
      onClick: s,
      onHover: a,
      selected: n === r,
      index: r
    }, o), {
      key: o.key
    }))
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [null != c && null != f ? d({
      titleWithQuery: c,
      titleWithoutQuery: f,
      query: t,
      getQuery: m,
      headerClassName: E,
      headerTrailingContent: b
    }) : null, O, y]
  }, h)
}