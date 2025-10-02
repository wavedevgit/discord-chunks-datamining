/** Chunk was on 56848 **/
/** chunk id: 817053, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  o: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279280 = require("./279280.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function h(e) {
  let {
    imageSrc: t,
    gameName: r
  } = e, [a, l] = i.useState(false), o = null != r ? r : u.intl.string(u.t.GIWFlJ);
  return a || null == t ? (0, n.jsx)("div", {
    role: "img",
    "aria-label": o,
    className: d.fallback,
    children: (0, n.jsx)(s.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: o
    })
  }) : (0, n.jsx)("img", {
    src: t,
    alt: o,
    className: d.gameCoverImage,
    onError: () => l(true),
    onLoad: () => l(false)
  })
}

function p(e) {
  let {
    imageSrc: t,
    gameName: r,
    applicationId: i,
    userId: a,
    className: p,
    hideTooltip: m = false
  } = e, v = (0, c.Z)({
    location: "GameCover",
    applicationId: i,
    source: o.m1.UserProfile,
    sourceUserId: a,
    trackEntryPointImpression: true
  }), b = null != r ? r : u.intl.string(u.t.GIWFlJ), y = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: b
  }), O = e => m ? e() : (0, n.jsx)(s.ua7, {
    text: b,
    children: t => e(t)
  });
  return O(null == v ? e => (0, n.jsx)("div", g(f({
    className: p
  }, e), {
    children: (0, n.jsx)(h, {
      imageSrc: t,
      gameName: r
    })
  })) : e => (0, n.jsx)(s.P3F, g(f({}, e), {
    onClick: v,
    "aria-label": y,
    className: l()(d.clickable, p),
    children: (0, n.jsx)(h, {
      imageSrc: t,
      gameName: r
    })
  })))
}

function m(e) {
  var {
    applicationId: t,
    userId: r,
    className: i,
    disableInteraction: a = false,
    hideTooltip: s
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let c = l()(d.coverContainer, i);
  return a ? (0, n.jsx)("div", {
    className: c,
    children: (0, n.jsx)(h, f({}, o))
  }) : (0, n.jsx)(p, f({
    className: c,
    applicationId: t,
    userId: r,
    hideTooltip: s
  }, o))
}