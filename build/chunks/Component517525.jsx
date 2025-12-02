/** Chunk was on 46931 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk253179 = require("./253179.js"),
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
let j = (0, Chunk468194.Mg)(Chunk477690.Z.LIVE_INDICATOR_BORDER_RADIUS),
  Z = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  R = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  T = {
    opacity: 0
  },
  A = {
    opacity: 1
  },
  N = {
    borderRadius: "".concat(j, "px ").concat(j, "px ").concat(j, "px ").concat(j, "px")
  },
  D = {
    borderRadius: "0px ".concat(j, "px ").concat(j, "px 0px")
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
        didTrackUpsellViewed: j,
        setDidTrackUpsellViewed: Z,
        className: R,
        premiumIndicator: T,
        quality: A
      } = e,
      {
        analyticsLocations: N
      } = (0, _.ZP)(),
      D = null != (0, S.Z)(o);
    try {
      t = (0, y.nG)(A)
    } catch (e) {
      t = false
    }
    try {
      l = (0, y.tR)(A)
    } catch (e) {
      l = false
    }
    let M = t || l,
      {
        location: k
      } = (0, m.O)(),
      L = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
      F = c && !E.ZP.isPremium(L, C.PremiumTypes.TIER_1) && !E.ZP.canStreamQuality(E.ZP.StreamQuality.MID, L),
      V = i.useCallback(() => {
        F && M && (0, p.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, x(P({}, t), {
            analyticsSource: k
          }))
        })
      }, [F, M, k]);
    if (i.useEffect(() => {
        !j && M && (h.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
          type: C.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: N
        }), Z(true))
      }, [t, l, M, j, Z, N]), null == A) return null;
    let U = (0, r.jsx)(d.u, {
      text: D ? w.intl.string(w.t.q8TiVt) : M ? w.intl.string(w.t.IHgpEn) : w.intl.string(w.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.P3F, {
        onClick: V,
        className: a()(I.qualityIndicator, v, g.eE[f], D ? I.qualityIndicatorLowQuality : I.qualityIndicatorFullQuality, {
          [I.clickable]: F && M
        }),
        children: [M ? (0, r.jsx)(p.SrA, {
          size: "md",
          color: "currentColor",
          className: I.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: I.qualityResolution,
          children: (0, y.ml)(A.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, y.bp)(A.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.IGR, {
      text: U,
      className: a()(R, I.qualityIndicatorBadge, {
        [I.qualityIndicatorBadgePremium]: M && T
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: g.eE[f]
    })
  },
  L = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: l = true,
      size: c,
      className: s,
      premiumIndicator: u
    } = e, [d, f] = i.useState(false), m = (0, y.W3)(t), {
      reducedMotion: _
    } = i.useContext(p.Sfi), b = n && null != m;
    i.useEffect(() => {
      (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let h = (0, p.Yzy)(b, {
        enter: {
          from: _.enabled ? T : Z,
          to: _.enabled ? A : R
        },
        leave: _.enabled ? T : Z,
        config: M
      }, "animate-always"),
      E = (0, p.q_F)({
        to: b ? D : N,
        config: M
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", x(P({
        className: a()(I.streamQualityIndicator, n)
      }, i), {
        children: [h((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(k, {
            className: I.liveQualityIndicator,
            participant: t,
            size: c,
            shape: p.Dv2.ROUND_LEFT,
            isUpsellEnabled: l,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: f,
            premiumIndicator: u,
            quality: m
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: E,
          className: I.liveIndicator,
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