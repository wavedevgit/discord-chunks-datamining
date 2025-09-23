/** Chunk was on 47387 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
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
  Chunk643930 = require("./643930.js");

function I(e) {
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

function w(e, t) {
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
  A = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  C = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  R = {
    opacity: 0
  },
  x = {
    opacity: 1
  },
  N = {
    borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
  },
  T = {
    borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
  },
  D = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  M = e => {
    let t, i, {
        participant: o,
        isUpsellEnabled: u,
        shape: d,
        size: g,
        didTrackUpsellViewed: P,
        setDidTrackUpsellViewed: A,
        className: C,
        premiumIndicator: R,
        quality: x
      } = e,
      {
        analyticsLocations: N
      } = (0, m.ZP)(),
      T = null != (0, h.Z)(o);
    try {
      t = (0, O.nG)(x)
    } catch (e) {
      t = false
    }
    try {
      i = (0, O.tR)(x)
    } catch (e) {
      i = false
    }
    let D = t || i,
      {
        location: M
      } = (0, p.O)(),
      L = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
      F = u && !v.ZP.isPremium(L, _.p9.TIER_1) && !v.ZP.canStreamQuality(v.ZP.StreamQuality.MID, L),
      k = l.useCallback(() => {
        F && D && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, w(I({}, t), {
            analyticsSource: M
          }))
        })
      }, [F, D, M]);
    if (l.useEffect(() => {
        !P && D && (S.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
          type: _.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: N
        }), A(true))
      }, [t, i, D, P, A, N]), null == x) return null;
    let V = (0, r.jsx)(f.ua7, {
      text: T ? j.intl.string(j.t.q8TiVl) : D ? j.intl.string(j.t.IHgpEh) : j.intl.string(j.t.vLb0VV),
      position: "bottom",
      color: f.ua7.Colors.GREY,
      children: e => (0, r.jsxs)(f.P3F, w(I({}, e), {
        onClick: k,
        className: a()(Z.qualityIndicator, g, E.eE[d], T ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, {
          [Z.clickable]: F && D
        }),
        children: [D ? (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: Z.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: Z.qualityResolution,
          children: (0, O.ml)(x.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, O.bp)(x.maxFrameRate)
        })]
      }))
    });
    return (0, r.jsx)(f.IGR, {
      text: V,
      className: a()(C, Z.qualityIndicatorBadge, {
        [Z.qualityIndicatorBadgePremium]: D && R
      }),
      color: c.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: E.eE[d]
    })
  },
  L = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = true,
      size: u,
      className: s,
      premiumIndicator: c
    } = e, [d, p] = l.useState(false), m = (0, O.W3)(t), {
      reducedMotion: b
    } = l.useContext(f.Sfi), S = n && null != m;
    l.useEffect(() => {
      (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let v = (0, f.Yzy)(S, {
        enter: {
          from: b.enabled ? R : A,
          to: b.enabled ? x : C
        },
        leave: b.enabled ? R : A,
        config: D
      }, "animate-always"),
      h = (0, f.q_F)({
        to: S ? T : N,
        config: D
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: l
      } = e;
      return (0, r.jsxs)("div", w(I({
        className: a()(Z.streamQualityIndicator, n)
      }, l), {
        children: [v((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(M, {
            className: Z.liveQualityIndicator,
            participant: t,
            size: u,
            shape: f.Dv2.ROUND_LEFT,
            isUpsellEnabled: i,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: p,
            premiumIndicator: c,
            quality: m
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: h,
          className: Z.liveIndicator,
          children: (0, r.jsx)(E.ZP, {
            look: E.jZ.RED,
            size: u,
            shape: S ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }