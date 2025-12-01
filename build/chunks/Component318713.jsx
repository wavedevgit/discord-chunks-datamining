/** Chunk was on web.js **/
/** chunk id: 318713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk543388 = require("./543388.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  return new Date(e)
}
let E = Chunk473749.memo(function(e) {
    let {
      children: t,
      className: n,
      compact: a = false,
      timestamp: p,
      timestampFormat: _,
      isVisibleOnlyOnHover: m = false,
      cozyAlt: h = false,
      isInline: E = true,
      id: y,
      isEdited: O = false,
      application: v,
      tooltipPosition: S
    } = e, I = i.useMemo(() => g(p), [p]), T = i.useMemo(() => (0, l.Hg)(I), [I]), A = i.useMemo(() => null != _ ? (0, l.vc)(I, _) : a ? (0, l.vc)(I, "LT") : (0, l.Y4)(I, true), [I, _, a]), C = i.useMemo(() => a ? (0, u.Z)(A) : null, [a, A]), N = i.useMemo(() => O ? d.intl.formatToPlainString(d.t.CDzOFd, {
      timeFormatted: T
    }) : T, [O, T]);
    return (0, r.jsx)("span", {
      className: o()(n, C, {
        [f.timestamp]: true,
        [f.timestampVisibleOnHover]: m,
        [f.timestampInline]: E,
        [f.alt]: h
      }),
      children: null == v ? (0, r.jsx)(s.u, {
        asContainer: true,
        __unsupportedReactNodeAsText: (0, l.vc)(I, "LLLL"),
        "aria-label": N,
        position: S,
        delay: 750,
        children: (0, r.jsx)(b, {
          timeFormatted: A,
          timestamp: I,
          id: y,
          compact: a,
          children: t
        })
      }) : (0, r.jsx)(c.Z, {
        application: v,
        compact: a,
        children: (0, r.jsx)(b, {
          timeFormatted: A,
          timestamp: I,
          id: y,
          compact: a,
          children: t
        })
      })
    })
  }),
  b = Chunk473749.memo(function(e) {
    let {
      tooltipProps: t,
      timeFormatted: n,
      children: i,
      compact: a,
      timestamp: o,
      id: s
    } = e;
    return (0, r.jsx)("time", h(_({}, t), {
      id: s,
      dateTime: o.toISOString(),
      children: null != i ? i : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("i", {
          className: f.separator,
          "aria-hidden": true,
          children: a ? "[" : " — "
        }), n, a && (0, r.jsxs)("i", {
          className: f.separator,
          "aria-hidden": true,
          children: ["]", " "]
        })]
      })
    }))
  }),
  y = E