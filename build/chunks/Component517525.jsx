/** Chunk was on 11010 **/
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

function N(e) {
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

function T(e, t) {
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
  P = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  w = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  Z = {
    opacity: 0
  },
  A = {
    opacity: 1
  },
  R = {
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
        size: h,
        didTrackUpsellViewed: j,
        setDidTrackUpsellViewed: P,
        className: w,
        premiumIndicator: Z,
        quality: A
      } = e,
      {
        analyticsLocations: R
      } = (0, m.ZP)(),
      D = null != (0, O.Z)(o);
    try {
      t = (0, _.nG)(A)
    } catch (e) {
      t = false
    }
    try {
      l = (0, _.tR)(A)
    } catch (e) {
      l = false
    }
    let M = t || l,
      {
        location: k
      } = (0, g.O)(),
      L = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
      U = c && !y.ZP.isPremium(L, S.PremiumTypes.TIER_1) && !y.ZP.canStreamQuality(y.ZP.StreamQuality.MID, L),
      F = i.useCallback(() => {
        U && M && (0, p.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, T(N({}, t), {
            analyticsSource: k
          }))
        })
      }, [U, M, k]);
    if (i.useEffect(() => {
        !j && M && (E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
          type: S.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: R
        }), P(true))
      }, [t, l, M, j, P, R]), null == A) return null;
    let V = (0, r.jsx)(d.u, {
      text: D ? x.intl.string(x.t.q8TiVt) : M ? x.intl.string(x.t.IHgpEn) : x.intl.string(x.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.P3F, {
        onClick: F,
        className: a()(I.qualityIndicator, h, b.eE[f], D ? I.qualityIndicatorLowQuality : I.qualityIndicatorFullQuality, {
          [I.clickable]: U && M
        }),
        children: [M ? (0, r.jsx)(p.SrA, {
          size: "md",
          color: "currentColor",
          className: I.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: I.qualityResolution,
          children: (0, _.ml)(A.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, _.bp)(A.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.IGR, {
      text: V,
      className: a()(w, I.qualityIndicatorBadge, {
        [I.qualityIndicatorBadgePremium]: M && Z
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: b.eE[f]
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
    } = e, [d, f] = i.useState(false), g = (0, _.W3)(t), {
      reducedMotion: m
    } = i.useContext(p.Sfi), v = n && null != g;
    i.useEffect(() => {
      (0, h.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let E = (0, p.Yzy)(v, {
        enter: {
          from: m.enabled ? Z : P,
          to: m.enabled ? A : w
        },
        leave: m.enabled ? Z : P,
        config: M
      }, "animate-always"),
      y = (0, p.q_F)({
        to: v ? D : R,
        config: M
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", T(N({
        className: a()(I.streamQualityIndicator, n)
      }, i), {
        children: [E((e, n) => n ? (0, r.jsx)(o.animated.div, {
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
            quality: g
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: y,
          className: I.liveIndicator,
          children: (0, r.jsx)(b.ZP, {
            look: b.jZ.RED,
            size: c,
            shape: v ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }