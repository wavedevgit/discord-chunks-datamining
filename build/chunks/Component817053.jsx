/** Chunk was on 49902 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  o: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279280 = require("./279280.js");

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

function g(e, t) {
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

function h(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [l, a] = i.useState(false), s = null != n ? n : u.intl.string(u.t.GIWFlJ);
  return l || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: d.fallback,
    children: (0, r.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: s,
    className: d.gameCoverImage,
    onError: () => a(true),
    onLoad: () => a(false)
  })
}

function p(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: i,
    userId: l,
    className: p,
    hideTooltip: m = false
  } = e, v = (0, c.Z)({
    location: "GameCover",
    applicationId: i,
    source: s.m1.UserProfile,
    sourceUserId: l,
    trackEntryPointImpression: true
  }), b = null != n ? n : u.intl.string(u.t.GIWFlJ), y = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: b
  }), j = e => m ? e() : (0, r.jsx)(o.ua7, {
    text: b,
    children: t => e(t)
  });
  return j(null == v ? e => (0, r.jsx)("div", g(f({
    className: p
  }, e), {
    children: (0, r.jsx)(h, {
      imageSrc: t,
      gameName: n
    })
  })) : e => (0, r.jsx)(o.P3F, g(f({}, e), {
    onClick: v,
    "aria-label": y,
    className: a()(d.clickable, p),
    children: (0, r.jsx)(h, {
      imageSrc: t,
      gameName: n
    })
  })))
}

function m(e) {
  var {
    applicationId: t,
    userId: n,
    className: i,
    disableInteraction: l = false,
    hideTooltip: o
  } = e, s = function(e, t) {
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
  let c = a()(d.coverContainer, i);
  return l ? (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(h, f({}, s))
  }) : (0, r.jsx)(p, f({
    className: c,
    applicationId: t,
    userId: n,
    hideTooltip: o
  }, s))
}