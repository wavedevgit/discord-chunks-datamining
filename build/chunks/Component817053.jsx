/** Chunk was on 39380 **/
/** chunk id: 817053, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  o: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function m(e) {
  for (var l = 1; l < arguments.length; l++) {
    var a = null != arguments[l] ? arguments[l] : {},
      i = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), i.forEach(function(l) {
      var i;
      i = a[l], l in e ? Object.defineProperty(e, l, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = i
    })
  }
  return e
}

function v(e) {
  let {
    imageSrc: l,
    gameName: a
  } = e, [n, r] = t.useState(false), s = null != a ? a : u.intl.string(u.t.GIWFlF);
  return n || null == l ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: p.fallback,
    children: (0, i.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, i.jsx)("img", {
    src: l,
    alt: s,
    className: p.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function f(e) {
  let {
    imageSrc: l,
    gameName: a,
    applicationId: t,
    userId: n,
    className: m,
    hideTooltip: f = false,
    coverRef: h
  } = e, x = (0, d.Z)({
    location: "GameCover",
    applicationId: t,
    source: o.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  }), j = null != a ? a : u.intl.string(u.t.GIWFlF), g = u.intl.formatToPlainString(u.t["8QLQB+"], {
    gameName: j
  }), A = e => f ? e : (0, i.jsx)(s.u, {
    text: j,
    children: e
  });
  return A(null == x ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: h,
      className: m,
      tabIndex: false,
      children: (0, i.jsx)(v, {
        imageSrc: l,
        gameName: a
      })
    })
  }) : (0, i.jsx)(c.P3F, {
    innerRef: h,
    onClick: x,
    "aria-label": g,
    className: r()(p.clickable, m),
    children: (0, i.jsx)(v, {
      imageSrc: l,
      gameName: a
    })
  }))
}

function h(e) {
  var {
    applicationId: l,
    userId: a,
    className: t,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: o
  } = e, d = function(e, l) {
    if (null == e) return {};
    var a, i, t = function(e, l) {
      if (null == e) return {};
      var a, i, t = {},
        n = Object.keys(e);
      for (i = 0; i < n.length; i++) a = n[i], l.indexOf(a) >= 0 || (t[a] = e[a]);
      return t
    }(e, l);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (i = 0; i < n.length; i++) a = n[i], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a])
    }
    return t
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
  let u = r()(p.coverContainer, t);
  return n ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: o,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(v, m({}, d))
    })
  }) : (0, i.jsx)(f, m({
    className: u,
    applicationId: l,
    userId: a,
    hideTooltip: s,
    coverRef: o
  }, d))
}