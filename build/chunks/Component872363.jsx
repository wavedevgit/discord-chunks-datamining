/** Chunk was on 31748 **/
/** chunk id: 872363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk23339 = require("./23339.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk402216 = require("./402216.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk650338 = require("./650338.js"),
  Chunk821715 = require("./821715.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176273 = require("./176273.js");

function C(e) {
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

function N(e, t) {
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
let I = (0, Chunk23339.xI)(Chunk319060.A.LIVE_INDICATOR_BORDER_RADIUS),
  j = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  T = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  w = {
    opacity: 0
  },
  P = {
    opacity: 1
  },
  R = {
    borderRadius: "".concat(I, "px ").concat(I, "px ").concat(I, "px ").concat(I, "px")
  },
  D = {
    borderRadius: "0px ".concat(I, "px ").concat(I, "px 0px")
  },
  k = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  L = e => {
    let t, i, {
        participant: o,
        isUpsellEnabled: s,
        shape: f,
        size: I,
        didTrackUpsellViewed: j,
        setDidTrackUpsellViewed: T,
        className: w,
        premiumIndicator: P,
        quality: R
      } = e,
      {
        analyticsLocations: D
      } = (0, m.Ay)(),
      k = null != (0, E.A)(o);
    try {
      t = (0, b.HB)(R)
    } catch (e) {
      t = false
    }
    try {
      i = (0, b.OI)(R)
    } catch (e) {
      i = false
    }
    let L = t || i,
      {
        location: M
      } = (0, g.p)(),
      U = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
      V = s && !A.Ay.isPremium(U, O.PremiumTypes.TIER_1) && !A.Ay.canStreamQuality(A.Ay.StreamQuality.MID, U),
      F = l.useCallback(() => {
        V && L && (0, p.mMO)(async () => {
          let {
            default: e
          } = await n.e("18630").then(n.bind(n, 826789));
          return t => (0, r.jsx)(e, N(C({}, t), {
            analyticsSource: M
          }))
        })
      }, [V, L, M]);
    if (l.useEffect(() => {
        !j && L && (y.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
          type: O.e.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: D
        }), T(true))
      }, [t, i, L, j, T, D]), null == R) return null;
    let G = (0, r.jsx)(d.m, {
      text: k ? x.intl.string(x.t.q8TiVt) : L ? x.intl.string(x.t.IHgpEn) : x.intl.string(x.t.vLb0VW),
      position: "bottom",
      children: (0, r.jsxs)(p.DUT, {
        onClick: F,
        className: a()(S.t5, I, _.u1[f], k ? S.Y5 : S.Lc, {
          [S.vk]: V && L
        }),
        children: [L ? (0, r.jsx)(p.tvc, {
          size: "md",
          color: "currentColor",
          className: S.fY
        }) : null, (0, r.jsx)("span", {
          className: S.UD,
          children: (0, b.ME)(R.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, b.Bs)(R.maxFrameRate)
        })]
      })
    });
    return (0, r.jsx)(p.LpS, {
      text: G,
      className: a()(w, S.AA, {
        [S.Dc]: L && P
      }),
      color: u.A.unsafe_rawColors.PRIMARY_500.css,
      shape: _.u1[f]
    })
  },
  M = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = true,
      size: s,
      className: c,
      premiumIndicator: u
    } = e, [d, f] = l.useState(false), g = (0, b.N5)(t), {
      reducedMotion: m
    } = l.useContext(p.CZY), h = n && null != g, y = (0, p.pnh)(h, {
      enter: {
        from: m.enabled ? w : j,
        to: m.enabled ? P : T
      },
      leave: m.enabled ? w : j,
      config: k
    }, "animate-always"), A = (0, p.zhh)({
      to: h ? D : R,
      config: k
    }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: l
      } = e;
      return (0, r.jsxs)("div", N(C({
        className: a()(S.dr, n)
      }, l), {
        children: [y((e, n) => n ? (0, r.jsx)(o.animated.div, {
          style: e,
          children: (0, r.jsx)(L, {
            className: S.LZ,
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
          style: A,
          className: S.Ok,
          children: (0, r.jsx)(_.Ay, {
            look: _.gv.RED,
            size: s,
            shape: h ? p.EGs.ROUND_RIGHT : p.EGs.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }