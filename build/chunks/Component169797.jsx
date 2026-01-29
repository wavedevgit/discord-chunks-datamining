/** Chunk was on web.js **/
/** chunk id: 169797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jg: () => E,
  cy: () => g,
  oH: () => y,
  s3: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk500380 = require("./500380.js"),
  Chunk518977 = require("./518977.js"),
  Chunk683433 = require("./683433.jsx"),
  Chunk996541 = require("./996541.js");

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
    gradientColor: t,
    title: n,
    headerBadgeText: l,
    headerBadgeIcon: u,
    countryCode: f
  } = e, h = _(e, ["gradientColor", "title", "headerBadgeText", "headerBadgeIcon", "countryCode"]), m = i.useCallback(() => null == f ? null : (0, r.jsx)("img", {
    alt: "",
    className: c.bI,
    src: (0, o.t)(f)
  }), [f]), g = i.useMemo(() => {
    if (null != l) return {
      icon: u,
      type: {
        text: l
      },
      variant: "expressive"
    }
  }, [l, u]);
  return (0, r.jsx)(a.rQ0, p(d({}, h), {
    badge: g,
    badgePosition: "end",
    gradientColor: t,
    titleTextVariant: "heading-lg/semibold",
    alignCenter: false,
    title: n,
    subtitle: null != f ? {
      text: (0, s.Gw)((0, s.ni)(f)),
      leadingIcon: m
    } : true
  }))
}

function g(e) {
  let {
    onBackClick: t,
    primaryButtonProps: n
  } = e, {
    onClick: i,
    text: o,
    loading: s,
    disabled: c,
    icon: u
  } = n;
  return (0, r.jsx)(a.H7u, {
    leading: null != t ? (0, r.jsx)(l.A, {
      onClick: t
    }) : true,
    actions: [{
      variant: "expressive",
      text: o,
      onClick: i,
      loading: s,
      disabled: c,
      icon: u
    }],
    actionsFullWidth: false
  })
}

function E(e) {
  let {
    children: t,
    size: n = "md"
  } = e, i = _(e, ["children", "size"]);
  return (0, r.jsx)(a.dWK, p(d({
    size: n
  }, i), {
    children: t
  }))
}

function y(e) {
  let {
    title: t,
    gradientColor: n = "purple",
    countryCode: i,
    headerBadgeText: o,
    headerBadgeIcon: s,
    onBackClick: l,
    primaryButtonProps: c,
    children: u
  } = e, f = _(e, ["title", "gradientColor", "countryCode", "headerBadgeText", "headerBadgeIcon", "onBackClick", "primaryButtonProps", "children"]);
  return (0, r.jsxs)(a.dWK, p(d({}, f), {
    children: [(0, r.jsx)(m, {
      gradientColor: n,
      title: t,
      countryCode: i,
      headerBadgeText: o,
      headerBadgeIcon: s
    }), (0, r.jsx)(a.cwr, {
      children: u
    }), (0, r.jsx)(g, {
      onBackClick: l,
      primaryButtonProps: c
    })]
  }))
}