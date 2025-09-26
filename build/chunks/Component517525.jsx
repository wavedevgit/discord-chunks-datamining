/** Chunk was on 92592 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk786920 = require("./786920.js"),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk386393 = require("./386393.js");

function j(e) {
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

function C(e, t) {
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
  R = {
    borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
  },
  N = {
    borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
  },
  D = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  M = e => {
    let t, l, {
        participant: o,
        isUpsellEnabled: c,
        shape: d,
        size: g,
        didTrackUpsellViewed: P,
        setDidTrackUpsellViewed: Z,
        className: x,
        premiumIndicator: A,
        quality: T
      } = e,
      {
        analyticsLocations: R
      } = (0, m.ZP)(),
      N = null != (0, y.Z)(o);
    try {
      t = (0, h.nG)(T)
    } catch (e) {
      t = false
    }
    try {
      l = (0, h.tR)(T)
    } catch (e) {
      l = false
    }
    let D = t || l,
      {
        location: M
      } = (0, p.O)(),
      k = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
      F = c && !E.ZP.isPremium(k, O.p9.TIER_1) && !E.ZP.canStreamQuality(E.ZP.StreamQuality.MID, k),
      L = i.useCallback(() => {
        F && D && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, C(j({}, t), {
            analyticsSource: M
          }))
        })
      }, [F, D, M]);
    if (i.useEffect(() => {
        !P && D && (v.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
          type: O.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: R
        }), Z(true))
      }, [t, l, D, P, Z, R]), null == T) return null;
    let V = (0, r.jsx)(f.ua7, {
      text: N ? I.intl.string(I.t.q8TiVl) : D ? I.intl.string(I.t.IHgpEh) : I.intl.string(I.t.vLb0VV),
      position: "bottom",
      color: f.ua7.Colors.GREY,
      children: e => (0, r.jsxs)(f.P3F, C(j({}, e), {
        onClick: L,
        className: a()(w.qualityIndicator, g, _.eE[d], N ? w.qualityIndicatorLowQuality : w.qualityIndicatorFullQuality, {
          [w.clickable]: F && D
        }),
        children: [D ? (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: w.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: w.qualityResolution,
          children: (0, h.ml)(T.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, h.bp)(T.maxFrameRate)
        })]
      }))
    });
    return (0, r.jsx)(f.IGR, {
      text: V,
      className: a()(x, w.qualityIndicatorBadge, {
        [w.qualityIndicatorBadgePremium]: D && A
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: _.eE[d]
    })
  },
  k = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: l = true,
      size: c,
      className: s,
      premiumIndicator: u
    } = e, [d, p] = i.useState(false), m = (0, h.W3)(t), {
      reducedMotion: b
    } = i.useContext(f.Sfi), v = n && null != m;
    i.useEffect(() => {
      (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let E = (0, f.Yzy)(v, {
        enter: {
          from: b.enabled ? A : Z,
          to: b.enabled ? T : x
        },
        leave: b.enabled ? A : Z,
        config: D
      }, "animate-always"),
      y = (0, f.q_F)({
        to: v ? N : R,
        config: D
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", C(j({
        className: a()(w.streamQualityIndicator, n)
      }, i), {
        children: [E((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(M, {
            className: w.liveQualityIndicator,
            participant: t,
            size: c,
            shape: f.Dv2.ROUND_LEFT,
            isUpsellEnabled: l,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: p,
            premiumIndicator: u,
            quality: m
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: y,
          className: w.liveIndicator,
          children: (0, r.jsx)(_.ZP, {
            look: _.jZ.RED,
            size: c,
            shape: v ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }