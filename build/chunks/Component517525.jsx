/** Chunk was on 17360 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
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
  Chunk643930 = require("./643930.js");

function P(e) {
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

function j(e, t) {
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
let Z = (0, Chunk468194.Mg)(Chunk477690.Z.LIVE_INDICATOR_BORDER_RADIUS),
  R = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  x = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  A = {
    opacity: 0
  },
  T = {
    opacity: 1
  },
  N = {
    borderRadius: "".concat(Z, "px ").concat(Z, "px ").concat(Z, "px ").concat(Z, "px")
  },
  D = {
    borderRadius: "0px ".concat(Z, "px ").concat(Z, "px 0px")
  },
  M = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  k = e => {
    let t, l, {
        participant: o,
        isUpsellEnabled: c,
        shape: f,
        size: v,
        didTrackUpsellViewed: Z,
        setDidTrackUpsellViewed: R,
        className: x,
        premiumIndicator: A,
        quality: T
      } = e,
      {
        analyticsLocations: N
      } = (0, m.ZP)(),
      D = null != (0, y.Z)(o);
    try {
      t = (0, S.nG)(T)
    } catch (e) {
      t = false
    }
    try {
      l = (0, S.tR)(T)
    } catch (e) {
      l = false
    }
    let M = t || l,
      {
        location: k
      } = (0, _.O)(),
      F = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
      L = c && !h.ZP.isPremium(F, I.PremiumTypes.TIER_1) && !h.ZP.canStreamQuality(h.ZP.StreamQuality.MID, F),
      V = i.useCallback(() => {
        L && M && (0, p.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, j(P({}, t), {
            analyticsSource: k
          }))
        })
      }, [L, M, k]);
    if (i.useEffect(() => {
        !Z && M && (E.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
          type: I.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: N
        }), R(true))
      }, [t, l, M, Z, R, N]), null == T) return null;
    let U = (0, r.jsx)(d.u, {
      text: D ? C.intl.string(C.t.q8TiVt) : M ? C.intl.string(C.t.IHgpEn) : C.intl.string(C.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.P3F, {
        onClick: V,
        className: a()(w.qualityIndicator, v, g.eE[f], D ? w.qualityIndicatorLowQuality : w.qualityIndicatorFullQuality, {
          [w.clickable]: L && M
        }),
        children: [M ? (0, r.jsx)(p.SrA, {
          size: "md",
          color: "currentColor",
          className: w.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: w.qualityResolution,
          children: (0, S.ml)(T.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, S.bp)(T.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.IGR, {
      text: U,
      className: a()(x, w.qualityIndicatorBadge, {
        [w.qualityIndicatorBadgePremium]: M && A
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: g.eE[f]
    })
  },
  F = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: l = true,
      size: c,
      className: s,
      premiumIndicator: u
    } = e, [d, f] = i.useState(false), _ = (0, S.W3)(t), {
      reducedMotion: m
    } = i.useContext(p.Sfi), b = n && null != _;
    i.useEffect(() => {
      (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let E = (0, p.Yzy)(b, {
        enter: {
          from: m.enabled ? A : R,
          to: m.enabled ? T : x
        },
        leave: m.enabled ? A : R,
        config: M
      }, "animate-always"),
      h = (0, p.q_F)({
        to: b ? D : N,
        config: M
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", j(P({
        className: a()(w.streamQualityIndicator, n)
      }, i), {
        children: [E((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(k, {
            className: w.liveQualityIndicator,
            participant: t,
            size: c,
            shape: p.Dv2.ROUND_LEFT,
            isUpsellEnabled: l,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: f,
            premiumIndicator: u,
            quality: _
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: h,
          className: w.liveIndicator,
          children: (0, r.jsx)(g.ZP, {
            look: g.jZ.RED,
            size: c,
            shape: b ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }