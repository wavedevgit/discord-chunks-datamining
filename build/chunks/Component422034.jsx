/** Chunk was on web.js **/
/** chunk id: 422034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => g,
  Z: () => m
}), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk357355 = require("./357355.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298522 = require("./298522.js");

function p(e, t, n) {
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
      p(e, t, n[t])
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
    enablePremiumBrandRefresh: p
  } = e, h = (0, s.e7)([u.Z], () => u.Z.affinities.slice(0, 3).reverse()), m = h.map((e, t) => (0, r.jsx)(g, {
    affinity: e,
    applyMask: t !== h.length - 1,
    size: p ? d.EF.SIZE_24 : d.EF.SIZE_32
  }, e.id)), E = e => null != e.globalName ? e.globalName : e.username, b = i.useMemo(() => 3 === h.length ? f.intl.formatToPlainString(f.t.c7ETJH, {
    username: E(h[2])
  }) : 2 === h.length ? f.intl.formatToPlainString(f.t["st8Rh/"], {
    username: E(h[1]),
    otherUsername: E(h[0])
  }) : 1 === h.length ? f.intl.formatToPlainString(f.t.dpjXPL, {
    username: E(h[0])
  }) : "", [h]);
  if (0 === h.length) return null;

  function y() {
    return p ? (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: a,
      children: b
    }) : t || c ? (0, r.jsx)(l.Text, {
      variant: c ? "text-sm/normal" : "text-lg/medium",
      color: a,
      children: b
    }) : (0, r.jsx)(l.Heading, {
      variant: "heading-xl/medium",
      color: a,
      children: b
    })
  }
  return (0, r.jsxs)("div", {
    className: o()(p ? _.premiumBrandRefreshContainer : _.container, n, {
      [_.v2Container]: !p && c
    }),
    children: [(0, r.jsx)("div", {
      className: _.iconContainer,
      children: m
    }), (0, r.jsx)("div", {
      className: _.textContainer,
      children: (0, r.jsx)(y, {})
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
  } = (0, c.Z)({
    userId: null == t ? true : t.id,
    size: i,
    animateOnHover: true
  });
  return (0, r.jsx)(l.qEK, h({
    className: o()(_.icon, {
      [_.mask]: n
    }),
    src: a,
    "aria-label": t.username,
    size: i
  }, s))
}