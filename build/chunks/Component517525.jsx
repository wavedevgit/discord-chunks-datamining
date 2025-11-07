/** Chunk was on 86642 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
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
  L = e => {
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
        location: L
      } = (0, h.O)(),
      k = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
      U = s && !_.ZP.isPremium(k, E.PremiumTypes.TIER_1) && !_.ZP.canStreamQuality(_.ZP.StreamQuality.MID, k),
      F = r.useCallback(() => {
        U && D && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, i.jsx)(e, I(P({}, t), {
            analyticsSource: L
          }))
        })
      }, [U, D, L]);
    if (r.useEffect(() => {
        !Z && D && (C.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
          type: E.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: M
        }), T(true))
      }, [t, l, D, Z, T, M]), null == w) return null;
    let V = (0, i.jsx)(d.u, {
      text: R ? j.intl.string(j.t.q8TiVt) : D ? j.intl.string(j.t.IHgpEn) : j.intl.string(j.t.vLb0VW),
      position: "bottom",
      children: (0, i.jsxs)(f.P3F, {
        onClick: F,
        className: a()(S.qualityIndicator, b, g.eE[p], R ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
          [S.clickable]: U && D
        }),
        children: [D ? (0, i.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: S.premiumStreamIcon
        }) : null, (0, i.jsx)("span", {
          className: S.qualityResolution,
          children: (0, v.ml)(w.maxResolution)
        }), (0, i.jsx)("span", {
          children: (0, v.bp)(w.maxFrameRate)
        })]
      })
    });
    return (0, i.jsx)(f.IGR, {
      text: V,
      className: a()(N, S.qualityIndicatorBadge, {
        [S.qualityIndicatorBadgePremium]: D && A
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: g.eE[p]
    })
  },
  k = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: l = true,
      size: s,
      className: c,
      premiumIndicator: u
    } = e, [d, p] = r.useState(false), h = (0, v.W3)(t), {
      reducedMotion: m
    } = r.useContext(f.Sfi), y = n && null != h;
    r.useEffect(() => {
      (0, b.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let C = (0, f.Yzy)(y, {
        enter: {
          from: m.enabled ? A : T,
          to: m.enabled ? w : N
        },
        leave: m.enabled ? A : T,
        config: D
      }, "animate-always"),
      _ = (0, f.q_F)({
        to: y ? R : M,
        config: D
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: r
      } = e;
      return (0, i.jsxs)("div", I(P({
        className: a()(S.streamQualityIndicator, n)
      }, r), {
        children: [C((e, n) => n ? (0, i.jsx)(o.animated.div, {
          style: e,
          children: (0, i.jsx)(L, {
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
        }) : null), (0, i.jsx)(o.animated.div, {
          style: _,
          className: S.liveIndicator,
          children: (0, i.jsx)(g.ZP, {
            look: g.jZ.RED,
            size: s,
            shape: y ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }