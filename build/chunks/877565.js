/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  HI: () => f,
  gm: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(588468);
n(419922);
var a = n(388032);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  } = e, u = i.length > 0 ? a.NW.formatToPlainString(t, {
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
    getQuery: h,
    key: m,
    indexOffset: g = 0,
    headerClassName: E,
    headerTrailingContent: v,
    footer: b
  } = e;
  if (null == b && (null == o || 0 === o.length)) return null;
  let y = null == o ? void 0 : o.map((e, t) => {
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
      getQuery: h,
      headerClassName: E,
      headerTrailingContent: v
    }) : null, y, b]
  }, m)
}