/** Chunk was on 33131 **/
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
  Chunk713603 = require("./713603.js");

function g(e) {
  for (var a = 1; a < arguments.length; a++) {
    var l = null != arguments[a] ? arguments[a] : {},
      t = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), t.forEach(function(a) {
      var t;
      t = l[a], a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = t
    })
  }
  return e
}

function x(e) {
  let {
    imageSrc: a,
    gameName: l
  } = e, [n, r] = i.useState(false), s = null != l ? l : v.intl.string(v.t.GIWFlF);
  return n || null == a ? (0, t.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: f.fallback,
    children: (0, t.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, t.jsx)("img", {
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
  } = e, I = (0, s.e7)([p.Z], () => p.Z.hasUnsavedChanges()), b = (0, u.Z)({
    location: "GameCover",
    applicationId: n,
    source: d.m1.UserProfile,
    sourceUserId: g,
    trackEntryPointImpression: true
  }), A = null != l ? l : v.intl.string(v.t.GIWFlF), E = v.intl.formatToPlainString(v.t["8QLQB+"], {
    gameName: A
  }), L = i.useCallback(e => {
    if (I) {
      e.preventDefault(), e.stopPropagation(), m.Z.notifyUnsavedWidgets();
      return
    }
    null == b || b(e)
  }, [I, b]), O = e => h ? e : (0, t.jsx)(c.u, {
    text: A,
    ariaHidden: true,
    children: e
  });
  return O(null == b ? (0, t.jsx)(o.tEY, {
    children: (0, t.jsx)("div", {
      ref: N,
      className: j,
      tabIndex: false,
      children: (0, t.jsx)(x, {
        imageSrc: a,
        gameName: l
      })
    })
  }) : (0, t.jsx)(o.P3F, {
    innerRef: N,
    onClick: L,
    "aria-label": E,
    className: r()(f.clickable, j),
    children: (0, t.jsx)(x, {
      imageSrc: a,
      gameName: l
    })
  }))
}

function h(e) {
  var {
    applicationId: a,
    userId: l,
    className: i,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: c
  } = e, d = function(e, a) {
    if (null == e) return {};
    var l, t, i = function(e, a) {
      if (null == e) return {};
      var l, t, i = {},
        n = Object.keys(e);
      for (t = 0; t < n.length; t++) l = n[t], a.indexOf(l) >= 0 || (i[l] = e[l]);
      return i
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (t = 0; t < n.length; t++) l = n[t], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l])
    }
    return i
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
  let u = r()(f.coverContainer, i);
  return n ? (0, t.jsx)(o.tEY, {
    children: (0, t.jsx)("div", {
      ref: c,
      className: u,
      tabIndex: false,
      children: (0, t.jsx)(x, g({}, d))
    })
  }) : (0, t.jsx)(j, g({
    className: u,
    applicationId: a,
    userId: l,
    hideTooltip: s,
    coverRef: c
  }, d))
}