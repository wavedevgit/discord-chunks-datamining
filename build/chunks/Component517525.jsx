/** Chunk was on web.js **/
/** chunk id: 517525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
  Chunk374336 = require("./374336.js");

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
let P = (0, Chunk468194.Mg)(Chunk477690.Z.LIVE_INDICATOR_BORDER_RADIUS),
  w = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  D = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  L = {
    opacity: 0
  },
  x = {
    opacity: 1
  },
  M = {
    borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
  },
  k = {
    borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
  },
  j = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  U = e => {
    let t, o, {
        participant: s,
        isUpsellEnabled: l,
        shape: d,
        size: m,
        didTrackUpsellViewed: A,
        setDidTrackUpsellViewed: C,
        className: P,
        premiumIndicator: w,
        quality: D
      } = e,
      {
        analyticsLocations: L
      } = (0, p.ZP)(),
      x = null != (0, O.Z)(s);
    try {
      t = (0, y.nG)(D)
    } catch (e) {
      t = false
    }
    try {
      o = (0, y.tR)(D)
    } catch (e) {
      o = false
    }
    let M = t || o,
      {
        location: k
      } = (0, _.O)(),
      j = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
      U = l && !b.ZP.isPremium(j, I.p9.TIER_1) && !b.ZP.canStreamQuality(b.ZP.StreamQuality.MID, j),
      G = i.useCallback(() => {
        U && M && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, R(N({}, t), {
            analyticsSource: k
          }))
        })
      }, [U, M, k]),
      B = () => x ? T.intl.string(T.t.q8TiVl) : M ? T.intl.string(T.t.IHgpEh) : T.intl.string(T.t.vLb0VV);
    if (i.useEffect(() => {
        !A && M && (E.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
          type: I.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: o,
          location_stack: L
        }), C(true))
      }, [t, o, M, A, C, L]), null == D) return null;
    let Z = (0, r.jsx)(f.ua7, {
      text: B(),
      position: "bottom",
      color: f.ua7.Colors.GREY,
      children: e => (0, r.jsxs)(f.P3F, R(N({}, e), {
        onClick: G,
        className: a()(S.qualityIndicator, m, h.eE[d], x ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
          [S.clickable]: U && M
        }),
        children: [M ? (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: S.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: S.qualityResolution,
          children: (0, y.ml)(D.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, y.bp)(D.maxFrameRate)
        })]
      }))
    });
    return (0, r.jsx)(f.IGR, {
      text: Z,
      className: a()(P, S.qualityIndicatorBadge, {
        [S.qualityIndicatorBadgePremium]: M && w
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: h.eE[d]
    })
  },
  G = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: o = true,
      size: l,
      className: c,
      premiumIndicator: u
    } = e, [d, _] = i.useState(false), p = (0, y.W3)(t), {
      reducedMotion: g
    } = i.useContext(f.Sfi), E = n && null != p;
    i.useEffect(() => {
      (0, m.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let b = (0, f.Yzy)(E, {
        enter: {
          from: g.enabled ? L : w,
          to: g.enabled ? x : D
        },
        leave: g.enabled ? L : w,
        config: j
      }, "animate-always"),
      O = (0, f.q_F)({
        to: E ? k : M,
        config: j
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: i
      } = e;
      return (0, r.jsxs)("div", R(N({
        className: a()(S.streamQualityIndicator, n)
      }, i), {
        children: [b((e, n) => n ? (0, r.jsx)(s.animated.div, {
          style: e,
          children: (0, r.jsx)(U, {
            className: S.liveQualityIndicator,
            participant: t,
            size: l,
            shape: f.Dv2.ROUND_LEFT,
            isUpsellEnabled: o,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: _,
            premiumIndicator: u,
            quality: p
          })
        }) : null), (0, r.jsx)(s.animated.div, {
          style: O,
          className: S.liveIndicator,
          children: (0, r.jsx)(h.ZP, {
            look: h.jZ.RED,
            size: l,
            shape: E ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }