/** Chunk was on 39380 **/
/** chunk id: 817053, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => x,
  o: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function m(e) {
  for (var a = 1; a < arguments.length; a++) {
    var l = null != arguments[a] ? arguments[a] : {},
      i = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), i.forEach(function(a) {
      var i;
      i = l[a], a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = i
    })
  }
  return e
}

function v(e) {
  let {
    imageSrc: a,
    gameName: l
  } = e, [n, r] = t.useState(false), s = null != l ? l : u.intl.string(u.t.GIWFlF);
  return n || null == a ? (0, i.jsx)("div", {
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
    src: a,
    alt: s,
    className: p.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function f(e) {
  let {
    imageSrc: a,
    gameName: l,
    applicationId: t,
    userId: n,
    className: m,
    hideTooltip: f = false,
    coverRef: x
  } = e, j = (0, d.Z)({
    location: "GameCover",
    applicationId: t,
    source: o.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  }), g = null != l ? l : u.intl.string(u.t.GIWFlF), h = u.intl.formatToPlainString(u.t["8QLQB+"], {
    gameName: g
  }), N = e => f ? e : (0, i.jsx)(s.u, {
    text: g,
    children: e
  });
  return N(null == j ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: x,
      className: m,
      tabIndex: false,
      children: (0, i.jsx)(v, {
        imageSrc: a,
        gameName: l
      })
    })
  }) : (0, i.jsx)(c.P3F, {
    innerRef: x,
    onClick: j,
    "aria-label": h,
    className: r()(p.clickable, m),
    children: (0, i.jsx)(v, {
      imageSrc: a,
      gameName: l
    })
  }))
}

function x(e) {
  var {
    applicationId: a,
    userId: l,
    className: t,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: o
  } = e, d = function(e, a) {
    if (null == e) return {};
    var l, i, t = function(e, a) {
      if (null == e) return {};
      var l, i, t = {},
        n = Object.keys(e);
      for (i = 0; i < n.length; i++) l = n[i], a.indexOf(l) >= 0 || (t[l] = e[l]);
      return t
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (i = 0; i < n.length; i++) l = n[i], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (t[l] = e[l])
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
    applicationId: a,
    userId: l,
    hideTooltip: s,
    coverRef: o
  }, d))
}