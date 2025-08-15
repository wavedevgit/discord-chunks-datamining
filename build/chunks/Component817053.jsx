/** Chunk was on 12756 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [l, o] = i.useState(false), c = null != n ? n : d.intl.string(d.t.GIWFlJ);
  return l || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": c,
    className: u.fallback,
    children: (0, r.jsx)(a.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: c
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: c,
    className: u.gameCoverImage,
    onError: () => o(true),
    onLoad: () => o(false)
  })
}

function g(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: i,
    userId: l,
    className: g,
    hideTooltip: b = false
  } = e, j = (0, s.Z)({
    location: "GameCover",
    applicationId: i,
    source: c.m1.UserProfile,
    sourceUserId: l,
    trackEntryPointImpression: true
  }), y = null != n ? n : d.intl.string(d.t.GIWFlJ), O = d.intl.formatToPlainString(d.t["8QLQBw"], {
    gameName: y
  }), h = e => b ? e() : (0, r.jsx)(a.ua7, {
    text: y,
    children: t => e(t)
  });
  return h(null == j ? e => (0, r.jsx)("div", p(f({
    className: g
  }, e), {
    children: (0, r.jsx)(m, {
      imageSrc: t,
      gameName: n
    })
  })) : e => (0, r.jsx)(a.P3F, p(f({}, e), {
    onClick: j,
    "aria-label": O,
    className: o()(u.clickable, g),
    children: (0, r.jsx)(m, {
      imageSrc: t,
      gameName: n
    })
  })))
}

function b(e) {
  var {
    applicationId: t,
    userId: n,
    className: i,
    disableInteraction: l = false,
    hideTooltip: a
  } = e, c = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let s = o()(u.coverContainer, i);
  return l ? (0, r.jsx)("div", {
    className: s,
    children: (0, r.jsx)(m, f({}, c))
  }) : (0, r.jsx)(g, f({
    className: s,
    applicationId: t,
    userId: n,
    hideTooltip: a
  }, c))
}