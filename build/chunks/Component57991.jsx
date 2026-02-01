/** Chunk was on web.js **/
/** chunk id: 57991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk496885 = require("./496885.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816166 = require("./816166.jsx"),
  Chunk813098 = require("./813098.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk426983 = require("./426983.js"),
  Chunk176128 = require("./176128.js"),
  Chunk981883 = require("./981883.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106967 = require("./106967.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = P(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let D = {
  [Chunk426983._.STAFF]: {
    IconComponent: Chunk397927.VaJ,
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css
  },
  [Chunk426983._.VERIFIED_AND_PARTNERED]: {
    IconComponent: Chunk397927.Uzd,
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css
  },
  [Chunk426983._.VERIFIED]: {
    IconComponent: Chunk397927.Uzd,
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.GREEN_360.css
  },
  [Chunk426983._.PARTNERED]: {
    IconComponent: (0, Chunk397927.kHD)(Chunk816166.A),
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.BRAND_500.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.BRAND_500.css
  },
  [Chunk426983._.COMMUNITY]: {
    IconComponent: Chunk397927.fAJ,
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: Chunk404374.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    sizeAdjustment: 2
  },
  [Chunk426983._.DISCOVERABLE]: {
    IconComponent: Chunk397927.L_e,
    foregroundDarkColor: Chunk827734.A.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundDarkColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    backgroundLightColor: Chunk827734.A.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: Chunk404374.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
    sizeAdjustment: 2
  },
  [Chunk426983._.NONE]: {}
};

function L(e) {
  let {
    guildTraits: t
  } = e;
  return (0, r.jsxs)("div", {
    className: S.V8,
    children: [(0, r.jsxs)("div", {
      className: o()(S.f, S.N5),
      children: [(0, r.jsx)(E.A, {
        width: 18,
        height: 18,
        className: S.F8
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: y.gb(t.premiumTier)
      })]
    }), (0, r.jsx)("div", {
      className: S.f,
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: I.intl.format(I.t["dR/SVH"], {
          count: t.premiumSubscriberCount
        })
      })
    })]
  })
}

function x(e) {
  let {
    badgeType: t,
    guildTraits: n
  } = e, {
    tooltipTitle: i,
    tooltipSubtitle: a,
    tooltipDescription: o
  } = (0, v.V)(t, n.visibility);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.Rf,
      children: [(0, r.jsx)(u.Text, {
        color: "interactive-text-active",
        variant: "text-xs/bold",
        children: i
      }), null != a ? (0, r.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: a
      }) : null, null != o ? (0, r.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: o
      }) : null]
    }), n.premium ? (0, r.jsx)(L, {
      guildTraits: n
    }) : null]
  })
}

function M(e) {
  var t;
  let n, a, {
      guild: o,
      tooltipColor: l = u.STz.Colors.BRAND,
      tooltipPosition: d,
      className: g,
      flowerStarClassName: E,
      iconClassName: y,
      badgeStrokeColor: v,
      badgeColor: I,
      disableBoostClick: T,
      "aria-label": N = false
    } = e,
    P = null != (t = R(e, ["guild", "tooltipColor", "tooltipPosition", "className", "flowerStarClassName", "iconClassName", "badgeStrokeColor", "badgeColor", "disableBoostClick", "aria-label"]).size) ? t : 18,
    L = (0, s.bG)([m.default, h.Ay], () => {
      let e = m.default.getCurrentUser();
      return h.Ay.isMember(null == o ? true : o.id, null == e ? true : e.id)
    }),
    M = (0, s.bG)([_.A], () => _.A.theme),
    j = (0, O.Jp)(o),
    k = (0, b.K)(j),
    U = i.useMemo(() => j.premium && L && !T, [T, j.premium, L]),
    G = i.useCallback(e => {
      U && (e.stopPropagation(), e.preventDefault(), (0, f.K)({
        guildId: o.id,
        location: {
          section: A.JJy.GUILD_HEADER,
          object: A.ZSU.BOOST_GEM_ICON
        }
      }))
    }, [U, o.id]);
  if (k === b._.NONE) return null;
  let {
    IconComponent: V,
    backgroundDarkColor: F,
    backgroundLightColor: B,
    foregroundDarkColor: H,
    foregroundLightColor: Y,
    premiumBackgroundColor: W,
    premiumForegroundColor: K,
    sizeAdjustment: z
  } = D[k];
  if (null == V) return null;
  j.premium && (n = K, a = W);
  let q = (0, c.Mw)(M) ? H : Y,
    Z = (0, c.Mw)(M) ? F : B;
  n = null != n ? n : q, a = null != a ? a : Z;
  let Q = Math.floor(.75 * P) - (null != z ? z : 0);
  return (0, r.jsx)(u.STz, {
    color: l,
    position: d,
    "aria-label": N,
    text: (0, r.jsx)(x, {
      badgeType: k,
      guildTraits: j
    }),
    tooltipContentClassName: S.Hj,
    children: e => (0, r.jsx)(u.DUT, {
      onClick: G,
      tabIndex: U ? 0 : false,
      children: (0, r.jsx)(p.A, w(C({}, e), {
        className: g,
        flowerStarClassName: E,
        allowFullSizedIcon: true,
        color: null != a ? a : I,
        stroke: v,
        size: P,
        children: (0, r.jsx)(V, {
          size: "custom",
          width: Q,
          height: Q,
          className: y,
          color: null != n ? n : "currentColor"
        })
      }))
    })
  })
}