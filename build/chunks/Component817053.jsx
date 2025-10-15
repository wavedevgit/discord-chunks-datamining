/** Chunk was on 56848 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  o: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function g(e) {
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

function p(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [l, a] = i.useState(false), s = null != n ? n : d.intl.string(d.t.GIWFlF);
  return l || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: f.fallback,
    children: (0, r.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: s,
    className: f.gameCoverImage,
    onError: () => a(true),
    onLoad: () => a(false)
  })
}

function m(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: i,
    userId: l,
    className: g,
    hideTooltip: m = false
  } = e, h = (0, u.Z)({
    location: "GameCover",
    applicationId: i,
    source: c.m1.UserProfile,
    sourceUserId: l,
    trackEntryPointImpression: true
  }), v = null != n ? n : d.intl.string(d.t.GIWFlF), y = d.intl.formatToPlainString(d.t["8QLQB+"], {
    gameName: v
  }), j = e => m ? e : (0, r.jsx)(s.u, {
    text: v,
    children: e
  });
  return j(null == h ? (0, r.jsx)("div", {
    className: g,
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  }) : (0, r.jsx)(o.P3F, {
    onClick: h,
    "aria-label": y,
    className: a()(f.clickable, g),
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  }))
}

function h(e) {
  var {
    applicationId: t,
    userId: n,
    className: i,
    disableInteraction: l = false,
    hideTooltip: s
  } = e, o = function(e, t) {
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
  let c = a()(f.coverContainer, i);
  return l ? (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(p, g({}, o))
  }) : (0, r.jsx)(m, g({
    className: c,
    applicationId: t,
    userId: n,
    hideTooltip: s
  }, o))
}