/** Chunk was on web.js **/
/** chunk id: 224850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  n: () => g
}), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk560138 = require("./560138.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk115640 = require("./115640.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    smallerText: t,
    className: n,
    textColor: a,
    isApplicationHome: c,
    enablePremiumBrandRefresh: _
  } = e, h = (0, s.bG)([u.A], () => u.A.affinities.slice(0, 3).reverse()), m = h.map((e, t) => (0, r.jsx)(g, {
    affinity: e,
    applyMask: t !== h.length - 1,
    size: _ ? d._3.SIZE_24 : d._3.SIZE_32
  }, e.id)), E = e => null != e.globalName ? e.globalName : e.username, y = i.useMemo(() => 3 === h.length ? f.intl.formatToPlainString(f.t.c7ETJH, {
    username: E(h[2])
  }) : 2 === h.length ? f.intl.formatToPlainString(f.t["st8Rh/"], {
    username: E(h[1]),
    otherUsername: E(h[0])
  }) : 1 === h.length ? f.intl.formatToPlainString(f.t.dpjXPL, {
    username: E(h[0])
  }) : "", [h]);
  if (0 === h.length) return null;

  function b() {
    return _ ? (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: a,
      children: y
    }) : t || c ? (0, r.jsx)(l.Text, {
      variant: c ? "text-sm/normal" : "text-lg/medium",
      color: a,
      children: y
    }) : (0, r.jsx)(l.Heading, {
      variant: "heading-xl/medium",
      color: a,
      children: y
    })
  }
  return (0, r.jsxs)("div", {
    className: o()(_ ? p.bD : p.kL, n, {
      [p.gr]: !_ && c
    }),
    children: [(0, r.jsx)("div", {
      className: p.zc,
      children: m
    }), (0, r.jsx)("div", {
      className: p.FS,
      children: (0, r.jsx)(b, {})
    })]
  })
}

function g(e) {
  let {
    affinity: t,
    applyMask: n,
    size: i
  } = e, {
    avatarSrc: a,
    eventHandlers: s
  } = (0, c.A)({
    userId: null == t ? true : t.id,
    size: i,
    animateOnHover: true
  });
  return (0, r.jsx)(l.euF, h({
    className: o()(p.Kk, {
      [p.dK]: n
    }),
    src: a,
    "aria-label": t.username,
    size: i
  }, s))
}