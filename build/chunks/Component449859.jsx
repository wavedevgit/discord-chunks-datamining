/** Chunk was on web.js **/
/** chunk id: 449859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk405269 = require("./405269.js"),
  Chunk355938 = require("./355938.jsx"),
  Chunk943815 = require("./943815.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js");

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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  return new Date(e)
}
let E = Chunk64700.memo(function(e) {
    let {
      children: t,
      className: n,
      compact: a = false,
      timestamp: p,
      timestampFormat: _,
      isVisibleOnlyOnHover: h = false,
      cozyAlt: m = false,
      isInline: E = true,
      id: b,
      isEdited: O = false,
      application: v,
      tooltipPosition: A
    } = e, I = i.useMemo(() => g(p), [p]), S = i.useMemo(() => (0, l.K7)(I), [I]), T = i.useMemo(() => null != _ ? (0, l.i$)(I, _) : a ? (0, l.i$)(I, "LT") : (0, l.mk)(I, true), [I, _, a]), C = i.useMemo(() => a ? (0, u.A)(T) : null, [a, T]), N = i.useMemo(() => O ? d.intl.formatToPlainString(d.t.CDzOFd, {
      timeFormatted: S
    }) : S, [O, S]);
    return (0, r.jsx)("span", {
      className: o()(n, C, {
        [f.vE]: true,
        [f.ET]: h,
        [f.YQ]: E,
        [f.CC]: m
      }),
      children: null == v ? (0, r.jsx)(s.m, {
        asContainer: true,
        __unsupportedReactNodeAsText: (0, l.i$)(I, "LLLL"),
        "aria-label": N,
        position: A,
        delay: 750,
        children: (0, r.jsx)(y, {
          timeFormatted: T,
          timestamp: I,
          id: b,
          compact: a,
          children: t
        })
      }) : (0, r.jsx)(c.A, {
        application: v,
        compact: a,
        children: (0, r.jsx)(y, {
          timeFormatted: T,
          timestamp: I,
          id: b,
          compact: a,
          children: t
        })
      })
    })
  }),
  y = Chunk64700.memo(function(e) {
    let {
      tooltipProps: t,
      timeFormatted: n,
      children: i,
      compact: a,
      timestamp: o,
      id: s
    } = e;
    return (0, r.jsx)("time", m(_({}, t), {
      id: s,
      dateTime: o.toISOString(),
      children: null != i ? i : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("i", {
          className: f.me,
          "aria-hidden": true,
          children: a ? "[" : " — "
        }), n, a && (0, r.jsxs)("i", {
          className: f.me,
          "aria-hidden": true,
          children: ["]", " "]
        })]
      })
    }))
  }),
  b = E