/** Chunk was on web.js **/
/** chunk id: 523751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk665786 = require("./665786.jsx"),
  Chunk697725 = require("./697725.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk284363 = require("./284363.js"),
  Chunk854218 = require("./854218.js"),
  Chunk682947 = require("./682947.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73704 = require("./73704.js");

function A(e, t, n) {
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
      A(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let D = {
  [Chunk284363.Q.STAFF]: {
    IconComponent: Chunk481060.Ymb,
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
  },
  [Chunk284363.Q.VERIFIED_AND_PARTNERED]: {
    IconComponent: Chunk481060.kmB,
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
  },
  [Chunk284363.Q.VERIFIED]: {
    IconComponent: Chunk481060.kmB,
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
  },
  [Chunk284363.Q.PARTNERED]: {
    IconComponent: (0, Chunk481060.GSL)(Chunk665786.Z),
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.BRAND_500.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.BRAND_500.css
  },
  [Chunk284363.Q.COMMUNITY]: {
    IconComponent: Chunk481060.tvw,
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: Chunk436774.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    sizeAdjustment: 2
  },
  [Chunk284363.Q.DISCOVERABLE]: {
    IconComponent: Chunk481060.enf,
    foregroundDarkColor: Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: Chunk436774.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: Chunk692547.Z.unsafe_rawColors.WHITE_400.css,
    sizeAdjustment: 2
  },
  [Chunk284363.Q.NONE]: {}
};

function x(e) {
  let {
    guildTraits: t
  } = e;
  return (0, r.jsxs)("div", {
    className: T.tooltipPremiumFooterContainer,
    children: [(0, r.jsxs)("div", {
      className: o()(T.tooltipPremiumFooterSegment, T.tooltipPremiumFooterTierSegment),
      children: [(0, r.jsx)(E.Z, {
        width: 18,
        height: 18,
        className: T.gemIcon
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: b.nW(t.premiumTier)
      })]
    }), (0, r.jsx)("div", {
      className: T.tooltipPremiumFooterSegment,
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

function L(e) {
  let {
    badgeType: t,
    guildTraits: n
  } = e, {
    tooltipTitle: i,
    tooltipSubtitle: a,
    tooltipDescription: o
  } = (0, v.G)(t, n.visibility);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: T.tooltipBodyContainer,
      children: [(0, r.jsx)(u.Text, {
        color: "interactive-active",
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
    }), n.premium ? (0, r.jsx)(x, {
      guildTraits: n
    }) : null]
  })
}

function j(e) {
  let t, n;
  var a, {
    guild: o,
    tooltipColor: l = u.aML.Colors.BRAND,
    tooltipPosition: d,
    className: g,
    flowerStarClassName: E,
    iconClassName: b,
    badgeStrokeColor: v,
    badgeColor: I,
    disableBoostClick: A,
    "aria-label": N = false
  } = e;
  let w = null != (a = R(e, ["guild", "tooltipColor", "tooltipPosition", "className", "flowerStarClassName", "iconClassName", "badgeStrokeColor", "badgeColor", "disableBoostClick", "aria-label"]).size) ? a : 18,
    x = (0, s.e7)([h.default, m.ZP], () => {
      let e = h.default.getCurrentUser();
      return m.ZP.isMember(null == o ? true : o.id, null == e ? true : e.id)
    }),
    j = (0, s.e7)([_.Z], () => _.Z.theme),
    M = (0, O.XX)(o),
    k = (0, y.i)(M),
    U = i.useMemo(() => M.premium && x && !A, [A, M.premium, x]),
    G = i.useCallback(e => {
      U && (e.stopPropagation(), e.preventDefault(), (0, f.f)({
        guildId: o.id,
        location: {
          section: S.jXE.GUILD_HEADER,
          object: S.qAy.BOOST_GEM_ICON
        }
      }))
    }, [U, o.id]);
  if (k === y.Q.NONE) return null;
  let {
    IconComponent: Z,
    backgroundDarkColor: B,
    backgroundLightColor: F,
    foregroundDarkColor: V,
    foregroundLightColor: H,
    premiumBackgroundColor: Y,
    premiumForegroundColor: W,
    sizeAdjustment: K
  } = D[k];
  if (null == Z) return null;
  M.premium && (t = W, n = Y);
  let z = (0, c.wj)(j) ? V : H,
    q = (0, c.wj)(j) ? B : F;
  t = null != t ? t : z, n = null != n ? n : q;
  let Q = Math.floor(.75 * w) - (null != K ? K : 0);
  return (0, r.jsx)(u.aML, {
    color: l,
    position: d,
    "aria-label": N,
    text: (0, r.jsx)(L, {
      badgeType: k,
      guildTraits: M
    }),
    tooltipContentClassName: T.tooltipRemovePadding,
    children: e => (0, r.jsx)(u.P3F, {
      onClick: G,
      tabIndex: U ? 0 : false,
      children: (0, r.jsx)(p.Z, P(C({}, e), {
        className: g,
        flowerStarClassName: E,
        allowFullSizedIcon: true,
        color: null != n ? n : I,
        stroke: v,
        size: w,
        children: (0, r.jsx)(Z, {
          size: "custom",
          width: Q,
          height: Q,
          className: b,
          color: null != t ? t : "currentColor"
        })
      }))
    })
  })
}