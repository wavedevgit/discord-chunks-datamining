/** Chunk was on 88647 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
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
  Chunk386393 = require("./386393.js");

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

function I(e, t) {
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
  T = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  N = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  A = {
    opacity: 0
  },
  w = {
    opacity: 1
  },
  M = {
    borderRadius: "".concat(Z, "px ").concat(Z, "px ").concat(Z, "px ").concat(Z, "px")
  },
  R = {
    borderRadius: "0px ".concat(Z, "px ").concat(Z, "px 0px")
  },
  D = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  k = e => {
    let t, l, {
        participant: o,
        isUpsellEnabled: s,
        shape: p,
        size: b,
        didTrackUpsellViewed: Z,
        setDidTrackUpsellViewed: T,
        className: N,
        premiumIndicator: A,
        quality: w
      } = e,
      {
        analyticsLocations: M
      } = (0, m.ZP)(),
      R = null != (0, x.Z)(o);
    try {
      t = (0, v.nG)(w)
    } catch (e) {
      t = false
    }
    try {
      l = (0, v.tR)(w)
    } catch (e) {
      l = false
    }
    let D = t || l,
      {
        location: k
      } = (0, h.O)(),
      L = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
      U = s && !C.ZP.isPremium(L, E.PremiumTypes.TIER_1) && !C.ZP.canStreamQuality(C.ZP.StreamQuality.MID, L),
      B = i.useCallback(() => {
        U && D && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, I(P({}, t), {
            analyticsSource: k
          }))
        })
      }, [U, D, k]);
    if (i.useEffect(() => {
        !Z && D && (y.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
          type: E.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: M
        }), T(true))
      }, [t, l, D, Z, T, M]), null == w) return null;
    let F = (0, r.jsx)(d.u, {
      text: R ? j.intl.string(j.t.q8TiVt) : D ? j.intl.string(j.t.IHgpEn) : j.intl.string(j.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(f.P3F, {
        onClick: B,
        className: a()(S.qualityIndicator, b, g.eE[p], R ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
          [S.clickable]: U && D
        }),
        children: [D ? (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: S.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: S.qualityResolution,
          children: (0, v.ml)(w.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, v.bp)(w.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(f.IGR, {
      text: F,
      className: a()(N, S.qualityIndicatorBadge, {
        [S.qualityIndicatorBadgePremium]: D && A
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: g.eE[p]
    })
  },
  L = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: l = true,
      size: s,
      className: c,
      premiumIndicator: u
    } = e, [d, p] = i.useState(false), h = (0, v.W3)(t), {
      reducedMotion: m
    } = i.useContext(f.Sfi), _ = n && null != h;
    i.useEffect(() => {
      (0, b.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let y = (0, f.Yzy)(_, {
        enter: {
          from: m.enabled ? A : T,
          to: m.enabled ? w : N
        },
        leave: m.enabled ? A : T,
        config: D
      }, "animate-always"),
      C = (0, f.q_F)({
        to: _ ? R : M,
        config: D
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", I(P({
        className: a()(S.streamQualityIndicator, n)
      }, i), {
        children: [y((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(k, {
            className: S.liveQualityIndicator,
            participant: t,
            size: s,
            shape: f.Dv2.ROUND_LEFT,
            isUpsellEnabled: l,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: p,
            premiumIndicator: u,
            quality: h
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: C,
          className: S.liveIndicator,
          children: (0, r.jsx)(g.ZP, {
            look: g.jZ.RED,
            size: s,
            shape: _ ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }