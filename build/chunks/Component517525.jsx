/** Chunk was on 69813 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk194082 = require("./194082.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk557457 = require("./557457.js"),
  Chunk475674 = require("./475674.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740767 = require("./740767.js");

function T(e) {
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

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = (0, Chunk468194.Mg)(Chunk477690.Z.LIVE_INDICATOR_BORDER_RADIUS),
  Z = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  j = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  w = {
    opacity: 0
  },
  A = {
    opacity: 1
  },
  R = {
    borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
  },
  D = {
    borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
  },
  M = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  k = e => {
    let t, i, {
        participant: o,
        isUpsellEnabled: c,
        shape: f,
        size: h,
        didTrackUpsellViewed: P,
        setDidTrackUpsellViewed: Z,
        className: j,
        premiumIndicator: w,
        quality: A
      } = e,
      {
        analyticsLocations: R
      } = (0, b.ZP)(),
      D = null != (0, O.Z)(o);
    try {
      t = (0, y.nG)(A)
    } catch (e) {
      t = false
    }
    try {
      i = (0, y.tR)(A)
    } catch (e) {
      i = false
    }
    let M = t || i,
      {
        location: k
      } = (0, g.O)(),
      L = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
      U = c && !_.ZP.isPremium(L, C.PremiumTypes.TIER_1) && !_.ZP.canStreamQuality(_.ZP.StreamQuality.MID, L),
      F = l.useCallback(() => {
        U && M && (0, p.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, x(T({}, t), {
            analyticsSource: k
          }))
        })
      }, [U, M, k]);
    if (l.useEffect(() => {
        !P && M && (v.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
          type: C.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: R
        }), Z(true))
      }, [t, i, M, P, Z, R]), null == A) return null;
    let V = (0, r.jsx)(d.u, {
      text: D ? I.intl.string(I.t.q8TiVt) : M ? I.intl.string(I.t.IHgpEn) : I.intl.string(I.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.P3F, {
        onClick: F,
        className: a()(N.qualityIndicator, h, m.eE[f], D ? N.qualityIndicatorLowQuality : N.qualityIndicatorFullQuality, {
          [N.clickable]: U && M
        }),
        children: [M ? (0, r.jsx)(p.SrA, {
          size: "md",
          color: "currentColor",
          className: N.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: N.qualityResolution,
          children: (0, y.ml)(A.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, y.bp)(A.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.IGR, {
      text: V,
      className: a()(j, N.qualityIndicatorBadge, {
        [N.qualityIndicatorBadgePremium]: M && w
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: m.eE[f]
    })
  },
  L = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = true,
      size: c,
      className: s,
      premiumIndicator: u
    } = e, [d, f] = l.useState(false), g = (0, y.W3)(t), {
      reducedMotion: b
    } = l.useContext(p.Sfi), E = n && null != g;
    l.useEffect(() => {
      (0, h.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let v = (0, p.Yzy)(E, {
        enter: {
          from: b.enabled ? w : Z,
          to: b.enabled ? A : j
        },
        leave: b.enabled ? w : Z,
        config: M
      }, "animate-always"),
      _ = (0, p.q_F)({
        to: E ? D : R,
        config: M
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: l
      } = e;
      return (0, r.jsxs)("div", x(T({
        className: a()(N.streamQualityIndicator, n)
      }, l), {
        children: [v((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(k, {
            className: N.liveQualityIndicator,
            participant: t,
            size: c,
            shape: p.Dv2.ROUND_LEFT,
            isUpsellEnabled: i,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: f,
            premiumIndicator: u,
            quality: g
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: _,
          className: N.liveIndicator,
          children: (0, r.jsx)(m.ZP, {
            look: m.jZ.RED,
            size: c,
            shape: E ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }