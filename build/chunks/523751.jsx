/** Chunk was on web.js **/
/** chunk id: 523751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk623624 = require("./623624.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk665786 = require("./665786.js"),
  Chunk697725 = require("./697725.js"),
  Chunk267642 = require("./267642.js"),
  Chunk284363 = require("./284363.js"),
  Chunk854218 = require("./854218.js"),
  Chunk682947 = require("./682947.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk90235 = require("./90235.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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

function L(e) {
  let {
    guildTraits: t
  } = e;
  return <div className={S.tooltipPremiumFooterContainer}>{<div className={a()(S.tooltipPremiumFooterSegment, S.tooltipPremiumFooterTierSegment)}>{<E.Z width={18} height={18} className={S.gemIcon} />}{<u.Text variant={"text-xs/semibold"} color={"always-white"}>{b.nW(t.premiumTier)}</u.Text>}</div>}{<div className={S.tooltipPremiumFooterSegment}><u.Text variant={"text-xs/semibold"} color={"always-white"}>{T.intl.format(T.t["dR/SVF"], {
          count: t.premiumSubscriberCount
        })}</u.Text></div>}</div>
}

function x(e) {
  let {
    badgeType: t,
    guildTraits: n
  } = e, {
    tooltipTitle: i,
    tooltipSubtitle: o,
    tooltipDescription: a
  } = (0, v.G)(t, n.visibility);
  return <r.Fragment>{<div className={S.tooltipBodyContainer}>{<u.Text color={"interactive-active"} variant={"text-xs/bold"}>{i}</u.Text>}{null != o ? <u.Text color={"text-muted"} variant={"text-xs/medium"}>{o}</u.Text> : null}{null != a ? <u.Text color={"text-muted"} variant={"text-xs/medium"}>{a}</u.Text> : null}</div>}{n.premium ? <L guildTraits={n} /> : null}</r.Fragment>
}

function M(e) {
  let t, n;
  var o, {
    guild: a,
    tooltipColor: l = u.ua7.Colors.BRAND,
    tooltipPosition: d,
    className: g,
    flowerStarClassName: E,
    iconClassName: b,
    badgeStrokeColor: v,
    badgeColor: T,
    disableBoostClick: A,
    "aria-label": C = false
  } = e;
  let w = null != (o = P(e, ["guild", "tooltipColor", "tooltipPosition", "className", "flowerStarClassName", "iconClassName", "badgeStrokeColor", "badgeColor", "disableBoostClick", "aria-label"]).size) ? o : 18,
    L = (0, s.e7)([m.default, h.ZP], () => {
      let e = m.default.getCurrentUser();
      return h.ZP.isMember(null == a ? true : a.id, null == e ? true : e.id)
    }),
    M = (0, s.e7)([p.Z], () => p.Z.theme),
    k = (0, O.XX)(a),
    j = (0, y.i)(k),
    U = i.useMemo(() => k.premium && L && !A, [A, k.premium, L]),
    G = i.useCallback(e => {
      U && (e.stopPropagation(), e.preventDefault(), (0, f.f)({
        guildId: a.id,
        location: {
          section: I.jXE.GUILD_HEADER,
          object: I.qAy.BOOST_GEM_ICON
        }
      }))
    }, [U, a.id]);
  if (j === y.Q.NONE) return null;
  let {
    IconComponent: B,
    backgroundDarkColor: Z,
    backgroundLightColor: F,
    foregroundDarkColor: V,
    foregroundLightColor: H,
    premiumBackgroundColor: Y,
    premiumForegroundColor: W,
    sizeAdjustment: K
  } = D[j];
  if (null == B) return null;
  k.premium && (t = W, n = Y);
  let z = (0, c.wj)(M) ? V : H,
    q = (0, c.wj)(M) ? Z : F;
  t = null != t ? t : z, n = null != n ? n : q;
  let X = Math.floor(.75 * w) - (null != K ? K : 0);
  return <u.ua7 color={l} position={d} aria-label={C} text={(0, r.jsx)(x, {
      badgeType: j,
      guildTraits: k
    })} tooltipContentClassName={S.tooltipRemovePadding}>{e => (0, r.jsx)(u.P3F, {
      onClick: G,
      tabIndex: U ? 0 : false,
      children: (0, r.jsx)(_.Z, R(N({}, e), {
        className: g,
        flowerStarClassName: E,
        allowFullSizedIcon: true,
        color: null != n ? n : T,
        stroke: v,
        size: w,
        children: (0, r.jsx)(B, {
          size: "custom",
          width: X,
          height: X,
          className: b,
          color: null != t ? t : "currentColor"
        })
      }))
    })}</u.ua7>
}