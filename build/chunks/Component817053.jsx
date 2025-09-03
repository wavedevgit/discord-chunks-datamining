/** Chunk was on 30397 **/
/** chunk id: 817053, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  o: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

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

function b(e, t) {
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

function g(e) {
  let {
    imageSrc: t,
    gameName: r
  } = e, [o, i] = a.useState(false), c = null != r ? r : u.intl.string(u.t.GIWFlJ);
  return o || null == t ? (0, n.jsx)("div", {
    role: "img",
    "aria-label": c,
    className: d.fallback,
    children: (0, n.jsx)(l.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: c
    })
  }) : (0, n.jsx)("img", {
    src: t,
    alt: c,
    className: d.gameCoverImage,
    onError: () => i(true),
    onLoad: () => i(false)
  })
}

function p(e) {
  let {
    imageSrc: t,
    gameName: r,
    applicationId: a,
    userId: o,
    className: p,
    hideTooltip: m = false
  } = e, O = (0, s.Z)({
    location: "GameCover",
    applicationId: a,
    source: c.m1.UserProfile,
    sourceUserId: o,
    trackEntryPointImpression: true
  }), y = null != r ? r : u.intl.string(u.t.GIWFlJ), j = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: y
  }), v = e => m ? e() : (0, n.jsx)(l.ua7, {
    text: y,
    children: t => e(t)
  });
  return v(null == O ? e => (0, n.jsx)("div", b(f({
    className: p
  }, e), {
    children: (0, n.jsx)(g, {
      imageSrc: t,
      gameName: r
    })
  })) : e => (0, n.jsx)(l.P3F, b(f({}, e), {
    onClick: O,
    "aria-label": j,
    className: i()(d.clickable, p),
    children: (0, n.jsx)(g, {
      imageSrc: t,
      gameName: r
    })
  })))
}

function m(e) {
  var {
    applicationId: t,
    userId: r,
    className: a,
    disableInteraction: o = false,
    hideTooltip: l
  } = e, c = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let s = i()(d.coverContainer, a);
  return o ? (0, n.jsx)("div", {
    className: s,
    children: (0, n.jsx)(g, f({}, c))
  }) : (0, n.jsx)(p, f({
    className: s,
    applicationId: t,
    userId: r,
    hideTooltip: l
  }, c))
}