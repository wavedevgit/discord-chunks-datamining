/** Chunk was on 39380 **/
/** chunk id: 817053, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  o: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function g(e) {
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

function x(e) {
  let {
    imageSrc: a,
    gameName: l
  } = e, [n, r] = t.useState(false), s = null != l ? l : v.intl.string(v.t.GIWFlF);
  return n || null == a ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: f.fallback,
    children: (0, i.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, i.jsx)("img", {
    src: a,
    alt: s,
    className: f.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function j(e) {
  let {
    imageSrc: a,
    gameName: l,
    applicationId: n,
    userId: g,
    className: j,
    hideTooltip: h = false,
    coverRef: N
  } = e, A = (0, s.e7)([m.Z], () => m.Z.hasSaveablePendingChanges()), I = (0, u.Z)({
    location: "GameCover",
    applicationId: n,
    source: d.m1.UserProfile,
    sourceUserId: g,
    trackEntryPointImpression: true
  }), E = null != l ? l : v.intl.string(v.t.GIWFlF), b = v.intl.formatToPlainString(v.t["8QLQB+"], {
    gameName: E
  }), L = t.useCallback(e => {
    if (A) {
      e.preventDefault(), e.stopPropagation(), p.Z.notifyPendingWidgets();
      return
    }
    null == I || I(e)
  }, [A, I]), O = e => h ? e : (0, i.jsx)(c.u, {
    text: E,
    ariaHidden: true,
    children: e
  });
  return O(null == I ? (0, i.jsx)(o.tEY, {
    children: (0, i.jsx)("div", {
      ref: N,
      className: j,
      tabIndex: false,
      children: (0, i.jsx)(x, {
        imageSrc: a,
        gameName: l
      })
    })
  }) : (0, i.jsx)(o.P3F, {
    innerRef: N,
    onClick: L,
    "aria-label": b,
    className: r()(f.clickable, j),
    children: (0, i.jsx)(x, {
      imageSrc: a,
      gameName: l
    })
  }))
}

function h(e) {
  var {
    applicationId: a,
    userId: l,
    className: t,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: c
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
  let u = r()(f.coverContainer, t);
  return n ? (0, i.jsx)(o.tEY, {
    children: (0, i.jsx)("div", {
      ref: c,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(x, g({}, d))
    })
  }) : (0, i.jsx)(j, g({
    className: u,
    applicationId: a,
    userId: l,
    hideTooltip: s,
    coverRef: c
  }, d))
}