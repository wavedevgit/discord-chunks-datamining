/** Chunk was on 56785 **/
/** chunk id: 517525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
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

function Z(e, t) {
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
  x = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  A = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  T = {
    opacity: 0
  },
  R = {
    opacity: 1
  },
  N = {
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
    let t, l, {
        participant: o,
        isUpsellEnabled: c,
        shape: f,
        size: b,
        didTrackUpsellViewed: P,
        setDidTrackUpsellViewed: x,
        className: A,
        premiumIndicator: T,
        quality: R
      } = e,
      {
        analyticsLocations: N
      } = (0, _.ZP)(),
      D = null != (0, y.Z)(o);
    try {
      t = (0, S.nG)(R)
    } catch (e) {
      t = false
    }
    try {
      l = (0, S.tR)(R)
    } catch (e) {
      l = false
    }
    let M = t || l,
      {
        location: k
      } = (0, m.O)(),
      F = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
      L = c && !h.ZP.isPremium(F, I.p9.TIER_1) && !h.ZP.canStreamQuality(h.ZP.StreamQuality.MID, F),
      V = i.useCallback(() => {
        L && M && (0, p.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, Z(j({}, t), {
            analyticsSource: k
          }))
        })
      }, [L, M, k]);
    if (i.useEffect(() => {
        !P && M && (v.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
          type: I.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: l,
          location_stack: N
        }), x(true))
      }, [t, l, M, P, x, N]), null == R) return null;
    let U = (0, r.jsx)(d.u, {
      text: D ? C.intl.string(C.t.q8TiVl) : M ? C.intl.string(C.t.IHgpEh) : C.intl.string(C.t.vLb0VV),
      position: "bottom",
      children: (0, r.jsxs)(p.P3F, {
        onClick: V,
        className: a()(w.qualityIndicator, b, g.eE[f], D ? w.qualityIndicatorLowQuality : w.qualityIndicatorFullQuality, {
          [w.clickable]: L && M
        }),
        children: [M ? (0, r.jsx)(p.SrA, {
          size: "md",
          color: "currentColor",
          className: w.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: w.qualityResolution,
          children: (0, S.ml)(R.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, S.bp)(R.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.IGR, {
      text: U,
      className: a()(A, w.qualityIndicatorBadge, {
        [w.qualityIndicatorBadgePremium]: M && T
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
    } = e, [d, f] = i.useState(false), m = (0, S.W3)(t), {
      reducedMotion: _
    } = i.useContext(p.Sfi), E = n && null != m;
    i.useEffect(() => {
      (0, b.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let v = (0, p.Yzy)(E, {
        enter: {
          from: _.enabled ? T : x,
          to: _.enabled ? R : A
        },
        leave: _.enabled ? T : x,
        config: M
      }, "animate-always"),
      h = (0, p.q_F)({
        to: E ? D : N,
        config: M
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", Z(j({
        className: a()(w.streamQualityIndicator, n)
      }, i), {
        children: [v((e, n) => n ? (0, r.jsx)(o.animated.div, {
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
            quality: m
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: h,
          className: w.liveIndicator,
          children: (0, r.jsx)(g.ZP, {
            look: g.jZ.RED,
            size: c,
            shape: E ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND
          })
        })]
      }))
    })({
      className: s
    })
  }