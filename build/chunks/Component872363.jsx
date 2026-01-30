/** Chunk was on 31748 **/
/** chunk id: 872363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
  Chunk23339 = require("./23339.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk402216 = require("./402216.jsx"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk650338 = require("./650338.js"),
  Chunk821715 = require("./821715.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176273 = require("./176273.js");

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
let j = (0, Chunk23339.xI)(Chunk319060.A.LIVE_INDICATOR_BORDER_RADIUS),
  T = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  w = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  P = {
    opacity: 0
  },
  R = {
    opacity: 1
  },
  D = {
    borderRadius: "".concat(j, "px ").concat(j, "px ").concat(j, "px ").concat(j, "px")
  },
  k = {
    borderRadius: "0px ".concat(j, "px ").concat(j, "px 0px")
  },
  L = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  M = e => {
    let t, i, {
        participant: o,
        isUpsellEnabled: s,
        shape: f,
        size: h,
        didTrackUpsellViewed: j,
        setDidTrackUpsellViewed: T,
        className: w,
        premiumIndicator: P,
        quality: R
      } = e,
      {
        analyticsLocations: D
      } = (0, m.Ay)(),
      k = null != (0, v.A)(o);
    try {
      t = (0, E.HB)(R)
    } catch (e) {
      t = false
    }
    try {
      i = (0, E.OI)(R)
    } catch (e) {
      i = false
    }
    let L = t || i,
      {
        location: M
      } = (0, g.p)(),
      U = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
      V = s && !b.Ay.isPremium(U, x.PremiumTypes.TIER_1) && !b.Ay.canStreamQuality(b.Ay.StreamQuality.MID, U),
      F = l.useCallback(() => {
        V && L && (0, p.mMO)(async () => {
          let {
            default: e
          } = await n.e("18630").then(n.bind(n, 826789));
          return t => (0, r.jsx)(e, I(N({}, t), {
            analyticsSource: M
          }))
        })
      }, [V, L, M]);
    if (l.useEffect(() => {
        !j && L && (A.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
          type: x.e.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: D
        }), T(true))
      }, [t, i, L, j, T, D]), null == R) return null;
    let G = (0, r.jsx)(d.m, {
      text: k ? S.intl.string(S.t.q8TiVt) : L ? S.intl.string(S.t.IHgpEn) : S.intl.string(S.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.DUT, {
        onClick: F,
        className: a()(C.t5, h, _.u1[f], k ? C.Y5 : C.Lc, {
          [C.vk]: V && L
        }),
        children: [L ? (0, r.jsx)(p.tvc, {
          size: "md",
          color: "currentColor",
          className: C.fY
        }) : null, (0, r.jsx)("span", {
          className: C.UD,
          children: (0, E.ME)(R.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, E.Bs)(R.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.LpS, {
      text: G,
      className: a()(w, C.AA, {
        [C.Dc]: L && P
      }),
      color: u.A.unsafe_rawColors.PRIMARY_500.css,
      shape: _.u1[f]
    })
  },
  U = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = true,
      size: s,
      className: c,
      premiumIndicator: u
    } = e, [d, f] = l.useState(false), g = (0, E.N5)(t), {
      reducedMotion: m
    } = l.useContext(p.CZY), y = n && null != g;
    l.useEffect(() => {
      (0, h.A)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: true
      })
    }, [t]);
    let A = (0, p.pnh)(y, {
        enter: {
          from: m.enabled ? P : T,
          to: m.enabled ? R : w
        },
        leave: m.enabled ? P : T,
        config: L
      }, "animate-always"),
      b = (0, p.zhh)({
        to: y ? k : D,
        config: L
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: l
      } = e;
      return (0, r.jsxs)("div", I(N({
        className: a()(C.dr, n)
      }, l), {
        children: [A((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(M, {
            className: C.LZ,
            participant: t,
            size: s,
            shape: p.EGs.ROUND_LEFT,
            isUpsellEnabled: i,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: f,
            premiumIndicator: u,
            quality: g
          })
        }) : null), (0, r.jsx)(o.animated.div, {
          style: b,
          className: C.Ok,
          children: (0, r.jsx)(_.Ay, {
            look: _.gv.RED,
            size: s,
            shape: y ? p.EGs.ROUND_RIGHT : p.EGs.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }